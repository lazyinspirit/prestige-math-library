# Quantitative chain direction at a finite saddle graph

## Finding

The informal claim “a sufficiently fine chain cannot go backward along an
edge” needs a saddle estimate. Near an incoming stable branch, forward flow
contracts distance to the saddle. Repeated epsilon-jumps can move a chain
slightly outward on that branch; they cannot accumulate an arbitrary retreat.
In a stable coordinate the radii satisfy

    r_(j+1) <= a r_j + L epsilon,       a = exp(-mu T) < 1,

so the total reachable outward radius is bounded by
\(r_0+L\epsilon/(1-a)\), and after a transient by
\(L\epsilon/(1-a)\). Choosing epsilon below the compact middle radius times
\((1-a)/L\) rules out traversing the edge backward. On outgoing unstable
branches the dual estimate expands radius, so fine chains move outward there.
Distinct local branches can be switched only inside an \(O(\epsilon)\) saddle
core.

Combined with compact flow-tube separation along edge middles, these estimates
give a precise graph-itinerary lemma. Internal \((\epsilon,T)\)-chain
transitivity of an omega-limit set then implies directed strong connectivity.
This memo changes no canonical page, manifest, receipt, or controller state.

## Conventions and hypotheses

Use the chain convention

    x_0, ..., x_N in Gamma;  t_j >= T;
    |Phi_(t_j)(x_j) - x_(j+1)| < epsilon.

Assume Gamma is a finite embedded directed graph in the plane. Every vertex
is a hyperbolic saddle of a \(C^1\) vector field \(Y\); every open edge is a
single nonconstant orbit, directed from its alpha-saddle to its omega-saddle.
Loops and parallel edges are allowed. Distinct open edges meet only at
vertices. The assertion is that for suitable fixed \(T>0\) and then
sufficiently small \(\epsilon>0\), every such chain from vertex \(v\) to
vertex \(w\) determines a directed walk from \(v\) to \(w\).

The stable/unstable coordinate facts below are the ordinary local
hyperbolic-saddle input. They should be proved or cited with hypotheses
matching a \(C^1\) field; the existing Morse-gradient stable-manifold items
do not by themselves supply this general field interface.

## Saddle-disk estimate

Fix a vertex \(p\). Straighten its local stable and unstable manifolds by a
\(C^1\) chart \(\chi_p\) on a closed disk \(D_p\) of chart radius \(R_p\), so
the four graph branches in \(D_p\) lie on the two coordinate axes. Shrink
these disks so they are pairwise disjoint and each meets Gamma only in the
four incident half-branches and the vertex. Regard
\(r=\max(|s|,|u|)\) in this chart as the saddle radius. The chart and inverse
have bounded derivatives on the disk. Choose \(L_p\ge1\) so an ambient jump
of size less than epsilon changes chart coordinates, and hence branch
radius, by less than \(\delta_p:=L_p\epsilon\).

On the stable axis, write \(r=|s|\). Since its restricted scalar equation is
\(\dot s=-\mu_p s+o(s)\), shrink \(D_p\) until

    r(Phi_t(x)) <= exp(-mu_p t) r(x)

for every stable-branch point whose trajectory is followed for \(t\ge0\)
inside the disk, with some \(\mu_p>0\). On the unstable axis, similarly
choose \(\lambda_p>0\) with

    r(Phi_t(x)) >= exp(lambda_p t) r(x)

as long as the forward trajectory stays in the disk. If it exits, it exits
on that outgoing branch, which is already the permitted directed motion.

There are finitely many vertices, so choose one \(T\) large enough that for
every vertex

    a_p := exp(-mu_p T) <= 1/2,
    b_p := exp(lambda_p T) >= 2.

For a chain step whose current point is on a stable half-branch and whose
next point is on the same stable half-branch, the chart jump bound gives

    r_(j+1) <= a_p r_j + delta_p.                       (S)

This inequality also holds if the next point is the saddle. If it is on a
different half-branch, the coordinate axes show that its radius, and the
radius of the flowed point, are both at most delta_p: on distinct signed
axes the chart distance is at least the larger of the two radii. Thus a
stable-to-other-branch switch can occur only in the delta_p-core.

