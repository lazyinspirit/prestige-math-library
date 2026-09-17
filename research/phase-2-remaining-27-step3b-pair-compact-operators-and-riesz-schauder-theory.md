# Phase 2 remaining 27 — Step 3b author report: compact operators and Riesz–Schauder theory

**Status: complete for this pair.** All 33 owned items are fully authored with
strict proof contracts, both pages are written, the manifest, coverage,
cross-batch dependency input and frontier ledger are updated, and all 33 item
decisions are recorded `accept` at confidence 1. No escalation is open for this
pair.

## Completed IDs

Scaffolded A items (25), all authored and accepted:
`def-compact-linear-operator`,
`thm-sequential-characterization-of-compact-operators`,
`lem-finite-rank-operators-are-compact`,
`lem-compositions-with-a-compact-operator-are-compact`,
`lem-linear-combinations-of-compact-operators-are-compact`,
`thm-norm-limit-of-compact-operators-is-compact`, `def-approximable-operator`,
`thm-schauder-compact-adjoint-theorem`,
`thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences`,
`lem-kernel-of-identity-minus-compact-is-finite-dimensional`,
`lem-range-of-identity-minus-compact-is-closed`,
`lem-riesz-schauder-ascent-and-descent-stabilize`,
`thm-fredholm-alternative-for-identity-minus-compact`,
`lem-neumann-series-and-small-perturbations-of-bounded-inverses`,
`def-spectrum-and-resolvent-of-a-bounded-operator`,
`thm-riesz-schauder-spectrum-of-a-compact-operator`,
`cor-spectrum-of-a-compact-operator-is-countable-with-only-zero-as-possible-accumulation`,
`def-fredholm-operator-cokernel-and-index`,
`lem-fredholm-splitting-and-parametrix`,
`lem-a-compact-remainder-estimate-forces-closed-range`, `thm-atkinson`,
`thm-fredholm-index-is-additive`, `thm-fredholm-index-is-locally-constant`,
`thm-fredholm-index-is-stable-under-compact-perturbations`,
`cor-lambda-identity-minus-compact-has-index-zero`.

Scaffolded B items (7), all authored and accepted:
`ex-diagonal-operator-on-ell-p-is-compact-iff-diagonal-tends-to-zero`,
`ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval`,
`cex-identity-is-compact-iff-the-space-is-finite-dimensional`,
`cex-a-compact-operator-can-have-nondense-range`,
`ex-fredholm-alternative-for-an-integral-equation`,
`cex-compactness-is-not-preserved-by-strong-operator-limits`,
`rem-approximation-property-controls-finite-rank-density-in-compact-operators`.

Local addition authored by this dispatch (1), registered in manifest, coverage
(`canonical` row), contracts and the A page item list:
`lem-dependent-choice-implies-countable-choice` (ZF finite-history proof that
DC implies AC_omega; inserted after `def-compact-linear-operator` on the A
page, before its consumers).

Run: `phase-2-remaining-27`. Dispatch:
`step3b-pair-compact-operators-and-riesz-schauder-theory-996659671b0a6f6c`.
Owned pair: A `compact-operators-and-riesz-schauder-theory`, B
`compact-operators-and-riesz-schauder-theory-examples` (shared batch
`research/phase-2-remaining-27-batch-2.pages.json`; the sibling square-kernel
pair in that batch is owned by another writer and is not touched here).

## Checkpoint and progress log (final)

Scope decision: `sufficient` (Step 3a receipt
`research/phase-2-remaining-27-step3a-review-compact-operators-and-riesz-schauder-theory.json`).
Owner direction `research/phase-2-remaining-27-owner-authoring-direction.md`
read: binding FA-15/§14.4–14.5 amendments (norm-closure needs Banach target;
four local insertions; Hilbert–Schmidt kernel example belongs to the sibling
pair). No unresolved obligation from that direction bears on this pair beyond
those amendments, which the scaffold already reflects.

Source texts (fetch-verified in the batch-2 coverage record): Bühler–Salamon
§§4.2–4.4 (pp. 183–198) and §5.2.3 (pp. 224–226); Teschl §3.1 (pp. 69–72),
§6.1 (pp. 163–164), §6.5 (pp. 183–189), §6.6 (pp. 189–192). The proofs below
are the library-local arguments, not source transcriptions; the manifest
strategies are treated as work lists.

