# Geodesic prerequisite repair handoff

Research-only full candidate for `lem-gr-maximal-geodesics-and-extension` (batch 75). Parent owns all supplier/consumer review and integration. No production carrier, run metadata, readiness, imports, root mathematics or engine state was edited. No source PDF/full text was fetched; source citations are preserved from the carrier and are not a new reading attestation.

The exact production bytes inspected are archived at `before/lem-gr-maximal-geodesics-and-extension.md`; `manifest.json` binds the original raw hash and final candidate hash.

## Completed candidate repairs

1. Endpoint AC: normalize an arbitrary local chart to a future Lorentz-orthonormal basis at the endpoint. Continuity plus unit-sphere compactness give the causal majorant |y'| <= C tau', with tau=y0 strictly increasing. The endpoint extension of tau is bounded monotone, so its derivative is L1 by the exact monotone-derivative supplier. Coordinate derivatives are dominated and therefore L1. The local FTC identity passes to the endpoint and the indefinite-integral AC supplier proves AC on the closed tail. Only then apply finite causal concatenation. Continuity alone is not used to infer endpoint AC.
2. Nonzero tangent: a zero tangent at any interior parameter gives the same initial data as a constant geodesic. ODE uniqueness propagates agreement on the connected interval and contradicts the nonzero initial vector. This covers null vectors without assuming g(v,v) is nonzero.
3. Correct equations: in affine time rho_t=-rho^2< u,Gamma(u,u) > and u_t=-rho P_uGamma(u,u); in normalized length rho_sigma=-rho< U,Gamma(U,U) > and U_sigma=-P_UGamma(U,U). The extension uses the smooth formula P_U=I-U tensor U off the unit sphere and proves its unit-sphere invariance by the scalar zero-initial-data equation for |U|^2-1.
4. Finite normalized length: normalized ODE continuation, followed by the explicit exponential speed formula, gives both a positive lower speed bound and a finite upper bound. Then t=t1+integral(1/rho) has a finite limit, explicitly excluding an infinite affine endpoint. The reconstruction extends beyond that finite affine endpoint and solves the geodesic ODE. Infinite normalized length is excluded by the existing bounded normalized acceleration/convergent-position argument.
5. Clauses (c)/(d): same finite concatenation construction and Cauchy contradiction remain. Inextendibility now explicitly refers to the no-limit definition at finite and infinite ends, rather than treating an infinite parameter domain as proof of inextendibility. The convergence-convention remark makes the same distinction.

All claims (a)-(d) remain, including all nonzero timelike/null/spacelike maximal geodesics and both finite/infinite ends. The candidate explicitly carries AC_omega and DC, already required by its exact causal-calculus and AC-FTC suppliers, and adds the existing mathematical dependencies for the local linear algebra and integral argument. No new lemma is needed. Parent must review the propagated public assumption clarification.

## Exact suppliers read

Complete Statements and used local arguments were inspected for: `lem-gr-causal-curve-calculus`, `def-gr-causal-curves-and-reachability`, `thm-gr-local-geodesics-and-exponential-map`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `cor-uniform-picard-lindelof-for-nearby-initial-values`, `lem-lorentz-form-has-orthonormal-basis`, `lem-gr-future-causal-classification-by-a-timelike-field`, `lem-gr-observer-pairing-with-future-causal-vectors`, `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`, `thm-absolutely-continuous-functions-have-integrable-derivatives`, `thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase`, `cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous`, `def-absolutely-continuous-function`, `def-gr-smooth-lorentzian-objects`, `def-causal-classification-of-lorentz-vectors`, and `lem-gr-dominating-cone-bounds`. Relevant geodesic speed/parallel-transport passages and inverse-metric/temporal definition passages were inspected. These local reads are not independent acceptance of whole supplier closures.

## Separate cone-domination supplier defects

The candidate deliberately proves its small endpoint chart bound locally and does not add `lem-gr-dominating-cone-bounds` as a dependency. That existing supplier has two additional defects for parent disposition:

- Proof 2.1 keeps z0=y0 and all spatial zi dependent only on the old spatial coordinates, yet claims the new spatial coordinate vector gains a nonzero time component to become orthogonal to n. Such a change cannot produce that time component. In particular the text describes a 3-by-3 spatial matrix but uses entries with row index 0 in its inverse. The correct construction permits a linear time shear while preserving the adapted field.
- Clause (e) assumes temporal gradient only on U0, while proof 2.2 takes a positive lower bound on its closure. This is false at a boundary where the gradient becomes null. For example in Minkowski (t,x) take z0=t-f(x), z1=x, f'(x)=1-x, and U0 with 0<x<epsilon inside a larger chart. The gradient of z0 is past timelike on U0, but future null v=(1,1) has dz0(v)=x and dz1(v)=1, so |v1|/v0=1/x is unbounded toward the boundary. A sound repair requires temporal gradient on a neighborhood of the closure, or only a compact-subset conclusion. Parent owns any related consumers.

These are unresolved outside this proposed candidate. No additional unresolved mathematical prerequisite was identified in the repaired candidate's actual route.

## Actual scoped checks

After the final candidate edit:

- `node tools/physics-support/proof-layout.mjs research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/gr79-geodesic-prerequisite-recovery/lem-gr-maximal-geodesics-and-extension.md`: exit 0, 1 item, 8 steps, 0 defects; `proof-layout.txt`.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/gr79-geodesic-prerequisite-recovery/lem-gr-maximal-geodesics-and-extension.md --json`: exit 0, 1 checked, 0 failed; `precheck.json`.
- `node tools/physics-support/rendercheck.mjs research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/gr79-geodesic-prerequisite-recovery/lem-gr-maximal-geodesics-and-extension.md --json`: exit 0, 1 checked, 0 errors and 0 warnings; `rendercheck.json`.

These checks concern format/rendering, not mathematical acceptance or a production gate. An initial mistaken direct Node invocation of the .mts precheck failed because it needs tsx; the final explicit tsx invocation above passed. An attempted rendercheck help call initiated a default scan and was interrupted without a check result; it supplies no evidence.
