---
id: lem-prime-reduced-alternating-checkerboards-are-essential
kind: lemma
title: "Checkerboards of a diagrammatically prime reduced alternating diagram are essential"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-reduced-alternating-link-diagram
  - def-tait-graph-of-a-link-diagram
  - lem-connected-projection-has-connected-tait-graphs
  - lem-alternating-checkerboard-normal-pairing-is-definite
  - lem-reduced-alternating-diagram-has-finite-diagrammatic-prime-splitting
  - lem-ball-cut-system-suture-graphs-detect-compressing-disks
  - lem-exterior-boundary-compression-gives-one-suture-cap
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the disk system and its ball graphs are constructed from the finite diagram. Only finite graph separation and the supplied ball-cut-system lemma are used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, End-essential spanning surfaces for links in thickened surfaces, Theorem 1.4 and proof, manuscript pp. 3–6"
      url: "https://arxiv.org/pdf/2210.03218v2"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, §2.1, Fact 2.7, manuscript p. 6"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Let $D$ be a connected reduced alternating spherical diagram with at least one crossing. Assume it is diagrammatically prime: every simple closed curve transverse to $D$ in exactly two noncrossing points has a complementary disk containing no crossings. For either checkerboard surface $F$ spanning the represented link $L$, let $N$ be the link exterior cut along $F$, and let $s$ be the union of the core curves of its boundary annuli coming from the boundary tori. Every properly embedded disk $X\subset N$ with $|\partial X\cap s|\le1$ has $\partial X\cap s=\varnothing$ and bounds a disk along its boundary in $\partial N\setminus s$. Consequently $F$ is geometrically incompressible and boundary-incompressible as a properly embedded surface in the link exterior. These assertions apply to both checkerboard colors.

## Statement references

