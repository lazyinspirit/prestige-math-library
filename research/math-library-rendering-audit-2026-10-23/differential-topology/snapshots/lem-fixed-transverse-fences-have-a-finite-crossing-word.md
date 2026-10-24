---
id: lem-fixed-transverse-fences-have-a-finite-crossing-word
kind: lemma
title: "Fixed transverse fences and their finite crossing words"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice-principle-for-foliation-pair, lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative, lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity, lem-c2-inverses-and-scalar-return-roots, lem-c1-euclidean-maximal-flow-with-c2-upgrade, lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup, def-holonomy-representation-and-holonomy-group-of-a-leaf, def-limitwise-nullhomotopy-predicate-on-based-loops, lem-holonomy-germ-is-independent-of-the-foliation-chart-chain, lem-manifold-bump-for-a-compact-set-inside-an-open-set, def-flat-chart-for-a-distribution, def-plaque-of-a-flat-chart, def-leaf-of-a-regular-foliation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 9
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (complete English translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "§§7–8 printed pp. 19–28; finite local repairs and exact adapters supplied in this strategy"
    - title: "Mark Brittenham, Foliations and the Topology of 3-Manifolds, classes 11–20"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Classes 12–13; actual embedded versus universal-cover simple cap distinction retained; new local constructions supplied explicitly"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $F$ be a $C^2$ cooriented foliation, let $L$ be a leaf, and let $f:S^1\to L$
be the $C^2$ immersed generic finite-double-point representative of a nonzero
limitwise-nullhomotopy class of $L$ supplied by
[[lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative]].
Then:

(a) there is a sufficiently short one-field leaf-synchronized fence over $f$:
a single smooth transverse field $V$ with flow $\varphi$ and a jointly $C^2$
family $F(u,t)=\varphi_{\tau(u,t)}(f(u))$, $\tau(u,0)=0$, $\tau_t>0$, whose
levels are closed loops in single leaves;

(b) compact leafwise sets are separated from short nonzero $V$-displacements:
for every compact intrinsic set $K$ in a leaf contained in the domain of $V$ there is $\eta>0$ with
$\varphi_s(K)\cap K=\emptyset$ for $0<|s|<\eta$;

(c) every actual collision at every level uses an eligible pair in one fixed finite cyclic source word. Some eligible pairs may fail to collide at a particular height. When a cut gives closed subloops on its actual common interval, each retained subword has strictly smaller cut rank.

## Facts & Assumptions

**Given:** A $C^2$ cooriented foliation $F$, a leaf $L$, and the generic finite-double-point representative $f$ of a nonzero limitwise-nullhomotopy class of $L$ on a fixed side, with $N$ transverse double points and no triple points.

[F1] The loop $f$ is a $C^2$ immersion with finitely many transverse double points, no triple points, and a finite cyclic structure of its parameter circle at the marked crossing preimages ([[lem-a-leafwise-loop-has-a-finite-transverse-double-point-representative]]).

[F2] A smooth positively transverse vector field exists near the compact loop: in finitely many smooth AMBIENT charts choose constant vectors with positive transverse evaluation and shrink their domains to retain positivity; sum them with nonnegative smooth bumps whose smaller cores cover the loop. Positivity is an open convex condition, because positivity of the transverse component is an open convex condition; a compactly supported field has a jointly $C^2$ flow and $C^2$ flow boxes ([[def-flat-chart-for-a-distribution]], [[lem-c1-euclidean-maximal-flow-with-c2-upgrade]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F3] In a flat chart the plaques are the level sets of the transverse coordinate and plaque transport matches equal transverse coordinates; finite plaque transports are $C^2$ local diffeomorphisms and compatible pieces glue ([[def-plaque-of-a-flat-chart]], [[def-leaf-of-a-regular-foliation]], [[lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity]]). The holonomy germ of a leafwise path is independent of the chart chain ([[lem-holonomy-germ-is-independent-of-the-foliation-chart-chain]]), and the holonomy group consists of the germs of leafwise loops ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]).

[F4] The class of $f$ is limitwise nullhomotopic on the chosen side: the predicate is well defined on classes and descends to the normal subgroup $\Pi$; in particular all sufficiently short positive normal displacements of $f$ are null-homotopic in their leaves, hence are closed loops in those leaves ([[def-limitwise-nullhomotopy-predicate-on-based-loops]], [[lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup]]).

[F5] The standing hypothesis is Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 Choose the field. By [F2] there is a smooth vector field $V$, positively transverse to $F$, on a neighbourhood of the compact loop $f(S^1)$; fix it once and for all. This is the single field of the "one-field" fence. [given, F2]

