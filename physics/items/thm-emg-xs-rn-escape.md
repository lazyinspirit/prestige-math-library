---
id: thm-emg-xs-rn-escape
kind: theorem
title: Outer RN escape boundary in selected model
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 9
deps:
  - def-emg-xs-ingoing-rn
  - lem-emg-xs-null-barrier
  - def-emg-causal-solution-and-horizon-vocabulary
  - def-emg-explicit-power-regimes
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-ftc-first-part
dependency_roles:
  def-emg-xs-ingoing-rn: mathematical-premise
  lem-emg-xs-null-barrier: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-ftc-first-part: mathematical-premise
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
      locator: "Chapter 7, equations (7.106)-(7.113): RN roots, ingoing coordinates and extremal case; the escape observable is proved directly here."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1, equations (2.1)-(2.8): RN seed and null-coordinate form; no global event-horizon conclusion is imported."
---

## Statement

Let $M>0$, $Q^2=q_e^2+q_m^2>0$, and $M^2\ge Q^2$. In the selected
ingoing RN model put $r_H=M+\sqrt{M^2-Q^2}$. Let $\mathcal E$ be the set
of points from which a future piecewise-$C^1$ causal path in this model
reaches arbitrarily large $r$, using the specified definition
[[def-emg-causal-solution-and-horizon-vocabulary]]. Then
$$\mathcal E=\{(v,r,\omega):r>r_H\},\qquad \partial_{\mathcal M_{\mathrm{in}}}\mathcal E=\{r=r_H\}.$$
This is the boundary of the stated escape observable on the selected
manifold. It makes no claim about conformal infinity, a maximal RN extension,
collapse, or cosmic censorship.

## Facts & Assumptions

**Given:** The selected ingoing RN metric and time orientation, with the
parameter assumptions in the Statement.

[F1] [[def-emg-xs-ingoing-rn]]: $g=-f\,dv^2+2\,dv\,dr+r^2\gamma$,
$\ell=-\partial_r$ and $n=\partial_v+(f/2)\partial_r$ are future null,
and $g(\ell,n)=-1$.

[F2] [[lem-emg-xs-null-barrier]]: on a collar of the outer root, for every
future causal $Z$ and $\tau=v-r$, $d\tau(Z)>0$ when $Z\ne0$,
$dr(Z)\le C|r-r_H|d\tau(Z)$, and $dr(Z)\le0$ at the root.
For $Z=0$, $d\tau(Z)=0$; hence $\tau'\ge0$ along every future causal
curve piece.

[F3] [[thm-derivative-of-exponential]] and [[thm-chain-rule]]: the
integrating factors $e^{\pm C\tau}$ are differentiable along each $C^1$
curve piece with derivative $\pm C\tau'e^{\pm C\tau}$.

[F4] [[thm-ftc-first-part]]: the derivative of an integral of a continuous
function is its integrand.

[L1] [[def-emg-causal-solution-and-horizon-vocabulary]], Definition (d): the escape set uses continuous future piecewise-$C^1$ causal paths, with finite $C^1$ subdivisions on compact parameter segments and nonzero future causal piece tangents. A single such path must reach arbitrarily large values of the specified radius; the escape boundary is relative to the selected model, without a conformal completion.

[A1] Square roots are the unique nonnegative real roots, as in
[[def-emg-explicit-power-regimes]]. Paths are continuous and are tested on
compact parameter segments as specified in [L1].

## Proof

1.1 On a compact path segment contained in the collar, write
$w=r_H-r$ while $r\le r_H$. From [F2], on each $C^1$ piece,
$$w'=-dr(Z)\ge-Cw\,\tau'.$$
By [F3], $(e^{C\tau}w)'\ge0$. The factor is positive and continuous across
the finite partition, so $w$ cannot decrease to zero from a positive value
while the path remains below the root in the collar. Thus no path starting
below $r_H$ can reach the root: if it did, continuity gives a final collar
segment starting either at its initial point inside the collar or at the last crossing of a fixed smaller collar lower boundary, and ending at the first root contact. Its starting value of $w$ is positive, contradicting this inequality.
For a path starting at the root, suppose $r>r_H$ somewhere in a compact
segment. A connected component of the open parameter set $\{r>r_H\}$ then
has a left endpoint at which $r=r_H$. Restrict to an initial portion of that component lying inside the collar, stopping at its first crossing of $r_H+\delta/2$ if necessary. On this collar portion let
$h=e^{-C\tau}(r-r_H)$. By [F2-F3], $h'\le0$ on every $C^1$ piece, so [F4]
makes $h$ nonincreasing across the finite partition. Continuity at the left
endpoint gives $h\le0$ throughout the component, contradicting $r>r_H$.
Thus a path from the root cannot make a positive excursion. In particular
neither a point below nor a point on the root can escape to $r>r_H$.
[F2, F3, F4, L1, A1, algebra]

1.2 Fix $r_0>r_H$, $v_0\in\mathbb R$, and $\omega_0\in S^2$. For
$r\ge r_0$, set
$$v(r)=v_0+\int_{r_0}^r\frac{2}{f(s)}\,ds.$$
Here $f(s)=(s-r_+)(s-r_-)/s^2>0$ because $s>r_+$, so [F4] gives
$v'(r)=2/f(r)$. The curve $\gamma(r)=(v(r),r,\omega_0)$ has tangent
$$\gamma'(r)=\frac{2}{f(r)}\partial_v+\partial_r =\frac{2}{f(r)}n,$$
a positive multiple of the future null field in [F1]. Reparameterize by $s=r-r_0\in[0,\infty)$ to obtain the path domain in [L1]. It is defined for
every finite $r\ge r_0$ and therefore reaches arbitrarily large radii in
the exact path sense of [L1]. Every point with $r>r_H$ lies in $\mathcal E$.
[F1, F4, L1, A1, algebra]

2.1 Steps 1.1 and 1.2 show respectively that no point with $r\le r_H$
escapes and every point with $r>r_H$ escapes. The boundary of this open
radial half-space in $\mathbb R_v\times(0,\infty)_r\times S^2$ is the
level set $r=r_H$. This proves the claim under the conditional escape
definition [L1]. [L1, step 1.1, step 1.2, algebra] ∎
## Remarks

The current causal-vocabulary Definition (d) fixes the escape observable and its precise path class. The collar estimate and the outgoing null paths are
proved for the displayed metric and orientation; no global extension result
is imported.
