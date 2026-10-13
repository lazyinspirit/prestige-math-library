---
id: thm-gr-local-lorentz-tetrad-existence
kind: theorem
title: "Existence of a smooth future-directed tetrad field near every event"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-gr-local-frame-and-tetrad-fields, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, lem-lorentz-form-has-orthonormal-basis, lem-gr-future-causal-classification-by-a-timelike-field, def-causal-classification-of-lorentz-vectors, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, thm-unique-coordinates-with-respect-to-an-ordered-basis, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuous-map-top, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-algebra-of-derivatives, cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image, def-countable-choice]
dependency_roles:
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-continuous-map-top: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 'tetrads and non-coordinate bases', printed pp. 88-91 (PDF pp. 95-98)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.2: an orthonormal basis of the tangent space exists at every point and any two are related by a Lorentz transformation, printed pp. 26-28 (PDF pp. 27-29)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.1.2: an orthonormal basis of T_pM can always be found at each point, printed p. 93 (PDF p. 100)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold and let
$p\in M$ ([[def-gr-smooth-lorentzian-objects]]). Then there is an open
neighborhood $U\subseteq M$ of $p$ and a smooth future-directed tetrad field
$(E_0,E_1,E_2,E_3)$ on $U$
([[def-gr-local-frame-and-tetrad-fields]]), i.e.
$g_q(E_A(q),E_B(q))=\operatorname{diag}(-1,1,1,1)_{AB}$ for all $q\in U$ with
$E_0(q)$ future-directed for every $q\in U$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ and a point $p\in M$.

[L1] A tetrad field on an open set is a tuple of four smooth vector fields that is pointwise a $g$-orthonormal ordered basis, and it is future-directed when its first member is future-directed at every point ([[def-gr-local-frame-and-tetrad-fields]]).

[L2] There is an ordered $g_p$-orthonormal basis of $T_pM$ ([[lem-lorentz-form-has-orthonormal-basis]]).

[L3] For a nonzero timelike $v\in T_pM$ one has $g_p(v,N_p)\neq0$, and $C_p^+=\{v:g_p(v,v)<0,\ g_p(v,N_p)<0\}$ is the future timelike component ([[lem-gr-future-causal-classification-by-a-timelike-field]], [[def-causal-classification-of-lorentz-vectors]]).

[L4] The component functions $g_{ab}(q)=g_q(\partial_a|_q,\partial_b|_q)$ of $g$ in a smooth chart are $C^\infty$ ([[def-gr-smooth-covariant-two-tensor-field]]).

