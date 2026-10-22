---
id: lem-straight-collar-spanning-surfaces-are-related-by-interior-tube-moves
kind: lemma
title: "Straight-collar spanning surfaces are related by interior tube moves"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-colored-spanning-surface-regions-give-an-embedded-ordered-tube-cobordism
  - thm-morse-lemma
  - lem-local-morse-sublevel-pair-is-a-handle-pair
  - thm-euclidean-inverse-function-theorem
  - thm-fundamental-theorem-on-flows
  - thm-isotopy-extension
  - lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the explicit cobordism, local handle/flow, isotopy-extension and finite surface-presentation suppliers. The movie has finitely many critical points."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), 53–69, Theorem 11, printed pp.66–67; explicit ambient-time and connected-level arguments supplied locally"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
---

## Statement

Assume countable choice. Let $F_0,F_1\subset S^3$ be connected compact smooth surfaces with the same nonempty boundary link $L$. Suppose their interiors meet transversely in finitely many circles, and supply boundary tube charts in which their actual collars are the two positive coordinate rays. Then they are related by a finite sequence of ambient isotopies fixing $L$ pointwise and interior tube additions or removals. A tube addition replaces the two end disks of an embedded product cylinder $[-1,1]\times D^2$, whose intersection with the surface is exactly those disks, by its lateral annulus, with seam rounding; removal is its inverse. Every intermediate surface in the sequence is connected, has boundary exactly $L$, and has a finite smooth disk-and-band presentation. No orientability hypothesis is imposed. All additions can be performed before all removals, with ambient isotopies between them.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable choice, the connected spanning surfaces with finite transverse interior circle intersection and the supplied straight separated boundary charts.

[F1] The explicit colored-region construction gives an embedded cobordism in $S^3\times[0,1]$ with these horizontal ends and vertical boundary $L\times[0,1]$. Its ambient time is excellent Morse with only index-one critical values below $1/2$ and index-two critical values above $1/2$. Its spatial projection is a local coordinate away from the fixed interval fibers over the common circles and $L$; changes of height supported away from those fibers retain the embedding when endpoint fibers and collars are retained. ([[lem-colored-spanning-surface-regions-give-an-embedded-ordered-tube-cobordism]])

[F2] At a nondegenerate critical point there is a quadratic Morse chart. Its explicit local handle construction supplies a product handle and a compactly supported graph-rounding isotopy, with a regular complementary band after locally lowering the critical value. Only those local constructions are used below; the regular bands with vertical boundary are treated directly. ([[thm-morse-lemma]], [[lem-local-morse-sublevel-pair-is-a-handle-pair]])

[F3] The inverse function theorem provides local spatial inverses at points with invertible spatial differential. Smooth fields have unique smooth local flows. ([[thm-euclidean-inverse-function-theorem]], [[thm-fundamental-theorem-on-flows]])

[F4] An isotopy of a compact smooth source with boundary in $S^3$ extends to an ambient isotopy. If its boundary points are fixed, their images are fixed by the extending isotopy as well. ([[thm-isotopy-extension]])

[F5] Every connected compact smooth surface with nonempty boundary has a finite smooth disk-and-band presentation under countable choice, without an orientability assumption. ([[lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations]])

## Proof

1.1 Take the actual embedded cobordism $E:W\to S^3\times[0,1]$ in [F1], and write its time function as $h$. For a regular $t$, the level $W_t$ is a compact smooth surface with boundary its intersection with the vertical face. Its spatial projection is an embedding: on tangent vectors of $W_t$, $dh=0$, so a vector killed by spatial projection is killed by $dE$ and must vanish; injectivity follows from that of $E$ at the common time. Its image $F_t\subset S^3$ has boundary exactly $L$. The endpoint collars give the initial and final surfaces in the same way. There are finitely many distinct critical heights. [given, F1, construct]

