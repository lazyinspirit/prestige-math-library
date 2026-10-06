# Batch 23 null-transversal carrier audit

**Scope.** Read-only audit of the current batch-23 carriers
`lem-haefliger-nulltransversal-disk-has-a-minimal-one-sided-cycle`,
`lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family`, and
`lem-a-nullhomotopic-closed-transversal-yields-a-vanishing-cycle`. I also
checked their exact interfaces with the center cap, compact-nullhomotopy
persistence, period-annulus frontier, and first-essential-loop suppliers.
No canonical page, manifest, receipt, coverage map, or controller state was
changed.

## Finding

The intended theorem is supported by Novikov and Haefliger, but the current
local proof chain remains open at two distinct transitions:

1. **Disk to a minimal one-sided cycle.** Haefliger proves that a null
   transversal bounds a disk from which a leaf loop has nonidentity holonomy
   as a germ and identity on the inward half-transversal. The batch item also
   asserts a minimal regular orbit or finite saddle polycycle whose entire
   inside consists of closed characteristic trajectories. The proof needed to
   extract that minimal cycle, handle its saddle returns, and preserve
   nonidentity at a limiting cycle is not locally supplied. Haefliger’s
   printed selection uses Zorn’s lemma; citing it does not verify the current
   item’s stated `AC_ω` budget.
2. **One-sided cycle to the required smooth family.** The vanishing-cycle
   definition requires an actual family of smooth leaf loops with transverse
   point tracks and leafwise-null loops on the approached side. A disk map
   and a holonomy germ do not supply those caps or that family. The
   polycycle-rounding item sketches an interpolation but does not construct
   its endpoint, prove the gluing, or show the full family is smooth and
   consists of the prescribed loops.

The regular-orbit case is simpler: a regular transverse section identifies
the characteristic return map with ambient leaf holonomy, and a compact cap
transports nullity across any already existing compact trace annulus. The
saddle-polycycle case needs an explicit finite saddle-chart construction.

## Exact missing disk, cap, and holonomy steps

The local proof route must distinguish the following statements.

**The spanning disk is not a leafwise filling.** Nullhomotopy of the closed
transversal in $M$ gives a disk map $h:D^2 \to M$. The characteristic
circles in its domain map into individual leaves, but the restriction of $h$
to the enclosed domain generally crosses many leaves. Thus it does not show
that those characteristic loops are nullhomotopic in their own leaves.

There is a local cap for sufficiently small center orbits. Choose a disk
neighborhood of the center whose image lies in one foliation box, and write
$h=(Y,z)$. On a sufficiently small characteristic level loop,
$z\circ h=c$. The map $x\mapsto(Y(x),c)$ on the enclosed source disk
then lies in one plaque and has exactly the given boundary loop. This supplies
one compact leafwise cap. It is the initial input for
`lem-nullhomotopy-persists-under-a-compact-transverse-deformation`.

From that one cap, nullity can be transported along every **compact regular
subannulus** of prescribed closed characteristic loops. For each endpoint
parameter $s<1$, cover the compact trace from the initial center circle to
$H_s$ by finitely many foliation boxes and continue the same cap. This
proves nullity for each interior loop without taking a limit of varying
filling disks. The persistence lemma itself is local and only applies once
the prescribed transverse trace exists; it does not produce the annulus or
the cap at a polycycle.

**Holonomy and leafwise nullity are separate.** Haefliger’s endpoint has
identity holonomy on the side approached by the interior periodic leaves and
nonidentity return germ on the opposite side. Identity inward holonomy puts
the endpoint class in the identity-holonomy kernel $N_j$, but it does not
show that the inward displaced loops are leafwise nullhomotopic. The center
cap plus compact transport supplies this additional condition. Conversely,
nonidentity holonomy on the opposite side implies the endpoint loop is
nontrivial in its leaf, since a nullhomotopic leaf loop has identity
holonomy. It does not by itself produce a smooth representative or a
transverse annulus.

