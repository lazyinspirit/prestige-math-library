#!/usr/bin/env python3
"""Independent read-only exactness checks. Never imports authored JavaScript."""
import collections, copy, json, pathlib, re
BASE = pathlib.Path(__file__).resolve().parent
ROOT = BASE.parent.parent
RUN = 'numerical-optimization-dynamics-2026-10-16'

def text(path):
    return (ROOT/path).read_bytes().decode('utf-8')
def doc(path):
    return json.loads(text(path))
def norm(s):
    return re.sub(r'\s+', ' ', s.replace('\r\n','\n')).strip()
def require(test, message):
    if not test:
        raise RuntimeError(message)

packet=json.loads((BASE/'proposal.json').read_text())
index=json.loads((BASE/'module-index.json').read_text())
ready=doc('research/'+RUN+'-owner-step2-finite-smoke-architecture/ready-packets.json')
writes={x['path']:x for x in packet['writes']}
require(len(writes)==len(packet['writes'])==14,'Duplicate or missing code target')
require(len(index)==11,'Expected core plus ten authored domain modules')
keys=[]
for entry in index:
    raw=text(entry['authored'])
    proposed=writes[entry['canonical']]['after']
    transformed=raw
    # Each recorded import literal must actually be a complete from-clause.
    replacements=[]
    for change in entry['import_changes']:
        old,new=change['before'],change['after']
        require(new=='./finite-smoke-numerical-core.mjs','Unexpected import destination')
        require(old=='./numerical-core.mjs' or old.endswith('/numerical-core.mjs'),'Unexpected authored import')
        oldmatch=re.compile(r'(\bfrom\s+[\'\"])'+re.escape(old)+r'([\'\"])')
        replacements.append((oldmatch,new))
    for pattern,new in replacements:
        transformed,count=pattern.subn(lambda m:m[1]+new+m[2],transformed)
        require(count==1,'Import replacement must match exactly one authored clause')
    require(transformed==proposed,'Authored module body changed beyond exact core import rebasing: '+entry['canonical'])
    require((BASE/'proposed'/entry['canonical']).read_text()==proposed,'Candidate body differs from proposal')
    require(packet['code_and_source_guards'][entry['authored']]==raw,'Authored code guard mismatch')
    exported=re.findall(r'^export (?:const|function) (\w+)',raw,re.M)
    require(set(entry['exports']).issubset(exported),'Declared export absent from authored text')
    keys.extend(entry.get('registry_keys',[]))
require(len(keys)==len(set(keys))==15,'Duplicate or missing numerical registration key')
require({x['code'] for x in ready['packages']}=={x['authored'] for x in index[1:]},'Ready index module set mismatch')
aggregator=writes['tools/finite-smoke-numerical.mjs']['after']
require('if (Object.hasOwn(checks, name))' in aggregator and 'throw new Error(`Duplicate numerical finite-smoke check' in aggregator,'Missing duplicate rejection')
require('export const numericalChecks = Object.freeze(checks);' in aggregator,'Missing requested aggregator export')
for entry in index[1:]:
    require("import { "+', '.join(entry['exports'])+" } from './"+pathlib.Path(entry['canonical']).name+"';" in aggregator,'Aggregator import differs from exact module index')
main=writes['tools/finite-smoke.mjs']
imp="import { numericalChecks } from './finite-smoke-numerical.mjs';\n"
spread='  ...numericalChecks,\n'
require(main['after'].count(imp)==1 and main['after'].count(spread)==1,'Main must add one import/spread')
require(main['after'].replace(imp,'',1).replace(spread,'',1)==main['before'],'Existing main registry bytes changed')
require(text('tools/finite-smoke.mjs')==main['before'],'Main current preimage drift')
for path,body in packet['code_and_source_guards'].items():
    require(text(path)==body,'Current guard drift: '+path)
    if path.startswith('tools/finite-smoke-quantum'):
        require(path not in writes,'Quantum module must never be a write target')
