---
id: lem-emg-xs-null-barrier
kind: lemma
title: Smooth causal-cone collar barrier with screen directions
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 8
deps:
  - def-emg-xs-ingoing-rn
  - thm-emg-xs-kn-extension
  - def-emg-explicit-power-regimes
  - def-gr-inverse-metric-and-musical-isomorphisms
  - def-gr-causal-conditions-and-global-hyperbolicity
  - lem-gr-future-causal-classification-by-a-timelike-field
  - thm-gr-local-lorentz-tetrad-existence
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - def-countable-choice
  - cor-mean-value-theorem
dependency_roles:
  def-emg-xs-ingoing-rn: mathematical-premise
  thm-emg-xs-kn-extension: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  thm-gr-local-lorentz-tetrad-existence: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, RN ingoing-coordinate discussion and null character of constant-radius roots; the local cone estimate is derived here."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 3.3, equations (3.18)-(3.21): advanced coordinates and null directions near the KN horizon; the full cone bound is proved here."
---

## Statement

Consider either (i) the selected ingoing RN model with $M>0$, $Q^2>0$,
$M^2\ge Q^2$, and
$r_H=M+\sqrt{M^2-Q^2}$, or (ii) the selected ingoing KN model with $M>0$,
$M^2\ge a^2+q^2>0$, and
$r_H=M+\sqrt{M^2-a^2-q^2}$. In each case $r_H>0$. There is
$\delta>0$ and a collar
$$\mathcal C=\mathbb R_v\times(r_H-\delta,r_H+\delta)\times S^2$$
on which $\tau:=v-r$ is a smooth temporal function in the sense of
[[def-gr-causal-conditions-and-global-hyperbolicity]]: its gradient is past
timelike and $d\tau(Z)>0$ for every nonzero future causal vector $Z$. There
is a finite $C\ge0$ such that
$$dr(Z)\le C|r-r_H|\,d\tau(Z)$$
for every future causal $Z$ over the collar. On $r=r_H$ one also has
$dr(Z)\le0$. This is a local cone estimate on the two specified metrics; it
is not an event-horizon theorem.

## Facts & Assumptions

**Given:** The exact ingoing RN or KN metric and its global future timelike
orientation field, with the parameter conditions in the Statement.

[F1] [[def-emg-xs-ingoing-rn]]: $g=-f\,dv^2+2\,dv\,dr+r^2\gamma$,
$N=\partial_v+(f/2-1)\partial_r$ is a global future timelike field, and
the metric coefficients are independent of $v$.

[F2] [[thm-emg-xs-kn-extension]]: the KN metric and field are smooth on
$\mathbb R_v\times(0,\infty)_r\times S^2$, the signature is $(-,+,+,+)$,
$N=\partial_v-(1+f_0^2)\partial_r/2$ is a global future timelike field,
and all coefficients are independent of $v$. Its field-equation continuation
is conditional, but only its smooth metric and orientation are used here.

[F3] [[def-gr-inverse-metric-and-musical-isomorphisms]]: the gradient is
$\nabla\tau=(d\tau)^\sharp$ and
$g(\nabla\tau,\nabla\tau)=g^{-1}(d\tau,d\tau)$.

[F4] [[def-gr-causal-conditions-and-global-hyperbolicity]]: a smooth temporal
function has past-timelike gradient, equivalently
$g(\nabla\tau,\nabla\tau)<0$ and $d\tau(N)>0$.

[F5] [[lem-gr-future-causal-classification-by-a-timelike-field]]: for a
nonzero causal $Z$, future-directedness is equivalent to $g(Z,N)<0$.

[F6] [[thm-gr-local-lorentz-tetrad-existence]]: near each point of a
time-oriented smooth Lorentzian four-manifold there is a smooth future
orthonormal tetrad. Its tangent-bundle convention inherits only
$\mathrm{AC}_\omega$ from [[def-countable-choice]].

[F7] [[def-emg-explicit-power-regimes]] supplies the unique positive square
root for a positive real. [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]
gives smoothness of a local inverse when the derivative is nonzero.

[F8] [[thm-heine-borel-rn]]: closed bounded subsets of finite-dimensional
Euclidean space are compact. [[thm-extreme-value-metric]]: a continuous real
function on a nonempty compact metric space is bounded and attains its bounds.

[F9] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]:
$|x\cdot y|\le\|x\|\|y\|$ in Euclidean space.

[F10] [[cor-mean-value-theorem]]: for a real function continuous on a closed
interval and differentiable in its interior, its increment equals its
derivative at an interior point times the interval length.

[A1] Choose $\delta$ with $r_H-\delta>0$ and compact radial closure. The
angular base is the compact unit sphere $S^2$. In KN,
$\Psi=X\partial_Y-Y\partial_X$ denotes the smooth global rotation field,
equal to $\partial_\psi$ on polar charts.

[A2] Only the published tetrad supplier's inherited $\mathrm{AC}_\omega$
background is used; this proof uses no full axiom of choice or dependent
choice.

## Proof

