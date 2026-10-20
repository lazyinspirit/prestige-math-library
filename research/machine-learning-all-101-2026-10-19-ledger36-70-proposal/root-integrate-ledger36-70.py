#!/usr/bin/env python3
"""Root-only guarded ledger36–70 integration. This script was prepared, not run.
Only seven cross-batch ledger arrays are written. Foreign-consumer rows remain
separate in foreign-consumer-rehoming.json for root merging after range packets.
No sources, manifests, contracts, page files, readiness or native gates are edited.
"""
from pathlib import Path
import json,hashlib,argparse,os
BASE=Path(__file__).resolve().parent
OPS=BASE/'guarded-file-operations.json'
OPS_SHA='89fe443b07951551c3cf5753c6479919022a4c37327d5787bcf56a82ce6c5229'
sha=lambda data:hashlib.sha256(data).hexdigest()
def require(ok,message):
    if not ok:raise RuntimeError(message)
def main():
    parser=argparse.ArgumentParser();parser.add_argument('--apply-root-ledger36-70',action='store_true');args=parser.parse_args()
    require(Path('CLAUDE.md').is_file(),'Run from repository root')
    require(sha(OPS.read_bytes())==OPS_SHA,'operation payload changed')
    operations=json.loads(OPS.read_text())['operations'];writes={}
    for row in operations:
        target=Path(row['target']);source=Path(row['proposed_path'])
        require(sha(target.read_bytes())==row['expected_raw_sha256'],'actual ledger guard changed: '+str(target))
        require(sha(source.read_bytes())==row['proposed_raw_sha256'],'proposal guard changed: '+str(source))
        data=json.loads(source.read_text());require(isinstance(data,list),'ledger must be array');writes[target]=source.read_bytes()
    print('All',len(writes),'ledger preimages and proposals pass guards; foreign rehoming is separate.')
    if not args.apply_root_ledger36_70:
        print('No writes. Root must pass --apply-root-ledger36-70 to apply reviewed arrays.');return
    for target in writes:require(not target.with_name(target.name+'.ledger36-70-root-tmp').exists(),'temporary path exists')
    for target,data in writes.items():
        temp=target.with_name(target.name+'.ledger36-70-root-tmp');temp.write_bytes(data);os.replace(temp,target)
    print('Applied scoped ledger arrays only. Root owns foreign rehoming and derived ledger refresh; no readiness or gate operation ran.')
if __name__=='__main__':main()
