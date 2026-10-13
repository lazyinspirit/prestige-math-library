---
id: ex-gr-shearing-congruence-tetrad-and-adapted-chart
kind: example
title: "A shearing observer congruence on flat spacetime: tetrad, adapted chart and non-coordinate frame"
status: published
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-congruence-and-adapted-charts, def-gr-local-frame-and-tetrad-fields, def-gr-smooth-lorentzian-objects, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-algebra-of-derivatives, cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image, prop-coordinate-formula-for-the-lie-bracket]
dependency_roles:
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image: mathematical-premise
  prop-coordinate-formula-for-the-lie-bracket: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 'tetrads and non-coordinate bases' (printed pp. 88-91; PDF pp. 95-98) and Ch. 4 'physics in curved spacetime' (printed pp. 104-106; PDF pp. 111-113)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 1.9 on integral curves (printed pp. 21-22; PDF pp. 22-23)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart $x$ and the flat Lorentzian metric
$g=\operatorname{diag}(-1,1,1,1)$ with time orientation $N=\partial_0$. Fix
$\lambda>0$ and put

$$W:=\{(x^0,x^1,x^2,x^3):\lvert\lambda x^1\rvert<1/2\},\qquad \Omega:=\lambda x^1,\qquad \gamma:=(1-\Omega^2)^{-1/2}>0 .$$

Define the smooth fields on $W$

$$E_0:=\gamma(\partial_0+\Omega\partial_2),\quad E_1:=\partial_1,\quad E_2:=\gamma(\Omega\partial_0+\partial_2),\quad E_3:=\partial_3 .$$

Then $(E_0,E_1,E_2,E_3)$ is a future-directed tetrad field on $W$, its first
member $n:=E_0$ is an observer congruence, the chart
$u:=(x^0,\,x^1,\,x^2-\Omega(x^1)x^0,\,x^3)$ is $n$-adapted with
$\partial_{u^0}=n/\gamma$, and the tetrad is not the coordinate frame of any
chart, because
$[E_0,E_1]=-\gamma'\partial_0-(\gamma\Omega)'\partial_2$ is nonzero at every
point of $W$ with $x^1\neq0$, where $\gamma'=\gamma^3\lambda^2x^1$.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart $x$, time orientation $N=\partial_0$, parameters $\lambda>0$, $\Omega=\lambda x^1$, $\gamma=(1-\Omega^2)^{-1/2}$ on the open set $W=\{|\Omega|<1/2\}$, and the four fields $E_0,E_1,E_2,E_3$.

