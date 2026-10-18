---
id: thm-leverage-score-row-sampling-subspace-embedding
kind: theorem
title: Leverage-score row sampling embeds the column space
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 3
deps:
  - def-oblivious-l2-subspace-embedding
  - def-subspace-leverage-scores
  - lem-subspace-leverage-score-identities
  - alg-leverage-score-row-sampling-sketch
  - lem-bounded-independent-matrix-bernstein-via-trace-exponential
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra,
        §2.4, Theorem 17"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "David Woodruff, 15-859T Lecture 4.2, Leverage Score Sampling gives a
        Subspace Embedding, Claims 2–3"
      url: "https://www.cs.cmu.edu/afs/cs/user/dwoodruf/www/teaching/15859-fall20/lec\
        ture4_2.pdf"
    - title: "Joel A. Tropp, An Introduction to Matrix Concentration Inequalities,
        §6.6"
      url: "https://tropp.caltech.edu/books/Tro14-Introduction-Matrix-preprint.pdf"
verification:
  precheck: pass
---

## Statement

Let $Q\in\mathbb K^{n\times d}$, $d\ge1$, have orthonormal columns,
and let $\ell_i=\|e_i^*Q\|_2^2$. Let $\pi$ be a probability vector
with $\pi_i\ge\beta\ell_i/d$ for $0<\beta\le1$, and draw $S$ by
[[alg-leverage-score-row-sampling-sketch]] with replacement. For
$0<\varepsilon,\delta<1$, if
$$
m\ge\frac{8d}{\beta\varepsilon^2}\log\left(\frac{2d}{\delta}\right),
$$
then with probability at least $1-\delta$,
$$
\|Q^*S^*SQ-I_d\|_2\le\varepsilon.
$$
Equivalently, $S$ is an $\varepsilon$-subspace embedding for
$\operatorname{Ran}(Q)$. In the usual confidence range
$0<\delta\le1/2$, the simpler sufficient condition
$$
m\ge\frac{16d}{\beta\varepsilon^2}\log\left(\frac d\delta\right)
$$
follows. For a matrix $A$ of rank $d$, any orthonormal basis $Q$ of
$\operatorname{Ran}(A)$ gives the corresponding embedding guarantee on
$\operatorname{Ran}(A)$.

## Facts & Assumptions

**Given:** An orthonormal $Q$, the stated sampling probabilities and parameters, and the with-replacement sketch draw.

[F1] The leverage scores are basis-independent, sum to $d$, and satisfy $0\le\ell_i\le1$ ([[def-subspace-leverage-scores]], [[lem-subspace-leverage-score-identities]]).

[F2] Each draw independently samples row $i$ with probability $\pi_i$ and puts $e_i^*/\sqrt{m\pi_i}$ in the corresponding row; a zero-probability row has zero leverage and is not sampled ([[alg-leverage-score-row-sampling-sketch]]).

[F3] If independent centered Hermitian matrices $B_j$ satisfy $\|B_j\|_2\le R$ and $\|\mathbb E B_j^2\|_2\le v$, then
$\Pr\{\|\sum_{j=1}^mB_j\|_2>\sqrt{2mv\,a}+2Ra/3\}\le2d e^{-a}$ for every $a>0$ ([[lem-bounded-independent-matrix-bernstein-via-trace-exponential]]).

[F4] An $\varepsilon$-embedding has the squared-norm inequality on every vector of the specified subspace ([[def-oblivious-l2-subspace-embedding]]).

[F5] For Hermitian matrices, write $X\preceq Y$ when $v^*(Y-X)v\ge0$ for every vector $v$; the operator norm is $\max_{\|v\|_2=1}\|Mv\|_2$ on a nonzero finite-dimensional domain ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F6] The inner product satisfies Cauchy--Schwarz over both fields ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Given:** The hypotheses in the Statement.

1.1 Write $z_i=Q^*e_i\in\mathbb K^d$, so $\|z_i\|_2^2=\ell_i$. For draw $j$, let $J_j$ be its sampled index and define $Y_j=z_{J_j}z_{J_j}^*/\pi_{J_j}$. By [F2], the $Y_j$ are independent and $\mathbb E Y_j=\sum_{i:\pi_i>0}z_i z_i^*=Q^*Q=I_d$; terms with $\pi_i=0$ have $z_i=0$ by [F1] and contribute zero. [F1, F2, algebra]

2.1 Put $R=d/\beta\ge1$ and $B_j=Y_j-I_d$. The rank-one identity $(z_i z_i^*)^2=\ell_i z_i z_i^*$ and $\pi_i\ge\beta\ell_i/d$ give $\|Y_j\|_2=\ell_{J_j}/\pi_{J_j}\le R$ and $Y_j^2\preceq RY_j$. Thus $\|B_j\|_2\le\max(1,R-1)\le R$, $\mathbb E B_j=0$, and $0\preceq\mathbb E B_j^2=\mathbb E Y_j^2-I_d\preceq(R-1)I_d\preceq RI_d$. Hence [F3] applies with both bounds equal to $R$. [F1, step 1.1, F3, algebra]

3.1 Set $a=\log(2d/\delta)$. By [F3], $\Pr\{\|\sum_{j=1}^mB_j\|_2>\sqrt{2mRa}+2Ra/3\}\le2d e^{-a}=\delta$. Under the first sample-size condition, $m\varepsilon^2\ge8Ra$, so $\sqrt{2mRa}\le m\varepsilon/2$. Also $m\varepsilon/2\ge4Ra/\varepsilon\ge2Ra/3$, since $0<\varepsilon<1$. Thus the Bernstein threshold is at most $m\varepsilon$. [F3, step 2.1, given, algebra]

4.1 From the sampled-row definition in [F2], $Q^*S^*SQ=m^{-1}\sum_jY_j$, so $Q^*S^*SQ-I_d=m^{-1}\sum_jB_j$. Step 2.1 therefore proves $\|Q^*S^*SQ-I_d\|_2\le\varepsilon$ with probability at least $1-\delta$. For nonzero $y$, [F5] and [F6] imply $|y^*(Q^*S^*SQ-I_d)y|\le\|y\|_2\|(Q^*S^*SQ-I_d)y\|_2\le\varepsilon\|y\|_2^2$; the same holds for zero $y$. Thus $(1-\varepsilon)\|y\|_2^2\le\|SQy\|_2^2\le(1+\varepsilon)\|y\|_2^2$, and because $Q$ is an isometry onto its range, this is the embedding property in [F4]. [F2, F4, F5, F6, step 2.1, step 3.1, algebra]

5.1 If $0<\delta\le1/2$ and $d\ge1$, then $d/\delta\ge2$, hence $\log(2d/\delta)=\log(d/\delta)+\log2\le2\log(d/\delta)$. Therefore the second stated sample-size condition implies the first. For any rank-$d$ matrix $A$, its range is $\operatorname{Ran}(Q)$, so the same embedding statement applies to $A$'s column space. [given, step 4.1, algebra] ∎
