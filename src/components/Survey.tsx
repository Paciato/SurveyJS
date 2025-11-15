'use client'

import { useCallback } from 'react';
import 'survey-core/survey-core.css';
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'

// const SURVEY_ID = 1;

const surveyJson = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "rating",
          "name": "question1",
          "title": "In the last 2 weeks, have you had chest or stomach pains as a result of your cough?",
          "rateCount": 7,
          "rateMax": 7,
          "minRateDescription": "All of the time",
          "maxRateDescription": "None of the time"
        },
        {
          "type": "rating",
          "name": "question2",
          "title": "In the last 2 weeks, have you been bothered by sputum (phlegm) production when you cough?",
          "rateCount": 7,
          "rateMax": 7,
          "minRateDescription": "All of the time",
          "maxRateDescription": "None of the time"
        },
        {
          "type": "rating",
          "name": "question3",
          "title": "In the last 2 weeks, have you been tired because of your cough?",
          "rateCount": 7,
          "rateMax": 7,
          "minRateDescription": "All of the time",
          "maxRateDescription": "None of the time"
        },
        {
          "type": "rating",
          "name": "question4",
          "title": "In the last 2 weeks, have you felt in control of your cough?",
          "rateCount": 7,
          "rateMax": 7,
          "minRateDescription": "All of the time",
          "maxRateDescription": "None of the time"
        },
        {
          "type": "boolean",
          "name": "question5",
          "title": "In the last 2 weeks, has your coughing been bad enough to cause you social distress?"
        },
        {
          "type": "panel",
          "name": "panel1",
          "visible": false,
          "visibleIf": "{question5} = true",
          "title": "Social Distress",
          "elements": [
            {
              "type": "rating",
              "name": "question6",
              "title": "How often during the last 2 weeks have you felt embarassed by your coughing?",
              "rateCount": 7,
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            },
            {
              "type": "rating",
              "name": "question7",
              "title": "In the last 2 weeks, my cough has made me feel anxious",
              "rateCount": 7,
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            },
            {
              "type": "rating",
              "name": "question8",
              "title": "In the last 2 weeks, my cough has interfered with my job, or other daily tasks",
              "rateCount": 7,
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            },
            {
              "type": "rating",
              "name": "question9",
              "title": "In the last 2 weeks, I felt that my cough interfered with the overall enjoyment of my life",
              "rateCount": 7,
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            },
            {
              "type": "rating",
              "name": "question10",
              "title": "In the last 2 weeks, have you been concerned that other people think something is wrong with you, because of your cough?",
              "rateCount": 7,
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            },
            {
              "type": "rating",
              "name": "question11",
              "title": "In the last 2 weeks, my cough has interrupted conversation or phone calls",
              "rateCount": 7,
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            },
            {
              "type": "rating",
              "name": "question12",
              "title": "In the last 2 weeks, my cough has annoyed my partner, family, or friends",
              "rateCount": 7,
              "rateMax": 7,
              "minRateDescription": "All of the time",
              "maxRateDescription": "None of the time"
            }
          ]
        },
        {
          "type": "rating",
          "name": "question13",
          "title": "In the last 2 weeks, exposure to paints or fumes has made me cough",
          "rateCount": 7,
          "rateMax": 7,
          "minRateDescription": "All of the time",
          "maxRateDescription": "None of the time"
        },
        {
          "type": "rating",
          "name": "question14",
          "title": "In the last 2 weeks, how many times a day have you had coughing bouts?",
          "rateCount": 7,
          "rateMax": 7,
          "minRateDescription": "Continously",
          "maxRateDescription": "None "
        },
        {
          "type": "rating",
          "name": "question15",
          "title": "In the last 2 weeks, have you had a lot of energy?",
          "rateCount": 7,
          "rateMax": 7,
          "minRateDescription": "All of the time",
          "maxRateDescription": "None of the time"
        },
        {
          "type": "boolean",
          "name": "question16",
          "visibleIf": "{question1} <= 3 and {question2} <= 3 and {question14} <= 3 and {question15} >= 5",
          "title": "In the last 2 weeks, has your coughing been accompanied by wheezing as well?"
        }
      ]
    }
  ]
};

export default function SurveyComponent() {
  const survey = new Model(surveyJson);
  const alertResults = useCallback((sender: Model) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }, []);

  survey.onComplete.add(alertResults);

  return (
    <Survey model={survey} />
  );
}

// function saveSurveyResults(url: string, json: object) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       // Handle success
//     } else {
//       // Handle error
//     }
//   })
//   .catch(error => {
//     // Handle error
//   });
// }