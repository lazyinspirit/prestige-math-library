---
id: lem-homotopy-fiber-component-weight-ratio
kind: lemma
title: "Homotopy-fiber weights reduce to componentwise ratios"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-locally-finite-homotopy-type
  - def-homotopy-fiber-of-a-map
  - thm-mapping-path-factorization
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §2, Lemma 2.3"
      url: "https://arxiv.org/pdf/math/0501343v4"
    - title: "Allen Hatcher, Algebraic Topology, §4.2, Theorem 4.41"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

Let $f:X\to Y$ be a map of locally finite homotopy types, let $y\in\pi_0(Y)$, and let $\alpha\in\mathbb Q_c(X)$. For each component $x\in\pi_0(X)$ mapping to $y$, put
$$
r_f(x,y):=\prod_{j>0}|\pi_j(X,x)|^{(-1)^j}|\pi_j(Y,y)|^{(-1)^{j+1}}.
$$
Then the total homotopy weight of the components of the fiber over $y$ that map to $x$ is $r_f(x,y)$. Consequently,
$$
f_!(\alpha)(y)=\sum_{\substack{x\in\pi_0(X)\\f(x)=y}}\alpha(x)r_f(x,y).
$$
In particular, every homotopy fiber is locally finite and the defining sum for $f_!$ is finite.

## Facts & Assumptions

**Given:** A map $f:X\to Y$ of locally finite homotopy types and a component $y$ of $Y$.

[F1] All homotopy groups of $X$ and $Y$ are finite and vanish above some degree ([[def-locally-finite-homotopy-type]]).

[F2] A map factors as $X\xrightarrow{j_f}E_f\xrightarrow{p_f}Y$, where $j_f$ is a homotopy equivalence and $p_f$ is a Hurewicz fibration ([[thm-mapping-path-factorization]]).

[F3] A based Serre fibration has the long exact sequence of homotopy groups, with the exact pointed-set component tail; the result is choice-free ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F4] The homotopy fiber of $f$ is the fiber of its mapping-path replacement ([[def-homotopy-fiber-of-a-map]]).

## Proof

1.1 Replace $f$ by the mapping-path fibration $p_f$ in [F2]. For a component $x$ mapping to $y$, let $P_x\subseteq\pi_0(F_y)$ be the components mapping to $x$. A point $z\in P_x$ bases the fiber over $y$; $p_f$ is a Hurewicz, hence Serre, fibration, and $j_f$ identifies its total-space homotopy groups with those of $X$, so [F3] applies. Its pointed-set tail identifies $P_x$ as one orbit of $\pi_1(Y,y)$, with stabilizer the image of $\pi_1(X,x)\to\pi_1(Y,y)$; hence $|P_x|=|\pi_1(Y,y)|/|\operatorname{im}(\pi_1(X,x)\to\pi_1(Y,y))|$. For $z\in P_x$, the group tail includes $\pi_2(Y,y)\to\pi_1(F_y,z)\to\pi_1(X,x)\to\pi_1(Y,y)$, so $\pi_1(F_y,z)$ need not be the kernel of the last map. All groups are finite, and exactness makes the fiber groups vanish in high degrees. Expanding each finite group order as the product of its kernel and image orders through this entire tail, and using the displayed orbit count at its pointed-set end, gives $$ |P_x|=r_f(x,y)\prod_{j>0}|\pi_j(F_y,z)|^{(-1)^{j+1}}. $$ The action transports components within $P_x$, so their higher homotopy groups have the same orders. [F1, F2, F3, F4, algebra]

2.1 The total weight of the fiber components mapping to $x$ is $|P_x|$ times the weight of one of them, since their homotopy-group orders agree by step 1.1. Multiplying its formula by $\prod_{j>0}|\pi_j(F_y,z)|^{(-1)^j}$ cancels the fiber factors and gives $r_f(x,y)$. [F1, step 1.1, algebra]

3.1 Substitute the componentwise identity of step 2.1 into the defining fiber sum for $f_!$ and group terms by their image component $x$. Each $P_x$ is finite by step 1.1, and only finitely many $x$ have $\alpha(x)\ne0$, so this gives the stated ratio formula and the finiteness of $f_!(\alpha)(y)$. [F1, step 1.1, step 2.1] ∎

