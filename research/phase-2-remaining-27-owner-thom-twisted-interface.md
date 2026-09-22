# Owner-authorized published repair: twisted Thom interface

Run: `phase-2-remaining-27`.  Role: `alpha-adjudicate`, label
`owner-thom-twisted-interface`.  Date: 2026-09-21.

Write scope used: the two published items named below, their owning historical
proof contracts (`phase-2-next-18-batch-3` and the `phase-2-next-18` aggregate),
the run's published-repair ledger, the derived published-closure receipt, and
this report.  No judge row, adjudication row, terminal receipt, queue, pass
stamp, engine state, tool, or `published/` file was written.  No model or judge
lineup was named or overridden in any dispatch or tool invocation, and no judge
was called.

## 1. Confirmed defect and authorization

- Terra verdict `2026-09-21T03:52:50.176Z` rejected
  `thm-thom-isomorphism-for-oriented-vector-bundles` (raw SHA-256
  `3a2e10b9ce06e658571f6eaa85eddd62aa4add38d8c53debd372cb1151fb0283`, context
  `0ea8714b381956d1b06ae46df9dfe2bc420ff65198ff7b080d21633b80d67514`) at
  Proof 1.2.
- The independent Astra final adjudication agreed and escalated to the owner.
  Complete evidence bundle:
  `research/phase-2-remaining-27-step7-fa-b-item-d4ee60f2a1aed1ff-evidence.md`.
- Exact defect: Proof 1.2 cited [F2]
  (`lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence`)
  for the canonical additive twisted isomorphism
  `H^k(B;O_R(xi)) = H^{k+n}(D(xi),S(xi);R)` although that supplier's Statement
  and Given required a supplied `R`-orientation and its Proof 2.1 identified
  the only nonzero row with `H^k(B;R)` only after orientation.  The isolated
  `E_2` formula did not construct a convergent unoriented relative sequence, so
  the consumer silently applied an oriented theorem to an unoriented bundle.
- Second defect, identified by the same adjudication in the same supplier:
  Proof 5.1 asserted that at rank zero `u = 1` and the edge is the identity for
  an arbitrary supplied orientation, which is false for the reversed integral
  orientation.
- The owner confirms both are real published proof-interface defects and
  authorizes the smallest coherent repair: generalize the supplier so the
  twisted additive collapse is proved before any orientation, and only then
  construct the normalized class from a supplied orientation.

## 2. Repair performed

### 2.1 Supplier `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence`

- Statement: now takes an **arbitrary** numerable rank-`n` bundle over a CW
  complex or a paracompact Hausdorff base of CW type; asserts the relative
  Serre sequence with `E_2^{p,q} = H^p(B; H^q(D^n,S^{n-1};R))`, whose only
  nonzero row `q = n` is the orientation local system `O_R(xi)`, and its
  collapse without extensions to the canonical additive twisted isomorphism;
  a supplied `R`-orientation is then stated to trivialize `O_R(xi)` and yield
  the normalized Thom class and the cup-product edge.
- Proof 1.1 unchanged: relative skeletal filtration, disk-bundle chains
  quotiented by the sphere subcomplex, fiber term `H^q(D^n,S^{n-1};R)` and the
  same convergence bounds.
- Proof 2.1 rewritten: [F3] gives the vanishing off `q = n` and the row
  `O_R(xi)`; every differential has zero source or target, so `E_2 = E_inf`,
  total degree `k+n` has the single quotient `E_inf^{k,n} = H^k(B;O_R(xi))`,
  strong convergence of [F2] gives the canonical additive isomorphism, and no
  orientation, Thom class, or oriented statement is used.
- Proof 3.1 rewritten: only after a supplied orientation trivializes the
  rank-one system does the edge produce `u`, normalized by `o` (cellwise fiber
  restriction), and is identified with `a -> pi*a cup u`.
- Proof 4.1 extended: the CW-type transport now carries the twisted row, both
  additive isomorphisms, and a supplied orientation along the homotopy
  equivalence, while still using [F6] and the iterated-pullback coherence.
- Proof 5.1 corrected: at rank zero the transition units are trivial, the
  system is constant, the supplied orientation is a unit-valued class
  `o in H^0(B;R)`, normalization gives `u = o`, and the oriented edge is
  multiplication by `o`, inverted by `o^{-1}`, the identity exactly for the
  standard unit orientation (`o = 1`) and multiplication by `-1` for the
  reversed integral orientation on a point.  Empty/disconnected bases, the zero
  ring, both filtration endpoints, and the exact AC uses ([F0], [F2], [F6]; the
  one-row collapse adds no choice) are retained.
