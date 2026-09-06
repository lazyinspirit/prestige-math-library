# frontier-31a — group Alpha `a`, Step 3 scaffold review

This review covers batches `1`, `18`, and `19`: two group-theory pairs, one
Lie-theory pair, and one finite-group-representation pair.  For every pair I
read the current manifest, coverage record, notes, governing design section,
and `research/plan-spec.json`, then checked the stated source passages and
the direct prerequisite route.  The live `.autopilot/` directory belongs to
the separate `frontier-23` run; no workflow state was changed.

## Verdicts

| Batch | A page | B page | Verdict |
| ---: | --- | --- | --- |
| 1 | `the-finite-simple-group-classification-landscape` | `the-finite-simple-group-classification-landscape-examples` | `sufficient` |
| 1 | `schur-multipliers-and-universal-central-extensions` | `schur-multipliers-and-universal-central-extensions-examples` | `sufficient` |
| 18 | `verma-modules-and-shapovalov-forms` | `verma-modules-and-shapovalov-forms-examples` | `sufficient` |
| 19 | `brauer-induction-and-elementary-subgroups` | `brauer-induction-and-elementary-subgroups-examples` | `sufficient` |

The A-page item counts are 24, 38, 17, and 20 respectively.  No local A page
exceeds the split threshold.  There is no missing local result, source, or
backward prerequisite requiring an in-scope scaffold repair; the external
closure alert for the second batch-1 pair is recorded below.

## Batch 1 — finite-simple-group landscape

The 24-item A page and six-example B page implement GT-20
(`research/plan-group-theory-track.md:2548-2656`).  The current plan, rather
than the older design wording, declares the `brauer-characters-and-decomposition-matrices-examples`
and `socles-and-the-onan-scott-landscape` predecessors.  That route supplies
the finite-group and socle conventions before the page states its deliberately
external CFSG landmark.  The manifest keeps the local generalized-Fitting
subgroup route separate from the named classification families and from the
historical/status remarks; it does not purport to construct Lie-type groups or
to prove the classification.

The source route is adequate.  Stephen D. Smith's [*CFSG—A User's Manual*](https://homepages.math.uic.edu/~smiths/talkv.pdf), PDF pp. 1–24 (Lecture 1,
Lecture 1a, and §§1–3), supplies the classification statement, family
boundaries, components, the generalized Fitting subgroup, and the Schreier
consequence.  Michael Aschbacher's [*Status of the Classification*](https://www.math.unipd.it/~tonolo/didattica/Algebra%2B2/aschbacher.pdf), PDF pp. 1–5,
supports the historical and quasithin qualifications.  The AMS [Number 10
publisher record](https://bookstore.ams.org/The-Classification-Of-The-Finite-Simple-Groups)
supports only the carefully qualified current-series status.  Its contents and
the technical QTKE theorem remain out of scope, as the coverage record says.

## Batch 1 — Schur multipliers and universal central extensions

The 38-item A page and six-example B page implement GT-23
(`research/plan-group-theory-track.md:2860-2973`).  The current plan requires
`second-cohomology-and-abelian-kernel-extensions-examples` and
`group-cohomology-as-a-derived-functor-examples`; that direct route is earlier
and supplies the distinction between homology, cohomology, and extension
classification.  The manifest then has a coherent local order: $M(G)=H_2(G;
\mathbb Z)$, the Hopf formula and exterior-square description, perfectness
and the universal central extension, the free-presentation construction, and
the degree-two universal-coefficient sequence.  It does not conflate the
arbitrary-group universal-central-extension assertion with the finite-group
covering-group discussion.

The sources have distinct, compatible jobs: Clara Löh's [*Group
Cohomology*](https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf),
§1.5 and §§3.1.4–3.2.5 (PDF pp. 30–48 and 115–145); Weibel, [Chapter 3,
§3.6.5](https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf), PDF
pp. 89–90; Caroline Lassueur, [Chapter 9 §§34–37](https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf), PDF pp. 99–108; and Weibel,
[Chapter 6](https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf).
In particular, Lassueur Theorem 34.7 gives the recorded finite-group Hopf
formula, while the UCE statement for a perfect group is carried by the
general group-homology route.  The derived-functor source sections, integral
duality, and the topological UCT application are properly fenced rather than
silently reproved.

### Cross-group prerequisite-closure alert

