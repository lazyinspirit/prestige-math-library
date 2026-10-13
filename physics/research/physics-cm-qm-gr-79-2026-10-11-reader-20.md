# Reader report — batch 20

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Date: 2026-10-13

## Opened inventory

Pages opened:

- `library/non-relativistic-classical-mechanics/cm04-one-dimensional-conservative-and-dissipative-models.md` (A page)
- `library/non-relativistic-classical-mechanics/cm04-one-dimensional-conservative-and-dissipative-models-examples.md` (B page)

Assigned items opened, in dependency order:

- `def-cm04-one-dimensional-models-and-equilibria`
- `def-cm04-phase-plane-and-energy-level-sets`
- `post-cm04-harmonic-model`
- `pthm-cm04-conservative-motion-and-energy`
- `pthm-cm04-equilibrium-stability-at-a-strict-minimum`
- `pthm-cm04-harmonic-motion`
- `post-cm04-linear-damping-model`
- `pthm-cm04-damped-motion`
- `pthm-cm04-damped-decay-and-stability`
- `post-cm04-sinusoidal-drive-model`
- `pthm-cm04-resonance-and-boundedness`
- `rem-cm04-linear-model-scope`
- `ex-cm04-harmonic-motion-check`
- `ex-cm04-damped-regimes-check`
- `ex-cm04-resonance-response-check`
- `ex-cm04-pendulum-small-angle-check`
- `cex-cm04-undamped-resonance-with-bounded-drive-is-unbounded`

All 54 direct prerequisites listed for this batch in the dispatch manifest were opened in dependency order. Claim-specific suppliers consulted included `thm-cm-homogeneous-oscillator-solution-classification`, `lem-cm-energy-conservation-for-the-mechanical-system`, `thm-cm-energy-stability-of-a-strict-minimum`, `prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium`, `thm-cm-forced-oscillator-sinusoidal-response`, `thm-cm-forced-oscillator-variation-of-constants`, `prop-cm-oscillator-amplitude-maximum`, `cor-cm-homogeneous-oscillator-decay`, `prop-cm-pendulum-small-angle-linearization-bound`, `thm-cm-finite-time-linearization-error-bound`, and the trigonometric and SI-unit suppliers. The additional integration prerequisite `thm-continuous-implies-integrable` and regularity supplier `cor-differentiable-implies-continuous` were opened when identified during review.

## Repairs and evidence

