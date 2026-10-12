#!/usr/bin/env python3
"""Local helper (not a repo gate): merge one item's proof-contract entry.

usage: python3 tools/local/mkcontract.py SPEC.json CONTRACTS.json

SPEC.json fields:
  id: item id
  citations: [{fact, source, source_section, quote}]     (uses auto-derived)
  derivations: {"1.1": "claim text", ...}
  routine_steps: {"2.1": "claim text", ...}              (optional)
  boundaries: {case: {status, evidence?, reason?}}       (all 8 required)

Auto-derived: citations[].uses (every step containing the fact token), and
derivations/routine_steps inputs (every explicit token in the step text).
Inputs may be overridden with {"inputs": [...]}.
"""
import json, re, sys

FACT_RE = re.compile(r'^\s*\[([FAL]\d+)\]\s*(.*)$')
STEP_RE = re.compile(r'^\s*(\d+\.\d+)\s+(.*)$')
TOKEN_RE = re.compile(r'\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b')
WIKI_RE = re.compile(r'\[\[([^\]|]+)(?:\|[^\]]*)?\]\]')


def split(raw):
    m = re.match(r'^---\r?\n(.*?)\r?\n---\r?\n?(.*)$', raw, re.S)
    return (m.group(1), m.group(2)) if m else ('', raw)


def facts_of(body):
    m = re.search(r'^##\s+Facts[^\n]*\r?\n([\s\S]*?)(?=^##\s+|(?![\s\S]))', body, re.M)
    if not m:
        return {}
    out = {}
    for block in re.split(r'\n\s*\n', m.group(1)):
        line = block.strip().split('\n')
        fm = FACT_RE.match(line[0])
        if fm:
            out[fm.group(1)] = '\n'.join([fm.group(2)] + line[1:])
    return out


def steps_of(body):
    out = {}
    for line in body.split('\n'):
        m = STEP_RE.match(line)
        if m:
            out[m.group(1)] = line
    return out


def section_text(body, heading):
    pat = r'^##\s+' + re.escape(heading) + r'\s*$\r?\n([\s\S]*?)(?=^##\s+|(?![\s\S]))'
    m = re.search(pat, body, re.M)
    return m.group(1) if m else ''


def normalise(value):
    return re.sub(r'\s+', ' ', value.replace('\r\n', ' ').replace('\n', ' ')).strip()


def check_quote(source, section, quote):
    raw = open(f'items/{source}.md').read()
    _, body = split(raw)
    text = normalise(section_text(body, section))
    if normalise(quote) not in text:
        raise SystemExit(f'quote not found in {source} §{section}: {quote[:90]!r}')


def main():
    spec = json.load(open(sys.argv[1]))
    path = sys.argv[2]
    raw = open(f'items/{spec["id"]}.md').read()
    _, body = split(raw)
    facts, steps = facts_of(body), steps_of(body)
    if steps and not facts:
        raise SystemExit('no facts found')
    if steps and len(steps) < 2:
        raise SystemExit('fewer than two steps')
    for label in {t[1] for s in steps.values() for t in TOKEN_RE.findall(s) if t[1]}:
        if label not in facts:
            raise SystemExit(f'step cites undeclared fact {label}')
    citations = []
    for c in spec['citations']:
        fact = c['fact']
        if fact not in facts:
            raise SystemExit(f'citation fact {fact} missing')
        if c['source'] not in WIKI_RE.findall(facts[fact]):
            raise SystemExit(f'{fact} does not link {c["source"]}')
        check_quote(c['source'], c.get('source_section', 'Statement'), c['quote'])
        uses = sorted((sid for sid, text in steps.items()
                       if re.search(r'\b' + re.escape(fact) + r'\b', text)), key=lambda s: tuple(int(x) for x in s.split('.')))
        citations.append({'fact': fact, 'source': c['source'],
                          'source_section': c.get('source_section', 'Statement'),
                          'quote': c['quote'], 'uses': uses})
    derivations, routine = [], []
    for sid, text in steps.items():
        claim = spec.get('derivations', {}).get(sid) or spec.get('routine_steps', {}).get(sid)
        if not claim:
            raise SystemExit(f'step {sid} has no claim in spec')
        toks = []
        for a, b in TOKEN_RE.findall(text):
            tok = a or b
            if a: tok = 'step ' + tok
            if tok not in toks:
                toks.append(tok)
        entry = {'id': ('derivation-' + sid), 'claim': claim, 'step': sid, 'inputs': toks}
        (derivations if sid in spec.get('derivations', {}) else routine).append(entry)
    boundaries = []
    order = ['empty', 'zero', 'one', 'degenerate', 'endpoints', 'nonempty-choice', 'iff-forward', 'iff-reverse']
    for case in order:
        row = spec['boundaries'][case]
        row = dict(row)
        row['case'] = case
        if row.get('status') == 'checked' and not row.get('evidence'):
            raise SystemExit(f'boundary {case} checked without evidence')
        if row.get('status') == 'not_applicable' and not row.get('reason'):
            raise SystemExit(f'boundary {case} not_applicable without reason')
        boundaries.append(row)
    doc = {'version': 1, 'scope': [], 'contracts': {}}
    try:
        doc = json.load(open(path))
    except FileNotFoundError:
        pass
    doc['version'] = 1
    if spec['id'] not in doc['scope']:
        doc['scope'].append(spec['id'])
    doc['contracts'][spec['id']] = {'citations': citations, 'derivations': derivations,
                                    'routine_steps': routine, 'boundaries': boundaries}
    json.dump(doc, open(path, 'w'), indent=1)
    print(f'merged contract for {spec["id"]}: {len(citations)} citation(s), '
          f'{len(derivations)} derivation(s), {len(routine)} routine step(s)')


if __name__ == '__main__':
    main()
