#!/usr/bin/env python3
"""Read-only independent source/parser verification of the prepared 67/79 projection."""
import copy
import json
import pathlib
import re

BASE = pathlib.Path(__file__).resolve().parent
ROOT = BASE.parent.parent
RUN = 'numerical-optimization-dynamics-2026-10-16'
projection = json.loads((BASE / 'projection.json').read_text())

def require(ok, message):
    if not ok:
        raise SystemExit(message)

def section(text, heading):
    marker = '## ' + heading
    lines = text.splitlines(keepends=True)
    starts = [i for i, line in enumerate(lines) if line.rstrip() == marker]
    if not starts:
        return None
    require(len(starts) == 1, 'Repeated section: ' + heading)
    start = starts[0] + 1
    end = next((i for i in range(start, len(lines)) if lines[i].startswith('## ')), len(lines))
    return ''.join(lines[start:end]).strip()

def front_list(text, name):
    front = text.split('---', 2)[1].splitlines()
    positions = [i for i, line in enumerate(front) if line.startswith(name + ':')]
    if not positions:
        return []
    i = positions[0]
    require(front[i] in [name + ':', name + ': []'], 'Unexpected frontmatter list: ' + name)
    result = []
    for line in front[i+1:]:
        if line and not line[0].isspace():
            break
        if line.startswith('  - '):
            result.append(line[4:])
    return result

def proof_rows(text):
    body = section(text, 'Proof') or section(text, 'Verification')
    if body is None:
        return [], None
    # Line-oriented scanning independently avoids any first-inline-[F] truncation.
    paragraphs = []
    preamble = []
    for line in body.splitlines(keepends=True):
        start = re.match(r'^(\d+\.\d+)\s+(.*)', line)
        if start:
            paragraphs.append([start[1], line[start.start(2):]])
        elif paragraphs:
            paragraphs[-1][1] += line
        else:
            preamble.append(line)
    result = []
    for number, full in paragraphs:
        full = full.strip()
        if full.endswith('∎'):
            full = full[:-1].rstrip()
        require(full.endswith(']'), 'Missing terminal inputs ' + number)
        bracket = full.rfind('[')
        tags = full[bracket+1:-1]
        require('[' not in tags and ']' not in tags, 'Nested terminal tags ' + number)
        inputs = [tag.strip() for tag in tags.split(',')]
        claim = full[:bracket].rstrip()
        result.append({'step': number, 'claim': claim, 'inputs': inputs})
    return result, section(text, 'Facts & Assumptions') or ''.join(preamble)

for path, expected in projection['source_guards'].items():
    require((ROOT / path).read_text() == expected, 'Source guard drift: ' + path)

documents = {}
seen = set()
for op in projection['operations']:
    key = (op['file'], tuple(op['path']))
    require(key not in seen, 'Duplicate operation: ' + repr(key))
    seen.add(key)
    if op['file'] not in documents:
        documents[op['file']] = json.loads((ROOT / op['file']).read_text())
    target = documents[op['file']]
    for part in op['path'][:-1]:
        target = target[part]
    last = op['path'][-1]
    require(target[last] == op['before'] or target[last] == op['after'], 'Metadata guard drift: ' + repr(key))
    target[last] = copy.deepcopy(op['after'])
require(len(seen) == 34, 'Expected exact 34 operations')

summaries = []
for batch, expected_steps, expected_citations in [(67, 31, 32), (79, 59, 45)]:
    prefix = f'research/{RUN}-batch-{batch}'
    pages = documents.get(prefix + '.pages.json')
    if pages is None:
        pages = json.loads((ROOT / (prefix + '.pages.json')).read_text())
    contracts = documents[prefix + '.proof-contracts.json']['contracts']
    steps = citations = manifests = used_facts = inline_fact_mentions = 0
    for page in pages:
        for item in page['items']:
            source = (ROOT / 'items' / (item['id'] + '.md')).read_text()
            for field in ['deps', 'justified_by']:
                if field in item:
                    require(item[field] == front_list(source, field), f'{batch}/{item["id"]}: {field} mismatch')
            manifests += 1
    for item_id, contract in contracts.items():
        source = (ROOT / 'items' / (item_id + '.md')).read_text()
        actual, facts = proof_rows(source)
        proposed = contract['derivations']
        require(len(actual) == len(proposed), item_id + ': step count')
        for a, p in zip(actual, proposed):
            for field in ['step', 'claim', 'inputs']:
                require(a[field] == p[field], item_id + ': full ' + field + ' mismatch at ' + a['step'])
            inline_fact_mentions += len(re.findall(r'\[((?:F|L|A)\d+)\]', a['claim']))
            used_facts += sum(bool(re.fullmatch(r'(?:F|L|A)\d+', x)) for x in a['inputs'])
        # Every source-linked named fact must have exactly one full-section citation
        # per supplier. Local assumptions without source links remain assumptions.
        expected_pairs = []
        if facts:
            for m in re.finditer(r'^\[((?:F|L|A)\d+)\]\s+(.*?)(?=\n\n|\Z)', facts, re.M | re.S):
                expected_pairs.extend((m[1], supplier) for supplier in re.findall(r'\[\[([^\]]+)\]\]', m[2]))
        require([(c['fact'], c['source']) for c in contract['citations']] == expected_pairs, item_id + ': fact/supplier citation mapping')
        for citation in contract['citations']:
            supplier = (ROOT / 'items' / (citation['source'] + '.md')).read_text()
            expected = section(supplier, citation['source_section'])
            require(expected is not None and citation['quote'].strip() == expected, item_id + ': complete supplier quote ' + citation['source'])
            uses = [a['step'] for a in actual if citation['fact'] in a['inputs']]
            require(citation['uses'] == uses, item_id + ': terminal-tag fact uses ' + citation['fact'])
        steps += len(actual)
        citations += len(contract['citations'])
    require(steps == expected_steps and citations == expected_citations, 'Expected complete batch counts: ' + str(batch))
    summaries.append({'batch': batch, 'manifest_items': manifests, 'complete_proof_paragraphs': steps,
                      'complete_supplier_sections': citations, 'terminal_fact_inputs': used_facts,
                      'inline_fact_mentions_retained': inline_fact_mentions, 'status': 'exact-match'})
print(json.dumps({'mode': 'read-only; in-memory projection only', 'operations': len(seen), 'batches': summaries}, indent=2))
