# Batch 23 graph-incidence audit

**Scope.** Independent, research-only review of the compressible-disk
“Graph incidence” obligation in `frontier-41-ha-dt-29-batch-23.notes.md`. I
read the current batch-23 page scaffold and searched the checked-in library for
the planar, Morse, vector-field, and flow suppliers. I changed no item,
manifest, coverage map, receipt, or controller state.

## Finding

The stated relative genericity does not imply the advertised finite list of
one-saddle, figure-eight, and pinched-annulus incidences. It gives a finite
Morse characteristic foliation, but it does not separate saddle images into
different ambient leaves, remove saddle connections, or identify the
frontier of a selected saturated domain as a finite separatrix graph. I could
not complete the incidence proof from the current exact assumptions.

There is a sound conditional finite-case route once two missing local inputs
are proved: a boundary-aware Poincaré–Bendixson/frontier lemma and a relative
perturbation that puts the finitely many tangency images on distinct ambient
leaves (or another proved argument that handles heteroclinic saddle
connections). Under those additions, the graph combinatorics reduce to one
homoclinic saddle with one or two simple loops. A single loop bounds a disk;
two loops give either two disk lobes meeting at the saddle or a nested
disk-and-annulus configuration. The current scaffold does not establish the
two missing inputs or the subsequent strict domain ranking, so this is a
proof route, not a closed carrier.

## Exact assumptions and a model showing their limit

The current relative-genericity item assumes a $C^2$ cooriented
codimension-one foliation of a $3$-manifold and a $C^2$ disk map. Its
boundary is either a loop in one leaf or a closed transversal. It produces a
fixed regular collar and finitely many interior nondegenerate centers and
saddles. It explicitly makes no claim that different singular points map to
different ambient leaves. The compressible-disk application adds an
essential leafwise boundary class, but the proposed graph argument also
needs a selected saturated disk or pinched annulus with no interior limit
cycles and an identified frontier. Those are additional conclusions, not
hypotheses of the genericity lemma.

Here is a concrete characteristic foliation showing that Morse genericity
alone allows a connected graph with several saddles. On $M=\mathbb R^3$
use the foliation by horizontal planes $z=\mathrm{constant}$. Put

\[
 g(t)=t^4-2t^2,\qquad f(x,y)=g(x)+g(y),\qquad
 \Omega=\{(x,y):f(x,y)\le 1\},\qquad h(x,y)=(x,y,f(x,y)).
\]

The function $f$ is proper. Along every ray from the origin it starts at
zero, decreases, then increases to infinity, crossing level $1$ once;
the level is regular. Thus $\Omega$ is a smooth star-shaped closed disk and
$h(\partial\Omega)$ lies in the leaf $z=1$, with regular characteristic
collar. The critical points are exactly

- four minima $(\pm1,\pm1)$, at value $-2$;
- four saddles $(0,\pm1),(\pm1,0)$, at value $-1$;
- one maximum $(0,0)$, at value $0$.

All are nondegenerate, so this satisfies the finite center/saddle conclusion
of the genericity item; its center count is $5$, its saddle count is $4$, and
$c-s=1$. At the saddle value,

\[
 f=-1\quad\Longleftrightarrow\quad
 (x^2-1)^2+(y^2-1)^2=1.
\]

In coordinates $u=x^2,v=y^2$, the right side is the circle
$(u-1)^2+(v-1)^2=1$, tangent to the axes at $(0,1)$ and $(1,0)$.
Parameterize it by $u=1+\cos t$, $v=1+\sin t$. At $u=0$ the two $x$-sign
sheets meet, and at $v=0$ the two $y$-sign sheets meet; these sign flips make
the inverse image connected and join all four saddle points. At every such
vertex the critical-level germ is the four-branch crossing of a nondegenerate
saddle. The regular arcs are characteristic trajectories, hence this is a
compact multi-saddle connection graph. In particular the exact genericity
statement does not force the compact graph to have one saddle or one/two
lobes.

