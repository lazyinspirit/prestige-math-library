# Final2: complete first-level count from local interval bases

Author `/root/repair_cell_head_classification/native50_pairing_constructor`. Research-only SECOND/FINAL current authored-count construction candidate, 2/max2. This continues the first insufficient candidate; it neither starts a new pair nor resets any source20/50/24 proof history. All active/native/state/record/consumer work belongs to the parent.

This proof binds two complete local carriers: `final2-integral-root-interval-basis-proof.md` in this directory, and the sibling's `../kleshchev-essential-combinatorics-constructor/essential-count-recurrence-proof.md`. Their predicates agree: B(r,s)=s−r+sum a_r..a_s, C(r,s)=s−r+sum a_r..a_(s−1); a bounded matching is injective with source≤target, without an order-preservation requirement. Their essential sets therefore agree literally. The source locators document reconstruction; no source theorem is a proof premise.

## 1. The integral local input, and disconnected weights

Use the actual q=1 Schur Weyl-cell simple L_N(μ), μ dominant polynomial, converted from right to left by star. Its highest vector v has weight μ and norm1. The integral interval carrier proves directly from the tensorword endomorphism realization that negative coefficient operators span each weight space, positive coefficient operators detect every nonzero vector, and integral cut-root words span every grade whose simple-root coefficients are0or1. It also proves the complete essential-subset basis and the dimension formula
 dim L_N(μ)_(μ−α(r,s))=ε_a(r,s),   a_j=μ_j−μ_(j+1).
The sibling proves for every dominant a and every interval, by finite matching/path/stack bijections and finite triangular matrix inversion,
 ε_a(r,s)=ν_a(r,s)+sum_(u=r+1)^s ε'_a(r,u−1)ν_a(u,s),
where ε'_a(r,t)=ε_(a+ω_t)(r,t). These are actual proved local inputs, including all zero dimensions and arbitrary nonrestricted auxiliary weights.

We spell out a further modular consequence of the same foundation to close the algebraic support seam. Let Γ be a deficit with each simple-root coefficient0or1, with disconnected support Γ=δ+ζ separated by at least one zero coefficient. Take the first component δ entirely inside the Levi on the first N−1 coordinates. Every negative cut word of gradeΓ factors uniquely into a δ-word and a ζ-word, since no root crossing a missing simple root can occur; the two groups commute. Every positive coefficient word of gradeΓ similarly factors. All positive/negative cross commutators between the separated groups vanish. Consequently the matrix of highest coefficients atΓ is the tensor product of the two separate coefficient matrices atδ andζ: for positive tests e,e' and negative words f,f',
 highest(e e' f f' v)=highest(e f v) highest(e' f' v).
The rightmost separated test/word leaves the Cartan coordinates of the other interval unchanged, since the intervals are nonadjacent; this verifies the displayed equality even though f'f v has shifted weight.

Choose bases f_a v and f'_b v of the separate images. Positive detection yields positive linear-combination tests e_a and e'_b with e_a f_c v=δ_ac v, e'_b f'_d v=δ_bd v, by finite matrix inversion over the field. Thus the products f_a f'_b v are independent, since e_a e'_b tests detect their coefficients; they span by the preceding factorization. On the entire weight space atΓ the operator
 P_δ=sum_a f_a e_a
is the identity: applied to f_c f'_b v, its cross commutations give f_c f'_b v. Every e_a is a positive Levi coefficient word of nonzero weightδ, and every f_a is a negative Levi coefficient word. This argument proves the identity on arbitrary entangled linear combinations, not only pure products. If a separate image is zero, the full weight space is zero and cannot supply a primitive vector.

Now let M0⊂M1 be consecutive terms of a finite composition series of the first level, and choose x∈M1 representing the highest vector of a simple factor, of full deficitΓ. Positive Levi operators of nonzero weight send x into M0, because they annihilate its highest class. If Γ had a disconnected initial componentδ, the identity P_δ x=x would put x intoM0: e_a x∈M0 and f_a preserveM0. This is impossible. Hence any primitive factor vector of binary deficit ending at the last simple root has support a single terminal interval. This is the disconnected-root primitive exclusion, proved here, without a characteristic-zero PBW theorem or a pure-product assumption for x.

## 2. Exact first-level character inversion

