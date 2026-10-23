# Reader report — batch 21

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: Step 3a reader  
Batch: `21`

## Opened inventory

Assigned pages opened:

- `fd-ps02` — `library/fluid-dynamics/fd-ps02.md`.
- `fd-ps02-examples` — `library/fluid-dynamics/fd-ps02-examples.md`.

The required page targets opened were `fd-f02`, `fd-f03`, and the mathematics page `fd-s03` at `library/fluid-dynamics-mathematics/fd-s03.md`.

All five assigned items were opened: `post-fd-navier-slip-wall-law`, `pthm-fd-local-momentum-balance-from-continuum`, `pthm-fd-wall-mechanical-power-balance`, `pthm-fd-linear-acoustic-model-prediction`, and `ex-fd-adopted-poiseuille-couette`.

The proof-relevant supplier items opened were `post-fd-continuum-balances`, `post-fd-boundary-data`, `def-fd-quantity-and-frame-conventions`, `def-fd-smooth-motion`, `lem-fd-transport-and-density`, `lem-fd-c1-domain-jordan-integrals`, `def-fd-conservative-weak-form`, `post-fd-newtonian-fourier`, `def-fd-incompressible-newtonian-model`, `def-fd-smooth-wall-exterior-solution-domains`, `thm-fd-smooth-wall-energy-uniqueness`, `def-bounded-c-one-domain-boundary-charts-and-outward-normal`, `def-surface-integral-on-a-compact-c-one-hypersurface`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `def-countable-choice`, `def-fd-barotropic-euler-model`, `thm-fd-global-linear-acoustics`, `def-fd-periodic-fourier-sobolev-spaces`, `lem-fd-periodic-fourier-embedding-products`, `thm-fourier-basis-and-parseval-on-the-n-torus`, and `def-fourier-coefficients-and-trigonometric-polynomials`.

I also opened the batch-21 cross-batch dependency record and notes as navigation evidence, and checked the current source sections cited by the assigned items. Chen and Qian, arXiv:0901.0147v1, §§1–2, equations (1.3), (2.5), and Proposition 2.1, PDF pp. 1–5; Tong, *Fluid Mechanics*, Chapter 2, §§3.1.1–3.1.2 and §§3.2.2–3.2.3; Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §4.4.5.2, printed p. 145, and §5.4.1, printed pp. 173–175; Tong, Chapter 3, §4.4.4; and Golse, Chapter 3, §§2.3 and 7.1.2 were checked at the cited locations. The page and item claims were reviewed independently of Step 1 readiness records and earlier author decisions.

## Edits and evidence

- `post-fd-navier-slip-wall-law`: identified the constant Newtonian shear-viscosity coefficient as `mu=eta`, gave the finite slip-length parameter its metre unit and explicit definition `ell_s=eta/beta` for `beta>0`, and stated that `beta=0` is the zero-traction endpoint with no finite slip length. Chen and Qian’s source states the positive slip-length boundary convention; the adopted stress convention and the local coefficient definition keep the statement conditional and make no empirical universality claim. Its `physics_review.formulation` and `.sources` contract evidence was updated.
- `pthm-fd-local-momentum-balance-from-continuum`: clarified the one-sided local-graph meaning of a `C1` boundary and explicitly identified `eta` as the constant value of the adopted closure coefficient `mu`. Replaced the unexplained appeal to Jacobi’s determinant formula with the exact material-transport and open/compact Jordan-region interfaces recorded by `post-fd-continuum-balances` and its mathematical suppliers. The inverse-image localization now explicitly invokes the same `C1`-image result. Its `Facts & Assumptions` and proof-contract citations/derivations were updated.
- `pthm-fd-wall-mechanical-power-balance`: identified `eta` with the constant coefficient `mu` and narrowed the bounded-domain uniqueness clause to uniqueness of the velocity field. The supplied theorem proves velocity uniqueness, not pressure uniqueness. I checked its assigned consumer, `ex-fd-adopted-poiseuille-couette`: its fact says the uniqueness clause is not used, so that consumer remains unaffected. The proof-contract derivation now records the velocity-only scope and absence of a pressure-uniqueness claim.
- `pthm-fd-linear-acoustic-model-prediction`: made the first variation pointwise and locally admissible on compact time intervals; defined the `C-infinity` regularity and initial data before use; and defined the normalized Fourier coefficients, longitudinal/transverse projections, nonzero normal modes, angular frequency convention, and zero-wavevector mean modes. Its dispersion derivation in the proof contract was aligned with the explicit Fourier-coefficient calculation.
- `ex-fd-adopted-poiseuille-couette`: no edit. I checked the material-map construction, both steady profiles, fluxes, vorticities, and power/dissipation integrals directly. Tong’s planar Poiseuille profile and Powers’s plate/no-slip and shear-rate convention support the contextual setup; the periodic-cell body-acceleration adaptation is proved in the item.

The proof-contract file was updated for all changed items. The changed item files had no `verification.judge` records to remove. Historical owner boundary-review evidence in the wall-power contract was left intact rather than rewritten.

## Uneditable findings

Two defects remain in the in-run supplier `thm-fd-global-linear-acoustics` (batch 18), reached by the assigned consumer `pthm-fd-linear-acoustic-model-prediction`:

1. In Proof 3.1 and Facts & Assumptions F1, smooth initial data are said to make every weighted Fourier sum finite, but the cited Sobolev-space definition does not establish `C-infinity` periodic fields lie in every `H^m`. A short local integration-by-parts and Parseval argument, or an exact smooth-to-Sobolev supplier, is needed. This is recorded as a nonfatal `unlicensed-inference`.
2. The Golse locator in `sources.references[1]` and Statement references says §7.4. The source contents identify §7.4 as the compressible Euler system; the acoustic Cauchy result is §7.1.2, and the acoustic system is treated in §2.3. The wrong locator is recorded as a nonfatal `citation-inaccurate`.

Both findings bind the same current raw supplier source hash in `research/fluid-dynamics-all-47-2026-10-23-reader-findings-21.json`. I did not edit the batch-18 supplier.

## Page verdicts

- `fd-ps02`: pass. The frontmatter identity, draft status, physics classification, three required pages, compact layout, and four-item A-page inventory are coherent. Its body is empty as required.
- `fd-ps02-examples`: pass. The frontmatter identity, draft status, physics classification, A-page prerequisite, compact layout, and one example are coherent. Its body is empty as required.

No TikZ or TikZcd diagrams occur in the assigned scope, and no missing diagram is needed for the reviewed proofs. The physical claims are conditional model deductions; none reports measurements or statistical evidence.

## Checks and blocker

Final reflow reported `unchanged` for all four changed items. Precheck passed for the postulate and all three changed physics theorems. The required proof-layout pass checked four items and 15 proof steps with zero defects. The findings JSON parsed successfully.

There is no local repair blocker. The two batch-18 supplier findings remain for owner routing and upstream disposition. I did not independently reconstruct every proof in the full foundational dependency closures of published mathematics; I checked the exact supplier statements and uses needed for this batch.
