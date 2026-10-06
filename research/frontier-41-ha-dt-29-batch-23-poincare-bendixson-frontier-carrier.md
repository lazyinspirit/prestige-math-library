# Finite-saddle period-frontier carrier: independent audit

Run: `frontier-41-ha-dt-29`. Research memo only; no canonical item, manifest,
receipt, ledger, or controller state was changed.

## Finding

The direct compact-section argument in the batch23 item does not by itself
classify the frontier when a return time tends to infinity. A useful way to
close that exact gap is to realize the original period-annulus frontier as the
omega-limit set of a *modified* planar field that agrees with the
characteristic field on the frontier. Add an arbitrarily small positive drift
across the periodic leaves, taper it to zero at the outer frontier, and slow it
enough that one trajectory makes infinitely many turns while its leaf
parameter tends to the outer endpoint. The full generalized
Poincaré–Bendixson theorem then applies to this one trajectory. Its omega-limit
set is exactly the original frontier, so the theorem's saddle-connection
classification is transferred back to the original field, which is unchanged
on that frontier.

This route appears to close the finite-center/hyperbolic-saddle exhaustion
without adding a full-AC Jordan–Brouwer dependency. It does require local
carriers for (a) the product coordinate on a period annulus, (b) a C¹-flat
transverse drift on its outer end, and (c) planar separation for the
piecewise-smooth Jordan curves used in the Poincaré–Bendixson proof. Those are
specific proof obligations, not an unresolved dynamical classification. The
drift construction below gives explicit inequalities for the delicate
unbounded-time case.

## Full source audited

Gerald Teschl, *Ordinary Differential Equations and Dynamical Systems*,
American Mathematical Society, Graduate Studies in Mathematics 140 (2012),
author-hosted complete preliminary version, made available with AMS permission:
<https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf>. The downloaded
file was 4,133,331 bytes, SHA-256
`362433156525216abf596c17ce843204510e96d57afa4284a37c7aa5a9ffc36e`.

The complete relevant discussion is §7.3, printed pp. 220–225. The target is
Theorem 7.16, “generalized Poincaré–Bendixson,” printed pp. 223–224. Its exact
hypotheses are: an open $M\subseteq\mathbb R^2$, a $C^1$ field
$f:M\to\mathbb R^2$, a sign $\sigma\in\{+,-\}$, and a nonempty compact,
connected $\omega^\sigma(x)$ containing only finitely many fixed points.
It concludes that the limit set is either a single fixed point, a regular
periodic orbit, or finitely many fixed points together with nonclosed orbits
whose two one-sided limit sets are among those fixed points.

The proof is not just a citation to the no-critical-points version. Teschl
proves the needed pieces in the same section:

- Lemma 7.9 (printed p. 221) proves monotonicity of the successive crossings
  of a single semiorbit with a transversal, using a Jordan curve formed by one
  orbit segment and a section interval.
- Corollary 7.10 (p. 222) shows an omega-limit set meets any transversal arc
  in at most one point. This is the step that rules out unbounded recurrent
  returns to a regular section point.
- Corollary 7.11 and Lemma 7.13 show that, with no fixed point in the limit
  set, the limit set is a regular periodic orbit.
- Lemma 7.14 shows that a connected omega-limit set containing a regular
  periodic orbit is that orbit alone.
- Lemma 7.15 (pp. 222–223) uses planar separation to show there is at most one
  orbit in the omega-limit set joining any specified pair of distinct fixed
  points.
- Theorem 7.16 then proves the finite-equilibrium alternative. Its proof
  treats a regular point in the omega-limit set: if either one-sided limit
  set contained a regular point, the transversal-crossing result would force
  the orbit to be periodic, contradicting the coexistence of fixed points.
  Thus every regular orbit in case (iii) has fixed-point alpha and omega
  limits.

Teschl does not claim the connecting-orbit family in case (iii) is finite.
Immediately after Theorem 7.16 he warns that multiple, even infinitely many,
connections to the same fixed point may occur and gives an example (printed
p. 225). Thus one cannot infer a finite graph from Theorem 7.16 alone. Here
finiteness comes only after centers are excluded and every equilibrium on the
frontier is shown to be a hyperbolic saddle.

