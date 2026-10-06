# Batch 23 finite-annulus / cap-persistence audit

## Finding

The proposed route is not yet a proof under the stated relative-genericity
hypotheses. The regular-frontier step is sound with its return-map hypotheses.
For a null saddle polycycle, a compact leafwise cap can transport nullity to
an **existing** adjacent family of closed characteristic loops, provided a
one-sided smooth transverse trace of those prescribed loops is constructed.
The cap alone does not prove that such an outer period annulus exists. The
current argument identifies the holonomy of a rounded leafwise loop with a
characteristic return map through saddle points, then treats every complement
face as an annulus or a boundary collar. Neither inference follows from the
current genericity statement.

The local genericity carrier
`lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary`
gives finitely many nondegenerate centers and saddles and separates their
ambient leaves. It does not assert a Morse–Smale characteristic flow, a finite
set of periodic orbits, or a decomposition of every complementary region
into period annuli. Novikov §6, printed pp. 17–19, and Ranz §3.2.3, printed
pp. 52–54, do not supply the missing annulus-adjacency/cap argument; the
center-disk audit already records the gaps in their center–saddle proofs.

## What does work locally

For a regular characteristic frontier $P$, choose a transverse section in
the disk at a point of $P$. Its characteristic first-return map is the
ambient foliation holonomy along $P$: nearby characteristic trajectories
are precisely the leafwise continuations defining that return. If
\([P]=1\) in the frontier leaf, its holonomy is the identity germ. The
return map therefore fixes the nearby section pointwise, so the regular
period annulus extends across (P) on every side on which the section and
flow are defined. If a neighboring closed-orbit annulus is already known,
the compact-cap persistence lemma then transports nullhomotopy to its actual
loops.

For a null saddle circuit, the useful conditional statement is narrower:
if an adjacent period annulus exists and one proves a one-sided smooth family
\(H_s\) of its prescribed loops, with \(H_0\) a rounded representative of
the circuit and all point tracks transverse to \(F\), then a fixed compact
leafwise null disk for \(H_0\) transports nullity to \(H_s\) for small
\(s>0\). This is the compact transverse-deformation argument; use its
one-sided version at an endpoint. It avoids limits of varying filling disks.
The current `lem-nullhomotopy-persists-under-a-compact-transverse-deformation`
states a two-sided open interval, while the proposed saddle-family carrier
may only give a one-sided family.

At a saddle circuit, however, there is no regular flow box around the whole
characteristic loop. Holonomy of a smoothed loop in the ambient leaf is
identity when the loop is null, but it is not automatically the return map
of the characteristic line field: near a saddle, the characteristic
trajectories may follow different sectors or fail to return to the section.
The strategy for
`lem-null-characteristic-frontier-cap-transports-nullity-to-adjacent-annulus`
must not use that identity-to-return-map equality at a polycycle without an
explicit saddle-chart proof. Its separate cap-transport argument would be
sound after `lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family`
constructs the actual one-sided trace with exact boundary loops and transverse
tracks. That carrier currently sketches the interpolation but does not prove
the required gluing and endpoint regularity. Even after that repair, it only
handles an adjacent annulus **when one exists**.

## Why finite graph connectivity is not established

The proposed graph has only centers, saddles, and their separatrix branches.
Poincaré–Bendixson constrains limit sets, but finite singularity count does not
make this graph a finite cell decomposition whose faces are period annuli.
Branches may limit on regular periodic orbits; the graph as defined omits
those orbits. Nonperiodic spiral regions can also lie between periodic
frontiers. The genericity lemma does not exclude either phenomenon. A path
through the spatial complement of the separatrix graph therefore need not
be a path through adjacent period annuli, and a cap cannot be propagated
across a face that supplies no closed-loop trace.

Here is an explicit planar model of the missing flow face. Let
\[
V_\varepsilon(x)=\tfrac14x^4-\tfrac12x^2+\varepsilon x
\]
for sufficiently small nonzero \(\varepsilon\), let \(x_s\) be its middle
local maximum, and set
\[
H(x,y)=\tfrac12y^2+V_\varepsilon(x)-V_\varepsilon(x_s).
\]
For a regular \(E>0\), \(D=\{H\le E\}\) is a disk. Choose a smooth
function \(f\) with \(f(u)=0\) for \(u\le0\) and
\(f(u)=(E-u)e^{-1/u^2}>0\) for \(0<u<E\). With
\(J(a,b)=(-b,a)\), define
\[
X=J\nabla H+f(H)\nabla H.
\]
The two nondegenerate minima of \(H\) are centers and its middle critical
point is a nondegenerate saddle, so \(c-s=2-1=1\). For \(H<0\),
\(X=J\nabla H\); the regular level circles around the centers are closed
and bound disks. At \(H=0\) the separatrix is a two-lobed saddle circuit.
For \(0<H<E\),
\(dH(X)=f(H)|\nabla H|^2>0\), so there are no periodic trajectories:
they spiral from the saddle circuit toward the periodic boundary \(H=E\).
Thus the center period annuli stop at a null planar polycycle, while the
region from that circuit to the boundary is a spiral collar with no adjacent
outer period annulus. This smooth model has finitely many nondegenerate
characteristic singularities and the local center/saddle count used by the
candidate. It is a diagnostic for the planar-flow inference, not a
counterexample to Novikov's theorem: essentiality of the image boundary and
the ambient-leaf holonomy are extra data not encoded by the planar vector
field. A proof must use those ambient data to rule out this kind of gap, or
must handle the spiral face by a different argument.

There is a second finiteness issue. The candidate defines edges by branches
ending at the first singular or boundary point, but a separatrix can instead
have a regular periodic orbit as its limit set. Finitely many saddle branches
do not bound the number of regular cycles or prove that all faces are annuli.
If finite adjacency is essential, prove a stronger finite decomposition
theorem under explicit hypotheses (and show those hypotheses follow from the
allowed perturbation), or replace the graph step with the center–saddle
surgery route. The finite index equation alone does not provide this
decomposition.

## Boundary distinction and exact repair obligation

The boundary distinction is correct but insufficient by itself. A closed
transversal boundary has \(h^*\omega\ne0\) on its tangent; a small collar
therefore has no closed characteristic orbit. A leafwise boundary loop is
instead a regular characteristic orbit, but its collar need not be foliated
by closed characteristic trajectories: a nonidentity return germ can give
spiralling trajectories and does not guarantee a closed annulus. Only a
proved closed-loop family reaching that essential boundary is a vanishing
cycle.

To close the proposed proof, the author must prove all of the following in
the same pair: (1) the finite adjacency object includes regular cycles and
nonperiodic faces and really has a finite path from a center region to the
boundary; (2) every null saddle circuit on that path either has an adjacent
closed-orbit annulus with a one-sided transverse trace, or a separate
argument propagates a closed leafwise loop family through the nonperiodic
face; and (3) for a tangent essential boundary, the propagated family
actually reaches the boundary rather than terminating in a spiral collar.
For an existing adjacent annulus, the rounded-loop trace plus one-sided
compact-cap persistence proves nullity transport. Without these additional
steps, the finite-annulus/cap-persistence route does not establish the
compressible-leaf clause. The statement should remain open rather than
crediting the candidate graph lemma as proved.
