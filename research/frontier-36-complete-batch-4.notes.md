# Batch 4 Step-1 scaffold — tangent spaces, smoothness and Bertini

Run `frontier-36-complete`, role beta. This batch owns only
`zariski-tangent-spaces-regular-points-smoothness-and-bertini` and its examples
page. I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task, the
binding owner direction, the full AV-6 design and its later amendment, the
current plan, and the earlier batch evidence before constructing this pair.
The owner direction changes other pairs but imposes no additional theorem on
this one. No published item, shared plan, engine state, or verdict was edited.
The run was independently confirmed `running` from `.autopilot` status and
the current Git log; no concluded `RESUME.md` claim was used as live evidence.

The A page is order 366.059 with 43 items; the B page is order 366.060 with 17
items. Both retain the current plan's category, titles, companion relationship,
and page `requires`. All 60 items have explicit `deps` and recomputed
`dependency_level` (0 through 11). Each was recorded `ready` in prerequisite
order after a complete strategy and prerequisite check. The one necessary new
A-page item is `lem-zero-scheme-of-line-bundle-section`, before the linear
system definition. It constructs the section's closed subscheme from local
quotient spectra and gluing, including nilpotents and the zero/empty cases.
The A inventory stays below the 100-item cap; no split or new pair is needed.
These records assert scaffold readiness, not independent mathematical approval.

## Plan and design reconciliation

The design at `research/plan-algebraic-geometry-track.md` lines 511–565 lists
AV-2, AV-5, local-ring/Nakayama and Krull-dimension interfaces as requirements.
The current `research/plan-spec.json` directly requires only
`algebraic-differentials-separability-and-smooth-local-presentations`; the
earlier interfaces occur in that page's plan prerequisite closure. The plan
controls the direct page requirement. The original 27 A / 9 B rows are
superseded by the design's later 42 A / 17 B audited amendment; this scaffold
has 43 A because the section zero-scheme lemma is an actual prerequisite.
The design's original instruction to defer the dual-number point proof to
AV-16 is stale: the current plan already has the scheme and dual-number
suppliers published, so the rational-point proof is local here. The original
target-open generic-smoothness wording omitted smoothness of the source and
was false; the amended source-open statement, smooth-source target-open
statement, and constant-cusp counterexample are all retained. The malformed
`cex-...-theorem` design row is implemented as the actual theorem
`thm-regular-not-smooth-imperfect-field` with a complete strategy.

Because the published classical definition permits reducible varieties,
`cor-smooth-projective-complete-intersections-general` explicitly assumes
**pure dimension** `d`; otherwise its `r=0` assertion would already fail.
This states the intended expected-dimension claim without silently assuming
that “variety” means irreducible. Bertini itself allows a reducible smooth
source and concludes only smoothness away from the base locus; it asserts no
irreducibility or connectedness.

## Mathematical and prerequisite audit

- `lem-tangent-vectors-as-dual-number-points` proves the bijection only at
  rational points. The intrinsic cotangent/tangent definitions also cover
  nonclosed scheme points. `thm-jacobian-criterion-affine-variety` separately
  uses the finite separable residue-field cotangent injection and polynomial
  quotient differentials at nonrational closed points. The perfect-field
  assumption supplies separability; it is not inferred from the rational
  dual-number case. The Jacobian convention is equation rows, and the ideal
  must be the scheme's actual defining ideal.
- The singular-locus formulas use local dimension, including components of
  unequal dimensions. The perfect-field regular-locus supplier is used for
  nonclosed points and density; openness alone is not used to infer density.
  `lem-separating-hypersurface-chart-variety` uses a genuinely separating
  transcendence basis and a primitive element, not the unrelated fact that
  algebraic extensions of a perfect field are separable.
- The associated-graded tangent cone retains its scheme structure. An
  arbitrary ideal needs **all** initial forms, not just initials of a chosen
  generating list. The cusp's reduced cone is a line although its tangent
  space is two-dimensional. The hypersurface multiplicity converse uses the
  published regular-local quotient-by-parameters theorem, avoiding a dimension
  shortcut.
