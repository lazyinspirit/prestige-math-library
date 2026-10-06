# Connected graded module-coalgebra freeness: supplier draft

Proposed supplier: `thm-connected-graded-module-coalgebra-with-injective-unit-orbit-is-free`.
This draft supplies the algebraic freeness step for Thom detection. It does
not assert that the Steenrod algebra or Thom cohomology already satisfies
its hypotheses. Those constructions and their compatibility remain separate
suppliers in the approved supporting AT pair.

## Exact source and audit

Tom Weston, *An Introduction to Cobordism Theory*, §6, Lemma 6.1 and
Proposition 6.2 with its complete proof, printed/PDF pp. 11–13:
https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf .
I fetched the full PDF and read these pages directly. The proposition says:
a connected coalgebra that is an A-module, whose coproduct is A-linear
for the coproduct-induced diagonal action, is free if the unit-orbit map
`a ↦ a · 1` is injective. Here the coalgebra's `1` means its counit-normalized
degree-zero vector, not an algebra unit on that coalgebra.

Three details require repair or expansion in using the source:

1. Its phrase “choose any k-splitting” must be replaced, for the stated
   graded induction, by **choose a degree-preserving k-splitting**.
   An arbitrary ungraded splitting need not produce the asserted
   isomorphism: take A=M=k[t], |t|=2, with primitive t and regular action.
   Then M/A⁺M=k, but the section 1↦1+t makes the proposed map A→M
   multiplication by 1+t, which is not surjective. The theorem's freeness
   conclusion remains true; that proof choice is the problem.
2. The abbreviated “different bidegrees” injectivity argument needs a
   largest-second-degree argument for arbitrary finite sums. Merely noting
   a distinguished tensor in each individual image does not rule out
   cancellation. The proof below supplies the argument.
3. Lemma 6.1's two endpoint terms apply in **positive** degree. In degree
   zero the normalized vector has coproduct u⊗u, rather than two copies
   of that tensor. Nonnegative grading and connectedness are used explicitly.

Weston's §12, printed pp. 22–24, constructs the intended coalgebra on
stable Thom cohomology and invokes Proposition 6.2 in Corollary 12.3.
This draft proves Proposition 6.2's algebraic input independently; it does
not import §12's abbreviated construction as a proved local prerequisite.

## Published library interfaces actually used

The graded algebra and module structures are defined locally by the explicit
maps, decompositions, and axioms in the next section. Their use requires no
published graded-algebra definition or later-page supplier.

- [L2] `def-quotient-vector-space-and-canonical-projection` and
  `prop-quotient-vector-space-operations-and-projection`: the vector-space
  quotient, its surjective linear projection, and its kernel.
- [L3] `cor-every-vector-space-has-a-basis`, under `def-axiom-of-choice`:
  existence of bases. AC also chooses degreewise bases and their lifts.
- [L4] `thm-universal-property-of-module-tensor-products`: a balanced
  bilinear formula induces a map on the tensor product.
- [L5] `thm-tensor-products-commute-with-arbitrary-direct-sums` and
  `thm-tensor-product-basis-from-bases`, together with
  `thm-unit-isomorphisms-for-module-tensor-products`: the algebraic tensor
  product's bidegree decomposition and finite coordinate expansions.
  In particular A⊗Q≅⊕_j A follows from a supplied basis of Q alone;
  this does not require another choice of a basis for A.
- [L6] `def-free-module-on-a-set-and-standard-basis` and
  `thm-universal-property-of-free-modules`: free modules over arbitrary
  unital rings and their finite linear combinations. These apply to A
  without a commutativity assumption.

The statements of these interfaces were inspected directly. No published
general Hopf-module theorem is used. The coalgebra and bialgebra structures
needed here are specified by their maps and identities below, and all
additional consequences used in the proof are proved below.

## Structures and justification of the diagonal action

Fix a field k. All tensor products are algebraic tensor products over k,
and all direct sums have finite support. Fix the Koszul graded convention:
interchanging homogeneous vectors v,w contributes (-1)^{|v||w|}.
In characteristic two these signs are all 1, giving the convention needed
for the mod-two Steenrod/Thom application.

A **connected nonnegatively graded bialgebra** for this statement consists
of a unital associative graded k-algebra A=⊕_{n≥0} A_n with A_0=k·1_A,
a degree-preserving k-linear coproduct Δ_A:A→A⊗A, and a counit
ε_A:A→k of degree zero. The coproduct is coassociative, both counit
identities hold, Δ_A(1_A)=1_A⊗1_A, ε_A(1_A)=1, and Δ_A and ε_A
are algebra homomorphisms, where

    (a⊗b)(c⊗d)=(-1)^{|b||c|}ac⊗bd.

