# frontier-29 · Beta · batch-7 notes — `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`

Run `frontier-29`, batch `7`, one A/B pair, category `fourier-analysis`.
Author: Beta. Session date: Tuesday, September 1, 2026.

Artifacts owned by this dispatch:

- `research/frontier-29-batch-7.pages.json`
- `research/frontier-29-batch-7.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, published content, another
batch artifact, or plan structure outside batch `7`.

## 1. Control material read

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
prompt `research/frontier-29-dispatch/beta-batch-7.prompt.md`, the seed
manifest `research/frontier-29-batch-7.pages.json`, the run step-0 note
`research/frontier-29-step0-notes.md`, the drift report
`research/frontier-29-alpha-step0-drift.md`, the drift evidence entry for this
page in `research/frontier-29-drift-evidence.json`, the controlling Fourier
track block in `research/plan-fourier-analysis-track.md`, the later
real-analysis completion note in
`research/plan-realanalysis-completion-track.md`, and the live plan entry in
`research/plan-spec.json`.

I also re-opened the exact batch source URLs below in the web reader rather
than treating the design's bibliography as proof that the texts had been read:

1. Richard S. Laugesen, *Harmonic Analysis Lecture Notes*:
   `https://arxiv.org/pdf/0903.3845`
2. Loukas Grafakos, *Classical Fourier Analysis*, 3rd ed.:
   `https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf`

## 2. Controlling design and drift

### Controlling design

The controlling mathematical design is
`research/plan-fourier-analysis-track.md`, section `FR-1`.

Why I treated it as controlling even though the completion-track mention is
later:

- the Fourier track block is the document that actually scaffolds the FR-1 A
  and B pages, their item inventory, and the proof-route traps
- the later mention in
  `research/plan-realanalysis-completion-track.md:718-832` does not amend the
  FR-1 mathematics; it records that an earlier real-analysis duplicate pair was
  withdrawn because FR already owns this exact scope
- so the later document controls only the ownership history, not the page's
  item route

### Design-vs-spec drift

There is a real prerequisite disagreement, and I recorded it rather than
adjudicating it locally:

- the FR-1 design says the page requires
  `orthonormal-bases-parseval-and-fourier-series`,
  `density-separability-and-convolution-in-lp`, and the Banach-Steinhaus page
- the live `research/plan-spec.json` entry and the seed manifest instead give
  only `itos-formula-and-brownian-martingales-examples` and
  `density-separability-and-convolution-in-lp`

Per the dispatch, I followed the spec and did not rewrite the page-level
`requires`.

The stage-1 drift report already explains the run-wide action taken here: the
missing density edge was added at the plan level, and the other design-vs-spec
disagreement remains a recorded drift fact rather than a batch-local decision.

## 3. Live-corpus seam repair and scaffold shape

The current corpus creates an additional closure problem that is not a
design-vs-spec conflict:

- the design assumes FA-14 already supplies the torus/Fourier vocabulary
  (`def-the-one-dimensional-torus-and-normalized-haar-integral`,
  `def-fourier-coefficients-and-trigonometric-polynomials`, and the density
  route around them)
- but on current disk the earlier page
  `orthonormal-bases-parseval-and-fourier-series` still has an empty item list
  in `plan-spec.json`, so none of those ids resolves in a scaffold validator

I repaired that seam locally, minimally, inside FR-1:

- added `def-period-one-fourier-coefficients-partial-sums-and-convolution`
  so the page can define `S_N f`, Fourier coefficients, and torus convolution
  without depending on an unmaterialized FA id
- added `lem-step-functions-have-vanishing-torus-fourier-coefficients`
  and `lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus` so
  `thm-riemann-lebesgue-lemma-for-fourier-coefficients` has a real local proof
  route on current bytes

I first tried to anchor that setup item to the published circle-definition page,
but the temporary spliced validator correctly rejected the edge as outside the
spec's declared prerequisite closure. The setup item is therefore fully local
on the final bytes.

What I did **not** pull into FR-1:

- no Parseval, Riesz-Fischer, or Hilbert-basis material
- no Fejer summability results beyond the transferred
  `def-dirichlet-and-fejer-kernels`
- no trigonometric-density theorem as a separate FR item, because the present
  page does not need that extra branch once the `L^1` route is repaired by
  step functions

Current item census:

- A page `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`:
  `14` items
- B page `dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples`:
  `5` items

No split is needed; the A page is well below the 60-item ceiling.

## 4. Route and dependency rationale

I kept the FR-1 design's governing separation:

1. local torus/Fourier setup
2. algebraic kernel identities and the Dirichlet-kernel closed form
3. cancellation input through Riemann-Lebesgue
4. symmetric difference, localisation, and Dini
5. bounded variation and Dirichlet-Jordan
6. worked leaves on the B page

Important route choices:

