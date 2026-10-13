---
id: lem-gr-future-causal-classification-by-a-timelike-field
kind: lemma
title: "Classification of future and past causal vectors by a timelike field"
status: published
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, lem-lorentz-form-has-orthonormal-basis, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-lorentz-orthogonality-and-orthogonal-complement, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-euclidean-inner-product, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.2 and the exercise on orthogonal vectors, printed pp. 26-27 (PDF pp. 27-28)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.7 and the orthogonality step in the scalar-field weak energy condition, printed pp. 194-195 (PDF pp. 201-202)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 on past and future light cones, printed pp. 5-9 (PDF pp. 12-16)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold and let
$p\in M$ ([[def-gr-smooth-lorentzian-objects]]). Write
$N_p^{\perp}=\{v\in T_pM:g_p(v,N_p)=0\}$
([[def-lorentz-orthogonality-and-orthogonal-complement]]) and let $T_p$ be the
timelike set, with components $C_p^+$ (the one containing $N_p$) and $C_p^-$,
and with future and past causality as fixed in
[[def-time-orientation-and-future-causal-sets]] and
[[def-gr-smooth-lorentzian-objects]]. Then:

1. $N_p^{\perp}$ is a $3$-dimensional linear subspace of $T_pM$, and $g_p$ is
   positive definite on it; equivalently, every nonzero $v\in T_pM$ with
   $g_p(v,N_p)=0$ is spacelike.
2. $g_p(v,N_p)\neq0$ for every nonzero causal $v\in T_pM$.
3. $C_p^+=\{v\in T_pM:g_p(v,v)<0\text{ and }g_p(v,N_p)<0\}$, and
   $C_p^-=\{v\in T_pM:g_p(v,v)<0\text{ and }g_p(v,N_p)>0\}$.
4. A nonzero $v\in T_pM$ is causal and future-directed if and only if
   $v\in\operatorname{cl}(C_p^+)$, and causal and past-directed if and only if
   $v\in\operatorname{cl}(C_p^-)$. Consequently
   $\operatorname{cl}(C_p^+)\setminus\{0\}$ is exactly the set of
   future-directed causal vectors and $\operatorname{cl}(C_p^-)\setminus\{0\}$
   exactly the set of past-directed causal vectors,
   $\operatorname{cl}(C_p^+)\cap\operatorname{cl}(C_p^-)=\{0\}$, and every
   nonzero causal vector is exactly one of future-directed and past-directed.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ and a point
$p\in M$.

[L1] In an $\eta$-orthonormal ordered basis $(e_0,e_1,e_2,e_3)$ of a Lorentz vector space, coordinate writing $v=\sum_av^ae_a$ gives $\eta(v,w)=-v^0w^0+v^1w^1+v^2w^2+v^3w^3$; the timelike set is $T=T_+\cup T_-$ with $T_+=\{v:v^0>\lvert v_{\mathrm{vec}}\rvert\}$ and $T_-=\{v:v^0<-\lvert v_{\mathrm{vec}}\rvert\}$, these are exactly the two connected components and each is convex, their closures are $\operatorname{cl}(T_+)=\{v:v^0\ge\lvert v_{\mathrm{vec}}\rvert\}$ and $\operatorname{cl}(T_-)=\{v:v^0\le-\lvert v_{\mathrm{vec}}\rvert\}$, $\operatorname{cl}(T_+)\cap\operatorname{cl}(T_-)=\{0\}$, the nonzero causal vectors are exactly the nonzero points of $\operatorname{cl}(T_+)\cup\operatorname{cl}(T_-)$, and the topology, closures and components do not depend on the orthonormal basis used ([[lem-timelike-cone-has-two-convex-components]]).

[L2] Every Lorentz form on a $4$-dimensional real vector space admits an ordered basis $(e_0,e_1,e_2,e_3)$ with $g_p(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ ([[lem-lorentz-form-has-orthonormal-basis]]).

[L3] A vector is timelike when $g_p(v,v)<0$, null when $v\neq0$ and $g_p(v,v)=0$, spacelike when $g_p(v,v)>0$, and causal when it is timelike or null; each nonzero vector has exactly one causal character ([[def-causal-classification-of-lorentz-vectors]]).

[L4] For a Lorentz vector space, $C^+$ is the chosen component of the timelike set and future null vectors are the nonzero null points of $\operatorname{cl}(C^+)$; future causal means future timelike or future null ([[def-time-orientation-and-future-causal-sets]]).

[L5] In the time-oriented manifold $(M,g,N)$, a nonzero causal $v\in T_pM$ is future-directed when $g_p(v,N_p)<0$ and past-directed when $g_p(v,N_p)>0$ ([[def-gr-smooth-lorentzian-objects]]).

[L6] Coordinates of a vector with respect to an ordered basis are unique ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]), and the coordinate derivations of a smooth chart form a basis of the tangent space, so $T_pM$ is $4$-dimensional ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