Progress log (item: status | key decisions):

- A01 `def-compact-linear-operator`: authored; equivalence of bounded-set and
  closed-unit-ball formulations proved in the definition's prose; boundedness
  of compact operators recorded. precheck n/a (definition), rendercheck clean.
- A02 `thm-sequential-characterization-of-compact-operators`: authored under DC;
  forward direction via compact-metric-space subsequences, converse builds a
  finite net from the compact closure and applies (d)⇒(a). precheck PASS.
- A03 `lem-finite-rank-operators-are-compact`: authored; scaling of the compact
  unit ball of the finite-dimensional range. precheck PASS.
- A04 `lem-compositions-with-a-compact-operator-are-compact`: authored. PASS.
- A05 `lem-linear-combinations-of-compact-operators-are-compact`: authored;
  sum via continuous addition on a product of compact closures; polynomial via
  the ideal property by induction. PASS.
- A06 `thm-norm-limit-of-compact-operators-is-compact`: authored under AC_ω;
  finite ε-nets from compactness (no totally-bounded supplier needed) plus
  closed-in-Banach completeness. PASS.
- A07 `def-approximable-operator`: authored; epsilon form of the closure and the
  AC_ω compactness consequence proved in prose; no converse asserted. n/a.
- A08 `thm-schauder-compact-adjoint-theorem`: authored under AC; (⇒) by finite
  nets plus a diagonal subsequence over a countable dense subset of the compact
  closure (AC_ω/DC exact), (⇐) by applying (⇒) to T* and factoring through
  J_Y(Y). PASS.
- A09 `thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences`:
  authored under AC; UBP bounds the sequence, then compactness plus pointwise
  separation identifies the norm limit with Tx. PASS.
- A10 `lem-kernel-of-identity-minus-compact-is-finite-dimensional`: authored for
  normed X (stronger than the Banach scaffold claim, which still holds); the
  unit ball of the kernel is a closed subset of the compact K(ball) closure.
  PASS. Decision note: consumers use the Banach case only.
- A11 `lem-range-of-identity-minus-compact-is-closed`: authored under DC; the
  quotient-normalised separated sequence plus compactness gives the estimate,
  and the published quotient-estimate criterion gives closed range. PASS.
- A12 `lem-riesz-schauder-ascent-and-descent-stabilize`: authored under DC;
  A^n = I - K_n by induction; both chains shown to stabilise by 1/2-separated
  Riesz vectors; stable kernel direct-sum stable range; A|Y invertible via the
  bounded inverse theorem. PASS.
- A13 `thm-fredholm-alternative-for-identity-minus-compact`: authored under AC;
  injective/surjective equivalence through the finite-dimensional stable
  kernel; annihilator identity for solvability; equality of defect dimensions
  by rank-nullity on N and on N/A(N). PASS.
- A14 `lem-neumann-series-and-small-perturbations-of-bounded-inverses`:
  authored; B(X) Banach plus the absolutely convergent series criterion; the
  perturbation is factored as A(I + A^{-1}E). PASS.
- A15 `def-spectrum-and-resolvent-of-a-bounded-operator`: authored (complex
  Banach only; real complexification deferred); generalized eigenspace and
  algebraic multiplicity defined; no spectral nonemptiness/openness asserted.
  rendercheck fixed after one multiline display.
- A16 `thm-riesz-schauder-spectrum-of-a-compact-operator`: authored under AC;
  nonzero spectral points are eigenvalues with finite generalized eigenspace;
  ρ open and σ inside the norm disk by Neumann; isolation on the stable
  N ⊕ Y splitting (nilpotent finite block + invertible block); Heine–Borel and
  the singleton cover give finiteness of {|λ| ≥ ε}; infinite dimension forces
  0 ∈ σ. PASS.
- A17 `cor-spectrum-of-a-compact-operator-is-countable-with-only-zero-as-possible-accumulation`:
  authored under AC; σ ⊆ {0} ∪ ⋃ S_{1/n} and each S_{1/n} finite; nonzero
  points have a ball meeting σ at most in themselves; Archimedean reciprocal.
  PASS.
- A18 `def-fredholm-operator-cokernel-and-index`: authored; closed range is an
  explicit clause; index defined as an integer; no index property asserted.