The theorem concerns the omega-limit set of one trajectory. It cannot be
applied directly to the original frontier: every original trajectory in the
period annulus is periodic, and the frontier need not itself be an omega-limit
set of an original trajectory. The transverse-drift construction below is the
bridge.

Teschl's proof uses planar separation only for curves assembled from finitely
many smooth orbit and section arcs. In this application, saddle connections
have hyperbolic endpoints; stable-manifold charts show that their closures
are finite-length $C^1$ arcs after reparameterization. The needed special
separation lemma can be proved locally with the same crossing-parity argument
as the polygonal Jordan theorem. A compact piecewise-$C^1$ embedded loop with
finitely many corners has a finite tubular-chart cover along its regular
pieces and small sector disks at its corners. These give connected left- and
right-side networks along the whole loop. Choose a generic polygonal path
between two points off the loop. By Sard's theorem for the finitely many
coordinate projections, it can be chosen to meet the loop finitely and
transversely and to avoid its corners. Crossing parity is locally constant
off the loop. If the endpoints have equal parity, pair successive crossings
and replace the intervening path pieces by routes in the appropriate side
network. Thus each parity class is path connected, the two classes are
nonempty, and both have the loop as frontier. This proves the only Jordan
separation case used here by finitely many chart choices and at most a
countable sequence of generic choices. It avoids
thm-jordan-brouwer-separation, whose current dependency list includes full
AC; Jordan–Schönflies is not needed.

For clarity, the exact generalized limit-set conclusion used below can be
proved locally rather than imported as an unproved prerequisite.

> **Local generalized Poincaré–Bendixson carrier.** Let $f$ be a $C^1$
> planar field and let $x$ have a precompact positive orbit. Put
> $K=\omega^+(x)$ and assume $K$ contains finitely many equilibria. Then
> $K$ is a singleton equilibrium, a regular periodic orbit, or consists of
> finitely many equilibria together with regular trajectories whose alpha-
> and omega-limit sets are equilibria. In this last alternative the family
> of connecting trajectories need not be finite without additional
> hypotheses.
>
> **Proof.** Write $K=\bigcap_{n\ge1}\overline{\{\Phi_t(x):t\ge n\}}$.
> The tail closures are nested nonempty compact connected sets, so $K$ is
> nonempty, compact, and connected. Flow continuity and shifting the tail
> times show that $K$ is invariant. If $x$ is an equilibrium, then
> $K=\{x\}$. If $x$ is a nonconstant periodic point, then $K$ is its regular
> periodic orbit. Otherwise, fix a compact transversal interval
> $\Sigma$ through a regular point. Compactly many flow boxes along $\Sigma$
> give a positive lower bound on the time between successive crossings
> accumulating in $\Sigma$, so crossings cannot accumulate at finite time.
> The successive crossings of any one nonperiodic orbit with $\Sigma$ are
> strictly monotone in the interval order: for consecutive
> crossings $p_j,p_{j+1}$, the intervening orbit arc and the subinterval
> $[p_j,p_{j+1}]$ form a piecewise-smooth Jordan curve. Uniqueness prevents
> the orbit from crossing its own arc; the vector field crosses the section
> interval consistently. Jordan separation therefore traps the next
> crossings on the same side, so the crossing coordinates are monotone.
> Reversing the order of the first pair reverses monotonicity. If the orbit
> repeats a crossing, uniqueness makes it periodic.
>
> Every point of $K\cap\Sigma$ is a limit of crossings of the original
> orbit: use a flow box to move each sufficiently close late orbit point to
> $\Sigma$ by a uniformly bounded time. The monotone-crossing conclusion
> gives $|K\cap\Sigma|\le1$. Now take a regular $y\in K$. If either
> $\omega^+(y)$ or $\omega^-(y)$ contains a regular point $z$, the
> corresponding semiorbit of $y$ crosses a section through $z$ infinitely
> often. All those crossings lie in $K$ and hence equal its unique section
> point; a repeated crossing makes $y$ periodic. A connected invariant
> $K$ containing a periodic orbit is that orbit alone: otherwise
> connectedness supplies points of $K$ arbitrarily close to the orbit;
> flowing them to a local transversal puts a second point of $K$ on that
> transversal. Thus, if $K$ also contains an equilibrium, neither
> one-sided limit set of a regular $y$ can contain a regular point. Each
> one-sided limit set is nonempty, compact, connected, and contained in the
> finite equilibrium set, so it is one equilibrium. If $K$ has no
> equilibria, choose any $y\in K$ and a regular point in
> $\omega^+(y)$; the same crossing argument makes $y$ periodic and hence
> $K$ is that periodic orbit. If $K$ has no regular points, connectedness
> makes it a single equilibrium. These are exactly the three alternatives.
> [flow boxes; compact tail-limit lemma; uniqueness; the local
> piecewise-smooth Jordan separation lemma]

