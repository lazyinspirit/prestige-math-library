# Explicit Hopf sign check (off canonical)

The canonical definition uses positive normal first for surfaces, positive tangent first for meridian disks, and det_P(over,under) for crossing signs with the viewing normal first. The following calculation uses exactly those conventions.

In oriented R^3 with coordinates (x,y,z), take
K(t)=(cos t,sin t,0), J(s)=(1+cos s,0,-sin s), both with increasing parameters. They are disjoint. The xy unit disk bounded by K has orientation (x,y) and positive normal +z. J meets its interior only at s=pi, at the origin, with tangent +z. Thus lk(J,K)=+1 directly by the meridian/intersection convention.

For a regular diagram put e=1/2, use viewing normal n=(0,1,e), and projection coordinates (w,x) where w=z-e y. The ordered plane coordinates (w,x) are positive: representatives (0,-e,1),(1,0,0) following n have positive determinant 1+e^2. Both component projections are embedded ellipses. Their crossings have 0<x<1 and w=+/-sqrt(2x-x^2), where
(1-e^2)x^2-2x+e^2=0.
Exactly one root lies in (0,1), namely (1-sqrt(1-e^2+e^4))/(1-e^2), so there are precisely two crossings. At either crossing the projected oriented tangents in coordinates (w,x) are
v_K=(-e x,w/e), v_J=(1-x,w).
The viewing heights are h_K=-w/e and h_J=e w. At w>0, J is over and
 det(v_J,v_K)=w((1-x)/e+e x)>0.
At w<0, K is over and
 det(v_K,v_J)=-w((1-x)/e+e x)>0.
Thus BOTH crossings are positive by the actual canonical determinant convention, not an imported handedness label. This is the two-crossing Hopf diagram. Changing one crossing cancels the pair by Reidemeister II and gives the two-component unlink; oriented smoothing of one crossing gives a one-crossing unknot, removable by Reidemeister I. Smoothing both crossings into Seifert circles gives two disks joined by the two crossing bands; this connected orientable surface has Euler characteristic zero and two boundary components, hence is an annulus.

For ANY oriented embedded annulus A with induced oriented boundary K union J, choose two nearby parallel core curves c0,c1, both oriented like K. Moving each to its distinct boundary component inside A gives c0 isotopic to K and c1 isotopic to -J, through a disjoint pair throughout. Consequently lk(c0,c1)=-lk(K,J)=-1. A sufficiently small positive normal push of c0 is isotopic back to c0 in the complement of c1. Since c0 and c1 represent the same generator of H1(A), the declared positive-push pairing is V=[-1]. This conclusion is independent of which normal direction is called positive.

The old all-links formula det(u V-u^-1 V^T) is therefore -z for this positive Hopf link, with z=u-u^-1. But the required positive Conway skein gives +z: the switched link is U2 with value zero and the smoothing is U1 with value one. U2=0 follows already by applying the skein to a curl of U1 (the old proof's r>1 must be corrected to r>=1).

The necessary all-links formula correction is
 C_L(u)=det(u^-1 V-u V^T)=(-1)^m det(u V-u^-1 V^T), m=2g+r-1,
so the factor is (-1)^(r-1). Transposition alone does NOT change the determinant: det(u V^T-u^-1 V)=det(u V-u^-1 V^T). For knots m is even, so the corrected formula agrees exactly with the original knot determinant and its Conway/Arf consequences.

An independent S^3 coordinate check: orient S^3 as boundary of C^2 with orientation (x1,y1,x2,y2). The annulus A(s,t)=(cos(s)e^{it},sin(s)e^{-it}), 0<=s<=pi/2, oriented (t,s), has both boundary circles complex-oriented. The first bounds the hemisphere Im(z2)=0, Re(z2)>=0, oriented with boundary the complex first circle. At (0,1) its positive tangent basis is (x1,y1), the second circle has tangent +y2, and the S^3 orientation there is (x1,y1,y2). Their linking is +1. The same annular argument gives V=[-1].

This file records a confirmed defect and its exact correction; it is not a canonical source change, metadata acceptance, native review, or gate result.
