---
id: prop-emg-xs-rn-horizon-data
kind: proposition
title: RN roots, Killing horizons and surface gravity
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-emg-xs-ingoing-rn
  - def-emg-causal-solution-and-horizon-vocabulary
  - def-emg-explicit-power-regimes
  - def-gr-killing-field
dependency_roles:
  def-emg-xs-ingoing-rn: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  def-gr-killing-field: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.110)-(7.113), printed pp. 201-203 (PDF pp. 207-209): RN roots and extremal case. The selected-model horizon calculation is local here."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1 and 3.3, equations (2.1)-(2.8) and (3.18)-(3.23): RN seed, roots and horizon context; no maximal-extension event-horizon claim is imported."
---

## Statement

Let $M>0$, $Q^2=q_e^2+q_m^2>0$, and use
$f(r)=1-2M/r+Q^2/r^2$ on the selected ingoing RN model. If $M^2\ge Q^2$,
the positive roots
$$r_\pm=M\pm\sqrt{M^2-Q^2}$$
are null constant-$r$ hypersurfaces. For the Killing field $\xi=\partial_v$
normalized by the displayed coordinate for which
$g(\xi,\xi)\to-1$ as $r\to\infty$, each is a Killing horizon in the
local sense of
[[def-emg-causal-solution-and-horizon-vocabulary]], with signed surface
gravity
$$\kappa_\pm=\frac{f'(r_\pm)}2 =\frac{r_\pm-r_\mp}{2r_\pm^2}.$$
At extremality $M^2=Q^2$, the coincident root is $r_H=M$ and
$\kappa_H=0$. If $M^2<Q^2$, $f$ has no positive root and no constant-$r$
null hypersurface of this form. These are local properties of the selected
metric; they do not classify event horizons in a maximal spacetime.

## Facts & Assumptions

**Given:** $M>0$, $Q^2>0$, the selected ingoing RN metric, and the exact
current meanings of null hypersurface, Killing horizon and surface gravity.

[F1] [[def-emg-xs-ingoing-rn]]: $g=-f\,dv^2+2\,dv\,dr+r^2\gamma$,
$g^{-1}(dr,dr)=g^{rr}=f$, and $\xi=\partial_v$ is a global product field.

[F2] [[def-emg-explicit-power-regimes]]: the square root of a nonnegative
real is its unique nonnegative real root, with $\sqrt0=0$. This current
batch-2 definition is used only for the exact root convention.

[F3] [[def-gr-killing-field]]: a smooth vector field $\xi$ is Killing when
$\mathcal L_\xi g=0$.

[L1] [[def-emg-causal-solution-and-horizon-vocabulary]], Definition (b): a level with nonzero conormal is null exactly when that conormal has zero metric square. A Killing horizon has a nonempty dense nonzero-generator portion with tangent null normal Killing field, and its signed surface gravity is fixed by the ambient covector equation $d(g(\xi,\xi))=-2\kappa_H\xi^\flat$.

[A1] All parameters are real and square roots are nonnegative. The parameter
and radius units are metres; $\kappa$ has units of inverse length.

## Proof

1.1 Multiplying $f$ by $r^2$ gives
$$r^2 f=r^2-2Mr+Q^2.$$
If $M^2\ge Q^2$, the quadratic formula gives the stated roots. Because
$0<Q^2\le M^2$ and $M>0$, the nonnegative root
$s=\sqrt{M^2-Q^2}$ satisfies $s<M$: otherwise $s^2\ge M^2$, contradicting
$s^2=M^2-Q^2<M^2$. Thus both $M+s$ and $M-s$ are positive. If $M^2<Q^2$, then
$$r^2f=(r-M)^2+(Q^2-M^2)>0$$
for every $r>0$, so there is no positive root. [given, F2, A1, algebra]

2.1 The inverse $v,r$ block in [F1] gives
$g^{-1}(dr,dr)=g^{rr}=f$. Thus a positive root gives a null level
hypersurface. The metric coefficients are independent of $v$, hence
$\mathcal L_\xi g=0$ and $\xi$ is Killing by [F3]. At a root,
$\xi^\flat=-f\,dv+dr=dr$ and $dr(\xi)=0$, so $\xi$ is null, tangent
and normal to that level. The product field $\partial_v$ is nonzero everywhere on the level, so its nonzero-generator part is the whole level, nonempty and dense. This verifies the Killing-horizon conditions in [L1]. [F1, F3, L1, step 1.1, algebra]

3.1 On the root set, $\xi^\flat=dr$ and
$$d(g(\xi,\xi))=d(-f)=-f'(r_H)dr.$$
Comparing with the normalization in [L1] gives
$\kappa_H=f'(r_H)/2$. Factoring
$f=(r-r_+)(r-r_-)/r^2$ and differentiating at either root gives
$$f'(r_\pm)=\frac{r_\pm-r_\mp}{r_\pm^2},$$
which proves the stated formula, including its negative sign at the inner
simple root. If $M^2=Q^2$, then $r_+=r_-=M$ and the formula gives zero.
[L1, step 2.1, algebra]

4.1 If $M^2<Q^2$, step 1.1 gives $f>0$ for every $r>0$. Therefore
$g^{-1}(dr,dr)>0$ and no positive constant-$r$ level is null. This rules out
only the radial-root horizons under discussion, not other global horizon
notions. [F1, L1, step 1.1, algebra] ∎
## Remarks

The horizon and signed surface-gravity terms use the current exact vocabulary Definition. The proof establishes their conditions for this selected model, without an event-horizon identification or an independent acceptance claim.
