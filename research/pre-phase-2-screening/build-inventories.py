"""Read-only content inventory; writes screening evidence in this directory only."""
from pathlib import Path
import collections
import hashlib
import io
import json
import re
import subprocess
import tarfile
import yaml

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
BASELINE = '52bba95d9bd8ede09e96f4b024d634cca38b0100'

def digest(s):
    return hashlib.sha256(s.encode()).hexdigest()

def parse(s):
    parts = re.split(r'^---\s*$', s, maxsplit=2, flags=re.M)
    if len(parts) != 3:
        raise ValueError('Missing front matter')
    return yaml.load(parts[1], Loader=yaml.CSafeLoader), parts[2]

def contracts(body):
    parts = re.split(r'(^## .*$)', body, flags=re.M)
    return '\n'.join(parts[i] + parts[i+1] for i in range(1, len(parts)-1, 2)
                     if parts[i] in ('## Statement', '## Definition'))

def assumptions(body):
    parts = re.split(r'(^## .*$)', body, flags=re.M)
    return '\n'.join(parts[i] + parts[i+1] for i in range(1, len(parts)-1, 2)
                     if parts[i] == '## Facts & Assumptions')

def dump(name, rows):
    (OUT / name).write_text(''.join(json.dumps(x, ensure_ascii=False, default=str) + '\n' for x in rows))

