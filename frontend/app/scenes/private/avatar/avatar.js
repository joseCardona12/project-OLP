import avatarStyles from './avatar.css';
export function Avatar(){
    const numberAccum = 1;
    const pageContent = `
        <div class=${avatarStyles["content-avatars"]}>
            <div class=${avatarStyles["avatars-item"]}>Avatar ${numberAccum}</div>
            <div class=${avatarStyles["avatars-item"]}>Avatar ${numberAccum + 1}</div>
            <div class=${avatarStyles["avatars-item"]}>Avatar ${numberAccum + 2}</div>
            <div class=${avatarStyles["avatars-item"]}>Avatar ${numberAccum + 3}</div>
            <div class=${avatarStyles["avatars-item"]}>Avatar ${numberAccum + 5}</div>
            <div class=${avatarStyles["avatars-item"]}>Avatar ${numberAccum + 6}</div>
        </div>
    `
    const logic = () =>{
        console.log("El avatar");
    }

    return {
        pageContent,
        logic
    }
}