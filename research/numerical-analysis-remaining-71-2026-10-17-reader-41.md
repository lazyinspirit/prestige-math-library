# Step 3a reader report — batch 41

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Verdict: reviewed; four item repairs and one A-page clarification are complete. No unresolved defect or blocker remains.

## Opened inventory

### Assigned pages

- `library/numerical-pdes-and-spatial-discretization/energy-stable-incompressible-navier-stokes-discretization.md` (A page)
- `library/numerical-pdes-and-spatial-discretization/energy-stable-incompressible-navier-stokes-discretization-examples.md` (B page)

### Assigned A-page items

1. `lem-na-halfline-heat-logarithmic-mass-loss`
2. `lem-na-shrinking-boundary-stream-corrector`
3. `lem-na-solenoidal-scalar-equations-give-weak-continuity`
4. `def-na-evolutionary-skew-convective-form`
5. `lem-na-evolutionary-skew-convective-form-bound`
6. `def-na-evolutionary-incompressible-ns-weak-solution`
7. `lem-na-evolutionary-ns-weak-form-is-well-defined`
8. `def-na-solenoidal-energy-weak-ns-velocity`
9. `def-na-mini-navier-stokes-backward-euler-scheme`
10. `thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d`
11. `lem-na-two-dimensional-solenoidal-energy-velocity-uniqueness`
12. `lem-na-mini-be-scheme-is-well-defined`
13. `lem-na-continuous-pressure-recovery-from-solenoidal-residual`
14. `lem-na-mini-fortin-l2-approximation`
15. `thm-na-mini-be-step-existence-energy`
16. `lem-na-mini-fortin-h2-approximation`
17. `lem-na-mini-weak-solenoidal-compactness`
18. `thm-na-mini-solenoidal-stokes-projection-error`
19. `thm-na-mini-navier-stokes-be-subsequential-limit`
20. `thm-na-mini-be-smooth-velocity-error`
21. `lem-na-solenoidal-evolution-integrated-pressure-recovery`
22. `thm-na-mini-be-smooth-integrated-pressure-error`
23. `rem-na-pe06-pressure-recovery-escalation`

### Assigned B-page examples

- `ex-na-zero-mean-pressure-gauge`
- `ex-na-periodic-taylor-green-vortex`
- `ex-na-unit-square-mini-mesh-family`
- `ex-na-mini-backward-euler-energy-budget`
- `cex-na-graded-mini-mass-initialization-pressure-rate`
- `ex-na-conditional-three-dimensional-flow-computation`
- `cex-na-polyhedral-energy-ns-pressure-endpoint`

### Dependencies opened for verification

I checked the local Stokes-space and pressure conventions; the skew-convection and homogeneous Korn identities; the two-dimensional solenoidal uniqueness lemma; the Bochner integrability, evolution-triple and scalar $W^{1,1}$ representative results; the divergence right inverse; the MINI space and discrete-kernel definitions; Scott–Zhang interpolation; Fortin stability; mixed Galerkin quasioptimality; the static MINI Stokes estimate; the discrete Helmholtz/pressure result; the backward Euler energy and identity results; the discrete compactness and weak-compactness inputs; and the continuous and integrated pressure-recovery results. Relevant identifiers include `def-na-stokes-zero-mean-pressure-and-velocity-spaces`, `lem-na-evolutionary-skew-convective-form-bound`, `lem-pe12-evolution-energy-chain-rule`, `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`, `thm-na-bounded-lipschitz-domain-divergence-right-inverse`, `def-na-mini-element-p1-bubble-p1-spaces`, `def-na-discrete-weak-and-exact-divergence-free-spaces`, `lem-na-scott-zhang-boundary-preserving-p1-interpolant`, `thm-na-mini-element-fortin-stability`, `thm-na-mixed-galerkin-quasioptimality`, `thm-na-mini-element-h1-pressure-error`, `thm-na-discrete-helmholtz-projection-and-pressure-schur`, `thm-na-mini-be-step-existence-energy`, `thm-pe12-discrete-aubin-lions-compactness`, `lem-na-continuous-pressure-recovery-from-solenoidal-residual`, and `lem-na-solenoidal-evolution-integrated-pressure-recovery`.

