---
id: thm-prime-ideal-decomposition-algorithm-correct
kind: theorem
title: The integral-basis prime decomposition algorithm is correct and terminates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - alg-prime-ideal-decomposition-from-integral-basis
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - def-nilradical-and-reduced-ring
  - def-finite-field-and-its-order
  - thm-polynomial-ring-over-a-field-is-a-ufd
  - thm-integer-column-hnf-terminates-and-is-canonical
  - def-radical-of-an-ideal
  - thm-z-mod-p-is-a-field
  - thm-cayley-hamilton
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-integral-basis-and-power-integral-basis
  - thm-ring-of-integers-free-of-rank-degree
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - cor-polynomial-ring-over-a-field-is-euclidean
  - thm-polynomial-division-algorithm-over-a-field
  - def-left-right-and-two-sided-ideal
  - def-prime-and-maximal-ideals
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Algorithms 4.3.7–4.3.9"
      url: "https://wstein.org/books/ant/ant.pdf"
verification: {}
---

## Statement

For every number field $K$ with an explicit integral basis and multiplication table and every rational prime $p$, the finite-algebra algorithm terminates and returns exactly the prime ideals $P_i$ above $p$, with integral bases, ramification exponents $e_i$, and residue degrees $f_i$, satisfying $p\mathcal O_K=\prod_iP_i^{e_i}$. No condition that $p$ avoid the index of a chosen power order is required.

## Statement references

