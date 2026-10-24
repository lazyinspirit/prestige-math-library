---
id: lem-qc-sqrt-two-divisibility-criterion
kind: lemma
title: Square root of two divisibility criterion in the eighth cyclotomic ring
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
dependency_level: 1
---

## Statement

For $x=a+b\omega+c\omega^2+d\omega^3\in O$, multiplication by
$\sqrt2=\omega-\omega^3$ has coefficient vector
$(b-d,a+c,b+d,c-a)$. Consequently $\sqrt2$ divides $x$ in $O$ exactly when
$a\equiv c$ and $b\equiv d\pmod2$. Also,

$$x\bar x=P+\sqrt2Q,\qquad P=a^2+b^2+c^2+d^2,\quad Q=a(b-d)+c(b+d),$$

and $2$ divides $x\bar x$ in $O$ exactly when $\sqrt2$ divides $x$.

## Facts & Assumptions

**Given:** $O=\mathbb Z[\omega]$, $\omega^4=-1$, and $\bar\omega=\omega^{-1}=-\omega^3$.

[F1] [[def-qc-dyadic-cyclotomic-ring]]: $O=\mathbb Z[\omega]$ and $\omega^4=-1$; the power-basis coefficients are unique.

## Proof


1.1 Multiplying $(\omega-\omega^3)(a+b\omega+c\omega^2+d\omega^3)$ and reducing every power $\omega^j$ with $\omega^4=-1$ gives $(b-d)+(a+c)\omega+(b+d)\omega^2+(c-a)\omega^3$. By [F1], this product is in $2O$ exactly when all four displayed coefficients are even, which is equivalent to $a+c$ and $b+d$ even, or $a\equiv c$ and $b\equiv d\pmod2$. This proves the first criterion. [F1, given, algebra]

2.1 Expanding $x\bar x$ with $\bar\omega=-\omega^3$ and reducing powers gives the stated $P+\sqrt2Q$. Write $A=a+c$ and $B=b+d$ modulo $2$. Then $P\equiv A+B$ and $Q\equiv AB\pmod2$. The pair $(A+B,AB)$ is $(0,0)$ exactly for $(A,B)=(0,0)$: the other three pairs give $(0,1)$, $(1,0)$, or $(1,0)$. Since $P+\sqrt2Q$ is in $2O$ exactly when its unique power-basis coefficients are all even, equivalently when $P,Q$ are both even, the norm is in $2O$ exactly when $A=B=0$, which by step 1.1 is exactly when $\sqrt2$ divides $x$. [F1, step 1.1, algebra] ∎

## Remarks

Here divisibility means divisibility by an element of $O$: $u\mid v$ iff
$v=uw$ for some $w\in O$. The parity criterion is coefficient arithmetic,
not an ideal-factorization assertion.
