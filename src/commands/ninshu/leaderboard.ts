import { Message } from "discord.js";
import {getRedisCmd} from "../../services/redis";
import {Command} from "../../types/command";

export const leaderboard: Command = {
    aliases: ["leaderboard"],
    description: "Shows the top 10 players from leaderboard as text",
    inhibitors: [],
    async run(message) {
        const data = await getRedisCmd();
        //console.log(Array.from(data));
 /*       const array = [
            'smug', '59', 'kakashi',
            '50', 'guy', '49',
            'hinata', '35', 'test1',
            '20', 'mytest', '15',
            'hello', '9', 'akjsbdaa',
            '4', 'ino', '1',
            'fourfour', '1'
        ];
*/
        send_records_to_discord(message, Array.from(data));
    },
};


async function send_records_to_discord(message: Message ,array: string | any[]) {
    const records = [];
    records.push("--------------------------------------------------------------------------\n");
    records.push(" | Leaderboard | \n");
    records.push("--------------------------------------------------------------------------\n");
    //records = records.reverse();
    records.push(" |"+ " Player Name".padStart(12, " ") +" | " + " Kill Count ".padStart(8, " ") +" | " + " Last Feteched ".padStart(5, " ") +"  \n\n");
    records.push("---------------------------------------------------------------------------\n");
    for(let i=0; i< array.length-1; ){
        records.push(" | " + array[i].padStart(11," ") +" | " + array[i+1].padStart(12, " ") + " | " + "1 min ago" + " | \n");
        i =i+2;
    }
    records.push("\n-------------------------------------------------------------------------\n");
    const items = records; // your list of strings
    const lst: string[][] = [];
    const bin_size = 10;

    items.forEach((x, i) => {
        if (i % bin_size === 0) lst.push([x]);
        else lst[parseInt(String(i / bin_size))].push(x);
    });
    try {
        lst.forEach(element => {
            // @ts-ignore
            element = element.toString().replace(/,/gi, "");
            message.channel.send("```" + element + "```", {split: true});
        });


    } catch (e) {
        console.log(e);
    }
}
