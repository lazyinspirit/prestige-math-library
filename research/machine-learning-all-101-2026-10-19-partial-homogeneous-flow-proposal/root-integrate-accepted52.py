#!/usr/bin/env python3
"""ROOT ONLY: apply the independently accepted batch52 source/metadata packet.

Prepared by the delegated owner, never run by that owner. Invoke from repository root:
  python3 research/machine-learning-all-101-2026-10-19-partial-homogeneous-flow-proposal/root-integrate-accepted52.py --apply-root-owned-accepted52

All operations are preflighted in memory before the first write. Source files have
full byte guards; JSON changes guard only the owned field/record and preserve
foreign keys, records, control prefixes and native history. Canonical paragraphs
are unique literal replacements, preserving all unrelated plan text. There are
no gates, readiness writes, recertification or automatic driver transitions.
"""
from pathlib import Path
import argparse,copy,hashlib,json,os
ROOT=Path.cwd()
BASE=Path(__file__).resolve().parent
PAYLOAD=BASE/'root-integration-payload.json'
EXPECTED_PAYLOAD_SHA256='92001817a006cc212ccfb8c6c4fe66ab14a79d2d19218ba68c3988cbf5f4a2e4'
sha=lambda b:hashlib.sha256(b).hexdigest()
def require(condition,message):
    if not condition: raise RuntimeError(message)
def read_json(path): return json.loads(path.read_text())
def locate(document,selector):
    if 'page_id' in selector:
        rows=[x for x in document if x.get('id')==selector['page_id']]
        require(len(rows)==1,'missing/duplicate manifest page '+selector['page_id'])
        if 'item_id' in selector:
            matches=[x for x in rows[0]['items'] if x.get('id')==selector['item_id']]
            return matches[0] if len(matches)==1 else None
        return rows[0]
    if 'contract_id' in selector:return document['contracts'].get(selector['contract_id'])
    if 'edge_key' in selector:
        key=tuple(selector['edge_key']);matches=[x for x in document if (x.get('kind'),x.get('consumer'),x.get('supplier'))==key]
        require(len(matches)<=1,'duplicate edge '+repr(key));return matches[0] if matches else None
    if 'coverage_page_index' in selector:return document['pages'][selector['coverage_page_index']]['sources'][selector['source_index']]
    if 'spec_page_id' in selector:
        matches=[x for x in document['pages'] if x.get('id')==selector['spec_page_id']]
        require(len(matches)==1,'missing/duplicate spec page');return matches[0]
    return document

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--apply-root-owned-accepted52',action='store_true')
    args=parser.parse_args()
    require((ROOT/'CLAUDE.md').is_file() and (ROOT/'items').is_dir(),'Run from repository root')
    require(sha(PAYLOAD.read_bytes())==EXPECTED_PAYLOAD_SHA256,'integration payload changed after preparation')
    packet=read_json(PAYLOAD)
    planned={};documents={};originals={}
    for op in packet['source_operations']:
        target=ROOT/op['target'];proposed=ROOT/op['proposed_file'];new=proposed.read_bytes()
        require(sha(new)==op['proposed_raw_sha256'],'proposal source changed: '+str(proposed))
        if op['expected_actual_raw_sha256'] is None:require(not target.exists(),'new source already exists: '+str(target))
        else:require(target.is_file() and sha(target.read_bytes())==op['expected_actual_raw_sha256'],'actual source guard changed: '+str(target))
        require(target not in planned,'duplicate source write');planned[target]=new
    for op in packet['literal_edits']:
        target=ROOT/op['target']
        if target not in planned:planned[target]=target.read_bytes()
        text=planned[target].decode();require(text.count(op['source_excerpt'])==1,'canonical/module excerpt changed: '+str(target))
        require(sha(op['source_excerpt'].encode())==op['source_excerpt_sha256'],'excerpt payload checksum changed')
        require(sha(op['replacement'].encode())==op['replacement_sha256'],'replacement payload checksum changed')
        planned[target]=text.replace(op['source_excerpt'],op['replacement'],1).encode()
    for op in packet['json_operations']:
        target=ROOT/op['target']
        if target not in documents:documents[target]=read_json(target);originals[target]=target.read_bytes()
        doc=documents[target];row=locate(doc,op['selector']);kind=op['operation'];field=op['field'];expected=op['expected'];value=copy.deepcopy(op['replacement'])
        if kind=='create-item-if-absent':
            require(row is None,'new manifest item exists');page=locate(doc,{'page_id':op['selector']['page_id']});page['items'].append(value)
        elif kind=='create-contract-if-absent':
            require(row is None,'new contract exists');doc['contracts'][op['selector']['contract_id']]=value
        elif kind=='create-edge-if-absent':
            require(row is None,'new cross-batch edge exists');doc.append(value)
        elif kind=='remove-exact-edge':
            require(row==expected,'removed edge changed or has foreign fields: '+repr(op['selector']));doc.remove(row)
        else:
            require(row is not None,'missing owned record: '+repr(op['selector']))
            if kind=='reorder-item-records':
                require([item.get('id') for item in row[field]]==expected,'manifest item inventory/order changed')
                records={item['id']:item for item in row[field]}
                require(len(records)==len(row[field]) and set(records)==set(value),'manifest reorder IDs mismatch')
                row[field]=[records[item_id] for item_id in value]
                continue
            require(row.get(field)==expected,'owned field changed: '+str(target)+' '+repr(op['selector'])+' '+str(field))
            if kind=='set-field':row[field]=value
            elif kind=='append-unique':
                require(isinstance(row[field],list),'append target is not an array')
                for item in value:
                    if item not in row[field]:row[field].append(item)
            elif kind=='append':row[field].extend(value)
            elif kind=='append-description':
                # Keep the exact current prefix/hash binding; root rebinds it later.
                require(value not in row[field],'description addendum already present')
                row[field]=row[field]+'\n\n'+value
            else:raise RuntimeError('unknown operation '+kind)
    for target,doc in documents.items():
        require(target not in planned,'mixed JSON/literal target unsupported')
        planned[target]=(json.dumps(doc,indent=2,ensure_ascii=False)+'\n').encode()
    require(not any(str(path.relative_to(ROOT)) in packet['preserved_immutable_history'] for path in planned),'native history write forbidden')
    # Every guard above is checked before this final application boundary.
    print('Preflight complete:',len(packet['source_operations']),'owned sources;',len(packet['json_operations']),'per-key JSON operations;',len(packet['literal_edits']),'canonical/module excerpts.')
    if not args.apply_root_owned_accepted52:
        print('No writes. Root must explicitly pass --apply-root-owned-accepted52 to integrate the accepted packet.');return
    for target in planned:
        require(not target.with_name(target.name+'.accepted52-root-tmp').exists(),'temporary path exists before application: '+str(target))
    for target,new in planned.items():
        target.parent.mkdir(parents=True,exist_ok=True)
        temp=target.with_name(target.name+'.accepted52-root-tmp')
        require(not temp.exists(),'temporary path exists: '+str(temp))
        temp.write_bytes(new);os.replace(temp,target)
    print('Integrated accepted source/metadata semantics. Root still owns canonical hash rebinding,111 control/drift refresh,rehash,recertification and actual checks. No gates/readiness records were changed.')
if __name__=='__main__':main()