Iterating (S) over any run of stable-branch chain points gives

    r_n <= a_p^n r_0
          + delta_p (1-a_p^n)/(1-a_p)
        <= max(r_0, delta_p/(1-a_p)).

In particular, a run starting at the vertex remains within
\(2\delta_p\), since \(a_p\le1/2\). More generally, while
\(r_j\ge 2\delta_p/(1-a_p)\), (S) gives \(r_{j+1}<r_j\). Repeated jumps
cannot climb out of the stable sector: their outward reach is bounded by
the larger of the initial radius and \(2\delta_p\). This is the quantitative
barrier that the informal argument lacked.

On an unstable half-branch, for a chain step that remains on that same
branch,

    r_(j+1) >= b_p r_j - delta_p.                       (U)

When \(r_j\ge 2\delta_p/(b_p-1)\), (U) gives \(r_{j+1}>r_j\). A jump from
an unstable half-branch to a different half-branch can occur only when the
flowed point and target both have radius at most \(\delta_p\). Thus
sector changes are confined to a core of radius \(C_p\epsilon\), where one
may take

    C_p epsilon >= max(delta_p/(1-a_p),
                       delta_p/(b_p-1), delta_p).

At the chosen port radius \(R_p/2\), (U) is strictly outward:
since \(b_p\ge2\) and \(\delta_p\le R_p/8\),
\[
 r_{j+1}\ge 2(R_p/2)-R_p/8=7R_p/8>R_p/2.
\]
A different-branch switch is impossible there because its flowed point has
radius at least \(R_p\), whereas a switch requires radius at most
\(\delta_p\). Thus a chain on an outgoing branch at its port continues out
along that edge.

Set the edge port radius to \(R_p/2\). Choose epsilon so
\(\delta_p\le R_p/8\); then
\(\delta_p/(1-a_p)\le R_p/4\). If a chain point is on a stable branch at
radius \(r\le R_p/2\), (S) puts the next stable point at radius at most
\(R_p/4+R_p/8=3R_p/8<R_p/2\). A branch switch lands in the delta_p-core.
Thus a chain on an incoming stable branch at or inside the port cannot
leave the disk again along that incoming edge. It contracts toward the
saddle core; any switch to an outgoing branch occurs in the
\(O(\epsilon)\)-core. A chain may then leave along an outgoing edge. That is
the directed vertex transition.

The same estimate handles the repeated-jump concern explicitly. On an
incoming stable branch, each flow leg contracts by at least the fixed factor
\(a_p<1\), while the jump adds at most \(\delta_p\). After arbitrarily many
steps the radius is bounded by \(\delta_p/(1-a_p)\), not by the number of
jumps times epsilon. No finite sequence can use stable-sector contractions
to accumulate a retreat from the saddle to a fixed-radius point of the
compact edge middle once epsilon is chosen below that middle radius times
\((1-a_p)/L_p\).

## Compact flow tubes along edge middles

For each directed edge \(e:p\to q\), choose a complete orbit
parametrization \(\gamma_e:\mathbb R\to e^\circ\) satisfying
\(\Phi_t(\gamma_e(s))=\gamma_e(s+t)\). Choose the saddle disks first, then
let the compact middle interval \(I_e=[A_e,B_e]\) run between its source
and terminal ports, each at radius \(R_v/2\) in the corresponding saddle
chart. The omitted tails lie inside the source and target saddle disks.
For a self-loop the two ports are different incident half-branches in the
same saddle disk.
The middle images for distinct edges are disjoint compact sets. Since there
are finitely many, they have positive pairwise separation. Also, for each
edge, the compactified forward tail
\(\gamma_e([A_e+T,\infty])\) is disjoint from every nonterminal vertex disk
and every other edge's compact middle. The terminal saddle belongs to the
terminal disk and is not in any compact middle; a self-loop is allowed to
return to its own terminal disk. Shrink the disks if needed, and take
\(\sigma>0\) below all these finitely many positive separations.

