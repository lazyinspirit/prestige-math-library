---
id: ex-hyperelliptic-double-cover-ramification
kind: example
title: Hyperelliptic double covers and their genus
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - lem-local-holomorphic-logarithm-nonvanishing-function-on-disc
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - def-ramification-index-and-branch-value
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - thm-riemann-hurwitz-formula
  - thm-heine-borel-rn
  - def-axiom-of-choice
  - def-riemann-surface-and-holomorphic-atlas
  - def-riemann-sphere-holomorphic-charts
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - thm-holomorphic-implicit-function-theorem
  - thm-continuous-image-of-a-compact-space-is-compact
  - def-genus-and-euler-characteristic-compact-riemann-surface
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 1 §2 (algebraic curve examples), Ch. 4 §§2–3 (double covers, ramification and the hyperelliptic genus count), printed pp. 9–11 and 43–46."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Chs. 2–3 and 6: hyperelliptic curves y^2=P(x) as branched double covers of the sphere and their genus by Riemann–Hurwitz."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume the Axiom of Choice. Let $g\ge1$, let $m$ be $2g+1$ or $2g+2$, and let
$$P(x)=\prod_{j=1}^{m}(x-a_j)$$
be a squarefree polynomial with distinct roots $a_1,\dots,a_m$. Then the affine
curve $X_0=\{(x,y)\in\mathbb C^2:y^2=P(x)\}$, completed at infinity by the
charts below, is a connected compact Riemann surface $X$, and the projection
$$\pi:X\to\widehat{\mathbb C},\qquad (x,y)\mapsto x,\qquad \infty_\pm\mapsto\infty\ (\text{or } \infty\mapsto\infty),$$
is a degree-two holomorphic map. The $m$ finite roots $a_j$ are simple branch
values with exactly one point of index $2$ above each; infinity is unbranched
(two points of index $1$) when $m=2g+2$ and branched (one point of index $2$)
when $m=2g+1$. Riemann–Hurwitz therefore gives
$$2g(X)-2=2\,(0-2)+(2g+2),$$
that is, $g(X)=g$ in both cases.

## Facts & Assumptions

**Given:** $g\ge1$; $m\in\{2g+1,2g+2\}$; distinct $a_1,\dots,a_m\in\mathbb C$; $P(x)=\prod_j(x-a_j)$; the affine curve $X_0=\{y^2=P(x)\}$.