- A19 `lem-fredholm-splitting-and-parametrix`: authored under AC; complements
  from the two complementation corollaries, bounded inverse theorem on X1,
  S = U∘P, defects the projections onto ker T and Y0, dim Y0 = dim coker T by
  pulling back a basis. PASS.
- A20 `lem-a-compact-remainder-estimate-forces-closed-range`: authored under DC;
  finite kernel via sequential compactness of the kernel unit ball; closed range
  via the quotient-estimate contradiction with the compact remainder. PASS.
- A21 `thm-atkinson`: authored under AC; direct split from A19; converse via
  the compact-remainder estimate and Schauder on F = ST - I; finite cokernel
  from finite-dimensional dual of the cokernel. PASS.
- A22 `thm-fredholm-index-is-additive`: authored under AC; parametrices
  composed; the six-term exact sequence verified term by term; rank-nullity
  telescoping. PASS.
- A23 `thm-fredholm-index-is-locally-constant`: authored under AC; Neumann
  invertibility of the X1 block, bounded row/column operations reduce A to
  diag(A11, S), and the finite-dimensional Schur complement gives index
  dim N - dim Y0; degenerate case X1 = 0 handled separately. PASS.
- A24 `thm-fredholm-index-is-stable-under-compact-perturbations`: authored;
  parametrices modulo compact along the path t ↦ T + tK; local constancy plus
  connectedness of [0,1]. PASS.
- A25 `cor-lambda-identity-minus-compact-has-index-zero`: authored; lambda I is
  invertible of index 0 and -K is compact. PASS.
- B01 `ex-diagonal-operator-on-ell-p-is-compact-iff-diagonal-tends-to-zero`:
  authored under DC for K = R or C and 1 ≤ p ≤ ∞; truncations finite rank,
  norm error sup tail, converse by ε-separated e_n and the sequential
  characterization. PASS.
- B02 `ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval`:
  authored under DC; real case by Ascoli, complex case through the real and
  imaginary parts plus the published subsequence corollary and (d)⇒(a). PASS.
- B03 `cex-identity-is-compact-iff-the-space-is-finite-dimensional`: authored;
  the criterion plus the ell^2 witness by an infinite independent list. PASS.
- B04 `cex-a-compact-operator-can-have-nondense-range`: authored; nonzero
  finite-rank coordinate projection with proper closed range. PASS.
- B05 `ex-fredholm-alternative-for-an-integral-equation`: authored under AC;
  C([a,b],K) Banach (complex case by real/imaginary parts), abstract
  alternative applied with the transpose kernel condition. PASS.
- B06 `cex-compactness-is-not-preserved-by-strong-operator-limits`: authored;
  finite-rank projections converge strongly to the noncompact identity with
  norm distance 1. PASS.
- B07 `rem-approximation-property-controls-finite-rank-density-in-compact-operators`:
  authored; AP implication with the compact-closure argument, converse not
  asserted. rendercheck clean, precheck n/a by design.
- L01 `lem-dependent-choice-implies-countable-choice` (local addition):
  authored; finite histories, entire extension relation, union of the DC chain.
  PASS; registered in manifest, coverage canonical row, contracts, A page.

## Scaffold repairs made by this dispatch

1. **Choice-interface repair (forward-reference defect in the scaffold).** The
   scaffold listed `thm-choice-implies-dependent-implies-countable-choice` as a
   dependency of 17 items. That item is planned on
   `weak-choice-principles-and-sierpinskis-theorem` (order 665), later than this
   pair (288.075/288.076), so `fwdcheck` reports it as an undeclared forward
   reference for these items, and a load-bearing forward reference is not
   allowed outside examples/counterexamples/corollaries/remarks. Repair:
   AC-hypothesis items now cite the published earlier-page
   `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`
   (order 288.069), which states exactly AC => AC_omega and AC => DC;
   DC-hypothesis items cite the locally authored
   `lem-dependent-choice-implies-countable-choice`. Twelve new cross-batch rows
   were added to `research/phase-2-remaining-27-batch-2.cross-batch-dependencies.json`
   and the unified ledger was refreshed.
