from pathlib import Path
import re,json,subprocess,hashlib,datetime
base=Path(__file__).resolve().parent
canonical=base.parents[3]/'tools/physics-support/validate-plan.mjs'
# base = physics/research/RUN-findings/page-cycle-investigation
canonical=Path.cwd().parent/'tools/physics-support/validate-plan.mjs'
original=canonical.read_text()
old='    : (itemsOnHomePage.get(pid) ?? plannedItems);'
new='''    // Outside page contents are supplier context only for the actual scoped
    // item closure; reaching one supplier must not audit every page neighbour.
    : (itemsOnHomePage.get(pid) ?? plannedItems).filter(id => itemContext.has(canonicalItem(id)));'''
assert original.count(old)==1
patched=original.replace(old,new)
(base/'validate-plan.original.mjs').write_text(original)
(base/'validate-plan.patched.mjs').write_text(patched)
p=subprocess.run(['diff','-u','--label','a/tools/physics-support/validate-plan.mjs','--label','b/tools/physics-support/validate-plan.mjs',str(base/'validate-plan.original.mjs'),str(base/'validate-plan.patched.mjs')],capture_output=True,text=True)
assert p.returncode==1
(base/'reviewable.patch').write_text(p.stdout)
for name,source in [('baseline',original),('candidate',patched)]:
 adapted=re.sub(r"from '(\./[^']+)'",lambda m:"from '"+str((canonical.parent/m[1]).resolve())+"'",source)
 (base/f'validate-plan-{name}.mjs').write_text(adapted)

def item(id,deps=[],aliases=[]):
 return {'id':id,'kind':'definition','deps':deps,'aliases':aliases}
def page(id,kind,order,items=[],requires=[],companion=None):
 out={'id':id,'title':id,'category':'fixture','kind':kind,'order':order,'items':items,'requires':requires}
 if companion:out['companion']=companion
 return out

def fixture(name,rootdeps=['def-a'],extra=None,localcycle=False,reqcycle=False,actualcycle=False,contextcycle=False):
 repo=base/'fixtures'/name
 for d in ['items','library/fixture','research']:(repo/d).mkdir(parents=True,exist_ok=True)
 roots=[item('def-root',rootdeps,['def-root-alias'])]
 apage=page('frontier','A',10,roots,['supplier-a','supplier-b'], 'frontier-examples')
 bpage=page('frontier-examples','B',11,[],['frontier'])
 outside=[page('supplier-a','P',0),page('supplier-b','P',1)]
 allitems=[*roots,item('def-a'),item('def-unused-a',['def-unused-b']),item('def-unused-b',['def-unused-a'])]
 homes={'frontier':['def-root'],'frontier-examples':[],'supplier-a':['def-a','def-unused-a'],'supplier-b':['def-unused-b']}
 if actualcycle:
  allitems=[*roots,item('def-a',['def-root-alias'])]
  homes={'frontier':['def-root'],'frontier-examples':[],'supplier-a':['def-a'],'supplier-b':[]}
 if contextcycle:
  allitems=[*roots,item('def-a-high',['def-b-low']),item('def-a-low'),item('def-b-high',['def-a-low']),item('def-b-low')]
  homes={'frontier':['def-root'],'frontier-examples':[],'supplier-a':['def-a-high','def-a-low'],'supplier-b':['def-b-high','def-b-low']}
 if localcycle:
  apage['items']=[item('def-root',['def-other-base']),item('def-root-base')]
  other=page('other-frontier','A',12,[item('def-other',['def-root-base']),item('def-other-base')],['frontier'],'other-frontier-examples')
  ob=page('other-frontier-examples','B',13,[],['other-frontier'])
  apage['requires'].append('other-frontier')
  extra=[other,ob];allitems+=other['items']+[item('def-root-base')];homes['other-frontier']=[i['id'] for i in other['items']];homes['other-frontier-examples']=[];homes['frontier']=['def-root','def-root-base']
 if reqcycle:outside[0]['requires']=['supplier-b'];outside[1]['requires']=['supplier-a']
 selected=[apage,bpage]+(extra or [])
 spec={'pages':outside+selected}
 for it in allitems:
  (repo/'items'/f"{it['id']}.md").write_text('---\nid: '+it['id']+'\nkind: definition\ndeps: '+json.dumps(it['deps'])+'\naliases: '+json.dumps(it.get('aliases',[]))+'\n---\n\n## Definition\n\nFixture.\n')
 for pid,ids in homes.items():
  (repo/'library/fixture'/f'{pid}.md').write_text('---\npage: '+pid+'\nstatus: '+('draft' if pid in [p['id'] for p in selected] else 'published')+'\nitems: '+json.dumps(ids)+'\nexamples: []\n---\n')
 (repo/'research/plan.json').write_text(json.dumps(spec))
 (repo/'research/fixture-run-batch-1.pages.json').write_text(json.dumps(selected))
 (repo/'research/selection.json').write_text(json.dumps([p['id'] for p in selected]))
 return repo