- `deps`, `sources`, `provenance`, and `verification` blocks unchanged; the
  finite-cover special case is untouched (it lives in the consumer).

### 2.2 Consumer `thm-thom-isomorphism-for-oriented-vector-bundles`

- Statement unchanged (oriented clause, canonical twisted clause, finite
  supplied-trivializing-cover special case).
- [F2] fact summary rewritten to describe the repaired interface: one nonzero
  row `O_R(xi)` and canonical additive twisted isomorphism for an arbitrary
  numerable bundle, with the normalized class and cup-product edge only in the
  supplied-orientation clause.
- Proof 1.1 now cites the oriented clause of [F2] explicitly.
- Proof 1.2 rewritten: it cites the supplier's **unoriented** clause directly
  for the collapse and the canonical additive isomorphism, with [F3] still
  recording the coefficient identification, and states that no oriented
  statement and no untwisted Thom class is used.
- Proof 2.1 (uniqueness) and 3.1 (finite cover) unchanged; Proof 4.1 kept the
  already-correct reduced rank-zero convention.

### 2.3 Contracts, ledgers, receipts

- `research/phase-2-next-18-batch-3.proof-contracts.json` and
  `research/phase-2-next-18-proof-contracts.json` (entries were byte-identical
  before the edit): supplier derivations 2.1/3.1/4.1/5.1 and risk notes
  refreshed; consumer [F2] quote replaced by the repaired Statement of the
  supplier, derivations 1.1/1.2/4.1 and risk notes refreshed.
- Pre-existing stale quote also refreshed in the same supplier entry:
  the [F2]->`thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence`
  quote did not occur in that item's Statement at HEAD (differences were spaces
  inside `$$...$$`; 1618 -> 1620 chars).  This was a mechanical quotation sync,
  not a content change; with it, strict checks on both historical contracts
  pass.  It was already failing at HEAD, so it is unrelated to this repair.
- Current-run contracts: `research/phase-2-remaining-27-batch-10.proof-contracts.json`
  and `research/phase-2-remaining-27-proof-contracts.json` cite the consumer's
  **Statement** from `thm-thom-identity-for-stiefel-whitney-classes` F2; the
  Statement did not change, so no current-run contract edit was needed and the
  strict check passes against the unchanged quote (verified, not assumed).
- Frontier: `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`
  ran clean and rewrote nothing (derived content unchanged).  The derived
  ledger contains no edge for
  `thm-thom-identity-for-stiefel-whitney-classes -> thm-thom-isomorphism-for-oriented-vector-bundles`
  because the supplier is an inherited published item with no home batch in
  this run (the collector drops edges whose supplier has no run home).
  `research/phase-2-remaining-27-batch-10.cross-batch-dependencies.json` row 51
  was left unchanged: it quotes no changed interface, and its evidence records
  that FA 73 edited no supplier, which remains a true statement about that
  FA's work.
- Published repairs appended through the prescribed interface
  (`node tools/published-repairs.mjs append --run phase-2-remaining-27 --file ...`),
  rows 4 and 5 of `research/phase-2-remaining-27-step7-published-repairs.jsonl`,
  both `kind: repaired`, `group/repair_owner_group: b`,
  `found_via: thm-thom-isomorphism-for-oriented-vector-bundles`,
  `found_at_stage: 7-adjudicate`, exact pre/post guard hashes, defect,
  correction basis, confidence 1, and the three HTTPS sources below.

## 3. Guard-form hash ledger

| item | pre (guard) | post (guard) | post (raw = judge) |
|---|---|---|---|
| `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence` | `14daa3ba430890a45155ac62675440ecc40d6bcad40430c6fcbee74bb878cfd8` | `32c7cec0554a068475b8fb0a5e71ccfb88a7a78a9027fa74db6356b03080e565` | `612117f9b2d1a98e0f210750a7d979f7af8eb42419e20a04cba1ced7242c8498` |
| `thm-thom-isomorphism-for-oriented-vector-bundles` | `75a979787fbd251e145fe4c139e9ef50d95d20d1d22864f1df616b93b773b092` | `256dbc70a69662ab14a7a5080f43af6de5b4e0734ba78b0f219172062006861c` | `114594880df010b0d71366db9941f7dd7b28482e08df7e57c942324ff151eac1` |

The supplier's pre hash equals its pre-Step-7 baseline; the consumer had
already been repaired once in this run (baseline `a077098eb3957ad618141cde63aba594e00591dd0e4533b5b06c898695b605f8`,
post `75a9797...`) before this dispatch.

