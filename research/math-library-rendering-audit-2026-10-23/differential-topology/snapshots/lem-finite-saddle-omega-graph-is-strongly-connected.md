---
id: lem-finite-saddle-omega-graph-is-strongly-connected
kind: lemma
title: "A finite saddle omega-graph is strongly connected and is a finite union of polycycles"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit, lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary, def-countable-choice-principle-for-foliation-pair, lem-c1-euclidean-maximal-flow-with-c2-upgrade, lem-c2-saddle-function-has-c1-morse-coordinates, thm-heine-borel-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 3
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "§6, printed pp. 16-19 (center and separatrix frontier loops); the finite-graph strong connectivity argument is proved locally here"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a $C^2$
cooriented codimension-one foliation and let $h:D^2\to M$ be a characteristic
disk in the relative generic position of
[[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]].
Let $X$ be its planar characteristic vector field. Let $U\subseteq\mathbb R^2$
be an open neighborhood of the disk and let $Y:U\to\mathbb R^2$ be a $C^1$
field with $Y=X$ and $DY=DX$ on $\Gamma$. Assume the positive orbit of $y$ has
compact closure $K_0\Subset U$, $\Gamma=\omega_Y^+(y)$ contains at least one
equilibrium, all equilibria in $\Gamma$ are nondegenerate characteristic
saddles of $X$, and $\Gamma$ separates two specified points of the plane. Then
$\Gamma$ is a finite embedded directed multigraph: its vertices are those
saddles and its edges are closures of distinct nonconstant trajectories with
saddle alpha- and omega-limits. The directed graph is strongly connected.
Consequently every edge lies in a closed directed edge walk, and finitely many
such walks cover $\Gamma$; a closed directed edge walk is allowed to repeat
vertices and is called a directed saddle polycycle here.

## Facts & Assumptions

**Given:** A $C^2$ cooriented codimension-one foliation, a characteristic disk map $h$ in relative generic position, its planar characteristic field $X$, a $C^1$ field $Y$ on a neighborhood $U$ of the disk with $Y=X$ and $DY=DX$ on $\Gamma$, and a positive orbit with compact closure $K_0\Subset U$ and $\omega$-limit $\Gamma$ whose equilibria are finitely many nondegenerate characteristic saddles of $X$.

[F1] Let $Y$ be $C^1$ on an open $U\subseteq\mathbb R^2$ and let $\mathcal O^+(y)$ have compact closure $K_0\Subset U$ with $K=\omega^+(y)$ containing only finitely many equilibria. Then either $K$ is a singleton equilibrium, or $K$ is one regular periodic orbit, or $K$ is a finite set $E$ of equilibria together with at least one regular trajectory, and every regular point of $K$ lies on a nonconstant trajectory whose alpha- and omega-limit sets are points of $E$ ([[lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit]]).

[F2] A $C^2$ function on the plane with a nondegenerate indefinite Hessian at $p$ has $C^1$ coordinates centered at $p$ in which it equals $xy$ ([[lem-c2-saddle-function-has-c1-morse-coordinates]]).

[F3] A $C^1$ Euclidean field has a unique maximal flow that is jointly $C^1$, its time slices are injective, each regular point has a $C^1$ flow box, a trajectory remaining in a compact subset of the domain has no finite maximal endpoint, and trajectories are $C^2$ in time ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F4] In relative generic position the characteristic singularities of the disk map are finitely many nondegenerate points in the interior of $D^2$, each a center or a saddle ([[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]]).

[F5] The standing assumption of the pair is Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]).

[F6] Closed and bounded subsets of $\mathbb R^2$ are compact; a nested decreasing family of nonempty compact subsets has nonempty intersection; a continuous real function on a nonempty compact set attains its maximum and minimum ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 At a saddle $q\in\Gamma$ use the $C^1$ coordinates of [F2] in which the local transverse function of the disk map is $u=xy$; writing the pulled-back area form as $\mu=m\,dx\wedge dy$ with $m$ continuous and positive and the characteristic covector as $\beta=a\,du$ with $a$ continuous and nonzero, the field is $X=(a/m)(x\partial_x-y\partial_y)$; replacing $(x,y)$ by $(y,x)$ if necessary (which changes $x\partial_x-y\partial_y$ to its negative) makes the coefficient $c(x,y)>0$, continuous on a smaller compact chart, and then $\dot x=cx$, $\dot y=-cy$ give two incoming half-branches (both $y$-axis rays) and two outgoing half-branches (both $x$-axis rays) with exponential rate bounds $|{\rm coord}(t)|\in[r_0e^{-c_+t},r_0e^{-c_-t}]$ for the contracting branch and the reciprocal bounds for the expanding branch on the compact chart; since $Y=X$ on $\Gamma$, every edge of $\Gamma$ through $q$ follows one of these four half-branches, and by uniqueness of [F3] each half-branch is contained in exactly one maximal trajectory, so at most two edges leave each vertex and there are at most twice as many edges as vertices. [given, F2, F3, F4]

