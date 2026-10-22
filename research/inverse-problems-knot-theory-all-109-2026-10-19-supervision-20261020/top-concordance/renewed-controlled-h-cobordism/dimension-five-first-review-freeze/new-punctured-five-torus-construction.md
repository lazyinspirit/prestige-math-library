# New finite marked punctured-five-torus construction

This is a NEW proof, not an extension of the accepted punctured-tori statement for dimensions at most three and not a rereview of the separately accepted finite four-torus construction. Its exact immersion inputs are the retained Statements of the three full-source-column formal immersion contracts previously consulted on root authority. Their proofs are not consulted. The relevant common dimension range is 0<=k<=m<=n with k<n; here m=n=5 and k<=4, with parameter space a point and only finite handle induction. Their retained choice hypothesis is CountableChoice. No genuine codimension-zero restriction fibration is assumed.

## Claim

Let T=R5/(32Z)^5, with its standard framing and coordinates on the central cube C=[-2,2]^5. There is a smoothly embedded closed five-ball B disjoint from C, a compact complement M=T minus int(B), an OPEN neighborhood O of M in T, and an orientation-preserving local homeomorphism

j:O -> (-8/3,8/3)^5

whose restriction to C is exactly the central coordinate map. The ball parametrization extends across a larger concentric ball. The local homeomorphism has a finite inverse-chart cover on M, so there is a uniform positive inverse-chart/control radius after shrinking those charts. No assertion that j is globally injective is made. No PL assertion about the final bounded compression is needed.

## Finite relative handle model

Set F(x)=sum over i=1,...,5 of (1-cos(pi*x_i/16)). Critical coordinates are zero or sixteen modulo thirty-two. The critical points have indices equal to the number of sixteen coordinates; there are binomial(5,k) of index k and a unique maximum of index five. Near such a point, write its coordinates y_i about that point and put u_i=sqrt(2)*sin(pi*y_i/32). This is an invertible smooth local coordinate change, since its derivative at zero is nonzero. In these coordinates F is its critical value plus the sum of positive u_i squared minus the sum of negative u_i squared. Thus the local handle models and their indices are explicit.

On a regular compact slab, the vector field grad(F)/|grad(F)| squared integrates to identify levels by increasing F at unit speed. It is defined and bounded on that compact slab. Separate equal critical values by finitely many tiny disjoint bumps constant near their critical points; choose their derivative size below the positive gradient minimum on the compact bump annuli, so no new critical points occur. This gives ordered finite handle attachments, using the displayed quadratic charts and regular-slab flows. All choices are finite.

The sublevel A0={F<=1} is a smooth five-ball. Its only critical point is the central minimum. Flow its levels to a small quadratic sphere around that minimum and fill with its quadratic disc. It contains a neighborhood of C because 5*(1-cos(pi/8))<1. It is contained in the coordinate cube |x_i|<=8, hence its flat coordinates are unambiguous. Choose B as a sufficiently small quadratic-coordinate ball about the unique maximum, with a doubled-radius coordinate ball disjoint from A0. Stop before its final index-five handle. The compact complement M then has A0 followed by finitely many handles with indices one through four. Collars on both sides make this a finite handle model on an open neighborhood of M. This does not infer a handle model for an arbitrary topological manifold.

## Global formal immersion and finite integration

Choose a smooth map b:T->R5 which agrees with the flat coordinate map on an open neighborhood of A0; a cutoff supported in the coordinate cube just described supplies b. Relative to the standard framing of TT and TR5, choose the formal derivative to be the constant matrix I5. This is an oriented rank-five monomorphism everywhere. On that open neighborhood of A0 it is the actual derivative of b. We have a global formal immersion genuine on an OPEN initial region, not just a formal solution on its boundary.

For each finite index-k handle, k<=4<5, restrict this full five-column formal data to the attaching collar. Apply the retained relative subcritical-handle integration contract at m=n=5 with point parameter: a formal family genuine near the old source region integrates over the next handle, preserving a smaller prescribed open neighborhood of that old region. The full-source-column disk contract supplies its disk/handle local integration in precisely this range. The formal restriction/lifting contract supplies extension of the accompanying FORMAL homotopy to the remainder of the source. Only the formal restriction map is used here; the restriction map on genuine codimension-zero immersions is not asserted to be a fibration.

