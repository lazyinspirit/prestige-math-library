---
id: thm-no-nonzero-finite-dimensional-weyl-modules-in-characteristic-zero
kind: theorem
title: "No nonzero finite-dimensional Weyl modules at nonzero central character in characteristic zero"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-polynomial-weyl-algebra, def-left-and-right-modules, lem-trace-of-commutators-of-square-matrices-is-zero, def-trace-of-a-square-matrix-over-a-commutative-ring]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "François Dumas, Noncommutative Invariants, §2.1.1"
      url: "https://lmbp.uca.fr/~fdumas/fichiers/B-Mat60.pdf"
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed., §8D"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $k$ be a field of characteristic zero, let $n\geq 1$, and let $0\ne\hbar\in k$. Then the polynomial Weyl algebra $W_n(k;\hbar)$ has no nonzero finite-dimensional unital left module over $k$.

## Facts & Assumptions

**Given:** A field $k$ of characteristic zero, an integer $n\geq 1$, a scalar $0\ne\hbar\in k$, and a nonzero finite-dimensional unital left $W_n(k;\hbar)$-module $M$.

[F1] [[def-polynomial-weyl-algebra]]: the generators satisfy $p_1x_1-x_1p_1=\hbar 1$.

[F2] [[def-left-and-right-modules]]: the module action satisfies $(ab)m=a(bm)$ and $1m=m$.

[F3] [[lem-trace-of-commutators-of-square-matrices-is-zero]]: for square matrices over a commutative ring, the trace of their commutator is zero.

[F4] [[def-trace-of-a-square-matrix-over-a-commutative-ring]]: the trace of a square matrix is the sum of its diagonal entries.

## Proof

1.1 Choose a $k$-basis of $M$ and let $D$ and $X$ be the matrices of the actions of $p_1$ and $x_1$. By [F2], the algebra relation in [F1] gives $DX-XD=\hbar I_d$, where $d=\dim_k M\geq 1$. [given, F1, F2, choose, algebra]

2.1 By [F3], $\operatorname{tr}(DX-XD)=0$. By [F4], $\operatorname{tr}(\hbar I_d)=\hbar d$, so $\hbar d=0$ in $k$. [step 1.1, F3, F4, algebra]

3.1 Characteristic zero makes the image of every positive integer $d$ nonzero in $k$. Since $\hbar\ne0$ and a field has no zero divisors, $\hbar d\ne0$, contradicting step 2.1. Hence no such nonzero module exists. [given, step 2.1, algebra] ∎
