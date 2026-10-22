# Auxiliary compression collar preparation: exact established and pending parts

This is an author worknote, not an active proved supplier or a completion receipt.
The actual diagram permits broader proper auxiliary compression disks; no neatness
is inferred from that word. The attaching curves and actual knot stay fixed.

Let the target boundary collar coordinate be r>=0, and let v>=0 be an inward
source collar coordinate on a supplied smooth rank-two disk. Since the disk
interior is interior-valued, r(s,0)=0 and partial_v r(s,0)>=0. Replace its target
normal coordinate by r+epsilon*v*chi(v), with a source-boundary cutoff, keeping its
other coordinates fixed. Then the new normal derivative is strictly positive.
A finite C1 embedding-stability argument applies: on finitely many source charts
a nonzero differential minor stays bounded away from zero; pairs outside those
local graph neighborhoods have a positive image separation by compactness. Thus
small epsilon preserves embedding, and finite positive separations preserve
other disks, actual knot and any originally disjoint bridge witnesses. The
boundary curves are exactly unchanged. This is an isotopy of chosen witnesses,
not a smooth boundary-preserving ambient isotopy starting at the tangential disk.

At a nonneat point the projection of the tangent disk plane to the boundary plane
is invertible. Consequently on a smaller boundary rectangle it is a graph
r=R(s,v), with R(s,0)=0 and R(s,v)>0 for v>0. Write E(s,v)=epsilon*v*chi(s,v)>=0.
Choose L>2epsilon, and for v>0 define a strictly increasing fiber map by

- 0<=r<=R: r'=(R+E)*r/R;
- R<=r<=R+Lv: r'=R+E+(1-E/(Lv))*(r-R);
- r>=R+Lv: r'=r.

Use the identity for v<=0. The formulas agree at their seams. Their slopes are
positive, displacement is at most E<=epsilon*v, and their inverse has the same
displacement bound. Therefore both maps are continuous at v=0, even when R is
flat there. They are inverse homeomorphisms of the halfspace, fix its boundary,
and send the old graph to the new graph. A cutoff in the s and v directions
makes support compact in the chosen rectangle. Sequential finite such patches
neaten all remaining tangencies, with the later patches supported where the
boundary-normal derivative is still small. They transport actual cut components
and all disjoint knot/witness data, and preserve the ball property topologically.

On the narrow cusp cut component, normalized abstract corner coordinates are
X=v*r/R, Y=v*(1-r/R). The map to the new cusp has the same X,Y and uses
r_new=(R+E)*X/(X+Y). Thus in these normalized abstract cut charts the comparison
is explicitly smooth. Its old map into the ambient manifold may lose rank at
the corner, so ambient smoothness cannot be asserted.

PENDING: bind this intrinsic corner chart to the actual supplied smooth cut-ball
and disk-face collar structure, or give the finite collar reparametrization
showing the newly neat cut components are standard smooth balls with compatible
parameters. A boundary-fixing topological homeomorphism alone does not prove
that statement under an arbitrary implicit smoothing convention. No unproved
Moise theorem, smooth Schoenflies theorem, or smooth ambient extension across the
initial tangency is imported here. Root and the original grid owner were sent
this exact distinction before any active full neatening supplier was written.
