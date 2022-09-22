import { Message } from "discord.js";
import {getRedisCmd} from "../../services/redis";
import {Command} from "../../types/command";
import Jimp from 'jimp';
export const top: Command = {
    aliases: ["top"],
    description: "Shows the top 10 players from leaderboard",
    inhibitors: [],
    async run(message) {
        const data = await getRedisCmd();
/*        const array = [
            'smug', '59', 'kakashi',
            '50', 'guy', '49',
            'hinata', '35', 'test1',
            '20', 'mytest', '15',
            'hello', '9', 'akjsbdaa',
            '4', 'ino', '1',
            'fourfour', '1'
        ];*/
       send_image_records_to_discord(message, Array.from(data));

    },
};

/**
 * A very slow function that could imitate a database lookup
 * @returns A random number
 */

async function send_image_records_to_discord(message: Message ,array: string | any[]) {
    const records = [];
    records.push("  \n");
    //records = records.reverse();
    records.push(" "+ "    Player Name".padStart(12, " ") +" " + "  Kill Count ".padStart(8, " ") +" \n");
    for(let i=0; i< array.length-1; ){
        records.push(" " + array[i].padStart(12, " ") +"   " + array[i+1].padStart(8, " ")+ "  \n");
        i =i+2;
    }

    await jimp(records.reverse());
    await message.channel.send(" Here~ ", {files: ["./src/images/leaderboard.png"]})

}


async function jimp(records: string[]) {
    const fontLeaderBoard = await Jimp.loadFont('./src/font/font_leaderboard/5r0rI6Ck6aU2LYVyLdMfsfDs.ttf.fnt');
    const font = await Jimp.loadFont('./src/font/gJSiiXVfeWEPAnxA0T1TIcbM.ttf.fnt');
   // const image = await Jimp.read('https://imgur.com/ekaUeLE.jpeg');
    const image = await Jimp.read('./src/images/20400166_new.png');
    const logo = await Jimp.read('./src/images/ICON.png');
    //const image = await Jimp.read(1200, 900, 0x000052ff);
    await image.blur(10);
    await logo.contain(200, 200);
    image.blit(logo, 1020, 2);
    await image.contain(1200, 900);
    await image.print(fontLeaderBoard, 0, 40, {text: "Leader Board"  ,  alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_TOP },1130, 900 );
    for(let i=0; i< records.length;i++){
        await image.print(font, 0, -65*i+1, {text: records[i]  ,  alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_BOTTOM },1130, 850 );
    }
    return image.write('./src/images/leaderboard.png');
}
