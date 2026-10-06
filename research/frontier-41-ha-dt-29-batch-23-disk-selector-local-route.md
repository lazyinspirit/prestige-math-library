# Batch 23: center-annulus disk selector and essential-frontier route

Run: `frontier-41-ha-dt-29`, read-only proof-support task. This is a new
research memo only. It changes no item, page manifest, coverage record,
cross-batch ledger, receipt, gate, or controller state.

## Finding

There is a local selector route that avoids the rejected finite-annulus
adjacency graph and does not infer a simple lobe from `c-s=1`. Its key
reduction is:

1. separate the finitely many saddle images into distinct ambient leaves by
   a relative transverse-coordinate perturbation under the already explicit
   `AC_ω` contract;
2. take the maximal connected period annulus born at one center, and use the
   locally reconstructed flat-drift/Poincaré–Bendixson frontier route;
3. use connectedness of the frontier graph and the distinct-leaf condition
   to reduce any saddle graph to one saddle; the source-disk topology then
   excludes a figure-eight frontier but leaves a nested two-loop pinched
   annulus as a genuine alternative;
4. in the one-loop case, the loop bounds a lobe containing exactly the
   selected center and no other characteristic singularity; an essential
   image gives a vanishing cycle, while a null image supplies the fixed
   leafwise cap needed by relative center–saddle cancellation. The nested
   pinched-annulus case requires a separate boundary-saddle sector/advance
   lemma and is not consumed by the one-lobe cancellation.

This route narrows the disk-selector alternatives conditional on the local
carriers listed below. It does **not** yet close the disk theorem: the one-sided `C²` saddle-rounding trace and the
collar-fixed center–saddle cancellation remain `not-supplied`. Those are the
exact residual proof obligations. The full Novikov conclusion and current
`C²`/`AC_ω` contracts remain unchanged.

The route uses no finite graph of all annulus faces, no Jordan–Schönflies
assumption, and no inference from the global center-minus-saddle count to a
one-saddle lobe. The lobe comes from the maximal annulus frontier, the
saddle-leaf perturbation, and the nested-domain topology.

## Authoritative source audit