`content-policy --manifest-only` reports six missing-item edges for batch 1:
three uses of `def-group-homology-as-a-derived-functor`, one use of
`def-group-cohomology-as-a-derived-functor`, and two uses of
`thm-universal-coefficient-theorem-for-cohomology-over-a-pid`.  They are not
missing declarations in this pair: the first two are carried by the earlier
group-(co)homology route and the last by its earlier UCT route.  A diagnostic
including those predecessor manifests resolves the batch-1 edges but exposes
remaining closure defects in the earlier batch-9 and batch-10 routes.  That is
a foreign prerequisite-closure alert, not a license to alter either batch, add
a forward edge, or change this pair's verdict.  It must be resolved by its
owning routes before a combined authored-content policy check can pass.

## Batch 18 — Verma modules and Shapovalov forms

The 17-item A page and six-example B page implement RL-2
(`research/plan-representation-theory-lie-track.md:108-190`) after the
declared `harish-chandra-isomorphism-casimir-and-central-characters-examples`
predecessor.  It fixes a finite-dimensional complex semisimple Lie algebra,
triangular decomposition, unshifted highest weight, Chevalley anti-involution,
and normalization of the contravariant form before using them.  PBW/weight
spaces, the unique simple quotient, the form and its radical, the determinant
criterion, and the `sl_2` and type-A2 witnesses occur in a valid order.
The determinant is explicitly only up to a nonzero scalar; the formal-character
discussion stays in the completed setting.

Pavel Etingof's [18.755 notes](https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf)
provide the Verma-module and simple-quotient route, while his [18.757 notes](https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf),
§§8 and 15, supply the Shapovalov-form and determinant route.  The determinant
exercise sequence is a proof obligation for the author, not a theorem cited in
place of its argument; its polynomial, factor, and multiplicity steps are
identified in the notes.  Thatte's [Category O notes](https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf)
provide the stated elementary comparisons only.  The coverage correctly keeps
its false Section 6 material outside the proof route.  The eleven
out-of-scope and twelve deferred source rows remain compatible with the pair;
every deferral points to one of the strictly later linkage or category-O pages.

## Batch 19 — Brauer induction and elementary subgroups

The 20-item A page and four-example B page implement RG-2
(`research/plan-representation-theory-groups-track.md:240-390`) immediately
after `artin-induction-and-rational-characters-examples`.  It fixes the
`p`-elementary $C\times P$ and `p`-hyperelementary $C\rtimes P$ conventions,
separates the full character ideal from the hyperelementary permutation
subring, and retains all splitting-field qualifications.  The local route—
the induction ideal, Banaschewski's obstruction, p-local input, the
supersolvable/monomial bridge, then Brauer induction—is correctly ordered.

Wen-Wei Li, [Lecture 14](https://www.wwli.asia/downloads/YAlg1.pdf), and
Kramar's [Artin–Brauer notes](https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf)
provide the primary induction statements and proof route.  tom Dieck's
[notes](https://www.uni-math.gwdg.de/tammo/d01.pdf) provide the complementary
monomial and representation-ring perspective.  Coverage properly declines to
use tom Dieck Theorems 4.6.1–4.6.2 because their proof is deferred there; Li's
route remains available.  The eight out-of-scope and three deferred rows
therefore do not hide a prerequisite: the three deferrals have existing later
homes for monomial characters or fields of definition.

## Scope-decision record

After `scope-decisions refresh`, group `a` had 45 current pending rows.  All
45 are now `stands` in
`research/frontier-31a-alpha-a-scope-decisions.json`, each with current
coverage, route, and plan evidence.  The counts are: batch 1, eleven
out-of-scope; batch 18, eleven out-of-scope and twelve deferred; batch 19,
eight out-of-scope and three deferred.  Every deferred row names an existing,
strictly later destination.  No `owner-decision` is needed.

## Checks

- `node tools/manifest-deps.mjs` on batches 1, 18, and 19: 121 items, 0
  normalized IDs, and 0 errors.
- `node tools/coverage-checklist.mjs --require-destination` on their coverage:
  177 harvested results, 0 errors, and 0 warnings.
- `node tools/source-fetch-check.mjs --coverage` on batches 1, 18, and 19:
  respectively 7/7, 3/3, and 3/3 source records fetch-verified.
- `node tools/content-policy.mjs --manifest-only`: batches 18 and 19 pass
  (23 and 24 scoped items, 0 errors); batch 1 has the six external-closure
  errors reported above (74 scoped items).
- `node tools/validate-plan.mjs research/plan-spec.json`: declared order is
  acyclic and consistent, with no item-level cycles, forward references,
  B-page dependencies, or unresolved IDs among the itemized pages.
- `node tools/scope-decisions.mjs check --run frontier-31a --group a`: 45
  current declines, 0 errors.

No in-scope scaffold claim, item, source disposition, prerequisite, or reading
order was changed.  The next action is ordinary Step-3 closure handling for
the four sufficient pairs, together with the recorded external
predecessor-closure alert.
