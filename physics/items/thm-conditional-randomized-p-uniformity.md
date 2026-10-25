---
id: thm-conditional-randomized-p-uniformity
kind: theorem
title: "Randomized conditional p-values are uniform"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-randomized-conditional-p-value
  - lem-randomized-probability-integral-transform
  - def-conditional-law-given-a-random-element
  - def-independent-random-elements
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-dynkin-pi-lambda
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "A. J. Brockwell, Universal Residuals: A Multivariate Transformation, Lemma 2 and Theorem 1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2211730/"
    - title: "Jesse Hemerik and Jelle Goeman, Exact testing with random permutations, randomized p-value result"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6405018/"
---

## Statement

Under the simple null and the supplied conditional law in [[def-randomized-conditional-p-value]], for every $u\in[0,1]$,
$$P_0(p_U\le u\mid\sigma(S))=u\quad P_0\text{-almost surely},$$
while the nonrandomized upper-tail value satisfies
$$P_0(p_0\le u\mid\sigma(S))\le u\quad P_0\text{-almost surely}.$$
Thus the randomized value is conditionally uniform and the inclusive-tail value is conditionally superuniform, including when the conditional law has atoms.

## Facts & Assumptions

**Given:** A simple null law $P_0$, statistics $S,T$, a supplied conditional law kernel $K(s,\cdot)$ of $T$ given $S$, and an independent uniform randomizer $U$.

[F1] The randomized and nonrandomized values are $p_U=K(S,(T,\infty))+U K(S,\{T\})$ and $p_0=K(S,[T,\infty))$. [[def-randomized-conditional-p-value]]

[F2] The kernel $K(s,\cdot)$ is a conditional law of $T$ given $S$. [[def-conditional-law-given-a-random-element]]

[F3] $U$ is independent of the pair $(S,T)$. [[def-independent-random-elements]]

[F4] For sigma-finite measures, the product measure exists and has the rectangle formula. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F5] Measurable rectangles generate the product sigma-algebra. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F6] Equality of finite measures on a generating pi-system extends to the generated sigma-algebra. [[thm-dynkin-pi-lambda]]

[F7] For any real law with CDF $F$ and independent uniform $W$, $F(Y-)+W(F(Y)-F(Y-))$ is uniform. [[lem-randomized-probability-integral-transform]]

[A1] The randomizer has the uniform law on $[0,1]$, namely $P(U\le u)=u$ for $u\in[0,1]$; this is stipulated in the p-value definition.

## Proof

1.1 For each $s$, let $\Lambda_s:=K(s,\cdot)\otimes\lambda$, where $\lambda$ is the uniform law of $U$. By [F4] this is a probability measure with rectangle values $\Lambda_s(C\times D)=K(s,C)\lambda(D)$. For $A\in\sigma(S)$ and Borel $C,D$, the conditional-law identity [F2] gives $\int_A\Lambda_S(C\times D)\,dP_0=\lambda(D)P_0(A\cap\{T\in C\})$. Independence in [F3] makes the right side $P_0(A\cap\{T\in C,U\in D\})$. The class of product-Borel sets where the evaluation $s\mapsto\Lambda_s(E)$ is measurable and every such conditional identity holds is a Dynkin system: complements subtract from the probability-one whole-space evaluation, and disjoint unions follow by countable additivity and increasing limits. It contains the generating rectangles, so [F5] and [F6] extend measurability and the conditional identity to every product-Borel set. Thus $\Lambda_S$ is a conditional law of $(T,U)$ given $S$. [F2, F3, F4, F5, F6, A1]

2.1 For almost every conditioning value $s$, the conditional law just constructed makes $T$ have law $K(s,\cdot)$ and keeps $U$ independent uniform. Write $F_s(t):=K(s,(-\infty,t])$ and $\Delta_s(t):=F_s(t)-F_s(t-)$. By [F7], $V=F_s(T-)+(1-U)\Delta_s(T)$ is uniform, since $1-U$ is also uniform. The p-value formula in [F1] gives $p_U=1-V$, so $p_U$ is conditionally uniform. [A1, F1, F7, step 1.1, algebra]

3.1 For the same $s$, $p_0=1-F_s(T-)$ and $p_U=1-F_s(T-)-(1-U)\Delta_s(T)\le p_0$. Hence $\{p_0\le u\}\subseteq\{p_U\le u\}$ conditionally on $S=s$. Step 2.1 gives $P_0(p_0\le u\mid S=s)\le u$. This holds for each $u\in[0,1]$ and almost every conditioning value, proving conditional superuniformity. [F1, step 2.1, A1, algebra] ∎
