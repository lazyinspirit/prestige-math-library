import json, os, re, sys, glob
try:
    import yaml
except ImportError:
    yaml = None

spec = json.load(open('research/plan-spec.json'))
pages = spec['pages']
by_id = {p['id']: p for p in pages}

def closure(pid):
    seen, stack = set(), [pid]
    while stack:
        c = stack.pop()
        if c in seen: continue
        seen.add(c)
        p = by_id.get(c)
        if not p: continue
        for r in p.get('requires', []) or []:
            stack.append(r)
    return seen

item_home = {}
for f in glob.glob('library/**/*.md', recursive=True):
    pid = os.path.basename(f)[:-3]
    txt = open(f).read()
    m = re.search(r'^items:\s*\[(.*?)\]', txt, re.S | re.M)
    if not m: continue
    for it in re.findall(r'[a-z0-9][a-z0-9-]*', m.group(1)):
        item_home.setdefault(it, []).append(pid)

if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'closure':
        c = closure(sys.argv[2]); print(len(c)); print('\n'.join(sorted(c)))
    elif cmd == 'home':
        for it in sys.argv[2:]:
            print(f'{it:65s} -> {item_home.get(it)}')
    elif cmd == 'check':
        page = sys.argv[2]; c = closure(page)
        for it in sys.argv[3:]:
            homes = item_home.get(it) or []
            print(f'{it:62s} home={homes} IN_CLOSURE={any(h in c for h in homes)}')
