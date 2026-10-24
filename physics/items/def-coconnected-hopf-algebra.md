---
id: def-coconnected-hopf-algebra
kind: definition
title: Coconnected commutative Hopf algebras
dependency_level: 1
deps:
  - def-commutative-hopf-algebra-over-a-field
  - def-linear-subspace
  - def-tensor-product-of-modules-by-generators-and-relations
provenance:
  statement: literature-derived
  proof: not-applicable
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Definition 14.4, printed p. 281
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Definition 15.4, printed p. 252
---
## Definition

Let $k$ be a field and let $(A,\Delta,\varepsilon,S)$ be a commutative Hopf algebra over $k$ ([[def-commutative-hopf-algebra-over-a-field]]), with tensor products over $k$ ([[def-tensor-product-of-modules-by-generators-and-relations]]).

The Hopf algebra $A$ is **coconnected** if there is an increasing filtration
$$C_0\subseteq C_1\subseteq C_2\subseteq\cdots$$
of $A$ by $k$-linear subspaces ([[def-linear-subspace]]) with
$$C_0=k\cdot1_A,\qquad \bigcup_{r\ge0}C_r=A,\qquad \Delta(C_r)\subseteq\sum_{i=0}^{r}C_i\otimes_kC_{r-i}\quad\text{for all }r\ge0.$$
In words: the filtration starts at the constants, exhausts $A$, and the comultiplication of an element of filtration degree $r$ lands in the sum of tensor products whose degrees add up to $r$.

No reducedness, finite generation or smoothness of $A$ is imposed, and no choice principle is used. The filtration is the condition dual to the existence of a group-like element generating the simple comodules; the first step is the constants because a unipotent group has no nontrivial characters.
