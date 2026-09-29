---
id: lem-plane-arc-complements-and-accessible-jordan-points
kind: lemma
title: "Arc complements and accessible Jordan boundary points"
status: draft
origin: pipeline
deps: [def-homeomorphism-and-open-maps, def-continuous-map-top, def-subspace-topology-top, def-metric-topology, thm-metric-open-set-algebra, lem-real-line-is-a-metric-space, thm-compactness-under-continuous-maps, thm-compactness-agrees-with-metric-compactness, cor-components-of-open-subsets-of-rn-are-polygonally-connected, thm-heine-borel-rn, lem-metrics-on-rn, def-metric-ball, def-metric-compactness, def-metric-space, def-complete-ordered-field, lem-euclidean-polygonal-paths-are-continuous, lem-polygonal-ray-general-position, lem-polygonal-crossing-parity-is-locally-constant, def-plane-region-and-frontier, def-plane-graph-face-and-boundary, def-polygonal-arc-and-polygon, def-polygonal-path-and-polygonal-connectedness]
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Carsten Thomassen, The Jordan–Schönflies Theorem and the Classification of Surfaces"
      url: "https://people.math.wisc.edu/~dymarz/751/thomass.pdf"
      locator: "Lemma 2.8, Lemma 2.10 and Proposition 2.11, printed pp.120–122; Proposition 2.11 supplies the square-grid idea, and Lemma 2.8 is a comparison point, not a proof premise"
    - title: "Thomas C. Hales, The Jordan Curve Theorem, Formally and Informally"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/hales3.pdf"
      locator: "§3 and Figure 11, printed p.890: a small square-grid cage around a simple arc"
pipeline_run: frontier-36-complete
---

## Statement

If $P$ is the image of an embedding $f:[0,1]\hookrightarrow\mathbb R^2$, then
$\mathbb R^2\setminus P$ is polygonally path connected. If $C$ is a Jordan
curve and $U$ is a component of $\mathbb R^2\setminus C$, then the points of
$\operatorname{Fr}(U)$ accessible from $U$ by a simple arc whose interior lies
in $U$ are dense in $\operatorname{Fr}(U)$. No choice axiom is assumed. In
particular, once a separate Jordan-separation result identifies
$\operatorname{Fr}(U)=C$, the accessible points are dense in $C$.

## Facts & Assumptions

**Given:** An embedding $f:[0,1]\hookrightarrow\mathbb R^2$, its image $P=f([0,1])$, points $p,q\in\mathbb R^2\setminus P$, a Jordan curve $C$, and a component $U$ of $\mathbb R^2\setminus C$.

[A1] The embedding is injective and its corestriction to $P$ is a homeomorphism; composing with the continuous subspace inclusion $P\hookrightarrow \mathbb R^2$ makes $f$ continuous as a map into the plane ([[def-homeomorphism-and-open-maps]], [[def-subspace-topology-top]]).

[A2] Here a Jordan curve means the image of an embedding of the unit circle ([[def-homeomorphism-and-open-maps]]). The unit circle is closed and bounded in $\mathbb R^2$.

[L1] Closed bounded subsets of $\mathbb R$ and $\mathbb R^2$ are compact; continuous images of compact spaces are compact; metric and topological compactness agree for metric topologies; and compact subsets of Euclidean space are closed ([[thm-heine-borel-rn]], [[thm-compactness-agrees-with-metric-compactness]], [[thm-compactness-under-continuous-maps]]).

[L2] Continuity is tested by open neighborhoods and metric balls form open neighborhoods; the topology on $[0,1]$ is the subspace topology inherited from $\mathbb R$ ([[def-continuous-map-top]], [[def-subspace-topology-top]], [[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-metric-ball]], [[lem-real-line-is-a-metric-space]], [[lem-metrics-on-rn]], [[def-metric-space]]).

[L3] A region of the complement of a plane set $A$ is a connected component of $\mathbb R^2\setminus A$; its frontier is its closure minus its interior ([[def-plane-region-and-frontier]]). When $A$ is closed, its complement is open, and [L5] applies to its components.

[L4] A ray can be chosen to meet each of finitely many polygonal edges transversely and away from vertices. Crossing parity is independent of the general-position ray and locally constant off the polygon. Across an interior point of an edge the two local sides have opposite parity: fix a generic ray direction and move its starting point across a small disk meeting only that edge; precisely one transverse crossing is gained or lost ([[lem-polygonal-ray-general-position]], [[lem-polygonal-crossing-parity-is-locally-constant]]).

[L5] Every connected component of an open subset of $\mathbb R^2$ is open and polygonally connected ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[L6] Compactness in the metric sense means that every open cover has a finite subcover ([[def-metric-compactness]]).