[L1] On $\mathbb R^4$ with the flat metric the coordinate fields satisfy $g(\partial_a,\partial_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, and a nonzero causal vector is future-directed exactly when $g(v,N)<0$ ([[def-gr-smooth-lorentzian-objects]]).

[L2] A tetrad field on an open set is a tuple of four pointwise independent smooth vector fields with $g(E_A,E_B)=\operatorname{diag}(-1,1,1,1)_{AB}$ pointwise; the coordinate frame of a chart has pairwise commuting members, so a frame with some nonvanishing bracket is not the coordinate frame of any chart ([[def-gr-local-frame-and-tetrad-fields]]).

[L3] An observer congruence on an open set is a smooth field $n$ with $g(n,n)=-1$ and future-directed values; a chart is $n$-adapted when its spatial coordinates are constant along every integral curve of $n$ ([[def-gr-observer-congruence-and-adapted-charts]]).

[L4] A vector field is smooth exactly when its coordinate components are smooth ([[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[L5] Finite sums, products and composites of $C^\infty$ functions are $C^\infty$ on their domains ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[L6] The squaring map $u\mapsto u^2$ is injective on $(0,\infty)$ with derivative $2u\neq0$ there, so by the injective-regular-map theorem its inverse $u\mapsto u^{1/2}$ is $C^\infty$ on $(0,\infty)$; the reciprocal $u\mapsto u^{-1}$ is $C^\infty$ on $(0,\infty)$ by the iterated product and quotient rules ([[cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image]], [[thm-algebra-of-derivatives]]).

[L7] In a chart, $[X,Y]=\sum_j\bigl(\sum_iX^i\partial_iY^j-Y^i\partial_iX^j\bigr)\partial_j$ ([[prop-coordinate-formula-for-the-lie-bracket]]).

## Verification

**Proof technique:** direct.

1.1 The set $W$ is open and $1-\Omega^2>3/4>0$ on $W$. By [L6] the function $u\mapsto u^{-1/2}$ is $C^\infty$ on $(0,\infty)$, so $\gamma$ is $C^\infty$ on $W$ as a composite with the polynomial $1-\Omega^2$, and $\Omega,\gamma,\gamma\Omega$ are $C^\infty$ on $W$ by [L5]. [L5, L6, given]

2.1 The fields $E_0,\dots,E_3$ have $C^\infty$ components in the chart $x$ by step 1.1, hence are smooth vector fields on $W$ by [L4]. Moreover $g(n,n)=\gamma^2(-1+\Omega^2)=-1$ and $g(n,N)=g(\gamma(\partial_0+\Omega\partial_2),\partial_0)=-\gamma<0$, so $n=E_0$ is future unit timelike; by [L3] it is an observer congruence on $W$. [step 1.1, L1, L3, L4, algebra]

3.1 Evaluating $g$ on the fields gives: $g(E_0,E_0)=\gamma^2(-1+\Omega^2)=-1$; $g(E_2,E_2)=\gamma^2\bigl(\Omega^2g(\partial_0,\partial_0)+g(\partial_2,\partial_2)\bigr)=\gamma^2(1-\Omega^2)=1$; $g(E_0,E_2)=\gamma^2\bigl(\Omega g(\partial_0,\partial_0)+\Omega g(\partial_2,\partial_2)\bigr)=\gamma^2(-\Omega+\Omega)=0$; $g(E_1,E_1)=g(E_3,E_3)=1$; and every pairing involving $E_1=\partial_1$ or $E_3=\partial_3$ vanishes because $\partial_1,\partial_3$ are orthogonal to $\partial_0,\partial_2$. Hence $g(E_A,E_B)=\operatorname{diag}(-1,1,1,1)_{AB}$ pointwise, and the tuple is a tetrad field by [L2]; it is future-directed because $E_0=n$ is. [step 2.1, L2, algebra]

3.2 An integral curve of $n$ satisfies $\dot x^0=\gamma$, $\dot x^1=0$, $\dot x^2=\gamma\Omega$, $\dot x^3=0$; along such a curve $x^1$ is constant, so the values $\gamma$, $\Omega$ are constant on it, and therefore $x^3$ is constant and $\frac{d}{ds}(x^2-\Omega x^0)=\gamma\Omega-\Omega\gamma=0$. Thus $x^1$, $x^3$ and $x^2-\Omega(x^1)x^0$ are constant along every integral curve. [step 2.1, algebra]

4.1 The map $u=(u^0,u^1,u^2,u^3):=(x^0,x^1,x^2-\Omega(x^1)x^0,x^3)$ has the explicit smooth inverse $x^0=u^0$, $x^1=u^1$, $x^2=u^2+\Omega(u^1)u^0$, $x^3=u^3$ on its image, so it is a chart; by step 3.2 its spatial coordinates are constant along the integral curves of $n$, so the chart is $n$-adapted by [L3]. In these coordinates $\partial_{u^0}=\partial_0+\Omega\partial_2=n/\gamma$, so the coordinate field of the adapted chart is $n/\gamma$, not $n$. [step 3.2, L3, algebra]

5.1 By [L7], the bracket of $E_0=\gamma\partial_0+\gamma\Omega\partial_2$ and $E_1=\partial_1$ is $[E_0,E_1]^j=\sum_i\bigl(E_0^i\partial_iE_1^j-E_1^i\partial_iE_0^j\bigr)=-\partial_1E_0^j$, so $[E_0,E_1]=-\partial_1(\gamma)\partial_0-\partial_1(\gamma\Omega)\partial_2=-\gamma'\partial_0-(\gamma\Omega)'\partial_2$. Since $\gamma=(1-\Omega^2)^{-1/2}$ and $\Omega=\lambda x^1$, the chain and power rules give $\gamma'=\gamma^3\Omega\Omega'=\gamma^3\lambda^2x^1$, which is nonzero at every point of $W$ with $x^1\neq0$; hence $[E_0,E_1]\neq0$ at such points. By the commuting necessary condition of [L2], the tetrad field is not the coordinate frame of any chart. [step 4.1, L2, L7, algebra] ∎

## Remarks

The congruence is a shearing motion: its observers move in the $\partial_2$
direction with a speed $\Omega$ that depends on $x^1$. The example shows in one
place that congruence, adapted chart, tetrad field and coordinate frame are
four different objects: an adapted chart exists while the tetrad is not a
coordinate frame, and the adapted chart does not have $n$ as a coordinate
field. Integrability of the rest spaces of this congruence is decided by the
separate counterexample on this page.
