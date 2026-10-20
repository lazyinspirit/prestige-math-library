#!/usr/bin/env python3
"""Pure mechanical preflight probes; no repository writes or fixture callbacks."""
from pathlib import Path
import importlib.util,json,copy,tempfile
BASE=Path(__file__).resolve().parent
spec=importlib.util.spec_from_file_location('root_smoke_driver',BASE/'root-only-integrate.py');m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
plan=json.loads((BASE/'normalized-plan.json').read_text());original=m.raw;tests=[]
ops,inventory=m.prepare(plan);assert len(ops)==33;tests.append({'case':'exact-current-preflight','passed':True,'writes':0})
first=plan['operations'][0];target=first['target'];id=first['path'][1];doc=json.loads(original(target));doc['contracts'][id]['boundaries'][0]['evidence']='Independent concurrently revised boundary metadata; pure mechanical probe.';injected=json.dumps(doc,ensure_ascii=False,indent=2).encode()
m.raw=lambda p:injected if str(p)==target else original(p)
prepared,_=m.prepare(plan);row=next(x for x in prepared if x[0]==target);assert row[1]==injected
out=json.loads(row[2]);assert out['contracts'][id]['boundaries']==doc['contracts'][id]['boundaries'];expected=copy.deepcopy(doc)
for op in plan['operations']:
 if op['target']==target:expected['contracts'][op['path'][1]]['finite_smoke']=op['after']
assert out==expected;tests.append({'case':'concurrent-foreign-boundary-fields-preserved','passed':True,'writes':0})
m.raw=original
probes=[]
changed=json.loads(original(target));changed['contracts'][id]['finite_smoke'][0]['conflict_probe']=True;probes.append(('owned-array-conflict',target,json.dumps(changed).encode()))
g=plan['source_guards'][0];probes.append(('source-raw-conflict',g['target'],original(g['target'])+b'\n'))
p=plan['modules'][0]['candidate'];probes.append(('staged-candidate-revision',p,original(p)+b'\n'))
p='tools/finite-smoke.mjs';probes.append(('current-registry-revision',p,original(p)+b'\n'))
l=plan['inventory']['existing_untouched_legacy_obligations'][0];d=json.loads(original(l['contract']));d['contracts'][l['id']]['finite_smoke']=[];probes.append(('missing-legacy-obligation-not-silently-ignored',l['contract'],json.dumps(d).encode()))
p=plan['selftest_map']['path'];probes.append(('fixed-default-map-revision',p,original(p)+b'\n'))
for name,target,changed in probes:
 m.raw=lambda p:changed if str(p)==target else original(p)
 try:m.prepare(plan)
 except (AssertionError,ValueError):tests.append({'case':name,'passed':True,'rejected_before_actual_mutation':True})
 else:raise AssertionError('missed guard '+name)
 finally:m.raw=original
# Exercise generic raw JSON path lookup with unrelated strings containing braces,
# arbitrary indentation, commas and nested keys. It must isolate only the array.
s=' { "contracts" : { "x" : { "note":"} finite_smoke [,]", "finite_smoke" : [ {"x":1} ], "other":[3] } }, "boundary":2 }'
a,z=m.span(s,['contracts','x','finite_smoke']);assert json.loads(s[a:z])==[{'x':1}];changed=s[:a]+'[{"x":2}]'+s[z:];assert changed[:a]==s[:a] and json.loads(changed)['boundary']==2;tests.append({'case':'generic-raw-span-preserves-foreign-bytes','passed':True})
try:m.parse('{"x":1,"x":2}')
except ValueError:tests.append({'case':'ambiguous-duplicate-JSON-key-rejected','passed':True})
else:raise AssertionError('duplicate key not rejected')
(BASE/'mechanical-preflight-tests.json').write_text(json.dumps({'tests':tests,'actual_source_tool_contract_writes':0,'fixture_callbacks_executed':0,'whole_registry_selftest':False,'seal_created':False},indent=2)+'\n');print(json.dumps({'mechanical_probes_passed':len(tests),'writes':0,'callbacks':0}))