[Stein, Algorithms 4.3.7–4.3.9, pp. 57–59](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** A number field, its maximal order in an integral basis, and a rational prime $p$.

[F1] The ring of integers is free of rank $n=[K:\mathbb Q]$, and reduction modulo $p$ gives an $n$-dimensional algebra over the field $\mathbb F_p=\mathbb Z/p$ ([[def-number-field]], [[def-ring-of-integers-of-a-number-field]], [[def-integral-basis-and-power-integral-basis]], [[thm-ring-of-integers-free-of-rank-degree]], [[thm-z-mod-p-is-a-field]]).

[F2] The nilradical is exactly the set of nilpotent elements, and a quotient by it is reduced ([[def-nilradical-and-reduced-ring]], [[def-radical-of-an-ideal]]).

[F3] Pairwise comaximal ideals satisfy the finite Chinese remainder theorem ([[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

[F4] Every nonzero integral ideal in a number field has a unique finite factorization into prime ideals; the localizations at those primes have the discrete valuation structure established in that proof ([[thm-number-field-integral-ideal-factorisation-in-zf]]).

[F5] A polynomial ring over a field is Euclidean, has exact division, and has unique factorization ([[cor-polynomial-ring-over-a-field-is-euclidean]], [[thm-polynomial-division-algorithm-over-a-field]], [[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[F6] A finite-dimensional endomorphism satisfies its characteristic polynomial ([[thm-cayley-hamilton]]).

[F7] A prime above $p$ is defined by contraction, its residue degree is the field-extension degree, and its ramification index is the exponent in the prime-ideal factorization ([[def-prime-above-and-residue-degree]], [[def-ramification-index]]).

[F8] The column-Hermite algorithm terminates and returns the canonical basis of the generated lattice ([[thm-integer-column-hnf-terminates-and-is-canonical]]).

[F9] A prime ideal is a proper ideal $P$ such that $ab\in P$ implies $a\in P$ or $b\in P$; “above,” residue degree, and ramification exponent use the number-field conventions in the cited definitions ([[def-left-right-and-two-sided-ideal]], [[def-prime-and-maximal-ideals]], [[def-prime-above-and-residue-degree]], [[def-ramification-index]]).

## Proof



1.1 In the $n$-dimensional $\mathbb F_p$-algebra $A=\mathcal O_K/p\mathcal O_K$, multiplication by a nilpotent $x$ is a nilpotent endomorphism. A basis adapted to the increasing kernels of its powers makes this endomorphism upper triangular with zero diagonal, so its characteristic polynomial is $T^n$; [F6] then gives $M_x^n=0$, and applying this to $1$ gives $x^n=0$. Conversely $x^n=0$ makes $x$ nilpotent. Nilpotents form an ideal: if $x^r=y^s=0$, every term in $(x+y)^{r+s}$ contains either $x^r$ or $y^s$, and multiplying a nilpotent by any element preserves nilpotence. Thus the finite scan $x^n=0$ returns exactly the nilradical $J$. [F1, F2, F6, given, algebra]

1.2 The quotient $R=A/J$ is finite and reduced. For any nonzero $x\in R$, the multiplicative set $S_x=\{1,x,x^2,\ldots\}$ avoids zero, so the zero ideal is disjoint from $S_x$. Among the finitely many ideals disjoint from $S_x$, choose one maximal by inclusion, say $I$. It is prime: if $ab\in I$ with $a,b\notin I$, maximality gives $s_1=i_1+ra\in S_x$ and $s_2=i_2+tb\in S_x$, with $i_1,i_2\in I$; expanding $s_1s_2$ and using $ab\in I$ gives $s_1s_2\in I$, contradicting $S_x\cap I=\varnothing$. Since $R/I$ is a finite integral domain, multiplication by any nonzero class is injective and hence surjective, so every nonzero class is invertible; thus $I$ is maximal and excludes $x$. Hence the intersection of the maximal ideals is zero. Distinct maximal ideals are comaximal because their sum strictly contains either one; [F3] identifies $R$ with a finite product of finite fields. All selections here are from finite sets. [F1, F2, F3, algebra]

1.3 In a product of $k$ finite extensions of $\mathbb F_p$, the kernel of $x\mapsto x^p-x$ is the product of the $k$ prime fields and has $\mathbb F_p$-dimension $k$: in each field $X^p-X$ has the $p$ elements of $\mathbb F_p$ as roots and no others because its degree is $p$. If $k=1$ the component is a field. If $k>1$, choose a vector outside the diagonal $\mathbb F_p$; its coordinates lie in $\mathbb F_p$. Its minimal polynomial is the product of $(X-c)$ over its distinct coordinates: a polynomial annihilates the vector exactly when it vanishes at every coordinate. This is a squarefree product of at least two linear factors. Finite search finds one root $c$; set $m_1=X-c$, $m_2=m/m_1$, and compute $u_1m_1+u_2m_2=1$. Under $\mathbb F_p[\alpha]\cong\mathbb F_p[X]/(m_1m_2)$, the value $(u_1m_1)(\alpha)$ is $0$ modulo $m_1$ and $1$ modulo $m_2$, hence is neither $0$ nor $1$ and is an idempotent. The map $z\mapsto(ez,(1-e)z)$ is a ring isomorphism from the component to $eC\times(1-e)C$, with inverse $(a,b)\mapsto a+b$; both factors are nonzero and have smaller $\mathbb F_p$-dimension. Recursion terminates and gives the finite-field factors of $R$. [F1, F5, given, choose, algebra]

2.1 Lift each nontrivial quotient idempotent through the nilradical of its current component $C$. Choose a coordinate lift $x$, set $f=x^2-x$ and $u=2x-1$. The error $f$ is nilpotent because the image of $x$ is idempotent modulo the nilradical. Since $u^2=1+4f$ and $f$ is nilpotent, the finite geometric series in $-4f$ inverts $u^2$, so $u$ is a unit. The update $x'=x-u^{-1}f$ satisfies $(x')^2-x'=u^{-2}f^2$. If $C$ has $\mathbb F_p$-dimension $m$, each nilpotent has $m$-th power zero by the same nilpotent-operator argument as step 1.1, and its nilradical has at most $p^m$ elements. Any product of $p^m(m-1)+1$ nilradical elements repeats one element at least $m$ times, so the nilradical has that power zero. After $t$ updates the error lies in the $2^t$-th power of the nilradical, so it becomes zero after finitely many updates. Each lifted nontrivial idempotent splits the component as $xC\times(1-x)C$, with both factors nonzero and lower dimensional, and the finite recursion terminates. [F1, F2, F6, step 1.1, algebra]

3.1 Factor $p\mathcal O_K=\prod_{i=1}^g\mathfrak P_i^{e_i}$ by [F4]. Distinct prime ideals in this factorization are distinct maximal ideals, hence are pairwise comaximal; the Chinese remainder theorem [F3] gives $A\cong\prod_{i=1}^g\mathcal O_K/\mathfrak P_i^{e_i}$. Each factor is local: every maximal ideal containing $\mathfrak P_i^{e_i}$ contains $\mathfrak P_i$, and since $\mathfrak P_i$ is maximal it is the only such maximal ideal. Its nilradical is $\mathfrak P_i/\mathfrak P_i^{e_i}$: a nilpotent class lies in $\mathfrak P_i$ because its power lies in $\mathfrak P_i^{e_i}\subseteq\mathfrak P_i$, and every class in $\mathfrak P_i$ has its $e_i$-th power in $\mathfrak P_i^{e_i}$. Each local factor has no idempotents other than $0,1$, because for $e^2=e$, either $e$ or $1-e$ is outside its maximal ideal and therefore a unit, forcing the other to be zero. Thus the primitive idempotents of this product are exactly its factor identities. A terminal component of the algorithm has reduced quotient a field; its identity is primitive, since a nontrivial idempotent would descend to one in the field or be a nilpotent idempotent. The algorithm's lifted idempotents therefore produce exactly the CRT factors, up to permutation. [F3, step 2.1]
For each terminal $C_j$, the composite $\mathcal O_K\to A\to C_j\to C_j/J_j$ has an ideal kernel $P_j$ by [F9]; it is proper, and a product maps to zero in the residue field exactly when one factor maps to zero, so $P_j$ is prime above $p$. Under the factor identification, $P_j=\mathfrak P_i$ and $C_j\cong\mathcal O_K/\mathfrak P_i^{e_i}$. Therefore $J_j=\mathfrak P_i/\mathfrak P_i^{e_i}$, and for $0\le k<e_i$ its $k$-th power is $\mathfrak P_i^k/\mathfrak P_i^{e_i}\ne0$, since distinct powers have distinct prime-ideal factorizations; its $e_i$-th power is zero. Thus the least exponent found by the algorithm is exactly the ramification exponent. The quotient $C_j/J_j\cong\mathcal O_K/\mathfrak P_i$ has $\mathbb F_p$-dimension equal to the residue degree by [F7]. Conversely, every prime over $p$ is one of the $\mathfrak P_i$ in the factorization, so it is exactly one of the returned kernels. [F3, F4, F7, F9, step 2.1, algebra]

4.1 The chain $C_i\supsetneq J_i\supsetneq\cdots\supsetneq J_i^{e_i-1}\supsetneq0$ has $e_i$ nonzero $\mathbb F_p$-dimension layers, while $\dim_{\mathbb F_p}C_i\le n$. Hence $e_i\le n$ without using the separate published fundamental-identity item. The prime factorization in [F4] then gives $p\mathcal O_K=\prod_iP_i^{e_i}$. [F1, F4, step 3.1, algebra]

5.1 Each residue-kernel preimage in $\mathcal O_K$ is an ideal by [F9] and contains $p\mathcal O_K$, so its coordinate lattice contains $p\mathbb Z^n$ and has full rank. Lift a basis of the residue subspace and adjoin $p e_1,\ldots,p e_n$; these columns generate the full preimage. By [F8] their Hermite reduction returns a basis. All scans are finite, recursive component dimensions strictly decrease, nilradical lifting terminates by step 2.1, and Hermite reduction terminates. This proves exactness and termination of the full algorithm. [F1, F8, F9, step 1.1, step 1.3, step 2.1, step 3.1] ∎

