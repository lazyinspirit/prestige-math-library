---
id: lem-crossing-minimal-regular-link-diagrams-are-reduced
kind: lemma
title: "Crossing-minimal regular link diagrams are reduced"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-crossing-number-of-link
  - def-reduced-alternating-link-diagram
  - lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - lem-jordan-schoenflies-extension-for-plane-curves
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is retained through the crossing-number and finite smooth disk-normalization interfaces. The actual overpass detour and compact-source extension use finite supplied disks."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander Stoimenow, Diagram Genus, Generators, and Applications (2016), publisher chapter2, printed pp.14 and27, Figures2.1 and2.7; smooth detour proof supplied here"
      url: "https://www.routledge.com/rsc/downloads/diamgram_genus_-_chapter.pdf"
---

## Statement

Assume full AC. If a regular diagram $D$ of a nonempty smooth link $L$ has $c(D)=c(L)$, then no complementary region has any crossing more than once on its boundary. Thus $D$ is reduced, whether or not it is alternating, prime or connected. More precisely, a crossing incident twice to one complementary region can be eliminated by a smooth ambient isotopy of the represented link, yielding a regular diagram with exactly one fewer crossing.

## Statement references

[[def-axiom-of-choice]]

[[def-crossing-number-of-link]]

[[def-reduced-alternating-link-diagram]]

## Facts & Assumptions

**Given:** Full AC and a regular diagram, its smooth height realization, and a crossing incident more than once to one complementary region when the more precise assertion is used.

[F1] A crossing has four local sectors with opposite strand branches; reducedness excludes repeated incidence of a region at a crossing. The crossing number is the minimum crossing count among regular diagrams of the same underlying smooth link. ([[def-reduced-alternating-link-diagram]], [[def-crossing-number-of-link]])

[F2] The actual finite smooth disk-normalization proof provides smooth disk parameters with prescribed boundary arcs and their inward collars. Its circle-map extensions and corner collars give the corresponding parameters for a disk with finitely many specified smooth boundary arcs meeting in corners. ([[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]], Proof7.1–12.1)

[F3] A smooth embedding isotopy of a compact source extends to a smooth ambient isotopy; one can make time stationary at its endpoints. ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]])

[F4] A planar Jordan curve bounds its disk region; finite smooth corners may be rounded in disjoint coordinate disks. ([[lem-jordan-schoenflies-extension-for-plane-curves]])

[F5] Full AC implies countable choice, so the crossing-number domain and the stated smooth suppliers are available. ([[thm-choice-implies-dependent-implies-countable-choice]])

## Proof

1.1 Let $v$ be the repeated crossing and take a short overpassing subarc $a$ through $v$, with endpoints just outside its crossing disk. Each of the four sectors touches exactly one of the two ends of this overpass. Two adjacent sectors cannot belong to the same complementary region: a small transverse crossing of their intervening strand changes the parity of intersection with the finite immersed link cycle on the sphere. This parity is well-defined by filling that cycle modulo two on the sphere, or directly by the signed crossing count of a generic path; a closed path has even intersection with a closed immersed curve, since its individual smoothed Jordan circles each separate the sphere. Thus the repeated sectors are opposite. They touch the two different ends of $a$. Within their common open region join nearby points by a simple smooth arc: a finite chain of coordinate disks along a path gives a polygonal arc, loop erasure makes it simple, and finitely many local roundings smooth it. Extend it to the endpoints of $a$ in their empty small neighborhoods, obtaining an arc $b$ missing the diagram except at its endpoints. It meets $a$ only at those endpoints. Therefore $a\cup b$ bounds a planar bigon disk $J$, with smooth boundary arcs and endpoint corners. [given, F1, F2, F4, F5, construct]

2.1 Work in a finite plane chart containing $J$ and the diagram, and use its height realization in three-space. The lifted overpass $\widehat a$ lies above every other strand over its projected points. Choose a height $H$ above the entire compact link. There is a smooth graph disk over $J$ whose boundary over $a$ is exactly $\widehat a$, whose other boundary arc projects to $b$, and whose interior misses the rest of the link. To construct it, set its height to $H$ off a thin inward collar of $a$ and the two endpoint neighborhoods. On that collar interpolate from the prescribed overpass height to $H$, never below the prescribed boundary height. At the unique crossing of $a$ with the remaining diagram there is a positive height gap; a sufficiently thin collar retains it by continuity. Away from that crossing and the endpoint neighborhoods, the projected $a$ has positive separation from the remaining finite diagram, so a thinner collar cannot meet it. In the endpoint neighborhoods the rest of the link is the single continuation of $a$ outside $J$; choose the graph and its end collars there to meet it only at the fixed endpoints. Finite smooth cutoffs give the interpolation. On the remaining boundary $b$ use the high graph height, tapering only within those empty endpoint neighborhoods. This verifies disjointness throughout, even when $J$ contains other projected link strands. [step 1.1, construct]

3.1 Push the lifted overpass across this actual embedded disk to its other boundary arc. Use [F2] to parametrize the disk as a rounded bigon with its two distinguished boundary arcs; parallel arcs in that parameter disk give the sweep away from the two endpoints. Near an endpoint, both inward boundary directions lie in a cone of angle less than a half-turn, after a small choice of the detour tangent in step 1.1. Choose a coordinate whose derivative is positive on that cone. Truncate the sweeping arcs inside a small endpoint ball and join them to the fixed exterior strand as smooth graphs over this coordinate. Positive graph derivatives and smooth cutoff interpolation give a smooth family of embedded joins, agreeing with the old strand on an outer collar. Thus the whole link, rather than just an arc with unmatched endpoint derivatives, has a smooth embedding isotopy fixed outside the disk neighborhood and these two empty endpoint balls. The disk interior misses the remaining link by step 2.1, and the endpoint balls contain no other strand, so no new collisions occur. Make time stationary and apply [F3]. At the endpoint the replacement projects to $b$, with the endpoint adjustments still inside their empty neighborhoods. Every other crossing and its over-under data are untouched, while $v$ is removed. The endpoint is consequently a regular diagram with exactly $c(D)-1$ crossings of the same smooth link. [step 1.1, step 2.1, F2, F3, construct]

4.1 If $c(D)=c(L)$, the diagram in step 3.1 would contradict the minimum in [F1]. Hence there is no repeated region at any crossing and $D$ is reduced. The same construction proved the more precise assertion without any minimality assumption. It used no alternation, primeness or connectedness. [given, step 3.1, F1, algebra] ∎