- `lem-smooth-map-tangent-surjectivity-criterion` uses the published local
  standard-smooth submersion theorem, including its actual flatness and fibre
  argument. Vakil's corresponding sentence is an exercise, not a proof.
  Characteristic-zero field-differential rank supplies source-open generic
  smoothness. The target-open theorem first requires a smooth source and
  removes the image of the critical locus; the constant cusp family shows why
  the source condition matters.
- The incidence lemma identifies the scheme-theoretic fibre with the zero
  scheme of a section. Standard projective affine charts and the published
  smooth-product theorem show its total space smooth. The Bertini strategy
  applies target generic smoothness to its finitely many disjoint smooth
  irreducible components and intersects their target opens. For complete
  intersections, local Jacobian minors define the universal rank-defect locus,
  projective closed projection makes the good parameter set open, and the
  projective intersection theorem plus induction supplies a good tuple. The
  last assertion handles `r=0` and `r>d` explicitly.

I read the complete statements and relevant proof steps of the published
AV-5a suppliers
`lem-ag-separable-residue-cotangent-sequence`,
`lem-ag-polynomial-quotient-differentials`,
`thm-ag-perfect-field-jacobian-regularity`,
`thm-ag-geometric-regularity-perfect-base`,
`thm-ag-field-differentials-separable-rank`,
`lem-ag-local-flatness-regular-parameters`,
`thm-ag-standard-smooth-geometric-regularity`, and
`thm-ag-submersion-criterion-standard-smooth`, with the regular-local quotient,
affine gluing, projective chart, projective intersection and closed-projection
suppliers used above. Their hypotheses, directions and choice costs match
the uses stated in this scaffold. All 54 distinct direct out-of-run item
dependencies are present and published; no new cross-batch item or page edge
is required. The batch-owned cross-batch input is `[]`, and the unified ledger
was refreshed by its tool. A broad mechanical ancestor walk is not a proof
certificate: older published definition/well-definedness records contain
reference loops, while no new in-run cycle or load-bearing circular proof was
identified in the named mathematical suppliers.

Thirty-three items state the Axiom of Choice and directly depend on
`def-axiom-of-choice`, principally for inherited regular-local, dimension,
generic-smoothness and projective-intersection suppliers. Initial intrinsic
tangent, dual-number, cone-presentation and elementary example arguments
remain choice-free where their direct proof paths permit it. No Recorded
result or incompatible-axiom branch is used as a proof supplier.

### Published-proof audit note for the canonical ledger

The earlier frontier-34 batch-8 notes flagged published
`thm-affine-closed-immersions-quotient-rings`: its proof step 1.1 imports the
affine quotient classification itself from Stacks tag `01IN`, while its
declared direct dependencies are only `def-closed-immersion-schemes`,
`def-affine-scheme`, and `thm-affine-scheme-ring-anti-equivalence`, all
published. Published
`thm-quasi-coherent-ideal-closed-subscheme-correspondence` depends on that
classification and is not an independent repair. A later frontier-35 review
accepted the classification as source-backed after checking the closed-
immersion convention, so this is a **proof-locality audit concern**, not a
claim that the theorem's statement is false or that the issue was newly
discovered here. A local repair would prove the affine ideal-sheaf/quotient
classification from affine quasi-coherent sheaf exactness and gluing, with
those suppliers declared before consumers. This batch's local zero-scheme
lemma avoids the classification, so the concern is outside its actual proof
paths and does not block this supplier.

## Source reading and dispositions

