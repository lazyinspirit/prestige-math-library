---
id: def-morita-bicategory-of-rings-and-bimodules
kind: definition
title: "The Morita bicategory of rings and bimodules"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
justified_by: [lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence]
aliases: []
deps: [def-bicategory-pseudofunctor-and-biequivalence, def-bimodule, def-left-and-right-modules, def-module-homomorphism-kernel-image-and-cokernel, thm-bimodule-actions-induced-on-tensor-products, thm-associativity-of-balanced-tensor-products, thm-unit-isomorphisms-for-module-tensor-products, prop-functoriality-of-module-tensor-products]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "N. Johnson and D. Yau, 2-Dimensional Categories, Example 2.1.26 (Bimod), printed pp.32-33"
      url: "https://arxiv.org/pdf/2002.06055"
    - title: "Fuchs-Schaumann-Schweigert, Eilenberg-Watts calculus for finite categories, introduction (bimodules as 1-cells, tensor as composition)"
      url: "https://arxiv.org/pdf/1612.04561v3"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

The **Morita bicategory of rings and bimodules** $\mathbf{Bimod}$ has as objects the unital rings. For unital rings $A,B$ the hom-category $\mathbf{Bimod}(A,B)$ is the category whose objects are the $(B,A)$-bimodules and whose morphisms $f:M\to M'$ are the maps that are simultaneously left $B$-linear and right $A$-linear, with identity maps as identities and composition of functions as composition. The identity 1-cell of $A$ is the regular bimodule ${}_AA_A$. Composition of a $(C,B)$-bimodule $N$ with a $(B,A)$-bimodule $M$ is the tensor product $N\otimes_BM$, a $(C,A)$-bimodule by [[thm-bimodule-actions-induced-on-tensor-products]]; on maps it is $(g,f)\mapsto g\otimes f$ ([[prop-functoriality-of-module-tensor-products]]). The associator and the unitors are the canonical isomorphisms of [[thm-associativity-of-balanced-tensor-products]] and [[thm-unit-isomorphisms-for-module-tensor-products]]. These data form a bicategory in the sense of [[def-bicategory-pseudofunctor-and-biequivalence]]; the coherence check is [[lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence]]. The handedness is the one fixed for this expansion: modules are left modules, so that a 1-cell $A\to B$ is a $(B,A)$-bimodule and its tensor functor is $T_M(X)=M\otimes_AX$, and a $(C,B)$-bimodule $N$ composes with $M$ as $N\otimes_BM$. No commutativity of the rings is assumed and no choice is used.
