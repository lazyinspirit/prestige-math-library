---
id: lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family
kind: lemma
title: "A saddle polycycle has a smooth transverse family on either adjacent annulus"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-c2-inverses-and-scalar-return-roots, def-regular-foliation-atlas, def-flat-chart-for-a-distribution, def-plaque-of-a-flat-chart, def-countable-choice-principle-for-foliation-pair, lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity, lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary, def-map-transverse-to-a-regular-foliation, lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 8
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "André Haefliger, Variétés feuilletées, Annali della Scuola Normale Superiore di Pisa, 3e série, 16 (1962), no. 4, 367–397 (complete Numdam scan)"
      url: "https://www.numdam.org/item/ASNSP_1962_3_16_4_367_0.pdf"
      locator: "§4.2, Proposition 4.2, printed pp. 390–392 (saddle polycycle and one-sided return germ); the plaquewise smoothing and transverse collar are supplied locally here"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $P$ be a finite
saddle-separatrix circuit in a generic characteristic disk map, and choose an
adjacent period annulus following its finite circuit itinerary. Then there is a
$C^2$ immersed representative of $P$ in its ambient leaf and a jointly $C^2$
family $H_s$, ending at that representative, such that every loop $H_s$ lies in
a single leaf and every point track $s\mapsto H_s(\theta)$ is transverse to
$F$. For each positive $s$ the loop $H_s$ is leafwise freely homotopic to the
prescribed nearby characteristic level loop, by tracked plaque replacements, keeping the selected regularized port collars fixed during saddle replacement. The construction applies separately to
either adjacent annulus. No $C^2$ convergence of the unmodified hyperbolic
parametrizations through the saddle corners is asserted.

## Facts & Assumptions

**Given:** A generic characteristic disk map with a finite saddle-separatrix circuit $P$, an adjacent period annulus with its finite itinerary, and the regular port sections of the itinerary.

[F1] In the generic characteristic disk, a local transverse function $u=z\circ h$ is $C^2$, and the characteristic covector is a nowhere-zero scalar multiple of $du$; hence $du\neq0$ at every regular point and its level arcs are the characteristic trajectories ([[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]], [[def-regular-foliation-atlas]]).

[F2] A $C^2$ scalar equation with nonzero derivative in its unknown has a unique local $C^2$ root; a $C^2$ map with invertible derivative has a $C^2$ local inverse ([[lem-c2-inverses-and-scalar-return-roots]]).

[F3] In a flat chart the plaques are the connected components of the level sets of the transverse coordinate; the transition between two charts is $(x',t')=(g(x,t),h(t))$ with $g,h$ of class $C^2$, and finite compatible $C^2$ pieces glue to a $C^2$ map ([[def-flat-chart-for-a-distribution]], [[def-plaque-of-a-flat-chart]], [[lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity]], [[def-regular-foliation-atlas]]).

[F4] A map is transverse to $F$ when its differential together with the leaf tangent distribution spans the ambient tangent space at every point; a curve is positively transverse when its derivative has a nonzero component in the positive transverse direction ([[def-map-transverse-to-a-regular-foliation]]).

[F5] The characteristic singularities are nondegenerate centers and saddles and admit the four-sector hyperbolic picture at every saddle ([[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]]).

[F6] The standing hypothesis is Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 **Regular ports for the chosen circuit.** The circuit and its itinerary have finitely many edge and saddle-passage occurrences by hypothesis, including repetitions. Trim each occurrence at regular points close to its saddle endpoints, choosing the whole intervening source saddle passage in the preimage of one convex target foliation box. At a regular port choose a short $C^2$ source segment $\sigma(\xi)$ transverse to the characteristic direction. By [F1], $(u\circ\sigma)'\neq0$ there, so [F2] gives a $C^2$ port point $\xi(t)$ for each nearby transverse label $t$, including the limiting label. The target port trace $h(\sigma(\xi(t)))$ is $C^2$ and transverse to $F$ because its target transverse coordinate is $t$. [given, F1, F2, F5, construct]

2.1 **Regular strips without a maximal-center hypothesis.** Cover each compact trimmed edge by finitely many source rectangles $(v,u)$ supplied by [F1] and [F2], and use $v$ to parameterize its regular level arcs. Consecutive rectangles overlap along a compact regular arc. In one common inverse-coordinate rectangle keep the level label fixed and interpolate the two longitudinal parameters with a fixed source cutoff on the overlap, agreeing with the respective parameters near its ends. At level zero choose the same reference longitudinal parameter; its derivative is nonzero, so after shrinking the level interval the interpolated derivative retains its sign. These finite interpolations produce $C^2$ level strips and exact overlap collars down to the limiting edge. Composing with $h$ gives compatible ambient $C^2$ strips and collars, even if their ambient longitudinal tangents vanish. All transverse labels on successive strips differ by the $C^2$ local diffeomorphisms of [F3]. [F1, F2, F3, step 1.1, construct]

3.1 **One parameter and closed levels.** In each chosen saddle box the incoming and outgoing ports of the prescribed passage have the same target transverse label, since the characteristic passage lies in one plaque. Their labels therefore match by a $C^2$ local diffeomorphism down to the limiting level, without claiming a regular source strip through the saddle. Compose these transitions and the regular-strip transitions around the finite itinerary to obtain one $C^2$ return map $R$ at a base port. The chosen adjacent period annulus following this itinerary supplies closed characteristic loops for every sufficiently small port parameter on its chosen side: that is the local side of the annulus at this regular port. Each such loop returns to the same point, so $R(t)=t$ on that one-sided interval, also at its limiting endpoint by continuity. Transport its base parameter through the finite transitions. Their derivatives are nonzero, so this gives compatible $C^2$ transverse parameters for all strips and passages and closes the final collar exactly. These conclusions use the given annulus, with no maximal-center or outer-frontier assumption. [given, F1, F2, F3, step 1.1, step 2.1, construct]