## 4. Sources consulted

- J. P. May, *A Concise Course in Algebraic Topology*, Chapter 23 section 5,
  printed pp.194-196 (= PDF pages 202-204), complete section including the
  proof sketch: <https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf>.
  Defines an `R`-orientation/Thom class by its restrictions to fiber
  generators, states `x -> x cup mu` is an isomorphism when the class is given,
  notes the CW-approximation and Serre-spectral-sequence routes, and proves
  every bundle has a unique `Z_2`-orientation.  It does not construct the
  unoriented untwisting; no twisted proof is attributed to it.
- A. Hatcher, *Algebraic Topology*, section 4.D, printed pp.441-443 (= PDF
  pages 450-452), Theorems 4D.8/4D.9/4D.10 and the start of the 4D.10 proof:
  <https://pi.math.cornell.edu/~hatcher/AT/AT.pdf>.  Relative Leray-Hirsch
  needs a global fiberwise basis (a Thom class); the cup-product isomorphism is
  produced from a given Thom class; `Z_2` Thom classes always exist while `Z`
  Thom classes exist for orientable disk bundles, non-CW bases being reduced by
  CW approximation.  This is the authoritative confirmation that the untwisted
  `Z` statement is not available for an arbitrary unoriented bundle, i.e. that
  the defect was in the proof route, not in the classical twisted theorem.
- J. Lind, *Notes from a talk on parametrized Thom spectra and orientation
  theory*, page 1: <https://jlind.yourweb.csuchico.edu/papers/param_thomspectra.pdf>.
  States the local coefficient system `H^*(SV_.)`, defines an orientation as an
  isomorphism of local coefficient systems (trivializing it to `Z[n]`), gives
  the Serre sequence `H^p(X, H^q(SV_.)) => H^{p+q}(SV,X)`, and says an
  orientation "untwists" it to the Thom isomorphism.  Talk notes, not a
  textbook; used only as the explicit local-system formulation.
- No source states this library's exact interface (arbitrary commutative unital
  `R`, numerable rank-`n` bundle, CW or paracompact-Hausdorff CW-type base,
  relative Serre construction on `(D(xi),S(xi))`, additive-twisted-then-oriented
  order).  The repaired item is the library's own assembly of the existing
  dependencies: [F2] `thm-cohomological-serre-spectral-sequence` and
  `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence`,
  [F3] `lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring` and
  `def-r-oriented-vector-bundle-and-orientation-local-system`, [F4]
  `prop-relative-cup-products-are-natural-and-compatible-with-connectors`,
  [F5] `def-thom-class-by-fiberwise-normalization`, [F6]
  `def-pullback-vector-bundle-and-pullback-section`,
  `prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism`,
  `thm-homotopy-invariance-of-vector-bundle-pullback`, and
  [F1] `thm-numerable-fiber-bundles-are-hurewicz-fibrations`; the fiber-row /
  monodromy identification is inherited from [F3] as already contracted.
  Dependency lists were not changed.  The consumer additionally keeps [F4]
  `lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover`
  for the choice-free finite-cover special case and
  `def-homology-and-cohomology-with-local-coefficients` for the coefficient
  typing.

## 5. Checks run (exact commands and results)

