---
dependency_level: 0
id: lem-maynard-finite-divisor-weight-congruence-expansion
kind: lemma
title: "Exact CRT expansion of a finite multidimensional divisor-square weight"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-chinese-remainder-theorem
  - thm-fundamental-theorem-of-arithmetic
  - lem-integer-part
justified_by: []
proof_strategy: direct
axiom_use: "All sums and simultaneous congruences are finite; no choice principle is added."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Maynard, Small gaps between primes (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
      locator: "Section 5, Lemma 5.1 proof, equations (5.1)–(5.2), printed pp. 392–393. This formulation retains general compatible congruences."
verification:
  precheck: pending
---

## Statement

Let $N\ge1$ be real, $k,W\ge1$ integers, $b,h_1,\ldots,h_k$ integers, and $\mathcal D$ a finite set of tuples $d=(d_1,\ldots,d_k)$ of positive integers. Let $\lambda_d$ be real. For integers $n$ put
$$w(n)=\left(\sum_{d\in\mathcal D:\ d_i\mid n+h_i\ \forall i}\lambda_d\right)^2.$$
For $d,e\in\mathcal D$ let $C(d,e)$ mean that the congruences
$$n\equiv b\pmod W,\qquad n\equiv-h_i\pmod{d_i},\qquad n\equiv-h_i\pmod{e_i}\quad(1\le i\le k)$$
are pairwise compatible: the two prescribed residues are congruent modulo the gcd of the corresponding moduli. Set $L(d,e)=\operatorname{lcm}(W,d_1,e_1,\ldots,d_k,e_k)$. Then
$$\sum_{\substack{N\le n<2N\\n\equiv b\ (W)}}w(n)=N\sum_{\substack{d,e\in\mathcal D\\C(d,e)}}\frac{\lambda_d\lambda_e}{L(d,e)}+E,\qquad |E|\le\sum_{\substack{d,e\in\mathcal D\\C(d,e)}}|\lambda_d\lambda_e|.$$
If $W,[d_1,e_1],\ldots,[d_k,e_k]$ are pairwise coprime for a pair $d,e$, that pair is compatible and $L=W\prod_i[d_i,e_i]$. Empty $\mathcal D$ gives both sums and $E$ equal to zero.

## Statement references

[Maynard, Lemma 5.1 proof, equations (5.1)–(5.2)](https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf)

## Facts & Assumptions

**Given:** The finite data in the Statement; $[u,v]$ denotes the positive least common multiple.

[F1] [[thm-chinese-remainder-theorem]]: a finite pairwise-coprime list has one simultaneous residue class modulo its product.

[F2] [[thm-fundamental-theorem-of-arithmetic]]: positive integers have unique prime factorizations.

[F3] [[lem-integer-part]]: every real $x$ has a unique integer $j$ with $j\le x<j+1$. In particular $\lceil x\rceil=-\lfloor-x\rfloor$ satisfies $x\le\lceil x\rceil<x+1$.

## Proof

1.1 Consider any finite list $n\equiv a_j\pmod{q_j}$ with positive moduli. A solution requires $a_j\equiv a_\ell\pmod{\gcd(q_j,q_\ell)}$. Conversely assume all these conditions. For each prime $p$ dividing a modulus, select one index with maximal $p$-adic exponent, breaking ties by the first list position, and prescribe its residue modulo that maximal prime power. Pairwise compatibility makes this residue agree with every other prescription at $p$. The selected prime powers are pairwise coprime, so [F1] gives a residue modulo their product, which is the lcm by [F2]. This solves the original list. Differences of any two solutions are divisible by each maximal prime power, hence by the lcm, so the residue class is unique. Moduli one impose no restriction. [F1, F2, given, construct]

1.2 A single residue class modulo a positive integer $L$ contains $N/L+\epsilon$ integers in $[N,2N)$ with $|\epsilon|\le1$. To see this, write its elements as $a+jL$: the integers $j$ lie in a half-open interval of length $N/L$. Between consecutive integers the counting function changes by one; equivalently its count is the difference of the ceilings of the two endpoints. Each ceiling differs from its argument by a number in $[0,1)$, giving the asserted bound, including integral endpoints. This is the interval-counting consequence of [F3]. [F3, algebra]

2.1 Expand the square defining $w(n)$ and interchange the finite sums. The coefficient $\lambda_d\lambda_e$ is multiplied by the number of solutions in $[N,2N)$ of the congruence list in the Statement. Step 1.1 makes this zero for incompatible pairs and one residue class modulo $L(d,e)$ for compatible pairs. Step 1.2 gives its count as $N/L(d,e)+\epsilon_{d,e}$, with $|\epsilon_{d,e}|\le1$. Summing these identities and applying the finite triangle inequality gives the formula and the stated error. [given, step 1.1, step 1.2, algebra]

3.1 If $W,[d_1,e_1],\ldots,[d_k,e_k]$ are pairwise coprime, prescribe $b$ modulo $W$ and $-h_i$ modulo $[d_i,e_i]$. These are compatible by [F1], and [F2] makes their lcm the displayed product. An empty coefficient list gives the zero weight and empty sums.  [F1, F2, step 2.1, algebra] ∎

## Proof scope

This is an exact finite expansion with an explicit remainder. It supplies no asymptotic evaluation of the main quadratic sum, no bound for a growing coefficient array, and no prime-weighted progression estimate.
