#!/usr/bin/env python3
"""Splice research page designs into the physics plan, as future math tracks do.

Run from any directory with --write to update the plan and design indexes.
Canonical item arrays stay empty until engine scaffolding/authoring. Research
reservations, exact supplier mappings and limitations remain linked in full.
"""
import argparse
import hashlib
import json
import re
from collections import defaultdict
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
RESEARCH = ROOT / 'research'
FIRST = 'research/first-principles-2026-10-03/'
EXT = 'research/extended-frameworks-2026-10-03/'
DATE = '2026-10-04'
PAIRS = {}
HOMES = {}
MODULES = {}
REL_MODULE_HOMES = defaultdict(set)
SUBJECTS = {}
INPUTS = {}
ITEM_EDGES = []
EXTERNAL = []
SPLITS = []


def read(path):
    raw = (ROOT / path).read_bytes()
    INPUTS[path] = hashlib.sha256(raw).hexdigest()
    return json.loads(raw) if path.endswith('.json') else raw.decode()


def slug(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')


def title(text):
    return text.replace('-', ' ').title()


def subject(category, name, *sources):
    SUBJECTS[category] = {'title': name, 'sources': list(sources)}
    for source in sources:
        read(source)


def pair(key, category, name, library, source, reservation, requires=(), bkey=None):
    if key in PAIRS:
        raise ValueError(f'duplicate page pair: {key}')
    PAIRS[key] = {
        'id': key, 'title': name, 'subject': category,
        'category': category if library == 'physics' else category + '-mathematics',
        'library': library, 'companion': bkey or key + '-examples',
        'requires': set(requires), 'source': source, 'reservation': reservation,
    }
    return key


def reserve(item, home):
    identifier = item if isinstance(item, str) else item['id']
    if identifier in HOMES and HOMES[identifier] != home:
        raise ValueError(f'duplicate proposed home: {identifier}')
    HOMES[identifier] = home
    if isinstance(item, dict):
        for dependency in item.get('deps', item.get('claim_deps', [])):
            ITEM_EDGES.append((home, identifier, dependency))


def module(framework, label, home):
    MODULES[(framework, label)] = home


def add_cm():
    category = 'non-relativistic-classical-mechanics'
    base = FIRST + category + '/scaffold/'
    source = base + 'proposed-inventory.json'
    subject(category, 'Non-relativistic Classical Mechanics', base + 'prose-scaffold.md',
            source, base + 'closure-ledger.json', base + 'mathematical-prerequisites.md')
    inventory = read(source)
    ledger = read(base + 'closure-ledger.json')
    codes = {}
    for row in inventory['mathematical_pages']:
        key = slug(row['page'])
        codes[row['page']] = pair(key, category, title(row['page']), 'mathematics', source, row)
    # The source's module DAG is acyclic, but grouping E25 with foundational
    # geometry creates geometry -> dynamics -> geometry at page level.
    key = pair('cm-math-rotation-double-cover', category, 'Rotation Double Cover',
               'mathematics', base + 'closure-ledger.json', {'modules': ['E25']})
    SPLITS.append({'source_pair': 'CM-Math-geometry', 'new_pair': key, 'moved': ['E25'],
                   'reason': 'E25 uses E2; dynamics uses earlier foundational geometry.'})
    for row in ledger['mathematical_sections']:
        home = key if row['id'] == 'E25' else codes[row['home']]
        module('CM', row['id'], home)
        reserve('supplier-nrcm-' + row['id'], home)
    for row in ledger['mathematical_sections']:
        home = MODULES['CM', row['id']]
        for dep in row['deps']:
            target = MODULES['CM', dep]
            if target != home:
                PAIRS[home]['requires'].add(target)
        for dep in row.get('published_mathematical_deps', []):
            ITEM_EDGES.append((home, row['id'], dep))
    for row in inventory['pages']:
        label = row['page']
        name = row['title'].removeprefix(label + ' ')
        key = slug(label + '-' + name)
        codes[label] = pair(key, category, name, 'physics', source, row)
        for identifier in row['provisional_A_items']:
            reserve(identifier, key)
    # These arrows are explicitly declared in prose-scaffold.md.
    arrows = {2:[1],3:[1,2],4:[2,3],5:[3],6:[1,2,3],7:[3,6],8:[7],9:[4,7],
              10:[1,3],11:[6,10],12:[7],13:[12],14:[8,13],15:[3,5],
              16:[2,9,13,14],17:[2,3,7],18:[1,2,3]}
    for number, deps in arrows.items():
        PAIRS[codes[f'CM{number:02d}']]['requires'].update(codes[f'CM{d:02d}'] for d in deps)
    for row in ledger['physical_contracts']:
        PAIRS[codes[row['page']]]['requires'].update(MODULES['CM', d] for d in row['mathematical_sections'])
    return codes


def add_qm():
    category = 'non-relativistic-quantum-mechanics'
    base = FIRST + category + '/'
    source = base + 'scaffold/inventory.json'
    coverage_source = base + 'scaffold/baseline-claim-coverage.json'
    subject(category, 'Non-relativistic Quantum Mechanics', base + 'scaffold/prose-scaffold.md',
            source, coverage_source, base + 'closure-ledger.json')
    inventory = read(source)
    codes = {}
    for row in inventory['mathematics_pairs']:
        key = row['pair']
        pair(key, category, title(key), 'mathematics', source, row, row['requires'])
        for item in row['a_items'] + row['b_items']:
            reserve(item, key)
        for item in row['a_items']:
            MODULES.setdefault(('QM', item['proof_module']), key)
    for row in inventory['physical_pairs']:
        key = row['pair']
        codes['NRQ-A' + row['order']] = pair(key, category, title(key), 'physics', source, row)
    for row in inventory['physical_pairs']:
        PAIRS[row['pair']]['requires'].update(codes[d] for d in row['requires_physics'])
    for row in read(coverage_source)['contracts']:
        PAIRS[row['pair']]['requires'].update(MODULES['QM', d] for d in row['proof_modules'])
    for label in ['P1', 'P2', 'P7']:
        module('QM', label, inventory['physical_pairs'][0]['pair'])
    return codes


def add_relativity():
    base = FIRST + 'relativity/'
    source = base + 'scaffold/proposed-inventory-and-checks.json'
    inventory = read(source)
    codes = {}
    for prefix, category, name in [('SR','special-relativity','Special Relativity'),
                                  ('GR','general-relativity','General Relativity')]:
        prose = base + 'scaffold/' + category + '.md'
        subject(category, name, prose, source, base + 'scaffold/expanded-item-inventory.json',
                base + 'closure-ledger.json')
        names = dict(re.findall(r'^\| (' + prefix + r'\d+) ([^|]+)\|', read(prose), re.M))
        for row in inventory['pages']:
            if row['role'] != 'A' or not row['page'].startswith(prefix):
                continue
            code = row['page']
            label = names.get(code, code + ' ' + row['inventory'].split(';')[0]).strip()
            key = slug(prefix + '-' + label)
            codes[code] = pair(key, category, title(label), 'physics', source, row)
    for row in inventory['pages']:
        if row['role'] == 'A':
            PAIRS[codes[row['page']]]['requires'].update(codes[d] for d in row['requires'])
    for item in read(base + 'scaffold/expanded-item-inventory.json')['items']:
        home = codes[item['home']]
        reserve(item, home)
        # G2 is explicitly partitioned into early SR and GR interfaces. Its
        # GR supplier names denote the GR-local proof, not the SR adaptation.
        label = item['section'].split()[0].split('–')[0]
        MODULES.setdefault(('REL', label), home)
        REL_MODULE_HOMES[label].add(home)
    return codes


def add_td():
    category = 'thermodynamics'
    base = FIRST + category + '/'
    prose = base + 'scaffold/prose-scaffold.md'
    source = base + 'baseline-claim-map.json'
    subject(category, 'Thermodynamics', prose, source, base + 'closure-ledger.json')
    text = read(prose)
    labels = dict(re.findall(r'^\| (TD\d+|MP\d+) ([a-z0-9-]+)', text, re.M))
    codes = {}
    for row in read(source)['pages']:
        code = row['pair']
        key = ('td-math-' if code.startswith('MP') else 'td-') + labels[code]
        codes[code] = pair(key, category, title(labels[code]),
                           'mathematics' if code.startswith('MP') else 'physics', source, row)
        for identifier in row['named_A_ids']:
            reserve(identifier, key)
    module_groups = {
        'MP1':['M0','M1','M11','M12','M35'],
        'MP2':['M2','M3','M4','M5','M6','M8','M9','M10','M13','M14','M15','M24','M31','M32'],
        'MP3':['M7','M16','M17','M18','M19','M25','M27','M28','M29','M33','M36','M37'],
        'MP4':['M23','M26','M30'],
        'MP5':['L0','L0a'] + ['L'+str(i) for i in range(1,11)],
        'MP6':['L'+str(i) for i in range(11,19)] + ['L20'], 'MP7':['L19'],
        'MP8':['L21','L22'], 'MP9':['L23','L23a'] + ['L'+str(i) for i in range(24,33)],
        'TD10':['M20','M21'], 'TD11':['M22','M34'],
    }
    for code, modules in module_groups.items():
        for label in modules:
            module('TD', label, codes[code])
    physical = {1:[],2:['TD1'],3:['TD1','MP1','MP5'],4:['TD2','MP2'],5:['TD4','MP2'],
                6:['TD2','TD4','TD5'],7:['TD4','TD5','MP2','MP6'],
                8:['TD1','TD4','TD5','MP3','MP6','MP7'],9:['TD2','TD8'],
                10:['TD8','MP3','MP6'],11:['TD1','TD2','MP4','MP6'],12:['TD8','MP8','MP9']}
    for number, deps in physical.items():
        PAIRS[codes['TD'+str(number)]]['requires'].update(codes[d] for d in deps)
    PAIRS[codes['TD3']]['requires'].update([MODULES['TD','M35'],MODULES['TD','L10']])
    # Explicit proof dependencies from the current closure ledger retain the
    # exact specialized mathematics even where original tables were shorthand.
    ledger = read(base + 'closure-ledger.json')
    for row in ledger['new_developments'] + ledger['ly_developments']:
        home = MODULES.get(('TD',row['id']))
        if not home:
            raise ValueError('unhomed TD module ' + row['id'])
        for dependency in row.get('mathematical_dependencies', []):
            target = MODULES.get(('TD', dependency))
            if target and target != home:
                PAIRS[home]['requires'].add(target)
    PAIRS[codes['MP4']]['requires'].update([codes['MP1'],codes['MP2']])
    return codes


def add_em():
    category = 'classical-electromagnetism'
    base = FIRST + category + '/scaffold/'
    source = base + 'proposed-inventory.json'
    subject(category, 'Classical Electromagnetism', base + 'prose-scaffold.md', source,
            base + 'completed-expansion-arguments.md', base + 'definition-contracts.md')
    inventory = read(source)
    rows = {item['id']:item for item in inventory['items']}
    for row in inventory['mathematical_pages'] + inventory['pages']:
        key = row['A']
        pair(key, category, row.get('title',title(key)), row['library'], source, row, bkey=row['B'])
        for item in row.get('A_inventory', []) + row.get('B_inventory', []):
            reserve(item, key)
        for identifier in row.get('A_items', []) + row.get('B_items', []):
            reserve(rows[identifier], key)
    # The RPM interface has this explicit locator in completed expansion C1.
    # Keep its source spelling as a reservation for the covariant page.
    reserve('def-em-covariant-sign-conventions', 'em-lorentz-covariant-formulation')


def add_extended():
    for category, name in [
        ('fluid-dynamics','Fluid Dynamics'),
        ('relativistic-particle-mechanics','Relativistic Particle Mechanics'),
        ('einstein-maxwell-models','Einstein–Maxwell Models'),
        ('classical-statistical-mechanics','Classical Statistical Mechanics'),
        ('quantum-field-theory','Quantum Field Theory including QED'),
        ('quantum-statistical-mechanics','Quantum Statistical Mechanics'),
        ('thermodynamics-and-general-relativity','Thermodynamics and General Relativity')]:
        base = EXT + category + '/'
        paired = (ROOT / (base + 'paired-inventory.json')).exists()
        source = base + ('paired-inventory.json' if paired else 'proposed-inventory.json')
        prose = base + ('pathway-and-inventory.md' if paired else 'inventory-and-pathway.md')
        if category == 'fluid-dynamics':
            prose = base + 'inventory-and-pathway.md'
        subject(category, name, prose, base + 'prose-scaffold.md', source,
                base + 'supplier-map.json', base + 'closure-ledger.json')
        inventory = read(source)
        records = {r['id']:r for r in inventory.get('items',inventory.get('records',[]))}
        code_map = {}
        for row in inventory.get('pages', inventory.get('pairs', [])):
            if paired and row['side'] != 'A':
                continue
            code = row['page'] if paired else row['pair']
            key = slug(code)
            identifiers = row['items'] if paired else row['A']
            name = records[identifiers[0]]['title'] if identifiers else title(code)
            code_map[code] = pair(key, category, name, row['library'], source, row)
        for row in inventory.get('pages', inventory.get('pairs', [])):
            if paired and row['side'] != 'A':
                continue
            code = row['page'] if paired else row['pair']
            key = code_map[code]
            deps = row['deps'] if paired else row['requires']
            PAIRS[key]['requires'].update(code_map[d] for d in deps)
            identifiers = list(row['items'] if paired else row['A'] + row['B'])
            if paired:
                identifiers += next(p['items'] for p in inventory['pages'] if p['page'] == row['companion'])
            for identifier in identifiers:
                reserve(records[identifier], key)


def supplier_home(identifier):
    if identifier in HOMES:
        return HOMES[identifier]
    special = {
        'source-gr-local-proofs': sorted(set().union(*(REL_MODULE_HOMES[g] for g in ['G0','G1','G2']))),
        'GR-G1-G4': sorted(set().union(*(REL_MODULE_HOMES[g] for g in ['G1','G2','G3','G4','G6']))),
        'GR-OPTICS': MODULES['REL','Q1'],
        'TGRGS-NRE2': MODULES['CM','E2'], 'TGRGS-TD17': MODULES['TD','M17'],
        'TGRGS-TD27': MODULES['TD','M27'],
        'qsm-contract-nrqm-P1-P2-P7':'qm-framework-and-quantities',
        'research-fluid-F01-Jacobian-contract':'fd-mf01',
        'research-particle-RP-G1-null-momentum-contract':'rpm-geometry-actions',
    }
    if identifier in special:
        return special[identifier]
    patterns = [
        ('CM',r'(?:nrcm-|NR-|NRE|nr-cm-|NR-)([EMD]\d+)'),
        ('QM',r'(?:nrqm-|NRQM-)([MP]\d+)'),
        ('TD',r'(?:thermo-|TD|td-)([ML]\d+[a-z]?)'),
        ('REL',r'(?:supplier-|GR-)([GSQC]\d+)'),
        ('REL',r'research-(S\d+|Q\d+)'),
    ]
    for framework, pattern in patterns:
        match = re.search(pattern, identifier, re.I)
        if match:
            label = match[1].upper() if framework != 'TD' else match[1]
            if (framework,label) in MODULES:
                return sorted(REL_MODULE_HOMES[label]) if framework == 'REL' else MODULES[framework,label]
    return None


def finish():
    # Exact imported item homes supply P rows, as in the mathematics plan.
    receipt = read('research/math-imports.json')
    imported = {r['path'] for r in receipt['files']}
    existing_homes = {}
    existing_pages = {}
    for path in sorted(imported):
        if not path.startswith('library/') or Path(path).name.startswith('_'):
            continue
        raw = (ROOT / path).read_text()
        fm = yaml.safe_load(raw.split('---',2)[1])
        pid = fm.get('page',Path(path).stem)
        existing_pages[pid] = {'id':pid,'title':fm['title'],'kind':'P',
            'category':Path(path).parts[1], 'library':'mathematics','requires':[],'items':[]}
        for identifier in fm.get('items',[]) + fm.get('examples',[]):
            existing_homes.setdefault(identifier,pid)
    needed = set()
    for home, consumer, dependency in ITEM_EDGES:
        target = supplier_home(dependency)
        if target:
            PAIRS[home]['requires'].update(t for t in (target if isinstance(target,list) else [target]) if t != home)
        elif dependency in existing_homes:
            target = existing_homes[dependency]
            PAIRS[home]['requires'].add(target)
            needed.add(target)
        else:
            EXTERNAL.append({'page':home,'consumer':consumer,'supplier':dependency,
                             'status':'requires exact supplier resolution during Step 1 scaffolding'})
    output = {pid:existing_pages[pid] for pid in needed}
    for key, row in PAIRS.items():
        if key in existing_pages or row['companion'] in existing_pages:
            raise ValueError('planned/imported page collision: ' + key)
        output[key] = {k:row[k] for k in ['id','title','category','library','companion']}
        output[key].update(kind='A',requires=sorted(row['requires']),items=[],
            scaffold=f"research/plan-{row['subject']}-track.md")
        output[row['companion']] = {'id':row['companion'],'title':row['title']+' — Examples',
            'kind':'B','category':row['category'],'library':row['library'],
            'companion':key,'requires':[key],'items':[], 'scaffold':output[key]['scaffold']}
    # Remove redundant citation edges. Retain an explicit same-category edge
    # when its alternative route crosses a category boundary: the frontier's
    # publication denominator intentionally reads direct same-category edges.
    original_edges = {key:list(row['requires']) for key,row in output.items()}
    def reaches(start, target, category=None, visited=None):
        visited = set() if visited is None else visited
        if start == target:
            return True
        if start in visited:
            return False
        visited.add(start)
        if start not in output or category and output[start]['category'] != category:
            return False
        return any(reaches(dep,target,category,visited) for dep in original_edges[start])
    reduced_edges = {}
    for key,row in output.items():
        direct = original_edges[key]
        retained = []
        for target in direct:
            same = output.get(target,{}).get('category') == row['category']
            boundary = row['category'] if same else None
            if not any(other != target and reaches(other,target,boundary) for other in direct):
                retained.append(target)
        reduced_edges[key] = retained
    # Validate the complete original graph before dropping redundant edges.
    # Stable topological ordering refuses every cycle and missing page edge.
    order = []
    active = []
    seen = set()
    def visit(key):
        if key in seen:
            return
        if key in active:
            raise ValueError('page cycle: ' + ' -> '.join(active[active.index(key):]+[key]))
        if key not in output:
            raise ValueError('missing prerequisite page: ' + key)
        active.append(key)
        for dependency in output[key]['requires']:
            visit(dependency)
        active.pop()
        seen.add(key)
        order.append(key)
    for key in sorted(needed):
        visit(key)
    for key in PAIRS:
        visit(key)
        visit(PAIRS[key]['companion'])
    for index, key in enumerate(order,1):
        output[key]['requires'] = reduced_edges[key]
        output[key]['order'] = index
    return [output[key] for key in order]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--write',action='store_true')
    args = parser.parse_args()
    add_cm(); add_qm(); add_relativity(); add_td(); add_em(); add_extended()
    pages = finish()
    counts = defaultdict(lambda: {'physics_pairs':0,'mathematics_pairs':0})
    for row in PAIRS.values():
        counts[row['subject']][row['library']+'_pairs'] += 1
    plan = {'version':1,'generated':DATE,
        'note':'Owner-requested splice of physics prose scaffolds. Future A/B pages have empty items arrays, as in the mathematics prose-track splice. Item scope remains in the exact linked research inventories; ordinary engine source, scaffold, authoring, review and proof gates apply.',
        'pages':pages}
    report = {'version':1,'date':DATE,'subjects':dict(counts),'pairs':len(PAIRS),
        'published_math_prerequisite_pages':sum(p['kind']=='P' for p in pages),
        'source_sha256':INPUTS,'supplier_page_splits':SPLITS,
        'unresolved_research_supplier_reservations':EXTERNAL,
        'proposed_item_homes':HOMES,
        'qualification':'Page-level planning only. Research arguments and proposed items retain their source status. No proof acceptance, content dispatch or publication is asserted.'}
    if args.write:
        prior = json.loads((RESEARCH/'plan-spec.json').read_text())
        previous = RESEARCH/'prose-scaffold-splice.json'
        prior_hash = hashlib.sha256((RESEARCH/'plan-spec.json').read_bytes()).hexdigest()
        if prior['pages'] and (not previous.exists() or json.loads(previous.read_text()).get('plan_sha256') != prior_hash):
            raise ValueError('refusing to replace an independently changed physics plan')
        plan_text = json.dumps(plan,indent=2,ensure_ascii=False)+'\n'
        report['plan_sha256'] = hashlib.sha256(plan_text.encode()).hexdigest()
        for category, info in SUBJECTS.items():
            lines = ['# '+info['title']+' — future build design','',
                'Spliced on '+DATE+' at the owner’s request, using the mathematics future-track convention. Canonical item arrays remain empty until engine scaffolding and authoring. Preserve every promised claim and source qualification in the linked full designs and inventories. Resolve the exact source dependencies before accepting consumers.','',
                'Read these complete required sources before drift review or scaffolding:','']
            for source in info['sources']:
                lines.append('- `'+source+'` (SHA-256 '+INPUTS[source]+').')
            lines += ['', 'The mechanical mapping and supplier qualifications are in `research/prose-scaffold-splice.json`. Source page codes and provisional item/module names are research reservations; they are not accepted production claims.','']
            for change in SPLITS:
                if PAIRS[change['new_pair']]['subject'] == category:
                    lines += [f"Scope transfer: `{change['source_pair']}` moves {', '.join(change['moved'])} to `{change['new_pair']}`. {change['reason']} The original reservation below is retained as provenance; use the transferred home when scaffolding.",'']
            for key, row in PAIRS.items():
                if row['subject'] != category:
                    continue
                canonical = next(p for p in pages if p['id']==key)
                lines += ['## '+row['title'],'',
                    f"A page `{key}`; B companion `{row['companion']}`. Category `{row['category']}`; library `{row['library']}`.",
                    f"Order {canonical['order']}. Exact source inventory: `{row['source']}`.",
                    'Declared earlier prerequisites: '+(', '.join('`'+d+'`' for d in canonical['requires']) or 'none')+'.','',
                    'Original reservation (read together with the full required sources above):','',
                    '```json',json.dumps(row['reservation'],indent=2,ensure_ascii=False),'```','']
            (RESEARCH/f'plan-{category}-track.md').write_text('\n'.join(lines))
        (RESEARCH/'plan-spec.json').write_text(plan_text)
        (RESEARCH/'prose-scaffold-splice.json').write_text(json.dumps(report,indent=2,ensure_ascii=False)+'\n')
    print(json.dumps({'subjects':dict(counts),'pairs':len(PAIRS),'pages':len(pages),
        'unresolved_reservations':len(EXTERNAL),'splits':SPLITS,'written':args.write},indent=2))


if __name__ == '__main__':
    main()
