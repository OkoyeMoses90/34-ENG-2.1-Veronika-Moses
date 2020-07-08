import React from 'react';
import Counter from "./Counter" 


interface TileProps{
    title:string
}
interface TileState{
    count:number
}
class Tile extends React.Component<TileProps, TileState>  {
    constructor(props:TileProps){ //NOTE: this method is called when the Counter is first created; often used to intialize state.
        super(props)
        this.state = {count:0} //CONFIRM: You can set a different initial value for the count and have it display in the browser .
    }

    render() { 
        return ( 
            <div className="Tile" >
                <h1>{this.props.title}</h1>
                <div>
                    {this.props.children}
                </div>
                <Counter onClick={()=>this.increment()}  message="&hearts;:" count={this.state.count} color={this.generateRandomColor()}/>
            </div>
        )
    };
    private increment = () => {
        this.setState(
          state => ({
            count: this.state.count+1
          })
        );
     };

     private generateRandomColor() {
        let color = "";
        for(var i = 0; i < 3; i++) {
        var oneChannel = Math.floor(Math.random() * 256).toString(16);
        color += (oneChannel.length === 1 ? "0" + oneChannel : oneChannel);
        }
        return "#" + color;
    }

    }


 export default Tile
 //Usage sample: <Tile> ... Card components go here ... </Tile>

