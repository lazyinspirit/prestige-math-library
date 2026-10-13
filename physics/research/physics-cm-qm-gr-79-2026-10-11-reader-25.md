# Reader report — batch 25

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `25`

## Opened inventory

### Assigned pages

- `cm09-coupled-oscillations-and-approximation` — opened and checked its definitions, theorem summaries, dependency roles, and scope statement.
- `cm09-coupled-oscillations-and-approximation-examples` — opened and checked the examples and their page summary.

### Assigned items

All 15 manifest items were opened and checked in supplier-before-consumer order:

- A page: `def-cm09-coupled-quadratic-model`; `pthm-cm09-free-modes-and-degeneracy`; `pthm-cm09-linearization-at-a-strict-minimum`; `pthm-cm09-linearization-error-bound`; `pthm-cm09-forced-modal-response`; `pthm-cm09-averaging-for-weak-damping`; `rem-cm09-zero-modes-degeneracy-and-scope`.
- B page: `ex-cm09-two-mass-spring-modes`; `ex-cm09-triatomic-translation-zero-mode`; `ex-cm09-double-pendulum-linear-modes`; `ex-cm09-degenerate-oscillator-subspace`; `ex-cm09-unstable-quadratic-mode`; `ex-cm09-forced-resonant-mode-check`; `ex-cm09-weak-damping-averaging-check`; `ex-cm09-cubic-potential-error-check`.

Claim-bearing suppliers read to verify these items included `thm-cm-quadratic-mode-decomposition`, `lem-cm-positive-definite-matrix-square-roots`, `thm-cm-homogeneous-oscillator-solution-classification`, `cor-cm-variation-of-constants-for-linear-systems`, `prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium`, `thm-cm-energy-stability-of-a-strict-minimum`, `thm-cm-finite-time-linearization-error-bound`, `cor-cm-forced-modal-oscillator-response`, `prop-cm-oscillator-degenerate-and-repulsive-cases`, `thm-cm-instability-of-a-hyperbolic-saddle`, `thm-cm-averaging-for-fast-periodic-oscillations`, `def-cm-averaging-data-and-averaged-field`, and `prop-cm-two-mass-spring-modes`, together with the cited elementary calculus, linear algebra, ODE, logarithm, exponential, trigonometric, and integral facts needed for the checked steps.

## Repairs and evidence

