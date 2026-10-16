---
id: lem-qc-dyadic-cyclotomic-unit-circle
kind: lemma
title: Unit-modulus elements of the dyadic cyclotomic ring
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - lem-qc-dyadic-coefficient-encoding
  - lem-qc-sqrt-two-divisibility-criterion
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
dependency_level: 2
---

## Statement

If $z\in D$ and $z\bar z=1$, then $z=\omega^j$ for some $j\in\{0,1,\ldots,7\}$.

## Facts & Assumptions

**Given:** $D=O[1/2]$, $O=\mathbb Z[\omega]$, $\omega^4=-1$, and complex conjugation sends $\omega$ to $-\omega^3$.

[F1] [[lem-qc-dyadic-coefficient-encoding]]: every $z\in D$ has a unique canonical numerator $a_0+a_1\omega+a_2\omega^2+a_3\omega^3$ over a power of $2$.

[F2] [[lem-qc-sqrt-two-divisibility-criterion]]: $2\mid x\bar x$ in $O$ iff $\sqrt2\mid x$ in $O$, and $x\bar x=P+\sqrt2Q$ with $P=\sum a_j^2$ for the integer coefficients of $x$.

## Proof


1.1 For nonzero $z$, write its canonical form $z=a/2^r$ using [F1]. If $r>0$, then $a\bar a=2^{2r}$, so $2\mid a\bar a$ in $O$ and [F2] gives $a=\sqrt2a_1$ for some $a_1\in O$. Whenever $a_j\in O$ has $a_j\bar a_j=2^m$ with $m>0$, the same argument gives $a_j=\sqrt2a_{j+1}$ and $a_{j+1}\bar a_{j+1}=2^{m-1}$. Applying this for $m=2r,2r-1,\ldots,1$ yields $a=(\sqrt2)^{2r}a_{2r}=2^ra_{2r}$. All canonical coefficients of $a$ are then even, contradicting the minimality of $r$. Thus $r=0$ and $z\in O$. [F1, F2, given, algebra]

2.1 Write $z=a+b\omega+c\omega^2+d\omega^3$ with integer coefficients. Direct multiplication gives $z\bar z=P+\sqrt2Q=1$, where $P=a^2+b^2+c^2+d^2$ and $Q=a(b-d)+c(b+d)$ by [F2]. The numbers $1$ and $\sqrt2$ are linearly independent over $\mathbb Q$: if $\sqrt2=m/n$ in lowest terms, then $m^2=2n^2$ forces $m$ even and then $n$ even, a contradiction. Thus $P=1$ and $Q=0$. Four integer squares sum to $1$ only when exactly one coefficient is $1$ or $-1$ and the others are zero. Hence $z\in\{\pm1,\pm\omega,\pm\omega^2,\pm\omega^3\}=\{\omega^j:0\le j<8\}$. [F2, step 1.1, algebra] ∎

