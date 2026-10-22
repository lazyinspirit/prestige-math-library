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
