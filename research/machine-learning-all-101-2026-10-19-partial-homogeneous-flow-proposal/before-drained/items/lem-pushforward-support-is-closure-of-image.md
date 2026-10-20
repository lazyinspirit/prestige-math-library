---
id: lem-pushforward-support-is-closure-of-image
kind: lemma
title: Support of a continuous pushforward is the image closure
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Let $\mu$ be a finite nonnegative Borel measure on $\mathbb R^d$, define $\operatorname{spt}\mu=\{x:\mu(U)>0\text{ for every open neighborhood }U\text{ of }x\}$, and let $f:\mathbb R^d\to\mathbb R^d$ be continuous. Define the pushforward by $f_\#\mu(A)=\mu(f^{-1}(A))$ for Borel $A$. Then

$$\operatorname{spt}(f_\#\mu)=\overline{f(\operatorname{spt}\mu)}.$$

## Statement references

[Chizat and Bach, Lemma C.8](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** $\mu$ and $f$ as in the Statement.

## Proof

1.1 If $y=f(x)$ for $x\in\operatorname{spt}\mu$ and $V$ is any open neighborhood of $y$, continuity makes $f^{-1}(V)$ an open neighborhood of $x$. Hence $f_\#\mu(V)=\mu(f^{-1}(V))>0$, so $y\in\operatorname{spt}(f_\#\mu)$. Since support is closed, $\overline{f(\operatorname{spt}\mu)}\subseteq\operatorname{spt}(f_\#\mu)$. [given, construct]

2.1 The complement of $\operatorname{spt}\mu$ has $\mu$-measure zero: every point in it lies in a zero-measure open neighborhood, and the countable Euclidean basis gives a countable cover by zero-measure basis sets. If $y\notin\overline{f(\operatorname{spt}\mu)}$, choose an open neighborhood $V$ disjoint from that closure. Then $f^{-1}(V)\subseteq\mathbb R^d\setminus\operatorname{spt}\mu$, so $f_\#\mu(V)=0$ and $y\notin\operatorname{spt}(f_\#\mu)$. Thus $\operatorname{spt}(f_\#\mu)\subseteq\overline{f(\operatorname{spt}\mu)}$. [given, step 1.1, choose] ∎
