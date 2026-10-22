---
id: lem-finite-smooth-surface-creases-admit-relative-ambient-rounding
kind: lemma
title: "Finite smooth surface creases admit relative ambient rounding"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-euclidean-inverse-function-theorem
  - lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is permitted and inherited from the recorded parametric corner-rounding supplier; the proof uses only finitely many supplied seam pieces, scalar cutoffs and convolutions. No arbitrary topological smoothing assertion is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "James R. Munkres, Elementary Differential Topology, finite surface edge rounding; explicit global seam charts and fiber homeomorphisms supplied here"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
---

## Statement

Assume full AC. Let $S$ be a compact embedded topological surface in an oriented smooth three-manifold. Suppose it is smooth outside finitely many pairwise disjoint smoothly parametrized seam circles or compact seam arcs, all contained in the interior of $S$. Near each seam it is the union of two supplied smooth embedded half-surfaces meeting precisely in that seam; their inward transverse tangent rays are distinct at every seam point. For an arc, both half-surfaces extend smoothly slightly past its end parameters, and the union $S$ is already smooth on a neighborhood of the two ends. Let $K\subset S$ be a compact set on a neighborhood of which $S$ is smooth.

In any prescribed neighborhood of the nonsmooth locus there is an ambient homeomorphism, supported in that neighborhood and fixed on a neighborhood of $K$, carrying $S$ to a smooth embedded surface. It can be joined to the identity through ambient homeomorphisms with those same support and fixed-set properties. This preserves the surface's homeomorphism type. Distinct rays may be opposite, in which case the surface may already be smooth; they must not coincide. No triangulation or general locally-flat surface smoothing theorem is assumed.

## Statement references

[[def-axiom-of-choice]]

[[lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs]]

## Facts & Assumptions

**Given:** The finite smooth seam parameters, the two actual smooth half-sheets at each seam, their distinct inward rays, the smooth protected neighborhood, and the prescribed rounding neighborhood.

[F1] Smooth full-rank maps admit smooth local inverses; compactness makes a sufficiently short tubular chart injective, since collisions in successively shorter charts would converge to one base point and contradict a local inverse there. ([[thm-euclidean-inverse-function-theorem]])

[F2] The parametric corner-rounding proof gives the following explicit construction. For a graph $y=f_s(x)$ smooth on each side of $x=0$, convolution in $x$ with a sufficiently small smooth kernel makes it jointly smooth; the error is bounded by its local Lipschitz constant times the kernel width. A graph displacement $\Delta_s(x)$ with sufficiently small value extends to the vertical fiber homeomorphism $(x,y)\mapsto(x,y+\chi((y-f_s(x))/a)\Delta_s(x))$, whose derivative in $y$ exceeds $1/2$. This constructive use is of the actual proof's graph and fiber formulas. ([[lem-finite-corner-radial-circle-families-bound-standard-ball-disk-pairs]])

## Proof

1.1 At a seam choose its unit tangent and the ambient orientation. Project the inward transverse tangents of the two half-sheets to the normal plane and normalize to unit vectors $a(s),b(s)$, retaining the supplied labeling. They vary smoothly and are distinct. The normal field $e_x=(a-b)/|a-b|$ and its positive quarter-turn $e_y$ give a smooth normal frame along the entire seam, also around a circle. The two inward rays have respectively positive and negative $e_x$ component, since $a\cdot(a-b)=1-a\cdot b>0$ and $b\cdot(a-b)=a\cdot b-1<0$. Use a smooth ambient metric and its normal exponential map in this frame. By [F1] and compactness it gives one tubular coordinate system $(s,x,y)$ around the seam, with a short extension at arc ends. The projection of each half-sheet onto $(s,x)$ has invertible differential up to its boundary. Hence, after a uniform shrinking, their union is exactly a graph $y=f(s,x)$, smooth jointly in $s,x$ on each side of zero, continuous with $f(s,0)=0$, and with no other surface portions in the tube. The finite disjoint seam tubes can be made disjoint. [given, F1, construct, algebra]

2.1 The nonsmooth locus is a compact subset of the seam interiors: the smooth locus is open in $S$, the seams are compact, and the arc ends and $K$ have protected smooth neighborhoods. Choose smaller seam tubes and a smooth cutoff $\mu(s)$ equal to one near every nonsmooth seam point and zero near the protected set and arc ends. Its transition regions along the seam are chosen where $S$ is already smooth. This is possible by finite interval charts and scalar bumps on the finitely many parameter circles or intervals. Shrink the tube widths so the support misses a neighborhood of $K$ and lies in the prescribed neighborhood; away from those parameter intervals no modification is required. There are finite uniform graph widths and slope bounds on the compact support. Choose a horizontal cutoff $\zeta(x)$ equal to one near zero and zero outside a narrower graph strip, and a small positive kernel width $\epsilon$. Let $f^\epsilon$ denote convolution in $x$ and set $g=f+\mu(s)\zeta(x)(f^\epsilon-f)$. By [F2], $f^\epsilon$ is jointly smooth across zero. Near a nonsmooth seam point both cutoffs equal one, so $g=f^\epsilon$. Where $\mu$ changes, $f$ is smooth in a neighborhood of that seam point; where $\zeta$ changes, $x\ne0$ and $f$ is smooth. It follows that $g$ is smooth everywhere on the modified graph. Take $\epsilon$ smaller if necessary so the graph error $\Delta=g-f$ has arbitrarily small uniform norm. [step 1.1, F2, construct]

3.1 Choose a fixed vertical cutoff $\chi$ equal to one near zero and supported in $(-1,1)$. Take a small vertical width $a>0$, choose the horizontal strip so that $|f|<a/4$ there, and ensure $\|\chi'\|_\infty|\Delta|/a<1/2$. Define $T_t(s,x,y)=(s,x,y+t\chi((y-f(s,x))/a)\Delta(s,x))$, $0\le t\le1$, on the tube. Its derivative in $y$ is greater than $1/2$, so each vertical fiber map is an increasing homeomorphism equal to the identity near the fiber ends. The horizontal and parameter cutoffs make it the identity near the other tube boundaries as well. The fiber inverses are continuous jointly in $t,s,x,y$, by the same lower slope bound and monotonicity. Extend by the identity outside the tube. This is an ambient topological isotopy, and at $t=1$ it carries the graph of $f$ exactly to the graph of $g$. Its support can be made as small as specified by the choices in step 2.1. The formula requires no differentiability of $f$ at the seam. [step 1.1, step 2.1, F2, construct, algebra]

4.1 Apply these constructions to the finitely many disjoint seam tubes. Their isotopies have disjoint support and therefore compose to one ambient isotopy, fixed on a neighborhood of $K$. At its endpoint each affected portion is the smooth graph $g$, agrees with the original smooth graph near all support boundaries, and introduces no intersection because it is the image under a homeomorphism. Outside the tubes the surface was smooth from the start. Thus the entire image is a smooth embedded surface, with the stated support and relative properties. Opposite inward rays cause no difficulty: their $e_x$ components still have opposite signs, and the same graph and convolution argument applies. Only coincident rays would invalidate the graph projection, and they were excluded explicitly. [step 1.1, step 2.1, step 3.1, construct] ∎
