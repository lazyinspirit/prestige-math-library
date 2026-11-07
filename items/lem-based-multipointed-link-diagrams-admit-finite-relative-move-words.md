---
id: lem-based-multipointed-link-diagrams-admit-finite-relative-move-words
kind: lemma
title: Based multipointed link diagrams admit finite relative move words
status: draft
origin: session
deps:
  - lem-relative-sutured-diagrams-have-signed-move-equivalences
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Holomorphic discs and sutured manifolds
      url: https://arxiv.org/abs/math/0601443
proof_strategy: construction
---

## Statement

Fix a smooth oriented link in the three-sphere, finitely many alternating labelled $w,z$ points on every component, and parametrized product collars of its marked meridional sutures. A based multipointed diagram includes complete relative meridian disk systems: cutting either handlebody along its disks gives one ball per bridge, with one actual boundary-parallel bridge in each ball. Two such diagrams encoding the same parametrized based link are connected by a finite word of own-family curve isotopies and handleslides, and ordinary once-cross genus stabilizations and their inverses. All moves avoid the marked-point collars. This assertion uses the same foundational assumptions as relative sutured move generation.

Every slide has a local two-disk model with $(g_{\mathrm{loc}},n_{\mathrm{loc}})=(2,1),(1,2)$, or $(0,3)$, where $n_{\mathrm{loc}}$ counts bridge balls. Its sliding pair of pants has no marks; each $w$ and its actual bridge partner $z$ occupy the same exterior marked face of the auxiliary same-family diagram. The last two models include separating slides.

For an already chosen finite word, a new offcurve packet may be inserted in a sufficiently small disk inside a common old marked-point collar, disjoint from the old point, so that every move fixes it. This assertion concerns a chosen insertion, not an arbitrary preexisting internal packet.

## Statement references

[[lem-relative-sutured-diagrams-have-signed-move-equivalences]]

## Facts & Assumptions

[F1] Relative sutured move generation connects balanced diagrams of the same marked sutured manifold by own-family isotopies, slides and ordinary once-cross genus stabilizations, fixing prescribed boundary and suture product collars: [[lem-relative-sutured-diagrams-have-signed-move-equivalences]]. It does not prescribe arbitrary interior windows.

## Proof

**Given:** The two complete bridge diagrams and the same parametrized based link in the statement, under the foundational assumptions of [F1].

1.1 If component $i$ has $k_i$ marked pairs, put $2k_i$ meridional annular sutures on its exterior boundary torus at the actual marked longitudinal positions, with alternating orientations. Positive and negative complementary regions are annuli. The actual link exterior $M$ is therefore balanced: it has no closed component, every boundary meets the sutures, and both complementary regions have Euler characteristic zero. The fixed tube parametrizations retain the cyclic labels and collars. [given, construct]

1.2 Remove all marked disks from each Heegaard surface and drill the actual boundary-parallel bridges from its handlebodies. Compressing the punctured surface along either complete disk system gives one annulus per bridge: cutting first gives the stipulated bridge balls, and drilling the one bridge from a ball gives the corresponding annular negative boundary. Gluing the two drilled sides recovers exactly $M$ with the sutures of step 1.1. Both diagrams therefore encode the same marked sutured manifold, not merely an unlabelled homeomorphism type. [given, step 1.1, construct]

1.3 Apply [F1] and cap its puncture circles back by the original labelled disks. Relative moves become based-link moves away from the marked collars; ordinary genus stabilization introduces a once-cross pair in an unmarked disk. The word is finite and never changes or permutes marks. For finitely many prescribed regular movie interfaces this gives finitely many such words, one for each actual based link at that interface. [F1, step 1.2, construct]

1.4 For a slide of two disks, cut the handlebody along all other disks, and then along those two too. Completeness gives marked bridge balls. Reglue only the two selected one-handles. Since the slide band avoids the other disks, both handles lie in one connected component. Its graph has two edges and $r$ vertices, where $1\le r\le3$. Its genus is $3-r$, it contains $r$ bridge balls, and its relative disk rank is $(3-r)+r-1=2$. These are exactly the three local models asserted. This reasoning includes dependent nonseparating disks as well as separating disks; individual nonseparation is not used to assert a genus-two model. [given, construct, algebra]

1.5 The slide band and a pair-of-pants neighborhood of its two curves may be chosen disjoint from the bridge disks and marked collars in this cutball description. Each actual bridge connects its $w,z$ endpoints outside that neighborhood. Small auxiliary translates can be chosen without crossing those bridges, so the partners remain in one auxiliary exterior face. Splitting an exterior vertex of the two-loop graph by cutting an exterior handle produces first the two-vertex one-cycle graph and then the three-vertex tree graph. Only the exterior face identifications change; the sliding pair of pants and its internal slit do not. Thus the mixed and planar marked models are obtained by capping exterior handle feet, without identifying a separating circle with a handle meridian. [step 1.4, construct]

1.6 The finitely many compact move supports avoid the prescribed old marked collars. Choose a smaller disk in one such collar disjoint from its marked point, and insert the new offcurve packet there using collar coordinates. Choose its attaching point in that disk and retained paths outside a smaller packet disk. Every word support is disjoint from the packet. This chooses new local data after the word is fixed; it does not move a previously specified newborn component through other components or bands. Together with steps 1.3 and 1.5 this proves all assertions. [step 1.3, step 1.5, construct] ∎