[F1] A Riemann surface is a connected Hausdorff second-countable space with a holomorphic atlas, and a map of Riemann surfaces is holomorphic when its chart expressions are holomorphic ([[def-riemann-surface-and-holomorphic-atlas]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F2] Local normal form and ramification index: for a nonconstant holomorphic map of Riemann surfaces there are centred charts in which the map is $w\mapsto w^{e}$, and $e_x(f)$ is that exponent; $e_x(f)=1$ exactly when $f$ is a local biholomorphism at $x$ ([[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[def-ramification-index-and-branch-value]]).

[F3] A nowhere-vanishing holomorphic function $u$ on a disc has a holomorphic logarithm, hence a holomorphic square root $\rho$ with $\rho^2=u$ ([[lem-local-holomorphic-logarithm-nonvanishing-function-on-disc]]).

[F4] Holomorphic implicit function theorem: if $F$ is holomorphic near a point, $F=0$ there and some partial derivative of $F$ is nonzero, then the zero set is locally a holomorphic graph in the complementary variable ([[thm-holomorphic-implicit-function-theorem]]).

[F5] The standard charts of $\widehat{\mathbb C}$ are $\phi_0(z)=z$ on $\mathbb C$ and $\phi_\infty(z)=1/z$ at infinity ([[def-riemann-sphere-holomorphic-charts]], [[def-riemann-surface-and-holomorphic-atlas]]).

[F6] Degree of a proper nonconstant holomorphic map of connected Riemann surfaces: $d=\sum_{x\in f^{-1}(y)}e_x(f)$ for every $y$, independent of $y$ ([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).

[F7] Riemann–Hurwitz: $2g(X)-2=d(2g(Y)-2)+\sum_{x}(e_x-1)$ for a degree-$d$ nonconstant holomorphic map of compact connected Riemann surfaces, the sum being finite ([[thm-riemann-hurwitz-formula]]).

[F8] Stereographic projection identifies $\widehat{\mathbb C}$ homeomorphically with $S^2$ ([[thm-stereographic-projection-riemann-sphere-homeomorphism]]); hence its genus is $0$ by [[def-genus-and-euler-characteristic-compact-riemann-surface]].

[F9] Heine–Borel: a subset of $\mathbb R^n$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]); the continuous image of a compact space is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[F10] The Axiom of Choice ([[def-axiom-of-choice]]).


## Verification

**Proof technique:** direct.

1.1 (The affine curve is a smooth Riemann surface chart-by-chart.) Let $F(x,y)=y^2-P(x)$, whose gradient $(2y,-P'(x))$ vanishes at a point of $X_0$ only if $y=0$, $P(x)=0$ and $P'(x)=0$, that is, only at a multiple root of $P$; since the $a_j$ are distinct, this never happens on $X_0$. Hence at every point of $X_0$ some partial derivative of $F$ is nonzero and [F4] exhibits a local holomorphic chart: where $y\ne0$ the curve is a graph $y=\pm\sqrt{P(x)}$ over $x$ near a point with $P(x)\ne0$, and where $y=0$ and $x=a_j$ the curve is a graph over $y$ near $(a_j,0)$, because $x-a_j=y^2/P'(a_j)+O(y^3)$ can be solved holomorphically for $x$. Chart changes are restrictions of the holomorphic functions $x$ and $y$, hence holomorphic. Thus $X_0$ is a complex 1-manifold. [F4, given]

1.2 (Completion at infinity by explicit charts.) Write $t=1/x$ and $v=y/x^{g+1}$, so that on $X_0$ with $x\ne0$ one has $v^2=P(1/t)\,t^{2g+2}$.

Even case $m=2g+2$: $v^2=Q(t):=\prod_{j=1}^m(1-a_jt)$ with $Q(0)=1$; by [F3] choose a holomorphic square root $\rho$ of $Q$ on a disc $|t|<\varepsilon$, and add the two points $\infty_\pm$ with charts $t\mapsto(t,\pm\rho(t))$, $t$ near $0$, whose images are the branches of the curve over the punctured disc $|x|>1/\varepsilon$. The transition to the affine chart is $(x,y)=(1/t,\pm\rho(t)t^{-(g+1)})$ with $t=1/x$, holomorphic on the overlap.

Odd case $m=2g+1$: $v^2=tR(t)$ with $R(t)=\prod_j(1-a_jt)$ and $R(0)=1$; by [F3] choose $\rho$ with $\rho^2=R$ and put $s=v/\rho(t)$, so that $s^2=t$. Add the single point $\infty$ with coordinate $s$ near $0$; in the $(t,v)$ coordinates this chart is $s\mapsto(s^2,s\rho(s^2))$. For $s\ne0$ its affine overlap is $(x,y)=(s^{-2},s^{-(2g+1)}\rho(s^2))$, because $y=v/t^{g+1}$. Conversely, on this overlap $s=y/(x^{g+1}\rho(1/x))$, so both transition directions are holomorphic. The chart describes the curve over $|x|>1/\varepsilon$.

In both cases the completion $X=X_0\cup\{\text{infinity point(s)}\}$ with these charts is a Hausdorff second-countable space with holomorphic transitions, hence a Riemann surface once connectedness is known. [F1, F3, F5, given]

2.1 (Compactness.) Choose $0<r<\varepsilon$ small enough that the infinity charts of step 1.2 are defined for $|t|\le r$, and put $R=1/r$. In either parity, for $|x|\le R$ one has $|y|^2=|P(x)|\le\max_{|x|\le R}|P(x)|$, the maximum being finite because $|P|$ is continuous on the compact disc and its image is compact, hence bounded by [F9]. Thus the affine piece with $|x|\le R$ is a closed bounded subset of $\mathbb C^2$, hence compact by [F9]. Every remaining affine point has $|x|>R$, equivalently $0<|t|<r$, and so lies in an infinity chart. In the even case, the images of the two closed chart discs $|t|\le r$ are compact and cover this end together with both added points. In the odd case, the image of the closed chart disc $|s|\le\sqrt r$ is compact and covers the end, since $t=s^2$, together with its added point. Therefore $X$ is the union of finitely many compact sets and is compact. [F9, step 1.2]

2.2 (Connectedness.) The projection $\pi$ restricts over $\mathbb C\setminus\{a_1,\dots,a_m\}$ to a two-sheeted covering: over each $x$ there the two points $(x,\pm\sqrt{P(x)})$ are distinct. If this covering had two components, each would be one-sheeted over the connected base, giving a single-valued holomorphic branch $y$ on $\mathbb C\setminus\{a_1,\dots,a_m\}$ with $y^2=P$. Now write $P=(x-a_j)u$ near $a_j$ with $u(a_j)\ne0$ and $\rho^2=u$ by [F3]; on the punctured disc the two branches of $y$ are $\pm w\,\rho(x)$ where $w^2=x-a_j$. On the circle $x=a_j+\epsilon e^{i\theta}$, $0\le\theta\le2\pi$, a continuous branch is $w=\epsilon^{1/2}e^{i\theta/2}$, and $w$ changes sign in the round trip while $\rho$ returns to itself; hence analytic continuation of the germ $y$ around this loop (which lies in $\mathbb C\setminus\{a_1,\dots,a_m\}$) returns the germ $-y$, not $y$. A globally defined single-valued holomorphic function cannot have this behaviour: its continuation along any closed loop is itself. This contradiction shows the covering is connected; since the omitted fibres over the $a_j$ and the infinity points of step 1.2 are limit points of that connected part, $X$ is connected. [F1, F3, step 1.2]

2.3 (Ramification at infinity.) Even case: in the chart $(t,v)$ of step 1.2 the target chart $\phi_\infty$ of [F5] reads $x\mapsto t$, so the chart expression of $\pi$ is $t\mapsto t$ and both points $\infty_\pm$ have index $1$: infinity is not a branch value. Odd case: in the $s$-chart of step 1.2 the target chart reads $t=s^2$, so the single point $\infty$ has index $2$ and infinity is a branch value. [F2, F5, step 1.2]

3.1 ($\pi$ is a degree-two proper holomorphic map.) In the charts of steps 1.1 and 1.2 the map $\pi$ has holomorphic expressions: $x$ in the affine charts and, in the infinity charts, respectively $t\mapsto t$ and $s\mapsto s^2$ towards the target chart $\phi_\infty$ of [F5]. Hence $\pi$ is holomorphic; it is nonconstant, and since $X$ is compact by step 2.1 it is proper because preimages of compact sets are closed in $X$, hence compact. Therefore the degree formula [F6] applies. Take a value $b\in\mathbb C\setminus\{a_1,\dots,a_m\}$: its preimage is the two points $(b,\pm\sqrt{P(b)})$, at each of which the chart expression of $\pi$ is the identity in the affine coordinate, so both indices are $1$; hence $\deg\pi=2$. [F2, F5, F6, step 1.1, step 2.1]

4.1 (The finite roots are simple branch values.) Fix $j$ and write $P=(x-a_j)u$ with $u(a_j)\ne0$, $\rho^2=u$ by [F3]. The only point of $X$ over $a_j$ is $(a_j,0)$, and near it the chart $w\mapsto(a_j+w^2,\ w\,\rho(a_j+w^2))$ presents the curve, with chart expression $w\mapsto w^2$ for $\pi$: thus $\pi^{-1}(a_j)$ is a single point of index $2$ by [F2]. Since a point of index $2$ is a critical point with branch value $a_j$, and the $a_j$ are distinct, the $m$ finite branch values are exactly the roots of $P$, each the image of one point of index $2$, and every other finite value has the two preimages of index $1$ from step 3.1. [F2, F3, step 3.1]

5.1 (Riemann–Hurwitz gives $g(X)=g$.) The map $\pi$ is nonconstant holomorphic of degree $2$ between compact connected Riemann surfaces by steps 1.1, 1.2, 2.1 and 2.2, so [F7] applies with $Y=\widehat{\mathbb C}$: $2g(X)-2=2(2g(\widehat{\mathbb C})-2)+\sum_x(e_x(\pi)-1)$, the sum being finite. By the stereographic homeomorphism in [F8], $\widehat{\mathbb C}\cong S^2$, so the genus definition in [F8] gives $g(\widehat{\mathbb C})=0$. By steps 4.1 and 2.3 the ramification points are the $m$ roots, each contributing $2-1=1$, together with the point at infinity in the odd case, contributing $1$; hence the sum is $m$ for even $m$ and $m+1$ for odd $m$, equal to $2g+2$ in both cases. Therefore $2g(X)-2=2(-2)+(2g+2)=2g-2$, so $g(X)=g$. [F7, F8, step 4.1, step 2.3]

6.1 (Conclusion and choice.) The charts, the branch points and the ramification indices are all computed explicitly from the polynomial and its finitely many roots, so this example uses no choice principle; the Axiom of Choice is inherited only through the genus interface [F8] used in [F7], as [F10] records. [F7, F8, F10, step 5.1] ∎


## Remarks

The two parities of $m$ are geometrically different: for $m=2g+2$ the curve
meets infinity in two unramified points, the standard hyperelliptic model of a
genus-$g$ surface, while for $m=2g+1$ the two ends meet in a single ramified
point. The total ramification is $2g+2$ in either case, which is exactly what
the sphere target can absorb: Riemann–Hurwitz reads
$2g(X)-2=-4+(2g+2)$. The example also shows that the genus requirement
$g\ge1$ is the statement $m\ge3$: for $m=1,2$ the same construction gives the
sphere, and the formula still holds there, but those cases are the elementary
square-root surfaces already visible over a single chart.
