---
id: lem-rank-one-resolvent-update-and-trace-bound
kind: lemma
title: "Rank-one resolvent update and trace bound for a positive semidefinite matrix"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Chapter 3, §3.3"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
    - title: "Junyi Liao, Random Matrix Theory, Chapter 2, §2.1.3"
      url: "https://jurrivhleon.github.io/notes/rmt.pdf"
---

## Statement

Let $B$ be a real symmetric non-negative $d\times d$ matrix, let $x\in\mathbb R^d$, and let $z=u+i\eta$ with $u\in\mathbb R$ and $\eta>0$. Put $R=(B-zI)^{-1}$ and $R_x=(B+xx^{\mathsf T}-zI)^{-1}$. Then $1+x^{\mathsf T}Rx\ne0$,
$$R_x=R-\frac{Rxx^{\mathsf T}R}{1+x^{\mathsf T}Rx},$$
and
$$\left|\operatorname{tr}R_x-\operatorname{tr}R\right|\le\frac1\eta.$$

## Statement references

Bai and Silverstein, Chapter 3, §3.3, printed pp. 53–54 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

Junyi Liao, Chapter 2, §2.1.3, printed pp. 35–36 ([complete lecture notes](https://jurrivhleon.github.io/notes/rmt.pdf)).

## Facts & Assumptions

**Given:** The real symmetric matrix $B$, vector $x$, and non-real spectral parameter $z$ in the Statement.

[F1] A real symmetric matrix has an orthonormal eigenbasis with real eigenvalues ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

## Proof

1.1 By [F1], write $B=U\operatorname{diag}(\lambda_1,\ldots,\lambda_d)U^{\mathsf T}$ with $\lambda_j\ge0$. Thus $R$ exists, is normal, and
$$x^{\mathsf T}Rx=\sum_j\frac{(U^{\mathsf T}x)_j^2}{\lambda_j-z},\qquad
\operatorname{Im}(x^{\mathsf T}Rx)=\eta\sum_j\frac{(U^{\mathsf T}x)_j^2}{(\lambda_j-u)^2+\eta^2}.$$
If $x\ne0$, this imaginary part is strictly positive, so $1+x^{\mathsf T}Rx\ne0$; if $x=0$, the denominator is $1$. [given, F1, algebra]

1.2 Direct multiplication verifies
$$(B+xx^{\mathsf T}-zI)\left(R-\frac{Rxx^{\mathsf T}R}{1+x^{\mathsf T}Rx}\right)=I.$$
Since $B+xx^{\mathsf T}$ is also real symmetric and $z\notin\mathbb R$, its resolvent exists; hence the displayed expression is $R_x$. [step 1.1, algebra]

2.1 Taking traces in step 1.2 gives
$$\operatorname{tr}(R_x-R)=-\frac{x^{\mathsf T}R^2x}{1+x^{\mathsf T}Rx}.$$
In the eigenbasis of [F1],
$$|x^{\mathsf T}R^2x|\le\sum_j\frac{(U^{\mathsf T}x)_j^2}{(\lambda_j-u)^2+\eta^2}
=\frac{\operatorname{Im}(x^{\mathsf T}Rx)}{\eta}.$$
Also $|1+x^{\mathsf T}Rx|\ge\operatorname{Im}(x^{\mathsf T}Rx)$ when $x\ne0$; for $x=0$ the trace difference is zero. Combining these inequalities proves the stated $1/\eta$ bound. [F1, step 1.2, algebra] ∎
