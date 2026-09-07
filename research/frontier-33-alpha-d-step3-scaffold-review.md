# frontier-33 — Alpha group `d` — Step 3 scaffold review

Group `d` covers batches `8`, `13`, and `16`: AT-5, DG-14, and DT-5,
together with their companion pages. I read the three pair manifests (six page
records), all three coverage files and notes files, the complete corresponding
design sections, and the current records in `research/plan-spec.json`. I
checked each claim as written against the complete relevant source passages
and the exact dependency interfaces needed by its proof. All three pairs are
sufficient for authoring. No scaffold claim, item id, prerequisite, page
order, or coverage record required repair.

| Batch | A page | A items | B items | coverage rows | verdict |
| ---: | --- | ---: | ---: | ---: | --- |
| 8 | `homology-axioms-degree-and-classical-applications` | 44 | 8 | 76 | `sufficient` |
| 13 | `integration-of-forms-and-the-general-stokes-theorem` | 47 | 12 | 139 | `sufficient` |
| 16 | `sublevel-deformation-and-the-handle-attachment-theorem` | 21 | 6 | 44 | `sufficient` |

## Batch 8 — homology axioms, degree, and applications

The current plan places the A page at order `366.009`, requiring
`cw-complexes-and-cellular-homology-examples`, and its B page at `366.01`,
requiring only the A page. The design's older reference to the underlying CW
page is not a missing edge: the current examples companion is later than and
depends on that page, and exposes the cellular results used here. Every item
dependency resolves backward or within the pair.

The authoring route is complete. It introduces ordinary homology theories on
CW pairs, including arbitrary additivity; proves the reduced/unreduced
equivalence; builds cellular homology; obtains finite simplicial comparison
and finite-subcomplex support; proves continuity by the explicit skeletal
telescope and Mayer--Vietoris route; and then proves uniqueness on all CW
pairs. Degree, local degree, and the stated applications follow without
importing the later classification of sphere maps. The B page supplies the
material boundary tests, including the nonadditive theory obtained from the
product of all reduced homology degrees modulo their direct sum. It vanishes
on finite-dimensional CW pairs but detects the wedge of one sphere in every
positive dimension, so it isolates exactly why arbitrary additivity is
required. The zero-sphere convention, local
multiplicities in the polynomial example, coefficient action, and the
dimension assumptions in the classical applications are all explicit.

The seven current source records are fetch-verified. The checked passages are
Hatcher, *Algebraic Topology*, Chapter 2's degree and local-degree discussion,
homology axioms and exercises, and §2C; May, *A Concise Course in Algebraic
Topology*, Chapter 14 §§3--6 and Chapter 15 §2; Hatcher's Chapter 0 CW
interfaces and Theorem 3F.8; Hatcher Chapter 4, Theorem 4.59; the two assigned
MIT degree lectures; and Lebl's local-degree and polynomial passages. These
sources support the exact retained statements and proof route, not merely
nearby stronger results.

**Verdict:** sufficient.

## Batch 13 — integration of forms and general Stokes

The A page is at order `469`. Its six direct prerequisites are the current
pages on smooth partitions of unity, rank theorems and embedded submanifolds,
tensor fields and forms, the exterior derivative and Cartan calculus,
manifolds with boundary/collars/orientations, and the classical divergence
and Stokes theorems. The B page is at order `470` and requires only the A
page. The design's shortened historical B-page name is harmless: the current
manifest and plan consistently use
`integration-of-forms-and-the-general-stokes-theorem-examples`. Item edges
resolve through the six declared suppliers or within the pair.

The scaffold gives a self-contained route from compactly supported top-form
integration to the general Stokes theorem. It treats orientation-preserving
and orientation-reversing charts, the half-space Riemann integral needed at a
boundary, independence of partitions of unity, parametrized integration,
densities on nonorientable manifolds, boundary orientation, and the local
half-space proof of Stokes. Divergence is defined relative to a supplied
positive volume form, after which the form-theoretic divergence theorem and
the classical Euclidean flux and curl formulas follow. The examples preserve
the zero-dimensional convention and distinguish the continuous density
`|omega|` from a smooth density at zeros; period obstructions, negative-chart
signs, local-diffeomorphism pullback, and boundary signs are all stated with
the hypotheses their proofs use.

