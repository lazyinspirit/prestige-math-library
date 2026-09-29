---
id: prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus
kind: proposition
title: Gradient of the distance is the outward unit radial field off the base point and the cut locus
status: draft
origin: pipeline
deps:
  - cor-inner-product-induces-a-norm
  - cor-the-differential-of-a-diffeomorphism-is-an-isomorphism
  - def-countable-choice
  - def-cut-point-and-cut-locus-of-a-point
  - def-integer-power
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - def-rational-power
  - def-riemannian-metric-and-riemannian-manifold
  - def-velocity-derivation-of-a-smooth-curve
  - lem-derivative-of-a-power
  - lem-rational-power-laws
  - lem-the-differential-sends-derivations-to-derivations-and-is-linear
  - lem-the-pointwise-norm-is-smooth-off-the-zero-vector
  - prop-exponential-map-scales-geodesic-time
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-chain-rule-for-differentials-of-smooth-maps
  - thm-distance-from-p-is-smooth-off-p-and-the-cut-locus
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p
  - thm-gauss-lemma
  - thm-hopf-rinow
  - thm-of-square-roots
  - thm-real-power-continuity-and-derivatives
  - thm-the-differential-sends-curve-velocities-to-composite-curve-velocities
  - thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Chapter 10"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190: the distance function and its gradient along a minimizing geodesic before the cut point."
    - title: Ved Datar, Lectures on Riemannian Geometry (2025)
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Section 18.1, printed pp.134-136: polar normal coordinates, the radial field and the gradient of the distance; Section 23.2, printed pp.167-169: the cut locus and the radial domain."
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless, finite-dimensional Riemannian
manifold, let $p\in M$, let $v\in S_pM$ be a unit tangent vector and let
$0<t<c_p(v)$ be a time before the cut time. Write $\gamma:=\gamma_{p,v}$ for
the geodesic with $\gamma(0)=p$ and $\dot\gamma(0)=v$, and put
$q:=\gamma(t)=\exp_p(tv)$. Then
$$\operatorname{grad} r_p(q)=\dot\gamma(t)=d(\exp_p)_{tv}(v),$$
the terminal velocity of the radial segment $\gamma|_{[0,t]}$, and this vector
has pointwise norm one: $|\operatorname{grad} r_p(q)|_g=1$. Since
$0<t<c_p(v)$ the segment $\gamma|_{[0,t]}$ is the minimizing radial geodesic
from $p$ to $q$, so along it the gradient of the distance from $p$ is the
outward unit radial field. In dimension zero $S_pM=\varnothing$ and the
assertion is vacuous; no compactness of $M$ is assumed.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; a complete, connected, boundaryless,
finite-dimensional Riemannian manifold $(M,g)$; a point $p\in M$; a unit
vector $v\in S_pM$; a time $0<t<c_p(v)$; the geodesic $\gamma=\gamma_{p,v}$
with $\gamma(0)=p$, $\dot\gamma(0)=v$; the point $w_0:=tv\in T_pM$; the point
$q:=\gamma(t)=\exp_p(tv)$; the vector $u:=d(\exp_p)_{tv}(v)\in T_qM$; the
distance $r_p:M\to\mathbb R$, $r_p(x):=d_g(p,x)$; and the pointwise norm
$N_p(w)=|w|_g$ on $T_pM$.

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ is the standing
assumption ([[def-countable-choice]]).

[F1] Under [A1], $r_p$ is smooth on the open set
$M\setminus(\{p\}\cup\operatorname{Cut}(p))$ and
$r_p(\exp_p(w))=|w|_g$ for every $w$ in the tangent cut domain
$D_p=\{sv:v\in S_pM,\ 0<s<c_p(v)\}$
([[thm-distance-from-p-is-smooth-off-p-and-the-cut-locus]]).

[F2] Under [A1], $D_p$ is open in $T_pM$, the set
$M\setminus(\{p\}\cup\operatorname{Cut}(p))$ is an open submanifold of $M$,
and $\exp_p|_{D_p}$ is a diffeomorphism of $D_p$ onto it
([[thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p]]).

