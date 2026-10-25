---
page: gelfand-theory-and-commutative-c-star-algebras
title: Gelfand Theory and Commutative C Star Algebras
status: published
items: [def-character-and-maximal-ideal-space, thm-characters-on-a-unital-banach-algebra-are-continuous, lem-closed-ideal-quotient-is-a-banach-algebra, thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra, thm-spectrum-as-character-values, thm-maximal-ideal-space-is-compact-hausdorff, def-gelfand-transform, thm-gelfand-transform-is-a-contractive-unital-homomorphism, def-jacobson-radical-and-semisimple-commutative-banach-algebra, thm-kernel-of-the-gelfand-transform-is-the-radical, def-c-star-algebra, def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra, lem-c-star-spectral-radius-equals-norm-for-normal-elements, lem-characters-on-a-commutative-c-star-algebra-preserve-star, thm-commutative-gelfand-naimark, lem-characters-of-continuous-functions-are-evaluations, thm-commutative-gelfand-duality, lem-zero-free-entire-function-of-exponential-type-is-an-exponential, thm-gleason-kahane-zelazko, lem-extreme-points-of-the-dual-ball-of-c-of-k, thm-banach-stone, def-zero-set-filter-and-zero-set-ultrafilter, lem-maximal-ideals-of-c-of-x-and-zero-set-ultrafilters, lem-zero-set-ultrafilters-and-stone-cech-points, thm-gelfand-kolmogorov-for-rings-of-continuous-functions, def-boolean-algebra-and-boolean-ultrafilter-for-stone-duality, def-stone-space-and-clopen-algebra, lem-boolean-ultrafilter-extension-from-compact-products, thm-stone-representation-for-boolean-algebras, thm-stone-duality, def-algebraic-unitization-of-a-star-algebra, thm-minimal-c-star-unitization, thm-character-space-of-the-unitization-is-one-point-compactification, thm-nonunital-commutative-gelfand-naimark, def-approximate-unit-and-proper-c-star-morphism, thm-every-commutative-c-star-algebra-has-an-approximate-unit, thm-locally-compact-gelfand-duality]
examples: []
---

This page develops Gelfand theory for commutative Banach algebras together with
the commutative Gelfand–Naimark theorem and the topological dictionaries that
accompany it. Characters are defined for arbitrary associative complex algebras,
with neither continuity nor unitality assumed; on a nonzero unital Banach algebra
they are automatically unital, continuous and of norm one, so the character space
sits inside the dual unit ball. Closed ideals give Banach quotients, maximal
ideals are exactly the kernels of characters, and the spectrum of an element is
the set of its character values — the fact that turns the Gelfand transform
$\hat a(\chi) = \chi(a)$ into a contractive unital homomorphism with
$\|\hat a\|_\infty = r(a)$, whose kernel is the Jacobson radical.

The C\*-algebraic half begins with involution axioms, the C\*-identity and the
self-adjoint, positive, normal and unitary vocabulary. For normal elements the
C\*-identity forces the spectral radius to equal the norm, characters on
commutative C\*-algebras preserve the involution, and the range of the Gelfand
transform is a closed, unital, self-adjoint, point-separating algebra to which
Stone–Weierstrass applies: this is the isometric unital $\ast$-isomorphism
$A \cong C(\Delta(A))$. The dual statements follow: characters of $C(K)$ are
evaluations, so compact Hausdorff spaces and unital commutative C\*-algebras are
contravariantly equivalent; Gleason–Kahane–Żelazko and Banach–Stone are proved as
the classical companions, the latter via extreme points of the dual ball of
$C(K)$. A separate block reconstructs the maximal ideal space of the ring of all
continuous real functions as $\beta X$, through z-filters and z-ultrafilters, and
redevelops Boolean Stone duality under the Axiom of Choice, including the
ultrafilter extension lemma, the representation $B \cong \operatorname{Clop}(\operatorname{Ult}B)$
and the full duality between Boolean algebras and Stone spaces.

The final block removes the unit: the algebraic unitization $A^+ = A \oplus \mathbb C$
receives the minimal C\*-norm $\|L_a + \lambda I\|$, unique among C\*-norms
extending the norm of $A$; the character space of the unitization is the
one-point compactification of $\Delta(A)$; and every commutative C\*-algebra is
isometrically $\ast$-isomorphic to $C_0(\Delta(A))$, with approximate units of
positive contractions and a contravariant equivalence between locally compact
Hausdorff spaces with proper maps and commutative C\*-algebras with proper
star-homomorphisms. The choice ledger is explicit throughout: characters are
automatically continuous in ZF, the maximal ideal theorem and commutative
Gelfand–Naimark use full AC, the $C(K)$ evaluation theorem inherits Dependent
Choice from Urysohn, and the locally compact duality records the same costs.

The Fourier/Gelfand example for general LCA group algebras is developed later in [[bochner-inversion-and-plancherel-on-lca-groups-examples]], after the convolution-algebra and character-space theorems.