2. **Dependency re-sync.** All 33 manifest dependency arrays were re-synced from
   the authored items; unused scaffold deps were dropped (for example
   `def-counting-measure` from two counterexamples,
   `def-metric-bounded-diameter` from the linear-combinations lemma, the
   choice-implication bridge from `lem-range-of-identity-minus-compact-is-closed`,
   where neither AC_omega nor the bridge is used) and missing deps were added
   where the written proofs need them (for example `cor-equicontinuous-…`,
   `thm-heine-borel-rn`, `thm-c-k-complete-in-the-sup-metric`,
   `lem-complex-lp-completeness-density-and-inner-product`,
   `thm-bounded-linear-operator-equivalences`).
3. **Statement scope honesty.** `lem-kernel-of-identity-minus-compact-is-finite-dimensional`
   is proved for normed spaces (the scaffold wording said Banach); the stronger
   statement is recorded in the item and the manifest row is unchanged, so no
   consumer loses anything. `lem-dependent-choice-implies-countable-choice`
   records `proof: ai-altered` rather than `not-applicable`, since its argument
   is local.
4. **Axiom-audit text.** Eight manifest `axiom_audit` rows that named the
   "declared implication bridge" were updated to name the actual suppliers and
   the exact AC/DC use.
5. **Coverage locator note (for the owner, not repaired here):** the batch-2
   Teschl locator still reads "§3.1, pp. 69–72; §6.5, pp. 183–189; §6.6,
   pp. 189–192", while two owner-inserted items
   (`lem-neumann-series-and-small-perturbations-of-bounded-inverses`,
   `def-spectrum-and-resolvent-of-a-bounded-operator`) cite Teschl §6.1,
   pp. 163–164. Both citations are apt and fetch-verified; the locator should
   be widened to §6.1 on the next touch of that record (the Step 3a report
   already recorded this nit).

## Checks actually run (all on the final content)