[F3] Under [A1], for a Riemannian manifold without boundary, $w\in\mathcal E_p$
and $X\in T_pM$ one has
$g_{\exp_p(w)}\bigl(d(\exp_p)_w(w),d(\exp_p)_w(X)\bigr)=g_p(w,X)$, and
$d(\exp_p)_w$ carries radial directions to geodesic velocities
([[thm-gauss-lemma]]).

[F4] Under [A1], a complete connected boundaryless Riemannian manifold has
fibre exponential domain $\mathcal E_p=T_pM$ at every point
([[thm-hopf-rinow]]).

[F5] Under [A1], $\mathcal E_p$ is open in $T_pM$ and
$\exp_p:\mathcal E_p\to M$ is smooth
([[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]]).

[F6] Under [A1], for $v\in T_pM$ and $s\in\mathbb R$ one has
$s\in I_{p,v}\Leftrightarrow sv\in\mathcal E_p$, and then
$\exp_p(sv)=\gamma_{p,v}(s)$
([[prop-exponential-map-scales-geodesic-time]]).

[F7] Under [A1], every $(p,v)\in TM$ has a unique maximal geodesic
$\gamma_{p,v}:I_{p,v}\to M$ with $\gamma_{p,v}(0)=p$ and
$\gamma'_{p,v}(0)=v$, and $(s,p,v)\mapsto\gamma_{p,v}(s)$ is smooth on its
open domain ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]).

[F8] $N_p$ is smooth on $T_pM\setminus\{0_p\}$
([[lem-the-pointwise-norm-is-smooth-off-the-zero-vector]]).

[F9] The pointwise norm is $|w|_g=\sqrt{g_p(w,w)}$, the norm of the zero
vector is zero, and $|w|_g>0$ for nonzero $w$
([[def-pointwise-norm-and-angle-from-a-riemannian-metric]]).

[F10] If $F:M\to N$ and $G:N\to P$ are smooth, then
$d(G\circ F)_x=dG_{F(x)}\circ dF_x$ for every $x\in M$
([[thm-chain-rule-for-differentials-of-smooth-maps]]).

[F11] If $c$ is a smooth curve with $c(0)=x$ and $F$ is smooth, then
$dF_x(\dot c(0))$ is the velocity of $F\circ c$ at $0$
([[thm-the-differential-sends-curve-velocities-to-composite-curve-velocities]]).

[F12] For real $\alpha$, the function $x\mapsto x^{\alpha}$ is differentiable
on $(0,\infty)$ with derivative $(x^{\alpha})'=\alpha x^{\alpha-1}$
([[thm-real-power-continuity-and-derivatives]]).

[F13] If $g$ is differentiable at $c$ and $f$ is differentiable at $g(c)$,
then $(f\circ g)'(c)=f'(g(c))\,g'(c)$ ([[thm-chain-rule]]).

[F14] Sums, scalar multiples and products of functions differentiable at a
point are differentiable there, with the sum, scalar and product formulas
([[thm-algebra-of-derivatives]]).

[F15] The constant function $x\mapsto x^{0}$ has derivative zero and, for
$n\ge1$, $x\mapsto x^{n}$ has derivative $nx^{n-1}$
([[lem-derivative-of-a-power]]).

[F16] The differential of a diffeomorphism at every point is a linear
isomorphism ([[cor-the-differential-of-a-diffeomorphism-is-an-isomorphism]]).

[F17] $dF_x:T_xM\to T_{F(x)}N$ is linear, for every smooth $F:M\to N$
([[lem-the-differential-sends-derivations-to-derivations-and-is-linear]]).

[F18] A Riemannian metric is a smooth symmetric covariant two-tensor with
$g_p(w,w)>0$ for every nonzero $w\in T_pM$; in particular $g_p$ is a
symmetric positive definite bilinear form on $T_pM$
([[def-riemannian-metric-and-riemannian-manifold]]).

[F19] For every smooth real function $f$ on a Riemannian manifold, its
gradient is characterized by $g_x((\operatorname{grad} f)_x,Y)=df_x(Y)$ for
every $x$ and every $Y\in T_xM$; this is the defining identity for the
gradient used here.

