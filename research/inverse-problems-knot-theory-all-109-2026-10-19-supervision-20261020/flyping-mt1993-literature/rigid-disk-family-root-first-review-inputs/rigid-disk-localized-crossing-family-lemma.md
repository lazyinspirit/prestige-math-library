# Localized rigid-disk family with an actual restored crossing

New finite author unit, 2026-10-21. Not yet reviewed or adopted. No zero-crossing base claim and no accepted provider recheck. This unit replaces the need to fix a neighborhood of the WHOLE vertex disk throughout a family by the weaker operation actually needed: fix a sufficiently thin restored crossing and its planar tails. The endpoint ambient maps remain the specified maps.

## The source-backed ordinary extension input

Edwards–Kirby, *Deformations of spaces of imbeddings*, Annals of Mathematics93(1971),63–88, DOI10.2307/1970753, actual public author reprint acquired. Source receipt: `edwards-kirby-ordinary-halfball-isotopy-extension-source.json`.

The exact operation is the ordinary neighborhood isotopy extension proved as Corollary1.2 on printedp79: a GIVEN jointly continuous proper isotopy of a neighborhood U in a TOP manifold M can be covered, on a compact C⊂U, by an ambient isotopy H_t with H_0=id. The proof uses local time intervals and a FINITE partition of I. Its boundary remark fixes ALL of ∂M if the input fixes U∩∂M, and its support remark allows any given neighborhood of the compact track. “Proper” means boundary-respecting, h_t^{-1}(∂M)=U∩∂M (definitionprinted64–65), not proper-map compact-preimage terminology. Theorem5.1 and its boundary note on p70 impose no dimension3 exclusion. This is a TOP statement, not a borrowed smooth tubular theorem.

The source does NOT promise H_1=id when the input returns to the identity. That endpoint holonomy is retained and corrected explicitly below. This author unit uses the stated ordinary extension theorem; it does not assert that its full general proof has already been imported as a canonical supplier. Actual Theorem5.1 proof pp71–76 and Corollary1.2 proof p79 were read; unseen proof of Lemma4.1 pp67–69 was not claimed read.

## Exact local family contract

Let D be an actual flat closed vertex disk in an oriented TOP3-manifold, and let K be the rigid graph object containing D, with its other edges disjoint from int(D). Let h_t be a jointly continuous ambient isotopy, t∈[0,1], satisfying:

- h_0=id; every h_t carries K to itself and fixes D POINTWISE;
- h_1 is the identity on some open neighborhood of D;
- other vertex disks and all prescribed exterior markings are fixed or carried by the original family outside a sufficiently small neighborhood of this vertex; our corrections must not change them.

The same construction can be performed in finitely many disjoint vertex neighborhoods. No assertion is made for an isotopy that preserves only an unframed one-dimensional graph.

Conclusion: one can choose a single-crossing decoration of D, with the prescribed opposite port pairing, chosen over/under state, and compatible oriented port directions, for which h_1 is pairwise isotopic to id on the EXPANDED graph. This is an isotopy to the specified ambient map h_1, not to an unspecified homeomorphism of the same link type. The chosen decoration has four planar tails in D and a sufficiently small nonplanar crossing portion in int(D). The conclusion is an EXISTENCE statement for sufficiently small supported crossing realizations; a separately fixed larger tangle is not silently substituted.

## Finite construction and holonomy correction

Choose a round disk E⊂int(D) and a convex round ball B whose equatorial disk is E, with B meeting K only in E. Choose nested round subdisks E00⊂int(E0)⊂int(E). Thus every point of the equatorial disk E is fixed by every h_t; the rim of the ACTUAL vertex disk D is avoided completely. Cut B along E into two convex half-balls B+ and B-.

Because h_t fixes E pointwise and preserves the ambient orientation, it preserves its local normal sides. By joint continuity, compactness of E0×I and the inclusion E0⊂int(E), there is ONE sufficiently small relative-open half-neighborhood U+ of E0 in B+ such that h_t(U+)⊂B+ for ALL t. Likewise choose U-. More explicitly, take first a compact neighborhood of E0 in int(E), whose fixed images are uniformly separated from the nonflat boundary of B. Uniform continuity bounds the images of a sufficiently thin half-neighborhood inside B; injectivity and h_t|E=id prevent its positive or negative interior from crossing E. At the same time shrink U± into the neighborhood where h_1=id. The maps h_t|U± are proper embeddings of these neighborhoods into the half-balls: their only boundary images are exactly their fixed flat-boundary points. Choose compact smaller half-neighborhoods C±⊂U± containing neighborhoods of E0 relative to each half-ball.

Apply the ordinary extension theorem separately in M=B+ and M=B-, with these U± and C±. It gives k_t±, starting at id, agreeing with h_t on C±, and fixed on ALL of ∂B±. Here the required boundary agreement is supplied on an OPEN flat boundary patch around E0, not merely at the rim of D. The two k_t± glue along their pointwise fixed common disk E. Extend the resulting k_t by id outside B. It fixes D and K pointwise inside its support. Set C=C+∪C- and

    psi_t = k_t^{-1} h_t.