[L7] Every nonempty bounded set of real numbers has a supremum ([[def-complete-ordered-field]]).

[L8] A straight segment is a continuous polygonal path; if its endpoints are distinct it is a simple arc, while equal endpoints give a constant polygonal path ([[lem-euclidean-polygonal-paths-are-continuous]], [[def-polygonal-path-and-polygonal-connectedness]], [[def-polygonal-arc-and-polygon]]).

[L9] For a connected plane graph, each face has a facial boundary walk, which traverses an edge once for each local side incident with that face; an edge incident with the same face on both sides is traversed twice ([[def-plane-graph-face-and-boundary]]).

## Proof

**Proof technique:** direct.

1.1 By [A1] and [L1], $P$ is a nonempty compact and closed subset of the plane. Thus choose radii $r_p,r_q>0$ with $B(p,r_p)\cap P=B(q,r_q)\cap P=\emptyset$. If $p=q$, the constant polygonal path proves the first claim. In all cases choose $d>0$ with $3d<r_p$ and $3d<r_q$; every point of $P$ is then at distance greater than $3d$ from both $p$ and $q$. [A1, L1, L2, L8]

1.2 We need a uniform subdivision consequence, which we derive from compactness. Fix $\epsilon>0$. For each pair $(t,r)$ with $t\in[0,1]$ and $r>0$ such that $f((t-r,t+r)\cap[0,1])\subset B(f(t),\epsilon/3)$, take the open subinterval $W(t,r)=(t-r/2,t+r/2)\cap[0,1]$. Continuity [A1, L2] ensures that these indexed intervals cover $[0,1]$. By [L1, L6] a finite subcover has indices $(t_1,r_1),\ldots,(t_m,r_m)$. Put $\delta=\tfrac12\min_{j\le m}r_j>0$. If $|u-v|<\delta$ and $u\in W(t_j,r_j)$, then $u,v\in(t_j-r_j,t_j+r_j)$, so $\lVert f(u)-f(v)\rVert<2\epsilon/3<\epsilon$. Hence any equal partition with mesh less than $\delta$ has each subarc of diameter less than $\epsilon$. [A1, L1, L2, L6]

1.3 For the density claim fix $x\in\operatorname{Fr}(U)$ and $\epsilon>0$. The definition of frontier and openness of $U$ give $x\notin U$ and a point $y\in U$ with $\lVert y-x\rVert<\epsilon$. Put $\sigma(t)=y+t(x-y)$ for $0\le t\le1$, and $S=\{t\in[0,1]:\sigma([0,t])\subseteq U\}$. Since $U$ is open at $y$, $S$ contains a positive interval of parameters. Let $\tau=\sup S$, which exists by [L7], so $\tau>0$. For every $t<\tau$, the definition of supremum gives an $s\in S$ with $t<s$, so $\sigma(t)\in U$. Put $z:=\sigma(\tau)$. For every radius $\rho>0$, continuity of $\sigma$ at $\tau$ gives some $t<\tau$ sufficiently close to $\tau$ with $\lVert\sigma(t)-z\rVert<\rho$; hence every ball about $z$ meets $U$ and $z\in\overline U$. If $\tau<1$ and $z\in U$, openness of $U$ and continuity of $\sigma$ extend $S$ past $\tau$, a contradiction; if $\tau=1$, then $z=x\notin U$. Thus $z\in\operatorname{Fr}(U)$. [L2, L5, L7, L8]

2.1 Apply step 1.2 with $\epsilon=d$ and choose an equal partition $0=t_0<t_1<\cdots<t_k=1$, $k\ge3$, whose coarse subarcs $P_i=f([t_{i-1},t_i])$ have diameter less than $d$. Each $P_i$ is compact and hence closed by [L1]. If $|i-j|\ge2$, injectivity [A1] makes $P_i$ and $P_j$ disjoint. For each such pair form the indexed family of balls $B(x,r)$ with $x\in P_i$, $r>0$, and $B(x,2r)\cap P_j=\emptyset$. Closedness of $P_j$ shows that this family of smaller balls covers $P_i$. Compactness gives a finite subcover $B(x_\ell,r_\ell)$; set $\delta_{ij}=\min_\ell r_\ell>0$. If $z\in P_i$ lies in $B(x_\ell,r_\ell)$ and $y\in P_j$, then $\lVert y-x_\ell\rVert\ge2r_\ell$ and the triangle inequality gives $\lVert y-z\rVert>r_\ell\ge\delta_{ij}$. There are only finitely many nonadjacent pairs, so the minimum $\Delta$ of their positive $\delta_{ij}$ is positive. This uses only finite subcovers and finite choices. [A1, L1, L2, L6, step 1.2]