- `pthm-cm04-damped-motion`, step 2.1 / fact L4: added `thm-continuous-implies-integrable` and stated that the continuous energy derivative is Riemann integrable before applying Newton–Leibniz. The prior fact only established continuity, which did not supply the integrability hypothesis used by that theorem.
- `def-cm04-phase-plane-and-energy-level-sets`: specified phase coordinates as numerical SI values (x=X_{\rm phys}/(1\,\mathrm m)), (v=V_{\rm phys}/(1\,\mathrm{m/s})), and the Euclidean norm on that dimensionless pair. The stated norm and Lipschitz bounds therefore operate on fixed numeric coordinates, not on a sum of dimensionful quantities.
- `post-cm04-harmonic-model`, `post-cm04-linear-damping-model`, and `post-cm04-sinusoidal-drive-model`: normalized the force maps and state variables in SI units and identified the dimensionless numerical constants (K) and (C). Their Lipschitz bounds now use (K) or (K+C), rather than adding dimensional spring and damping coefficients.
- `pthm-cm04-damped-decay-and-stability`: rewrote the phase norm and coefficient estimates using normalized SI variables and dimensionless (M,K,C,\Lambda,\Gamma,W). The energy estimate uses `max(M,K)`; unit conversions are stated, so the estimate does not compare unlike dimensions. The phase-plane and SI-unit definitions are explicit prerequisites.
- `def-cm04-one-dimensional-models-and-equilibria`, clause (d): corrected the (C^2) citation to `def-cm03-potential-and-mechanical-energy` clause (a), which gives the exact potential regularity convention.
- `pthm-cm04-resonance-and-boundedness`: narrowed the title and statement to the actual frequency-domain result. For (f_0\ne0) and (c^2<2mk), the amplitude has a unique maximum at a positive frequency. If (c^2\ge2mk), it is strictly decreasing on the declared domain (\Omega>0) and does not attain a maximum there; its continuous extension peaks at excluded (\Omega=0). The zero-drive amplitude is constant. The A-page summary was updated to match these qualifications.
- `rem-cm04-linear-model-scope`: replaced the overly broad “everything else on the page” with “every physics theorem”; clarified that the prescribed driving-force contribution is time-only, and that the harmonic approximation is in (q=x-x_*) with the constant potential offset omitted.
- `cex-cm04-undamped-resonance-with-bounded-drive-is-unbounded`: restricted the counterexample to nonzero resonant drive and recorded the bounded homogeneous zero-drive case. The physical scope now carries that exception.
- `ex-cm04-resonance-response-check`: stated that (t) is numerical SI time in seconds and corrected the quality-factor ratio to the dimensionless (\omega_0/(2\gamma)). This agrees with Likharev, *Essential Graduate Physics: Classical Mechanics*, ch. 5, §5.1, Eqs. 5.11 and 5.13–5.19 (PDF pp. 88–89). The evaluated response (5.0251890763) and the displayed equivalent formula agree.
- `ex-cm04-pendulum-small-angle-check`: kept the adopted effective angular equation distinct from the translational one-dimensional model; removed inapplicable physical translational theorem/postulate dependencies and stated the angular equation, potential and quadratic energy as chart-model quantities. Added the exact sine zero-set supplier and showed (U(\theta)=-mgl\cos\theta\) is (C^2): (U'=mgl\sin\theta), (U''=mgl\cos\theta), and both derivatives are continuous. The effective equation is supported by Likharev, ch. 1, Eq. (1.18) (PDF p. 10, printed p. 6); the generalized-coordinate discussion in ch. 3, §3.1 (PDF p. 33) supports the effective-coordinate framing. MIT OCW 8.09, *Classical Mechanics III*, ch. 3, pp. 54–55 supports the potential expansion and linearization. These are model sources, not experimental evidence and not a derivation from the constrained pendulum system. The finite-time bound is taken from the named mathematical supplier with its hypotheses.
No edit was needed in `ex-cm04-damped-regimes-check`: the displayed value `x(4)=0.4537038564` agrees with its exact expression and lies below the stated bound `0.4734675426`.

The six affected proof-contract entries were regenerated in `research/physics-cm-qm-gr-79-2026-10-11-batch-20.proof-contracts.json`. The CEX contract retains its checked zero-drive boundary case. No edited carrier had a `verification.judge` record to remove.

## Validation

- Reflow and precheck were run for all 12 changed items. Each precheck completed with zero failures; definitions and the scope remark reported no proof checks, and all proof-bearing items passed.
- The required single final layout command covered all 12 changed item paths: `proof-layout: 12 items, 31 steps, 0 defects`.

## Uneditable issue and blocker

The item `ex-cm04-pendulum-small-angle-check` now has `dependency_level: 13`, consistent with its remaining maximum prerequisite level of 12. The out-of-scope manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-20.pages.json` still records level 16 for this item. I did not edit the manifest. The run owner should reconcile that metadata before a gate that requires manifest/carrier level equality. No uneditable mathematical or content defect was found.

## Page verdicts

- A page `cm04-one-dimensional-conservative-and-dissipative-models`: pass after the listed repairs; its summary now states the resonance maximum only under the hypotheses where it is attained on the positive-frequency domain.
- B page `cm04-one-dimensional-conservative-and-dissipative-models-examples`: pass; no defect requiring repair was found, and B-page prose was left untouched.

## Coverage limitation

I reviewed all assigned items, both pages, and the batch's direct prerequisite inventory needed for the checked claims. I did not independently re-audit the full transitive prerequisite closure of every supplier. No empirical measurements are asserted by these items, and no claim of empirical confirmation follows from the mathematical checks.