The coaugmentation is η_A:k→A, λ↦λ1_A. A Hopf algebra can additionally
be equipped with an antipode S satisfying
μ(S⊗id)Δ_A=η_Aε_A=μ(id⊗S)Δ_A. This theorem does not require or
use an antipode: the bialgebra hypotheses suffice. Neither commutativity
nor cocommutativity is assumed.

A **connected nonnegatively graded coaugmented coalgebra** here consists
of M=⊕_{n≥0} M_n, M_0=k·u, degree-preserving Δ_M:M→M⊗M and
ε_M:M→k, with coassociativity and the two counit identities, and with
ε_M(u)=1 and Δ_M(u)=u⊗u. Its coaugmentation is λ↦λu. These last
conditions also follow if one initially assumes only that ε_M:M_0→k
is an isomorphism: choose its unique inverse image u of 1; grading forces
Δ_M(u)=c u⊗u, and a counit identity forces c=1. Thus this normalization
introduces no choice or extra unidentified “unit” on M.

Supply M with a k-bilinear unital left A-action, with
1_A·m=m, (ab)·m=a·(b·m), and (λ1_A)·m=λm for λ∈k.
Require A_iM_j⊆M_{i+j}. These are the local graded-module axioms;
the direct-sum decomposition explicitly means that every vector has a unique
finite sum of homogeneous components. Thus projection to any fixed degree
is a k-linear map, and multiplying homogeneous components gives the stated
degree without a commutativity requirement on A. On M⊗M define, for
homogeneous a,v,w,

    a·(v⊗w)=Σ (-1)^{|a₂||v|}(a₁·v)⊗(a₂·w),
    where Δ_A(a)=Σ a₁⊗a₂ with homogeneous summands.

This is a well-defined action. For fixed a, the displayed bilinear formula
is a linear function of the tensor Δ_A(a), so it is independent of its
chosen elementary-tensor expression by [L4]; it is also bilinear in v,w,
and hence descends to M⊗M. Extend linearly in a. The identity element acts
as the identity since Δ_A(1_A)=1_A⊗1_A. For homogeneous a,b,v,w,
the term of a·(b·(v⊗w)) has sign

    |b₂||v|+|a₂|(|b₁|+|v|).

The corresponding term of (ab)·(v⊗w) has sign

    |a₂||b₁|+(|a₂|+|b₂|)|v|.

These are equal modulo two; multiplicativity of Δ_A and associativity
on M give equality of the terms. This proves action associativity and
its degree rule. No coalgebra coaction of A on M is being assumed:
Δ_M is M's coalgebra coproduct, and the A-action on its target is the
diagonal action just justified. In particular this is not an invocation
of the fundamental theorem of Hopf modules.

Require the compatibility

    Δ_M(a·m)=a·Δ_M(m).

Counit compatibility ε_M(a·m)=ε_A(a)ε_M(m) follows from these
grading conventions and the scalar action: if either degree is positive,
both sides vanish; if both degrees are zero, it is the scalar identity.
It can equivalently be included as an explicit module-coalgebra axiom.

## Precise theorem

Assume AC, and the structures and compatibility specified above. Suppose
the degree-preserving orbit map ν:A→M, ν(a)=a·u, is injective.
Set A⁺=⊕_{i>0} A_i and Q=M/A⁺M. Then Q is naturally nonnegatively
graded, Q_0=k·π(u), and for every degree-preserving k-linear section
f:Q→M of the quotient map π, the map

    Φ:A⊗Q→M,       Φ(a⊗q)=a·f(q)

is an isomorphism of graded left A-modules, where A acts on the first
factor of A⊗Q. Consequently any homogeneous k-basis (q_j) of Q lifts
to a homogeneous free A-basis (f(q_j)) of M. No finite-dimensionality
or degreewise finite-type assumption is needed.

If a homogeneous basis and homogeneous lifts are supplied as data, the
proof does not require additional choice. Injectivity of ν is an explicit
hypothesis; faithfulness of the A-action alone is not being substituted
for it.

## Complete local proof

1.1 Grading and the counit give, for homogeneous m∈M_d with d>0,
Δ_M(m)=u⊗m+m⊗u+R, where R lies in
⊕_{0<i<d}M_i⊗M_{d-i}. Indeed the degree-(0,d) component is
u⊗m by (ε_M⊗id)Δ_M=id, since ε_M vanishes on positive degrees;
the other counit identity gives the degree-(d,0) component. Tensor
bidegrees are direct by [L5]. In degree zero, Δ_M(λu)=λu⊗u,
as already justified. The same argument gives the two endpoints for
Δ_A(a) in positive degree. [given, L5]

1.2 A⁺M is the span of a·m with a of positive degree. It is graded:
decomposing a,m into homogeneous components expresses every element
as a finite sum of homogeneous such products. It is an A-submodule,
since b(a·m)=(ba)·m and each nonzero homogeneous product ba has
positive degree. It has no degree-zero component. By [L2], Q is the
direct sum of Q_d=M_d/(A⁺M)_d, π is graded and surjective, its
kernel is A⁺M, and Q_0=M_0. Moreover
π(a·m)=ε_A(a)π(m) for every a,m: positive-degree a is killed,
and degree-zero a acts as a scalar. [given grading/action axioms, L2]