| check | result |
|---|---|
| `node tools/prosecheck.mjs items/<both>.md` | 2 files checked, 0 errors, 0 warnings; no positional claim contradicts the spec |
| `node tools/tsx-run.mjs tools/precheck.mts items/<both>.md` | both PASS (direct); 2 checked, 0 failing |
| `node tools/proof-contract.mjs research/phase-2-next-18-batch-3.proof-contracts.json --strict --items <both>` | 0 errors, 0 warnings, 2/2 |
| `node tools/proof-contract.mjs research/phase-2-next-18-proof-contracts.json --strict --items <both>` | 0 errors, 0 warnings, 2/2 |
| `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-10.proof-contracts.json --strict --items thm-thom-identity-for-stiefel-whitney-classes` | 0 errors, 0 warnings, 1/1 |
| same against `research/phase-2-remaining-27-proof-contracts.json` | 0 errors, 0 warnings, 1/1 |
| `node tools/depcheck.mjs --quiet` | exit 0; "OK - no cycles, all references resolve, no draft items on published pages"; no line names either repaired item |
| `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | refreshed and deduplicated; derived file content unchanged |
| `git diff --check -- items/{lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence,thm-thom-isomorphism-for-oriented-vector-bundles}.md research/phase-2-next-18-{batch-3,}proof-contracts.json research/phase-2-remaining-27-step7-published-repairs.jsonl` | exit 0 (the report and closure receipt are untracked, so `git diff` does not cover them; both were checked for trailing whitespace separately) |
| `node tools/step7-guard.mjs ... (full flag set, see below)` | FAIL, 3 errors (section 6) |
| `node tools/step7-scope.mjs published --run phase-2-remaining-27 --out .../step7-published-closure.json` | 3 problems (section 6); receipt lists both items under `needs_rejudge` |

Honest pre-existing observation: on HEAD (before any edit of this dispatch) the
same strict command flagged one `citation-quote-mismatch` in the supplier's
`F2 -> thm-multiplicative-structure-...` quote; it was reproduced from
`git show HEAD:...` and then fixed by the mechanical quote refresh above.

## 6. Harness/engine observations recorded honestly

`step7-guard` (touches `research/phase-2-remaining-27-touches.json`, baseline
`pre-step7`, judge/adjudication ledgers, Step-7 scope, auditor certifications,
terminal resolutions, published repairs, owner prerequisite repairs):

```
20088 item(s) at baseline; 696 changed, 0 created, 0 deleted
695/696 change(s) licensed …
ERROR published-repair-provenance: research/phase-2-remaining-27-step7-published-repairs.jsonl:4: found_via must be a run item owned by group b
ERROR published-repair-provenance: research/phase-2-remaining-27-step7-published-repairs.jsonl:5: found_via must be a run item owned by group b
ERROR nonfatal-edit: lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence: changed since "pre-step7" (14daa3ba430890a4 -> 32c7cec0554a0684) with no confirmed_fatal judge or Step-6 reader adjudication against that text state — Alpha recorded no adjudication at all.
FAIL — 3 error(s)
```

1. The two `published-repair-provenance` errors are a rule mismatch, not a
   mathematical defect.  The task mandates `found_via =
   thm-thom-isomorphism-for-oriented-vector-bundles`, which is itself an
   inherited published item (`by_item` has no entry for it); the guard requires
   `found_via` to be a run item owned by group `b` with a real keep:false
   verdict.  No run item exposed this defect — the exposed item and the
   defective supplier are both published — so no in-scope edit can satisfy that
   rule.  Honest consequence: unless the engine widens the published-repair
   provenance rule to accept an owner-authorized repair exposed by a published
   item's own escalated verdict, these two errors persist.
2. The `nonfatal-edit` error on the supplier is expected and is cleared by the
   owner terminal resolution route: the supplier was never itself judged, so no
   `confirmed_fatal` row exists for it; the task states the expected
   certification is an owner terminal resolution on the exact repaired context.
   The `Step 7 is fatal-only` comment in the guard is the ordinary-run rule; the
   owner dispatched this repair explicitly.
3. `step7-scope --published` reported exactly:
   `thm-thom-isomorphism-for-oriented-vector-bundles`: terminal resolution is
   stale against the current published item; and both items "lacks a current
   verdict from gpt-5.6-terra".  This matches the dispatch: no judge call is
   expected; the owner terminal resolution is the intended closure.

## 7. Unresolved obligations and next action

1. Owner: record a version-4 owner terminal resolution (`resolved_by: owner`,
   `disposition: repaired`) for **both** items against the current
   `item_sha256` values in section 3, using this report as the basis file, via
   `tools/step7-terminal-resolution.mjs record --run phase-2-remaining-27
   --id <id> --resolved-by owner --disposition repaired --basis-file
   research/phase-2-remaining-27-owner-thom-twisted-interface.md`.  The
   consumer's existing v3 `escalated-to-owner` row is pinned to the old bytes
   (`3a2e10b9...`) and must be superseded.  That clears the guard's
   `nonfatal-edit` error and the three published-closure problems, after which
   the closure receipt should show both items under `terminal_resolved`.
2. Owner/engine: decide on the two `published-repair-provenance` guard errors
   (rule mismatch in observation 1).  They are not a mathematical blocker and
   must not be "fixed" by fabricating a run-item `found_via`; the dispatch
   forbids judge/adjudication rows.
3. Bookkeeping note for the owner: the consumer contract's `empty` boundary
   `template_review` is bound to `item_sha256
   34f43d7abe350007e3b17c58c700b7887553a04422c39800ebb85e09945db468`, which
   predates the rank-zero repair and was already stale; it is not reused here as
   a review escape hatch, and no review verdict was manufactured.
4. No paid judge call was made for this repair, as instructed.  No claim is
   made that judge coverage or the published gate currently passes; the exact
   failures are recorded above.

This report is evidence, not a judge verdict, adjudication row, or pass stamp.