2.1 On a compact band without critical points choose a smooth field $X$ on $W$ with $dh(X)=1$, tangent to the vertical boundary and equal to its product $\partial_t$ near that boundary. One obtains it by dividing coordinate fields by their nonzero height derivative and patching finitely many local choices; their convex combination still has $dh(X)=1$. Uniqueness in [F3] prevents a trajectory from crossing the boundary face to which the field is tangent. A finite cover of the compact band gives a common short existence time, and restarting its local flows finitely often transports the lower level to every intervening level, since its height increases at unit speed. Projection of that transport gives an isotopy of compact surfaces in $S^3$ by step 1.1. On the vertical boundary the projection is the fixed point of $L$, so [F4] extends it to an ambient isotopy fixing $L$ pointwise. This proves the required assertion for every regular band, including those later used with a locally modified height. [step 1.1, F3, F4, construct]

3.1 At a critical point the spatial differential on $W$ is invertible: the time differential vanishes there and $E$ is an immersion of dimension three. By [F3] the cobordism near that point is a graph $t=f(x,y,z)$ on a spatial chart, and [F2] gives its quadratic normal form. For index one write $f=c-x^2+|y|^2$, with $y\in\mathbb R^2$. For small positive $\varepsilon,d$, its actual lower level contains the two end disks of the embedded product
$$H_0=\{|y|^2\le d,\ x^2\le\varepsilon+|y|^2\},\qquad (U,V)\longmapsto(\sqrt{\varepsilon+d|V|^2}\,U,\sqrt d\,V),$$
where $(U,V)\in D^1\times D^2$. The end disks $U=\pm1$ lie on $f=c-\varepsilon$, and the product interior misses that level. The lateral face is its attaching tube. Rounding its seams with the retained lower level gives the boundary graph $|y|^2=j(x^2)$ of the explicit local construction in [F2]. The graph interpolation there is an ambient isotopy supported in this spatial chart and carries that rounded tube replacement to the lower level of the locally lowered function. The spatial chart lies in one region interior of [F1], so no other part of the surface projects into it. Thus this is an actual embedded product-cylinder tube addition in $S^3$, with the rest of the surface retained. [step 1.1, F1, F2, F3, construct]

4.1 Choose the lowering cutoff and $\varepsilon$ so small that its support is disjoint from the fixed interval fibers and all boundary collars, its modified height stays in $(0,1)$ there, and the chosen band contains no other critical point. Its upper sublevel, hence its upper regular level, is unchanged by the local lowering construction in [F2]. The new band from the modified lower level to that upper level is regular. The reheighting assertion of [F1] verifies that this modified height still gives an embedded cobordism; step 2.1 therefore gives an ambient isotopy from the tube-replacement surface to the original upper level. This verifies the geometric comparison, rather than inferring it from an abstract handle diffeomorphism. For index two reverse time and use the same index-one construction; its change is a tube removal. In both cases every modification and graph isotopy is away from $L$. Applying this at the finitely many critical heights and step 2.1 between them gives the finite sequence with all additions before all removals. [step 2.1, step 3.1, F1, F2, construct]

5.1 Every surface in that sequence is connected. Before the first critical value the level is isotopic to connected $F_0$. A tube addition to one connected surface cannot disconnect it, so all levels through the index-one phase stay connected. During the index-two phase a tube removal is compression along a single circle; it either retains the component count or increases it, and never joins distinct components. No zero- or three-handle occurs, so there is no later sphere birth or death to change this conclusion. Since the final surface $F_1$ is connected, no removal can increase the component count. Consequently all regular levels, and all tube-replacement and ambient-isotopic representatives chosen in steps 2.1–4.1, remain connected. Their boundary is $L$ throughout. [step 1.1, step 4.1, F1, construct]

6.1 Apply [F5] to each of the finitely many connected compact boundary surfaces in this sequence to supply its actual finite smooth presentation. The isotopies fix every point of $L$, and each local cylinder is disjoint from it, so any boundary component orientation or label is retained. The index order from [F1] and the constructions in step 4.1 give the claimed order of the finite moves, completing the assertion without assuming orientability. [step 4.1, step 5.1, F1, F5, construct] ∎