For a **regular endpoint orbit**, choose one transverse section. The
characteristic first-return map agrees with ambient holonomy because both
are the same finite plaque continuation around the orbit. This identifies
the return germ and is a sound regular-orbit bridge.

For a **saddle polycycle**, the same sentence is not yet a proof. The
characteristic line field is singular at the saddle vertices, so no single
flow box covers the return. One must choose finitely many regular sections
along the edges, write the return as the ordered composition of regular
plaque transports and the local saddle passage maps, and prove that this
composition is the ambient holonomy germ of the piecewise leaf loop. A
rounded representative must preserve that free homotopy class; basepoint
change only conjugates the germ and hence preserves identity versus
nonidentity. None of these polycycle interfaces is supplied by the current
rounding strategy.

## Supplier-first route that can close the claim

The route below preserves the full conclusion and keeps the local
obligations visible.

1. **Span and regularize the transversal.** Use nullhomotopy in $M$ to get
   one disk map with the exact prescribed boundary, then use
   `lem-characteristic-disk-map-can-be-put-in-generic-position-rel-boundary`
   while fixing its regular transverse boundary collar. Establish the
   finite center/saddle set and the disk index count with a regularity-matched
   $C^2$ index supplier.
2. **Prove the finite-singularity frontier carrier.** Supply the local
   period-annulus/frontier theorem from the planar characteristic vector
   field, including the saddle-containing limit-set case. The current
   `lem-characteristic-period-annulus-has-an-orbit-or-polycycle-frontier`
   is marked not supplied; its candidate drift/Poincaré–Bendixson memo is
   useful proof work, but not yet a cleared supplier. This step must establish
   an actual regular orbit or finite separatrix graph, not just compactness
   of limit sets.
3. **Produce the one-sided nonidentity cycle.** Prove Haefliger’s extremal
   selection locally. The precise duties are: obtain a nontrivial-return
   cycle from the null boundary; order/nest the relevant cycles; prove a
   lower limit of every descending nested chain is still a cycle with a
   nonidentity germ on the outer side; choose a minimal one; and prove every
   regular characteristic trajectory in its interior is closed. The printed
   proof’s Zorn selection exceeds the item’s stated `AC_ω` unless a separate
   ACω-level replacement is supplied. The failed area-minimizing-sequence
   attempt cannot be reused because nonidentity germs can converge to the
   identity germ.
4. **Classify the filled side.** From the minimality conclusion and local
   saddle-sector models, prove that the inward closed-orbit region is a disk
   with the center data asserted in the statement, or weaken that auxiliary
   assertion while retaining the needed connected period family. Explicitly
   identify the compact nested family of prescribed characteristic loops.
5. **Start with a leafwise cap.** At a small center orbit use plaque
   projection in one foliation box to construct the actual leafwise disk
   map. This step cannot be replaced by restricting the ambient spanning
   disk.
6. **Round a polycycle and build its fence.** If the endpoint is regular,
   keep the endpoint loop. If it is a polycycle, in each of its finitely many
   saddle charts construct a family of plaque arcs with smoothly varying
   endpoints: for every positive parameter the modified loop is leafwise
   homotopic to the prescribed characteristic orbit, and at parameter zero
   it is a smooth immersed representative of the polycycle. Prove that the
   pieces agree on open overlaps, that each loop lies in one leaf, and that
   every point track has nonzero transverse derivative, including at the
   endpoint. Prove separately that smoothing preserves the leaf holonomy
   germ. The current strategy names these facts but does not construct them.
7. **Transport nullity and stop at first essentiality.** Along every compact
   regular subannulus, transport the one fixed cap with
   `lem-nullhomotopy-persists-under-a-compact-transverse-deformation`. If
   nullity fails at an interior loop, compact-persistence openness makes it
   an essential endpoint approached by null loops. If it persists to the
   endpoint, Haefliger’s nonidentity germ on the opposite side makes the
   smoothed endpoint loop nontrivial in its leaf. Apply
   `lem-first-essential-loop-of-a-transverse-family-is-a-vanishing-cycle`.
   Finally use the existing one-way vanishing-cycle-to-Π-subgroup lemma
   for the approached side; do not infer ordinary nontrivial holonomy on
   that side.

