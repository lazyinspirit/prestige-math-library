---
id: thm-root-of-unity-tilting-modules-are-tensor-stable
kind: theorem
title: Tensor stability and dual stability of root-of-unity tilting modules
status: draft
dependency_level: 6
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-root-of-unity-weyl-and-dual-weyl-module-families, def-axiom-of-choice, lem-root-of-unity-integral-weyl-specialization, lem-integral-based-modules-have-saturated-weyl-filtrations, thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules, thm-root-of-unity-lusztig-module-category-is-braided-rigid]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: George Lusztig, Introduction to Quantum Groups
      url: https://math.mit.edu/~gyuri/papers/quant.gr.pdf
      locator: Sections 27.1 and 27.3; based highest filtrations and based tensor modules.
    - title: Henning Haahr Andersen and Catharina Stroppel, Fusion Rings for Quantum Groups
      url: https://pure.au.dk/ws/files/77171619/Fusion_Rings_for_Qunatum_Groups.pdf
      locator: Section 2.1; tensor closure of Weyl-filtered modules and tiltings.
---

## Statement

Under [[def-root-of-unity-weyl-and-dual-weyl-module-families]], and the inherited Axiom of Choice, the tensor product of two Weyl-filtered modules is Weyl-filtered, and the tensor product of two dual-Weyl-filtered modules is dual-Weyl-filtered. Hence tilting modules are closed under tensor products, ordinary duals and finite direct sums, and contain the tensor unit. This theorem does not presume direct-summand closure or classify indecomposable tiltings.

## Facts & Assumptions

**Given:** The selected root datum and module category, with the actual integral Weyl families.

[F1] Finite dimensional integral highest modules admit the actual based tensor global basis, not merely an integral bar action ([[thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules]]).

[F2] Every such finite dimensional based module has an integral saturated Weyl filtration surviving specialization ([[lem-integral-based-modules-have-saturated-weyl-filtrations]]).

[F3] The category has exact ordinary duality, a pivotal double-dual isomorphism and the usual exact vector-space tensor product, and its Weyl and dual Weyl families are exchanged by this duality ([[thm-root-of-unity-lusztig-module-category-is-braided-rigid]], [[def-root-of-unity-weyl-and-dual-weyl-module-families]], [[lem-root-of-unity-integral-weyl-specialization]]).

[F4] The Axiom of Choice is inherited from the actual global-basis suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** These data and the actual integral lattices.

1.1 The finite tensor lattice $V_A(\lambda)\otimes_A V_A(\mu)$ has the constructed finite based global basis by [F1], with exactly this underlying integral lattice. Apply [F2] before specializing; every section is an integral highest lattice and every quotient is free. Its specialization is therefore a genuine Weyl filtration of $\Delta_\zeta(\lambda)\otimes\Delta_\zeta(\mu)$ with all submodule injections intact. This proof uses an integral filtration and never specializes a generic direct-sum decomposition. [F1, F2, F4, algebra]

2.1 Let $M,N$ have Weyl filtrations. Tensor a filtration of $M$ with $N$; exactness gives sections $\Delta_\zeta(\lambda)\otimes N$. Tensor each filtration of $N$ with this Weyl factor and use step 1.1 to give each of its sections a Weyl filtration. Pull these finite filtrations back through the successive quotient maps to refine the original filtration. This produces a finite Weyl filtration of $M\otimes N$. The zero case has the empty filtration. [F3, step 1.1, algebra]

3.1 If $M,N$ are dual-Weyl-filtered, then $M^*,N^*$ are Weyl-filtered by [F3]. Step 2.1 makes $N^*\otimes M^*$ Weyl-filtered; its dual is dual-Weyl-filtered and is isomorphic to $M\otimes N$ by the dual tensor isomorphism and the pivotal double-dual identifications. Thus dual Weyl filtrations are tensor stable as well. Ordinary duality exchanges the two filtration kinds, so it preserves their intersection. Concatenating filtrations proves finite-sum closure. The trivial one-dimensional module is both $\Delta_\zeta(0)$ and $\nabla_\zeta(0)$, hence is tilting. These arguments prove exactly the asserted tensor, dual, sum and unit statements. [F3, step 2.1, algebra] ∎