1.1 In RN, $d\tau=dv-dr$ and the inverse $v,r$ block of [F1] gives
$$g^{-1}(d\tau,d\tau)=f-2,$$
which equals $-2$ at $r_H$. After shrinking a radial collar it remains
negative, and $d\tau(N)=2-f/2>0$. In KN, direct inversion of [F2] gives
$$g^{-1}(d\tau,d\tau) =\frac{a^2\sin^2\theta-2R+\Delta}{\Sigma}.$$
At $r_H$, $\Delta=0$, $R=r_H^2+a^2$, and the numerator satisfies
$a^2\sin^2\theta-2R\le-2r_H^2-a^2<0$. Compactness of $S^2$ and
continuity therefore give a uniform radial collar where this norm stays
negative. There $d\tau(N)=1+(1+f_0^2)/2>0$. Thus $\nabla\tau$ is past
timelike in either case by [F3-F4]. In a local future orthonormal tetrad,
write $-\nabla\tau=(T^0,\mathbf T)$ and a future causal
$Z=(Z^0,\mathbf Z)$. Then $T^0>\|\mathbf T\|$ and
$Z^0\ge\|\mathbf Z\|$, with $Z^0>0$, by the signature and selected cone.
By [F9],
$$g(-\nabla\tau,Z)=-T^0Z^0+\mathbf T\cdot\mathbf Z \le-(T^0-\|\mathbf T\|)Z^0<0.$$
Therefore $d\tau(Z)=g(\nabla\tau,Z)>0$. [F1, F2, F3, F4, F5, F6, F9, A1, algebra]

1.2 At an RN root, $\xi=\partial_v$ satisfies
$\xi^\flat=-f\,dv+dr=dr$, and $g(\xi,N)=-1<0$ there, so it is future
null by [F5]. At a KN root put $R_H=r_H^2+a^2$ and
$$\chi=\partial_v+\frac{a}{R_H}\Psi.$$
Substitution in the metric of [F2] gives
$\chi^\flat=(\Sigma_H/R_H)dr$, where
$\Sigma_H=r_H^2+a^2\cos^2\theta>0$. Also
$dr(N)=-(1+f_0^2)/2<0$, so
$g(\chi,N)=\chi^\flat(N)<0$ and $\chi$ is future null. In both cases
$dr$ on the root is a positive multiple of the covector of a future null
generator. In an orthonormal frame, if future null $K=(K^0,\mathbf K)$ and
future causal $Z=(Z^0,\mathbf Z)$, then $K^0=\|\mathbf K\|$,
$Z^0\ge\|\mathbf Z\|$, and
$$g(K,Z)=-K^0Z^0+\mathbf K\cdot\mathbf Z \le-K^0Z^0+\|\mathbf K\|\|\mathbf Z\|\le0.$$
Consequently $dr(Z)\le0$ on $r=r_H$. [F1, F2, F5, F9, A1, algebra]

2.1 Put $u:=-g^{-1}(d\tau,d\tau)>0$ on the collar by step 1.1.
The unique positive root $\sqrt u$ is smooth: at every $u_0>0$ the map
$s\mapsto s^2$ has derivative $2\sqrt{u_0}\ne0$, so [F7] gives a smooth
local inverse; uniqueness makes these local inverses agree. Hence
$n_\tau:=-\nabla\tau/\sqrt u$ is a smooth future unit timelike field.
At $v=0$, cover the compact sphere section at $r=r_H$ by finitely many
relatively compact neighborhoods on which [F6] supplies smooth future
orthonormal tetrads $(E_0,E_1,E_2,E_3)$. Shrink $\delta$ so the closed radial
collar over each smaller patch stays in its tetrad neighborhood. Extend
these tetrads to all $v$ by the isometric translations of [F1-F2]; both
metrics and $d\tau$ are $v$-translation invariant. On each neighborhood set
$P_i:=E_i+g(E_i,n_\tau)n_\tau$ for $i=1,2,3$. Then $d\tau(P_i)=0$. If
$\sum_i c_iP_i=0$, then $\sum_i c_iE_i$ is a multiple of $n_\tau$; its
squared norm is nonnegative, while a nonzero multiple of $n_\tau$ has
negative squared norm. Hence all $c_i=0$. The kernel of $d\tau$ is positive
definite, so finite Gram-Schmidt gives a smooth orthonormal screen
$(e_1,e_2,e_3)$ after shrinking each neighborhood. Its normalization roots
are smooth by the same inverse argument. Every future causal vector with
$d\tau(Z)=1$ has
$$Z=\frac{n_\tau+b_1e_1+b_2e_2+b_3e_3}{d\tau(n_\tau)},\qquad b_1^2+b_2^2+b_3^2\le1.$$
Indeed, write $Z=s n_\tau+W$ with $W\perp n_\tau$. Since $n_\tau$ is future
timelike and $Z$ is future causal, [F5] gives $g(n_\tau,Z)<0$, so
$s=-g(n_\tau,Z)>0$. Causality gives $g(W,W)\le s^2$, and
$d\tau(Z)=s\sqrt u=1$. [F1, F2, F3, F5, F6, F7, step 1.1, A1, A2, algebra]

3.1 On each finite coordinate patch of step 2.1, the function
$G(r,\omega,b):=dr(Z)$ for the displayed normalized vector is smooth in
the radial variable, the compact sphere-coordinate subset and the closed
unit ball $b\in\mathbb R^3$. Their products with the closed radial interval
and unit ball are closed bounded Euclidean sets, hence compact by [F8].
Applying the extreme-value theorem [F8] to $|\partial_rG|$ on each product
and taking the largest of finitely many bounds gives one finite $C\ge0$,
uniform in $v$. At $r=r_H$, step 1.2 gives
$G(r_H,\omega,b)\le0$. The one-variable mean-value theorem [F10] therefore
gives, throughout the collar,
$$G(r,\omega,b)\le G(r_H,\omega,b)+C|r-r_H| \le C|r-r_H|.$$
For any nonzero future causal $Z$, step 1.1 gives $d\tau(Z)>0$; apply the
normalized estimate to $Z/d\tau(Z)$ and multiply back. The zero vector is
trivial. This proves the asserted cone bound including all angular screen
directions. [F8, F10, step 1.1, step 1.2, step 2.1, algebra] ∎
## Remarks

The local geometric estimate is proved from the exact metrics and selected
orientations. No event-horizon identification or principal-null-direction
shortcut is used.

