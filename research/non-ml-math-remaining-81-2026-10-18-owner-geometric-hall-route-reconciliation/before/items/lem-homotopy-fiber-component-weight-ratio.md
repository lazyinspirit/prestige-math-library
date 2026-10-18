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

1.1 Replace $f$ by the mapping-path fibration $p_f$ in [F2]. Its homotopy fiber over $y$ has the same homotopy type, and [F3] gives the long exact sequence with finite groups. At the component end, the lifts over a fixed component $x$ form a torsor for the cokernel of $\pi_1(X,x)\to\pi_1(Y,y)$, while $\pi_1(F_y,z)$ is its kernel. Hence the total $\pi_1$-weight of those lifts is $|\pi_1(Y,y)|/|\pi_1(X,x)|$. [F1, F2, F3, F4]

1.2 For every $j\ge2$, the remaining long exact sequence consists of finite groups involving $\pi_j(F_y,z)$, $\pi_j(X,x)$, and $\pi_j(Y,y)$. In a finite exact sequence, each group order is the product of the image and kernel orders, so the alternating product cancels. Applying this cancellation degree by degree and multiplying the low-degree contribution of step 1.1 gives the full componentwise ratio $r_f(x,y)$ of the statement. It also shows that the homotopy groups of the fiber are finite and vanish in high degrees. [F1, F3, step 1.1, algebra]

2.1 Substitute the componentwise identity of step 1.2 into the defining fiber sum for $f_!$ and group terms by their image component $x$. Since $\alpha$ has finite support, only finitely many terms remain, giving the stated ratio formula and the finiteness of $f_!(\alpha)(y)$. [F1, step 1.2] ∎
