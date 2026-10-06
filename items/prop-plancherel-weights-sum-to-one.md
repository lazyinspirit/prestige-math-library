---
id: prop-plancherel-weights-sum-to-one
kind: proposition
title: "The Plancherel weights sum to one"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [def-plancherel-measure-on-partitions, thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree, thm-character-of-the-regular-representation, thm-complex-irreducibles-of-symmetric-groups-are-specht-modules, thm-complex-specht-modules-are-irreducible, thm-standard-polytabloid-basis, cor-sum-of-squares-of-standard-tableau-numbers, thm-robinson-schensted-correspondence, def-finite-probability-space-and-event]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "§5, printed p. 25 (Burnside's theorem $\\sum_\\lambda\\dim^2\\lambda=|S_n|=n!$)"
    - title: "Dan Romik, The Surprising Mathematics of Longest Increasing Subsequences, Cambridge University Press 2015; author-hosted manuscript of 20 August 2014 (363 pp.)"
      url: "https://danromik.com/resources/books/the-surprising-mathematics-of-longest-increasing-subsequences.pdf"
      locator: "§1.8-§1.9, printed pp. 24-30 (the Plancherel weights and the RSK count of standard tableaux)"
---

## Statement

For every $n\ge0$,
$$\sum_{\lambda\vdash n}P_n(\lambda)=\frac{1}{n!}\sum_{\lambda\vdash n}(f^\lambda)^2=1.$$
Hence $P_n$ is a probability distribution on the finite set $Y_n$ ([[def-finite-probability-space-and-event]]): the weights are nonnegative and sum to one. In particular $\dim_{\mathbb C}\mathbb C[S_n]=n!=\sum_{\lambda\vdash n}(f^\lambda)^2$ is obtained in two independent ways.

## Facts & Assumptions

**Given:** $n\ge0$; the finite set $Y_n$ of partitions of $n$ and the weights $P_n(\lambda)=(f^\lambda)^2/n!$, where $f^\lambda=\dim_{\mathbb C}S^\lambda$ is the number of standard $\lambda$-tableaux and $P_0(\varnothing)=1$ ([[def-plancherel-measure-on-partitions]]).

[F1] If $G$ is a finite group and $k$ is algebraically closed with $\operatorname{char}k\nmid|G|$, then there are finitely many irreducible representations $V_1,\dots,V_r$ of $G$ over $k$, up to equivalence, and $k[G]\cong V_1^{\oplus\dim V_1}\oplus\cdots\oplus V_r^{\oplus\dim V_r}$ ([[thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree]]).

[F2] The character of $\mathbb C[S_n]$ is $|S_n|$ at the identity and $0$ elsewhere, so $\dim_{\mathbb C}\mathbb C[S_n]=n!$ ([[thm-character-of-the-regular-representation]]).

[F3] For $G=S_n$ over $\mathbb C$, the irreducible representations up to equivalence are exactly the Specht modules $S^\lambda$, $\lambda\vdash n$ ([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]], [[thm-complex-specht-modules-are-irreducible]]), and $\dim_{\mathbb C}S^\lambda=f^\lambda$ ([[thm-standard-polytabloid-basis]]).

[F4] $\sum_{\lambda\vdash n}(f^\lambda)^2=n!$ for every $n\ge0$, by the Robinson-Schensted count ([[cor-sum-of-squares-of-standard-tableau-numbers]], [[thm-robinson-schensted-correspondence]]).

[F5] A finite probability space is a finite set $\Omega$ with weights $w\ge0$ satisfying $\sum_\omega w(\omega)=1$ ([[def-finite-probability-space-and-event]]).

## Proof

**Proof technique:** direct.

1.1 Regular-representation count: $\mathbb C$ is algebraically closed of characteristic $0$, and $|S_n|=n!>0$, so $\operatorname{char}\mathbb C=0$ does not divide $|S_n|$, so [F1] applies to $G=S_n$, $k=\mathbb C$: the regular representation is $\mathbb C[S_n]\cong\bigoplus_{i=1}^rV_i^{\oplus\dim V_i}$ with $V_1,\dots,V_r$ representing the irreducible complex representations of $S_n$ up to equivalence. By [F3] this list is $\{S^\lambda:\lambda\vdash n\}$ and $\dim_{\mathbb C}S^\lambda=f^\lambda$, so $\mathbb C[S_n]\cong\bigoplus_{\lambda\vdash n}(S^\lambda)^{\oplus f^\lambda}$. Taking dimensions, which are additive over direct sums and multiplicative over direct powers, and using [F2] gives $n!=\dim_{\mathbb C}\mathbb C[S_n]=\sum_{\lambda\vdash n}f^\lambda\cdot\dim_{\mathbb C}S^\lambda=\sum_{\lambda\vdash n}(f^\lambda)^2$. [given, F1, F2, F3, algebra]

1.2 Independent count: the same identity $\sum_{\lambda\vdash n}(f^\lambda)^2=n!$ is proved independently from the Robinson-Schensted bijection by [F4], so the two computations of $\dim_{\mathbb C}\mathbb C[S_n]$ agree without either appealing to the other. [given, F4]

2.1 Normalization: dividing the identity of steps 1.1 and 1.2 by the positive integer $n!$ (for $n=0$ both sides read $1=1$ and $P_0(\varnothing)=1$) gives $\sum_{\lambda\vdash n}P_n(\lambda)=1$. Each $P_n(\lambda)=(f^\lambda)^2/n!$ is a quotient of a nonnegative integer by a positive integer, hence is $\ge0$, and $Y_n$ is finite ([[def-plancherel-measure-on-partitions]]); therefore $P_n$, viewed as a function on the finite set $Y_n$, satisfies both requirements of a finite probability space in [F5]. [given, F5, step 1.1, step 1.2, algebra]

3.1 Conclusion: the displayed normalization, the nonnegativity of the weights and the finite nonempty outcome set $Y_n$ are exactly the assertion that $P_n$ is a probability distribution on $Y_n$; the two independent evaluations computing $\dim_{\mathbb C}\mathbb C[S_n]=n!$ are steps 1.1 and 1.2. This holds for every $n\ge0$, including the degenerate case $n=0$ with the single empty partition. [given, step 2.1, algebra] ∎ 