scoped=fixture('unrelated-supplier-cycle')
actual=fixture('actual-cross-frontier-item-cycle',actualcycle=True)
context=fixture('relevant-context-page-cycle',rootdeps=['def-a-high','def-b-high'],contextcycle=True)
local=fixture('selected-page-cycle',localcycle=True)
requires=fixture('declared-supplier-cycle',reqcycle=True)
# A resolved supplier whose actual transitive dependency is missing must still fail.
missing=fixture('missing-context-dependency');(missing/'items/def-a.md').write_text('---\nid: def-a\nkind: definition\ndeps: [def-missing]\n---\n')
results=[]
def run(name,tool,repo,mode='run',expected=0,tag=None,selection=None):
 cmd=['node',str(base/f'validate-plan-{tool}.mjs'),str(repo/'research/plan.json'),'--repo',str(repo)]
 if mode=='run':cmd+=['--run','fixture-run']
 elif mode=='selection':cmd+=['--pages-file',str(repo/'research/selection.json')]
 if selection:cmd+=['--pages-file',str(selection)]
 p=subprocess.run(cmd,text=True,capture_output=True)
 output=p.stdout+p.stderr;(base/(name+'.log')).write_text(output)
 passed=(p.returncode==expected and (not tag or tag in output))
 results.append({'name':name,'command':cmd,'exit_code':p.returncode,'expected':expected,'required_diagnostic':tag,'passed':passed,'log':str(base/(name+'.log'))})
 print(name,p.returncode,passed)
 return p
run('baseline-reproduces-overbroad-cycle','baseline',scoped,expected=1,tag='[page-cycle]')
run('candidate-excludes-unreached-page-neighbours','candidate',scoped)
run('candidate-explicit-page-selection','candidate',scoped,mode='selection')
run('candidate-retains-cross-frontier-alias-cycle','candidate',actual,expected=1,tag='[item-cycle]')
run('candidate-retains-relevant-context-page-cycle','candidate',context,expected=1,tag='[page-cycle]')
run('candidate-retains-selected-page-cycle','candidate',local,expected=1,tag='[page-cycle]')
run('candidate-retains-declared-supplier-cycle','candidate',requires,expected=1,tag='[requires-cycle]')
run('candidate-retains-missing-context-edge','candidate',missing,expected=1,tag='[resolve]')
(scoped/'research/empty.json').write_text('[]');(scoped/'research/wrong.json').write_text('["supplier-a"]')
run('candidate-rejects-duplicate-selection','candidate',scoped,mode='selection',expected=2,selection=scoped/'research/empty.json',tag='may be specified once')
# A single explicit empty selection is also rejected before loading source.
cmd=['node',str(base/'validate-plan-candidate.mjs'),str(scoped/'research/plan.json'),'--repo',str(scoped),'--pages-file',str(scoped/'research/empty.json')]
p=subprocess.run(cmd,text=True,capture_output=True);(base/'candidate-empty-selection.log').write_text(p.stdout+p.stderr);results.append({'name':'candidate-single-empty-selection','command':cmd,'exit_code':p.returncode,'expected':2,'passed':p.returncode==2 and 'nonempty JSON' in p.stderr})
run('candidate-rejects-run-selection-mismatch','candidate',scoped,expected=2,selection=scoped/'research/wrong.json',tag='must exactly match')
# Unscoped behavior must remain byte-identical because the changed branch is scoped only.
q=run('baseline-unscoped','baseline',context,mode='unscoped',expected=0)
r=run('candidate-unscoped','candidate',context,mode='unscoped',expected=0)
results.append({'name':'unscoped-behavior-identical','passed':q.returncode==r.returncode and q.stdout==r.stdout and q.stderr==r.stderr})
unscoped=fixture('unscoped-planned-cycle')
uspec=json.loads((unscoped/'research/plan.json').read_text())
uspec['pages'][0]['items']=[item('def-a'),item('def-unused-a',['def-unused-b'])]
uspec['pages'][1]['items']=[item('def-unused-b',['def-unused-a'])]
(unscoped/'research/plan.json').write_text(json.dumps(uspec))
run('baseline-detects-unscoped-planned-cycle','baseline',unscoped,mode='unscoped',expected=1,tag='[item-cycle]')
run('candidate-retains-unscoped-planned-cycle','candidate',unscoped,mode='unscoped',expected=1,tag='[item-cycle]')
(base/'regression-results.json').write_text(json.dumps({'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'original_tool_sha256':hashlib.sha256(original.encode()).hexdigest(),'candidate_tool_sha256':hashlib.sha256(patched.encode()).hexdigest(),'results':results},indent=2)+'\n')
assert all(r['passed'] for r in results)