def main():
    baseline = {}
    raw = subprocess.check_output(['git', 'archive', BASELINE, 'items'], cwd=ROOT)
    with tarfile.open(fileobj=io.BytesIO(raw)) as archive:
        for member in archive:
            if member.isfile() and member.name.endswith('.md'):
                s = archive.extractfile(member).read().decode()
                meta, body = parse(s)
                ident = meta['id']
                if ident in baseline:
                    raise ValueError('Duplicate historical ID ' + ident)
                baseline[ident] = dict(meta=meta, sha256=digest(s), path=member.name)
    current = {}
    for p in sorted((ROOT / 'items').glob('*.md')):
        s = p.read_text()
        meta, body = parse(s)
        ident = meta['id']
        if ident in current:
            raise ValueError('Duplicate current ID ' + ident)
        current[ident] = dict(meta=meta, body=body, sha256=digest(s), path=str(p.relative_to(ROOT)))
    manifest_path = ROOT / 'research/phase-2-build-manifest.md'
    manifest = manifest_path.read_text()
    phase_pages = set()
    for line in manifest.splitlines():
        match = re.match(r'^\| [^|]+ \| [DRP] \| [^|]+ \| `([^`]+)` \|$', line)
        if match:
            phase_pages.update([match[1], match[1] + '-examples'])
    if len(phase_pages) != 296:
        raise ValueError(f'Expected 148 pairs, found {len(phase_pages)} pages')
    homes = collections.defaultdict(list)
    pages = {}
    for p in sorted((ROOT / 'library').glob('*/*.md')):
        s = p.read_text()
        if not s.startswith('---'):
            continue
        meta, body = parse(s)
        if not isinstance(meta, dict):
            continue
        ident = meta.get('page')
        if not ident:
            continue
        pages[ident] = dict(path=str(p.relative_to(ROOT)), status=meta.get('status'), sha256=digest(s))
        for item in meta.get('items', []) + meta.get('examples', []):
            if isinstance(item, str):
                homes[item].append(ident)
    missing_pages = sorted(phase_pages - pages.keys())
    supplier_ids = {i for i in current if phase_pages.intersection(homes[i])}
    # Include separately homed support explicitly attributed to a Phase-2 run.
    supplier_ids.update(i for i, x in current.items()
                        if str(x['meta'].get('pipeline_run', '')).startswith('phase-2-'))
    manifest_run_ids = set(supplier_ids)
    newly_published = {i for i, x in current.items()
                      if x['meta'].get('status') == 'published'
                      and baseline.get(i, {}).get('meta', {}).get('status') != 'published'}
    supplier_ids.update(newly_published)
    suppliers = []
    for i in sorted(supplier_ids):
        x = current[i]
        c = contracts(x['body'])
        suppliers.append(dict(id=i, path=x['path'], status=x['meta'].get('status'),
            title=x['meta'].get('title'), kind=x['meta'].get('kind'),
            aliases=x['meta'].get('aliases', []), homes=homes[i],
            phase2_homes=sorted(phase_pages.intersection(homes[i])),
            pipeline_run=x['meta'].get('pipeline_run'),
            proved_here=x['meta'].get('proved_here'),
            proof_support_status=('explicitly_not_proved_do_not_use_as_proof_supplier'
                                  if x['meta'].get('proved_here') is False
                                  else 'not_certified_by_inventory'),
            inventory_role=('newly_published_phase2_era' if i in newly_published
                            else 'preexisting_published_context'),
            scope_evidence=('manifest_page_or_phase2_run' if i in manifest_run_ids
                            else 'historical_publication_difference_outside_main_manifest'),
            baseline_status=baseline.get(i, {}).get('meta', {}).get('status', 'absent'),
            sha256=x['sha256'], contract_sha256=digest(c), contract=c,
            retrieval_text=c if c else x['body'],
            retrieval_scope='Statement/Definition' if c else 'full body; no Statement/Definition heading',
            facts_and_assumptions=assumptions(x['body']),
            forward_refs=x['meta'].get('forward_refs', []), external_refs=x['meta'].get('external_refs', []),
            deps=x['meta'].get('deps', []), justified_by=x['meta'].get('justified_by', [])))
    ledger = (ROOT / 'research/published-consumer-supplier-ledger.md').read_text()
    classes = {}
    for code in ['U-P', 'U-C', 'A-R', 'A-P']:
        m = re.search(r'^### ' + code + r' — .*$', ledger, re.M)
        section = re.split(r'\n#{1,3} ', ledger[m.end():], maxsplit=1)[0]
        for i in re.findall(r'^\| `([^`]+)` \|', section, re.M):
            if i in classes:
                raise ValueError('Duplicate active ledger ID ' + i)
            classes[i] = code
    census = []
    signals = []
    frozen_census = {}
    if (OUT / 'census.jsonl').exists():
        frozen_census = {x['id']: x for x in map(json.loads, (OUT / 'census.jsonl').read_text().splitlines())}
    for i, old in sorted(baseline.items()):
        if old['meta'].get('status') != 'published':
            continue
        x = current.get(i)
        row = dict(id=i, baseline_path=old['path'], baseline_sha256=old['sha256'],
                   baseline_status='published', baseline_commit=BASELINE,
                   current_path=x['path'] if x else None,
                   current_sha256=x['sha256'] if x else None,
                   current_status=x['meta'].get('status') if x else 'missing',
                   homes=homes[i], initial_class=classes.get(i),
                   screening_status='pending')
        if i in frozen_census:
            old_row = frozen_census[i]
            for key in ['baseline_commit', 'baseline_sha256', 'current_sha256']:
                if row[key] != old_row[key]:
                    raise ValueError('Content changed; create a fresh census rather than overwrite ' + i)
            row['initial_class'] = old_row['initial_class']
        census.append(row)
        if x:
            declared = set(x['meta'].get('deps', []) + x['meta'].get('justified_by', []))
            refs = set(re.findall(r'\[\[([^\]|#]+)', x['body']))
            targets = sorted((declared | refs) & supplier_ids - {i})
            if targets:
                signals.append(dict(id=i, initial_class=row['initial_class'], homes=homes[i],
                    phase2_targets=targets, body_targets=sorted(refs & supplier_ids - {i}),
                    note='Mechanical direct-reference signal only; not screened or a defect verdict.'))
    dump('census.jsonl', census)
    dump('suppliers.jsonl', suppliers)
    dump('direct-reference-signals.jsonl', signals)
    dump('phase2-pages.jsonl', [dict(id=i, **pages.get(i, {})) for i in sorted(phase_pages)])
    summary = dict(baseline_commit=BASELINE,
        current_commit=subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip(),
        manifest_path=str(manifest_path.relative_to(ROOT)), manifest_sha256=digest(manifest),
        historical_item_statuses=dict(collections.Counter(x['meta'].get('status') for x in baseline.values())),
        current_item_statuses=dict(collections.Counter(x['meta'].get('status') for x in current.values())),
        census_count=len(census), current_census_statuses=dict(collections.Counter(x['current_status'] for x in census)),
        phase2_page_count=len(phase_pages), missing_phase2_pages=missing_pages,
        phase2_page_statuses=dict(collections.Counter(pages.get(i, {}).get('status', 'missing') for i in phase_pages)),
        supplier_count=len(suppliers), supplier_baseline_statuses=dict(collections.Counter(x['baseline_status'] for x in suppliers)),
        supplier_current_statuses=dict(collections.Counter(x['status'] for x in suppliers)),
        newly_published_count=len(newly_published),
        newly_published_outside_manifest_run_count=len(newly_published - manifest_run_ids),
        explicitly_not_proved_catalogue_members=sum(x['proved_here'] is False for x in suppliers),
        census_initial_classes=dict(collections.Counter(x['initial_class'] or 'outside_active_index' for x in census)),
        direct_reference_signal_count=len(signals),
        direct_reference_signals_outside_active_index=sum(x['initial_class'] is None for x in signals),
        notes=['Inventory and reference extraction only. All census items still require screening receipts.',
               'Pre-existing published items on Phase-2 pages are labelled explicitly, not claimed as new Phase-2 items.',
               'No reference signal does not clear an item; missing prerequisites may have no declared links.',
               'Ledger classifications are a snapshot taken when this evidence was generated.'])
    (OUT / 'inventory-summary.json').write_text(json.dumps(summary, indent=2) + '\n')
    print(json.dumps(summary, indent=2))

if __name__ == '__main__':
    main()
