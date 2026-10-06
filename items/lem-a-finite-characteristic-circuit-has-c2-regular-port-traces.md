---
id: lem-a-finite-characteristic-circuit-has-c2-regular-port-traces
kind: lemma
title: "A finite characteristic circuit has C² regular port traces"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity, lem-c2-inverses-and-scalar-return-roots, lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier, def-countable-choice-principle-for-foliation-pair, lem-manifold-bump-for-a-compact-set-inside-an-open-set, lem-c1-euclidean-maximal-flow-with-c2-upgrade, lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary, def-flat-chart-for-a-distribution, def-plaque-of-a-flat-chart, def-regular-foliation-atlas]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 7
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mark Brittenham, Foliations and the Topology of 3-manifolds, class 11"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Class 11 pp.1–3 motivates finite induction; complete new port construction is local, in the companion memo"
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "§6, printed pp. 16–19 (characteristic-circuit ports); the C² port and strip construction is supplied locally"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a $C^2$
cooriented codimension-one foliation of a $3$-manifold $M$, let
$h:D^2\to M$ be a $C^2$ disk map in the relative generic position of
[[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]],
and let $\Gamma$ be the outer frontier of a maximal period annulus of the
characteristic field of $h$, so that $\Gamma$ is a regular closed orbit, a
finite saddle-separatrix circuit, or the boundary orbit, by
[[lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier]].
Choose an adjacent period annulus following the finite itinerary of $\Gamma$
and a regular $C^2$ port section through each branch of every passage of that
itinerary, at positive distance from the saddle points.

Then:

(a) each such regular port section can be parameterized by the transported
transverse first integral of the ambient foliation, with nonzero derivative,
and the ports depend jointly $C^2$ on the level, including at level $0$;

(b) the trimmed regular edge strips and their endpoint collars at the ports
are jointly $C^2$ down to the frontier;

(c) the nearby closed characteristic loops force the one-sided composite
transverse return map of the itinerary to equal the identity on an interval.

No source strip through a saddle is asserted. The statement concerns the $C^2$ regularity of the port data; it does not
assert a $C^2$ family of loops for the unmodified hyperbolic parametrizations
near the saddle corners.

## Facts & Assumptions

**Given:** A $C^2$ cooriented foliation $F$ of $M$, a disk map $h$ in relative generic position, the frontier circuit $\Gamma$ of a chosen period annulus with its finite itinerary and chosen regular port sections, and the characteristic first integrals $u=z\circ h$ in flat charts.

[F1] The characteristic field of $h$ is a $C^1$ planar field with a $C^2$ first-integral atlas given by the local transverse functions $u=z\circ h$ of flat charts of $F$; its singularities in the disk are finitely many nondegenerate interior centers and saddles ([[lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary]], [[def-flat-chart-for-a-distribution]]).

[F2] The outer frontier of a maximal period annulus of the characteristic field is a regular closed orbit, a finite connected strongly connected saddle separatrix graph covered by finitely many directed saddle polycycles, or the boundary orbit; the annulus carries a $C^2$ transverse trace of its prescribed closed characteristic loops ([[lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier]]).

[F3] If $g(s,t)$ is $C^2$ near $(s_0,t_0)$ with $g(s_0,t_0)=0$ and $g_t(s_0,t_0)\neq0$, then there is a unique local $C^2$ root $t=T(s)$, and the same inverse-function argument gives a $C^2$ root depending jointly on additional $C^2$ parameters ([[lem-c2-inverses-and-scalar-return-roots]]).

[F4] In a flat chart the plaque level sets are the characteristic leaves of $h$; a finite plaque transport between $C^2$ transversals is a $C^2$ local diffeomorphism germ, and finite families of $C^2$ pieces agreeing on open overlap collars glue to a $C^2$ map ([[lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity]], [[def-plaque-of-a-flat-chart]], [[def-regular-foliation-atlas]]).


[F5] The standing hypothesis is Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 The circuit data are finite: by [F2] the frontier consists of finitely many saddle points and finitely many compact regular edges, and its directed polycycles form a finite cover of the edge set. Each regular edge $E$ is a nonconstant trajectory of the characteristic field, so the first integral $u$ of [F1] is constant along $E$ and $du\neq0$ on $E$. Near a regular point the level sets of $u$ are the characteristic leaves, and the port sections chosen in the statement are transverse to the characteristic foliation there. [given, F1, F2]

2.1 Port parameterization. Fix a port section $\Sigma$ through a regular point $p$ of an edge. In a flat chart containing $\Sigma$ the scalar $g(\xi,t):=u(\xi)-t$ is $C^2$, $g(p,u(p))=0$ and $\partial_\xi g\neq0$ along $\Sigma$ because $\Sigma$ crosses the level set transversally; by [F3] the level $t$ meets $\Sigma$ in a unique point depending jointly $C^2$ on $t$ near $u(p)$. Taking $t=0$ at the frontier level shows that the ports, including the frontier port, depend $C^2$ on the level. On overlaps of two flat charts the two first integrals differ by the $C^2$ transverse transition of $F$, so the parameterization is chart-independent and the transversality of each port to the ambient foliation is preserved. [step 1.1, F3, F4]

3.1 On each compact trimmed regular edge the C² first integral is a submersion. A finite chain of its inverse-coordinate rectangles supplies local level strips. To obtain exact overlaps, choose a reference C² parametrization of the edge; neighboring strip candidates agree on it at level zero, and in their common plaque coordinate blend them with a fixed source cutoff on an overlap, equal to the corresponding candidate on its end collars. The reference tangent has one strict sign, so after a common shrink the blended tangent keeps that sign. Its transverse label is kept fixed throughout. Finite such blends give a jointly C² regular strip, including its endpoint collars at the ports. This constructs compatible pieces before applying [F4]. [F3, F4, step 1.1, step 2.1, construct]

4.1 At a saddle choose one target foliation box containing the images of the two sufficiently close ports and of the intervening saddle passage. For each nearby source level the passage lies in a single target plaque; matching the two port transverse coordinates in this target box therefore gives a C² local transverse transition. This concerns the ambient plaque label and the regular endpoint collars of step 3.1, and supplies no regular source strip across the saddle. [F1, F3, F4, step 2.1, step 3.1]

5.1 The nearby closed loops. By [F2] the chosen period annulus carries its prescribed closed characteristic loops with a $C^2$ transverse trace; for every level $t$ in some one-sided interval $(0,\varepsilon)$ the corresponding loop follows the finite itinerary and closes up. The composite transverse return map of the itinerary is obtained by composing the finitely many port and strip transitions of steps 2.1–4.1 around the itinerary; it is a $C^2$ germ of a real function, and each closed level loop returns to its own level, so the return map fixes every $t\in(0,\varepsilon)$. [step 2.1, step 3.1, step 4.1, F2]

6.1 Fixed on an interval. A $C^2$ function that fixes every point of a nondegenerate interval equals the identity on that interval; hence the one-sided composite transverse return map is the identity on $(0,\varepsilon)$, which is (c). [step 5.1]

7.1 All constructions selected finitely many charts, edges, ports and intervals; the root and transport theorems used are choice-free, so nothing beyond the standing hypothesis [F5] is invoked, and (a), (b), (c) follow from steps 2.1, 4.1 and 6.1. [step 2.1, step 4.1, step 6.1, F5] ∎
