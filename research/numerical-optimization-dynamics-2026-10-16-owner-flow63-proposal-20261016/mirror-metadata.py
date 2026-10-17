#!/usr/bin/env python3
"""Prepare or apply only the owner-approved four-consumer flow metadata mirror.
Run from repository root. Default prints exact JSON field differences; --apply
archives complete current manifest/contracts, checks all guards, and applies.
Each target is found by its stable item/fact/derivation identity so unrelated
sequential orbital F5/Proof5.1 updates remain intact.
"""
from pathlib import Path
import copy, datetime, json, re, sys
HERE=Path(__file__).resolve().parent
cfg=json.loads((HERE/'metadata-mirror-config.json').read_text())
mp,cp=Path(cfg['manifest']),Path(cfg['contracts'])
mb,cb=mp.read_bytes(),cp.read_bytes();m,c=json.loads(mb),json.loads(cb)
sup=Path(cfg['supplier']).read_text()
quote=sup.split('## Statement\n',1)[1].split('\n## ',1)[0].strip()
assert quote==cfg['supplier_statement_guard'],'Finite-C1 supplier Statement changed; reread required'
changes=[]
for op in cfg['operations']:
    ident,fact,old,new=(op[k] for k in ['id','fact','old_source','new_source'])
    source=Path('items/'+ident+'.md').read_text()
    a=source.index('['+fact+'] ');b=source.index('\n\n',a)
    assert source[a:b]==op['source_fact_guard'],ident+': source Fact changed'
    fm=source.split('---',2)[1]
    depmatch=re.search(r'^deps:\s*\n((?:[ \t]+.*\n)*)',fm,re.M)
    assert depmatch,ident+': no source deps block'
    deps=re.findall(r'^\s+-\s+(\S+)\s*$',depmatch[1],re.M)
    assert deps.count(new)==1 and old not in deps,ident+': source dependency differs'
    rows=[i for p in m for i in p['items'] if isinstance(i,dict) and i['id']==ident]
    assert len(rows)==1,ident+': manifest identity not unique'
    ds=rows[0]['deps'];assert ds.count(old)==1 and new not in ds,ident+': manifest already modified or old dependency missing'
    k=ds.index(old);ds[k]=new
    changes.append({'carrier':str(mp),'identity':ident,'field':'deps['+str(k)+']','before':old,'after':new})
    cites=[x for x in c['contracts'][ident]['citations'] if x['fact']==fact and x['source']==old]
    assert len(cites)==1,ident+': old citation not unique/present'
    cit=cites[0]
    assert cit['source_section']==op['old_source_section'] and cit['quote']==op['old_quote'],ident+': guarded citation changed'
    for key,value in [('source',new),('source_section','Statement'),('quote',quote)]:
        if cit[key]!=value:
            changes.append({'carrier':str(cp),'identity':ident,'citation_fact':fact,'field':key,'before':cit[key],'after':value})
            cit[key]=value
shoot=cfg['shooting'];dr=[x for x in c['contracts'][shoot['id']]['derivations'] if x['id']==shoot['derivation_id']]
assert len(dr)==1 and dr[0]['claim']==shoot['old_claim'],'Shooting derivation claim changed'
assert dr[0]['inputs']==shoot['old_inputs'],'Shooting derivation inputs changed'
source=Path('items/'+shoot['id']+'.md').read_text()
assert '3.1 '+shoot['new_claim']+' [step 2.1, step 2.2]' in source,'Shooting source proof does not match approved claim/tags'
for key,value in [('claim',shoot['new_claim']),('inputs',shoot['new_inputs'])]:
    changes.append({'carrier':str(cp),'identity':shoot['id'],'derivation':shoot['derivation_id'],'field':key,'before':dr[0][key],'after':value})
    dr[0][key]=value
# Reversing precisely this operation list must reconstruct the original JSON.
# Root can inspect exact field-level changes below before invoking --apply.
if '--apply' not in sys.argv:
    print(json.dumps({'status':'prepared-not-applied','changes':changes},indent=2));sys.exit(0)
assert mp.read_bytes()==mb and cp.read_bytes()==cb,'Concurrent metadata writer; retry after draining'
stamp=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
archive=HERE/('metadata-mirror-applied-'+stamp);(archive/'before').mkdir(parents=True)
(archive/'before'/mp.name).write_bytes(mb);(archive/'before'/cp.name).write_bytes(cb)
mp.write_text(json.dumps(m,indent=2)+'\n');cp.write_text(json.dumps(c,indent=2)+'\n')
(archive/'final').mkdir();(archive/'final'/mp.name).write_bytes(mp.read_bytes());(archive/'final'/cp.name).write_bytes(cp.read_bytes())
(archive/'completion.json').write_text(json.dumps({'status':'applied-owner-approved-surgical-mirror','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'changes':changes,'scope':'No source, levels, readiness, verification stamps or gates modified; orbital F5/Proof5.1 and their contract fields preserved.','config':str(HERE/'metadata-mirror-config.json')},indent=2)+'\n')
print(archive/'completion.json')
