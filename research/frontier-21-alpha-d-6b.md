# Frontier-21 Alpha d Step 6b

Run: `frontier-21`  
Group: `d`  
Date: Thursday, August 27, 2026

## Scope

Owned batches: `6` and `10`.

Routed obligations on current disk:

- Batch `6`: `2` touched items and `1` refuter finding.
- Batch `10`: `1` touched item and `11` refuter findings.
- Supplemental gate findings after the mandatory high-risk reread and the
  required independent Sol audit: `9`.

There were no routed page obligations and no routed reader-findings obligations
for this group.

## Adjudication

- `touched:6:thm-cycle-index-of-alternating-group`  
  Verdict: `accepted_repair`  
  Ledger: `frontier-21-S6-d-touched-6-1`  
  Reader 6's repair was correct: the missing equality signs in the Statement are
  restored and no further amendment was needed.

- `touched:6:thm-edge-set-orbits-on-two-subsets-by-polya`  
  Verdict: `amended_repair`  
  Ledgers: `frontier-21-S6-d-touched-6-2`,
  `frontier-21-S6-d-gate-6-4`  
  Reader 6's notation repair was correct, and Harvey later confirmed that the
  batch-6 contract still needed explicit empty, zero, and one boundary rows for
  this theorem. The live carrier therefore no longer matches the raw reader
  result.

- `refuter:6:1` on `thm-partitions-with-k-parts-equal-largest-part-k`  
  Verdict: `confirmed_fatal`  
  Ledger: `frontier-21-S6-d-refuter-6-1`  
  The refuter's `k=0` boundary objection was valid. Step `1.1` now separates
  `n>0` from `n=0`, so the proof no longer asserts a singleton family when both
  sides are empty.

- `gate:frontier-21-S6-d-gate-6-1` on
  `thm-partitions-with-k-parts-equal-largest-part-k`  
  Verdict: `confirmed_nonfatal`  
  Ledger: `frontier-21-S6-d-gate-6-1`  
  Harvey then found that my first repair still justified the empty partition's
  largest part by a nonexistent top row. The current step now cites the
  empty-partition convention directly.

- `gate:frontier-21-S6-d-gate-6-2` on `thm-durfee-square-identity`  
  Verdict: `confirmed_nonfatal`  
  Ledger: `frontier-21-S6-d-gate-6-2`  
  The batch-6 contract had stale `not_applicable` boundary rows for the `k=0`
  empty product and the `n=0` coefficient. Those rows are now repaired.

- `gate:frontier-21-S6-d-gate-6-3` on
  `thm-weighted-pattern-inventory-formula`  
  Verdict: `confirmed_nonfatal`  
  Ledger: `frontier-21-S6-d-gate-6-3`  
  The batch-6 contract had a stale empty-colouring boundary row. The current
  contract now records that boundary as checked.

- `gate:frontier-21-S6-d-gate-6-4` on
  `thm-edge-set-orbits-on-two-subsets-by-polya`  
  Verdict: `confirmed_nonfatal`  
  Ledger: `frontier-21-S6-d-gate-6-4`  
  The batch-6 contract had stale empty, zero, and one boundary rows even though
  the theorem allows `n>=0` and the proof covers `E_0=E_1=\varnothing`. Those
  rows are now repaired.

- `gate:frontier-21-S6-d-gate-6-5` on
  `cor-symmetric-group-cycle-index-series-is-exponential`  
  Verdict: `confirmed_nonfatal`  
  Ledger: `frontier-21-S6-d-gate-6-5`  
  The batch-6 contract had stale empty and zero boundary rows. The current
  contract now records the `n=0` coefficient and the `d>=1` denominator guard
  as checked.

- `touched:10:ex-the-quotient-witness-reduction-in-a-four-block-configuration`  
  Verdict: `amended_repair`  
  Ledgers: `frontier-21-S6-d-touched-10-1`,
  `frontier-21-S6-d-refuter-10-2`,
  `frontier-21-S6-d-gate-10-2`  
  Reader 10 correctly repaired the false four-block title/Given data. I later
  amended the same item twice more: first to remove the refuter-identified
  overclaim in step `3.1`, and then to add the missing connected-block
  hypothesis that the descent lemma requires.

- `refuter:10:1` on
  `lem-quotient-blocks-preserve-connectedness-and-anticonnectedness`  
  Verdict: `confirmed_fatal`  
  Ledger: `frontier-21-S6-d-refuter-10-1`  
  The refuter's star counterexample was correct. I replaced the false
  consecutive-ordering claim by the exact mixed-chain consequence of the
  quotient definition and rebuilt both the connected and anticonnected proofs.