[F20] On an inner product space, $\|w\|=\sqrt{\langle w,w\rangle}$ satisfies
$\|\lambda w\|=|\lambda|\,\|w\|$ ([[cor-inner-product-induces-a-norm]]).

[F21] For $a>0$, $a^{1/2}$ is the unique nonnegative square root of $a$, and
$\sqrt{a}=a^{1/2}$ ([[def-rational-power]], [[thm-of-square-roots]]).

[F22] Rational powers satisfy $a^{-r}=(a^{r})^{-1}$ and
$(a^{r})^{s}=a^{rs}$ for $a>0$ ([[lem-rational-power-laws]]).

[F23] Integer powers satisfy $a^{1}=a$ ([[def-integer-power]]).

[F24] For the unit direction $v\in S_pM$ and its geodesic
$\gamma_v(s)=\exp_p(sv)$, every $0\le s<c_p(v)$ is a minimizing time, and if
$c_p(v)=+\infty$ every finite radial segment minimizes
([[def-cut-point-and-cut-locus-of-a-point]]).

[F25] For a smooth curve $\gamma$ with $\gamma(0)=x$, its velocity derivation
at $0$ is $\dot\gamma(0)([f])=(f\circ\gamma)'(0)$
([[def-velocity-derivation-of-a-smooth-curve]]).

## Proof

**Proof technique:** direct. The differential of the composite
$r_p\circ\exp_p=N_p$ is computed from the derivative of the pointwise norm
along lines, and Gauss's lemma identifies the resulting pairing with
$g(\dot\gamma(t),\cdot)$; surjectivity of $d(\exp_p)_{tv}$ upgrades the pairing
identity on the image to the characterizing identity of the gradient.

1.1 Setup, and the identification of $u$ with $\dot\gamma(t)$. [A1, F1, F2, F4, F5, F6, F7, F11, F24, F25]
By [F4] and [F5], $\mathcal E_p=T_pM$ and $\exp_p:T_pM\to M$ is smooth. By
[F6], $t\in I_{p,v}$ and $\exp_p(tv)=\gamma(t)$; by [F7], $\gamma$ is the
unique maximal geodesic with $\gamma(0)=p$ and $\dot\gamma(0)=v$, and it is
smooth. Since $v\in S_pM$ and $0<t<c_p(v)$, the vector $w_0=tv$ lies in
$D_p$, so [F2] puts $q=\exp_p(w_0)$ in the open submanifold
$U:=M\setminus(\{p\}\cup\operatorname{Cut}(p))$, on which $r_p$ is smooth by
[F1]; hence $\operatorname{grad}r_p(q)$ is defined by [F19]. The segment
$\gamma|_{[0,t]}$ is minimizing by [F24]. For the velocity, consider the
smooth curve $c(s):=w_0+sv$ in the vector space $T_pM$, so that $c(0)=w_0$ and
$\dot c(0)=v$ under the canonical identification
$T_{w_0}(T_pM)\cong T_pM$ [F25]. Since $\exp_p(c(s))=\exp_p((t+s)v)=\gamma(t+s)$
by [F6], [F11] gives $d(\exp_p)_{w_0}(v)=(d/ds)|_{0}\,(\exp_p\circ c)(s)
=\dot\gamma(t)$, that is, $u=\dot\gamma(t)$ [F25].

1.2 The composite and its differential. [F1, F2, F5, F8, F9, F10, F25]
By [F1], $r_p(\exp_p(w))=|w|_g$ for every $w\in D_p$, and by [F2] the set
$D_p$ is open with $w_0\in D_p$ and $\exp_p(w_0)=q$. Both $\exp_p$ (smooth on
$T_pM$ by [F5] and [F4]) and $r_p$ (smooth on $U$ by [F1]) are smooth, so
[F10] applies at $w_0$ and gives
$d(r_p\circ\exp_p)_{w_0}=d(r_p)_q\circ d(\exp_p)_{w_0}$. Because
$r_p\circ\exp_p$ agrees on the open set $D_p$ with the function $N_p$ of [F9],
which is smooth on $T_pM\setminus\{0_p\}$ by [F8] and defined at the nonzero
vector $w_0$ (as $t>0$ and $v\neq 0$), we obtain the identity of linear maps
$$d(r_p)_q\circ d(\exp_p)_{w_0}=d(N_p)_{w_0}:T_pM\to\mathbb R,$$
where both sides are read through the canonical identification
$T_{w_0}(T_pM)\cong T_pM$ [F25].