Then psi_0=id, each psi_t preserves K, and psi_t is the identity on C. Because h_1=id on U± and k_1=h_1 on C, k_1 is itself the identity on C. However k_1 is NOT assumed to be the identity elsewhere.

For each sign choose an interior center c± of B±. For 0<s≤1 let a_s± be the homothety x↦c±+s(x-c±), and put a_0±(x)=c±. Define the Alexander family on B± by

    J_s± = a_s± k_1± (a_s±)^{-1} on a_s±(B±),
    J_s± = id outside a_s±(B±),
    J_0± = id.

These formulas glue on the boundary because k_1± fixes ∂B± pointwise. They give a continuous ambient isotopy J_s± from id to k_1±: continuity at s=0 follows because the moving support has diameter tending to0. Every J_s± fixes E, and extends by id outside B±.

It remains to protect one ACTUAL crossing, rather than merely its four names. Let S± be the closure in B± of the moving set of k_1±. It is compact and disjoint from an open neighborhood of E0 because k_1=id on C. The compact set

    L± = {c±+s(x-c±) : x∈S±, 0≤s≤1}

is disjoint from E00. For s<1 it is in int(B±), hence off E; for s=1 its intersection with E misses E0. Thus L+∪L- misses a sufficiently small neighborhood N0 of E00. Choose N0⊂int(C) as well. All J_s± are the identity on N0 because their moving supports lie in L±.

Now choose the restored crossing. Its two small semicircular strands have projections to E00 joining the prescribed opposite pairs, lie above/below E according to the prescribed crossing state, and have all nonplanar portions in N0. Join their four ends to the four ORIGINAL marked ports by disjoint planar tails in D. The cyclic port order makes these four tails available without a new crossing. When this decoration comes from a collapsed oriented crossing, its opposite port pairs already have one incoming and one outgoing end, so the original orientations extend; this is not asserted for arbitrary independently oriented vertex data.

Every psi_t fixes the crossing portion because it fixes C and fixes its planar tails because it fixes D. Every J_s fixes the crossing portion because it fixes N0 and fixes its planar tails because it fixes D. Both families preserve the rest of K. Concatenate psi_t with

    J_s k_1^{-1} h_1,   0≤s≤1.

The first path ends at k_1^{-1}h_1, the second starts there and ends at h_1. Both paths are maps of the SAME expanded pair. Thus they supply the required isotopy from id to the specified h_1, with all actual four port labels and oriented attachments retained. No parameter-endpoint claim was borrowed from Edwards–Kirby.

## How the fixed disk is earned from the actual rigid family

Suppose f_t are maps from one fixed rigid graph to another and are all morphisms of MT's rigid category. Every source vertex has a constant target vertex by discreteness of the finite vertex set. Its square map takes values in a finite set of marked square isometries, so continuity makes that map A CONSTANT for the whole family. With G=f_0 and f=f_1, the target family h_t=f_t G^{-1} therefore fixes the actual target vertex disk D POINTWISE. This is the precise reason the local contract applies; no arbitrary core-graph isotopy is upgraded.

At endpoints normalize G and f to rigid maps of neighborhoods as in MTp137, retaining the same square restriction A. Their orientation-preserving ambient rigid extensions are then the SAME: the normal sign is forced by the oriented disk sign. On a common smaller neighborhood they agree literally, so h_1=id there. This endpoint normalization is part of the application input; one cannot separately normalize the endpoints while forgetting to transport the given family or its markings.

For the finite graph flype word, transport a sufficiently small SOURCE crossing along its actual rigid vertex maps. There are finitely many factors, so small neighborhoods may be chosen simultaneously. At the endpoint choose the source crossing to be G^{-1} of the actual small target crossing constructed above. Because G and f agree on its neighborhood, its two endpoint images are LITERALLY equal, with the same four labels, port directions, and over/under state. Thus the expanded ambient maps G and f themselves are unchanged, and the constructed h_t-isotopy closes their given-map comparison for these chosen compatible crossing realizations.

## Boundary of the export

This proves the needed family operation for chosen sufficiently small, equivariantly restored crossings with planar tails. It is stronger than decoration-class invariance and weaker than forcing the whole vertex neighborhood to be rigid at every parameter. It does not supply the missing Dowker–Thistlethwaite embedding lemma or the zero-crossing base.

If the consumer fixes a pre-existing large physical crossing tangle rather than permitting this collapse/restoration realization, an additional exact realization-change interface must be kept. Equivariant changes alpha at the source and beta=f alpha f^{-1} at the target preserve the original ambient map by beta^{-1} f alpha=f. But to call the conjugated factors the original consumer's flypes one must also identify those realization changes with the allowed diagram normalization. This final convention is not silently inferred here. The actual endpoint maps and their literal transported markings have been fixed throughout the proved small-realization statement.
