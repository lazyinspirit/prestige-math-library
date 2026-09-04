# frontier-29 reader-11 report

## Opened scope

- Control artifacts opened: `CLAUDE.md`, `README.md`, `research/frontier-29-reader.task.md`, `research/frontier-29-beta-11.task.md`, `research/frontier-29-batch-11.pages.json`, `research/frontier-29-batch-11.coverage.json`, `research/frontier-29-batch-11.notes.md`, `research/frontier-29-batch-11.proof-contracts.json`, and `research/frontier-29-step6-hash-11-pre.json`.
- Live-run context opened: `.autopilot/` directory contents and `.autopilot/state.json`. The state file still names `frontier-23`, so I treated the explicit `frontier-29` dispatch artifacts as the authority for this reader pass.
- Assigned page files opened: `library/homological-algebra/derived-functors.md` and `library/homological-algebra/derived-functors-examples.md`.
- Required page dependency opened: `library/homological-algebra/projective-and-injective-resolutions-examples.md`. I also opened the published companion A page `library/homological-algebra/projective-and-injective-resolutions.md` because several scoped items depend on comparison, horseshoe, and deleted-resolution results from that page.
- Assigned batch items opened: all 51 scoped item files named in `research/frontier-29-batch-11.pages.json`.

```text
def-supplied-projective-resolution-datum
def-supplied-injective-resolution-datum
def-left-derived-object-relative-to-projective-resolution-data
def-right-derived-object-relative-to-injective-resolution-data
prop-negative-derived-degrees-vanish-for-one-sided-resolutions
lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions
lem-the-induced-homology-map-is-independent-of-the-comparison-lift
def-left-derived-map-relative-to-resolution-data
prop-left-derived-maps-preserve-identities
prop-left-derived-maps-preserve-composition
thm-left-derived-functors-relative-to-supplied-data-are-additive-functors
lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions
lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension
def-right-derived-map-relative-to-resolution-data
thm-right-derived-functors-relative-to-supplied-data-are-additive-functors
prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors
prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors
lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects
lem-the-change-of-projective-resolution-isomorphisms-are-natural
thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic
prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws
thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic
prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws
rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data
thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor
thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor
prop-positive-left-derived-functors-vanish-on-projective-objects
prop-positive-right-derived-functors-vanish-on-injective-objects
def-acyclic-object-for-a-left-exact-functor
def-acyclic-object-for-a-right-exact-functor
def-f-acyclic-resolution
thm-acyclic-resolution-theorem-for-right-derived-functors
thm-acyclic-resolution-theorem-for-left-derived-functors
cor-adapted-classes-compute-derived-functors
prop-an-exact-functor-has-vanishing-positive-derived-functors
prop-derived-functors-commute-with-finite-biproducts
prop-contravariant-derived-functors-are-derived-on-the-opposite-category
prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied
def-balanced-derived-bifunctor
fs-enough-projectives-implies-a-canonical-resolution-for-every-object
fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift
fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself
fs-derived-functors-in-two-variables-are-automatically-balanced
fs-an-acyclic-resolution-is-the-same-thing-as-an-injective-resolution
ex-the-left-derived-functors-of-an-exact-functor
ex-the-right-derived-functors-of-hom-from-a-fixed-object
ex-two-resolution-data-and-their-change-isomorphism
ex-independence-of-two-comparison-lifts-on-homology
ex-an-acyclic-resolution-that-is-not-an-injective-resolution
cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor
ex-a-contravariant-functor-derived-via-the-opposite-category
```

- Dependency items opened for verification: 38 unique published items.

```text
def-abelian-category
def-additive-functor
def-cochain-complex-in-an-abelian-category
def-cohomology-object-of-a-cochain-complex
def-deleted-resolution
def-exact-functor-between-abelian-categories
def-functor-and-contravariant-functor
def-homology-object-of-a-chain-complex
def-injective-object
def-injective-resolution-in-an-abelian-category
def-left-exact-and-right-exact-functor
def-natural-transformation
def-opposite-category
def-projective-object
def-projective-resolution-in-an-abelian-category
fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects
prop-a-projective-object-has-a-length-zero-projective-resolution
prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps
prop-comparison-maps-respect-composition-up-to-homotopy
prop-comparison-of-the-identity-is-homotopic-to-the-identity
prop-finite-biproducts-of-complexes-are-computed-degreewise
prop-homology-respects-identities-and-composition
prop-the-iterated-free-module-resolution-is-canonical-in-zf
thm-a-chain-map-induces-a-well-defined-map-on-homology
thm-an-additive-functor-preserves-finite-biproducts
thm-an-exact-functor-commutes-with-homology
thm-chain-homotopic-maps-induce-the-same-map-on-homology
thm-hom-is-left-exact-in-each-variable
thm-homology-is-an-additive-functor
thm-injective-comparison-map-exists
thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy
thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object
thm-long-exact-sequence-in-cohomology
thm-long-exact-sequence-in-homology
thm-projective-comparison-map-exists
thm-projective-comparison-maps-are-unique-up-to-chain-homotopy
thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object
thm-the-opposite-of-an-abelian-category-is-abelian
```

