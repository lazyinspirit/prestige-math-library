---
id: def-tgrx-period-of-one-form
kind: definition
title: Period of a smooth one-form along a closed curve
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-smooth-manifold
  - def-smooth-differential-k-form
  - def-piecewise-c-one-curve-on-a-manifold
  - thm-continuous-implies-integrable
  - thm-additivity-over-subintervals
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-piecewise-c-one-curve-on-a-manifold: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, General Relativity, complete Cambridge Part III lecture notes, §§2.3.1 and 2.4.1–2.4.5"
      url: https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf
verification:
  precheck: pass
---

## Definition

Let $M$ be a smooth $n$-manifold, meaning a topological $n$-manifold equipped with a maximal smooth atlas, and let $\omega\in\Omega^1(M)$ be a smooth real one-form, meaning a smooth section of the cotangent bundle $T^*M\to M$. Let $\gamma:[0,1]\to M$ be a continuous piecewise-$C^1$ curve with $\gamma(0)=\gamma(1)$: there is a finite subdivision $0=t_0<\cdots<t_m=1$ such that on each closed piece a chart contains the curve image, its coordinate representative is $C^1$ on the piece interior, and its derivative extends continuously to the endpoints. At a piece endpoint, use the corresponding one-sided derivative as the tangent. On each piece, pair this tangent $\dot\gamma(t)\in T_{\gamma(t)}M$ with $\omega_{\gamma(t)}\in T^*_{\gamma(t)}M$. Define the oriented period by

$$\operatorname{Per}_\gamma(\omega):=\sum_j\int_{t_j}^{t_{j+1}}\omega_{\gamma(t)}(\dot\gamma(t))\,dt,$$

where $0=t_0<\cdots<t_m=1$ is any admissible chartwise subdivision with the regularity specified above. The covector-vector pairing is intrinsic, and additivity makes this value independent of further subdivision. No invariance under homotopy is asserted by this definition.

## Definition references

[[def-smooth-manifold]]

[[def-smooth-differential-k-form]]

[[def-piecewise-c-one-curve-on-a-manifold]]

[[thm-continuous-implies-integrable]]

[[thm-additivity-over-subintervals]]

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$, a smooth real one-form $\omega\in\Omega^1(M)$, and a closed piecewise-$C^1$ curve $\gamma:[0,1]\to M$ with the finite chart subdivision and one-sided endpoint derivatives specified in the Definition.

[F1] [[def-smooth-manifold]]: a smooth $n$-manifold is a topological $n$-manifold equipped with a maximal smooth atlas.

[F2] [[def-smooth-differential-k-form]]: a smooth differential one-form is a smooth section of $T^*M\to M$.

[F3] [[def-piecewise-c-one-curve-on-a-manifold]]: a piecewise-$C^1$ curve is continuous and has a finite chartwise subdivision on which coordinate derivatives extend continuously to the endpoints; those extensions are the one-sided endpoint derivatives, and zero velocities are allowed.

[F4] [[thm-continuous-implies-integrable]]: a continuous real function on a closed bounded interval is Riemann integrable.

[F5] [[thm-additivity-over-subintervals]]: the oriented integral over an interval equals the sum of its integrals over a finite subdivision, including coincident subdivision endpoints.

## Proof

1.1 On each chartwise $C^1$ piece, $t\mapsto\omega_{\gamma(t)}(\dot\gamma(t))$ is continuous up to the endpoints by [F2] and [F3]. The covector-vector pairing is unchanged by a chart change, so this is an intrinsically defined continuous real function; its piece integral exists by [F4]. [given, F2, F3, F4, algebra]

2.1 Any two admissible finite subdivisions have a finite common refinement. Repeatedly applying [F5] shows that subdividing a piece leaves the sum unchanged; hence the defined period is a unique real number independent of the chosen subdivision. [given, F5, algebra] ∎