This reproduces the core of Teschl's Theorem 7.16 for the precompact
positive orbit used here. His Lemma 7.15 on uniqueness of connections between
distinct equilibria is unnecessary for this carrier: hyperbolic saddle
branch count supplies finiteness.

## Carrier for the period-annulus frontier

Let $X$ be the $C^1$ characteristic field on a neighborhood of the
compact disk, with finitely many nondegenerate centers and hyperbolic saddles.
Let $A$ be the maximal connected period annulus around a chosen center, and
let $C_s$, $s_0<s<1$, be its nested periodic leaves, oriented consistently.
Write $\Gamma$ for their outer frontier in the disk.

The argument uses the standard period-annulus product structure, which can be
proved locally as follows. Each compact leaf has identity holonomy because
the local return map fixes an interval of periodic points. Flow boxes and the
implicit-function theorem therefore give product charts $S^1\times I$ on
the annulus. The local product neighborhoods make the leaf space locally an
interval. Distinct leaves are nested Jordan curves, so disjoint saturated
product neighborhoods separate any two leaves; the leaf space is Hausdorff.
It is a connected second-countable one-manifold. It cannot be a circle:
a circle bundle over a circle is a torus or a Klein bottle, whereas $A$ is
an annulus.
Thus the leaf space is an open interval. Trivializing over that interval
gives a smooth map
\[
  \Psi:S^1\times(s_0,1)\longrightarrow A,
  \qquad \Psi(S^1\times\{s\})=C_s,
\]
and a phase coordinate $\theta\in\mathbb R/\mathbb Z$ in which
\[
  X=a(s,\theta)\,\partial_\theta,\qquad a(s,\theta)>0.
\]
All of this is on the open annulus; no regularity of $\Gamma$ is assumed.

Let $D_s$ be the bounded Jordan domain enclosed by $C_s$, and put
$U=\bigcup_{s_0<s<1}\operatorname{int}(D_s)$. The nested domains increase
with $s$, and the outer boundary of $U$ is $\Gamma$:
\[
  d_H(C_s,\Gamma)\longrightarrow0\quad(s\uparrow1).
\]
For completeness, the two Hausdorff inclusions are elementary once the
piecewise-smooth Jordan separation fact is available. A cluster point of
points on $C_s$ lies in the closure of the union of the bounded domains; it
cannot be in the union, because any fixed earlier domain stays a positive
distance inside all later boundary curves. Hence it is in $\Gamma$. In the
other direction, for $p\in\Gamma$, take points $y$ of the union
arbitrarily close to $p$. For every later $C_s$, $y$ is inside its
bounded Jordan domain while $p$ is outside; the segment $[y,p]$ crosses
$C_s$ within $|y-p|$ of $p$. Compactness of the disk makes both
estimates uniform over $p\in\Gamma$.
The center lies in $U$, while a point $e$ outside the disk lies outside
$\overline U$. Every path from the center to $e$ meets $\partial U=\Gamma$.
In particular, $\Gamma$ is not a singleton, since the plane minus one point
is path connected.

