---
id: lem-sr-spacelike-pairs-have-frame-dependent-time-order
kind: lemma
title: "Spacelike-separated events: the spacelike coordinate inequality in every inertial chart, and an explicit family of inertial frames realizing every time-order sign"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors, lem-timelike-cone-has-two-convex-components, def-inertial-frame-and-inertial-chart, def-spatial-euclidean-structure-of-an-inertial-frame, def-euclidean-inner-product, def-lorentz-boost, def-lorentz-map-and-lorentz-group, lem-boost-is-proper-orthochronous-with-inverse, lem-lorentz-map-preserves-metric-and-causal-structure, def-linear-isomorphism-and-invertible-linear-map, thm-unique-coordinates-with-respect-to-an-ordered-basis]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
dependency_level: 8
aliases: []
sources:
  references:
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.1-2.3 pp. 25-30 (Minkowski metric (2.6) and inertial frames; timelike, null, spacelike and causal vectors with the light-cone double cone and its two disconnected causal sets; timelike and causal curves; proper time (2.19); curves of extremal proper time, straight lines in inertial frames and the unproved maximization statement); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 5-7 (light cones; timelike, null and spacelike separation; no coordinate-independent future for a spacelike-separated event), Chapter 4 pp. 124-127 (no signals faster than light; information flows only along timelike or null trajectories; future domain of dependence; Misner space with closed timelike curves as a warning about other topologies); PDF page = printed page + 7"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "R. C. Tolman, The Theory of the Relativity of Motion (University of California Press, Berkeley, 1917): Chapter V, Sections 45-52 pp. 49-55 (kinematical rate of a clock, the idea of simultaneity, velocities greater than that of light with the order-of-cause-and-effect reversal formula (28)-(29), and the blocks caveat that kinematic patterns without causal connection are not restricted); Internet Archive full text of the 1917 printing"
      url: "https://archive.org/download/theoryrelativmot00tolmrich/theoryrelativmot00tolmrich_djvu.txt"
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski space
([[def-sr-affine-minkowski-model]]) and let $p,q\in A$ with $p\ne q$ and $q-p$
spacelike ([[def-causal-classification-of-lorentz-vectors]]). Then:

**(a)** In the chart $x$ of every inertial frame the coordinate differences
$D:=x(q)-x(p)$ satisfy $|D^0|<|D_s|$, where $|D_s|$ is the Euclidean norm of the
spatial part $D_s:=(D^1,D^2,D^3)$ of $D$
([[def-spatial-euclidean-structure-of-an-inertial-frame]]); in particular
$D_s\ne 0$.

**(b)** There is an inertial frame whose chart $x_0$ satisfies
$x_0^0(q)=x_0^0(p)$: the two events are simultaneous in that frame.

**(c)** There are inertial frames whose charts $x_+$ and $x_-$ satisfy
$x_+^0(q)>x_+^0(p)$ and $x_-^0(q)<x_-^0(p)$.

**(d) Explicit family.** Fix an inertial frame with chart $x$ and let
$e:=D_s/|D_s|$, so that $e$ is a unit spatial vector of that frame. For every
real number $b$ with $|b|<1$ let $B(be)$ be the passive boost of
[[def-lorentz-boost]] with parameter $be$, and let $x_b$ be the chart of the
inertial frame whose ordered basis is $e'_a:=B(be)^{-1}e_a$ and whose origin
event is the same event $o$. Then $x_b=B(be)\circ x$ (the linear map acting on
coordinate columns) and
$$x_b^0(q)-x_b^0(p)=\gamma_b\bigl(D^0-b|D_s|\bigr),\qquad \gamma_b:=(1-b^2)^{-1/2}.$$
This number is positive for $b<D^0/|D_s|$, zero for $b=D^0/|D_s|$ and negative
for $b>D^0/|D_s|$; since $-1<D^0/|D_s|<1$ by (a), all three cases occur among
values $|b|<1$, and the family $b\mapsto x_b$ depends continuously on $b$.

**(e) Scope.** The lemma concerns the inertial charts of the model;
"simultaneous in the frame" means equality of the frame's time coordinate
$x^0$, and no synchronization procedure, observer convention or physical
identification is asserted. No choice principle is used.

## Facts & Assumptions

