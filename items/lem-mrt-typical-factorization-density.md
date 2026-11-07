---
id: lem-mrt-typical-factorization-density
kind: lemma
title: "Density of the MRT typical-factorization set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
proof_strategy: direct
deps: [thm-brun-fundamental-lemma-with-remainder-terms, thm-third-mertens-theorem-for-primes, thm-natural-logarithm-laws, thm-exponential-addition-formula]
justified_by: []
axiom_use: "Finite prime products, finite divisor sums and explicit real estimates; no choice hypothesis."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "K. Matomäki, M. Radziwiłł and T. Tao, An averaged form of Chowla's conjecture"
      url: "https://arxiv.org/pdf/1503.05121v3"
      locator: "Definition 2.1 and Lemma 2.2, PDF pp. 8–9; the direct Brun proof below supplies the local argument"
---

## Statement

Let $L>1$ and let $P_1,Q_1$ be real numbers satisfying
$$10<P_1<Q_1\le\exp\!\left(\sqrt{\log\sqrt L}\right).$$
For every integer $j\ge2$ set
$$P_j=\exp\!\left(j^{4j}(\log Q_1)^{j-1}\log P_1\right),\qquad Q_j=\exp\!\left(j^{4j+2}(\log Q_1)^j\right).$$
Let $J$ be the largest positive integer with $Q_J\le\exp(\sqrt{\log\sqrt L})$, and let $S$ be the positive integers $n\le L$ having a prime divisor in each closed interval $[P_j,Q_j]$, $1\le j\le J$. There is an absolute constant $K$ such that
$$\#\{n\in\mathbb N:n\le L,\ n\notin S\}\le K L\frac{\log P_1}{\log Q_1}.$$
The bound is uniform in all the displayed parameters. It proves only the typical-set density estimate, not the restricted exponential-sum estimate or an averaged Chowla theorem.

## Statement references

[[thm-brun-fundamental-lemma-with-remainder-terms]]

[[thm-third-mertens-theorem-for-primes]]

[Matomäki–Radziwiłł–Tao, Definition 2.1 and Lemma 2.2](https://arxiv.org/pdf/1503.05121v3)

## Facts & Assumptions

**Given:** The parameters and finite sets in the Statement.

[F1] [[thm-brun-fundamental-lemma-with-remainder-terms]] gives the two-sided sifted-set estimate with local density $w$, dimension constants and the sum of absolute remainders up to $y^u$.

[F2] [[thm-third-mertens-theorem-for-primes]] gives $\prod_{p\le t}(1-1/p)=e^{-\gamma}(\log t)^{-1}(1+O(1/\log t))$ for $t\ge2$.

[F3] [[thm-natural-logarithm-laws]] and [[thm-exponential-addition-formula]] give monotonicity and the usual product and inverse relations for logarithms and exponentials.

## Proof

**Proof technique:** apply the finite Brun lemma to each prime interval and sum the resulting bounds.

1.1 Let $2\le P<Q$. Mertens' product [F2], with a larger absolute constant for the bounded range of small endpoints, gives [F2, F3, given, algebra]
$$\prod_{P\le p\le Q}(1-1/p)\ll\frac{\log P}{\log Q}.$$
The same product estimate shows that for any subset of primes and $2\le\eta\le\xi$, its reciprocal local product is at most $(\log\xi/\log\eta)(1+A/\log\eta)$ for one absolute $A>0$. Indeed, the subset product is bounded by the full product over $[\eta,\xi]$; taking the ratio of the Mertens products gives the displayed estimate for large $\eta$, while a larger $A$ covers bounded $\eta$ and the possible prime at the left endpoint. [F2, F3, given, algebra]

2.1 Fix $j\le J$ and let $\mathcal P_j$ be the primes in $[P_j,Q_j]$. If $\mathcal P_j$ is empty, the local sifted count is at most $L$; in that case the product in step 1.1 is $1$, so the same displayed upper bound below follows after enlarging the absolute constant. Otherwise take $\mathcal A=\{1,\ldots,\lfloor L\rfloor\}$, $X=L$, $w(p)=1$, $y=Q_j$ and $u=1$ in [F1]. For every squarefree $d\mid\prod_{p\in\mathcal P_j}p$, one has $A_d=\lfloor L/d\rfloor=L/d+R_d$ with $|R_d|<1$. Step 1.1 supplies the uniform dimension-one product hypothesis. Since at most $Q_j$ positive integers $d$ lie below $Q_j$, [F1] and step 1.1 imply [F1, F2, step 1.1, given, algebra]
$$\#\{1\le n\le L:p\nmid n\text{ for all }p\in\mathcal P_j\}\ll L\frac{\log P_j}{\log Q_j}+Q_j.$$
The implicit constant is absolute and independent of $j,L,P_1,Q_1$. [F1, F2, step 1.1, given, algebra]

3.1 Retain the interval bounds from step 2.1. Put $M=\sqrt{\log L/2}=\sqrt{\log\sqrt L}$. Since $\log Q_1>1$, the defining formula makes $Q_j$ strictly increasing for $j\ge1$ and its logarithm tends to infinity. Thus $J$ is finite and every $j\le J$ satisfies $\log Q_j\le M$. For $j\ge2$ the definition gives [F3, step 2.1, given, algebra]
$$\frac{\log P_j}{\log Q_j}=\frac{\log P_1}{j^2\log Q_1}.$$
For $j=1$ the same ratio is $\log P_1/\log Q_1$. Since $\sum_{j\ge2}j^{-2}\le1$, the sum of all $J$ ratios is at most twice the first ratio. Also $\log Q_1>\log10>2$ and the formula for $Q_j$ gives $\log Q_j\ge j$ for every $j\ge2$, while it is greater than $1$ for $j=1$. Thus $J\le M$ and $\sum_{j\le J}Q_j\le M e^M$. [F3, given, algebra]

4.1 Since $M>2$ and $L=e^{2M^2}$, the elementary inequality $2\log M+M\le2M^2$ gives $M e^M\le L/M$. Moreover $\log P_1>\log10>1$ and $\log Q_1\le M$, so $L/M\le L\log P_1/\log Q_1$. Every integer outside $S$ misses at least one prime interval. The union bound, step 2.1, and step 3.1 therefore give the asserted $K L\log P_1/\log Q_1$ bound. All unions and sums are finite; an integer may be counted more than once without affecting the upper bound. [F3, step 2.1, step 3.1, given, algebra] ∎

## Source notes

This proof is a local finite-sieve derivation of the density condition used by the batch-55 conditional Tao transfer. It assumes neither the associated restricted exponential-sum estimate nor the unproved averaged correlation theorem, and imports no finite computation.
