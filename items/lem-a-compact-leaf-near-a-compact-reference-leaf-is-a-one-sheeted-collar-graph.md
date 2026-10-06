---
id: lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph
kind: lemma
title: Compact leaves near a compact reference leaf are one-sheeted collar graphs
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-countable-choice-principle-for-foliation-pair
- lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
- lem-fixed-transverse-fences-have-a-finite-crossing-word
- lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity
- lem-c2-inverses-and-scalar-return-roots
- lem-c1-euclidean-maximal-flow-with-c2-upgrade
- def-leaf-of-a-regular-foliation
- def-c1-regular-codimension-one-foliation-and-transverse-orientation
- lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 10
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (complete English translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §§7-8, printed pp. 19-28; finite local repairs and exact adapters supplied in this strategy
  - title: Mark Brittenham, Foliations and the Topology of 3-Manifolds, classes 11-20
    url: https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf
    locator: Classes 12-13; finite box transport and the compact-graph conclusion supplied explicitly
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $F$ be a C² cooriented codimension-one foliation of a closed oriented three-manifold $M$. Finite transversal control: (i) an intrinsically noncompact leaf in compact M meets a C² positive closed immersed transversal; (ii) saturation of a transversal is open; (iii) a compact nearby leaf through a sufficiently small base parameter of a compact leaf is a one-sheeted collar graph, preserving essential transported loops.

## Facts & Assumptions

**Given:** A $C^2$ cooriented codimension-one foliation $F$ of a closed oriented smooth three-manifold $M$, an intrinsically noncompact leaf $L$, and a compact reference leaf $B$ of $F$.

[F1] Leaves are connected intrinsic C² surfaces immersed in $M$, with plaque charts ([[def-leaf-of-a-regular-foliation]], [[def-c1-regular-codimension-one-foliation-and-transverse-orientation]]). Compact leaves are embedded with their subspace topology ([[lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface]]). No ambient embeddedness is asserted for a noncompact leaf.

[F2] The sibling-pair items `lem-fixed-transverse-fences-have-a-finite-crossing-word` and `lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity` supply the finite crossing word of a fixed finite transverse fence system and the $C^2$ transport of plaque data along fences; the sibling-pair item `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supplies a finite cellulation of a compact $C^2$ surface and a finite generator system of its fundamental group. Their exact uses are flagged in steps 1.2, 3.1 and 2.1 below.

[F3] A $C^2$ equation with nonzero normal derivative has a unique local $C^2$ root, which supplies the transverse coordinate functions and the local inverse-function statement in the collar ([[lem-c2-inverses-and-scalar-return-roots]]).

[F4] A $C^2$ Euclidean field has $C^2$ local flow boxes with derivative bounds on compact domains ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F5] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 Choose finitely many foliation boxes whose smaller cores cover $M$. If $L$ met each core in only finitely many plaques, then the finitely many corresponding compact plaque squares would be intrinsically compact subsets of $L$ whose union contains $L$; their union would equal $L$, making it compact, contrary to hypothesis. Hence one core meets infinitely many plaques of $L$, so on its central vertical interval there are two distinct plaque points $x,y$ of $L$ with levels $r_x<r_y$. By [F1] a finite piecewise $C^2$ leafwise path from $y$ to $x$ exists and its finitely many corners can be smoothed inside convex leaf charts to a $C^2$ leafwise path $\gamma$ (stationary points are harmless). Patch a positive transverse field $X$ and a $C^1$ annihilating form $\omega$ near the compact path using finitely many box bumps, so that $\omega(X)\ge b>0$; the local flow $\varphi_a$ of $X$ exists with uniform bounds by [F4], and $v(s,a)=\omega(D\varphi_a\gamma')$ satisfies $v(s,0)=0$ and $|v(s,a)|\le A a$ on the compact parameter domain by the mean value estimate. With $B>A/b$ and $a(s)=\delta(e^{Bs}-1)/B$ one has $a'=Ba+\delta$ and $\omega(\gamma_\delta')=v(s,a(s))+a'\omega(X)\ge-Aa+b(Ba+\delta)>0$, so $\gamma_\delta(s)=\varphi_{a(s)}(\gamma(s))$ is positive transverse and runs from $y$ to a point $x_\delta$ slightly above level $r_x$; small $\delta$ keeps it below $r_y$ and inside the core. The straight box-coordinate segment from $x_\delta$ up to $y$ is positive transverse, and the two joins are smoothed by chartwise mollification whose added transverse derivative is made smaller than the common positive lower bound of the one-sided derivatives. The result is a closed positively transverse $C^2$ immersed curve crossing the plaque through $y$, hence meeting $L$. [F1, F3, F4, given, construct]

1.2 The set of leaves meeting a fixed transversal is open and saturated: join any leaf point to a crossing by a finite leafwise path, transport a small open transversal interval along the finitely many boxes of that path by [F2], and note that the terminal union of plaques is an open neighbourhood all of whose leaves meet the original transversal; taking the union over eligible paths involves no selection. This proves clause (ii). [F1, F2, construct]

2.1 For clause (iii) fix a compact reference leaf $B$ and a finite system of connecting paths and generating loops for $\pi_1(B)$ supplied by [F2]. Compactness of $B$ and of the finitely many involved boxes permits shrinking a chosen base transversal so that all generator holonomy maps $H_i$ and their inverses are defined on $[0,\varepsilon]$ and the finitely many chart and connecting-path transports stay in a fixed tubular collar. All $H_i$ are increasing and fix $0$. Let $B_t$ be a compact leaf meeting the base transversal at $t$. If some $H_i(t)\neq t$, then the forward (or inverse) iterates form a strictly monotone sequence in $[0,t]$ converging to a fixed point $a$; the iterates remain defined in the common small domain, and since $B_t$ is intrinsically compact its inclusion is an ambient embedding and closed, so the limit point belongs to $B_t$. A transverse interval meets an embedded leaf locally in an isolated point, contradicting the infinitely many distinct iterates converging to $a$. Hence $H_i(t)=t$ for every generator. [F1, F2, given, step 1.2]

3.1 Choose finitely many local plaques along a finite tree of connecting paths from the basepoint to the covering boxes; continuing the plaque through $t$ along each tree path gives finitely many local sections over $B$, contained in the collar after the uniform shrink. On overlaps the difference of the two paths is a based loop, expressed in the finite generator system, and its holonomy at $t$ fixes $t$ by step 2.1; ensuring the finitely many overlap relations by finite subdivision of their compact homotopies into boxes and shrinking once more using only these relations, the local sections agree on overlaps. They patch to a $C^2$ graph $s_t:B\to M$ whose image is contained in the leaf through $t$, is compact, and projects back to $B$ under the collar projection, so it is an embedding. Its image is open in that leaf by the leafwise inverse function theorem [F3] and closed in it by intrinsic compactness, so connectedness makes it the whole leaf; the graph is therefore diffeomorphic to $B$, and a transported loop that were null in the leaf would project to a nullhomotopy of the original loop in $B$, proving that essential transported loops stay essential. [F1, F2, F3, step 2.1, step 1.2]

4.1 This establishes the three clauses: clause (i) by step 1.1, clause (ii) by step 1.2 and clause (iii) by steps 2.1 and 3.1, with no finite-holonomy Reeb stability theorem and no product neighbourhood for all nearby leaves asserted, only the identification of the nearby leaves that are themselves compact; the construction uses finitely many boxes, paths and generators, hence only the standing countable choice from [F5]. [F2, F5, step 3.1] ∎