The exact statement and proof of `lem-na-two-dimensional-solenoidal-energy-velocity-uniqueness` were rechecked before it was used as a supplier in the repaired uniqueness theorem.

## Repairs and evidence

- `ex-na-periodic-taylor-green-vortex`: corrected Fact F1 to explain that the cited skew form is defined on zero-boundary fields. Step 2.1 now verifies the periodic classical equation directly and no longer cites the no-slip form as an inference. The explicit nonzero boundary trace remains, so the torus example is clearly distinguished from the no-slip branch.
- `lem-na-evolutionary-ns-weak-form-is-well-defined`: added strong measurability of $t\mapsto c(u(t);u(t),\cdot)$. A strongly measurable $V$-valued representative of $u$, composed with the continuous quadratic map $V\to V^*$, gives strong measurability; the existing $L^\infty_tL^2_x\cap L^2_tV$ estimate then gives Bochner $L^{4/3}_tV^*$ integrability.
- `thm-na-mini-solenoidal-stokes-projection-error`: the former proof called $(z,q)$ a smooth Stokes pair without supplying a Stokes equation. Step 2.1 now defines $F(v)=a_\nu(z,v)+b(v,q)$, verifies $b(z,r)=0$, and so makes $(z,q)$ a solution of the continuous Stokes system with data $(F,0)$. It uses the face-average Scott–Zhang interpolants (with the pressure mean removed) and the explicit MINI mixed-error constants to obtain the stated $(1+\nu^{-1})h$ bound with constant independent of $h,\nu$.
- `thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d`: the prior claim said the pressure-bearing energy weak solutions were unique, but its proof established velocity equality only. The title and statement now say velocity uniqueness explicitly, limit the two-dimensional clause to the polyhedral domain class of its cited uniqueness lemma, and make no pressure-equality claim. In three dimensions, the relative-energy inequality is stated almost everywhere, matching the weak energy inequality. The proof applies an integrating factor to its absolutely continuous integral, obtains equality almost everywhere, then uses weak continuity to conclude equality at every time. The one-dimensional $W^{1,1}$ result justifies the absolutely continuous cross-pairing.
- The A-page prose in the “Velocity compactness, limits, and uniqueness” section now says “uniqueness of velocity components” and “velocity weak–strong uniqueness,” matching the repaired theorem.

The proof contracts for the four changed items were updated for the changed derivations, citations and step inputs. The changed items had no stale `verification.judge` record to remove. The preliminary concern that three batch-31 suppliers lacked dependencies was not confirmed on recheck: each current `deps` list matches its batch-31 manifest entry, and each current raw SHA-256 matches both the stored scope-gate row and guard hash. No finding is issued for those suppliers.

Mathematical source checks included Süli–Tscherpel, [arXiv:1804.02264, §2.1](https://arxiv.org/abs/1804.02264), for the pressure-free weak-solution context (not as a proof of the Newtonian pressure claim), and Guermond, [Chapter 34, Remark 34.17, p. 13](https://people.tamu.edu/~guermond/M661_FALL_2015/chap34.pdf), for the MINI Stokes error estimate and its $H^2\times H^1$ Stokes-pair hypotheses. The repaired projection proof supplies the missing continuous Stokes data explicitly.

## Page verdicts

- A page: passes after the uniqueness summary clarification. Its distinctions between pressure-free velocity limits, pressure primitives, the refuted universal instantaneous-pressure claim, and the conditional smooth-branch estimate match the audited items.
- B page: passes. Its periodic/no-slip distinction, zero-mean pressure gauge, discrete energy and mesh summaries, and conditional three-dimensional statement match the examples.

## Validation and remaining issues

- `node tools/tsx-run.mjs tools/reflow.mts ...` was run for each changed item; all four were unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts ...` passes for all four changed items.
- Final required layout pass: `node tools/proof-layout.mjs items/ex-na-periodic-taylor-green-vortex.md items/lem-na-evolutionary-ns-weak-form-is-well-defined.md items/thm-na-mini-solenoidal-stokes-projection-error.md items/thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d.md` reported `4 items, 11 steps, 0 defects`.
- Unrepaired defects: none. Blocker: none. Findings JSON: empty.