For completeness, the finite exterior bookkeeping has the following concrete shape. Thicken every attaching collar before applying its relative contract, and retain a strictly smaller genuine collar. A homotopy given on the new collar at times [0,1], with old exterior formal data at time zero, extends across a still thicker collar by the homotopy extension retraction of the (outward normal parameter,time) quadrant onto its bottom and left edges. In the rescaled outward parameter u>=0 choose a cutoff chi(u) equal to one near zero and zero for u>=1, and set v=t*chi(u). Use the retraction

(u,t) -> (max(u-v,0), max(v-u,0)).

It fixes the bottom edge, gives (0,t) on the left edge, and is exactly (u,0) for u>=1. Thus the extended homotopy is stationary outside the fixed collar. This retraction concerns the formal base-map and full derivative matrix together. Use the retained formal lifting property to maintain the genuine first jet on the fixed open inner collar. Smooth any piecewise-smooth collar interpolation relative a smaller genuine neighborhood; on the compact parameter/source collars choose approximation close enough to retain the open condition det>0. No linear interpolation of arbitrary invertible matrices, and no extension theorem for genuine codimension-zero maps, is substituted.

Induct over the finite list of handles. Preserve throughout an open neighborhood of C inside A0. After the last handle the map a is a smooth immersion on an open neighborhood O of M, with a equal to flat coordinates near C. Its determinant remains positive on each connected extension, because the formal data and the integration homotopies remain in the positive component of rank-five monomorphisms. With equal source and target dimensions, the inverse function theorem makes a a local diffeomorphism. Restrict O slightly if needed; its definition includes collars past the compact boundary of M. Thus the result is a local diffeomorphism on an OPEN domain, not a false claim that a half-space boundary maps homeomorphically to an open five-ball.

## Marked bounded compression and finite inverse control

Let rho:R->(-8/3,8/3) be the odd increasing piecewise-linear homeomorphism which fixes [-2,2] and has

rho(2+4l)=8/3-(2/3)*2^(-l), for integers l>=0,

with linear interpolation between successive values and odd extension. At l=0 this is exactly two. The slopes are positive, the limit at plus infinity is eight-thirds, and the negative limit follows by oddness. Compose a with rho in every coordinate. The resulting j is an orientation-preserving local homeomorphism into the stated bounded cube and still equals the flat coordinate map on C. This construction does not require the final map to remain smooth across the PL breakpoints.

For each x in M choose an open local inverse chart of a, then smaller nested charts with compact closures inside it. Coordinatewise rho preserves the chart-homeomorphism property. Compactness of M selects finitely many inner charts. Their outer-chart images provide positive inverse radii around the corresponding compact inner images; take a finite positive minimum. Equivalently, use a Lebesgue number of the inner cover plus uniform continuity of the finitely many local inverse maps. Hence sufficiently small target displacements lift uniquely in a chosen outer chart, with a uniform bound on displacement of the lifted point. Uniqueness on chart overlaps gives compatibility of successive short lifts. Every fiber over a target point meets M in finitely many points, since a local-homeomorphism fiber is discrete and M is compact with the map defined beyond its boundary.

For matrix use rescale source and target coordinates by one-fourth. This gives a local homeomorphism into (-2/3,2/3)^5 fixed on [-1/2,1/2]^5, defined on an open neighborhood of the compact torus complement. The removed ball can be shrunk within its quadratic chart, with a compact puncture annulus and a doubled-ball parametrization. These are exactly the new dimension-five chart and inverse-control inputs required by the matrix puncture-filling operation.

## Choice, provenance, and status

The explicit torus, function, framing, compression, and all finite chart/handle choices require no new full-choice assertion. The only imported choice hypothesis is the CountableChoice in the literal finite relative formal-immersion contracts. No arbitrary parameter family is claimed: parameter space is a point. The three retained Statements were consulted previously under root's narrow authority; no Facts, Proof, current hashes, verification, or acceptance of those suppliers was reopened. This newly authored finite T5 application requires independent first review and root adoption before use as an accepted supplier. It does not claim a general punctured-tori theorem in all dimensions.
