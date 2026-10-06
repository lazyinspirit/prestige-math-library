---
id: def-handle-slide-of-one-k-handle-over-another
kind: definition
title: "Handle slide of one k handle over another"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps: [lem-embedded-bands-joining-two-framed-spheres-exist, def-attaching-a-smooth-handle-with-corner-rounding, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-smooth-embedding, def-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Theorem 5.4.5 and its proof, §5.4, printed pp. 147-148, with Figure 5.9 (deforming the attaching embedding across the other handle's core disc, case r = 1)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Ch. 1 §1.1, printed pp. 4-7 (isotopy and diffeomorphism lemmas for attaching data)"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a compact smooth $n$-manifold with collared boundary, let $M\subseteq\partial_+W$ be a connected boundary region, and let $h_1,h_2$ be $k$-handles attached to $M$ by embeddings $f_1,f_2$ with disjoint images, where $1\le k\le n-2$. A **slide of $h_1$ over $h_2$** is determined by a band datum: points $x_i$ in the attaching spheres $f_i(S^{k-1}\times\{0\})$, trivializations of the normal bundles of the attaching spheres near $x_i$ compatible with the framings of $f_i$, and an embedded band $\beta$ whose rank-$(n-k-1)$ normal framing matches the sphere framings after quotienting out the transverse band direction, as supplied by the band lemma. The datum also includes the full framing gluing convention described below; quotient compatibility alone is insufficient. The slid handle $h_1'$ is the $k$-handle attached to $M$ by the embedding $f_1'$ whose core sphere is obtained from $f_1(S^{k-1}\times\{0\})\setminus\operatorname{int}\beta_0$ and from $f_2(S^{k-1}\times\{0\})\setminus\operatorname{int}\beta_1$ pushed off along the band framing, where $\beta_0,\beta_1$ are the two end discs, together with the side $\partial D^{k-1}\times I$ of the band, smoothed along the gluing circles; the framing of $f_1'$ is built from the framing of $f_1$, the signed framing of the parallel copy of $f_2$, and the band framing, and extends to an embedding of the attaching region. Equivalently, in the band-sum picture, the attaching sphere of $h_1'$ is the connected sum of the attaching sphere of $h_1$ with a signed framed parallel copy of the attaching sphere of $h_2$ along the band, so that the slid attachment is disjoint from the attachment of $h_2$. Different band data may give different slides; all of them are called slides of $h_1$ over $h_2$. For $k=1$ the general formula is read in the $0$-dimensional sense: the band is an arc joining a point of the first attaching $0$-sphere to a framed parallel point of the second, and the slid attaching $0$-sphere is obtained from the first by replacing that point with a parallel copy of the other point of the second attaching $0$-sphere.

For $k\ge2$, write the old ordered normal framings as $(v_{i1},\ldots,v_{iq})$, $q=n-k$, choosing the first normal line to be the transverse band line at each end. The band framing matches the classes of $(v_{i2},\ldots,v_{iq})$. Round the seams in the two-dimensional plane formed by the end disk's radial direction and the transverse band direction. The first normal to the rounded sphere is the complementary normal in this plane; choose its sign to match $v_{11}$ on the first sphere. At the other end it agrees with $\sigma v_{21}$ for a uniquely determined $\sigma\in\{1,-1\}$. Use $(\sigma v_{21},v_{22},\ldots,v_{2q})$ on the entire parallel copy of the second sphere. Equivalently, when $\sigma=-1$, precompose its normal disk coordinate with $(z_1,z_2,\ldots,z_q)\mapsto(-z_1,z_2,\ldots,z_q)$. This reflection concerns the copy used in the band sum; the retained handle $h_2$ keeps its original attaching embedding. Require these full ordered frames to glue across the rounded seams, rather than requiring agreement with both unreflected old frames. In an oriented boundary, this is the usual condition that the orientations induced on the two removed end disks by the framed spheres and the band have opposite boundary-gluing signs. Both addition and subtraction are allowed by the choice of band-end coordinates and this sign convention.

The seam rotation in the indicated plane, together with the remaining band normal vectors, gives a full framing agreeing with the first old framing and the signed second-copy framing. A sufficiently thin normal thickening is then an attaching embedding; take the parallel copy outside the retained attaching region and the thickening small enough to be disjoint from it. For $k=1$, use the full normal framing transported when the chosen foot is pushed along the band and across the parallel interval core of $h_2$ to its other foot; this fixes the analogous sign convention without using a positive-dimensional seam. The band lemma supplies the embedded band and its quotient framing, while the full-frame convention supplies the additional gluing data. No uniqueness of the slide is asserted. Countable Choice is inherited through the band-existence and smooth-attachment conventions.
