---
id: lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness
kind: lemma
title: Closedness of compact leaves diffeomorphic to a finite-fundamental-group leaf
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- lem-compact-stable-leaves-form-an-open-saturated-set
- lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented
- lem-a-non-closed-leaf-of-a-codimension-one-foliation-meets-a-closed-transversal
- lem-oriented-intersection-detects-nonvanishing-rational-homology
- lem-rational-homology-of-a-closed-smooth-manifold-is-finite-dimensional
- cor-trivial-holonomy-gives-a-product-foliated-neighbourhood
- thm-local-reeb-stability
- def-transversely-oriented-codimension-one-foliation
- def-compact-space
- def-embedded-submanifold-and-slice-chart
- def-leaf-of-a-regular-foliation
- def-countable-choice-principle-for-foliation-pair
- thm-topological-manifolds-are-metrizable-and-paracompact
- lem-compact-metric-space-has-a-countable-dense-subset
- def-quotient-topology
- def-axiom-of-choice
- lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface
- lem-compact-c1-leaf-has-finitely-generated-fundamental-group
- lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs
- lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex
- thm-smooth-inverse-function-theorem-on-manifolds
- lem-the-orientable-double-cover-of-a-smooth-manifold
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  references:
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.2, printed pp. 140–143 (PDF pp. 149–152); §4.3, printed pp. 144–145 (PDF pp. 153–154), Example 4.7;
      Lemma 4.24, printed p. 155 (PDF p. 164)
  - title: Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced
      Mathematics 91, 2003) — design's locators §§2.3, 2.5–2.6, pp. 30–33 and 44–55; not retrievable as full text
    url: https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016
    locator: 'Design locators: §2.3, pp. 30–33 (local Reeb stability); §2.5, pp. 44–51 (global Reeb stability);
      §2.6, pp. 51–55 (Thurston stability)'
  - title: John Milnor, Topology from the Differentiable Viewpoint (complete scanned PDF; appendix 'Classifying
      1-manifolds')
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Appendix, printed pp. 55–60 (classification of compact 1-manifolds, used for the circle classification
      seam)
  - title: Marius Crainic and Ioan Mărcuț, Reeb–Thurston stability for symplectic foliations
    url: https://arxiv.org/pdf/1307.4363
    locator: '§2, proof of Lemma 1, PDF p. 5: the tubular product cover with simply connected leaf bases, connected
      overlaps and relatively compact boxes, before finite holonomy is used'
dependency_level: 15
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), which in particular supplies $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a smooth transversely oriented codimension-one foliation of a closed connected smooth manifold $M$. Suppose that $L$ is a compact leaf with finite fundamental group. The union $S$ of the compact leaves diffeomorphic to $L$ is closed. Since it is nonempty and open, $S=M$. Every leaf is therefore compact, diffeomorphic to $L$, and has trivial holonomy.

## Facts & Assumptions

**Given:** The foliation, ambient manifold, distinguished leaf and choice assumption of the statement; write $d=\dim M$.

[F1] $S$ is nonempty, open and saturated ([[lem-compact-stable-leaves-form-an-open-saturated-set]]).

[F2] Compact leaves are embedded hypersurfaces ([[lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface]]); their fundamental groups are finitely generated ([[lem-compact-c1-leaf-has-finitely-generated-fundamental-group]]).

[F3] Holonomy is constructed by finite plaque transport and is invariant under leafwise homotopies; in the cooriented case it consists of increasing transverse maps ([[lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs]]).

[F4] In a closed oriented smooth $d$-manifold, a positive closed immersed transversal missing finitely many consistently oriented compact leaves but meeting another detects a homology class outside their rational span ([[lem-oriented-intersection-detects-nonvanishing-rational-homology]]).

[F5] Rational homology of a closed smooth manifold is finite dimensional under the declared full-AC hypothesis ([[lem-rational-homology-of-a-closed-smooth-manifold-is-finite-dimensional]]). The finite-CW input has the same hypothesis ([[lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex]]).

[F6] The locally defined tangent-orientation double cover is smooth, oriented and finite-sheeted by [[lem-the-orientable-double-cover-of-a-smooth-manifold]].

[F7] A compact leaf with finite fundamental group has trivial holonomy in a cooriented codimension-one foliation ([[lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented]]).

