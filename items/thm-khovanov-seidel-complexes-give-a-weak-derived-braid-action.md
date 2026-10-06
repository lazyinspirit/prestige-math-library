---
id: thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action
kind: theorem
title: "The Khovanov-Seidel complexes give a weak derived braid action"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
deps:
  - def-weak-action-of-a-group-on-a-category
  - def-khovanov-seidel-complex-of-a-braid-word
  - lem-khovanov-seidel-generator-complexes-are-mutually-inverse
  - lem-khovanov-seidel-complexes-satisfy-far-commutativity
  - lem-khovanov-seidel-complexes-satisfy-the-three-term-braid-relation
  - def-group-presentation
  - thm-von-dyck
  - def-braid-group-by-the-artin-presentation
  - def-signed-totalization-of-graded-a-m-bimodule-actions
proof_strategy: direct
justified_by: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Proposition 2.7"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Proposition 2.7, printed p. 14"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Fix $m\ge1$ and let $C_m=K^b(\operatorname{proj}^{gr}A_m)$ be the bounded
homotopy category of finite graded projective left $A_m$-modules. Choose a
signed word $t(\beta)$ representing each $\beta\in B_{m+1}$, with $t(1)$ the
empty word, and let $G_\beta=R_{t(\beta)}$ be its complex from
[[def-khovanov-seidel-complex-of-a-braid-word]]. Define $F_1=\operatorname{Id}_{C_m}$
and $F_\beta=G_\beta\otimes_{A_m}-$ for $\beta\ne1$. Then the assignment
$$\beta\longmapsto F_\beta$$
defines a weak action of the braid group $B_{m+1}$
([[def-braid-group-by-the-artin-presentation]]) on $C_m$ in the sense of
[[def-weak-action-of-a-group-on-a-category]]:

1. $F_1=\operatorname{Id}_{C_m}$ exactly;
2. every $F_\beta$ is an equivalence of $C_m$, and
3. for all $\beta,\gamma\in B_{m+1}$ the functors $F_{\beta\gamma}$ and
   $F_\beta F_\gamma$ are naturally isomorphic.

Explicitly, for any two words presenting the same element, a chosen finite
sequence of defining relation moves gives an explicit homotopy equivalence
between their complexes, so the action is well defined up to isomorphism by
the presentation of $B_{m+1}$. No independence of that chosen sequence is asserted. No coherence of the isomorphisms
is claimed: the action is weak and is not asserted to be a genuine $2$-action.

## Facts & Assumptions
**Given:** An integer $m\ge1$, the generators $\sigma_1,\dots,\sigma_m$ and defining relations of the presented braid group $B_{m+1}$, the word complexes $R_\sigma$ of [[def-khovanov-seidel-complex-of-a-braid-word]] and their functors on $C_m$.

[L1] For every word $\sigma$ the complex $R_\sigma$ is a bounded complex of graded $(A_m,A_m)$-bimodules with two-sided finite graded projective terms, and its action $R_\sigma\otimes_{A_m}-$ is an exact triangulated endofunctor of $C_m$ agreeing with the derived tensor product ([[def-khovanov-seidel-complex-of-a-braid-word]]).

[L2] $R_iR_i^{-1}\simeq\operatorname{Id}_{C_m}\simeq R_i^{-1}R_i$ for every $i$ ([[lem-khovanov-seidel-generator-complexes-are-mutually-inverse]]).

[L3] $R_iR_j\cong R_jR_i$ for $|i-j|>1$ ([[lem-khovanov-seidel-complexes-satisfy-far-commutativity]]).

[L4] $R_iR_{i+1}R_i\cong R_{i+1}R_iR_{i+1}$ for $1\le i\le m-1$ ([[lem-khovanov-seidel-complexes-satisfy-the-three-term-braid-relation]]).

