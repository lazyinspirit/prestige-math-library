# Actual D0 grid top count

This donor supplies the new finite endpoint operation for original94. It does not reopen any accepted supplier. The input is exactly `d0-grid-input.json`, the unchanged size13 grid admitted separately by the weighted lane. Its rows are

    O = (10,8,4,7,2,5,12,11,3,9,1,6,0),
    X = ( 3,12,0,1,9,11,10,6,7,4,5,2,8).

The admission records that its knot is the reverse of the actual D0 diagram's selected script traversal, after the explicit orientation-preserving change of viewing direction. This reversal is retained explicitly. No Whitehead invertibility assertion is being made. The normalized orientation junction below is a separate algebraic consequence of the retained accepted interfaces.

For a state p, with its point (p_r,r) on row r and O,X at the corresponding half-integer cell centers, use exactly

    M_O(p)=I(p,p)-I(p,O)-I(O,p)+I(O,O)+1,
    2A(p)=M_O(p)-M_X(p)-12.

Here I(P,Q) counts ordered point pairs increasing in both coordinates. The Alexander expression is an additive assignment weight: its I(p,p) terms cancel. Forward polynomial-permanent recurrence on the8192column subsets, and an independent min/max assignment recurrence, show that the complete chain Alexander range is [-15,1]. Exactly1,939,538states have A=1. They are enumerated lexicographically. The separate verifier checks every listed state, distinctness by strict lexicographic order, its actual J-gradings, and that the independent complete permutation count is exactly this inventory. Thus no higher Alexander chain groups exist, and the top inventory is complete.

For each top state and each ordered pair of distinct rows, take its southwest and northeast corners as the positive torus rectangle. Test both marks at their actual half-integer positions and every interior state point. Retain exactly the rectangles empty of O, X and state points. Their target is the state obtained by transposing those two row columns. This is the literal tilde differential, not a positive-domain guess or an external program's homology output. The calculation gives15,562,987regular rectangle orbits and15,562,987nonzero F2matrix entries. Every entry lowers M by exactly1 and retains A=1. The actual composition of every one of the1,939,538matrix columns with the matrix is zero.

The matrix was reduced by969,767explicit elementary chain cancellations, each at a present coefficient-one arrow a→b. The exact chain operation on remaining generators is

    d_new(c) = projection_remaining(d(c) + coefficient_b(d(c)) d(a)).

It is the standard contraction of the two-dimensional unit summand: replace each other source with a b-component by that source plus its b-component times a, and change the complementary target basis accordingly. It is a chain isomorphism followed by deletion of the contractible pair. Since M(a)=M(b)+1, the operation preserves every remaining Maslov degree. This proves, for each recorded pivot, the homology identification rather than identifying rank from a heuristic.

The first969,369pairs are free cancellations: either a has only one outgoing edge or b has only one incoming edge. They introduce no new edge. The independent certificate verifier checks this entire prefix using fixed forward/reverse incidence arrays and active degrees. Exactly800generators remain. Before using the rest of the trace, it computes the graded matrix ranks directly on this800-dimensional residual with bounded bit vectors. It separately replays the remaining398recorded unit cancellations. Both calculations give the same four surviving degrees:

| Alexander | Maslov | Dimension |
| ---: | ---: | ---: |
| 1 | -1 | 2 |
| 1 | 0 | 2 |

The literal matrix ranks, chain dimensions, contraction counts by source Maslov degree and surviving original state indices are in `d0-grid-A1.{counts,homology}.json`. The binary `.states`, `.matrix` and `.elimination` files retain the full finite count and every cancellation. `d0-grid-A1.certificate-verification.json` records the successful separate verifier. These are new finite-computation evidence, not mathematical acceptance stamps or pipeline metadata.

Apply the already accepted, absolutely normalized grid-to-analytic theorem as an interface. For this13grid its tilde homology is HFK of the admitted knot tensored with V^12, where V has degrees(0,0),(-1,-1). Since there are no chain groups above A=1, there is no tilde homology above A=1. If HFK had any class of Alexander>1, its tensor with the unique top V^12 generator would give a nonzero tilde class above1, a contradiction. Therefore the tilde A=1part is exactly HFK(A=1) tensored with that sole degree(0,0)generator. The displayed Maslov degrees are consequently the actual normalized analytic degrees, with even rank2. This argument uses neither an HFK genus bound nor a longitude-surgery grading formula.

## New orientation junction, using retained accepted interfaces

Let C be the normalized full doubly-pointed complex of the actual oriented source knot K. Its generators are [x,i,j] with j-i=A(x), and its full differential counts actual disks with output indices(i-n_w,j-n_z). Swap ONLY the names of the marked points in the same geometric diagram. This presents K^r. The actual disks, operators and coefficients are unchanged; their two marked degrees are exchanged. Thus the raw map

    I: [x,i,j] -> [x,j,i]

is an exact Lambda-linear swap-filtered chain isomorphism to the swapped-mark complex, with an exact inverse. The accepted Seifert-extension interface gives A'(x)=-A(x), so its index relation is the required one, without an Alexander translation. This is a relabelling of the given physical disk problem, not an ambient inversion of K.

The physical relative Maslov formula gives M'(x)=M(x)-2A(x)+c for one constant c: after the swap the same disk index is M'(x)-M'(y)+2n_z instead of M(x)-M(y)+2n_w, while A(x)-A(y)=n_z-n_w. Hence the raw map I has constant full Maslov degree c, since

    M'(x)+2j = M(x)-2A(x)+c+2j = M(x)+2i+c.

Now compose I with the retained accepted normalized SAME-oriented-K conjugation equivalence Phi:C(K)→C(K), which is Lambda-linear, Maslov degree zero and swap-filtered with its swap-filtered inverse and homotopies. The composite I Phi is an ordinary bifiltered equivalence C(K)→C(K^r), of constant degree c; its inverse and homotopies are ordinary bifiltered as well. Taking the vertical i=0hat quotient is therefore legitimate for both maps and their inverse identities. The retained normalized S3 interface gives one-dimensional total hat homology in Maslov degree zero on each side. An isomorphism of this homology of degree c forces c=0. Taking the Alexander associated graded of the same ordinary filtered identities now proves the normalized bigraded isomorphism

    HFK_m(K^r,a) = HFK_m(K,a).

This closes exactly the orientation junction in the grid admission without any geometric knot-invertibility premise. Combining it with the actual rectangle count above proves e0=2 for the D0 knot used by the six-triad argument.

## Execution and scope

The postrestart count and reduction used `grid-top-sparse.cpp`, with an actual RLIMIT_AS cap of6442450944bytes. It retains count checkpoints before reducing. The separate `verify-grid-top-certificate.cpp`, under the same cap, checked the complete new state count, all literal rectangle coefficients, all free cancellations and both small residual calculations successfully. The sparse live matrix never exceeded its initial15,562,987edges; the largest non-free pivot fill cost was5. No dense two-million-dimensional matrix was allocated. The abandoned prerestart Python process supplied no count or proof credit.

The actual source-oriented knot admission and its3409move trace remain attributed to the weighted lane. Accepted grid-equality, conjugation, Seifert-extension and S3-normalization interfaces are reused without rereading or rechecking their proofs. This donor has not changed an original Statement, any canonical item, a manifest, a proof contract, readiness, certification or gate state. The separate actual S1×S2knotification filtered comparison required by the six-triad map theorem remains its own operation; this finite endpoint count does not prove that comparison.