**Given:** The oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$, events $p,q\in A$ with $p\ne q$ and $q-p$ spacelike, a fixed inertial frame $(o;e_0,e_1,e_2,e_3)$ with chart $x$, the coordinate differences $D=x(q)-x(p)$ and $D_s=(D^1,D^2,D^3)$, the number $|D_s|$ and the unit vector $e=D_s/|D_s|$.

[L1] An inertial frame is a tuple $(o;e_0,e_1,e_2,e_3)$ with $o\in A$ and $(e_0,e_1,e_2,e_3)$ an $\eta$-orthonormal, future, positively oriented ordered basis of $V$; its chart is $x(r)=E^{-1}(r-o)$ with $E(u)=\sum_a u^a e_a$, and the components $x^a(r)$ are the inertial coordinates of $r$ ([[def-inertial-frame-and-inertial-chart]]).

[L2] In an $\eta$-orthonormal basis with coordinates $v=v^0e_0+\cdots+v^3e_3$ one has $\eta(v,v)=-(v^0)^2+|v_s|^2$, where $|v_s|=\sqrt{(v^1)^2+(v^2)^2+(v^3)^2}$ is the Euclidean norm of the spatial part; for a fixed inertial frame the spatial part $S=\operatorname{span}(e_1,e_2,e_3)$ carries the positive-definite form $\delta=\eta|_S$ and the norm $|\cdot|$ ([[lem-timelike-cone-has-two-convex-components]], [[def-spatial-euclidean-structure-of-an-inertial-frame]]).

[L3] A vector $v\in V$ is spacelike exactly when $\eta(v,v)>0$; the zero vector is not spacelike, and every nonzero vector has exactly one causal character (timelike, null or spacelike) ([[def-causal-classification-of-lorentz-vectors]]).

[L4] For $\beta\in\mathbb R^3$ with $|\beta|<1$ the passive boost is the linear map $B(\beta):V\to V$ whose action on coordinates is $x'^0=\gamma(x^0-\beta\cdot x)$, $x'=x+\frac{\gamma-1}{|\beta|^2}(\beta\cdot x)\beta-\gamma\beta x^0$ for $\beta\ne 0$ and $B(0)=\mathrm{id}$, where $\gamma=(1-|\beta|^2)^{-1/2}$ and $\beta\cdot x$ is the Euclidean scalar product of $\beta$ with the spatial coordinates of $x$ ([[def-lorentz-boost]], [[def-euclidean-inner-product]]).

[L5] For every $|\beta|<1$ the boost $B(\beta)$ is a proper orthochronous Lorentz map, $B(-\beta)B(\beta)=\mathrm{id}=B(\beta)B(-\beta)$, and $B(\beta)$ is injective with $B(\beta)^{-1}=B(-\beta)$ ([[lem-boost-is-proper-orthochronous-with-inverse]]).

[L6] A linear Lorentz map $L$ is a linear isomorphism preserving $\eta$ and the causal character of every nonzero vector; if $L$ is proper it preserves the oriented volume form, so it maps a positively oriented $\eta$-orthonormal ordered basis to a positively oriented $\eta$-orthonormal ordered basis, and it maps $C^+$ onto $C^+$ when it is orthochronous ([[lem-lorentz-map-preserves-metric-and-causal-structure]], [[def-lorentz-map-and-lorentz-group]]).

[L7] Every vector has unique coordinates in an ordered basis, and a linear map is determined by the images of the basis vectors; every linear isomorphism is a bijection ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-isomorphism-and-invertible-linear-map]]).

