---
id: thm-dual-ball-weak-star-metrizable-for-separable-predual
kind: theorem
title: Dual ball weak-star metrizable for a separable predual
status: published
origin: pipeline
deps: ["lem-basic-weak-star-neighborhoods"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.2.1, proof of Theorem 3.30, p. 132"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§5.3, formula (5.12), pp. 146–147"
proof_strategy: direct
---

## Statement

Let $X$ be a real or complex normed space and let $(x_n)_{n\geq1}$ be a fixed
dense sequence in $X$.  On every norm-bounded subset $A\subseteq X^*$, the
weak-star topology is induced by

$$d(f,g)=\sum_{n=1}^{\infty}2^{-n}\min\{1,|(f-g)(x_n)|\}.$$

The boundedness of $A$ is essential to this assertion; no metric on all of
$X^*$ is claimed.

## Facts & Assumptions

**Given:** A dense sequence $(x_n)$ in a real or complex normed space $X$, a subset $A\subseteq X^*$, and $M<\infty$ with $\lVert f\rVert\leq M$ for every $f\in A$.

[F1] The weak-star neighborhood basis consists of conditions on finitely many evaluations, and the topology is Hausdorff ([[lem-basic-weak-star-neighborhoods]]).

## Proof

**Proof technique:** direct.

1.1 The series defining $d$ converges because its terms lie between $0$ and $2^{-n}$. Symmetry and the triangle inequality follow from those of the absolute value and from $\min(1,a+b)\leq\min(1,a)+\min(1,b)$. If $d(f,g)=0$, then $(f-g)(x_n)=0$ for all $n$; for any $x\in X$, take for each $k\geq1$ the least index $n_k$ with $\lVert x-x_{n_k}\rVert<1/k$. Then $x_{n_k}\to x$ and $|(f-g)(x)|\leq2M\lVert x-x_{n_k}\rVert\to0$. Thus $f=g$. This also covers $M=0$, when $A$ has at most one point. [given]

2.1 Fix $f\in A$ and a basic weak-star neighborhood $U=\{g\in A:|(g-f)(y_j)|<\varepsilon,\ 1\leq j\leq m\}$. If $m=0$, take any metric ball. Otherwise, when $M>0$, choose $n_j$ with $\lVert y_j-x_{n_j}\rVert<\varepsilon/(4M)$; when $M=0$ the assertion is immediate. Put $\delta=\min_j2^{-n_j}\min(1,\varepsilon/2)>0$. If $d(f,g)<\delta$, then $|(g-f)(x_{n_j})|<\varepsilon/2$, and hence $|(g-f)(y_j)|<2M\varepsilon/(4M)+\varepsilon/2=\varepsilon$. Thus a $d$-ball about $f$ lies in $U$. [F1, step 1.1]

2.2 Conversely, given $\eta>0$, choose $N$ so that $\sum_{n>N}2^{-n}<\eta/2$ and put $\rho=\min(1,\eta/2)$. The weak-star neighborhood $V=\{g\in A:|(g-f)(x_n)|<\rho,\ 1\leq n\leq N\}$ satisfies $d(f,g)<\rho\sum_{n\leq N}2^{-n}+\eta/2<\eta$. [F1, step 1.1]

3.1 Step 2.1 makes every weak-star neighborhood contain a metric neighborhood, while step 2.2 makes every metric neighborhood contain a weak-star neighborhood.  Hence the two relative topologies on $A$ agree. [step 2.1, step 2.2] ∎