4.1 **Regularize the ambient edges.** The limiting images form a continuous loop in one intrinsic leaf: each compact edge segment and each passage lies in a finite chain of plaques, with matching endpoints. Their ambient images need not initially be immersed. Before fixing the ambient port collars, regularize the limiting ambient leafwise loop by finitely many plaque-coordinate chord and corner replacements, as in [[lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative]], steps 1.1–3.1. The same replacements are made at each nearby transverse level, keeping the transverse coordinate fixed; on overlaps use a common plaque coordinate and fixed source cutoffs. At level zero the resulting reference edge tangents are nonzero, so after one common shrink they stay nonzero at every nearby level. Record these as the regularized edge strips and port collars. The initial replacements themselves are tracked leafwise homotopies. Thus no immersion of the original disk map along characteristic edges has been assumed. [F3, step 1.1, step 2.1, step 3.1, construct]

5.1 In a single target foliation box at a saddle, write the incoming and outgoing regularized collars as $(Y_-(\theta,t),t)$ and $(Y_+(\theta,t),t)$, using the transported transverse label of step 3.1. Choose a regular C² plaque joining path E that agrees exactly with $Y_-(\theta,0)$ and $Y_+(\theta,0)$ on their smaller end collars. One may build it by finite nonconstant polygonal segments and rounded nonopposite corners in the two-dimensional convex plaque disk, inserting a small detour if required. With disjoint end cutoffs $\chi_-,\chi_+$ equal to one on those smaller collars, put $A(\theta,t)=(E(\theta)+\chi_-(\theta)(Y_-(\theta,t)-Y_-(\theta,0))+\chi_+(\theta)(Y_+(\theta,t)-Y_+(\theta,0)),t)$. All interpolation occurs in the leaf coordinates. Hence every slice lies in its plaque and every track has transverse derivative one, including where both cutoffs vanish. At t=0 the tangent is E′≠0, so the family is immersed after a common shrink. It agrees exactly with the two collar families at the ends. [F3, F4, step 3.1, step 4.1, construct]

6.1 Leafwise homotopy of a passage. On the plaque disk the patch $A(\cdot,t)$ is joined to the original saddle passage by convex interpolation in the plaque coordinates: at each $\theta$ the interpolation stays in the convex disk, and for fixed $t$ it lies in the leaf of level $t$; hence $A(\cdot,t)$ is leafwise freely homotopic to the original passage relative to the two smaller port collars, for every small $t$. [step 5.1, F3]

7.1 The rounded limit loop. Assemble the finitely many regular edge strips of the frontier edges with the finitely many joining paths $E$ of their passages; this is a compact closed curve that is regular on each piece and may have corners at the junctions. Replace it, inside the finitely many plaque disks of the junctions and of the port collars, by a finite polygonal path with nonzero edges and then round the finitely many resulting corners so that adjacent directed edges are not opposite, each replacement keeping the common port collars fixed. The result is a $C^2$ immersed closed curve $H_0$ in the frontier leaf, and each replacement is leafwise homotopic to the identity relative to the port collars, so $H_0$ is a $C^2$ immersed representative of $P$ in its ambient leaf. [step 4.1, step 6.1, F3]

8.1 The family for positive levels. Apply the same two operations — the passage patch of step 5.1 and the corner roundings of step 7.1 — to every prescribed level loop of the adjacent annulus in its own plaque coordinates: replace each saddle passage by $A(\cdot,t)$ and round the same finitely many corners. By steps 1.1–3.1 every ingredient depends jointly $C^2$ on $(\theta,t)$ down to $t=0$, and the corner roundings are applied through the $C^2$ plaque coordinates supplied by the strips; hence the resulting maps $H_t$ form a jointly $C^2$ family on $S^1\times[0,\varepsilon)$ with $H_t$ closed in the leaf of level $t$, ending at $H_0$ as $t\to0^+$. Every point track is transverse to $F$ because all replacements preserve the nonzero derivative of the transported transverse label, by step 5.1 and [F4]. [step 1.1, step 2.1, step 3.1, step 5.1, step 6.1, step 7.1, F3, F4]

9.1 Homotopy to the prescribed loops. For each $t>0$ the loop $H_t$ is obtained from the prescribed characteristic level loop by finitely many operations, each of which is a leafwise free homotopy relative to the regular port collars: the passage replacement is step 6.1, and the corner roundings are performed inside plaque disks and are homotopic to the identity of the loop there. Composing the finitely many homotopies gives a leafwise free homotopy from the prescribed level loop to $H_t$. [step 6.1, step 8.1]

9.2 Scope of the regularity claim. The $C^2$ assertions of this lemma concern the constructed family, whose corners have been rounded and whose saddle passages have been replaced by the convex patches of step 5.1; the unmodified hyperbolic parametrizations through a saddle corner are not claimed to admit a $C^2$ family, and no $C^2$ convergence of such raw parametrizations is asserted. [step 5.1, step 8.1]

10.1 Either adjacent annulus. Steps 1.1–3.1 construct the port and strip data from the chosen annulus and its actual itinerary on either side. If an adjacent period annulus exists on the other side, choose its base parameter positive toward that annulus and repeat the construction for its itinerary. No existence of a second annulus is asserted. [given, step 1.1, step 2.1, step 3.1, step 8.1, step 9.1]

11.1 The construction selected finitely many charts, passages, corners, cutoffs and intervals; no choice beyond the standing hypothesis [F6] is used. [step 9.1, step 10.1, F6] ∎
