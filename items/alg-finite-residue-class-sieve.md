---
id: alg-finite-residue-class-sieve
kind: algorithm
title: "Finite residue-class sieve on a bounded interval"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-sifted-sum-and-sieve-density-product
  - def-prime
  - thm-canonical-prime-factorisation
  - def-integers-modulo-n
justified_by:
  - thm-finite-residue-class-sieve-correctness
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 12, §12.1"
      url: "https://kskedlaya.org/ant/chap-brun.html"
    - title: "D. R. Heath-Brown, Lectures on sieves, §1"
      url: "https://arxiv.org/pdf/math/0209360"
verification:
  precheck: n/a
---

## Definition

**Input:** Integers $N\ge1$ and $z\ge2$; nonnegative real weights
$a(1),\ldots,a(N)$; and, for each prime $p<z$, a set of forbidden residue
classes $\Omega_p\subseteq\mathbb Z/p\mathbb Z$.

**Output:** The surviving index set $C\subseteq\{1,\ldots,N\}$, its total
weight, and the table of local counts $A_d$ for all squarefree divisors of
$P(z)$.

**Instructions:**

1. Examine each integer $m$ with $2\le m<z$. Test the integers
   $d=2,\ldots,m-1$ for divisibility into $m$. Include $m$ in the sieve-prime
   list exactly when none of these tests succeeds. This produces the primes
   below $z$ in increasing order; write the list as $p_0,\ldots,p_{r-1}$.
2. Start with the list $\mathcal D_0=[1]$. For $i=0,\ldots,r-1$, form
   $\mathcal D_{i+1}$ by concatenating the current list $\mathcal D_i$ with the
   list $(d p_i)_{d\in\mathcal D_i}$ in its current order. Set
   $\mathcal D:=\mathcal D_r$. For each $d\in\mathcal D$, set $A_d:=0$.
3. Store one Boolean flag $b_n$ for each $n\in\{1,\ldots,N\}$, initially true.
   For each $n=1,\ldots,N$, test every sieve prime $p$. If
   $[n]_p\in\Omega_p$, set $b_n$ to false. Then, for each $d\in\mathcal D$,
   if $[n]_p\in\Omega_p$ for every prime $p\mid d$, add $a(n)$ to $A_d$.
4. Set $C:=\{n\in\{1,\ldots,N\}:b_n\text{ is true}\}$. Return $C$,
   $\sum_{n\in C}a(n)$, and the computed table $(d,A_d)_{d\in\mathcal D}$.

All loops are over explicitly finite lists. Canonical prime factorisation makes
the subset-product list in step 2 a list of the squarefree divisors of $P(z)$
with no repetitions.

## Definition references

[[def-sifted-sum-and-sieve-density-product]]

[[def-prime]]

[[thm-canonical-prime-factorisation]]

[[def-integers-modulo-n]]

[Kedlaya, *Notes on Analytic Number Theory*, Ch. 12, §12.1](https://kskedlaya.org/ant/chap-brun.html)

[Heath-Brown, *Lectures on sieves*, §1](https://arxiv.org/pdf/math/0209360)
