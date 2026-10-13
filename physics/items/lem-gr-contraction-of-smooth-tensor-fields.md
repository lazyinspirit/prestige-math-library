---
id: lem-gr-contraction-of-smooth-tensor-fields
kind: lemma
title: "Contraction of a smooth tensor field is a smooth tensor field"
status: published
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-tensor-fields-and-components, def-gr-smooth-lorentzian-objects, def-contraction-of-a-mixed-tensor, lem-contraction-is-independent-of-the-basis-formula, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
dependency_roles:
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-contraction-of-a-mixed-tensor: mathematical-premise
  lem-contraction-is-independent-of-the-basis-formula: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
sources:
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds, 2nd ed., Ch. 12 'Multilinear Algebra': contraction of tensors, printed pp. 305-313"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 'index manipulation': contraction sums over one upper and one lower index (printed p. 17; PDF p. 24)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]), let $r,s\ge1$, and let $T$ be a smooth
tensor field of type $(r,s)$ on $M$
([[def-gr-tensor-fields-and-components]]). For each $p\in M$ let
$(\operatorname{ctr}T)_p$ be the contraction of $T_p$ over its first
contravariant slot and its first covariant slot
([[def-contraction-of-a-mixed-tensor]]). Then:

1. $\operatorname{ctr}T$ is a smooth tensor field of type $(r-1,s-1)$ on $M$,
   and its definition is independent of every basis.
2. In every smooth chart $(U,x)$ the components of $\operatorname{ctr}T$ are

   $$(\operatorname{ctr}T)^{a_2\cdots a_r}{}_{b_2\cdots b_s}=\sum_{i=0}^{3}T^{i\,a_2\cdots a_r}{}_{i\,b_2\cdots b_s},$$

   and the field obtained by contracting any other pair consisting of one
   contravariant and one covariant slot has the analogous component formula
   after permuting the slots.
3. If $r=s=1$, then $\operatorname{tr}T:=\operatorname{ctr}T$ is a smooth
   function on $M$ and $\operatorname{tr}T=\sum_{i=0}^{3}T^i{}_i$ in every
   smooth chart.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, integers $r,s\ge1$, and a smooth type $(r,s)$ tensor field $T$ on $M$.

[L1] Contraction of a type $(r,s)$ tensor $T_p$ over its first contravariant and first covariant slot is the type $(r-1,s-1)$ tensor given in a basis $(e_i)$ with dual basis $(e^i)$ by $(\operatorname{ctr}T_p)(\alpha_2,\dots,\alpha_r,v_2,\dots,v_s)=\sum_iT_p(e^i,\alpha_2,\dots,\alpha_r,e_i,v_2,\dots,v_s)$ ([[def-contraction-of-a-mixed-tensor]]).

[L2] The contraction formula has the same value for every basis and its dual basis ([[lem-contraction-is-independent-of-the-basis-formula]]).

[L3] For a tensor field $T$ of type $(r,s)$, the component functions in a chart are $T^{a_1\cdots a_r}{}_{b_1\cdots b_s}(q)=T_q(dx^{a_1}|_q,\dots,\partial_{b_1}|_q,\dots)$, and $T$ is smooth exactly when these are $C^\infty$ in every smooth chart ([[def-gr-tensor-fields-and-components]]).

[L4] Finite sums and products of $C^\infty$ maps on chart domains are $C^\infty$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

## Proof

**Proof technique:** direct.

1.1 For each $p\in M$ the assignment $(\operatorname{ctr}T)_p:=\operatorname{ctr}(T_p)$ is a type $(r-1,s-1)$ tensor at $p$ by [L1], and it does not depend on any basis by [L2]; hence $\operatorname{ctr}T$ is a well-defined family of type $(r-1,s-1)$ tensors on $M$. [L1, L2, given]

2.1 Let $(U,x)$ be a smooth chart and $q\in U$. Applying [L1] with the coordinate basis $e_i=\partial_i|_q$ and its dual basis $e^i=dx^i|_q$ (which is the dual coordinate basis) and evaluating on the arguments $dx^{a_2}|_q,\dots,dx^{a_r}|_q,\partial_{b_2}|_q,\dots,\partial_{b_s}|_q$ gives $(\operatorname{ctr}T)^{a_2\cdots a_r}{}_{b_2\cdots b_s}(q)=\sum_{i=0}^{3}T_q(dx^i|_q,dx^{a_2}|_q,\dots,\partial_i|_q,\partial_{b_2}|_q,\dots)=\sum_{i=0}^{3}T^{i\,a_2\cdots a_r}{}_{i\,b_2\cdots b_s}(q)$, which is the displayed formula. [step 1.1, L1, L3, algebra]

3.1 The right-hand side of step 2.1 is a finite sum of the component functions $T^{i\,a_2\cdots a_r}{}_{i\,b_2\cdots b_s}$ of the smooth field $T$, which are $C^\infty$ on $U$ by [L3]; hence by [L4] the components of $\operatorname{ctr}T$ are $C^\infty$ on $U$. Since the chart was arbitrary, [L3] now shows that $\operatorname{ctr}T$ is a smooth type $(r-1,s-1)$ field, proving claims 1 and 2 for the first slot pair. [step 2.1, L3, L4, given]

3.2 For another pair of slots, permute the arguments of $T_p$ by the corresponding finite permutation of the $r+s$ slots; the permutation is a linear isomorphism of the space of multilinear maps, so the permuted family is again a smooth tensor field (its components are components of $T$ with permuted indices), and contraction of the chosen pair is the first-pair contraction of the permuted field; the component formula is the one of step 2.1 with the contraction index read in the chosen slots. [step 2.1, L1, L3, algebra]

4.1 If $r=s=1$, then $\operatorname{ctr}T$ is a type $(0,0)$ tensor at each $p$, that is, a real number depending on $p$; by steps 1.1-2.1 it is a smooth function and its value in any chart is $\sum_iT^i{}_i$ by step 2.1. This proves claim 3. [step 1.1, step 2.1, step 3.1, algebra] ∎
