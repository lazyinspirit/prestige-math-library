#!/usr/bin/env python3
"""Root-only B-leaf repair integration, prepared but not run.
Reads exact source and metadata-key guards before any writes. Manifest requires,
other item keys and contracts remain untouched, including concurrent148prereqwork.
No native recertification, readiness or gate operation occurs here.
"""
from pathlib import Path
import json,hashlib,argparse,os
BASE=Path(__file__).resolve().parent
PAYLOAD=BASE/'root-integration-payload.json'
EXPECTED='7c823c71f70dc93768bfcbd8579dcb46ca70790be37c6dfa7790d8929e60f8ae'
sha=lambda b:hashlib.sha256(b).hexdigest()
def require(ok,msg):
    if not ok:raise RuntimeError(msg)
def main():
    parser=argparse.ArgumentParser();parser.add_argument('--apply-root-mixture-b-leaf',action='store_true');args=parser.parse_args()
    require(Path('CLAUDE.md').is_file(),'Run from repository root');require(sha(PAYLOAD.read_bytes())==EXPECTED,'payload changed');packet=json.loads(PAYLOAD.read_text());writes={}
    for op in packet['source_operations']:
        actual=Path(op['actual_path']);proposal=Path(op['proposed_path']);require(sha(actual.read_bytes())==op['actual_sha256'],'source guard changed');require(sha(proposal.read_bytes())==op['proposed_sha256'],'proposal source guard changed');writes[actual]=proposal.read_bytes()
    cp=Path(packet['contract_path']);contracts=json.loads(cp.read_text())
    for op in packet['contract_fields']:
        row=contracts['contracts'][op['contract_id']];require(row.get(op['field'])==op['expected'],'contract field changed: '+op['field']);row[op['field']]=op['replacement']
    writes[cp]=(json.dumps(contracts,indent=2,ensure_ascii=False)+'\n').encode();manifests={}
    for op in packet['manifest_fields']:
        target=Path(op['target'])
        if target not in manifests:manifests[target]=json.loads(target.read_text())
        pages=[pg for pg in manifests[target] if pg['id']==op['page_id']];require(len(pages)==1,'manifest page missing');items=[i for i in pages[0]['items'] if i['id']==op['item_id']];require(len(items)==1,'manifest item missing');row=items[0];require(row.get(op['field'])==op['expected'],'manifest item deps changed');row[op['field']]=op['replacement']
    for target,document in manifests.items():writes[target]=(json.dumps(document,indent=2,ensure_ascii=False)+'\n').encode()
    print('Preflight passed:1source,',len(packet['contract_fields']),'contract fields,1manifest item deps field.')
    if not args.apply_root_mixture_b_leaf:
        print('No writes; root must supply --apply-root-mixture-b-leaf after review.');return
    for target in writes:require(not target.with_name(target.name+'.mixture-b-leaf-root-tmp').exists(),'temporary file exists')
    for target,data in writes.items():
        temp=target.with_name(target.name+'.mixture-b-leaf-root-tmp');temp.write_bytes(data);os.replace(temp,target)
    print('Applied local scalar proof and dependency mirrors only. Root owns all rehash, recertification and actual checks.')
if __name__=='__main__':main()
