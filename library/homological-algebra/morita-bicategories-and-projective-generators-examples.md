---
page: morita-bicategories-and-projective-generators-examples
title: "Morita Bicategories and Projective Generators — Examples"
status: published
items: []
examples: [ex-matrix-ring-morita-pair-with-explicit-tensor-inverses, cex-a-projective-generator-need-not-be-small, ex-central-elements-as-natural-endomorphisms-of-the-identity]
---

These examples compute the constructions of the companion A page in concrete rings and modules. The first exhibits the matrix-ring Morita pair with explicit inverse bimodules: for $e=E_{11}$ in $B=M_n(k)$ the subspaces $Be$ and $eB$ multiply onto $eBe\cong k$ and onto $B$, and the tensor inverses $a\mapsto e\otimes a$ and $E_{ij}\mapsto E_{i1}\otimes E_{1j}$ are written down and checked, realizing the Morita equivalence between $k$ and $M_n(k)$.

The counterexample shows that the smallness hypothesis cannot be dropped: the free module $k^{(\mathbb N)}$ is a projective generator of $k\text{-Mod}$ whose identity is not in the image of the canonical comparison $\bigoplus_n\operatorname{Hom}_k(P,k)\to\operatorname{Hom}_k(P,P)$, so its representable functor fails to preserve a coproduct. That example is not choice-free: the Axiom of Choice is used exactly to make the infinite free module projective. The final example identifies the natural endomorphisms of the identity functor with the central elements, and specializes to scalar matrices over a field and to all multiplications for a commutative ring.
