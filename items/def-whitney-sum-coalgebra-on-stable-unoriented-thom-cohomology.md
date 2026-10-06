---
id: def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology
kind: definition
title: "Whitney-sum coalgebra on stable unoriented Thom cohomology"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - def-thom-prespectrum-of-the-universal-real-and-oriented-bundles
  - def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum
  - lem-stable-thom-cohomology-is-degreewise-eventually-constant
  - def-smash-product-of-based-spaces
  - lem-relative-singular-product-chain-equivalence-for-cw-pairs
  - lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses
  - thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians
  - def-r-oriented-vector-bundle-and-orientation-local-system
  - thm-whitney-sum-formula-for-stiefel-whitney-classes
  - thm-external-product-and-whitney-sum-formulas-for-thom-classes
justified_by:
  - lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology
dependency_level: 4
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§12, printed pp. 22–24: Thom cohomology, Whitney sum, and its coalgebra structure; rankwise compatibility is proved locally."
    - title: "John Milnor and James Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Chapter 16: Thom classes, external products, and the Whitney formula."
verification:
  precheck: n/a
---

## Definition

Assume AC, inherited from the cited bundle, cohomology, or operation suppliers. Let $\mathcal P=\mathbb F_2[w_1,w_2,\ldots]$ with $|w_k|=k$, and use the graded identification $M=\mathcal P U$ with $|U|=0$ and $w_0=1$. Extend $\Delta_P(w_k)=\sum_{i+j=k}w_i\otimes w_j$ uniquely to a unital algebra homomorphism $\Delta_P:\mathcal P\to\mathcal P\otimes\mathcal P$. Define the candidate maps $\Delta_M(fU)=\Delta_P(f)(U\otimes U)$, $\epsilon_M(fU)=f(0)$, and $\eta(1)=U$. These formulas specify the proposed Whitney-sum operations; their well-definedness, inverse-limit compatibility, and coalgebra axioms are proved in [[lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology]].


Each polynomial has finite support and each generator coproduct is a finite sum, so these are degree-preserving linear maps on $M$ and the ordinary graded tensor product. The rankwise geometric interpretation is the Thom pullback of an external Whitney sum, with

$$w_kU\longmapsto\sum_{i+j=k}(w_iU)\otimes(w_jU),\qquad U\longmapsto U\otimes U.$$

The cited well-definedness lemma proves agreement with that geometric pullback, stabilization compatibility, coassociativity, and both counit identities; these are obligations of the construction rather than additional premises.
