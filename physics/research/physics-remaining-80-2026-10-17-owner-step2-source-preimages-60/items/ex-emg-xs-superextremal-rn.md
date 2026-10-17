---
id: ex-emg-xs-superextremal-rn
kind: example
title: Superextremal RN absence of radial horizon
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - def-emg-xs-ingoing-rn
  - def-emg-causal-solution-and-horizon-vocabulary
  - thm-ftc-first-part
dependency_roles:
  def-emg-xs-ingoing-rn: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
  thm-ftc-first-part: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equation (7.113) and discussion of a negative RN discriminant."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 3.3, discriminant discussion following equation (3.21); no censorship inference is adopted."
---

## Example

Let $M>0$ and $Q^2=q_e^2+q_m^2>M^2$. In the selected ingoing RN model,
$f(r)>0$ for every $r>0$, so no constant-$r$ null hypersurface arises from
a radial root. Every point has a future radial null path reaching arbitrarily
large $r$, and the escape set is the whole manifold with empty relative
boundary. The escape terminology uses the specified interface
[[def-emg-causal-solution-and-horizon-vocabulary]]. This is not a collapse
solution or a cosmic-censorship counterexample.

## Facts & Assumptions

**Given:** $M>0$, $Q^2>M^2$, and the selected ingoing RN metric and
orientation.

[F1] [[def-emg-xs-ingoing-rn]]: $g=-f\,dv^2+2\,dv\,dr+r^2\gamma$,
$g^{-1}(dr,dr)=f$, and $n=\partial_v+(f/2)\partial_r$ is future null.

[F2] [[thm-ftc-first-part]]: an integral of a continuous integrand has that
integrand as its derivative.

[L1] [[def-emg-causal-solution-and-horizon-vocabulary]], Definition (d): the escape set uses continuous future piecewise-$C^1$ causal paths, with finite $C^1$ subdivisions on compact parameter segments and nonzero future causal piece tangents. A single such path must reach arbitrarily large values of the specified radius; the escape boundary is relative to the selected model, without a conformal completion.

[A1] The radial domain is $r>0$; lengths are measured in the stated
geometric units. The claim concerns only the radial-root and escape notions
just specified.

## Verification

1.1 For each $r>0$,
$$r^2f(r)=r^2-2Mr+Q^2=(r-M)^2+(Q^2-M^2)>0.$$
Therefore $f(r)>0$ and the quadratic has no real root. Since
$g^{-1}(dr,dr)=f$ by [F1], every positive constant-$r$ level has spacelike
conormal, not a null conormal. This proves there is no positive radial root
or constant-$r$ null level in this example. [F1, A1, algebra]

1.2 Fix any $r_0>0$, $v_0$ and sphere point $\omega_0$. For $r\ge r_0$
put
$$v(r)=v_0+\int_{r_0}^r\frac{2}{f(s)}\,ds.$$
The integrand is smooth and positive, and [F2] gives $v'(r)=2/f(r)$. The
curve $\gamma(r)=(v(r),r,\omega_0)$ has tangent
$2f(r)^{-1}\partial_v+\partial_r=2f(r)^{-1}n$, a positive multiple of the
future null field in [F1]. Reparameterizing by $s=r-r_0\in[0,\infty)$ gives the path domain in [L1]. It is defined for every finite $r\ge r_0$ and
reaches arbitrarily large radii under [L1]. Thus every point belongs to the
escape set. [F1, F2, L1, A1, algebra]

2.1 Step 1.2 includes every point in the escape set; its complement is
empty, so its relative boundary is empty. Step 1.1 separately excludes a
constant-$r$ null level. These are algebraic facts about this model and do
not imply censorship or collapse conclusions. [L1, step 1.1, step 1.2] ∎
## Remarks

The current vocabulary fixes the exact path class and relative escape boundary used by this verification.
No global event horizon is defined or claimed.
