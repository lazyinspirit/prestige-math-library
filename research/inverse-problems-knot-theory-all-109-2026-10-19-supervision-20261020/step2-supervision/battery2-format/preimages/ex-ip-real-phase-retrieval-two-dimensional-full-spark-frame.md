---
id: ex-ip-real-phase-retrieval-two-dimensional-full-spark-frame
kind: example
title: A two-dimensional three-vector full-spark real frame
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-real-frame-phase-retrieval
  - def-ip-real-full-spark-measurement-family
  - def-linear-independence
  - def-linear-combination-and-span
  - def-linear-subspace
  - cor-ip-full-spark-sharp-real-phase-measurement-count
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Radu Balan, Pete Casazza, and Dan Edidin, full-spark phase retrieval threshold, Corollary 2.6"
      url: "https://arxiv.org/pdf/math/0412411"
    - title: "Radu Balan, Frames and Phaseless Reconstruction, full lecture notes (2015), Corollary 3.3"
      url: "https://www.norbertwiener.umd.edu/Education/IMA2015/t4/lecture.pdf"
---

## Example

In $\mathbb R^2$ take $\Phi=(a_1,a_2,a_3)$ with $a_1=(1,0)$, $a_2=(0,1)$, and $a_3=(1,1)$. Its intensity map on classes modulo $x\sim -x$ is $[x]\mapsto(x_1^2,x_2^2,(x_1+x_2)^2)$. Every pair is linearly independent, so every pair spans $\mathbb R^2$; consequently, for every partition one side spans $\mathbb R^2$. Equality of the displayed triples therefore forces two signals to be equal up to a global sign.

## Example references

[[def-ip-real-frame-phase-retrieval|Real intensity map and global-sign quotient]]

[[def-ip-real-full-spark-measurement-family|Full-spark condition]]

[[cor-ip-full-spark-sharp-real-phase-measurement-count|Sharp full-spark measurement count]]

[Radu Balan, Pete Casazza, and Dan Edidin, full-spark threshold, Corollary 2.6](https://arxiv.org/pdf/math/0412411)

[Radu Balan, full-spark threshold, Corollary 3.3](https://www.norbertwiener.umd.edu/Education/IMA2015/t4/lecture.pdf)

## Facts & Assumptions

**Given:** The family $a_1=(1,0)$, $a_2=(0,1)$, $a_3=(1,1)$ in $\mathbb R^2$ and the real sign-quotient intensity map.

[F1] [[def-ip-real-full-spark-measurement-family]], [[def-linear-independence]]: a three-vector family in $\mathbb R^2$ is full spark when every two vectors are linearly independent.

[F2] [[def-linear-combination-and-span]], [[def-linear-subspace]]: every span is a subspace containing the listed vectors and is closed under addition and scalar multiplication.

[F3] [[cor-ip-full-spark-sharp-real-phase-measurement-count]]: a full-spark real family with at least $2d-1$ measurements performs phase retrieval.

## Verification


1.1 For every $(u,v)\in\mathbb R^2$,
$$ (u,v)=u a_1+v a_2=(u-v)a_1+v a_3=u a_3+(v-u)a_2,$$
so each pair spans $\mathbb R^2$ by [F2]. For independence, a vanishing combination of $a_1,a_2$ has coordinates $(\alpha,\beta)=(0,0)$; a vanishing combination $\alpha a_1+\beta a_3$ has coordinates $(\alpha+\beta,\beta)=(0,0)$, forcing $\beta=\alpha=0$; and a vanishing combination $\alpha a_2+\beta a_3$ has coordinates $(\beta,\alpha+\beta)=(0,0)$, again forcing $\alpha=\beta=0$. Thus every pair is linearly independent, so [F1] gives full spark. [given, F1, F2, algebra]

2.1 Here $d=2$ and $m=3=2d-1$. Applying [F3] to step 1.1 proves phase retrieval on the stated global-sign quotient; the intensity coordinates are exactly the three squared inner products displayed in the example. [step 1.1, F3, algebra] ∎
