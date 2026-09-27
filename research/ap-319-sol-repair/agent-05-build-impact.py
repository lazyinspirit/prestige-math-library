from pathlib import Path
import collections, hashlib, json, re, sys
import yaml

base = Path('items')
rev = collections.defaultdict(list)
status = {}
for path in base.glob('*.md'):
    source = path.read_text()
    pieces = source.split('---', 2)
    front = pieces[1] if len(pieces) >= 3 else ''
    body = pieces[2] if len(pieces) >= 3 else source
    try:
        meta = yaml.safe_load(front) or {}
    except yaml.YAMLError:
        meta = {}
    item_id = meta.get('id', path.stem)
    status[item_id] = meta.get('status', 'unknown')
    refs = collections.defaultdict(list)
    for field in ('deps', 'forward_refs', 'justified_by'):
        for ref in meta.get(field, []) or []:
            if isinstance(ref, str):
                refs[ref].append(f'frontmatter {field}')
        # Recovery for malformed unrelated frontmatter.
        match = re.search(r'(?m)^' + field + r':\s*\[([^\]]*)\]', front, re.S)
        if match:
            for ref in re.findall(r'[a-z][a-z0-9-]+', match.group(1)):
                refs[ref].append(f'frontmatter {field}')
    offset = len(source[:source.index(body)].splitlines()) if body is not source else 0
    for line_number, line in enumerate(body.splitlines(), offset + 1):
        for ref in re.findall(r'\[\[([^\]|]+)(?:\|[^\]]*)?\]\]', line):
            refs[ref].append(f'items/{item_id}.md:{line_number}: {line.strip()[:400]}')
    for ref, uses in refs.items():
        rev[ref].append((item_id, list(dict.fromkeys(uses))))


def claim(source):
    match = re.search(r'(?m)^## (Statement|Definition|Example|Counterexample|Statement refuted)\n', source)
    if not match:
        return ''
    tail = source[match.end():]
    end = re.search(r'(?m)^## ', tail)
    return tail[:end.start()] if end else tail

for root in sys.argv[1:]:
    queue = collections.deque([(root, [root])])
    seen = {root}
    nodes = []
    while queue:
        current, path = queue.popleft()
        for nxt, uses in sorted(rev[current]):
            if nxt in seen:
                continue
            seen.add(nxt)
            consumer_path = path + [nxt]
            nodes.append({'id': nxt, 'status': status[nxt], 'path': consumer_path,
                          'exact_reference': uses,
                          'disposition': 'pending exact-use review' if len(consumer_path) == 2
                          else 'indirect; assess if changed premise reaches this node'})
            queue.append((nxt, consumer_path))
    old = Path('research/ap-319-sol-repair/before') / (root + '.md')
    if not old.exists():
        old = Path('research/ap-319-sol-repair/agent-05-before-maintenance') / (root + '.md')
    new = base / (root + '.md')
    result = {'origin': root,
              'original_claim_sha256': hashlib.sha256(claim(old.read_text()).encode()).hexdigest() if old.exists() else None,
              'current_claim_sha256': hashlib.sha256(claim(new.read_text()).encode()).hexdigest(),
              'search_method': 'All existing draft/published item frontmatter deps, forward_refs, justified_by and body wikilinks; shortest reference paths by BFS. Exact references carry current absolute source lines.',
              'node_count': len(nodes), 'direct_count': sum(len(n['path']) == 2 for n in nodes),
              'nodes': nodes}
    target = Path('research/ap-319-sol-repair') / ('agent-05-impact-' + root + '.json')
    target.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
    print(root, len(nodes), 'nodes,', result['direct_count'], 'direct')
