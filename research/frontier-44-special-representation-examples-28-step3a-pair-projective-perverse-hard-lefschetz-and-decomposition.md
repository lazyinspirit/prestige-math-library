# Step 3a scope review — `projective-perverse-hard-lefschetz-and-decomposition`

- Run: `frontier-44-special-representation-examples-28` (alpha, batch 48, category `algebraic-geometry`).
- A page: `projective-perverse-hard-lefschetz-and-decomposition` (order 1830, 5 items).
- B page: `projective-perverse-hard-lefschetz-and-decomposition-examples` (order 1833, 1 item).
- Design: `research/plan-klr-foundation-prerequisites.md` L1403–L1481 (item headings L1411, 1421, 1441, 1459, 1467, 1475); canonical plan `research/plan-spec.json`.
- Verdict: **sufficient**. Scope evidence below; no scaffold or owner record was edited.

## Design ↔ manifest ↔ coverage

The pair realises its frozen design item-for-item: the five A suppliers and the one B
example are present with matching ids, kinds and orders, and each manifest `statement`
is identical (whitespace-normalised) to the `## Statement` / `## Example` section of its
authoring carrier under
`research/frontier-44-special-representation-examples-28-klr-foundation-semisimplicity-drafts/items/`.
The subject realised is the compact-source (smooth projective source, projective target)
relative hard Lefschetz + decomposition + semisimplicity theorem of dcM/BBD, together
with its splitting criterion, middle-limit polarization and the simultaneous induction
package, plus the point-case example:

1. `lem-perverse-closed-support-splitting-is-equivalent-to-costalk-stalk-isomorphism` — dcM 4.1.3 splitting criterion, closed-pair specialisation (AC inherited).
2. `lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations` — dcM 5.4.1–5.4.4 limit Λ, radical and polarization of the middle primitive space from hypotheses (a)–(c).
3. `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction` — the induction step (defect/image-dimension pair, package = relative HL, normalized splitting, semisimplicity with complexified IC local systems, graded target HL, purity, polarized double primitive decomposition).
4. `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps` — dcM 2.1.1(a,b,c) + BBD 5.4.10 for the compact source, explicitly no nonprojective-source reduction.
5. `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology` — the same decomposition over any characteristic-zero coefficient field, no embedding `k ↪ ℂ`.
6. `ex-projective-perverse-decomposition-for-projective-space-to-a-point` — `Rf_*k[n] ≅ ⊕_{j=0}^n k[n-2j]` for `ℙ^n → pt`.

Coverage (batch-48 coverage file) has 44 harvested rows over four fetch-stamped sources:
A page 38 rows = 6 `included` (dcM 2.1.1 a/b/c, 4.1.3, 5.4.1–5.4.4, BBD 5.4.10), 23
`inline`, 4 `deferred`, 5 `out-of-scope`; B page 6 rows = 1 / 3 / 0 / 2. Both deferred
destinations exist and hold the named material: batch 43
`affine-perverse-vanishing-and-universal-hyperplanes` (universal-hyperplane weak
Lefschetz, maximal pullback subobjects, defect drop, Artin/Morse items) and batch 46
`proper-hyperresolutions-and-mixed-hodge-restriction-images` (hyperresolutions, mixed
Hodge weight control). Out-of-scope declines have written reasons (intersection-cohomology
purity/Hodge–Lefschetz and worked examples elsewhere; cup-product ring not needed by the
point example). The `coverage-low-yield` warning (6/38 scaffolded on the A page) is the
inline-absorption pattern, and the inline rows were spot-verified in the carriers — e.g.
the defect-amplitude vanishing of dcM 2.1.2 and the class-map purity / refined-intersection
invertibility of dcM 2.1.8–2.1.9 are genuine proof components of item 3 (Construction F,
component steps 5.1 and 2.1), though not standalone statements.

## Sources

All four source instances were re-fetched on 2026-10-10 and are byte-identical to the
coverage stamps: de Cataldo–Migliorini, *The Hodge theory of algebraic maps*,
arXiv:math/0306030, 676,708 B, sha256_16 `35fcdf2d6c0688fa` (read against the ar5iv full
text for 2.1.1, 2.1.8–2.1.9, 4.1.3 and 5.4.1, confirming the dispositions and the
item-level restatements); BBD, *Faisceaux pervers*, Numdam AST_1982__100__1_0.pdf,
15,581,222 B, `b1e10440e13cb6bf`; Goresky, *Lecture Notes on Sheaves and Perverse
Sheaves*, all2.pdf, 1,954,729 B, `dfd4e0721c8c2e31`; Hatcher, *Algebraic Topology*,
AT.pdf, 8,121,741 B, `bebb3032bf9021b9` (matched against the local source cache).

