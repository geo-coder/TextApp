
const wordCount = () => {
  
  var text = document.getElementById('text').value.toLowerCase() //grab full string from textarea
  var textArray=[]    
  if(text){
     textArray=text.match(/\w+/g) //textarray grabs any word using regex
  } 

  document.getElementById('word-count').innerHTML="Word count: " + textArray.length
  

  

}

wordCount()


document.getElementById('common-words-list').style.display="none" //hide accordion for most common words


var mostCommonWords=["the", "a", "an", "is", "that", "of", "and", "to", "as", "this", "which", "for", "on", "it", "be", "in", "have", "into", "with", "because", "by", "or", "its", "from", "not", "what", "but", "has", "at", "can", "even", "their", "them", "if", "then", "so", "will", "are", "within", "been", "no", "only", "they", "such", "we", "i", "these", "more", "other", "was", "between", "every", "own", "who", "his", "hers", "all", "itself", "he", "there", "s", "our", "you", "just", "my", "us", "also", "do", "than", "your", "those", "she", "were", "unto", "some", "about", "after", "while", "might", "one", "yet", "whether", "when", "upon", "may", "though", "without", "him", "her", "should", "most", "many", "how", "does", "had", "well", "very", "much", "any", "would", "should", "shall", "where", "since", "rather", "doth", "indeed", "therefore", "now", "thus", "me", "I", "through", "t", "whom", "say", "said", "whose", "why"]
mostCommonWords=mostCommonWords.sort()

var mostCommonWordsString=""
for (var o=0; o<mostCommonWords.length; o++){ //conver array  into a comma separated string

  mostCommonWordsString+=mostCommonWords[o]+", "
}
mostCommonWordsString=mostCommonWordsString.substr(0,mostCommonWordsString.length-2) //remove final space+comma


var myChart