[L5] The coordinate derivations $\partial_a|_q$ of a chart form a basis of $T_qM$, and every vector of $T_qM$ has a unique coordinate list ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L6] A vector field on a chart domain is smooth exactly when its coordinate component functions are smooth ([[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[L7] A smooth map between smooth manifolds is continuous ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L8] If $f:X\to\mathbb R$ is continuous at $x$ and $f(x)>0$, then there is an open neighborhood $W$ of $x$ with $f>0$ on $W$; the same holds with $>$ replaced by $<$. ([[def-continuous-map-top]])

[L9] Finite sums, products and composites of $C^\infty$ maps on Euclidean domains are $C^\infty$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[L10] On $(0,\infty)$ the squaring map $u\mapsto u^2$ has derivative $2u$, and for powers and quotients the product and quotient rules hold ([[thm-algebra-of-derivatives]]).

[L11] If $U\subseteq\mathbb R^n$ is open and $f:U\to\mathbb R^n$ is injective, $C^k$ with $k\ge1$, and $Df$ is invertible everywhere, then $f[U]$ is open and $f:U\to f[U]$ is a $C^k$ diffeomorphism ([[cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image]]).

[L12] The smooth structure of the tangent bundle used for smooth vector fields assumes the axiom $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct, by an explicit construction with successive shrinking of neighborhoods.

1.1 Choose a smooth chart $(U_0,x)$ around $p$. By [L2] there is an ordered $g_p$-orthonormal basis $(b_0,b_1,b_2,b_3)$ of $T_pM$; by [L3], $g_p(b_0,N_p)\neq0$, so after replacing $b_0$ by $-b_0$ if necessary we may assume $b_0$ is future-directed, still an orthonormal basis. Expand each $b_A$ uniquely in the coordinate basis, $b_A=\sum_ab_A^a\,\partial_a|_p$ [L5], and define $B_A:=\sum_ab_A^a\,\partial_a$ on $U_0$, with the constants $b_A^a$ as coefficients. Each $B_A$ is a smooth vector field by [L6] (so that the tangent-bundle smooth structure of [L12] is in force), and $B_A(p)=b_A$. [L2, L3, L5, L6, L12, given]

2.1 Consider the smooth functions $G_{AB}(q):=g_q(B_A(q),B_B(q))$ and $h(q):=g_q(B_0(q),N_q)$ on $U_0$. They are smooth because in the chart $x$ they equal the finite sums $G_{AB}=\sum_{a,b}b_A^ab_B^bg_{ab}$ and $h=\sum_{a,b}b_0^aN^bg_{ab}$ of products of smooth functions, using [L4] and [L9]; and $G_{AB}(p)=\eta_{AB}$, while $h(p)<0$ by step 1.1 and the definition of future-directedness. [step 1.1, L4, L9, given]

3.1 By [L7] and [L8] applied to the continuous functions $-G_{00}$ (positive at $p$) and $-h$ (positive at $p$), there is an open neighborhood $U_1\subseteq U_0$ of $p$ on which $G_{00}<0$ and $h<0$. [step 2.1, L7, L8]

4.1 Define $F_0:=B_0\big/\sqrt{-G_{00}}$ on $U_1$. The function $u\mapsto u^{-1/2}$ is $C^\infty$ on $(0,\infty)$: the map $u\mapsto u^{1/2}$ is the inverse of the injective $C^\infty$ squaring map $u\mapsto u^2$ on $(0,\infty)$ whose derivative $2u$ is invertible everywhere there, so it is $C^\infty$ by [L11], and $u\mapsto u^{-1}$ has derivatives $(-1)^nn!\,u^{-n-1}$ for every $n$ by iterating the product and quotient rules of [L10]; composites and products of $C^\infty$ maps are $C^\infty$ by [L9]. Hence $F_0$ is smooth on $U_1$, and $g_q(F_0(q),F_0(q))=G_{00}(q)/(-G_{00}(q))=-1$; since $-G_{00}>0$, the field $F_0$ is a positive multiple of $B_0$ at every point, so $g_q(F_0(q),N_q)=h(q)/\sqrt{-G_{00}(q)}<0$ and $F_0(q)$ is future-directed. [step 3.1, L1, L3, L9, L10, L11]

5.1 For $i=1,2,3$ define $P_i:=B_i+g_q(B_i,F_0)F_0$ on $U_1$; these are smooth fields by [L9], and $g_q(P_i,F_0)=g_q(B_i,F_0)+g_q(B_i,F_0)(-1)=0$, so $P_i(q)$ lies in the $g_q$-orthogonal complement of $F_0(q)$. The function $\varphi_1:=g_q(P_1,P_1)$ is smooth by [L4] and [L9], and $\varphi_1(p)=g_p(b_1,b_1)=1>0$ because $F_0(p)=b_0$ and $g_p(b_1,b_0)=0$. By [L7] and [L8] there is an open $U_2\subseteq U_1$ containing $p$ with $\varphi_1>0$ on $U_2$. Define $F_1:=P_1/\sqrt{\varphi_1}$ on $U_2$; it is smooth by the argument of step 4.1, $g(F_1,F_1)=1$, and $g(F_1,F_0)=0$. [step 4.1, L4, L7, L8, L9, algebra]

6.1 Define $P_2':=P_2-g(P_2,F_1)F_1$ on $U_2$, a smooth field with $g(P_2',F_1)=g(P_2,F_1)-g(P_2,F_1)=0$ and $g(P_2',F_0)=0$, and let $\varphi_2:=g(P_2',P_2')$, smooth with $\varphi_2(p)=g_p(b_2,b_2)=1>0$ because $F_1(p)=b_1$ and $g_p(b_2,b_1)=0$. Shrink to an open $U_3\subseteq U_2$ containing $p$ with $\varphi_2>0$ and define $F_2:=P_2'/\sqrt{\varphi_2}$; then $F_2$ is smooth, $g(F_2,F_2)=1$ and $g(F_2,F_0)=g(F_2,F_1)=0$. [step 5.1, L4, L7, L8, L9, algebra]

7.1 Define $P_3':=P_3-g(P_3,F_1)F_1-g(P_3,F_2)F_2$ on $U_3$, smooth with $g(P_3',F_1)=g(P_3',F_2)=g(P_3',F_0)=0$, and let $\varphi_3:=g(P_3',P_3')$, smooth with $\varphi_3(p)=g_p(b_3,b_3)=1>0$. Shrink to an open $U_4\subseteq U_3$ containing $p$ with $\varphi_3>0$ and define $F_3:=P_3'/\sqrt{\varphi_3}$; then $F_3$ is smooth, $g(F_3,F_3)=1$ and $g(F_3,F_A)=0$ for $A=0,1,2$. [step 6.1, L4, L7, L8, L9, algebra]

8.1 On $U_4$ the four smooth fields $F_0,F_1,F_2,F_3$ satisfy $g(F_A,F_B)=\eta_{AB}$ by steps 4.1-5.1, and $F_0$ is future-directed by step 4.1. The Gram matrix $\eta$ is invertible, so a linear relation $\sum_A\lambda^AF_A(q)=0$ implies $\sum_A\lambda^A\eta_{AB}=0$ for all $B$ after pairing with $F_B(q)$, hence $\lambda=0$; thus the tuple is pointwise an ordered basis, a future-directed tetrad field on $U_4$ by [L1]. [step 4.1, step 5.1, step 6.1, step 7.1, L1, algebra]

9.1 The open neighborhood $U_4$ of $p$ and the field $(F_0,F_1,F_2,F_3)$ have the asserted properties; this proves the theorem. [step 8.1] ∎

## Remarks

**Choice convention.** The construction uses smooth vector fields, hence tangent-bundle sections, whose canonical smooth structure assumes the axiom $\mathrm{AC}_\omega$ of [[def-countable-choice]] as recorded in [L12]; no further choice principle is used, and the construction selects a definite basis at $p$ by an explicit finite procedure.