Fix the \(T\) selected above. For each edge define

    d_e = min |gamma_e(s+t) - gamma_e(s')|,
          s,s' in I_e, s' <= s, t in [T,infinity].

This minimum is positive. To see compactness, compactify the time interval
\([T,\infty]\) by one endpoint. Uniformly for \(s\in I_e\),
\(\gamma_e(s+t)\to q\) as \(t\to\infty\), where \(q\) is the terminal
saddle. At finite \(t\ge T\), \(s+t>s\ge s'\), so injectivity of the open
orbit gives unequal points. At \(t=\infty\), the limit \(q\) is outside the
compact middle \(\gamma_e(I_e)\), by the choice of saddle disks. The
continuous distance function is therefore positive on a compact parameter
set and has a positive minimum.

Consequently, if a chain point \(x=\gamma_e(s)\) lies in \(e\)'s compact
middle and \(t_j\ge T\), its flow image cannot be within \(d_e\) of any
earlier point \(\gamma_e(s')\) of that middle. It also cannot jump directly
to a different edge's compact middle or a nonterminal vertex disk, by
\(\sigma\). Choose epsilon less than half the minimum of the finitely many
\(d_e\) and \(\sigma\).

The only remaining targets are in the terminal saddle disk along a local
incident branch. The \(d_e\) estimate already excludes a target on the
earlier part of the same edge outside its terminal port. Thus a stable target
is at radius at most \(R_q/2\); from that point onward, (S) keeps successive
stable points below \(3R_q/8\), and branch switches are confined to the
delta_q-core. The chain cannot move back out along that incoming edge.
If the target lies on a different incident branch, the axis-separation bound
forces it into the same core. Landing on an outgoing branch of the terminal
saddle is allowed and is exactly the next directed edge transition. For a
homoclinic edge the
terminal and initial disks are the same disk; arriving at its terminal
stable port and switching in the core to an outgoing port is a forward
completion of that directed loop, not reverse travel across its compact
middle.

These estimates also describe a flow tube geometrically: a small tubular
neighborhood of each compact edge middle meets no other edge middle or
nonincident saddle disk, and the vector field carries its central orbit arc
forward along the tube. The explicit \(d_e\) is the clearance against any
reverse return, including arbitrarily long flow times; the saddle recurrence
is the clearance against accumulating small jumps after the orbit enters a
contracting terminal sector.

## Chain itineraries and strong connectivity

Choose the disks and edge middles as above. Then choose \(T\) satisfying the
finite saddle bounds and finally choose one epsilon smaller than all finitely
many tube clearances, saddle-core bounds, and nonincident-set distances.
Every \((\epsilon,T)\)-chain has the following itinerary:

- in an edge middle it either stays on the same edge and advances, or flows
  into the terminal saddle disk;
- inside a saddle disk it can change branches only in the
  \(C_p\epsilon\)-core; it can enter along a stable branch and leave along
  an unstable branch, but it cannot exit along an incoming stable branch
  after a reverse excursion;
- nonincident edge middles cannot be connected by one jump.

Thus, after suppressing repeated points within edge tubes and vertex cores,
the chain determines a finite directed walk on the graph. In particular,
there is no backward traversal of any compact edge middle.

Now assume \(\Gamma\) is internally chain-transitive, as an omega-limit set
of the precompact orbit in the parent carrier is claimed to be. For any two
vertices \(v,w\), chain transitivity gives an \((\epsilon,T)\)-chain from
\(v\) to \(w\). The itinerary lemma turns it into a directed path from \(v\)
to \(w\). Since this holds for every ordered pair, the finite directed graph
is strongly connected. For each edge \(e:v\to w\), take a directed path
from \(w\) back to \(v\); adjoining \(e\) gives a closed directed edge walk.
There are finitely many edges, so finitely many such walks cover the graph.
These are the directed saddle polycycles required by the output convention.

The only dynamical prerequisites are the \(C^1\) hyperbolic saddle chart
with local stable/unstable branches and the flow parametrizations of the
finitely many connecting edges. If the current library does not yet prove
the general hyperbolic-saddle chart/branch theorem for \(C^1\) planar fields,
that is a separate local prerequisite; the contraction and tube estimates
above do not hide or replace it.