1.3 The derivative of the squared norm along a line. [F14, F15, F18]
Fix $X\in T_pM$ and put $Q(w):=g_p(w,w)$, so that $Q$ is a quadratic form on
$T_pM$ [F18]. Along $c(s)=w_0+sX$, bilinearity and symmetry of $g_p$ [F18]
give
$$Q(c(s))=g_p(w_0,w_0)+2s\,g_p(w_0,X)+s^2 g_p(X,X);$$
the right-hand side is a polynomial in $s$ with constant term $Q(w_0)$,
linear coefficient $2g_p(w_0,X)$ and quadratic coefficient $Q(X)$, so by the
sum, scalar and product rules [F14] together with the power derivatives
$p_0'=0$, $p_1'=1$, $p_2'(0)=0$ [F15] its derivative at $0$ is
$2g_p(w_0,X)$. Since $Q\circ c$ is that polynomial, $(Q\circ c)'(0)=2g_p(w_0,X)$;
this is a statement about one real function of $s$ and needs no smoothness of
$Q$ beyond the polynomial displayed.

2.1 The differential of the pointwise norm. [F8, F9, F11, F12, F13, F18, F20, F21, F22, F23, step 1.3]
Fix $X\in T_pM$ and let $c(s)=w_0+sX$ as in step 1.3. Since $c(0)=w_0\neq0$,
the vector $c(s)$ is nonzero for all sufficiently small $s$; for those $s$
the pointwise norm is positive and, by [F9] and [F21],
$$N_p(c(s))=g_p(c(s),c(s))^{1/2}=\bigl(Q(c(s))\bigr)^{1/2}.$$
Write $\psi:=Q\circ c$, a real function differentiable at $0$ with
$\psi(0)=Q(w_0)=|w_0|_g^2=(t\,|v|_g)^2=t^2>0$, the homogeneity
$|tv|_g=t\,|v|_g$ being [F20], and with $\psi'(0)=2g_p(w_0,X)$ by step 1.3.
The real chain rule [F13] applied to $N_p\circ c=\psi^{1/2}$ and the power
derivative [F12] with exponent $\alpha=1/2$ give
$$(N_p\circ c)'(0)=\frac12\,\psi(0)^{-1/2}\,\psi'(0)=\frac{g_p(w_0,X)}{\psi(0)^{1/2}}.$$
Here $\psi(0)^{1/2}=(t^2)^{1/2}=t^{2\cdot(1/2)}=t^{1}=t$ by [F22] and [F23],
and $g_p(w_0,X)=t\,g_p(v,X)$ by bilinearity [F18] with $w_0=tv$, so
$(N_p\circ c)'(0)=g_p(v,X)$. By [F11],
$$d(N_p)_{w_0}(X)=g_p(v,X).$$

