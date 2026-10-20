---
id: lem-hermitian-rank-one-resolvent-update-and-trace-norm-bound
kind: lemma
title: "Hermitian rank-one resolvent update and trace-norm bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - thm-complex-spectral-theorem-for-normal-endomorphisms
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
    - title: "Z. D. Bai and J. W. Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed."
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

Let $B\in\mathbb C^{d\times d}$ be Hermitian positive semidefinite, let $x\in\mathbb C^d$, and let $z=u+i\eta$ with $u\in\mathbb R$ and $\eta>0$. Set $R=(B-zI)^{-1}$ and $R_x=(B+xx^*-zI)^{-1}$. For the trace norm $\|M\|_1$, defined as the sum of the singular values of $M$, one has $1+x^*Rx\ne0$,
$$R_x=R-\frac{Rxx^*R}{1+x^*Rx},\qquad \|R_x-R\|_1\le\frac1\eta,\qquad |\operatorname{tr}R_x-\operatorname{tr}R|\le\frac1\eta.$$

## Statement references

Bai, Miao, and Pan, the rank-one identity in §2, printed pp. 12–13 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

Bai and Silverstein, Chapter 3, §3.3, printed pp. 53–54 ([full book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Facts & Assumptions

**Given:** The Hermitian positive semidefinite matrix $B$, vector $x$, and $z$ in the Statement.

[F1] A finite-dimensional Hermitian matrix has an orthonormal eigenbasis with real eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Proof

**Given:** $B$, $x$, and $z=u+i\eta$ with $\eta>0$.

1.1 By [F1], write $B=U\operatorname{diag}(\lambda_1,\ldots,\lambda_d)U^*$ with $\lambda_j\ge0$. If $c=U^*x$, then $$q:=x^*Rx=\sum_j\frac{|c_j|^2}{\lambda_j-z},\qquad \operatorname{Im}q=\eta\sum_j\frac{|c_j|^2}{|\lambda_j-z|^2}=\eta\|Rx\|_2^2.$$ For $x\ne0$ this is positive, so $1+q\ne0$; for $x=0$ the denominator is one. [given, F1, algebra]

2.1 Direct multiplication, using step 1.1, gives $$ (B+xx^*-zI)\left(R-\frac{Rxx^*R}{1+x^*Rx}\right)=I.$$ The Hermitian matrix $B+xx^*$ has a resolvent at nonreal $z$, so the displayed inverse is $R_x$. [step 1.1, algebra]

3.1 The difference in step 2.1 is a rank-one matrix. Its trace norm equals the product of the two vector norms divided by $|1+q|$; normality of $R$ makes both vector norms $\|Rx\|_2$. Since $|1+q|\ge\operatorname{Im}q=\eta\|Rx\|_2^2$, step 1.1 gives $\|R_x-R\|_1\le1/\eta$. The inequality $|\operatorname{tr}M|\le\|M\|_1$ then gives the trace bound. The case $x=0$ has both differences zero. [step 1.1, step 2.1, algebra] ∎

## Source notes

Bai, Miao, and Pan, §2, equations (2.1)–(2.2), printed pp. 12–13 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).
