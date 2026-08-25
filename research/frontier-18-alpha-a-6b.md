# frontier-18 — group Alpha `a`, step 6b adjudication

Run: `frontier-18`
Group: `a`
Covers: batches `6`, `7`, `8`
Reviewer: Alpha group `a`

## Reader coverage

- Reader reports received for all three assigned batches: [research/frontier-18-reader-6.md](research/frontier-18-reader-6.md), [research/frontier-18-reader-7.md](research/frontier-18-reader-7.md), and [research/frontier-18-reader-8.md](research/frontier-18-reader-8.md).
- Coverage was complete at the reader layer for the dispatched scopes: reader 6 opened 67 item files plus both page files; reader 7 opened both page files, all B-page items, and the routed A-page items and cited dependencies; reader 8 opened `81/81` scoped item files.
- I verified every reader finding from current disk before accepting it, then rechecked the changed items and contracts after my own follow-up repairs.

## Reader findings

### R6-1

- Item: `ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation`
- Verdict: `confirmed_fatal`
- Reason: the original proof really did stop after the `z`-direction coverage and never established the `x`- and `y`-direction simple descriptions and coverage clauses needed by the adapted-presentation definition.
- Change accepted: the reader’s proof rewrite supplying the missing `x`/`y` descriptions and projected-coverage steps, plus the contract resync.

### R6-2

- Item: `ex-the-right-circular-cylinder-is-an-elementary-solid-region`
- Verdict: `confirmed_fatal`
- Reason: the original proof really did leave the `x`-direction lower-sublist coverage and the whole `y`-direction verification implicit.
- Change accepted: the reader’s proof rewrite supplying the missing `y`-direction description and the omitted `x`/`y` coverage clauses, plus the contract resync.

### R7-1

- Item: `ex-a-dense-open-subset-of-the-unit-interval-of-small-measure`
- Verdict: `confirmed_fatal`
- Reason: the old witness gave only `λ₁(U) ≤ ε`, while the statement claimed `< ε`.
- Change accepted: the reader’s smaller radii, which now give `λ₁(U) ≤ ε/2 < ε`.

### R7-2

- Item: `ex-a-dense-null-g-delta-set-containing-the-rationals`
- Verdict: `confirmed_fatal`
- Reason: the old proof established full measure only on centered intervals `[-N,N]`, not on arbitrary bounded intervals as stated.
- Change accepted: the reader’s rewrite through an arbitrary bounded interval `I` and the measurable decomposition `I=(I∩G) ⨿ (I\\setminus G)`.

### R7-3

- Item: `ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane`
- Verdict: `confirmed_fatal`
- Reason: the original partition argument used compactness plus continuity to manufacture uniformly small oscillation without any licensed uniform-continuity step.
- Change accepted: the reader’s Heine-Cantor/Archimedean repair and contract update.

### R8-1

- Item: `thm-continuous-logarithms-exist-along-a-contour`
- Verdict: `confirmed_fatal`
- Reason: `thm-recursion` does not license the index-dependent finite update rule used for `c_0, …, c_r`.
- Change accepted: the reader’s explicit finite construction replacing the bad recursion citation.

### R8-2

- Item: `thm-cauchy-integral-formula-on-a-polydisc`
- Verdict: `confirmed_fatal`
- Reason: `thm-recursion` does not license the stage-dependent backward definition of `H_m, …, H_0`.
- Change accepted: the reader’s explicit finite downward definition. I then made one follow-up cleanup of the same item: removed the stale `def-complex-integer-powers` citation from step `3.1`, synced the batch-8 manifest, and resynced the contract entry. That follow-up was nonfatal and did not change the mathematical proof.

## Refuter findings

### H6-1

- Item: `lem-change-of-variables-with-a-degenerate-parameter-boundary`
- Verdict: `confirmed_fatal`
- Reason: step `2.2` used `det Dψ(c) ≠ 0` as though `def-jacobian-determinant-of-a-c-one-map` implied invertibility. It does not. The missing bridge is `thm-real-square-matrix-invertible-iff-determinant-nonzero`.
- Change: added that dependency and fact line `[L14]`, then repaired step `2.2` and its contract row.

### H6-2

- Item: `prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal`
- Verdict: `confirmed_fatal`
- Reason: the title overclaimed. The statement and proof are explicitly only about interior parameter points whose projection lies in the interior of the relevant base, and the remark says the hypothesis is not removable.
- Change: narrowed the title to that proved scope. The proof itself did not need change.

### H6-3

- Item: `cor-every-face-of-an-elementary-solid-region-is-outward-oriented`
- Verdict: `confirmed_fatal`
- Reason: the title again overclaimed. The corollary proves outwardness only at interior parameter points with projection in the interior of the relevant base.
- Change: narrowed the title to the proved scope.

### H6-4

