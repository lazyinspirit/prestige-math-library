---
page: tensor-coherence-and-algebraic-descent
title: "Tensor Coherence and Algebraic Descent"
status: draft
items: [def-hh-scalar-and-tensor-conventions,
        lem-hh-tensor-coherence-on-elementary-tensors,
        lem-hh-tensor-injections-quotients-and-kernels-over-a-field,
        lem-hh-coefficient-extension-and-finite-tensor-separation,
        lem-hh-finite-tensor-duality-and-canonical-coevaluation,
        lem-hh-free-associative-ring-and-relations-descent,
        lem-hh-universal-presentations-and-base-change,
        lem-hh-finite-polynomial-and-localization-constructions,
        lem-hh-finite-matrix-and-module-preliminaries,
        lem-hh-regular-module-detects-linear-and-tensor-identities]
examples: []
---

The page fixes the tensor conventions shared by the Hopf and Hecke branches: $k$ is a field, $\otimes$ means $\otimes_k$ over $k$-vector spaces, tensor powers are left-associated with the empty tensor $k$, and parentheses in iterated tensor powers may be dropped only after the coherence lemma below has been proved. It then supplies the coherence, duality and descent facts that the construction pages of these branches consume.

Coherence is proved concretely rather than invoked from a general monoidal theorem: the associator, the symmetry and the unit isomorphisms satisfy naturality, the pentagon, the unit triangle and both symmetry hexagons, each verified on elementary tensors and extended to all linear maps by the spanning property of the tensor product. Finite tensor duality identifies $V^*\otimes W^*$ with $(V\otimes W)^*$ through the product dual basis and exhibits the basis-independent coevaluation element $\sum_iv_i\otimes v_i^*$ together with both zigzag identities; no surjectivity is asserted in infinite dimension, and the companion page's counterexample shows that the finite-dimensional hypothesis is necessary.

The Choice assumptions are recorded explicitly. The injection lemma and the kernel computation for a tensor product of quotient maps assume the Axiom of Choice through [[cor-a-linear-subspace-has-a-complement]], and coefficient separation for a finite independent family inherits that assumption in infinite ambient dimension while remaining choice-free in finite dimension, where the independent list is extended to a basis.

The descent half constructs the free associative $R$-algebra $R\langle S\rangle$ on the words in $S$ with concatenation as product, proves its universal property and the two-sided-ideal description of a generated relation ideal, and identifies the quotient as the presented algebra. Base change along a commutative ring homomorphism is proved by explicit mutually inverse generator maps, with the image ideal of a relation ideal carrying the corresponding quotient presentation and no flatness hypothesis; free bases transport along any commutative specialization. Polynomial and Laurent rings are built from finitely supported monomials, their universal properties by substitution, and their fraction fields over domains from numerator-denominator pairs. Finite matrix and module preliminaries supply the right-inverse determinant argument, invariance of finite matrix rank under field extension, finite composition series, the splitting of a submodule of a finite direct sum of simple modules without arbitrary Choice, and the vanishing trace of a nilpotent endomorphism. The regular-module detection principle closes the page: evaluation at $1$ and at $1^{\otimes n}$ detects equality of algebra elements, multilinear identities are checked on pure tensors, and a quotient identity requires the descent that the recorded warning makes explicit.

Prerequisite pages: [[tensor-products-of-modules]], [[modules-and-module-homomorphisms]], [[ideals-and-quotient-rings]], [[dual-spaces-bilinear-forms-and-inertia]], [[linear-independence-bases-and-dimension]], [[linear-maps-rank-nullity-and-quotient-spaces]], [[chain-conditions-and-semisimple-modules]], [[relations-functions-and-quotients]]. The companion [[tensor-coherence-and-algebraic-descent-examples]] develops the calculations and failures needed to test these constructions.