| Item | Repair | Evidence and basis |
|---|---|---|
| `pthm-cm09-free-modes-and-degeneracy` | Defined `sinh` and `cosh` before their use; completed their differentiation and growth facts; replaced the nullspace-closure shortcut in proof step 2.2 with differentiation of `(K-λM)q(t)=0`. Added the exponential facts needed for the growth claims. | The modal equation gives `(K-λM)q(t)=0` for all `t`; differentiating this identity directly establishes the velocity constraint without assuming the closedness argument. The scalar modal cases and exponential facts support the displayed hyperbolic solution and its growth.
| `ex-cm09-triatomic-translation-zero-mode` | Expanded step 1.2 to compute the modal vectors' `M`-norms and mixed product directly. | The displayed vectors and mass matrix give unit `M`-norms and zero mixed product by direct multiplication; this supplies the orthogonality used in the modal interpretation.
| `pthm-cm09-forced-modal-response` | Qualified the title's boundedness claim by positive-definite stiffness; distinguished the postulated positive-frequency sinusoidal drive from the constant generalized force allowed at `Ω=0` by the coupled-model definition. | The scalar forced-response result bounds nonresonant response for positive modal stiffness; the zero-stiffness case has a different response and does not justify an unrestricted boundedness title. The sinusoidal-drive postulate assumes `Ω>0`, while the coupled-model force definition admits the constant `Ω=0` case.
| `ex-cm09-forced-resonant-mode-check` | Made the same `Ω>0` sinusoidal versus `Ω=0` constant-force distinction in the statement, fact, and physical scope. | Its zero-frequency example is a constant force under `def-cm09-coupled-quadratic-model`, not an instance of `post-cm04-sinusoidal-drive-model`.
| `ex-cm09-unstable-quadratic-mode` | Removed the undefined `arsinh` invocation; used unbounded position, continuity, and the intermediate value theorem to obtain the stated phase crossing. Added explicit hyperbolic definitions and the derivative, continuity, square-root, and IVT prerequisites. | The repulsive scalar solution is continuous and unbounded on the positive-time ray, so it attains each intermediate phase value on a finite interval. The derivative matrix and `C¹` claim are supported by the cited sine derivative and continuity facts.
| `pthm-cm09-averaging-for-weak-damping` | Defined `ln` as the inverse-exponential logarithm before use and added the exponential monotonicity/reciprocal facts to F6. | With `r>R-ρ>0`, strict monotonicity of `exp` and `exp(-x)=1/exp(x)` make the theorem's condition `γA/(2m)≤ln(r/(r-(R-ρ)))` equivalent to `r(1-exp(-γA/(2m)))≤R-ρ`, the endpoint displacement bound at `t=A/ε`. This is the bound needed for the averaged trajectory's trapping condition.
| `ex-cm09-weak-damping-averaging-check` | Supplied exact elementary bounds in F4: the polynomial-integral identity giving `π<22/7`, the logarithmic integral bound, and the exponential inequalities used in the trapping and endpoint checks. Replaced reliance on the cited arctangent theorem's proof section with a derivation of `arctan(1)=π/4` from the inverse definition and the cofunction/tangent definitions. | Polynomial division and termwise integration give `∫₀¹ x⁴(1-x)⁴/(1+x²) dx=22/7-π`; the integrand is positive on `[1/4,3/4]`, hence `π<22/7`. The integral representation of `log(4/3)` gives `log(4/3)≥1/4`; integrating `exp(-s)` gives `1-exp(-u)<u`; and positivity/monotonicity gives `exp(-1/2)>1/3`. These exact bounds support the rational estimates in the verification. |

The batch proof-contract file was updated for the repaired items and consumers citing edited suppliers. Current source text and proof-step fact uses were synchronized; the strict proof-contract audit passed all 15 assigned entries. No stale `verification.judge` record was present in the repaired item frontmatter.

## Source note

The double-pendulum formulas were checked against Tong, *Classical Dynamics*, equations (2.130)–(2.132), printed page 41. The triatomic example correctly records an apparent comparison-sign error in Tong's equations (2.137)–(2.139), printed pages 42–43: the displayed formulas yield `ω₃²=(k/m)(1+2m/M)>k/m=ω₂²` for positive `m,M`, while the accompanying prose says `ω₃<ω₂` when `M>2m`. The old cited PDF path was unavailable to the web reader; the official current copy at [Tong's lecture-notes PDF](https://davidtong.org/pdfs/teaching/classical-dynamics/clas2.pdf) was inspected. This source discrepancy is already identified by the assigned example and does not make its corrected calculation defective.

## Unedited findings

None in the assigned items or pages. The Tong prose discrepancy is an external-source issue, not an assigned item defect; it is recorded above for provenance.

## Page verdicts

- `cm09-coupled-oscillations-and-approximation` — **Pass after repairs.** The model definitions, modal decomposition, local-minimum linearization, error estimate, forcing result, averaging result, and scope remark are consistent with their stated hypotheses and dependencies.
- `cm09-coupled-oscillations-and-approximation-examples` — **Pass after repairs.** The examples' matrix computations, modal data, instability argument, resonance interpretation, and averaging arithmetic are supported. The external Tong comparison is explicitly qualified.

## Validation and coverage

- Reflow and precheck passed for all 7 materially repaired items.
- Final `proof-layout` run: 7 items, 45 proof steps, 0 defects.
- Strict proof-contract audit: 15/15 assigned items, 0 errors, 0 warnings.
- No blocker.

All assigned pages and items and the claim-bearing suppliers named above were reviewed. The complete 1,351-node transitive imported-mathematics closure was not audited; the review does not claim that broader coverage. The mathematical items, including the full imported dependency graph, remain read-only.