Choose an outer collar $A_0=\Psi(S^1\times(s_1,1))\subset A$, with
$s_1>s_0$. Define
\[
  m(s)=\min_{\theta\in S^1}a(s,\theta)>0,
  \qquad
  L(s)=\max_{\theta\in S^1}\|\partial_s\Psi(s,\theta)\|.
\]
These are finite continuous functions on every compact subinterval of
$(s_1,1)$. Choose a smooth function $b:(s_1,1)\to(0,\infty)$ satisfying
\[
  b(s)\le (1-s)^2,
  \qquad
  b(s)\le \frac{(1-s)^2m(s)}{1+L(s)},
\]
and such that $V=b(s)\partial_s$ extends by zero across $\Gamma$ as a
$C^1$ field with $DV|_\Gamma=0$. The band construction can be made choice-free. Set
\[
  \tau(s)=\log\frac{1-s_1}{1-s}\in(0,\infty).
\]
For the first band, evaluate $q$ and $W$ at $s_1$ using their smooth
extensions from the larger annulus; $s_1>s_0$ ensures this is inside the
product chart.
Use the fixed smooth bump
\[
  \eta(t)=
  \begin{cases}
    \exp\!\left(-\frac{1}{1-t^2}\right),&|t|<1,\\
    0,&|t|\ge1.
  \end{cases}
\]
It is supported in $[-1,1]$ and strictly positive on $[-1/2,1/2]$. For
$n\ge0$, define
\[
  \rho_n(s)=
  \frac{\eta(\tau(s)-n-\tfrac12)}
       {\sum_{j\ge0}\eta(\tau(s)-j-\tfrac12)}.
\]
The denominator is positive, the sum is locally finite, and the supports
have uniformly finite overlap. Put
\[
  B_n=\Psi(S^1\times\operatorname{supp}\rho_n),\quad
  q_n=\min_{\operatorname{supp}\rho_n}q(s)>0,\quad
  d_n=\operatorname{dist}(B_n,\Gamma)>0.
\]
Let $M_n=1+\sup_{z\in B_n}(|\rho_nW(z)|+\|D(\rho_nW)(z)\|)$, where
$W=\Psi_*(\partial_s)$ is viewed as an ambient vector field. These minima
and suprema are uniquely defined real numbers on compact sets. Now set
\[
  c_n=2^{-n-1}\min\left\{q_n,\frac{d_n}{M_n}\right\},
  \qquad
  b_0(s)=\sum_{n\ge0}c_n\rho_n(s).
\]
Then $b_0$ is smooth, positive, and $b_0(s)\le q(s)$. The ambient fields
$V_n=c_n\rho_nW$ satisfy
\[
  \|V_n\|_{C^1(B_n)}\le2^{-n-1}d_n,\qquad
  |V_n(z)|\le2^{-n-1}\operatorname{dist}(z,\Gamma).
\]
As points approach $\Gamma$, all active band indices tend to infinity;
uniformly finite overlap therefore gives $V=\sum_nV_n\to0$,
$DV\to0$, and $|V(z)|/\operatorname{dist}(z,\Gamma)\to0$. Extending $V$
by zero is $C^1$ with derivative zero on $\Gamma$. Finally multiply $b_0$
by one fixed smooth cutoff $\chi$ that is flat at $s_1$, positive for
$s>s_1$, and equal to one for $s$ sufficiently close to $1$. This preserves
the displayed upper bounds and makes the extension by $X$ smooth at the
inner edge of the collar. The formula uses no selection from countably many
nonempty sets; the countable coefficients are defined by explicit minima
and suprema. The usual compactness/omega-limit arguments elsewhere may use
the run's permitted $\mathrm{AC}_\omega$, but the flat drift itself does not.

On the collar set
\[
  Y=X+V.
\]
Extend $Y=X$ off $A_0$. The flatness gives a $C^1$ extension across
$\Gamma$, with $Y=X$ and $DY=DX$ there. Since $ds(X)=0$ and
$ds(Y)=b(s)>0$ on $A_0$, $Y$ has no zero in the collar. Outside it,
$Y=X$. Thus $Y$ has no new equilibria, retains the original finite
critical set, and agrees with $X$ (including first derivative) on
$\Gamma$.

