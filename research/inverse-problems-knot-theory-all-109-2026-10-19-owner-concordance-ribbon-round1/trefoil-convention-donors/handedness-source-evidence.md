# Geometric handedness identification and conflicting source label

This is off-canonical source evidence, not a new definition of right-handedness or a native verdict. The intrinsic donor computes the canonical positive three-band surface without importing a handedness name. The following identifies the exact pictured knot called right-hand trefoil by Rolfsen.

## Actual source passages read

Rolfsen, *Knots and Links*, full PDF fetched from the existing canonical source URL. Printed146/PDF159 Example6B1: both full surface/link pictures inspected, including a large rendering. Printed201/PDF214 Example8A2: the text explicitly identifies that same Example6B1 as the right-hand trefoil and displays matrix [-1,1;0,-1]. Its entry convention is lk(e_i,e_j^+), the transpose of the canonical convention, so the displayed matrix alone cannot settle the canonical off-diagonal order. Printed220/PDF233 Examples13–14 explicitly give right-hand signature−2 and left-hand+2. Full relevant pages were read and archived beside this file; no complete-book-reading claim.

Collins thesis printed19–23 had already been read for the parent task: its displayed trefoil matrix is negative; it does not itself fix RH versus LH in the inspected text. It is corroboration for the matrix only.

Calegari, *Introduction to Knot Theory*, full PDF fetched. Actual printed4/PDF4 Example1.2 was read in text and rendered image. It parametrizes ((2+cos(qs))cos(ps),(2+cos(qs))sin(ps),−sin(qs)) and explicitly calls p=2,q=−3 the right-handed trefoil. This conflicts with the chart identification below. Do not transfer that label to canonical torus slopes or replace geometric checks by choosing one citation.

## Exact crossing-chart match to Rolfsen printed146

Use page coordinates (X,Y) with X right and Y up, and viewing normal Z towards the reader. The ambient orientation is (X,Y,Z), so the page orientation is (X,Y). On the right-hand link picture of printed146, separate the three central crossings from the two exterior closure arcs. Both central braid strands run from the upper ends to the lower ends; orient both downward, and orient the exterior arcs upward to close the knot. At each of the three crossings, the unbroken overpassing branch slopes from lower-left to upper-right on the page. Following the downward orientation, its tangent is down-left, proportional after a local planar straightening to (−1,−1). The interrupted underpassing branch slopes from upper-left to lower-right; its downward tangent is (1,−1). Their determinant is +2. Reading this on the left surface picture gives the same three crossing bands. The exterior closure arcs lie respectively to the left and right and have no crossings. Thus this is a threefold repetition of the same positive two-strand crossing, with the usual crossing-free braid closure; no Reidemeister move that could change its sign is involved.

Here is an orientation-preserving spatial identification, so this is not a comparison based on the word “positive”. For the library chart (x,y,t) put

    (X,Y,Z) = (x,−t,y).

Its determinant is +1. Viewing along canonical +y becomes viewing along page +Z. The canonical positive projection basis (t,x) maps to (−Y,X), which is positively oriented in (X,Y). At a positive half twist the overpass is moving left as t increases, so it maps to down-left; the underpass is moving right and maps to down-right. This is exactly the pair just read at each of Rolfsen's three crossings. Planar isotopies of the crossing-free connecting strips make the crossing heights equally spaced, without changing any crossing ball or over/under datum. The disk-and-band reconstruction therefore matches the same oriented Seifert smoothing as in the intrinsic donor. Reversing the orientation of the single knot changes neither crossing signs nor the diagonal self-pairings, so the absence of boundary orientation arrows in Rolfsen's picture is immaterial here.

Consequently the canonical positive three-crossing closure is the exact pictured knot called right-hand trefoil in Rolfsen Example8A2. The intrinsic donor, rather than Rolfsen's transpose convention, determines its canonical positive-handle-basis matrix [-1,1;0,-1] and signature−2.

## Independent torus chart and the source conflict

For R>h>0, the solid-torus map

    C(x,y,t)=((R+x)cos t,(R+x)sin t,−y)

has positive Jacobian R+x in the ordered variables (x,y,t). Canonical anticlockwise pair rotation through three half turns has points w=±h exp(3it/2), with t the longitude. Joining after the endpoint transposition gives the single parameterization

    ((R+h cos3s)cos2s,(R+h cos3s)sin2s,−h sin3s).

This is exactly Calegari's displayed p=2,q=+3 formula after changing positive tube radii by an isotopy. Reflection in the XY plane gives his displayed q=−3 curve. Thus his written RH identification points to the reflected braid, whereas Rolfsen's pictured RH identification points to the canonical positive braid. This source conflict is genuine at the level of the explicit formulas and displayed crossings. It is not grounds to alter the canonical Artin definition. A formal corpus-wide handedness convention, and any resulting consumer correction, belongs to the parent/root review.

## Confirmed canonical defect

The existing lemma defining a “positive Hopf band” by core self-pairing+1 and asserting that two such bands give this same right-hand trefoil cannot be justified by the actual canonical chart. Its chart-positive Hopf annuli instead have core self-pairing−1. The intrinsic donor proves all entries without assuming a plumbing off-diagonal or a handedness label. Signature+2 belongs to the reflected form, and cannot be repaired by transposition, reversing the knot orientation, or changing the sign of one basis curve. No canonical file was changed here.
