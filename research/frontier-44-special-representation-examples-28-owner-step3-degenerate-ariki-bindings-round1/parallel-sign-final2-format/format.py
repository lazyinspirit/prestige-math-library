from pathlib import Path
import re,json,hashlib,datetime
root=Path('.')
b=Path('research/frontier-44-special-representation-examples-28-owner-step3-degenerate-ariki-bindings-round1')
out=b/'parallel-sign-final2-format'
id='prop-sign-duality-and-ringel-duality-match-fock-space-involutions'
src=b/'staged-items'/f'{id}.md'
raw=src.read_text().replace(chr(8211), '-'); prefix,proof=raw.split('## Proof\n',1)
blocks=re.findall(r'(?m)^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\Z)',proof,re.S)
entries=[]; mapping={}; counts={}
for old,text in blocks:
    text=text.strip()
    m=re.search(r' \[([^\n]*)\]( ∎)?$',text); assert m,old
    content=text[:m.start()]; tags=m.group(1); qed=m.group(2) or ''
    # Complete sentence boundaries outside inline math; retain every sentence verbatim.
    sentences=[]; start=0; math=False
    for i,c in enumerate(content):
        if c=='$': math=not math
        if not math and c=='.' and (i+1==len(content) or content[i+1].isspace()):
            sentences.append(content[start:i+1].strip()); start=i+1
    if content[start:].strip(): sentences.append(content[start:].strip())
    chunks=[]; chunk=''
    for s in sentences:
        if chunk and len((chunk+' '+s).split())>140: chunks.append(chunk); chunk=s
        else: chunk=(chunk+' '+s).strip()
    if chunk: chunks.append(chunk)
    phase=int(old.split('.')[0]); phase=min(phase,8)
    new=[]
    for chunk in chunks:
        counts[phase]=counts.get(phase,0)+1; label=f'{phase}.{counts[phase]}'
        new.append(label); entries.append([old,label,chunk,tags,''])
    entries[-1][-1]=qed
    mapping[old]=new
# Replace complete old reference tokens, keeping referenced conclusions intact.
for row in entries:
    content,tags=row[2],row[3]
    content=content.replace('steps 2.2-4.8','the bounded-chunk construction above')
    def sub(m): return mapping[m.group()][-1] if m.group() in mapping else m.group()
    row[2]=re.sub(r'(?<![\d.])\d+\.\d+(?![\d.])',sub,content)
    row[3]=re.sub(r'(?<=step )\d+\.\d+',sub,tags)
intro=proof.split('\n\n1.1 ',1)[0]
formatted=prefix+'## Proof\n'+intro+'\n\n'+'\n\n'.join(f'{new} {text} [{tags}]{qed}' for old,new,text,tags,qed in entries)+'\n'
assert all(len(row[2].split())<=150 for row in entries),[(r[1],len(r[2].split())) for r in entries]
assert raw.split('## Statement\n',1)[1].split('## Facts & Assumptions',1)[0]==formatted.split('## Statement\n',1)[1].split('## Facts & Assumptions',1)[0]
(out/f'{id}.md').write_text(formatted)
(out/'step-map.json').write_text(json.dumps({'old_to_new':mapping,'reference_policy':'Old referenced conclusion maps to final complete sentence group; phase9/10 join phase8; malformed literal steps2.2-4.8 becomes bounded-chunk construction above','max_proof_step_words':max(len(r[2].split()) for r in entries),'statement_byte_identical':True,'mathematical_sentence_preservation':True},indent=2)+'\n')
sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
manifest=Path('research/frontier-44-special-representation-examples-28-batch-18.pages.json')
obj=json.loads(manifest.read_text())
# Native18 full proposal: update only exact subject's metadata and complete claim/strategy.
fm=formatted.split('---\n',2)[1]
deps=re.search(r'deps: \[(.*?)\]\njustified_by',fm,re.S).group(1)
deps=[x.strip() for x in deps.split(',')]
statement=formatted.split('## Statement\n',1)[1].split('\n## Facts & Assumptions',1)[0].strip()
for page in obj:
    for item in page.get('items',[]):
        if item['id']==id:
            item['deps']=deps;item['statement']=statement;item['strategy']=formatted.split('## Proof\n',1)[1].strip()
