# Mathematical audit of the 52-pair Phase-2 expansion

Snapshot: 2026-09-08.  This is a read-only mathematical audit of the block
headed “Published-page closure added on 2026-09-08” in
`phase-2-build-manifest.md`.  It does not amend the manifest, `plan-spec.json`,
any binding track, or any published page/item.

## Result

The 52-pair traversal is structurally faithful to the `requires` edges then in
`plan-spec.json`, but those edges are not all logical prerequisites.  The
binding owner audits explicitly supersede several of them as stale sequential
anchors, B-page placement edges, or false cross-track dependencies.

Only **three** of the added 52 pairs are presently justified by a current
published-repair demand:

| disposition | pair | reason |
|---|---|---|
| retain, but treat as release reconciliation rather than authoring | `tor-flatness-and-global-dimension` | published commutative-algebra and homological-algebra items consume Tor interfaces; all 41 A items and all eight B items are already published, while the A page itself is still draft and the B page is protected published content |
| retain | `distributions-test-functions-and-differentiation` | it is the genuine A prerequisite of the tempered-distribution supplier; its binding prerequisite on the published divergence/Stokes A page is mathematically used by the Newtonian-kernel application |
| retain | `tempered-distributions-and-the-fourier-transform` | the published Riemann-zeta page genuinely needs the Schwartz/Poisson-summation distributional interface used in its theta-functional-equation route |

The remaining **49** pairs should not be represented as current
published-consumer repair closure: 15 Algebraic Topology, seven Differential
Geometry, four other Homological Algebra, three Lie Theory, three Measure
Theory, 16 Probability, and one Representation Theory.  They may remain valid
planned enrichment.  Nothing in this audit recommends deleting their
scaffolds; they become build roots only if an exact item-level retirement or
published-consumer map establishes that demand.

The three retained entries are not all build-ready in the same sense.  Tor
has no item-authoring gap: its remaining work is the A-page release audit and
the prerequisite metadata reconciliation described below.  FA-24 and FA-25,
by contrast, still have empty canonical item arrays.  Their prose inventories
call for 31+8 and 19+9 items respectively.  Before publication their proofs
must visibly discharge, at minimum, FA-24's LF test-function topology,
fixed-support continuity/finite-order estimates, sheaf gluing, tensor-pairing
and support conditions for convolution, local primitive representation and
locally finite globalization; and FA-25's finite Schwartz-seminorm bound,
density needed for the injective restriction to distributions, transpose
well-definedness and the fixed Fourier normalization, compatibility with the
`L^1`/Plancherel embeddings, permitted convolution/product domains, multiplier
identity, and the unit-lattice Dirac-comb/Poisson-summation proof.  The zeta
consumer specifically needs the last interface.  The binding FA track gives
complete full-text ranges for these items; no additional speculative supplier
pair is warranted, but an empty page shell is not proof clearance.

This conclusion is deliberately narrower than a page-closure census.  A
published page that merely lists a planned B page does not establish that any
published proof imports an item from it.  Conversely, finding no catalogue
page in a page-level closure does not certify the imported item proof: a
specific item's `deps`, `justified_by`, inline wikilinks, and prose proof route
can still reach an unproved or Recorded assertion.  All retained suppliers and
all repaired consumers therefore still require item-level closure checks.

## Homological Algebra

### Exact `requires` reconciliation

The binding table in `plan-homological-algebra-track.md` (“Direct
prerequisites after the rebuild”) gives the following exact A-page
requirements.  These are not four blind B-to-A substitutions:

```text
tor-flatness-and-global-dimension.requires = [
  ext-and-balanced-resolutions,
  yoneda-extensions-and-homological-dimension,
  tensor-products-of-modules,
  chain-conditions-and-semisimple-modules
]

spectral-sequences.requires = [
  chain-complexes-and-homology
]

double-complexes-exact-couples-and-convergence.requires = [
  spectral-sequences,
  mapping-cones-cylinders-and-chain-triangles,
  long-exact-sequences-in-homology
]

grothendieck-spectral-sequences-and-computations.requires = [
  double-complexes-exact-couples-and-convergence,
  derived-functors,
  delta-functors-and-universality,
  group-cohomology-as-a-derived-functor,
  universal-coefficients-and-kunneth-theorems,
  group-extensions-complements-and-schur-zassenhaus
]
```

Consequently:

