---
id: lem-homotopy-cardinality-pushforward-is-functorial
kind: lemma
title: "Homotopy-cardinality pushforward is functorial"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-locally-finite-homotopy-type
  - lem-homotopy-fiber-component-weight-ratio
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
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §2, Corollary 2.4"
      url: "https://arxiv.org/pdf/math/0501343v4"
---

## Statement

For maps $f:X\to Y$ and $g:Y\to Z$ of locally finite homotopy types,
$$
(g\circ f)_!=g_!\circ f_!:\mathbb Q_c(X)\longrightarrow\mathbb Q_c(Z).
$$

## Facts & Assumptions

**Given:** Locally finite homotopy types $X,Y,Z$, maps $f:X\to Y$, $g:Y\to Z$, and $\alpha\in\mathbb Q_c(X)$.

[F1] The pushforward at a component is the component sum with ratio weight
$$
r_f(x,y):=\prod_{i>0}|\pi_i(X,x)|^{(-1)^i}|\pi_i(Y,y)|^{(-1)^{i+1}}
$$
for each $x$ mapping to $y$ ([[lem-homotopy-fiber-component-weight-ratio]]).

## Proof

1.1 If $x\in\pi_0(X)$ maps to $y\in\pi_0(Y)$ and $y$ maps to $z\in\pi_0(Z)$, then [F1] gives $r_f(x,y)r_g(y,z)=r_{g\circ f}(x,z)$, because the exponents of every $|\pi_i(Y,y)|$ sum to zero. [F1, algebra]

2.1 Evaluate $g_!f_!\alpha$ at $z$. Its finite sum is over pairs $(x,y)$ with $f(x)=y$ and $g(y)=z$; each $x$ determines the unique component $y=f(x)$. By step 1.1 its weight is $r_{g\circ f}(x,z)$, exactly the component formula for $(g\circ f)_!\alpha(z)$ from [F1]. Hence the two pushforwards agree at every component. [F1, step 1.1] ∎