1.3 Choose a k-basis of each Q_d and lift each basis vector to M_d;
this is allowed by [L3] and AC. In degree zero use π(u), with lift u.
Extend the lifts linearly on each degree and then on the direct sum to
obtain a graded section f. Conversely any graded section has f(π(u))=u,
because π:M_0→Q_0 is an isomorphism. The formula for Φ is balanced
and bilinear over k, so [L4] makes it a well-defined map. It is graded,
and A-linearity follows from (ba)f(q)=b(af(q)). [given, L2, L3, L4]

2.1 We prove surjectivity by induction on d≥0. In degree zero Φ is
the scalar isomorphism k⊗k→k·u. Suppose every M_e with e<d is
in its image, and take m∈M_d. The vector m-f(π(m)) lies in
(A⁺M)_d, so it is a finite sum Σ a_t m_t with homogeneous a_t of
positive degree and m_t of degree d-|a_t|<d. Such an expression is
obtained by projecting any finite expression in A⁺M to degree d.
By induction choose y_t∈A⊗Q with Φ(y_t)=m_t. Then
m=Φ(1_A⊗π(m)+Σ a_t y_t). Thus Φ is surjective in each degree,
and finite degree support proves surjectivity on M. [given grading/action axioms, L2, step 1.3, ih]

3.1 Define T=(id_M⊗π)Δ_M:M→M⊗Q. Give M⊗Q the A-action
on the first factor only. Then T is A-linear. Indeed apply id⊗π to
the diagonal compatibility formula. Every summand with a₂ of positive
degree vanishes by step 1.2. The surviving terms have a₂ in degree zero,
so their Koszul signs are 1; the counit identity
(id⊗ε_A)Δ_A(a)=a combines these terms to give

    T(a·m)=a·T(m).

This calculation also treats a of degree zero and all inhomogeneous
inputs by linearity. [given, L4, step 1.2]

3.2 For homogeneous q∈Q_d, the component of T(f(q)) with second
degree d is exactly u⊗q. Every other component has second degree
strictly less than d, by step 1.1. When d=0 there are no other
components. Therefore

    TΦ(a⊗q)=ν(a)⊗q + terms of second degree less than d.

This statement concerns second-factor degree, not total degree; multiplication
on the first factor preserves that comparison. [step 1.1, step 1.3, step 3.1]

3.3 Suppose z∈ker Φ. By [L5], using a homogeneous k-basis (q_j)
of Q, write z uniquely as a finite sum Σ_j a_j⊗q_j with a_j∈A.
If z≠0, take the largest degree d of a q_j with a_j≠0. Since
TΦ(z)=0, its component of second degree d gives

    Σ_{|q_j|=d} ν(a_j)⊗q_j=0.

The q_j in this equation are distinct basis vectors. Their coordinate
functionals, tensored with id_M via [L4], give ν(a_j)=0 individually.
Injectivity of ν gives a_j=0, contradicting the definition of d.
Hence z=0 and Φ is injective. This finite maximum argument requires
no finite-dimensionality of Q or its degree pieces. [L3, L4, L5, step 3.2, given]

4.1 By steps 2.1 and 3.3, Φ is a bijective graded A-linear map.
Its inverse is A-linear and graded by uniqueness of preimages. Every
element of A⊗Q has a unique finite expression Σ a_j⊗q_j, by [L5];
the first-factor action turns this into a free A-module with basis
1_A⊗q_j, in the sense of [L6]. Transporting that basis by Φ proves
the theorem, with each generator in degree |q_j|. AC was used only
for the homogeneous basis and its lifts; no further infinite selection
occurs in the degree induction or finite-maximum argument. [L5, L6, step 1.3, step 2.1, step 3.3] ∎

## Application obligations and limits

For Thom detection take k=F₂. The supporting pair must independently
construct the connected nonnegative graded Steenrod bialgebra, the
stable Thom cohomology coalgebra with normalized degree-zero Thom vector U,
the Steenrod action, and the coalgebra compatibility for the coproduct
induced by Whitney sum. It must prove that a↦aU is injective. These are
exact hypotheses of this supplier, not consequences of its conclusion.
The resulting freeness is algebraic; converting it to Thom-space
homotopy detection requires the separate Eilenberg–Mac Lane comparison
and homotopy machinery. No such topological comparison is claimed here.

Within the freeness theorem there is no remaining unproved algebraic
prerequisite: all Hopf-specific endpoint and quotient arguments, the
well-defined diagonal action, and both directions of the isomorphism
have been supplied above from the explicit axioms and inspected published
linear-algebra/tensor/free-module interfaces.