[L5] $B_{m+1}$ is presented by the generators $\sigma_1,\dots,\sigma_m$ subject to the relations $\sigma_i\sigma_i^{-1}=1=\sigma_i^{-1}\sigma_i$, $\sigma_i\sigma_j=\sigma_j\sigma_i$ for $|i-j|>1$ and $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$; consequently a group homomorphism or an assignment on words satisfying these relations up to the appropriate equivalences is well defined on the presented group, and any two words for the same element are related by a finite sequence of insertions and deletions of these relators ([[def-braid-group-by-the-artin-presentation]], [[def-group-presentation]], [[thm-von-dyck]]).

[L6] The empty tensor product is the diagonal bimodule $A_m$ concentrated in degree $0$, and $A_m\otimes_{A_m}M\cong M$ naturally, so $R_1\simeq\operatorname{Id}_{C_m}$ ([[def-khovanov-seidel-complex-of-a-braid-word]], [[def-signed-totalization-of-graded-a-m-bimodule-actions]]).



## Proof

**Proof technique:** direct.

1.1 *Every $F_\beta$ is an equivalence.* For $\beta\ne1$, [L1] makes $G_\beta\otimes_{A_m}-$ an endofunctor of $C_m$, and the generator inverse relations of [L2], applied factor by factor with tensor associativity, identify its composites with the functor of the literal reversed inverse word as the identity; the empty-word functor is canonically the identity by [L6]. Thus $F_\beta$ is an equivalence with inverse the functor of that literal inverse word, up to the canonical unit identification. For $\beta=1$ the claim holds by the definition $F_1=\operatorname{Id}$. [L1, L2, L6]

1.2 *The defining relations hold up to natural isomorphism.* The inverse-cancellation relation is [L2], far commutativity is [L3], and the three-term Artin relation is [L4]; for each of these the two functors are respectively naturally isomorphic, and the isomorphisms are compatible with concatenation of words because both sides are computed by the same balanced tensor product of the word complexes [L1]. [L2, L3, L4]

2.1 *Well-definedness on braid words.* Let $\sigma=\tau_1\cdots\tau_k$ be a word and let $\sigma'$ be obtained from it by one of the elementary moves of [L5]: inserting or deleting $\sigma_i^{\pm1}\sigma_i^{\mp1}$, commuting two far-apart letters, or replacing $\sigma_i\sigma_{i+1}\sigma_i$ by $\sigma_{i+1}\sigma_i\sigma_{i+1}$. Each move replaces $R_\sigma$ by a naturally isomorphic functor by step 1.2, since the tensor product identifies the segments of the word and the isomorphisms compose; by induction on the number of moves, any two words presenting the same element of $B_{m+1}$ yield naturally isomorphic functors. Hence the assignment $\beta\mapsto F_\beta$ is well defined up to natural isomorphism on the presented group, with $F_1$ represented by the identity functor rather than merely by an isomorphic empty-word functor. [step 1.2, L1, L5, L6]

3.1 *The weak-action axioms.* By definition $F_1=\operatorname{Id}_{C_m}$. If $\beta,\gamma\ne1$, concatenating their chosen words gives $G_\beta\otimes_{A_m}G_\gamma\simeq G_{\beta\gamma}$ up to the natural isomorphism of step 2.1; tensoring with an input complex gives $F_\beta F_\gamma\cong F_{\beta\gamma}$, using [L6] when $\beta\gamma=1$. If one of $\beta,\gamma$ is $1$, the corresponding composite is identified with the other functor by the canonical tensor unit isomorphism (and is literally composition with $\operatorname{Id}$ on the functor side). Thus the weak-action unit and pairwise-isomorphism conditions hold. No compositors satisfying a pentagon are produced or claimed. [step 2.1, L1, L6]

4.1 *Conclusion.* The functors $F_\beta$ define a weak action of $B_{m+1}$ on $C_m$: the assignment is well defined up to natural isomorphism on words for the same braid (step 2.1), every value is an equivalence (step 1.1), and the identity functor is assigned exactly to $1$ with the pairwise isomorphisms supplied in step 3.1. No coherence upgrade is claimed. [step 1.1, step 2.1, step 3.1] ∎ 