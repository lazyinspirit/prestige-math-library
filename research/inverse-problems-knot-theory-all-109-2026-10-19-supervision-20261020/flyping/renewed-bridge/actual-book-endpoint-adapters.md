# Actual crossing-book endpoint adapters

Renewed user-authorized proof development by `/root/flyping_bridge`, 2026-10-20. Historical review counts and the paused engine state are unchanged. This note concerns the missing operation only.

The crossing axis is vertical. Its projection is a point. Consequently a purported projected U-to-O arc with injective projection cannot itself be a parametrization of that axis, and a vertical curtain over such an arc does not construct the required bridge. The following local calculation handles the actual tube ends instead.

## Fixed local model and exact bank transport

Use coordinates (x,y,z) near the crossing, with axis x=y=0. Take the two tube pieces to have straight core axes

$$
\ell_U=\{(0,y,-a):y\in\mathbb R\},\qquad \ell_O=\{(x,0,a):x\in\mathbb R\},\qquad a>\rho>0,
$$

and radius rho. This is a local tube-coordinate model. Its orientation and its designation of the positive B-band must be matched to the actual crossing convention; those designations cannot be inferred from the unlabelled equations alone.

Fix k>0 and the plane L={x=ky}. On L the inner-facing walls of the underpass and overpass tubes have equations

$$
u(y)=-a+\sqrt{\rho^2-k^2y^2},\qquad o(y)=a-\sqrt{\rho^2-y^2}.
$$

Choose 0<w<b<min(rho,rho/k). Since u(y)<o(y), the region

$$
T=\{(ky,y,z):|y|\leq b,\ u(y)\leq z\leq o(y)\}
$$

is an embedded rectangle outside the open tubes, with its two short sides on the *actual* tube walls. An explicit disk parametrization is

$$
H(y,t)=(ky,y,(1-t)u(y)+to(y)),\qquad -b\leq y\leq b,\quad 0\leq t\leq1.
$$

It is injective since its second coordinate recovers y and, for fixed y, its third coordinate is strictly increasing in t. Its derivative has rank two. Its interior avoids both tubes: its z coordinate is above the inner-facing underpass boundary and below the inner-facing overpass boundary. The two tubes are disjoint since a>rho. The subrectangle |y|<=w is the active band with its actual curved tube-end adapters. Longitudinal straightening t to z identifies it with the usual R_k skeleton without changing either bank. Its intersection with {y=0} is exactly the crossing-axis interval between the two tube walls.

The two complementary strips w<=y<=b and -b<=y<=-w are disjoint embedded rectangles. They identify the positive band long side y=w with the *physical* outside book window y=b, and the negative side y=-w with y=-b. At BOTH tube ends this identification has the same sign of y. There is no separate endpoint sign choice. The full short boundary path on each tube is the continuous path y -> H(y,0), respectively y -> H(y,1). Thus both bank identifications, including the tube-end adapters, are explicitly realized inside the empty book.

Here “positive” and “negative” for a side mean solely the sign of its y coordinate. The equations alone do not prove positivity of a W intersection in the actual checkerboard convention. In particular, for the Euclidean U tube whose axis is the y direction, the plane y=0 cuts an end patch transversely to its link parameter; it is not the actual longitudinal W section on the whole channel. One must transport the actual checkerboard pages and peripheral framing through the model chart, rather than declare that W globally equals this plane up to both tube ends. The claim supplied here is embeddedness and consistent physical bank transport. The actual B-band convention must separately authenticate its positive end germs.

This construction is relative to every exterior retained wall seam, since its support lies wholly in the chosen crossing book. A protected tube-end germ may be retained if it already agrees with this model in a small end collar; otherwise matching that germ is an additional explicit hypothesis, not an automatic consequence of local straightening.

## Required actual attachment, still outstanding

To finish the typeIII operation one must identify the actual lower root-frontier banks with the two windows y=b and y=-b in the same physical way at both tube ends. The calculation above then transports those banks to the fixed active band without permuting any retained seam word. The local tube adapters require no guessed reflection and pass through no tube interior.

The local calculation does not itself identify the root-frontier banks. In particular, it does not prove that a path obtained from all retained face occurrences reaches y=b at both ends rather than y=b at one end and y=-b at the other. That is the remaining global marked-face incidence assertion being developed by the owner. Together with actual simple/disjoint full boundary cycles, the direct relative filling lemma in `direct-relative-filling.md` constructs the cap without an arbitrary beta bridge.

One must use the narrow book described above. The full plane section of a whole crossing ball minus two transverse tube disks is a pair of pants. Treating that full section as a rectangle would discard additional boundary tails and would be false.