[L7] The Euclidean inner product of $x,y\in\mathbb R^3$ is $\langle x,y\rangle=\sum_{i=1}^{3}x_iy_i$ with norm $\lVert x\rVert_2$ ([[def-euclidean-inner-product]]), and $\lvert\langle x,y\rangle\rvert\le\lVert x\rVert_2\lVert y\rVert_2$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] choose a $g_p$-orthonormal ordered basis $(e_0,e_1,e_2,e_3)$ of $T_pM$, and write $N_p=\sum_an^ae_a$ and $v=\sum_av^ae_a$ for the unique coordinates of [L6]; then $g_p(v,w)=-v^0w^0+v^1w^1+v^2w^2+v^3w^3$ by [L1]. Replacing $e_0$ by $-e_0$ if necessary, which leaves the basis orthonormal and replaces $n^0$ by $-n^0$, we may and do assume $n^0>0$. Since $N_p$ is timelike, $-(n^0)^2+\lvert n_{\mathrm{vec}}\rvert^2<0$, so $n^0>\lvert n_{\mathrm{vec}}\rvert\ge0$. [L1, L2, L6, given]

2.1 In the coordinates of step 1.1, $v_{\mathrm{vec}}\cdot n_{\mathrm{vec}}$ is the Euclidean inner product of the spatial coordinate triples, so [L7] gives $\lvert v_{\mathrm{vec}}\cdot n_{\mathrm{vec}}\rvert\le\lvert v_{\mathrm{vec}}\rvert\lvert n_{\mathrm{vec}}\rvert$, and $g_p(v,N_p)=-v^0n^0+v_{\mathrm{vec}}\cdot n_{\mathrm{vec}}$. [step 1.1, L7, algebra]

2.2 In the basis of step 1.1, [L1] gives $T_p=T_+\cup T_-$ with $T_+=\{v:v^0>\lvert v_{\mathrm{vec}}\rvert\}$ and $T_-=\{v:v^0<-\lvert v_{\mathrm{vec}}\rvert\}$ the two connected components, and $N_p\in T_+$ because $n^0>\lvert n_{\mathrm{vec}}\rvert$ by step 1.1; hence $C_p^+=T_+$ and $C_p^-=T_-$. [step 1.1, L1]

3.1 For $v\in T_+$ we have $v^0>0$, and step 2.1 gives $g_p(v,N_p)=-v^0n^0+v_{\mathrm{vec}}\cdot n_{\mathrm{vec}}\le-v^0n^0+\lvert v_{\mathrm{vec}}\rvert\lvert n_{\mathrm{vec}}\rvert<-v^0n^0+v^0n^0=0$. For $v\in T_-$ we have $v^0<0$ and $\lvert v_{\mathrm{vec}}\rvert<\lvert v^0\rvert=-v^0$, so $g_p(v,N_p)=-v^0n^0+v_{\mathrm{vec}}\cdot n_{\mathrm{vec}}\ge-v^0n^0-\lvert v_{\mathrm{vec}}\rvert\lvert n_{\mathrm{vec}}\rvert>-v^0n^0-\lvert v^0\rvert n^0=-v^0n^0+v^0n^0=0$. Together with step 2.2 this shows that on $C_p^+=T_+$ the function $g_p(\cdot,N_p)$ is strictly negative and on $C_p^-=T_-$ strictly positive; since every timelike vector lies in exactly one of $T_+,T_-$, claim 3 follows. [step 2.1, step 2.2, L1, algebra]

3.2 Suppose $v\neq0$ is timelike with $g_p(v,N_p)=0$. Then $\lvert v^0\rvert>\lvert v_{\mathrm{vec}}\rvert$ by [L3] and [L1], so step 2.1 gives $\lvert v^0\rvert n^0=\lvert v_{\mathrm{vec}}\cdot n_{\mathrm{vec}}\rvert\le\lvert v_{\mathrm{vec}}\rvert\lvert n_{\mathrm{vec}}\rvert<\lvert v^0\rvert n^0$, a contradiction. [step 2.1, L1, L3, algebra]

3.3 Suppose $v\neq0$ is null with $g_p(v,N_p)=0$. Then $\lvert v^0\rvert=\lvert v_{\mathrm{vec}}\rvert$ by [L3] and [L1] and $\lvert v_{\mathrm{vec}}\rvert\neq0$ because $v\neq0$, so step 2.1 gives $\lvert v^0\rvert n^0=\lvert v_{\mathrm{vec}}\rvert n^0=\lvert v_{\mathrm{vec}}\cdot n_{\mathrm{vec}}\rvert\le\lvert v_{\mathrm{vec}}\rvert\lvert n_{\mathrm{vec}}\rvert<\lvert v_{\mathrm{vec}}\rvert n^0$, again a contradiction. [step 2.1, L1, L3, algebra]

