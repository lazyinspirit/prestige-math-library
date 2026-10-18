# Affine closest pairs and the sufficient strong-order replacement

This is a mathematical construction proposal, not an installed item or an acceptance record. Root lengths are squared length two. Put V=P tensor R, W_aff=W semidirect ell Q, and work in shifted coordinates throughout. A positive affine reflection is r_(alpha,k)(z)=z-((z,alpha)-k ell)alpha, where alpha is a positive finite root. A strict downward step means (z,alpha)>k ell. The resulting displacement is a positive real multiple of alpha; at integral points it is a positive integer multiple.

## Closest pairs, including equality

Let C be an open alcove, x in the relative interior of exactly one facet F of its closure, and y in C. For arbitrary u,v in W_aff,

    ||u x-v y|| >= ||x-y||.

Equality holds if and only if there is tau in W_aff such that (u x,v y)=(tau x,tau y). In particular the two possible regular points paired minimally with a specified orbit point tau x are tau y and tau s_F y.

Here is a direct proof, including the termination point sometimes omitted in folding arguments. First replace C by the fundamental alcove using an affine isometry. Fix p in C. Starting at z=g y, if z is outside C, choose a defining wall H of C whose open interior halfspace does not contain z, and reflect z in H. All orbit points of y are regular, so z never belongs to H. Since p is strictly on the other side, this strictly decreases ||z-p||. The orbit W_aff y is a finite union of translates of the lattice ell Q, hence has finitely many points in every bounded ball. Therefore the procedure terminates. Its terminal point is y: uniqueness of the regular orbit representative in C follows by the usual alcove tessellation (equivalently, W_aff acts simply transitively on alcoves, and interiors of their closures are disjoint).

For a reflection r_H, choose a signed distance function d_H positive inside C. The elementary orthogonal decomposition normal to H gives

    ||z-x||^2-||r_H z-x||^2=-4 d_H(z)d_H(x).

At each folding step d_H(z)<0 and d_H(x)>=0. Distance to x consequently never increases. It decreases strictly unless x belongs to H. There is exactly one defining wall containing x, namely F. Thus equality throughout permits only reflections s_F. After one such reflection the point is on the interior side of F; a second consecutive s_F is not an allowed folding step. Since no other reflection is allowed under equality, the starting point must be y or s_F y. Apply this to g=u^{-1}v. If g y=y, take tau=u. If g y=s_F y, take tau=u s_F, using s_F x=x. Conversely a common affine isometry preserves the distance. This proves every assertion.

The alcove-tessellation input in this proof is the ordinary defining geometric property of the affine Weyl reflection arrangement. It is not a representation-theoretic translation or linkage theorem.

## Strong downward chains preserve both adjacent lifts

Suppose F is a LOWER facet: choose its positive finite root alpha and integer k so that F lies in (z,alpha)=k ell and C lies in (z,alpha)>k ell. Then s_F y<y in root order.

Suppose x'=r_N ... r_1 x, where x_j=r_j x_(j-1) and each r_j is a strict downward affine reflection at x_(j-1). Let g=r_N ... r_1. Then both g y and g s_F y are <=y in root order. Consequently EVERY orbit point y' that is minimally distant from x' satisfies y'<=y.

Proof: Set y_0^+=y and y_0^-=s_F y, and transport all three points by the same successive reflections. Initially x is in the relative interior of F, and the two regular points occupy the two alcoves adjacent to F. After any common affine isometry the same assertion holds for the transported triple. For any reflecting hyperplane H that does not contain the transported x, both adjacent open alcoves, and hence both transported regular points, lie on the same side of H as x. Indeed no hyperplane can cut an alcove interior; if it separated either adjacent interior from x, its closure would contain x, and the unique hyperplane of the arrangement through this relative facet-interior point is the common facet itself. A strict downward step has H not containing x. Both regular points therefore satisfy the same strict downward inequality (z,alpha)>k ell, and both reflections subtract positive multiples of the positive root alpha. Induction gives g y<=y and g s_F y<=s_F y<y.

Finally, the closest-pair result shows that a minimizing y' at x'=g x is g y or g s_F y: the stabilizer of x is exactly {1,s_F}, since its only incident reflection hyperplane is F. Thus y'<=y. Notice that intermediate x_j need not be dominant; the proof uses affine hyperplane sides and positive finite roots only.

## Exact implication for the tilting consumer

Assume the following representation-theoretic supplier has actually been proved locally:

    Every Weyl section Delta(lambda') of T(lambda) has lambda'+rho
    obtainable from lambda+rho by a strict downward affine reflection chain,
    allowing the empty chain.

Then the geometry above supplies the required tensor-order exclusion. The classical tensor norm bound makes every potential same-block competitor nu a closest pair with lambda'. The closest-pair equality result supplies its common affine image, and the downward-chain result proves nu<=mu. Thus no strictly greater nu can occur. This argument accommodates every displacement construction in the adjacent closed-alcove-facet-displacement.md note, including the E8 upper-facet sum of roots. It uses no minuscule restriction.

The displayed representation-theoretic assertion is NOT proved by this geometric note. Its actual construction is now authored in the adjacent strong-linkage-construction.md proposal, whose explicit small-root-PBW/braid inputs P1-P3 are supplied by the substantively read owner construction ../root-pbw/construction.md. Weak affine linkage plus lambda'<=lambda alone has not been shown here to imply the strict downward chain condition. It must not be substituted for that supplier. This is an authoring obligation for an established strong-linkage/tilting theorem, not an open mathematical problem.

## Actual source consultation and remaining boundary

Read Sawin, arXiv math/0308281, local extracted text research/non-ml-math-remaining-81-2026-10-18-owner-drift-repair/trace-tl/sources/sawin.txt, the entirety of Lemma 10 and Lemma 11 and their proofs (extracted lines 1290-1336). Sawin's closest-pair argument is completed above with an explicit equality/termination argument. The sentence in Lemma 11 asserting that a larger regular image forces a non-smaller singular image is not accepted as a proof of the weak dominance assertion.

Searched the full local AJS extraction tilting/ajs.txt for strong-linkage and translation headings. Located the baby-Verma strong linkage discussion at extracted lines 2753-2800 and 3012-3024. I have not read or reconstructed the complete prerequisites for those sections and claim no AJS-based proof of strong linkage for the Weyl sections of indecomposable tiltings. In particular a baby-Verma composition-factor statement by itself is not the displayed tilting Weyl-section supplier.

A finite diagnostic enumerated the 192-element D4 Weyl group for low bottom-alcove labels and minuscule constructed finite-facet displacements at ell=9; no weak-order counterexample occurred. This is not proof and supplies no logical premise above. The general weak-order statement remains neither proved nor refuted in this proposal.
