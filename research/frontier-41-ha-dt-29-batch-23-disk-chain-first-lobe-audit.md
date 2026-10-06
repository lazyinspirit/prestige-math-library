# Batch 23: disk-to-vanishing-cycle chain and first-lobe audit

## Finding

The current disk-level and compressible-leaf lemmas do **not** establish the
simple first-saddle lobe assumed by
`lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation`.
They supply generic characteristic position, the total index equation
`centers − saddles = 1`, and a reduction to the disk-level theorem. They do
not produce a one-saddle embedded circuit, a disk of full nested center
orbits, a selected unstable branch with the required exit geometry, or a
compact leafwise cap of the limiting circuit. The disk-level strategy itself
marks this selection as open. The compressible-leaf lemma inherits that gap
through its disk supplier.

The source's class-11 case 5 does sketch a route: after excluding a
noncompact singular leaf, it says the first compact saddle frontier has a
simple-loop or inside-out figure-eight form, then selects an innermost
figure-eight lobe. If that entire source argument and its strict induction
were proved, it could supply the missing selection. The current batch items
do not contain that proof, and the source's own “smooth off” line does not
close the cancellation step.

The cancellation lemma is a valid **conditional** local supplier under its
stated lobe and cap hypotheses. Its local branch incidence follows once the
simple lobe exists: the saddle's two lower sectors are separated by the
frontier, exactly one unstable half-trajectory enters the center disk, and
the other can be cut at a short regular transverse section. What is missing
is the boundary-aware frontier argument that finds such a lobe or instead
already produces a vanishing cycle, plus a finite induction showing that the
search terminates.

I read the current batch-23 page scaffold, notes, coverage entries, and
cross-batch edges. Brittenham class 11, PDF pp. 2–3, gives the compact-lobe
case split and an innermost figure-eight outline, but its center–saddle
smoothing is pictorial. Novikov §6 summarizes the compressible case as
“entirely similar” without the center/saddle extraction. Candel–Conlon §9.2
is only available through limited-preview locators. None of these is a
complete local supplier for the omitted selection and ranking arguments.

## What the current chain proves

| Current supplier | Output actually justified | Missing implication to the candidate lobe |
|---|---|---|
| `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary` | A regular prescribed collar and finitely many interior nondegenerate centers and saddles. | It explicitly does not separate singular images into different ambient leaves or eliminate saddle connections. It supplies no compact separatrix graph or face decomposition. |
| `lem-characteristic-disk-center-saddle-index-count` | The global count `c−s=1`, hence at least one center. | A global index sum does not put a center in a particular one-saddle lobe or show the first frontier has one saddle. A boundary-saddle sector formula is separately needed for lobe/figure-eight subdomains. |
| `lem-nullhomotopy-persists-under-a-compact-transverse-deformation` | One fixed compact leafwise cap transports nullity along an already-given compact transverse trace near its parameter. A small center orbit has an initial cap inside a single plaque chart. | The initial cap and the persistence lemma handle compact subintervals of the regular annulus, but not the limiting saddle circuit. The current notes explicitly leave its one-sided rounded trace and endpoint regularity open. |
| `lem-first-essential-loop-of-a-transverse-family-is-a-vanishing-cycle` | A first essential loop in a compact transverse family is a vanishing cycle, once an initial compact null disk and the family are supplied. | The current disk proof has not constructed one such family from the center region through its first saddle frontier. |
| `lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation` | Conditional cancellation for a compact disk basin with full nested circles, one embedded saddle circuit, no other nearby criticals, one connecting branch, an exit section, and a fixed leafwise cap. | None of those global frontier/cap hypotheses follows from the genericity or index suppliers above. |

For the compressible wrapper, the essential boundary loop in the kernel of
`π₁(L)→π₁(M)` gives a disk map and boundary data. Relative genericity and the
index count are applicable, but they still leave the disk-level frontier
problem intact. An interior subdisk bounded by a characteristic loop is not
itself a leafwise cap: its map takes values in `M`, not necessarily in the
single leaf containing that loop.

