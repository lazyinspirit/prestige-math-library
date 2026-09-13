---
id: thm-contracted-second-bianchi-identity
kind: theorem
title: Contracted second Bianchi identity
status: published
origin: pipeline
deps: ["def-countable-choice","thm-differential-second-bianchi-identity","def-scalar-curvature","lem-ricci-curvature-is-symmetric-and-basis-independent","prop-induced-connections-commute-with-contraction-and-permutation","lem-contraction-is-independent-of-the-basis-formula","thm-algebraic-symmetries-of-the-riemann-tensor","def-levi-civita-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 12.2.4 and proof, printed page 86
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 7, Lemma 7.7, printed page 125
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-scalar-curvature]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]], and [[thm-algebraic-symmetries-of-the-riemann-tensor]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

For a covariant two-tensor $T$, write

$$(\operatorname{div}T)(X):=\sum_i(\nabla_{e_i}T)(e_i,X)$$

in any orthonormal basis at the point. Then

$$\operatorname{div}\operatorname{Ric}=\frac12\,dS,$$

and therefore the Einstein tensor is divergence free:

$$\operatorname{div}\left(\operatorname{Ric}-\frac12Sg\right)=0.$$

## Facts & Assumptions

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-scalar-curvature]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]], and [[thm-algebraic-symmetries-of-the-riemann-tensor]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] The covariant differential second Bianchi identity is the cyclic sum of
$\nabla\operatorname{Rm}$. [[thm-differential-second-bianchi-identity]].

[F2] Scalar curvature is the metric trace of Ricci.
[[def-scalar-curvature]].

[F3] Ricci curvature is symmetric and has the orthonormal contraction
formula. [[lem-ricci-curvature-is-symmetric-and-basis-independent]].

[F4] Induced connections commute with permutations and contractions.
[[prop-induced-connections-commute-with-contraction-and-permutation]].

[F5] Tensor contraction is basis independent.
[[lem-contraction-is-independent-of-the-basis-formula]].

[F6] The Riemann tensor is skew in both pairs.
[[thm-algebraic-symmetries-of-the-riemann-tensor]].

[F7] The Levi–Civita connection preserves the metric.
[[def-levi-civita-connection]].

## Proof

**Given:** $\mathrm{AC}_\omega$, a point $p$, a vector $X\in T_pM$, and one orthonormal basis
$(e_1,\ldots,e_n)$ of $T_pM$.

1.1 The displayed definition of $\operatorname{div}T$ is a contraction of $\nabla T$, so [F5] makes it independent of the orthonormal basis. By [F3]–[F4], at $p$ one has $(\nabla_Y\operatorname{Ric})(U,V)=\sum_a(\nabla_Y\operatorname{Rm})(e_a,U,V,e_a)$. Contracting once more and using [F2] and [F4] gives $dS(X)=\sum_{a,i}(\nabla_X\operatorname{Rm})(e_a,e_i,e_i,e_a)$. [A1, F2, F3, F4, F5]

2.1 Insert $(X,e_a,e_i;e_i,e_a)$ into [F1]'s covariant Bianchi identity and sum over $a,i$. The first cyclic term is $dS(X)$ by step 1.1. Last-pair skewness in [F6], followed by [F3], turns the second term into $-\sum_a(\nabla_{e_a}\operatorname{Ric})(e_a,X)$. First-pair skewness followed by [F3] turns the third into the same expression with index $i$. Hence $dS(X)-2(\operatorname{div}\operatorname{Ric})(X)=0$. [F1, F3, F6, step 1.1, algebra]

3.1 Let $G=\operatorname{Ric}-(S/2)g$. Metric compatibility [F7] and an orthonormal expansion give $\operatorname{div}(Sg)(X)=\sum_i e_i(S)g(e_i,X)=dS(X)$. Therefore step 2.1 yields $\operatorname{div}G=\operatorname{div}\operatorname{Ric}-(1/2)dS=0$. [F7, step 2.1, algebra] ∎