- The page still separates the algebraic identity
  `lem-fourier-partial-sums-are-dirichlet-convolutions` from the cancellation
  theorems, exactly as the design insists.
- `thm-riemann-lebesgue-lemma-for-fourier-coefficients` now follows the
  step-function approximation route, because that route closes on current
  published measure theory without inventing FA-14 items.
- `thm-riemann-localisation-principle-for-fourier-series` is kept before Dini,
  again as the design specifies. Its proof route removes the singular
  neighborhood first and only then divides by `sin(pi t)`.
- `thm-dini-pointwise-convergence-criterion-for-fourier-series` states the
  candidate limit `s`, not only the continuous case.
- `thm-dirichlet-jordan-pointwise-convergence` is obtained from Dini plus the
  local BV integrability lemma, not by hiding that one-sided estimate inside a
  longer theorem.
- `cor-piecewise-c-one-fourier-series-converges-to-midpoint-values` keeps the
  periodic seam explicit; it is not silently treated as an ordinary interior
  continuity point.

## 5. Conventions and traps recorded for authoring

- Use `mathbb T = mathbb R / mathbb Z` and `e_k(x)=e^(2 pi i k x)` throughout.
- The singularity of `D_N(t)=sin((2N+1)pi t)/sin(pi t)` at `t=0` is removable
  and must be filled by the value `2N+1`.
- Localisation arguments must remove a neighborhood of zero before dividing by
  `sin(pi t)`.
- Dini is a criterion for convergence to a supplied value `s`; continuity is a
  corollary, not the hypothesis.
- Jordan uses both one-sided limits, so it covers jump points and the periodic
  seam.
- No B-page item is a dependency target.

## 6. Source support actually harvested

This batch uses two independent treatments, satisfying the standing rule:

- **Laugesen** is the full lecture-note treatment with a harvestable table of
  contents and direct Dini/localisation/Jordan statements.
- **Grafakos** is the textbook treatment and the qualifying primary source for
  the pair's kernel formulas, Lebesgue-constant growth, and the explicit BV and
  sawtooth examples.

Why I did not add a third source:

- the controlling FR design itself names these two as the pair's read sources
- both were re-opened and harvested at exact locators
- together they cover every retained FR-1 theorem and the key B-page theorem
  without forcing a fake third ledger row for text I did not need to re-read

## 7. Known limits and step-5 risks

- The three local seam-repair items are mathematically straightforward, but
  they are still a divergence from the original FA/FR ownership split. Step 5
  should preserve that explanation in the authored page summary or notes so the
  later FA page does not silently re-mint them.
- `thm-lebesgue-constants-grow-logarithmically` is the most delicate B-page
  leaf. The proof needs a real lower-bound interval decomposition, not only the
  slogan `||D_N||_1 ~ log N`.
- `lem-bounded-variation-gives-one-sided-dirichlet-integrability` is the main
  local proof bottleneck on the A page. It should stay as its own lemma;
  folding it back into Dirichlet-Jordan would hide exactly the hard step the
  design wants visible.
- `cex-continuity-alone-does-not-satisfy-a-dini-modulus` is intentionally
  generated rather than source-rehomed. That is acceptable because it is a B
  leaf, but the authoring pass should still write the logarithmic-modulus
  example explicitly and not leave it at the level of a slogan.

## 8. Validation checklist

Commands run or prepared for this scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-7.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-7.coverage.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/validate-plan.mjs /tmp/frontier-29-batch-7-spliced-plan.json
```

The temporary spliced-plan check is needed because the live `plan-spec.json`
still carries this batch as page-only stubs with empty item lists.

## 9. Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-7.coverage.json`
  passed on Tuesday, September 1, 2026:
  `1` page, `39` harvested results, `0` errors, `0` warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-7.coverage.json`
  passed on Tuesday, September 1, 2026:
  `2/2` sources fetch-verified.
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  passed on Tuesday, September 1, 2026:
  `513` scoped items, `0` errors, `0` warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Tuesday, September 1, 2026, with only the repository's
  standing out-of-batch `redundant-prereq` warnings.
- `node tools/validate-plan.mjs /tmp/frontier-29-batch-7-spliced-plan.json`
  exited `0` on Tuesday, September 1, 2026 after the local torus-setup
  dependency was made self-contained. The batch manifest now validates with no
  unresolved ids, no forward references, no B-page dependency violations, and
  no over-cap failure.
- `git diff --check -- research/frontier-29-batch-7.pages.json research/frontier-29-batch-7.coverage.json research/frontier-29-batch-7.notes.md`
  passed.

## Step-3 fix pass

Stable findings reviewed on Tuesday, September 1, 2026:

- Finding id: none issued for batch `7`.
  Disposition: push back on any implied repair; the stable group-`c` review for
  this batch records no mathematical or routing defect to apply.
  Evidence: `research/frontier-29-alpha-c-step3-scaffold-review.md:77-78`
  states, "No owned batch artifact required a mathematical or routing repair in
  this Step 3 review."
  Changed scaffold record: none.

Validator recheck on Tuesday, September 1, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-7.coverage.json`
  -> `coverage-checklist: 1 page(s), 39 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-7.coverage.json`
  -> `source-fetch-check: 2/2 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  -> `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exited `0` with only the repository's standing out-of-batch
  `redundant-prereq` warnings and the standard final `OK` line

