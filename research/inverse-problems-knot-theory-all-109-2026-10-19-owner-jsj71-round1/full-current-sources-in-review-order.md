<!-- lem-choice-free-isotopy-extension-for-a-compact-smooth-source -->
---
id: lem-choice-free-isotopy-extension-for-a-compact-smooth-source
kind: lemma
title: "Choice-free isotopy extension for a compact smooth source"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-smooth-embedding, def-smooth-map-between-manifolds-with-boundary, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free: the track is compact, its local velocity extensions and Euclidean bump functions have a finite subcover, and a finite normalized sum replaces an arbitrary-cover partition of unity. ODE continuation uses a fixed finite subdivision, not successive arbitrary choices."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Isotopy Extension Theorem, UC Riverside graduate handout"
      url: "https://math.ucr.edu/~res/math260s10/isotopyextension.pdf"
      locator: "Classical compact-source velocity-extension construction, via the fully read local isotopy-extension proof. Here the finite coordinate, bump and fixed finite-time ODE construction discharges its choice hypothesis; no additional primary-text reading is claimed."
---

## Statement

Let $P$ be a compact smooth $k$-manifold with boundary, let $N$ be a Hausdorff smooth $n$-manifold without boundary, and let $f:P\times[0,1]\to N$ be jointly smooth with every $f_t$ a smooth embedding. Suppose the family is stationary on neighborhoods of both time endpoints. For every open neighborhood $W$ of its compact track $f(P\times[0,1])$, there is a jointly smooth isotopy $H_t:N\to N$ of diffeomorphisms with $H_0=\operatorname{id}$ and $H_t\circ f_0=f_t$, supported in a fixed compact subset of $W$ and stationary near its time endpoints. No choice axiom is assumed. The empty source and zero-dimensional source are allowed.

## Facts & Assumptions

**Given:** The compact source, Hausdorff boundaryless target, jointly smooth embedding isotopy, and track neighborhood of the Statement.

[F1] Smooth embeddings are injective immersions and homeomorphisms onto their images ([[def-smooth-embedding]]). Boundary smoothness is the local smooth-extension convention ([[def-smooth-map-between-manifolds-with-boundary]]).

[F2] A full-rank square coordinate map has a smooth local inverse, without choice ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], Statement).

[F3] A smooth Euclidean ODE has a unique local solution on a quantitatively bounded cylinder ([[thm-picard-lindelof-local-existence-and-uniqueness]], Statement), with joint smooth dependence on its initial state and parameters ([[thm-smooth-dependence-of-ode-solutions-on-parameters]], Statement).

## Proof

1.1 If $P$ is empty, take the identity isotopy and stop. Otherwise extend $f$ constantly a little past the time endpoints; this is smooth by stationarity. The graph $S=\{(t,f_t(p)):p\in P,\ 0\le t\le1\}$ is compact, since a finite open-cover argument proves compactness of the product of two compact spaces. Its graph map is an injective immersion: the first coordinate retains $t$, and the source differential in $p$ is injective. It is a homeomorphism onto its image, since a continuous bijection from a compact space to a Hausdorff space is closed. In local source and target coordinates, choose $k$ independent target coordinate rows for the $p$ derivative. Add the remaining $n-k$ target coordinate directions to the graph map. Its derivative is now an invertible $(n+1)\times(n+1)$ matrix, so [F2] gives a local product coordinate chart in which the graph is a coordinate $k+1$-dimensional plane, or its half-space at $\partial P$. The image of the complement of a smaller source neighborhood is compact and misses the graph point; shrink the target neighborhood to exclude it. Thus these graph charts describe all of $S$ near that point, with no other sheets. The same construction uses the constant time extensions at the two time edges. [F1, F2, given, construct]

2.1 Along $S$ the velocity $v(t,f_t(p))=\partial_t f_t(p)$ is a well-defined smooth target tangent vector. In a graph chart extend its coefficient functions across the source boundary using [F1], then constantly in the added normal coordinates. Target coordinate bases turn these coefficients into a smooth time-dependent vector field $v_i$ on an ambient neighborhood $O_i$ of that graph point, agreeing with $v$ wherever $S$ meets that neighborhood. Shrink $O_i$ inside $\mathbb R\times W$ and inside a time-target product chart with relatively compact target closure; a Euclidean coordinate ball with smaller radius gives the latter directly. Choose a smaller product-coordinate ball about the point with closure in $O_i$, and a nonnegative smooth Euclidean bump $\rho_i$ supported in $O_i$ and positive on that smaller ball. Such bumps are explicitly obtained from $e^{-1/(1-|x|^2)}$ inside a coordinate ball and zero outside, using nested balls if needed. Compactness selects finitely many of the smaller balls covering $S$, and only their finitely many associated fields and bumps are retained. This is a finite selection; no simultaneous choice over an infinite family is made. [F1, F2, step 1.1, construct]

3.1 Put $\rho=\sum_i\rho_i$. It has a positive minimum $c$ on compact $S$. Choose a smooth scalar function $\eta$ zero for $u\le c/4$ and one for $u\ge c/2$. Define $$X(t,y)=\eta(\rho(t,y))\frac{\sum_i\rho_i(t,y)v_i(t,y)}{\rho(t,y)}$$ where $\rho>0$, and define it to be zero where $\rho=0$. Each numerator term is extended by zero off its bump support. This is smooth even across $\rho=0$, because it vanishes on a neighborhood of that set. On $S$ every nonzero summand equals $\rho_i v$, so $X=v$ there. The time-target support has compact closure in the finite union of the selected coordinate neighborhoods, and its target projection is a compact subset $K\subset W$. Multiply by one smooth time cutoff equal to one on the moving time interval and zero near $0,1$ outside that interval. This keeps $X=v$ along $S$, since $v=0$ on the stationary time neighborhoods, and makes the resulting $X$ stationary as a zero field near the endpoints. The finite bump sum and this explicit cutoff replace every use of a general partition of unity or global smooth Urysohn lemma. [step 1.1, step 2.1, construct]

4.1 The compactly supported field $X$ has a global smooth evolution on this one time interval by a finite Euclidean argument. Cover $K$ by finitely many smaller coordinate boxes whose closures lie in larger coordinate boxes. For every box and every time in a fixed compact interval slightly larger than $[0,1]$, bound the field coefficients and their first state derivatives on its larger closed box by finite constants $M_i,L_i$, and let $r_i>0$ be the margin of the smaller box inside the larger one. The quantitative cylinder in [F3] gives a common positive time $\delta$ less than every $r_i/(1+M_i)$ and $1/(1+L_i)$; enlarge the compact boxes a little if their coordinate domains require open extensions. A trajectory starting in $K$ lies in one smaller box and exists for this common time in either direction. A trajectory outside $K$ is constant, since the field is zero there. At each later subdivision time, use the first smaller box containing the current state, in one fixed finite ordering; if the state is outside $K$, use the constant solution. Uniqueness makes all chart descriptions agree on overlap. A fixed integer $m>1/\delta$ permits continuation across $[0,1]$ in at most $m+1$ steps, in both time directions. Smooth dependence follows locally from [F3] and finite composition, independently of which box descriptions were chosen. Thus the maps $\Phi_{t,s}$ are jointly smooth and satisfy $\Phi_{u,t}\Phi_{t,s}=\Phi_{u,s}$ by uniqueness. They are diffeomorphisms with inverse $\Phi_{s,t}$. This is finite continuation with a predetermined number of steps; no dependent choice is used. [F3, step 3.1, construct]

5.1 Define $H_t=\Phi_{t,0}$. For fixed $p$, both $t\mapsto f_t(p)$ and $t\mapsto H_t(f_0(p))$ solve $\dot y=X(t,y)$ with the same initial value, because $X=v$ along the graph. Uniqueness in [F3] therefore gives $H_t f_0=f_t$. Every point outside $K$ is fixed. The zero field on endpoint neighborhoods makes the family stationary there; its initial map is the identity. If $P$ is empty, take $H_t=\operatorname{id}$ immediately. For zero-dimensional nonempty $P$, the graph charts have no $p$ coordinates and the same construction applies. All local extensions and bump parameters were extracted in one finite subcover; all integrations are the uniquely specified local Euclidean solutions composed finitely many times. This proves the choice-free assertion. [F3, step 1.1, step 3.1, step 4.1, construct] ∎


<!-- lem-nonexceptional-finite-free-products-have-no-normal-cyclic-subgroup -->
---
id: lem-nonexceptional-finite-free-products-have-no-normal-cyclic-subgroup
kind: lemma
title: "Normal cyclic subgroups of nonexceptional finite free products"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [thm-normal-form-for-free-products]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.20, Lemma 1.15, motivates the boundary-fiber application; the free-product proof here is supplied independently"
---

## Statement

Let $G=G_1*\cdots*G_k$, where $2\le k<\infty$ and every factor is nontrivial. If $k=2$, assume the two factors are not both cyclic of order two. Then every cyclic normal subgroup of $G$ is trivial. No choice hypothesis is required.

## Facts & Assumptions

**Given:** The finite family of nontrivial groups in the Statement.

[F1] Every free-product element has a unique reduced syllable word; a nonempty reduced word is nonidentity ([[thm-normal-form-for-free-products]], Statement).

## Proof

1.1 Construct a graph $T$ with central vertices indexed by $g\in G$ and factor vertices indexed by the tagged left cosets $(i,gG_i)$. Join $g$ to $(i,gG_i)$ by an edge for each $i$. This graph is connected: multiplying a central vertex by one factor syllable gives a two-edge path through that factor coset, and [F1] supplies such a path from $1$ to every central vertex. It has no reduced closed edge path. Indeed such a path, started at a central vertex, alternates factor and central vertices. Consecutive central vertices differ by a nonidentity element of the intervening factor; otherwise the path immediately reverses an edge. Consecutive factor tags differ, since equal tags would again immediately reverse the edge at their common central vertex. A closed path would therefore give a nonempty reduced syllable word equal to $1$, contradicting [F1]. Thus $T$ is a tree. Left multiplication gives a $G$-action preserving both kinds of vertices and their tags. Every edge stabilizer is trivial, since fixing its central endpoint fixes the corresponding group element. [given, F1, construct]

2.1 A nontrivial element conjugate into a factor fixes exactly one vertex of $T$, its corresponding factor vertex. It fixes that vertex by construction; if it fixed another vertex, it would fix the unique path between them, hence an edge, which step 1.1 excludes. Every nonidentity reduced word $w$ can be conjugated to a one-syllable word or to a cyclically reduced word of length at least two: whenever the first and last syllables have the same factor tag, move the first to the end by conjugation and reduce the seam; the length decreases unless the word is already cyclically reduced or has length one. This is a finite process. [F1, step 1.1, construct]

3.1 For a cyclically reduced word $w$ of length at least two, concatenate, for all integer $n$, the two-edge syllable paths from $w^n$ to $w^{n+1}$. There is no reversal at a join because the last and first factor tags of $w$ differ. The resulting subgraph $L$ is an embedded bi-infinite path by the tree property. It contains the central vertex $1$, and $w$ translates it by a nonzero distance. It is the unique bi-infinite path on which $w$ acts as a nonzero translation. To verify uniqueness, project any vertex $x$ to $L$: the path from $x$ to any vertex of $L$ has a unique first point $p$ on $L$, independent of the chosen sufficiently distant vertex, since otherwise there would be a cycle. The unique path from $x$ to $wx$ is the concatenation from $x$ to $p$, along $L$ from $p$ to $wp$, and from $wp$ to $wx$. Hence $d(x,wx)=2d(x,L)+\ell$, where $\ell>0$ is the translation distance on $L$. On any other translation path the displacement is constant and its iterates give an embedded line. If that line were disjoint from $L$, its unique connecting path to $L$ would have to be carried to itself, forcing its endpoint on $L$ to be fixed. If it met $L$, their intersection would be invariant under a nonzero translation, hence contain the whole line: a connected proper interval, ray or finite segment cannot be invariant under that translation and its inverse. Thus the paths coincide. Conjugating gives the same existence and uniqueness for every element not conjugate into a factor. [F1, step 1.1, step 2.1, construct]

4.1 Suppose a nontrivial cyclic subgroup $C=\langle w\rangle$ is normal in $G$. If $w$ is conjugate into a factor, step 2.1 makes the common fixed set of $C$ a single factor vertex. Normality makes this vertex fixed by all $G$. This is impossible: a different factor contains a nonidentity element, whose reduced word is outside the stabilizing conjugate of that factor. More explicitly, after conjugating the vertex to $(i,G_i)$, any nonidentity element of $G_j$ with $j\ne i$ moves it by [F1]. Otherwise step 3.1 supplies the unique translation line $L$ of $w$. The group $C$ is infinite, since a nonzero translation has infinite order. For every $g\in G$, normality therefore gives $gwg^{-1}=w$ or $w^{-1}$. Their translation lines are the same, so uniqueness makes $gL=L$. Conjugate once so that the cyclically reduced description of step 3.1 applies; then $1\in L$. Invariance now places every central vertex $g$ in $L$. Every factor vertex belongs to the path between two central vertices, because its factor is nontrivial. Thus convexity of the line gives $T=L$. But a central vertex has degree $k$ and a factor vertex of tag $i$ has degree $|G_i|$. A line has degree two at every vertex, forcing $k=2$ and both factors to have order two, contrary to the hypothesis. Therefore $C$ cannot exist. All selected words, conjugations and paths use finite data; no selection over an indexed family is used. [given, F1, step 1.1, step 2.1, step 3.1] ∎


<!-- lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models -->
---
id: lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models
kind: lemma
title: "Explicit models for the small orientable Seifert pieces"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, def-incompressibility-seifert-fibration-and-jsj-system, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters, thm-isotopy-extension, lem-finite-polygonal-disk-and-collar-surgery]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC implies the countable choice required by smooth isotopy extension. All other constructions use finite charts, circle lifts and explicit quotients."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.13–14 for fibered solid tori and p.20, Lemmas 1.14–1.15, for the small interval-bundle exceptions; explicit model identifications are supplied below"
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable smooth Seifert-fibered three-manifold with nonempty boundary and underlying base surface $B$.

* If $B$ is a disk with zero or one exceptional point, $M$ is a solid torus.
* If $B$ is an annulus with no exceptional points, $M$ is $T^2\times I$.
* If $B$ is a Möbius band with no exceptional points, or a disk with exactly two exceptional points both of multiplicity two, $M$ is the orientable twisted interval bundle over the Klein bottle.

For the last manifold an explicit common model is
$$W=\bigl(\mathbb R\times(\mathbb R/\mathbb Z)\times[-1,1]\bigr)/\bigl((x,y,t)\sim(x+1,-y,-t)\bigr).$$
Its interval projection forgets $t$ and has Klein-bottle base. It has a Seifert fibration over a Möbius band by the $y$-circles, and another over a disk with two multiplicity-two points by the $x$-flow. In particular the twisted interval bundle over the torus and the product of a Klein bottle with an interval are not orientable exceptions.

The assertions concern underlying smooth manifolds, with boundary collars allowed to be rounded. They impose no fixed outer-boundary parametrization and assert no triangulation or smoothing of an arbitrary topological three-manifold.

## Facts & Assumptions

**Given:** Full AC and the orientable Seifert piece in the Statement.

[A1] Full AC implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] The local fibered solid tori and exceptional multiplicities are those of [[def-incompressibility-seifert-fibration-and-jsj-system]].

[F2] Smooth finite-dimensional ODEs have unique local solutions and smooth dependence on initial values and parameters ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F3] Smooth isotopies of a compact annulus in a manifold boundary extend to ambient isotopies preserving that boundary ([[thm-isotopy-extension]], Statement, clauses 1 and 3).

[F4] Finite polygonal disks admit extensions of prescribed PL boundary homeomorphisms; two polygonal disks glued along a boundary interval form a disk, by their matched polygon parameters ([[lem-finite-polygonal-disk-and-collar-surgery]], Proof 6.1–8.1).

## Proof

1.1 We record the circle-bundle coordinates used below. A smooth circle bundle over a disk or rectangle has a smooth trivialization. Construct horizontal lifts in each product chart and blend them by a finite smooth partition on the compact base. Such a partition is obtained by finitely many coordinate bump functions positive on a smaller covering family, divided by their positive sum; their linear combination of right inverses to the projection derivative is again a right inverse. Lift the straight contraction paths from a fixed interior basepoint to all other points. The resulting time-dependent vector fields have unique solutions by [F2]. They exist throughout the time interval: the total space over the compact disk is compact, the projected trajectory remains in the prescribed base path, and finitely many chart neighborhoods give a uniform local existence interval at every possible limiting point. Smooth parameter dependence and reverse transport give inverse smooth trivializations. At boundary corners use extensions of the bundle charts and restrict back to the rectangle; the prescribed projected paths stay inside it. For an annulus, cut the base along a spanning arc and trivialize over the resulting rectangle. Its gluing map has the form $(y,t)\mapsto(g_t(y),t)$ on the two cut faces, where $g_t$ is a family of circle diffeomorphisms. Orientability of the total space forces degree $+1$. Choose lifts $\widetilde g_t:\mathbb R\to\mathbb R$ continuously in the interval parameter $t$. The interpolation $(1-s)\widetilde g_t(y)+sy$ has positive $y$-derivative and period-one translation, so is an isotopy of these gluing maps to the identity. A smooth stationary reparametrization in $s$ may be used. Isotopic return maps have diffeomorphic mapping tori: if $f_s$ joins $f_0$ to $f_1$, the formula $(z,u)\mapsto(f_1^{-1}f_{1-u}(z),u)$ respects $(z,1)\sim(f_0(z),0)$ and the target $f_1$-identification. It is smooth across the seam when the isotopy is stationary near its endpoints. This proves the annulus assertion with explicit coordinates. [A1, F1, F2, given, construct]

2.1 The disk with no exceptional point is covered by the first trivialization in step 1.1, so its total space is $D^2\times S^1$. For a disk with one exceptional point, take a small fibered solid-torus neighborhood of that fiber. The remaining base is an annulus and the regular bundle over it is the product of step 1.1. Attaching this product to the neighborhood along its inner boundary merely adds a boundary collar: use the actual gluing map to parametrize the collar from its attached end, so no extension of an arbitrary torus map is required. Thus the total manifold is the given fibered solid torus with an elongated collar, hence a solid torus. This identification preserves the fiber direction on its boundary. [F1, step 1.1, construct]

2.2 For a Möbius base with no exceptional point, cut along a spanning arc. The rectangle trivialization glues by $(y,t)\mapsto(g_t(y),-t)$. The base normal coordinate is reversed, so orientability forces every $g_t$ to have degree $-1$. Continuous lifts have negative $y$-derivative; interpolating them to $-y$ retains negative derivative and the required degree. The same mapping-torus coordinate change as in step 1.1 identifies this total space with $W$. Forgetting $t$ exhibits $W$ as an interval bundle over $K=\mathbb R^2/\langle(x,y)\mapsto(x+1,-y),(x,y)\mapsto(x,y+1)\rangle$. It is twisted because transport around the first generator reverses $t$, and its total space is orientable because that generator reverses both $y$ and $t$. The $y$-circles have base $(\mathbb R\times[-1,1])/((x,t)\sim(x+1,-t))$, a Möbius band. These statements also directly construct its first Seifert fibration. [F1, step 1.1, construct]

3.1 The flow $(x,y,t)\mapsto(x+s,y,t)$ on $W$ has period two at every generic point. The points $(y,t)=(0,0),(1/2,0)$ have period one, and these are the only shorter orbits. Around either, the return map after time one is the linear half-turn $(v,t)\mapsto(-v,-t)$ on a transverse disk. They therefore give exactly two exceptional fibers of multiplicity two. Its orbit space is the annulus $S^1_y\times[-1,1]$ divided by $(y,t)\mapsto(-y,-t)$. A fundamental rectangle is $0\le y\le1/2$, $-1\le t\le1$, with each vertical side folded by $t\sim-t$. Split it at $t=0$. The two half-rectangles are disks glued along the three-edge boundary interval consisting of the left side, the $t=0$ side and the right side. By [F4] their quotient is a parametrized disk. The fold points $(0,0)$ and $(1/2,0)$ are its two marked interior points. Thus the second asserted Seifert structure on $W$ is explicit. [F1, F4, step 2.2, construct]

3.2 Now let $B$ be a disk with two multiplicity-two points. Cut it along an arc separating those points. Its inverse image is a vertical annulus $A$ splitting $M$ into two pieces of the one-exception disk type of step 2.1. Each is a fibered solid torus, and $A$ is a band around a regular-fiber slope on its boundary. In meridian-longitude coordinates that primitive fiber has class $p\mu+2\lambda$ with $p$ odd. The meridian twist $(z,w)\mapsto(w^kz,w)$ changes $p$ to $p+2k$; take $k=(1-p)/2$ to normalize it to $\mu+2\lambda$. This changes no prescribed outer marking because none is required. The band coordinates from the fibered boundary collar identify $A$ with a standard annular band about this normalized slope. The two solid tori and their marked annuli are therefore fixed standard pairs. [F1, step 2.1, construct]

4.1 It remains to check that their possible gluing maps give one underlying orientable manifold. A fiber-preserving map of their annuli has the form $(\theta,u)\mapsto(F_u(\theta),\sigma(u))$, with circle degree $\varepsilon=\pm1$ and interval orientation $\eta=\pm1$. Interpolate $\sigma$ to the corresponding affine interval map, and choose continuous lifts of $F_u$; their interpolation to $\varepsilon\theta$ retains nonzero derivative of the required sign. Thus the annulus map is isotopic, allowing its boundary circles to move, to $(\theta,u)\mapsto(\varepsilon\theta,\eta u)$. Orientability of the glued manifold requires $\varepsilon\eta=-1$. The two remaining maps differ by $(\theta,u)\mapsto(-\theta,-u)$. This latter map extends over the standard solid torus by $(z,w)\mapsto(\overline z,\overline w)$: choose its standard slope band invariant under simultaneous angle reversal, which reverses both the fiber and transverse band parameters. The preceding annulus isotopies also extend over that solid torus by [F3], using [A1]. Hence all allowable gluings are diffeomorphic. Step 3.1 constructs one of them in $W$, so every disk-two-order-two piece is $W$. The disk and annulus models were proved in steps 1.1–2.1, and the Möbius model in step 2.2. Finally a nontrivial interval bundle over an orientable torus reverses its interval direction around some loop and therefore reverses the total orientation; $K\times I$ is nonorientable because $K$ is. Neither is an additional orientable case. All model identifications were explicit finite constructions in smooth Seifert pieces. [A1, F3, step 1.1, step 2.1, step 2.2, step 3.1, step 3.2, construct] ∎


<!-- lem-gluing-irreducible-smooth-three-manifolds-across-injective-annuli -->
---
id: lem-gluing-irreducible-smooth-three-manifolds-across-injective-annuli
kind: lemma
title: "Irreducibility after gluing across injective proper annuli"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-countable-choice, def-incompressibility-seifert-fibration-and-jsj-system, lem-relative-transversality-for-embedded-surfaces, lem-smooth-ball-windows-and-boundary-disk-absorption, thm-isotopy-extension, lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups, lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice is used by relative transversality, ball-window standardization and isotopy extension."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.11, preliminary fact (5), converse irreducibility argument; the disk push is made explicit below"
---

## Statement

Assume countable choice. Let $M$ be a compact orientable smooth three-manifold and let $\mathcal A$ be a finite disjoint family of properly embedded two-sided annuli. Suppose each map $\pi_1(A)\to\pi_1(M)$ is injective and every component of the cut-open manifold $M\mathbin{\|}\mathcal A$, with its boundary corners rounded, is irreducible. Then $M$ is irreducible. The family may be empty, and its annuli need not be separating or boundary-incompressible.

## Facts & Assumptions

**Given:** Countable choice, $M,\mathcal A$, their injectivity and the irreducibility of all cut pieces.

[A1] Countable choice is [[def-countable-choice]].

[F1] Irreducibility, two-sidedness and compressing disks have the conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]].

[F2] Compact embedded surfaces can be put in finite relative general position ([[lem-relative-transversality-for-embedded-surfaces]], Statement).

[F3] A parametrized smooth ball with a boundary disk window is the standard ball-window pair, and a ball attached along such a window is absorbed by a diffeomorphism in its collar ([[lem-smooth-ball-windows-and-boundary-disk-absorption]], Statement).

[F4] A smooth isotopy of a compact disk extends to a supported ambient isotopy; boundary-valued annulus isotopies also extend ([[thm-isotopy-extension]], Statement).

[F5] A nullhomotopic regular circle in an oriented surface bounds a disk region, unique in a nonspherical connected component ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], Statement, clause 4).

[F6] The bounded region of a smooth planar Jordan curve is a parametrized smooth disk, with prescribed boundary collars allowed ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]], Statement).

## Proof

1.1 Let $S$ be a smooth embedded sphere in the interior of $M$. By [F2] make it transverse to $\mathcal A$; intersections are finitely many disjoint circles. Among all such transverse positions obtained by ambient isotopies supported in the interior choose one with the least number of circles. The set of possible counts is a nonempty subset of the natural numbers, so it has a least element; only one representative is selected. If the count is zero, $S$ lies in the interior of a cut piece and bounds a ball there by the Given irreducibility. Suppose instead that a circle $C$ is innermost on $S$, bounding $D\subset S$ with interior disjoint from all annuli. Its class is trivial in $\pi_1(M)$ and hence in the annulus $A$ containing it, by injectivity. By [F5] applied to the oriented open annulus, $C$ bounds a disk region $D'$ in its interior, unique because that component is not a sphere. Its inherited disk-region charts are smooth, since $C$ and $A$ are smooth. Lift this simply connected compact disk region to the standard strip cover of the annulus. The lift projects diffeomorphically onto it, and is the bounded region of its smooth planar boundary circle. Thus [F6] supplies an actual smooth disk parameter, with the boundary collar retained when needed. Thus $D\cup D'$ is an embedded sphere with a corner along $C$. [A1, F1, F2, F5, F6, given, construct]

2.1 The interior of $D$ lies on one cut side of $A$. Push $D'$ slightly into that side and round the rim along $C$. This produces a sphere in the interior of the same cut piece, hence a ball there. Restore the thin product collar between the pushed disk and $D'$: in the two-dimensional normal section at $C$ the two meeting half-disks form a quadrant, and its rounding has the same ball-window chart. Thus [F3] adds precisely that collar window and gives a ball $B$, allowing the displayed boundary corner, with boundary $D\cup D'$ and $B\cap\bigcup\mathcal A=D'$. This assertion concerns that particular side, not an assumption that an arbitrary sphere in $M$ already bounds a ball. It follows from the cut-piece ball and the restored window; all other cut faces remain outside it. [F1, F3, step 1.1, construct]

3.1 We spell out the disk push across this ball. Standardize $(B,D')$ by [F3]; its complementary boundary disk is $D$. The two hemispheres of a standard ball admit a common-boundary disk sweep through its interior. For example, in polar disk coordinates $0\le\rho\le1$ the spherical caps with center height $a\in[-1,1]$ have meridian coordinates $$r_a(\rho)=\frac{1+a^2}{2a}\sin(2\rho\arctan a),\qquad z_a(\rho)=\frac{a^2-1}{2a}+\frac{1+a^2}{2a}\cos(2\rho\arctan a),$$ with the removable values $r_0(\rho)=\rho,z_0(\rho)=0$. Rotating these arcs about the vertical axis gives embedded disks joining the lower hemisphere to the upper one and fixing their common circle. The expressions extend smoothly through $a=0$ by their power series; at the axis $r_a(\rho)/\rho$ and $z_a(\rho)$ are smooth functions of $\rho^2$, and at the rim the meridian derivative is nonzero even for $a=\pm1$. Thus these are smooth disk embeddings, not merely a contraction of their images. In a thin rim collar extend their meridian arcs to the stationary annulus outside $D'$, and at the last stage push the resulting disk just past $D$ in its surface-normal collar. This extension is obtained in the normal two-dimensional section by rounding the joining arc and using a cutoff on a slightly larger rim interval; the tangent turns between two nonzero incident directions and the interval is chosen small enough that the curve stays embedded. The sign of the last push is chosen so that the continued outer annulus misses $S$ at the former crossing $C$. Outside that rim collar the last disk is a parallel copy of $D$, disjoint from $S$; compactness supplies one normal width valid on its whole disk. Consequently this is an isotopy of $A$ that replaces its subdisk $D'$ by a disk just past $D$, removes $C$ and every other intersection circle inside $D'$, and creates no new intersections with $S$. Its support is in $B$ and an arbitrarily thin collar of its rim and faces; other annuli are disjoint from that support by step 2.1. Use [F4] to extend it to an ambient isotopy $H$ of $M$, fixed near $\partial M$. Then $H^{-1}(S)$ has fewer intersections with the original $\mathcal A$, since its intersections correspond to those of $S$ with the moved annuli. This contradicts the minimal choice of step 1.1. [A1, F3, F4, step 1.1, step 2.1, construct]

4.1 The minimal count must therefore be zero. The ball in the cut piece from step 1.1 is a ball in $M$, and its inverse image under the isotopies bounds the original sphere. This proves irreducibility. If the annulus family is empty, the zero-count argument applies immediately. At no stage was an annulus required to separate, and no boundary-compressibility assertion was used. [F1, step 1.1, step 3.1] ∎


<!-- lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations -->
---
id: lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations
kind: lemma
title: "Compatible whole-star triangulations of smooth three-manifold pairs"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-relative-smooth-triangulation-and-projection-preserving-fitting, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations, lem-finite-convex-cell-complexes-admit-compatible-triangulations]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The relative finite triangulation supplier explicitly makes its AC assumption dispensable (Statement, F4 and Proof5.1); the pair construction uses only its finite construction and finitely many additional choices."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "§10.6, relative boundary extension, through the local finite-corners supplier; the simultaneous cut-pair gluing and differential-fan verification are supplied here"
---

## Statement

Let $M$ be a compact smooth three-manifold with boundary allowed. Let $S_1,\ldots,S_l$ be finitely many pairwise disjoint compact neatly properly embedded smooth surfaces with supplied smooth two-sided product neighborhoods. Let $C$ be a finite disjoint union of smooth circles in $\partial M$ containing every component of $\bigcup_i\partial S_i$. Then $M$ has a finite whole-star smooth triangulation in which $\partial M$, all $S_i$ and $C$ are subpolyhedra, full after subdivision. Every compact boundary subsurface whose boundary consists of components of $C$ is a subpolyhedron as well.

Here neat means that the surfaces meet the ambient boundary transversely, with the usual product charts there. The conclusion supplies the PL structure compatible with these smooth data. It does not identify an arbitrary preexisting topological or PL marking with that structure.

## Facts & Assumptions

**Given:** The compact smooth manifold, finite neat two-sided surface family and finite boundary circle system of the Statement.

[F1] Whole-star smooth embeddings and finite corner-adapted relative boundary data have the exact differential-fan and orthant meaning of [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].

[F2] Compact smooth manifolds with corners have finite whole-star triangulations, and supplied compatible boundary triangulations extend pointwise, with compatible subdivisions allowed. Its Statement explicitly makes AC dispensable; Facts F4 and Proof5.1 verify that the construction uses only finite choices, so we use precisely that choice-free construction ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Statement and Proof5.1).

[F3] Finite compatible convex cell decompositions have compatible triangulations ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]], Statement).

## Proof

1.1 Give $C$ finite whole-star smooth triangulations by [F2] in dimension one. Cut the boundary surface $\partial M$ along those circles. Its finitely many compact surface pieces have the matching triangulations on their boundary circles, so [F2] in dimension two extends them to whole-star surface triangulations. Glue the paired circle copies by their identical parametrizations. Along a glued circle the two tangent half-planes are opposite and their common tangent line is mapped identically; their differential fans therefore give the entire tangent plane injectively. After common subdivisions this gives a finite whole-star triangulation of $\partial M$ with $C$ a subpolyhedron. Each boundary subsurface of the Statement is a union of the resulting cut components and boundary circles, so is a subpolyhedron. Independently triangulate each $S_i$ by the dimension-two relative assertion of [F2], retaining its already fixed boundary-circle maps. [F1, F2, given, construct]

2.1 Cut $M$ along all $S_i$, using the supplied product neighborhoods. The resulting compact smooth manifold $N$ has corners along their boundary circles. At such a circle the neat charts are $\mathbb R\times[0,\infty)\times\mathbb R$ with the surface the zero set of the last coordinate; either cut side is a quadrant times $\mathbb R$. Its boundary faces are the cut pieces of the old boundary and the copies $S_i^\pm$. Give these copies the identical maps obtained in step 1.1. Their maps agree on every common circle. Their differential fans give exactly the union of the two boundary faces of the quadrant: each face fan fills its half-plane, their common line agrees, and the two inward face directions are independent by neatness. Thus these are admissible corner boundary data in [F1], not merely unrelated simplexwise immersions. Apply [F2] to each component of $N$ with these total-boundary data. [F1, F2, step 1.1, construct]

3.1 The paired $S_i$ triangulations may have been subdivided differently during extension, but their maps are pointwise the same original maps. On each original abstract surface simplex the two finite subdivisions have a common convex-cell refinement, triangulated by [F3]. Extend that finite refinement to incident ambient simplices by taking its face refinements and coning each remaining cell from an interior point. This only subdivides the already smooth simplex maps; their whole-star differential fans are unchanged. Repeat finitely for all paired faces, then subdivide barycentrically to make the fits full. The paired copies now glue simplicially by their identical maps. Their finite union realizes the original smooth $M$, and its restrictions to each simplex are the old smooth maps. [F1, F3, step 2.1, construct]

4.1 Verify the ambient whole-star condition at the glued loci. At an interior point of an $S_i$, the two half-space differential fans from its two cut sides meet exactly in its tangent plane and fill opposite half-spaces of $T_xM$. They are injective individually by [F2] and agree on that common plane, so their union is an injective fan onto $T_xM$. At a boundary point of $S_i$, the two quadrant fans similarly fill the ambient tangent half-space, sharing precisely the cut-face sector; the inherited old-boundary faces join on its boundary plane. The map is therefore whole-star everywhere, including the corners restored by gluing. Away from the cut surfaces it already was so by [F2]. Finiteness, all required subpolyhedra and fullness follow from steps 1.1–3.1. The differential-fan charts are finite PL homeomorphisms onto linear spaces or half-spaces. They also give standard PL simplex links: slice their common convex cone refinement by the source link level and by a small convex target box, match the corresponding face incidences, and cone their finite face triangulations using [F3]. Thus the underlying triangulation has the standard PL sphere or ball links required by finite PL manifold suppliers. Every construction used the given smooth structure and finite data, establishing the stated compatibility and its limit. [F1, F2, F3, step 1.1, step 3.1, construct] ∎


<!-- lem-finite-flat-product-torus-secant-transport-has-whole-star-fans -->
---
id: lem-finite-flat-product-torus-secant-transport-has-whole-star-fans
kind: lemma
title: "Finite torus secant transport in a supplied flat product has whole-star fans"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-relative-smooth-triangulation-and-projection-preserving-fitting, lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps, lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, thm-covering-space-lifting-criterion, thm-banach-fixed-point]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The ambient flat product and the finite smooth torus parameters are supplied. Periodic shape-controlled grids, finite derivative/separation bounds and finite compatible subdivisions are explicit; no arbitrary smooth or topological triangulation theorem is invoked."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "James R. Munkres, Elementary Differential Topology (1966)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "Sections8–9 via the fully read local stability and shape-controlled secant suppliers. The periodic flat-product transport and its entire ambient differential-fan verification are supplied here; no arbitrary-marking compatibility is inferred."
---

## Statement

Let $X=(\mathbb R^2/\mathbb Z^2)\times[0,1]$ have its supplied flat smooth and product PL structures. Let $S_i\subset\operatorname{Int}X$ be a finite disjoint family of smoothly parametrized embedded two-sided tori. Then there exist disjoint finite locally flat PL tori $P_i$, given PL product collars and a homeomorphism $K:X\to X$, equal to the identity outside arbitrarily small disjoint tubular neighborhoods, with $K(P_i)=S_i$. The map $K$ is smooth on every closed simplex of a given finite ambient triangulation, and its differential fan is injective on every whole ambient star. Thus every PL subpolyhedron in a finite compatible refinement is carried to a finite whole-star piecewise smooth subpolyhedron.

More precisely the collars have source coordinates $(u,r)\in T^2\times[-\epsilon,\epsilon]$ and maps $L_i$ and $E_i$, with $L_i$ PL, $E_i(u,0)$ the prescribed smooth torus parameter, and $K\circ L_i=E_i$ near $r=0$. Here $E_i$ is an ordinary smooth normal collar, so its smooth normal coordinate is exactly the PL collar coordinate $r$ after transport. The homeomorphism is isotopic to the identity through finite piecewise smooth homeomorphisms. This last assertion is a continuous ambient isotopy used for topological transport; no jointly smooth ambient isotopy is claimed for $K$.

## Facts & Assumptions

**Given:** The fixed flat product structures and finite disjoint smooth torus parameters in the Statement.

[F1] Shape-controlled finite secants converge strongly in piecewise $C^1$; whole-star embeddings are stable under such approximation ([[lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps]], [[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]], full proofs).

[F2] The whole-star differential-fan convention is [[def-relative-smooth-triangulation-and-projection-preserving-fitting]]. Finite embedded PL polyhedra admit compatible ambient subdivisions ([[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]], Statement).

[F3] Smooth full-rank coordinate maps have local inverses without choice ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], Statement). A map from a simply connected parameter domain lifts to the standard product cover after fixing one initial lift ([[thm-covering-space-lifting-criterion, thm-banach-fixed-point]], Statement).

[F4] A contraction of a nonempty complete metric space has a unique fixed point ([[thm-banach-fixed-point]], Statement); its successive iterates are uniquely specified and require no choice.

## Proof

1.1 For a torus parameter $F:T^2\to X$, orient its domain and use the oriented flat target to take its smooth unit normal $n$. The map $E(u,r)=F(u)+r n(u)$, defined in flat local lifts, has invertible derivative at $r=0$. By [F3] and compactness it has full-rank derivative on one common strip; it is injective after shrinking that strip, since a sequence of hypothetical collisions with radii tending to zero would converge to the same torus point and contradict a local inverse there. Equivalently finitely many local-inverse neighborhoods and compact separation of distant domain parameters supply a common width directly. Choose the finitely many strips disjoint and inside the prescribed neighborhoods. Lift each $E$ from $\mathbb R^2\times[-\epsilon,\epsilon]$ to $\mathbb R^2\times(0,1)$. Its deck equivariance is $\widetilde E(u+m,r)=\widetilde E(u,r)+(A m,0)$ for a fixed integral matrix $A$, by uniqueness of lifts; all its derivatives are periodic. Only one initial lift per torus is selected. [F3, given, construct]

2.1 Triangulate the parameter product by a uniform periodic lattice, with the central level $r=0$ included, splitting its cubes in a fixed coordinate order. Its shapes have one positive thickness bound; the fixed scale $\epsilon$ only changes that bound by a fixed positive factor. Interpolate $\widetilde E$ at its vertices. The secant $\widetilde L$ has the same deck equivariance, so descends to a finite PL map $L$. Its value and derivative errors tend uniformly to zero on one compact fundamental domain by [F1], hence on every translate. These estimates give an embedding and injective full differential fans in the flat target. To spell out the local-to-global point, cover the parameter strip by finitely many convex flat boxes on each of which $DE$ differs from one invertible matrix $A_0$ by less than a quarter of its least singular value. For fine secants $DL$ differs from $A_0$ by less than half that value on every incident grid simplex. Integrating on a segment, split at its finitely many grid crossings, gives a uniform local lower Lipschitz bound. The identical inequality for the frozen piecewise linear differential fan makes that fan injective. For pairs not in one such box, compactness and injectivity of $E$ give a positive image separation, retained under small value error. This proves global embedding and full-star injectivity in the target quotient as well; all boxes lift to Euclidean boxes and their transition maps are translations. The central $P=L(T^2\times\{0\})$ is consequently a finite locally flat PL torus, with the explicit PL product collar $L$. [F1, F3, step 1.1, construct]

3.1 Choose a smooth cutoff $\chi(r)$ equal to one near $0$ and zero near the strip ends. In lifts define $$E_t^*(u,r)=L(u,r)+t\chi(r)(E(u,r)-L(u,r)),\qquad 0\le t\le1.$$ The correction is periodic, so this is well-defined in $X$. The derivative error from $E$ is bounded by a constant times the secant value and derivative errors; the cutoff derivative is fixed. Make the grid fine enough that the local lower-Lipschitz and frozen-fan estimates of step 2.1 hold for every $t$. The global separation estimate then proves that every $E_t^*$ is an embedding with injective whole-star differential fan. It agrees with $L$ on an open strip near the ends. On the PL tube $L(T^2\times[-\epsilon,\epsilon])$ set $K_t=E_t^*\circ L^{-1}$, and take the identity outside. These maps paste on open overlaps. They are homeomorphisms. First an interior point of a tube cannot cross its fixed boundary during this homotopy: at a crossing it would equal the image of a boundary point, contradicting embedding of $E_t^*$. Thus every tube image stays inside that same tube. The local estimates give a local homeomorphism as well as injection: in a convex box write the map as $A_0x+g(x)$ with $\operatorname{Lip}(A_0^{-1}g)<1/2$. For a target sufficiently near the image of its center, $x\mapsto A_0^{-1}(y-g(x))$ maps a smaller closed ball into itself and is a contraction, so [F4] supplies a unique local inverse, continuous by the same inequality. Across the tube ends the map is the identity nearby. The pasted compact injective map therefore has open and closed image in connected $X$, hence is onto. Their inverses are continuous jointly, by compactness of the parameter tube and the common local lower bounds. Thus $K_t$ is an ambient isotopy. At $t=1$, its central formula is $K_1 L=E$, as required. [F1, F2, F3, F4, step 2.1, construct]

4.1 Refine the given product triangulation of $X$ to contain the finitely many PL tube simplex images and their central tori, using [F2]. Their intersections with a fundamental cube are finite polyhedra; if they cross a periodic face include its finitely many translated face cuts before coning the common convex cell subdivision. On each resulting simplex inside a tube, $L^{-1}$ is affine and $E_t^*$ extends smoothly; outside the tubes the map is the identity. At tube boundaries these formulas agree on an open neighborhood. The differential fan of $K_t$ is the injective fan of $E_t^*$ composed with the bijective PL fan of $L^{-1}$, so is injective on the entire ambient star, not merely on each simplex. For a PL subpolyhedron take a finite common refinement with this ambient triangulation; restriction of that ambient fan to its tangent substar retains injectivity. This proves the whole-star transport assertion, with actual finite parameterizations. The empty family gives $K_t=\operatorname{id}$. No arbitrary marking of a general smooth or topological manifold was used. [F1, F2, step 1.1, step 3.1, construct] ∎


<!-- lem-connected-complement-surfaces-have-independent-mod-two-homology-classes -->
---
id: lem-connected-complement-surfaces-have-independent-mod-two-homology-classes
kind: lemma
title: "Connected-complement surfaces have independent mod-two homology classes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-coordinate-ball-classes-identify-local-homology-stalks
  - lem-compatible-local-orientation-classes-exist-over-compact-subsets
  - thm-excision-for-singular-homology
  - thm-long-exact-sequence-in-homology
  - thm-long-exact-sequence-of-a-pair-in-singular-homology
  - thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
  - thm-five-lemma-for-a-morphism-of-long-exact-sequences
  - lem-finite-convex-cell-complexes-admit-compatible-triangulations
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. Mod-two local orientations are canonical, and the compact fundamental classes use the choice-free finite-support orientation supplier. The jump computation uses one standard divided cube and its finite face matrices, not general Poincare duality or an ambient triangulation."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition1.7, printed p.12, independence of the nonseparating surfaces; the proof here gives a local singular-chain jump argument requiring no simultaneous ambient triangulation."
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf"
      locator: "Local homology and orientations, pp.233–238, through the fully read local coordinate-ball and compact-support orientation suppliers."
---

## Statement

Let $N$ be a connected Hausdorff topological three-manifold without boundary. Let $S_1,\ldots,S_m$ be finitely many disjoint compact connected locally flat embedded surfaces without boundary. They may be one-sided and nonorientable. If $N\setminus\bigcup_j S_j$ is connected, their canonical mod-two fundamental classes have linearly independent images in $H_2(N;\mathbb F_2)$. The manifold may be noncompact and nonorientable, and the family may be empty. No choice axiom or ambient triangulation is assumed.

## Facts & Assumptions

**Given:** The connected manifold and finite disjoint locally flat surface family with connected complement.

[F1] For a compact coordinate ball, its supported top homology maps isomorphically to every interior point stalk, compatibly on smaller chart balls. These comparisons require no choice. [[lem-coordinate-ball-classes-identify-local-homology-stalks]]

[F2] A supplied continuous local orientation section over a boundaryless manifold has a unique compatible class supported on any compact subset. The construction and local-stalk injectivity are choice-free. Over $\mathbb F_2$ each local stalk has the unique nonzero element, which is a canonical continuous orientation section, including for a nonorientable manifold. Applied to compact $S_j$ itself this supplies $[S_j]\in H_2(S_j;\mathbb F_2)$ with the prescribed generator in every local surface stalk. [[lem-compatible-local-orientation-classes-exist-over-compact-subsets]]

[F3] Excision and the pair exact sequences are natural. The short exact sequence of relative chain complexes for $C\subset B\subset X$ has connecting map $H_3(X,B)\to H_2(B,C)$ represented by taking the boundary of a relative chain. [[thm-excision-for-singular-homology]] [[thm-long-exact-sequence-in-homology]] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]

[F4] Finite convex cell decompositions have compatible triangulations. Simplicial homology with coefficients $\mathbb F_2$ agrees naturally with singular homology; applying the pair exact sequences and the five lemma gives the same comparison for finite subcomplex pairs. Thus finite divided-cube boundary matrices compute the connecting maps in [F3]. [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]] [[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]] [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]

## Proof

1.1 The empty family is independent. Otherwise suppose a relation $\sum_j\lambda_j(i_j)_*[S_j]=0$, with $\lambda_j\in\mathbb F_2$. Choose fundamental cycles $z_j$ on the finitely many $S_j$. By the meaning of homology there is a finite singular three-chain $c$ in $N$ with $\partial c=\sum_j\lambda_j(i_j)_\#z_j$. For $x$ outside the surface union this is a relative cycle in $(N,N\setminus\{x\})$. Write $a(x)\in\mathbb F_2$ for its point-local class in the canonical generator coordinate from [F2]. This function is locally constant on that complement. Indeed a small closed coordinate ball $K$ disjoint from the surfaces contains no point of $\operatorname{supp}\partial c$, so the same chain represents a class in $H_3(N,N\setminus K;\mathbb F_2)$. All its point restrictions over $\operatorname{Int}K$ have the same coordinate by [F1]. Since the complement is connected, $a$ is constant there. The only selections so far are finitely many cycle representatives and a single chain. [F1, F2, given, construct, algebra]

2.1 Fix $j$ and a point on $S_j$. Local flatness and separation from the other finitely many compact surfaces give a chart $U=(-2,2)^3$ in which the surface union is exactly $\{x_3=0\}$. Put $K=[-1,1]^3$ and $D=K\cap\{x_3=0\}$. Set $C=N\setminus\operatorname{Int}K$ and $B=C\cup\bigcup_iS_i$. The chain $c$ is a cycle modulo $B$. Its image under [F3]'s connecting map is represented by $\partial c$ modulo $C$. Excision removes the closed set $N\setminus U$, contained in the interior of $C$, for all three relative complexes. Radial retraction $x\mapsto x/\max(1,\lVert x\rVert_\infty)$, with its straight radial homotopy, then identifies the triple with $(K,\partial K\cup D,\partial K)$. It preserves the plane $x_3=0$ and sends the outside of $\operatorname{Int}K$ to $\partial K$. Consequently the local boundary map is $H_3(K,\partial K\cup D)\to H_2(\partial K\cup D,\partial K)$, and the image of $\partial c$ is $\lambda_j[D]$. Here $[D]$ is its relative generator: the compact fundamental cycle of $S_j$ restricts to that generator by [F2], and the other surface cycles are absent from $U$. [F2, F3, step 1.1, construct]

3.1 Compute this map in the standard divided cube, not by an unproved global duality assertion. Triangulate its two closed half-cubes compatibly with $D$ and $\partial K$ by [F4]. In the relative degree-three kernel, coefficients of tetrahedra must agree across every interior face outside $D$. The tetrahedra in each half-cube are joined through such faces; for example a generic polygonal path between their interiors crosses faces and avoids the finite codimension-two skeleton. There is no constraint between the halves, since $D$ is omitted in the relative complex. There are no degree-four simplices. Hence the relative group is $\mathbb F_2^2$, with generators the sums of all tetrahedra in the upper and lower half-cube. Each restricts to the nonzero local generator at points in its own open half and to zero in the other; this is the coordinate-ball comparison [F1], after a radial convex-ball parameter for that half-cube. In the relative boundary modulo $\partial K$, either sum has boundary the sum of the triangles of $D$. The target is $\mathbb F_2[D]$, by the same disk-relative finite computation. Thus the connecting map sends $(b_+,b_-)$ to $(b_++b_-)[D]$. The natural relative comparison in [F4] gives exactly this same formula for singular chains. [F1, F3, F4, step 2.1, construct, algebra]

4.1 Take one point in each open half-cube. The two coordinates $b_+,b_-$ of the localized class of $c$ are respectively its point degrees $a(x_+),a(x_-)$. Steps 2.1–3.1 therefore give $\lambda_j=a(x_+)+a(x_-)$. But both points lie in the connected complement, where step 1.1 made $a$ constant. Their sum is zero. This holds for every $j$, so every coefficient in the original relation vanishes. The argument used only local flat charts, canonical mod-two orientations, finite chains and one finite cube calculation at a time. In particular it permits a one-sided surface, whose two local sides simply belong to the same global complement, and makes no orientability, smoothing, triangulation-existence or choice assertion. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, algebra] ∎


<!-- lem-rectangular-normal-cut-components-are-interval-bundles -->
---
id: lem-rectangular-normal-cut-components-are-interval-bundles
kind: lemma
title: "Rectangular normal-cut components are interval bundles"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-relative-smooth-triangulation-and-projection-preserving-fitting
  - lem-finite-convex-cell-complexes-admit-compatible-triangulations
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. All ball, disk and rectangle parameters are supplied. Product extensions, base cells, interval charts and averaging weights are finite; the midpoint is uniquely defined by an atomless full-support measure."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition1.7, printed p.12, rectangular components. The finite product-ball assembly, base-vertex charts and one-sided core section are proved below."
---

## Statement

Let $M$ be a compact smooth three-manifold with a supplied finite whole-star smooth manifold triangulation. Let $\mathcal S$ be a finite disjoint two-sided closed smooth torus family in its interior, in normal disk position: each tetrahedron meets it in proper disks with the triangle or quadrilateral boundary patterns. Suppose all balls obtained by cutting individual tetrahedra along those disks have supplied ball parameters, with their disk faces and face-cell corners retained. Supply parameters of the rectangle face cells, taking their opposite edges on $\mathcal S$ as horizontal and their other two edges on triangulation edges as vertical.

Let $C$ be a connected component of $M$ cut open along $\mathcal S$ which meets every triangular face only in rectangle cells. Then $C$ is disjoint from $\partial M$ and is a topological interval bundle over a compact connected surface without boundary. Its bundle admits a locally flat embedded core surface $Q$, obtained as a section, and the base has a finite cellulation. If $C$ is not homeomorphic to $T^2\times I$, the core is one-sided and $C\setminus Q$ is connected. No choice axiom is assumed.

The conclusion is a topological interval-bundle parameterization from the specified finite data. It asserts neither smoothness nor compatibility with an unrelated marking.

## Facts & Assumptions

**Given:** The compatible manifold triangulation, normal torus family, supplied cut-ball and face-rectangle parameters, and the rectangular-only cut component.

[F1] Whole-star manifold triangulations have the local full-space or half-space fan structure of [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].

[F2] Finite convex face decompositions admit compatible triangulations by coning, as in [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]. A boundary circle homeomorphism of a parametrized disk extends over the disk by the radial formula $r u\mapsto r b(u)$; this is used only as a topological homeomorphism.

## Proof

1.1 Consider a cut ball $B$ belonging to $C$. Its boundary is divided into horizontal disk copies of $\mathcal S$ and vertical cells from tetrahedron faces. All the latter are rectangles by the hypothesis on $C$. At a segment of a triangulation edge exactly two such rectangle sides meet in this ball, since a tetrahedron has two faces there. No vertex of the tetrahedron belongs to $B$: every face region incident to such a vertex is a nonrectangular corner region. Thus the union $V$ of the vertical rectangles is an interval bundle over a finite one-manifold, obtained by gluing the base intervals of rectangles at their endpoints. The glued vertical edges are its interval fibers. Every base vertex has degree two, so each connected base component is a circle. Its total space is an annulus or a Möbius band according as the interval return map preserves or reverses endpoints. This follows directly by cutting that circle once; an increasing return homeomorphism is interpolated to the identity by $(1-s)g(t)+st$, while a decreasing one is interpolated to the reflection. The Möbius case cannot be a subsurface of the oriented boundary sphere of $B$. Hence every component of $V$ is an annulus, with its interval fibers. [F1, given, construct]

2.1 Each boundary circle of $V$ is the whole boundary circle of one horizontal disk. A horizontal disk has only one boundary, so it meets exactly one annulus end. The boundary sphere of $B$ is connected; the incidence graph of these disks and annuli consequently consists of two disks and a single connecting annulus. Choose product coordinates on that annulus retaining its given interval fibers: trivialize around its base circle by the increasing-return interpolation in step 1.1. Parametrize each horizontal disk with the induced boundary coordinate, extending its circle reparametrization radially by [F2]. These maps give a boundary homeomorphism from the boundary of $D^2\times I$ to $\partial B$, taking horizontal disks and every vertical fiber to the specified ones. A radial extension over a standard convex ball, followed by the supplied parameter of $B$, extends that boundary map to a homeomorphism $D^2\times I\to B$. Thus every rectangular-only cut ball has a product parameter. No uniqueness of ball parameters or smooth Alexander interpolation is claimed or needed. [F2, step 1.1, construct]

3.1 Choose each physical face rectangle's fiber arcs once, using its supplied parameter, and use those same arcs on the two incident balls in step 2.1. Their product parameters then identify the shared rectangle by a fiber-preserving map. Near the interior of its base edge, write that map as $(s,t)\mapsto(f(s),g(s,t))$. The base map $f$ is a homeomorphism and every $g(s,-)$ is an interval homeomorphism; extending these same maps constantly in the collar-normal coordinate gives an interval-bundle chart over the glued base strip. At a base vertex, the balls are those incident to one segment of the original one-skeleton. Their normal sectors have a cyclic link by [F1]; their interval identifications around that cycle compose to the identity, since they identify the same actual points of that segment. To see extension at that center explicitly, cut the polygonal vertex star along one radial line and trivialize its finitely many product sectors in order. At a small base radius the return interval map is increasing, depends continuously on the radius and tends to the identity at radius zero, since its edge maps telescope there. Interpolate its inverse to the identity by convex combinations of increasing interval maps while unwinding the angular coordinate across the cut. This cancels the return map. The correction tends uniformly to the identity at the center, so it extends continuously to the central interval and gives a disk times an interval there. The base is the finite complex formed by gluing the disk bases of the balls along the indicated edge intervals. Its face interiors, edge interiors and vertex stars are respectively disks, strips and disks. It is consequently a compact connected surface without boundary, and these constructions give an interval bundle with total space $C$. [F1, step 1.1, step 2.1, construct]

4.1 This component cannot meet the original boundary. A boundary triangle has no intersections with the closed interior torus family; its whole face is a nonrectangular region. A component reaching a boundary edge or vertex likewise reaches such a region by its half-space local charts. Thus every boundary component of $C$ is one of its cutting torus faces. The base also has an explicit finite surface cellulation: use the disk bases and paired edge intervals just constructed, reparametrize their finitely many boundary edges once, and extend each boundary reparametrization radially over its disk. The edge gluings can then be made linear. For an explicit regular subdivision, insert disjoint small vertex disks, edge rectangles and the remaining polygon interiors in its finite surface stars. Triangulate these finitely many pieces with matching boundary subdivisions by [F2]. This separates repeated incidences and gives a finite surface triangulation. In particular the base has a compact metric and a finite interval-bundle trivializing cover. [F1, F2, step 3.1, construct]

5.1 To produce an actual core without assuming all interval transitions are already affine, take such a finite trivializing cover $U_i$ of the base. It has continuous nonnegative weights summing to one: in its finite-complex metric use $d(q,Q\setminus U_i)$, taking the constant one when $U_i=Q$, and normalize their finite positive sum. Here $Q$ temporarily denotes the abstract base. In the fiber over $q$, give the $i$th interval chart normalized Lebesgue measure and combine these measures with those weights. Terms outside $U_i$ are zero. This defines an intrinsic atomless probability measure of full support on each fiber. In any chosen local orientation of the fiber, its cumulative distribution is jointly continuous in the base and interval coordinate, strictly increasing from zero to one. Joint continuity follows from the finite sum of the continuous coordinate changes on the charts; at a chart's boundary its bounded contribution tends to zero with its weight. Hence its unique midpoint varies continuously: two strictly bracketing distribution values continue to bracket under a small change of the base point. The midpoint is a section. Its signed cumulative coordinate identifies every fiber with $[-1,1]$, and on overlaps the new coordinates differ only by $u\mapsto u$ or $u\mapsto-u$, depending on which endpoint was chosen as initial. This reduces the bundle to an ordinary linear interval bundle. [step 3.1, step 4.1, construct]

6.1 The image of that section is now a compact connected locally flat embedded core, again denoted $Q$: in each bundle chart it is the plane $u=0$ in a disk times an interval. The two local sides form the endpoint-orientation double cover of the base. If that cover is disconnected, either of its two components supplies a global endpoint choice, and the cumulative coordinate trivializes $C$ as $Q\times I$. Its two boundary components are tori by step 4.1, so $Q$ is a torus and $C$ is $T^2\times I$. If $C$ is not that product, the endpoint cover is connected, the core has no global choice of side, and it is one-sided. Removing the core gives a bundle of half-open intervals over that connected double cover; local products and connected fibers make its total space connected. Equivalently, radial contraction of each half-fiber onto its endpoint is a deformation retraction onto that cover. All choices of rectangles, parameters, charts and weights were finite, and the midpoint was unique. This proves the asserted interface and its topological category. [step 3.1, step 4.1, step 5.1, construct] ∎


<!-- lem-two-sided-pl-tori-in-a-parametrized-pl-ball-have-pl-compressions -->
---
id: lem-two-sided-pl-tori-in-a-parametrized-pl-ball-have-pl-compressions
kind: lemma
title: "Two-sided PL tori in a parametrized PL ball have PL compressions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-pl-embedding-and-subpolyhedron
  - lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation
  - thm-higher-dimensional-spheres-are-simply-connected
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
  - lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity
  - thm-fundamental-group-of-the-circle
  - thm-fundamental-group-of-a-product
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. Local sphere-link disk parameters, cut-side labels, finite subdivisions and PL collars use only finite data. The finite PL Loop criterion is choice-free. No general topological three-manifold triangulation theorem is used."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.10–11 and Corollary3.3, p.48. The finite PL local-flatness, bicollar and compression interface is supplied below; it does not cover an arbitrary topological torus marking."
---

## Statement

Let $B$ be a parametrized PL three-ball with a finite compatible PL manifold triangulation. Let $T\subset\operatorname{Int}B$ be the image of a PL embedding of the standard PL torus. Suppose $T$ is two-sided, meaning that it has a topological product neighborhood $T\times(-1,1)$ with the given central inclusion. Then $T$ has a finite compatible PL bicollar and an embedded PL disk $D\subset\operatorname{Int}B$ with $D\cap T=\partial D$ and $\partial D$ essential on $T$. No choice axiom is assumed.

The PL hypothesis on the torus is explicit. This result supplies no compatibility assertion for a torus given only by an unqualified topological embedding in the ball.

## Facts & Assumptions

**Given:** The parametrized finite PL ball, PL embedded torus and supplied topological two-sided neighborhood.

[F1] Compact PL embedded subpolyhedra admit compatible finite subcomplex triangulations and subdivisions. [[def-pl-embedding-and-subpolyhedron]] [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]

[F2] A standard PL two-sphere is simply connected. An embedded polygonal circle on a finite oriented PL sphere has two complementary PL disk regions. [[thm-higher-dimensional-spheres-are-simply-connected]] [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]]

[F3] A compact locally PL collared subpolyhedron has a PL collar; in particular this applies to a boundary component of a compact PL manifold. [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]

[F4] In a supplied finite orientable PL three-manifold, a two-sided locally flat PL surface with supplied compatible triangulation and PL product collar is geometrically incompressible if and only if its fundamental group injects. [[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]]

[F5] The standard circle has fundamental group $\mathbb Z$, and product projections identify the torus group with $\mathbb Z^2$. [[thm-fundamental-group-of-the-circle]] [[thm-fundamental-group-of-a-product]]

## Proof

1.1 By [F1] refine so $T$ is a full subcomplex. At a vertex of this subcomplex its surface link is a PL circle embedded in the standard PL two-sphere which is the ambient interior vertex link. The latter has a supplied standard parameter from the PL manifold triangulation. By [F2] the circle bounds two PL disks. Parametrize both by standard polygonal disks. Their boundary parameters can be matched: a PL circle homeomorphism extends by coning a common finite subdivision of its domain and target circles to their disk centers. The two disk maps then give a PL homeomorphism of the link pair to a standard sphere with its equatorial polygonal circle. Coning this pair map to the ambient vertex gives a PL chart in which $T$ is a flat plane. The finitely many open vertex stars cover $T$, and each chart flattens the whole surface portion in its star. Thus local PL flatness has been established from the link disks, not inferred from the given merely topological product map. [F1, F2, given, construct]

2.1 Cut the finite ambient complex along the full surface subcomplex: keep the original three-simplices, cease gluing across its two-faces and distinguish incident vertex and edge copies according to their local sides. The finite flat charts of step 1.1 show that each local side is a PL half-space. The result is a compact finite PL three-manifold; its new boundary projects to $T$ as the finite PL two-sheeted side cover. The given topological product neighborhood labels these sides continuously by the sign of its interval coordinate. This trivializes that cover: its two labeled parts project bijectively and locally piecewise linearly to $T$, hence are PL copies $T_+$ and $T_-$. No assertion that the original product map was PL has been made. Face subdivisions distinguish any repeated quotient incidences and give a finite compatible triangulation of this cut space. [F1, step 1.1, construct]

3.1 Apply [F3] to its two new boundary copies. Shrink the compact collars so they miss each other and the old ball boundary; finite compact separation gives one width. Reglue $T_+$ to $T_-$ by their pointwise identical projection to $T$. Their two PL collars then give a PL bicollar $T\times[-\epsilon,\epsilon]\to B$. Its finite product triangulation can be fitted to the ambient finite triangulation by [F1]. Thus all the local-flatness, finite-triangulation and product-collar inputs of [F4] are now supplied, including when the initial two-sided neighborhood was only topological. [F1, F3, step 2.1, construct]

4.1 If there were no PL compressing disk, [F4] would inject $\pi_1(T)=\mathbb Z^2$ into $\pi_1(B)=1$, impossible by [F5] and radial contraction in the supplied ball parameter. Therefore [F4] gives an embedded PL disk meeting $T$ exactly in its boundary, which does not bound a PL disk on $T$. By [F2]'s surface disk criterion this boundary is nontrivial in $\pi_1(T)$, hence essential. Its interior may be taken on one of the cut sides: the constructive implication in [F4], Proof 1.2 and 4.1, applies finite PL Loop to a noninjective cut face and gives a disk proper in that cut component. In particular it avoids the old boundary of $B$. Alternatively any contact with that old boundary can be removed by the PL boundary collar in [F3]: choose its width disjoint from $T$ and map its height $r$ to $\delta+(1-\delta/(2\eta))r$ for $0\le r\le2\eta$, keeping heights beyond $2\eta$ fixed, with $0<\delta<2\eta$. This is a PL inward embedding fixed near $T$. It puts the disk entirely in $\operatorname{Int}B$, retaining its boundary and compression property. Properness was needed on the cut side, not as a disk with boundary on $\partial B$. All constructions used finite data and the choice-free suppliers. [F2, F3, F4, F5, step 1.1, step 3.1, construct, algebra] ∎


<!-- lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption -->
---
id: lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
kind: lemma
title: "Choice-free marked smooth ball windows and disk absorption"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-choice-free-isotopy-extension-for-a-compact-smooth-source, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The input includes actual ball and window parameters and, for attachment, the attaching collar. All shrinking paths, Euclidean cutoffs and ambient extensions use finitely many charts and the choice-free compact-source extension supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma1.3 and its complete proof, printed p.3; the fixed-input finite-chart extension removes any dependence on a general partition-of-unity theorem"
---

## Statement

For $n=2,3$, a given smooth ball embedding $e:D^n\to N$ into a connected boundaryless smooth $n$-manifold is isotopic through embeddings to a small coordinate round ball, and that embedding isotopy extends ambiently with compact support. For a parametrized smooth $n$-ball $B$ and a parametrized smooth boundary $(n-1)$-disk $W$, the pair $(B,W)$ is diffeomorphic to the standard ball with a hemispherical window. The diffeomorphism can retain the specified window parameter, using stereographic parameters on the standard hemisphere and allowing the necessary orientation of that parameter. No choice axiom is assumed.

Consequently, attaching a parametrized smooth $n$-ball to a smooth $n$-manifold along such a window does not change its diffeomorphism type, provided an attaching collar and corner rounding are supplied. The resulting diffeomorphism is supported in the added ball and an arbitrarily small receiving collar. The inverse assertion holds for removing a ball that meets the boundary in exactly one such window with the supplied collar charts. In dimension two the windows are intervals.

## Facts & Assumptions

**Given:** The specified smooth embeddings, ball and disk parameters, and the attaching collar and rounded local corner charts where attachment or removal is asserted.

[F1] An isotopy of embeddings of a compact smooth source into a boundaryless smooth target, stationary near its time endpoints, extends smoothly with compact support in a chosen track neighborhood, without choice ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement).

[F2] Full-rank Euclidean maps have smooth local inverses, without choice ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], Statement).

## Proof

1.1 First shrink the source parameter by $e_t(x)=e(r(t)x)$, with $r$ decreasing from $1$ to a fixed $\varepsilon>0$ and stationary near both time endpoints. For small enough $\varepsilon$ the last image lies in one chart about $e(0)$. Write its coordinate map near zero as $f$, with $f(0)=0$ and derivative $L$ invertible. Choose $m>0$ with $|Lv|\ge m|v|$, and $\varepsilon$ with $\|Df(y)-L\|<m/2$ for $|y|\le\varepsilon$. The maps $$f_u(x)=\varepsilon Lx+(1-u)(f(\varepsilon x)-\varepsilon Lx)$$ are embeddings: their derivatives are invertible and their differences satisfy $|f_u(x)-f_u(y)|\ge\varepsilon m|x-y|/2$. Their images lie in the chart after a further shrink. Write $L=QP$, with $Q$ orthogonal and $P$ positive definite. The path from $P$ to a small scalar matrix stays positive definite. It takes this parameterized ellipsoid to a coordinate round ball with parameter $x\mapsto\lambda Qx$. Stationarize the joins and apply [F1]. These are finitely specified paths. Small round balls can be moved along a finite chart chain: connectedness and local path-connectedness give a path between their centers, its compact image has a finite chart subdivision, and small translations and positive dilations in each chart give the required disk embedding paths. Apply [F1] to each path. [F1, F2, given, construct]

2.1 Pull the window to $S^{n-1}$ using the supplied parameter of $B$. Repeat step 1.1 in dimension $n-1$ for its full-dimensional disk embedding. Here the shrinking dimension is one for $n=2$, and the argument is unchanged. Move the small coordinate disk to a fixed pole and use a stereographic chart centered there. Its final disk parameter is $x\mapsto\lambda Qx$ in that chart. Increase $\lambda$ to the radius for a hemisphere; all disks in this path are embedded, and [F1] extends this isotopy of boundary disk embeddings to the whole sphere. Therefore the endpoint sphere isotopy sends the original window parameter exactly to stereographic $Qx$ on the hemisphere. Orthogonal $Q\in O(n-1)$ extends by the orthogonal symmetry $\operatorname{diag}(Q,1)$ of $S^{n-1}$; compose with its inverse if exact standard orientation of the disk parameter is required. This fixed symmetry extends linearly over $D^n$. The sphere isotopy itself extends over the ball by $$rx\longmapsto r\,h_{\alpha(r)t}(x),$$ with $\alpha=0$ near an inner radius and $\alpha=1$ near the outer boundary, and the identity on the inner ball. Its inverse has $h_{\alpha(r)t}^{-1}$ in the same formula, and it is smooth at the inner gluing sphere because it is exactly the identity nearby. Thus the window and its full parameter are standardized without an extension assertion for arbitrary sphere diffeomorphisms. [F1, step 1.1, construct]

3.1 Use that retained parameter to standardize the added ball's actual attaching map. A standard hemisphere window can be flattened in its normal collar to give a flat disk with a dome over it; interpolate the two graph functions while keeping positive normal derivative. Thin this dome by positive scaling of its normal coordinate. In the supplied receiving collar, use disk coordinates $x$ and inward coordinate $t\ge0$. After the specified corner rounding, the union with this thin cap has equation $t\ge\gamma(x)$, where $\gamma\le0$ is smooth and supported in a slightly extended disk chart. A full-dimensional disk parameter extends a little across its edge by [F2] and finitely many boundary charts: local smooth extensions agree on the disk, and a finite bump-weighted extension retains them there; its differential remains invertible, and compactness separates distant parameters, giving one smaller injective extension. These are only finite constructions. Choose a smooth one-variable cutoff $\rho(t)$ equal to one near the thin cap and zero beyond the receiving collar. Make the cap so thin that $\|\gamma\rho'\|_\infty<1$. Then $$ (x,t)\longmapsto(x,t-\gamma(x)\rho(t))$$ takes the rounded union diffeomorphically to $t\ge0$: its normal derivative is positive, its value on $t=\gamma(x)$ is zero, and it is the identity at the far end of every collar fiber. Off this coordinate neighborhood it is the identity. The inverse gives the removal statement with the same support. In dimension two $x$ is one-dimensional and the identical formula proves interval attachment. No general collar-existence or unmarked ball-identification theorem has been used; the required parameters and attaching collars were part of the input. [F2, step 2.1, construct] ∎


<!-- lem-seifert-boundary-fibers-are-rigid-under-nonexceptional-free-product-quotients -->
---
id: lem-seifert-boundary-fibers-are-rigid-under-nonexceptional-free-product-quotients
kind: lemma
title: "Boundary fiber slopes from nonexceptional free-product quotients"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-incompressibility-seifert-fibration-and-jsj-system, lem-nonexceptional-finite-free-products-have-no-normal-cyclic-subgroup]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.20, Lemma 1.15, for the boundary-slope conclusion; the group-quotient argument here is supplied independently"
---

## Statement

Let $M$ be a compact connected orientable smooth Seifert-fibered three-manifold and let $T$ be a boundary torus whose inclusion induces an injection on fundamental groups. Fix one Seifert fibration and a based regular fiber $h\in\pi_1(T)\subset\pi_1(M)$. Suppose the quotient $\pi_1(M)/\langle h\rangle$ is isomorphic to a finite free product of at least two nontrivial groups, excluding the free product of two groups of order two. Then every Seifert fibration of $M$ has the same unoriented regular-fiber slope on $T$ as the fixed fibration. No choice hypothesis is introduced. The notation $\langle h\rangle$ denotes the cyclic subgroup, which is normal as proved below.

## Facts & Assumptions

**Given:** $M,T,h$, the injective boundary inclusion and the specified quotient isomorphism.

[F1] The Seifert local models are fibered solid tori, and their regular fibers are embedded circles ([[def-incompressibility-seifert-fibration-and-jsj-system]], Definition).

[F2] A finite free product of nontrivial groups, with at least two factors and other than the two-order-two case, has no nontrivial cyclic normal subgroup ([[lem-nonexceptional-finite-free-products-have-no-normal-cyclic-subgroup]], Statement).

## Proof

1.1 For any Seifert fibration the subgroup generated by a based regular fiber is normal in $\pi_1(M)$. Here is the transport argument including exceptional fibers. A loop can be moved off the finitely many exceptional cores: in each solid-torus chart perturb its finitely many subarcs away from the central one-dimensional core, keeping their endpoints fixed, and then concatenate. The regular part is a circle bundle. On a finite subdivision of the loop into bundle charts, transport a fiber around it; on chart overlaps a circle parameter changes by a circle homeomorphism of degree $+1$ or $-1$. The swept cylinders give the based homotopy relation $a h a^{-1}=h$ or $h^{-1}$. This also applies to loops crossing an exceptional-fiber neighborhood, since the chosen loop avoids its core and that punctured neighborhood is in the regular bundle. Compactness of the base and its isolated exceptional points makes their number finite: a finite cover by the local fiber charts contains at most one exceptional fiber in each chart. All perturbations and chart subdivisions used for an individual loop are finite. Thus the cyclic fiber subgroup is normal, without a need to orient all fibers coherently. [given, F1, construct]

2.1 Let $h'$ be a regular fiber of a second Seifert fibration, based on the same boundary torus. Step 1.1 makes $\langle h'\rangle$ a normal cyclic subgroup of $\pi_1(M)$. Its image in $Q=\pi_1(M)/\langle h\rangle$ is cyclic and normal, hence trivial by [F2]. Therefore $h'=h^m$ in $\pi_1(M)$ for some integer $m$. Since both loops lie in $T$ and $\pi_1(T)\to\pi_1(M)$ is injective, the same equality holds in $\pi_1(T)\cong\mathbb Z^2$. [F2, step 1.1, algebra]

3.1 Both boundary fibers are primitive nonzero classes in $\mathbb Z^2$. To check primitivity without a marking assumption, the boundary restriction of a Seifert fibration is an ordinary circle bundle $T\to S^1$. Cut its base circle at a point. The resulting annulus has the fiber as either end circle; a section over the cut interval joins any point to its image under the return map. Join that endpoint back to the initial point along the fiber and push the resulting loop slightly at the join. Its projection has degree one and its oriented intersection with a fiber is one. Thus a boundary fiber admits an integral dual class taking value one, which proves primitivity and nonvanishing. The equation of step 2.1 now forces $m=1$ or $m=-1$. Finally primitive equal unoriented homology classes on a torus are the same unoriented slope: lift two simple representatives to the planar cover, remove finitely many innermost bigons in a fundamental annulus, and the remaining disjoint essential curves bound an annulus. The annulus product moves one curve to the other; reversing its parameter accounts for the sign. Thus the two regular fibers have the asserted identical unoriented slope. Every choice in this argument is finite, and no triangulation of an arbitrary topological three-manifold is involved. [given, F1, step 2.1, construct] ∎


<!-- lem-choice-free-relative-transversality-for-a-compact-smooth-embedding -->
---
id: lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
kind: lemma
title: "Choice-free relative transversality for a compact smooth embedding"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-choice-free-isotopy-extension-for-a-compact-smooth-source, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, thm-morse-sard-for-euclidean-maps, def-null-and-content-zero-in-rn]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. Compactness gives finite coordinate and velocity families and finitely many critical-set charts. Euclidean Sard is choice-free, and a finite union of its null sets cannot fill a parameter ball."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Encyclopedia of Mathematics, Sard theorem"
      url: "https://encyclopediaofmath.org/wiki/Sard_theorem"
      locator: "Classical critical-value input, via the fully read local Euclidean Sard proof; the compact finite perturbation and choice audit are given here, with no claim to a full primary-text reading."
---

## Statement

Let $P$ be a compact smooth manifold with boundary, let $N$ be a boundaryless Hausdorff smooth manifold, and let $i:P\to N$ be a smooth embedding. Let $Z\subset N$ be a closed embedded smooth submanifold without boundary. If $i$ is transverse to $Z$ along $\partial P$, then an arbitrarily small jointly smooth ambient isotopy, supported in any prescribed neighborhood of $i(P)$ and fixed on a neighborhood of $i(\partial P)$, makes $i(P)$ transverse to $Z$. The isotopy may be stationary near its time endpoints. No choice axiom is assumed. The same assertion holds for any finite family of such $Z$, provided the initial boundary restriction is transverse to every member. Empty source and empty intersection are allowed.

## Facts & Assumptions

**Given:** The compact embedding, closed target submanifold or finite family, initial boundary transversality and prescribed track neighborhood.

[F1] Compact-source smooth embedding isotopies have choice-free ambient extensions. Its finite coordinate-bump and quantitative compact-flow construction is also available ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement and Proof 2.1–4.1).

[F2] An invertible Euclidean derivative has a smooth local inverse ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], Statement).

[F3] The critical values of a smooth map between Euclidean open sets form a null set, without choice ([[thm-morse-sard-for-euclidean-maps]], Statement and full proof).

[F4] Null sets admit arbitrarily small total-volume cube covers ([[def-null-and-content-zero-in-rn]], Definition).

## Proof

1.1 If $P$ is empty, take the identity. Transversality is open by the tangent spanning condition. Compactness of $\partial P$ therefore gives a source neighborhood $U$ of that boundary on which $i$ is transverse to every specified $Z$. Choose smaller neighborhoods $V_0,V_1$ of the boundary with $\overline V_0\subset V_1$ and $\overline V_1\subset U$. They can be obtained from finitely many half-space charts and finite bumps; if $\partial P$ is empty take them empty. The compact sets $i(P\setminus U)$ and $i(\overline V_1)$ are disjoint. Choose finitely many target coordinate balls covering the former, with compact closures in the prescribed track neighborhood and disjoint from the latter. In each choose bump-multiplied coordinate frame fields, with bumps positive on smaller balls. If the former set is empty, sufficiently small perturbations are already transverse, so the identity suffices. Otherwise these finitely many fields span the target tangent space at every point of $i(P\setminus U)$ and vanish on a neighborhood of $i(\overline V_1)$. No infinite family of local choices has been selected. [F1, F2, given, construct]

2.1 The finite compact-flow proof of [F1] integrates each field for a common short parameter range. Compose their time-$a_j$ flows, in a fixed order, to get ambient diffeomorphisms $H_a$ with $H_0=\operatorname{id}$ and compact support in the chosen neighborhood. Put $G(p,a)=H_a(i(p))$. At $a=0$, the parameter derivative spans $T_{i(p)}N$ for $p\in P\setminus U$. This submersion property persists for all sufficiently small $a$, by compactness and finitely many nonzero minors. The parameter-spanning neighborhoods contain an open neighborhood of the compact set $P\setminus U$. Remove a smaller such neighborhood. The remaining source region outside the fixed boundary neighborhood is a compact subset of $U$, so initial transversality there persists for small $a$ by the same finite-minor argument; closedness of $Z$ excludes new intersections away from a neighborhood of its initial preimage. On the fixed boundary neighborhood the map remains $i$. Hence after restricting to one parameter ball $B$, $G$ is transverse to each $Z$ everywhere. The path $H_{t a}$ is already an ambient isotopy, so there is no separate embedding-openness or extension assumption. [F1, F2, step 1.1, construct]

3.1 Fix one $Z$. The preimage $W=G^{-1}(Z)$ is a smooth submanifold near every source point in the interior of $P$: in target coordinates $Z$ is the zero set of its normal coordinates, and the spanning condition says that the derivative of their composite with $G$ has full rank. Adding complementary source coordinates gives a square invertible derivative, so [F2] solves it as a graph. Let $\pi:W\to B$ be parameter projection. At $(p,a)\in W$, a tangent pair $(u,v)$ lies in $T W$ exactly when $dG(u,v)\in T Z$. Consequently $d\pi$ is onto exactly when $G_a$ is transverse to $Z$: one direction solves for $u$ for every $v$, and the reverse subtracts such a pair from a decomposition of any target vector given by total transversality. This is the elementary critical-projection argument, with no manifold transversality theorem as a premise. Critical points lie away from $V_0$, since all slices there are transverse. Restrict $a$ to a smaller closed parameter ball $\overline B'\subset B$. The critical set is closed in the compact set $(P\setminus V_0)\times\overline B'$: the preimage of closed $Z$ is closed and rank failure is closed. It is therefore compact and contained in the interior source region. Cover it by finitely many of the graph charts just constructed. In each chart, projection is a smooth Euclidean map; [F3] makes its critical values null. Thus all bad parameters in $B'$ lie in a finite union of null sets. Do this for each of the finitely many target submanifolds. [F2, F3, step 1.1, step 2.1, construct]

4.1 A finite union of null sets cannot contain a parameter ball. Indeed it remains null by assigning finitely many volume budgets. If it covered a closed positive-volume cube inside the ball, [F4] would give a cube cover of total volume less than half that cube's volume. Enlarge to open cubes with a still smaller total bound than the volume; compactness selects a finite subcover. Subdividing by their finitely many coordinate endpoints shows that their total volume is at least that of the covered cube, a contradiction. Choose a parameter outside the bad set in an arbitrarily small ball about zero. The associated $H_a i$ is transverse to every target submanifold and fixed on a neighborhood of the original boundary image. Smooth dependence makes $H_a$ and the whole path $H_{t a}$ arbitrarily small on the finite compact track as $a\to0$. Reparametrize $t$ smoothly to be stationary near $0,1$. All fields and chart choices were finite, the Euclidean critical-value suppliers are choice-free, and the final parameter is a single finite selection. This proves the claim. [F1, F3, F4, step 2.1, step 3.1, construct] ∎


<!-- lem-cut-along-incompressible-tori-preserves-irreducibility -->
---
id: lem-cut-along-incompressible-tori-preserves-irreducibility
kind: lemma
title: "Cutting an irreducible manifold along incompressible tori preserves irreducibility"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-two-sided-pl-tori-in-a-parametrized-pl-ball-have-pl-compressions
  - lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The original full AC hypothesis is retained. The repaired finite PL argument uses the choice-free explicit PL-ball compression supplier; it does not invoke a smooth triangulation theorem or an unqualified topological-torus supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, irreducibility after cutting along incompressible surfaces, printed pp.10–11"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§1, incompressible tori and irreducible cut pieces, PDF pp.2–4"
---

## Statement

Assume full AC. Let $M$ be a compact irreducible piecewise linear $3$-manifold with a finite compatible triangulation. Let $\mathcal T$ be a finite family of pairwise disjoint, two-sided, incompressible piecewise linear tori that are subcomplexes of that triangulation. Every component obtained by cutting $M$ along $\mathcal T$ is irreducible.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, §1.2](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** Full AC, the compact irreducible finite PL manifold, disjoint two-sided incompressible PL torus family and cut component of the Statement.

[A1] The original full AC assumption is [[def-axiom-of-choice]]. No essential use of it occurs in the finite argument below.

[F1] Here irreducibility and incompressibility are in the PL category specified in the Statement: an interior PL sphere bounds a PL ball, and a PL compressing disk has essential boundary on its surface and otherwise misses it. These are the geometric conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]], interpreted in that explicit category.

[F2] A two-sided PL torus in a parametrized finite PL ball has a PL compression contained in the ball's interior; its local PL flatness and compatible bicollar are supplied by the full link-disk and cut-collar proof. [[lem-two-sided-pl-tori-in-a-parametrized-pl-ball-have-pl-compressions]]

[F3] A compact PL ball and the finite PL torus polyhedra inside it have common compatible finite subcomplex subdivisions. [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]]

## Proof

1.1 Let $S$ be a PL sphere in the interior of the selected cut component. Its image in $M$ is a PL sphere missing every cutting torus, so bounds a parametrized PL ball $B$ by [F1]. Each connected cutting torus lies wholly inside or wholly outside that sphere. If a torus lies inside $B$, its existing two-sided neighborhood can be shrunk into $\operatorname{Int}B$, by compactness and a common smaller product width. It remains a PL embedded torus there. [F3] supplies the compatible finite subdivisions needed for [F2], even if the original triangulation of $B$ was different from the one containing the torus. [F1, F3, given, construct]

2.1 Such an inside torus would have the PL compressing disk of [F2] entirely in $B\subset M$, contradicting its original incompressibility. Thus $B$ misses every cutting torus. The connected ball interior lies in the same complement component as its collar along $S$, so $B$ lifts to a PL ball in the specified cut component with boundary $S$. Every interior PL sphere there therefore bounds a PL ball. This is precisely PL irreducibility; no smooth-ball or arbitrary-topological-marking claim entered. [A1, F1, F2, step 1.1, construct] ∎


<!-- lem-torus-in-ball-is-compressible -->
---
id: lem-torus-in-ball-is-compressible
kind: lemma
title: "Every embedded torus in a ball is compressible"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-connected-complement-surfaces-have-independent-mod-two-homology-classes
  - cor-contractible-nonempty-spaces-have-the-homology-of-a-point
  - thm-fundamental-group-of-the-circle
  - thm-fundamental-group-of-a-product
  - thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The original full AC hypothesis is retained; it supplies coset transversals for the two topological cut-piece groups in the amalgam argument. The local separation argument is choice-free. The missing topological cut-piece triangulation/Loop transfer is not supplied by this partial proof."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.1, Alexander's theorem and irreducibility; §3.1, Loop Theorem, printed pp.1–2 and 45–48"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§1, incompressible tori and irreducible pieces, PDF pp.2–4"
---

## Statement

Assume full AC. Let $B$ be a compact piecewise linear $3$-ball with a finite compatible triangulation, and let $T\subset\operatorname{int}B$ be a two-sided embedded torus, where two-sided means that $T$ has a product neighborhood with its given central inclusion. Then there is an embedded compressing disk $D\subset\operatorname{int}B$ with $D\cap T=\partial D$ and $\partial D$ essential on $T$. The disk is properly embedded in the closure of one component of $B\setminus T$: its boundary lies on that component's copy of $T$ and its interior lies in the interior of the component.
## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, §1.1 and §3.1](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** Full AC, the finite PL ball and the original unqualified two-sided embedded torus with product neighborhood. No PL or smooth compatibility of that torus is assumed.

[A1] Full AC is [[def-axiom-of-choice]]. It permits coset transversals for the possibly untriangulated cut-piece groups below.

[F1] Two-sidedness and a compressing disk have the geometric product-neighborhood and essential-boundary conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]]. A torus with a topological product neighborhood is locally flat, by its intrinsic surface charts crossed with the interval.

[F2] The finite PL Loop theorem applies to a compact orientable PL three-manifold with a supplied finite compatible manifold triangulation and a boundary subsurface. [[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]] No such triangulations of the presently unqualified topological cut pieces are supplied in this item.

[F3] Van Kampen gives the pushout for spaces glued along the connected torus product collar. When both side maps are injective, amalgam normal form with coset transversals supplied by [A1] embeds the torus group. [[thm-seifert-van-kampen]] [[thm-normal-form-for-free-products-with-amalgamation]]

[F4] A compact locally flat closed surface with connected complement in a boundaryless three-manifold has nonzero mod-two class, without choice or an ambient triangulation. [[lem-connected-complement-surfaces-have-independent-mod-two-homology-classes]] A contractible space has the homology of a point. [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] For mod-two chains on a point, $\partial_2$ is multiplication by $3=1$, so its second homology is zero.

[F5] The torus group is $\mathbb Z^2$ by the circle and product computations. [[thm-fundamental-group-of-the-circle]] [[thm-fundamental-group-of-a-product]]

## Proof

1.1 The interior of the parametrized PL ball is a contractible boundaryless topological three-manifold. Its second mod-two homology is zero by [F4]. Hence [F1] and [F4] show that its complement of $T$ cannot be connected. The same is true in $B$: push its outer boundary collar slightly inward, fixing the compact interior torus; if $B\setminus T$ were connected, its connected pushed image and the collar homotopy would make the interior complement connected. There are exactly two components. Indeed the two open product-collar sides of connected $T$ are connected, and every complementary component must meet one: otherwise its closure misses $T$ and it is open and closed in connected $B$. More explicitly, at any point of $T$ in the closure of a component, a local flat chart puts some collar-side patch in that component; the connected full side collar then belongs to it. Thus there are at most two components. Their closures $W_1,W_2$ are compact orientable topological three-manifolds, with the corresponding copies of $T$ in their boundaries. [F1, F4, given, construct]

1.2 If both maps $\pi_1(T)\to\pi_1(W_i)$ were injective, choose their coset transversals by [A1]. The given topological product collar gives the connected-overlap van Kampen cover, and [F3] expresses $\pi_1(B)$ as their amalgam with $\pi_1(T)$ embedded. By [F5] this would embed $\mathbb Z^2$ into the trivial group of the ball, a contradiction. Thus one side boundary map has nontrivial kernel. This conclusion is topological and has required no triangulation of the cut pieces. [A1, F3, F5, step 1.1, construct, algebra]

2.1 To finish with [F2], one would need an actual finite PL manifold triangulation of that compact topological side, with its boundary component $T$ a boundary subsurface. If that missing bridge were supplied, finite PL Loop would give a disk proper in the cut side, with essential boundary on its copy of $T$. Its image in $B$ would be an embedded disk entirely in $\operatorname{int}B$, with boundary on $T$ and interior disjoint from it; it would not be a disk proper relative to $\partial B$. The currently admitted unqualified torus scope supplies no such cut-piece triangulation, and a relative smooth triangulation theorem cannot create a missing smooth structure. This proof therefore remains incomplete for the full Statement at precisely that bridge. [F2, step 1.2, construct]

## Remarks

This established theorem retains its original unqualified two-sided torus inputs and full AC hypothesis. Only the impossible literal properness in the ambient ball has been corrected. The topological-to-finite-PL cut-piece bridge remains a held local authoring obligation; no proof completion or readiness is asserted.

The distinct lemma for explicitly PL embedded tori supplies the actual PL use in the cut-irreducibility item. It is not used to narrow the torus in this Statement.


<!-- lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars -->
---
id: lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
kind: lemma
title: "Choice-free smooth Jordan disk parameters and prescribed collars"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-polygonal-jordan-curve
  - thm-simple-polygon-admits-a-triangulation
  - thm-euler-formula-for-connected-plane-graphs
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
proof_strategy: direct
axiom_use: "Choice-free. The finite polygonal collapse proof is reproduced in full; disk attachments use supplied window parameters and explicit finite collars, and all supported extensions use the finite compact-source supplier. No arbitrary-cover partition of unity is invoked."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Sections2.6–2.7, finite boundary sums and disk windows, via the fully read local Jordan proof. The complete finite polygonal reduction and prescribed collar construction are reproduced here with choice-free suppliers; this is not a new primary-text reading claim."
---

## Statement

The bounded region of a smooth embedded
circle in the oriented plane, together with its boundary, is a smooth manifold
with boundary diffeomorphic to the closed standard disk. Let $D_0,D_1$ be two
such closed regions. Every orientation-preserving smooth boundary
diffeomorphism $b:\partial D_0\to\partial D_1$ extends to an
orientation-preserving diffeomorphism $B:D_0\to D_1$. More precisely, for
specified smooth inward collars $c_i:\partial D_i\times[0,\epsilon)\to D_i$
with $c_i(p,0)=p$, the extension may be required to satisfy
$B(c_0(p,r))=c_1(b(p),r)$ for every sufficiently small $r\ge0$. In addition, given interior points $p_i\in D_i$ and an orientation-preserving smooth diffeomorphism $q$ from a neighborhood of $p_0$ onto a neighborhood of $p_1$, the extension can agree with $q$ near $p_0$ while retaining the prescribed boundary collars.

## Facts & Assumptions

**Given:** The smooth embedded circles in the plane, their boundary map and collars, and the interior germ when prescribed.

[F1] A smooth map with invertible derivative is a local diffeomorphism, without a choice hypothesis ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]).

[F2] A simple polygon has exactly one bounded complementary region and one unbounded complementary region, with the polygon as the frontier of both ([[thm-polygonal-jordan-curve]]).

[F3] A simple polygonal region has a finite straight triangulation ([[thm-simple-polygon-admits-a-triangulation]]), and a connected finite plane graph has $V-E+F=2$ ([[thm-euler-formula-for-connected-plane-graphs]]).

[F4] A parametrized smooth disk attached along a parametrized boundary interval, with its explicit attaching collar and rounded corner, is absorbed by a diffeomorphism without choice ([[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]]).

[F5] Without choice, an isotopy of embeddings of a compact smooth manifold with boundary into a boundaryless manifold of the same dimension, constant near the two time endpoints, extends to a smooth ambient isotopy supported in any specified neighborhood of its track ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]]).

## Proof

1.1 Parametrize the circle by a smooth regular embedding $\gamma:S^1\to\mathbb R^2$, and let $n$ be its smooth unit normal obtained by rotating and normalizing its tangent. The map $T(s,r)=\gamma(s)+rn(s)$ has invertible derivative at $r=0$. By [F1] and compactness it is a local diffeomorphism on a common strip $|r|<a$. It is injective after shrinking $a$: otherwise collisions for widths tending to zero would have a subsequence of their circle parameters converging; equality of the limiting images and injectivity of $\gamma$ give the same limiting parameter, contrary to a local inverse there. Thus $T$ is a smooth two-sided annular coordinate. [F1, given, construct]

1.2 We prove that a rounded polygonal region is a smooth disk. Take the finite triangulation in [F3]. The dual adjacency graph of its triangles, with an exterior root adjacent across every boundary edge, is connected. Indeed the triangles at any one vertex form a consecutive cyclic fan or a consecutive interval fan, so all their sectors are joined through shared edges, and connectedness of the triangulated region joins all fans. Choose a finite spanning tree of this dual graph rooted at the exterior. Process triangles in increasing distance from that root. Remove each triangle and its edge toward its parent: this edge is free, since its only other incident triangle has already been removed or is exterior. Removing a triangle with its free side leaves its two other sides and vertices, preserves connectedness, and preserves $V-E+F$. Plane Euler in [F3], with the exterior counted as one extra face, gives initial value $V-E+F=1$. At the end the remaining connected graph $K$ therefore has $V-E=1$, so it is a tree: a spanning tree already has $V-1$ edges, leaving no edge outside that spanning tree. [F2, F3, construct]

2.1 Inscribe a polygon with a sufficiently fine cyclic mesh in $\gamma$. Uniform continuity of $\gamma'$ gives positive scalar product of each chord direction with the tangent at every nearby normal projection, and the chord error tends uniformly to zero. Hence the normal projection of each chord is strictly increasing in its cyclic coordinate; the whole polygon has degree one under normal projection and is a normal graph. In particular it is embedded. Smooth its finitely many corners in disjoint small graph charts: convolution of the local graph function with a smooth compactly supported kernel on a smaller interval, joined by a smooth cutoff on a larger interval, leaves it unchanged outside that chart and can be made arbitrarily small in height and tangent direction. The smoothed curve $P'$ is still a normal graph $r=f(s)$, with $f$ smooth and arbitrarily small. Choose a smooth cutoff $\chi$ supported in $(-a,a)$ and equal to one near zero. For $\|f\|_\infty\|\chi'\|_\infty<1$, the map $(s,r)\mapsto(s,r+\chi(r)f(s))$ is a diffeomorphism, because its normal derivative is positive, and equals the identity near the ends of the strip. It extends by the identity to a smooth plane diffeomorphism carrying $\gamma$ onto the rounded polygon $P'$. The same graph construction compares any two sufficiently small choices of corner rounding. By [F2], the polygon has bounded and unbounded regions; rounding preserves them by local graph homeomorphisms: in a graph chart, a continuous vertical displacement, cut off in the transverse direction with positive transverse derivative, carries the original piecewise affine graph to the rounded graph, and transporting them by the displayed plane diffeomorphism proves the corresponding separation and smooth boundary charts for $\gamma$. [F1, F2, step 1.1, construct]

3.1 Realize these finite collapses on smooth rounded neighborhoods. In affine coordinates on a triangle whose free side is to be removed, retain thin strips along its other two sides and a rounded disk at their common vertex. The missing sector can be chosen as a convex triangle with its corners rounded. Its attaching part runs along the inner sides of the two retained strips, joined around their common vertex, and is one boundary interval. Near the other two vertices use disjoint vertex disks and the corresponding short collar intervals; outside this triangle the neighborhood is unchanged. No other simplex meets its open interior. These choices give compatible rounded neighborhoods before and after the collapse whose difference is one smooth disk attached along one embedded boundary interval. To check that this added piece is a standard disk, a convex rounded triangle has a positive smooth radial boundary function $a(\theta)$ about any interior center. On the standard disk the radial map $r\mapsto r\exp(\eta(\log r)\log a(\theta))$ is smooth and linear near zero when $\eta=0$ there, agrees with $r\mapsto ra(\theta)$ near $r=1$ when $\eta=1$ there, and has positive radial derivative if $|\eta'|\,\|\log a\|_\infty<1$; choose its transition over a sufficiently long interval of $\log r$. Thus it is a disk parametrization. The corner models match the retained strip collars before [F4] is applied. Consequently each collapse preserves the smooth diffeomorphism type of the rounded neighborhood. A rounded neighborhood of the final tree is a disk: remove a leaf disk and its band successively, each a disk attached along one interval, until one vertex disk remains. Applying [F4] finitely often proves the assertion for the initial rounded polygon. Step 2.1 then proves it for the original smooth circle. [F4, step 2.1, step 1.2, construct]

4.1 Choose orientation-preserving disk parametrizations $p_i:\overline B(0,1)\to D_i$. The boundary map $p_1^{-1}bp_0$ has a smooth increasing angular lift $g:\mathbb R\to\mathbb R$, with $g(\theta+2\pi)=g(\theta)+2\pi$. Let $\rho(r)$ be smooth, zero near zero and one near one. The map $(r,\theta)\mapsto(r,\theta+\rho(r)(g(\theta)-\theta))$ is the identity near the center and has angular derivative $1+\rho(r)(g'(\theta)-1)>0$. It is consequently a smooth disk diffeomorphism extending the boundary map, and is a product in the radial collars. Conjugate by $p_0,p_1$ to obtain a preliminary extension. [step 3.1, construct]

5.1 We can replace either radial collar by its prescribed collar without changing the boundary. More generally, express two collars with the same boundary parametrization in the normal coordinates of step 1.1. Their relative coordinate map is $(s,r)\mapsto(S(s,r),R(s,r))$, where $S(s,0)=s$, $R(s,0)=0$, and $\partial_rR(s,0)>0$. Use the periodic lift of $S-s$ and interpolate to the identity by $(s+u(S-s),(1-u)r+uR)$ for $0\le u\le1$. At $r=0$ the Jacobian is triangular with positive diagonal entries $1,(1-u)+u\partial_rR(s,0)$. Smooth collar maps extend across $r=0$ in the normal chart, by their local smooth-extension convention and finitely many chart cutoffs. Compactness and the local-inverse and separation argument of step 1.1 give a common narrow two-sided closed annulus on which every interpolated map is an embedding. Reparametrize $u$ smoothly to be constant near its endpoints. Apply [F5] to this compact two-dimensional annulus and the ambient plane, with support in a thin boundary neighborhood. The prescribed isotopy fixes its middle circle, so its ambient extension fixes every boundary point and preserves the bounded side. Its final diffeomorphism identifies the two collar germs exactly. Perform this correction on both sides of the preliminary extension of step 4.1. The resulting extension agrees with $c_0(p,r)\mapsto c_1(b(p),r)$ on a common smaller collar. Its smooth inverse and orientation follow from the same properties of all the factors. [F1, F5, step 1.1, step 4.1, construct]

6.1 For the interior prescription, first move $B(p_0)$ to $p_1$ by a diffeomorphism supported in $\operatorname{int}D_1$. A smooth path exists there by the disk parametrization of step 3.1. Cover it by finitely many interior coordinate balls and subdivide it so each successive pair lies in one smaller convex coordinate ball. For each pair, translation of a sufficiently small closed coordinate disk along their segment is an isotopy of full-dimensional disk embeddings whose track lies in that ball. Apply [F5], with a time parameter constant near its ends, and compose the resulting supported ambient diffeomorphisms. This moves the point as stated and leaves a neighborhood of the boundary fixed. Rename the resulting extension $B$. The germ $k=q\circ B^{-1}$ at $p_1$ fixes $p_1$ and preserves orientation. In centered coordinates its rescalings $k_t(x)=k(tx)/t$ for $t>0$ extend smoothly at $t=0$ to $Ax$, where $A=Dk(0)$, since $k(tx)/t=\int_0^1Dk(stx)x\,ds$. Each positive linear matrix $A$ is smoothly joined to the identity: write $A=RP$ with $P$ positive definite and $R$ a rotation, interpolate $P$ linearly to the identity and the rotation angle linearly to zero. Concatenate the resulting path from the identity to $A$ with $k_t$ from $A$ to $k$, and make the time parameter constant near the endpoints and all joins. On one common sufficiently small closed disk all slices are embeddings with track in an interior coordinate ball, by compactness and the inverse-function and separation argument of step 1.1. [F5] extends this disk isotopy to an ambient isotopy supported in that ball. Its terminal map $K$ agrees with $k$ near $p_1$, so $K\circ B=q$ near $p_0$. The boundary collars stay fixed. The attachments have actual convex disk parameters and explicit edge/vertex collars from step 3.1, exactly the marked inputs required by [F4]. All supported extensions use [F5], whose compact-track finite bump proof requires no choice. Thus all selections and compositions here are finite and no choice hypothesis has been added. [F1, F5, step 1.1, step 3.1, step 5.1, construct] ∎


<!-- lem-seifert-fiber-quotient-is-finite-orbifold-free-product -->
---
id: lem-seifert-fiber-quotient-is-finite-orbifold-free-product
kind: lemma
title: "The fiber quotient of a Seifert piece with boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-incompressibility-seifert-fibration-and-jsj-system, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-seifert-van-kampen, lem-seifert-boundary-fibers-are-rigid-under-nonexceptional-free-product-quotients]
justified_by: []
proof_strategy: direct
axiom_use: "The declared full AC hypothesis is retained. The finite smooth triangulation supplier explicitly makes AC dispensable (Statement, F4 and Proof5.1); this finite presentation construction has no essential additional choice use."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.13–14, local Seifert models, and p.20, boundary-fiber uniqueness; the quotient calculation below is supplied explicitly"
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable smooth Seifert-fibered three-manifold with nonempty boundary. Let $B$ be its underlying compact base surface, let $q_1,\ldots,q_m\ge2$ be the exceptional multiplicities, and let $h$ be a based regular fiber. Put $r=1-\chi(B)$. Then $r\ge0$, the subgroup $\langle h\rangle$ is normal, and
$$\pi_1(M)/\langle h\rangle\cong F_r*C_{q_1}*\cdots*C_{q_m},$$
where $F_r$ is the free group of rank $r$, $F_0$ is trivial, and an empty free product is trivial.

If $r+m\ge2$, excluding $r=0,m=2,q_1=q_2=2$, every boundary torus whose inclusion is injective on fundamental groups has the same unoriented fiber slope for every Seifert fibration of $M$. No family of essential annuli is required for this conclusion. Boundary injectivity itself is an explicit hypothesis of this last assertion, not a consequence claimed here.

## Facts & Assumptions

**Given:** Full AC and the Seifert piece, base and multiplicities of the Statement.

[A1] Full AC is [[def-axiom-of-choice]].

[F1] Seifert local models and multiplicities are those of [[def-incompressibility-seifert-fibration-and-jsj-system]].

[F2] Compact smooth surfaces with boundary have finite compatible triangulations ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Statement, in dimension two).

[F3] A based Serre fibration with connected fiber has an exact sequence on fundamental groups ending in $\pi_1$ of the base and the trivial fiber-component set ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], Statement).

[F4] Van Kampen identifies the group after a solid-torus filling with the pushout of the boundary inclusion maps ([[thm-seifert-van-kampen]], Statement).

[F5] Fiber subgroups are normal by finite bundle-chart transport, and an injective boundary torus has a rigid fiber slope when the quotient by one fiber subgroup is a nonexceptional finite free product ([[lem-seifert-boundary-fibers-are-rigid-under-nonexceptional-free-product-quotients]], Proof 1.1 and Statement).

## Proof

1.1 The base is a compact surface with nonempty boundary. Its exceptional points are isolated, and a finite cover by local fiber charts shows that there are finitely many. Remove pairwise disjoint small open disks about them to form $B_0$, and remove their fibered solid-torus preimages from $M$ to form $M_0$. The restriction $M_0\to B_0$ is an ordinary circle bundle. The base charts away from exceptional points are ordinary disk or half-disk charts, and the quotient chart at an exceptional point is a disk with its marked center; these supply the base surface structure. Apply [F2] after choosing the disks, treating their boundary circles as boundary components. A locally trivial circle bundle is a Serre fibration here: a lifting problem on a finite cube is solved over finitely many subdivisions subordinate to trivializing charts, extending the already specified lift across successive parameter prisms using the chart product and retaining their common faces. Thus [F3] gives a surjection $\pi_1(M_0)\to\pi_1(B_0)$ whose kernel is the image of the fiber group, namely $\langle h\rangle$. In particular $\pi_1(M_0)/\langle h\rangle\cong\pi_1(B_0)$. Normality in the filled $M$ also follows directly from [F5]. [given, A1, F1, F2, F3, F5, construct]

2.1 Compute the base group while retaining the puncture generators. Join each of the $m$ new boundary circles of $B_0$ to one chosen original boundary component by disjoint embedded arcs. They can be constructed successively in a finite surface triangulation: choose an edge path between the desired boundary components, remove loops, perturb its interior off the boundary and existing arcs, and cut along it. Cutting an arc joining two distinct boundary components leaves the surface connected and reduces the number of boundary components by one; the inverse operation attaches a rectangular band along two intervals. The resulting cut surface $B'$ has nonempty boundary, is connected, and satisfies $\chi(B')=\chi(B_0)+m=\chi(B)$. A triangulated compact connected surface with boundary collapses to a finite graph: take a spanning tree in the triangle adjacency graph, rooted at an edge on the boundary; delete the root triangle across that free boundary edge, and then delete each successive triangle across its now exposed parent edge. Every triangle is deleted once and every deletion retains its other edges. The remaining connected one-complex is a graph spine. Collapsing a finite spanning tree in that graph gives a free fundamental group of rank $1-\chi(B')=r$, proving $r\ge0$. Restoring each cut band adds one free graph edge. Its loop may be chosen to run around precisely the corresponding puncture, with a path from the fixed basepoint along the joining arc. This follows also by covering the restored band and a small attaching collar by a rectangle: it attaches a one-cell between two points of the connected spine and no two-cell. Therefore, with these marked loops $c_j$ around the deleted disks, $\pi_1(B_0)=F_r*\langle c_1\rangle*\cdots*\langle c_m\rangle$. [F2, F4, step 1.1, construct]

3.1 Fill one removed fibered solid torus. The inclusion of its boundary torus onto its fundamental group is surjective, with kernel generated by the meridian: in its ordinary solid-torus coordinates the longitude maps to its core generator and the meridian bounds a disk. Hence [F4] eliminates the new core generator and adds exactly the normal meridian relation to $\pi_1(M_0)$. In the quotient by the regular fiber, this relation becomes $c_j^{q_j}=1$, up to inversion and conjugation. To verify the exponent, in the multiplicity-$q_j$ model the transverse disk covers the quotient base disk with degree $q_j$ off its center; its meridian therefore traverses the base puncture circle exactly $q_j$ times. Any change of its chosen boundary lift only multiplies by a fiber power, which is already killed. Repeating the finite fillings and then quotienting by $h$ gives $\pi_1(B_0)/\langle\!\langle c_1^{q_1},\ldots,c_m^{q_m}\rangle\!\rangle$. The free-product description of step 2.1 now gives exactly $F_r*C_{q_1}*\cdots*C_{q_m}$: a homomorphism out of either group is precisely a choice of images of the $r$ free generators and elements satisfying the respective relations $c_j^{q_j}=1$. Their identical universal properties give inverse isomorphisms. [F1, F4, step 1.1, step 2.1, algebra, construct]

4.1 Write $F_r$ as a free product of $r$ infinite cyclic groups. Under the numerical condition of the Statement there are at least two nontrivial factors, and the only two-order-two possibility is exactly the excluded case. Apply [F5] to any boundary torus with the specified injectivity. This proves fiber-slope uniqueness there for every other fibration, even when that fibration has a different base or exceptional multiplicities. The calculations also include $m=0$ and $r=0$ with the stated empty-product conventions. All topological constructions used compact smooth surfaces and already supplied Seifert charts; no topological three-manifold triangulation or full JSJ theorem was used. [A1, F5, step 3.1, algebra] ∎


<!-- lem-choice-free-smooth-torus-curves-and-annulus-strips -->
---
id: lem-choice-free-smooth-torus-curves-and-annulus-strips
kind: lemma
title: "Choice-free smooth torus curve normalization and annulus strips"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-essential-simple-curve-on-torus-is-primitive, lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars, lem-choice-free-isotopy-extension-for-a-compact-smooth-source, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. All curve approximations, intersections and relevant deck translates are finite; smooth disk parameters and supported isotopies use the named finite suppliers."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.16, finite boundary-curve vertical/horizontal normalization. The primitive reduction, finite bigon moves and smooth annulus-strip parameters are proved explicitly here."
---

## Statement

An essential smooth embedded circle in the standard torus $T=\mathbb R^2/\mathbb Z^2$ represents a nonzero primitive integral homology class. A finite disjoint family of essential smooth circles can be carried by a jointly smooth ambient isotopy of $T$ to parallel affine circles. Two essential circles with the same primitive unoriented class are smoothly ambient isotopic. The components between disjoint essential circles have smooth annulus parameters, with prescribed product collars on their boundary circles. No choice axiom is assumed.

Likewise two smooth spanning arcs of a parametrized annulus with the same endpoints and relative winding number are smoothly ambient isotopic relative to any collars on which they already agree. When disjoint, they have a smooth disk-strip parameter; disjoint essential circles in a parametrized annulus have smooth annulus-strip parameters. All isotopies may be stationary near their time endpoints.

## Facts & Assumptions

**Given:** The standard torus or parametrized annulus and the indicated finite smooth curve or arc system.

[F1] An essential embedded PL circle in the standard torus has primitive nonzero homology class, by a transverse circle of intersection $\pm1$ ([[lem-essential-simple-curve-on-torus-is-primitive]], full proof).

[F2] Planar smooth Jordan disks admit smooth parameters and extensions retaining specified boundary collars, without choice ([[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]], Statement).

[F3] Compact-source smooth embedding isotopies extend ambiently with compact support, without choice ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement).

[F4] Full-rank Euclidean coordinate maps have smooth inverses ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], Statement).

## Proof

1.1 A smooth circle in the flat torus has a two-sided normal strip: rotate its unit tangent by $\pi/2$ in the oriented flat metric and use $\gamma(s)+r n(s)$ in local lifts. Its derivative is invertible at $r=0$; [F4], compactness and separation of distinct circle parameters give one injective strip. Subdivide its parameter into finitely many intervals lying in lift charts and replace their images by chords. Sufficiently fine chords have positive tangent projection and uniformly small normal error, so the resulting polygon is an embedded normal graph over the circle, exactly as for the inscribed polygon in [F2]'s proof. Normal graph interpolation gives a homotopy in the torus. The polygon is PL in a finite subdivision of the standard square triangulation (subdivide its finitely many crossings with square edges). It is essential and has the same homology class. Apply [F1]. Any two disjoint essential circles have proportional classes, since their algebraic intersection is zero; primitive nonzero classes with zero determinant agree up to sign. [F1, F2, F4, given, construct]

2.1 We give the finite bigon reduction with its smooth realization. Apply an integral unimodular linear torus map to put the common primitive class in direction $(1,0)$. Lift to the annular cover $\mathbb R^2/\langle(1,0)\rangle$ and then to the plane. Each reference lift is a proper horizontally periodic line in a bounded vertical strip. Its translates are disjoint. When two circles intersect, their signed crossing sum is zero; hence a segment of a lift leaves and returns to the same side of a reference lift. Among return regions choose one innermost with respect to the finitely many translates meeting this bounded excursion. Any further arc entering it has an innermost return through its reference boundary interval, giving a smaller return region. Reference lifts cannot enter without such a return either. Thus it is an empty bigon. Its projection is injective: translated boundaries cannot cross inside it, while strict nesting of it and a nonzero translate is impossible for bounded equal-area regions. The same argument for spanning arcs uses their strip lifts with the same translated endpoints; equal winding is precisely that matching-endpoint condition. A failure of a bigon in the presence of crossings would force all crossings of the two lifts to have the same sign, contrary to the zero crossing sum or the equal endpoint order. There are finitely many downstairs crossings after a small finite chart perturbation; that perturbation is a graph embedding isotopy, extended by [F3]. [F1, F2, F3, step 1.1, construct]

3.1 Each empty bigon has smooth quadrant charts at its transverse corners, by [F4]. Truncate those corners, use [F2] with their prescribed boundary collars on the remaining planar Jordan disk, and restore the quadrants. This gives a lens chart with boundaries $y=0$ and $y=\phi(x)$, where $\phi>0$ between two simple zeros and negative just outside. For small $\delta>0$ and a cutoff $\psi$ equal to one between the zeros, the graphs $y=t\psi(x)(\phi(x)+\delta)$ move the lower arc smoothly over the upper arc, fixed near the endpoints of a slightly larger interval. Outside the two zeros the moving graph remains above $\phi$ wherever it could cross, since its difference is $\psi\delta-(1-\psi)\phi>0$. The empty bigon and a thin outer collar keep the track off all other curve portions. By [F3] this removes two crossings by a smooth ambient isotopy. Repeat finitely often. Disjoint arcs with matching endpoint lifts bound a disk strip; consecutive disjoint periodic circle lifts bound an annulus strip. To see both the topology and the smooth parameters, choose a simple arc between the two boundary curves in the strip, and cut along its period translates. Such an arc is obtained from a finite chain of coordinate disks by erasing repeated loops and smoothing its finitely many joins. The cut region is a bounded planar Jordan disk with paired cut-edge collars. Use [F2] to prescribe equal product parameters on the two cut edges and reglue; its quotient is a smooth annulus parameter. In the arc case there are no paired cut edges and [F2] directly gives the disk strip. Thus there is no merely topological annulus parameter being silently treated as smooth. [F2, F3, F4, step 2.1, construct]

4.1 For an empty family take the identity isotopy. Otherwise move disjoint curves across these smooth strips, and adjust their pointwise parameters by interpolating increasing interval maps or increasing periodic angular lifts. These are smooth embedding isotopies, so [F3] extends them. This proves the two-curve and two-arc assertions. For a finite disjoint torus family, first move one circle to an affine representative. Cut along it. The other circles are linearly ordered in the resulting annulus by their disjoint strip lifts. Choose the first remaining circle from one boundary. The strip up to it contains no other remaining circle. Use its smooth strip parameter to move it to a level in a small affine collar of that boundary, with support away from the boundary itself and from all other circles. That move has an explicit positive transverse interpolation in the strip, extended by [F3]. Regard this new affine circle as the boundary of the remaining annulus and repeat. This finite procedure retains every already affine circle and gives parallel affine levels for the whole family, using actual ambient isotopies at every step. All time changes can be stationary near their ends, and protected arc collars remain untouched by choosing bigons and strips outside them. Every selection, perturbation and reduction was finite. [F2, F3, step 1.1, step 3.1, construct] ∎


<!-- lem-regular-fibers-in-seifert-pieces-with-boundary-have-infinite-order -->
---
id: lem-regular-fibers-in-seifert-pieces-with-boundary-have-infinite-order
kind: lemma
title: "Regular fibers in Seifert pieces with boundary have infinite order"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-incompressibility-seifert-fibration-and-jsj-system, lem-seifert-fiber-quotient-is-finite-orbifold-free-product, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-seifert-van-kampen]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the finite base-triangulation supplier; all lifts and group presentations used here are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.13–14 for the local Seifert models; the presentation and real-line action proving infinite order are supplied below"
---

## Statement

Assume full AC. In a compact connected orientable smooth Seifert-fibered three-manifold $M$ with nonempty boundary, every regular fiber has infinite order in $\pi_1(M)$. In particular, the inverse image of any properly embedded base arc avoiding exceptional points is a two-sided annulus whose fundamental group injects into $\pi_1(M)$; it has no compressing disk. The conclusion does not assert boundary-incompressibility of these annuli.

## Facts & Assumptions

**Given:** Full AC and the Seifert piece in the Statement.

[A1] Full AC is [[def-axiom-of-choice]].

[F1] The local models and multiplicities are those of [[def-incompressibility-seifert-fibration-and-jsj-system]].

[F2] Removing exceptional-fiber neighborhoods gives a circle bundle over a surface with boundary; the base has a finite graph spine with a free basis containing the individual puncture loops. Filling the $j$th neighborhood imposes its meridian relation, whose projection goes $q_j$ times around that puncture ([[lem-seifert-fiber-quotient-is-finite-orbifold-free-product]], Proof 1.1–3.1).

[F3] The exact homotopy sequence of a fibration identifies the kernel on fundamental groups with the image of the fiber and injects the fiber group when the base has zero $\pi_2$ ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], Statement).

[F4] Van Kampen computes the solid-torus fillings as group pushouts ([[thm-seifert-van-kampen]], Statement).

## Proof

1.1 Use [F2] to write $M_0\to B_0$ for the regular circle bundle. Its base retracts to a finite graph, so $\pi_2(B_0)=0$: a map of a sphere to a graph lifts to the graph's universal tree and contracts there. The tree is the explicit reduced-edge-path tree, and the compact image of a lifted sphere lies in finitely many edge stars of this locally finite tree and therefore contracts in a finite subtree. By [F3] there is an exact sequence $1\to\langle h\rangle\cong\mathbb Z\to\pi_1(M_0)\to\pi_1(B_0)\to1$. Fix the free base generators $c_1,\ldots,c_m,u_1,\ldots,u_r$ given in [F2], the $c_j$ being the small puncture loops. Lift each generator to a loop in $M_0$; path lifting and an arc in its terminal fiber give such a lift, and only finitely many are selected. Freeness extends these lifts to a section of the group surjection. Thus $\pi_1(M_0)$ is the semidirect product of the infinite cyclic fiber group and this free group. [A1, F2, F3, construct]

2.1 A lifted generator conjugates $h$ to $h$ or $h^{-1}$ according to the fiber-orientation transport along it. The puncture loops $c_j$ preserve orientation, since their neighborhoods in the base are annuli and the total space is orientable. Put $\varepsilon_i=\pm1$ for the signs of the remaining $u_i$. Consequently the bundle group has presentation with generators $h,c_j,u_i$ and only relations $c_j h c_j^{-1}=h$ and $u_i h u_i^{-1}=h^{\varepsilon_i}$. This is exact, rather than just a list of necessary relations: the indicated semidirect product has unique form $h^n w$, where $w$ is a reduced word in the chosen base generators; its projection determines $w$ and the injected fiber determines $n$. [F1, step 1.1, algebra]

3.1 In the boundary torus about the $j$th missing exceptional fiber, $c_j$ and $h$ give a basis: its projection onto the puncture circle takes $c_j$ once around that circle and kills $h$. After conjugating along the chosen basepath if necessary, its meridian therefore has word $c_j^{q_j}h^{p_j}$, with $p_j$ an integer relatively prime to $q_j$. The exponent $q_j$ is [F2]'s local multiplicity calculation; primitivity follows because a meridian is primitive in the torus group. The inclusion of the filled solid torus's boundary onto its core group is surjective and kills exactly that meridian. By [F4] the presentation of step 2.1, with the additional relations $c_j^{q_j}h^{p_j}=1$, is a presentation of $\pi_1(M)$. No relation for an original boundary circle is added, because the free base generators were chosen after retaining an original boundary component. [F1, F2, F4, step 2.1, algebra]

4.1 Define an action of this presented group on the real line. Let $h$ act by $x\mapsto x+1$, let $c_j$ act by $x\mapsto x-p_j/q_j$, and let $u_i$ act by $x\mapsto\varepsilon_i x$. Translations commute, reflections invert the unit translation, and $q_j(-p_j/q_j)+p_j=0$, so every relation of step 3.1 is satisfied. The resulting homomorphism sends every nonzero power $h^n$ to the nonidentity translation $x\mapsto x+n$. Hence $h$ has infinite order in $\pi_1(M)$. Any other based regular fiber is conjugate to $h$ or $h^{-1}$ by transport in the connected regular base, so has the same order. Over a proper base arc the bundle is a product $S^1\times I$; its annular core represents this infinite-order fiber. The annulus is orientable, and in orientable $M$ its normal line is trivial, so it is two-sided. Its fundamental group therefore injects. An embedded compressing disk would make a nonzero power of its core trivial in $\pi_1(M)$, contradicting that injection. This uses no general Loop theorem or irreducibility of $M$. [F1, step 3.1, construct, algebra] ∎


<!-- lem-horizontal-annuli-in-orientable-seifert-pieces-admit-vertical-refiberings -->
---
id: lem-horizontal-annuli-in-orientable-seifert-pieces-admit-vertical-refiberings
kind: lemma
title: "Vertical refiberings for horizontal annuli in orientable Seifert pieces"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, def-incompressibility-seifert-fibration-and-jsj-system, lem-seifert-fiber-quotient-is-finite-orbifold-free-product, lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes, lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type, lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms, lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models, thm-normal-form-for-free-products]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from finite smooth base triangulation and implies countable choice for smooth surface disk and collar suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.17–18, horizontal cut-open interval bundles, and p.20, Lemma 1.14; the finite deck-action classification and compatible refiberings are supplied below"
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable smooth Seifert-fibered three-manifold and let $A$ be a properly embedded connected two-sided horizontal annulus. Then $M$ has another smooth Seifert fibration for which the given annulus $A$ is vertical. Its underlying manifold is $T^2\times I$ or the orientable twisted interval bundle over the Klein bottle. No irreducibility assumption is needed, and no isotopy of the given horizontal annulus is needed for the refibering conclusion.

## Facts & Assumptions

**Given:** Full AC, $M$ and the proper two-sided horizontal annulus $A$.

[A1] Full AC implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Seifert models and multiplicities have the conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]].

[F2] The base has finite surface triangulations and its puncture-loop group calculation is the finite one of [[lem-seifert-fiber-quotient-is-finite-orbifold-free-product]], Proof 1.1–3.1.

[F3] A connected finite triangulated surface with boundary and Euler characteristic one is a disk; if its Euler characteristic is zero it is an annulus or a Möbius band ([[lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes]], Statement).

[F4] Smooth disk attachment along a boundary interval preserves the surface diffeomorphism type; smooth planar Jordan disks have disk coordinates with prescribed boundary collars and an interior diffeomorphism germ ([[lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type]], Statement, dimension two; [[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]], Statement).

[F5] The annulus/no-exception base gives $T^2\times I$; the Möbius/no-exception and disk-two-order-two bases give the explicit twisted Klein-bottle interval bundle $W$ with both model fibrations ([[lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models]], Statement).

[F6] Nonempty reduced free-product words are nonidentity ([[thm-normal-form-for-free-products]], Statement).

## Proof

1.1 Projection restricts to a finite orbifold covering $A\to B$: in a regular chart it is a local diffeomorphism, and at a multiplicity-$q$ fiber the transverse chart is $z\mapsto z^q$. The number $n>0$ of intersections with a regular fiber is locally constant and hence constant on the connected regular base. Every base point is reached, since the image is open and closed by these charts and compactness. Since $A$ has boundary, so does $B$. Count lifts of a finite base cellulation with the exceptional points as vertices. Ordinary vertices, edges and faces have $n$ lifts, while a multiplicity-$q_j$ vertex has $n/q_j$. Thus $$0=\chi(A)/n=\chi(B)-\sum_j(1-1/q_j).$$ By [F3], or its graph-spine inequality, $\chi(B)\le1$. If it is zero the sum is zero and there are no exceptional points; $B$ is an annulus or Möbius band. If it is one then $B$ is a disk. Every nonzero summand is at least $1/2$ and less than one, so sum one forces exactly two summands, both $1/2$. These are precisely the three base types of [F5]. Smooth coordinates on the disk, annulus or Möbius base may be used here: the finite graph-neighborhood proof of [F3] can be performed with rounded vertex disks and edge strips. Reversing a free-triangle collapse adds one rounded triangular disk along one interval, preserving the smooth type by [F4]. Rank zero gives a disk; rank one leaves a smooth circle strip whose final interval gluing is increasing or decreasing, giving the standard annulus or Möbius strip by interpolation of interval coordinates. At exceptional points choose the base disk coordinate $w=z^{q_j}$ in one chart; all overlaps away from its center are regular smooth charts. This gives the needed underlying smooth base coordinates. [A1, F1, F2, F3, F4, F5, given, construct]

2.1 Cut $M$ along $A$ and cut each fiber at its intersection points with $A$. The segments form an interval bundle: in the regular charts this is the product between two consecutive transverse sheets, and the model $z\mapsto z^q$ has the same segment charts at an exceptional endpoint. Each interval has two endpoints, so the horizontal boundary maps two-to-one onto its segment-space base. The horizontal boundary is exactly the two copies of $A$. If the cut manifold is connected, its interval bundle must be trivial: a nontrivial interval bundle over a connected surface has connected horizontal boundary, whereas here that boundary has two components. Thus in this case the cut manifold is $A\times I$ and $M$ is its mapping torus with return diffeomorphism $g:A\to A$. If the cut is disconnected, there are exactly two pieces, each with horizontal boundary one copy of $A$, and each is the mapping cylinder of a free involution $\tau_i:A\to A$ onto a connected surface $T_i$. Since the total piece is orientable but its interval bundle is nontrivial, $T_i$ is nonorientable. Also $\chi(T_i)=\chi(A)/2=0$ and it has boundary; hence it is a Möbius band by [F3]. In particular both $\tau_i$ reverse orientation. All these descriptions are smooth bundle descriptions: parametrize the segments by a fiber metric length and adjust their end collars to the original transverse charts. No arbitrary annulus self-diffeomorphism is presumed to preserve a circle foliation. [F1, F3, step 1.1, construct]

3.1 In the nonseparating case the return map $g$ is a deck map of $A\to B$. Its action is transitive on the $n$ points above a regular point: following its oriented circle fiber passes successively through all intersections before returning. Thus $g^n=1$ on the regular preimage and by continuity on $A$, with no smaller global period. Its finite cyclic group has quotient $B$ with precisely the given exceptional local branch charts. Orientability of the mapping torus forces $g$ to preserve orientation of $A$, so $B$ is orientable. By step 1.1 the possibilities are an annulus without exceptional points and a disk with two order-two points. In the annulus case its connected $n$-fold cover is standard: lift the product base to $\mathbb R\times I$; path lifting identifies the subgroup of its deck group $\mathbb Z$ with $n\mathbb Z$. Thus $A$ has coordinates $(\theta,u)\in S^1\times I$ in which $g$ is a rotation in $\theta$. This is a smooth covering isomorphism, since it is locally the lift of the smooth base coordinates. It preserves the core-circle fibration of $A$. [F1, F2, step 1.1, step 2.1, construct]

3.2 In the separating case the two involutions from step 2.1 are also deck maps of $A\to B$. They exchange the endpoints of successive segments of an original fiber. Their group acts transitively on the regular preimage of a base point and is finite: its action on that finite fiber is faithful, since a deck map fixing a point of the connected regular covering fixes it everywhere by unique path lifting, and then fixes all of $A$ by continuity. Since the group contains the orientation-reversing $\tau_i$, the base is nonorientable. Thus step 1.1 makes it the Möbius band with no exceptional points. The covering is unbranched, and its finite deck group is cyclic because $\pi_1(B)=\mathbb Z$. A cyclic group has at most one element of order two; as it is generated by the two involutions, it follows that $\tau_1=\tau_2=\tau$ and the group has order two. The connected double cover of the Möbius band has the standard coordinates $$A=S^1\times[-1,1],\qquad \tau(\theta,u)=(\theta+1/2,-u).$$ This follows by lifting the usual strip model of the Möbius band; its subgroup is $2\mathbb Z$, so the covering isomorphism is smooth and conjugates both involutions simultaneously. The core-circle fibration of $A$ is preserved by both. [F1, F3, step 1.1, step 2.1, construct]

4.1 For the remaining nonseparating base, the orbifold group is $D_\infty=C_2*C_2=\langle a,b\mid a^2=b^2=1\rangle$, as seen by the two puncture loops and their order-two relations in [F2]. Here the covering-subgroup description can be verified directly. The strip $\mathbb R\times[-1,1]$ has the half-turns $a(x,u)=(-x,-u)$ and $b(x,u)=(2-x,-u)$, with disk quotient obtained by folding the vertical sides of $[0,1]\times[-1,1]$. Unfolding this rectangle alternately across those sides gives the entire strip. In any cover, lift one rectangle and extend across successive sides by the local covering charts; the only possible side-return relations are $a^2=b^2=1$, exactly the filled quadratic branch charts. This constructs the covering as the strip modulo its subgroup $H$ of returning lifts, with no general orbifold-cover classification as a premise. A nontranslation half-turn has a fixed point in the strip; membership in $H$ would leave an order-two orbifold point upstairs, which the ordinary annulus does not have. Thus $H$ acts freely, and is a nontrivial translation subgroup: the trivial subgroup would leave the noncompact strip, whereas the given annulus is compact. Write $t=ab$. Reduced words [F6] show that every element is either $t^j$ or $t^j a$, the latter having order two. Hence this subgroup is $\langle t^k\rangle$ for some $k\ge1$. It is normal, and its quotient is the dihedral group of order $2k$. The quotient must also be the cyclic return group of step 3.1. A cyclic quotient would make $t=t^{-1}$ and hence $k\le2$; for $k=2$ the two distinct nonidentity images of $a,b$ give $C_2\times C_2$, not a cyclic group. Therefore $k=1$ and the cover is the double cover. Its explicit model is $$A=S^1\times[-1,1],\qquad g(\theta,u)=(-\theta,-u).$$ Indeed this involution has two fixed points and disk quotient by the two-half-rectangle construction of [F5]. To identify any such cover with this one, delete the two branch points and cut the disk along two arcs from them to its boundary. Over the cut disk the two sheets are separate copies, and gluing across either cut exchanges them, since its local monodromy is the nontrivial order-two permutation. This determines the cover uniquely. The isomorphism extends smoothly over each branch point in its quadratic chart. The base disk identification can agree with the specified linear germs there: [F4]'s interior-germ adjustment is applied in two disjoint point neighborhoods, moving their centers along finite paths avoiding the other point if needed. Thus the cover isomorphism conjugates $g$ to the displayed model. This model again preserves the core-circle fibration. [F1, F2, F4, F5, F6, step 3.1, construct]

5.1 In either nonseparating model, fiber $A\times I$ by the core circles at each interval level and descend through its fiber-preserving return map from step 3.1 or 4.1. This is a smooth circle bundle over an annulus or Möbius band, respectively, and its restriction makes the original seam $A$ vertical. In the separating model use the same core circles on the horizontal boundary of each mapping cylinder. They extend through the cylinder and its bottom identification $x\sim\tau x$. The explicit formula of step 3.2 gives the smooth quotient $(A\times[-1,1])/(( \theta,u,v)\sim(\theta+1/2,-u,-v))$, with the common annulus represented at $v=1$. Translation in $\theta$ is a circle action on this quotient. It gives a fibered solid torus with one multiplicity-two core: at $u=0$ the bottom identification is a half-turn of a circle, and away from that core its circle action is free. Thus it has the ordinary local Seifert model of [F1]. On the common annulus the two circle fibrations agree exactly, not merely in slope, so they glue to a smooth Seifert fibration of $M$. It makes $A$ vertical. Finally [F5] and step 1.1 identify the underlying manifold as $T^2\times I$ or $W$. All constructions used actual finite cover and interval-bundle data; an unproved mapping-class theorem for arbitrary annulus diffeomorphisms was not used. [A1, F1, F5, step 2.1, step 3.1, step 4.1, step 3.2, construct] ∎


<!-- lem-injective-boundary-seifert-fiber-slopes-are-unique-outside-small-pieces -->
---
id: lem-injective-boundary-seifert-fiber-slopes-are-unique-outside-small-pieces
kind: lemma
title: "Boundary fiber slopes for Seifert pieces with injective boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-incompressibility-seifert-fibration-and-jsj-system, lem-seifert-fiber-quotient-is-finite-orbifold-free-product, lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes, lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the finite Seifert quotient and explicit small-model suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.20, Lemma 1.15; the proof here uses the explicit finite free-product fiber quotient instead of an assumed family of essential annuli"
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable smooth Seifert-fibered three-manifold with nonempty boundary, other than $T^2\times I$ or the orientable twisted interval bundle over the Klein bottle. On any boundary torus $T$ whose inclusion into $M$ is injective on fundamental groups, every Seifert fibration of $M$ has the same unoriented regular-fiber slope. No family of essential annuli and no irreducibility hypothesis is required.

## Facts & Assumptions

**Given:** Full AC, $M,T$ and the injective boundary inclusion, with the two underlying manifolds excluded in the Statement.

[A1] Full AC is [[def-axiom-of-choice]].

[F1] A Seifert piece with boundary has fiber quotient $F_r*C_{q_1}*\cdots*C_{q_m}$, where $r=1-\chi(B)\ge0$. Its injective boundary tori have unique fiber slopes if $r+m\ge2$, except when $r=0,m=2,q_1=q_2=2$ ([[lem-seifert-fiber-quotient-is-finite-orbifold-free-product]], Statement).

[F2] The base has a finite compatible surface triangulation as in [[lem-seifert-fiber-quotient-is-finite-orbifold-free-product]], Proof 1.1–2.1. A connected finite triangulated surface with boundary and Euler characteristic one is a disk; with Euler characteristic zero it is an annulus or Möbius band ([[lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes]], Statement).

[F3] The disk bases with at most one exceptional point are solid tori; the annulus and Möbius bases without exceptional points and the disk-two-order-two base have underlying manifolds $T^2\times I$ or the orientable twisted Klein-bottle interval bundle ([[lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models]], Statement).

[F4] The Seifert and regular-fiber conventions are those of [[def-incompressibility-seifert-fibration-and-jsj-system]].

## Proof

1.1 Fix any one of the Seifert fibrations and its numbers $r,m,q_j$ in [F1]. If $r+m<2$, the possibilities are $(r,m)=(0,0),(0,1),(1,0)$. In the first two cases $\chi(B)=1$, so $B$ is a disk by [F2] and $M$ is a solid torus by [F3]. Its single boundary torus cannot inject on fundamental groups: a homomorphism $\mathbb Z^2\to\mathbb Z$ has a nonzero kernel, since its generator images $a,b$ either both vanish or annihilate the nonzero vector $(b,-a)$. This contradicts the Given inclusion. In the case $(1,0)$ the base has Euler characteristic zero and no exceptional points, so [F2] and [F3] give one of the two excluded manifolds. Finally the exceptional case $r=0,m=2,q_1=q_2=2$ has disk base and gives the excluded twisted Klein-bottle interval bundle. Thus none of these numerical cases can occur. [A1, F1, F2, F3, F4, given, algebra]

2.1 The numerical condition of [F1] is therefore satisfied for the chosen fibration. Its boundary-slope conclusion applies to the injective $T$ and compares that fibration with every other fibration, regardless of the latter's base data. This proves the asserted uniqueness. In particular the argument constructs no hypothetical annulus family and makes no choice of compatible fiber slopes at other boundary components; it proves the intrinsic slope equality at each injective boundary torus separately. [F1, step 1.1] ∎


<!-- lem-smooth-disk-diffeomorphisms-fixing-boundary-admit-relative-smooth-isotopies -->
---
id: lem-smooth-disk-diffeomorphisms-fixing-boundary-admit-relative-smooth-isotopies
kind: lemma
title: "Relative smooth isotopies of disk diffeomorphisms"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars, lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit, thm-hopf-turning-tangent-theorem, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters, thm-euclidean-inverse-function-theorem]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The full fixed-input Li-Watts flow construction uses the newly proved finite Jordan/collar supplier; its Euclidean flow, turning, limit-set and inverse-function suppliers assume no choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jiayong Li and Jordan Alan Watts, The orientation-preserving diffeomorphism group of S2 deforms to SO(3) smoothly"
      url: "https://arxiv.org/pdf/0912.2877"
      locator: "Version2, §3, PDF/printed pp.12–16: Proposition1.9/Theorem3.1, Lemma3.2, Theorem3.3 and boundary correction; only the fixed-input relative-square consequence is used and proved here"
---

## Statement

Let $f:D^2\to D^2$ be an orientation-preserving smooth diffeomorphism whose restriction to the boundary is the identity. There is a jointly smooth map $F:D^2\times[0,1]\to D^2$ with $F_0=f$, $F_1=\operatorname{id}$, each $F_t$ an orientation-preserving diffeomorphism, and every $F_t$ fixing the boundary pointwise. The family may be stationary near its time endpoints. If $f$ is already the identity on a neighborhood of the boundary, the entire family may fix one common smaller boundary collar.

More generally, the same assertion holds for a compact smooth disk with a supplied disk parametrization. This is a smooth isotopy assertion, not a radial Alexander extension with unverified smoothness at its center.

## Facts & Assumptions

**Given:** the disk diffeomorphism of the Statement.

[F1] Smooth Jordan disks have disk parameters, prescribed boundary collar maps extend, and the collar comparison is realized by a smooth ambient isotopy fixing the boundary circle ([[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]], Statement and Proof 5.1).

[F2] A smooth ODE has unique local solutions and smooth dependence on initial data and parameters ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F3] A precompact forward planar orbit of a $C^1$ field with no zeros in its compact limit set has a periodic orbit as that limit set ([[lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit]], Statement, the no-equilibrium case).

[F4] A simple regular closed plane curve bounding a disk has total tangent-angle change $2\pi$ or $-2\pi$ according to its orientation ([[thm-hopf-turning-tangent-theorem]], Statement); its smooth disk region is supplied by [F1].

[F5] An invertible differential gives a smooth local inverse, including for equations solved in local open extensions at boundary points ([[thm-euclidean-inverse-function-theorem]], Statement).

## Proof

1.1 First suppose the diffeomorphism is the identity on a boundary neighborhood. Conjugate its restriction to the open disk by a fixed smooth diffeomorphism $\operatorname{Int}D^2\to\mathbb R^2$, for example $x\mapsto x/(1-|x|^2)$. Its support becomes compact. A sufficiently large closed square contains that support in its interior; rescale it to $Q=[0,1]^2$. It suffices to construct a smooth isotopy for an orientation-preserving diffeomorphism $f:Q\to Q$ equal to the identity on a neighborhood of $\partial Q$, keeping one common smaller collar fixed. Extend such $f$ by the identity to the plane. No assertion that a round disk is diffeomorphic as a manifold with corners to a square is being used. [given, construct]

2.1 Put $Y_0=f_*e_1$, where $e_1=(1,0)$, so $Y_0(z)=Df_{f^{-1}(z)}e_1$. This is a smooth nowhere-zero field equal to $e_1$ on a fixed boundary collar. Write $Y_0=e^a(\cos\theta,\sin\theta)$ with $a,\theta$ smooth on $Q$ and zero on that collar. For an explicit angle, the one-form $$\omega=\frac{Y_0^1\,dY_0^2-Y_0^2\,dY_0^1}{|Y_0|^2}$$ is closed by differentiation. Its integral on the straight segment from $(0,0)$ to $z$ defines a primitive $\theta$ on the convex square: differentiating the integral and using the equality of its cross partials gives $d\theta=\omega$. The normalized field and $(\cos\theta,\sin\theta)$ then have the same logarithmic derivative and agree at $(0,0)$, so are equal everywhere. Since the boundary collar is connected and $\omega=0$ there, $\theta=0$ there. Take $a=\log|Y_0|$. Define $$Y_t=e^{(1-t)a}\bigl(\cos((1-t)\theta),\sin((1-t)\theta)\bigr).$$ Extend all these fields by $e_1$ outside $Q$. They are jointly smooth and nonvanishing, equal to $e_1$ on one common boundary collar, and join $f_*e_1$ to $e_1$. [step 1.1, construct]

3.1 None of the fields $Y_t$ has a periodic orbit. A regular periodic trajectory has a least positive period by its local flow box and uniqueness, and that period parametrizes a simple regular closed curve. Its unit tangent is the field direction. The globally defined angle $(1-t)\theta$, extended by zero off $Q$, would have zero total change on this curve. But [F1] supplies its disk region and [F4] makes the total tangent-angle change $\pm2\pi$, a contradiction. The fields have global flows: they and their first derivatives are bounded since their perturbations of $e_1$ have compact support, so a finite-time orbit cannot escape to infinity and [F2] extends it at every finite endpoint. An orbit starting at $(0,y)$ enters the square and must exit on the right. Indeed an interior orbit cannot meet the invariant horizontal boundary lines by uniqueness, cannot exit left where the field is $e_1$, and, if it never exited, it would stay in the compact square. Then [F3] would give the impossible periodic orbit. The same argument for backward time shows that every point in the square reaches its left edge backwards. At $y=0,1$ the trajectories are just horizontal straight lines. [F1, F2, F3, F4, step 2.1, construct]

4.1 Let $\Gamma_t(s,y)$ denote this flow starting at $(0,y)$ at time zero, and let $r(t,y)>0$ be its first time at the right edge. It is smooth in $(t,y)$: near the exit solve $\Gamma_t^1(s,y)=1$ by [F5], whose $s$ derivative is $Y_t^1=1$ there. The analogous backward hitting-time equation gives smooth inverse flow coordinates for every point. Uniqueness prevents distinct starting labels from meeting and prevents a trajectory from meeting itself, by step 3.1. Thus $(s,y)\mapsto\Gamma_t(s,y)$ is a diffeomorphism from the variable strip $0\le s\le r(t,y)$ onto $Q$. Smooth dependence including boundary parameters follows from [F2] and [F5] using the extended fields. Compactness of $(t,y)\in[0,1]^2$ gives finite constants $0<m\le r(t,y)\le M$. The right-edge map $g_t(y)=\Gamma_t^2(r(t,y),y)$ is an increasing smooth interval diffeomorphism, and is the identity near the two endpoints: the field is exactly horizontal on fixed strips near the horizontal edges. [F2, F5, step 3.1, construct]

5.1 Choose a smooth function $\rho:[0,1]\to[0,1]$ equal to one near both endpoints, supported in sufficiently short end intervals, with $A=\int_0^1\rho<\min(m,1)/2$. Choose these intervals shorter also than the fixed straight-flow collar width. For $r\in[m,M]$ define $$v_r(x)=\rho(x)+\frac{r-A}{1-A}(1-\rho(x)),\qquad \chi(x,r)=\int_0^x v_r(u)\,du.$$ These functions are smooth, $v_r>0$, $\chi(0,r)=0$, $\chi(1,r)=r$, and $\chi(x,1)=x$. Near the left endpoint $\chi=x$, and near the right endpoint $\chi=r+x-1$, on fixed intervals independent of $r$. Therefore $$E_t(x,y)=\Gamma_t(\chi(x,r(t,y)),y)$$ is a jointly smooth diffeomorphism of $Q$. It equals $(x,y)$ near the left and horizontal edges and equals $(x,g_t(y))$ near the right edge. At $t=0$ uniqueness gives $\Gamma_0(s,y)=f(s,y)$, so $r(0,y)=1$ and $E_0=f$. At $t=1$ the field is $e_1$, so $r(1,y)=1$ and $E_1=\operatorname{id}$. [F2, step 4.1, construct]

6.1 Correct the moving right edge. Let $\beta:[0,1]\to[0,1]$ be smooth, equal to one near zero and zero near one. Define $$\Psi_t(x,y)=\bigl(x,\beta(x)y+(1-\beta(x))g_t^{-1}(y)\bigr).$$ Its second-coordinate derivative is positive; its endpoints in $y$ are $0,1$, so it is a diffeomorphism with jointly smooth inverse by [F5]. Near the left edge it is the identity, and near the right it is $(x,g_t^{-1}(y))$. Since $g_t$ is the identity on fixed end neighborhoods, it is also the identity near the horizontal edges. Hence $K_t=\Psi_t\circ E_t$ is the identity on one common collar of every edge. At $t=0,1$ the right-edge map is the identity, so $K_0=f$ and $K_1=\operatorname{id}$. All maps are orientation-preserving, starting so and having everywhere nonzero determinant. This proves the square assertion with joint smoothness, not just continuous dependence of its slices. [F5, step 4.1, step 5.1, construct]

7.1 Extend $K_t$ by the identity outside the square and undo step 1.1's conjugation. A fixed compact subset of the open disk contains all supports, so this is a jointly smooth disk isotopy fixing a common boundary collar. For a diffeomorphism fixing only the boundary pointwise, compare the collar $f\circ c$ with a chosen collar $c$. The explicit collar interpolation and ambient extension in [F1], Proof 5.1, give a smooth isotopy $k_t$ fixing the boundary circle such that $k_1\circ f$ is the identity on a smaller collar. Concatenate $k_t\circ f$ with the just constructed collar-fixed isotopy for $k_1\circ f$. Reparametrize the two time intervals by smooth functions constant near their endpoints and joins. This makes the total family jointly smooth up to and across its time endpoints and stationary there. If the original $f$ already fixed a collar, the preliminary correction is unnecessary. Conjugation by a supplied smooth disk parameter proves the final assertion. Every selection was finite. The planar Jordan/collar supplier [F1] now has an explicit finite marked-window proof and uses no choice; [F2]–[F5] are choice-free Euclidean statements. Thus the whole fixed-input smooth isotopy is choice-free. [F1, step 1.1, step 6.1, construct] ∎


<!-- lem-choice-free-relative-rounding-of-finite-whole-star-surfaces -->
---
id: lem-choice-free-relative-rounding-of-finite-whole-star-surfaces
kind: lemma
title: "Choice-free relative rounding of finite whole-star surfaces"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-relative-smooth-triangulation-and-projection-preserving-fitting
  - lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation
  - lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps
  - lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free. Whole-star stability and secant extension have finite choice-free proofs; vertex links are parametrized using the new choice-free planar Jordan proof after stereographic projection. All local replacements form finite collections."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "James R. Munkres, Elementary Differential Topology (1966)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "Sections8–9 via the fully read local whole-star stability and secant suppliers. All eight surface-rounding steps are supplied here. This reference is not a claim of new primary-text reading."
---

## Statement

Let a compact embedded surface in a smooth three-manifold have a supplied finite whole-star piecewise smooth triangulation: its simplex maps extend smoothly, and their differential fan is injective on the entire tangent star at every point. Suppose its boundary has an already smooth embedded collar in the surface. Then the surface can be replaced, in any prescribed neighborhood and fixed on a smaller boundary collar, by a smooth embedded surface homeomorphic to it relative to that collar. The replacement can also be fixed on any specified compact subset on a neighborhood of which the surface is already smooth. In particular an embedded disk with such data and smooth boundary collar has a smooth embedded disk replacement with exactly the same boundary.

A finite PL surface in the compatible PL structure of a supplied whole-star smooth triangulation of the ambient manifold has the required piecewise smooth data after common subdivision. This clause concerns compatibility with the specified smooth triangulation; it does not assert compatibility of an arbitrary topological marking.

## Statement references

[[def-relative-smooth-triangulation-and-projection-preserving-fitting]] — the whole-star and compatibility conventions.

[[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]] — finite strong-approximation stability.

[[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]] — the choice-free disk parameter after stereographic projection.

## Facts & Assumptions

**Given:** The finite surface map, a neighborhood in which the replacement is required to lie, and the protected smooth collars and compact subsets.

[F1] Whole-star piecewise smooth embeddings have a positive finite strong-approximation tolerance, including after subdivision. Small corrections on a subcomplex have supported extensions with controlled strong error. ([[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]], [[lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps]])

[F2] A smooth simple circle $\gamma$ on $S^2$ has a smoothly parametrized disk side without choice. Choose a point off it: a regular graph chart at one circle point has a small transverse displacement off the graph, and compact separation excludes the other circle portions. Stereographic projection from that point gives a compact smooth planar circle. Its bounded disk has a smooth parameter with prescribed collars by [[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]], Statement. Transfer that compact disk back to $S^2$. All these choices are finite.

## Proof

1.1 First restrict the nonsmooth locus to the complement of a protected open neighborhood of the given compact smooth set and a smaller boundary collar. To make the protected region finite, pull it back to the finite geometric source complex and take sufficiently small uniform subdivisions. The compact protected preimage has positive distance from the complement of its smooth neighborhood. A finite union of closed stars containing that preimage, with one extra star layer, is therefore still in the smooth neighborhood and protects an open neighborhood of the given compact set. Do the same along the smooth boundary collar. This uses only finite subcomplexes, rather than assuming arbitrary smooth chart boundaries have finitely many intersections. Compactness and finiteness give positive separation between disjoint closed simplices away from their common stars, and between a sufficiently small replacement neighborhood and the closed complement of the prescribed neighborhood. Thus it suffices to smooth the finitely many unprotected vertices and edge portions inside these neighborhoods. All other points are already in smooth face interiors. [given, F1, construct]

2.1 At an unprotected vertex use an ambient smooth chart centered at its image and affine coordinates on its finitely many incident triangles centered at the vertex. Write their common map as $f(x)=A(x)+R(x)$, where $A$ is the piecewise linear differential fan. On a sufficiently small star, $|R(x)|=o(|x|)$ and $\|DR(x)\|=o(1)$, uniformly over those triangles. Let $\eta$ be a radial cutoff equal to one on a smaller star and zero outside a slightly larger star of radius $\epsilon$, with derivative bounded by $C/\epsilon$. Replacing $f$ by $f-\eta R$ changes its derivative by $o(1)$, because $|R|\,|D\eta|=o(\epsilon)/\epsilon=o(1)$. Apply [F1] to keep it an embedding. This makes the surface exactly its linear cone near the vertex, with the original map retained outside the larger star. The vertices have disjoint neighborhoods, so these finite replacements do not interfere. The link of the resulting cone on a small round sphere is a simple closed piecewise smooth curve: the surface vertex link is a circle and the differential fan is injective. [F1, step 1.1, construct]

3.1 Smooth an open edge portion away from the vertex centers. Its two incident smooth half-surfaces have distinct tangent half-planes meeting along their common edge. In a small tubular coordinate box their union is a graph $z=h(s,u)$ over a plane, with the edge at $u=0$ and $h$ smooth for each sign of $u$. For unit transverse rays $v_+$ and $v_-$ pointing out from the edge into the two half-surfaces, whole-star injectivity gives $v_+\ne v_-$. The linear functional $\ell(w)=\langle v_+-v_-,w\rangle$ has $\ell(v_+)>0$ and $\ell(v_-)<0$. Projection onto the plane consisting of the edge direction and this signed transverse coordinate therefore gives the required graph, and remains regular on a smaller box by continuity. Replace $h$ near $u=0$ by convolution in $(s,u)$, using a cutoff supported in that box and equal to one near a smaller edge core. The new graph is smooth at its core, remains an embedded graph, and agrees with the old surface outside the box. Where the cutoff changes the old graph is already smooth, so the interpolation is smooth there. Use arbitrarily small value errors and the finite separation margins to prevent collisions with the rest of the surface. Covering each remaining compact edge portion by finitely many such boxes and retaining earlier smooth cores completes the open-edge smoothing. [step 1.1, step 2.1, construct]

4.1 In the linear conical neighborhoods of step 2.1 choose the edge rounding radially: round the finitely many corners of the link curve on the unit sphere in disjoint spherical graph charts, and take rays over this rounded link. A radial cutoff joins this choice to the open-edge graph choices farther out. On the overlap the chosen graph projection is still injective, so graph interpolation joins them without intersections. After this operation the only unsmoothed point in each vertex neighborhood is its center, and on an annulus about that center the surface is $r\gamma(s)$, where $\gamma:S^1\to S^2$ is a smooth embedded circle. These operations are fixed near the protected set. [step 2.1, step 3.1, construct]

5.1 By [F2], $\gamma$ bounds a smoothly parametrized disk region $e:D^2\to S^2$. The circles $s\mapsto e(\rho s)$, with $\rho$ decreasing from $1$ to a small positive number, give a smooth isotopy of embedded circles. In a small chart about $e(0)$, choose a fixed small $r>0$ and use the expression $E(trs)/t$, continued at $t=0$ by $r\,dE_0(s)$; these circles remain inside that chart and are smooth and embedded for sufficiently small $r$: its derivative is uniformly close to the injective linear map, and projection onto its image plane gives injectivity by integration on segments. Deform the final linear ellipse to a round circle by its positive Gram square root, and carry it back through a spherical chart. This gives an isotopy $\gamma_t$ of smooth embedded spherical circles from $\gamma$ to a small latitude circle. Flatten its time parameter near both endpoints. No extension to a diffeomorphism of $S^2$ or of a three-ball is used. [F2, step 4.1, construct]

6.1 In a smaller conical annulus replace $r\gamma(s)$ by $r\gamma_{\tau(r)}(s)$, where $\tau$ goes from zero on its outer collar to one on its inner collar. This is an embedded smooth annulus: different radial levels lie on disjoint round spheres, and at each fixed level the curve is embedded; its radial derivative has nonzero radial component, while its circle derivative is tangent to that sphere. Near the inner collar it is a circular cone. Close that cone by a surface of revolution lying inside the inner sphere: in coordinates around its axis, replace the conical graph $z=a\varrho$ near $\varrho=0$ by $z=a\psi(\varrho)$, where $\psi$ is smooth and even near zero, agrees with $\varrho$ near the outer radius and is positive at zero. Choose its modification supported in a much smaller radius so its graph lies strictly inside the inner sphere; a smooth convex rounding of the graph of $|\varrho|$ has these properties. This gives a smooth disk cap, unchanged on the annular seam. The cap replaces a conical disk by a disk with the same boundary, hence preserves the surface's homeomorphism type relative to everything outside the vertex neighborhood. [step 5.1, construct]

7.1 Apply step 6.1 in each of the disjoint vertex neighborhoods. The result is smooth on the face interiors, the edge cores, the connecting annuli and the caps, with identical maps on open seam collars. It is embedded by the graph, radial-level and separation arguments, and is unchanged on the protected smooth neighborhood. Replacing finitely many disks and edge strips by disks and strips with the same attaching collars gives a homeomorphism from the original surface to the result fixed there. All changes fit inside the prescribed neighborhood by step 1.1. [step 1.1, step 3.1, step 4.1, step 6.1, construct]

8.1 Finally, a surface PL in the specified compatible triangulation becomes a subcomplex after a common finite subdivision. Each restricted ambient simplex map is smooth and its differential fan is injective on the ambient star, hence on the surface's substar. Thus it has exactly the piecewise smooth whole-star data used in steps 1.1–4.1. The argument requires only this supplied compatibility and the finite choice-free vertex-link disk parameters, proving all clauses. [F1, step 7.1, construct] ∎


<!-- lem-smooth-two-sided-klein-bottle-curves-have-vertical-or-horizontal-normal-forms -->
---
id: lem-smooth-two-sided-klein-bottle-curves-have-vertical-or-horizontal-normal-forms
kind: lemma
title: "Two-sided Klein-bottle curves have smooth vertical or horizontal normal forms"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-choice-free-smooth-torus-curves-and-annulus-strips, lem-choice-free-isotopy-extension-for-a-compact-smooth-source]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The orientation double cover is an explicit quotient of the plane; all paired bigon and strip moves are finite and use the finite smooth isotopy-extension supplier."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition1.11 proof, printed p.16: boundary curves on a torus or Klein bottle are put in vertical or horizontal position. The Klein-bottle case is proved explicitly here."
---

## Statement

Let $Q$ be the smooth Klein bottle with coordinates $(x,y)\in\mathbb R^2$ modulo $(x,y)\sim(x,y+1)$ and $(x,y)\sim(x+1,-y)$, with its circle-bundle fibers the images of $x=\text{constant}$. Every finite disjoint family of essential two-sided smooth embedded circles can be carried by a jointly smooth ambient isotopy to a family either of vertical fiber circles or of horizontal circles transverse to those fibers. No choice axiom is assumed. The horizontal circles have representatives $y=c$ together with their deck partners $y=-c$, with $c\not\equiv0,1/2$ modulo one. The isotopy may be stationary near its time endpoints.

## Facts & Assumptions

**Given:** The explicit circle-bundle Klein bottle and the finite disjoint essential two-sided smooth circle family.

[F1] Essential torus circles have primitive nonzero homology; same-class curves have finite empty-bigon smooth reductions and smooth strip isotopies, without choice ([[lem-choice-free-smooth-torus-curves-and-annulus-strips]], full proof).

[F2] Smooth isotopies of compact embedded arcs or circles extend ambiently with compact support, without choice ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement).

## Proof

1.1 If the family is empty, the identity isotopy proves the claim. Otherwise the explicit orientation double cover is $\widetilde Q=\mathbb R^2/\langle(2,0),(0,1)\rangle$, with free deck involution $J(x,y)=(x+1,-y)$. Two-sidedness of a circle means precisely that its normal line returns without a reversal; its tangent line is oriented by a chosen circle parameter, so the ambient orientation also returns without reversal. It therefore lifts to two disjoint circles interchanged by $J$, each projecting with degree one. Each lift is essential: a nullhomotopy upstairs would project to one downstairs. In the homology basis of periods $(2,0),(0,1)$, let a lift have class $(m,n)$. Its partner has class $(m,-n)$ up to orientation. Their disjointness gives $-2mn=0$ by [F1], and primitiveness gives either $(m,n)=(\pm1,0)$ or $(0,\pm1)$. Thus all lifts are horizontal or all are vertical; lifts of the two different types would intersect algebraically once and cannot occur in a disjoint family. [F1, given, algebra]

2.1 The torus bigon reductions in [F1] can be made equivariant. Choose a disjoint affine reference family of the same slope, paired by $J$. For horizontal type choose levels $c,-c$ away from $0,1/2$; for vertical type choose levels $x=c,c+1$. Take an empty bigon between an actual lift and a reference lift. Its $J$ image is another empty bigon. Their interiors, being components of the complement of the two lift systems, are either disjoint or equal. Equality is impossible: $J$ reverses the torus orientation, so on the boundary of an invariant disk it would be an orientation-reversing circle map, which has a fixed point. For that last fact a decreasing angular lift $g$ satisfies $g(\theta+2\pi)=g(\theta)-2\pi$, so $g(\theta)-\theta$ crosses a multiple of $2\pi$ by the intermediate value property. Also the two bigons cannot share a corner: their two corners lie on one actual lift, whereas $J$ sends that lift to its disjoint partner. A shared edge would likewise force a shared corner. Their closures are therefore disjoint. Perform [F1]'s smooth graph bigon move on one and the $J$-conjugate move on the other. Their supports can be chosen disjoint. These paired moves commute with $J$, remove four upstairs intersections, and descend to smooth ambient isotopies of $Q$. Finite repetition makes actual and reference systems disjoint. [F1, F2, step 1.1, construct]

3.1 Now choose adjacent actual and reference circles of the same slope and their annulus strip containing no other circle. Its $J$ image is a different strip: invariance would require $J$ to preserve its actual boundary circle, since $J$ preserves the actual and reference systems separately, but actual lifts come in distinct pairs. The two open strips are disjoint. Their boundaries are also disjoint by the same partner argument. Use [F1]'s smooth strip parameter to move the actual circle to its affine reference, and make the identical $J$-conjugate move on the partner strip. These finite smooth isotopies descend. Repeating in the remaining strips, while fixing all circles already at reference levels, normalizes the finite family. If a chosen reference circle initially coincides with an actual circle, fix that pair and work in the remaining cut annuli. Paired compact-source extensions are provided by [F2]; smooth stationarizing time changes make all joins and endpoints jointly smooth. Vertical reference circles project to fibers. Horizontal paired reference circles project to two-sided curves transverse to every encountered fiber; invariant horizontal levels $0,1/2$, whose projections would be one-sided, were excluded. This proves the stated alternatives with no change to the circle-bundle coordinates or fiber structure. [F1, F2, step 1.1, step 2.1, construct] ∎


<!-- lem-orientable-seifert-pieces-with-boundary-are-irreducible -->
---
id: lem-orientable-seifert-pieces-with-boundary-are-irreducible
kind: lemma
title: "Orientable Seifert pieces with boundary are irreducible"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, def-incompressibility-seifert-fibration-and-jsj-system, lem-seifert-fiber-quotient-is-finite-orbifold-free-product, lem-regular-fibers-in-seifert-pieces-with-boundary-have-infinite-order, lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models, lem-gluing-irreducible-smooth-three-manifolds-across-injective-annuli, thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the finite Seifert suppliers and implies countable choice for smooth Schoenflies and annulus gluing."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.11, gluing fact (5), and pp.18–19, Proposition 1.12; the boundary case is proved here by injective vertical-annulus cuts rather than invoking a general cover classification"
---

## Statement

Assume full AC. Every compact connected orientable smooth Seifert-fibered three-manifold with nonempty boundary is irreducible.

## Facts & Assumptions

**Given:** Full AC and the compact connected orientable smooth Seifert piece $M$ with nonempty boundary.

[A1] Full AC implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Seifert fibrations and irreducibility have the conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]].

[F2] The underlying base with exceptional disks removed has a finite graph-spine construction, by finite triangulation, proper cuts and triangle collapses ([[lem-seifert-fiber-quotient-is-finite-orbifold-free-product]], Proof 1.1–2.1).

[F3] Every proper base arc avoiding exceptional points lifts to a two-sided annulus injective on fundamental groups ([[lem-regular-fibers-in-seifert-pieces-with-boundary-have-infinite-order]], Statement).

[F4] A Seifert piece with disk base and at most one exceptional point is a parametrized solid torus ([[lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models]], Statement and Proof 2.1).

[F5] Gluing irreducible smooth three-manifolds across a finite family of proper two-sided annuli injective in the resulting manifold preserves irreducibility ([[lem-gluing-irreducible-smooth-three-manifolds-across-injective-annuli]], Statement).

[F6] A smooth sphere in standard $S^3$ has two complementary parametrized smooth balls ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]], Statement).

## Proof

1.1 Choose a finite disjoint proper arc system in the base cutting it to disks, avoiding its finitely many exceptional points. Here is a finite construction using [F2]: thicken a finite graph spine by vertex disks and edge bands; a band cocore is an arc with endpoints on the original surface boundary. Cut the bands corresponding to edges outside a spanning tree. The remaining tree of disks and bands is a disk, and the cuts are disjoint. Move the finitely many arc interiors slightly in surface charts to avoid all marked exceptional points. In the resulting disk choose disjoint paths from its exceptional points to one open segment of the original boundary, avoiding the existing cut edges. Construct these successively in the punctured disk; a finite tree joining the points to that segment has a small disk-and-band neighborhood, whose branches may be separated into disjoint paths in the planar cyclic order. The frontier of a narrow neighborhood of each path and its marked point gives a proper arc enclosing just that point. These arcs have endpoints on that original boundary segment and miss the previous cut system. Cutting along them leaves disks with zero or one exceptional point. All arcs remain proper disjoint arcs of the original base and avoid the exceptional points themselves. [F1, F2, given, construct]

2.1 Lift these arcs to a finite disjoint family $\mathcal A$ of annuli in $M$. They are proper and two-sided and inject on fundamental groups by [F3]. The components of $M\mathbin{\|}\mathcal A$ retain their Seifert structures over the disks from step 1.1; rounding their boundary corners changes only collars. By [F4] each is a solid torus. [F1, F3, F4, step 1.1, construct]

3.1 A standard solid torus is irreducible. Embed it as one of the standard Heegaard solid tori in $S^3$. A sphere in its interior bounds the two balls of [F6]. The other Heegaard solid torus is connected and disjoint from that sphere, so lies entirely on one of its sides. The opposite closed ball therefore lies in the interior of the original solid torus and bounds the sphere there. Transporting through any supplied solid-torus parameter proves the same assertion for every cut piece of step 2.1. [A1, F6, construct]

4.1 The hypotheses of [F5] are now satisfied: the cut pieces are irreducible by step 3.1 and the annuli inject in $M$ by step 2.1. Apply it to conclude that $M$ is irreducible. If no cut was needed, step 3.1 already supplies the conclusion. Thus the nonempty-boundary theorem uses neither a closed Seifert-manifold classification nor a general universal-cover uniformization theorem, and no irreducibility hypothesis has been added to its Statement. [A1, F3, F5, step 2.1, step 3.1] ∎


<!-- lem-relative-smooth-mapping-classes-of-annulus-and-torus -->
---
id: lem-relative-smooth-mapping-classes-of-annulus-and-torus
kind: lemma
title: "Relative smooth mapping classes of the annulus and torus"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-smooth-disk-diffeomorphisms-fixing-boundary-admit-relative-smooth-isotopies, lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars, lem-choice-free-isotopy-extension-for-a-compact-smooth-source, thm-euclidean-inverse-function-theorem]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. Relative smooth disk isotopy, planar Jordan parameters and compact-source extension are provided by finite proofs; all curve intersections and cut systems are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.20, Lemmas1.14–1.15, require these elementary annulus and boundary-torus isotopies; the relative smooth disk step is supplied separately, rather than inferred from a conical Alexander extension"
    - title: "Jiayong Li and Jordan Alan Watts, The orientation-preserving diffeomorphism group of S2 deforms to SO(3) smoothly"
      url: "https://arxiv.org/pdf/0912.2877"
      locator: "§3, pp12–16, through the locally proved relative-disk supplier"
---

## Statement

All isotopies below are jointly smooth diffeotopies, stationary near the time endpoints.

1. On $A=(\mathbb R/\mathbb Z)\times[0,1]$, every smooth diffeomorphism fixing both boundary circles pointwise is isotopic relative to the boundary to exactly one twist
$$D_k(\theta,u)=(\theta+k\rho(u),u),\qquad k\in\mathbb Z,$$
where $\rho$ is a fixed smooth function equal to zero near $0$ and one near $1$. If the map initially fixes a boundary collar, a common smaller collar can be fixed throughout this isotopy. Without fixing the boundary, every annulus diffeomorphism is isotopic to one of the four maps $(\theta,u)\mapsto(\varepsilon\theta,u)$ or $(\theta,u)\mapsto(\varepsilon\theta,1-u)$, with $\varepsilon=\pm1$.
2. Every smooth diffeomorphism of $T^2=\mathbb R^2/\mathbb Z^2$ inducing the identity on $H_1(T^2;\mathbb Z)$ is smoothly isotopic to the identity. Consequently every torus diffeomorphism is smoothly isotopic to the linear torus map inducing its integral unimodular matrix on $H_1$.

## Facts & Assumptions

**Given:** the indicated annulus or torus diffeomorphism.

[F1] A smooth disk diffeomorphism fixing its boundary is smoothly isotopic to the identity relative to that boundary, with a common collar retained if initially fixed ([[lem-smooth-disk-diffeomorphisms-fixing-boundary-admit-relative-smooth-isotopies]], Statement).

[F2] Smooth planar Jordan disks admit smooth parameters extending prescribed boundary maps and collars; collars can be compared by smooth isotopies ([[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]], Statement and Proof 5.1).

[F3] A smooth isotopy of a compact arc, circle or closed coordinate strip in the interior of a surface extends to a supported ambient isotopy ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement). Tracks fixed on endpoint collars are handled by applying it to their compact moving middle, with support away from the protected surface boundary.

[F4] Full-rank coordinate maps have smooth local inverses ([[thm-euclidean-inverse-function-theorem]], Statement).

## Proof

1.1 We first specify the curve reductions, including their smooth realization. Proper annulus arcs with the same endpoints and relative winding number, and essential torus circles with the same primitive unoriented homology class, can be made disjoint by finitely many bigon removals. Put their interiors in transverse position, keeping fixed any already common endpoint collars. For arcs lift to $\mathbb R\times[0,1]$; equal winding gives matching endpoint translations. For circles cut in the common primitive direction and use the annular cover $\mathbb R^2/\langle v\rangle$, or its planar strip lift. If there are intersections, an extreme excursion across a lift of the reference curve has a return arc on the same side. Among such return arcs choose one innermost with respect to all translates meeting that compact excursion. There are only finitely many relevant translates. It bounds a disk with an interval of the reference lift. Any further lifted arc in this disk would have an innermost return through that interval, giving a smaller choice; reference lifts cannot enter it without such a return. Thus its interior misses every lift of either curve. The disk projects injectively: if a deck translate overlapped it, their noncrossing boundary arcs would force nesting; a nonzero translation cannot strictly nest two equal-area bounded disks. This gives an embedded empty bigon downstairs. If no intersections remain, arcs of the same relative class bound a disk strip and circles of the same primitive class bound an annulus strip. These strip assertions follow by the same lift: matching translated endpoints leave a bounded disk, while consecutive parallel circle lifts bound a strip whose period quotient is an annulus. In particular there is no residual intersection without a bigon in these two cases. [F2, given, construct]

2.1 Each bigon removal is jointly smooth. At its two transverse corners the two curve equations are smooth coordinates with independent gradients, giving quadrant charts. Truncate small corner neighborhoods, apply [F2] with the induced boundary collars to the remaining rounded planar disk, and restore those quadrant charts. This identifies a neighborhood of the bigon with a standard lens bounded by $y=0$ and $y=\phi(x)$, where $\phi>0$ between its two simple zeros and $\phi<0$ just beyond them. Let $\psi$ be one on that interval and zero outside a slightly larger one, and let $d(x)=\psi(x)(\phi(x)+\delta)$ for small $\delta>0$. The graphs $y=s d(x)$, $0\le s\le1$, are regular embedded arcs fixed near their endpoints. At the last time they lie strictly above the other graph on the affected interval: where $\phi<0$, $d-\phi=\psi\delta-(1-\psi)\phi>0$ wherever a crossing could occur. The empty bigon and a sufficiently thin external collar keep the moving arc disjoint from its other portions. Extend this arc isotopy by [F3]. It removes two intersections without changing endpoints or the relevant class. After finitely many removals, use the disk-strip product to move disjoint arcs onto each other, or the annulus-strip product to move disjoint circles onto each other. The strip parameters are smooth: cut an annulus strip along a spanning arc and apply [F2] to its lifted planar disk, prescribing equal product collars on the two cut edges before regluing. Reparametrizations along a fixed arc are interpolations of increasing interval maps; along a fixed circle they are interpolations of increasing periodic lifts. They too extend by [F3]. Thus the reductions can make the indicated curves agree pointwise, not just as sets. [F2, F3, step 1.1, construct]

3.1 Let $f:A\to A$ fix its boundary pointwise. By the collar interpolation in [F2], first arrange that it fixes a smaller boundary collar. For the spanning arc $\alpha=\{0\}\times[0,1]$, lift $f(\alpha)$ starting at $(0,0)$; its other endpoint is $(k,1)$ for a unique integer $k$. Compose with $D_{-k}$. This makes its winding zero, so steps 1.1–2.1 isotope that arc onto $\alpha$, pointwise and relative to the boundary collars. Arrange also that the resulting map is the identity on a neighborhood of $\alpha$: in normal coordinates along this fixed arc its derivative on the arc is triangular, with tangent entry one and positive transverse entry. Linear interpolation of its local coordinate map to the identity has positive determinant on the arc and, on one common narrower strip, consists of embeddings by compactness and the inverse theorem. Extend that supported strip isotopy by [F3]; it is stationary near the annulus boundary. Cutting along $\alpha$ now gives a disk map equal to the identity on its entire boundary collar. Round only inside that fixed collar and apply [F1]. The resulting isotopy pastes across the cut because it is the identity there. Hence $D_{-k}f$ is isotopic to the identity relative to the boundary, and $f$ is isotopic to $D_k$. [F1, F2, F3, F4, step 1.1, step 2.1, construct]

4.1 The integer $k$ is invariant under a boundary-fixed isotopy: lift the moving spanning arc with its initial endpoint fixed; its other endpoint is an integer translate and varies continuously, hence is constant. This proves uniqueness. For an unrestricted annulus diffeomorphism, first compose with the appropriate one of the four displayed maps so that it preserves both boundary components and their circle orientations. Its two boundary circle maps have increasing angular lifts. Interpolate each lift to the identity and extend those isotopies in disjoint boundary collars; the explicit maps keep the collar coordinate and have positive angular derivative. Then apply step 3.1. Finally $D_k$ itself is isotopic to the identity when the boundary is free, through $(\theta,u)\mapsto(\theta+s k\rho(u),u)$. All these families are smooth diffeomorphisms. Thus the four representatives are exhaustive; their boundary permutation and circle degree distinguish their classes. [F2, F3, step 3.1, construct]

5.1 Now let $f:T^2\to T^2$ induce the identity on $H_1$. Choose a primitive standard core circle $c$. The circle reduction of steps 1.1–2.1 and its circle reparametrization isotope $f$ so it fixes $c$ pointwise. The same triangular-derivative strip interpolation as in step 3.1 makes it the identity on a collar of $c$. Cut along $c$ to obtain an annulus diffeomorphism fixing both boundary collars. By step 3.1 this map is isotopic relative to those collars to $D_k$. On regluing, $D_k$ sends a transverse homology generator $d$ to $d+k[c]$ and fixes $[c]$: lift $d$ across the annulus and read its displacement $k$. The original action was the identity and isotopies preserve that action, so $k=0$. The collar-fixed annulus isotopy therefore pastes to a smooth torus isotopy from $f$ to the identity. For arbitrary $f$, its homology matrix $L\in\mathrm{GL}(2,\mathbb Z)$ defines the linear torus diffeomorphism with the same action; apply the result to $L^{-1}f$ and compose with $L$. [F1, F2, F3, step 2.1, step 3.1, step 4.1, construct]

6.1 Use smooth time changes constant near the endpoints of each of the finitely many stages, and concatenate them on disjoint time subintervals. Their derivatives of every time order then match at the joins and at $0,1$. Every curve move was an actual graph or product embedding isotopy extended smoothly, every local strip interpolation had a positive full-rank derivative, and the disk interior stage was [F1]'s jointly smooth isotopy. Thus no unsmoothed Alexander disk contraction occurs. The protected collars remain fixed in the relative assertions. This proves the required endpoint and parameter-smoothness claims. [F1, F3, step 2.1, step 3.1, step 4.1, step 5.1] ∎


<!-- thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds -->
---
id: thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
kind: theorem
title: "Smooth Loop theorem and the smooth incompressibility criterion"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-incompressibility-seifert-fibration-and-jsj-system, lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations, thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation, lem-choice-free-relative-rounding-of-finite-whole-star-surfaces, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. Compatible pair triangulation and finite PL Loop are choice-free. Relative finite surface rounding uses the choice-free planar Jordan disk parameters. Boundary collars, subdivisions and cap replacements use only finite choices."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.45–48, Loop theorem and Corollary3.3; the compatible triangulation, smooth boundary collar and relative disk-rounding transfer are supplied explicitly here"
---

## Statement

Let $M$ be a compact connected orientable smooth three-manifold, let $F$ be a compact connected smooth subsurface of $\partial M$, and let $N\lhd\pi_1(F)$ be normal. If a continuous disk map into $M$ has its boundary in $\operatorname{Int}F$ with class outside $N$, there is a smoothly properly embedded disk in $M$ whose boundary lies in $\operatorname{Int}F$ and has class outside $N$. No pointwise preservation of the original boundary loop is asserted.

Consequently a compact neatly properly embedded two-sided smooth surface $S$ in such a compact orientable smooth three-manifold is incompressible if and only if its inclusion induces an injection on fundamental groups, component by component. Here incompressibility means absence of a smooth embedded compressing disk, with the conventions of the indicated definition.

## Facts & Assumptions

**Given:** The first-assertion disk map; for the consequence a smooth surface $S$ with a supplied smooth two-sided product neighborhood in the compact ambient manifold.

[F1] The smooth manifold and marked boundary curves admit a finite compatible whole-star triangulation, and the same is true of a neat two-sided smooth cut pair ([[lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations]], Statement).

[F2] The finite orientable PL Loop theorem produces a proper embedded PL disk with boundary class outside the prescribed normal subgroup ([[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]], Statement).

[F3] A finite PL embedded polyhedron has a compatible subcomplex subdivision ([[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]], Statement).

[F4] A finite piecewise smooth surface with injective whole-star differential fan and an already smooth boundary collar has a smooth embedded replacement fixed on a smaller such collar, preserving its topology ([[lem-choice-free-relative-rounding-of-finite-whole-star-surfaces]], Statement).

[F5] Smooth compact boundary collars can be obtained by the finite inward-field flow construction in [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Proof 1.2 and 2.2; for an ordinary smooth boundary this collar is smooth, not merely piecewise smooth. The same supplier gives relative finite triangulations of the cut corner pieces; its Statement, Facts F4 and Proof5.1 explicitly make AC dispensable, so only its finite construction is used.

[F6] A compressing disk and incompressibility have the conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]].

## Proof

1.1 Apply [F1] with no interior cut surfaces and boundary circle system $\partial F$. It makes $F$ a finite PL subsurface of the boundary in a whole-star smooth triangulation of $M$. The continuous cap and its boundary class are unchanged. Apply [F2] to obtain a proper PL disk $D$ with boundary $c\subset\operatorname{Int}F$ outside $N$. By [F3] subdivide compatibly so $D$ is a subcomplex. Its simplex maps are smooth and its differential fan is injective, being restricted from the ambient whole-star fan. The remaining issue is its boundary collar, which need not yet be smooth. [F1, F2, F3, given, construct]

2.1 Take the smooth ambient boundary collar of [F5], with height $q\ge0$. Near the disk boundary the inward tangent directions of $D$ have strictly positive $dq$, while its boundary directions have $dq=0$. Indeed the ambient whole-star fan maps the boundary fan exactly onto the tangent boundary plane and no other vector onto that plane; a proper PL disk has no inward cone ray in the ambient boundary fan. This verifies piecewise smooth neatness rather than inferring it merely from properness of an arbitrary topological disk. The finite boundary stars therefore give a short level collar of $D$: on each mixed boundary face the implicit equation $q=\epsilon$ cuts one smooth arc, and the arcs join across its finite edges. The positive first-order normal coefficients give a common small height for which their directions remain transverse. In the vertex stars their linear cone section is an interval, with its two ends in the adjacent edge strips; the same local implicit coordinates retain that interval for sufficiently small positive height. Thus $D\cap\{0\le q\le\epsilon\}$ is a finite piecewise smooth annulus, with only its bottom $c$ on the ambient boundary and one simple upper curve $c_\epsilon$. Compactness separates the rest of the disk from $q=0$, so choose the height below that separation as well. All upper boundary points of the truncated disk then belong to this one $c_\epsilon$. [F1, F3, F5, step 1.1, construct]

3.1 Project $c_\epsilon$ to $F$ by the ambient collar, taking the height small enough that its projection remains in $\operatorname{Int}F$. This is an embedded finite piecewise smooth circle $\bar c_\epsilon$ and is freely homotopic in $\operatorname{Int}F$ to $c$, by projection of the disk collar. Choose a smooth parallel circle $c'$ on one side, disjoint from $\bar c_\epsilon$, with an annulus $A$ between them in $\operatorname{Int}F$. This is a finite construction: use small vertex disks and edge strips of the piecewise smooth curve, choose the same side consistently in the oriented boundary surface, take a close parallel boundary, and round its finitely many corners in monotone graph charts. The intervening annulus has a finite piecewise smooth triangulation by those vertex sectors and edge strips, with injective differential fan because it lies in the smooth boundary surface. Replace the deleted disk collar by $A\times\{\epsilon\}$ followed by $c'\times[0,\epsilon]$ in the smooth ambient collar, and retain the truncated disk $D\cap\{q\ge\epsilon\}$. This union is an embedded disk: the first piece of it lies at heights at least $\epsilon$ and meets that level only at $c_\epsilon$; the horizontal annulus and vertical curtain meet only at their stated seams. At the old seam the disk's inward fan has positive $dq$, while the attached annulus lies in $dq=0$; at the new seam the horizontal and vertical half-planes are distinct. Hence the full differential fans of the union are injective. Its bottom collar $c'\times[0,\epsilon/2]$ is already smooth. [F4, F5, step 2.1, construct]

4.1 Apply [F4] to that finite piecewise smooth disk, protecting its smaller smooth bottom collar and choosing a replacement neighborhood that misses the ambient boundary except there. It gives a properly embedded smooth disk with boundary exactly $c'$. The annulus in step 3.1 and the projected original collar show that $c'$ is freely homotopic to $c$ in $F$. Normality of $N$ therefore preserves exclusion from $N$. This proves the strong smooth Loop assertion. It used the specified compatible smooth triangulation and the actual boundary-collar repair, with no ambient homeomorphism smoothing or arbitrary PL-marking compatibility assumed. [F4, step 1.1, step 3.1, construct]

5.1 For the criterion, injection immediately rules out a compressing disk, since its essential boundary would be nullhomotopic in the ambient manifold. Conversely suppose a component of $S$ has a nontrivial kernel loop. Take an actual cap map. Give the neat cut pair compatible finite triangulations by [F1], push the map's boundary collar into one chosen side, and put its interior in finite PL general position relative to $S$. The interior preimage of $S$ is a finite union of circles. If a preimage circle has image nullhomotopic in $S$, replace the source disk it bounds by such a nullhomotopy, pushed slightly into the side occupied by the outside collar of that circle. This removes that circle and all preimage circles inside it, without changing the outer boundary. The push is defined in the supplied two-sided product neighborhood, so creates no new preimages; finite relative approximation retains this separation. Repeat these finite removals. Either no circles remain, giving the original essential outer boundary a cap in one cut side, or choose an innermost remaining circle, whose image is essential in $S$ and whose inside disk now misses $S$. In either case obtain a disk map in one cut component with essential boundary in its copy of $S$. [F1, F5, F6, step 4.1, construct]

6.1 Choose a compact inner subsurface $S_0$ of that copy containing this boundary image and obtained by removing only a sufficiently small boundary collar of $S$; it is homotopy equivalent to $S$. Round the cut manifold's corners away from $S_0$, using its finite product quadrant charts. The rounding is smooth on the interior and unchanged near $S_0$. Apply the first assertion, with marked boundary subsurface $S_0$ and trivial normal subgroup. It gives a proper smooth disk in that cut component with boundary essential in $S_0$, hence in $S$. On regluing this is a smooth compressing disk for $S$, since its interior is disjoint from the cut boundary and its boundary lies away from the rounded corners. This contradicts incompressibility and proves injection. The same finite argument applies to each component. No general TOP three-manifold triangulation theorem has entered the proof. [F1, F5, F6, step 4.1, step 5.1, construct] ∎


<!-- lem-smooth-sphere-diffeomorphisms-extend-over-balls -->
---
id: lem-smooth-sphere-diffeomorphisms-extend-over-balls
author: prestige-math-library
kind: lemma
title: "Smooth sphere boundary maps extend over parametrized balls"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-smooth-disk-diffeomorphisms-fixing-boundary-admit-relative-smooth-isotopies, lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars, lem-choice-free-isotopy-extension-for-a-compact-smooth-source]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The relative disk isotopy, positive-germ construction and compact-source extension now have finite proofs without a choice hypothesis. No explicit choice hypothesis of any consumer is altered."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jiayong Li and Jordan Alan Watts, The orientation-preserving diffeomorphism group of S2 deforms to SO(3) smoothly"
      url: "https://arxiv.org/pdf/0912.2877"
      locator: "Version2, §3, PDF pp.12–16 supplies the relative disk isotopy proved in the named local supplier. The fixed-input sphere reduction and ball extension below are proved directly."
---

## Statement

Every orientation-preserving smooth diffeomorphism $g:S^2\to S^2$ is joined to the identity by a jointly smooth isotopy of orientation-preserving diffeomorphisms, stationary near its time endpoints. Consequently every smooth diffeomorphism $b:\partial B_0\to\partial B_1$ between the boundaries of two parametrized smooth $3$-balls extends to a smooth diffeomorphism $B_0\to B_1$. In the radial boundary collars supplied by their parametrizations, the extension can be required to have the product form $(x,r)\mapsto(b(x),r)$ on one smaller collar. Its orientation agrees with the orientation of $b$ on the boundaries, using the outward-normal convention.

This asserts existence of an isotopy for each given map; it does not assert a deformation retraction parametrized by the entire diffeomorphism group.

## Facts & Assumptions

**Given:** the smooth sphere diffeomorphism, and, for extension, the supplied ball parametrizations.

[F1] A smooth orientation-preserving disk diffeomorphism equal to the identity on a boundary neighborhood admits a jointly smooth isotopy to the identity fixing one common smaller collar ([[lem-smooth-disk-diffeomorphisms-fixing-boundary-admit-relative-smooth-isotopies]], Statement).

[F2] A smooth isotopy of compact full-dimensional submanifold embeddings in a boundaryless ambient manifold extends to a smooth ambient isotopy with support in a prescribed neighborhood of its track ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement).

[F3] The positive germ construction by linear interpolation, rescaling and compact-source extension is proved in [[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]], Proof 6.1; it is a supported isotopy, not merely an extension of a germ.

## Proof

1.1 Fix a point $p\in S^2$. There is an orientation-preserving rotation $R$ carrying $g(p)$ to $p$, joined to the identity by a smooth rotation path. Indeed rotate in the plane through the two unit vectors; in the antipodal case use any plane containing the vector, with angle $\pi$. Set $h=R\circ g$, so $h(p)=p$. In one oriented coordinate chart about $p$, the local germ $k=h^{-1}$ fixes the origin and has derivative $A$ of positive determinant. Write $A=UP$ with $U$ a rotation and $P$ positive definite; a rotation path and positive definite linear interpolation join the identity to $A$. For $t>0$ put $k_t(x)=k(tx)/t$. The identity $$k_t(x)=\int_0^1 Dk(stx)x\,ds$$ shows joint smoothness at $t=0$, with $k_0(x)=Ax$. On a sufficiently small common closed coordinate disk every slice of this path is an embedding with image in the chart: for the rescaling part injectivity follows directly from injectivity of $k$, and for all parameters the lower bound on the least singular value of the derivatives and compactness give a common chart restriction. Concatenate the linear path with the rescaling path, stationary at the joins. By [F2], equivalently the construction in [F3], this disk isotopy extends to an ambient isotopy $K_t$ of the sphere supported in that chart. Its endpoint equals $k$ on a neighborhood of $p$. Hence $K_1\circ h$ is the identity near $p$. [F2, F3, given, construct]

2.1 Choose a smaller round coordinate disk $U$ about $p$ in this identity neighborhood. The complement $D=S^2\setminus\operatorname{Int}U$ is a parametrized smooth disk (stereographic coordinates centered at $p$ identify it with a round disk after a radial change of scale). The map $K_1\circ h$ restricts to a diffeomorphism of $D$ fixing a boundary collar. By [F1] it is smoothly isotopic to the identity there with a common collar fixed. Extend by the identity on $U$. Because the whole family fixes that common collar, this pasting is jointly smooth across $\partial U$. Prepend the paths $g\mapsto R\circ g$ and $h\mapsto K_t\circ h$, and stationarize all endpoints and joins. This gives the claimed jointly smooth sphere isotopy. All slices preserve orientation because each is a diffeomorphism and the initial slice does. [F1, step 1.1, construct]

3.1 Conjugate $b$ by the supplied ball parametrizations, obtaining a sphere diffeomorphism, again denoted $b$. If it preserves orientation, reverse step 2.1's isotopy to get $b_t$ from the identity to $b$. Choose a smooth $\alpha:[0,1]\to[0,1]$ zero for $r\le1/3$ and one for $r\ge2/3$. In polar ball coordinates define $$B(rx)=r\,b_{\alpha(r)}(x),\qquad x\in S^2.$$ It is the identity on the inner ball, so it is smooth at its center and across the inner gluing sphere. For $r>0$ its inverse is $ry\mapsto r\,b_{\alpha(r)}^{-1}(y)$; inverse smoothness follows from the jointly smooth isotopy and the invertibility of its tangential derivatives. Thus it is a diffeomorphism, and near $r=1$ it is exactly the radial product of $b$. If $b$ reverses orientation, compose it first with a fixed orthogonal reflection, apply the orientation-preserving construction, and then undo the reflection by its linear extension over the ball. Undo the original parametrizations. The normal collar coordinate is unchanged, so the determinant sign is the boundary determinant sign. All paths and selections were finite, and the named disk, germ and compact-source extension suppliers now have choice-free proofs. [F1, F2, step 2.1, construct] ∎


<!-- lem-boundary-compressible-annulus-is-boundary-parallel -->
---
id: lem-boundary-compressible-annulus-is-boundary-parallel
kind: lemma
title: "Boundary-compressible annuli with torus boundary are boundary-parallel"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free. The ball is supplied by irreducibility; its marked windows and the finite smooth torus-curve reductions use explicitly choice-free suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.10 and its proof, printed pp.15–16"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§§2–3, incompressible annuli and torus-boundary decomposition"
---

## Statement

Let $M$ be a compact connected orientable irreducible $3$-manifold whose boundary components are tori. Let $A\subset M$ be a connected properly embedded incompressible annulus with $\partial A\subset\partial M$. If $A$ is boundary-compressible, then $A$ is boundary-parallel.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.10](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** The compact connected orientable irreducible smooth three-manifold with torus boundary, the incompressible proper annulus $A$, and a boundary-compressing disk $D$.

[F1] The disk obstructions, irreducibility and boundary-parallel product have the conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]], Definition.

[F2] Smooth essential torus curves are primitive, finite disjoint families admit smooth affine normalization, and their complementary strips have smooth annulus parameters, without choice ([[lem-choice-free-smooth-torus-curves-and-annulus-strips]], Statement).

[F3] A parametrized ball with a parametrized boundary disk window is the standard marked pair; with supplied collars, disk attachment and removal preserve ball type, without choice ([[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]], Statement).

## Proof

1.1 Write $\partial D=\alpha\cup\beta$, where $\alpha$ is the essential proper arc in $A$ and $\beta$ lies in a boundary torus $T$. In an annulus every essential proper arc joins its two boundary circles: cut along a radial spanning arc and use a lift to the strip; an arc returning to the same boundary cuts off a disk there. Consequently both boundary circles of $A$ lie on this same $T$. They are essential on $T$: otherwise choose an innermost disk bounded by one of them in $T$, push it inward off the annulus collar, and obtain a compression of $A$. By [F2] the two circles cut $T$ into two parametrized annuli. The interior of $\beta$ misses them and joins them, so it spans one of these annuli, denoted $A_0$. [F1, F2, given, construct]

2.1 Push the interior of $A_0$ a little into its inward collar, keeping its rim on $A$, and round the rim. The union $S=A\cup A_0$ is a torus with a displayed corner before rounding. The curve $\alpha\cup\beta$ on it meets a core of $A$ once algebraically, not merely modulo two: $\alpha$ is a spanning arc of the annulus. It is therefore a nonseparating essential circle. Compress $S$ along $D$, taking two parallel copies of $D$ in its disk neighborhood; the result is a sphere. Irreducibility supplies a parametrized ball bounded by it. The disk neighborhood lies outside this ball: its strip along $\beta$ is joined to $\partial M$ through the gap left when that strip was removed from $A_0$, without crossing the compressed sphere. A ball in the interior cannot contain that boundary collar. Restoring the disk neighborhood therefore attaches one marked $1$-handle to the ball, rather than removing a possibly knotted handle from it. Its two attaching disk windows have the actual parallel-copy parameters of $D$. They can be put in standard positions by [F3]: standardize one window, shrink the other in the connected complement of the first on the boundary sphere, and move it to the opposite standard disk by the finite supported construction in [F3]'s Proof 1.1–2.1, fixing the first. Thus the restored region $U$ is a smooth solid torus with meridian disk the cocore of this handle. Its boundary is the displayed $S$; all corner changes are restored by the original quadrant collars. [F1, F3, step 1.1, construct]

3.1 The marking is essential. In the product coordinates $U=D^2\times S^1$ supplied by that ball and handle, let $(\mu,\lambda)$ denote the meridian-longitude basis of its boundary. Each rim circle of $A$ meets the cocore boundary once algebraically, because it meets $\alpha\cup\beta$ once. Hence its slope is $p\mu+q\lambda$ with $q=\pm1$. By [F2] normalize the two rim circles to affine circles of that slope. The entire boundary isotopy extends into a radial annulus of $D^2\times S^1$: in the boundary radial coordinate use the same formula $(r,x)\mapsto(r,h_{\eta(r)t}(x))$ as [F3], identity near the inner solid torus. The product diffeomorphism $(z,e^{i\theta})\mapsto(e^{ip\theta}z,e^{iq\theta})$, with inverse $(z,e^{i\varphi})\mapsto(e^{-ipq\varphi}z,e^{iq\varphi})$, carries longitudinal circles to that slope, up to replacing $p$ by its negative according to the chosen inverse. Apply its inverse. The two complementary boundary annuli now correspond to the two arcs between two points on $\partial D^2$, times $S^1$. The disk with one of these marked arcs is a rectangle with its bottom edge marked, with the usual rounded-corner interpretation, by [F3] in dimension two. Taking its product with $S^1$ gives a product between the corresponding annuli: the first is $A\times\{0\}$, and $A\times\{1\}\cup\partial A\times[0,1]$ is the second annulus $A_0$. Restore the retained quadrant collars to get this product for the actual original $A$ and boundary annulus in $\partial M$. This proves boundary-parallelity in [F1]'s precise sense. The winding-one condition from $D$ is what justifies this product; complementary annuli in an arbitrary solid torus do not suffice. All selected charts, windows and curve moves were finite, and [F2]–[F3] require no choice. [F1, F2, F3, step 1.1, step 2.1, construct] ∎


<!-- lem-choice-free-smooth-torus-incompressibility-in-a-supplied-flat-product -->
---
id: lem-choice-free-smooth-torus-incompressibility-in-a-supplied-flat-product
kind: lemma
title: "Choice-free smooth torus incompressibility in a supplied flat product"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-finite-flat-product-torus-secant-transport-has-whole-star-fans, lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity, lem-choice-free-relative-rounding-of-finite-whole-star-surfaces, lem-choice-free-smooth-torus-curves-and-annulus-strips]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The supplied flat ambient product has an explicit finite PL structure; finite whole-star transport, PL Loop/cut injection and finite relative disk rounding are proved without choice. This does not consume a general smooth triangulation theorem."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.45–48, Loop/incompressibility consequences, with the supplied flat-product compatibility and relative rounding transfer proved here."
---

## Statement

Let $X$ be a smoothly parametrized product $T^2\times[0,1]$. Let $S$ be a finite disjoint family of smoothly embedded two-sided tori in its interior. Then all component maps $\pi_1(S_i)\to\pi_1(X)$ are injective if and only if there is no smooth embedded disk whose boundary is essential on one $S_i$ and whose interior misses all of $S$. In that case every component of the smooth cut-open manifold $X\mathbin{\|}S$ is injective on fundamental groups into $X$. No irreducibility or choice assumption is required.

This is an interface for a supplied smooth product. It asserts neither triangulability of an arbitrary topological three-manifold nor smoothing of an arbitrary ambient PL marking.

## Facts & Assumptions

**Given:** The actual smooth product parameter and finite smooth torus family in the Statement.

[F1] Finite parametrized tori in the flat product admit a finite PL secant system $P_i$, actual PL tube maps $L_i$, and finite whole-star piecewise smooth ambient transport $K$ with $K(P_i)=S_i$ and $K L_i(u,r)=E_i(u,r)$ in a central strip, where $E_i$ is a smooth normal collar ([[lem-finite-flat-product-torus-secant-transport-has-whole-star-fans]], Statement and full proof).

[F2] For finite compatible orientable PL three-manifolds, the no-compressing-disk condition for a finite two-sided locally flat PL surface system is equivalent to all component-group injections; it also gives all cut-piece-group injections ([[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]], Statement and full proof). The supplied PL product collars in [F1] meet its collar hypotheses.

[F3] A finite embedded piecewise smooth surface with injective whole-star differential fans and a smooth boundary collar admits a smooth embedded replacement, preserving its abstract topology and fixed on a smaller collar, without choice ([[lem-choice-free-relative-rounding-of-finite-whole-star-surfaces]], Statement and full proof).

[F4] Finite smooth torus curve/strip constructions, including finite corner graph rounding, have the parameters of [[lem-choice-free-smooth-torus-curves-and-annulus-strips]], full proof.

## Proof

1.1 If the family is empty, its cut manifold is $X$ and the assertion is immediate. Otherwise work in the supplied product coordinates and apply [F1] simultaneously. Every torus parameter is a finite selection; the transport is the identity near $\partial X$. If some component map is not injective, the corresponding $P_i$ map is not injective, since $K$ is a homeomorphism. By [F2] there is a finite PL compressing disk $D$ meeting the entire PL system only along its boundary on one $P_j$. Make its interior disjoint from $\partial X$ if necessary: a strictly increasing piecewise affine self-map of $[0,1]$ can send its endpoints inward while being the identity on the compact height band containing all the $P_i$. Its product with the torus coordinates is a PL embedding fixing all $P_i$, and moves the disk away from $\partial X$ without changing its boundary. [F1, F2, given, construct]

2.1 Refine $D$ with the finite ambient triangulation in [F1]. The disk $K(D)$ then has actual whole-star piecewise smooth data, not merely a topological embedded-disk description. We next give it a smooth boundary collar. In the PL collar $L_j(u,r)$ its boundary lies at $r=0$ and its short inward disk collar is on one side, say $r\ge0$. The inverse image of $D$ there is a finite PL disk. The function $r$ is affine on its refined simplices, zero exactly on the boundary circle in a sufficiently small neighborhood. Choose $\epsilon>0$ below every positive vertex level and below the central-strip width, and small enough to exclude the rest of the compact disk. Each boundary triangle then contributes its standard level trapezoid, and the successive vertex fans join them to a PL annulus $0\le r\le\epsilon$. Its top circle is embedded in $T^2\times\{\epsilon\}$, and its projection to the $u$ torus is an embedded polygonal circle $c_\epsilon$. Because $K L_j=E_j$ on this strip, the normal coordinate of the transported disk is exactly $r$. Its collar projection also gives a homotopy from its original boundary to $E_j(c_\epsilon,0)$ on $S_j$. Thus this circle is essential on $S_j$. [F1, F2, step 1.1, construct]

3.1 On the parameter torus put a finite polygonal annulus collar around $c_\epsilon$: take short edge rectangles and join their sides through the finitely many vertex fans, with coherent side determined by the oriented torus. Smooth the corners of one outer boundary inside disjoint graph boxes, retaining a positive distance from $c_\epsilon$. The smoothed outer circle $c'$ and the original polygonal inner circle bound a finite whole-star piecewise smooth annulus, with smooth collar at $c'$. These are exactly the finite graph and strip constructions of [F4]; no arbitrary-surface triangulation is being assumed. In $E_j$ coordinates replace the short collar of $K(D)$ by this annulus at $r=\epsilon$, joined to the vertical strip $c'\times[0,\epsilon]$. The retained disk lies at $r\ge\epsilon$ and meets that level only in its old top circle; the annulus and new vertical strip are therefore embedded and meet it only in the intended seams. At the first seam their derivative fans are injective: the annulus has zero $r$ direction and the retained disk has strictly positive inward $r$ direction. At the other seam the annulus and vertical strip are the two product half-faces. Smooth the harmless seam corners on a smaller open strip if desired. The result is a disk with a smooth collar at its exact boundary $E_j(c',0)$; this boundary is homotopic on $S_j$ to the original essential boundary. [F1, F3, F4, step 2.1, construct]

4.1 Apply [F3], fixed on a smaller smooth collar. The rest of the finite disk is compact and separated from $S$ and $\partial X$ once that protected collar is removed; choose all rounding neighborhoods in that open complement. On the protected collar the disk stays on its original side. The smooth replacement is consequently a genuine compressing disk in $X$, with interior missing every $S_i$ and essential boundary on $S_j$. We have proved that a noninjective component map forces such a smooth disk. Conversely any such smooth disk caps its boundary in $X$, while an essential embedded circle on a torus is nontrivial in its fundamental group, by its primitive nonzero class [F4]. It therefore contradicts injectivity of that component map. This proves the equivalence. [F1, F2, F3, F4, step 1.1, step 3.1, construct]

5.1 In the no-smooth-disk case, the preceding construction shows that the PL system has no PL compressing disk. Apply [F2]'s cut-piece injection conclusion. The homeomorphism $K$ extends to the cut-open manifolds using its actual collar product $K L_i=E_i$ near every seam. Hence it identifies each PL cut piece with the corresponding smooth cut piece and commutes with their inclusions into $X$. Their fundamental-group injections transport by these homeomorphisms. The transport itself was only a finite piecewise smooth homeomorphism; the disk replacement used [F3] to produce an actual smooth disk. No step reinterprets a required smooth ambient isotopy as a homeomorphism isotopy. Every construction and choice was finite. [F1, F2, F3, step 4.1, construct] ∎


<!-- lem-equal-seifert-boundary-slopes-admit-smooth-fiber-matching-and-gluing -->
---
id: lem-equal-seifert-boundary-slopes-admit-smooth-fiber-matching-and-gluing
kind: lemma
title: "Smooth matching and gluing of equal Seifert boundary slopes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-incompressibility-seifert-fibration-and-jsj-system, lem-relative-smooth-mapping-classes-of-annulus-and-torus, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters, lem-choice-free-isotopy-extension-for-a-compact-smooth-source, thm-euclidean-inverse-function-theorem]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. Mapping classes use the finite disk/Jordan proofs; finite bundle transport uses Euclidean ODEs, boundary isotopies have an explicit collar formula, and collar comparison uses finite compact-source extension in the double."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.22–23, matching fibrations on boundary tori in the proof of Theorem1.9; the smooth parameter and collar extensions are supplied here"
---

## Statement

Two smooth circle-bundle fibrations of the same torus with equal unoriented primitive fiber class are carried to one another by a jointly smooth isotopy of the torus starting at the identity and stationary near its time endpoints.

Consequently, suppose two boundary tori of compact smooth Seifert pieces are glued by a specified smooth diffeomorphism and their regular-fiber slopes agree under that identification. The fibrations may be modified by smooth ambient isotopies in arbitrarily small boundary collars so that they agree fiber by fiber on the identified torus and have matching product collar charts there. Their union is then a smooth Seifert fibration of the glued manifold. The two boundary tori may belong to the same piece. For finitely many disjoint matched boundary pairs, the modifications may be performed simultaneously in disjoint collars.

## Facts & Assumptions

**Given:** the two torus fibrations with equal fiber class, and for the gluing conclusion the indicated smooth Seifert pieces and boundary identification.

[F1] Smooth ODEs have unique local solutions with smooth dependence on initial values and parameters ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F2] A torus diffeomorphism inducing the identity on integral first homology has a jointly smooth isotopy to the identity ([[lem-relative-smooth-mapping-classes-of-annulus-and-torus]], Statement).

[F3] Compact-source isotopies extend with prescribed support, without choice ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement). A boundary torus isotopy $h_t$ extends in a supplied collar by $(x,r)\mapsto(h_{\chi(r)t}(x),r)$, with $\chi=1$ near the boundary and zero near the collar end; its inverse has $h_{\chi(r)t}^{-1}$ in the same formula. This explicitly preserves the boundary and pastes to the identity.

[F4] Full-rank coordinate maps have smooth local inverses ([[thm-euclidean-inverse-function-theorem]], Statement).

[F5] Seifert models and boundary regular fibers are those of [[def-incompressibility-seifert-fibration-and-jsj-system]].

## Proof

1.1 Each circle-bundle fibration of $T^2$ has fiber-preserving smooth coordinates from $S^1\times S^1$. Cut its base circle once, lift the base interval direction horizontally in finitely many bundle charts, and patch the lifts by finite base bump functions. Compactness and [F1] give the transport product over the cut interval. Its return circle map has degree $+1$, since a degree-$-1$ return gives a nonorientable total surface. For an increasing angular lift $r$ of that return map, $(1-s)r(\theta)+s\theta$ is a smooth circle-map isotopy to the identity. Make it stationary at its endpoints. The product coordinate change $(z,u)\mapsto(r_{1-u}(z),u)$ identifies its mapping torus with the identity-return torus, with smooth matching at the seam because of that stationarity. Thus the claimed fiber-preserving torus coordinates exist. They also show each fiber class is primitive. Choose the two coordinate maps orientation-preserving and let $h:T^2\to T^2$ be their composite carrying the first fibration to the second. [F1, F5, given, construct]

2.1 Since the two fiber slopes agree, $h_*$ preserves their common unoriented primitive line. In coordinates for the first fibration, the inverse matrix $h_*^{-1}$ therefore has the form $\begin{pmatrix}\varepsilon&k\\0&\varepsilon\end{pmatrix}$, with $\varepsilon=\pm1$ and $k\in\mathbb Z$. Its linear torus diffeomorphism $L(\theta,u)=(\varepsilon\theta+ku,\varepsilon u)$ preserves the first fiber decomposition. Compose $h$ on the right with this coordinate-conjugate $L$. The resulting $h'$ still carries the first fibration to the second, and now $(h')_*$ is the identity. By [F2] there is a jointly smooth isotopy from the identity to $h'$, stationary near both time endpoints. This proves the first assertion with an actual smooth diffeotopy. [F2, step 1.1, construct]

3.1 For a boundary identification pull the second fibration back to the first torus and apply step 2.1. Extend that torus isotopy into the chosen piece by [F3]'s explicit collar formula, with support in its prescribed boundary collar. Other boundary components remain fixed. This makes the two boundary decompositions identical. For completeness the compact torus has a smooth collar without choice: combine finitely many inward coordinate fields with normalized finite bumps, integrate by [F1], and use the inverse-function and compact separation argument to get one injective common-width flow collar. Each fibration also has a fiber-preserving collar: take a small base collar avoiding all exceptional points, lift its inward normal direction in bundle charts and integrate using [F1]. To make these collars equal to a common smooth collar of the glued torus, compare two collar maps in flat torus coordinates. Their relative map has the form $(x,r)\mapsto(x+a(x,r),R(x,r))$, with $a(x,0)=0$, $R(x,0)=0$ and $R_r(x,0)>0$. For sufficiently small width $a$ has a unique small periodic lift to $\mathbb R^2$. Interpolate to the identity by $(x+s a(x,r),(1-s)r+sR(x,r))$. At the zero section its derivative is block triangular with positive normal entry; compactness and [F4] give one narrower two-sided strip on which all maps are embeddings. Extend the collar charts smoothly across zero before using this interpolation. Apply [F3] to the compact two-sided strip in the double of the piece. The interpolation fixes the zero torus, so its ambient extension fixes it and preserves its two sides. Its restriction to the required side therefore gives the desired collar comparison by an ambient isotopy, fixed on the torus. Use the inverse comparison when necessary. Thus the equal boundary decompositions can be made product decompositions in the same normal coordinate, while retaining their fiber sets on the torus. [F1, F3, F4, step 2.1, construct]

4.1 Choose one common torus fiber coordinate system and extend it by that common normal coordinate to both sides. These are identical regular Seifert product charts on the seam; all other old Seifert charts, including exceptional solid-torus charts, remain unchanged outside the modified collars. This proves the smooth Seifert gluing assertion. For a self-gluing adjust one of its two disjoint boundary collars and then make both product collars compatible as in step 3.1; no second piece was needed in that argument. Finitely many disjoint boundary tori admit disjoint compact collars, so the finite isotopies with those supports compose and preserve every earlier match. Smooth stationary time changes allow them to be simultaneous or concatenated without changing any endpoint conclusion. [F3, F5, step 3.1, construct] ∎


<!-- lem-incompressible-surface-torus-boundary-essential-or-parallel-annulus -->
---
id: lem-incompressible-surface-torus-boundary-essential-or-parallel-annulus
kind: lemma
title: "Incompressible surfaces at torus boundary are essential or parallel annuli"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-boundary-compressible-annulus-is-boundary-parallel
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free. The finite torus strips and the primitive marked-ball product supplier have choice-free proofs; no smooth global partition or triangulation supplier is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.10 and its proof, printed pp.15–16"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§1, essential annuli and torus-boundary pieces, PDF pp.3–5"
---

## Statement

Let $M$ be a compact connected orientable irreducible $3$-manifold whose boundary components are tori. Let $S\subset M$ be a connected, two-sided, properly embedded incompressible surface with nonempty boundary contained in $\partial M$. Then either $S$ is boundary-incompressible, or $S$ is an annulus boundary-parallel into $\partial M$.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.10](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** The compact connected orientable irreducible smooth manifold with torus boundary and the connected two-sided proper incompressible surface $S$ with nonempty boundary.

[F1] The geometric disk obstructions and boundary-parallelity are [[def-incompressibility-seifert-fibration-and-jsj-system]], Definition.

[F2] Disjoint essential smooth torus circles bound parametrized smooth annulus strips, without choice ([[lem-choice-free-smooth-torus-curves-and-annulus-strips]], Statement).

[F3] A proper incompressible annulus with a boundary compression in this manifold is boundary-parallel, by the primitive-winding marked-ball construction ([[lem-boundary-compressible-annulus-is-boundary-parallel]], full proof).

## Proof

1.1 If $S$ is boundary-incompressible, the first conclusion holds. Otherwise choose a boundary-compressing disk $D$, with $\partial D=\alpha\cup\beta$ and $\alpha$ an essential proper arc of $S$. A boundary disk on a torus whose interior misses $\partial S$ can be pushed inward to compress $S$, unless $S$ is itself a disk: a boundary circle bounding a disk on the connected surface forces the surface to be that disk. An innermost choice among the finitely many inessential boundary circles provides such a boundary disk. But a disk has no essential proper arc. Therefore every boundary circle of $S$ on the torus $T$ containing $\beta$ is essential. By [F2] its complementary regions are annulus strips. The arc $\beta$ lies in one of them. If both endpoints lie on the same boundary copy of that strip, it cuts off a disk there. Gluing this disk to $D$ gives a disk with boundary $\alpha$ and an interval of $\partial S$; incompressibility of $S$ forces that circle to bound a disk on $S$, so $\alpha$ would cut off a disk on $S$, contrary to essentiality. Thus $\beta$ spans its annulus strip $A_0$. [F1, F2, given, construct]

2.1 The two endpoints of $\alpha$ lie on distinct actual boundary circles of $S$. The only alternative after step 1.1 would be that the two ends of $A_0$ are the two copies of one circle $c$, with $c$ the only boundary circle of $S$ on $T$. Two-sidedness rules this out. Along the connected arc $\alpha$, the interior of $D$ lies on one fixed normal side of $S$. Along $c$, that same side restricts to one fixed side of $c$ in $T$, since the proper surface is two-sided. Hence $\beta$ must approach the same side of $c$ at both endpoints; a spanning arc of $T$ cut along $c$ approaches opposite sides. This contradiction proves the assertion. Let $P$ be a small regular neighborhood in $S$ of $\alpha$ and its two incident boundary circles. It is a pair of pants. Its third circle $d$ bounds a disk just off $S$: boundary-compress the annulus strip $A_0$ along $D$ and push the resulting disk a little inward. Its interior misses $S$, because the interior of $A_0$ misses $\partial S$ and the interior of $D$ misses $S$. Incompressibility makes $d$ bound a disk on $S$. This disk is on the side opposite $P$: if it contained $P$, the two boundary circles of $S$ in $P$ would lie in the interior of that disk, contrary to the surface half-space charts. Gluing the disk to $P$ fills a whole connected component of $S$, so $S$ is an annulus. The original $D$ is its boundary compression. Apply [F3] to get the second conclusion. Every neighborhood and disk surgery used only finitely many explicit surface and quadrant charts; [F2] and [F3] introduce no choice assumption. [F1, F2, F3, step 1.1, construct] ∎


<!-- lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel -->
---
id: lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel
kind: lemma
title: "Essential surfaces in a solid torus are meridian disks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - lem-relative-smooth-mapping-classes-of-annulus-and-torus
  - lem-smooth-sphere-diffeomorphisms-extend-over-balls
  - lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms
  - lem-gluing-irreducible-smooth-three-manifolds-across-injective-annuli
  - lem-relative-transversality-for-embedded-surfaces
  - thm-isotopy-extension
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The original full AC hypothesis is retained and implies countable choice for the smooth general-position and Schoenflies suppliers. The smooth Loop criterion and new finite relative isotopy suppliers are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Example preceding Lemma 1.10, printed pp.14–15"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§2, cut-and-paste of incompressible annuli and tori"
---

## Statement

Assume full AC. Let $V=S^1\times D^2$ be a solid torus. Every connected, two-sided, properly embedded incompressible and boundary-incompressible surface $F\subset V$ with nonempty boundary is a disk, either a meridian disk or a boundary-parallel disk. In particular, if $F$ is not boundary-parallel, it is a meridian disk. Any two meridian disks with the same boundary are isotopic relative to that boundary. In addition, every two-sided embedded torus $T\subset\operatorname{int}V$ has a compressing disk in $V$.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Example preceding Lemma 1.10](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, the standard smooth solid torus $V$, the connected two-sided proper surface $F$ with nonempty boundary and the two disk-obstruction hypotheses; and, for the last assertion, an embedded two-sided torus $T$ in its interior.

[A1] Full AC is [[def-axiom-of-choice]] and implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]], Statement; [[def-countable-choice]]).

[F1] The disk obstructions and product definition of boundary-parallelity are [[def-incompressibility-seifert-fibration-and-jsj-system]], Definition.

[F2] Every smooth sphere in $S^3$ bounds smooth balls on both sides ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]], Statement).

[F3] A smooth sphere boundary map extends over parametrized balls, as a product in their smaller boundary collars ([[lem-smooth-sphere-diffeomorphisms-extend-over-balls]], Statement). Smooth disk boundary maps extend retaining prescribed collars ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]], Statement).

[F4] Essential torus circles in the same primitive class admit smooth finite bigon reductions and parallel-strip parameters ([[lem-relative-smooth-mapping-classes-of-annulus-and-torus]], Proof 1.1–2.1). Disk pushes across a ball have a smooth cap sweep with fixed boundary circle, explicitly parametrized in [[lem-gluing-irreducible-smooth-three-manifolds-across-injective-annuli]], Proof 3.1.

[F5] Finite relative general position and smooth ambient extension are [[lem-relative-transversality-for-embedded-surfaces]] and [[thm-isotopy-extension]], Statements.

[F6] For a compact two-sided neat surface in a compact orientable smooth three-manifold, geometric incompressibility is equivalent to injectivity on fundamental groups ([[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]], Statement).

## Proof

1.1 The solid torus is irreducible. Embed it as a standard unknotted solid torus in $S^3$. A sphere in its interior has two ball sides by [F2]. Its exterior solid torus is connected and misses the sphere, so lies entirely on one side; the other ball is contained in $V$. We will use the following disk-push consequence with its smooth interpretation. If two smooth disks meet just along their common boundary and bound such a ball, their faces admit a common-boundary disk sweep through the ball. To retain the actual faces, take a thin rim collar first. At a transverse rim its normal section is a quadrant; at a previously shared collar first separate the two faces by a small normal graph. Parametrize the two faces by smooth disks with their prescribed rim collars, using [F3]. Round and truncate the rim; the remaining boundary is a smooth sphere with these marked disk and collar portions. The two disk maps and the intervening product annulus give a smooth boundary diffeomorphism to the corresponding standard rounded lens; [F3] extends it over the ball. Restore the quadrant rim using those same product collars. This gives a lens parameter retaining both faces and their rim coordinates. In this parameter use [F4]'s spherical-cap sweep; in the rim section its inward tangent runs between the two face tangents and stays nonzero. The sweep is jointly smooth, including at the disk center, by [F4]'s displayed formulas. It can be continued just past either face in its normal collar and extended ambiently by [F5]. If another surface misses the ball except in one face, the push removes that face's intersections and creates none. The support can be restricted to the ball and arbitrarily thin face and rim collars. [A1, F2, F3, F4, F5, given, construct]

2.1 The surface $F$ is compact, since its inclusion is proper and $V$ is compact, and it is orientable, since it is two-sided in oriented $V$. If some component $c$ of $\partial F$ is nullhomotopic on $\partial V$, choose one with an innermost boundary disk $Q$ whose interior misses all of $\partial F$. A short inward push gives a disk with boundary $c$ on $F$ and interior disjoint from $F$. If $F$ is not a disk, $c$ is essential on $F$: a boundary circle of a connected surface can bound a disk in that surface only when that disk is the entire surface, by the local half-disk charts and connectedness. The pushed disk would therefore compress $F$. Thus in this case $F$ is a disk. For the rest of the classification suppose $F$ is not a disk; then every boundary circle is essential on $\partial V$. Disjoint essential circles on a torus have the same primitive unoriented slope, as the strip reductions of [F4] show. Use those reductions for the finite family and extend into a boundary collar by [F5] to make them parallel affine circles in coordinates $(\mu,\phi)\in(\mathbb R/\mathbb Z)^2$, where $\phi$ is the longitude coordinate of $V$. If the slope is meridional, choose a standard meridian disk $D_0$ with boundary disjoint from them. Otherwise the affine circles have nonzero $\phi$ derivative and meet $\partial D_0=\{\phi=0\}$ transversely. [F1, F4, F5, step 1.1, construct]

3.1 Put the interiors of $F$ and $D_0$ in finite transverse position. An innermost intersection circle on $D_0$ bounds a disk $D$ with interior missing $F$. Incompressibility makes its boundary bound a disk $D'$ on $F$. The sphere $D\cup D'$ bounds a ball in $V$ by step 1.1, with the corner interpreted there. The connected surface $F\setminus\operatorname{Int}D'$ reaches $\partial V$, misses the sphere off its rim, and hence lies on the exterior side of that ball. The disk push of step 1.1 replaces $D'$ by a disk just past $D$. It removes this circle and any additional circles in $D'$, and creates none. After finitely many pushes no circle remains. The isotopies have interior support and retain the normalized boundary curves. [F1, F5, step 1.1, step 2.1, construct]

4.1 Suppose an intersection arc remains. An outermost arc $\alpha$ cuts off a disk $D$ in $D_0$, with other boundary arc $\beta\subset\partial D_0$ and interior missing $F$. Boundary-incompressibility implies that $\alpha$ cuts off a disk $D'$ on $F$, with other boundary arc $\gamma$ contained in one component of $\partial F$. If the slope were meridional there would be no arc endpoints, by the chosen disjoint boundaries. Otherwise $\gamma$ is a nonconstant subarc of an affine boundary circle whose longitude coordinate is strictly monotone on its lift. Both its endpoints have $\phi=0$, so its lifted longitude displacement is a nonzero integer. But $\beta$ has constant longitude. The union $D\cup D'$, pushed a little along its common edge if necessary, gives a continuous disk cap for the loop $\beta\cup\gamma$ in $V$. Its longitude degree would therefore be zero, contradicting that nonzero integer. Thus there are no arcs. If the slope were nonmeridional, the affine boundary curves would necessarily meet $\partial D_0$, so this case is impossible. We have made $F$ disjoint from $D_0$. Cutting $V$ along $D_0$ leaves a ball. An innermost boundary circle of $F$ on its boundary sphere has a disk there with interior missing all boundary circles of $F$. Push it inward. Unless $F$ is a disk it is a compressing disk, by the boundary-circle argument of step 2.1. This contradicts our supposition that $F$ was not a disk. [F1, step 2.1, step 3.1, construct]

4.2 Let $D_1,D_2$ be meridian disks with the same boundary $C$. In coordinates along $C$, use a small normal graph to separate their interior collars while fixing $C$ pointwise: with inward boundary coordinate $q\ge0$ and a transverse coordinate $y$ on $\partial V$, the two collars can be arranged as $y=\pm\varepsilon q$ on a common smaller strip. First each neat disk is straightened to such a graph by its full-rank collar coordinates; interpolation of the positive inward derivative gives an embedding path on a common compact strip, extended by [F5]. This keeps every boundary point fixed. General position relative to those collars then leaves only finitely many interior intersection circles. An innermost one on $D_1$ and its subdisk on $D_2$ bound a ball by irreducibility. The complement of that subdisk in $D_2$ reaches $C$ outside the ball, so the disk push from step 1.1 removes the circle and any circles inside that subdisk. Repeat until the interiors are disjoint. The resulting disks bound a ball with rim $C$, again by step 1.1 after the rim is rounded. Its common-boundary cap sweep carries one disk to the other, fixing $C$ throughout; at the rim every intermediate tangent is an inward direction between the two collar tangents, so the family remains neat in $V$. Undo the preliminary isotopies of $D_2$ and concatenate with stationary time changes. This gives a jointly smooth isotopy relative to $C$; [F5] supplies an ambient isotopy with that same fixed boundary circle if desired. [A1, F2, F3, F4, F5, step 1.1, step 3.1, construct]

5.1 We have proved that $F$ is a disk. If $\partial F$ is essential on $\partial V$, it is a primitive class in the kernel of $\pi_1(\partial V)=\mathbb Z\mu\oplus\mathbb Z\phi\to\pi_1(V)=\mathbb Z\phi$, since $F$ caps it. It is therefore $\pm\mu$, so $F$ is a meridian disk. If $\partial F$ is inessential, let $Q$ be its disk on $\partial V$. The sphere $F\cup Q$, pushed slightly into the interior and rounded, bounds a ball there. Restore the boundary collar as in step 1.1 to get a ball with these two disk faces. Its marked lens parameter gives the boundary-parallel product: extend $Q$ a short distance beyond its rim in $\partial V$ and retain a smaller collar on $F$; in the normal section the two disk faces are separated by a rectangle, with its outer edge on $\partial V$. The lens parameter away from that rim and this rectangle near it identify the region with $D^2\times[0,1]$, with $D^2\times\{0\}=F$ and the other disk and lateral annulus in $\partial V$. Thus $F$ is boundary-parallel in exactly [F1]'s product sense. Conversely a boundary-parallel disk has no essential circle or essential proper arc, so it does satisfy both disk-obstruction hypotheses; this is why it must be retained in the conclusion. [F1, F3, step 1.1, step 4.1, algebra]

6.1 Finally, if a two-sided torus $T\subset\operatorname{Int}V$ had no compressing disk, [F6] would inject $\pi_1(T)\cong\mathbb Z^2$ into $\pi_1(V)\cong\mathbb Z$. No such injection exists: for images $a,b\in\mathbb Z$ of the two generators, $(b,-a)$ is in the kernel when $(a,b)\ne(0,0)$, and otherwise the entire group is the kernel. This contradiction yields a smooth compressing disk. This use of [F6] is within its compact smooth scope and does not turn a PL disk into a smooth disk without the supplied bridge. All earlier isotopies are smooth by the explicit cap, graph and finite extension constructions; the full AC assumption covers [F6] and implies the countable choice used elsewhere. [A1, F1, F6, step 1.1, algebra] ∎


<!-- lem-smooth-meridian-preserving-torus-boundary-maps-extend-over-solid-tori -->
---
id: lem-smooth-meridian-preserving-torus-boundary-maps-extend-over-solid-tori
kind: lemma
title: "Smooth meridian-preserving torus maps extend over solid tori"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-choice-free-smooth-torus-curves-and-annulus-strips, lem-choice-free-isotopy-extension-for-a-compact-smooth-source, lem-smooth-sphere-diffeomorphisms-extend-over-balls, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The supplied product solid tori have explicit meridian cuts; finite curve and collar moves and the completely proved smooth sphere-map extension supply the extension."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.10–13, solid-torus and finite disk arguments; the jointly smooth marked boundary-map extension is supplied here rather than inferred from a topological Alexander extension."
---

## Statement

Let $V_0,V_1$ be parametrized smooth solid tori and let $b:\partial V_0\to\partial V_1$ be a smooth diffeomorphism carrying the unoriented primitive meridian class to the meridian class. Then $b$ extends to a smooth diffeomorphism $V_0\to V_1$. The extension can be a product in the supplied boundary collars on a smaller width. No choice axiom is assumed. The orientation of the extension is the boundary orientation sign of $b$.

## Facts & Assumptions

**Given:** The product solid-torus parameters, meridian-preserving boundary map and boundary collars.

[F1] Equal primitive torus curves have smooth ambient isotopies, and fixed-circle strip coordinate changes are smooth ([[lem-choice-free-smooth-torus-curves-and-annulus-strips]], Statement and full proof).

[F2] Compact-source smooth isotopies extend with compact prescribed support, without choice ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement).

[F3] Smooth sphere boundary maps extend over parametrized balls as products in boundary collars ([[lem-smooth-sphere-diffeomorphisms-extend-over-balls]], Statement).

[F4] Full-rank local coordinate maps have smooth inverses ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], Statement).

## Proof

1.1 Work in $D^2\times S^1$ on both sides. The map on meridian classes has a sign $\varepsilon$, and its longitude coefficient modulo the meridian has sign $\eta$, both $\pm1$. The explicit solid-torus map $(z,w)\mapsto(z,w)$ with complex conjugation on $z$ when $\varepsilon=-1$ and on $w$ when $\eta=-1$ changes those two signs as required. Precompose with its inverse, retaining the known extension of this factor. We may therefore suppose $b$ preserves orientation and the oriented meridian. By [F1], postcompose it with a boundary isotopy carrying $b(\partial D^2\times\{1\})$ to $\partial D^2\times\{1\}$. This boundary isotopy extends over the solid torus explicitly in a radial collar by $(x,r)\mapsto(h_{\chi(r)t}(x),r)$, with $\chi=1$ near the boundary and zero near the inner collar edge. Its inverse has $h_{\chi(r)t}^{-1}$ in the same formula. The restriction now induced on that meridian circle has degree one. Interpolating its increasing angular lift to the identity and extending the circle isotopy by [F2] makes the boundary map fix the meridian pointwise. The same radial collar formula again retains an extension of every adjustment. [F1, F2, given, construct]

2.1 Make the adjusted map the identity in a meridian strip. In coordinates $(s,u)$ along and normal to the fixed meridian, its map is $(s+a(s,u),R(s,u))$, with $a(s,0)=R(s,0)=0$ and $R_u(s,0)>0$. Interpolate it to the identity by $(s+t a,(1-t)u+tR)$, using the small periodic lift of $a$. At $u=0$ its derivative is triangular with positive diagonal, so [F4] and compactness give a common narrow strip on which all maps are embeddings. Use [F2] on a compact narrower strip and the inverse isotopy to correct the map to the identity near the meridian. This correction is itself a boundary isotopy, hence extends by step 1.1. Cut each solid torus along its parametrized meridian disk. The result is a parametrized ball with two marked disk faces. The adjusted boundary map on the cut annulus extends by the identity on both disk faces to a smooth sphere map: its meridian strip was fixed, so it matches smoothly across the rounded seams. Apply [F3]. Its product collar form and identity on the two disk faces make the ball map the identity on smaller face-normal collars. Therefore it reglues to a smooth solid-torus diffeomorphism. Undo all boundary isotopy corrections and the explicit sign factor. The resulting boundary map is exactly the original $b$. [F2, F3, F4, step 1.1, construct]

3.1 Finally compare the extension's induced collar with the prescribed source and target collars. In collar coordinates the discrepancy is $(x,r)\mapsto(x+a(x,r),R(x,r))$ with $a(x,0)=0$, $R(x,0)=0$, and $R_r(x,0)>0$. Its interpolation with the identity has block triangular invertible derivative at $r=0$, hence consists of embeddings on a common smaller two-sided strip by [F4] and compact separation. Extend this strip isotopy in the double by [F2]. It fixes the zero torus, so it preserves its two sides and restricts to a correction on the solid torus fixing its boundary pointwise. This gives exact product form in the prescribed smaller collars. Boundary and interior determinant signs agree because this normal collar coordinate is preserved; the initial sign factors account for all orientation possibilities. All constructions use finitely many strips, paths and chart parameters, and every named extension is choice-free. [F2, F4, step 2.1, construct] ∎


<!-- lem-smooth-incompressible-torus-cuts-inject-groups-and-preserve-irreducibility -->
---
id: lem-smooth-incompressible-torus-cuts-inject-groups-and-preserve-irreducibility
kind: lemma
title: "Smooth incompressible torus cuts inject groups and preserve irreducibility"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations
  - thm-finite-simplicial-approximation-for-maps-of-pairs
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
  - thm-covering-maps-inject-fundamental-groups
  - def-incompressibility-seifert-fibration-and-jsj-system
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The smooth Loop and finite pair triangulation suppliers are choice-free; finite edge generators define canonical shortlex coset transversals for every amalgam. The cyclic-cover argument uses a single explicitly indexed family of identical copies, not an infinite family of choices."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.10–13 and Corollary3.3, p.48; the smooth cut-piece, group and irreducibility transfers are supplied explicitly here, without consuming a PL-only ball claim as a smooth claim."
---

## Statement

Let $M$ be a compact connected orientable smooth three-manifold, and let $\mathcal T$ be a finite disjoint family of two-sided incompressible smooth tori in its interior, with smooth product neighborhoods. Then every torus group injects into $M$, every boundary copy of a cutting torus injects into its incident cut component, and every component of the manifold cut open along $\mathcal T$ injects into $M$. If $M$ is irreducible, every such cut component is irreducible in the smooth category. Empty families are allowed. No choice axiom is assumed.

## Facts & Assumptions

**Given:** The compact orientable smooth manifold and finite torus family of the Statement.

[F1] For a compact orientable smooth three-manifold, absence of a smooth compressing disk for a two-sided smooth surface is equivalent to fundamental-group injectivity, without choice. This applies in a supplied smooth ball as well as in the original manifold. [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]]

[F2] The smooth pair has a finite compatible triangulation, as do its compact cut pieces. Based loops in a finite complex are homotopic to edge loops after finite subdivision. [[lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations]] [[thm-finite-simplicial-approximation-for-maps-of-pairs]]

[F3] Connected-overlap van Kampen gives the group pushout. For injective overlap maps, amalgam normal form relative to supplied coset transversals makes the factor maps injective. Covering maps inject fundamental groups. [[thm-seifert-van-kampen]] [[thm-normal-form-for-free-products-with-amalgamation]] [[thm-covering-maps-inject-fundamental-groups]]

[F4] Irreducibility and the disk obstructions are those of [[def-incompressibility-seifert-fibration-and-jsj-system]]. In the smooth category a ball bounded by a smooth interior sphere is a smoothly embedded parametrized ball.

## Proof

1.1 Each cutting torus injects into $M$ by [F1]. Cut along the supplied smooth product neighborhoods. These tori are closed and interior, so their boundary copies are ordinary smooth boundary components, without new corners. The inclusion of a boundary copy into $M$ is the original torus inclusion up to the product homotopy. If a loop on such a copy were nullhomotopic in its incident cut component, it would be nullhomotopic in $M$, and hence trivial on the torus. Therefore every initial boundary-face map into its cut piece injects. [F1, given, construct, algebra]

2.1 Every cut piece and every finite partial regluing has finitely generated fundamental group. Indeed [F2] gives a finite triangulation and edge-loop representatives; a finite spanning tree of its connected one-skeleton leaves a finite ordered alphabet of non-tree edges generating the group. Order all words by length and then lexicographically. For any overlap subgroup, choose in each coset the element represented by its least word. This defines all required transversals, without choosing from an arbitrary family of nonempty sets; no subgroup-membership algorithm is asserted. If a face pair joins distinct connected pieces, thicken their attaching collars to obtain a connected-overlap cover. By [F3] its pushout is the amalgam over that injected face group and both old component groups inject into the regluing. [F2, F3, step 1.1, construct, algebra]

3.1 For a face pair on one connected piece $C$, form the space of copies $C_j$, $j\in\mathbb Z$, with the positive face of $C_j$ attached to the negative face of $C_{j+1}$ by the specified gluing. Its projection to the one-pair regluing is a covering: ordinary interior charts and the paired product half-collars are evenly covered. Every finite consecutive chain has injective vertex groups by step 2.1, and still-free face groups retain their injections. A nullhomotopy of a loop in $C_0$ upstairs has compact image and therefore lies in a finite chain. To justify this finiteness even on seams, each point has a neighborhood meeting at most two adjacent copies; a finite subcover of the compact image supplies a bound on the indices. The loop is null already in $C_0$ by the finite-chain injection. Finally the covering injection in [F3] makes $\pi_1(C)$ inject into the one-pair regluing. [F3, step 1.1, step 2.1, construct, algebra]

4.1 Reglue the finitely many face pairs in a fixed order. Initially all face maps inject by step 1.1. At every gluing, step 2.1 or 3.1 makes every old component inject into its new component, so the remaining face maps retain their injections by composition. Finite induction gives an injection of every original cut-piece group into $\pi_1(M)$. This proves all group assertions, including a nonseparating torus or a cut component incident to both copies of a torus. [step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Now assume $M$ irreducible and take a smooth sphere in the interior of a cut component. Its image in $M$ is a smooth sphere missing every cutting torus. It bounds a smooth ball $B$ by [F4]. A connected cutting torus is entirely inside or outside this sphere. None can lie inside $B$: a torus has group $\mathbb Z^2$, whereas $B$ is contractible, so [F1] gives a smooth compression in $B$, contradicting that torus's incompressibility in $M$. Thus $B$ misses all cutting tori. Its interior is connected and lies in the same component of their complement as the sphere's incident inner collar; hence $B$ lifts into the specified cut piece. That piece is irreducible. For an empty family all claims reduce to the original manifold. No PL ball or arbitrary topological marking was identified with a smooth ball in this argument. [F1, F4, step 4.1, given, construct] ∎


<!-- lem-smooth-incompressible-tori-admit-normal-position-in-a-compatible-triangulation -->
---
id: lem-smooth-incompressible-tori-admit-normal-position-in-a-compatible-triangulation
kind: lemma
title: "Smooth incompressible tori admit normal position in a compatible triangulation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - def-countable-choice
  - def-relative-smooth-triangulation-and-projection-preserving-fitting
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
  - lem-smooth-sphere-diffeomorphisms-extend-over-balls
  - lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
  - lem-finite-convex-cell-complexes-admit-compatible-triangulations
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice is inherited only from the smooth Schoenflies supplier used to split proper disks in parametrized balls. All general position, boundary parameters, marked cap sweeps and ambient extensions use the finite choice-free constructions."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition1.7, printed pp.11–12, closed incompressible-surface simplifications. The compatible smooth tetrahedron, rounded corner, returning-edge bigon and termination constructions are supplied below."
---

## Statement

Assume countable choice. Let $M$ be a compact connected orientable irreducible smooth three-manifold with a supplied finite whole-star smooth manifold triangulation $T$. Let $\mathcal S$ be a finite disjoint family of incompressible smooth tori in its interior. There is a jointly smooth ambient isotopy, fixed near $\partial M$ and stationary near its time endpoints, after which the family misses the vertices, crosses edges transversely in finitely many points, meets every triangular face in finitely many disjoint arcs joining different edges, and meets each tetrahedron in finitely many proper disks whose boundary crosses each of its edges at most once. The boundary patterns are therefore the four triangle and three quadrilateral patterns. The finitely many balls cut out inside each tetrahedron by those disks have supplied ball parameters retaining their disk faces and face-cell corners. All tori are moved simultaneously; the family may be empty.

These are smooth surfaces in a specified compatible triangulation. No identification of an arbitrary topological marking with a smooth or PL structure is asserted.

## Facts & Assumptions

**Given:** Countable choice, the compact irreducible orientable smooth manifold, compatible finite triangulation and finite torus family.

[A1] Countable choice is [[def-countable-choice]].

[F1] Whole-star smooth triangulations have smoothly extending simplex maps and injective differential fans. Full-rank maps have the local smooth inverse of [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]. Finite convex face decompositions have compatible subdivisions. [[def-relative-smooth-triangulation-and-projection-preserving-fitting]] [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]

[F2] Each given incompressible torus injects into $M$ on fundamental groups. In a supplied smooth ball an incompressible torus would inject $\mathbb Z^2$ into the trivial group, which is impossible. [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]]

[F3] Smooth spheres in a supplied standard ball have ball sides after adjoining the exterior in $S^3$. Smooth sphere boundary maps extend over parametrized balls with their collar form. Smooth planar Jordan disks have parameters with prescribed collars; this also applies to a circle on a parametrized sphere after stereographic projection from a point off the circle. [[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]] [[lem-smooth-sphere-diffeomorphisms-extend-over-balls]] [[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]]

[F4] Compact-source embedding isotopies extend smoothly with prescribed track support. Finite compact-track transversality has a finite-dimensional vector-field and Euclidean Sard proof, without choice. [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]] [[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]]

## Proof

1.1 For an empty family take the identity. Otherwise put the family in general position with the finite strata. First avoid vertices by small supported motions. Transversality to an edge is an open rank condition and gives isolated intersections; compactness away from the avoided endpoints makes their number finite. Use the finite perturbation proof of [F4] near the remaining compact bad set of each edge, keeping the vertex neighborhoods fixed. A surface transverse to an edge is transverse to each incident face there, since the face tangent plane contains the edge tangent. Thus face transversality is already secured near the one-skeleton. For the remaining compact bad sets inside the open faces, the same finite chart-field perturbation proof applies, retaining those fixed neighborhoods. In those charts the face is a closed coordinate plane, so the critical-projection proof applies although the whole open face is not closed in $M$. Finite rank margins preserve earlier transverse conditions. Hence the face intersections form compact one-manifolds with finitely many arc and circle components, and each tetrahedron boundary meets the family in finitely many simple circles with corners at its edges. Write $w=|\mathcal S\cap T^{(1)}|$. [F1, F4, given, construct]

2.1 Each individual closed tetrahedron has a smooth embedding parameter from the standard tetrahedron, extending as a local diffeomorphism near every point, using the double of $M$ for charts at its boundary. Indeed its differential on the full-dimensional tangent cone is injective by [F1]; a linear kernel would give two distinct points of that cone with the same image, so the derivative has rank three. The inverse-function and compact separation argument gives an embedding on a neighborhood of that closed tetrahedron. It can consequently be rounded to a supplied smooth ball by rounding a convex standard tetrahedron before applying that parameter. These roundings may be arbitrarily small and avoid the tori near the vertices. Near a torus crossing of an edge, take the edge coordinate $z$ and its two normal coordinates $(x,y)$. Transversality gives the torus as a smooth graph $z=g(x,y)$. Rounding the quadrant in $(x,y)$ rounds the corner of its boundary circle inside that same graph. Along faces ordinary transversality gives the corresponding strip. Thus each original cornered boundary circle has a smooth parallel circle just inside the rounded ball, joined to it by an actual annulus on the torus. The finite graph strips can be chosen disjoint and retain all boundary incidences. This verifies the smooth rim used in the following cap operations rather than treating a cornered sphere as already smooth. [F1, F4, step 1.1, construct]

3.1 We spell out the marked ball operations. A proper smooth disk in a parametrized ball splits it into two parametrized balls: cap it with either of the boundary disks supplied by [F3], round the common rim, and apply [F3] in the standard double. The side away from the original ball's exterior is the required inside ball. Restoring the rim gives both disk faces and their collars. Boundary sphere extension in [F3] retains those marked faces, so finitely many disjoint proper disks split a ball into balls, with dual graph a tree. Across a ball bounded by two disk faces there is a smooth disk sweep fixing their common circle. In standard polar disk coordinates it is given by the caps $r_a(\rho)=\frac{1+a^2}{2a}\sin(2\rho\arctan a),\qquad z_a(\rho)=\frac{a^2-1}{2a}+\frac{1+a^2}{2a}\cos(2\rho\arctan a)$ for $-1\le a\le1$, with removable values $r_0(\rho)=\rho$ and $z_0(\rho)=0$. Rotation about the axis gives embedded disks; $r_a(\rho)/\rho$ and $z_a(\rho)$ are smooth in $\rho^2$ at the center, and the meridian derivative is nonzero at the rim. A thin two-dimensional rim collar extends the meridian arcs to the unchanged outer annulus, by graph interpolation between their nonzero incident tangents. Continue the final cap slightly past the target face. Its support lies in the ball and thin rim collars. Applying [F4] realizes this as a jointly smooth ambient disk push. The same meridian arcs with $-1\le\rho\le1$, before rotation, give the smooth arc sweep in a disk bigon; thickening normally gives its strip move. These formulas avoid a nonsmooth conical Alexander interpolation. [A1, F3, F4, step 2.1, construct]

4.1 An interior surgery disk with boundary on the torus family has nullhomotopic boundary in $M$, hence in that torus by [F2]. A simple nullhomotopic circle on a torus bounds a disk there: lift it to the plane and use [F3]; distinct translates of its bounded disk are disjoint, since two disjoint translated boundary circles could otherwise force proper nesting of bounded equal-area regions. Join this surface disk to the surgery disk and round its rim. Irreducibility gives a smooth ball. No other torus can lie inside, by [F2]. Nor can the punctured remainder of the same torus: it contains a loop essential on the original torus, obtained by moving an essential loop off the removed disk, so lying inside the ball would contradict [F2]. The remainder lies wholly on one side of the sphere, and is therefore on the outside. Thus the marked push of step 3.1 replaces the surface disk by the surgery cap across an empty ball. It is an isotopy of the whole torus family, not a topology-changing compression. All new cap and rim collars may be chosen to miss the one-skeleton whenever the surgery disk does. [F2, F3, F4, step 3.1, given, construct]

5.1 In one tetrahedron, process its boundary circles from innermost to outermost on its boundary sphere. Use step 2.1 to put the chosen rim just inside a rounded ball. Choose one common inward collar straightening the torus near those smooth circles: in each transverse graph chart choose an inward vector field tangent to that torus, extend it to the ambient chart, and patch finitely many such fields and ordinary inward fields by finite normalized bumps. Inwardness is convex, and tangency is retained on each disjoint torus; their common-width finite flow therefore makes the torus exactly its boundary circle times the collar interval. Keep all cap depths below this common width. The innermost boundary disk has interior disjoint from the other boundary circles. Push that disk a little inward, keeping its boundary on the torus and choosing the inward rim sector away from that torus; compact separation and its transverse graph collar make this a surgery disk with interior missing the torus family. If the chosen boundary already belongs to a disk component in the tetrahedron, the marked ball parameters from step 3.1 put it in the corresponding thin boundary cap collar. For an enclosing circle put its cap farther inward than the finitely many previously processed caps, still inside that common collar. Its disk interior then misses their terminated vertical strips and caps, while all unprocessed boundary circles outside its boundary disk have disjoint vertical strips. Those caps may be carried along by the same boundary-collar move; their order is retained and no ignored surface is crossed. Otherwise use step 4.1. The annulus from the original rim to its inner smooth rim lies on one side of the replaced disk. If it lies on the retained side, the old circle now bounds that annulus and the new cap; if it lies in the deleted surface disk, the old circle disappears. Either way it leaves the uncapped part, possibly with additional circles deleted as well. Consequently after at most the original number of boundary circles there are only disk components and possible closed components inside the tetrahedron. A closed torus component there is impossible by [F2], and no sphere component was introduced by the disk pushes. Restore the small rounding collars. The resulting intersections with the original tetrahedron are proper disks. The caps and their smaller rim collars lie away from its edges, so $w$ has not increased. [F2, F3, F4, step 2.1, step 3.1, step 4.1, construct]

6.1 Apply step 5.1 to the finitely many tetrahedra in turn. It preserves the disk condition in previously treated tetrahedra: the surgery rim lies inside the current tetrahedron, so in any earlier tetrahedron the deleted surface disk contains whole old disk components or none, and the replacement cap is absent there. Thus it can delete but cannot cut an old disk into a nondisk piece. We obtain disk intersections in all tetrahedra, without increasing $w$. There is then no circle contained in an open face. Such a circle would bound one of these disks on each incident side, making a whole sphere component; on a boundary face it would instead give a whole proper disk component. Both are impossible for the unchanged torus family. [F2, step 4.1, step 5.1, construct]

7.1 Suppose a disk in a tetrahedron has boundary crossing some edge more than once. Cut that tetrahedron along the entire disk family. Step 3.1 supplies ball pieces and their dual tree. Traversing the edge records a walk through this tree, with each disk crossing traversing its corresponding edge. Repetition of a disk forces a consecutive inverse pair somewhere: a tree walk with no immediate reversal is its unique reduced path and crosses no tree edge twice. Thus two consecutive surface crossings of the edge belong to the same disk and approach the same cut ball. Join them by a simple arc inside that disk face, and let $\beta$ be the intervening edge segment. Their union is a simple circle on the cut ball's boundary. Its disk side has the parameter of [F3]; after the finite corner rounding of step 2.1, push its interior into the ball, fixing the two edges of its rim. This yields an embedded smooth bigon, with one edge on the torus and the other on the triangulation edge, and with interior missing both the torus family and the tetrahedron boundary. The torus crosses the edge transversely at its two endpoints. This constructs the needed returning-edge bigon from the cut balls, rather than assuming that every long disk boundary has a visible face-return arc. [F2, F3, step 2.1, step 3.1, step 6.1, construct]

8.1 Use the arc sweep of step 3.1 in this bigon, thickened in its normal direction, to move the torus strip past $\beta$. Near each endpoint its transverse graph coordinates continue the moving arc into the unchanged strip; at the last stage the arc lies just beyond $\beta$, and the two edge crossings have disappeared. The meridian-arc derivative stays nonzero during the sweep. Choose the normal thickness below the separation from all other torus sheets and all edges other than $\beta$. Hence no additional edge intersection is created, and $w$ decreases by two. Its ambient extension from [F4] is supported in this neighborhood. Every edge met by an interior torus is an interior edge, since the family and all chosen supports miss a fixed boundary collar. Restore face general position by an arbitrarily small [F4] perturbation fixed near the surviving edge crossings; compact separation from the other edge portions retains the new weight. Redo steps 5.1–6.1, which do not increase $w$, whenever a returning-edge bigon exists. Each full repeat strictly decreases the nonnegative integer $w$, and each disk-making pass is finite. The process therefore terminates. [F4, step 3.1, step 5.1, step 6.1, step 7.1, construct, algebra]

9.1 At termination each tetrahedron intersection is a disk crossing every edge at most once. Each face arc consequently joins distinct edges. A simple boundary circle on the tetrahedron's boundary separates its four vertices into two nonempty sets; an edge crosses it exactly when its endpoints are on opposite sides, since it has at most one crossing and each crossing is transverse. A one-versus-three partition gives a triangle boundary and a two-versus-two partition gives a quadrilateral boundary. These are precisely the four triangle and three quadrilateral patterns. Applying step 3.1 to the final disk family gives the stated finite cut-ball parameters, with the restored corner collars. Different quadrilateral partitions cannot occur disjointly, since their two-versus-two partitions are not nested on that sphere. The family has remained smooth at every step by the explicit graph, cap and bigon isotopies and [F4]. Concatenate the finitely many supported ambient isotopies with stationary time changes. They fix the boundary collar and produce exactly the asserted position for the original compatible triangulation. Only the standard smooth ball splitting in [F3] inherited countable choice. No topological-to-PL approximation or arbitrary-marking compatibility was used. [A1, F1, F3, F4, step 1.1, step 6.1, step 8.1, construct] ∎


<!-- lem-nontrivial-knot-with-supplied-product-tube-has-injective-exterior-boundary -->
---
id: lem-nontrivial-knot-with-supplied-product-tube-has-injective-exterior-boundary
kind: lemma
title: "A nontrivial knot with a supplied product tube has injective exterior boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-mayer-vietoris-sequence-in-singular-homology
  - cor-homology-of-spheres
  - thm-cellular-homology-computes-singular-homology
  - thm-cellular-boundary-is-the-incidence-degree-matrix
  - thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free conditional on the supplied smooth product tube. The finite Mayer-Vietoris matrix computation uses no duality or UCT. Torus normalization, radial annulus construction, disk shrinking and compact-source smooth extension are finite. No claim of choice-free tubular-neighborhood existence is made."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.10–11 and Corollary3.3, p.48, boundary disk obstruction; the supplied-tube homology and actual smooth annulus/disk unknotting are proved here."
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Mayer-Vietoris and finite circle/torus homology, through the fully read local exact-sequence and cellular suppliers."
---

## Statement

Let $e:S^1\times D^2\to S^3$ be a supplied orientation-preserving smooth embedding, let $K=e(S^1\times\{0\})$ with its core orientation, let $N=e(S^1\times D^2)$, and put $E=S^3\setminus\operatorname{Int}N$ and $T=\partial E$. If there is a smooth properly embedded disk in $E$ whose boundary is essential in $T$, then $K$ is smoothly ambient isotopic, through orientation-preserving diffeomorphisms, to the standard oriented unknot. Consequently, if $K$ is not that unknot, $T$ has no such disk and $\pi_1(T)\to\pi_1(E)$ is injective. No choice axiom is assumed beyond the supplied input data.

All ambient isotopies asserted here are jointly smooth and may be stationary near their time endpoints.

## Facts & Assumptions

**Given:** The supplied smooth product tube, its oriented core and exterior, and for the first assertion a proper smooth exterior disk with essential boundary.

[F1] Mayer-Vietoris is exact for a two-open cover. The sphere computation gives $H_2(S^3;\mathbb Z)=H_1(S^3;\mathbb Z)=0$. Finite cellular homology and its incidence differentials compute singular homology. Deformation retractions induce homology isomorphisms. [[thm-mayer-vietoris-sequence-in-singular-homology]] [[cor-homology-of-spheres]] [[thm-cellular-homology-computes-singular-homology]] [[thm-cellular-boundary-is-the-incidence-degree-matrix]] [[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]

[F2] Essential smooth torus circles have primitive nonzero classes, and same-class circles admit a jointly smooth finite ambient torus isotopy. Smooth disk parameters extend boundary maps with prescribed collars. [[lem-choice-free-smooth-torus-curves-and-annulus-strips]] [[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]]

[F3] Compact-source embedding isotopies extend smoothly with prescribed support, without choice; its finite graph-field and compact-time flow construction also constructs collars of a compact cooriented hypersurface. Embedded arcs admit supported transversality fixing endpoint neighborhoods. [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]] [[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]]

[F4] Strong smooth Loop applies to a compact connected orientable smooth three-manifold and a connected boundary subsurface, with a specified normal subgroup. [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]]

## Proof

1.1 The exterior is a compact oriented smooth three-manifold with boundary the product torus. It is connected: join any two distinct exterior points by an embedded great-circle arc in $S^3$, perturb it relative its endpoint neighborhoods to avoid $K$ by [F3] (transversality in dimensions one and one in dimension three forces empty intersection), and retract the punctured tube radially to its unit-radius boundary, fixing the exterior. This gives a path in $E$. Construct a two-sided collar of $T$ by choosing its outward normal field, extending it in finitely many slice charts by normalized finite bumps, and applying the compact-flow construction of [F3]. Its local inverse and compact separation estimates give a common positive width. Take $U$ to be $N$ with a short exterior collar adjoined, and $V$ to be $E$ with a short interior collar adjoined. They are open, cover $S^3$, and intersect in the full torus collar. Collapsing the respective added collar coordinates gives retractions to $N,E,T$, with the original inclusions as the resulting homology maps. This does not change or enlarge the supplied tube. [F1, F3, given, construct]

2.1 Give the core circle its one-vertex one-edge CW structure and the boundary torus its square quotient structure, with one vertex, two factor edges and a two-cell attached by their commutator. The endpoint incidences and the commutator exponent sums are zero, so [F1] gives $H_1(N;\mathbb Z)=\mathbb Z$ and $H_1(T;\mathbb Z)=\mathbb Z[\mu]\oplus\mathbb Z[\sigma]$, where $\mu$ is the fiber meridian and $\sigma$ is the core section. Projection $p$ sends $\mu$ to zero and $\sigma$ to one. The segment of [F1]'s sequence for step 1.1 is $0\to H_1(T)\to H_1(N)\oplus H_1(E)\to0$, with middle map $(p_*,-i_*)$. It is therefore an isomorphism. Restricting it to $\ker p_*=\mathbb Z[\mu]$ identifies that subgroup with $0\oplus H_1(E)$: for any $(0,y)$ its unique preimage must have projection zero. Thus $H_1(E)$ is infinite cyclic generated by $i_*[\mu]$. Write $i_*[\sigma]=k\,i_*[\mu]$. Its kernel on the torus is exactly $\mathbb Z([\sigma]-k[\mu])$, whose generator has core projection one. Only the finite circle and torus complexes were used; no disk CW structure, universal coefficients or Alexander duality is required. [F1, step 1.1, construct, algebra]

3.1 Let $c$ be the essential boundary of the given disk. It is primitive by [F2] and has zero homology image in $E$. Step 2.1 makes its class an integral multiple of $[\sigma]-k[\mu]$, and primitivity forces that multiple to be $\pm1$. Orient it with core projection $+1$, so its class has coordinates $(1,a)$ in core-then-meridian order. By [F2] it admits a smooth torus isotopy to $\gamma_a(s)=(e^{2\pi is},e^{2\pi ias})$. Choose its circle parametrization so the final parametrization is this one: precompose by the inverse final circle map. Denote the resulting smooth isotopy by $c_t(s)=(u_t(s),z_t(s))$, with $|z_t|=1$. Choose a smooth $\tau(r)$ equal to zero near $r=1$ and one near $r=1/2$. For $1/2\le r\le1$ use $e(u_{\tau(r)}(s),r z_{\tau(r)}(s))$; for $0\le r\le1/2$ use $e(e^{2\pi is},r e^{2\pi ias})$. The two formulas agree on an open seam collar. Distinct positive radii separate their images, and each radius has an embedded circle. At zero the two derivatives are the core tangent and the nonzero meridian-plane vector, hence independent. This is a smooth embedded annulus from the exact curve $c$ to the core $K$, otherwise inside $N$. [F2, step 2.1, construct, algebra]

4.1 Join that annulus to the exterior disk. They meet only along $c$. Smooth the rim while fixing the core boundary. Here the local smoothing is explicit: frame the normal plane of $c$ by its transverse direction in the oriented torus and the torus normal. Compactness and [F3]'s finite flows give a common product coordinate $(s,y,q)$, with $T$ given by $q=0$. The exterior disk and tube annulus are graphs $y=h_\pm(s,q)$ on the two signs of $q$, by their transverse inward directions. Their common value at zero agrees. Convolve across $q=0$ with a small smooth compactly supported kernel and cut off the correction before the rim collar ends. This gives a smooth graph, fixed outside the collar; projection to $(s,q)$ retains embedding. The construction is periodic in $s$ and has one compact width. Reparametrize the original disk's boundary collar to the annular collar by [F2]; attaching an annulus to a disk then gives the usual parametrized disk by radial rescaling of that source collar. We have obtained a smooth embedding $f:D^2\to S^3$ with boundary exactly $K$. [F2, F3, step 3.1, construct]

5.1 Such a supplied disk parameter gives an actual smooth unknotting. Its circles $f(r s)$, $s\in S^1$, shrink smoothly from $r=1$ to a fixed small positive radius; the circle never collapses to a point. Choose a point off this compact disk and the fixed standard spanning disk. Each is closed with empty interior by its finite smooth graph charts, and a finite union of closed sets with empty interior still has empty interior, so such a point exists without choice. Its positive stereographic chart contains both disks. At the first disk center write its chart map as $p+F(x)$ with $F(0)=0$. For sufficiently small fixed $\eta>0$, the circles $p+F(t\eta s)/t$, continued at $t=0$ by $p+\eta\,dF_0(s)$, form a smooth embedded-circle isotopy. The Taylor integral formula gives the smooth continuation; derivatives on a small disk are uniformly close to the injective linear derivative, and projection onto its two-dimensional image plus integration on segments proves injectivity. Gram-Schmidt writes that derivative as an orthonormal two-frame times an upper-triangular matrix with positive diagonal. Interpolating that matrix to the identity keeps the diagonal positive, so turns the ellipse into a round circle through embeddings. Repeat this at the fixed standard disk. Join the resulting round circles by translation of their centers, positive-radius interpolation and a path of rotations of their positive three-frames; successive coordinate-axis rotations give such a finite smooth path. Reverse the second disk's isotopies. A half-turn about a diameter corrects the circle orientation if required and still preserves ambient orientation. Thus the original oriented $K$ is joined to the fixed standard oriented unknot through smooth embedded circles in one compact track. Apply [F3], with stationary time changes at all joins, to obtain a jointly smooth ambient isotopy starting at the identity. All its diffeomorphisms preserve orientation. [F2, F3, step 4.1, construct]

6.1 If $K$ is nontrivial this contradicts its definition, so no essential-boundary exterior disk exists. If $\pi_1(T)\to\pi_1(E)$ were noninjective, use a nontrivial kernel loop and its disk cap in [F4], with boundary subsurface the entire torus and normal subgroup $1$. Step 1.1 supplies its connected compact orientable smooth ambient hypotheses. Strong Loop gives a proper smooth disk with essential boundary, already excluded. Thus the boundary group injects as claimed. All tubes, disks and charts were supplied or chosen finitely, and every named supplier here is choice-free for these inputs. No existence of a tube without choice, general PL marking compatibility, or broad homology-choice principle is asserted. [F3, F4, step 1.1, step 5.1, construct, algebra] ∎


<!-- lem-simultaneous-smooth-disk-and-primitive-annulus-normalization -->
---
id: lem-simultaneous-smooth-disk-and-primitive-annulus-normalization
kind: lemma
title: "Simultaneous smooth disk and primitive-annulus normalization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel, lem-relative-transversality-for-embedded-surfaces, thm-isotopy-extension, lem-smooth-sphere-diffeomorphisms-extend-over-balls, lem-choice-free-smooth-torus-curves-and-annulus-strips]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the solid-torus disk/compression supplier. The finite disk sweep, collar, graph and isotopy extensions need only its countable-choice consequence. No choice hypothesis is removed from that supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Friedhelm Waldhausen, Eine Klasse von 3-dimensionalen Mannigfaltigkeiten I (1967)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/wald.pdf"
      locator: "§2, Lemmas2.2–2.4 and complete proofs, printed317–318 / PDF10–11; the source is semilinear, while all isotopies here are supplied by actual smooth graph and cap constructions"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition1.11 proof, printed17: simultaneous disk or vertical-annulus normalization in the cut-open solid torus"
---

## Statement

Assume full AC. All isotopies below are jointly smooth ambient isotopies, stationary near their time endpoints.

(a) In a parametrized smooth ball or solid torus $U$, two finite disjoint systems of proper smooth disks, paired so corresponding disks have the same boundary, are ambient isotopic relative to $\partial U$. If the systems initially agree in a boundary collar, the isotopy may fix one smaller common boundary collar. The families may be empty.

(b) In the product solid torus $V=D^2\times S^1$, a finite disjoint system of proper incompressible smooth annuli whose boundary circles are vertical product fibers is ambient isotopic, relative to the boundary, to vertical annuli $a_j\times S^1$, with disjoint proper arcs $a_j\subset D^2$. If the annuli are already vertical on a boundary collar, a smaller collar may be fixed.

(c) A finite disjoint system of proper smooth disks in $V$ whose boundary circles are horizontal and meridional is ambient isotopic, relative to the boundary, to horizontal disks (graphs of smooth maps $D^2\to S^1$). The same common-collar assertion holds if the disks are already horizontal there.

## Facts & Assumptions

**Given:** Full AC, the ball or product solid torus, and the finite smooth disk or annulus systems satisfying the stated marking hypotheses.

[A1] Full AC implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] The solid torus is irreducible, interior tori compress there, and a ball bounded by two disk faces has a jointly smooth common-boundary cap sweep retaining its marked rim charts ([[lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel]], Proof 1.1 and the same-boundary disk argument in Proof 4.2). A ball is irreducible as well: place its supplied parameter in the standard solid torus and choose the ball side away from the connected exterior.

[F2] Finite relative smooth general position and ambient extension are [[lem-relative-transversality-for-embedded-surfaces]] and [[thm-isotopy-extension]], Statements. For disks whose boundary is fixed, the extension may fix $\partial U$: in a neat collar coordinate $q\ge0$, the prescribed velocity vanishes at $q=0$ and hence is $q$ times a smooth coefficient by the integral formula $v(s,q)=q\int_0^1\partial_qv(s,tq)\,dt$; extend that coefficient in the transverse coordinate and retain the factor $q$. Its flow fixes the boundary pointwise.

[F3] Marked smooth sphere maps extend over balls with their prescribed collar form ([[lem-smooth-sphere-diffeomorphisms-extend-over-balls]], Statement). The finite smooth disk-face lens construction in [F1] consequently retains actual disk parameters, rather than only a topological ball identification.

[F4] Smooth annulus arcs and torus curves admit the finite smooth strip reductions of [[lem-choice-free-smooth-torus-curves-and-annulus-strips]], full proof.

## Proof

1.1 For (a), make corresponding disk collars disjoint just inside their common boundary by small normal graphs, fixing every boundary point. In collar coordinates $(s,y,q)$ with the common boundary at $y=q=0$, use graphs $y=\pm\varepsilon q$ after first straightening each neat collar; the positive inward derivative and compactness give one common embedding width. Extend by [F2]. If a common outer collar is to be retained, make the separation just past its inner edge with a smooth cutoff, and take all moving supports away from a smaller outer collar. Apply relative general position to the remaining disk interiors. Their intersections are then finitely many circles, with no arcs because all boundary collars have been separated. Choose a circle innermost on a disk of the second system. It bounds a disk $E$ there with interior missing the first system, and a disk $E'$ on a member of the first system. Their sphere bounds a ball by [F1]. The complement of $E'$ in its proper disk reaches the boundary and must lie outside this interior ball. Every other disk of the first system also has boundary outside and misses the ball's boundary, so lies outside. Push $E'$ just past $E$ by [F1]'s smooth disk sweep and its thin rim extension. It removes that circle and any additional second-system circles in $E'$ without creating any. No other first-system disk moves. Repeat until the two systems have disjoint interiors. [A1, F1, F2, F3, given, construct]

2.1 Each corresponding pair now bounds a ball with their common rim; the marked lens and cap sweep of [F1] gives an isotopy from one to the other. No other disk of either system can enter that ball, because it is disjoint from its boundary and has its own boundary outside. The finitely many pair balls have disjoint interiors: otherwise disjoint sphere frontiers force nesting, and the inner ball's rim would have to lie inside the outer ball, although the two rims are disjoint curves on $\partial U$. Use the sweeps simultaneously, with disjoint slightly enlarged supports, and undo the preliminary collar changes in reverse. This is an ambient isotopy relative to $\partial U$ by [F2]'s vanishing-velocity construction. In the common-collar case perform the construction on disks truncated at an inner collar level; extend each moving rim through the already common annulus to the stationary smaller outer collar. The same smooth rim graph interpolation as in [F1] has support away from that smaller collar. Thus the isotopy fixes it throughout. Time changes stationary at all joins give (a), including the empty case. [A1, F1, F2, F3, step 1.1, construct]

2.2 For an empty system in (b) or (c), take the identity isotopy. For nonempty (b), first make the outer annulus collars vertical, fixing the boundary pointwise. Near each boundary fiber, use fiber angle $\tau$ and inward radial coordinate $q$ as coordinates on the neat annulus. Its base angle is $\varphi_i+g_i(q,\tau)$, with $g_i(0,\tau)=0$. Interpolate $g_i$ to zero on a smaller collar, with a cutoff on a larger collar. These remain graph embeddings on disjoint finite collars; [F2] extends them fixing the boundary. If a vertical collar was initially specified, retain a smaller one. Now choose the horizontal meridian disk $D_0=D^2\times\{1\}$ and put the annuli transverse to its interior, retaining their vertical boundary circles. Every boundary component meets $\partial D_0$ exactly once. Remove all intersection circles by the innermost-disk pushes of step 1.1: incompressibility makes a circle innermost on $D_0$ bound a disk on its annulus, and the annulus outside that disk reaches $\partial V$, hence lies outside the irreducibility ball. All other annuli are proper and disjoint from that ball's frontier, so the same push removes circles without moving them. Every remaining intersection arc has its endpoints on boundary components. An arc with both endpoints on one such component is impossible, because that component has exactly one intersection with $\partial D_0$. Consequently each annulus has exactly one spanning intersection arc $a_j$, and these arcs are disjoint in $D_0$. The annuli $A'_j=a_j\times S^1$ are therefore a disjoint vertical system with exactly the original boundary circles. Near $D_0$ interpolate the transverse annulus graph to its constant product graph, keeping the boundary fixed; its nonzero transverse derivative stays positive on one common finite compact strip. Extend by [F2]. Now the original and target systems agree near $D_0$. [A1, F1, F2, F4, step 1.1, construct]

3.1 Cut $V$ along that product collar of $D_0$. The remaining manifold is a ball, and each cut annulus is a proper disk, since it was cut along its one spanning arc. The original and target disk systems have the same boundary and agree on a boundary collar. Apply (a) in this ball with the smaller common collar fixed, and reglue. The fixed collar makes both the ambient maps and all time derivatives paste smoothly across the meridian cut. It also retains the original boundary circles. If an outer boundary collar was originally vertical, all preceding graph adjustments and disk pushes were chosen away from a smaller such collar; retain it in (a). This proves (b) as a genuine simultaneous smooth assertion. [A1, F1, F2, step 2.1, step 2.2, construct]

4.1 For (c), a horizontal meridional boundary circle projects to $\partial D^2$ with degree $\pm1$: the projection is a local diffeomorphism, and its meridian coefficient is $\pm1$ because its primitive slope is a meridian. Orient it to make that degree one. Thus every boundary circle is a graph $e^{2\pi i f_j(\theta)}$, with a smooth real periodic lift $f_j$, since its fiber degree is zero. The disjoint graphs have a cyclic order; choose their lifts and indexing so $$f_1(\theta)<\cdots<f_k(\theta)<f_1(\theta)+1$$ for all $\theta$. Choose real constants with the same strict cyclic inequalities. Interpolate radially between these constants near the center and the functions $f_j$ near the boundary, using a smooth radial cutoff zero near the center and one near the boundary. Every gap and the final wrap gap stay positive by convexity, so this gives disjoint smooth horizontal graph disks with the prescribed boundaries. If horizontal collar graphs were already specified, use their real lifts $f_j(r,\theta)$ on $r_0\le r\le1$ first; compactness gives uniform positive gaps. Choose a smooth function $R(r)$ equal to $r$ near $1$, constant $r_0$ near a smaller inner radius, and always in $[r_0,1]$. The functions $f_j(R(r),\theta)$ retain all gaps and agree with the supplied graphs near the boundary, while becoming constant in $r$ on that inner annulus. Farther inward interpolate their now fixed angular functions to ordered constants with a radial cutoff constant near both ends. This gives a smooth extension retaining the smaller collar exactly. Compare the original disk system to these graph disks by (a), fixing that common collar where supplied. All selections were finite; the only choice assumptions are the declared ones in [A1] and its named suppliers. [A1, F1, F2, F4, step 2.1, construct] ∎


<!-- lem-atoroidal-piece-with-essential-annulus-is-seifert -->
---
id: lem-atoroidal-piece-with-essential-annulus-is-seifert
kind: lemma
title: "An atoroidal piece containing an essential annulus is Seifert-fibered"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-boundary-tori-circle-bundle-pants-punctured-mobius-pi1-injective
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
  - lem-equal-seifert-boundary-slopes-admit-smooth-fiber-matching-and-gluing
  - lem-choice-free-smooth-torus-incompressibility-in-a-supplied-flat-product
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - thm-normal-form-for-free-products
  - thm-seifert-van-kampen
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-smooth-dependence-of-ode-solutions-on-parameters
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free. All marked neighborhoods and disk surgeries are finite. Smooth transversality, curve parameters and fibration matching use the new finite proofs; the N-side product-collar obstruction uses the proved flat-product compression/cut-injection bridge, not a general smooth triangulation theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.16 and its proof, printed pp.20–21"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§3, classification of pieces containing essential annuli"
---

## Statement

Let $M$ be a compact connected orientable irreducible atoroidal $3$-manifold whose boundary components are tori. If $M$ contains an incompressible, boundary-incompressible annulus $A$ whose boundary lies in $\partial M$, then $M$ is Seifert-fibered.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.16](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** The compact connected orientable irreducible atoroidal smooth three-manifold $M$ with torus boundary and the incompressible boundary-incompressible proper annulus $A$.

[F1] The geometric disk obstructions and atoroidality are [[def-incompressibility-seifert-fibration-and-jsj-system]], Definition. In particular irreducibility supplies a parametrized smooth ball for each interior sphere.

[F2] The two circle-bundle bases used initially have injected boundary torus groups; their base groups are free of rank two and the bundle projection surjects onto them ([[lem-boundary-tori-circle-bundle-pants-punctured-mobius-pi1-injective]], Statement and Proof 1.1–1.2). Finite free-product reduced words are nontrivial, and a connected gluing gives the group pushout ([[thm-normal-form-for-free-products]], [[thm-seifert-van-kampen]], Statements).

[F3] Torus curves and their annulus strips have finite smooth parameters ([[lem-choice-free-smooth-torus-curves-and-annulus-strips]]). A nullhomotopic torus circle has a planar lift whose bounded disk has the smooth parameter of [[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]]; different deck translates cannot nest bounded equal-area disks, so this disk projects injectively. Compact smooth embeddings admit relative transversality without choice ([[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]], Statement).

[F4] Marked smooth balls and disk windows have explicit standard parameters and collar-supported attachment/removal maps, without choice ([[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]], Statement).

[F5] Equal primitive Seifert fiber slopes admit actual smooth fiber matching and product-collar gluing, without choice ([[lem-equal-seifert-boundary-slopes-admit-smooth-fiber-matching-and-gluing]], Statement).

[F6] In a supplied smoothly parametrized $T^2\times I$, an incompressible smooth torus system has injective cut-piece groups, without choice ([[lem-choice-free-smooth-torus-incompressibility-in-a-supplied-flat-product]], Statement and full proof).

[F7] Finite compact-source isotopies extend smoothly ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]]). Finite bundle transport uses the Euclidean flow and smooth parameter dependence in [[thm-picard-lindelof-local-existence-and-uniqueness]] and [[thm-smooth-dependence-of-ode-solutions-on-parameters]].

## Proof

1.1 Take a small product neighborhood of $A$ and collars of its incident boundary tori. They exist by a finite coordinate construction: choose the normal side using orientations of $M$ and $A$, combine finitely many adapted chart fields by normalized finite bumps, and use their short flow and the local inverse and compact separation arguments in [F7]. Normalize the two boundary curves on each incident torus by [F3]. Their parallel strip parameters and the product parameter of $A$ supply circle coordinates on the neighborhood, agreeing at the attaching rims. Circle parameter discrepancies have degree $\pm1$ and are adjusted by interpolation of their increasing, or decreasing, angular lifts; this is finite. Round the quadrant corners in the base coordinate, keeping the circle coordinate. The resulting neighborhood $N_0$ is an ordinary circle bundle with $A$ vertical. If the annulus meets two different original tori, its base is a pair of pants with two original boundary circles and one internal boundary. If it meets one original torus, its band attaches to the same base boundary circle: the two possible band identifications give a pair of pants with two internal boundaries, or a once-punctured Möbius band with one. The total space is orientable, since it is a submanifold of $M$; in the Möbius case the fiber orientation reverses with the base orientation. These are actual finite band-and-collar quotient parameters. The internal frontier consists of at most two tori. [F1, F3, F7, given, construct]

2.1 We first fill compressible frontier tori, before addressing boundary-parallel ones. For $N_0$, frontier groups inject into its group by [F2]. Use this injection for the initial iteration. After the only possible intermediate filling, its explicit group calculation below will verify the invariant before another iteration. If a frontier torus is compressible in $M$, choose a compressing disk and put it transverse to the other frontiers by [F3]. Its intersection consists of finitely many circles. Remove any inessential circle on a frontier by an innermost disk replacement: choose its frontier disk with interior disjoint from the compressing disk, replace the latter's subdisk by it and push slightly to the side of the retained disk. The disk parameters in [F3] and quadrant rounding give an embedded smooth disk with the same essential original boundary and fewer intersections. If a remaining intersection is essential on its frontier, an innermost circle on the disk cuts off a compressing disk whose interior misses the entire frontier. If no intersection remains, the original disk already has this property. Thus some frontier $T$ has a clean compressing disk $D$. It cannot lie in $N$, since its boundary class is nonzero on $T$ and $\pi_1(T)\to\pi_1(N)$ is injective. The connected disk interior consequently lies on the exterior side of $N$. [F1, F2, F3, step 1.1, construct]

3.1 Compress $T$ along $D$ and push the resulting sphere slightly off the frontier. Irreducibility supplies a ball $B$ bounded by it. The connected $N$ lies outside that ball: it misses the compressed sphere and contains an original boundary torus of $M$, whereas $B$ is an interior ball. The disk neighborhood restored by reversing compression is also on this non-ball side, because its rim strip is joined to $N$ through the gap removed from $T$. Hence reversal attaches a marked $1$-handle to $B$; it does not remove a possibly knotted handle from its interior. Its two disk windows have the parallel-copy parameters of $D$, and [F4] standardizes them. The result is a solid torus $U$ outside $N$, with boundary exactly $T$. It contains no other frontier, since $B$ and the small disk neighborhood miss $N$ except at $T$. The exterior component adjacent to $T$ is exactly $U$: its interior is both open and closed in that component and it has no other boundary. Adjoin it to $N$. [F1, F4, step 2.1, construct]

4.1 The meridian of $U$ cannot be its attaching fiber slope. If it were, [F3] and its supported boundary collar formula give a smooth meridian disk bounded by that actual fiber. In $N$, choose a base arc from this frontier to the interior of the base arc underlying $A$, avoiding any previous cone point and meeting that arc only at its endpoint. Its inverse image is a vertical annulus meeting $A$ in its one boundary core. Join it to the meridian disk and round the common collar. This is a compression of $A$, a contradiction. In product coordinates $U=D^2\times S^1$, therefore, the primitive regular-fiber class is $a\mu+b\lambda$ with $b\ne0$. After reversing the fiber orientation take $b>0$. The action $$t\cdot(z,w)=(e^{iat}z,e^{ibt}w)$$ gives a Seifert model with that boundary slope and one possible multiplicity-$b$ core. Indeed the map $(\zeta,v)\mapsto(v^a\zeta,v^b)$ identifies $U$ with the quotient by $(\zeta,v)\mapsto(e^{-2\pi ia/b}\zeta,e^{2\pi i/b}v)$; since $\gcd(a,b)=1$, choose an inverse generator to obtain exactly the standard fibered-solid-torus cyclic model. Its boundary fibration has the same fiber class as the old one. Use [F5] to match it smoothly and glue the product collars. Thus this filling extends the actual Seifert structure, leaves $A$ vertical and caps that base boundary by a disk with cone order $b$ (regular if $b=1$). [F1, F3, F5, step 1.1, step 3.1, construct]

5.1 There are initially at most two frontiers. The only filling that can leave another frontier is the pair-of-pants case with just one original boundary torus; its new base is an annulus with at most one cone. Its remaining boundary groups still inject, by this explicit finite calculation. Before filling the orientable circle bundle over a pair of pants has group $F(a,c)\times\langle h\rangle$: lift the two free base generators, and the oriented fiber $h$ is central and injective by [F2]. Filling adds the primitive relation $c^q h^p=1$, with $q\ge1$, by [F2]'s gluing pushout. The quotient by central $h$ is $\mathbb Z*C_q$. The two boundary base loops have images $a$ and $(ac)^{-1}$, both of infinite order by reduced words (for $q=1$, both are $a^{\pm1}$). Also $h$ has infinite order: the presentation maps to the additive reals by $h\mapsto1$, $c\mapsto-p/q$, $a\mapsto0$. Thus a boundary element projecting trivially must first have zero base exponent, then zero fiber exponent. This proves boundary-torus injection after the intermediate filling. Step 2.1 is therefore applicable again. After finitely many such steps, either no frontier remains or every remaining frontier is incompressible in $M$. [F2, step 1.1, step 2.1, step 4.1, construct]

6.1 By atoroidality, each remaining frontier $T$ is parallel to an original boundary torus, with a supplied smooth product $P=T^2\times I$. If $P$ is on the exterior side of $N$, it is exactly the adjacent exterior component, so absorb it into $N$, extending the fibration as a product by [F5]. Suppose instead that $N$ lies on the $P$ side. It is then contained in $P$, since the latter occupies that whole component between $T$ and the original boundary. The product contains only one original boundary torus of $M$. Thus this is impossible if $N$ already contains two original boundary tori. If $N$ still has two frontiers, it is the original pair-of-pants bundle with one original boundary; the other frontier $T'$ is an incompressible smooth torus in $P$. By [F6], every cut piece of $P$ along $T'$ injects into $\pi_1(P)$. The connected $N$ is one such piece, since its only interior boundary in $P$ is $T'$. But $\pi_1(N)$ surjects onto the nonabelian free rank-two base group [F2], while $\pi_1(P)=\mathbb Z^2$ is abelian. This is a contradiction. This argument treats $N$ as a possible proper submanifold of the collar; it does not incorrectly infer that nonabelian $N$ cannot sit inside a product without an injection proof. [F1, F2, F5, F6, step 5.1, construct]

7.1 It remains to exclude the $N$-side collar when there is one frontier and one original boundary. In that case $N=P$, since it has exactly the two boundary tori of $P$ and no interior frontier in it. If its base is the once-punctured Möbius band, [F2]'s free rank-two quotient contradicts the abelian product group. Otherwise this is the intermediate annulus-with-one-possible-cone case. Its central-fiber quotient from step 5.1 is $\mathbb Z*C_q$, which is nonabelian for $q\ge2$. Hence $q=1$: the inherited structure is an ordinary circle bundle over an annulus. The vertical $A$ has both ends on the same original base boundary, so its base arc cuts off a disk. That disk has a smooth parameter by [F3] in an annulus cover. Trivialize the bundle over it by radial horizontal transport: combine finitely many local lifts by finite base bumps and solve the radial ODE from its center using [F7]. A fixed point of the initial fiber gives a section disk. Its boundary consists of an essential spanning arc of $A$ and an arc in the original boundary torus. This is a forbidden boundary compression of $A$. Thus the collar can never be on the $N$ side. Every remaining frontier is therefore an exterior product collar and can be absorbed. [F1, F2, F3, F7, step 5.1, step 6.1, construct]

8.1 Each solid-torus filling or collar absorption removes a frontier, and initially there were at most two. At the end $N$ has no internal frontier; it is nonempty, closed and relatively open in connected $M$, hence equals $M$. Its fibration is the smooth Seifert structure constructed in steps 4.1 and 6.1. The annulus was retained throughout, and the original choice-free Statement has acquired no extra hypothesis. The only product-group comparison used the explicit flat-product compression and cut-injection bridge [F6]; no arbitrary smooth/PL compatibility or general topological triangulation assertion entered. All choices and modifications were finite. [F1, F5, F6, step 3.1, step 5.1, step 7.1, construct] ∎


<!-- lem-haken-torus-bound-for-a-supplied-compatible-smooth-triangulation -->
---
id: lem-haken-torus-bound-for-a-supplied-compatible-smooth-triangulation
kind: lemma
title: "Haken torus bound for a supplied compatible smooth triangulation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-smooth-incompressible-tori-admit-normal-position-in-a-compatible-triangulation
  - lem-rectangular-normal-cut-components-are-interval-bundles
  - lem-connected-complement-surfaces-have-independent-mod-two-homology-classes
  - lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
  - thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the smooth normal-position supplier through its standard-ball Schoenflies step. The finite interval-bundle assembly, mod-two independence, graph choices and homology matrices are choice-free; the finite boundary-collar construction explicitly has dispensable AC."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition1.7 and Corollary1.8, printed pp.11–13. The normal-position, interval-bundle and mod-two independence ingredients have distinct full local proofs; no arbitrary triangulation compatibility is inferred."
---

## Statement

Assume countable choice. Let $M$ be a compact connected orientable irreducible smooth three-manifold with nonempty boundary, and supply a finite compatible whole-star smooth manifold triangulation with $t$ triangular faces. Let $\mathcal S$ be a finite disjoint family of two-sided incompressible smooth interior tori. If no component of $M$ cut open along $\mathcal S$ is homeomorphic to $T^2\times I$, then
$$
|\mathcal S|\le 4t+\dim_{\mathbb F_2}H_2(M;\mathbb F_2)-1.
$$
Thus any process accumulating cuts whose every finite stage has this no-product property can make only finitely many cuts. The family may be empty.

The supplied triangulation is compatible with the smooth structure in the stated whole-star sense. This result asserts no compatibility of an arbitrary topological marking and does not alter the scope of any other finiteness item.

## Facts & Assumptions

**Given:** Countable choice, the compact manifold, the fixed compatible triangulation and finite torus system with no product cut component.

[A1] Countable choice is [[def-countable-choice]].

[F1] The torus system has simultaneous smooth normal position for the original compatible triangulation, with marked cut-ball parameters in each tetrahedron. [[lem-smooth-incompressible-tori-admit-normal-position-in-a-compatible-triangulation]]

[F2] A rectangular-only cut component, with its cut-ball and rectangle data, is an interval bundle with a compact locally flat core. If it is not $T^2\times I$, the core is one-sided and its complement in that component is connected. [[lem-rectangular-normal-cut-components-are-interval-bundles]]

[F3] Finitely many disjoint compact locally flat closed surfaces in a connected boundaryless three-manifold have independent mod-two classes if their complement is connected, including one-sided surfaces. This uses no choice or ambient triangulation. [[lem-connected-complement-surfaces-have-independent-mod-two-homology-classes]]

[F4] Smooth planar Jordan disk parameters and prescribed corner-window parameters have the finite constructions of [[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]] and [[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]]. For the topological rectangle parameters below, a boundary circle map can also be extended radially once its disk parameter is given.

[F5] Finite simplicial homology agrees with singular homology, so the supplied finite triangulation makes $\beta=\dim_{\mathbb F_2}H_2(M;\mathbb F_2)$ finite. Ordinary smooth boundary collars have the finite inward-field construction in [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Proof 1.2 and 2.2; its Statement, F4 and Proof 5.1 explicitly make AC dispensable. [[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]]

## Proof

1.1 Apply [F1]; its ambient diffeomorphism preserves the no-product condition. In a triangular face the normal arcs have three types, according to the pair of distinct edges they join. Arcs of one type occur in a parallel stack about their common vertex: otherwise two of them separate each other's endpoints and would intersect in the disk. Between consecutive arcs of a stack is a rectangle, with two opposite surface edges and two original edge segments. Collapse each such strip for this count. There remains at most one arc of each type, so at most three disjoint arcs and hence at most four regions. All nonrectangular regions survive as distinct regions of this collapsed picture. Thus there are at most four nonrectangular regions per face, and at most $4t$ overall. The face cells have actual disk parameters: cut the parametrized triangular disk successively along its finitely many disjoint smooth proper arcs. At each cut the arc and either boundary side form a Jordan circle with finitely many corners; [F4]'s finite rounding and restoration give its two disk parameters retaining those corner arcs. Induction gives every face-cell parameter. A rectangle's four boundary intervals then specify its product boundary map, extended over that disk by [F4]. All input rectangle and cut-ball parameters for [F2] are therefore supplied. [A1, F1, F4, given, construct]

2.1 Write $n=|\mathcal S|$, and let $v$ be the number of cut components. Let $m$ be the number of components meeting faces only in rectangles. By [F2] and the no-product hypothesis they have disjoint one-sided compact locally flat cores $Q_1,\ldots,Q_m$, and removing a core keeps its component connected. Every other component contains a nonrectangular face region. A physical face region belongs to only one cut component: its two incident tetrahedral regions are glued across its interior, or it is an original boundary face with one incident side. Thus distinct components can be assigned distinct nonrectangular regions, using a fixed order on their finite set. Consequently $v\le m+4t$. [F2, step 1.1, construct, algebra]

3.1 Form the finite connected dual graph of the torus cuts, with one vertex for each cut component and one edge for each torus, including loops. Choose a spanning tree and let the other $k$ edges correspond to $S_1,\ldots,S_k$. Gluing all the tree edges keeps the union connected, so cutting only these $k$ tori leaves a connected manifold. In the fully cut manifold remove all the cores $Q_j$. Each piece remains connected by [F2]. Regluing the same tree edges again gives a connected space. In the uncut manifold this says exactly that the complement of $S_1\cup\cdots\cup S_k\cup Q_1\cup\cdots\cup Q_m$ is connected; the small cut-face collars merely supply the adjacent open product neighborhoods. All these surfaces are compact, closed, disjoint and locally flat. The tree has $v-1$ edges, so $k=n-v+1$, equivalently $v=n-k+1$. [F2, step 2.1, construct, algebra]

4.1 Pass to $N=\operatorname{Int}M$ to apply [F3]. The finite boundary collar in [F5] can be chosen disjoint from the displayed compact surfaces. In its coordinate $r\ge0$, choose a nonnegative cutoff $\chi$, equal to one near zero and zero beyond a smaller collar, and a sufficiently small $\epsilon>0$. The map $r\mapsto r+\epsilon\chi(r)$ pushes $M$ into its interior and fixes all the surfaces. The homotopy $r\mapsto r+s\epsilon\chi(r)$ proves that the interior inclusion is a homotopy equivalence, since the same homotopy starting at a positive $r$ stays in the interior. It also proves that their complement in $N$ is connected: its pushed image is connected by step 3.1, and every interior point is joined inside that complement to its pushed image. By [F3], the $k+m$ surface classes are independent in $H_2(N;\mathbb F_2)$, and therefore in $H_2(M;\mathbb F_2)$ under this homotopy equivalence. Hence $k+m\le\beta$. No simultaneous triangulation of the possibly one-sided cores has been assumed; their independence is the local singular-chain jump theorem [F3]. [F3, F5, step 3.1, construct, algebra]

5.1 Combine $n-k+1=v\le m+4t$ with $k+m\le\beta$ to obtain $n+1\le k+m+4t\le\beta+4t$, as claimed. This applies also to the empty family; its one cut component contains a nonrectangular face region. The bound uses the original fixed compatible triangulation, so it is uniform over every finite stage of a process satisfying the hypothesis. Such a process cannot make more cuts than this fixed integer. Countable choice was inherited only in [F1]'s smooth ball splitting; every other selection was finite, and the homology computation used finite matrices and the choice-free local jump argument. In particular no full AC, arbitrary-marking triangulation bridge or PL-to-smooth irreducibility assertion entered. [A1, F1, F2, F3, F5, step 2.1, step 3.1, step 4.1, algebra] ∎


<!-- lem-satellite-torus-is-essential -->
---
id: lem-satellite-torus-is-essential
kind: lemma
title: "The companion torus of a nonproduct satellite is essential"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-satellite-pattern-companion-and-winding-number
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-nontrivial-knot-with-supplied-product-tube-has-injective-exterior-boundary
  - def-axiom-of-choice
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The original full AC hypothesis is retained and supplies coset transversals for the amalgam normal form. With the given smooth product tubes, both boundary injections are established by choice-free smooth suppliers; no unsupported PL-to-smooth transfer is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, incompressible tori and the proof of Theorem 1.9, printed pp.11–23"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§§1–2 and §4, satellite companions and essential tori"
---

## Statement

Assume full AC. Let $K$ be a nontrivial smooth knot with a specified companion solid torus $V=e(S^1\times D^2)$, let $P\subset\operatorname{int}(S^1\times D^2)$ be a pattern, and assume the outer torus of its pattern exterior $X_P$ has no compressing disk and is not product-parallel to the inner pattern torus. Let $T_c=\partial V=e(\partial(S^1\times D^2))\subset E_{P(K)}$ be the companion torus. Then $T_c$ is incompressible and is not boundary-parallel in $E_{P(K)}$; hence it is essential.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, §1.2](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** Full AC, a nontrivial smooth knot $K$, the supplied orientation-preserving companion product embedding $e:S^1\times D^2\to S^3$, and the specified pattern exterior with incompressible outer boundary and nonproduct ends.

[F1] The pattern exterior and satellite exterior are defined in [[def-satellite-pattern-companion-and-winding-number]]. With $V=e(S^1\times D^2)$, the common torus is $\partial V=e(\partial(S^1\times D^2))$. Identifying the pattern exterior with its image, the satellite exterior is $X_P\cup_{\partial V}E_K$.

[A1] Full AC permits coset-transversal choices ([[def-axiom-of-choice]]).

[F2] A nontrivial knot with a supplied smooth product tube has injective exterior boundary. Its proof also verifies exterior connectedness. [[lem-nontrivial-knot-with-supplied-product-tube-has-injective-exterior-boundary]]

[F3] Strong smooth Loop applies to a connected boundary subsurface of a compact connected orientable smooth three-manifold. Thus absence of essential-boundary proper smooth disks implies injection of that subsurface group. [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]]

[F4] Van Kampen identifies the union group with the pushout; when both side maps are injective, the normal form with fixed transversals embeds the common group. [[thm-seifert-van-kampen]] [[thm-normal-form-for-free-products-with-amalgamation]]

[F5] Finite compact-source transversality avoids a curve by an embedded arc in a three-manifold; finite graph fields and compact flows give smooth collars. [[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]] [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]]

[F6] Incompressibility, boundary-parallelity and essentiality have the smooth conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]].

## Proof

1.1 Put $X=e(X_P)$ and $Y=E_K$. They are compact orientable smooth three-manifolds with common boundary torus $T_c$. The exterior $Y$ is connected by [F2]. For completeness $X$ is connected as well: in the standard connected solid torus join two points of $X_P$ by a path consisting of finitely many smooth chart arcs. Remove repeated arcs and perturb finitely many joins in small coordinate balls to obtain an embedded arc, fixed near its endpoints; in dimension three finitely many arcs can be made disjoint except at consecutive endpoints by small finite chart perturbations. By [F5] perturb it to avoid the pattern core $P$. On the punctured supplied tube of $P$, radial projection to its boundary, extended by the identity outside that tube, is continuous and sends this path into $X_P$. Consequently all exterior points are connected by paths. The outer torus has no compressing disk by hypothesis, so [F3], with the entire outer boundary component as subsurface and normal subgroup $1$, gives $\pi_1(T_c)\hookrightarrow\pi_1(X)$. The companion product tube is exactly the supplied input of [F2], so $\pi_1(T_c)\hookrightarrow\pi_1(Y)$ too. Both applications are smooth; an abstract finite PL disk has not been treated as a smooth disk. [F1, F2, F3, F5, given, construct]

2.1 Use finite smooth collars of the common torus to enlarge the two sides to a connected open cover whose intersection retracts to $T_c$. Van Kampen and the amalgam normal form [F4], with transversals supplied by [A1], then make $\pi_1(T_c)$ inject into $\pi_1(E_{P(K)})$. Any compressing disk would make its essential torus boundary nullhomotopic in the union, contradicting that injection. Thus $T_c$ is incompressible. [A1, F1, F4, F5, step 1.1, construct, algebra]

3.1 The only boundary of the satellite exterior is the inner pattern torus $T_{\mathrm{in}}=\partial e(N(P))$. The two components cut along $T_c$ are the connected pieces $X$ and $Y$ from step 1.1; only $X$ meets $T_{\mathrm{in}}$. Suppose there were a boundary-parallel product region $R$ with ends $T_c,T_{\mathrm{in}}$. Its interior must lie in $X$: it cannot cross either of its two boundary tori, and its collar at $T_{\mathrm{in}}$ is on the $X$ side. Moreover $R$ exhausts $X$. Indeed $\operatorname{Int}R$ is open in $\operatorname{Int}X$ by the smooth full-dimensional product charts, and closed relative to $\operatorname{Int}X$ because $R$ is compact and its boundary lies in $\partial X$. The interior of the connected manifold $X$ is connected, as is seen by pushing any boundary portions of a path into its finite collar. Hence $\operatorname{Int}R=\operatorname{Int}X$, and taking closures gives $R=X$. Transporting that product by $e^{-1}$ would identify $X_P$ with a product between its two marked ends, contrary to hypothesis. Therefore $T_c$ is not boundary-parallel. For this closed torus boundary-incompressibility is vacuous, so it is essential by [F6]. [F1, F6, step 1.1, step 2.1, given, construct] ∎


<!-- lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal -->
---
id: lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal
kind: lemma
title: "Essential annuli and tori in Seifert pieces are vertical or horizontal"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - lem-incompressible-surface-torus-boundary-essential-or-parallel-annulus
  - lem-relative-transversality-for-embedded-surfaces
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-smooth-two-sided-klein-bottle-curves-have-vertical-or-horizontal-normal-forms
  - lem-simultaneous-smooth-disk-and-primitive-annulus-normalization
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - thm-parametric-transversality
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - thm-isotopy-extension
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is retained from the original Statement and the solid-torus and simultaneous-system suppliers. It implies countable choice for smooth general position, flow and isotopy extension. No orientability hypothesis on M has been added."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition 1.11 and its proof, printed pp.16–18"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§§2–3, essential annuli and tori in Seifert pieces"
---

## Statement

Assume full AC. Let $M$ be a compact connected irreducible Seifert-fibered $3$-manifold, and let $F\subset M$ be a connected, two-sided essential annulus or torus. Then $F$ is ambient isotopic to either a vertical surface, meaning a union of regular fibers, or a horizontal surface, meaning a surface transverse to every fiber. For a horizontal surface $F$ with $n$ sheets over the base orbifold $B$ and exceptional-fiber multiplicities $q_1,\ldots,q_m$, the Euler characteristics satisfy
$$
\frac{\chi(F)}{n}=\chi(B)-\sum_{i=1}^m\left(1-\frac1{q_i}\right).
$$
If $F$ is two-sided and horizontal, cutting $M$ along $F$ gives an interval bundle over a surface.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Proposition 1.11](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, the compact connected irreducible smooth Seifert-fibered three-manifold $M$ and the connected two-sided essential annulus or torus $F$. The ambient manifold is not assumed orientable.

[A1] Full AC implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Essentiality, the geometric disk obstructions and the fibered solid-torus models are [[def-incompressibility-seifert-fibration-and-jsj-system]], Definition.

[F2] In a solid torus an incompressible boundary-incompressible proper surface is a meridian disk or a boundary-parallel disk; an embedded torus compresses there ([[lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel]], Statement). Its Proof 1.1 gives the actual smooth ball/disk push with marked rim collars. A two-sided torus in a parametrized smooth ball also compresses there: otherwise [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]], Statement, would inject $\mathbb Z^2$ into the trivial group. This is the compact orientable smooth-ball application of that criterion, not an unproved category change for a PL ball.

[F3] An incompressible proper surface in an irreducible orientable manifold with torus boundary is either boundary-incompressible or a boundary-parallel annulus ([[lem-incompressible-surface-torus-boundary-essential-or-parallel-annulus]], Statement).

[F4] Smooth torus circles and annulus arcs have the finite strip normalizations of [[lem-choice-free-smooth-torus-curves-and-annulus-strips]], Statement. Essential two-sided Klein-bottle circles have the vertical or horizontal normal forms of [[lem-smooth-two-sided-klein-bottle-curves-have-vertical-or-horizontal-normal-forms]], Statement.

[F5] Finite disk systems in a ball or solid torus, primitive vertical-boundary annulus systems, and horizontal meridian-boundary disk systems admit simultaneous smooth normalization, fixing a smaller already common boundary collar ([[lem-simultaneous-smooth-disk-and-primitive-annulus-normalization]], Statement).

[F6] Relative surface general position is [[lem-relative-transversality-for-embedded-surfaces]], Statement; general embedded-submanifold parametric transversality is [[thm-parametric-transversality]], Statement. For boundary faces apply the former in the double of the supplied neat collars. The latter also applies to the one-dimensional fiber cores.

[F7] Compact-source isotopies extend smoothly ([[thm-isotopy-extension]]; [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]]). The latter's Proof 2.1–4.1 also gives the finite-chart bump and compact-time flow construction. Smooth Euclidean flows and parameter dependence are [[thm-picard-lindelof-local-existence-and-uniqueness]] and [[thm-smooth-dependence-of-ode-solutions-on-parameters]], Statements.

[F8] Compact smooth surfaces with boundary have compatible finite triangulations ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Statement in dimension two).

## Proof

1.1 On every boundary component the fibration is an ordinary circle bundle over a circle. It has a fiber-preserving smooth identification with a product torus or the standard circle-bundle Klein bottle. To construct it, choose horizontal lifts of the base coordinate in finitely many bundle charts, combine them with a finite bump sum and transport once around the base using [F7]. This gives a circle return diffeomorphism $g$. An increasing angular lift of $g$ is smoothly interpolated to the identity lift when its degree is $+1$; a decreasing lift is smoothly interpolated to $\theta\mapsto-\theta$ when its degree is $-1$. Their derivatives retain their sign. Using this path on a base interval, stationary in endpoint collars, identifies the mapping torus with the product or reflection mapping torus, respectively. Every component of $\partial F$ is essential on its boundary component: an innermost boundary disk would compress $F$, since an annulus or torus is not a disk. Its normal line in $\partial M$ is the restriction of the two-sided normal of $F$, so in the Klein-bottle case it is two-sided. Apply [F4] to make these circles vertical or horizontal in each boundary component, extending the boundary isotopies into collars by [F7]. No orientability of $M$ is used. [A1, F1, F4, F7, given, construct]

2.1 Choose fiber cores $C_i$ containing all exceptional fibers, and choose one regular fiber if that list was empty. Put $F$ transverse to these finitely many curves. Here is the needed codimension-two use of [F6]: choose finitely many supported coordinate vector fields spanning the target tangent spaces near the compact core set; their short flows give a finite parameter family of ambient diffeomorphisms whose evaluation on $F$ is a submersion near every possible core intersection. Away from that neighborhood there are none. Parametric transversality gives a sufficiently small parameter with transverse slice. The path of parameters gives an ambient isotopy, fixed near $\partial M$. Thus there are finitely many intersection points. In each fibered core neighborhood, transversality makes $F$ a finite collection of disk graphs over the meridian plane. Shrink the neighborhood until all these graphs are transverse to the fiber direction, and straighten them to constant core-coordinate meridian disks by graph interpolation. On the finite ordered core coordinates the disks remain disjoint on this small neighborhood; extend in a larger collar by [F7]. All other parts of $F$ are separated from the core neighborhoods by compactness. Consequently $F$ meets each selected small fibered solid torus $N_i$ in horizontal meridian disks, each meeting its core once. [A1, F1, F6, F7, step 1.1, construct]

3.1 Remove the interiors of $N_i$, obtaining a circle bundle $M_0\to B_0$ over a connected compact surface with boundary. Choose finitely many disjoint proper base arcs cutting $B_0$ to one disk, and let $A_j$ be their inverse-image annuli. Cutting $M_0$ along them gives a product solid torus $W=D^2\times S^1$. The finite base cut can be read from a triangulation [F8]: a dual spanning tree first joins its triangles to one polygon, and finitely many polygon side arcs remove its handles and extra boundary components. Choose among all such transverse configurations, with horizontal core disks, normalized outer boundary collars and the displayed base-arc cut, one minimizing lexicographically the number of core intersections and then the number of intersection components with the annuli $A_j$. Only finite integer minima are selected. The neighborhoods and their base-arc end collars may be shrunk again after an isotopy; such a shrink preserves the displayed disk graphs and only appends their already transverse graph strips to the annulus ends, so it creates no new intersection component. Put $F$ transverse to the annuli by [F6]. A circle innermost in an $A_j$ bounds a disk there. It cannot be essential on $F$. Its disk on $F$ and the annulus disk bound a ball by irreducibility. The remainder of $F$ lies outside that ball: for a proper annulus it reaches $\partial M$; for a closed torus, lying inside would put the whole torus in the closed ball. Shrink that parametrized ball a little by [F7] to move the torus into its interior; [F2] then gives a compression, pulled back by the isotopy. The marked disk push from [F2] removes the circle and any further intersections inside the disk on $F$. Its final disk is near the annulus disk and misses all cores, so it decreases the first count or retains it and decreases the second. This contradicts minimality. Thus no circle of $F\cap A_j$ is inessential in $A_j$. [A1, F1, F2, F6, F8, step 2.1, construct]

4.1 An outermost returning arc in an $A_j$ cuts off a disk $D$ with its other edge $\beta$ on a fiber circle of $\partial M_0$. Its interior misses $F$. If its endpoints are on an original boundary component of $M$, essentiality of its edge on $F$ would make it a boundary compression. If that edge is inessential, its ends lie on one boundary circle of $F$. This is also impossible: $D$ lies on one coherent normal side of the two-sided $F$, whereas a fiber interval between successive crossings of one affine horizontal boundary circle approaches opposite sides at its two ends. The same normal-side argument applies on a Klein bottle in its orientation double cover; the boundary lift is horizontal there. If instead $\beta$ lies on $\partial N_i$, it joins two different meridian disks of $F\cap N_i$ by that same argument. In the constant core coordinates of step 2.1, successive crossings along the regular boundary fiber project to successive core-coordinate values. The projected interval has length less than one core period and contains no other intersection with $F$. Its radial ruling in $N_i$ is therefore an embedded strip: the core coordinate is strictly monotone on it, so even an exceptional fiber's meridional winding creates no self-intersection. Join this strip to $D$. This is an embedded bigon between $F$ and a core interval, with interior missing both. The smooth graph bigon move across it cancels the two core intersections, contrary to the first minimum. We have proved that every arc of $F\cap A_j$ spans its annulus. By [F4], straighten these arcs to graphs over the base interval, and straighten the essential circles to fibers. Circles and spanning arcs cannot coexist in one annulus. Extend these moves through small product neighborhoods, retaining the normalized boundary collars. Along spanning arcs the two transverse surface planes force $F$ to be transverse to the fiber; along fiber circles straighten its other tangent to a base direction. Thus near the cut annuli and the outer boundary, $F$ is already horizontal or vertical as appropriate. [A1, F1, F4, F6, F7, step 1.1, step 2.1, step 3.1, construct]

5.1 Let $F_1$ be the surface cut open in $W$. It is incompressible there. Indeed a compressing disk has boundary bounding a disk $D'$ on $F$, by incompressibility in $M$. If $D'$ were contained in $F_1$, it would not be a compression. Otherwise it crosses a cut annulus or a deleted core disk. Its union with the compressing disk bounds a ball by irreducibility. As in step 3.1, the rest of $F$ lies outside; the alternative of a torus inside the ball would itself supply a compression. The smooth disk push replaces $D'$ by a disk in $W$, reducing core intersections or retaining them and reducing annulus intersections. This contradicts the chosen minimum. Every boundary circle of $F_1$ is vertical or horizontal on $\partial W$: the collar models of step 4.1 are already vertical or transverse to the fiber, and their graph parameters agree across the rounded base-disk corners. Such a circle is essential on this torus; in the horizontal case its projection is a local diffeomorphism onto the base boundary circle, so has nonzero degree. [F1, F2, F6, step 3.1, step 4.1, construct]

6.1 Apply [F3] to each component with boundary in the orientable solid torus $W$, then [F2] to a boundary-incompressible component. The alternatives are a meridian disk or a boundary-parallel annulus; a boundary-parallel disk is excluded by the essential boundary circles. Closed torus components are excluded by [F2]. Suppose a boundary-parallel annulus has horizontal boundary. Its parallel boundary annulus contains an interval of a vertical fiber over an original boundary segment of the cut base disk, away from the cut-arc faces. Its product gives a boundary-compressing disk whose boundary edge is that vertical interval. This disk can be made to miss all other components: remove intersection circles using incompressibility of $F_1$ and disk replacement; an edgemost remaining arc nearest that interval cuts off a disk with interior missing $F_1$. Its vertical boundary edge lies on one component of $\partial M_0$. The exact argument of step 4.1 now gives either a forbidden boundary compression or a cancellation of two core intersections. Thus horizontal-boundary parallel annuli do not occur. The remaining annuli have vertical boundary. A disk cannot have vertical boundary, since a product fiber generates $\pi_1(W)$ and does not bound a disk there. Thus the remaining disks have horizontal boundary. [A1, F1, F2, F3, step 4.1, step 5.1, construct]

7.1 A vertical circle on $\partial W$ and a horizontal circle have nonzero algebraic intersection, equal up to sign to the latter's nonzero base degree. Disjoint boundary circles cannot have both types. Thus $F_1$ consists entirely of vertical-boundary annuli or entirely of horizontal-boundary disks. In the first case apply [F5](b), and in the second apply [F5](c). All boundary and cut-face collars were already of the corresponding type, so choose the target product/graph systems to agree on smaller collars and retain them in the simultaneous isotopies. The maps then reglue smoothly across each cut annulus and agree with the identity in the deleted core neighborhoods. The vertical case has no core disks, since their boundary would be horizontal; it yields a union of regular fibers. In the horizontal case those unchanged core disks are already transverse to every fiber in $N_i$, so the reglued whole surface is horizontal. Every step used an actual smooth ambient isotopy; stationary time changes at the finite joins give joint smoothness, including the parameter endpoints. This proves the alternative in the original ambient category, also when $M$ is nonorientable. [A1, F1, F4, F5, F7, step 2.1, step 4.1, step 6.1, construct]

8.1 For a horizontal $F$, its proper local projection off the exceptional points is a finite cover, with constant positive sheet count $n$ since the base is connected. In the fibered solid-torus model a transverse meridian disk projects to a disk by the order-$q_i$ branched map; hence there are $n/q_i$ preimages over the $i$th exceptional point. Triangulate the underlying base by [F8], including those finitely many marked points by a local subdivision, and lift it. Every ordinary cell has $n$ lifts; only the marked vertices have $n/q_i$ rather than $n$ lifts. The finite alternating count gives $$\chi(F)=n\chi(B)-\sum_i(n-n/q_i),$$ as claimed. Finally cut the fibers at their intersections with $F$. Over an ordinary chart the resulting segments form product interval charts. Near an exceptional fiber use its finite cyclic model: the action permutes the lifted cut segments freely, so the quotient of each segment chart is again a disk times an interval, not an orbifold interval chart. These charts paste along whole segment fibers, possibly reversing their interval coordinate, and supply an interval bundle on the cut-open manifold. Two-sidedness provides its two boundary copies of $F$. No orientability assumption on $M$ is needed for this interval-bundle conclusion. [F1, F7, F8, step 7.1, construct] ∎


<!-- lem-essential-annulus-in-seifert-piece-isotopic-to-vertical -->
---
id: lem-essential-annulus-in-seifert-piece-isotopic-to-vertical
kind: lemma
title: "Essential annuli in Seifert pieces can be made vertical"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal
  - lem-horizontal-annuli-in-orientable-seifert-pieces-admit-vertical-refiberings
  - lem-orientable-seifert-pieces-with-boundary-are-irreducible
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the essential-surface classification supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.14 and its proof, printed p.20"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§3, Seifert-fibered pieces and matching boundary fibrations"
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable Seifert-fibered $3$-manifold and let $A\subset M$ be an incompressible, boundary-incompressible annulus. After an ambient isotopy and, if necessary, replacement by another Seifert fibration of $M$, $A$ is vertical. A change of fibration is needed only when the underlying manifold is $T^2\times I$ or the orientable twisted $I$-bundle over the Klein bottle. The twisted $I$-bundle over $T^2$ and $K\times I$ are nonorientable and do not occur under these hypotheses.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.14](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, a compact connected orientable Seifert-fibered $3$-manifold $M$ and an incompressible, boundary-incompressible annulus $A$.

[A1] Full AC is the axiom that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[F1] Every essential annulus in a Seifert-fibered piece is isotopic to a vertical or horizontal annulus ([[lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal]], Statement).

[F2] A proper two-sided horizontal annulus in an orientable Seifert piece admits a smooth refibering that makes that very annulus vertical; the underlying manifold is $T^2\times I$ or the orientable twisted Klein-bottle interval bundle ([[lem-horizontal-annuli-in-orientable-seifert-pieces-admit-vertical-refiberings]], Statement).

[F3] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines vertical and horizontal surfaces and exceptional fibers.

[F4] A compact connected orientable Seifert piece with nonempty boundary is irreducible ([[lem-orientable-seifert-pieces-with-boundary-are-irreducible]], Statement).

## Proof

1.1 Properness of the annulus makes the boundary of $M$ nonempty, so $M$ is irreducible by [F4]. A boundary-parallel annulus has a boundary compression: in its product with a boundary annulus, a spanning arc crossed with the product interval is a boundary-compressing rectangle. Therefore the given boundary-incompressible annulus is not boundary-parallel and is essential. All hypotheses of [F1], including irreducibility, are now discharged. Apply it to isotope $A$ to a vertical or horizontal annulus. [A1, F1, F3, F4, given, construct]

2.1 If it is vertical, retain the original fibration. If it is horizontal, apply [F2] to refiber $M$ while leaving the annulus in place. The new fibration makes it vertical, and [F2] identifies the only possible underlying orientable manifolds where this change is needed. Compose with the initial isotopy to obtain the stated conclusion for the original annulus. There is no use of a hypothetical circle foliation on a horizontal annulus: the refibering supplier constructs an invariant circle foliation from its actual finite deck action. [F2, F3, step 1.1, construct] ∎


<!-- lem-seifert-boundary-fiber-slopes-unique-except-small-pieces -->
---
id: lem-seifert-boundary-fiber-slopes-unique-except-small-pieces
kind: lemma
title: "Boundary fiber slopes are unique outside the small Seifert exceptions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-essential-annulus-in-seifert-piece-isotopic-to-vertical
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the annulus-verticalization supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.15 and its proof, printed p.20"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§3, uniqueness and matching of Seifert boundary fibrations"
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable Seifert-fibered $3$-manifold other than $T^2\times I$ and the orientable twisted $I$-bundle over the Klein bottle. Let $\mathcal A$ be a finite family of connected, two-sided essential annuli in $M$ such that every boundary torus of $M$ contains a boundary circle of some annulus in $\mathcal A$. Then any two Seifert fibrations of $M$ induce isotopic regular-fiber slopes on each boundary torus.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.15](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, a compact connected orientable Seifert-fibered $3$-manifold $M$ outside the two orientable exceptional manifolds in the Statement, a finite family $\mathcal A$ of essential annuli meeting every boundary torus, and two Seifert fibrations of $M$.

[A1] Full AC is the axiom that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[F1] An essential annulus in a Seifert piece can be isotoped vertical for a given fibration, with a fibration change needed only in the exceptional underlying manifolds ([[lem-essential-annulus-in-seifert-piece-isotopic-to-vertical]], Statement).

[F2] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines the base surface, exceptional fibers, and regular-fiber slope.

## Proof

1.1 Fix an annulus $A\in\mathcal A$ whose boundary meets a chosen boundary torus $T$. Apply [F1] to the first fibration. Since $M$ is outside the exceptional cases, an ambient isotopy makes $A$ vertical without changing that fibration. Its boundary circle on $T$ therefore represents the regular-fiber slope of the first fibration. [A1, F1, given, construct]

2.1 Apply [F1] to the second fibration. Again the annulus becomes vertical by an ambient isotopy without replacing that second fibration. Isotopy preserves the free isotopy class of its boundary circle on $T$, so that circle also represents the regular-fiber slope for the second fibration. The two primitive slopes are therefore isotopic on $T$. Repeating this argument for each boundary torus, using the annulus family $\mathcal A$, proves the claim for all boundary components. [F1, F2, step 1.1, construct] ∎


<!-- lem-smooth-minimal-torus-splittings-have-unique-isotopy-class -->
---
id: lem-smooth-minimal-torus-splittings-have-unique-isotopy-class
kind: lemma
title: "Uniqueness of minimal smooth torus splittings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-incompressibility-seifert-fibration-and-jsj-system
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - lem-smooth-incompressible-torus-cuts-inject-groups-and-preserve-irreducibility
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
  - lem-choice-free-isotopy-extension-for-a-compact-smooth-source
  - lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel
  - lem-choice-free-smooth-torus-curves-and-annulus-strips
  - lem-simultaneous-smooth-disk-and-primitive-annulus-normalization
  - lem-boundary-compressible-annulus-is-boundary-parallel
  - lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal
  - lem-essential-annulus-in-seifert-piece-isotopic-to-vertical
  - lem-atoroidal-piece-with-essential-annulus-is-seifert
  - lem-injective-boundary-seifert-fiber-slopes-are-unique-outside-small-pieces
  - lem-equal-seifert-boundary-slopes-admit-smooth-fiber-matching-and-gluing
  - lem-orientable-seifert-pieces-with-boundary-are-irreducible
justified_by: []
proof_strategy: induction
axiom_use: "Full AC is inherited from the Seifert classification, exceptional refibering, slope-rigidity and finite disk-system suppliers. No additional choice premise is used in the finite comparison or induction. All ambient isotopies are jointly smooth."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Full proof of Theorem1.9, printed pp.22–23; the exceptional product/twisted-bundle comparisons, finite simultaneous verticalizations and smooth collar matches are spelled out here."
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable irreducible smooth three-manifold with nonempty boundary consisting of tori. If $\mathcal T$ and $\mathcal U$ are finite inclusion-minimal systems of disjoint two-sided incompressible smooth interior tori such that every cut piece is atoroidal or Seifert-fibered, then a jointly smooth ambient isotopy of $M$, fixed near its boundary and stationary near the time endpoints, carries $\mathcal T$ to $\mathcal U$.

This is a uniqueness assertion conditional on the two finite systems. It makes no existence or Haken finiteness assertion.

## Facts & Assumptions

**Given:** Full AC and the manifold and two finite systems of the Statement.

[A1] Full AC is [[def-axiom-of-choice]].

[F1] The geometric disk obstructions, minimality and good cut-piece conditions are [[def-incompressibility-seifert-fibration-and-jsj-system]]. Incompressibility of a compact two-sided smooth surface in a compact orientable smooth manifold is fundamental-group injection. Cutting along incompressible smooth tori injects all cut-piece groups and preserves irreducibility. [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]] [[lem-smooth-incompressible-torus-cuts-inject-groups-and-preserve-irreducibility]]

[F2] Finite smooth transversality and compact-source smooth ambient extension have the precise supported versions of [[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]] and [[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]]. A finite concatenation is jointly smooth after stationary time changes.

[F3] The marked disk-face lens construction and cap sweep in [[lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel]], Proof 1.1, applies in any supplied smooth ball: it uses the actual ball parameter, prescribed rim collars and the smooth cap formula, not the ambient solid-torus coordinates. Smooth annulus strips and their finite curve normalizations are [[lem-choice-free-smooth-torus-curves-and-annulus-strips]]. Finite proper disk systems and primitive-boundary annulus systems in parametrized balls and solid tori have the simultaneous boundary-relative normalizations of [[lem-simultaneous-smooth-disk-and-primitive-annulus-normalization]].

[F4] An incompressible boundary-compressible annulus in an irreducible orientable manifold with torus boundary is boundary-parallel. An irreducible atoroidal piece containing an essential annulus is Seifert-fibered. [[lem-boundary-compressible-annulus-is-boundary-parallel]] [[lem-atoroidal-piece-with-essential-annulus-is-seifert]]

[F5] In an irreducible Seifert piece a two-sided essential torus is vertical or horizontal up to smooth ambient isotopy. A horizontal closed surface cannot occur when the base has boundary: a finite covering of the base by a closed surface would have no points over its boundary, contrary to the local half-disk covering charts. Essential annuli can be made vertical without changing the fibration unless the piece is $T^2\times I$ or the orientable twisted interval bundle $W$ over the Klein bottle. These orientable Seifert pieces with boundary are irreducible. [[lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal]] [[lem-essential-annulus-in-seifert-piece-isotopic-to-vertical]] [[lem-orientable-seifert-pieces-with-boundary-are-irreducible]]

[F6] On an injective boundary torus of a Seifert piece its fiber slope is intrinsic, except for the underlying manifolds $T^2\times I$ and $W$. Equal slopes admit actual smooth fiber matching and product-collar gluing, including self-gluing and finitely many disjoint boundary pairs. [[lem-injective-boundary-seifert-fiber-slopes-are-unique-outside-small-pieces]] [[lem-equal-seifert-boundary-slopes-admit-smooth-fiber-matching-and-gluing]]

## Proof

1.1 We induct on $|\mathcal T|+|\mathcal U|$, permitting any connected manifold with the stated boundary and irreducibility properties. If either system is empty, the manifold is itself good; the empty subfamily is consequently a good subfamily of the other system, whose inclusion-minimality forces it to be empty too. This includes the induction base. A minimal system has no product cut component: if a component is $T^2\times I$, one boundary is a cutting face, and absorbing that collar into its neighboring piece preserves that piece up to diffeomorphism and hence preserves goodness. Remove that cutting torus, contradicting minimality. If both ends are the two faces of the same torus, regluing gives a closed connected component of $M$, impossible since $M$ is connected with nonempty boundary. Thus the removal always has a neighboring piece. [A1, F1, given, base, construct]

2.1 We record a clean parallel-pair procedure. Every incompressible torus in a supplied product $P=T^2\times I$ is boundary-parallel. Otherwise it is essential; [F5] makes it vertical, since a horizontal torus is impossible over the annulus base. Its projection is an essential circle in that annulus, hence is parallel to a boundary circle, so its inverse image is boundary-parallel after all. An inessential base circle would bound a disk whose inverse image is a solid torus and would compress the torus, excluded by [F1]. The same argument treats a finite torus family simultaneously: verticalize the first, cut along it, and repeat in the product components, keeping their boundary collars fixed. Any already boundary-parallel torus can first be put in its product collar; cutting off that collar leaves products. Finite induction gives an ordered parallel stack. Thus if a torus of one system is parallel, inside a piece of the other system, to a face of that other system, choose the nearest member of the first system in the product stack to obtain a pair bounding a product with no other torus of either system inside. If it were instead parallel to an original boundary of $M$, the nearest member would produce a product cut component of its own system, contradicting step 1.1. The same reasoning excludes parallel pairs within one minimal system. All stack moves use interior smooth isotopies; the closed-surface construction in [F5] has no moving boundary curves and retains a smaller boundary collar at each cut. [F1, F2, F5, step 1.1, construct]

2.2 Put the two systems in transverse position by [F2], choosing among such isotopic positions one with least total number of intersection circles. Every intersection circle is essential on both tori. Indeed a circle innermost among the inessential circles on a torus of $\mathcal T$ bounds a disk there whose interior misses $\mathcal U$: any circle inside is inessential on that disk, and a circle essential on its $\mathcal U$ torus would be a compression, contrary to [F1]. Its mate bounds a disk on the $\mathcal U$ torus by incompressibility. Their union, with the rim rounded, bounds a smooth ball. The rest of that $\mathcal U$ torus lies outside the ball, since otherwise the entire torus would lie in the closed ball and [F1] would compress it there; a small ball-collar shrink first places it in the interior if necessary. Every other $\mathcal U$ torus also lies outside, by the same argument and disjointness from the two disk faces. The marked smooth disk sweep of [F3] moves its disk just past the clean disk on $\mathcal T$, deleting this circle and every circle inside the moved disk and creating none. The ball can intersect the reference system $\mathcal T$ during the sweep; its endpoint disk is chosen in a thin collar of the clean face, disjoint from that reference system. This contradicts the least count. Interchanging the systems proves the assertion on both. Consequently the pieces of $\mathcal U$ in a $\mathcal T$ cut piece are annuli and closed tori, and every annulus core has nontrivial image in $M$, hence the annulus is incompressible in that cut piece by [F1]. [F1, F2, F3, step 1.1, construct]

3.1 Assume the assertion for every smaller total number of tori. Whenever a clean parallel pair occurs, isotope its member of $\mathcal T$ onto its member of $\mathcal U$ through the product levels and extend by [F2], with support missing all other tori and the original boundary. This isotopy is not required to fix the target torus while moving the first one; the target is the prescribed endpoint position. We then have a common torus. Cut along it. The remaining systems in every connected cut component are still minimal: deleting any nonempty part there while preserving goodness would delete the same part of the original system while retaining the common torus. They are incompressible there, and those components are irreducible by [F1]. Every component has nonempty torus boundary. Each comparison has a strictly smaller total number of tori. Apply the induction hypothesis in each component, fixing smaller collars of the two common faces. Their finite smooth isotopies paste over those fixed collars and extend by the identity to the original manifold. This proves the induction step whenever a clean parallel pair or common torus has been obtained. [F1, F2, step 1.1, step 2.1, ih, construct]

3.2 Every such annulus is boundary-incompressible. Otherwise [F4] makes it boundary-parallel. Its parallelism is a parametrized annulus times an interval, hence a solid torus; its other boundary annulus lies on a single cutting face. Other portions of $\mathcal U$ inside this parallelism are proper annuli whose boundary curves are parallel to its core and have longitudinal coefficient one. There is no whole $\mathcal U$ torus inside it, since [F1] would inject $\mathbb Z^2$ into its cyclic group. In the product boundary coordinates the finitely many parallel curves can be made vertical by finite annulus strip isotopies, retaining the outer rim. Apply [F3]'s primitive-annulus normalization in this solid torus, relative to its boundary. The annulus pieces become disjoint base arcs times the circle; an outermost base arc cuts off an empty disk region against the boundary interval. Its inverse image is an empty annulus parallelism. Pushing that annulus across it and just past the cutting face removes its two boundary intersection circles and creates none. The isotopy extends smoothly by [F2] and is supported away from every other $\mathcal U$ annulus and the original boundary. This contradicts minimality of the count. The annuli are therefore essential. This argument also supplies a clean product when other parallel annuli originally occupied the first parallelism; it does not assume that parallelism was empty. [F1, F2, F3, F4, step 2.2, construct]

4.1 Suppose an intersection circle $c$ remains on a cutting torus $T$. Its two incident annuli in the other system are essential, so each adjacent piece is Seifert: it either was Seifert or becomes so by [F4]. If the two pieces are different, [F5] permits a choice of fibration on each for which its incident annulus has boundary slope $[c]$. No simultaneous family of annuli is required: this one circle determines the two slopes. By [F6] match and glue these fibrations across $T$. Deleting $T$ preserves goodness, contradicting the minimal system. If both sides belong to the same piece $P$, apply [F5] to the annuli at its two different boundary copies of $T$. Unless $P$ is exceptional, neither application changes its given fibration, so both induced slopes are $[c]$ and [F6] again self-glues to delete $T$. The exceptional $W$ has only one boundary torus, so cannot have two distinct copies of $T$. The exceptional product has exactly two boundary tori, so if those are both copies of $T$, its self-gluing is all of connected $M$ and is closed, contradicting the original nonempty boundary. Thus neither exception occurs in the self-adjacent case. This contradiction proves that the systems are disjoint. [F4, F5, F6, step 1.1, step 3.2, construct]

5.1 If a $\mathcal T$ torus lies in an atoroidal $\mathcal U$ piece, it is boundary-parallel there, and step 2.1 supplies a clean parallel pair; step 3.1 completes the proof. The same holds with the systems interchanged. We may therefore assume every torus of either system lies in a Seifert piece of the other, and none is boundary-parallel in that piece. They are essential there. All these Seifert pieces have boundary, so [F5] makes those tori vertical. This can be done simultaneously as follows. First verticalize the $\mathcal T$ tori inside each $\mathcal U$ piece one at a time, cutting along the already vertical tori. Every cut component remains Seifert and irreducible by [F1]. If a remaining torus becomes boundary-parallel, it is parallel to an already cut torus, an original boundary, or a $\mathcal U$ boundary. The first two contradict step 2.1 and minimality; the last supplies a clean parallel pair and finishes by step 3.1. Otherwise [F5] applies again, with supports away from the fixed boundary collars. Then verticalize $\mathcal U$ inside the $\mathcal T$ pieces in the same way, fixing $\mathcal T$ pointwise. Transport the already chosen fibrations of the $\mathcal U$ pieces by these latter isotopies: since $\mathcal T$ is fixed, it remains vertical for them. Retain the fixed fibrations of the $\mathcal T$ pieces while moving their $\mathcal U$ surfaces. Thus each overlap component inherits two actual Seifert fibrations simultaneously, rather than only two separately attainable positions. A $\mathcal U$ piece containing no $\mathcal T$ torus lies entirely in a $\mathcal T$ piece and inherits its restricted fibration, even if its original good label was atoroidal. [F1, F2, F5, step 2.1, step 3.1, step 4.1, construct]

6.1 Fix a torus $U$ of $\mathcal U$, lying in a Seifert $\mathcal T$ piece $P$, and consider the overlap component $C$ incident to one side of $U$ in a $\mathcal U$ piece $Q$. Both its fibrations exist by step 5.1. Its boundary copy of $U$ is injective into $C$: a kernel loop there would be a kernel loop in $M$, contradicting [F1]. If $C$ is neither a product nor $W$, [F6] makes the two fiber slopes equal on $U$. The solid-torus possibility is already excluded by that same boundary injection. If $C=T^2\times I$, its other boundary is a $\mathcal T$ face, a $\mathcal U$ face, or an original boundary. In the first case $C$ is the clean parallelism for step 3.1. In the other two cases there is no $\mathcal T$ boundary of $C$, so it is the whole connected $\mathcal U$ piece $Q$; that is a forbidden product cut component by step 1.1. This includes two distinct faces of one self-adjacent $\mathcal U$ torus. If $C=W$, it has only its one boundary, the indicated face of $U$. Thus again it is the whole $Q$. Replace the fibration of this entire $Q$ by the restriction of the fibration of $P$. There is no other boundary on which this could spoil a match, and no $\mathcal T$ torus inside $Q$. These exhaust the exceptional overlap cases. [F1, F6, step 1.1, step 3.1, step 5.1, construct]

7.1 Apply step 6.1 to both sides of $U$. If a clean parallel pair occurs, step 3.1 finishes. Otherwise both adjacent $\mathcal U$ pieces have fiber slope on $U$ equal to that of $P$. In a self-adjacent piece, the two boundary copies are distinct and the nonexceptional slope comparisons use the same fibration; the one-boundary $W$ adjustment cannot be self-adjacent. The two torus fibrations therefore match smoothly by [F6], with their product collars, and their union is Seifert. Delete $U$ from $\mathcal U$. Every other cut piece is unchanged, contradicting its inclusion-minimality. The case where both nonempty systems have no common or clean parallel torus is impossible. Together with the base and common-torus induction this proves the assertion. Every moving surface was carried by a smooth embedding isotopy, and [F2] supplies jointly smooth ambient extensions with supports away from the original boundary. All cut-face comparisons fixed smaller collars, so the finite glued and concatenated isotopies are jointly smooth, stationary at their endpoints, and fixed near $\partial M$. This completes the induction and proves exactly the conditional uniqueness Statement. [F2, F6, step 1.1, step 3.1, step 6.1, discharge-induction] ∎


<!-- thm-jsj-decomposition-of-knot-exteriors -->
---
id: thm-jsj-decomposition-of-knot-exteriors
kind: theorem
title: "JSJ decomposition of compact knot exteriors"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-exterior
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-knot-exterior-is-irreducible
  - lem-knot-normal-circle-bundle-trivialization
  - lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - lem-smooth-incompressible-torus-cuts-inject-groups-and-preserve-irreducibility
  - lem-choice-free-relative-transversality-for-a-compact-smooth-embedding
  - lem-haken-torus-bound-for-a-supplied-compatible-smooth-triangulation
  - lem-smooth-minimal-torus-splittings-have-unique-isotopy-class
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The original full AC hypothesis is retained and supplies countable choice for the chosen tube, smooth exterior irreducibility and compatible Haken bound. Full AC is also the exact declared hypothesis of the Seifert-based smooth uniqueness supplier. The existence construction itself makes only a bounded finite sequence of choices."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, Propositions 1.7–1.8, Lemma 1.10, Lemmas 1.14–1.16, and Theorem 1.9, printed pp.11–23"
    - title: "Stefan Friedl, An Introduction to 3-Manifolds"
      url: "https://www.math.csi.cuny.edu/abhijit/gt3m/Friedl-3mfds.pdf"
      locator: "§6.1, Theorem 6.1, printed pp.20–21; independent statement and scope check"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§§2–4, torus-boundary JSJ system and isotopy uniqueness"
---

## Statement

Assume full AC. Let $K:S^1\to S^3$ be a smooth oriented knot with a chosen compact exterior $E_K$. There exists a finite inclusion-minimal collection $\mathcal T$ of pairwise disjoint incompressible tori in the interior of $E_K$ such that every component of $E_K$ cut along $\mathcal T$ is atoroidal or Seifert-fibered. Any two such inclusion-minimal collections are ambient isotopic in $E_K$. Atoroidal pieces in this statement are not asserted to be hyperbolic.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Theorem 1.9](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Stefan Friedl, *An Introduction to 3-Manifolds*, Theorem 6.1](https://www.math.csi.cuny.edu/abhijit/gt3m/Friedl-3mfds.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)

## Facts & Assumptions

**Given:** Full AC, the smooth oriented knot and its chosen compact exterior $E_K$.

[F1] Full AC implies countable choice. [[def-axiom-of-choice]] [[def-countable-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F2] The chosen tube and exterior are those of [[def-knot-exterior]]. The oriented normal plane bundle has a smooth global frame by [[lem-knot-normal-circle-bundle-trivialization]], Statement and full finite-frame proof. Under countable choice the exterior is irreducible by [[lem-knot-exterior-is-irreducible]], Statement.

[F3] The compact smooth exterior admits a supplied finite compatible whole-star manifold triangulation, taking the empty interior surface family. [[lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations]]

[F4] For that very compatible triangulation, with $t$ triangular faces and $\beta=\dim_{\mathbb F_2}H_2(E_K;\mathbb F_2)$, every finite incompressible torus family with no $T^2\times I$ cut component has at most $4t+\beta-1$ members. [[lem-haken-torus-bound-for-a-supplied-compatible-smooth-triangulation]]

[F5] Cutting along a finite incompressible smooth torus family preserves smooth irreducibility and injects every cut-piece group into the original group, including for nonseparating cuts. [[lem-smooth-incompressible-torus-cuts-inject-groups-and-preserve-irreducibility]]

[F6] Geometric smooth incompressibility is fundamental-group injectivity. Compact embedded paths admit finite supported transversality relative to their endpoint neighborhoods. [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]] [[lem-choice-free-relative-transversality-for-a-compact-smooth-embedding]]

[F7] In a compact connected orientable irreducible smooth manifold with nonempty torus boundary, any two finite inclusion-minimal good torus systems are carried to one another by a jointly smooth ambient isotopy fixed near the original boundary. Its full proof treats the exceptional product and twisted-Klein-bundle overlaps and the final disjoint-system comparison. [[lem-smooth-minimal-torus-splittings-have-unique-isotopy-class]]

[F8] Incompressibility, atoroidality, the Seifert models and inclusion-minimal good systems have the conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]].

## Proof

1.1 The exterior is a compact oriented smooth manifold with torus boundary. To verify the last assertion, orthonormalize the global normal frame of [F2] in the metric used for the tube's disk subbundle. Its chosen tube is then smoothly parametrized by $S^1\times D^2$, so its boundary is $T^2$. The exterior is connected as well: any two distinct points in it are joined by an embedded great-circle arc in $S^3$ (choose a half great circle in the antipodal case). Apply [F6]'s compact relative transversality to this arc and the knot, fixing its endpoint neighborhoods. A transverse one-dimensional arc cannot meet the one-dimensional knot in a three-manifold, so it avoids the knot. There is a continuous retraction $S^3\setminus K\to E_K$, equal to the identity outside the tube and sending a nonzero normal vector of length $r\le\epsilon$ radially to the vector of length $\epsilon$ in the same direction. It is continuous at the tube boundary and fixes both endpoints. The retracted arc is a path in the exterior. The coincident-endpoint case is constant. Thus $E_K$ is connected, and it is irreducible by [F1]–[F2]. [F1, F2, F6, given, construct]

2.1 Choose the finite compatible triangulation of [F3] once. If $E_K$ itself is atoroidal or Seifert, the empty family proves existence and is minimal. Otherwise start with the empty family, and whenever a current component $C$ is neither atoroidal nor Seifert, choose an incompressible torus not boundary-parallel in $C$, by [F8]'s definition of failure of atoroidality. It is two-sided: the torus and ambient orientations orient its normal line, and a finite normal-field flow gives a smooth product neighborhood. Every cut component has nonempty torus boundary. Indeed a boundaryless cut component would have no cutting face and no original boundary, hence would give a closed component of the original connected exterior, impossible by step 1.1. Irreducibility of the successive pieces will follow from [F5]. This construction is needed only for a bounded finite number of steps, as established below. [F3, F5, F8, step 1.1, construct]

3.1 Suppose a finite accumulated family is incompressible in $E_K$. By [F5] its cut pieces inject into $E_K$ and are irreducible. A new torus chosen in $C$ injects into $C$ by [F6], and then into $E_K$ by composition. It is therefore incompressible in $E_K$ by [F6]. The empty family starts this induction. Thus every finite stage consists of incompressible tori in the original exterior and has irreducible cut pieces, and all applications of [F4]–[F5] are within their smooth categories. [F5, F6, step 2.1, construct, algebra]

4.1 No finite stage has a product cut component. Initially the exterior is not good, hence is not $T^2\times I$. If a product first appears after a new cut along $T\subset C$, it must be one of the new components and must contain a boundary copy of $T$. If its other end is an old boundary face of $C$, the displayed product makes $T$ boundary-parallel in $C$, contradicting its choice. If both ends are the two copies of $T$, regluing them makes the entire connected old component $C$ a closed torus bundle; this contradicts the nonempty boundary of $C$ verified in step 2.1. Components unaffected by this cut were already nonproducts. This finite induction proves the no-product condition required by [F4], without assuming that selected tori separate. [F4, F8, step 2.1, step 3.1, construct]

5.1 Put $B=4t+\beta-1$, a fixed finite integer from [F4]. If no stage had become good after at most $B$ cuts, the construction could be extended through $B+1$ cuts by finite induction: at each of these finitely many stages use step 2.1. Steps 3.1 and 4.1 would then give an incompressible torus family with no product cut component and $B+1$ members, contradicting [F4]. Thus a finite good family exists. This argument selects only a bounded finite list of cuts, rather than postulating an infinite sequence of independent choices. The zero-cut empty family in the nongood initial case also satisfies [F4], so $B\ge0$ there. [F4, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 Among the subfamilies of that particular finite good family, take a good subfamily of least cardinality. There is at least one, and its finite power set suffices for the selection. No proper subfamily can be good, so it is inclusion-minimal in exactly [F8]'s sense. This proves existence with all the original hypotheses and no additional condition on the knot. [F8, step 5.1, construct, choose]

7.1 Finally let two finite inclusion-minimal systems as in the Statement be given. Step 1.1 verifies that their ambient exterior is compact, connected, orientable and irreducible with nonempty torus boundary. Their tori and good cut pieces have exactly [F7]'s smooth hypotheses. Apply that full uniqueness supplier to obtain a jointly smooth ambient isotopy of $E_K$, even fixed near its boundary, carrying one system to the other. The underlying convention is the ordinary smooth ambient isotopy of the knot definitions; no homeomorphism isotopy has replaced it. The conclusion asserts only atoroidal or Seifert pieces and introduces no hyperbolicity assertion. [F1, F7, F8, step 1.1, step 6.1] ∎


<!-- cor-satellite-companion-is-detected-by-jsj -->
---
id: cor-satellite-companion-is-detected-by-jsj
kind: corollary
title: "The JSJ system detects a companion torus when it is not amalgamated"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-satellite-pattern-companion-and-winding-number
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-axiom-of-choice
  - lem-satellite-torus-is-essential
  - thm-jsj-decomposition-of-knot-exteriors
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§4, Definitions 4.1 and 4.3, Propositions 4.6 and 4.14, Theorem 4.18, PDF pp.14–21"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Theorem 1.9 and its uniqueness proof, printed pp.14, 21–23"
---

## Statement

Assume full AC. Let $M=E_{P(K)}$ be a satellite knot exterior with companion torus $T_c$. Suppose the pattern hypotheses of the essential-companion-torus lemma hold, both components of $M$ cut along $T_c$ are atoroidal or Seifert-fibered, and $M$ itself is neither atoroidal nor Seifert-fibered. Then the inclusion-minimal JSJ system of $M$ consists of a torus ambient isotopic to $T_c$. Cutting along that torus identifies the companion exterior $E_K$ as the component on the outside of the embedded companion solid torus. No conclusion is made for an essential companion torus that is absorbed into a Seifert-fibered union.

## Statement references

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Theorem 1.9](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

## Facts & Assumptions

**Given:** Full AC, a satellite knot exterior $M$, its companion torus $T_c$, the stated pattern hypotheses, and the two pieces obtained by cutting along $T_c$.

[A1] Full AC is the assertion that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[F1] The pattern and companion torus are defined in [[def-satellite-pattern-companion-and-winding-number]].

[F2] Under the nontrivial companion and nonproduct pattern hypotheses, $T_c$ is essential ([[lem-satellite-torus-is-essential]], Statement).

[F3] A finite family of incompressible tori is a JSJ system when cutting along it gives only atoroidal or Seifert-fibered pieces; inclusion-minimality excludes every proper subfamily ([[def-incompressibility-seifert-fibration-and-jsj-system]], Definition).

[F4] For a compact knot exterior, an inclusion-minimal JSJ system is unique up to ambient isotopy ([[thm-jsj-decomposition-of-knot-exteriors]], Statement).

## Proof

1.1 By [F2], $T_c$ is incompressible. The hypothesis on the two cut components and [F3] show that the singleton family $\{T_c\}$ is a JSJ system. The empty family is not a JSJ system because its sole cut component is $M$, which by hypothesis is neither atoroidal nor Seifert-fibered. Thus $\{T_c\}$ is inclusion-minimal. [A1, F1, F2, F3, given, construct]

2.1 Apply [F4] to the minimal system $\{T_c\}$. It follows that the unique minimal system consists of one torus ambient isotopic to $T_c$. The decomposition of the satellite exterior in [F1] shows that the side inside the companion solid torus is the pattern exterior and the outside side is exactly $E_K$. The ambient isotopy supplied by [F4] is jointly smooth and starts at the identity. Apply its final diffeomorphism to the cut decomposition: it carries the original outside component $E_K$ to the corresponding outside component for the isotopic torus. The boundary of $M$ remains on the pattern side, so the component labels are unambiguous. [F1, F4, step 1.1, construct] ∎


<!-- ex-knot-kt-17-worked-cases -->
---
id: ex-knot-kt-17-worked-cases
kind: example
title: "A (2,1)-cable of the right trefoil"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-satellite-pattern-companion-and-winding-number
  - def-incompressibility-seifert-fibration-and-jsj-system
  - def-coprime-torus-knot
  - thm-torus-knot-group-presentation
  - lem-satellite-torus-is-essential
  - lem-knot-exterior-is-irreducible
  - lem-seifert-boundary-fibers-are-rigid-under-nonexceptional-free-product-quotients
  - lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal
  - thm-jsj-decomposition-of-knot-exteriors
  - cor-satellite-companion-is-detected-by-jsj
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
  - thm-classification-of-compact-connected-surfaces
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - lem-nonexceptional-finite-free-products-have-no-normal-cyclic-subgroup
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the torus-knot group/peripheral supplier and the satellite-companion theorem; its countable-choice consequence is used by the knot-exterior irreducibility supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§4, cable knots, JSJ companions, and companionship graphs, PDF pp.18–21"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "§§5.1–5.2, torus knots, Seifert fibers, and peripheral words"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, essential annuli and tori in Seifert pieces, printed pp.16–23"
---

## Example

Assume full AC. In the standard solid torus $V=S^1\times D^2$, let $P_{2,1}$ be the oriented curve $s\mapsto(e^{4\pi i s},r e^{2\pi i s})$ on an interior parallel torus, where $0<r<1$. Let $K=T(2,3)$ be the right trefoil and use the companion embedding that matches the product meridian and longitude of $V$ to the positive meridian and preferred longitude of $K$. Then the companion torus in the exterior of $P_{2,1}(K)$ is essential and satisfies the nonamalgamation hypotheses of the companion-detection corollary; its outside piece is exactly the trefoil exterior.

The first panel shows a lift of the pattern to the universal cover of the parallel torus: horizontal and vertical unit translations correspond to longitude and meridian, so the segment from $(0,0)$ to $(2,1)$ projects to the closed slope $2\lambda_V+\mu_V$. The second panel shows the exterior cut along the companion torus; its boxes are pieces, and the labels are the two regular-fiber slopes induced on their common torus. Both panels are schematic, not planar knot projections, and no proof step depends on them.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),scale=.82]
  % Lift of the pattern to two longitude periods and one meridian period.
  \draw (0,0) rectangle (2.2,1.1);
  \draw[densely dashed] (1.1,0) -- (1.1,1.1);
  \draw[->,very thick] (0,0) -- (2.2,1.1);
  \node[above] at (1.1,1.1) {two longitude periods};
  \node[left] at (0,.55) {one meridian period};
  \node[below] at (1.1,0) {$2\lambda_V$};
  \node[above left] at (0,0) {start};
  \node[above right] at (2.2,1.1) {same point in $T^2$};
  \node at (1.1,-.45) {slope $2\lambda_V+\mu_V$};

  % The JSJ cut: the shared vertical edge represents the companion torus.
  \draw (3.5,0) rectangle (4.9,1.1);
  \draw (4.9,0) rectangle (6.3,1.1);
  \node at (4.2,.72) {$E_K$};
  \node at (4.2,.36) {$f_K=\lambda+6\mu$};
  \node at (5.6,.72) {$X_{P_{2,1}}$};
  \node at (5.6,.36) {$f_P=2\lambda+\mu$};
  \node[above] at (4.9,1.1) {$T_c$};
  \node[below] at (5.6,0) {$\partial E_{P_{2,1}(K)}$};
  \node at (4.9,-.45) {cut and glue along $T_c$};
\end{tikzpicture}
```

## Example references

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

[Alessia Cattabriga and Stefano Francaviglia, *Knot Theory and Applications: Lecture Notes*](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

## Facts & Assumptions

**Given:** Full AC, the standard solid torus $V$, the pattern $P_{2,1}$, the right trefoil $K=T(2,3)$, and the specified companion embedding.

[F1] The pattern and satellite exteriors, winding number, and companion torus have the conventions of [[def-satellite-pattern-companion-and-winding-number]].

[F2] The torus-knot supplier gives $\pi_1(E_{T(p,q)})=\langle x,y\mid x^p=y^q\rangle$, identifies $h=x^p=y^q$ as the regular fiber, and gives $\lambda=h\mu^{-pq}$ ([[thm-torus-knot-group-presentation]], Statement).

[F3] Seifert–van Kampen computes the group of a union from the open collar covers used below ([[thm-seifert-van-kampen]], Statement).

[F4] The normal form theorem gives reduced-word uniqueness in the free products $\mathbb Z*C_2$ and $C_2*C_3$ ([[thm-normal-form-for-free-products-with-amalgamation]], Statement, with trivial amalgam).

[F5] The closed compact connected surface classification identifies their polygonal models, orientability and Euler characteristic ([[thm-classification-of-compact-connected-surfaces]], Statement).

[F6] A two-sided essential torus in an irreducible Seifert-fibered manifold is isotopic to a vertical or horizontal torus; horizontal tori cut the manifold into interval bundles ([[lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal]], Statement).

[F7] Under the stated pattern and nontrivial-companion hypotheses, the companion torus is incompressible and non-boundary-parallel ([[lem-satellite-torus-is-essential]], Statement).

[F8] An irreducible satellite exterior with this torus, Seifert or atoroidal sides, and no global Seifert or atoroidal structure has that torus in its unique minimal JSJ system ([[cor-satellite-companion-is-detected-by-jsj]], Statement, using the full smooth uniqueness proof in [[thm-jsj-decomposition-of-knot-exteriors]]).

[F9] If a Seifert piece has an injective boundary torus and its quotient by the cyclic regular-fiber subgroup is a nonexceptional finite free product, every Seifert fibration has the same regular-fiber slope on that torus ([[lem-seifert-boundary-fibers-are-rigid-under-nonexceptional-free-product-quotients]], Statement).

[A1] Full AC is the axiom that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[F10] Compact smooth surfaces with boundary have finite compatible triangulations ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Statement, dimension two).

[F11] A free product of two infinite cyclic groups has no nontrivial cyclic normal subgroup, hence has trivial center ([[lem-nonexceptional-finite-free-products-have-no-normal-cyclic-subgroup]], Statement).

## Proof

1.1 The circle action $t\cdot(z,w)=(e^{4\pi i t}z,e^{2\pi i t}w)$ on $S^1\times D^2$ has generic orbit slope $2\lambda_V+\mu_V$. The given pattern is one such orbit. The core $S^1\times\{0\}$ has stabilizer of order $2$, while generic points have trivial stabilizer. Removing a tube about the regular orbit $P_{2,1}$ therefore gives a Seifert fibration of $X_{P_{2,1}}$ over an annulus with one exceptional point of multiplicity $2$. On the outer torus its regular-fiber slope is $2\lambda_V+\mu_V$. [A1, F1, given, construct]

1.2 Remove a small neighborhood of the exceptional point from the annulus base. The remaining pair of pants has fundamental group freely generated by a loop $a$ around the outer boundary and a loop $c$ around the removed cone point; its third boundary loop is $(ac)^{-1}$. The circle bundle over this pair of pants has a section: it retracts to a graph, and a section over that graph is obtained by choosing one point in the fiber at the vertex and extending over each edge. Thus its group has generators $a,c,h$, with $h$ the fiber and $[a,h]=[c,h]=1$. The order-two local model $(z,w)\mapsto(-z,-w)$ around the exceptional core identifies the filled meridian with $c^2h$ after replacing $c$ by $ch^k$ if necessary: one circuit of the cone-point boundary lifts from $(z,w)$ to $(-z,-w)$, so two circuits equal one inverse fiber turn, and the twisting coefficient is odd. Filling that neighborhood kills this meridian. By [F3],
$$
\pi_1(X_{P_{2,1}})=\langle a,c,h\mid [a,h]=[c,h]=1,\ c^2h=1\rangle.
$$
Its quotient by $\langle h\rangle$ is $\mathbb Z*C_2$, which is nonabelian by reduced normal forms [F4]; hence $X_{P_{2,1}}$ is not $T^2\times I$. Its outer boundary subgroup is generated by $a,h$. The abelianization is free on $[a],[c]$ with $[h]=-2[c]$, so $a^m h^n=1$ implies $m=0$ and $n=0$. Thus the outer torus group injects into $\pi_1(X_{P_{2,1}})$ and has no compressing disk. [F1, F3, F4, step 1.1, algebra, construct]

1.3 For the trefoil, [F2] gives $\pi_1(E_K)=\langle x,y\mid x^2=y^3\rangle$ and regular fiber $h_K=x^2=y^3$. Its quotient by $\langle h_K\rangle$ is $C_2*C_3$, nonabelian by [F4], and $h_K$ is infinite because its abelianization is $6$ times the generator of $H_1(E_K)\cong\mathbb Z$. The group maps onto $S_3$ by $x\mapsto(12)$ and $y\mapsto(123)$, so it is nonabelian and $K$ is not the unknot, whose exterior group is $\mathbb Z$. [F2, F4, A1, algebra]

2.1 The peripheral formula in [F2] gives $h_K=\lambda_K+6\mu_K$. The companion embedding identifies $(\mu_V,\lambda_V)$ with $(\mu_K,\lambda_K)$. Therefore the two Seifert fibrations on the cut sides induce slopes $2\lambda+\mu$ and $\lambda+6\mu$ on the companion torus. Their determinant in the ordered basis $(\mu,\lambda)$ is $\det\begin{pmatrix}1&6\\2&1\end{pmatrix}=-11$, so the slopes are not parallel. [F1, F2, step 1.1, algebra]

2.2 By [F7], the companion torus $T_c$ is essential. Hence the whole exterior $M=E_{P_{2,1}(K)}$ is not atoroidal. Both pieces cut along $T_c$ are Seifert-fibered by steps 1.1 and 1.3. [F1, F2, F7, step 1.1, step 1.3]

2.3 The horizontal case is impossible. The interval-bundle bases inherit smooth transverse charts from the horizontal surface and the fiber charts. For any such compact connected surface with nonempty boundary, [F10] gives a finite triangulation. Root a spanning tree of its triangle-adjacency graph at a boundary edge. Delete each triangle across its exposed parent edge, starting at the root; this collapses the surface to a finite connected graph. Its group is therefore free, with rank equal to the rank of its abelianization, by collapsing a graph spanning tree. For a closed surface, the polygon models of [F5] give abelianization $\mathbb Z^{2g}$ in the orientable genus $g$ case and $\mathbb Z^{k-1}\oplus\mathbb Z/2$ in the nonorientable genus $k$ case, by adding the signed edge occurrences in its single face word. Hence a compact surface group with torsion-free rank-two abelianization is either the torus group $\mathbb Z^2$ or the free group of rank two; with torsion-free rank-one abelianization it is infinite cyclic. The cable group has abelianization $\mathbb Z^2$, is nonabelian because its quotient is $\mathbb Z*C_2$, and has the nonidentity central element $h$ since $[h]=-2[c]$ in its abelianization. It is neither $\mathbb Z^2$ nor the free group of rank two, whose center is trivial by [F11]. The trefoil group has abelianization $\mathbb Z$ and is nonabelian by step 1.3, so it too is not a surface group with that abelianization. Thus neither cut piece can be an interval bundle over a surface. [F2, F4, F5, F10, F11, step 1.2, step 1.3, algebra, contradiction]

3.1 Suppose $M$ had a Seifert fibration. It is irreducible by [[lem-knot-exterior-is-irreducible]], so [F6] makes $T_c$ ambient isotopic to a vertical or horizontal torus. Isotopy preserves the homeomorphism types of the cut pieces. In the horizontal case, cutting along $T_c$ gives interval bundles over compact connected surfaces, so each side group is a surface group. [F2, F6, step 1.2, step 1.3, step 2.1, construct]

4.1 Suppose instead that $T_c$ is vertical after isotopy. Pull the hypothetical fibration back by that ambient isotopy, so the original $T_c$ is vertical and the original cut-piece markings are retained. Restriction gives a Seifert fibration on each cut piece with one common regular-fiber slope on $T_c$. Their boundary groups inject independently of any general knot-boundary incompressibility theorem. For the cable side this was proved in step 1.2. For the trefoil side, the peripheral formula of [F2], with $2(-1)+3(1)=1$, gives $\mu=y^{-1}x$ and $\lambda=h_K\mu^{-6}$. Thus $(\mu,h_K)$ is also a basis for its boundary-torus group. In the quotient $C_2*C_3$ the word $y^{-1}x$ is cyclically reduced of length two, so all its nonzero powers are nonidentity by [F4]. If $\mu^a h_K^b=1$, quotienting forces $a=0$, and the infinite order of $h_K$ from step 1.3 forces $b=0$. This proves injectivity of that boundary group. The two original fiber quotients are $\mathbb Z*C_2$ and $C_2*C_3$, respectively, by steps 1.2 and 1.3; neither is the two-order-two exception. Apply [F9] separately to the restricted hypothetical fibration on each side. Its common boundary-fiber slope must equal both original slopes, contradicting their determinant $-11$ in step 2.1. This rules out the vertical case; together with step 2.3 it proves that $M$ is not Seifert-fibered. [F2, F4, F9, step 1.2, step 1.3, step 2.1, step 3.1, step 2.3, algebra, contradiction]

5.1 Steps 2.2 and 4.1 verify the nonamalgamation hypotheses of [F8], so the companion torus is a JSJ torus and the component outside the companion solid torus is $E_K$. The smooth ambient uniqueness in [F8] carries the original marked outside component to the outside component for any isotopic minimal JSJ torus. [F1, F8, step 2.2, step 4.1] ∎
