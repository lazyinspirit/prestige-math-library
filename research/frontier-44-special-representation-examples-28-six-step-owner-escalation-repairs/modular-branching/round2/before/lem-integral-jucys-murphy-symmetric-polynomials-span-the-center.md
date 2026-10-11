---
id: lem-integral-jucys-murphy-symmetric-polynomials-span-the-center
kind: lemma
title: "Integral symmetric Jucys–Murphy polynomials span the center"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jucys-murphy-elements-of-the-symmetric-group-algebra, cor-jucys-murphy-elements-commute-pairwise, thm-symmetric-polynomials-in-jucys-murphy-elements-give-the-center]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 0
verification:
  precheck: pass
sources:
  references:
    - title: "A. A. Jucys, Symmetric polynomials and the center of the symmetric group ring, Reports on Mathematical Physics 5 (1974), 107–112"
      url: "https://doi.org/10.1016/0034-4877(74)90019-6"
---

## Statement

For every commutative unital ring $R$ and $n\ge0$, every element of $Z(RS_n)$ is an $R$-linear combination of evaluations of integral monomial symmetric polynomials at $L_r=\sum_{a<r}(a,r)$. Conversely every symmetric polynomial evaluation is central. In particular $Z(RS_n)=R[L_1,\ldots,L_n]^{\mathrm{sym}}$, where the right side denotes evaluations of symmetric polynomials, not invariants of an action on the group algebra. No integer is inverted.

## Facts & Assumptions

**Given:** $n\ge0$, a commutative unital ring $R$, and the Jucys–Murphy elements.

[F1] The elements $L_r$ commute ([[cor-jucys-murphy-elements-commute-pairwise]]); every symmetric polynomial evaluation over $\mathbb C$ is central ([[thm-symmetric-polynomials-in-jucys-murphy-elements-give-the-center]]). Only the centrality direction over $\mathbb C$ is used.

## Proof

**Proof technique:** direct.

1.1 An integral symmetric polynomial evaluates in $\mathbb ZS_n$. Its commutator with any permutation vanishes in $\mathbb CS_n$ by [F1], hence vanishes integrally by coefficientwise injectivity. For any coefficient ring, invariance of a polynomial under variable permutations says exactly that its coefficients are constant on monomial orbits, so it is a linear combination of integral monomial symmetric polynomials. All their evaluations are therefore central over $R$. A group-ring element is central exactly when its coefficients are constant on conjugacy classes: compare coefficients after conjugating by each permutation. Consequently the class sums form a basis of the center over $\mathbb Z$ and over $R$, even with zero divisors. [F1, given, algebra]

1.2 Define the reduced cycle type $\rho(g)$ by subtracting one from each nontrivial cycle length and discarding fixed points. Its size $d(g)=n-c(g)$ is the minimum number of transpositions expressing $g$: multiplying by a transposition changes the number of cycles by one, giving the lower bound, and each cycle of length $s$ has a factorization with $s-1$ transpositions, giving equality. The possible types are precisely partitions $\rho$ with $|\rho|+\ell(\rho)\le n$. Write $K_\rho$ for their integral class sums. [given, algebra]

2.1 If a word of $d$ transpositions has product of degree $d$, every prefix multiplication joins two different cycles; otherwise the final degree would be at most $d-2$. The graph whose edges are the transpositions is therefore a forest, and its connected components are exactly the cycles of every prefix product. Indeed initially both are singletons, and each multiplication joins two current components by one edge and joins their two cycles. Thus edges never repeat, and each final tree of $s$ vertices gives a cycle of length $s$. [step 1.2, algebra]

3.1 Let $\rho$ be a possible reduced type of size $d$, and expand the monomial symmetric polynomial $m_\rho(L_1,\ldots,L_n)$, summing once over distinct assignments of the positive parts of $\rho$ to distinct indices $r$. Each term is a word of $d$ transpositions, grouped into stars centered at those $r$: the group $L_r^a$ has $a$ edges incident to $r$. Every resulting permutation has degree at most $d$. If its degree is $d$, step 2.1 makes all these stars trees with distinct edges. Each star lies in one final tree; the degree of that tree is the sum of the exponents of its stars. Its reduced cycle type is therefore obtained from $\rho$ by merging some parts. Any proper merging decreases the number of parts. [step 2.1, F1, algebra]

4.1 The coefficient at any permutation $g$ of reduced type exactly $\rho$ is one. In the degree-$d$ expansion, equality of the number of parts forces each final tree to contain exactly one star. For a cycle with support $\{r,a_1,\ldots,a_s\}$, the center of its star must be its largest letter $r$, since every factor from $L_r$ is $(a,r)$ with $a<r$. The ordered star factorization is unique: with right-to-left permutation composition, $(a_1,r)\cdots(a_s,r)$ is the cycle $(r,a_s,\ldots,a_1)$, as direct evaluation on each letter shows. Thus the cycle determines the leaf ordering. Different cycles have distinct maxima, their stars are disjoint and commute, and their assignments appear exactly once among the distinct monomials, including repeated exponents. This also constructs a term producing $g$. [step 3.1, step 2.1, algebra]

5.1 By centrality and steps 3.1–4.1, $m_\rho(L)=K_\rho+\sum_\sigma a_{\rho\sigma}K_\sigma$, with integer coefficients, where every remaining type either has smaller degree or is a proper merging of $\rho$. Induct on degree and, within a degree, on the number of parts in increasing order. All remaining sums are already integral symmetric polynomial evaluations, so subtraction expresses $K_\rho$ that way too. The initial type is empty with $m_\varnothing=K_\varnothing=1$. This proves integral spanning without division. Specialization to $R$ and the class-sum basis from step 1.1 prove the assertion over every $R$, including $n=0$ and the zero ring. [step 1.1, step 1.2, step 3.1, step 4.1, algebra] ∎
