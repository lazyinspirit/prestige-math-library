---
id: lem-reduced-graded-symmetric-coalgebra-is-cofree
kind: lemma
title: "The reduced graded symmetric coalgebra is cofree conilpotent cocommutative"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-field
  - def-koszul-sign-rule-for-graded-tensors
  - def-reduced-graded-symmetric-coalgebra
  - def-ring-characteristic
  - lem-field-is-a-commutative-ring
  - lem-shuffle-coproduct-coassociative-cocommutative-conilpotent
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Tom Lada and Jim Stasheff, Introduction to sh Lie algebras for physicists, §§2–3"
      url: "https://arxiv.org/pdf/hep-th/9209099"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, Proposition 10.1.20"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Statement

Let $W$ be a graded vector space over a characteristic-zero field and let
$S^c(W)$ be the reduced graded symmetric coalgebra of
[[def-reduced-graded-symmetric-coalgebra]]. Let $C$ be any graded
$k$-vector space with a degree-zero reduced coproduct
$\bar\Delta_C:C\to C\otimes_k C$ that is coassociative and graded-cocommutative
(invariant under the graded flip), with no counit. Assume that for every
$c\in C$ some iterated reduced coproduct of $c$ is zero; such a coalgebra is
called **conilpotent** here. A coalgebra morphism is a degree-zero linear map
commuting with the reduced coproduct.
For any degree-zero linear map $\phi:C\to W$, there is a unique degree-zero
coalgebra morphism $G:C\to S^c(W)$ whose length-one projection is $\phi$.
Explicitly, let $\rho_n:W^{\otimes n}\to S^n(W)$ be the quotient map, put
$\bar\Delta_C^{(0)}=\operatorname{id}_C$, and define iterates recursively by
$\bar\Delta_C^{(n)}=(\bar\Delta_C^{(n-1)}\otimes1)\bar\Delta_C$; coassociativity
makes the parenthesization immaterial. Then

$$G(c)=\sum_{n\ge1}\frac1{n!}\rho_n\!\left( \phi^{\otimes n}\bar\Delta_C^{(n-1)}(c)\right).$$

The sum is finite for each $c$ by conilpotence. In particular, the graded
symmetric coalgebra is the reduced cofree conilpotent cocommutative coalgebra
on $W$.

## Facts & Assumptions

**Given:** A conilpotent graded cocommutative noncounital coalgebra $C$, a
graded vector space $W$ over a characteristic-zero field, and a degree-zero
linear map $\phi:C\to W$.

[F1] [[def-reduced-graded-symmetric-coalgebra]]: $S^c(W)$ is the direct sum
of the positive graded symmetric powers with the reduced shuffle coproduct.

[F2] [[lem-shuffle-coproduct-coassociative-cocommutative-conilpotent]]:
$S^c(W)$ is coassociative and cocommutative, and its primitive subspace is
$W$.

[F3] [[def-field]], [[def-ring-characteristic]], and
[[lem-field-is-a-commutative-ring]]: the ground field has characteristic
zero, so every $n!$ is nonzero and invertible.

[F4] [[def-koszul-sign-rule-for-graded-tensors]]: graded permutations and
tensor maps use the displayed Koszul signs.

## Proof

1.1 For fixed $c\in C$, conilpotence makes $\bar\Delta_C^{(n-1)}(c)=0$ for all sufficiently large $n$, so the displayed sum defines an element of the direct sum $S^c(W)$. Its length-one projection is the $n=1$ term $\phi(c)$; every $n>1$ term has length $n$ and projects to zero. [given, F1, construct]

1.2 To check the coalgebra-map identity, fix $n=p+q$ in the formula for $G(c)$ and put $D_n=\bar\Delta_C^{(n-1)}(c)$. Coassociativity and cocommutativity imply that $D_n$ is invariant under graded permutations of its $n$ outputs: adjacent swaps follow by applying coassociativity to isolate two adjacent outputs and then using cocommutativity on that pair. Applying the shuffle coproduct to the length-$n$ symmetric class sums over the $\binom{n}{p}$ choices of the $p$ labels in the first block. Since $D_n$ is graded-symmetric, these choices give the same projected class, with the Koszul signs prescribed by [F4]. Their total coefficient is $\binom{n}{p}/n!=1/(p!q!)$. On the other side, $(G\otimes G)\bar\Delta_C(c)$ has the same grouped iterated coproduct by coassociativity, and its length-$(p,q)$ coefficient is also $1/(p!q!)$. Thus the two sides agree in every length and $\bar\Delta G=(G\otimes G)\bar\Delta_C$. [F1, F2, F4, algebra]

1.3 Suppose $G'$ is another coalgebra morphism with $\pi_1G'=\phi$. Applying the iterated coproduct into $n$ factors and then $\pi_1^{\otimes n}$ gives $\pi_1^{\otimes n}\bar\Delta_{S^c(W)}^{(n-1)}G'(c) =\phi^{\otimes n}\bar\Delta_C^{(n-1)}(c).$ Only the length-$n$ component of $G'(c)$ can survive on the left: a shorter length cannot split into $n$ positive factors, while a longer length leaves some factor of length greater than one, killed by $\pi_1$. This length behavior follows directly from the coproduct in [F1]. [F1, F2, algebra]

2.1 For a length-$n$ element, the left side of step 1.3 is the sum over all $n!$ permutations in the iterated unshuffle coproduct. Applying $\rho_n$ to that tensor sum yields $n!$ times the length-$n$ component, because all permuted factors represent the same graded-symmetric class with their Koszul signs canceled by the quotient relation. Hence that component is forced to be $\frac1{n!}\rho_n\!\left(\phi^{\otimes n} \bar\Delta_C^{(n-1)}(c)\right),$ which is the length-$n$ component in the displayed formula for $G$. Since this holds for every $n$, $G'=G$. [F1, F2, F3, F4, step 1.3] ∎

