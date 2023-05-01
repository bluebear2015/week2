let HomeTeam = 0
let AwayTeam = 0

function HomeTeamScore() {
HomeTeam += 1
console.log (HomeTeam)
document.getElementById("HomeTeam").textContent = HomeTeam

}

function AwayTeamScore(){
    AwayTeam += 1
    console.log(AwayTeam)

document.getElementById("AwayTeam").textContent = AwayTeam
}

function HomeScore(){
HomeTeam += 3

console.log(HomeTeam)
document.getElementById("HomeTeam").textContent = HomeTeam


}

function AwayScore(){
    AwayTeam += 3
    console.log(AwayTeam)

document.getElementById("AwayTeam").textContent = AwayTeam
}