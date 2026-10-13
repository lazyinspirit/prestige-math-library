---
id: lem-sr-future-causal-sums-and-inertial-coordinate-criterion
kind: lemma
title: "The closed future cone in inertial coordinates: description, finite sums, and the coordinate criterion for causal reachability"
status: published
origin: pipeline
domain: mathematics
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-sr-causal-reachability-in-affine-minkowski-space, def-sr-affine-minkowski-model, def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, def-inertial-frame-and-inertial-chart, def-spatial-euclidean-structure-of-an-inertial-frame, def-euclidean-inner-product, cor-triangle-inequality-for-inner-product-norm]
dependency_roles:
  def-sr-causal-reachability-in-affine-minkowski-space: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
dependency_level: 9
aliases: []
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 1.3.2 pp. 22-23 (light-rectangles as causal diamonds with invariant area), Section 2.1 pp. 43-45 (the modest causality postulate P1 and the limits of a general causality principle), Section 4.7 pp. 110-113 (superluminal transmission of information, the tachyonic antitelephone attributed to Tolman, reported tachyon searches); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 5-7 (light cones; timelike, null and spacelike separation; no coordinate-independent future for a spacelike-separated event), Chapter 4 pp. 124-127 (no signals faster than light; information flows only along timelike or null trajectories; future domain of dependence; Misner space with closed timelike curves as a warning about other topologies); PDF page = printed page + 7"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.1-2.3 pp. 25-30 (Minkowski metric (2.6) and inertial frames; timelike, null, spacelike and causal vectors with the light-cone double cone and its two disconnected causal sets; timelike and causal curves; proper time (2.19); curves of extremal proper time, straight lines in inertial frames and the unproved maximization statement); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski space
([[def-sr-affine-minkowski-model]], [[def-lorentz-form-and-inertia]]) and use
the reachability objects $J^+$, $I^+$ of
[[def-sr-causal-reachability-in-affine-minkowski-space]]. Let
$(o;e_0,e_1,e_2,e_3)$ be an inertial frame with chart $x$
([[def-inertial-frame-and-inertial-chart]]) and let
$$|v_s|:=\sqrt{(v^1)^2+(v^2)^2+(v^3)^2}$$
be the Euclidean norm of the spatial part $v_s:=v^1e_1+v^2e_2+v^3e_3$ of a
vector $v=v^0e_0+v_s$
([[def-spatial-euclidean-structure-of-an-inertial-frame]]). Then:

**(a) Cone description.** $C^+=\{v:v^0>|v_s|\}$,
$\overline{C^+}=\{v:v^0\ge|v_s|\}$, $C^-=\{v:-v^0>|v_s|\}$ and
$\overline{C^-}=\{v:-v^0\ge|v_s|\}$; moreover every $v\in\overline{C^+}$ with
$v\ne 0$ satisfies $-\eta(v,e_0)=v^0>0$ and $|v_s|\le v^0$, and $v$ is future
null exactly when $|v_s|=v^0>0$.

**(b) Finite sums.** If $v_1,\dots,v_k$ lie in $\overline{C^+}$
($k\ge 1$), then $v_1+\cdots+v_k\in\overline{C^+}$; if in addition at least one
$v_i$ lies in $C^+$, then the sum lies in $C^+$; and if $v+w=0$ with
$v,w\in\overline{C^+}$, then $v=w=0$.

**(c) Coordinate criterion.** For events $p,q\in A$ put
$D^a:=x^a(q)-x^a(p)$ and $D_s:=(D^1,D^2,D^3)$. Then: $q\in J^+(p)$ if and only
if $D^0\ge|D_s|$; $q\in I^+(p)$ if and only if $D^0>|D_s|$; $q\in J^+(p)$ with
$q\ne p$ if and only if $D^0\ge|D_s|$ and $D^0>0$; and for $q\in J^+(p)$ with
$q\ne p$ one has $0<D^0$ and $|D_s|\le D^0$. The criteria are stated for the
chart of any inertial frame, because every inertial basis is
$\eta$-orthonormal with future first vector.

**(d) Scope.** The lemma is a statement about the affine model and the fixed
time orientation; it attaches no physical meaning to $\le$, $J^+$ or $I^+$ and
uses no choice principle.

## Facts & Assumptions

**Given:** The oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$, an inertial frame $(o;e_0,e_1,e_2,e_3)$ with chart $x$, and for a vector $v=\sum_a v^ae_a$ the spatial vector $v_s=v^1e_1+v^2e_2+v^3e_3\in S$ with coordinate column $(v^1,v^2,v^3)$ and norm $|v_s|=\sqrt{(v^1)^2+(v^2)^2+(v^3)^2}$.