[F8] A smooth map with invertible differential is a local diffeomorphism ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[F9] For an embedded smooth leaf in a tubular neighborhood, one can use relatively compact product boxes with simply connected leaf bases, connected nonempty overlaps and transverse transports defined uniformly over each box. This is the local-cover construction at the beginning of Crainic–Mărcuț, *Reeb–Thurston stability for symplectic foliations*, §2, proof of Lemma 1, PDF p. 5; it precedes that proof's use of finite holonomy. Compactness of the leaf reduces this cover to finitely many boxes.

## Proof

1.1 (A noncompact leaf and finite barriers.) Suppose first that $M$ is oriented and that $x\in\overline S$ lies on an intrinsically noncompact leaf $A$. Fix any finite collection $B_1,\ldots,B_k$ of leaves in $S$. Cover $M$ by finitely many smaller foliation boxes whose closures lie inside larger boxes. If $A$ met only finitely many plaques in every larger box, the closed plaque disks containing all its intersections with the smaller boxes would form a finite compact cover of $A$ in its intrinsic topology, a contradiction. Thus some box contains infinitely many distinct plaques of $A$ meeting its smaller box. Refine the boxes so that each $B_i$, being embedded compact, meets a box either in one slice or not at all; finitely many such refinements suffice. Two of the infinitely many $A$-plaques then lie in the same interval cut out by the finitely many barrier slices. Join their central points by a compact embedded leafwise arc in $A$, oriented from the higher plaque to the lower one. Its compact image misses every $B_i$. Finite plaque transports along that arc construct a thin foliated strip, with consistently positive transverse coordinate $u$ and central arc $u=0$. Tilt the arc from $u=-\varepsilon$ to $u=\varepsilon$ with strictly positive derivative. For sufficiently small $\varepsilon$ its final point still lies below its initial point in the original box; the positive vertical segment between them completes a closed positive immersed transversal $\gamma$. Both the strip and the vertical segment miss all barriers; the tilted arc crosses $A$ at $u=0$. Smooth the two corners inside boxes: the positive transverse half-space of tangent vectors is convex, so a sufficiently small smoothing preserves positivity and barrier avoidance. This is the compact-ambient version of the construction behind [[lem-a-non-closed-leaf-of-a-codimension-one-foliation-meets-a-closed-transversal]], proved here for intrinsic noncompactness without equating it with nonclosedness. [F2, F3, construct]

1.2 (Finite control near a compact reference leaf.) Let $A$ now be any compact cooriented leaf, with base point $a$ and a short transversal $T$ at $a$ carrying coordinate $t=0$ on $A$. A transverse collar projection onto $A$ exists: choose a positive transverse smooth vector field by finitely many local fields and chart bumps, and flow it for a common short time; its differential at time zero is invertible by F8, and compactness plus injectivity on the zero section makes it injective after shrinking. The pulled-back foliation is transverse to collar fibres. Choose finitely many generators of $\pi_1(A,a)$ by F2, and finitely many relatively compact simply connected product-chart bases with connected overlaps, with smaller bases covering $A$, using the explicit local-cover input F9. Contractibility of all overlaps is unnecessary: connectedness lets paths across each overlap be fixed, and the actual comparison loops and their chosen homotopies are retained below. Fix paths from $a$ to their centers and paths across their nonempty overlaps. The finite overlap comparison loops are words in the chosen generators. Fix the finitely many homotopies witnessing these words. Compactness of those paths, disks and homotopies gives a common interval on which their plaque transports and comparisons are defined, by a finite box subdivision. Denote the resulting increasing generator maps by $H_j$; include inverses in this finite list and shrink again so both directions are defined on an interval about zero. No assertion of uniform transport along all possible paths is used. [F2, F3, F8, F9, construct]

2.1 (Finite homology excludes noncompact limits.) The saturation of $\gamma$ is open: in a box a short transverse segment has open plaque saturation, and transport along any finite leafwise path carries such an open interval to an open interval. It contains the entire leaf $A$, hence $x$. Since $x\in\overline S$, some leaf $B\subset S$ meets $\gamma$. Orient compact leaves by the ambient orientation and positive normal. By F4, $[B]$ is outside the span of $[B_1],\ldots,[B_k]$ in $H_{d-1}(M;\mathbb Q)$. But by F5 the span of the classes of ALL leaves in $S$ has a finite basis chosen from those classes: starting with the empty list, append an independent member while possible, at most $\dim H_{d-1}$ times. This is only a finite selection. Apply step 1.1 to the leaves representing that finite basis. The new class cannot lie outside their span, a contradiction. Thus the leaf through any point of $\overline S$ is compact. For $d=1$ all leaves are points already, so this argument is unnecessary. [F4, F5, step 1.1]