## Dependencies, prerequisites, checks

- All 49 declared dependency slots over 33 distinct ids resolve: 9 published items
  (`def-axiom-of-choice`, `lem-projective-hypersurface-dimension-drop`,
  `lem-pullback-of-the-thom-class-along-a-transverse-section`,
  `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`,
  `thm-bertini-smooth-hyperplane-section`, `thm-generic-smoothness-characteristic-zero`,
  `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`,
  `thm-ample-powers-very-ample-proper-base`,
  `thm-cellular-cochains-compute-cohomology-with-local-coefficients`) plus 24 in-run
  scaffold ids in batches 33/37/39/40/41/42/43/46/48. All nine page-level `requires`
  of the A page and all three of the B page resolve to current scaffold or published pages
  inside the declared order (validate-plan run exit 0; only pre-existing
  `redundant-prereq` advisories, none blocking).
- Every wikilink and backticked item id in the six authoring carriers resolves against
  the 858-item run scaffold ∪ 26,654 published items. All 37 cross-batch ledger rows
  (30 item, 7 page) are `verified`; no missing, circular, forward or B-page dependency.
- `node tools/coverage-checklist.mjs … --require-destination`: 0 errors, 1 explained
  warning. `manifest-deps`: 6 items, 0 errors. `content-policy --manifest-only` run-wide:
  858 items, 0 errors, 0 warnings. `item-dependency-levels check --run`: 0 errors.
  `step3-decisions.mjs check --phase scope`: this pair is one of the current-scope
  reviews still owed.
- Intended role: batch 49 `quiver-full-flag-projective-semisimplicity` requires this A
  page, and its corollary `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`
  depends directly on item 5; the B page is a leaf.
- **Unmet prerequisites: none confirmed.** No declared or carrier-referenced prerequisite
  is absent from both the published library and the current scaffold. Residual
  uncertainty only: the in-run suppliers (24 distinct dependency ids across batches 33/37/39/40/41/42/43/46 and this batch) are scaffold-level `ready` with proofs owed to
  Steps 3–5 (expected at 3a), and the pair's own load-bearing constructions
  (batch-48 notes F2: Construction F zero-stratum refined-intersection invertibility;
  Construction H moving hyperplane family) are local proof obligations, not missing
  prerequisites.

## Findings for the owner (non-blocking, no scaffold edits)

- **F1 — thin B page, design-faithful.** The single planned example `ℙ^n → pt` is the
  degenerate point case; it verifies the splitting but exercises no nontrivial IC local
  system, relative HL input or semisimplicity argument. The design plans exactly this one
  example, both coverage and its declines are consistent, and no consumer needs more;
  optional enrichment only if the owner reopens the frozen design (e.g. a semismall
  resolution example).
- **F2 — coverage labels.** dcM 2.1.8/2.1.9 are labelled `inline`; verified as genuine
  proof components of item 3 (class image pure Hodge substructure in `ker L`, graded
  refined-intersection invertibility) rather than standalone named results. No consumer
  requires them as standalone statements.
- **F3 — uncertainty about one deferral destination.** dcM §2.3 (reduction of the
  decomposition/semisimplicity theorems to proper maps) is deferred to batch 46, but that
  pair scaffolds hyperresolution and mixed-Hodge weight-control items, not an explicit
  proper-map decomposition theorem. This lies outside this pair's compact-source subject
  and no consumer in this frontier requires it; recorded as uncertainty about the
  destination's fit, not a defect of this pair. Similarly the IC purity/Hodge–Lefschetz
  family (§2.2) has no in-run consumer.
- **F4 — Step 4 splice bookkeeping.** Manifest deps are strict supersets of the
  `plan-spec.json` deps on items 3 and 5; item 3's title was normalised to the carrier
  title; and the B example's plan dep on item 4 was replaced by item 5 (which itself
  depends on item 4, and the carrier still links item 4). Reconcile at splice — no scope
  change and no claim weakened.

Decision recorded: `sufficient` (scope hash current at the time of recording).
