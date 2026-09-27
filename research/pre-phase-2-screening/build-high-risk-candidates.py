"""Prioritize possible direct uses of newly published Phase-2 items.

This is a retrieval worklist, not mathematical screening or a clearance rule.
"""

from collections import Counter, defaultdict
from pathlib import Path
import hashlib
import json
import re
import runpy

OUT = Path(__file__).resolve().parent
ROOT = OUT.parents[1]
parse = runpy.run_path(str(OUT / 'build-inventories.py'))['parse']

STOP = set('''
the and for with from over under into onto within without whose which where
when that this its their every each some all are has have one two three an of
by on in a to is be as if iff let then b x y z n m p q t r k d l ab c
zero non not can same finite set sets map maps function functions theorem lemma
proposition corollary definition example false true basic standard properties
property form forms relation relations proof derived gives given exists exist
using use at via arbitrary respectively or upper lower left right closed open
positive negative real complex natural integer integers field fields ring rings
group groups module modules space spaces topological algebra algebras category
categories matrix matrices graph graphs polynomial polynomials sequence sequences
linear continuous smooth thm lem prop def cor ex fs cex rem von
'''.split())


def tokens(value):
    return set(re.findall(r'[a-z][a-z0-9]+', value.lower())) - STOP


def load_jsonl(name):
    return [json.loads(line) for line in (OUT / name).read_text().splitlines()]


def main():
    census = load_jsonl('census.jsonl')
    suppliers = [row for row in load_jsonl('suppliers.jsonl')
                 if row['inventory_role'] == 'newly_published_phase2_era']
    new_ids = {row['id'] for row in suppliers}
    direct = defaultdict(set)
    for row in load_jsonl('direct-reference-signals.jsonl'):
        direct[row['id']].update(new_ids.intersection(row['phase2_targets']))

    page_categories = {}
    for path in (ROOT / 'library').glob('*/*.md'):
        raw = path.read_text()
        if not raw.startswith('---'):
            continue
        try:
            page_meta, _ = parse(raw)
        except ValueError:
            continue
        if isinstance(page_meta, dict) and page_meta.get('page'):
            page_categories[page_meta['page']] = path.parent.name

    item_tokens = {}
    item_titles = {}
    item_bodies = {}
    item_categories = {}
    frequency = Counter()
    for row in census:
        item_path = ROOT / row['current_path']
        raw = item_path.read_text()
        if hashlib.sha256(raw.encode()).hexdigest() != row['current_sha256']:
            raise ValueError('Stale frozen census: ' + row['id'])
        meta, body = parse(raw)
        if meta.get('status') != 'published':
            raise ValueError('Historical target is no longer published: ' + row['id'])
        # Remarks and source orientation are not direct mathematical uses.
        body = re.split(r'^## (?:Remarks?|Context|Source notes)', body,
                        maxsplit=1, flags=re.M)[0]
        # Declared links are counted exactly above, not as concept matches.
        body = re.sub(r'\[\[[^\]]+\]\]', ' ', body)
        title = tokens(str(meta.get('title') or ''))
        words = title | tokens(body)
        item_tokens[row['id']] = words
        item_titles[row['id']] = title
        item_bodies[row['id']] = body.lower()
        item_categories[row['id']] = {page_categories[home]
                                      for home in row['homes']
                                      if home in page_categories}
        frequency.update(words)

    suppliers_by_id = {row['id']: row for row in suppliers}
    by_term = defaultdict(set)
    for supplier in suppliers:
        for term in tokens(supplier['id']):
            if 1 <= frequency[term] <= 100:
                by_term[term].add(supplier['id'])

    result = []
    for row in census:
        ident = row['id']
        shared = defaultdict(set)
        for term in item_tokens[ident]:
            for supplier_id in by_term.get(term, ()):
                shared[supplier_id].add(term)
        conceptual = {}
        for supplier_id, terms in shared.items():
            supplier_categories = {
                page_categories[home]
                for home in suppliers_by_id[supplier_id]['homes']
                if home in page_categories
            }
            same_category = bool(item_categories[ident] & supplier_categories)
            if len(terms) >= 3:
                reason = 'three_distinct_terms'
            elif same_category and len(terms) >= 2:
                reason = 'two_terms_same_category'
            elif any(
                frequency[term] <= 5 and (
                    term in item_titles[ident] or
                    re.search(r'(?:standard|classical|well-known|usual|familiar)'
                              r'[^\n.]{0,80}\b' + re.escape(term) + r'\b',
                              item_bodies[ident]) or
                    re.search(r'\b' + re.escape(term) +
                              r'\b[^\n.]{0,80}(?:theorem|lemma|criterion|result)',
                              item_bodies[ident])
                ) for term in terms
            ):
                reason = 'rare_term_in_title_or_named_invocation'
            else:
                continue
            conceptual[supplier_id] = dict(terms=sorted(terms), reason=reason)
        if direct[ident] or conceptual:
            result.append(dict(
                id=ident,
                current_sha256=row['current_sha256'],
                baseline_sha256=row['baseline_sha256'],
                exact_new_supplier_refs=sorted(direct[ident]),
                concept_matches=conceptual,
                selection_only=True,
            ))

    result.sort(key=lambda x: x['id'])
    (OUT / 'high-risk-phase2-candidates.jsonl').write_text(
        ''.join(json.dumps(row, sort_keys=True) + '\n' for row in result))
    summary = dict(
        baseline_commit=census[0]['baseline_commit'],
        census_count=len(census),
        newly_published_supplier_count=len(new_ids),
        candidate_count=len(result),
        exact_reference_candidates=sum(bool(row['exact_new_supplier_refs']) for row in result),
        concept_match_candidates=sum(bool(row['concept_matches']) for row in result),
        overlap_count=sum(bool(row['exact_new_supplier_refs']) and bool(row['concept_matches'])
                          for row in result),
        excluded_from_priority_count=len(census) - len(result),
        rule=('Existing direct reference to a newly published supplier, or '
              'distinct supplier-ID terms in the consumer title or mathematical '
              'body: at least two rare terms in the same subject category, '
              'three rare terms across categories, or one very rare term in '
              'the title or a named proof invocation. Rare means present in '
              'at most 100 census items; very rare means at most five. The '
              'rules use all post-boundary published items, including the '
              '369 recovered outside the final manifest/run inventory; they '
              'exclude 49 preexisting context items.'),
        limitation=('A candidate may have an adequate prerequisite; omitted items '
                    'are not mathematically cleared. No full-text mathematical '
                    'screening follows from this selection.'),
    )
    (OUT / 'high-risk-phase2-summary.json').write_text(json.dumps(summary, indent=2) + '\n')
    print(json.dumps(summary, indent=2))


if __name__ == '__main__':
    main()