Suppose μ_N=0 and let l=N−1. Define the first level M as the sum of weight spaces of L_N(μ) whose last diagonal coordinate is1. It is a polynomial Schur/GL_(N−1) module of degree|μ|−1; the Levi preserves that coordinate. Put β_i=α_i+…+α_l. For any i write ν_i=(μ_1,…,μ_(N−1))−ε_i, as a weight, and write
 d_i=dim L_N(μ)_(μ−β_i),
 b_u=[M:L_(N−1)(ν_u)] when ν_u is dominant, and b_u=0 otherwise.
Dominance of ν_u is equivalent to a_u>0. No modular restriction condition is imposed on a dominant ν_u. In particular non-p-restricted factors still contribute to all character equations below.

A simple factor contributing to the ν_i weight must have highest weight η dominatingν_i. The standard Schur cell simples have unique highest vector, all other weights dominated by it, and cover all simple Schur modules by the cellular regular-module argument. Thus this statement applies to every factor over every field. Liftη by appending the last coordinate1, and let Γ=μ−(η,1). Sinceη is a weight of the first level, Γ is a nonnegative integral combination of simple roots; sinceη dominatesν_i, β_i−Γ is a nonnegative integral combination of Levi roots. Consequently Γ_j=0 forj<i, Γ_j∈{0,1} fori≤j<l, and Γ_l=1. The support exclusion in Section1 forcesΓ=β_u for someu≥i. Thusη=ν_u andν_u must be dominant. Only these terminal labels can contribute to this character equation; no stronger assertion about the other first-level factors is needed.

Weight-space dimensions are additive on a composition series. Indeed the actual weight idempotents give direct projections, so taking a fixed torus weight is exact. The own highest weight of L_(N−1)(ν_i), when defined, has dimension1. Thus
 d_i=b_i+sum_(u>i) b_u a_iu,
 a_iu=dim L_(N−1)(ν_u)_(ν_i).
For an invalid ν_u its term is omitted. The lower weight deficit is
 ν_u−ν_i=ε_i−ε_u=α_i+…+α_(u−1).
The fundamental coordinates ofν_u on that interval are a_i,…,a_(u−2),a_(u−1)+1. Any altered coordinate atu is outside the interval and has no effect on the local formulas. The proved interval-basis theorem therefore gives
 d_i=ε_a(i,l),   a_iu=ε'_a(i,u−1).
This is valid for every legitimate dominant ν_u, including those not p-restricted. When a_u=0, ν_u is nondominant and b_u=0; also ν_a(u,l)=0 because its root is not normal.

Substitute these dimensions into the character equation and compare it with the sibling's exact recurrence at(i,l):
 ε_a(i,l)=b_i+sum_(u>i)b_u ε'_a(i,u−1),
 ε_a(i,l)=ν_a(i,l)+sum_(u>i)ν_a(u,l) ε'_a(i,u−1).
Starting ati=l and proceeding downwards proves b_i=ν_a(i,l) for all i. This is finite integer reverse substitution, never reduction of the character multiplicities modulo p. The rank isN−1, unrelated to the prime except in the B,C zero tests.

## 3. All-field justification

The interval carrier uses only the infinite purely transcendental extension K=F(t) for polynomial identities and Gaussian elimination. Its scalar-extension argument is reversible: all cut/raising matrices have entries inF, hence their finite ranks and kernels preserve extension; its essential labels and pivot tests yield bases overF itself. Schur cell simples remain simple under every field extension by the cellular rank-one action and their nonzero form. Extending a finite Schur composition series thus retains the simple factors and their labels, so the integers b_i computed overK are exactly those overF. The first-level weight subspace commutes with extension because it is the image of a finite sum of weight idempotents. Neither an algebraic closure nor an assumption that the original field is infinite is used. All nil/zero-weight cases remain in the equations.

## 4. From the root normal stack to the partition signature

Let λ be p-regular, λ≠(n), put N=n, μ=λ', μ_N=0. The index of A=(j,λ_j) is i=λ_j, notj, and notp. The coordinate a_u=μ_u−μ_(u+1) is the multiplicity of the partu inλ; in particular a_u<p, but the preceding algebraic proof did not need that restriction. A removable A is the last row of its widthi block, hence j=μ_i.

The root normal walk based ati starts with a push forA and scans u=i+1,…,l. At coordinates with a_u=0 the compensation walk is neutral, even when B=C=0: the same position supplies and consumes a compensation slot. At positive coordinatesu, the last ordinary row k of the widthu block gives a removable node, and
 C(i,u)=u−i+sum_(t=i)^(u−1)a_t=u−λ_j+j−k.
