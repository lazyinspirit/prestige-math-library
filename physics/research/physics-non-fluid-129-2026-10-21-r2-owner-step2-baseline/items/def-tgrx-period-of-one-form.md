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
  - thm-continuous-implies-integrable
  - thm-additivity-over-subintervals
dependency_roles:
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

Let $M$ be a smooth manifold, let $\omega$ be a smooth real one-form on $M$, and let $\gamma:[0,1]\to M$ be a piecewise-$C^1$ curve with a finite subdivision into chartwise $C^1$ pieces and $\gamma(0)=\gamma(1)$. Define its oriented period by

$$\operatorname{Per}_\gamma(\omega):=\sum_j\int_{t_j}^{t_{j+1}}\omega_{\gamma(t)}(\dot\gamma(t))\,dt,$$

where $0=t_0<\cdots<t_m=1$ is any subdivision on whose pieces $\gamma$ is $C^1$. The covector-vector pairing is intrinsic, and additivity makes this value independent of further subdivision. No invariance under homotopy is asserted by this definition.

## Definition references

[[thm-continuous-implies-integrable]]

[[thm-additivity-over-subintervals]]

## Facts & Assumptions

**Given:** A smooth real one-form $\omega$ and a closed piecewise-$C^1$ curve $\gamma:[0,1]\to M$ with a finite chartwise $C^1$ subdivision as stated in the Definition.

[F1] [[thm-continuous-implies-integrable]]: a continuous real function on a closed bounded interval is Riemann integrable.

[F2] [[thm-additivity-over-subintervals]]: the oriented integral over an interval equals the sum of its integrals over a finite subdivision, and this identity includes coincident subdivision endpoints.

## Proof

1.1 On each chartwise $C^1$ piece, $t\mapsto\omega_{\gamma(t)}(\dot\gamma(t))$ is continuous because $\omega$ and the coordinate representative of $\gamma$ are continuous and the one-form evaluation is bilinear. Thus each displayed piece integral exists by [F1]. The covector-vector pairing has the same value after a chart change, so the integrand is intrinsically defined. [given, F1, algebra]

2.1 Any two admissible finite subdivisions have a finite common refinement. Repeatedly applying [F2] shows that subdividing a piece leaves the sum unchanged; hence the defined period is a unique real number independent of the chosen subdivision. [given, F2, algebra] ∎
