from pathlib import Path
import hashlib,json,re,difflib,datetime
base=Path('research/frontier-44-special-representation-examples-28-owner-step3-cellular-branching-bindings-round1')
source=base/'kleshchev-final2-parent-handoff/after/thm-kleshchev-first-level-branching-multiplicity.md'
out=base/'kleshchev-final2-formatting-successor/target';target=out/source.name
S=source.read_text();T=target.read_text()
def sha(b):return hashlib.sha256(b).hexdigest()
def bind(p):return {'path':str(p),'sha256':sha(p.read_bytes())}
def section(s,title):return s.split('## '+title+'\n',1)[1].split('\n## ',1)[0]
def steps(s):return {m.group(1):m.group(2) for m in re.finditer(r'(?m)^(\d+\.1) (.*)$',section(s,'Proof'))}
def tags(s):return re.search(r'\[([^\[\]]+)\](?: ∎)?$',s).group(1)
assert sha(source.read_bytes())=='0a1d2644daaf1a7f0f63d4de2a3aa23561bb2dd35387bfa8b8aef7fed2006e3d'
source_f1=re.search(r'(?m)^\[F1\].*$',S).group()
formatted_f1=re.search(r'(?m)^\[F1\].*$',T).group()
assert formatted_f1==source_f1.replace('q=1','$q=1$')
assert S.split('## Proof\n',1)[0]==T.split('## Proof\n',1)[0].replace(formatted_f1,source_f1)
ss,tt=steps(S),steps(T);assert list(ss)==list(tt)==[f'{i}.1' for i in range(1,21)]
subjects=[
 'Actual Schur simple, integral root words, essential dimensions and exact shifted count recurrence',
 'Disconnected binary deficit coefficient matrix factors with unchanged separated Cartan coordinates',
 'Dual positive tests and identity on the full component tensor-product weight space',
 'Disconnected-root primitive exclusion on a composition-series quotient',
 'First-level definition and all dominant terminal weights, including nonrestricted auxiliary factors',
 'Highest-weight support restriction to terminal root intervals',
 'Additive character dimensions and exact lower interval endpoint coordinate increase',
 'Finite integer reverse substitution identifies multiplicities with normal counts',
 'Every-field descent, scalar extension and composition-factor preservation',
 'Ordinary partition transpose and removable-node column/root indexing',
 'Complete root-normal versus ordinary boundary-event dictionary',
 'Transposed residue signature order and minus-plus cancellation convention',
 'Piecewise normal-node count and exclusion of unconditioned above-count',
 'Inline q=1 Weyl-to-Murphy corner module and actual right action',
 'Exact corner form coefficient, orthogonal radical quotient and restricted survival independent of classifier',
 'Orbit-matrix embedding identifies actual first level and lower Schur action',
 'Literal coset-word map proves local first-level/corner subgroup identity without extra inversion',
 'Exact lower corner preserves surviving factors and gives signed ordinary restriction multiplicity',
 'One-row, singleton and empty boundaries retain every-field and regular-removal scope',
 'Piecewise indicator equivalence and multiplicity conclusion'
]
rows=[]
for k,subject in zip(ss,subjects):
 assert tags(ss[k])==tags(tt[k])
 edits=[]
 for op,a,b,c,d in difflib.SequenceMatcher(a=ss[k],b=tt[k],autojunk=False).get_opcodes():
  if op!='equal':edits.append({'operation':op,'before_offset':[a,b],'after_offset':[c,d],'before':ss[k][a:b],'after':tt[k][c:d]})
 rows.append({'step':k,'retained_argument':subject,'source_argument_sha256':sha(ss[k].encode()),'formatted_argument_sha256':sha(tt[k].encode()),'source_argument':ss[k],'formatted_argument':tt[k],'source_tags':tags(ss[k]),'formatted_tags':tags(tt[k]),'step_number_and_tags_unchanged':True,'argument_preservation':'All hypotheses, constructions, implications and conclusions retained; notation, math delimiters and word-boundary spacing only','literal_textual_edit_map':edits})
checks=[]
commands={
 'precheck':f'node tools/tsx-run.mjs tools/precheck.mts {target} --json',
 'rendercheck':f'node tools/rendercheck.mjs {target} --json',
 'proof-layout':f'node tools/proof-layout.mjs {target}'
}
for name,cmd in commands.items():
 p=out/(name+'.result.txt');raw=p.read_text()
 if name=='precheck':assert json.loads(raw)['summary']['failed']==0
 elif name=='rendercheck':assert json.loads(raw)=={'errors':[],'warnings':[],'checked':1}
 else:assert raw.strip()=='proof-layout: 1 items, 20 steps, 0 defects'
 checks.append({'name':name,'command':cmd,'exit_code':0,'output':raw,'report':bind(p),'target_raw_sha256':sha(target.read_bytes())})
j={'version':1,'run':'frontier-44-special-representation-examples-28','author':'/root/repair_cell_head_classification/native50_integral_constructor','policy':'format-only-accepted-K-FINAL2-target-successor','recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sealed_source':bind(source),'formatted_target':bind(target),'source_guard_unchanged':True,'frontmatter_and_deps_byte_unchanged':S.split('---',2)[:2]==T.split('---',2)[:2],'deps_literal_unchanged':re.search(r'^deps:.*$',S,re.M).group()==re.search(r'^deps:.*$',T,re.M).group(),'statement_byte_unchanged':section(S,'Statement')==section(T,'Statement'),'statement_sha256':sha(section(S,'Statement').encode()),'all_preproof_sections_byte_unchanged':False,'facts_formatting_changes':{'source_F1':re.search(r'(?m)^\[F1\].*$',S).group(),'formatted_F1':re.search(r'(?m)^\[F1\].*$',T).group(),'change':'Delimited the one remaining literal q=1 expression in F1; F2 was already delimited and unchanged','logical_text_exact_after_delimiter_removal':section(S,'Facts & Assumptions')==section(T,'Facts & Assumptions').replace(formatted_f1,source_f1)},'retained_proof_step_count':20,'same_step_numbers_and_tags':True,'all_20_argument_preservation_map':rows,'formatting_replay_script':bind(out/'format-target.py'),'literal_replacement_catalogue':bind(out/'literal-formatting-replacements.json'),'focused_checks':checks,'math_rewrite':False,'local_q1_route_preserved':True,'restricted_survival_independent_of_held_classifier_preserved':True,'new_math_cycle_or_cap_change':False,'native_writes':False,'owner_final_review':'parent same reviewer owns final checks and all consumers'}
(out/'formatting-handoff.json').write_text(json.dumps(j,indent=2)+'\n')
print(json.dumps({'target_sha256':j['formatted_target']['sha256'],'source_sha256':j['sealed_source']['sha256'],'steps':len(rows),'statement_unchanged':j['statement_byte_unchanged'],'checks':[x['name'] for x in checks]},indent=2))