This example has null, rather than essential, boundary class in its ambient
leaf; it is not a counterexample to Novikov’s conclusion. It isolates the
logical point: no finite-incidence theorem follows from relative Morse
genericity alone. The essential boundary and a minimal saturated-domain
selection might force a simpler graph, but that selection and its incidence
proof must be stated and proved separately.

## Existing library prerequisites

The repository has useful ingredients, but none supplies the full incidence
step.

| Needed fact | Existing material | Exact limit |
|---|---|---|
| Finitely many center/saddle zeros | Batch-23 `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary` | Proves relative $C^2$ Morse position and local center/saddle type. It expressly omits distinct ambient leaves and saddle-connection elimination. |
| Global center-minus-saddle count | Batch-23 `lem-characteristic-disk-center-saddle-index-count`, using batch-7 `thm-poincare-hopf-with-outward-pointing-boundary` | Gives only the total $c-s=1$ for the disk. It does not imply any two basins share a saddle, or classify a boundary graph. The cited Poincaré–Hopf statement is for smooth fields, while the stated foliation/map regularity yields a $C^2$ characteristic field; a $C^2$ version or a smoothing/degree bridge is needed for literal supplier matching. The theorem is present in the F41 batch-7 scaffold, so this is an in-run prerequisite, not an outside-pair request. |
| Local saddle sectors | Batch-23 genericity proof; published smooth `thm-morse-lemma` and `cor-local-level-set-cone-at-a-morse-critical-point` | The genericity item supplies its own $C^2$ scalar local model. The library Morse lemma is stated for smooth functions and does not classify global separatrix incidence. |
| Local flow uniqueness and flow boxes | `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves`, `thm-fundamental-theorem-on-flows`, `thm-flow-box-theorem` | Support local trajectory and no-crossing arguments for smooth vector fields. They do not classify compact omega-limit sets or show that a frontier consists of finitely many saddle connections. The characteristic field from $C^2$ input also needs a regularity-compatible local-flow interface. |
| Compact limit sets | `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant` | Its statement is for negative-gradient trajectories. Even its compact, connected, invariant conclusion does not distinguish a periodic orbit from a saddle polycycle. There is no Poincaré–Bendixson or equivalent finite-singularity plane-flow theorem in `items/`. |
| Disk/annulus topology after a graph is known | `lem-jordan-schoenflies-extension-for-plane-curves`; `lem-two-disjoint-circles-in-s-two-cobound-an-annulus`; `lem-finite-plane-graph-ear-and-face-facts`; `lem-finite-planar-graph-disk-cuts-and-euler-count` | Jordan–Schönflies (with full AC) turns an already established simple loop into a disk; the two-circle lemma identifies an already established nested regular pair as an annulus. The finite-graph lemmas give face and disk-cut information after a finite embedded graph satisfying their regularity hypotheses is supplied. None proves dynamical graph finiteness, one-saddle incidence, boundary-sector orientation, or the no-revisit step. `thm-classification-of-compact-connected-surfaces` concerns closed surfaces and is not the needed boundary graph result. |

I found no checked-in `thm-poincare-bendixson` or local equivalent. The
Poincaré–Hopf item is available in the in-run batch-7 scaffold, but its
global Euler sum is strictly weaker than the missing local boundary-saddle
index calculation.

## Conditional finite-case reduction

The following part is sound once the named missing hypotheses are supplied.

1. Let $\beta=h^*\omega$ and choose an area form $\mu$ on the source
   disk; define $X$ by $\iota_X\mu=\beta$. Away from the finite zero set,
   $X$ generates the characteristic line field. In the leaf-boundary case
   $X$ is tangent to that boundary; in the transversal-boundary case it
   crosses it. The latter compact collar prevents an interior closed-orbit
   frontier from ending at the boundary.