- Item: `ex-the-planar-divergence-theorem-on-a-rectangle`
- Verdict: `confirmed_nonfatal`
- Reason: step `4.1` misattributed the outward-normal identification to `[L1]`; it is really the orientation convention of `[F2]`. The geometric note is ancillary to the example’s main numerical claims.
- Change: repaired the citation and the contract row.

### H6-5

- Item: `ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin`
- Verdict: `confirmed_nonfatal`
- Reason: `[F6]` cited the divergence/curl definition for a divergence-theorem applicability condition it does not state. The main flux computation was unaffected.
- Change: repointed `[F6]` to `thm-the-divergence-theorem-for-an-elementary-solid-region` and resynced the contract quote.

### H6-6

- Item: `batch-6-coverage`
- Verdict: `confirmed_nonfatal`
- Reason: the CLP-4 harvest row for Theorem `4.1.7` still collapsed three named identities into the single item `cor-the-curl-of-a-curl-of-a-c2-field`, even though the current batch already contains `thm-the-curl-of-a-gradient-vanishes` and `thm-the-divergence-of-a-curl-vanishes`.
- Change: split that coverage row into three separate included rows, one for each identity.

### L7-1

- Item: `thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant`
- Verdict: `confirmed_fatal`
- Reason: step `4.1` used translation invariance of `λ_n` while the local fact `[L1]` stated only the uniqueness implication, not that the restriction of `λ_n` satisfies the hypothesis. The source theorem does state that, but the item’s local fact had truncated it.
- Change: expanded `[L1]` so the local fact faithfully includes the clause the proof uses.

### P8-1

- Item: `thm-identity-theorem-in-several-complex-variables`
- Verdict: `confirmed_fatal`
- Reason: step `2.2` used derivative coefficients that `thm-power-series-expansion-in-several-complex-variables` explicitly does not claim. The source theorem says those coefficients are only the iterated-integral coefficients.
- Change: removed that dependency from the item and manifest, rewrote the local facts so `[L1]` from `cor-holomorphic-functions-in-several-variables-are-smooth` supplies the derivative-coefficient clause directly, and resynced the contract labels.

### P8-2

- Item: `thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables`
- Verdict: `confirmed_fatal`
- Reason: step `4.1` applied `thm-cauchy-estimates-on-a-polydisc` on `Δ_ρ(b)` without showing that outer polydisc lies in `U`; the proof only knew `Γ_r(b) ⊂ \overlineΔ_ρ(a)`.
- Change: repaired step `4.1` to use the smaller outer polydisc `Δ_σ(b)` with `σ_k = ρ_k - |b_k-a_k|`, so the Cauchy estimate is applied on a domain proved to lie inside `U`. The contract row was updated to match.

### P8-3

- Item: `batch-8-harvest`
- Verdict: `false_positive`
- Reason: the refuter flagged the batch notes’ statement that the harvest had not been fully re-enumerated by a second reader. That is a process caveat in the notes, not a concrete faithfulness defect in the current coverage rows. I spot-checked the live locators and the primary headings against the harvested ranges and did not confirm a missing or dishonest row from that note alone.
- Change: none.

## Harvest faithfulness

- Batch 6: confirmed one real coverage-row defect and repaired it by splitting the CLP-4 Theorem `4.1.7` row into the three identities the source heading actually names.
- Batch 7: I did not confirm a harvest-faithfulness defect. The routed source locators and deferred dispositions are coherent on disk, and the read-only refuter reported no batch-level harvest issue.
- Batch 8: the notes still correctly record that the first dispatch did not re-enumerate all six sources from scratch, but after step-6 spot-checks against the live locators I did not confirm a concrete missing or dishonest row. The caveat remains an honesty note about how the harvest was produced, not a proven current defect.

## Machine-candidate adjudications

- Batch 7 citation-fidelity’s 11 widening candidates are false positives on current disk. In each case the allegedly missing hypothesis is already supplied by the item’s own Given/Statement context, or the restatement is stronger in the harmless direction actually used.
- Batch 7 boundary-audit’s candidate on `lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant` is a false positive; the item has no empty-instance branch.
- Batch 8 citation-fidelity’s candidate on `ex-periods-of-a-holomorphic-function-on-an-annulus` is a false positive: the cited source gives path-connectedness for `R ≥ 0`, while the item uses the strictly stronger `R' > 0`.
- Batch 8 boundary-audit’s nine `empty` candidates were not confirmed as defects; they arise from quantified products or sums in items whose domains and index sets are explicitly nonempty.

## Risk review

- I wrote `risk_review` entries for every `high`/`critical` item routed by `risk-report.mjs` in batches `6`, `7`, and `8`.
- The reviews record the batch-specific read-only refuter used:
  - batch `6`: `Huygens`
  - batch `7`: `Locke`
  - batch `8`: `Ptolemy`
- `node tools/risk-report.mjs research/frontier-18-batch-6.proof-contracts.json --require-reviewed`
  - `0 error(s)`
