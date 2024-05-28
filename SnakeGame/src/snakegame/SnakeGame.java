
package snakegame;
import javax.swing.*;

public class SnakeGame extends JFrame{

    SnakeGame(){
        super("snake game");
        add(new board());
        pack();
        setResizable(false);
        setVisible(true);
        setLocationRelativeTo(null);
    }
    public static void main(String[] args) {
        
        new SnakeGame();
    }
    
}