2.2 (Compactness forces every generator to fix the nearby parameter.) Take $|t|$ sufficiently small in the interval of step 1.2 and suppose its leaf $B$ is compact. If $t>0$ and $H_j(t)<t$, forward iterates of $H_j$ remain between zero and $t$, strictly decrease, and are distinct. If $H_j(t)>t$, use inverse iterates, which remain between zero and $t$ and strictly decrease. The chosen common domains contain this interval, so every iterate is defined and lies on $B\cap T$. If $t<0$, use forward or inverse iterates that strictly increase towards zero and remain between $t$ and zero. In all cases these give infinitely many distinct intersections in a compact subinterval of $T$. Since $B$ is embedded compact by F2, its intersection with that subinterval is closed and discrete (the transversal is transverse at every intersection), hence finite. This contradiction shows $H_j(t)=t$ for every generator. At $t=0$ this is automatic. [F2, step 1.2]

3.1 (The one-sheeted graph.) Continue the point $t$ over each coordinate disk using its fixed center path and radial plaque transports in the collar. Each continuation is a smooth graph over that disk, because projection is a local diffeomorphism on plaques. On an overlap, the two continuations differ by its comparison loop. The fixed homotopy of step 1.2 expresses that comparison as a word in generators, each fixing $t$ by step 2.2; all finite intermediate transports are defined after the common shrink. Homotopy invariance in F3 therefore identifies the two graphs. They patch to a single compact graph over all of $A$, contained in $B$. Its image is open in the intrinsic topology of $B$ by the local graph charts, and closed there because its compact domain maps into the Hausdorff leaf $B$. Connectedness of $B$ makes the image all of $B$. Thus collar projection restricts to a diffeomorphism $B\to A$. [F3, F8, step 1.2, step 2.2]

4.1 (Closedness in the oriented case.) For $x\in\overline S$, step 2.1 makes its leaf $A$ compact. Every sufficiently small neighborhood of $x$ meets $S$; inside the collar of step 1.2 project such a point along its plaque to the base transversal $T$. Its leaf $B\subset S$ is compact and has sufficiently small base parameter, so step 3.1 gives $A\cong B\cong L$. Hence $x\in S$. This proves $\overline S\subset S$, and therefore closedness. This uses neither a Hausdorff limit of leaf sets nor an assertion that a connected saturated limit is a single leaf. [F1, step 2.1, step 3.1]

5.1 (Nonorientable ambient manifolds.) For nonorientable $M$ pass to its orientation double cover $p:\widetilde M\to M$ from F6. The local two-sheet construction is smooth, oriented, and compact: finitely many relatively compact evenly covered boxes cover the compact base, and their finitely many lifted closures cover the total space. Pull back the cooriented foliation. If the leaf $A$ through $x\in\overline S$ were intrinsically noncompact, each lifted leaf covering $A$ would be noncompact, since a compact lifted leaf would surject onto $A$. At a lift of $x$, the union of lifted leaves from $S$ accumulates; all these leaves are compact finite covers of leaves in $S$. The finite-barrier and homology arguments above apply to this entire collection in the oriented cover: the argument requires compact leaves and a finite-dimensional homology space, not a common diffeomorphism type. They exclude the presumed noncompact lifted leaf. Thus $A$ is compact downstairs. The compact-reference graph argument uses coorientation alone, so step 4.1 applies downstairs unchanged. [F2, F4, F5, F6, step 1.1, step 2.1, step 3.1]

6.1 In every case $S$ is closed, nonempty and open by F1. Connectedness gives $S=M$; each leaf is diffeomorphic to the finite-fundamental-group leaf $L$, so F7 gives trivial holonomy for every leaf. Full AC is retained precisely for F5 and the declared finite-CW chain; it is not replaced by countable choice. The finite barrier, graph and basis selections add no arbitrary-index choice. [F1, F7, step 4.1, step 5.1] ∎
