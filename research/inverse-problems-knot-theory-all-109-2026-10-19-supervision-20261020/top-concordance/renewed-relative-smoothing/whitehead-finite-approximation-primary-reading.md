# Whitehead finite approximation: actual primary reading

Status: primary proof acquired and read; no new supplier accepted and no marked product theorem claimed. No accepted proof body was reopened.

## Acquisition and extent

J. H. C. Whitehead, *On C¹-complexes*, Annals of Mathematics (2) 41 (1940), 809–824, DOI10.2307/1968861. The original is sixteen pages, not 809–832. Reprint: Mathematical Works II, 207–222.

Ordinary public Internet Archive issue `sim_annals-of-mathematics_1940-10_41_4` has public PDF/OCR files and no access-restricted/private file flag. Downloaded the ordinary public issue PDF and OCR; extracted PDF pages99–114 (one-based), printed809–824, into `sources/whitehead-on-c1-complexes-primary.pdf`, with extracted text alongside. The issue PDF and page-number JSON remain in sources. JSTOR's ordinary PDF request returned420; the publisher reprint offers abstract/purchase only. No access restriction was bypassed.

Read all sixteen printed pages, including definitions and proofs of lemmas1–7, theorems1–10, addenda, and finite/infinite distinctions. Visually checked the actual page images813,815,816,821,822 for nonsingularity, extension and the relative addendum; images are cached. The text extraction has microfilm/OCR errors, so no proof credit relies on a damaged displayed formula.

## Exact finite chain

Printed809 restricts §§2–3 to finite complexes except theorem5. Printed810 defines C1 on a closed simplex by extension to an open neighborhood, and derivative-relative (epsilon,rho) approximation on every vector. Printed815 defines nonsingular as BOTH injective map AND injective whole tangent-star map; simplexwise immersion alone is insufficient.

Lemma4 (812–813) proves vertex-linear interpolation is close in value and derivative on sufficiently small simplices of a fixed positive relative thickness. It compares interpolation with the affine tangent approximation, bounds vertex errors using uniform continuity of Df, and divides by the tangent simplex inradius. Lemma5 (813–814) actually constructs subdivisions with mesh tending to zero and a thickness lower bound independent of the mesh: embed the finite abstract complex as a subcomplex of a standard simplex, use the integer-coordinate/sum hyperplane grid, barycentric-subdivide its finitely many cell shapes, and rescale. Thus merely iterating barycentric subdivision with no thickness estimate is not the cited argument.

Theorem1 (814) takes the minimum of the finitely many simplex tolerances. Theorems3-rho and3-angle (815–818) prove whole-star and global nonsingularity are open: first control tangent angles of pairs of incident simplices, then local injectivity using the two-segment argument, then separate distant pairs using compactness of the complement of a diagonal neighborhood. Theorem4 (818) combines lemma5/theorems1,3 to give an ACTUAL nonsingular rectilinear vertex interpolation, arbitrarily close in value/derivative.

Theorem2 (814–815) extends a sufficiently fine prescribed C1 approximation on a subcomplex. On each new simplex it keeps an inner concentric simplex unchanged and interpolates the boundary displacement across its annulus; derivative terms include both t dy and y dt. Finite simplex induction and starring give the claimed extension. Its addendum preserves the disjoint subcomplex consisting of simplices which do not meet the prescribed one, with its subdivision unchanged.

Lemma7 (820–821) merges one coordinate-contained nonsingular piece with an existing nonsingular complex: coordinate-linearize the interacting finite part, extend with theorem2, retain each original piece nonsingular using theorem3, and take common rectilinear subdivisions in that chart. Theorem6 (821–822) iterates this over the FINITE total simplex count, with explicit approximation composition budget rho2+rho3+rho2*rho3 and epsilon2+epsilon3.

Theorem6 ADDENDUM (822) is the actual OPEN relative statement. Given open V in the ambient smooth manifold, take for each input complex the subcomplex of all simplices whose images meet cl(V). If THESE INPUT SUBCOMPLEXES already have a nonsingular union, the approximations can leave the existing union in V undisturbed. Its proof localizes the interaction complex H away from V, after subdivision. This allows a curved smooth protected packet already represented by compatible nonsingular complexes; it does not require that packet to be affine. It does not give an arbitrary fixed packet which has not been included with this compatibility and separation.

Printed823 discusses bounded smooth manifolds and compatible boundary triangulations using an actual normal collar; it is not an arbitrary parameter/marked-concordance theorem. Printed823–824 passes to locally finite infinite complexes via an exhaustion. We do not need or import that global selection for the compact finite target family.

## Binding to the pending product argument

For a supplied FINITE joint nonsingular map on K times a finite parameter prism times a compact fiber disk, theorem4 supplies one finite common subdivision of this TOTAL complex. Apply the derivative estimate to the total map, including parameter directions; slice-by-slice approximation is insufficient. If a coordinate projection is already affine on the domain and is preserved by f, its vertex interpolant preserves that projection identically by barycentric coordinates. The zero section and any fixed PL subcomplex are similarly fixed when f is affine there.

The joint straight-line isotopy conclusion is explicitly derived in Lashof–Rothenberg printed362, theoremC(d): compare the TOTAL F(x,t)=((1-t)f(x)+t*g(x),t) with f times identity, using both value and derivative closeness, and apply nonsingularity openness to f times identity. This is not a claim that non-singular individual slices imply a non-singular joint map. Printed363 gives the exact affine-projection computation. These pages were previously fully read; this receipt does not expand the reading claim.

There are two distinct relative outputs. Pure vertex interpolation fixes an already PL subcomplex. Whitehead's theorem6 addendum can preserve an already compatible nonsingular smooth union on an open packet, while merging/approximating outside; its result need not be globally rectilinear on the curved packet. Thus no claim is made that a curved smooth f can be simultaneously unchanged there and globally affine in those same fixed domain coordinates. Floer owns the product/collar argument and the binding of this precise distinction.

## Choice and remaining scope

The published proof does not state a foundational choice bound. Its finite restriction uses finite complexes, finitely many simplex tolerances, explicit integer-grid subdivisions, finite induction and finite chart selections; this identifies an executable AComega-local authoring candidate, NOT an accepted AComega theorem by inheritance from publication. A supplied finite joint family still needs explicit compatible protected packets and face marking before its exact finite-relative specialization can be adopted. This reading closes the missing actual Whitehead primary-proof access/read obligation. It does not close strong Cairns–Hirsch marked product stability, relative differentiability collar push, full semisimplicial representative selection, or low homotopy of PL/O.