workflow=writes['WORKFLOW.md']
extra=[p for p in workflow['after'].split('\n\n') if p not in workflow['before'].split('\n\n')]
require(len(extra)==1 and workflow['after'].replace('\n\n'+extra[0],'',1)==workflow['before'],'WORKFLOW must add exactly one paragraph')
require('bounded, fixed finite models' in extra[0] and 'do not establish asymptotic' in extra[0],'Missing finite-model boundary')
inventory=doc('research/'+RUN+'-owner-step2-finite-smoke-architecture/inventory.json')['rows']
expected={(x['contract'],x['id'],x['entry_index']) for x in inventory if x['shape']!='registered'}
actual={(x['file'],x['id'],x['index']) for x in packet['row_operations']}
require(len(actual)==len(packet['row_operations'])==102 and actual==expected,'Operations do not equal all and only original 102 invalid entries')
require(len([x for x in inventory if x['shape']=='registered'])==4,'Expected four existing registered rows preserved')
# Resolve each proposed entry independently from the actual author packet schema.
# This does not trust full stale proposed contracts for unrelated metadata.
authored_cache={}
def authored_after(row):
    payload=authored_cache.setdefault(row['origin'],doc(row['origin']))
    if isinstance(payload,dict) and 'contracts' in payload:
        return payload['contracts'][row['id']]['finite_smoke'][row['index']]
    entries=payload if isinstance(payload,list) else payload.get('rows',payload.get('operations'))
    require(isinstance(entries,list),'Unrecognized authored metadata schema: '+row['origin'])
    matches=[]
    for entry in entries:
        identity=entry.get('id',entry.get('item'))
        path=entry.get('path')
        if identity is None and isinstance(path,list):
            identity=path[1]
        if identity!=row['id']:
            continue
        value=entry.get('after',entry.get('proposed'))
        if isinstance(value,list):
            if row['index']<len(value):
                matches.append(value[row['index']])
        elif isinstance(value,dict):
            position=int(entry['json_pointer'].rsplit('/',1)[1]) if 'json_pointer' in entry else path[-1] if isinstance(path,list) and isinstance(path[-1],int) else 0
            if position==row['index']:
                matches.append(value)
    require(len(matches)==1,'Ambiguous/missing actual author row: '+row['id'])
    return matches[0]
for row in packet['row_operations']:
    require(authored_after(row)==row['after'],'Projection differs from actual authored entry: '+row['id'])
docs={}; before_docs={}
for row in packet['row_operations']:
    require(row['path']==['contracts',row['id'],'finite_smoke',row['index']],'Bad entry path')
    if row['file'] not in docs:
        before_docs[row['file']]=doc(row['file']); docs[row['file']]=copy.deepcopy(before_docs[row['file']])
    cur=docs[row['file']]['contracts'][row['id']]['finite_smoke'][row['index']]
    require(cur==row['before'],'Current row preimage drift: '+row['id'])
    require(row['after'].get('check') in keys,'Unregistered proposed check: '+row['id'])
    assertion=row['after'].get('asserts')
    require(isinstance(assertion,str) and assertion.strip() and norm(assertion) in norm(text(row['source'])),'Non-source-exact assertion: '+row['id'])
    docs[row['file']]['contracts'][row['id']]['finite_smoke'][row['index']]=copy.deepcopy(row['after'])
restored=copy.deepcopy(docs)
for row in packet['row_operations']:
    restored[row['file']]['contracts'][row['id']]['finite_smoke'][row['index']]=row['before']
require(restored==before_docs,'Fields outside specified finite_smoke rows were changed')
for op in packet['writes']:
    require(not (ROOT/op['path']).exists() if op['before_absent'] else text(op['path'])==op['before'],'Code/doc target preimage drift: '+op['path'])
require(not packet['issues'],'Unresolved issues recorded in proposal')
print(json.dumps({'status':'read-only-source-and-projection-exactness-verified','new_modules':12,'authored_domain_modules':10,'families':15,'metadata_rows':len(actual),'metadata_items':len({x[1] for x in actual}),'metadata_files':len(docs),'existing_registered_rows_untouched':4,'fixture_module_imports_or_execution':False,'canonical_writes':False,'math_or_native_gate_claim':False},indent=2))