2.1 Every regular point of $\Gamma$ lies on a maximal trajectory whose alpha- and omega-limits are saddle points of $\Gamma$: since a singleton does not separate two points of the plane, alternative (i) of [F1] fails; alternative (ii) fails because $\Gamma$ contains the given equilibrium; hence alternative (iii) holds; each such maximal trajectory is contained in $\Gamma$ by invariance and closedness of $\Gamma$, has no interior equilibrium by uniqueness [F3], and its closure is one of the edge closures of step 1.1, so the edge closures together with the saddle vertices exhaust $\Gamma$, distinct edges meet only at common saddle endpoints, and the four half-branches at each saddle give the local embedded-graph structure. [step 1.1, F1, F3]

3.1 With exact endpoints, $\Gamma$ is internally chain-transitive: fix $p,q\in\Gamma$, $\epsilon>0$ and $T>0$; by joint continuity of the flow [F3] on the compact set $K_0$ and the time interval $[T,2T]$, choose $\delta\in(0,\epsilon/3)$ so that $\delta$-close points have $\epsilon/3$-close images throughout $[T,2T]$; since $\Gamma=\omega^+(y)$ and the orbit tail approaches $\Gamma$ uniformly, choose $s$ so late that $\Phi_u(y)$ is within $\delta$ of $\Gamma$ for all $u\ge s$, then choose $s$ with $\Phi_s(y)$ within $\delta$ of $p$ and $t>s+2T$ with $\Phi_t(y)$ within $\delta$ of $q$; write $t-s-T=N\tau$ with an integer $N\ge1$ and $\tau\in[T,2T]$; the finitely many intermediate orbit points $\Phi_{s+T+k\tau}(y)$, $0\le k<N$, lie within $\delta$ of $\Gamma$, so finitely many nearby points $z_k\in\Gamma$ exist, and $x_0=p$, $x_1=z_0$, ..., $x_N=z_{N-1}$, $x_{N+1}=q$ together with the times $T,\tau,\dots,\tau$ form an $(\epsilon,T)$-chain because each flowed image is within $\epsilon/3$ of the next orbit point and each jump is at most $\epsilon/3+\delta<\epsilon$. [step 2.1, F1, F3]

4.1 The directed graph is strongly connected: $\Gamma$ is connected, being the intersection of the decreasing family of the connected closures of the orbit tails, since a separation of $\Gamma$ into disjoint nonempty compact pieces has positive distance and would force a sufficiently late tail closure, which is connected, into a neighbourhood of one piece and away from the other [F6]; if the graph had more than one strongly connected component, its finite condensation would have a proper terminal component $S$, and if no edge entered $S$ from outside then no edge would leave it either, so the compact carriers of $S$ and of its complement would express the connected $\Gamma$ as two disjoint nonempty closed sets, which is impossible; hence some edge enters $S$, and the compact set $N$ consisting of the vertices of $S$, all edges internal to $S$ and a short terminal segment of every entering edge with a trimming point in its regular part satisfies $S\subseteq\operatorname{int}_\Gamma N$ with no edge leaving $S$; points of $N$ flow strictly toward $S$ and never reach a saddle in finite time by uniqueness [F3], so $\Phi_t(N)\subseteq N$ for $t\ge0$ and $\Phi_T(N)\subseteq\operatorname{int}_\Gamma N$, whence $\delta_0:=\operatorname{dist}(\Phi_T(N),\Gamma\setminus\operatorname{int}_\Gamma N)>0$ by [F6]; a chain with $\epsilon<\delta_0$ starting at a point of $S$ stays in $N$ by induction, because $\Phi_t(N)\subseteq\Phi_T(N)$ for $t\ge T$ and a jump of size less than $\delta_0$ cannot leave the $\delta_0$-neighbourhood of $\Phi_T(N)$; choosing the terminal point $q$ in the omitted middle part of an entering edge gives $q\notin N$, contradicting the exact-endpoint chain transitivity of step 3.1, so all vertices lie in one strongly connected component. [step 2.1, step 3.1, F3, F6]

5.1 Consequently, for each directed edge $e:v\to w$ strong connectivity supplies a directed path from $w$ back to $v$, and adjoining $e$ gives a closed directed edge walk containing $e$ and repeating vertices only as allowed; there are finitely many edges by step 1.1, so finitely many such walks cover $\Gamma$; the construction used only finitely many points and paths of a finite graph plus the finite flow-box and compactness arguments, hence no choice principle, so the statement holds and its standing $\mathrm{AC}_\omega$ hypothesis is not invoked. [step 4.1, F5] ∎
