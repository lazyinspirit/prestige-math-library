---
id: lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range
kind: lemma
title: General position makes a Whitney disk embedded and interior-disjoint in the stable range
deps:
- def-countable-choice
- def-whitney-disk-and-clean-framed-whitney-disk
- def-whitney-circle-for-a-pair-of-intersection-points
- lem-metastable-embedding-for-maps-from-a-compact-manifold
- lem-transverse-complementary-spheres-have-product-charts
- thm-relative-whitney-approximation-for-manifold-valued-maps
- thm-parametric-transversality
- thm-transverse-preimage-theorem
- prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Proof of Theorem 7.27, printed pp. 138-140 (for $n_1,n_2\ge3$ "the dimension conditions ensure the
      existence of a 'Whitney disc' $D^2\subseteq M$"; the case $n_1=2$ requires a complement fundamental-group hypothesis to avoid the codimension-two sheet)
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Theorem 6.6, printed p. 71 (hypotheses $s\ge3$ and, for $r\le2$, injectivity of $\pi_1(V-M')\to\pi_1(V)$);
      Lemma 6.10, printed p. 79 (loops in $V' - Y$ vs $V'-Y$ for codimension at least three)
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 3
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $X^m$ be a smooth manifold without boundary and let $A^a,B^b\subseteq X$ be closed embedded complementary transverse submanifolds, $a+b=m$, with $$a\le m-3\quad\text{and}\quad b\le m-3,$$ equivalently both codimensions are at least $3$ (so $m\ge6$). Let $\gamma$ be a Whitney circle for a pair $p,q\in A\cap B$ and suppose $\gamma$ is null-homotopic in $X$. Then $\gamma$ bounds a clean Whitney disk: an embedded disk $W\subseteq X$ with $\partial W=\gamma$ and $W(\operatorname{int}D^2)\cap(A\cup B)=\varnothing$. The disk may be chosen arbitrarily close to a prescribed null-homotopy of $\gamma$, and the construction is relative to any closed subset of the boundary on which the null-homotopy is already clean. The inequality $a,b\le m-3$ is exactly what makes the dimension counts $2+a-m\le-1$ and $2+b-m\le-1$ available; the codimension-two borderline case $a=m-2$ is not covered here and is the content of the separate borderline theorem below. The closeness for an arbitrary continuous nullhomotopy is in the compact-open topology after an arbitrarily small boundary-collar adjustment; a supplied clean smooth collar is fixed, and the later perturbations can be $C^1$-small on the protected embedded pieces.

## Facts & Assumptions

[F1] Complementary transverse embedded sheets have simultaneous product charts at their intersection. [[lem-transverse-complementary-spheres-have-product-charts]]

[F2] Under Countable Choice, continuous manifold-valued maps smooth near a closed set can be smoothed through a homotopy fixed near that set. [[thm-relative-whitney-approximation-for-manifold-valued-maps]]

[F3] Metastable approximation of maps by embeddings. [[lem-metastable-embedding-for-maps-from-a-compact-manifold]]

[F4] A transverse finite-dimensional evaluation family has transverse slices outside a null parameter set. [[thm-parametric-transversality]]

[F5] A transverse inverse image has dimension equal to source dimension minus target codimension. [[thm-transverse-preimage-theorem]]

## Proof


**Given:** Countable choice, complementary closed sheets with $a,b\ge3$, a nullhomotopic Whitney circle, and any prescribed clean boundary or corner collars.

1.1 First form an embedded clean collar of the Whitney bigon. In complementary product charts at its two corners take the sector between the sheet axes. Along the remaining arcs choose the inward direction normal to the corresponding sheet and interpolate the corner choices; the opposite corner compatibility, when framing is requested, is treated separately by the compatible-framing supplier. A small collar has interior disjoint from both sheets: the boundary arcs are compact and have no other intersections, while the product corner sectors meet neither axis. Attach a continuous nullhomotopy to its inner edge; its loop is homotopic to the original circle. Relative Whitney approximation smooths the disk while fixing a smaller collar, using radial extension and ordinary interior charts to handle the two fixed corners. Any prescribed already-clean collars can be retained. [given, construct, F1, F2]

2.1 Apply the relative embedding supplier to the disk map, fixing that smaller embedded collar. Its dimension is two and $m=a+b\ge6>4$, so it yields an embedded disk. Use its finite source bump/target retraction construction again to make the disk interior transverse to each sheet, with all profiles vanishing on a protected collar. On the adjustable region the evaluation spans target values, so parametric transversality applies. The transition annulus is compact and already disjoint from the closed sheets, so sufficiently small perturbations preserve avoidance there. The expected dimensions are $2+a-m=2-b<0$ and $2+b-m=2-a<0$; hence both interior incidence sets are empty. Small $C^1$ perturbations of the compact embedded disk remain embedded by the finite convex-chart local separation and compact separated-pair argument in the preceding supplier. [step 1.1, construct, algebra, F3, F4, F5]

3.1 The resulting disk is clean with the required fixed collars. All perturbations can be arbitrarily small after a prescribed collared map is fixed, since good parameters are dense in every sufficiently small parameter ball. No positive distance from the sheets is asserted for the entire open disk interior, which accumulates on its boundary in the sheets; only the compact transition annulus uses a positive separation. The codimension-two case would give expected dimension zero and is therefore not proved by this argument. [step 2.1, construct] ∎
