---
id: lem-balanced-attaching-cuts-admit-round-component-complex-models
kind: lemma
title: "Balanced attaching cuts admit round-component complex models"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-finite-planar-hole-boundary-maps-extend-with-prescribed-collars, lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes, thm-fundamental-theorem-on-flows, thm-euclidean-inverse-function-theorem, thm-holomorphic-implicit-function-theorem]
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks, link invariants and the multi-variable Alexander polynomial"
      url: "https://arxiv.org/abs/math/0512286"
      locator: "Multipointed attaching-component geometry; the actual round-component complex atlas with prescribed crossing collars is constructed locally below"
---

## Statement

Assume Countable Choice. Let $U$ be a connected oriented smooth handlebody with connected boundary $\Sigma$ of genus $h$, and let $m=h+k-1>0$ disjoint proper compression disks cut it into $k$ actual smooth balls. Write $\gamma_1,\ldots,\gamma_m$ for their boundary circles. Let $\beta$ be a finite disjoint union of smooth circles transverse to the $\gamma_i$.

There is an orientation-compatible Riemann surface structure $j$ on the actual $\Sigma$ such that each component of its surface cut along the $\gamma_i$ is conformally an explicit Riemann sphere with finitely many pairwise disjoint round disk interiors removed. This conformal identification is smooth up to every boundary circle. Each $\gamma$–$\beta$ crossing has a $j$-holomorphic coordinate in which those two arcs are precisely the real and imaginary lines. The finitely many crossing charts can have disjoint closures.

Consequently every transverse product-torus generator in $\operatorname{Sym}^m(\Sigma)$ has an actual standard product-integrable chart with $T_\gamma=\mathbb R^m$ and $T_\beta=i\mathbb R^m$ locally. In particular a specified generator has a standard complex chart flattening $T_\gamma$ without changing the standard symmetric-product structure there.

This is an auxiliary complex-model construction for the full balanced disk count geometry. It asserts no antiholomorphic involution, additional real ovals, disk emptiness, boundary index or count, transversality or invariance.

## Statement references

[[def-countable-choice]]

[[lem-finite-planar-hole-boundary-maps-extend-with-prescribed-collars]]

## Facts & Assumptions

**Given:** The actual complete cut into the finitely many smooth balls, their disk faces, and the disjoint transverse curve system. A smooth ball is supplied with existence of a diffeomorphism to the standard ball; only finitely many such parametrizations are selected.

[F1] [[lem-finite-planar-hole-boundary-maps-extend-with-prescribed-collars]] gives a diffeomorphism between actual finite planar smooth disk-with-holes regions with all prescribed consistently oriented boundary maps and inward collar germs.

[F2] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] supplies finite bump localization near a compact set. [[thm-fundamental-theorem-on-flows]] and [[thm-euclidean-inverse-function-theorem]] give a smooth signed collar from a transverse vector field and the local graph of a transverse curve. [[thm-holomorphic-implicit-function-theorem]] gives the simple-root inverse in the symmetric-product chart.

## Proof

1.1 Parametrize each actual cut ball by the standard ball and its boundary by an oriented sphere. Round its finitely many disk-face corners in their product neighborhoods by a fixed smooth rounded-quadrant profile and transport the face boundaries and their collars through that rounding. The original surface cut along $\gamma$ is thereby a disjoint union of regions $P_a$ in these spheres, each the complement of the interiors of finitely many disjoint smooth disk faces. Pairing faces recovers the original surface. Every $P_a$ has at least one face: the adjacency graph whose vertices are cut balls and whose edges are the original disks is connected because $U$ is connected; if $k>1$ each vertex meets an edge, and if $k=1$ its $m>0$ disks supply faces. Paired rims have orientation-reversing identification maps $g_i$, since they join the two sides of an oriented surface circle. No classification or recognition of a merely embedded sphere as a ball is used. [given, construct]

2.1 Choose disjoint signed source collars around the $\gamma_i$ which straighten the $\beta$ crossings. To construct one, take finitely many oriented circle charts, combine local vectors pointing to the same positive normal side by the finite bump localization in [F2], and flow the resulting smooth transverse field. The tangent and transverse derivatives at time zero are independent. [F2], compactness and the local inverse give a common collar width and injectivity: any collision sequence at widths tending to zero has a common limiting circle point and contradicts that inverse. In its angular coordinate $s$ and signed normal coordinate $t$, the finitely many transverse $\beta$ arcs are graphs $s=s_j(t)$. With cutoffs $\chi_j$ in disjoint small angular intervals about their distinct crossings, change the collar by $$ (s,t)\longmapsto\left(s+\sum_j\chi_j(s)(s_j(t)-s_j(0)),t\right).$$ Its angular derivative tends uniformly to one as $t\to0$, so it is a collar diffeomorphism after shrinking. It makes those actual arcs have constant $s=s_j(0)$ on both sides of the circle. Each paired face of the cut surface now has the induced inward collar, with the same underlying circle point and opposite signed normal parameters. [F2, step 1.1, construct, algebra]