[L1] In an $\eta$-orthonormal ordered basis $(e_0,e_1,e_2,e_3)$ with $v=v^0e_0+v^1e_1+v^2e_2+v^3e_3$ one has $\eta(v,v)=-(v^0)^2+|v_s|^2$, and the timelike set $T=\{v:\eta(v,v)<0\}$ is the disjoint union $T=T_+\cup T_-$ with $T_+=\{v:v^0>|v_s|\}$ and $T_-=\{v:v^0<-|v_s|\}$, these being exactly the two connected components of $T$; moreover $\operatorname{cl}(T_+)=\{v:v^0\ge|v_s|\}$, $\operatorname{cl}(T_-)=\{v:v^0\le-|v_s|\}$ and $\operatorname{cl}(T_+)\cap\operatorname{cl}(T_-)=\{0\}$ ([[lem-timelike-cone-has-two-convex-components]]).

[L2] $C^+$ is one component of $T$, $C^-:=T\setminus C^+$ is the other; a vector is future timelike, future null, future causal exactly by membership in $C^+$, or nonzero null in $\operatorname{cl}(C^+)$, or the union of the two; past notions are the same with $C^-$; $\overline{C^+}$ and $\overline{C^-}$ are convex cones with $\overline{C^+}\cap\overline{C^-}=\{0\}$, and a causal vector is future or past but not both ([[def-time-orientation-and-future-causal-sets]]).

[L3] An inertial frame is a tuple $(o;e_0,e_1,e_2,e_3)$ with $o\in A$ and $(e_0,e_1,e_2,e_3)$ an $\eta$-orthonormal basis of $V$ with $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$, whose first vector $e_0$ lies in $C^+$ and which is positively oriented; its chart is $x(r)=E^{-1}(r-o)$ with $E(u)=\sum_a u^ae_a$, and in particular $x(r)-x(s)=E^{-1}(r-s)$ ([[def-inertial-frame-and-inertial-chart]]).

[L4] For a fixed inertial frame the spatial part $S=\operatorname{span}(e_1,e_2,e_3)$ carries the positive-definite form $\delta=\eta|_S$, $|w|:=\sqrt{\delta(w,w)}$ is a norm on $S$, and for $w=w^1e_1+w^2e_2+w^3e_3$ one has $|w|=\sqrt{(w^1)^2+(w^2)^2+(w^3)^2}$ and $\eta(w,e_0)=0$; the Euclidean scalar product on the coordinate space is the positive-definite inner product of [[def-euclidean-inner-product]] ([[def-spatial-euclidean-structure-of-an-inertial-frame]]).

[L5] For the norm of [L4] the triangle inequality $|w+z|\le|w|+|z|$ holds for all $w,z\in S$ ([[cor-triangle-inequality-for-inner-product-norm]]).

[L6] A vector $v$ is timelike when $\eta(v,v)<0$, null when $v\ne 0$ and $\eta(v,v)=0$, and spacelike when $\eta(v,v)>0$; every nonzero vector has exactly one causal character ([[def-causal-classification-of-lorentz-vectors]]).

[L7] For events $p,q\in A$: $q\in J^+(p)$ iff $q-p\in\overline{C^+}$; $q\in I^+(p)$ iff $q-p\in C^+$; $J^+(p)=p+\overline{C^+}$ ([[def-sr-causal-reachability-in-affine-minkowski-space]]).

## Proof

**Proof technique:** direct.

1.1 The component $C^+$ is one of $T_+$, $T_-$ by [L2], and the coordinates of $e_0$ in the basis $(e_0,e_1,e_2,e_3)$ are $(1,0,0,0)$, so $e_0\in T_+$; since $e_0\in C^+$ by [L3], it follows that $C^+=T_+$ and $C^-=T_-$, that is $C^+=\{v:v^0>|v_s|\}$ and $C^-=\{v:-v^0>|v_s|\}=\{v:v^0<-|v_s|\}$. Taking closures with [L1] gives $\overline{C^+}=\{v:v^0\ge|v_s|\}$, $\overline{C^-}=\{v:-v^0\ge|v_s|\}$ and $\overline{C^+}\cap\overline{C^-}=\{0\}$; also $C^-=-C^+$, because $-(T_+)=T_-$, whence $\overline{C^-}=-\overline{C^+}$ and the description $-v^0\ge|v_s|$ agrees with $-v\in\overline{C^+}$. [given, L1, L2, L3]

