#!/usr/bin/env python3
"""Prepared root-only metadata-key merge. Repairer must not run this script.
Apply: python3 <this-file> --apply --owner /root
"""
from pathlib import Path
import argparse, hashlib, json, os, tempfile, stat
BASE=Path(__file__).resolve().parent
REPO=BASE.parent.parent
PACKET=BASE/'field-operations-and-evidence.json'
DECODER=json.JSONDecoder()
def sha(x):return hashlib.sha256(x).hexdigest()
def read(path):
    if path.is_symlink() or not path.is_file():raise RuntimeError('Nonregular carrier: '+str(path))
    return path.read_bytes()
def ws(text,pos):
    while pos<len(text) and text[pos].isspace():pos+=1
    return pos
def span(text,path,start=0):
    start=ws(text,start)
    if not path:
        _,end=DECODER.raw_decode(text,start);return start,end
    key=path[0];pos=ws(text,start+1)
    if text[start]=='{':
        while text[pos]!='}':
            field,pos=DECODER.raw_decode(text,pos);pos=ws(text,pos)
            if text[pos]!=':':raise RuntimeError('JSON colon missing')
            pos=ws(text,pos+1)
            if field==key:return span(text,path[1:],pos)
            _,pos=DECODER.raw_decode(text,pos);pos=ws(text,pos)
            if text[pos]==',':pos=ws(text,pos+1)
    elif text[start]=='[':
        index=0
        while text[pos]!=']':
            if index==key:return span(text,path[1:],pos)
            _,pos=DECODER.raw_decode(text,pos);pos=ws(text,pos)
            if text[pos]==',':pos=ws(text,pos+1)
            index+=1
    raise RuntimeError('JSON path missing: '+str(path))
def get(value,path):
    for key in path:value=value[key]
    return value
def key_span(text,path,key):
    start,end=span(text,path);pos=ws(text,start+1)
    if text[start]!='{':raise RuntimeError('Expected parent object')
    while text[pos]!='}':
        begin=pos;field,pos=DECODER.raw_decode(text,pos);finish=pos
        pos=ws(text,pos)
        if text[pos]!=':':raise RuntimeError('JSON colon missing')
        pos=ws(text,pos+1)
        if field==key:return begin,finish
        _,pos=DECODER.raw_decode(text,pos);pos=ws(text,pos)
        if text[pos]==',':pos=ws(text,pos+1)
    raise RuntimeError('Expected owned diagnostic key missing')
def main():
    ap=argparse.ArgumentParser(description=__doc__);ap.add_argument('--apply',action='store_true');ap.add_argument('--owner',required=True);args=ap.parse_args()
    if not args.apply or args.owner!='/root':raise SystemExit('Requires --apply --owner /root; root only')
    pre=json.loads(read(BASE/'root-merge-prevalidation.json'))
    if sha(read(PACKET))!=pre['packet_raw_sha256'] or sha(read(Path(__file__).resolve()))!=pre['script_raw_sha256']:raise RuntimeError('Prepared script/packet changed')
    packet=json.loads(read(PACKET));originals={};planned={}
    for op in packet['operations']:
        target=REPO/op['file']
        if target not in originals:originals[target]=read(target);planned[target]=originals[target].decode()
        text=planned[target];document=json.loads(text);parent=get(document,op['parent_path']);old=op['old_key'];new=op['new_key']
        if old not in parent and new in parent and parent[new]==op['expected_old']:continue
        if old not in parent or parent[old]!=op['expected_old'] or new in parent:raise RuntimeError('Diagnostic-key CAS refused: '+op['file']+' '+str(op['parent_path']))
        if op.get('parent_page_id') and document['pages'][op['parent_path'][1]]['page']!=op['parent_page_id']:raise RuntimeError('Page identity moved')
        if op.get('parent_source_url') and parent.get('url')!=op['parent_source_url']:raise RuntimeError('Source identity moved')
        start,end=key_span(text,op['parent_path'],old)
        replacement=json.dumps(new,ensure_ascii=False)
        changed=text[:start]+replacement+text[end:]
        test=json.loads(changed);check=get(test,op['parent_path']);check[old]=check.pop(new)
        if test!=document:raise RuntimeError('Unexpected non-key semantic change')
        planned[target]=changed
    # Every carrier/field is validated before any write; actual current bytes are
    # checked globally and again immediately before each atomic file replacement.
    for target,raw in originals.items():
        if read(target)!=raw:raise RuntimeError('Prewrite race: '+str(target))
    written=[]
    try:
        for target,text in planned.items():
            raw=text.encode()
            if raw==originals[target]:continue
            if read(target)!=originals[target]:raise RuntimeError('Per-carrier CAS race: '+str(target))
            mode=stat.S_IMODE(target.stat().st_mode);fd,tmp=tempfile.mkstemp(prefix='.url-history-root-',dir=target.parent)
            try:
                with os.fdopen(fd,'wb') as stream:stream.write(raw);stream.flush();os.fsync(stream.fileno())
                os.chmod(tmp,mode);os.replace(tmp,target)
            finally:
                if os.path.exists(tmp):os.unlink(tmp)
            written.append({'path':str(target.relative_to(REPO)),'raw_sha256':sha(raw)})
    finally:
        receipt={'version':1,'owner':'/root','packet_raw_sha256':sha(read(PACKET)),'written':written,'planned_changed_carriers':sum(text.encode()!=originals[path] for path,text in planned.items()),'reader_source_url_changes':0,'native_gate_or_readiness_credit':False}
        with open(BASE/'root-merge-applications.jsonl','a') as stream:stream.write(json.dumps(receipt)+'\n')
    print('Applied '+str(len(written))+' diagnostic-history metadata carriers; root recertification/gates remain owed.')
if __name__=='__main__':main()
