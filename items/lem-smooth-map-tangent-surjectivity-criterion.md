---
id: lem-smooth-map-tangent-surjectivity-criterion
kind: lemma
title: "The submersion criterion between smooth varieties"
status: draft
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-base-change-morphism-schemes
  - def-classical-algebraic-prevariety-regular-maps-and-varieties
  - def-dimension-classical-variety
  - def-locally-finite-type-and-finite-type-morphism
  - def-scheme-theoretic-fibre
  - def-smooth-morphism-classical
  - def-zariski-tangent-space-point
  - lem-local-dimension-reduced-variety-components
  - lem-tangent-space-functoriality-classical
  - thm-ag-submersion-criterion-standard-smooth
  - thm-fibre-products-of-schemes-exist
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Classes 51–52, §2.2, Trickier Exercise"
      url: "https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf"
    - title: "The Stacks Project, Algebra Lemma 10.128.2 (tag 07DY), regular parameters mapping to a regular sequence imply flatness"
      url: "https://stacks.math.columbia.edu/tag/07DY"
---

## Statement

Assume the Axiom of Choice. Let $k$ be algebraically closed and let $X,Y$ be
smooth classical varieties over $k$, with their finite-type $k$-scheme
structures. Assume their structure morphisms are smooth in the sense of
[[def-smooth-morphism-classical]]. Let $f:X\to Y$ be a finite-type morphism
of these $k$-schemes ([[def-locally-finite-type-and-finite-type-morphism]])
and let $x\in X$ be a classical
closed point with $y=f(x)$. All such points have residue field $k$. Here
“smooth at $x$” means that the induced scheme morphism is locally standard
smooth at $x$ ([[def-smooth-morphism-classical]]); the structural morphisms
$X\to\operatorname{Spec}k$ and $Y\to\operatorname{Spec}k$ are locally
standard smooth at $x$ and $y$, respectively. Then $f$ is smooth at $x$ if
and only if its differential
$$d_xf:T_xX\longrightarrow T_yY$$
is surjective. If these equivalent conditions hold, the scheme-theoretic
fibre $X_y=X\times_Y\operatorname{Spec}k$ has a regular local ring at $x$
of dimension $\dim_xX-\dim_yY$.
For every such $f$ (whether or not it is smooth at $x$), its fibre tangent
space is canonically
$$T_x(X_y)=\ker(d_xf).$$

## Facts & Assumptions

**Given:** AC; an algebraically closed field $k$; smooth classical varieties
$X,Y$ over $k$; their locally standard-smooth structural morphisms; a
finite-type morphism $f:X\to Y$; and a classical closed point $x\in X$ with
$y=f(x)$. Write $C_xX=\mathfrak m_x/\mathfrak m_x^2$ and
$C_yY=\mathfrak m_y/\mathfrak m_y^2$ for the cotangent spaces of the local
scheme charts.