Milne and Arapura are independent full treatments for the A page; Vakil's
separate lecture packet supplies the generic smoothness/Bertini route, and
Stacks supplies exact commutative-algebra interfaces. The complete relevant
arguments, rather than previews or snippets, were inspected. Exact named
result and exercise dispositions are in the coverage file: 112 harvested
rows, comprising 86 included, 3 already published, 17 deferred to named
pages or `owner-decision`, and 6 out of scope with individual reasons. Two
earlier provisional deferrals (flat regularity descent and the local Tor
flatness criterion) now point to their published AV-5a suppliers; their
historical source locations remain in coverage. No source was dropped and no
five-retry fallback or `source_resolution` decision was needed. The historical
Vakil full-book URL remains as `original_url`; the cited classes 51–52 packet
is the fetched, separately harvested source.

| Full-text source | Relevant exact locator | Fetch evidence |
|---|---|---|
| [Milne, *Algebraic Geometry*](https://www.jmilne.org/math/CourseNotes/AG.pdf) | Ch. 4 §§a–j, printed pp. 81–99, exercises 4-1–4-10 | 231-page PDF, 2,833,201 bytes, SHA-256 prefix `8222dff2574a5afc` |
| [Arapura, *Algebraic Geometry*](https://www.math.purdue.edu/~arapura/preprints/algeom.pdf) | Ch. 5 §§5.1–5.4, printed pp. 34–39 | 41-page PDF, 338,920 bytes, prefix `a1237db3799a58f1` |
| [Milne, AG10](https://www.jmilne.org/math/CourseNotes/AG10.pdf) | §f, 10.58–10.73, pp. 16–19; same author, supplemental | 41-page PDF, 1,150,928 bytes, prefix `dcdbad3c4d0972ec` |
| [Vakil, classes 51–52](https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf) | §§2.1–2.2, 3.1–3.11, pp. 5, 7–11 | 12-page PDF, 141,520 bytes, prefix `1c66386d36402493` |
| [Stacks 038S](https://stacks.math.columbia.edu/tag/038S), [00TU](https://stacks.math.columbia.edu/tag/00TU), [00TV](https://stacks.math.columbia.edu/tag/00TV), [00MK](https://stacks.math.columbia.edu/tag/00MK), [00MP](https://stacks.math.columbia.edu/tag/00MP), [07DY](https://stacks.math.columbia.edu/tag/07DY) | §33.12 and Lemmas 10.140.4–5, 10.99.7/15, 10.128.2; complete statements/proofs | Six substantive HTML bodies individually stamped; exact byte counts and hashes in coverage |

`source-fetch-check --stamp` verified 10/10 full bodies on 2026-09-27.
Check mode again reported 10/10; the whole-run source check reported 70/70
at the final check instant. The URL sweep found 10/10 live. The source-backing
check passed for 47 authored result records linked to openable sources.

## Checks and remaining whole-run work

- Owned coverage: 1 A coverage page, 112 results, 0 errors and warnings;
  60/60 manifest items have backing rows. Owned source check: 10/10 verified.
  Owned dependency-level recomputation: 60 items, maximum level 11, no
  mismatch or cycle. All 60 Step-1 readiness records were current and closed.
- Whole-run manifest dependencies passed with 438 items and 0 errors;
  manifest-only content policy passed with 438 scoped items and 0 errors or
  warnings. `validate-plan` passed on the current 1,624-page plan;
  `manifest-integrity` found all 58 owed pages with no scope drift.
  `extcheck` passed with 43 pre-existing published-result warnings outside
  this pair; none is a supplier used to prove this scaffold.
- The required whole-run `item-dependency-levels check --run
  frontier-36-complete` returned exit 1 because other batches still have
  empty scaffold inventories; it reported no batch-4 level mismatch or cycle.
  The whole-run readiness check likewise remains open: 428 of 438 currently
  listed items were ready at the check instant, with additional empty pages.
  Whole-run coverage returned 51 errors and 2 warnings across 23 coverage
  pages and 799 harvested rows, beginning with batch 24's included results
  absent from its still-empty manifest. No error names this pair. These are
  other batches' moving inputs, not a mathematical approval for this pair.

Owner/operator reconciliation and the full engine gate follow construction;
Step 3 supplies independent review.
