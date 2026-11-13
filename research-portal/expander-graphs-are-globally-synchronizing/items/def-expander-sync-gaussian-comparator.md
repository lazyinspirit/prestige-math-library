---
id: def-expander-sync-gaussian-comparator
title: Gaussian comparison matrix in the moment argument
kind: definition
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-vertex-hilbert-space
  - prop-expander-prereq-gaussian-entry-moments
  - math:def-standard-normal-and-normal-laws
  - math:def-independent-random-elements
  - math:thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - math:def-axiom-of-choice
  - math:def-random-element-and-real-random-variable
  - math:def-product-sigma-algebra-and-finite-product-sigma-algebras
dependency_roles:
  def-expander-prereq-vertex-hilbert-space: mathematical-premise
  prop-expander-prereq-gaussian-entry-moments: mathematical-premise
  math:def-standard-normal-and-normal-laws: mathematical-premise
  math:def-independent-random-elements: mathematical-premise
  math:thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-random-element-and-real-random-variable: mathematical-premise
  math:def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 34, proof of Proposition 6.3, Gaussian comparison paragraph
      statement: The article introduces a symmetric matrix with i.i.d. standard
        Gaussian entries for a moment comparison.
      hypotheses: The matrix is the finite square comparison matrix used in the proof
        of Proposition 6.3.
      reading_limits: The indicated paragraph of the supplied article text was
        inspected. This reference attributes the comparator; it does not
        establish its construction or a Gaussian norm bound.
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 1
---

## Definition

Assume the Axiom of Choice, as required by the adopted normal-law construction. Let $n\geq1$ be an integer and let $G=(G_{ij})_{1\leq i,j\leq n}$ be a real random matrix constructed as follows. The entries $G_{ij}$ with $1\leq i\leq j\leq n$ are mutually independent and each has the standard Gaussian law $N(0,1)$, whose density is $(2\pi)^{-1/2}e^{-x^2/2}$. Set $G_{ji}=G_{ij}$ for $i<j$. Mutual independence means that, for every choice of Borel sets, the probability of the intersection of the corresponding coordinate events is the product of their probabilities.

Thus $G$ is symmetric, including its diagonal entries in the independent triangular family. The mirrored entries $G_{ij}$ and $G_{ji}$ for $i<j$ are the same variable, so the full array is not a mutually independent family when $n\geq2$. Here $G$ denotes the comparison matrix, not the interaction graph.

## Justification

The adopted standard-normal definition supplies the probability measure $N(0,1)$ under Choice ([[math:def-axiom-of-choice]], [[math:def-standard-normal-and-normal-laws]]). Take one copy of this probability space for each of the finitely many pairs $i\leq j$. Repeated application of the sigma-finite product-measure theorem gives a probability measure on their finite product: each factor is sigma-finite because its total mass is one, and the rectangle formula gives the product total mass one ([[math:thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]). The coordinate projections are measurable by the product sigma-algebra definition ([[math:def-product-sigma-algebra-and-finite-product-sigma-algebras]]), hence are real random variables on this common probability space ([[math:def-random-element-and-real-random-variable]]); the rectangle formula gives each projection the standard Gaussian law and gives the displayed mutual independence condition, including arbitrary subfamilies by taking the remaining Borel sets to be $\mathbb R$ ([[math:def-independent-random-elements]]). Assigning each lower-triangular entry its reflected coordinate therefore constructs the stated real symmetric matrix. Its matrix action and the meaning of symmetry are as in [[def-expander-prereq-vertex-hilbert-space]].

The Gaussian-entry moments supplier applies to precisely this triangular construction; it shows that a mirrored pair is nonconstant and cannot be independent of itself ([[prop-expander-prereq-gaussian-entry-moments]]). The diagonal convention above makes explicit the literal standard-Gaussian-entry reading used here; no operator-norm estimate follows merely from this definition.

## Source attribution

The article introduces a symmetric matrix with i.i.d. standard Gaussian entries in the proof of Proposition 6.3. The triangular interpretation above makes the independence convention compatible with symmetry.
