---
id: "lem-de-rham-and-singular-cohomology-respect-countable-disjoint-unions"
kind: "lemma"
title: "De rham and singular cohomology respect countable disjoint unions"
deps: ["def-real-singular-cohomology", "def-smooth-singular-chain-and-cochain-complexes", "def-de-rham-cochain-complex", "def-axiom-of-choice", "def-countable-choice", "thm-path-connected-implies-connected", "thm-continuous-image-of-a-connected-space"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 21; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $(M_i)_{i\in I}$ be a supplied at most countable family of smooth manifolds of a fixed dimension, with disjoint union $M=\bigsqcup_i M_i$. Continuous and smooth singular cochain complexes are canonically the products of their component complexes. For boundaryless $M_i$ the same is true of the de Rham complexes. Under $\mathrm{AC}_\omega$, for each of these theories there is a canonical isomorphism
$$H^k(M)\cong\prod_{i\in I}H^k(M_i).$$
These maps commute with component restrictions and with any supplied comparison natural under the component inclusions, in particular continuous-to-smooth singular restriction.

## Facts & Assumptions

**Given:** The indexed disjoint family; empty components are allowed.

[F1] Ordinary real cohomology is the cochain quotient ([[def-real-singular-cohomology]]).

[F2] Smooth chains are finite sums of smooth simplices, and smooth cochains are their real dual ([[def-smooth-singular-chain-and-cochain-complexes]]).

[F3] De Rham cochains are smooth differential forms with the local exterior derivative, in the boundaryless convention ([[def-de-rham-cochain-complex]]).

[F4] Path-connected spaces are connected, and continuous images of connected spaces are connected ([[thm-path-connected-implies-connected]], [[thm-continuous-image-of-a-connected-space]]).

[A1] Assume countable choice [[def-countable-choice]], the countable instance of [[def-axiom-of-choice]], only for the cohomology-product conclusion.

## Proof

1.1 The standard simplex is path-connected: the segment between two nonnegative barycentric vectors stays nonnegative and has coordinate sum one. Thus [F4] makes its continuous image connected. A nonempty connected subset of a disjoint union lies in one component, since a component and the union of all others are complementary open sets. Every singular simplex therefore has a unique component. For a smooth simplex the corestriction is smooth: restrict its extension to the open inverse image of that component. Conversely a smooth simplex in a component remains smooth under its open inclusion. Hence both chain complexes are the direct sums of their component chain complexes. [given, F2, F4]

2.1 A linear functional on a direct sum is specified by an arbitrary family of component functionals: evaluate a finite-support chain by summing the finitely many component evaluations. This is inverse to restriction and commutes with signed boundary precomposition. Thus both singular cochain complexes are the stated products. Forms similarly restrict to component forms and glue uniquely: every point has an open neighbourhood in a single component, where the specified form is smooth, and the exterior derivative is computed there. This gives the de Rham complex product without choice. [F1, F2, F3, step 1.1, algebra]

3.1 For any one of these product complexes, kernels are products of kernels because differential is componentwise. A product boundary is a family of component boundaries. Conversely, given a family of component boundaries, [A1] chooses one primitive in each component, forming a product cochain whose differential is that family. Thus the product image equals the product of images. For a tuple of cohomology classes, [A1] likewise chooses one cocycle representative per component. These representatives give surjectivity of the map from product-complex cohomology to the product of cohomologies; its kernel is zero by the image equality. Therefore the map is a linear isomorphism. [F1, F2, F3, A1, step 2.1, algebra]

4.1 The isomorphism sends a class to its restrictions, so it is independent of every chosen representative or primitive. A comparison natural under each component inclusion commutes with every coordinate restriction, hence with the product map by equality in each coordinate. For an empty index set the product in vector spaces is the zero space, and every component-empty union is empty. For a singleton family the map is identity. In degree zero primitives in degree minus one are uniquely zero; other negative groups also vanish. Constant and degenerate simplices remain in their unique components. No choice is needed for the complex identifications; precisely the two countable selections in step 3.1 are charged to [A1]. [F1, F2, F3, A1, step 1.1, step 2.1, step 3.1] ∎