3.1 The pairing identity and the conclusion. [F3, F16, F17, F18, F19, step 1.2, step 2.1]
Fix $X\in T_pM$ and put $Y:=d(\exp_p)_{w_0}(X)\in T_qM$. Gauss's lemma [F3]
applied at the base vector $w_0\in\mathcal E_p=T_pM$ with the vector $X$ gives
$g_q\bigl(d(\exp_p)_{w_0}(w_0),d(\exp_p)_{w_0}(X)\bigr)=g_p(w_0,X)$. Since
$w_0=tv$, linearity of the differential [F17] gives
$d(\exp_p)_{w_0}(w_0)=t\,d(\exp_p)_{w_0}(v)=t\,u$, so bilinearity of $g_q$
[F18] yields
$$g_q(u,Y)=\frac{1}{t}\,g_q\bigl(d(\exp_p)_{w_0}(w_0),Y\bigr)=\frac{g_p(w_0,X)}{t}=g_p(v,X).$$
On the other hand steps 1.2 and 2.1 give
$d(r_p)_q(Y)=d(N_p)_{w_0}(X)=g_p(v,X)$. Hence
$g_q(u,Y)=d(r_p)_q(Y)$ for every $Y$ in the image of $d(\exp_p)_{w_0}$, and
that image is all of $T_qM$ because $\exp_p|_{D_p}$ is a diffeomorphism onto
its image [F2] and the differential of a diffeomorphism is a linear
isomorphism [F16]; so
$$g_q(u,Y)=d(r_p)_q(Y)\qquad\text{for every }Y\in T_qM.$$
Taking $X:=v$ in the same computation gives $Y=u$ and
$g_q(u,u)=g_p(v,v)=1$; hence $|u|_g=\sqrt{g_q(u,u)}=1$ by [F9] and [F21].
Finally, [F19] says that $(\operatorname{grad}r_p)(q)$ is the vector with
$g_q((\operatorname{grad}r_p)(q),Y)=d(r_p)_q(Y)$ for every $Y$; if two vectors
$u,u'$ have this property then $g_q(u-u',Y)=0$ for every $Y$ by bilinearity
[F18], and $Y:=u-u'$ gives $g_q(u-u',u-u')=0$, so $u=u'$ by positive
definiteness [F18]. Therefore
$\operatorname{grad}r_p(q)=u=\dot\gamma(t)=d(\exp_p)_{tv}(v)$ [step 1.1], a
unit vector.

4.1 Boundary, endpoint and choice audit. [A1, F1, F2, F3, F4, F24, step 1.1, step 3.1]
In dimension zero $S_pM=\varnothing$, there is no unit direction $v$, and the
assertion is vacuous; the empty manifold carries no base point $p$. The
parameter range $0<t<c_p(v)$ is open, and both endpoints are genuinely
excluded: at $t=0$ the point is $q=p$, where $r_p$ is not smooth and
$\operatorname{grad}r_p$ is not defined, while at $t=c_p(v)<+\infty$ the point
$q$ lies in $\operatorname{Cut}(p)$ and $tv\notin D_p$, so the restricted
diffeomorphism $\exp_p|_{D_p}$ of [F2] does not include $q$; the infinite cut time $c_p(v)=+\infty$ is allowed, and then every
$t>0$ is covered by [F24] and [F2]. The unit hypothesis $|v|_g=1$ is exactly
what makes $u$ unit, while $t>0$ permits division by $t$. For any
$W\in D_p$ (including nonunit $W$), set $v=W/|W|_g$ and $t=|W|_g$;
then $0<t<c_p(v)$ and the same computation gives
$\operatorname{grad}r_p(\exp_p(W))=d(\exp_p)_W(W)/|W|_g$, the radial unit
field. Degenerate directions $X=0$ are harmless: then $Y=0$, both sides
vanish, and step 1.3's polynomial has $B=C=0$. The zero vector is never used,
because $w_0\neq0$ and $N_p$ is smooth off zero [F3, F8]. Assumption [A1] is
inherited exactly through the exponential, cut-time, Hopf-Rinow, Gauss and
distance suppliers, and no further selection is made: $X$ is fixed, the
inverse of the linear isomorphism in step 3.1 is a function, and no choice
function is invoked. The statement is an equality of vectors with a norm
assertion; it contains no biconditional, and the only equivalence invoked,
[F6], is used in both directions of its stated formula for the single pair
$(p,v)$. Compactness of $M$ and positivity of the injectivity radius are
never used. [A1, F1, F2, F3, F4, F8, F24, step 1.1, step 3.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed
pp.173-190, treats geodesics and the distance function up to the cut point;
Datar, *Lectures on Riemannian Geometry*, Section 18.1, printed pp.134-136,
records that the gradient of the distance in polar normal coordinates is the
radial unit field, and Section 23.2, printed pp.167-169, fixes the radial
domain before the cut locus. The proof above derives the identity from the
library's Gauss lemma, chain rule and norm-gradient suppliers; no source text
is quoted.
