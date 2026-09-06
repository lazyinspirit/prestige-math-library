# Frontier 31a — group c Step 3 scaffold review

Reviewed 2026-09-05 for batches 11, 13, and 14.  This review reads the
current manifests, coverage records, batch notes, controlling design sections,
and `plan-spec.json`; it does not change routing or published content.

## Verdict summary

| Batch | A page | B page | A/B items | Step-3 verdict |
| --- | --- | --- | ---: | --- |
| 11 | `koszul-complexes-and-regular-sequences` | `koszul-complexes-and-regular-sequences-examples` | 51 / 12 | sufficient |
| 13 | `projective-algebraic-sets-projective-morphisms-and-cones` | `projective-algebraic-sets-projective-morphisms-and-cones-examples` | 25 / 7 | sufficient |
| 14 | `affine-schemes-and-the-structure-sheaf` | `affine-schemes-and-the-structure-sheaf-examples` | 28 / 9 | sufficient |

All A-page counts remain below the 60-item split threshold.  Each companion
page uses only preceding A results.  No new page, forward edge, reading-order
change, or content repair is proposed.

## Batch 11 — Koszul complexes and regular sequences

The manifest's required published prerequisites are exactly
`zariski-topology-on-prime-spectra-examples` and
`long-exact-sequences-in-homology`, matching `plan-spec.json` at orders
365.901/365.902.  The design has an original CA-16 section and a later additive
CA-16 amendment; the manifest retains the whole amended spine and adds only
`def-minimal-free-resolution-over-a-local-ring` and
`def-koszul-betti-numbers-over-a-local-ring`.  Those are backward dependency
repairs: their uses cannot be delegated to downstream CA-18.  The recorded
topic-level design prerequisite list is broader than the plan specification,
but the manifest's item dependencies supply the actual earlier results used;
this is a recorded plan/design discrepancy, not an Alpha routing change.

The authoring route is complete: exterior construction and signs; coordinate
differential and square-zero; one-element calculation; concatenation and cone;
homotopy, localization, flat base change, and generator change; ordered
regularity and its local converse; then minimal Koszul resolutions and Betti
ranks.  The declarations preserve the material qualifications: a finite
ordered sequence over a commutative unital ring; terminal quotient nonzero in
the regular-sequence definition; and finite-module, Noetherian-local,
sequence-in-the-maximal-ideal hypotheses for the local equivalences,
permutations, and minimal-resolution statements.  Empty, zero, and unit cases
are explicitly assigned.

Coverage has independent, harvestable full treatments in Reid--Groutides,
Chapter 5 (`https://mreid.warwick.ac.uk/MA4J8/Groutides5.pdf`); Mustata,
Sections 11.1 and 11.3 (`https://websites.umich.edu/~mmustata/CAnotes.pdf`);
and Stacks Project §§15.29 and 15.31
(`https://stacks.math.columbia.edu/tag/0621`,
`https://stacks.math.columbia.edu/tag/062D`).  The Stacks sections supply the
exterior-DGA definition, functoriality and cone identifications, and the
regular/Koszul/(H1) comparison.  The notes record the exact harvest headings,
inline uses, and every disposition.

The only non-routine disposition is Mustata Exercise 11.53.  It opens
perfect-module/projective-dimension material for which the current plan has no
home.  It is not required by the manifest's finite-Koszul authoring spine, so
it does not make this scaffold insufficient.  It is recorded as an
`owner-decision` for future plan routing rather than silently discarding it.

## Batch 13 — projective algebraic sets, projective morphisms, and cones

The manifest agrees with `plan-spec.json` at orders 366.045/366.046 and has
the required predecessor
`morphisms-local-rings-and-rational-maps-of-affine-varieties-examples`.
Its 25-A/7-B inventory has an explicit dependency spine from homogeneous
coordinates and vanishing ideals through homogenization, projective closure,
saturation, projective Nullstellensatz, closed inclusions, degree, and the
cone.  The added `def-homogeneous-ideal-saturation` is necessary to type the
later formula `J:x_0^infinity`; it supplies a missing backward definition and
does not introduce a page or a forward prerequisite.

The scaffold states the needed scope limits rather than importing scheme
theory: classical projective points over a fixed algebraically closed field;
projective closure described using the vanishing ideal rather than arbitrary
homogeneous generators; degree only in its specified reduced hypersurface
setting; and the cone derivative diagnostic only in characteristic different
from 2.  It does not rely on a general arbitrary-coordinate-tuple closed
embedding claim, Segre/Veronese theory, `Proj`, or properness.

Milne, *Algebraic Geometry*, Chapter 6
(`https://www.jmilne.org/math/CourseNotes/AG.pdf`), and Artin, *Algebraic
Geometry*, Chapter 3
(`https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf`), are both
full, harvestable source treatments.  Their reviewed sections support the
homogeneous coordinate and projective Nullstellensatz route; the coverage
record assigns their exact headings to items.  Segre, Veronese, twisted-cubic,
function-field, and projective-linear-transformation results are explicitly
deferred to their planned later homes or marked out of scope.  None is a
dependency of this pair.

## Batch 14 — affine schemes and the structure sheaf

The manifest agrees with `plan-spec.json` at orders 366.061/366.062 and names
exactly these published prerequisites:
`sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples` and
`zariski-topology-on-prime-spectra`.  Its 28-A/9-B route is complete: basic
opens and localized sections; the sheaf on that basis and its stalks;
affine-scheme construction; local morphisms and contravariance; residue
fields, reduced/integral tests, and the functor of points; then the assigned
examples.

The item claims distinguish topological spaces from locally ringed spaces and
retain the general-ring boundary: all rings are commutative unital, including
the zero ring and `Spec(0)=empty`.  The structure sheaf is constructed with
`O(D(f))=A_f` and compatible basis restrictions.  The classical closed-point
description is confined to the stated finite-type, reduced, algebraically
closed-field setting; `integral` means nonzero domain / nonempty reduced
irreducible; and the nilpotent quotient is a deliberately thin affine example.
The functor convention is covariant in test rings, with
`h_{Spec A}(R)=Hom(A,R)` and the relative affine-line example.  These
qualifications prevent the usual variance, zero-ring, and closed-point
overstatements.

Reviewed sources are Milne, *Algebraic Geometry 10*, §§1.10 and 10.24--10.29
and 10.81--10.83 (`https://www.jmilne.org/math/CourseNotes/AG10.pdf`), plus
Stacks Project §§26.5 and 26.6
(`https://stacks.math.columbia.edu/tag/01HR`,
`https://stacks.math.columbia.edu/tag/01HX`).  The latter directly provides
the basic-open sheaf construction, stalk/local-ring facts, and affine
locally-ringed-space morphism construction.  Modules/quasi-coherent sheaves,
fiber products, and coproducts are explicitly deferred or out of scope; the
manifest's product examples do not invoke their general theory.

## Scope-decision closure

Ran:

```text
node tools/scope-decisions.mjs refresh --run frontier-31a --group c
node tools/scope-decisions.mjs check --run frontier-31a --group c
```

The refreshed ledger has 35 current declined-source rows.  34 are resolved
`stands`, with evidence of their named later receiving page or their
non-dependence on the current authoring spine.  One is `owner-decision`:
Mustaţă Exercise 11.53, as described above.  The focused checker reported
`35 current decline(s), 0 error(s)`.

## Handoff

All three A pages have a `sufficient` machine-readable verdict in
`frontier-31a-alpha-c-step3-verdicts.json`.  The next authoring/review stage
should retain the stated hypotheses and source locators, and treat the
perfect-module question as a plan-owner decision rather than an unrecorded
dependency of Batch 11.
