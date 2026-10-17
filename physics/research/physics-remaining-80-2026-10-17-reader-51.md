# Step 3a reader report — batch 51

## Scope and opened inventory

- Read the required workspace instructions and role brief: `../CLAUDE.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, and `briefs/reader.md`.
- Read the assigned manifest `research/physics-remaining-80-2026-10-17-batch-51.pages.json`, proof contracts `research/physics-remaining-80-2026-10-17-batch-51.proof-contracts.json`, and cross-batch dependency inventory `research/physics-remaining-80-2026-10-17-batch-51.cross-batch-dependencies.json` (empty).
- Opened both assigned pages: `library/thermodynamics-and-general-relativity-mathematics/tgr-mi02.md` and `library/thermodynamics-and-general-relativity-mathematics/tgr-mi02-examples.md`.
- Reviewed items in dependency order: `items/lem-tgr-first-law-calibration-freedom.md` (no item dependencies), then `items/ex-tgr-two-first-law-calibrations.md` (depends on the lemma), and `items/cex-tgr-entropy-type-identification.md` (no item dependencies). The example page requires the lemma page; there are no other item prerequisites in this batch.

## Mathematical and source review

- The lemma's differential calculation is valid: for constant `b > 0`, `dS_{b,s_*} = (C/b)dA`, so `T_b dS_{b,s_*} = Cκ dA = dE`. Nonemptiness of `X` and pointwise `κ > 0` witness that distinct `b` values give distinct `T_b`; distinct offsets give distinct `S` functions with the same differential. The smoothness, positivity, and one-form hypotheses are stated. Connectedness is stronger than needed but causes no error.
- The example uses `X = (0,∞)`, `E = A = r`, `κ = 1`, and `C = 1`, and its two displayed choices give the same `dE = dr` with different temperature functions and entropy gradients. The verification is correct.
- The counterexample matrices are positive semidefinite with trace one. Since `H = 0`, both have energy zero; the stated spectral entropies are `0` and `k_B log 2 > 0`. This proves the finite-dimensional uniqueness claim false under the displayed scalar-label and energy data, without establishing a coupled gravitational or continuum-entropy claim.
- Checked the cited context in Pietro Benetti Genolini, *Introduction to black hole thermodynamics*, §§1.3 and 2.1 ([source](https://arxiv.org/html/2512.24929v1)): the classical black-hole-mechanics first law has its restricted setup and other work terms; the thermodynamic analogy leaves a coefficient unspecified before the Hawking-temperature calculation fixes it. Checked Robert M. Wald, *The Thermodynamics of Black Holes*, §§2–3 ([source](https://arxiv.org/html/gr-qc/9912119v2)): §2 gives the classical first-law relation and describes temperature and entropy as constant multiples of surface gravity and area in the analogy; §3 treats Hawking radiation. These sources support the contextual distinction. The lemma's mathematical deduction is proved locally and does not rely on either source as a proof premise.
- The lemma's and example's page summaries accurately state the mathematical scope. No dependency or citation defect was found in the proof contract or item arguments.

## Edit and validation

- Edited `items/cex-tgr-entropy-type-identification.md`: replaced the title's unsupported “geometry” wording with “A fixed scalar label and zero energy do not determine finite spectral entropy”; described `a` explicitly as a positive real scalar label; and changed the remark from “geometric label” to “scalar label.” The matrices, entropy definition, hypotheses, and counterexample are unchanged. This corrects the title/setup mismatch without changing the mathematical result.
- The current batch manifest retains its pre-reader title value; it was not edited. The proof contract remains accurate because its derivations and checks use only the fixed scalar datum and the displayed matrices. The item had no `verification.judge` record to remove.
- Reflow: `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/cex-tgr-entropy-type-identification.md` — unchanged.
- Precheck: `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/cex-tgr-entropy-type-identification.md` — pass.
- Final proof layout: `node tools/physics-support/proof-layout.mjs items/cex-tgr-entropy-type-identification.md` — 1 item, 2 steps, 0 defects.

## Uneditable finding

- `tgr-mi02-examples`, summary paragraph: it describes the counterexample as having “identical fixed geometric and zero-energy data.” The counterexample now explicitly identifies `a` only as a positive real scalar label and states that no geometry or coupling is part of the construction. This page is a B/examples page, whose prose is outside this reader's edit authority. The summary should say “fixed scalar-label and zero-energy data” (or equivalent). This is a nonfatal unlicensed inference in the page summary; it does not invalidate the finite-matrix counterexample.

## Page verdicts and blocker

- `tgr-mi02`: pass. The A-page summary faithfully describes the lemma and its mathematical-only interpretation.
- `tgr-mi02-examples`: requires owner disposition for the B-page summary wording above. The example and counterexample constructions and placements are otherwise valid.
- No mathematical proof blocker. The outstanding B-page prose correction is outside this reader's edit scope.
