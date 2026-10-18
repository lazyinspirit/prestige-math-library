#!/usr/bin/env python3
"""Root-owned exact planning splice. Never run engines or alter run evidence.

Default materializes complete versioned preview plans. --apply updates the two
canonical planning registries only after fresh byte guards and native completion
evidence. This helper was prepared but not executed by the fluid author.
"""
from pathlib import Path
import argparse, copy, hashlib, json, os, subprocess

ROOT = Path(__file__).resolve().parents[3]
EVIDENCE = ROOT / 'research/scaffold-refresh-2026-10-18/fluid-dynamics'
PHYSICS = ROOT / 'physics'

def sha(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()

def load(p):
    return json.loads(p.read_text())

def encoded(value):
    return (json.dumps(value, indent=2, ensure_ascii=False) + '\n').encode()

def atomic(path, value):
    data = encoded(value)
    temporary = path.with_name(path.name + '.fluid-splice.tmp')
    temporary.write_bytes(data)
    os.replace(temporary, path)

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--apply', action='store_true')
args = parser.parse_args()
payload = load(EVIDENCE / 'physics-splice-payload.json')
plan_path = PHYSICS / 'research/plan-spec.json'
registry_path = PHYSICS / 'research/prose-scaffold-splice.json'
for p, expected in [(plan_path, payload['expected_plan_sha256']),
                    (registry_path, payload['expected_registry_sha256'])]:
    if sha(p) != expected:
        raise SystemExit('Shared bytes changed; root must regenerate the exact payload: ' + str(p))
for path, expected in payload['successor_source_sha256'].items():
    if sha(PHYSICS / path) != expected:
        raise SystemExit('Successor source changed; rebuild its pointer hashes/payload: ' + path)

# An unfinished-looking state is not a live-run verdict. Authenticate the actual
# finish event, successful native finalizer and closeout commit for the known run.
status = load(EVIDENCE / 'foreign-run-status.json')
state_dir = PHYSICS / '.physics-autopilot' / status['run']
events = [json.loads(line) for line in (state_dir / 'events.jsonl').read_text().splitlines()]
finish = [e for e in events if e.get('type') == 'finish']
if not finish or finish[-1] != status['finish_event'] or finish[-1].get('message') != 'run loop exited: done':
    raise SystemExit('Foreign physics completion changed or is unconfirmed; do not splice canonical inputs.')
# Refuse resumed activity after the authenticated finish.
finish_position = max(i for i,e in enumerate(events) if e.get('type') == 'finish')
if any(e.get('type') in {'dispatch', 'stage', 'exec'} for e in events[finish_position + 1:]):
    raise SystemExit('Foreign physics run has activity after its finish event; reassess ownership.')
native = ROOT / status['native_finalizer']['path']
if sha(native) != status['native_finalizer']['sha256'] or load(native).get('ok') is not True:
    raise SystemExit('Native foreign finalizer authentication failed.')
if subprocess.run(['git','merge-base','--is-ancestor',status['closeout_commit'],'HEAD'],cwd=ROOT).returncode:
    raise SystemExit('Foreign native closeout commit is not an ancestor of HEAD.')

plan = load(plan_path)
registry = load(registry_path)
pages = {p['id']:p for p in plan['pages']}
for update in payload['existing_page_pointer_updates']:
    row = pages.get(update['id'])
    if row != update['expected_row']:
        raise SystemExit('Original fluid page interface changed: ' + update['id'])
    row['scaffold'] = payload['successor_umbrella']
for row in payload['new_P_pages']:
    if row['id'] in pages:
        raise SystemExit('New prerequisite identity now exists; rebase payload: ' + row['id'])
    plan['pages'].append(copy.deepcopy(row));pages[row['id']] = plan['pages'][-1]
new_pairs = payload['new_pair_pages']
# Rebase on actual current max; preserve every existing order. Stable
# supplier-first pair order in payload was derived from the real pair graph.
next_order = max(p.get('order',0) for p in plan['pages']) + 1
for pair in new_pairs:
    a,b = copy.deepcopy(pair['A']),copy.deepcopy(pair['B'])
    if a['id'] in pages or b['id'] in pages:
        raise SystemExit('New fluid page identity collision; rebase payload: ' + a['id'])
    for requirement in a['requires']:
        if requirement not in pages or pages[requirement]['kind'] == 'B':
            raise SystemExit('Missing or B-page prerequisite: ' + requirement)
    a['order'],b['order'] = next_order,next_order+1
    next_order += 2
    plan['pages'].extend([a,b]);pages[a['id']]=a;pages[b['id']]=b
plan['generated'] = '2026-10-18'
plan['note'] = plan.get('note','') + ' Fluid2026-10-18 successor integrated: all26 old pair identities/195 interfaces retained;21 new pairs; item arrays remain ordinary future-build placeholders.'

registry.setdefault('source_sha256_at_original_splice', copy.deepcopy(registry.get('source_sha256',{})))
registry.setdefault('plan_sha256_at_original_splice', registry.get('plan_sha256'))
registry.setdefault('source_sha256',{}).update(payload['successor_source_sha256'])
registry['subjects']['fluid-dynamics'] = payload['fluid_subject_counts']
registry['pairs'] = sum(p.get('kind') == 'A' for p in plan['pages'])
registry['published_math_prerequisite_pages'] = sum(p.get('kind') == 'P' and p.get('library') == 'mathematics' for p in plan['pages'])
registry.setdefault('proposed_item_homes',{}).update(payload['fluid_item_homes'])
registry['source_refresh_2026_10_18_fluid'] = {
    'status':'owner-authorized planning splice; no item authoring/proof acceptance',
    'canonical_scaffold':payload['successor_umbrella'],
    'predecessor_scaffold':'research/plan-fluid-dynamics-track.md',
    'counts':payload['fluid_counts'],
    'source_sha256':payload['successor_source_sha256'],
    'completion_evidence':'../research/scaffold-refresh-2026-10-18/fluid-dynamics/foreign-run-status.json',
    'preserved_predecessor_sources':True,
}
registry['plan_sha256'] = hashlib.sha256(encoded(plan)).hexdigest()
if args.apply:
    # Recheck shared byte guards immediately before the bounded pair of writes.
    if sha(plan_path) != payload['expected_plan_sha256'] or sha(registry_path) != payload['expected_registry_sha256']:
        raise SystemExit('Shared registry changed during splice construction; no writes made.')
    atomic(plan_path,plan)
    atomic(registry_path,registry)
    destinations=[str(plan_path.relative_to(ROOT)),str(registry_path.relative_to(ROOT))]
else:
    target_plan=EVIDENCE/'physics-plan-spliced-preview.json'
    target_registry=EVIDENCE/'physics-source-registry-spliced-preview.json'
    atomic(target_plan,plan);atomic(target_registry,registry)
    destinations=[str(target_plan.relative_to(ROOT)),str(target_registry.relative_to(ROOT))]
receipt={'version':1,'mode':'canonical-applied' if args.apply else 'complete-versioned-preview',
         'destinations':destinations,'plan_sha256':registry['plan_sha256'],
         'page_count':len(plan['pages']),'fluid_counts':payload['fluid_counts'],
         'changed_original_fluid_fields':['scaffold'],
         'preserved_original_fluid_fields':'all others, including id/title/category/library/kind/requires/items/order/companion',
         'historical_run_evidence_edited':False,'engine_commands':False}
atomic(EVIDENCE/'physics-splice-execution.json',receipt)
print(json.dumps(receipt,indent=2))