The four declared source records are fetch-verified. The complete supporting
passages checked were Lee, Chapter 16's integration construction through the
general Stokes and divergence results; Merry, Lecture 26 and the relevant
Lecture 27 corollaries; Nicolaescu's density construction and examples; and
the Encyclopedia of Mathematics divergence entry. Metric-specific volume and
divergence statements remain correctly deferred rather than being smuggled
into the supplied-volume-form theorem.

**Verdict:** sufficient.

## Batch 16 — sublevel deformation and handle attachment

The A page is at order `525`, directly requiring
`stable-unstable-manifolds-and-morse-smale-transversality-examples` and
`cw-complexes-and-cellular-homology`; the B page is at `526` and requires only
the A page. The declared route and every item dependency are backward or
internal to the pair.

The scaffold proves the regular-band product and sublevel deformation theorem
using a normalized gradient flow on a compact band, then builds the smooth
handle and its rounded corners. A local critical-value-lowering construction
isolates one nondegenerate critical point, and the global one-critical-point
theorem identifies the new sublevel with attachment of the index handle. The
cell type, relative homology, repeated-level formulation, and examples follow
in dependency order. The cutoff formula used in the local modification has
the required support and derivative control. Endpoint handles, simultaneous
critical points, the sphere and torus index calculations, both outcomes of a
surface one-handle, and the punctured-plane counterexample to a noncompact
version all test the relevant hypotheses rather than silently strengthening
the theorem.

The three current source records are fetch-verified. The checked passages are
Nicolaescu, *An Invitation to Morse Theory*, §§2.1--2.2 through Remark 2.2.5;
Audin--Damian, *Morse Theory and Floer Homology*, §§2.1.e--f; and Benedetti's
handle, cobordism, and Morse-theoretic sections §§7.3, 7.6, and 9.1. Together
they supply the exact deformation, local modification, handle attachment,
and topological consequences used by the manifest.

**Verdict:** sufficient.

## Deferred and out-of-scope dispositions

The final refresh records `27` current declines: batch 8 has eight, batch 13
has eleven, and batch 16 has eight. Twenty-five decisions are `stands`.
Every deferred destination used by those rows exists in the current plan and
is not imported by an assigned proof: de Rham theory at order `475`,
Riemannian volume at `477`, Haar measure at `510.065`, handle decompositions
at `527`, and surgery at `557`. Each out-of-scope result is likewise
unnecessary for the declared route.

Two batch-8 rows are `owner-decision`: Hatcher's use of sphere homotopy
classification in the proof of Theorem 4.59 and the Hopf converse degree
classification. The current plan contains
`hurewicz-whitehead-freudenthal-and-cw-approximation` at order `366.023`,
matching the design's AT-12 reservation, but selecting the exact destination
for the coverage placeholders belongs to the owner. Neither result is used by
this pair: its coefficient-action proof uses simplex chains and subdivision.
Thus both routing decisions remain visible without blocking authoring.

The exact row evidence is recorded in
`research/frontier-33-alpha-d-scope-decisions.json`. Its prescribed check
reports `27` current declines and `0` errors.

## Validation record

Focused checks on the reviewed artifacts produced:

- `coverage-checklist --require-destination`: `76`, `139`, and `44` results
  for batches 8, 13, and 16 respectively, with `0` errors and `0` warnings.
- `content-policy --manifest-only`: `52`, `59`, and `27` scoped items,
  respectively, with `0` errors and `0` warnings.
- `manifest-deps`: the same `52`, `59`, and `27` items, with `0`
  normalizations and `0` errors.
- `source-fetch-check --coverage`: `7/7`, `4/4`, and `3/3` source records
  fetch-verified.
- `source-backing --require-verified`: `30`, `34`, and `16` source carriers,
  all backed and openable.
- `splice-plan --dry-run`: batch 8 would splice 2 pages/52 items, batch 13
  would splice 2 pages/59 items, and batch 16 would splice 2 pages/27 items,
  without refusal or write.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: exit 0;
  the populated portion is acyclic and consistent, with no item cycle,
  forward reference, B-page dependency, or unresolved item id.
- `scope-decisions check --run frontier-33 --group d`: `27` current declines
  and `0` errors.

The current plan's six item lists remain intentionally empty at Step 3; the
successful dry splices establish that the reviewed manifests fit those page
records. The engine owns the actual splice and all subsequent routing, gates,
and stage transitions. Group `d` has no unresolved authoring blocker.