Take a $Y$-trajectory starting at $s=s_2>s_1$. In the product
coordinates,
\[
  \dot s=b(s)>0,\qquad \dot\theta=a(s,\theta)>0,
  \qquad
  0<\frac{ds}{d\theta}=\frac{b(s)}{a(s,\theta)}
       \le\frac{(1-s)^2}{1+L(s)}.
\]
Since $b(s)\le(1-s)^2$,
\[
  t(s)-t(s_2)=\int_{s_2}^{s}\frac{du}{b(u)}
       \ge\int_{s_2}^{s}\frac{du}{(1-u)^2}\longrightarrow\infty.
\]
Thus the orbit approaches $s=1$ only at infinite time. Its increasing
parameter cannot converge to a value below $1$, since $b$ is positive there.
The turn count is explicit and remains valid if the angular speed degenerates
near a saddle. Along the trajectory,
\[
  \theta(s)-\theta(s_2)
   =\int_{s_2}^{s}\frac{a(u,\theta(u))}{b(u)}\,du
   \ge\int_{s_2}^{s}\frac{m(u)}{b(u)}\,du
   \ge\int_{s_2}^{s}\frac{1+L(u)}{(1-u)^2}\,du
   \longrightarrow\infty.
\]
Thus the phase makes infinitely many full turns even when
$m(s)=\min_\theta a(s,\theta)$ tends to zero.

During one full phase turn starting at $s=s_k$, the level parameter
changes by at most $O((1-s_k)^2)$. Moreover, at a fixed phase the ambient
point changes by at most
\[
  \int L(s)\,ds
  \le \int (1-s)^2\,d\theta
  \le (1-s_k)^2.
\]
Thus the $k$-th turn of the $Y$-trajectory is uniformly
$o(1)$-close to the entire original leaf $C_{s_k}$. Since
$s_k\uparrow1$ and $C_{s_k}\to\Gamma$ in Hausdorff distance, every
point of $\Gamma$ is approached by the $Y$-trajectory; conversely, every
tail point is close to $\Gamma$. Hence
\[
  \omega_Y(y)=\Gamma.
\]
This is the key step handling unbounded periods and arbitrarily long saddle
passages. No return time near a saddle is assumed bounded: the modified
trajectory itself accumulates on the whole frontier.

The orbit remains in the compact disk and $Y$ is defined on an open
neighborhood, so its positive orbit is precompact. The elementary tail-limit
argument gives that $\Gamma=\omega_Y(y)$ is nonempty, compact, connected,
and invariant. The modified field has only finitely many fixed points in
$\Gamma$.

## Apply the generalized theorem and close the graph

For a precise output convention, call a **finite saddle-separatrix graph** a
finite embedded directed multigraph whose vertices are hyperbolic saddles and
whose edges are closures of distinct nonconstant trajectories with saddle
alpha- and omega-limits. Homoclinic edges (loops) and parallel edges are
allowed. A **directed saddle polycycle** is the image of a finite closed
directed edge walk; saddle vertices may repeat. The frontier graph need not
be one simple cycle: it may be a finite strongly connected union of
polycycles sharing vertices or edges. The conclusion below gives both that
finite graph and at least one simple Jordan circuit in its underlying graph
that separates the center from the exterior. The separating Jordan circuit
need not itself respect the flow orientation edge by edge.

First exclude centers from $\Gamma$. If a different center $c'$ were a
frontier point, choose periodic points $p_n\in C_{s_n}$ tending to $c'.$
A small invariant center neighborhood contains the entire orbit through each
sufficiently close $p_n$; that orbit cannot also enclose the original
center. If $c'=c$, a fixed small center orbit is inside every later
periodic Jordan curve, so those curves stay a positive distance from $c$.
Both alternatives contradict $c'\in\Gamma$. Thus every fixed point of
$Y$ in $\Gamma$ is a hyperbolic saddle of $X$, and the same is true
for $Y$ because $DY=DX$ there.

