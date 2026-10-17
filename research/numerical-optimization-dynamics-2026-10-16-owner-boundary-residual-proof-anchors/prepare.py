from pathlib import Path
import json,re,copy
r='numerical-optimization-dynamics-2026-10-16';b=Path(__file__).resolve().parent;v=Path(f'research/{r}-owner-format-direct-remap-v2-20261016T111752339572Z');report=json.load(open(f'research/{r}-owner-boundary-residual-intake/residual-report.json'));targets=[x for x in report['contradicted']if x['kind']=='checked_step_absent'];maps={Path(x['path']).stem:x['old_to_final_step_labels']for x in json.load(open(v/'phase-preservation-review.json'))};rx=re.compile(r'(steps?\s+)(\d+\.\d+(?:(?:\s*,\s*(?:and\s+)?|\s+and\s+|\s*&\s*|\s*[–—-]\s*)\d+\.\d+)*)',re.I)
ops=[];holds=[];seen=set();narrative=[]
def paragraph(s,label):
 m=re.search(r'^'+re.escape(label)+r'\s+([\s\S]*?)(?=^\d+\.\d+\s|^## |\Z)',s,re.M);return m[1].strip()if m else None
for t in targets:
 id=t['id'];key=(t['file'],id,t['case']);assert key not in seen;seen.add(key)
 if id not in maps:holds.append({'target':t,'reason':'No original-to-final map'});continue
 mapping=maps[id];old=(v/'before/items'/f'{id}.md').read_text();current=Path(f'items/{id}.md').read_text();assert current==(v/'proposed/items'/f'{id}.md').read_text();original_ids=list(mapping)
 actual=next(q for q in json.load(open(t['file']))['contracts'][id]['boundaries']if q['case']==t['case']);assert actual==t['row'];refs=[]
 def sub(m):
  text=m[2]
  def label(z):
   k=z[0]
   if k not in mapping:raise ValueError('unknown old coordinate '+id+' '+k)
   assert paragraph(old,k)is not None and paragraph(current,mapping[k])is not None
   refs.append({'old_step':k,'final_step':mapping[k],'original_paragraph':paragraph(old,k),'current_same_paragraph':paragraph(current,mapping[k]),'reference_kind':'own proof paragraph, not external supplier'})
   return mapping[k]
  # These42rows have ordinary lists and individual references, not ranges.
  assert not re.search(r'\d+\.\d+\s*[–—-]\s*\d+\.\d+',text)
  return m[1]+re.sub(r'\d+\.\d+',label,text)
 newtext=rx.sub(sub,t['text']);after=copy.deepcopy(actual);textkey='evidence'if' evidence'in actual else 'evidence';assert 'evidence'in after;after['evidence']=newtext;kind='direct-original-to-final coordinate replacement only'
 if id=='ex-neutral-delay-derivative-amplification'and t['case']=='zero':
  after['evidence']='Step 2.1 gives y\'(k tau+s)=a^(k+1) q(s-tau) for every positive-time segment; at a=0 this derivative is zero.'
  kind='source-anchored clarification removes unrelated unit-coefficient anchor from zero-case justification'
  narrative.append({'item':id,'case':t['case'],'reason':'Original step1.2 maps to current2.1 and its explicit derivative formula specializes to zero at a0. Original step2.1 maps to current3.1 but is exclusively the a1 example, so it cannot be credited as a zero-case calculation. The replacement marks that distinction rather than claiming both paragraphs prove a0.','before':actual,'after':after})
 if id=='thm-retarded-delay-method-of-steps-well-posedness'and t['case']=='endpoints':
  after['evidence']='With the stated continuous history, the initial value y(0)=phi(0) is fixed by Facts F1. Step 3.1 extends the known delayed input continuously across each closed cell endpoint and constructs the local IVP from its current endpoint; step 4.1 glues these unique continuations through the finite delay intervals. No matching left derivative of the merely continuous history at zero is asserted.'
  kind='source-anchored endpoint rationale replaces false derivative-matching claim'
  narrative.append({'item':id,'case':t['case'],'reason':'The actual Statement assumes only continuous history. Original2.2/current3.1 constructs the next interval from its endpoint; current4.1 iterates and glues that unique continuation. Neither paragraph asserts a left-history derivative at zero. The corrected worksheet records endpoint values and continuous delayed input, leaving the mathematical Statement and source unchanged.','before':actual,'after':after})
 # Check EVERY named final coordinate, including the deliberately distinguished a1 paragraph.
 finalrefs=[]
 for m in rx.finditer(after['evidence']):
  for k in re.findall(r'\d+\.\d+',m[2]):
   p=paragraph(current,k);assert p is not None,(id,k);finalrefs.append({'step':k,'actual_current_paragraph':p})
 assert finalrefs
 for subdir,text in [('original-source',old),('current-source',current)]:
  p=b/subdir/'items'/f'{id}.md';p.parent.mkdir(parents=True,exist_ok=True);p.write_text(text)
 ops.append({'batch':re.search(r'batch-(\d+)',t['file'])[1],'file':t['file'],'item':id,'case':t['case'],'json_pointer':f'/contracts/{id}/boundaries/{t["index"]}','before':actual,'after':after,'correction_kind':kind,'source_read':{'original_path':str(v/'before/items'/f'{id}.md'),'current_path':f'items/{id}.md','original_to_final_map':mapping,'all_original_mentioned_paragraphs':refs,'all_after_explicit_references':finalrefs,'full_archived_current':str(b/'current-source/items'/f'{id}.md')},'root_binding_required':True})
payload={'run':r,'scope':'Research-only row-level surgical proof-anchor corrections for all42unique checked_step_absent residual rows across27items.40direct original-coordinate corrections;2explicit source-rationale clarifications approved for preparation by root. No canonical metadata/source edits, hashes, bindings, native review or gates. Root performs exact row-before guarded integration.','operations':ops,'holds':holds,'narrative_clarifications':narrative,'summary':{'input_rows':len(targets),'unique_rows':len(seen),'operations':len(ops),'items':len({x['item']for x in ops}),'holds':len(holds),'Kahan_rows':sum('kahan'in x['item']for x in ops),'all_after_explicit_reference_count':sum(len(x['source_read']['all_after_explicit_references'])for x in ops)}}
(b/'row-operations.json').write_text(json.dumps(payload,indent=2)+'\n');(b/'two-narrative-clarifications.json').write_text(json.dumps(narrative,indent=2)+'\n');print(json.dumps(payload['summary'],indent=2))