The candidate's hypotheses divide as follows.

- **Potentially local once a simple lobe is selected:** the embedded disk
  basin has one center and no other nearby critical point; the saddle has
  one lower sector inside that basin; the other unstable half-trajectory
  exits a short regular section. These facts can be checked in the source
  disk after the lobe is known.
- **Not obtained from genericity/index:** the frontier is one simple
  embedded circuit with one saddle; its bounded region is the full nested
  closed-orbit basin; no second saddle or heteroclinic connection lies in
  that frontier; and the regular complement of the circuit has the product
  collar needed for the local Morse block.
- **Not obtained from the disk map alone:** a fixed compact nullhomotopy in
  the frontier leaf, or a regular rounded loop with such a cap and a
  prescribed one-sided transverse trace to it. If the frontier loop is
  essential in its leaf, a vanishing-cycle family must be constructed
  instead. If it is null, a single cap must be derived before applying the
  collar-product supplier.
- **Boundary cases remain separate:** a lobe touching the outer boundary or
  a pinched annulus is not the interior block `W` assumed by the candidate.
  These cases need their own sector/index and relative-boundary arguments.

The `lem-null-characteristic-frontier-cap-transports-nullity-to-adjacent-annulus`
supplier only treats regular orbit frontiers. Its own source audit correctly
excludes a saddle polycycle unless one first constructs the actual one-sided
trace family. Thus it does not currently fill the cap premise of the
cancellation lemma.

More specifically, choose a sufficiently small regular center circle whose
image lies in one foliation box. It lies in a single plaque, which is a disk,
so that loop has a compact leafwise nullhomotopy. The compact-persistence
lemma transports this fixed cap along any prescribed compact segment of the
regular orbit annulus. This proves nullity for each interior regular loop,
but it does not prove that the rounded limiting saddle circuit is null in its
limiting leaf. At that frontier the proof must construct a one-sided rounded
trace and split into two cases: if the limiting loop is essential, use the
trace to exhibit the vanishing cycle; if it is null, choose one compact
filling there and apply the cancellation supplier. A limit of the interior
filling disks is not justified or needed.

## Exact finite-ranking obligations

The proposed source-inspired route needs a well-founded reduction, not only
the fact that each individual disk has finitely many Morse singularities.
The following obligations are still open.

1. **First-frontier existence and exhaustive alternatives.** Starting from a
   center, construct its maximal family of closed characteristic orbits and
   prove that its first obstruction is one of: an essential loop with an
   actual one-sided null family; a regular period-annulus frontier; a compact
   saddle polycycle; another center; or the domain boundary. Exclude or
   handle noncompact characteristic leaves, spiral faces, and accumulation
   on regular periodic orbits. A finite number of singular points alone
   does not prove that the frontier is a finite separatrix graph.

2. **Simple-lobe selection from a multi-saddle frontier.** If the compact
   frontier contains several saddles or is an inside-out figure-eight,
   classify its sectors and choose a simple disk lobe with exactly one
   center, or prove that one of its frontier loops already gives a vanishing
   cycle. The current genericity lemma permits multiple saddle images in one
   ambient leaf, hence heteroclinic saddle connections. Either separate the
   finitely many saddle images into distinct leaves by a proved relative
   perturbation (including its countable-plaque/choice interface), or treat
   connected saddle polycycles directly. The current characteristic
   genericity proof claims neither. A separate research audit,
   `frontier-41-ha-dt-29-batch-23-distinct-saddle-leaf-perturbation-audit.md`,
   gives a concrete rel-collar perturbation under `AC_ω`: the intrinsic
   intersection of a second-countable immersed leaf with a local transversal
   is countable, so finitely many saddle leaves can be avoided while keeping
   the zero set and Hessians fixed. This is a feasible new supplier only
   after its $C^2$ leaf-countability interface and choice dependency are
   recorded; it removes inter-saddle connections but not homoclinic ones or
   the frontier classification.