[F1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice
function.

[F2] [[def-classical-algebraic-prevariety-regular-maps-and-varieties]]:
classical varieties here are over an algebraically closed field; their
classical points have residue field $k$, and regular maps respect the
$k$-algebra structures.

[F3] [[def-dimension-classical-variety]]: for a classical closed point $z$,
$\dim_zZ$ is the maximum of the dimensions of the irreducible components of
$Z$ containing $z$.

[F4] [[lem-local-dimension-reduced-variety-components]]: for a reduced
classical finite-type variety and a closed point $z$,
$\dim\mathcal O_{Z,z}=\dim_zZ$.

[F5] [[def-smooth-morphism-classical]]: smoothness of a finite-type
$k$-scheme morphism is defined locally by standard smooth presentations;
pointwise smoothness at $z$ is the standard-smooth condition at its prime
after shrinking.

[F6] [[def-locally-finite-type-and-finite-type-morphism]]: a morphism is of
finite type when it is locally of finite type and quasi-compact.

[F7] [[def-zariski-tangent-space-point]]: at a rational point,
$T_zZ=\operatorname{Hom}_k(\mathfrak m_z/\mathfrak m_z^2,k)$; these spaces
are finite-dimensional for locally finite-type schemes over $k$.

[F8] [[lem-tangent-space-functoriality-classical]]: for a $k$-morphism at
rational points, the differential is the dual of the induced cotangent map
and agrees with post-composition on based dual-number points.

[F9] [[thm-ag-submersion-criterion-standard-smooth]]: under AC, if $X,Y$ are
locally standard smooth over $k$ at rational $x,y=f(x)$ and $f$ is of finite
type, then $f$ is locally standard smooth at $x$ iff
$C_yY\to C_xX$ is injective.

[F10] [[thm-ag-submersion-criterion-standard-smooth]]: in the smooth case
the fibre local ring is regular of dimension
$\dim\mathcal O_{X,x}-\dim\mathcal O_{Y,y}$.

[F11] [[def-scheme-theoretic-fibre]]: $X_y$ is
$X\times_Y\operatorname{Spec}\kappa(y)$, viewed as a
$\kappa(y)$-scheme; here $\kappa(y)=k$.

[F12] [[def-base-change-morphism-schemes]]: base change uses the fibre
product $X\times_Y\operatorname{Spec}k$ and its projection maps.

[F13] [[thm-fibre-products-of-schemes-exist]]: fibre products exist with
their universal property.

## Proof

**Proof technique:** direct.

1.1 Put $C_xX=\mathfrak m_x/\mathfrak m_x^2$ and $C_yY=\mathfrak m_y/\mathfrak m_y^2$, and let $\alpha:C_yY\to C_xX$ be the cotangent map induced by $f$. By [F2], $x,y$ are $k$-rational; by [F5] their structural smoothness assumptions give standard-smooth charts, and [F6] records that $f$ is finite type. Hence [F9] applies and says $f$ is smooth at $x$ exactly when $\alpha$ is injective. [F2, F5, F6, F9, given]

2.1 By [F7], $C_xX$ and $C_yY$ are finite-dimensional; the differential is $d_xf=\alpha^*$ by [F8]. A linear map and its dual have equal rank, so $\alpha$ is injective iff $\operatorname{rank}(\alpha)=\dim C_yY=\dim T_yY=\operatorname{rank}(\alpha^*)$, iff $d_xf$ is surjective. With step 1.1 this proves both directions. [F7, F8, step 1.1, algebra]

3.1 If these equivalent conditions hold (step 2.1), [F10] gives a regular local ring for the scheme-theoretic fibre at $x$, of dimension $\dim\mathcal O_{X,x}-\dim\mathcal O_{Y,y}$. By [F3] and [F4], these stalk dimensions equal $\dim_xX$ and $\dim_yY$. This proves the stated local fibre dimension; no regularity at other fibre points is asserted. [F3, F4, F10, step 2.1, given, algebra]

3.2 Let $D=\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$. By [F8], $v\in T_xX$ is represented by a based map $\gamma:D\to X$, and $d_xf(v)$ by $f\circ\gamma$. By [F11]–[F13] and the fibre-product universal property, based maps $D\to X_y$ at $x$ correspond to based $\gamma:D\to X$ whose composite is the constant map $D\to\operatorname{Spec}k\xrightarrow{y}Y$. That constant map represents zero in $T_yY$, so these are exactly the $v$ with $d_xf(v)=0$. The correspondence is linear and canonical, proving $T_x(X_y)=\ker(d_xf)$ even when $f$ is not smooth at $x$. [F8, F11, F12, F13, step 2.1, given, algebra]

4.1 If $T_yY=0$, every differential to it is surjective and $C_yY=0$ makes $\alpha$ injective, so [F9] gives smoothness; if $T_xX=0$ but $T_yY\ne0$, neither condition holds, and when both vanish the fibre has local dimension zero. The identity $\mathbb A^1_k\to\mathbb A^1_k$ at $0$ has differential $1$ and point fibre $\operatorname{Spec}k$, regular of dimension zero. For $t\mapsto t^2$ at $0$, the derivative $2t\,dt$ vanishes in every characteristic, so [F8, F9] show the differential is zero and the map is not smooth. Its fibre is $\operatorname{Spec}(k[t]/(t^2))$; since $t$ is nilpotent the only prime is $(t)$, so the local dimension is zero, while its maximal ideal $\mathfrak m=(t)$ has $\mathfrak m^2=0$ and $\mathfrak m/\mathfrak m^2\cong k$. Thus the local ring is not regular and its one-dimensional tangent space is the full kernel. This checks the degenerate case and shows regularity is asserted only under smoothness. If $X$ has no classical points there is no $x$ to check; the dimension difference is nonnegative when $f$ is smooth by steps 2.1 and 3.1. AC is inherited only through [F1], [F4], [F5], and [F9]; linear algebra and the fibre-product argument add no choice principle. [F1, F4, F5, F7, F8, F9, F10, step 2.1, step 3.1, step 3.2, given, algebra] ∎

## Source qualification

Vakil, *Foundations of Algebraic Geometry*, Classes 51–52, §2.2, printed and
PDF p. 5, calls the related result a “Trickier Exercise”: it assumes
pure-dimensional smooth varieties and surjectivity at every closed point,
then asks for smoothness of relative dimension $\dim X-\dim Y$; it gives the
local flatness criterion as a hint, not a proof. The present pointwise proof
uses the complete local argument in [F9], so it does not infer the result
from that exercise or require global pure dimension. Stacks Project Algebra
Lemma 10.128.2 (tag 07DY), statement and proof, independently gives
flatness when parameters of a regular local base map to a regular sequence.
That is corroboration for the parameter-flatness step inside [F9], not a
premise used directly here; the local-flatness and regular-sequence inputs
are proved in the cited published supplier. The separate fibre-tangent
identity above follows from the fibre-product universal property and the
dual-number description.