2.1 Separation. Choose finitely many intrinsic open leaf neighborhoods $U_j$ covering $K$, each with compact closure in a single plaque of a larger flat box. For sufficiently small common flow time every point of $K\cap\overline U_j$ remains in that larger box and its transverse coordinate changes with strictly positive derivative. Hence $\varphi_s(p)\ne q$ for $p,q\in K\cap U_j$ and small nonzero $s$, since both initial points have the same plaque coordinate. The set $A=\bigcup_j(K\cap U_j)\times(K\cap U_j)$ is open in $K\times K$ and contains its diagonal. Its complement is compact and has no pair $p=q$; the leaf inclusion is injective and continuous, so at time zero its image misses the closed ambient diagonal. Compactness gives a common short interval on which it still misses that diagonal. Taking the minimum of this interval and the finitely many local flow intervals proves $\varphi_s(K)\cap K=\varnothing$ for $0<|s|<\eta$. The same argument treats a finite union of compact sets in distinct leaves, with each $U_j$ chosen inside its own plaque. The compact complement is taken after an OPEN diagonal neighborhood, not after a union of closed cores. [step 1.1, F2, F3, construct]

2.2 The fence. Cover the compact loop by finitely many flat boxes and subdivide $S^1$ so finely that each closed subarc is carried into one box; in each box the $V$-flow lines are transverse to the plaques, so the flow box of [F2] and the implicit function theorem identify the nearby plaques as graphs over the corresponding loop pieces via $V$-orbit projection. Successive plaque continuations starting at $\varphi_t(f(0))$ agree on overlaps by the chart-chain independence of [F3], and uniqueness of the flow time to a given plaque makes the projected time single-valued; after a finite subdivision of $S^1$ this yields a jointly $C^2$ family $F(u,t)=\varphi_{\tau(u,t)}(f(u))$ with $\tau(u,0)=0$ and $\tau_t>0$ for $t$ in a one-sided interval $[0,b)$ and $u\in S^1$. [step 1.1, F2, F3]

3.1 The levels close. By [F4] every sufficiently short positive normal displacement of $f$ is null-homotopic in its leaf, hence closed in its leaf. The levels of the fence of step 2.2 are exactly these displacements, expressed with the fixed field $V$; shrinking $b$ if necessary, $F(0,t)=F(1,t)$ and the time function $\tau(\cdot,t)$ is periodic, so each level $F(\cdot,t)$ is a closed loop lying in a single leaf, and the fence is leaf-synchronized. [step 1.1, step 2.2, F4]

4.1 Shortness and the fixed crossing pairs. Apply step 2.1 to the compact set $K=f(S^1)$ in its leaf and shrink the fence so that $0\le\tau(u,t)<\eta/3$ for all $u,t$. If $F(u,t)=F(v,t)$ for some level $t$, then the flow group law gives $\varphi_{\tau(u,t)-\tau(v,t)}(f(u))=f(v)$, and $|\tau(u,t)-\tau(v,t)|<2\eta/3<\eta$, so step 2.1 forces $\tau(u,t)=\tau(v,t)$ and then $f(u)=f(v)$. Hence every double point of every level uses one of the $N$ fixed parameter pairs $(u_i,v_i)$ of $f$. [step 2.1, step 2.2, step 3.1]

5.1 Transversality persists. Shrink the fence once more so that all levels remain immersions and the tangent vectors at the finitely many possible crossings $(u_i,v_i)$ remain nonparallel. At such a possible crossing the common time satisfies $\tau(u_i,t)=\tau(v_i,t)$; the tangent of a level is the leaf-tangential part of $D\varphi_\tau f'(u_i)$, and as $t\downarrow0$ the flow map tends to the identity uniformly on the compact loop with $C^1$ control, so the two images of the nonparallel vectors $f'(u_i),f'(v_i)$ stay nonparallel for the short fence by uniform $C^1$ convergence on the compact source circle as $t\downarrow0$; the possible crossings of all levels are therefore transverse double points and no triple points occur. [step 3.1, step 4.1, F2]

6.1 The finite crossing word. If $N=0$, use the single cyclic arc given by the whole parameter circle and rank zero. Otherwise mark the $2N$ crossing preimages on the parameter circle, decompose $f$ into the corresponding finite cyclic word of arcs, and read every level loop of the fence with the same marking: by step 4.1 its actual crossings are a subset of the $N$ eligible marked pairs. Thus all levels use one fixed source-word marking, although equality of the two flow times need not hold at every eligible pair at every height. Switches are used only at actual coincidences and only on intervals where the resulting subloops close. This is the fixed finite combinatorial carrier needed by the cut rank, not an assertion that all original crossings persist. [step 4.1, step 5.1, F1]

7.1 Decreasing subword-cut rank. Define the rank $r(w)$ of the word to be the number of original switch vertices visited twice by $w$, counting a switch vertex once for its two representative ends. A reduced word traverses some arcs at most once and switches only at marked pairs; cutting a selected crossing, which is a vertex visited twice, splits $w$ into two cyclic subwords each visiting that vertex only once and never revisiting an already used switch vertex, so each cut subword satisfies $r\le r(w)-1$. Since all possible non-endpoint collisions of any level of any reduced word are at vertices counted by $r(w)$ by steps 4.1–6.1, the ranking is fixed by the original loop and is uniform over all lower levels. [step 6.1]

8.1 The construction chose finitely many boxes, arcs, marked points and uniform positive constants, so no choice beyond the standing hypothesis [F5] is used; steps 2.1, 2.2 and 6.1–7.1 establish (a), (b) and (c). [step 2.2, step 2.1, step 7.1, F5] ∎
