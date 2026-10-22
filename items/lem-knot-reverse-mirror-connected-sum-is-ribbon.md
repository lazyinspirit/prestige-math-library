---
id: lem-knot-reverse-mirror-connected-sum-is-ribbon
kind: lemma
title: The trefoil sum with its reverse mirror is ribbon
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - thm-parametric-transversality
  - thm-isotopy-extension
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Charles Livingston, A Survey of Classical Knot Concordance,
        arXiv:math/0307077v4
      url: https://arxiv.org/pdf/math/0307077v4
      locator: §2.1, Definition 2.3, printed p.4; radial Morse function with no
        interior local maxima
    - title: Brendan Owens and Frank Swenton, An Algorithm to Find Ribbon Disks for
        Alternating Knots
      url: https://eprints.gla.ac.uk/287761/1/287761.pdf
      locator: Definition 2.5 and Proposition 4.2, printed pp.10 and 21–22
    - title: Brendan Owens and Frank Swenton, An Algorithm to Find Ribbon Disks for
        Alternating Knots
      url: https://arxiv.org/pdf/2102.11778
      locator: Proposition 4.2; algorithm produces a band sequence for $-L\#L$ when
        $L$ is nonsplit alternating
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume AC$_\omega$. Let $T$ be the standard right-handed trefoil, let $T^*$ be its image under the fixed orientation-reversing reflection of the connected-sum convention, and let $-T^*$ denote reversal of the image knot's orientation. Then $T\#(-T^*)$ bounds a smooth ribbon disk in $B^4$.

## Statement references

[[def-knot-connected-sum-and-prime-knot|The oriented connected-sum convention]]

## Facts & Assumptions

**Given:** AC$_\omega$ and the standard oriented trefoil $T$ with the fixed mirror convention.

[F1] Here a smooth ribbon disk means a smooth proper disk in the standard four-ball for which the radial function is Morse in the interior, with critical points only of indices $0$ and $1$; it has no interior local maxima. This is the radial convention for ribbon disks. ([Livingston, Definition 2.3, p.4](https://arxiv.org/pdf/math/0307077v4))

[F2] The standard ball-arc connected-sum convention is independent of local choices under AC$_\omega$. ([[def-knot-connected-sum-and-prime-knot]], [[lem-knot-connected-sum-well-defined]])

[F3] Under AC$_\omega$, good slices of a finite smooth transverse family are dense; compact-source isotopies extend ambiently. ([[thm-parametric-transversality]], [[thm-isotopy-extension]], [[def-countable-choice]])

## Proof

**Given:** AC$_\omega$ and $T$.

1.1 Delete a small straight subarc of $T$ in a coordinate ball. Identify its complementary ball with $B^3$ and parametrize the remaining oriented arc by a smooth embedding $a:[0,1]\to B^3$ with endpoints on $S^2$, interior in the open ball, and transverse radial endpoint collars. These are the standard ball-arc data of [F2]. Move the arc slightly if necessary so that it misses the origin; this is possible by a small translation on its interior, fixed on endpoint collars, since a smooth compact arc in three-space has empty interior and its endpoint collars can be kept outside a small ball about the origin. Put $f(s)=|a(s)|^2>0$, with $f(0)=f(1)=1$ and $f<1$ in the interior; transversality gives $f'(0)<0<f'(1)$. [given, F2, construct]

2.1 Arrange that $f$ is Morse away from its endpoint collars, without changing the arc type. Here are finite perturbation details. The zeros of $f'$ lie in a compact subinterval. Cover that zero set by finitely many smaller open intervals on each of which a compactly supported smooth function $\phi_i$ has derivative $1$. For the family $f_u=f+\sum_i u_i\phi_i$, the map $(s,u)\mapsto f'_u(s)$ is a submersion near this zero set because one parameter derivative is $1$; on its compact complement $f'$ is bounded away from zero, so small parameters create no further zeros. Apply [F3] to this finite family and zero in $\mathbb R$. Choose arbitrarily small good $u$, so every zero of $f'_u$ is simple. Endpoint collars stay fixed and $0<f_u<1$ inside. Replace $a(s)$ by $\sqrt{f_u(s)/f(s)}a(s)$. For sufficiently small parameters this is an isotopy of embeddings, since on a finite chart cover immersion and local injectivity persist in $C^1$, while compact pairs outside the chart diagonals have a positive separation margin. Its squared radius is $f_u$. Rename this arc $a$ and this function $f$; the finitely many simple critical points lie in a compact subinterval, so there are only finitely many. [F3, step 1.1, construct, choose]

3.1 In $B^4=\{(x,t)\in\mathbb R^3\times\mathbb R:|x|^2+t^2\le1\}$ take the surface $D=\{(a(s),t):0\le s\le1,\ t^2\le1-f(s)\}$. The strip map $(s,t)\mapsto(a(s),t)$ is an embedding. Its parameter domain is explicitly a smooth disk: the ellipse $v^2\le s(1-s)$ maps onto it by $(s,v)\mapsto(s,v\sqrt{q(s)})$, where $q(s)=(1-f(s))/(s(1-s))$ extends smoothly and positively to both endpoints because $f$ has simple transverse endpoint zeros of $1-f$. This map and its inverse are smooth, and every interior vertical fibre is an interval of positive length. Smoothness at those endpoints follows from the implicit function theorem applied to $f(s)+t^2=1$, because $f'$ is nonzero there; the domain boundary is locally $s=s(t)$ rather than a corner. Equivalently $D$ is the regular sublevel of $f(s)+t^2$ in a slightly extended embedded strip. Consequently it is a smooth compact properly embedded disk, its boundary lies in $S^3$, its interior lies in the open four-ball, and its intersection with $S^3$ is transverse. [step 1.1, step 2.1, construct]

4.1 The two boundary arcs of $D$ are $(a(s),\sqrt{1-f(s)})$ and $(a(s),-\sqrt{1-f(s)})$. The equatorial sphere $t=0$ meets their union only at $s=0,1$. The hemispheres are standard three-balls; projection to $x$ identifies their interiors with the interior of $B^3$, and their lifted arcs represent the original ball-arc pair by [F2]. To see this without a boundary-singular projection, first use transverse endpoint collars to straighten the arcs in smooth hemisphere collars, and then use projection on the compact remaining subarcs; the collar interpolation is an isotopy of the arcs fixing endpoints. Reflection $(x,t)\mapsto(x,-t)$ exchanges the hemispheres and reverses the boundary orientation of $S^3$. The orientation induced on $\partial D$ runs along one lifted arc with increasing $s$ and along the other with decreasing $s$. Thus the capped oriented boundary arcs are $T$ and $-T^*$, with the fixed mirror reflection transported by positive coordinate frames as in [F2]. Gluing these standard hemispherical arc data gives $\partial D=T\#(-T^*)$ as an oriented knot. [F2, step 3.1, construct]

5.1 On $D$ the squared radial function is $\rho(s,t)=f(s)+t^2$. Its interior critical points are exactly $(s,0)$ with $f'(s)=0$, and their Hessians are $\operatorname{diag}(f''(s),2)$. They are nondegenerate, with index $0$ or $1$, never $2$. Since $\rho>0$, taking its square root preserves these critical indices. Hence the standard radial function makes $D$ a ribbon disk by [F1], proving the full conclusion. [F1, step 2.1, step 3.1, step 4.1, algebra] ∎

## Remarks

The construction works for any smooth knot arc; no alternating-diagram algorithm is required. The prohibition is on interior radial maxima. A compact proper disk necessarily has an interior radial minimum.

## Sources

[[thm-parametric-transversality]]

[[thm-isotopy-extension]]