2. Prove a local Poincaré–Bendixson statement for this $C^2$ field on the
   disk, including tangent and transverse boundary alternatives. It must show
   that the selected center basin has outer frontier either a regular
   periodic orbit or a compact finite saddle polycycle. “Finite saddle count”
   alone is not enough: without the limit-set theorem, separatrix branches
   could have an unclassified compact accumulation set.
3. Prove a rel-boundary transverse-coordinate perturbation separating
   tangency images into distinct ambient leaves, or classify heteroclinic
   graphs without that condition. For the separation route, a connection from
   saddle (p) to saddle (q) lies in one ambient leaf along its regular
   orbit. A terminal tail in a foliation chart lies in a single plaque and
   converges to the endpoint plaque, so both endpoint images lie in that same
   leaf. Distinct-leaf tangencies therefore forbid connections between
   different saddles. The currently supplied perturbation does not prove this
   condition; a countable-plaque avoidance argument and preservation of the
   finite Morse zero set are required. A route is to use a short transverse
   interval through each saddle image: its preimage in a fixed immersed leaf
   is discrete in the second-countable leaf, hence countable. A finite union
   of previously used leaves therefore misses some transverse values. Shift
   the transverse coordinate by a small constant near the saddle and cut it
   off in a regular annulus; openness of the existing Morse zero set then
   prevents new zeros. This is a plausible local lemma, but it is not part of
   the current genericity carrier.
4. Once a connected compact polycycle has only one saddle, uniqueness of
   regular characteristic trajectories makes each homoclinic branch simple.
   A saddle has four local half-branches, alternating stable and unstable,
   so a compact circuit uses one stable/unstable pair or two pairs. One pair
   gives a Jordan loop. Two pairs give two Jordan loops meeting only at the
   saddle. By Jordan separation their bounded disks are either disjoint
   (the figure-eight with two lobe disks) or nested (an inner disk and the
   intervening annular region, pinched at the saddle). This is the desired
   finite topological case list, conditional on the frontier and
   distinct-leaf lemmas.
5. For center inequalities, round the graph inside the saddle chart using
   the local $xy=0$ model, keeping the rounded boundary away from all other
   finitely many zeros. Each resulting regular lobe boundary is a smooth
   Jordan curve, so its disk has $c-s=1$ by a boundary Poincaré–Hopf
   argument and contains a center. For nested loops, also round the annular
   region and use $\chi=0$, while recording exactly which side of the
   saddle is included. This step needs a separate local sector-index
   calculation for the pinched boundary; the global disk formula does not
   provide it. In the two-lobe case, each lobe contains a center, so a lobe
   chosen for induction has fewer centers than the domain containing both.

The route still needs a maximality/ranking argument. A finite number of
saddle graphs does not by itself prevent cycling between domains. The proof
must show that an inessential-graph advance strictly enlarges the saturated
domain (so the old graph becomes interior and cannot recur), while a lobe
reduction strictly decreases the number of centers. For a pinched annulus,
the exact domain and the lobe whose center count is compared must be specified;
the current notes do not state that inclusion/count relation precisely.

## Precise unresolved obstruction

The unresolved claim is not a missing elementary Jordan-curve fact. It is the
transition from a generic characteristic line field to a selected, compact
finite graph whose saddle vertices and complementary regions have the
claimed incidence. The checked-in prerequisites give the total disk index
and topology *after* a suitable graph exists, but not:

- Poincaré–Bendixson exhaustion of the relevant characteristic frontier,
- distinct ambient leaves for tangencies or an alternative treatment of
  heteroclinic saddle connections,
- the boundary-saddle sector/index formula for disk versus pinched-annulus
  pieces, or
- a maximality/strict-inclusion rule excluding graph revisits.

Until those local statements are proved with the $C^2$ hypotheses and
boundary orientations explicit, the exhaustive disk/nested-lobe/one-saddle/
figure-eight/pinched-annulus incidence and its center-count inequalities
remain `not-supplied`. No theorem statement needs narrowing, but this scaffold
carrier cannot yet be used as a proved supplier.
