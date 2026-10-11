---
page: tensor-product-crystals-and-highest-weight-crystal-uniqueness
title: "Tensor-Product Crystals and Highest-Weight Crystal Uniqueness"
status: draft
requires: [kashiwara-operators-and-crystal-lattices, tensor-products-of-modules]
items: [lem-tensor-products-of-integrable-weight-modules-are-integrable,
        def-tensor-product-of-crystals,
        lem-i-string-components-of-a-crystal-lattice,
        def-highest-weight-element-and-connected-highest-weight-crystal,
        thm-crystal-basis-tensor-product-rule,
        lem-crystal-tensor-product-weight-epsilon-and-phi-formulas,
        thm-the-highest-weight-crystal-b-lambda-exists,
        prop-dual-crystal-and-reversal-conventions,
        thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals,
        thm-highest-weight-components-in-a-tensor-product-crystal]
examples: []
---

**Objective.** This page builds the tensor product of crystals from the crystal
lattices of [[kashiwara-operators-and-crystal-lattices]] and proves the two
structural theorems that make tensoring useful: the tensor product of two
crystal bases is again a crystal basis with the two-case rule, and every crystal
basis of an integrable module in the library's category decomposes into the
canonical highest weight crystals $B(\lambda)$.

The first item, [[lem-tensor-products-of-integrable-weight-modules-are-integrable]],
records that tensoring preserves the module hypotheses: the coproduct action
makes $M_1\otimes M_2$ a chosen $P$-graded type-one integrable weight module
with finite-dimensional weight spaces and cone-bounded support, and the free
$A_0$-tensor of two crystal lattices generates it and carries a weighted
residue basis. [[def-tensor-product-of-crystals]] then fixes the combinatorial
**left-to-right convention** with its split equality case: the strict
comparison is assigned to $\tilde f_i$ and the non-strict one to $\tilde e_i$,
the asymmetry is forced by the partial-inverse axiom, and the
companion-page counterexample records what fails under any uniform convention.
The reduction of the tensor rule to finite $i$-strings passes through
[[lem-i-string-components-of-a-crystal-lattice]], which shows that the string
components of a lattice vector lie in the lattice and that a residue basis
element has a single component surviving modulo $q$; this is the tool that
lets [[thm-crystal-basis-tensor-product-rule]] stay valid with **no
finite-dimensionality, bounded-support or uniform-nilpotence hypothesis**, and
with no choice principle.

The $\varepsilon_i/\varphi_i$ bookkeeping of a tensor product is
[[lem-crystal-tensor-product-weight-epsilon-and-phi-formulas]], where the
branch and tie statements are proved from the actual string motion rather than
from max-attainment alone. Highest vertices are defined in
[[def-highest-weight-element-and-connected-highest-weight-crystal]], which
keeps the two conditions separate: a highest vertex need not generate its
connected crystal, and for abstract crystals not every connected crystal with
a highest weight element of weight $\lambda$ is isomorphic to $B(\lambda)$ —
the source literature records this explicitly, and on this page uniqueness is
proved only for crystals of modules.

For the canonical objects,
[[thm-the-highest-weight-crystal-b-lambda-exists]] shows that $B(\lambda)$ is
a highest weight crystal with a unique highest element, and
[[prop-dual-crystal-and-reversal-conventions]] adds the contragredient
reversal package: negated weights, swapped $\varepsilon/\varphi$, reversed
arrows and the order-reversing tensor isomorphism — stated only for crystals
of integrable-module crystal bases, never for the negative-half crystal, whose
formal $\varphi_i$ may be negative.

The central result is
[[thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals]]:
under the declared axiom of choice, a crystal basis of an integrable module
with finite-dimensional label-weight spaces and cone-bounded weight set is
isomorphic to a **possibly infinite, locally weight-finite** indexed direct
sum $\bigoplus_j(\mathcal L(\lambda_j),\mathcal B(\lambda_j))$. The index set
need not be finite in affine or indefinite type, local weight finiteness means
only finitely many summands contribute to any fixed weight, and no finite
constituent claim is made; the axiom of choice is used exactly once, for the
simultaneous selection of the finite-dimensional maximal-vector bases and the
top-residue lifts, after which every lattice argument is finite.
[[thm-highest-weight-components-in-a-tensor-product-crystal]] applies this to
$M_1\otimes M_2$ and turns the signature rule into the component
decomposition: highest vertices of a tensor product are characterized by
$\varepsilon_i(b_1)=0$ and
$\varepsilon_i(b_2)\le\langle h_i,wt(b_1)\rangle$, and each such vertex
generates a canonical $B(\lambda)$ component, so the crystal of
$M_1\otimes M_2$ is the disjoint union of its highest weight components with
the expected multiplicities.

The examples companion page works the boundary cases: the equality-case
failure of any uniform tensor convention, the complete computation of
$B(1)\otimes B(1)=B(2)\sqcup B(0)$ for $\mathfrak{sl}_2$, the highest
components of the $A_2$ tensor square, and the dual-crystal reverse-arrow
computations.
