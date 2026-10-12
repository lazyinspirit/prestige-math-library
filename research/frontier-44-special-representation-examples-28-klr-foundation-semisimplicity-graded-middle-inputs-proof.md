# Local verification of the middle-limit lemma's earlier-stage inputs

This is an actual conditional proof component of the owned joint projective induction, not a claim that the earlier geometric induction has been completed. Its dependencies are already in the exact core graph: relative perverse hard Lefschetz, graded base-class hard Lefschetz, the constructed graded primitive decomposition and centered nilpotent-filtration lemmas, classical Poincaré/Hodge theory, and the earlier nonmiddle primitive polarizations. No new IDs, homes or metadata edges are introduced.

Let m denote ordinary cohomological degree and b the perverse grade. Write H_b^m for the canonical graded perverse cohomology, and F_bH^m for its filtration. Earlier-stage relative HL and abstract splitting identify H_b^m with the cohomology of the corresponding perverse sheaf and give the natural graded eta primitive decomposition. Assume the earlier-stage base HL L^j:H_b^{n+b-j}→H_b^{n+b+j} is actually proved. Then the filtration

W_aH^m = F_(m−n+a)H^m

on total cohomology is the centered filtration of the nilpotent operator L: its degree-j isomorphism is exactly the displayed base HL with b=m−n+j. Thus uniqueness in the local centered-filtration lemma identifies it intrinsically with the kernel/image formula. The following calculations verify all formal inputs of the new middle-limit lemma.

## (a) Hodge stability and eta injectivity

The intrinsic kernel/image formula for W, degree by degree, consists of kernels and images of powers of cup product by L, of Hodge type(j,j), within the appropriate ordinary degree. Hence it consists of Hodge subspaces; finite sums and intersections stay Hodge. Since eta commutes with L, it preserves every kernel and image and therefore W.

For a≤0, Gr_a^W H^(n−2)=H_(a−2)^(n−2), while Gr_a^W H^n=H_a^n. The eta map between them is the first power in the relative eta string from perverse degree a−2. Relative hard Lefschetz makes eta^(2−a) an isomorphism on that string. If the first power kills a class, so does that isomorphism; therefore the class was zero. This proves the exact eta-injectivity in hypothesis(a), rather than assuming a stronger primitive-compatible splitting in the derived category.

## (c) Centered-filtration pairing

On total cohomology define a nondegenerate bilinear form S(u,v)=(-1)^floor(m/2) ∫_X u∧v when u∈H^m,v∈H^(2n−m), and zero for other ordinary-degree pairs. Poincaré duality makes it nondegenerate. It also has the exact symmetry required by the self-dual-filtration supplier: S(v,u)=(-1)^n S(u,v) on every complementary-degree pair. For m=2k the degree sign ratio is(-1)^(n−2k) and the cup-interchange sign is+1; for m=2k+1 the ratio is(-1)^(n−2k−1) and the cup-interchange sign is−1. Their products both equal(-1)^n. Thus S is symmetric for even n and skew-symmetric for odd n. Since the sign changes under m→m+2 and the even cup class L is self-adjoint for the ordinary integral, S(Lu,v)+S(u,Lv)=0. The actual local self-dual-centered-filtration lemma therefore gives W_a^⊥=W_(−a−1). Its restriction to any complementary-degree pair differs from the ordinary integral only by a nonzero sign. Hence the ordinary integral annihilates W_a×W_b when a+b<0. This is exactly hypothesis(c). No Hodge weight theorem or decomposition theorem is used in this argument.

## (b) The nonmiddle form q_i

Fix i≥0 and put m_i=n−2−2i, A=i+2. Then Gr_i^W H^(m_i)=H_(−A)^(m_i). The heart-level eta primitive decomposition and its cohomology give the direct sum

H_(−A)^(m_i)= ⊕_(r≥0) eta^r U_r,

where U_r is the eta-primitive part of H_(−A−2r)^(m_i−2r). This is the locally constructed canonical primitive decomposition: no chosen global Deligne lifts are used. Its projections commute with L because the heart-level decomposition is natural and L is the target cup class on cohomology. Therefore the kernel K_i of L^(i+1) decomposes as ⊕ eta^r V_r, where V_r=ker L^(i+1) on U_r.

The L-Lefschetz center on U_r is n−A−2r. Its degree m_i−2r equals that center minus i. Thus V_r is precisely the double primitive part with first primitive index A+2r=i+2+2r and second index i. Every one of these first indices is positive, so its nondegenerate form is supplied by the previously established NONMIDDLE polarizations.

Choose representatives u∈W_i H^(m_i−2r) and v∈W_i H^(m_i−2s). The form q_i on their eta powers is

q_i(eta^r u,eta^s v)=∫_X eta^(A+r+s) L^i u∧v.

This is well-defined on the graded spaces: replacing either representative by a W_(i−1) vector gives, after L^i, a W_(−i−1) vector paired with W_i, which vanishes by(c). If r>s, then A+r+s≥A+2s+1. The eta-primitive condition on v makes eta^(A+2s+1)v belong to W_(i−1) in its new ordinary degree. Apply the remaining eta powers and L^i, and pair with u; again(c) gives zero. If s>r, interchange the arguments, changing only the Poincaré graded sign, and obtain the same zero. Therefore the direct sum is orthogonal for q_i.

For r=s its form is exactly ∫ eta^(A+2r)L^i u∧v, the previously polarized double primitive form of indices(i+2+2r,i), up to its specified nonzero Hodge normalization. It is nondegenerate on V_r. A finite orthogonal sum of these nondegenerate forms is nondegenerate on K_i. This proves the exact hypothesis(b). It also supplies the graded-form well-definedness, which cannot be omitted merely because a published source cites a double Lefschetz decomposition.

## Identification of the middle double primitive subspace

The natural map from D=ker(L:H^n→H^(n+2)) to ker(L:Gr_0^W H^n→Gr_(−2)^W H^(n+2)) is surjective, with kernel R=D∩W_(−1)H^n. Indeed lift a graded kernel vector to x∈W_0H^n. Its error Lx lies in W_(−3)H^(n+2). The homogeneous centered Jordan strings make L:W_(−1)H^n→W_(−3)H^(n+2) surjective: a target of weight≤−3 has a predecessor of weight≤−1. Subtract that predecessor to obtain an actual lift in D. All maps here are Hodge maps, so this identifies D/R as a Hodge space with the indicated graded kernel.

The middle double primitive space T is the simultaneous kernel of this graded L map and eta:Gr_0^W H^n→Gr_0^W H^(n+2). For any representative x∈D of a class in T, eta x lies in W_(−1)H^(n+2). Every z∈ker(L:H^(n−2)→H^n) lies in W_0 by the centered string weights. Therefore

∫_X x∧eta z = ∫_X eta x∧z =0

by(c). Thus T is a Hodge subspace of D/R orthogonal to the image of M=eta ker L. This is precisely the hypothesis consumed by the conclusion of `lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations`. That local six-step theorem now gives its positive middle polarization. No middle positivity has been used to establish any of(a)–(c) or this identification.

## Completion boundary

These calculations complete the FORMAL verification of the middle-limit theorem's inputs, conditional on the previously ordered relative HL, base graded HL and nonmiddle polarization stages. The actual geometric proofs of those earlier stages, refined fiber intersection-map invertibility and moving hyperplane family, plus the local Morse product/sheaf transport, remain required components of the joint projective core. This note does not mark the joint-package supplier complete or grant native acceptance.