## Step-5 authoring

Date: Tuesday, September 1, 2026.

Authored page files:

- `library/fourier-analysis/dirichlet-kernel-localisation-and-pointwise-fourier-convergence.md`
- `library/fourier-analysis/dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples.md`

Authored item ids:

- `def-period-one-fourier-coefficients-partial-sums-and-convolution`
- `def-dirichlet-and-fejer-kernels`
- `lem-fourier-partial-sums-are-dirichlet-convolutions`
- `lem-closed-form-and-size-bounds-for-the-dirichlet-kernel`
- `lem-step-functions-have-vanishing-torus-fourier-coefficients`
- `lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus`
- `thm-riemann-lebesgue-lemma-for-fourier-coefficients`
- `lem-symmetric-difference-formula-for-fourier-partial-sums`
- `thm-riemann-localisation-principle-for-fourier-series`
- `thm-dini-pointwise-convergence-criterion-for-fourier-series`
- `cor-local-holder-regularity-implies-fourier-convergence-at-a-point`
- `lem-bounded-variation-gives-one-sided-dirichlet-integrability`
- `thm-dirichlet-jordan-pointwise-convergence`
- `cor-piecewise-c-one-fourier-series-converges-to-midpoint-values`
- `ex-dirichlet-kernel-at-zero-and-away-from-zero`
- `thm-lebesgue-constants-grow-logarithmically`
- `ex-fourier-partial-sums-of-the-sawtooth`
- `ex-localisation-for-functions-equal-on-an-arc`
- `cex-continuity-alone-does-not-satisfy-a-dini-modulus`

Authored contract artifact:

- `research/frontier-29-batch-7.proof-contracts.json`

Provenance rationale actually used on disk:

- The two local setup definitions and the torus step-density repair are tagged
  `ai-altered` because the current corpus still lacks the earlier Fourier page
  that the design expected, so these are truthful local adaptations rather than
  direct rehomes of a published library item.
- The main A-page theorems and the Lebesgue-constant / sawtooth results are
  tagged `literature-derived` with `ai-altered` proofs where the writeup adapts
  the sourced period-one normalization and the current corpus's available
  dependencies.
- The three leaf items
  `ex-dirichlet-kernel-at-zero-and-away-from-zero`,
  `ex-localisation-for-functions-equal-on-an-arc`, and
  `cex-continuity-alone-does-not-satisfy-a-dini-modulus`
  are tagged `ai-generated` and carry the required `generation.role`; none is a
  dependency target.

Route adjustment kept truthful:

- The on-disk bounded-variation route is tighter than the scaffold at exactly
  the expected seam. `lem-bounded-variation-gives-one-sided-dirichlet-integrability`
  proves the near-zero Dirichlet estimate directly from Jordan decomposition,
  shrinking variation, a bounded Dirichlet-kernel primitive, and an
  away-from-zero Riemann-Lebesgue reduction.
- Consequently `thm-dirichlet-jordan-pointwise-convergence` cites the actual
  used chain: symmetric-difference formula, one-sided Dirichlet lemma, the BV
  one-sided-limit corollary, the far-part Riemann-Lebesgue input, and the
  Dirichlet-kernel closed form. I did not leave the stronger Dini theorem as a
  fake proof dependency for the BV theorem.

Narrowed or dropped claims:

- None. All `14` A-page items and all `5` B-page items were authored.

Blockers:

- None in batch scope after authoring. The known plan/design prerequisite drift
  remains recorded above and unchanged.

Checks run on Tuesday, September 1, 2026 after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-7 item files...`
  -> pass after adopting the canonical phase-order repairs reported by
  precheck; final rerun clean with `17 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-29-batch-7.proof-contracts.json --strict`
  -> `0` errors, `0` warnings, `17/17` checked.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`; only the repository's standing out-of-batch
  `redundant-prereq` warnings were printed.
- `node tools/content-policy.mjs research/frontier-29-batch-7.pages.json`
  -> `19` scoped items, `0` errors, `0` warnings.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-7.proof-contracts.json --items-dir items`
  -> `41` citations checked, no missing quotes, no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-29-batch-7.proof-contracts.json --items-dir items`
  -> after tightening the two contradicted candidate rows, no template-reuse
  cluster remained and the advisory contradictions were cleared on rerun.
