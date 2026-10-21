---
id: lem-iid-sample-plus-ghost-point-are-exchangeable
kind: lemma
title: An IID sample and ghost point are exchangeable
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-independent-sigma-algebras-and-events
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Moritz Hardt, Benjamin Recht, and Yoram Singer, Train faster, generalize better: Stability of stochastic gradient descent, §2.2, proof of Theorem 2.2"
      url: "https://arxiv.org/pdf/1509.01240"
      locator: "§2.2, coordinate replacement in the proof of Theorem 2.2"
    - title: "Nikolai Matni, ESE680 Lecture 16: Algorithmic Stability and Stochastic Gradient Descent, §3.1"
      url: "https://nikolaimatni.github.io/courses/ese680-fall2019/scribe-notes/lecture16.pdf"
      locator: "§3.1, proof of Theorem 2"
---

## Statement

Let $(\mathsf Z,\Sigma)$ be a measurable space, let $P$ be a probability measure on it, and let $m\ge1$. If $Z_1,\ldots,Z_m,Z_*$ are IID random elements with law $P$, define $S=(Z_1,\ldots,Z_m)$ and, for $i\in\{1,\ldots,m\}$, let $S^{(i)}$ be $S$ with coordinate $i$ replaced by $Z_*$. Then the random vectors $(S,Z_*)$ and $(S^{(i)},Z_i)$ have the same distribution on the finite product measurable space $(\mathsf Z^{m+1},\Sigma^{\otimes(m+1)})$.

## Statement references

Hardt, Recht, and Singer, §2.2, proof of Theorem 2.2: [full arXiv paper](https://arxiv.org/pdf/1509.01240).

Matni, Lecture 16, §3.1, proof of Theorem 2: [full lecture notes](https://nikolaimatni.github.io/courses/ese680-fall2019/scribe-notes/lecture16.pdf).

## Facts & Assumptions

**Given:** A common measurable target, a probability law $P$, and the IID random elements in the Statement.

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID means mutual independence together with equality of all coordinate laws.

[F2] [[def-independent-sigma-algebras-and-events]]: for any finite selection of coordinate events, their intersection has probability equal to the product of their probabilities.

[F3] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]: finite product sigma-algebras are generated recursively by coordinate measurable rectangles.

[F4] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: a finite product measure is uniquely determined by its values on coordinate rectangles; this follows by iterating the stated two-factor uniqueness theorem.

## Proof

1.1 Fix $i\in\{1,\ldots,m\}$ and a measurable rectangle $B_1\times\cdots\times B_{m+1}$. By [F1] and [F2], its probability under $(S,Z_*)$ is $\prod_{j=1}^{m+1}P(B_j)$. The vector $(S^{(i)},Z_i)$ swaps coordinates $i$ and $m+1$, so the same rectangle has probability $\prod_{j=1}^{m+1}P(B_j)$ under that vector as well. [F1, F2, given]

2.1 Each vector is measurable: the preimage of a coordinate rectangle is a finite intersection of measurable coordinate events, and [F3] says these rectangles generate $\Sigma^{\otimes(m+1)}$. Thus both vector laws are probability measures on that product sigma-algebra. They agree on its generating coordinate rectangles by step 1.1; iterating [F4] along the recursive finite product in [F3] identifies both with the same product measure. Hence their distributions agree. [F3, F4, step 1.1, given] ∎
