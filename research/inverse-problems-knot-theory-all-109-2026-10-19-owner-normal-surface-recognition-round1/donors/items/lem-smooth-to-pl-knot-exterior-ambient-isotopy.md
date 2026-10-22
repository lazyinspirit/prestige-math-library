---
id: lem-smooth-to-pl-knot-exterior-ambient-isotopy
kind: lemma
title: "Smooth-to-piecewise-linear knot exterior approximation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-countable-choice
  - thm-isotopy-extension
  - def-regular-oriented-link-diagram
  - def-planar-diagram-gauss-and-dowker-codes
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999)"
      url: "https://www.math.ucdavis.edu/~hass/Research/Papers/Complexity/hlp.pdf"
      locator: "§§4–8; complete relevant passages on knot exteriors, normal coordinates, finite bounds, triangulations and unknot searches."
    - title: "Jeff Erickson, Normal Surfaces and Knots, Computational Topology lecture notes (2009)"
      url: "https://jeffe.cs.illinois.edu/teaching/comptop/2009/notes/normal-surfaces.pdf"
      locator: "§§14.1–14.4, complete six-page notes on normal disks, matching, normal surfaces and knots."
---

## Statement

Assume countable choice. Let $K:S^1\to S^3$ be a smooth oriented knot with a supplied product tubular embedding $\Phi:S^1\times D^2_{2\epsilon}\to S^3$. There is a polygonal knot $P$ inside this tube and a smooth rounding $K'$ of $P$ such that $K'$ is smoothly ambient isotopic to $K$ by an isotopy supported in the tube. If $K$ is supplied with a finite regular projection diagram $D$, the polygonal approximation and rounding can be chosen to have the same crossing code as $D$. A homeomorphism supported in the larger tube carries $P$ to $K'$, preserves the boundary torus of the radius-$\epsilon$ tube, and sends each marked fibre meridian to itself up to orientation. Conversely, every polygonal knot $P$ with a finite product regular neighborhood can be rounded in pairwise disjoint vertex balls to a smooth knot $P^\sharp$; a homeomorphism supported in those balls carries its compact exterior and marked meridian to those of $P^\sharp$. If a regular projection diagram is supplied, the rounding balls can be chosen away from crossing charts, so the crossing code is unchanged. These clauses compare smooth knot type through smooth knots and polygonal exterior models through homeomorphisms; they do not treat a nonsmooth polygonal curve as a smooth isotopy slice.

## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy]] — smooth knots and smooth ambient isotopy.

[[def-knot-exterior]] — the supplied product tube and compact exterior convention.

[[def-knot-meridian-and-preferred-longitude]] — fibre meridian and peripheral marking.

[[thm-isotopy-extension]] — extension of the constructed smooth knot isotopy with support in the supplied tube.

[[def-regular-oriented-link-diagram]] and [[def-planar-diagram-gauss-and-dowker-codes]] — regular projection and finite crossing-code conventions preserved by the approximation.

## Facts & Assumptions

**Given:** Countable choice, a smooth oriented knot $K$, its supplied product tube, and optionally a finite regular projection diagram $D$.

[F1] [[def-oriented-link-in-s-three-and-ambient-isotopy]]: $K$ is a smooth embedding of $S^1$; smooth ambient isotopy is a path of ambient diffeomorphisms carrying the embedding at every time.

[F2] [[def-knot-exterior]]: the chosen tube defines a compact exterior and boundary torus.

[F3] [[def-knot-meridian-and-preferred-longitude]]: a fibre circle of the normal disk tube is the marked meridian; an ambient map of the product tube transports this peripheral class.

[A1] $\mathrm{AC}_\omega$ is used through the existing smooth isotopy extension theorem; all partitions, approximations and local disk maps below use only finite constructions.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ supplies the cutoff data in the smooth isotopy extension theorem.

[F5] [[thm-isotopy-extension]]: under $\mathrm{AC}_\omega$, a smooth isotopy of a compact source embedding whose track lies in an open set extends to a smooth ambient isotopy supported in that open set.

[F6] [[def-regular-oriented-link-diagram]] and [[def-planar-diagram-gauss-and-dowker-codes]]: a finite regular diagram has finitely many transverse crossings, disjoint small crossing disks, and compact arc portions separated away from those disks; its crossing code records the local incidence and over/under order.

## Proof