- **Novikov, *The Topology of Foliations*, §6, Theorem 6.1**, complete
  author-hosted English translation, printed pp. 16–19
  ([source PDF](https://homepage.mi-ras.ru/~snovikov/23.pdf)). Part 1 gives
  the center-outward selector: nearby center loops are null in their leaves;
  if a first loop is non-null it supplies the desired limitwise-null class;
  otherwise one examines separatrix cycles, fills null separatrix regions,
  and uses Haefliger's limit-cycle result on the remainder. Part 3, the
  compressible-leaf case, is only called “entirely similar”; the text adds
  that boundary saddles do not change the argument but gives no boundary
  sector or cancellation proof. Thus it locates the correct finite-domain
  route but does not close the local disk selector.
- **Ranz, *Approximately Holomorphic Techniques in Foliations*, §3.2.3,
  Proposition 3.6, printed pp. 52–54**, complete author-hosted thesis
  ([source PDF](https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf)). The
  proof chooses a maximal saturated center region whose regular characteristic
  loops bound leafwise disks, argues that an unclosed frontier gives a
  vanishing cycle, and treats a shared-saddle figure-eight by an innermost
  lobe and finite center–saddle reduction. The proof assumes an immersed
  spanning disk and generic separation of singular images, then invokes
  Poincaré–Hopf and leaves the relative replacement/smoothing as an outline.
  It is a route source, not a complete `C²` carrier for the present map-level
  hypotheses.
- **Brittenham, *Foliations and the Topology of 3-manifolds*, class 11,
  author-hosted notes, PDF pp. 1–3**
  ([source PDF](https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf)).
  The five-frontier alternatives, the two one-saddle pictures, and the
  innermost figure-eight descent agree with the route below. The note says
  “smooth off” the null center–saddle pair but does not give a collar-fixed
  map, cap seam, Morse triad, or `C²` estimates. The source audit in
  `frontier-41-ha-dt-29-batch-23-candel-audit.md` correctly treats it as an
  outline at that step.
- **Haefliger, “Variétés feuilletées,” §4.2, Proposition 4.2, printed
  pp. 390–392**, complete Numdam scan
  ([archive record](https://www.numdam.org/item?id=ASNSP_1962_3_16_4_367_0)).
  It obtains a minimal limit cycle by ordering the nontrivial-holonomy cycles
  by inclusion and invoking Zorn's lemma. The limit step preserves a
  nontrivial germ by a marked displacement witness. The current batch's
  attempted area-minimizing/return-germ limit does not preserve such a
  witness: nonidentity germs may converge in `C²` to the identity. The
  proposition is useful for the null-transversal source route, but its Zorn
  selector is not a proof under `AC_ω` as presently stated.
- **Candel–Conlon, *Foliations II*, §9.2, pp. 290–296**, is cited in the
  research notes as the finite-domain route locator. The AMS sample and
  available Google Books preview do not expose the complete proof, so no
  unstated case split or smoothing step is credited to it.
- **Moerdijk–Mrčun, *Introduction to Foliations and Lie Groupoids*, §3.2,
  print pp. 65–80**, is a further authoritative proof lead. Cambridge's
  official chapter record says it presents a detailed proof of Novikov's
  theorem ([chapter record](https://www.cambridge.org/core/books/abs/introduction-to-foliations-and-lie-groupoids/two-classical-theorems/2ED6BFED60325632534AE9F484EED0E4));
  the full chapter was access-gated in this audit and is not used as a
  supplier. Institutional full-text access would be a sound independent
  source-audit alternative.
- **Teschl, *Ordinary Differential Equations and Dynamical Systems*, §7.3,
  Theorem 7.16, printed pp. 223–224**, author-hosted complete text
  ([source PDF](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf)).
  Its generalized Poincaré–Bendixson conclusion is reconstructed locally in
  the batch23 carrier for the modified precompact orbit. Teschl explicitly
  allows infinitely many connecting orbits in general. Here finiteness is
  supplied only after every frontier equilibrium is shown to be a
  hyperbolic saddle: each has exactly two outgoing branches.

## Conditional local disk-selector lemma

Here is the exact selector that the current proof DAG can support once the
listed carriers are completed.

> **Center-annulus selector.** Let `F` be a `C²` cooriented codimension-one
> foliation of a closed `3`-manifold and let `h:D²→M` be a relative-generic
> `C²` characteristic disk under `AC_ω`. Suppose its boundary is either a
> closed transversal or an essential loop in one leaf. After a rel-boundary
> perturbation separating saddle images into distinct leaves, choose a center
> and its maximal connected annulus of regular closed characteristic orbits.
> Its outer frontier is either (i) a regular closed characteristic orbit,
> (ii) one simple homoclinic saddle loop bounding a source-disk lobe with
> exactly that center and no other characteristic singularity, (iii) a
> nested two-loop pinched annulus with one saddle on its frontier, or (iv) the
> prescribed leafwise boundary orbit. In case (i), an essential image yields
> a vanishing cycle; a null image extends the annulus and cannot be an
> interior maximal frontier. In case (ii), an essential image yields a
> vanishing cycle after the one-sided rounding trace is supplied; a null
> image has one fixed leafwise cap and meets the geometric inputs of the
> collar-fixed cancellation carrier. Case (iii) needs a separate
> boundary-saddle sector/advance lemma and is not covered by case (ii). Case
> (iv) is relevant only for a leafwise boundary, whose essential loop is the
> terminal vanishing cycle.

The proof uses the following supplier chain.

### 1. Relative position and saddle-leaf separation

`lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary`
now states `AC_ω` explicitly. It supplies a regular fixed boundary collar and
finitely many nondegenerate centers and saddles. The reviewed
`lem-characteristic-disk-center-saddle-index-count` supplies `c-s=1`, so a
center exists initially and remains available after each center–saddle
cancellation. This count is used only for existence/termination; it does not
select the lobe.

Before using the frontier graph, apply the canonical rel-collar lemma
separating the finite saddle images into distinct ambient leaves. The research audit
`frontier-41-ha-dt-29-batch-23-distinct-saddle-leaf-perturbation-audit.md`
gives the local construction and its exact `AC_ω` interface. The current
canonical manifest now contains its three supplier items:
`lem-c2-leaf-intersection-with-a-box-transversal-is-countable`,
`lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity`, and
`lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar`.
Their exact levels, dependency paths, and current readiness receipts are in
the status table below. In each source saddle disk, write `h=(Y,u)` in a
target foliation box `(Y,z)` with
`u=z∘h`. Shift `u` by a sufficiently small constant near the saddle and
cut the shift off in a regular annulus. The critical point, Hessian, other
zeros, and prescribed boundary collar stay fixed; the transition remains
regular because `|du|` has a positive minimum on the compact support of the
bump derivative. At each of finitely many stages choose the new transverse
value outside the countable intersections of the previously used leaves
with a local transversal. The canonical C² countability item supplies this
step even though the shared-library maximal-leaf theorem is stated for smooth
foliations: its countable plaque-chain argument uses the C² atlas and
`AC_ω`.

If a regular characteristic trajectory connects saddle `p` to saddle `q`,
its image lies in one ambient leaf. Near each endpoint it lies in a single
foliation plaque, so continuity puts `h(p)` and `h(q)` in that same leaf.
The distinct-leaf perturbation therefore forbids all heteroclinic connections
between distinct saddles. This is a separate perturbation lemma; it is not a
consequence of current relative genericity or `c-s=1`.

### 2. One maximal period annulus, not an annulus-adjacency graph

Choose a small center circle in a foliation box. Its image is in one plaque
and has a compact leafwise cap. The regular characteristic trajectories
around it form a period annulus with the `C²` product coordinate from
`lem-characteristic-period-annulus-has-a-smooth-product-coordinate`. Its
level family is a jointly `C²` transverse trace: the product parameter is
chosen transverse to `ker(h*ω)`, so `ω` evaluates nonzero on each point
track. The one fixed cap and
`lem-nullhomotopy-persists-under-a-compact-transverse-deformation` show that
every prescribed loop in every compact subannulus is null-homotopic in its
own leaf.

Let `C_s` be the nested regular loops, `D_s` their bounded source disks, and
`U=⋃_s int(D_s)`. The source disks are genuinely disks without importing
Jordan–Schönflies: start with a small explicit center disk and attach the
compact annulus supplied by the product coordinate. The domains increase.
Their union is simply connected: a loop has compact image, so finitely many
nested `int(D_s)` cover it; the largest chosen disk contains and contracts
the loop. Membership of any other characteristic zero in `D_s` is constant
in `s`: that zero cannot lie on a regular periodic orbit, so it cannot cross
the continuously varying boundary. Since a sufficiently small center disk
contains no other zero, no other center or saddle lies in any `D_s`.

Use the flat-drift carrier to make the outer frontier `Γ=∂U` the omega-limit
set of one `C¹` orbit of a field agreeing with the original characteristic
field on `Γ`. The local generalized Poincaré–Bendixson carrier then gives a
regular orbit or a finite saddle-separatrix graph. Finiteness follows from
the two outgoing branches at each hyperbolic saddle, not from a finite
annulus-face decomposition; this route never uses the disproved
finite-annulus-adjacency graph.

The saddle calculation in that graph proof must retain the foliation factor.
In a connected saddle chart write
`β=a(h)d(x²-y²)` and `μ=m dx∧dy`, with `a(h)≠0`, `m>0`. Then
`X=-(2a(h)/m)(y∂x+x∂y)`. The sign is constant after shrinking the chart;
its stable and unstable rates are bounded using the positive minimum and
finite maximum of `2|a(h)|/m`. The four separatrix half-branches remain the
exact two incoming and two outgoing branches. Omitting `a(h)/m` would not
justify the graph's contraction/expansion estimates.

The limit graph is connected. Distinct saddle leaves forbid edges between
different saddle vertices, so a graph containing saddles has only one
vertex. A hyperbolic saddle has exactly two outgoing local branches, so its
frontier graph has at most two homoclinic loop edges. The union of the
period annulus and its core disk lies in one connected component of
`R²\Γ`; `U` is connected, bounded, and simply connected, and `∂U=Γ`.
Consequently `U` is a whole component of the complement: within the
component it meets, it is both open and closed because it has no frontier
there. If `Γ` consisted of two loops meeting at the saddle, the figure-eight
case has bounded complementary components whose frontiers are the individual
lobes, while the unbounded component is not `U`; hence it cannot be the full
frontier of this bounded component. In the nested case, the component with
both loops as frontier is a pinched annular domain. It can be simply
connected because the two frontier loops meet at the saddle, so simple
connectivity of `U` does **not** exclude it. Thus the frontier is either one
simple homoclinic loop or a nested two-loop pinched annulus. These conclusions
use finite Jordan separation and local winding, not Schoenflies. In the
one-loop case it bounds `U`, contains the selected center, and has no other
zero in its bounded source region. In the pinched case `U` still contains
the selected center and no other zero, but the complementary inner disk may
contain singularities; no one-lobe cancellation follows. This is the precise
limit of the selector reduction, not an inference from `c-s=1`.

The plane topology used here is finite Jordan separation for regular or
finitely-cornered embedded loops, plus the explicit nested-domain argument.
It does not use Jordan–Schönflies. To supply the compact disk required by
the cancellation statement, add the special collar lemma: round the one
saddle corner in its local sector chart, polygonize the finitely many regular
arcs inside disjoint tubular collars, and transfer the explicit finite
polygonal disk parametrization through those collars. This is finite chart
and polygon data; it is not a general Schoenflies invocation.

### 3. The essential-versus-null frontier fork

At a regular outer orbit `P`, the characteristic return map on a transverse
section in the source agrees with ambient foliation holonomy along `P`.
If `[P]` is null in its leaf, its holonomy germ is the identity, so the
regular family of closed characteristic orbits extends past `P`; such a
regular orbit cannot be an interior maximal frontier. If `[P]` is essential,
the regular product trace extends to `P`, and the null center caps on the
inside make it the endpoint of a vanishing cycle. For a leafwise boundary,
the same trace terminates at the prescribed essential boundary loop. For a
transverse boundary, a collar has nonzero normal characteristic component,
so it contains no closed characteristic orbit; the annulus frontier cannot
be that boundary.

For a one-loop frontier `Γ`, the full map `h|Γ` lies in one ambient leaf: on
each regular edge the transverse coordinate `z∘h` is constant, and in the
saddle chart its limiting value is `z(h(p))`. If this loop is essential, a
one-sided `C²` rounding carrier should replace the saddle passage by a path
inside its plaque. Concretely, take a small source saddle disk; its boundary
meets the local Morse levels transversely, so the level-arc endpoints vary
`C²` with the transverse value by the finite-dimensional implicit-function
argument. In a foliation chart all endpoints for a given level lie in one
plaque. Replace the hyperbolic level arc inside that plaque by a rounded arc
with the same endpoint collars, chosen `C²` in the plaque parameter. Outside
the saddle disk keep the regular annulus trace. Since plaque arcs at fixed
level are leafwise homotopic, the modified loops remain in the same leaves
and represent the same endpoint class; their point tracks have nonzero
transverse derivative (use the foliation plaque coordinate as parameter).
This is the exact local construction needed by
`lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family`;
its endpoint collar/jet matching and proof that the entire trace is jointly
`C²` remain to be written. Once supplied, the interior loops are null by
compact-cap transport and the essential endpoint gives a vanishing cycle by
`lem-first-essential-loop-of-a-transverse-family-is-a-vanishing-cycle`.

If `[h|Γ]=0` in the one-loop case, choose one compact leafwise filling of a
rounded loop. Nullhomotopy supplies a continuous filling. A separate local
relative-`C²` smoothing lemma in the intrinsic leaf charts must produce a
`C²` cap fixing its prescribed boundary; only then use
`lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar`
and the one-sided compact-cap persistence statement. The fixed cap is the
only filling used; no limit of varying disks is taken. This produces the
inputs for
`lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation`.
The cancellation carrier is still not supplied: it must complete its compact
Morse triad and single attaching/belt intersection, preserve the exact outer
collar, glue the cap product, and prove the relative `C²` scalar adapter.
The disk selector must not call it proved before those clauses close.

### 4. Strict finite reduction and boundary termination

For every null one-loop frontier, the local cancellation must remove exactly
one center and one saddle while leaving the prescribed outer boundary map
and regular collar unchanged. The relative index supplier applies to the new
disk and preserves `c-s=1`. Use the nonnegative integer `s`, the number of
saddles, as the outer induction rank; it decreases by one at every null
one-loop cancellation. Reapply relative genericity after cancellation only
with a sufficiently small perturbation supported away from the collar, so
nondegenerate exterior zeros persist and no new zero appears on the compact
regular complement. Re-separate the remaining finite saddle leaves before
the next frontier step. No cycle of graph faces or non-revisiting assumption
is needed.

When `s=0`, `c-s=1` gives exactly one center. Its maximal regular annulus
has only regular frontiers. An internal null frontier extends by the
identity-return argument; an essential frontier gives a vanishing cycle.
If the disk boundary is leafwise and essential, reaching it gives the same
vanishing cycle. If the boundary is transverse, its collar cannot contain
closed characteristic loops, so a maximal annulus must have an interior
frontier; if that frontier were null it would extend. This contradicts
maximality, so the essential-frontier alternative occurs. Thus the route
preserves both full disk theorem conclusions without weakening the
compressible or null-transversal statements.

The finite rank argument is valid **conditional on** the lobe cancellation
carrier. It does not turn a sketch into a proof: the compact triad, cap seam,
branch incidence, and `C²` adapter are concrete independent obligations.

## Exact dependency and status map

| Carrier | Exact in-run inputs | Current state / unresolved clause |
|---|---|---|
| Relative disk position and index | `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary`; `lem-characteristic-disk-center-saddle-index-count`; `def-countable-choice-principle-for-foliation-pair` | Both proofs are locally reconstructed and now declare the inherited `AC_ω` contract. Index provides existence/termination only. |
| C² leaf-intersection countability | `lem-c2-leaf-intersection-with-a-box-transversal-is-countable` (level 1); direct deps: `def-c1-regular-codimension-one-foliation-and-transverse-orientation`, `def-countable-choice-principle-for-foliation-pair`, `thm-second-countable-implies-lindelof`, `def-natural-number-coding-of-finite-sequences`, `cor-components-of-open-subsets-of-rn-are-polygonally-connected` | Canonical item; its current Step-1 receipt says `decision: ready` (`owner: false`). `AC_ω` is used to extract a countable box atlas; after that, finite plaque-word coding is deterministic. The receipt records construction readiness, not Step-3 proof certification. |
| C² plaque transport and collar gluing | `lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity` (level 3); direct deps: `def-c1-regular-codimension-one-foliation-and-transverse-orientation`, `lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs`, `thm-euclidean-inverse-function-theorem` | Canonical item; its current Step-1 receipt says `decision: ready` (`owner: false`). It proves regularity for specified finite transports and compatible collar traces; it does not supply an endpoint family or saddle rounding. The receipt is construction readiness, not proof certification. |
| Distinct singular leaves | `lem-characteristic-disk-singular-images-can-be-separated-into-distinct-leaves-rel-collar` (level 4); direct deps: `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary`, `lem-c2-leaf-intersection-with-a-box-transversal-is-countable`, `lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity`, `lem-manifold-bump-for-a-compact-set-inside-an-open-set`, `cor-interval-uncountable`, `def-countable-choice-principle-for-foliation-pair` | Canonical item; its current Step-1 receipt says `decision: ready` (`owner: false`). Its supplier paths are separation → C² countability (level 1) and separation → C² transport/gluing (level 3); the latter depends on the C¹ foliation and holonomy interfaces plus the Euclidean inverse theorem. The countability path depends on the C¹ foliation interface, pair-local `AC_ω`, Lindelöf, finite-sequence coding, and polygonal connectedness of open Euclidean sets. `AC_ω` is explicit; no full-AC premise is added. As above, `ready` is construction readiness, not proof certification. |
| Period annulus and frontier | `lem-characteristic-period-annulus-has-a-smooth-product-coordinate`; `lem-flat-drift-realizes-a-period-annulus-frontier-as-an-omega-limit`; `lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit`; `lem-finite-saddle-omega-graph-is-strongly-connected`; `lem-finitely-cornered-regular-plane-curve-separates-without-choice`; local ODE flow/uniqueness and `thm-heine-borel-rn` | Product, local generalized Poincaré–Bendixson, flat drift, and saddle graph are scaffolded locally; the main frontier item remains `not-supplied` pending review/integration and raw dependency choice-clause audit. Retain `AC_ω`; no full AC or finite-annulus-face graph is used. |
| Regular cap transport / essential fork | `lem-nullhomotopy-persists-under-a-compact-transverse-deformation`; regular orbit holonomy; `lem-first-essential-loop-of-a-transverse-family-is-a-vanishing-cycle` | Regular orbit identity-return argument is local. Persistence transports one fixed compact cap only on an already-given compact trace. |
| Saddle polycycle rounded trace | Existing `lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family`; it needs a new same-pair one-sided plaque-arc/jet-matching support lemma, finite foliation charts, a local `C²` implicit-function/level-arc argument, and `lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity` | Exact missing proof is the jointly `C²` arc replacement with matching collars and everywhere nonzero transverse track at the endpoint. Current carrier remains `not-supplied`. |
| Lobe disk/cap/cancellation | Special finite-corner disk collar/triangulation lemma (or an inline finite polygonal proof); proposed `lem-relative-c2-smoothing-of-a-leafwise-null-disk`; `lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar`; `prop-morse-cancellation-criterion-via-a-unique-connecting-orbit`; `lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood`; `def-countable-choice-principle-for-foliation-pair` | Current cancellation item remains `not-supplied` on the compact triad, the exact gradient attaching/belt incidence, cap/collar matching, and relative C² scalar adapter. |
| Pinched-annulus advance | The class-sensitive alternative below: combined graph essentiality plus rounded trace; both based lobe classes trivial plus the two-sided product/cap transport; or a common essential lobe plus boundary-saddle collar/index descent | Nullity of the combined word alone does not imply individual lobe holonomy is trivial. The all-null return-map construction is finite and conditional on exact saddle-chart/collar matching; the essential-lobe branch still needs its boundary-saddle induction interface. The source's nested disk/annulus replacement remains an outline. |
| Disk theorem and wrappers | The selector above; repeat one-loop cancellation under finite saddle rank; `lem-a-compressible-leaf-yields-a-vanishing-cycle` / `lem-a-nullhomotopic-closed-transversal-yields-a-vanishing-cycle` | The selector route preserves the statements but cannot be promoted until its frontier, rounding, pinched-annulus advance, and cancellation suppliers are complete. |

The local planar separation clauses do not use Jordan–Schönflies or full
AC. The existing notes correctly flag that the raw transitive dependency
closure of some broad analytic/topological suppliers still has unused mixed
AC/DC paths; the proof-clause route is choice-free beyond the declared
`AC_ω`, but the formal choice-scope gate needs its separate clause-use audit.

## Precise residual obstruction and sound alternatives

The source and local topology now isolate the true obstruction. Under the
period-frontier and distinct-saddle-leaf lemmas, the frontier selector
reduces the graph to a one-loop lobe or a one-saddle nested pinched annulus;
this does not require classifying all annulus faces. The simple lobe has the
one-center/one-saddle geometry needed by the conditional cancellation.
The nested pinched annulus must be split by the two based lobe classes. The
new audit below proves a strict lower-center subproblem when the common lobe
class is essential and gives a finite-chart two-sided-band route when both
lobe classes are trivial. It also shows that nullity of the *combined*
boundary word alone does not force either conclusion: the two lobe holonomy
germs can be equal and nonidentity. The essential-combined-word case still
needs the one-sided rounded trace, and the essential-common-lobe case needs
the boundary-saddle induction interface. The null one-loop case still needs
the collar-fixed Morse cancellation and `C²` gluing.

The sound alternatives are: (a) complete the preferred same-pair rounded
trace, one-loop compact-cap Morse cancellation, and the class-sensitive
pinched-annulus cases under `AC_ω`; or (b) replace the surgery with a
separately proved local theorem that a null-holonomy saddle polycycle carrying
a fixed leafwise cap has a one-sided product neighborhood of its prescribed
closed loops. A bare identity holonomy citation is not
that theorem, because characteristic return at a saddle is not ordinary
holonomy without the saddle-chart construction. Do not return to the
false finite-annulus adjacency argument, the area-minimizer of nonidentity
germs, or a full-AC Schoenflies shortcut. No owner choice or theorem
weakening is needed; the remaining work is local proof completion.

## Nested pinched-annulus boundary-saddle audit

This audit addresses the exact two-loop case in item (iii). I read the
complete source passages, not only the prior summaries:

- **Novikov**, *The Topology of Foliations*, §6, Theorem 6.1(1),(3), complete
  English translation, printed pp. 17–19 (PDF pp. 17–19). On pp. 17–18 the
  center argument fills null separatrix regions and selects an innermost
  non-null curve; on p. 18 the compressible case is only called “entirely
  similar,” with the observation that saddle points may occur on the disk
  boundary. It gives no nested-loop sector or cancellation proof.
- **Ranz**, *Approximately Holomorphic Techniques in Foliations*, §3.1,
  Proposition 3.6, printed pp. 53–54 (PDF pp. 75–76). The exact nested
  subcase on printed p. 53 assumes `∂Δ₁⊂Δ₂` and says that the closed
  difference curve `s∪∂Δ₂\∂Δ₁` bounds a disk in the leaf; it then asserts a
  replacement map with one fewer center. Figure 1 on printed p. 54 depicts
  the nested configuration. The cap and the strict center decrease are
  useful source data; the relative replacement map is not constructed.
- **Brittenham**, *Foliations and the Topology of 3-manifolds*, class 11,
  author-hosted notes, PDF pp. 2–3. Page 2 lists the two saddle pictures;
  page 3 calls the first the “inside-out figure-8” case, chooses an
  innermost half-lobe, and invokes the Euler count before saying to cancel.
  The text/drawing supplies no collar-fixed `C²` map or boundary-saddle
  index proof.
- **Candel–Conlon**, *Foliations II*, §9.2, Proposition 9.2.5 and Lemma
  9.2.4, remains a limited-preview locator only. The accessible material is
  not the full proof, so it is not used to close any branch below.

### Exact geometry and the class split

Let `h:D²→M` be a `C²` characteristic disk in the stated `AC_ω` setting.
Assume the source has a compact pinched-annulus block whose frontier is
`Γ=γ_o∪γ_i`: two simple, otherwise disjoint, separatrix loops meeting at one
nondegenerate saddle `p`, with `γ_i` inside `γ_o`. The open shell between
them contains a regular annulus of closed characteristic orbits and at
least one selected center `c`; the local saddle disk and finitely many
regular edge strips contain no other singular point. The loops map into one
leaf `L` and are based at `h(p)`. Orient them so the limiting annulus word
is `g=[h∘γ_o][h∘γ_i]^{-1}`; write `α=[h∘γ_o]` and `β=[h∘γ_i]`.

The annular word is the relevant endpoint class, while the two lobe words
control the other saddle-sector pairing. If `g=1`, then `α=β`; this does
**not** imply `α=β=1`. For example, the germ
`H(t)=t+t²` is an orientation-preserving `C²` local diffeomorphism near
zero with no nonzero fixed point. The lobe data `H,H` have identity
composite `H∘H^{-1}` for the annular word, while the other pairing can have
return `H²`, which has no nonzero fixed point. Such one-dimensional germs
are realized as holonomy in a suspension. Thus an identity return for the
combined pinched boundary does not by itself create closed orbits around
either individual lobe. This is a realizable holonomy-data obstruction to
the blanket inference; it is not a global counterexample to Novikov's
theorem or a full disk-map counterexample. A proof of strict advance must
use the separate lobe germs or an additional source-domain argument.

The source-domain topology does give a strict rank drop in the common
essential-lobe branch. Let `D_o` and `D_i` be the bounded source disks of
`γ_o` and `γ_i`. Then `D_i⊊D_o`, and `c∈D_o\D_i`; hence
`#centers(D_i)≤#centers(D_o)-1`. This is a real finite induction decrease,
not a consequence of `c-s=1`. But `∂D_i` still has the saddle `p` on its
boundary. Applying the disk theorem to it requires a local boundary-saddle
collar/rounding result that preserves the essential class and does not add
interior centers. Neither the simple interior-lobe cancellation nor the
global center count supplies that interface.

### Conditional all-null strict-advance proof

Under the stronger, exact hypothesis `α=β=1` (both lobe loops
nullhomotopic in `L`), the finite-chart return-map argument gives a local
two-sided band of closed characteristic orbits. The band is a strict
domain advance once its rounded collar and cap matching clauses are
supplied:

1. Cover the saddle by one C² foliation chart. On its source saddle disk,
   `u=z∘h` is a C² Morse saddle and the four separatrix half-branches are
   the four arcs of `u=0`. Cover the remaining compact regular edges by
   finitely many source strips mapping into foliation boxes. In every
   strip, a transverse coordinate `t_e=z_e∘h` is a local first integral
   for the characteristic line field, and on chart overlaps the
   coordinates differ by a C² one-variable local diffeomorphism.
2. Choose a finite tree in the source graph, start with the saddle chart's
   coordinate `u`, and continue that parameter along the tree by plaque
   transport. Each non-tree edge closes one of the two lobe loops. Its
   monodromy is the ambient holonomy of `h∘γ_i` (the saddle passage itself
   preserves `u`, because it lies in a single plaque). Since both based
   loops are null, both holonomy germs are the identity. The two cycle
   relations therefore make the transported C² parameter independent of
   path on a sufficiently small common interval. It defines a first
   integral `t` on a neighborhood of `Γ`, with `dt≠0` off `p` and the
   original nondegenerate saddle at `p`.
3. In the saddle chart, for each small nonzero `t`, the local level arcs
   pair the four boundary sections in one of the two saddle pairings. Along
   every regular edge strip the endpoint parameter is exactly the
   holonomy transport. Identity of both lobe return germs makes the
   endpoints match for either pairing, after shrinking to the intersection
   of finitely many chart intervals. The resulting level components have
   no endpoints and stay in the finite graph neighborhood; each is a
   compact regular characteristic circle. One sign is the existing
   center-annulus side; the opposite sign supplies closed circles on the
   other side. The graph and these two-sided orbit bands contain an open
   neighborhood of `Γ`, so adjoining that neighborhood strictly enlarges
   the saturated domain and moves `p` into its interior. No new zero occurs
   in the chosen collar.
4. Each lobe has one fixed compact continuous leafwise null disk. If the
   local saddle-chart rounding is jointly C² and matches the actual level
   arcs on open collars, it gives a C² trace from the rounded lobe loop to
   the prescribed neighboring level loops. Apply
   `lem-nullhomotopy-persists-under-a-compact-transverse-deformation` to
   that one fixed disk. The rounded replacement and the actual level arc
   are plaque-wise homotopic, so the actual new orbits are nullhomotopic,
   not merely closed. The enlargement is then admissible in a no-limit-cycle
   domain. For repeated advances, count the distinct saddle vertices still
   on the boundary: each advance makes `p` interior and the domains are
   nested, so `p` can never be a later boundary vertex. The finite number
   of source saddles gives strict finite termination of this advance
   operation.

This proof is finite and works in the parameter domain; it does not assume
that `h` is an embedding or that its image has an embedded foliated
neighborhood. Its declared local suppliers are:
`lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary`
(the nondegenerate C² saddle model);
`lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity`;
`lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs`
and `thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints`
(identity monodromy for null lobe loops); plus
`lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family`,
and `lem-nullhomotopy-persists-under-a-compact-transverse-deformation`
(the rounded trace and exact prescribed-loop fillings). The rounding item
is not-supplied at the needed two-sided interface. The chart and edge cover is finite;
there is no new choice use beyond the ambient `AC_ω` contract. The C²
rounded trace must match the actual level arcs on open collars, and the
compact nullhomotopy-transport interval must include the prescribed trace
range. Those are explicit verification conditions, not consequences of an
arbitrary free-homotopy replacement.

### Corrected output and remaining supplier contract

The proposed case-(iii) lemma is therefore false if its input records only
that the *combined* pinched boundary word is null or has trivial holonomy.
The sound replacement is the following class-sensitive alternative:

- If `g≠1`, the existing one-sided annulus family yields a vanishing cycle
  once the C² rounded endpoint trace is supplied.
- If `g=1` and `α=β=1`, the finite-chart two-sided construction above
  strictly advances the null-orbit domain across the saddle.
- If `g=1` and `α=β≠1`, take the inner lobe disk, which has strictly fewer
  centers. To continue the induction, supply a same-pair
  `boundary-saddle lobe reduction` proving that its essential piecewise
  C² boundary can be rounded/regularized rel an outer collar without adding
  centers and that the resulting lower-center disk satisfies the ordinary
  relative genericity contract. The return-germ example shows why this
branch cannot be replaced by an all-null product-band claim.

## Period-frontier supplier-composition audit

I re-read the current canonical Statements and strategies for the period
frontier and its four direct dynamical suppliers. The contracts are:

| Item | Current contract relevant here |
|---|---|
| `lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier` | `proof: not-supplied`, level 4. Assumes a C² foliation, C² relative-generic disk map and `AC_ω`; asserts the maximal center annulus frontier is a regular orbit, a finite strongly connected saddle graph, or the leafwise disk boundary. Its strategy defines `β=h*ω` and `i_X μ=β` off the zero set, then applies the other carriers. |
| `lem-characteristic-period-annulus-has-a-smooth-product-coordinate` | `proof: locally-proved`, level 2. Its Statement assumes a **C² planar vector field** and gives a C² annulus product `Ψ`. Its proof uses a C² transverse field `JX`, a C² section and a C² flow to derive a C² least-return-time function by a scalar-root argument. |
| `lem-flat-drift-realizes-a-period-annulus-frontier-as-an-omega-limit` | `proof: locally-proved`, level 3. Its Statement assumes a **C²** planar field on an open neighborhood of compact `D`, a C² product `Ψ`, nested Jordan leaves and compact `Γ`. It returns a C¹ field `Y` equal to `X` on `Γ` and a positive orbit with omega-limit exactly `Γ`. |
| `lem-local-generalized-poincare-bendixson-for-a-precompact-planar-orbit` | `proof: locally-proved`, level 2. It assumes a C¹ field on open `U`, a positive orbit with compact closure `K₀\Subset U`, and finitely many equilibria in `ω⁺`; its proof explicitly allows infinitely many saddle connections. |
| `lem-finite-saddle-omega-graph-is-strongly-connected` | `proof: locally-proved`, level 3. It assumes the modified field is C¹, its positive orbit has compact closure in an open neighborhood, `Γ=ω⁺`, and `Y=X`, `DY=DX` on `Γ`; it also needs the selected frontier to separate two points. |

### Composition after the product-and-drift interface

The modified-orbit part matches the PB and graph contracts, conditional on
the product and drift hypotheses. If the annulus product is C² and `X` is
C¹, the flat-drift estimates still work: in product coordinates write
`X=a(s,θ)∂θ` with `a>0`, put
`m(s)=min_θ a(s,θ)` and `L(s)=max_θ|∂_sΨ|`, and choose the same positive
drift bound
`b(s)≤min((1-s)²,(1-s)²m(s)/(1+L(s)))`. The proof only needs continuity
of `a,m,L`, a C¹ transverse vector `W=Ψ_*∂s`, and a C¹ `X` to conclude
`Y=X+bW` is C¹. The bandwise flatness estimates give `V=bW=0` and
`DV=0` on `Γ`, hence `Y=X` and `DY=DX` there. The existing drift Statement
is stronger than these uses when it requires `X∈C²`; weakening it to C¹
would leave the speed, omega-limit, and zero-extension arguments intact,
provided `Ψ` remains C².

The compact-orbit hypothesis is also available. Start at a fixed
`s₂<1`. Monotonicity of `s(t)` keeps the orbit between `C_{s₂}` and `Γ`,
inside the compact disk `D`; it approaches `Γ` only at infinite time.
Because `Y` is defined on an open neighborhood `U` of `D`, its orbit closure
is a compact subset `K₀\Subset U`. The flat-drift estimates supply
`ω_Y⁺(y)=Γ`. The frontier is compact, since it is the boundary of the
bounded open union of the nested Jordan disks and lies in `D`. The
characteristic map has only finitely many zeros; the drift has no zero on
its support (`ds(Y)=b>0`), and `Y=X` on `Γ`. A center cannot lie on `Γ`:
near any center, a small invariant neighborhood is filled by its own
closed leaves, whereas every `C_s` encloses the selected center, so a
different center cannot be a limit point of this annulus. Thus `Γ` has
only finitely many saddle equilibria or none. Finally, `Γ=∂U_A` for the
union `U_A` of the bounded Jordan domains `D_s`; it separates a point in
the fixed center disk from any point outside `D`. The graph supplier's
separator input is therefore met without treating `Γ` as a Jordan curve.

The local generalized Poincaré–Bendixson and finite-graph suppliers then
compose exactly as stated: the former is applied to this C¹ modified field
and its compact orbit closure in the open neighborhood, and the latter
uses `DY=DX` on `Γ` to recover the original characteristic saddle type.
The modified orbit bypasses any need to bound the original characteristic
return times near a saddle.

### First missing regularity bridge

The current C² hypotheses do **not** supply the C² vector field demanded
by the product and drift Statements. In foliation coordinates let
`u=z∘h`, where `z` is the local C² transverse coordinate and `h` is the
C² disk map. Then `u` is C², so the characteristic leaves are locally
the C² level curves `u=constant`; however `du` is only C¹. Equivalently,
for a defining form `ω`,
`β_i(x)=Σ_j ω_j(h(x))∂_i h^j(x)` is in general only C¹ when `h` is C²,
and the vector field defined by `i_X μ=β` is only C¹, including at its
Morse zeros. The smoothness of `ω` does not raise the regularity of `Dh`.
Therefore neither the current C²-vector-field period product proof nor
the current C²-vector-field drift Statement can be invoked directly from
the frontier Statement. This is a genuine supplier-contract mismatch;
it is not repaired by the C² map-level Morse genericity or by the ACω
assumption.

The smallest local repair is a C² **foliation-product** lemma for the
characteristic annulus, not an upgrade of `X` to C². Its exact contract
should take the C² local first-integral atlas `u=z∘h`, a regular annulus
whose leaves are nested compact characteristic circles, and return a C²
product `Ψ:S¹×I→A`. The local route is finite at each compact leaf: nearby
periodic leaves make its holonomy return map the identity on an interval;
finite C² plaque transport then gives a C² product neighborhood. Patch
these neighborhoods over the ordered leaf space of the annulus (using
`ACω` only if a countable exhaustion is required). This proof uses finite
chart/holonomy transitions, not the flow of a C² generator. With that
product and the harmless C¹ weakening of the drift Statement, the current
flat-drift, generalized Poincaré–Bendixson and saddle-graph carriers fit
the actual C²/ACω map-level hypotheses.

### Is a compact-section return-time theorem needed?

No additional compact-section return-time supplier is missing under the
current C²-vector-field contract: the locally-proved product item already
contains the relevant argument. It selects a global transverse section,
uses the C² flow to form a C² scalar return equation, proves its local root
is C² by the difference-quotient formulas, and uses compactness of a
reference orbit to identify that root with the least return time. That
argument is valid when `X` is C². It does not apply to the actual C¹
pullback field: its flow and scalar return equation are only C¹, so the
same calculation gives at most a C¹ return time. Adding a theorem about
compact sections for C¹ fields would not fix the required C² product.
The foliation-atlas product route above avoids this return-time upgrade
entirely.

The disk map is given on a compact manifold with boundary. Under the usual
definition of a C² map on a manifold with boundary, the required local
extension of `h` and `X` across the boundary is part of the chart
convention; if this library uses only an up-to-boundary convention, add a
finite collar-extension lemma before applying the flat-drift Statement.
This boundary-extension convention is secondary to the interior C¹/C²
regularity mismatch identified above.

The smallest missing proof package is consequently two local interfaces:
(a) the two-sided C² saddle-chart/edge-strip product and exact cap matching
for two *individually null* lobe loops; and (b) boundary-saddle rounding
plus the relative index/collar count for the *common essential* lobe disk.
Ranz Proposition 3.6, printed p. 53 and Figure 1 on p. 54, identifies the
nested geometry and asserts the reduction, but its replacement-map sentence
does not prove either interface. Novikov §6, pp. 17–19, and Brittenham class
11, PDF pp. 2–3, do not fill the gap. This is a local proof debt within the
approved pair; it does not justify weakening Novikov's theorem or assuming
an embedded image for the disk map.

## Bounded product-coordinate and C¹-flow audit

I checked whether the regularity bridge can be proved from the current C²
characteristic first-integral atlas rather than by upgrading the characteristic
vector field. It can be supplied locally; the old return-time argument is
unnecessary. The required product contract is:

> Let $A$ be a regular period annulus in the disk, with nested compact
> characteristic circles and C² local first integrals. There is a C²
> diffeomorphism $\Psi:S^1\times(0,1)\to A$ preserving leaf fibers. If $X$
> is the characteristic generator, then
> $\Psi^{-1}_*X=a(s,\theta)\partial_\theta$ for a positive C¹ coefficient.

Here the local first integrals are $u=z\circ h$, where $z$ is the C²
transverse coordinate in a foliation box and $h$ is the C² disk map. On the
regular set $du\ne0$, so the levels of $u$ give a C² one-dimensional
foliation. The vector field defined by $\iota_X\mu=h^*\omega$ is only C¹;
its product coefficient has the positive C¹ regularity stated above.

The local product near a compact leaf $C\subset A$ is constructed as follows.
Choose a C² transverse interval $I$ through a point of $C$ and cover $C$ by
finitely many adapted foliation boxes in cyclic order. In each box, the
transverse coordinate restricted to a transverse arc has nonzero derivative,
so it is a C² local coordinate. Finite plaque transports between such arcs
are C² by the canonical supplier
lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity.
The return holonomy on $I$ is the identity germ: for any sufficiently nearby
$x\in I$, the leaf through $x$ is one of the assumed simple periodic circles.
Its initial and returned points are on the same circle and in the same small
box. Shrink the box so the circle meets $I$ there only once; this follows
because the local first integral restricted to $I$ is strictly monotone.
Thus the returned point equals $x$. Transport along the finite cyclic plaque
chain now gives a C² product neighborhood $S^1\times J_C\to A$ of $C$.
Identity return holonomy makes the final transport agree with the initial
one; finitely many shrinkings keep all intermediate transports defined.
The inverse is locally C² from the chart inverses and the transverse
coordinate inverse. This proves local triviality directly.

For the global base, quotient $A$ by its circle leaves. The nested Jordan
domains linearly order the leaves from inner to outer. The local products
show that the quotient $B$ is locally an open interval, the quotient map is
open, and interval-chart transitions are C² and increasing. Distinct compact
leaves have disjoint small saturated collars, so $B$ is Hausdorff. It is
connected as the image of connected $A$, and second countable because the
quotient is open and images of a countable base form a base. Each leaf has
nearby leaves on both sides inside the open annulus, so $B$ has no endpoints.

Here is an explicit global C² coordinate on $B$, avoiding a classification
theorem for one-manifolds. Select a countable locally finite interval
refinement of the product cover; the stated ACω suffices for these countable
cover selections. Choose C² nonnegative bumps subordinate to it and
normalize their locally finite sum. For the resulting partition $\rho_i$
and increasing local coordinates $t_i$, the one-form
$\alpha=\sum_i\rho_i\,dt_i$ is positive and C¹. Integrating $\alpha$ from a
reference leaf gives a strictly increasing C² local diffeomorphism
$B\to J$ onto an open interval: injectivity follows from the leaf order,
and its image is an interval because $B$ is connected. An increasing C²
reparameterization takes $J$ to $(0,1)$.

To globalize the circle phase, refine $(0,1)$ into a countable locally finite
chain of closed slabs, each contained in a local product interval, with
consecutive slabs overlapping on an open collar. Start with one local
product. On an overlap with the next local product, their transition is a
C² family $g_s\in\mathrm{Diff}^+(S^1)$. Lift over this interval to a C²
degree-one increasing map $G(s,\theta)$ on $\mathbb R$, with
$G(s,\theta+2\pi)=G(s,\theta)+2\pi$. Choose an interior seam $s_*$ and a
C² cutoff $\chi$ equal to one on an open collar on the old side and zero
before leaving the overlap. Extend the transition across the new slab by
$$
G_{\rm ext}(s,\theta)=\chi(s)G(s,\theta)
 +(1-\chi(s))G(s_*,\theta).
$$
After the cutoff vanishes, use the fixed lift $G(s_*,\theta)$. The
$\theta$-derivative is a convex combination of positive derivatives, hence
each fiber map is still a circle diffeomorphism. It agrees with the old
transition on an open collar, so the product glues C². Repeat in both
directions from a reference slab. Local finiteness makes the global map
$\Psi$ C²; fiberwise bijectivity and the local C² inverses make it a global
C² diffeomorphism. This is an explicit interval-by-interval trivialization,
not an invocation of annulus-bundle classification. Since $X$ is C¹ and
tangent to the fibers, its phase coefficient is positive C¹.

The flat-drift estimates themselves accept this regularity. In product
coordinates $X=a(s,\theta)\partial_\theta$ with $a>0$; the proof only needs
a positive continuous speed and its positive minimum on each circle, the
bounded radial derivative of $\Psi$, C¹ regularity of $X$, and ODE
uniqueness. The orbit equations are $\dot s=b(s)$ and
$\dot\theta=a(s,\theta)$; on a compact subannulus their right side is C¹
and locally Lipschitz. Thus the speed, infinite-time, full-turn,
Hausdorff-limit and zero-extension estimates survive weakening the drift
statement from $X\in C²$ to $X\in C¹$. Its current smooth-flow dependencies
do not establish this C¹ fact and should be replaced.

The same dependency mismatch occurs in the local generalized
Poincaré–Bendixson and finite-saddle graph items. Both statements assume a
C¹ field $Y$, but their dependency lists cite
thm-fundamental-theorem-on-flows and
thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves,
whose Statements require smooth fields. The proof clauses need a C¹ maximal
flow, uniqueness, C¹ flow-box coordinates, and continuous dependence on
compact finite time intervals. The exact bounded Euclidean supplier can be
proved locally as follows.

1. On a compact convex coordinate cylinder, C¹ regularity bounds $DY$, so
   the mean-value theorem makes $Y$ uniformly Lipschitz. The published
   Picard–Lindelöf theorem and its uniform-nearby-data corollary give local
   existence, uniqueness, and a common time interval. The published
   continuous-dependence theorem gives uniform C⁰ dependence on each compact
   cylinder.
2. For C¹ dependence, subtract the two Volterra equations. The initial-data
   difference quotient satisfies the variational integral equation with
   coefficient
   $$
   A_h(t)=\int_0^1 DY\bigl(\Phi(t,p)+r(\Phi(t,p+h)-\Phi(t,p))\bigr)\,dr.
   $$
   C⁰ dependence and uniform continuity of $DY$ on the cylinder imply
   $A_h\to DY(\Phi(t,p))$ uniformly. Grönwall makes the difference
   quotients converge uniformly to the unique solution
   $$
   V(t)=I+\int_0^t DY(\Phi(r,p))V(r)\,dr.
   $$
   Applying the same estimate at nearby base points proves continuity of
   $D_p\Phi$; the time derivative is $Y(\Phi)$. Thus the local flow is C¹.
3. Uniqueness glues local solutions into maximal integral curves and gives
   the flow law. On a compact solution segment, finitely many uniform
   local cylinders and composition show that the maximal-flow domain is
   open and its flow is C¹. The C¹ inverse-function theorem applied to
   $(t,r)\mapsto\Phi(t,\sigma(r))$, where $\sigma$ is a transverse interval,
   gives the C¹ flow boxes used in the crossing argument. Its local C¹
   clause suffices; no C² smooth-dependence theorem is used.

For the omega-limit arguments, the PB hypothesis
$K_0=\overline{\mathcal O^+(y)}\Subset U$ supplies the needed compact
containment. If a maximal endpoint were finite while a trajectory stayed in
$K_0$, boundedness of $Y$ on that compact set makes the trajectory Cauchy
at the endpoint. Its limit lies in $K_0\subset U$, so local Picard
existence extends it, a contradiction. Finite covers of $K_0$ give uniform
local time and continuous flow on compact time intervals. The nested-tail
definition of the omega-limit set, compactness and connectedness,
invariance, and the graph chain argument then use only this flow
continuity, compactness, and the flow law. No second derivative of $Y$ is
needed.

Therefore the present supplier graph does not compose literally. The first
missing carrier is the C² compact-leaf/global-product construction above;
a separate C¹ maximal-flow/flow-box carrier must also replace the smooth-only
ODE dependencies in the drift, PB, and graph items. Published
Picard–Lindelöf and continuous dependence are sufficient inputs after adding
the variational-equation argument, but do not themselves state C¹
dependence, maximal flow, or flow boxes. No compact-section return-time
theorem is needed. Under those two local suppliers and the C¹ weakening of
the drift contract, the modified orbit meets the PB and graph hypotheses.
This is an integration recommendation, not a claim that the not-supplied
period-frontier item is closed. No canonical statement, dependency, receipt,
ledger, or controller file was changed.