3.4 The past-directed statements follow by the same computation with $T_-$: if $v\in\operatorname{cl}(T_-)\setminus\{0\}$ then $v^0\le-\lvert v_{\mathrm{vec}}\rvert\le0$ and $v\neq0$, so $v$ is causal by [L1] and, since $-v^0\ge\lvert v_{\mathrm{vec}}\rvert\ge0$ gives $-\lvert v_{\mathrm{vec}}\rvert\lvert n_{\mathrm{vec}}\rvert\ge v^0\lvert n_{\mathrm{vec}}\rvert$, $g_p(v,N_p)\ge-v^0n^0-\lvert v_{\mathrm{vec}}\rvert\lvert n_{\mathrm{vec}}\rvert\ge-v^0n^0+v^0\lvert n_{\mathrm{vec}}\rvert=-v^0(n^0-\lvert n_{\mathrm{vec}}\rvert)\ge0$, with equality only if $v^0=0$, which would force $v=0$; hence $g_p(v,N_p)>0$. Conversely a nonzero timelike $v$ with $g_p(v,N_p)>0$ lies in $C_p^-$ by claim 3, and a nonzero null $v$ with $g_p(v,N_p)>0$ has $v^0=-\lvert v_{\mathrm{vec}}\rvert$ by the estimate of step 2.1 with the sign of $g_p(v,N_p)$ reversed, hence in this case too $v\in\operatorname{cl}(C_p^-)$. Thus $\operatorname{cl}(C_p^-)\setminus\{0\}$ is exactly the set of past-directed causal vectors. [step 2.1, L1, L3, L5, algebra]

4.1 By [L3] every nonzero $v$ with $g_p(v,N_p)=0$ is timelike, null or spacelike, and steps 3.2 and 3.3 exclude the first two alternatives; hence such a $v$ is spacelike and $g_p(v,v)>0$. Thus $g_p$ is positive definite on the set $N_p^{\perp}$, which is a linear subspace by bilinearity of $g_p$ and equals the kernel of the nonzero linear functional $g_p(\cdot,N_p)$ (nonzero because $g_p(N_p,N_p)<0$), hence has dimension $4-1=3$ in the $4$-dimensional space $T_pM$ of [L6]. This proves claim 1, and steps 3.2 and 3.3 together prove claim 2. [step 3.2, step 3.3, L1, L3, L6, algebra]

4.2 By [L4] the future timelike vectors are exactly the points of $C_p^+$, which by claim 3 are exactly the timelike $v$ with $g_p(v,N_p)<0$. For a null $v$ with $g_p(v,N_p)<0$: if $v^0<\lvert v_{\mathrm{vec}}\rvert$ then, since $\lvert v^0\rvert=\lvert v_{\mathrm{vec}}\rvert$ and $v_{\mathrm{vec}}\neq0$ by [L3] and [L1], necessarily $v^0=-\lvert v_{\mathrm{vec}}\rvert$, so $g_p(v,N_p)=\lvert v_{\mathrm{vec}}\rvert n^0+v_{\mathrm{vec}}\cdot n_{\mathrm{vec}}\ge\lvert v_{\mathrm{vec}}\rvert n^0-\lvert v_{\mathrm{vec}}\rvert\lvert n_{\mathrm{vec}}\rvert=\lvert v_{\mathrm{vec}}\rvert(n^0-\lvert n_{\mathrm{vec}}\rvert)>0$, a contradiction; hence $v^0\ge\lvert v_{\mathrm{vec}}\rvert$, that is, $v\in\operatorname{cl}(T_+)=\operatorname{cl}(C_p^+)$ by [L1]. Conversely, if $v\in\operatorname{cl}(C_p^+)\setminus\{0\}=\operatorname{cl}(T_+)\setminus\{0\}$, then $v^0\ge\lvert v_{\mathrm{vec}}\rvert\ge0$ and $v\neq0$, so by [L1] $v$ is causal and $g_p(v,N_p)=-v^0n^0+v_{\mathrm{vec}}\cdot n_{\mathrm{vec}}\le-v^0n^0+\lvert v_{\mathrm{vec}}\rvert\lvert n_{\mathrm{vec}}\rvert\le-v^0n^0+v^0\lvert n_{\mathrm{vec}}\rvert=-v^0(n^0-\lvert n_{\mathrm{vec}}\rvert)\le0$, with equality only if $v^0=0$, which would force $\lvert v_{\mathrm{vec}}\rvert\le v^0=0$ and hence $v=0$; so $g_p(v,N_p)<0$ and $v$ is a nonzero causal vector. This proves the future-directed half of claim 4, including that $\operatorname{cl}(C_p^+)\setminus\{0\}$ consists exactly of the future-directed causal vectors. [step 3.1, L1, L3, L4, algebra]

5.1 Claims 1-3 and steps 3.4, 4.2 show that a nonzero $v\in T_pM$ is causal and future-directed exactly when $v\in\operatorname{cl}(C_p^+)$ and causal and past-directed exactly when $v\in\operatorname{cl}(C_p^-)$; these two sets meet only at $0$ because $\operatorname{cl}(T_+)\cap\operatorname{cl}(T_-)=\{0\}$ by [L1]. By claims 1 and 2 every nonzero causal vector has $g_p(v,N_p)\neq0$, so it is exactly one of future-directed and past-directed by the definition [L5]; this completes claim 4. [step 3.4, step 4.1, step 4.2, L1, L5] ∎