| command | result |
| --- | --- |
| `node tools/tsx-run.mjs tools/precheck.mts <33 items>` | PASS — 28 proof-bearing items checked, 0 failing (the five definitions/remark have no proof body by design) |
| `node tools/rendercheck.mjs <33 items + 2 pages>` | PASS — 35 files, no math/delimiter/frontmatter finding |
| `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-2.proof-contracts.json --strict` | PASS — 33/33 items, 0 errors, 0 warnings (exact quotes, per-step inputs, all eight boundary dispositions per item) |
| `node tools/content-policy.mjs research/phase-2-remaining-27-batch-2.pages.json` | 42 scoped items, 9 errors — all 9 are `scope-item-missing` for the *sibling* square-kernel pair, which has no item files yet; no finding for this pair |
| `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-2.pages.json` | PASS — 42 items, 0 normalized, 0 errors |
| `node tools/coverage-checklist.mjs --require-destination research/phase-2-remaining-27-batch-2.coverage.json` | PASS — 2 pages, 47 harvested results, 0 errors, 0 warnings |
| `node tools/depcheck.mjs --quiet` | No finding for any of the 33 items (checked by filtering the full report) |
| `node tools/fwdcheck.mjs` | No finding for any of the 33 items; the remaining undeclared forward references belong to other pairs |
| `node tools/extcheck.mjs` | PASS — every recorded-not-proved statement is a cited remark; the listed published warnings are inherited and unrelated |
| `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60` | OK — acyclic, no item-level cycles, forward references, B-page dependencies or unresolved ids |
| `node tools/splice-plan.mjs --run phase-2-remaining-27 --all --dry-run` | No mismatch reported for this batch; the two reported mismatches are other pairs' in-flight manifests (see below) |
| `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | PASS — refreshed and deduplicated |
| `node tools/step3-decisions.mjs record-scope … --decision sufficient` | recorded with the refreshed evidence (this dispatch) |
| `node tools/step3-decisions.mjs record-item …` (33×) | all 33 recorded `accept`, confidence 1, with the item's dependency IDs |

## AC and its exact use

- Choice-free items: `def-compact-linear-operator`,
  `lem-kernel-of-identity-minus-compact-is-finite-dimensional`,
  `lem-neumann-series-and-small-perturbations-of-bounded-inverses`,
  both definitions of the Fredholm/spectrum vocabulary, `thm-atkinson`'s
  algebraic part and `thm-fredholm-index-is-additive`'s exact-sequence count.
- DC-hypothesis items: `thm-sequential-characterization-…`,
  `lem-range-of-identity-minus-compact-is-closed`,
  `lem-riesz-schauder-ascent-and-descent-stabilize`,
  `lem-a-compact-remainder-estimate-forces-closed-range`,
  `ex-diagonal-operator-on-ell-p-…`,
  `ex-continuous-kernel-integral-operator-…`; each names the step where the
  countable selection or the equivalence's DC half is spent, and the two that
  also need AC_omega obtain it from
  `lem-dependent-choice-implies-countable-choice` (which is proved, not
  assumed).
- AC-hypothesis items (Schauder, weak-to-norm convergence, the Fredholm
  alternative, the spectral theorem and its corollary, the splitting lemma,
  Atkinson, additivity, local constancy, compact-perturbation stability, the
  index-zero corollary, the integral-equation example): AC is stated in the
  statement, the exact uses are named in the `axiom_audit` rows (Hahn–Banach
  separation/norming, and via
  `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration` the
  DC/AC_omega used by bounded inverses, uniform boundedness, stabilization and
  the metric compactness equivalences), and the assumption is propagated to
  consumers through each statement's hypothesis.

## Published concerns and routed findings

- **Routed to the owner of the sibling batch-1 pairs (in-run drafts, not
  published; I did not edit them).** `fwdcheck` reports undeclared forward
  references to `thm-choice-implies-dependent-implies-countable-choice` in
  `thm-existence-of-a-maximal-orthonormal-family` (twice, in
  `orthonormal-bases-parseval-and-fourier-series`) and in
  `rem-l2-projection-agreement` (in
  `hilbert-space-geometry-and-riesz-representation`). Confidence: high for the
  structural finding; the mathematics of those items is not in question.
  Proposed remedies, in the owner's hands: for the theorem, restate the
  hypothesis as AC (or AC_omega+DC) and cite the published earlier-page
  `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`, or
  derive the needed countable-choice instance locally as
  `lem-james-noncompactness-sequence` does; for the remark, a declared
  non-load-bearing `forward_refs` entry is also available. The same repair
  pattern was applied to this pair.
- **Published item suspicion, not a confirmed defect:**
  `thm-dual-norms-every-vector` and `cor-dual-separates-points` state no choice
  hypothesis; their AC cost is carried only through their Hahn–Banach
  dependencies (`thm-hahn-banach-norm-preserving-extension` and its complex
  counterpart). This is the library's normal propagation convention and no
  consumer of mine relies on a choice-free reading; I record it as an inherited
  assumption rather than a defect. Consumers such as mine state AC explicitly,
  as the owner's axiom rule requires.
- **Run-wide direction question for Steps 4/5 (not a pair defect):** the plan
  places `thm-choice-implies-dependent-implies-countable-choice` at order 665,
  after many consumers that declare it (my pair was one, now repaired).
  `fwdcheck` reports this shape for several other items/pages as well
  (20 findings in total across the run, 3 of which were mine before the
  repair). The owner may wish to either provide the DC/AC_omega interface on an
  earlier foundations page or require consumers to restate hypotheses; this
  pair's repair is self-contained and does not depend on that decision.
- **Confirmed published defects: none found among the suppliers used.** Every
  published statement I cited was read in full at its statement level and used
  with its stated hypotheses; the only corrections needed were in my own
  authored/batch files.
- **Pre-splice plan mismatches to report for Step 4 (other pairs, live
  writers):** `choice-strength-in-baire-urysohn-stone-and-tychonoff` (manifest
  41 items versus 39 on the page) and
  `normal-moore-spaces-pmea-and-consistency-strength` (manifest 30 versus 26).
  These belong to their authors' in-flight work; I did not touch them.

## Local suppliers added

`lem-dependent-choice-implies-countable-choice` on the A page (item file,
manifest row, coverage `canonical` row, strict contract, page list), plus the
twelve cross-batch consumer rows for
`lem-ac-supplies-countable-and-dependent-choice-for-banach-integration` in the
batch-2 cross-batch dependency input.

## Open obligations

None for this pair. The sibling square-kernel pair in batch 2 is unauthored at
handoff (its 9 items are missing files; the manifest and the other pair's rows
in the shared batch file, coverage, contracts and cross-batch input were left
untouched), and the two Step-3a scope nits recorded above remain owner edits.
