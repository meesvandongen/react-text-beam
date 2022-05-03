import './index.css';

function TextBeam(props) {
    console.log(props.children);
    // let's explode the text into spans. [exp]lode-sp[an]
    // 
    function expan(text) {
        // for short strings spltting by each char is nice
        // let chars = Array.from(text);
        // but since that's slow 
        let split = ' ';
        let chars = text.split(split);
        let shards = [];
        let index = 0;
        for (let char of chars) {
            let shard = '<span id="char_' + index + '" class="text-beam">' + char + split + '</span>';
            shards.push(shard);
            index++;
        }
        return {
            'html': shards.join(split),
            'length': index + 1,
        };
        
    }
    return (
        <span dangerouslySetInnerHTML={{ __html:expan(props.children).html}}></span>
    );
}
export default TextBeam;