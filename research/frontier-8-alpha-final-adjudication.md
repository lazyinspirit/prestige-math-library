# Frontier 8 final Alpha adjudication

Scope: the 90 exact candidate rows in
`research/frontier-8-final-missing-adjudications.json`, each adjudicated against
its supplied final current-context hash.  This is the final Alpha adjudication
pass: no item, contract, plan, page, judge, publication, or Git action was
performed.

## Exact coverage

- Candidates reviewed: 90
- Distinct item IDs: 60
- Alpha candidate rows appended to `research/frontier-8-judge-adjudications.jsonl`: 90
- A later reconciliation added one superseding exact-hash outcome for the
  Samuel empty-space candidate; it is the effective outcome for that candidate.
- Every appended row preserves the candidate `id`, `model`, and
  `context_sha256` exactly.

The 30-second policy was applied strictly: a real citation or local proof gap
that a competent human can close in under 30 seconds is `confirmed_nonfatal`,
not fatal.

| Judge model | Confirmed fatal | Confirmed nonfatal | False positive | Total |
| --- | ---: | ---: | ---: | ---: |
| deepseek-v4-pro | 0 | 32 | 2 | 34 |
| gpt-5.6-terra | 0 | 55 | 1 | 56 |
| **Total** | **0** | **87** | **3** | **90** |

## Confirmed fatal

None. Step-10 closure is not blocked by a final Alpha-confirmed fatal from this
candidate set.

## False positives

- `cex-peano-surface-linewise-minimum-without-an-extremum` (Terra): the
  objection uses a nonlocal point; the proof asserts strict positivity only in
  a sufficiently small punctured segment of each fixed line.
- `ex-samuel-compactification-of-discrete-naturals-is-beta-n` (DeepSeek): its
  current Fact L3 explicitly carries dependent choice before the
  ultrafilter-lemma conclusion, contrary to the objection.
- `def-samuel-uniformity` (DeepSeek),
  `a2bc9eaa4d72beb15b0868f8843fc2af3266a15910efcc5652197e7768aca0e3`:
  the initial fatal is superseded. `def-uniform-space-by-entourages` defines a
  uniform space as a set equipped with a uniformity; that uniformity is a
  filter. `def-filter` has properness (F2), and expressly proves that there
  are no filters on the empty set. Thus its phrase “Let $(X,\mathcal U)$ be a
  uniform space” already excludes $X=\varnothing$, so the gauge construction
  is never required to produce a uniformity there.

All remaining confirmed findings are local citation/proof gaps under the
30-second rule.  They are recorded as nonfatal in the JSONL ledger and were
not repaired in this adjudication-only pass.
