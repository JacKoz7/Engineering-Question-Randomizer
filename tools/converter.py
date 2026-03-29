import json

def convert_txt_to_json():
    with open('pytania.txt', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    questions = []
    
    for line in lines:
        columns = line.strip().split('\t')
        
        for question_text in columns:
            question_text = question_text.strip()
            if len(question_text) > 5:
                questions.append({
                    "question": question_text,
                    "answer": "",
                    "details": ""
                })
    
    with open('pytania.json', 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)
    
    print(f"Converted {len(questions)} questions to pytania.json")
    print("Now fill in the 'answer' and 'details' fields manually")

if __name__ == "__main__":
    convert_txt_to_json()