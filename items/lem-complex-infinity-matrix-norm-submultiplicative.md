---
id: lem-complex-infinity-matrix-norm-submultiplicative
kind: lemma
title: The complex infinity matrix norm is compatible and submultiplicative
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-complex-infinity-matrix-norm]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §10.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

Use $\|A\|_{\infty,\mathbb C}$ and $\|x\|_\infty$ from [[def-complex-infinity-matrix-norm]]. For compatible complex matrices and vectors with every row and column dimension positive,
$$\|Ax\|_\infty\le\|A\|_{\infty,\mathbb C}\|x\|_\infty,\qquad \|AB\|_{\infty,\mathbb C}\le\|A\|_{\infty,\mathbb C}\|B\|_{\infty,\mathbb C}.$$

## Facts & Assumptions

**Given:** Complex matrices $A,B$ and vector $x$ of compatible finite dimensions.

[F1] Complex absolute value is $|u+iv|=\sqrt{u^2+v^2}$ ([[def-complex-infinity-matrix-norm]]).

[F2] For real $x_1,x_2,y_1,y_2$, $(x_1y_1+x_2y_2)^2\le(x_1^2+x_2^2)(y_1^2+y_2^2)$, since the difference is $(x_1y_2-x_2y_1)^2\ge0$.

## Proof

1.1 If $z=x_1+ix_2$ and $w=y_1+iy_2$, then $|zw|^2=(x_1^2+x_2^2)(y_1^2+y_2^2)$ by expansion. Also $|z+w|^2=|z|^2+|w|^2+2(x_1y_1+x_2y_2)\le(|z|+|w|)^2$ by [F2]. Nonnegativity gives $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$. [F1, F2, algebra]

2.1 For each row $i$, [F1] and step 1.1 give $|(Ax)_i|\le\sum_j|a_{ij}||x_j|\le(\sum_j|a_{ij}|)\|x\|_\infty$. Taking the maximum over $i$ proves compatibility. [given, F1, step 1.1, algebra]

3.1 For each row $i$, $\sum_j|(AB)_{ij}|\le\sum_j\sum_k|a_{ik}||b_{kj}|=\sum_k|a_{ik}|\sum_j|b_{kj}|\le(\sum_k|a_{ik}|)\|B\|_{\infty,\mathbb C}$. Taking the maximum over $i$ proves submultiplicativity. [step 1.1, algebra] ∎

