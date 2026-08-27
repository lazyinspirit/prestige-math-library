---
id: prop-integral-pell-solutions-form-a-group
kind: proposition
title: "Integral Pell solutions form an abelian group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pell-equation, def-norm-on-integer-square-root-order, lem-pell-norm-multiplication]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Pell's Equation, I"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn1.pdf"
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
pipeline_run: null
---

## Statement

Fix a positive nonsquare integer $D$, and identify an integral solution
$(x,y)$ of [[def-pell-equation]] with the element $x+y\sqrt D\in\mathbb Z[\sqrt D]$.
Then the set
$$G_D:=\{\alpha\in\mathbb Z[\sqrt D]:N_D(\alpha)=1\}$$
is an abelian group under multiplication in $\mathbb Z[\sqrt D]$.

## Facts & Assumptions

**Given:** The set $G_D=\{\alpha\in\mathbb Z[\sqrt D]:N_D(\alpha)=1\}$.

[F1] For $\alpha=x+y\sqrt D\in\mathbb Z[\sqrt D]$, the equality $N_D(\alpha)=1$ is exactly the equation $x^2-Dy^2=1$, so $G_D$ is the set of integral Pell solutions written as elements of $\mathbb Z[\sqrt D]$ ([[def-pell-equation]], [[def-norm-on-integer-square-root-order]]).

[F2] The Pell norm is multiplicative: $N_D(\alpha\beta)=N_D(\alpha)N_D(\beta)$ for all $\alpha,\beta\in\mathbb Z[\sqrt D]$ ([[lem-pell-norm-multiplication]]).

[F3] In $\mathbb Z[\sqrt D]$, the product is
$$
(x+y\sqrt D)(u+v\sqrt D)=(xu+D yv)+(xv+yu)\sqrt D.
$$
([[def-norm-on-integer-square-root-order]]).

## Proof

**Proof technique:** direct.

1.1 The element $1=1+0\sqrt D$ satisfies $N_D(1)=1$, so it lies in $G_D$. If $\alpha,\beta\in G_D$, then [F2] gives $$N_D(\alpha\beta)=N_D(\alpha)N_D(\beta)=1,$$ so $\alpha\beta\in G_D$. [F1, F2, given, algebra]

1.2 If $\alpha=x+y\sqrt D\in G_D$, then [F1] gives $x^2-Dy^2=1$, hence $$\alpha(x-y\sqrt D)=x^2-Dy^2=1.$$ Therefore $\alpha^{-1}=x-y\sqrt D\in G_D$, since $N_D(x-y\sqrt D)=1$ by [F1]. [F1, given, algebra]

2.1 Associativity is inherited from multiplication of real numbers, and [F3] is symmetric in $(x,y)$ and $(u,v)$, so multiplication on $G_D$ is commutative. Together with steps 1.1 and 1.2, this proves that $G_D$ is an abelian group. [F3, step 1.1, step 1.2, algebra] ∎
