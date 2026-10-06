---
id: lem-a-primitive-pi-torus-collar-has-contracting-longitude-and-exhausting-plane-caps
kind: lemma
title: "A primitive pi torus collar has contracting longitude and exhausting plane caps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice-principle-for-foliation-pair, lem-a-nonzero-pi-class-on-a-torus-has-a-primitive-embedded-pi-root, lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph, lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band, lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups, def-two-dimensional-torus]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 14
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (complete English translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a78, Theorem 8.2 and its proof, printed pp. 27-28; finite collar suspension supplied locally"
    - title: "Mark Brittenham, Foliations and the Topology of 3-Manifolds, classes 11-20"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Classes 12-13; nested disk exhaustion supplied explicitly"
---

## Statement

On the original Π torus, choose its primitive Π meridian β and a complementary longitude λ. Its one-sided longitude holonomy can be chosen strictly contracting. The collar longitude annuli grow the actual meridian caps, and their iterates exhaust each nearby leaf as a plane with limit set exactly the original torus. The limit set means ambient limits of sequences escaping every intrinsic compact subset of the leaf, equivalently the intersection of closures of tails of a cofinal compact exhaustion.

## Facts & Assumptions

**Given:** The original Π torus leaf $L$ of the present foliation with its primitive $\Pi$ meridian $\beta$ and a complementary longitude $\lambda$, and the one-sided longitude holonomy $H$ on a common small transversal.

[F1] The in-pair item [[lem-a-nonzero-pi-class-on-a-torus-has-a-primitive-embedded-pi-root]] gives the primitive embedded $\Pi$ meridian $\beta$ with identity one-sided holonomy and the embedded fence annulus with embedded disks bounded by each positive boundary; the in-pair item [[lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band]] supplies the coherent regular cap development from the reference fibre.

[F2] The in-pair item [[lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph]] supplies the finite-generator graph lemma: a compact nearby leaf through a sufficiently small base parameter of a compact leaf is a one-sheeted collar graph, preserving essential transported loops; the sibling-pair item `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supplies the surface-Jordan disk and the complement of a torus in the oriented surface, and [[def-two-dimensional-torus]] fixes the torus model.

[F3] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



## Proof

**Proof technique:** direct.

1.1 The meridian $\beta$ has identity one-sided holonomy by [F1]. Suppose $H(t)=t$ at a sufficiently small positive $t$. Both generators $\beta,\lambda$ then fix $t$. Construct the nearby graph directly: cut $L$ along these generators, continue the plaque through $t$ along a finite tree of paths to a finite chart cover of the cut polygon, and shrink the base interval once so the finitely many transports and overlap homotopies are defined. Each overlap difference is a word in the two generators; holonomy invariance identifies its transverse transport with that word, which fixes $t$. Thus the local plaque sections agree, including across the polygon edges. They give a compact $C^2$ graph over $L$, contained in the leaf through $t$. Its inclusion is locally open in that intrinsic leaf and its image is intrinsically compact, hence closed; connectedness makes the graph the whole leaf. Collar projection would make its transported meridian essential, contradicting the nullness supplied by [F1]. This existence argument is separate from [F2]'s assertion about leaves already known compact. Hence $H$ has no positive fixed point on one small connected interval. Replacing $\lambda$ by its inverse if necessary gives $0<H(t)<t$; its iterates decrease to zero, since any positive limit would be a fixed point. [F1, F2, given, construct]

1.2 Finite plaque transport over a cut fundamental polygon of the torus gives the actual collar suspension: $\beta$ identifies the meridian edges without transverse change and $\lambda$ identifies the longitude edges by $H$; the construction uses finitely many compact chart relations, all valid after one common shrink. For each $t$ the longitude circuit thickened by the meridian coordinate gives an embedded leafwise annulus $A_t$ from $\beta_t$ to $\beta_{H(t)}$, whose base projection travels once over the complementary torus annulus. Two disjoint embedded null circles in a nonspherical oriented leaf joined by an annulus have nested Jordan disks whose difference is that annulus: otherwise the two disks and the annulus would form an open-and-closed sphere leaf. [F1, F2]

2.1 The nesting direction is locally constant in $t$ by compact cap transport and the disjointness of the boundary circles. It cannot be shrinking: if the disk of $\beta_{H(t)}$ lay inside the disk of $\beta_t$, iteration would place every $\beta_{H^n(t)}$ inside the compact disk of $\beta_t$, but these circles approach the original torus, which is disjoint from that disk, contradicting the positive ambient distance between the two compact sets. Hence the disk relation is $D_{H(t)}=D_t\cup A_t$ for every small $t$. [F1, F2, step 1.2]

3.1 The union of the increasing disks $D_{H^n(t)}$ is the entire nearby leaf: given any point of that leaf, join it to a point of $D_t$ by a compact intrinsic path; its ambient image is compact and disjoint from the original compact torus, hence has positive distance from it, while the late boundary circles $\beta_{H^n(t)}$ lie arbitrarily close to the torus and avoid that path, so the path cannot leave the late disk and its endpoint belongs to the union. An increasing union of disks with each compactly inside the next is a plane: choose successive disk and annulus homeomorphisms to concentric disks of radii $n$ and glue them, the exact differences $A_{H^n(t)}$ providing the annuli. These annuli lie in collar heights tending uniformly to zero, so they have no limit points away from the original torus, while every point of the torus is approached because their meridian and longitude base projections cover the whole torus; the compact initial disk contributes no intrinsic end-limit points. Thus the leaf limit set is exactly the original torus. The limit-set convention is independent of the chosen exhaustion: any intrinsic compact subset is contained in a sufficiently late disk because the disks form an increasing open cover and compactness selects finitely many whose maximum contains it; intersecting closed exhaustion tails and the escaping-sequence definition agree in the compact metric ambient space by choosing one point from each shrinking rational neighbourhood and tail, using the standing countable choice of [F3]. [F1, F2, F3, step 2.1] ∎
