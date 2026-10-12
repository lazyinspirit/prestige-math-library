---
page: hecke-symmetries-and-generic-quantum-schur-weyl-duality
title: "Hecke Symmetries and Generic Quantum Schur–Weyl Duality"
status: draft
items: [def-hh-hecke-symmetry-and-ordered-basis-operator, lem-hh-type-a-tensor-operator-is-a-hecke-symmetry, thm-hh-hecke-symmetry-tensor-power-action, lem-hh-quantum-and-hecke-tensor-actions-commute, lem-hh-classical-tensor-centralizer-by-polarization, lem-hh-finite-semisimple-matrix-double-commutant, lem-hh-finite-matrix-rank-under-specialization, lem-hh-classical-and-generic-tensor-double-centralizer-suppliers, thm-hh-generic-quantum-schur-weyl-mutual-centralizers]
examples: []
---

The Hecke action here starts from an explicit operator on an ordered basis. Its quadratic and braid relations are checked directly before the universal Hecke presentation is used. The quantum action is also constructed from generators and relations: the vector matrices satisfy the presentation, the coproduct descends through every relation, and its tensor powers commute with the local Hecke operators.

The centralizer result is proved over $F=\mathbb Q(q)$, with $q$ indeterminate. The proof first identifies the classical rational commutants, then compares finite matrix ranks at $q=1$ and over $F$. This gives both mutual centralizer equalities for every $N\ge1$ and $n\ge0$, as equalities of the two matrix-algebra images.

## Ordered-basis Hecke symmetry

For $V_N$ with basis $e_1<\cdots<e_N$, the operator in [[def-hh-hecke-symmetry-and-ordered-basis-operator]] fixes a repeated pair with coefficient $q$, flips an increasing pair, and adds $(q-q^{-1})$ times a decreasing pair when it flips it. [[lem-hh-type-a-tensor-operator-is-a-hecke-symmetry]] proves the quadratic relation and inverse on each ordered-pair subspace and checks the braid equation on every equality and order pattern of a triple. It records both common normalizations: $T$ has $(T-q)(T+q^{-1})=0$, while $S=qT$ has $(S-q^2)(S+1)=0$.

The local operators on adjacent tensor positions therefore satisfy the normalized type-A Hecke presentation. [[thm-hh-hecke-symmetry-tensor-power-action]] uses its quotient property to construct the action of the abstract Hecke algebra on $V_N^{\otimes n}$. At $q=1$ the action specializes to permutations of tensor positions. The action theorem constructs a homomorphism into the endomorphism algebra; it does not equate the abstract algebra with its image when that homomorphism has a kernel.

## Quantum tensor action and commuting inclusion

[[def-hh-type-a-quantum-tensor-action-for-centralizers]] gives the type-A quantum algebra presentation over $\mathbb Q(q)$, its vector matrices, and the coproduct convention. The relation-descent proof in [[lem-hh-quantum-presentation-and-tensor-action-descent]] checks every vector relation, then checks the Cartan, mixed commutator, distant, and quantum Serre relations under the coproduct. It also proves coassociativity and both counit identities, so all tensor-power actions are defined from the same presentation.

[[lem-hh-quantum-and-hecke-tensor-actions-commute]] verifies the local commutation on two tensor positions. For each $E_i$ and $F_i$, it checks the repeated labels, the two labels $i,i+1$, and both orientations of every outside label below or above them. The iterated coproduct formula groups the two terms meeting a Hecke generator into that checked two-site action; the remaining terms are identities or matching Cartan weights. Thus the two images commute before any commutant equality is asserted.

## Classical and generic mutual centralizers

Over $\mathbb Q$, [[lem-hh-classical-tensor-centralizer-by-polarization]] identifies the commutant of the place-permutation image with the classical matrix Lie tensor image. In one direction, invariant tensors are spanned by orbit sums; inclusion–exclusion expresses each orbit sum as a rational combination of pure powers, and Newton identities express those powers in the Lie tensor image. [[lem-hh-finite-semisimple-matrix-double-commutant]] proves the reverse classical commutant over $\mathbb Q$: finite-group averaging gives semisimplicity, and a direct finite-density argument over each division ring of endomorphisms gives the double commutant without a splitting-field assumption.

For the passage to $\mathbb Q(q)$, [[lem-hh-finite-matrix-rank-under-specialization]] proves that a nonzero specialized minor remains nonzero generically. The proof uses this twice for each side: commutator matrices bound generic commutants above, while selected regular word matrices bound the generic images below. The regular Cartan operators $(L_j-1)/(q-1)$ specialize to the classical diagonal count operators, so the classical quantum image is not lost in the limit. [[lem-hh-classical-and-generic-tensor-double-centralizer-suppliers]] establishes these four bounds. The commuting inclusions then close both dimension sandwiches in [[thm-hh-generic-quantum-schur-weyl-mutual-centralizers]].

The theorem is an image statement for all $N,n$. When $N\ge n$, a tensor with $n$ distinct basis labels has $n!$ independent Hecke orbit vectors, so the standard basis of the abstract Hecke algebra acts faithfully. When $N<n$, faithfulness is not part of the mutual-centralizer claim; the theorem gives an explicit one-dimensional example where the abstract action has a kernel. No root-of-unity or positive-characteristic specialization is covered.

The arguments use the proved scalar and tensor conventions, elementary tensor coherence, and the generic type-A Hecke presentation and standard basis: [[def-hh-scalar-and-tensor-conventions]], [[lem-hh-tensor-coherence-on-elementary-tensors]], [[def-hh-universal-coxeter-hecke-parameters-and-presentation]], and [[thm-hh-generic-coxeter-hecke-standard-basis]].
