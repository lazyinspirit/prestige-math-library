---
id: lem-marked-pattern-core-and-whitehead-trefoil-reversal-are-geometric
kind: lemma
title: "The marked pattern core and Whitehead-trefoil reversal have geometric identifications"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-positive-whitehead-pattern-has-the-explicit-five-handle-ribbon-model
  - lem-positive-whitehead-clasp-band-gives-genus-one-surface
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-explicit-torus-parallels-have-product-framing
  - def-coprime-torus-knot
  - thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
  - def-countable-choice
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the smooth collar conventions. All disk cuts, curve normalizations, frame formulas and compact flows are finite constructions."
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Assume Countable Choice. Fill the inner meridian of the actual positive-pattern exterior in the explicit five-handle model. Choose any short open segment of its meridian curve $N$ missing all alpha intersections, and put two marks on its opposite banks. There are actual alpha and beta boundary-parallel bridge witnesses, disjoint from their own compression disks, whose union is isotopic inside the pattern solid torus to the filling core. Thus these marked data represent the positive Whitehead pattern with one of its two orientations, rather than an unspecified knot inferred from a homology class.

For the canonical complex right trefoil, its zero-framed positive Whitehead double is orientation-reversingly symmetric by an explicit orientation-preserving ambient isotopy of the oriented three-sphere. Consequently either order of the two marks gives the same oriented Whitehead trefoil knot up to an actual oriented-knot identification. This does not identify their different count matrices or Alexander labels; those require their actual marked comparison.

## Facts & Assumptions

**Given:** The actual compressionbodies, product disk cuts and meridian of the positive-band exterior, not only its group presentation.

[F1] The explicit pattern model identifies the filling core with the boundary of the positive annulus-plus-band. The band in its product coordinates is $B(s,u)=(s,u\cos2\pi s,C\sin\pi s-u\sin2\pi s)$, with $|u|\le a$ and $C>2a$. [[lem-positive-whitehead-pattern-has-the-explicit-five-handle-ribbon-model]] [[lem-positive-whitehead-clasp-band-gives-genus-one-surface]]

[F2] Smooth essential torus curves and their annulus strips have actual finite coordinate normalizations and collar extensions. The standard torus parallel of the canonical $(2,3)$ curve has framing $2\cdot3=6$. [[lem-choice-free-smooth-torus-curves-and-annulus-strips]] [[lem-explicit-torus-parallels-have-product-framing]] [[def-coprime-torus-knot]]

[F3] Compactly supported smooth vector fields have actual global evolution and its inverse on a compact time interval. [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]]

## Proof

1.1 Cut the filled beta handlebody along its four disks other than $N$. It is the solid torus $T$ obtained by filling the negative torus boundary of the supplied compressionbody; $N$ bounds its meridian disk. The short across-$N$ arc between the marks can be chosen on the surface disjoint from all alpha curves and the other beta curves. Its narrow push into the alpha handlebody has a literal rectangular witness disk and misses the alpha compression disks. On the compressed torus $\partial T$, cut along $N$. The result is an annulus with the finitely many compression-cap disk interiors distinguished. Removing those disjoint disks leaves a connected punctured annulus. Join the two marked ends by an embedded proper return arc in it: any finite polygonal path can be made transverse and its finite self loops erased, then its corners rounded. It avoids every cap and $N$. Push it into the ball obtained by the remaining $N$ cut; its surface collar is the beta witness disk and misses every beta compression disk. Before that push, the return together with the short across-$N$ arc is an embedded circle on $\partial T$ meeting its meridian once. By [F2] it has primitive slope $(1,q)$ in meridian/core coordinates; the explicit parameter $(e^{it},re^{iqt})$ isotopes it radially to the core $(e^{it},0)$ inside the solid torus. Carry the surface normalization through its collar first. Push the alpha arc through its tiny witness rectangle to that torus curve and then perform this core isotopy. It avoids all other attached handles and is supported inside the actual pattern solid torus. This proves the filling-core admission with the required witness disks; it does not require the unmarked diagram's bigon moves to avoid the marks. [F1, F2, given, construct, algebra]

1.2 Fix an explicit equivariant ZERO framing around the canonical trefoil, to avoid an unproved framing adjustment. Put $a=b=1/\sqrt2$ and $K(t)=(ae^{2it},be^{3it})$ in the unit three-sphere. With $L=\sqrt{9b^2+4a^2}$ let $$v_1(t)=(be^{2it},-ae^{3it}),\qquad v_2(t)=i(3be^{2it},-2ae^{3it})/L.$$ These are an orthonormal normal frame of the knot within the sphere; the ordered triple $(K',v_1,v_2)$ has its positive sphere orientation. Its first parallel is the torus parallel of [F2], hence has framing six. Rotate this positive normal frame by $-6t$, obtaining $e_1,e_2$; this subtracts six meridian turns and gives framing zero. Direct conjugation gives $\overline{e_1(t)}=e_1(-t)$ and $\overline{e_2(t)}=-e_2(-t)$. Use disk coordinates $(s,z)$ with frame $(e_1,-e_2)$ and center $s=1/2$. For sufficiently small $\epsilon$, normalizing $$K(t)+\epsilon((s-1/2)e_1(t)-ze_2(t))$$ gives an actual tubular embedding, oriented by $ds\wedge dt\wedge dz$. Complex conjugation is therefore EXACTLY $(t,s,z)\mapsto(-t,s,-z)$ on this zero-framed tube. In real four-space it is a half-turn in the plane of the two imaginary coordinates and is joined to the identity by that rotation. Its restriction is thus an orientation-preserving ambient isotopy of the three-sphere, reversing the core trefoil. [F2, construct, algebra]

2.1 Use [F1]'s annulus and band in this tube, writing $t=\theta$. Conjugation fixes the two annular rim circles as sets and takes the band edge $B_C(s,u)$ to $B_{-C}(s,-u)$. Choose a smooth cutoff equal to one on their compact tracks, symmetric under $(\theta,z)\mapsto(-\theta,-z)$, and supported inside this tube. Flow its vector field $2C\sin(\pi s)\,\partial_z$ for time one, with that cutoff. It fixes both rim circles because $\sin(\pi s)=0$ at $s=0,1$, and sends each conjugated band edge to $B_C(s,-u)$. At every intermediate time the two band edges are distinct: when their theta coordinates coincide, their height difference is $2a$, and otherwise their theta coordinates differ; different $s$ values are already separated. They meet the rim circles only at their prescribed ends. Thus the entire link track stays embedded. By [F3] this is an actual ambient flow, not just a homotopy of a diagram. The cutoff can be one on the whole small rectangular band track and still compactly supported in the disk coordinates. Its symmetry makes the conjugated vector field its negative, so conjugation followed by the time-one flow is an involution near the knot; choose the finitely many attachment-corner roundings equivariantly in its invariant local metric. The resulting diffeomorphism preserves the positive Whitehead knot as a set and reverses its orientation, as seen on either rim circle where it sends positive theta to negative theta. It is isotopic to the identity by the rotation of step 1.2 followed by this compact flow. Carrying the bridge witnesses in step 1.1 and their ordered marks gives the asserted oriented-knot identification for either marked order. No Floer invariance or equality of the two marked differentials is used. [F1, F2, F3, step 1.1, step 1.2, construct, algebra] ∎