3.1 For each $P_a$ take a separate standard Riemann sphere and choose one small round closed disk for each of its faces, with all disks disjoint. Their complement is $P'_a$. For each original disk pair choose a plus and a minus face, possibly in the same sphere, with target disk centers $a_i^+,a_i^-$ and radii $r_i^+,r_i^-$. Pair their rims by the map $H_i$ defined by $$a_i^++r_i^+e^{-ix}\longmapsto a_i^-+r_i^-e^{ix}.$$ It reverses the boundary orientations of the cut surfaces. Choose an orientation-preserving map $b_i^+$ from the source plus rim to its target rim, and define $b_i^-=H_i b_i^+ g_i^{-1}$ on the minus rim; this too preserves boundary orientation. Prescribe the target inward collars $$c_i^+(x,t)=a_i^++r_i^+e^t e^{-ix},\qquad c_i^-(x,t)=a_i^-+r_i^-e^t e^{ix},\qquad t\ge0.$$ Apply [F1] on each component to realize all its assigned maps and collar germs. Indeed a stereographic pole in any one face turns its complement into the bounded outer smooth Jordan region, with the remaining faces its disk holes; do the same in the corresponding target face. Thus this is exactly the planar hypothesis of [F1]. It gives diffeomorphisms $B_a:P_a\to P'_a$, with every paired-rim and collar assignment compatible. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Glue the target rims by the $H_i$. On the complement of the seams keep the standard sphere complex charts. Across the $i$th seam use the local logarithmic branches $$w_+(z)=i\log((z-a_i^+)/r_i^+),\qquad w_-(z)=-i\log((z-a_i^-)/r_i^-).$$ They take the two inward collars to $x+it$ and $x-it$ and agree on the identified rim. They therefore form one chart across it. Changes of a logarithm branch are real translations by multiples of $2\pi$, so the seam transitions are holomorphic; transitions to an interior sphere chart are the displayed holomorphic functions. Distinct seam neighborhoods can be disjoint. The resulting quotient is a compact Hausdorff smooth surface: signed collar disks give its neighborhoods at seams, and compact separation in the finite cut surfaces separates any other pair of nonidentified points. The maps $B_a$ glue to a smooth diffeomorphism from the original $\Sigma$: their collar formulas identify a source signed collar $(p,t)$ with $$w=x(b_i^+(p))+it,$$ so smoothness and smooth inverse hold across every seam as well as off them. Pull back these actual holomorphic charts to define $j$. Its orientation agrees with that of $\Sigma$, since all $B_a$ preserve orientations and the two signed half-collars have the given orientation. On the cut surface its charts restrict exactly to those of $P'_a$, proving the asserted smooth-up-to-boundary conformal identification. In particular integrability is established by written-out holomorphic transitions, not by an unproved isothermal-coordinate theorem. [F1, step 2.1, step 3.1, construct, algebra]

5.1 At a crossing the source collar in step2.1 has constant $p$ on the $\beta$ arc, so the holomorphic chart in step4.1 is horizontal on $\gamma$ and vertical on $\beta$. Translate their crossing to zero. Shrinking around the finitely many crossings gives disjoint closed charts meeting no other arcs of the same disjoint systems. A product-torus generator has distinct entries on its different $\gamma_i$. Its product of these disjoint crossing disks is an ordered-root coordinate neighborhood for the symmetric product; simple-root holomorphic inversion in [F2] verifies the local inverse. Thus the actual standard symmetric-product structure, with no target modification, has the two tori as $\mathbb R^m$ and $i\mathbb R^m$ in that chart. This proves the full balanced auxiliary model for $m=h+k-1$. No reflection involution on the whole glued surface is asserted: the independently paired boundary reflections need not form one global map. The conclusion supplies no disk index, count or emptiness statement. All face, chart, collar and extension choices are finite in addition to the stated Countable Choice suppliers. [F2, step 2.1, step 4.1, construct] ∎