- replace Tor's Yoneda **B** edge by the complete four-A-page contract above;
  the current `flatness-and-faithful-flatness` page edge is not the binding
  HA-10 contract and does not replace the needed tensor, Ext/Yoneda, and
  semisimplicity interfaces;
- delete `derived-categories-examples` from basic `spectral-sequences` and use
  `chain-complexes-and-homology`; replacing it mechanically with the derived
  categories A page would preserve an artificial reversal, since filtered
  complexes construct basic spectral sequences before derived categories are
  needed;
- replace the spectral-sequences B edge of the double-complex page by the
  complete three-A-page contract; and
- replace the double-complex B edge of the Grothendieck page by the complete
  six-A-page contract.

The Stacks Project independently supports this order.  Its construction starts
with [spectral sequences of filtered
complexes](https://stacks.math.columbia.edu/tag/012K), obtains the two spectral
sequences of a double complex from the filtrations of its total complex in
[Section 12.25](https://stacks.math.columbia.edu/tag/012X), and proves the
[Grothendieck spectral sequence](https://stacks.math.columbia.edu/tag/015N)
using a Cartan--Eilenberg resolution and the second double-complex spectral
sequence.  This supports A-to-A logical dependencies; an examples companion
is not a prerequisite.

### Which HA entries are current Phase 2

`tor-flatness-and-global-dimension` remains a real supplier.  Its unusual
state is important: this is not a blank 41+8 item pair to author.  Its 49 items
are published and immutable; only the A page's draft/release state and page
prerequisites require reconciliation.  The published B page must not be
rebuilt or overwritten.  The published universal-coefficient/Kunneth page
already has item dependencies on Tor A interfaces, so its proof closure is not
made clean merely because its page-level `requires` happens to name the Tor B
companion.

The other four HA pairs in the expansion are not established current roots:

- `kunneth-exactness-and-splittings-over-principal-ideal-domains` is a planned
  local repair for future Algebraic Topology use.  The binding HA-12 contract
  for the already-published group-cohomology page is Ext A, Tor A, and group
  algebra A, not HA-11a B.  The published group-cohomology items have no
  demonstrated dependency on HA-11a.
- `spectral-sequences`, `double-complexes-exact-couples-and-convergence`, and
  `grothendieck-spectral-sequences-and-computations` entered through the
  published crossed-homomorphisms page's stale Grothendieck-B edge.  The
  binding Group Theory audit requires the extensions A page, group-cohomology
  A, and the algebraic-extensions/finite-fields A page there and explicitly
  removes the B edge.  The three HA pages are future suppliers, not repairs of
  that consumer.

If HA-11a is later built for Algebraic Topology, its proof route is viable only
if it imports the earlier cycle/boundary and Künneth-map lemmas and does not
cite the Künneth theorem it is intended to repair.  There is also a concrete
cross-track identifier mismatch to fix before that build:

| Algebraic Topology prose currently requests | HA-11a actually proposes |
|---|---|
| `thm-pid-kunneth-exactness-for-free-chain-complexes` | `thm-pid-kunneth-exactness-from-cycle-boundary-presentations` |
| `thm-pid-kunneth-short-exact-sequence-splits-nonnaturally` | `thm-pid-kunneth-splitting-from-cycle-boundary-presentations` |

Update the Algebraic Topology binding prose to the actual HA identifiers; do
not mint aliases or duplicate the older published HA-11 Künneth results.

## Algebraic Topology

The expansion's 15-pair AT branch is generated by
`affine-algebraic-sets-and-coordinate-rings ->
chern-and-pontryagin-classes-by-splitting-and-complexification-examples`.
The binding Algebraic Geometry reconciliation instead assigns the affine page
only `noether-normalisation-and-nullstellensatz` as its page prerequisite and
makes every B page a leaf.  No affine item consumes characteristic classes.
The AT binding audit likewise records AT-21, AT-22, AT-23 and the repaired
HA-11a supplier as having no current published consumer.  The entire 15-pair
branch therefore has no current repair root.

At the audit snapshot it was not a dependency-complete future batch: the
serial approximation omitted meaningful cross-links and two indispensable A
suppliers from this 15-pair closure.  The exact 15 A-page arrays have since
been applied from the binding table; the points below record why those arrays
must be preserved:

- AT-16 complex topological K-theory requires AT-15 topological vector
  bundles and AT-21 spectra/stable homotopy groups;
- AT-13 obstruction theory and AT-14 Serre spectral sequences require AT-23
  local coefficients;
- AT-14 additionally requires HA-15 and HA-16 A, as well as AT-6, AT-7,
  AT-11, and AT-13;
- AT-17 generalized cohomology requires AT-4, AT-9, AT-16, HA-15 and HA-16;
- AT-20 characteristic classes requires AT-15, AT-17, AT-18 and AT-19, not
  merely its immediately preceding page.

Before any later AT build, preserve the exact dependency table now applied
from `plan-algebraic-topology-track.md` section 13.2.  In particular retain
AT-21 and AT-23 in that future closure.
Section 13.3's content repairs are also authoring gates, notably: the explicit
free resolution/diagonal and cup-i identity for Steenrod operations; local
coefficient monodromy for obstruction and Serre theory; numerability and
paracompactness hypotheses for bundle classification; product coherence for
generalized cohomology; finite/compact or numerable hypotheses in K-theory;
and the orientation-reversing-automorphism proof replacing the false blanket
“minus one acts by minus one in odd rank” claim.

Hatcher's author-hosted [Algebraic Topology full
text](https://pi.math.cornell.edu/~hatcher/AT/ATpage.html) places local
coefficients, Künneth, cohomology operations, bundles, and Postnikov/obstruction
machinery in their respective prerequisite chapters, while his [spectral
sequence chapter](https://pi.math.cornell.edu/~hatcher/AT/SSpage.html) develops
Serre spectral sequences from exact-couple and filtered-complex machinery.
These full-text checks agree with the binding track's non-serial dependency
shape and give no basis for the affine-to-characteristic-class edge.

## Differential Geometry and Lie/representation suppliers

Two stale cross-track edges generate this branch:

- The binding Differential Geometry reconciliation replaces
  `morse-critical-points-hessians-and-indices -> moment-maps-...-examples`
  with the actual smooth-manifold, tangent/cotangent, rank-theorem, vector
  bundle, Sard, Riemannian-metric, connection, differential-form, and
  compactness A inputs.  Moment maps are not a prerequisite of Morse theory.
- The published Harish--Chandra page has no item dependency on real forms.
  The Lie-owned canonical audit treats its current item graph as self-contained
  pending its exact Phase-3 repairs and assigns its future missing interface to
  `finite-weyl-invariants-bruhat-and-kostant-harmonics`, not a real-forms B
  page.  This Lie-specific decision should supersede the incompatible older DG
  suggestion to redirect that edge to highest-weight theory.

Thus the seven added DG pairs are not current Phase-2 repair closure.  For the
de Rham subbranch, the binding mixed-graph cycle repair has now been applied:
`def-exactness-at-a-node` does not depend on
`thm-the-subobject-inequalities-underlying-exactness`; the theorem depends on
the definition, so the theorem is recorded in `justified_by` instead.  This
direction must be preserved; reverting it would bootstrap the new de Rham
work through a deficient published consumer.

The three added Lie pairs are generated by the unrelated edge from published
`artin-induction-and-rational-characters` to the Weyl--Kac B page.  The binding
Lie audit checks all nine published Artin-induction items and finds zero Lie
item dependencies; delete the page edge without replacement.  For future
enrichment, the exact A requirements are:

```text
kac-moody-algebras-from-generalized-cartan-matrices.requires = [
  harish-chandra-isomorphism-casimir-and-central-characters
]

integrable-highest-weight-kac-moody-modules.requires = [
  kac-moody-algebras-from-generalized-cartan-matrices,
  verma-modules-and-shapovalov-forms,
  root-systems-dynkin-diagrams-and-cartan-killing-classification
]

the-weyl-kac-character-formula.requires = [
  kac-moody-algebras-from-generalized-cartan-matrices,
  integrable-highest-weight-kac-moody-modules
]
```

The one Representation Theory pair, Haar measure, appears only through the
now-unrooted compact-Lie branch.  Its planned compactness, partition,
Riesz--Markov, and product/Fubini inputs are mathematically appropriate, but
the representation-theory binding audit gives it zero current published
impact.  Keep it as future enrichment, not a repair root.  As a limited
external check on the finite-dimensional precursor, Victor Kac's official MIT
[18.745 course description](https://math.mit.edu/classes/18.745/index.html)
orders root systems, enveloping algebras, Verma modules, and irreducible
highest-weight representations before the Weyl character formula.  This is
consistent with the binding dependency direction, but it is not offered as a
proof source for the affine Weyl--Kac page; that future page still needs its
own complete symmetrizable-Kac--Moody sources and proofs.

## Probability and Measure Theory

The binding Probability audit explicitly removes both published cross-track
edges to Ito's examples companion:

```text
dirichlet-kernel-localisation-and-pointwise-fourier-convergence
  -X-> itos-formula-and-brownian-martingales-examples

partial-differential-equations-and-characteristics
  -X-> itos-formula-and-brownian-martingales-examples
```

Neither published consumer has any Probability item dependency.  The same
audit records zero direct and transitive published consumers for PT-6 through
PT-22 and for the standard-Borel repair pair.  Therefore all 16 Probability
pairs in the added block are future enrichment, not current repair closure.

The apparent `probability-basics ->
tempered-distributions-and-the-fourier-transform-examples` relation is also a
historical block-placement edge, not a mathematical prerequisite; every B
page is companion-only and PT-1's actual items do not consume tempered
distributions.  Remove it without replacement.  This does not affect the
independent Riemann-zeta demand for the FA-24/FA-25 pair.

Likewise, Measure Theory MT-21a (systems/mixing), MT-21b (Chacon/weak mixing),
and MT-22 (recurrence) have no published consumers under the binding reverse
ledger.  Their internal order is meaningful—recurrence uses the preceding
systems interfaces—but that is not a current Phase-2 root.  Retain the three
as planned enrichment and remove them from this 52-pair repair expansion.

## Required plan/manifest amendments

1. Recompute this expansion after applying the binding page-edge repairs,
   rather than treating every extant `plan-spec.json.requires` edge as
   logical.  The expected disposition of this specific 52-row block is three
   retained entries and 49 removed entries.
2. Relabel Tor as a partial page-state/release reconciliation and record that
   all 49 items across its A/B pair are published and immutable.  Never send
   the protected published B page through pair authoring.
3. Apply the four exact HA A-page requirement lists above.  This removes all
   three B-target dependencies and also removes the mathematically reversed
   derived-categories dependency from basic spectral sequences.
4. Delete, rather than redirect to other B pages, the false published edges
   identified above: affine/characteristic classes, Morse/moment maps,
   Fourier/Ito, PDE/Ito, crossed-homomorphisms/Grothendieck, Harish--Chandra/
   real forms, probability-basics/tempered-distributions, and Artin/Weyl--Kac.
   Reconcile the affected published pages to the exact A-only contracts in
   their binding owner tracks during the authorized published-repair phase.
5. Do not certify any retained supplier from page closure alone.  For every
   concrete published consumer, distinguish the imported supplier item from
   unrelated Recorded items that merely share its page; then traverse that
   imported item's proof dependencies and source claims.  The known direct
   Recorded/forward edges elsewhere on those pages remain separate repair
   obligations unless the particular consumer item actually reaches them.
6. Before future AT authoring, preserve the now-applied binding AT dependency
   graph and AT-21/AT-23 closure, and apply the mandatory content repairs.  The
   two HA-11a item IDs have also been reconciled in the AT prose.  Preserve the
   now-correct DG exactness-definition direction.  These were real bootstrap
   defects even though their branches are not current published-repair roots.

Under the repository's expanded “retire Recorded completely” objective, these
changes do not reduce the obligation to prove every mapped recorded result.
They prevent unrelated enrichment from being mistaken for that obligation and
prevent false B edges from supplying a circular bootstrap.  Any of the 49 can
re-enter the executable closure when an exact recorded clause or actual
published item proof—not merely page co-location—maps to it.

## Post-audit prerequisite reconciliation receipt

After the AT, HA, and planned exactness-direction amendments were applied, a
bounded exact-array comparison was rerun for the seven DG pages in this
52-pair block (DG-15, DG-21, and DG-33 through DG-37) and its three Lie pages
(RL-12, RL-14, and RL-15).  The comparison source was DG section 10.6 and the
Lie binding page-requirement matrix.  Every current array matches.  Every
direct prerequisite among those ten whose A page is still unpublished is
already named in the current manifest.  The concrete JSON deltas are:

```json
{
  "plan_requires_delta": {},
  "manifest_unpublished_direct_prerequisite_delta": {
    "add_pairs": [],
    "remove_pairs": []
  }
}
```

This bounded receipt does not turn those ten pages into published-consumer
roots and does not certify their item proofs.  It establishes only that there
is no further unapplied **declared direct-prerequisite** delta for those pages.
