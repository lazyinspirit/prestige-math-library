# Step 3a reader report — batch 22

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Date: 2026-10-21

## Opened inventory

Pages:

- `library/inverse-problems/function-space-mcmc-and-pcn.md` — draft A page.
- `library/inverse-problems/function-space-mcmc-and-pcn-examples.md` — draft B page.

Assigned items, read in dependency order:

1. `lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates`
2. `alg-ip-prior-preserving-crank-nicolson`
3. `lem-ip-pcn-transition-kernel-is-measurable`
4. `lem-ip-pcn-reference-pair-law-is-symmetric`
5. `thm-ip-pcn-small-step-acceptance-under-potential-bounds`
6. `thm-ip-pcn-posterior-invariance`
7. `cex-ip-infinite-dimensional-random-walk-reverse-flow-singular`
8. `ex-ip-pcn-normal-posterior-invariant`

The in-run supplier items needed for these arguments were also opened:
`def-ip-prior-on-a-forward-domain`,
`def-ip-misfit-evidence-and-posterior-law`,
`thm-ip-function-space-posterior-propriety`,
`lem-ip-coordinate-vectors-form-a-basis-of-ell-two`, and
`lem-ip-gaussian-series-prior-regularity`.

Relevant cited suppliers inspected include the Parseval equivalence theorem,
finite-measure uniqueness on a pi-system, Fernique integrability, the general
state reversibility definition and invariance theorem, joint-flow and kernel
measurability results, the iid finite-variance strong law, independent-copy
existence, the scalar and multivariate normal characteristic-function results,
the normal-normal conjugate update, dominated convergence, and the product
measure/independence results used by the proofs. The batch proof contract was
checked against the seven proof-bearing items: every current numbered step has
the corresponding derivation entry. The algorithm has no proof phase.

Both page files contain YAML frontmatter only, have `page_layout: compact-v1`,
and contain no Markdown body or summary. Their inventories match the assigned
items. No TikZ or tikzcd diagram occurs in the assigned items or pages; the
arguments do not require a diagram.

## Mathematical review

- The coordinate-law lemma generates the Borel sigma-algebra from finite
  coordinate cylinders using Parseval and a countable ball base, then applies
  finite-measure uniqueness. The zero-space case and Countable Choice use are
  handled.
- The pCN procedure has admissible inputs, an explicit total potential
  extension, a proposal and accept/reject rule for every scale in `[0,1]`, and
  the correct absorbing behavior on the zero-target-mass infinite-potential
  states. Its kernel supplier proves Borel measurability and probability rows.
- The Gaussian reference pair proof compares finite projection laws by their
  centered covariance forms, then uses the coordinate-law lemma. The endpoint
  cases are included.
- The small-scale result establishes positive finite evidence, local convergence
  of the proposal to the current state, and the acceptance limit by dominated
  convergence. Its statement matches the stated growth and ball-wise Lipschitz
  hypotheses.
- The posterior-invariance proof decomposes the target flow into the symmetric
  accepted flow and diagonal rejection flow, then applies the general-state
  reversibility implication. It claims invariance only.
- The random-walk counterexample proves the Borel strong-law separator and
  mutual singularity directly. Cotter et al. Theorem 6.3 only supplies the
  weaker non-absolute-continuity result; the item's local proof establishes the
  stronger mutual-singularity claim.
- The scalar example's likelihood produces potential `u^2/2`, the conjugate
  update gives `N(0,1/2)`, and the pCN invariance theorem applies at both scale
  endpoints.

No mathematical statement, proof, definition, title, witness, computation, or
page inventory defect remains in the assigned carriers.

## Edit and evidence

Defect class: citation-inaccurate; severity: nonfatal; repaired. Four
bibliography entries cited the Cambridge PDF under the wrong authors and book
title. The PDF cover identifies the source as *Inverse Problems: Lecture
notes, Michaelmas term 2020*, by Yury Korolev and Jonas Latz, dated 18 May 2021.
Its Chapter 8, §8.2 contains Definition 8.2.3, Proposition 8.2.4, and Examples
8.2.6–8.2.7, supporting the retained locators. I corrected the reference title
and preserved the URL and locator in:

- `alg-ip-prior-preserving-crank-nicolson`
- `lem-ip-pcn-reference-pair-law-is-symmetric`
- `thm-ip-pcn-posterior-invariance`
- `cex-ip-infinite-dimensional-random-walk-reverse-flow-singular`

Evidence: [Korolev and Latz, *Inverse Problems* lecture notes](https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2020/LectureNotes2020.pdf), cover (PDF p. 1), Chapter 8, §8.2 (PDF pp. 91–94). The source metadata now matches the cited file.

The repair changed no Statement, Definition, dependency, or proof step. The
batch proof-contract file contains no external bibliography title fields; its
step derivations remain aligned, so no contract edit was needed. None of the
four items had a `verification.judge` record to remove.

Other mathematical source checks included Cotter, Roberts, Stuart, and White,
“MCMC Methods for Functions,” §4.2 equation (4.7), §6.1 Theorems 6.2–6.3, and
§6.2 Assumptions 6.1 and Theorem 6.4 ([arXiv full text](https://arxiv.org/pdf/1202.0709v3)); Teschl, *Topics in Real and Functional Analysis*, §2.1 Theorems 2.3–2.4 ([full text](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf)); Hairer, Stuart, and Vollmer, §2.1 Algorithm 1 ([full text](https://hairer.org/papers/spectralgapmcmc.pdf)); Roberts and Rosenthal, §2 Definition and Proposition 1 ([full text](https://www.probability.ca/jeff/ftpdir/probsurv.pdf)); and MIT 18.05 Class 15, §§6–7 ([full text](https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_class15-prep.pdf)). These passages support the cited proposal, detailed-balance, mean-acceptance, basis/Parseval, and conjugate-update facts; the stronger local claims are proved in the assigned items.

## Required checks after repair

- `reflow.mts`: ran for all four changed items; one was unchanged and three
  were reflowed.
- `precheck.mts`: algorithm reported 0 checked and 0 failing (no proof phase);
  the symmetry lemma, invariance theorem, and counterexample each passed with
  0 failures.
- `proof-layout.mjs` on all four changed paths: 4 items, 17 steps, 0 defects.

## Page verdicts

- `function-space-mcmc-and-pcn`: **Pass.** Frontmatter-only A page, correct
  six-item inventory, required compact layout, no summary body.
- `function-space-mcmc-and-pcn-examples`: **Pass.** Frontmatter-only B page,
  correct two-example inventory, required compact layout, no summary body.

## Unedited findings and blockers

No unedited assigned-item or page defect remains. No mathematical or scope
blocker was found. At the live status check, the run was active at `3a-read`,
with batch 22 still listed as missing and no worker in flight; that shared
autopilot state was not edited.

Coverage was limited to batch 22 and the suppliers needed to review its claims;
the run-wide transitive prerequisite closure was not audited.
