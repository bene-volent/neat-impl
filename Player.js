class Player {
  constructor(parent,biasing) {
    this.score = 0
    this.fitness = 0
    this.finalFitness = 0
    this.bestScore = 0
    if (parent) {
      this.Data = parent
      this.brain = this.Data.GiveGenome(biasing)
      this.decision = []
      this.vision = []
    } else {
      this.human = true
    }
    this.dead = false
    this.lifeSpan = 0
    this.gen = 0

    ///GameStuff\

  }

  show() {

  }

  softmax(x){
        let tmp = []
        let summ = 0
        for (let i of x){
            summ+=exp(i)
            tmp.push(exp(i))
        }
        for (let i = 0 ;i<tmp.length;i++){
            tmp[i] = tmp[i]/summ
        }
        return tmp
    }
  update() {
    this.dead = true
  }
  think() {
    if (!HumanPlaying) {


    }

  }
  look() {

    if (!HumanPlaying) {

}
      else{

}

  }
  clone() {
    let clone = new Player(this.Data)
    clone.fitness = this.fitness
    clone.brain = this.brain.clone()
    clone.gen = this.gen
    clone.bestScore = this.score
    return clone
  }
  calculateFitness() {
    this.fitness = this.fitness
  }
  crossover(P2) {
    let child = new Player(this.Data)
    child.brain = this.brain.crossover(P2.brain)
    return child
  }

}