- `node tools/risk-report.mjs research/frontier-18-batch-7.proof-contracts.json --require-reviewed`
  - `0 error(s)`
- `node tools/risk-report.mjs research/frontier-18-batch-8.proof-contracts.json --require-reviewed`
  - `0 error(s)`

## Gates rechecked

- Batch `6`
  - `precheck` passes on the five item files changed in this pass.
  - `proof-contract --strict` passes.
  - `citation-fidelity` passes with no widening candidates.
  - `boundary-audit` still shows only the previously known candidate false positives.
  - `coverage-checklist` passes after the CLP-4 row split.
- Batch `7`
  - `precheck` passes on `thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant`.
  - `proof-contract --strict` passes.
  - `citation-fidelity` still reports the same 11 human-review candidates; none is a confirmed defect.
- Batch `8`
  - `precheck` passes on `thm-cauchy-integral-formula-on-a-polydisc`, `thm-identity-theorem-in-several-complex-variables`, and `thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables`.
  - `proof-contract --strict` passes with one nonfatal `shotgun-bracket` warning on `thm-cauchy-integral-formula-on-a-polydisc`.
  - `citation-fidelity` reports one human-review candidate (`ex-periods-of-a-holomorphic-function-on-an-annulus`), not confirmed as a defect.

## Changed artifacts

- Batch `6`
  - items:
    - `lem-change-of-variables-with-a-degenerate-parameter-boundary`
    - `prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal`
    - `cor-every-face-of-an-elementary-solid-region-is-outward-oriented`
    - `ex-the-planar-divergence-theorem-on-a-rectangle`
    - `ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin`
  - batch files:
    - `research/frontier-18-batch-6.pages.json`
    - `research/frontier-18-batch-6.coverage.json`
    - `research/frontier-18-batch-6.proof-contracts.json`
- Batch `7`
  - items:
    - `thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant`
  - batch files:
    - `research/frontier-18-batch-7.proof-contracts.json`
- Batch `8`
  - items:
    - `thm-cauchy-integral-formula-on-a-polydisc`
    - `thm-identity-theorem-in-several-complex-variables`
    - `thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables`
  - batch files:
    - `research/frontier-18-batch-8.pages.json`
    - `research/frontier-18-batch-8.proof-contracts.json`

## Twice-touched items

- `thm-cauchy-integral-formula-on-a-polydisc`
  - reader repaired the recursion mis-citation
  - Alpha then removed the stale `def-complex-integer-powers` citation and synced the manifest/contract

## Remaining gaps

- I did not re-enumerate every heading of every batch-8 source from scratch; the honest note in `frontier-18-batch-8.notes.md` remains true as process history. What I did verify at step 6 is that the live locators, the primary headings, and the load-bearing harvested rows I spot-checked are coherent with the current scaffold and authored content.
- No current mathematical defect remains confirmed on batches `6`, `7`, or `8` after the repairs above.

## Gate adjudication — `finite-smoke`

I reproduced the blocker from the current tree after rebuilding `research/frontier-18-proof-contracts.json`. Every finding on my group’s batches was a real proof-contract defect rather than a mathematical defect in the authored items: three batch-7 smoke rows had no genuine registry match, one batch-7 row and both batch-8 rows kept genuine checks but their `asserts` text was not an exact excerpt from the authored item. I repaired only the batch contracts and reran the gate clean:

`finite-smoke: 0 error(s), 22 check(s) over 20/669 item(s) carrying obligations`

### Gate findings

- `ex-smith-volterra-cantor-set-has-lebesgue-measure-one-half` / `linear-recurrence-matches-rational-series` — `repaired` — removed the smoke row from `research/frontier-18-batch-7.proof-contracts.json`; the example computes a measure but does not explicitly assert the recurrence/generating-function claim that registry check probes.
- `lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one` / `matrix-ring-laws-mod-n` — `repaired` — removed the smoke row; the lemma asserts the determinant and measure of one shear, not the general matrix-ring law the registry check probes.
- `thm-linear-change-of-variables-for-lebesgue-measure` / `matrix-ring-laws-mod-n` — `repaired` — kept the genuine determinant-multiplicativity check and replaced `asserts` with the exact on-disk `[F2]` excerpt `For $n\ge1$ and $A,B\in M_n(R)$ over a commutative ring, $\det(AB)=\det(A)\det(B)$`.
- `cor-complex-jacobian-determinant-is-multiplicative` / `matrix-ring-laws-mod-n` — `repaired` — kept the check and replaced `asserts` with the exact displayed equation from the Statement, including its `$$…$$` delimiters.
- `ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc` / `matrix-ring-laws-mod-n` — `repaired` — kept the check and replaced `asserts` with the exact on-disk `[L4]` clause `The complex Jacobian determinant of a composite is the product of the determinants`.