1.1 Choose a point outside the compact tube image and use its stereographic chart to place that entire tube in $\mathbb R^3$. Reparameterize $K$ by arclength on the circle. The tubular projection to $K$ is smooth and has derivative equal to the identity along $K$. Compactness of $K$ and continuity of this derivative give a uniform $\delta>0$ such that every chord joining $K(s)$ to $K(s+h)$, with $0<h<\delta$, lies in the tube and has strictly increasing tubular projection from $s$ to $s+h$. Indeed, the chord direction divided by $h$ converges uniformly to $K'(s)$ as $h\to0$, and the differential of the projection converges uniformly to its value on the tangent. Choose a uniform finite partition of the parameter circle with mesh less than $\delta$ and join successive samples by these chords. Strict increase of the projection on each chord makes their union an embedded polygonal circle $P$ and makes its projection to $K$ a homeomorphism. If $D$ is supplied, its finitely many disjoint crossing disks and separated compact arc portions from [F6] give positive margins away from the transverse crossing neighborhoods; choose the mesh still finer so each polygonal strand stays within those margins and remains transverse with the same over/under height order in each crossing disk. Thus no new crossing occurs off those disks and exactly the declared crossing occurs in each disk. [given, F1, F6, construct]

1.2 In tube coordinates $P$ is the graph of a continuous, piecewise-smooth normal section $u:S^1\to D^2_{\epsilon/4}$. Smooth each of its finitely many corners inside pairwise disjoint short parameter intervals, leaving the section unchanged outside those intervals, to obtain a smooth section $q$ uniformly close to $u$. The graph $K'(s)=\Phi(s,q(s))$ is a smooth embedding because its first coordinate is $s$. The family $K_t(s)=\Phi(s,tq(s))$ consists of embeddings for the same reason, starts at $K$, ends at $K'$, and stays inside the supplied tube. [step 1.1, F1, construct]

2.1 Apply [F5] to the smooth isotopy $K_t$ with an open support neighborhood whose closure lies inside the radius-$2\epsilon$ tube. It gives an ambient smooth isotopy supported there carrying $K$ to $K'$. Its time-one diffeomorphism transports the chosen tube and its fibre meridians. This is the only use of $\mathrm{AC}_\omega$ in the argument. [A1, F2, F3, F4, F5, step 1.2]

2.2 The two sections $u$ and $q$ lie in the interior quarter-disk. In each fibre disk, rescale to the unit disk and use the orientation-preserving disk automorphisms $M_a(z)=(z-a)/(1-\overline a z)$: the map $M_{q(s)}^{-1}\circ M_{u(s)}$ sends $u(s)$ to $q(s)$. These maps depend continuously on $s$ and send each boundary circle to itself. On the outer radial collar between radii $\epsilon$ and $2\epsilon$, lift each boundary-circle map to an increasing angle function $h_s(\theta)$ close to $\theta$ and interpolate it linearly with $\theta$ as the radius increases; convex combinations of increasing lifts remain increasing. The resulting fibre maps agree at radius $\epsilon$, are the identity at radius $2\epsilon$, and are homeomorphisms on every fibre. Their union, extended by the identity outside the larger tube, is a homeomorphism of $S^3$ carrying $P$ to $K'$. It preserves the radius-$\epsilon$ boundary torus and each fibre circle as a set, so it transports the marked meridian and identifies the compact exteriors. [given, F2, F3, step 1.1, step 1.2, construct]

3.1 For a polygonal knot $P$, choose pairwise disjoint small balls around its finitely many vertices, disjoint from the marked meridian point and any crossing charts. In each ball the knot is a single embedded polygonal arc with two straight end segments. Choose a linear coordinate along which both segments project monotonically; then the arc is the graph of a piecewise-linear transverse section over an interval. Smooth that section inside a smaller interval, fixed near its endpoints, to obtain a rounded arc. The changed arcs fit the unchanged edges smoothly, so the resulting $P^\sharp$ is a smooth knot and its diagram code is unchanged when crossing charts are avoided. [given, F1, F3, F6, construct]

3.2 In each such ball, the old and rounded arcs are graphs of two close sections in a product chart. A fibrewise disk homeomorphism taking one section to the other, extended across a collar to be the identity near the ball boundary, gives a homeomorphism supported in the ball. The finitely many disjoint homeomorphisms paste together; they carry the regular neighborhood, exterior, boundary torus and meridian class to those of $P^\sharp$. This proves the converse rounding clause. Combining it with steps 2.1–2.2 proves all stated comparison clauses. [F2, step 2.1, step 2.2, step 3.1, construct] ∎

## Remarks

The PL and smooth maps are kept separate because the library's link definition uses smooth embeddings and diffeomorphisms, while a polygonal curve has corners. Smooth ambient isotopy is asserted only between smooth embeddings; exterior comparison with a polygonal model uses a peripheral-preserving homeomorphism.
