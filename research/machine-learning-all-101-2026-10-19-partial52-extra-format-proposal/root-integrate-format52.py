#!/usr/bin/env python3
"""Root-only guarded format integration. Prepared but not run by delegated owner.
Run from repository root with --apply-root-format52 after reviewing the packet.
No gates, readiness, manifest, level, canonical or mathematical changes.
"""
import json,hashlib,argparse,os
from pathlib import Path
BASE=Path(__file__).resolve().parent
PAYLOAD=BASE/'root-format-integration-payload.json'
PAYLOAD_SHA256='bc185c6f5531801400d6a91594d0090ade15e680f91024b5577eb48ba2b37dc7'
sha=lambda b:hashlib.sha256(b).hexdigest()
def require(ok,message):
    if not ok:raise RuntimeError(message)
def main():
    parser=argparse.ArgumentParser();parser.add_argument('--apply-root-format52',action='store_true');args=parser.parse_args()
    require(Path('CLAUDE.md').is_file(),'Run from repository root')
    require(sha(PAYLOAD.read_bytes())==PAYLOAD_SHA256,'payload changed')
    packet=json.loads(PAYLOAD.read_text());writes={}
    for row in packet['source_operations']:
        target=Path(row['actual_path']);source=Path(row['proposed_path'])
        require(sha(target.read_bytes())==row['actual_sha256'],'actual source changed: '+str(target))
        require(sha(source.read_bytes())==row['proposed_sha256'],'proposal source changed: '+str(source))
        writes[target]=source.read_bytes()
    target=Path(packet['contract_path']);document=json.loads(target.read_text())
    for row in packet['contract_field_operations']:
        record=document['contracts'][row['contract_id']]
        require(record.get(row['key'])==row['expected'],'owned contract field changed: '+row['contract_id']+'/'+row['key'])
        record[row['key']]=row['replacement']
    writes[target]=(json.dumps(document,indent=2,ensure_ascii=False)+'\n').encode()
    print('Preflight:',len(packet['source_operations']),'format-only sources;',len(packet['contract_field_operations']),'owned contract-field changes.')
    if not args.apply_root_format52:
        print('No writes; root must supply --apply-root-format52 to apply.');return
    for file in writes:require(not file.with_name(file.name+'.format52-root-tmp').exists(),'temporary file exists')
    for file,data in writes.items():
        temp=file.with_name(file.name+'.format52-root-tmp');temp.write_bytes(data);os.replace(temp,file)
    print('Applied phase/contract formatting only. Root owns all actual checks and native recertification.')
if __name__=='__main__':main()