3. **Cap/essential dichotomy at the selected frontier.** Show that the
   frontier image lies in one leaf, then either establish its essentiality
   and build the required nearby null-loop family, or transport one fixed
   cap from a known regular orbit to a rounded frontier loop. This requires
   saddle-chart rounding, a one-sided smooth transverse trace, exact loop
   matching, and boundary regularity; compact-cap persistence applies only
   after these have been supplied.

4. **Strict finite induction.** A workable *candidate* rank is the nested
   well-founded lexicographic rank `(S,C)∈N²`: `S` is the total number of
   saddles in the current generic disk (outer induction), and `C` is the
   number of centers in the current proper subdisk (inner induction). A
   supported cancellation decreases `S` by one and removes its center.
   Passing to a proper innermost figure-eight lobe decreases `C`, provided
   the boundary-saddle sector index proves that the lobe contains a center
   and that the parent domain contains at least one additional center. If the
   lobe recursion finds a vanishing cycle, stop; if it cancels, restart the
   outer induction with smaller `S`. In the nested disk-and-annulus case,
   one must identify the disk subproblem with fewer centers; the annulus is
   not automatically a lower-rank disk. Regular annuli should not be treated
   as infinitely many induction steps: take the maximal center-basin family
   at once, package it as one compact transverse interval, and apply the
   first-essential-loop lemma if its endpoint is essential. The still-open
   frontier lemma must prove that a maximal family has an endpoint among the
   classified cases and that every regular null frontier can be absorbed
   into the same family. If one instead iterates across saddle frontiers,
   prove strict saturated-domain inclusion, a finite frontier graph, and
   that no old frontier can recur. Without that no-revisit/face result,
   strictly nested domains may converge without crossing a new critical
   point; “finite saddles” alone is not a termination proof.

5. **Terminal boundary step.** When no saddle remains in the relevant
   domain, prove the remaining center family reaches the prescribed
   transverse or essential leaf boundary and supplies the actual smooth
   family of loops required by the vanishing-cycle definition. The global
   index equation alone does not prove this continuation.

The rank proposal is conditional, not a theorem already implicit in the
manifest. It can become a proof only after the first-frontier/face
classification and the strict inclusion/no-revisit lemma are supplied.

## Supplier-first path

1. Keep the existing relative genericity and index lemmas as the first
   suppliers; their claims are narrower and locally justified.
2. Prove a new frontier-selection lemma before the cancellation consumer.
   Its conclusion should be an explicit alternative: either a vanishing
   cycle with its one-sided family, or a compact embedded simple lobe with
   the candidate's no-other-critical and unique-branch hypotheses, together
   with a fixed cap/rounded transverse trace when the frontier is
   inessential. State the regular-boundary and pinched-annulus alternatives
   rather than silently discarding them.
3. Supply the sublemmas used by that selector in dependency order: planar
   limit-set/frontier exhaustion at C² regularity; multi-saddle incidence
   or first adopt the audited relative distinct-leaf perturbation with its
   `AC_ω` and $C^2$ leaf-countability interfaces; saddle-polycycle rounding
   and one-sided trace; boundary-saddle sector index; and the strict
   finite-ranking/no-revisit lemma. Reuse
   `lem-nullhomotopy-persists-under-a-compact-transverse-deformation` only
   after a prescribed compact trace and one initial cap are proved.
4. Close `lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation`
   under exactly its lobe/cap hypotheses, including the compact Morse triad,
   attached/belt intersection, supported modification, and relative C²
   adapter. Its current batch-3 cancellation and support-modification edges
   are appropriate only after these interfaces are checked.
5. Prove the disk-level theorem by the explicit nested induction above,
   retaining its two boundary alternatives. Then the compressible-leaf
   wrapper is short: choose an essential kernel loop, map a disk over it,
   use relative genericity/index, and invoke the disk-level theorem. Do not
   mark either item `proof: locally-proved` before that chain is closed.

The current canonical statuses correctly leave the disk-level and
compressible-leaf proofs `not-supplied`. This memo makes no canonical, item,
manifest, coverage, receipt, or controller-state edits.