- `refuter:10:2` on
  `ex-the-quotient-witness-reduction-in-a-four-block-configuration`  
  Verdict: `confirmed_fatal`  
  Ledger: `frontier-21-S6-d-refuter-10-2`  
  The refuter was correct that the cited descent lemma states only existence of
  a descended witness. Step `3.1` no longer attributes a specific choice to the
  lemma.

- `gate:frontier-21-S6-d-gate-10-2` on
  `ex-the-quotient-witness-reduction-in-a-four-block-configuration`  
  Verdict: `confirmed_fatal`  
  Ledger: `frontier-21-S6-d-gate-10-2`  
  Harvey correctly found one more fatal defect after that repair: the example
  still lacked the connectedness hypothesis required by the descent lemma, and
  step `3.1` still said more than the lemma statement about the witness. Both
  are now repaired.

- `refuter:10:3` through `refuter:10:11`  
  Verdicts: all `confirmed_fatal`  
  Ledgers: `frontier-21-S6-d-refuter-10-3` through
  `frontier-21-S6-d-refuter-10-11`  
  The refuter was correct that nine manifest-scoped batch-10 items were absent
  on current bytes. I restored all nine missing items:
  `cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property`,
  `cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property`,
  `ex-the-forest-theorem-specialized-to-the-four-vertex-path`,
  `ex-the-leaf-coleaf-corollary-recovers-the-five-vertex-path-case-from-the-four-vertex-path-case`,
  `thm-erdos-hajnal-pach-pure-pair-theorem`,
  `thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property`,
  `thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex`,
  `thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family`, and
  `thm-leaf-deletion-preserves-virality-of-a-finite-family`.

- `gate:frontier-21-S6-d-gate-10-3` on
  `thm-erdos-hajnal-pach-pure-pair-theorem`  
  Verdict: `confirmed_fatal`  
  Ledger: `frontier-21-S6-d-gate-10-3`  
  Harvey correctly found that the restored raw bound
  `|A|,|B| >= |V(G)|^{c_H}` is false on small graphs because cardinalities are
  integral. The current theorem now uses `floor(|V(G)|^{c_H})`.

- `gate:frontier-21-S6-d-gate-10-4` on
  `thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex`  
  Verdict: `confirmed_nonfatal`  
  Ledger: `frontier-21-S6-d-gate-10-4`  
  Harvey correctly found that step `1.1` said the source theorem gives exactly
  one alternative. The proof only needs the inclusive either-or, and the
  current step now states that at least one alternative holds.

- `gate:frontier-21-S6-d-gate-10-1` on
  `thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property`  
  Verdict: `confirmed_nonfatal`  
  Ledger: `frontier-21-S6-d-gate-10-1`  
  The mandatory high-risk reread found a live citation omission in step `8.1`:
  the proof used the meaning of `4\epsilon`-sparse without citing the defining
  item. I repaired the theorem by adding the missing dependency and citing it
  exactly at the degree-bound inference.

## Risk Review

I ran `tools/risk-report.mjs` on both owned batch contracts before closure and
again after the batch-10 repairs changed the live carrier.

- Batch `6` final high/critical items reviewed and recorded in the contract:
  `thm-durfee-square-identity`, `thm-twelvefold-way`,
  `thm-weighted-pattern-inventory-formula`,
  `cor-symmetric-group-cycle-index-series-is-exponential`.
- Batch `10` final high/critical items reviewed and recorded in the contract:
  `thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected`,
  `cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order`,
  `thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property`,
  `thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property`,
  `thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex`,
  `thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property`,
  `ex-the-leaf-coleaf-corollary-recovers-the-five-vertex-path-case-from-the-four-vertex-path-case`,
  `lem-quotient-blocks-preserve-connectedness-and-anticonnectedness`,
  `lem-blocks-from-different-mixed-block-classes-form-pure-pairs`,
  `lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks`,
  `lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks`,
  `ex-a-mixed-chain-collapses-to-one-quotient-block`,
  `ex-a-vertex-can-be-mixed-on-a-quotient-block-while-pure-on-each-member-block`,
  `ex-the-quotient-witness-reduction-in-a-four-block-configuration`.

Each `risk_review` note names the actual risk signal and the current-disk proof
or repair I checked to clear it. No high/critical item remains without a
complete Alpha `risk_review`.

## Focused Checks

Changed or restored items:

- `node tools/tsx-run.mjs tools/reflow.mts ...` on the `12` directly edited or
  added items, and again on
  `items/lem-quotient-blocks-preserve-connectedness-and-anticonnectedness.md`,
  `items/thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property.md`,
  `items/thm-erdos-hajnal-pach-pure-pair-theorem.md`,
  `items/thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex.md`,
  `items/thm-partitions-with-k-parts-equal-largest-part-k.md`, and
  `items/ex-the-quotient-witness-reduction-in-a-four-block-configuration.md`
  after the later fixes.
- `node tools/tsx-run.mjs tools/precheck.mts ...` on all changed items:
  clean after one canonical step-number repair to
  `lem-quotient-blocks-preserve-connectedness-and-anticonnectedness.md`.
- `node tools/rendercheck.mjs ...` on all changed items: clean.

Batch contracts and scope artifacts:

- `node tools/regen-contract-entries.mjs research/frontier-21-batch-6.proof-contracts.json thm-partitions-with-k-parts-equal-largest-part-k`
  and later reruns for the post-Harvey item fixes.
- `node tools/regen-contract-entries.mjs research/frontier-21-batch-10.proof-contracts.json ...`
  on the repaired existing batch-10 items, plus reruns after the Harvey fixes.
- A parser-backed contract refresh added the `9` missing batch-10 contract
  entries, rewrote the stale boundary notes for the repaired items, and synced
  the batch-10 contract scope from the old `16` proof-bearing items to the
  current `25`.
- `node tools/proof-contract.mjs research/frontier-21-batch-6.proof-contracts.json --strict`
  and `...batch-10.proof-contracts.json --strict`: both clean.
- `node tools/citation-fidelity.mjs research/frontier-21-batch-6.proof-contracts.json --json`
  and `...batch-10.proof-contracts.json --json`: `0` quote misses and `0`
  widening candidates on both contracts.
- `node tools/boundary-audit.mjs research/frontier-21-batch-10.proof-contracts.json --fail-on-contradicted --fail-on-template`:
  clean on the repaired carrier.
- `node tools/boundary-audit.mjs research/frontier-21-batch-6.proof-contracts.json --fail-on-contradicted --fail-on-template`:
  after Harvey's audit I repaired the `5` confirmed stale batch-6 boundary rows
  on `thm-partitions-with-k-parts-equal-largest-part-k`,
  `thm-durfee-square-identity`,
  `thm-weighted-pattern-inventory-formula`,
  `thm-edge-set-orbits-on-two-subsets-by-polya`, and
  `cor-symmetric-group-cycle-index-series-is-exponential`. The detector still
  reports `16` remaining candidates on other combinatorics items; I reopened the
  live high-risk items it surfaced and did not confirm another current defect in
  this dispatch scope.
- `node tools/content-policy.mjs research/frontier-21-batch-6.pages.json` and
  `...batch-10.pages.json`: both clean on current bytes.
- `node tools/risk-report.mjs research/frontier-21-batch-6.proof-contracts.json`
  and `...batch-10.proof-contracts.json`: final high/critical sets recorded
  above.

Ledger and review closure:

- `node tools/apply-risk-reviews.mjs --run frontier-21 --file /tmp/frontier-21-alpha-d-risk-reviews.json`
  applied `18` risk-review records across batches `6` and `10`.
- `node tools/defect-ledger.mjs append --file /tmp/frontier-21-alpha-d-ledger-rows.json`
  and `...frontier-21-alpha-d-ledger-rows-2.json` appended `24` closed rows for
  this dispatch and re-rendered `research/DEFECT-LEDGER.md`.
- Required independent audit satisfied: `Harvey` (`gpt-5.6-sol`, `xhigh`) did a
  read-only review of the repaired carrier and surfaced the final remaining
  defects that drove the later Step 6 gate repairs above.

## Blockers

None.

## Gate repair - `step6-routing-adjudicate` (Thursday, August 27, 2026)

- Reproduced the live `decision-not-applied` queue for the batch-6 portion of group `d` on the current tree and confirmed that `touched:6:thm-cycle-index-of-alternating-group` no longer equals the exact post-reader carrier sealed in `research/frontier-21-step6-hash-6-post.json`.
- Reader 6's statement repair remains the mathematical closure record for this theorem. The supersession below updates only the carrier-state verdict after later batch-6 contract and page-manifest writes changed the live carrier while the repaired theorem bytes remained in place.
- Retagged `touched:6:thm-cycle-index-of-alternating-group` from `accepted_repair` to `amended_repair` and appended the matching supplemental gate row `gate:frontier-21-S6-d-gate-6-6`.
- This gate row records stale adjudication-state drift only. No new mathematical defect was found in the current theorem.