2.1 Let $v=v^0e_0+v_s\in\overline{C^+}$. Then $v^0\ge|v_s|\ge 0$, and $-\eta(v,e_0)=v^0$ because $\eta(v,e_0)=v^0\eta(e_0,e_0)+\eta(v_s,e_0)=-v^0+0$ by the orthonormality and spatial orthogonality of [L3] and [L4]. If $v\ne 0$ then $v^0>0$: if $v^0=0$ then $|v_s|\le 0$, so $v_s=0$ and $v=0$, a contradiction. Finally $v$ is future null exactly when $|v_s|=v^0>0$: by [L6] nullity of $v$ is the conjunction $v\ne 0$ and $\eta(v,v)=-(v^0)^2+|v_s|^2=0$, which by [L1] means $|v_s|=v^0$, and by the preceding sentence this forces $v^0>0$. [step 1.1, L1, L3, L4, L6, algebra]

2.2 Let $v,w\in\overline{C^+}$. Then $(v+w)^0=v^0+w^0\ge|v_s|+|w_s|\ge|v_s+w_s|$ by [L5] applied to the spatial parts, so $v+w\in\overline{C^+}$ by the description of step 1.1; if in addition $v\in C^+$, that is $v^0>|v_s|$, the first inequality is strict and $(v+w)^0>|v_s+w_s|$, so $v+w\in C^+$; the same holds if $w\in C^+$. [step 1.1, L5, algebra]

2.3 Let $v,w\in\overline{C^+}$ with $v+w=0$. Then $w=-v$ and $v\in\overline{C^+}$, so $w\in-\overline{C^+}=\overline{C^-}$ by step 1.1; hence $w\in\overline{C^+}\cap\overline{C^-}=\{0\}$ by step 1.1, that is $w=0$ and $v=-w=0$. [step 1.1, L2, algebra]

3.1 Let $k\ge 1$ and $v_1,\dots,v_k\in\overline{C^+}$. For $k=1$ the membership claim is the hypothesis and the strict claim is the hypothesis $v_1\in C^+$; for the passage from $k-1$ to $k$ put $s':=v_1+\cdots+v_{k-1}$ and $s:=s'+v_k$, where $s'\in\overline{C^+}$ by the induction hypothesis, so $s\in\overline{C^+}$ by step 2.2 applied to $s'$ and $v_k$. If some $v_i$ with $i<k$ lies in $C^+$, the induction hypothesis gives $s'\in C^+$ and the strict case of step 2.2 gives $s\in C^+$; if none of $v_1,\dots,v_{k-1}$ is in $C^+$ but $v_k$ is, the strict case of step 2.2 applies directly to $s'$ and $v_k$. Induction on $k$ therefore proves both claims; finite sums are defined by recursion on $k$, so no choice is used. [step 2.2, algebra]

3.2 Let $p,q\in A$ and $D:=x(q)-x(p)$, so that $D$ is the coordinate column of $q-p$ by the linearity clause of [L3]. By [L7] and step 1.1, $q\in J^+(p)$ iff $q-p\in\overline{C^+}$ iff $D^0\ge|D_s|$, and $q\in I^+(p)$ iff $q-p\in C^+$ iff $D^0>|D_s|$. Moreover $D=0$ iff $q-p=0$ iff $q=p$, because $E^{-1}$ is injective; hence $q\in J^+(p)$ with $q\ne p$ iff $D^0\ge|D_s|$ and $D\ne 0$. For $D\in\overline{C^+}$ this is equivalent to $D^0\ge|D_s|$ and $D^0>0$ by step 2.1, which is the third criterion; the fourth is the same statement as read off from step 2.1. [step 1.1, step 2.1, L3, L7, algebra]

4.1 Clause (a) is steps 1.1 and 2.1, clause (b) is steps 2.2, 2.3 and 3.1, and clause (c) is step 3.2. Every inertial chart has the same description because each inertial basis is $\eta$-orthonormal with first vector $e_0\in C^+$ ([L3]), so the criteria hold in the chart of any inertial frame. The objects $\le$, $J^+$ and $I^+$ are those of the affine model and no physical meaning, synchronization procedure or empirical claim is attached to them here; no choice principle is used, the only analytic input being the triangle inequality [L5] and the finite-dimensional algebra of the coordinates. [step 1.1, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, given] ∎