This is supplier-first: the frontier and Haefliger selection precede
rounding; rounding precedes cap transport; cap transport precedes
first-essential; only then does the final closed-transversal theorem have a
complete local proof.

## Choice assumptions

- The current Haefliger carrier explicitly assumes \(\mathrm{AC}_\omega\),
  but its cited printed proof uses Zorn. That citation alone does not justify
  the smaller stated assumption. A local compactness/finite-graph extremal
  proof must identify exactly how the nonidentity witness survives at the
  limit; otherwise the proof is only known by the stronger source route.
- The current period-frontier candidate uses a countable flat-drift
  construction; its own audit says it can be kept at most at
  \(\mathrm{AC}_\omega\), though its raw dependency closure still needs
  choice-scope reconciliation.
- Polycycle rounding and compact-cap transport use finite chart covers and
  finite gluings once a compact graph/family is available; these steps add
  no evident choice beyond the stated background. The $C^2$-to-smooth
  family issue remains independent of choice.
- The final null-transversal theorem currently assumes
  \(\mathrm{AC}_\omega\). Novikov’s source theorem is cited without that
  hypothesis, so preserving the source-level unconditional statement
  requires a local choice audit, not silent inheritance of a stronger
  premise.

## Statement and source-provenance mismatches

- `lem-haefliger-nulltransversal-disk-has-a-minimal-one-sided-cycle` is
  correctly marked `proof:not-supplied`, but its statement packages more
  than the brief proposition summary: the minimal selection, the entirely
  closed interior trajectories, the disk-with-center/no-saddle conclusion,
  and the finite polycycle endpoint all need explicit local derivations.
  Haefliger’s full proof uses Zorn; the item’s \(\mathrm{AC}_\omega\) label
  is not a certification that the local proof has been found.
- `lem-saddle-polycycle-rounding-preserves-the-inward-transverse-family`
  cites Haefliger for a one-sided holonomy cycle, but the smooth immersed
  representative and the family of **prescribed** level loops are local
  extensions not established by that source. The statement provenance
  should distinguish the source locator from these unsourced construction
  clauses until they are proved.
- `lem-a-nullhomotopic-closed-transversal-yields-a-vanishing-cycle` cites
  Calegari, *Foliations and the Geometry of 3-Manifolds*, §4.6, Theorem 4.35
  (printed pp. 163–166 / nearby p. 167 locator). The checked source audit
  identifies that argument as the taut/minimal-surface incompressibility
  proof; it cannot support the stated arbitrary-foliation null-transversal
  claim. Novikov §6 supplies the broad theorem statement but compresses the
  needed center/saddle details; Haefliger §4.2 supplies the one-sided
  holonomy result, not the vanishing-cycle family. Keep these source roles
  separate.
- The endpoint definition `def-vanishing-cycle-of-a-codimension-one-foliation`
  requires a **smooth** family, while the three carriers assume only a
  $C^2$ foliation and $C^2$ characteristic disk map. A $C^2$ plaque
  projection or $C^2$ saddle smoothing does not automatically give a
  $C^\infty$ loop family lying in those leaves. Either prove a
  leaf-preserving regularization at the stated foliation regularity, align
  the definition with the $C^2$ category, or strengthen the theorem’s
  hypotheses to smooth foliation data. This is a genuine interface gap, not
  fixed by citing the smooth Morse lemma.

The current statuses `proof:not-supplied` are therefore appropriate. The
source theorem remains intact; the local disk, one-sided fence, and smoothing
arguments must be completed before the null-transversal conclusion can be
used as a supplier.