[L8] For $D_s\ne 0$ and $e=D_s/|D_s|$ the Euclidean scalar product satisfies $e\cdot D_s=|D_s|$ and $e\cdot (\lambda e)=\lambda$ for every $\lambda\in\mathbb R$ ([[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct.

1.1 Fix the inertial frame and chart $x$ of the given data; by [L1] one has $D=E^{-1}(q-p)$, and in the $\eta$-orthonormal basis $(e_0,e_1,e_2,e_3)$ the interval of the pair is $\eta(q-p,q-p)=-(D^0)^2+|D_s|^2$ in the notation of [L2]. [given, L1, L2]

2.1 Since $q-p$ is spacelike, [L3] gives $\eta(q-p,q-p)>0$, so $-(D^0)^2+|D_s|^2>0$, that is $(D^0)^2<|D_s|^2$; hence $D_s\ne 0$ and $e:=D_s/|D_s|$ is a well-defined unit spatial vector, the quotient $c:=D^0/|D_s|$ satisfies $|c|<1$ and is an admissible boost parameter, and $(c+1)/2$ and $(c-1)/2$ also lie in $(-1,1)$. [step 1.1, L3, algebra]

3.1 Fix a real number $b$ with $|b|<1$, put $\beta:=be$, $B_b:=B(\beta)$ and $e'_a:=B_b^{-1}e_a=B(-\beta)e_a$ for $a=0,1,2,3$. By [L5] and [L6] the map $B_b^{-1}=B(-\beta)$ is a proper orthochronous Lorentz map, so $(e'_0,e'_1,e'_2,e'_3)$ is an $\eta$-orthonormal, future, positively oriented ordered basis of $V$, hence $(o;e'_0,e'_1,e'_2,e'_3)$ is an inertial frame of the model by [L1]. Writing $x_b$ for its chart, $M_b$ for the matrix of $B_b$ in the ordered basis $(e_0,e_1,e_2,e_3)$ and $E_b(u):=\sum_a u^a e'_a$, one has $E_b(u)=B_b^{-1}(E(u))$ for every $u\in\mathbb R^4$ by linearity of $B_b^{-1}$, hence $E_b^{-1}=E^{-1}B_b$ and $x_b(r)=E_b^{-1}(r-o)=E^{-1}(B_b(r-o))=E^{-1}(B_b(E(x(r))))=M_b\,x(r)$ for every $r\in A$, because $r-o=E(x(r))$ and $E^{-1}B_bE$ is the matrix map $u\mapsto M_bu$. [step 2.1, given, L1, L4, L5, L6, L7]

4.1 By linearity of $B_b$, subtracting the chart identity of step 3.1 at $p$ from the identity at $q$ gives $x_b(q)-x_b(p)=M_bD$, and its time component is $(M_bD)^0=\gamma_b(D^0-b|D_s|)$, where $\gamma_b:=(1-b^2)^{-1/2}>0$: the first row of $M_b$ gives $(M_bD)^0=\gamma_b(D^0-\beta\cdot D)$, and $\beta\cdot D=b\,(e\cdot D_s)=b|D_s|$ by [L8]. Since $D^0=c|D_s|$, this reads $x_b^0(q)-x_b^0(p)=\gamma_b|D_s|(c-b)$, which is positive for $b<c$, zero for $b=c$ and negative for $b>c$; moreover each matrix entry of $M_b$, namely $\gamma_b$, $-\gamma_b b\,e_i$ and $\delta^i_j+(\gamma_b-1)e_ie_j$, is a continuous function of $b$ on $(-1,1)$, because $b\mapsto\gamma_b$ is continuous and positive there with $\gamma_b\to 1$ as $b\to 0$, so every coordinate $x_b^a(r)$ is continuous in $b$. [step 2.1, step 3.1, L4, L8, algebra]

5.1 The frame of step 3.1 with parameter $b:=c$, admissible by step 2.1, has chart $x_0:=x_c$ satisfying $x_0^0(q)-x_0^0(p)=0$ by step 4.1; this is assertion (b). [step 2.1, step 3.1, step 4.1, choose]

5.2 The frames of step 3.1 with parameters $b_+:=(c-1)/2$ and $b_-:=(c+1)/2$, both admissible by step 2.1, have $x_{b_+}^0(q)-x_{b_+}^0(p)=\gamma_{b_+}|D_s|(c-b_+)>0$ and $x_{b_-}^0(q)-x_{b_-}^0(p)=\gamma_{b_-}|D_s|(c-b_-)<0$ by step 4.1, since $c-b_+=(c+1)/2>0>c-b_-=(c-1)/2$; taking $x_+:=x_{b_+}$ and $x_-:=x_{b_-}$ this is assertion (c). [step 2.1, step 3.1, step 4.1, choose, algebra]

6.1 Assertion (a) is step 2.1 read in an arbitrary inertial chart; assertion (d) is the construction of steps 3.1 and 4.1, comprising the chart identity $x_b=B(be)\circ x$, the time-difference formula, the sign trichotomy relative to $c=D^0/|D_s|$ and the continuous dependence on $b$; assertions (b) and (c) are steps 5.1 and 5.2. Only inertial charts of the model and one explicitly constructed basis per parameter are used, "simultaneous" is the equality of the frame's $x^0$ coordinate as required in (e), and no choice principle is used since each parameter is a single explicit real number. [step 2.1, step 3.1, step 4.1, step 5.1, step 5.2] ∎