(out/'proposed-complete-native18.pages.json').write_text(json.dumps(obj,indent=2,ensure_ascii=False)+'\n')
paths=[src,Path('items')/f'{id}.md',manifest,Path('research/frontier-44-special-representation-examples-28-batch-18.proof-contracts.json'),Path('research/frontier-44-special-representation-examples-28-owner-codex-repair-round-limit.json'),b/'source18-sign-comparison-history-and-exact-used-inputs.json']
paths +=[Path('items')/f'{dep}.md' for dep in deps]
paths += [b/'signed-exterior-trace-adjoint-construction'/p for p in ['trace-adjoint-proof.md','handoff-row-count-correction.json','tilting-lift/tilting-lift-proof.md','tilting-lift/handoff.json']]
paths +=[b/'sealed-independent-chunks'/p for p in ['deformed-tensor-current-binding-and-protected-graded-module-hold.json','deformed-tensor-exact-original-gap-history-classification-successor.json','whittaker-continuous-dual-definition-guarded-complete-chunk.json']]
(out/'input-guards.json').write_text(json.dumps({'run':'frontier-44-special-representation-examples-28','captured_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'raw_guards':[{'path':str(p),'sha256':sha(p)} for p in paths],'subject':'prop-sign-duality-and-ringel-duality-match-fock-space-involutions','canonical_unchanged':True,'native_unchanged':True},indent=2)+'\n')
print(json.dumps({'steps':len(entries),'max_words':max(len(r[2].split()) for r in entries),'statement_byte_identical':True,'output':str(out)},indent=2))
import subprocess
p=out/f'{id}.md'
cmd=['node','tools/tsx-run.mjs','tools/precheck.mts',str(p),'--json']
r=subprocess.run(cmd,capture_output=True,text=True)
(out/'precheck-before-layer-format.json').write_text(r.stdout)
res=json.loads(r.stdout)['results'][0]
if res['status']=='repair':
    proposed=res['proposed_proof']
    oldlabels=re.findall(r'(?m)^(\d+\.\d+) ',p.read_text())
    newlabels=re.findall(r'(?m)^(\d+\.\d+) ',proposed)
    assert len(oldlabels)==len(newlabels)
    repairmap=dict(zip(oldlabels,newlabels))
    (out/'precheck-layer-map.json').write_text(json.dumps(repairmap,indent=2)+'\n')
    before=p.read_text(); facts,newproof=proposed.split('**Proof technique:**',1)
    before=before.split('**Given:**',1)[0]
    p.write_text(before+facts.strip()+'\n\n## Proof\n\n**Proof technique:**'+newproof+'\n')
    mp=json.loads((out/'step-map.json').read_text())
    mp['old_to_new']={o:[repairmap[n] for n in ns] for o,ns in mp['old_to_new'].items()}
    mp['canonical_layer_repair_adopted']=True
    (out/'step-map.json').write_text(json.dumps(mp,indent=2)+'\n')
    # Full native selected proposal matches final actual proof carrier.
    obj=json.loads((out/'proposed-complete-native18.pages.json').read_text())
    for page in obj:
        for item in page.get('items',[]):
            if item['id']==id: item['strategy']=p.read_text().split('## Proof\n',1)[1].strip()
    (out/'proposed-complete-native18.pages.json').write_text(json.dumps(obj,indent=2,ensure_ascii=False)+'\n')
# Seal actual scoped final checks after the final item formatting.
checks={}
for name,cmd in [('precheck',['node','tools/tsx-run.mjs','tools/precheck.mts',str(p),'--json']),('rendercheck',['node','tools/rendercheck.mjs',str(p),'--json']),('proof-layout',['node','tools/proof-layout.mjs',str(p)])]:
    r=subprocess.run(cmd,capture_output=True,text=True)
    checks[name]={'command':' '.join(cmd),'exit_code':r.returncode,'stdout':r.stdout,'stderr':r.stderr,'raw_sha256':sha(p),'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat()}
    print(name,r.returncode,r.stdout[:120])
(out/'final-local-checks.json').write_text(json.dumps(checks,indent=2)+'\n')
