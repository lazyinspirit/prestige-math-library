"""Focused research-scaffold inventory check; no production gates or acceptance."""
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[3]
BASE = ROOT / 'research/information-theory-planning'
pages = json.loads((BASE / 'pages.json').read_text())['pages']
proposals = json.loads((BASE / 'proposed-items.json').read_text())['items']
issues = []

def unique(rows, key, what):
    result = {}
    for row in rows:
        value = row.get(key)
        if not isinstance(value, str) or not value:
            issues.append(f'{what}: missing {key}')
        elif value in result:
            issues.append(f'{what}: duplicate {value}')
        else:
            result[value] = row
    return result

page_map = unique(pages, 'page', 'page')
item_map = unique(proposals, 'id', 'proposal')
existing_items = {p.stem for p in (ROOT / 'items').glob('*.md')}
existing_pages = {}
for path in (ROOT / 'library').glob('*/*.md'):
    match = re.search(r'^page:\s*[\x22\x27]?([^\n\x22\x27]+)', path.read_text(), re.M)
    if match:
        existing_pages[match.group(1).strip()] = path

homes = {}
for name, page in page_map.items():
    listed = page.get('items', []) + page.get('examples', [])
    if len(listed) != len(set(listed)):
        issues.append(f'{name}: repeated inventory entry')
    for ident in listed:
        homes.setdefault(ident, []).append(name)
        if ident not in item_map and ident not in existing_items:
            issues.append(f'{name}: unresolved inventory {ident}')
    for required in page.get('requires', []):
        if required not in page_map and required not in existing_pages:
            issues.append(f'{name}: unresolved required page {required}')
    companion = page.get('companion')
    if companion and companion not in page_map:
        issues.append(f'{name}: missing companion {companion}')

edges = {}
for ident, item in item_map.items():
    if ident in existing_items:
        issues.append(f'{ident}: proposed ID collides with existing item')
    if not re.match(r'^(def|alg|lem|thm|prop|cor|ex|cex|rem|op)-it-', ident):
        issues.append(f'{ident}: outside proposed IT namespace')
    if item.get('page') not in page_map:
        issues.append(f'{ident}: unknown home page {item.get("page")}')
    if homes.get(ident) != [item.get('page')]:
        issues.append(f'{ident}: inventory homes {homes.get(ident)} disagree with proposal {item.get("page")}')
    deps = item.get('deps', [])
    if len(deps) != len(set(deps)):
        issues.append(f'{ident}: duplicate dependencies')
    edges[ident] = []
    for dep in deps:
        if dep not in item_map and dep not in existing_items:
            issues.append(f'{ident}: unresolved dependency {dep}')
        if dep in item_map:
            edges[ident].append(dep)
            supplier = item_map[dep]
            if supplier.get('kind') == 'open-problem' or dep.startswith('op-'):
                issues.append(f'{ident}: consumes open problem {dep}')
            home = page_map.get(supplier.get('page'), {})
            if home.get('kind') == 'B' and supplier.get('page') != item.get('page'):
                issues.append(f'{ident}: consumes external B-page item {dep}')

# Extra contract/architecture checks; no production execution or acceptance.
kind_prefix = {'definition':'def','algorithm':'alg','lemma':'lem','theorem':'thm',
               'proposition':'prop','corollary':'cor','example':'ex',
               'counterexample':'cex','remark':'rem','open-problem':'op'}
for ident,item in item_map.items():
    expected=kind_prefix.get(item.get('kind'))
    if expected and not ident.startswith(expected+'-'):
        issues.append(f'{ident}: kind/prefix disagreement')
    for dep in item.get('deps',[]):
        if dep in existing_items:
            body=(ROOT/'items'/f'{dep}.md').read_text()
            status=re.search(r'^status:\s*(.+)',body,re.M)
            if not status or status.group(1).strip()!='published':
                issues.append(f'{ident}: external supplier {dep} is not published')
for name,page in page_map.items():
    other=page_map.get(page.get('companion'),{})
    if other.get('companion')!=name or other.get('kind')==page.get('kind'):
        issues.append(f'{name}: companion is not reciprocal opposite A/B')
    positions={ident:n for n,ident in enumerate(page.get('items',[]))}
    for ident,n in positions.items():
        for dep in item_map.get(ident,{}).get('deps',[]):
            if dep in positions and positions[dep]>=n:
                issues.append(f'{name}: local supplier {dep} does not precede {ident}')
def required_closure(name,visited=None):
    visited=set() if visited is None else visited
    for required in page_map[name].get('requires',[]):
        if required not in visited:
            visited.add(required)
            if required in page_map:required_closure(required,visited)
    return visited
for ident,item in item_map.items():
    available=required_closure(item['page'])
    for dep in item.get('deps',[]):
        if dep in item_map:
            supplier_page=item_map[dep]['page']
            if supplier_page!=item['page'] and supplier_page not in available:
                issues.append(f'{ident}: supplier page {supplier_page} missing from prerequisite closure')

seen, active = set(), set()
def visit(ident):
    if ident in active:
        issues.append(f'item cycle reaches {ident}')
        return
    if ident in seen:
        return
    active.add(ident)
    for dep in edges.get(ident, []):
        visit(dep)
    active.remove(ident)
    seen.add(ident)
for ident in item_map:
    visit(ident)

page_seen, page_active = set(), set()
def visit_page(name):
    if name in page_active:
        issues.append(f'page cycle reaches {name}')
        return
    if name in page_seen:
        return
    page_active.add(name)
    for required in page_map[name].get('requires', []):
        if required in page_map:
            visit_page(required)
    page_active.remove(name)
    page_seen.add(name)
for name in page_map:
    visit_page(name)

print(json.dumps({'kind':'focused-research-inventory-check','pages':len(pages),
                  'proposals':len(proposals),'issues':issues,
                  'mathematical_acceptance':False}, indent=2))
raise SystemExit(bool(issues))
