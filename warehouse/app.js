const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
}]

function drawPackages(packages) {
    let template = ""
    packages.forEach(p => template += `
    <li class="list-group-item">   ${p.to} ${p.priorityLevel} ${p.weight} ${p.trackingNumber} </li>
    `)
    console.log('[TEMPLATE]', template)
    document.getElementById ('packages').innerHTML = template
     
}
function drawAllPackages(){
    drawPackages(packages)
}

function drawHeavyPackages(){
    const heavyPackages = packages.filter(p => p.weight <= 2.5)
    drawPackages(heavyPackages)
}

function drawFragilePackages() {
    const fragilePackages = packages.filter(p => p.isFragile == true)
    drawPackages(fragilePackages)
} 

function drawPriorityPackages(){
const priorityPackages = packages.filter(p => p.priorityLevel == 'free')
drawPackages(priorityPackages)

}
function getElementById(reset){

}