Thus C(i,u)=0 is exactly the removable node's residue equal to A's residue. The first ordinary row k of the widthu block has an addable node in columnu+1, and
 B(i,u)=u−i+sum_(t=i)^u a_t=u−λ_j+j−k+1.
Thus B(i,u)=0 is exactly that addable node's residue equal to A's residue. Since0<a_u<p at a positive coordinate, B=C+a_u shows these two events cannot occur together at that sameu. Empty widths give only the neutral compensation case. The artificial final zero-width row also has no effect. Scanning positiveu in increasing order lists the ordinary corners aboveA in the order j−1,…,1, with a width block contributing its boundary event when the residue matches. The top extra addable node of widthλ_1+1 is already the B event of the widthλ_1 coordinate; no boundary event is omitted.

Under transpose a removable ordinary node becomes a removable μ-node of opposite residue, and an addable becomes an addable of opposite residue. The top-to-bottom μ-signature following A' lists exactly these above ordinary nodes in this order. The only possible equal-column lower ordinary addable node lies immediately belowA and has residue differing by1, so it is absent from this residue class. Consequently the root push/pop walk is exactly the reduced-signature stack afterA': push a removable `−`, pop on an addable `+`, implementing cancellation `−+`.

Earlier signature signs do not change whether A' or any later push is removed. A survives precisely when no later prefix has more pops than pushes; this is exactly root normalityσ(i,l). If it survives, the final stack consists ofA together with those above ordinary removable nodes in A's residue class whose transposes survive as normal nodes. The sibling proved that this final stack is N(i,l), so
 ν_a(i,l)=0 ifA is not normal,
 ν_a(i,l)=1+#(normal removable nodes strictly aboveA of A's residue) ifA is normal.
The node count here is piecewise. It is not the unconditioned count of normal nodes weakly aboveA whenA is nonnormal.

## 5. Transfer, boundary cases and preserved scope

Apply the parent's independently corrected first-level Schur comparison atq=1. It uses the weight-last-coordinate1 module defined above, the genuine weight idempotent corner and exact Schur functor. For the p-restrictedμ=λ', its image is the same-shape Murphy head, which the approved NEW50 ordinary dictionary identifies with D^λ tensor sign. For a dominantν_u that is p-restricted its image is D^(ν_u') tensor sign; other lower Schur simple factors are killed and remain included in the algebraic character calculation until the exact functor is applied. The surviving labels are distinct by the group simple classification. Since removal ofA is p-regular, ν_i=(λ\A)' is restricted, so its simple image is nonzero and its group restriction multiplicity is precisely b_i. Twisting source and target by sign preserves that multiplicity, because sign of S_n restricts to sign of S_(n−1). The actual comparison supplier and its dependencies are owned by the parent; this construction neither reviews nor alters them.

Forλ=(n) the ordinary simple is trivial and restricts trivially, so the unique removable node has multiplicity1. Its transposed μ=(1^n) node is normal: no subsequent same-residue addable can cancel it, and the preceding possible addable gives a `+−` pair rather than a cancellation. There are no above ordinary removables. Forn=1 this is the one-dimensional restriction toS0; for n=0 the removable-node hypothesis is empty. These cases avoid requiringμ_N=0 where it is false. All primes, all fields of characteristicp, all p-regularλ and all regular removals retain the original stated scope.

The false final unconditional equivalence in the native target is replaced by γ(A)=1_(A normal)·#(normal nodes weakly aboveA of its residue). The first packet's p=2,λ=(5,3,1),A=(3,1) countermodel remains preserved. It demonstrates why no repair may silently restore the unconditional above-count: A is nonnormal but there is a normal node above it of the same residue.

## Result and proof-history boundary

The algebraic count b_i=ν_a(i,l), its correct endpoint shift, its signature identification and its all-field transfer are now obtained from complete local arguments. The actual new prerequisite needed in A-home22 is the integral root-interval essential-basis/count lemma, with its full local proof carried by the guarded research proposal. This is the second/final mathematical candidate for the original count flag, not a third repair or a new proof-history origin. The proof author makes no native-ready, engine-transition or consumer-closure claim; the parent must independently accept the proof and integrate the new local supplier within its existing authorized frontier.
