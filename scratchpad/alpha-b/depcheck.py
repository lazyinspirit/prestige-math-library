#!/usr/bin/env python3
"""Alpha-b step-3 scaffold dep checker.

For each batch pages.json: classify every item dep as
  local-A / local-B / closure (published, in requires closure)
  OUT-OF-CLOSURE (published or planned, homed outside the closure)
  UNKNOWN (no home page at all)
"""
import json, os, re, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
spec = json.load(open(os.path.join(ROOT, 'research/plan-spec.json')))
pages = spec['pages']
by_id = {p['id']: p for p in pages}


def req_closure(pid, seen=None):
    if seen is None:
        seen = set()
    for r in by_id.get(pid, {}).get('requires', []) or []:
        if r in seen or r not in by_id:
            continue
        seen.add(r)
        req_closure(r, seen)
    return seen


# home map from spec
home_spec = {}
for p in pages:
    for it in p.get('items') or []:
        home_spec.setdefault(it['id'], p['id'])

# home map + status from disk
home_disk = {}
page_status = {}
for f in glob.glob(os.path.join(ROOT, 'library/**/*.md'), recursive=True):
    txt = open(f, encoding='utf-8').read()
    m = re.match(r'^---\n(.*?)\n---\n', txt, re.S)
    if not m:
        continue
    fm = m.group(1)
    pm = re.search(r'^page:\s*(\S+)', fm, re.M)
    if not pm:
        continue
    pid = pm.group(1).strip()
    sm = re.search(r'^status:\s*(\S+)', fm, re.M)
    page_status[pid] = sm.group(1) if sm else '?'
    for key in ('items', 'examples'):
        km = re.search(r'^' + key + r':\s*\[(.*?)\]', fm, re.S | re.M)
        if km:
            for i in re.findall(r'[A-Za-z0-9\-]+', km.group(1)):
                if i.strip():
                    home_disk[i.strip()] = pid

item_status = {}
for f in glob.glob(os.path.join(ROOT, 'items/*.md')):
    txt = open(f, encoding='utf-8').read(4000)
    sm = re.search(r'^status:\s*(\S+)', txt, re.M)
    item_status[os.path.basename(f)[:-3]] = sm.group(1) if sm else '?'

batches = sys.argv[1:] or ['4', '5', '6']
for b in batches:
    path = os.path.join(ROOT, f'research/frontier-14-batch-{b}.pages.json')
    scaf = json.load(open(path))
    apage = [p for p in scaf if p['kind'] == 'A'][0]
    bpage = [p for p in scaf if p['kind'] == 'B'][0]
    closure = req_closure(apage['id'])
    local_a = {it['id'] for it in apage['items']}
    local_b = {it['id'] for it in bpage['items']}
    print(f"\n===== batch {b}: {apage['id']}")
    print(f"  A items: {len(local_a)}   B items: {len(local_b)}")
    print(f"  requires: {apage['requires']}")
    print(f"  closure ({len(closure)}): {sorted(closure)}")
    problems = []
    seen_ext = {}
    for pg in (apage, bpage):
        allowed_local = local_a if pg is apage else (local_a | local_b)
        for it in pg['items']:
            for d in it.get('deps') or []:
                if d in allowed_local:
                    continue
                if d in local_b and pg is apage:
                    problems.append(('A-DEPENDS-ON-B', it['id'], d))
                    continue
                home = home_disk.get(d) or home_spec.get(d)
                if home is None:
                    problems.append(('NO-HOME', it['id'], d))
                    continue
                st = item_status.get(d, 'MISSING-FILE')
                if home not in closure:
                    problems.append((f'OUT-OF-CLOSURE(home={home},status={st})', it['id'], d))
                    continue
                if st != 'published':
                    problems.append((f'NOT-PUBLISHED({st},home={home})', it['id'], d))
                    continue
                seen_ext[d] = home
    print(f"  distinct external deps used: {len(seen_ext)}")
    if problems:
        print("  PROBLEMS:")
        for kind, itid, d in problems:
            print(f"    {kind:55s} {itid} -> {d}")
    else:
        print("  no dep problems")