[Kindred, *End-essential spanning surfaces for links in thickened surfaces*, Theorem 1.4](https://arxiv.org/pdf/2210.03218v2)

[Kindred, *A geometric proof of the flyping theorem*, Fact 2.7](https://arxiv.org/pdf/2008.06490v3)

## Facts & Assumptions

**Given:** The finite diagram, its checkerboard coloring and its diagrammatic primeness.

[F1] Reducedness means four distinct regions at every crossing; the Tait graphs have region vertices and crossing edges, and both are connected. ([[def-reduced-alternating-link-diagram]], [[def-tait-graph-of-a-link-diagram]], [[lem-connected-projection-has-connected-tait-graphs]])

[F2] Each checkerboard surface has a finite region-disk and half-twisted-band presentation retracting to its Tait graph. Alternation makes all its signed half-twists have one common incidence sign. ([[lem-alternating-checkerboard-normal-pairing-is-definite]])

[F3] Diagrammatic primeness refers only to the two-point-curve condition in the statement, not to a prior topological prime-factorization theorem. ([[lem-reduced-alternating-diagram-has-finite-diagrammatic-prime-splitting]])

[F4] The ball-cut-system suture-graph lemma excludes one-suture disks and makes zero-suture disk boundaries bound disks in the boundary minus the suture, when every ball graph is connected, loop-free, bridge-free and remains connected after deleting any vertex. ([[lem-ball-cut-system-suture-graphs-detect-compressing-disks]])

[F5] For a geometrically incompressible spanning surface, an exterior boundary-compressing disk yields a one-suture disk in its cut-open exterior. ([[lem-exterior-boundary-compression-gives-one-suture-cap]])

## Proof

1.1 Fix one checkerboard, say black, and write $G_B,G_W$ for the embedded Tait graphs. Their usual spherical embeddings can be constructed inside the regions, joining opposite sectors through each crossing. Recover the projection from $G_W$ by putting a crossing in each edge and joining the neighboring edge ends around each vertex disk in cyclic order; these are exactly the original region sectors and diagram edges. This is its medial description, which does not use alternation. By [F1] both graphs are connected, and neither has a loop, since the opposite sectors at a crossing are distinct regions. Each graph has at least two vertices, because it has an edge and no loop. [given, F1, construct]

2.1 Neither graph has a bridge. For example let $e$ be a white Tait edge at a crossing $c$, with endpoints the two white regions there. Choose one adjacent black region and follow the rest of its boundary from one side of $c$ back to the other. At each intervening crossing its two adjacent diagram edges abut the two opposite white sectors, so the successive white regions give a walk in $G_W$ between the endpoints of $e$. This walk avoids $e$, because reducedness prevents that black region from encountering $c$ again. Thus the endpoints remain connected after deleting $e$. Interchanging the colors proves the other case. [F1, step 1.1, construct]

2.2 The graph $G_W$ has no cut vertex. Suppose $v$ were one. Each component of $G_W-v$ has a nonempty set of attaching edge ends on the boundary of a small vertex disk at $v$. The attachment sets of two distinct components cannot interlace cyclically: paths in those components joining the corresponding attachments, closed by their short attachment strips, would give disjoint crosscuts of the complementary disk with alternating endpoints, which is impossible by the entry-and-exit separation of a simple planar arc. Some component therefore occupies one consecutive interval of attaching edge ends. Here is a finite way to choose it: cut the cyclic order at any gap and choose a component whose first-to-last attachment interval has the fewest positions. If another component had an attachment strictly inside this interval, noninterlacing would force all its attachments inside, giving a shorter interval; a one-attachment component already supplies a consecutive interval. Hence the chosen interval contains only its own component's ends. [given, step 1.1, construct]

2.3 We construct a ball cut system for the checkerboard exterior. Thicken the planar black Tait spine into vertex balls and round edge tubes, and place each surface disk as a middle disk of its vertex ball and each half-twisted band inside its tube. Denote this thickening by $H$. It is the interval thickening of $F$, with $L$ on its vertical boundary. The complement of its interior is homeomorphic to the link exterior cut along $F$: shrink the normal intervals and round the boundary corners, with the annular cores corresponding to $L$ on $\partial H$. This gives the required sutured identification with $N$. The graph spine lies on the projection sphere. Each of its complementary faces contains one white region; a truncated face disk in the complement of the vertex balls and tubes is a proper disk of $N$. These disks are mutually disjoint. Cutting through all these face disks disconnects the complementary handlebody into its upper and lower balls: the two complementary hemispherical balls were connected only through the face-disk product collars, and cutting those collars at their middle disks removes precisely these connections. Thus the spot vertices of each ball are indexed by the white regions. [F2, step 1.1, construct]

3.1 Take a thin planar neighborhood of this component and its attachment strips, meeting the vertex disk just along that interval, and fill its holes. No other component is trapped in a filled hole: it would need an attachment path to $v$ crossing the chosen component or its strips. Its frontier separates the selected component and its incident edges from all other components. In the medial description in step 1.1 this produces a two-point diagram curve: pass once across the two medial strands at the ends of the attaching interval, use an arc in the region of $v$ between them, and run the rest of the curve outside the selected neighborhood. The neighborhood can be chosen to contain all medial strands and crossings of its edges, so the rest of the curve misses the diagram. Both sides contain a crossing, since the chosen component and some other component each have an attaching edge. This contradicts [F3]. Thus $G_W-v$ is connected for every $v$. The same construction applies with black and white exchanged. [F3, step 1.1, step 2.2, construct]

3.2 The suture graphs of these two balls are both $G_W$. We verify the tracing. In a crossing chart the chosen overpass lies above the sphere and the underpass below it. The corresponding band is a half-twisted strip; for one incidence sign a parametrization is $(u,v)\mapsto(u,v\cos(\pi u),v\sin(\pi u))$, $0\le u\le1$, with boundary strands $v=\pm1$. For the opposite sign reverse the height coordinate. Its two boundary strands run on opposite sides of the projection sphere. Along a projection edge joining crossing neighborhoods, alternation makes one end an overpass end and the other an underpass end. After a small isotopy in its own disjoint edge collar, the suture there changes height monotonically from positive to negative or conversely, crossing the boundary of the appropriate white face disk exactly once. This isotopy can be made on the boundary of $H$: the middle surface disk's boundary arc is moved slightly to either normal side in the vertex ball's boundary collar. The common incidence sign in [F2] ensures these choices agree with the two adjoining band charts. There are no other suture intersections with the face disks. In the upper ball each remaining suture arc is the overpass at one crossing with its two adjacent half-edge collars; its endpoints belong to the two opposite white sectors. In the lower ball the underpass connects the same opposite white sectors. Hence each crossing contributes exactly its edge of $G_W$ to each ball, and every suture segment has been included. [F2, step 2.3, construct]

4.1 By steps 1.1, 2.1 and 3.1 the graph $G_W$ has at least two vertices and is connected, loop-free, bridge-free and has no cut vertex. Steps 2.3 and 3.2 realize precisely these graphs in the two balls of a finite cut system. Apply [F4]. It proves the asserted zero- and one-suture disk property for the black checkerboard. The construction with the colors interchanged proves the same property for the white checkerboard. Any two choices of annular cores are isotopic within their annuli; extending these isotopies over a boundary collar of $N$ transports disks and their boundary disks. The asserted property therefore holds for every choice of the cores. [F4, step 1.1, step 2.1, step 3.1, step 2.3, step 3.2, construct]

5.1 This implies geometric incompressibility of $F$. A geometric compressing disk in the link exterior lifts to a proper disk in $N$ whose boundary $\widetilde\gamma$ lies on the normal frontier and misses $s$. By step 4.1 it bounds a disk $Y$ in $\partial N\setminus s$. Each component of the latter surface is the normal double cover of $F$ with half-annular boundary collars attached. Since $Y$ is compact and its boundary lies on the frontier, push its portions in these collars back to obtain a disk on the normal double cover itself. Projection takes $\widetilde\gamma$ homeomorphically onto its simple closed original curve $\gamma$. This disk also projects injectively: its boundary is disjoint from its image under the deck involution; two disks with disjoint boundaries are either disjoint or nested, unless their union is a sphere component, as follows by separating along either boundary circle. Every component of this normal double cover has nonempty boundary, so the sphere alternative is excluded. Strict nesting of the disk and its deck translate is impossible, since applying the involution reverses the asserted strict inclusion. They are therefore disjoint. The projected disk in $F$ bounds $\gamma$, excluding a geometric compression. [step 4.1, construct]

6.1 Finally, if there were a geometric exterior boundary compression, the incompressibility in step 5.1 and [F5] would produce a one-suture disk in $N$, contrary to step 4.1. Hence both checkerboards are geometrically incompressible and boundary-incompressible. [F5, step 4.1, step 5.1, construct] ∎