- Primary-source check used during repair design: I reopened Weibel's chapter-2 PDF in the web reader to verify that the balancing notion requires exactness hypotheses and additional comparison data rather than following automatically from the two candidate one-variable constructions.

## Edits kept

- `items/prop-negative-derived-degrees-vanish-for-one-sided-resolutions.md`
  Repaired the statement display so the two vanishing equations sit in a single render-safe display line.
- `items/lem-the-induced-homology-map-is-independent-of-the-comparison-lift.md`
  Repaired the statement display listing the two induced homology maps.
- `items/def-left-derived-map-relative-to-resolution-data.md`
  Repaired the defining display for `L_n^PF(u)` so it renders on one source line.
- `items/lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension.md`
  Repaired the statement display listing the two induced cohomology maps.
- `items/def-right-derived-map-relative-to-resolution-data.md`
  Repaired the defining display for `R_I^nF(u)` so it renders on one source line.
- `items/prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors.md`
  Repaired the statement display defining the component map `\mathbf L_n^P(\alpha)_A`.
- `items/prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors.md`
  Repaired the statement display defining the component map `\mathbf R_I^n(\alpha)_A`.
- `items/prop-an-exact-functor-has-vanishing-positive-derived-functors.md`
  Repaired the statement display for the simultaneous left/right vanishing claim.
- `items/ex-two-resolution-data-and-their-change-isomorphism.md`
  Repaired the example display listing the projective-side and injective-side change isomorphisms.
- `items/def-balanced-derived-bifunctor.md`
  Repaired the definition itself: the previous current bytes invoked degree-zero recovery without stating the needed exactness hypotheses and described balance too vaguely. The repaired definition now states the slice-wise left-exactness assumptions, makes clear that the two candidates are right-derived constructions, and identifies degree `0` via the right-derived recovery theorem on `\mathcal C` and on `\mathcal A^{\mathrm{op}}`.
- `research/frontier-29-batch-11.proof-contracts.json`
  Refreshed the 10 affected proof-contract entries whose citation quotes changed after the display and definition repairs.

## Confirmed defects repaired

1. Nine batch-owned items had rendercheck-visible multiline `$$...$$` displays on current disk. These were fatal ill-formed presentation defects because the mathematical statements or defining formulas mis-rendered under the real renderer.
2. `def-balanced-derived-bifunctor` had a substantive definition defect on current bytes: it referred to degree-zero recovery without the necessary exactness hypotheses and treated the balancing comparison too loosely. The repaired text now matches the page's current contravariant/covariant setup and keeps the balancing notion as extra data rather than an automatic consequence.

No uneditable in-flight-item, page, or published-dependency defect remained after those batch-local repairs.

## Page verdicts

- `derived-functors`
  Sufficient after repair on the opened scope. The supplied-data route, change-of-resolution results, acyclic-resolution theorems, variance bridge, and false-statement guardrails are mathematically coherent on current disk once the render defects and the balancing definition are corrected.
- `derived-functors-examples`
  Pass unchanged on the opened scope. The companion examples remain compatible with the repaired A-page items, and I made no B-page body edit.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts <10 changed item files>`
  Result: canonical formatting confirmed; no further reflow changes were needed after the final patch pass.
- `node tools/tsx-run.mjs tools/precheck.mts <10 changed item files>`
  Result: pass. The 7 proof-bearing changed items checked clean; the 3 changed definition items remain `precheck: n/a`.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-11.proof-contracts.json <10 affected proof ids>`
  Result: refreshed the contract quotes and derivation text against the current repaired disk bytes.
- `node tools/rendercheck.mjs <2 assigned page files plus the full 51-item batch scope>`
  Result: pass, `OK — 53 file(s)`.
- `node tools/proof-contract.mjs research/frontier-29-batch-11.proof-contracts.json --strict`
  Result: pass with `0` errors and `2` warnings. The remaining warnings are advisory `shotgun-bracket` notices on the two acyclic-resolution theorems; I reopened those proofs and did not confirm a mathematical or citation defect.
- `node tools/boundary-audit.mjs research/frontier-29-batch-11.proof-contracts.json`
  Result: no template cluster at or above threshold and no contradicted boundary disposition found.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-11.proof-contracts.json --fail-on-missing-quote`
  Result: pass, `162` citations checked, no quote-not-found lines, no widening candidates.
- `node tools/content-policy.mjs research/frontier-29-batch-11.pages.json`
  Result: pass, `51` scoped items, `0` errors, `0` warnings.
- `node tools/coverage-checklist.mjs research/frontier-29-batch-11.coverage.json`
  Result: pass, `1` page, `52` harvested results, `0` errors, `0` warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-11.coverage.json`
  Result: pass, `4/4` sources fetch-verified.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: pass. It ended with the repository-wide standard note that many planned pages still have no item lists yet.
- `git diff --check -- <10 changed item files> research/frontier-29-batch-11.proof-contracts.json research/frontier-29-reader-11.md research/frontier-29-reader-findings-11.json`
  Result: pass.

## Blockers

- None in the opened batch-11 scope.