The singleton-equilibrium alternative is excluded because $\Gamma$ separates
the center from the exterior point $e$. Apply Teschl's Theorem 7.16 to $Y$
and $y$. If $\Gamma$ contains no
fixed point, it is one regular periodic orbit. If it contains a fixed point,
Theorem 7.16 gives only saddle points and connecting separatrices. A
hyperbolic planar saddle has exactly two outgoing local branches; uniqueness
of integral curves makes each outgoing branch one global orbit. With finitely
many saddles, there are therefore finitely many connection orbits. Their
closures with their saddle endpoints form a finite embedded graph, and these
are trajectories of $X$ as well as $Y$, since the fields agree on
$\Gamma$.

There are no tree tails in this omega-limit graph. Here is the chain
argument. For a precompact orbit, the distance from its late tail to its
omega-limit set tends to zero. Given $p,q\in\Gamma$ and $\varepsilon,T>0$,
choose a sufficiently late visit near $p$, followed by a later visit near
$q$. Partition the intervening time into increments in $[T,2T]$. The flow
is uniformly continuous on the compact limit set for times in this bounded
interval. Replace the intermediate orbit points by nearby points of
$\Gamma$; the resulting finite sequence is an $(\varepsilon,T)$-chain in
$\Gamma$. Thus $\Gamma$ is internally chain-transitive.

Collapse each connection orbit to a directed edge from its alpha-saddle to
its omega-saddle. Choose $\varepsilon$ smaller than the distances between
nonincident edge neighborhoods and choose $T$ long enough to traverse the
compact middle of each edge. An $(\varepsilon,T)$-chain can then move forward
along an edge and, near a saddle, jump to one of its outgoing branches; it
cannot reverse an edge. Chain transitivity makes the finite directed graph
strongly connected, so every connection lies in a directed circuit. Finally,
the graph separates the original center from the exterior point $e$: it is
the frontier of $U$. The finite planar graph separation fact needed here has
a local proof. Approximate the finitely many embedded edges in disjoint
tubular charts and vertex disks by a finite polygonal graph without changing
incidence or complementary faces. A finite embedded tree has path-connected
complement, by deleting terminal edges and detouring paths around each arc.
Now add the non-tree edges one at a time. Each new edge lies in a face of the
previous graph and splits that face. Choose a simple boundary path in that
face between the new edge's endpoints. The path together with the new edge
forms a simple polygonal cycle, which separates by the polygonal Jordan
theorem. If two points lie in different final faces, at the first edge
insertion that separates them, this cycle separates those points.
Therefore the graph contains a simple Jordan circuit separating the center
from $e$. This is the separating circuit in the output convention above.
Since the finite directed connection graph is strongly connected, for every
edge one can join its terminal vertex back to its initial vertex by a
directed path; this gives a finite family of directed polycycles covering
all edges. The full frontier is their finite union. All its edges are
trajectories of the original characteristic field $X$.

If the disk boundary itself is the terminal leafwise characteristic orbit,
the same argument permits $\Gamma=\partial D$; if the boundary is
transverse, invariance of the frontier prevents it from reaching that
boundary. This retains the batch23 boundary distinction.

## Local dependency and choice audit

The carrier can be kept inside the existing library and at most
$\mathrm{AC}_\omega$:

- The period-annulus product coordinate uses the local flow-box theorem,
  smooth dependence of flows, and the return-map identity on an interval of
  periodic leaves.
- The positive flat drift uses a countable exhaustion, countably many smooth
  bumps/partition functions, and finite-dimensional (C^1) estimates. The
  existing smooth partition-of-unity development declares only
  $\mathrm{AC}_\omega$.
- The generalized Poincaré–Bendixson proof needs compact tail-limit sets,
  flow boxes, uniqueness, and planar separation for finitely many
  piecewise-smooth Jordan curves. Prove that special separation lemma locally
  from `thm-polygonal-jordan-curve`; do not use
  `thm-jordan-brouwer-separation` or Jordan–Schönflies.
- Finite graph closure uses the two local stable/unstable branches of each
  hyperbolic saddle and the unique-flow property. No Morse–Smale assumption,
  no transversality of stable and unstable manifolds, and no finite
  flow-box itinerary assumption is needed.

I found no remaining dynamical gap in this route. The only substantial
integration work is to state and prove the three local carriers above rather
than invoking Teschl as an external dependency. This memo is an independent
proof proposal, not a certification of the batch23 item.
