# Step 3a independent reader report — batch 22

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `22` only

## Opened inventory

Assigned pages:

- `emg-fx07` — `library/einstein-maxwell-models-mathematics/emg-fx07.md` (A page)
- `emg-fx07-examples` — `library/einstein-maxwell-models-mathematics/emg-fx07-examples.md` (B page)

Assigned items, reviewed in supplier-to-consumer order:

- `def-emg-fx-extremal-test-scalar`
- `thm-emg-fx-aretakis-spherical-charge`
- `prop-emg-fx-conditional-horizon-growth`
- `ex-emg-fx-constant-scalar-exception`

Mathematical supplier statements/proofs needed for the assigned claims:

- `def-countable-choice` (published)
- `def-emg-fx-wave-currents` (draft in the current run; definition only)
- `def-emg-xs-ingoing-rn` (published)
- `prop-emg-xs-rn-horizon-data` (published)
- `lem-gr-metric-divergence-and-density-formula` (published)
- `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` (published)
- `def-emg-causal-solution-and-horizon-vocabulary` and `def-gr-killing-field` (published horizon/Killing conventions)
- `cor-zero-derivative-implies-constant` and its `cor-mean-value-theorem` supplier (published)
- `cor-primitives-of-a-continuous-function` (published)

Page prerequisites opened for context: `emg-fx04`, `emg-fx06`, and `emg-ms02`. The first two are draft pages with frontmatter only. The published `emg-ms02` page includes a simple-root RN orbit-space diagram; its null axes, bifurcation point, quadrant signs under `UV=-K(r)`, and indicated ingoing exterior branch agree with the accompanying text. It does not depict or claim a maximal extension. No diagram occurs on either assigned page or in any assigned item.

## Independent review

- `def-emg-fx-extremal-test-scalar`: the item explicitly fixes the ingoing dyonic RN metric, domain, signature, parameter units, Maxwell two-form normalization, neutral test-field decoupling, and `C^3` spherical lift. The inverse `v,r` block and metric density give the displayed wave-operator formula. Extending the density divergence identity from smooth to `C^1` vector fields is valid by its coordinate formula, which uses only first derivatives and the product rule; here the raised gradient is `C^2`. The horizon statement follows from the supplied exact local horizon definition and extremal horizon-data result. No global extension, event-horizon, or field-existence assertion is made.

- `thm-emg-fx-aretakis-spherical-charge`: the spherical reduction is `2 phi_vr + D phi_rr + D' phi_r - (D'/r) phi = 0`. The substitution `D(m)=D'(m)=0` yields `partial_v phi_r(v,m)=0`; the stated `C^3` regularity and the zero-derivative result give constancy on all `v in R`. The nondecay statement is exactly the nonzero constant case, and the units of `H=partial_r(r psi)` are the scalar-field unit. The proof does not rely on global decay estimates.

- `prop-emg-fx-conditional-horizon-growth`: differentiating the reduced equation gives the exact horizon identity `partial_v phi_rr(v,m) = -H/m^2 + phi(v,m)/m^3`. The proof then shows that the primitive of the decaying horizon trace is sublinear by the mean value theorem, and integrates the identity to obtain the claimed limit. The decay condition is explicit and is not inferred from the charge theorem. The signed limit entails the stated magnitude rate and has the declared units. The endpoint differentiability needed when applying primitive uniqueness on `[v0,infinity)` follows immediately because both functions extend differentiably to all of `R`; restricting the averaging inequality to sufficiently large positive `v` gives the stated limit.

- `ex-emg-fx-constant-scalar-exception`: the constant real field is a global `C^3` spherical solution on the specified domain. Direct differentiation gives `phi=cr`, `H=c!=0`, `phi(v,m)=cm!=0`, and `phi_rr=0`. It correctly demonstrates failure of the proposition's additional decay hypothesis, not a counterexample to the conditional result.

### Source checks

The cited source scopes and locators match the items' use:

- Aretakis, [*Stability and Instability of Extreme Reissner–Nordström Black Hole Spacetimes for Linear Scalar Perturbations I*](https://arxiv.org/pdf/1110.2007), §12.1, Proposition 12.1.1, PDF p. 28: the conserved spherical quantity is `partial_r psi + psi/M`. Multiplication by `m` gives the item's normalization `H=partial_r(r psi)|_(r=m)`.
- Aretakis, [*Stability and Instability of Extreme Reissner–Nordström Black Hole Spacetimes for Linear Scalar Perturbations II*](https://arxiv.org/pdf/1110.2009), §3, Proposition 3.0.1, PDF p. 8: records the same spherical conservation law. The global initial-data estimates in that paper are not used.
- Reall, [*What happens at the horizon of an extreme black hole?*](https://hep.physics.uoc.gr/Erasmus-IP-2013/files/lectures/Reall/Reall.pdf), PDF pp. 9–11: gives the regular ingoing calculation in `M=1` units. The items' arbitrary-`m` normalization and residual `phi(v,m)/m^3` term are derived locally.
- Taylor, [*Lectures on the nonlinear stability of the Schwarzschild family of black holes*](https://www.ma.imperial.ac.uk/~mtaylor5/HarvardLectures.pdf), §6.4, PDF pp. 40–41: supplies scope context distinguishing extremal-horizon linear-wave growth from the unresolved nonlinear question; no RN equation or nonlinear theorem is imported.

I inspected these cited sections, not unrelated sections of the full PDFs.

## Page verdicts

- `emg-fx07` — **no defect found**. Its frontmatter-only page carrier lists the three assigned core items and prerequisites consistent with their mathematical context. Its title accurately describes the conserved charge and conditional, fixed-background derivative result.
- `emg-fx07-examples` — **no defect found**. Its frontmatter-only carrier places the assigned constant-field example with the correct A-page companion and title.

## Edits and unresolved defects

- Edits: none. No repair was warranted, so proof-contract maintenance, judge-stamp removal, reflow, precheck, and proof-layout were not applicable.
- Defects outside this reader's edit scope: none confirmed.
- Blocker: none.

## Coverage note

All assigned pages and items and the mathematical statements/proofs used to check their claims were opened. The draft in-run supplier `def-emg-fx-wave-currents` was inspected at its definition interface; no defect was found there. Source review was limited to the exact cited passages listed above. The published prerequisite page diagram was checked against that page's stated coordinate conventions.