const scan = () => {

    
    
    var text = document.getElementById('text').value.toLowerCase() //grab full string from textarea
    

    var textArray=text.match(/\w+/g) //textarray grabs any word using regex

    document.getElementById('word-count').innerHTML="Word count: " + textArray.length
    

    var wordFreqArray=[]
    var wordLib = new Object

//    var addedWord=document.getElementById('add-word').value

    //populate the wordLib object with wordcount pairs

    
    for (var x=0; x<textArray.length; x++) {


        if (!wordLib[textArray[x]]) {
            wordLib[textArray[x]]=1 //if the word isn't in the library yet, create an entry
            
        } else {

            wordLib[textArray[x]]++ //if word is in library, add 1

        }

        
        

    }
    




    //sort



minCutoff=document.getElementById('min-cutoff').value
//var mostCommonWords=["the", "a", "an", "is", "that", "of", "and", "to", "as", "this", "which", "for", "on", "it", "be", "in", "have", "into", "with", "because", "by", "or", "its", "from", "not", "what", "but", "has", "at", "can", "even", "their", "them", "if", "then", "so", "will", "are", "within", "been", "no", "only", "they", "such", "we", "i", "these", "more", "other", "was", "between", "every", "own", "who", "his", "hers", "all", "itself", "he", "there", "s", "our", "you", "just", "my", "us", "also", "do", "than", "your", "those", "she", "were", "unto", "some", "about", "after", "while", "might", "one", "yet", "whether", "when", "upon", "may", "though", "without", "him", "her", "should", "most", "many", "how", "does", "had", "well", "very", "much", "any", "would", "should", "shall", "where", "since", "rather", "doth", "indeed", "therefore"]


var excludeCommon=document.getElementById('exclude-common').checked
for (prop in wordLib) {

    if (wordLib[prop]<=minCutoff) {delete wordLib[prop]} //if number of words is below cutoff delete it
    
    if (excludeCommon) { //if user has ExcludeCommonWords checked, delete any thing from mostCommonWordsList
        if (mostCommonWords.includes(prop)) {delete wordLib[prop]}
        
    }

    

}




var rowOrder=document.getElementsByName('row-order')

for (var i = 0, length = rowOrder.length; i < length; i++)
{
 if (rowOrder[i].checked)
 {
  // do whatever you want with the checked radio
  var rowOrderOption=rowOrder[i].value;

  // only one radio can be logically checked, don't check the rest
  break;
 }
}


var orderedWordLib={}

//sorting functions


var chartLabels = []
var chartData = []

//if alphabetical is checked
if (rowOrderOption=="alphabetical") {
Object.keys(wordLib).sort().forEach(function(key) {
   orderedWordLib[key] = wordLib[key];
   chartLabels.push(key).toString()
   chartData.push(wordLib[key])
});

wordLib=orderedWordLib

}


//if low to high is checked
if (rowOrderOption=="low-to-high") {


  var sortableArray = []
  for (var o in wordLib) {
    sortableArray.push([o, wordLib[o]])
    
  }

  sortableArray.sort(function(a,b){
    return a[1]-b[1]
    
  })
  
  



  for (prop in wordLib) {delete wordLib[prop]} //empty out wordlib
  for (o=0; o<sortableArray.length;o++){
    sortableArray[o][0]=sortableArray[o][0].toString() //added
    //console.log(sortableArray[o][0])
    wordLib[sortableArray[o][0]]=sortableArray[o][1]
    //console.log('indiv wordlib', wordLib)
    chartLabels.push(sortableArray[o][0]).toString()
    chartData.push(sortableArray[o][1])

  }
  
  
}




//if high to low is checked
if (rowOrderOption=="high-to-low") {
  var sortableArray = []
  
  for (var o in wordLib) {
    sortableArray.push([o, wordLib[o]])
    
  }

  sortableArray.sort(function(a,b){
    return b[1]-a[1]
    
  })
  
  



  for (prop in wordLib) {delete wordLib[prop]} //empty out wordlib
  
  for (o=0; o<sortableArray.length;o++){
    sortableArray[o][0]=sortableArray[o][0].toString() //added
    //console.log(sortableArray[o][0])
    wordLib[sortableArray[o][0]]=sortableArray[o][1]
    //console.log('indiv wordlib', wordLib)
    chartLabels.push(sortableArray[o][0]).toString()
    chartData.push(sortableArray[o][1])
  }
  




  
  //console.log('wordlib high to low?', wordLib)
  //console.log('sortable array', sortableArray)
  //console.log("chartlabels", chartLabels)
  //console.log("chartdata", chartData)
  
}




  




    
    
    var ctx = document.getElementById('myChart').getContext('2d');

    
    
    if(myChart){myChart.destroy()} //old chart instance has to be destroyed to avoid a weird flickering glitch

    
    //color options



    var backgroundColorArray=[]
    var borderColorArray=[]

    for (o=0; o<Object.keys(wordLib).length; o++) {

      //backgroundColorArray.push('rgba(255, 99, 132, 1)')
      backgroundColorArray.push('rgba(69, 122, 236, 1)')

    }

    for (o=0; o<Object.keys(wordLib).length; o++) {

      borderColorArray.push('rgba(69, 122, 236, 1)')

    }

    var backgroundColor = 'white'; //this prefills the background as white
        Chart.plugins.register({    //eliminates ugly dull colors when chart is saved
        beforeDraw: function(c) {
        var ctx = c.chart.ctx;
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, c.chart.width, c.chart.height);
    }
});

    myChart = new Chart(ctx, {
    //type: 'bar',
    type: 'horizontalBar',
    data: {
        labels: chartLabels,//Object.keys(wordLib), //['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Frequency',
            data: chartData,//Object.values(wordLib),//[12, 19, 3, 5, 2, 3],
            backgroundColor: backgroundColorArray,
            
            // [
            //     'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            //],
            borderColor: borderColorArray,
            
            //[
               // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            //],
            borderWidth: 1
        }]
    },
    options: {
      
      title: {
        display: false,
        //text: document.getElementById('chart-title').value
      },
      scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
              maxBarThickness:50,
              

            }]
            
        }
    }
});
    




    //console.log(wordLib)
    //console.log(Object.keys(wordLib))
    //console.log(Object.values(wordLib))
}


const savechart = () =>{

var canvas=document.getElementById('myChart')
  //var urlbase64=canvas.toDataURL("image/png")
  var urlbase64=canvas.toDataURL("image/jpeg")
  document.getElementById('save-chart').href=urlbase64




}





//Upon clicking SCAN
document.getElementById("scan").addEventListener("click", scan)

//Upon clicking save
document.getElementById("save-chart").addEventListener("click", savechart)

document.getElementById("show-common").addEventListener("click", function () {
  
  if(document.getElementById('common-words-list').style.display==="none"){
      document.getElementById('common-words-list').style.display="block"
      document.getElementById("common-words-list").textContent=mostCommonWordsString
      document.getElementById("show-common").textContent="▼"}
  else {
    document.getElementById('common-words-list').style.display="none"
    document.getElementById("show-common").textContent="▶"
  }



})


//listen for changes to textarea for a live wordcount
document.getElementById('text').addEventListener('input', wordCount)




