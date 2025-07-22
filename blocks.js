

  

    export default class PM3DExtension {
    getInfo() {
      return {
        id: 'pm3d',
        name: '3D Scene',
        color1: '#800080',
        blocks: [
          {
            opcode: 'create3DScene',
            blockType: COMMAND,
            text: 'Create a 3D scene'
          },
          {
            opcode: 'createCube',
            blockType: COMMAND,
            text: 'Create cube [NAME] at x:[X] y:[Y] z:[Z]',
            arguments: {
              NAME: { type: Scratch.ArgumentType.STRING, defaultValue: 'Cube' },
              X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
              Z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }
            }
          }
        ]
      };
    }

    create3DScene() {
      console.log('3D scene created!');
    }

    createCube(args) {
      console.log("Created cube '" + args.NAME + "' at (" + args.X + ", " + args.Y + ", " + args.Z + ")");
    }
  }

  Scratch.extensions.register(new PM3DExtension());

