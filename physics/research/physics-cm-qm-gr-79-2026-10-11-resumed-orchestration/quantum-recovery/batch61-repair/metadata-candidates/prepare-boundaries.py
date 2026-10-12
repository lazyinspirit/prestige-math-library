import json,re,hashlib,difflib
from pathlib import Path
run='physics-cm-qm-gr-79-2026-10-11'
base=Path(f'research/{run}-resumed-orchestration/quantum-recovery/batch61-repair')
out=base/'metadata-candidates'
p=json.loads((out/'proposals.json').read_text())
contracts=json.loads(Path(f'research/{run}-batch-61.proof-contracts.json').read_text())
def steps(text):
    return {m.group(1):m.group(0).strip() for m in re.finditer(r'(?ms)^([0-9]+\.[0-9]+)\s.*?(?=\n\n[0-9]+\.[0-9]+\s|\n## |\Z)',text)}
def claim(text):
    m=re.search(r'(?ms)^## (Statement|Example)\s*\n(.*?)(?=^## |\Z)',text)
    return m.group(0).strip() if m else ''
rows=[];unknown=[]
for item in p['items']:
    if not item['contract']['steps']:continue
    id=item['id'];raw=Path(f'items/{id}.md').read_text();old=(base/'before'/f'{id}.md').read_text()
    before=contracts['contracts'][id]['boundaries'];current=steps(raw);original=steps(old)
    mapping={};scores={}
    for oldid,text in original.items():
        text=re.sub(r'^\d+\.\d+\s','',text)
        vals=[(difflib.SequenceMatcher(None,text,re.sub(r'^\d+\.\d+\s','',v)).ratio(),key) for key,v in current.items()]
        score,key=max(vals);mapping[oldid]=key;scores[oldid]=score
    boundaries=[];anchors=[]
    for b in before:
        field='evidence' if 'evidence'in b else 'reason';e=b[field]
        refs=list(dict.fromkeys(re.findall(r'\b\d+\.\d+\b',e)))
        missing=[n for n in refs if n not in mapping]
        if missing:unknown.append({'id':id,'case':b['case'],'missing_old_steps':missing})
        translated=re.sub(r'\b\d+\.\d+\b',lambda m:mapping.get(m.group(0),m.group(0)),e)
        selected=list(dict.fromkeys(mapping[n] for n in refs if n in mapping))
        anchor={'case':b['case'],'step_ids':selected,'claim_quote':claim(raw),'step_quotes':[{'step':n,'quote':current[n]}for n in selected],'old_to_current_step_mapping':[{'before':n,'after':mapping[n],'text_similarity':round(scores[n],4)}for n in refs if n in mapping],'mapping_is_mechanical_only':True}
        boundaries.append({**b,field:'PROPOSED; owner-verification-required. '+translated+' Current carrier and step excerpts are attached in anchors; reassess the disposition against current hypotheses before integration.'})
        anchors.append(anchor)
    rows.append({'id':id,'carrier_guard':item['carrier_guard'],'before_boundaries':before,'before_boundaries_semantic_sha256':hashlib.sha256(json.dumps(before,separators=(',',':'),ensure_ascii=False).encode()).hexdigest(),'proposal_disposition':'PROPOSED; owner-verification-required','boundaries':boundaries,'anchors':anchors,'all_current_steps':[{'step':n,'quote':v}for n,v in current.items()]})
result={'version':1,'run':run,'batch':'61','mode':'research-only final15 boundary metadata anchors; no mathematical or physics review','canonical_status_semantics':'Retained checked/not_applicable values are candidates only and require sole quantum owner assessment. Text alignment is metadata support, never a validity verdict.','integration_policy':'Require current raw guards and exact original boundaries; review current claim and attached numbered steps, then patch selected boundary arrays only.','count_items':len(rows),'count_boundary_rows':sum(len(x['boundaries'])for x in rows),'unresolved_old_step_references':unknown,'proposals':rows}
(out/'boundary-drafts.json').write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n')
print(json.dumps({'contracts':len(rows),'boundary_rows':result['count_boundary_rows'],'unresolved':unknown}))