2.2 By [A2, L1], $C$ is closed, so every component of its open complement is open by [L5]. A point off $C$ lies in one such component, which is either $U$ or an open set disjoint from $U$; in either case it is not in $\operatorname{Fr}(U)$. Hence $z\in C$. The restriction of $\sigma$ to $[0,\tau]$, read from $z$ to $y$, is a simple straight arc, its interior lies in $U$, and $\lVert z-x\rVert=(1-\tau)\lVert y-x\rVert<\epsilon$. Thus accessible points meet every neighborhood of every $x\in\operatorname{Fr}(U)$, proving density. This construction is pointwise and makes no simultaneous selection over the boundary. [A2, L1, L3, L5, L8, step 1.3]

3.1 Choose $s>0$ with $2\sqrt2s<d$ and $6\sqrt2s<\Delta$. Refine the partition to an equal fine partition whose number of intervals is a multiple of $k$ and whose mesh is small enough by step 1.2 that each fine subarc has diameter less than $s/2$. For every fine node $u$, including every coarse endpoint, put $a=f(u)$, $m_1=\lfloor a_1/s\rfloor$ and $m_2=\lfloor a_2/s\rfloor$. Let $H(a)$ be the square-grid graph with vertices $(m_1+i,m_2+j)s$ for $-1\le i,j\le2$ and all horizontal and vertical unit grid edges between them. Its outer perimeter is a simple rectilinear polygon containing $a$ in its interior. Every point of the fine subarc starting at $u$ lies strictly inside this perimeter, since it is within $s/2$ of $a$ and the perimeter is at least $s$ away in the coordinate directions. [step 1.2, step 2.1]

4.1 Consecutive fine-node images differ by less than $s/2$ in each coordinate, so their floor indices differ by at most one in each coordinate. The 4-by-4 vertex blocks therefore overlap in at least a 3-by-3 grid. Each $H(a)$ remains connected after deleting any one vertex: its perimeter with one vertex removed is connected, and every remaining interior vertex has a grid path to that perimeter avoiding the deleted vertex. For each coarse subarc $P_i$, let $G_i$ be the union of the blocks centered at its fine nodes. Consecutive blocks overlap in at least two vertices, so deleting any vertex leaves their union connected: each block remains connected, and at least one shared vertex survives. Thus $G_i$ is finite and 2-connected. Neighboring groups share their whole block at the common coarse endpoint. Every point of a block centered at $a$ is at distance at most $2\sqrt2s$ from $a$. If $v,w$ lie in blocks centered at $a\in P_i,b\in P_j$ for nonadjacent groups, then $\lVert v-w\rVert\ge\lVert a-b\rVert-4\sqrt2s\ge\Delta-4\sqrt2s>0$, so the groups are disjoint. Fix $x\in P_i$. A point in $G_i$ lies within $2\sqrt2s+\operatorname{diam}(P_i)<2d$ of $x$. If $e$ is the common coarse endpoint of $P_{i-1}$ and $P_i$, each point in $G_{i-1}$ lies within $2\sqrt2s+\operatorname{diam}(P_{i-1})<2d$ of $e$, hence within $3d$ of $x$. Therefore $G_{i-1}\cup G_i\subset B(x,3d)$; each single group also lies in such a ball centered at a point of its coarse subarc. Consecutive groups overlap in an endpoint block with at least two vertices, while nonadjacent groups are disjoint. The same deletion argument shows that their full union $G=\bigcup_iG_i$ is finite and 2-connected. It is a plane graph. Each of its finitely many grid edges is the continuous image of $[0,1]$ under an affine parametrization [L8]; [L1] makes each edge compact and closed. Thus $G$ is closed and $\mathbb R^2\setminus G$ is open. [L1, L2, L8, step 2.1, step 3.1]

5.1 By step 3.1, every point of $P$ lies inside the square perimeter of a block or on $G$. For a block centered at a fine node with grid indices $m_1,m_2$, let $R=[(m_1-1)s,(m_1+2)s]\times[(m_2-1)s,(m_2+2)s]$; its boundary $\partial R$ is contained in $G$. If $x\in P\setminus G$ lies inside this square and its component $K$ of the open set $\mathbb R^2\setminus G$ contained a point outside $R$, [L5] would give a polygonal path in $K$ between them. By [L8] this path is continuous, so coordinate continuity forces it to meet $\partial R\subseteq G$, a contradiction. Thus $K\subseteq R$ is bounded, and no point of $P$ lies in the unbounded component of $\mathbb R^2\setminus G$. [L5, L8, step 3.1, step 4.1]

