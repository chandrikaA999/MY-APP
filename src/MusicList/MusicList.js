import Song from "../Song/Song";
const MusicList =()=>{
    const musiclist=["Tum ho", "saware", "hate me", "believer", "neeli"];
    return (
        <div>
            {musiclist.map((song,index) => (
                 <div key={index}>
                    <Song  song={song}/>
                 </div>
            ))}
        </div>
    );
}
export default MusicList;

