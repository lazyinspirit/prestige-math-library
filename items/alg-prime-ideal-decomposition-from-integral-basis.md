---
id: alg-prime-ideal-decomposition-from-integral-basis
kind: algorithm
title: Prime ideal decomposition from an integral basis
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 1
deps:
  - alg-integer-column-hermite-normal-form
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-integral-basis-and-power-integral-basis
  - thm-ring-of-integers-free-of-rank-degree
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - def-nilradical-and-reduced-ring
  - def-finite-field-and-its-order
  - thm-z-mod-p-is-a-field
  - cor-polynomial-ring-over-a-field-is-euclidean
  - thm-polynomial-division-algorithm-over-a-field
  - thm-polynomial-ring-over-a-field-is-a-ufd
  - def-radical-of-an-ideal
  - def-left-right-and-two-sided-ideal
  - def-prime-and-maximal-ideals
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Algorithms 4.3.7–4.3.9"
      url: "https://wstein.org/books/ant/ant.pdf"
verification:
  precheck: n/a
---

## Definition

Input a number field $K$ of degree $n$ with an explicit integral basis $\omega_1=1,\omega_2,\ldots,\omega_n$, its exact multiplication table, and a rational prime $p$. Work in the finite algebra $A=\mathcal O_K/p\mathcal O_K\cong\mathbb F_p^n$ using coordinate vectors in lexicographic order.

1. Enumerate every $x\in A$ and retain the vectors satisfying $x^n=0$. Row-reduce them over $\mathbb F_p$ to obtain the nilradical $J$. Form $R=A/J$ and its quotient multiplication table.

2. Recursively split each finite reduced component $C$ of $R$. Compute $V=\ker(x\mapsto x^p-x)$. If $\dim_{\mathbb F_p}V=1$, declare $C$ terminal. Otherwise take the lexicographically first $\alpha\in V\setminus\mathbb F_p$, compute its minimal polynomial by the first linear dependence among $1,\alpha,\alpha^2,\ldots$, and scan the canonical representatives $0,1,\ldots,p-1$ for a root $c$. Set $m_1=X-c$, $m_2=m/m_1$, compute $u_1,u_2$ by the deterministic extended Euclidean algorithm with $u_1m_1+u_2m_2=1$, and split using the nontrivial idempotent $(u_1m_1)(\alpha)$. Recurse on both factors.

3. Lift each split idempotent through the nilradical. Choose the least coordinate lift $x$ in the current component, set $f=x^2-x$ and $u=2x-1$, find the first inverse of $u$ by finite search, and replace $x$ by $x-u^{-1}f$. Repeat until $x^2=x$, split the component as $xC\times(1-x)C$, and continue recursively.

4. For every terminal component $C_i$, enumerate its nilpotent vectors to obtain its maximal ideal $J_i$. Compute $J_i,J_i^2,\ldots$ by the multiplication table until the first zero power; return the least exponent $e_i$ with $J_i^{e_i}=0$. Return $f_i=\dim_{\mathbb F_p}(C_i/J_i)$.

5. The kernel of the composite map $\mathcal O_K\to A\to C_i\to C_i/J_i$ is the prime ideal $P_i$ over $p$. Recover its coordinate subspace in $A$, lift a basis of that subspace together with $p e_1,\ldots,p e_n$ to integer columns, and apply the exact column-Hermite algorithm to obtain a $\mathbb Z$-basis of $P_i$. Output these bases and the pairs $(e_i,f_i)$.

The power-order index is unrestricted: the input is the maximal order with an integral basis, so the procedure applies even when $p$ divides the index of a chosen power order.

## Definition references

[Stein, Algorithms 4.3.7–4.3.9, pp. 57–59](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** The maximal order in an explicit integral basis, its multiplication table, and a rational prime $p$.

[F1] The ring of integers is a free $\mathbb Z$-module of rank $n=[K:\mathbb Q]$ ([[thm-ring-of-integers-free-of-rank-degree]]).

[F2] The quotient $\mathbb Z/p$ is a field for prime $p$, and its cardinality is $p$ ([[thm-z-mod-p-is-a-field]], [[def-finite-field-and-its-order]]).

[F3] The nilradical consists exactly of nilpotent elements; quotienting by it gives a reduced ring ([[def-nilradical-and-reduced-ring]], [[def-radical-of-an-ideal]]).

[F4] The output exponents and residue degrees use the factorization, prime-above, and residue-degree conventions for number fields ([[thm-number-field-integral-ideal-factorisation-in-zf]], [[def-prime-above-and-residue-degree]], [[def-ramification-index]]).

[F5] The column-Hermite procedure returns a basis of the generated full-rank integer lattice ([[alg-integer-column-hermite-normal-form]]).

[F6] An ideal of a commutative ring is an additive subgroup closed under multiplication by every ring element ([[def-left-right-and-two-sided-ideal]]).

[F7] A prime ideal is a proper ideal $P$ such that $ab\in P$ implies $a\in P$ or $b\in P$ ([[def-prime-and-maximal-ideals]]).

## Verification



1.1 The quotient algebra has exactly $p^n$ coordinate vectors, so the nilpotence scan in step 1 and every row reduction are finite. Each polynomial-power computation uses the finite multiplication table and exact arithmetic in $\mathbb F_p$. [F1, F2, F3, given, algebra]

1.2 Every split searches a finite component for a vector, root, Bezout coefficients, lift, and inverse. The reduced-component split has two nonzero factors of strictly smaller dimension; the lifted Newton update squares a nilpotent error, so both recursive splitting and each lifting loop terminate. [F2, F5, given, algebra]

2.1 The power search in step 4 is finite because each terminal nilradical is nilpotent in a finite-dimensional algebra. Each kernel preimage contains $p\mathbb Z^n$, hence the HNF input has full row rank; the resulting routine uses the terminating HNF algorithm. [F1, F5, step 1.1, step 1.2, algebra] ∎