5.2 We prove a finite cycle-space fact. For each $m$, every finite edge set of even degree in $G_1\cup\cdots\cup G_m$ is a symmetric-difference sum of even-degree edge sets, each supported in one group or in two adjacent groups. This is immediate for $m=1$. For the induction step put $H=G_1\cup\cdots\cup G_{m-1}$ and $J=G_m$, and assign shared edges to $J$. For an even-degree set $Z$, write $Z=A\triangle B$, with $A$ supported in $H$ and $B$ in $J$. Their odd-degree vertices form the same finite even set $S$, all in $H\cap J=G_{m-1}\cap J$, since nonadjacent groups are disjoint. The set $S$ has even cardinality because the sum of degrees in each finite edge set is twice its number of edges. Pair $S$ and, in each of the connected graphs $G_{m-1}$ and $J$, join each pair by a path; let $D_H,D_J$ be the symmetric differences of those path edge sets. Both have odd-degree set exactly $S$. Then $Z=(A\triangle D_H)\triangle(B\triangle D_J)\triangle(D_H\triangle D_J)$. The first set is even-degree and supported in $H$, the second in $J$, and the third in $G_{m-1}\cup J$. The induction hypothesis applies to the first; the other two already have the required support. Finally, any finite even-degree edge set is a mod-two sum of simple cycles: follow unused edges until a vertex repeats, remove the resulting simple cycle, and repeat; even degrees persist and the finite process terminates. All pairings and paths chosen here are finite. [step 4.1]

5.3 The graph $G$ lies in a bounded rectangle. The exterior of that rectangle is connected and lies in $\mathbb R^2\setminus G$, so the complement has a unique unbounded component $O$. Neither $p$ nor $q$ lies on $G$, by steps 1.1 and 4.1. Suppose $p\notin O$, and let $F$ be its bounded complementary region. The graph $G$ is finite, connected and plane, so [L9] gives a closed facial boundary walk $W_F$. Choose a ray from $p$ to outside the containing rectangle whose direction misses all vertices and is transverse to all grid edges; only finitely many directions are forbidden. The ray starts in $F$ and ends in $O$, so membership in $F$ changes an odd number of times along it. At each transverse crossing of an edge, membership changes exactly when $F$ occupies one local side but not the other. Such an edge is traversed once by $W_F$ if it borders $F$, while an edge with $F$ on both sides is traversed twice and contributes zero modulo two. Edges with neither side in $F$ are absent from $W_F$. Therefore the total number of transverse crossings with the edge traversals of $W_F$, counted with multiplicity, is odd. This uses no facial-cycle theorem. [L3, L9, step 1.1, step 4.1]

6.1 Let $Z_F$ consist of the edges traversed an odd number of times by the closed facial walk $W_F$. Every vertex has even degree in $Z_F$: each arrival in the closed walk is paired with a departure, and deleting edges traversed an even number of times preserves degree parity. By step 5.2, $Z_F$ is a mod-two sum of simple cycles, each supported in one group or two adjacent groups. Each support lies in a ball $B(x,3d)$ centered at some $x\in P$ [step 4.1], which misses $p$ by step 1.1. For each cycle, choose a general-position ray from $p$ directed away from its containing ball; the outward open half-circle has directions avoiding the finitely many vertices and edge directions. The ray misses that cycle, so its crossing parity is zero; by [L4] the parity is independent of the general-position ray. The crossing parity of $W_F$ is the sum modulo two of the parities of the cycles in $Z_F$, since even edge traversals cancel. It is therefore even, contradicting the odd parity proved in step 5.3. Thus $p\in O$; the same argument gives $q\in O$. [L4, L9, step 1.1, step 4.1, step 5.2, step 5.3]

7.1 By [L5], $O$ is polygonally connected; a path from $p$ to $q$ in $O$ misses $P$ by step 5.1. This proves the first claim. [L5, step 5.1, step 6.1]

8.1 If a separate Jordan-separation theorem identifies $\operatorname{Fr}(U)=C$, step 2.2 gives density of the accessible points in $C$. That equality is conditional here and is not used above. [step 2.2] ∎

## Remarks

The grid construction uses only continuity, finite subcovers and positive separation of nonadjacent compact subarcs; it assumes no local-flatness property of the embedding. The face argument uses a facial boundary walk and proves the required parity directly, without importing Thomassen's facial-cycle theorem. The finite cycle-space calculation is proved here rather than imported from Thomassen's Lemma 2.10. On printed p.121 the proof of that lemma treats a minimal cycle whose index span is at least two but does not spell out the span-one case; that case is excluded immediately by the lemma's hypothesis that the point lies in the outer face of every adjacent pair union, so the omission does not affect the result.

The first-exit argument proves only $\operatorname{Fr}(U)\subseteq C$. Equality is left to the later Jordan-separation theorem.
