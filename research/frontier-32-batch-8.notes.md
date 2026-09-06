# Frontier 32 / beta / batch 8 — Triangulated Categories scaffold notes

## Scope, authority, and page split

The only artifacts edited for this batch are this note,
`frontier-32-batch-8.pages.json`, and `frontier-32-batch-8.coverage.json`.
No published item, library page, plan structure, workflow state, or other batch
was changed.

The required on-disk `autopilot status` check reports a live `frontier-23`
author batch 8 rather than `frontier-32`. This dispatch explicitly names
`frontier-32`; because workflow state is outside the authorised artifacts, the
discrepancy is recorded rather than reconciled here.

I read all three dispatch design locations. `plan-homological-algebra-track.md`
§3.5 at L291 supplies the global derived/triangulated scope: the localisation
setting is controlled and unbounded replacement theory is denied. HA-13 at
L2503--2686 is the controlling page design: it gives the conservative route,
the 40 core items, six false statements, seven companion cases, sources, and
sign traps. L2651 is the contiguous B-page part of that same HA-13 record, not
a later amendment. Thus HA-13 controls detailed mathematical content, subject
to the plan specification's binding metadata.

There is a deliberate design/spec conflict on prerequisites. HA-13 names
`mapping-cones-cylinders-and-chain-triangles` and
`long-exact-sequences-in-homology`; the live `plan-spec.json` and task instead
declare `group-cohomology-as-a-derived-functor-examples` for order 365.061.
I did not adjudicate it. The manifest uses the live spec's order, category,
companion, and prerequisite; merged-plan validation confirms that all actual
item dependencies are nevertheless in its transitive earlier closure. The
design does not state a competing numeric order. The A page has 46 items and
the B page has 7, so the A page is below the 60-item split threshold and no
split is proposed.

## Sources read and harvest record

| Treatment | Exact full-text range read | Use in this scaffold |
| --- | --- | --- |
| Charles A. Weibel, *An Introduction to Homological Algebra*, Ch. 10, [full chapter PDF](https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf) | Complete 48-page Chapter 10 PDF; pp. 369--378 / PDF pp. 1--9: §§10.1--10.2, ending before §10.3. | Primary textbook treatment of K(A), Verdier's axioms, representable exactness, cone triangulation, and the octahedron. |
| The Stacks Project, [*Derived Categories* PDF](https://stacks.math.columbia.edu/download/derived.pdf) | 129-page PDF compiled 2026-07-14: contents; §§2--4 at printed pp. 2--13 and §§9--10 at pp. 28--36, through Lemma 10.5. | Independent monograph control for signed rotation, Hom exactness, split-sequence/cone comparison, and a complete TR1--TR4 proof for K(A). |
| Amnon Yekutieli, [*A Course on Derived Categories* PDF](https://arxiv.org/pdf/1206.6632) | Complete 97-page notes; contents pp. 3--4 and §§8--9 at printed pp. 33--44/PDF pp. 34--45. | Independent full lecture-note treatment for T-additive structure, nonfunctorial cones, standard triangles, and TR1--TR3 in K(M). It explicitly omits the TR4 proof, so it is not used to support that lemma. |

The coverage artifact contains 106 source-owned heading/result rows with a
concrete disposition for each (25 Weibel, 56 Stacks, 22 Yekutieli, plus 3
canonical targets). `included` and `inline` rows name their scaffold carrier;
the two bounded-subcategory rows are deferred to `derived-categories`; the
other declines give result-specific reasons. It records the three exact HTTP(S)
URLs above and never relies on the inaccessible Gelfand--Manin sample.

The browser fetched and exposed the full PDFs (48, 129, and 97 pages,
respectively) while this scaffold was prepared. A contemporaneous shell fetch
could not resolve the three hosts, but each coverage source retains the exact
web-reader receipt for the complete document and range actually read. On the
current bytes, `source-fetch-check.mjs --coverage` accepts those receipts and
reports `3/3` sources fetch-verified; no URL was removed or substituted merely
because runner-local DNS was unavailable.

## Conventions and proof route

- Translation is supplied data: an additive autoequivalence `[1]` and a chosen
  quasi-inverse `[-1]`. A triangle is `X -> Y -> Z -> X[1]`.
- Left rotation is exactly `Y -> Z -> X[1] -> -f[1] Y[1]`. The minus sign is
  used in TR2, the chain-cone rotation calculation, and both long exact Hom
  sequences; a source using another placement is translated rather than mixed.
- A cone is only an object completing a map under TR1, unique up to a
  nonunique isomorphism. It is not a functor in an arbitrary triangulated
  category. Chain-level cone functoriality on the arrow category is not silently
  promoted to K(A).
- The concrete model uses the existing homological cone convention
  `Cone(f)_n = D_n direct-sum C_(n-1)` and the established cone long exact
  sequence. The standard K(A) triangle is translated explicitly to the
  page's `[1]` convention.
- “Exact functor of triangulated categories” is defined anew as additive with
  specified translation compatibility and triangle preservation; it is not an
  exact functor between abelian categories. The proposition on additive
  functors of abelian categories proves that they induce this weaker
  triangulated exactness degreewise.
- The K(A) theorem is not asserted as folklore: TR1, TR2, TR3, and TR4 are
  separately planned lemmas. The TR4 lemma invokes the already established
  three-cone calculation. No dg, model, stable-infinity, Brown-representability,
  or unbounded-replacement result enters this page.

## Item ledger: A page

Each listed ID has the exact title, strategy, and full `deps` array in the
manifest. This ledger records the claim carrier and the dependency rationale
needed when authoring resumes.

| ID | Exact planned claim / route | Dependency rationale |
| --- | --- | --- |
| `def-category-with-translation` | Additive category with supplied `[1]` and `[-1]`. | Builds on `def-additive-category`. |
| `def-triangle-in-a-category-with-translation` | The three-arrow translated triangle. | Uses the supplied translation. |
| `def-morphism-and-isomorphism-of-triangles` | Three compatible maps, including the translated square. | Uses the triangle definition. |
| `def-rotation-of-a-triangle` | Signed left rotation and inverse rotation. | Uses the triangle and fixes the page sign. |
| `def-distinguished-triangle` | Chosen class of triangles. | Uses the underlying triangle data. |
| `def-triangulated-category-axiom-tr-one` | TR1: isomorphism closure, completion, identity triangle. | Uses distinguished triangles and triangle isomorphisms. |
| `def-triangulated-category-axiom-tr-two` | TR2: iff signed rotation. | Uses the distinguished class and rotation. |
| `def-triangulated-category-axiom-tr-three` | TR3: completion exists, not uniquely. | Uses triangle morphisms. |
| `def-triangulated-category-axiom-tr-four-octahedral` | Typed octahedral TR4. | Uses triangles, morphisms, and signed rotation. |
| `def-triangulated-category` | Structure satisfying TR1--TR4. | Packages items 1 and 5--9; landmark. |
| `rem-triangulated-sign-convention` | Library placement of `-f[1]`. | Depends on rotation and the packaged axioms. |
| `prop-zero-and-split-triangles-are-distinguished` | Zero and canonical biproduct triangles. | Uses TR1--TR3 and `def-biproduct`. |
| `prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations` | All translates and rotations stay distinguished. | Iterates TR2 and the translation. |
| `def-homological-functor-on-a-triangulated-category` | Covariant additive functor with triangle exactness. | Uses triangulated, additive, and abelian-category structure. |
| `def-cohomological-functor-on-a-triangulated-category` | Contravariant additive functor with triangle exactness. | Uses triangulated, contravariant-functor, and abelian-category structure. |
| `thm-representable-hom-functors-on-a-triangulated-category-are-homological-or-cohomological` | Both representable variances are exact. | TR1--TR3, the two functor definitions, and the Hom bifunctor; landmark. |
| `thm-long-exact-hom-sequences-of-a-distinguished-triangle` | Both signed translated Hom sequences. | Applies representable exactness and rotations. |
| `cor-triangulated-five-lemma` | Five lemma for a triangle morphism. | Uses the Hom sequences and published long-exact five lemma. |
| `prop-two-isomorphism-components-of-a-morphism-of-triangles-force-the-third` | Two isomorphisms force the third. | Rotated triangulated five lemma. |
| `prop-a-map-is-zero-exactly-when-the-corresponding-representable-map-vanishes` | Representable zero detection. | Evaluates at identity in Hom. |
| `prop-a-distinguished-triangle-with-zero-first-map-is-split` | Zero first arrow implies split. | Hom exactness, zero detection, biproduct triangle, section/retraction. |
| `prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes` | All equivalent split criteria. | Rotates the preceding criterion. |
| `prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism` | Cone uniqueness only up to noncanonical isomorphism. | TR1, TR3, and two-isomorphisms theorem. |
| `prop-octahedral-gives-a-triangle-relating-the-cones-of-f-g-and-gf` | Fourth face relates cones of `f`, `g`, and `gf`. | Reads it from TR4. |
| `def-exact-functor-between-triangulated-categories` | Additive, translation-compatible, triangle-preserving functor. | Uses triangulated categories and natural isomorphism. |
| `prop-a-natural-isomorphism-of-exact-functors-respects-triangles-under-the-translation-compatibility` | Compatible natural isomorphism gives a triangle morphism. | Uses exact functors, natural isomorphism, triangle morphisms. |
| `def-triangulated-subcategory` | Full additive, translation- and triangle-closed subcategory. | Uses inherited triangulated exactness. |
| `def-thick-subcategory` | Triangulated plus direct-summand closure. | Uses split mono/epi as the available categorical retraction interface. |
| `prop-the-total-kernel-of-a-cohomological-functor-is-thick` | Objects killed in every shift form a thick subcategory. | Long exactness plus retract closure. |
| `prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category` | Acyclic complexes are thick in K(A). | Existing cone LES, acyclicity, K(A), and biproducts. |
| `def-standard-cone-triangle-in-the-homotopy-category` | Image of a chain-level cone triangle in K(A). | Existing cone triangle and shift autoequivalence. |
| `def-distinguished-cone-triangle-in-the-homotopy-category` | Triangle isomorphic to a standard cone triangle. | Standard triangles and triangle isomorphisms. |
| `lem-cone-triangles-satisfy-tr-one` | Cone-triangle TR1. | Identity cone contractibility and standard triangles. |
| `lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign` | Cone-triangle TR2 with `-f[1]`. | Signed cone/shift comparison. |
| `lem-cone-triangles-satisfy-tr-three` | Cone-triangle TR3. | Matrix cone map for a square up to homotopy. |
| `lem-cone-triangles-satisfy-the-octahedral-axiom` | Cone-triangle TR4. | Existing explicit three-cone calculation. |
| `thm-the-homotopy-category-of-an-abelian-category-is-triangulated` | K(A) with cone triangles is triangulated. | Additivity, shift, distinguished class, and all four preceding lemmas; landmark. |
| `thm-homology-is-a-homological-functor-on-the-homotopy-category` | Homology respects distinguished triangles. | Existing factorisation and cone LES with connector sign. |
| `prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories` | Degreewise additive functors preserve this triangulated structure. | Existing degreewise action and standard cone triangles. |
| `prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language` | A quasi-isomorphism's standard cone is acyclic. | Existing cone criterion and acyclicity. |
| `fs-the-third-map-in-a-morphism-of-triangles-is-unique` | False: TR3 completion is unique. | Depends on TR3 and the B counterexample. |
| `fs-cones-form-a-functor-in-every-triangulated-category` | False: arbitrary cones are functorial. | Depends on nonunique cone completion. |
| `fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish` | False: vanishing composites suffice. | Depends on cone-triangle model and B counterexample. |
| `fs-the-octahedral-axiom-is-the-associativity-of-composition` | False: TR4 is ordinary associativity. | Depends on TR4's cone comparison. |
| `fs-every-triangulated-subcategory-is-thick` | False: retract closure is automatic. | Contrasts the two definitions. |
| `fs-the-rotation-of-a-distinguished-triangle-has-no-sign` | False under the library convention. | Depends on signed rotation remark. |

## Item ledger: B page

| ID | Exact planned claim / route | Dependencies |
| --- | --- | --- |
| `ex-the-split-distinguished-triangle` | Concrete canonical biproduct triangle and its split criterion. | The split-triangle proposition pair. |
| `ex-the-cone-triangle-of-multiplication-by-m` | Cone of nonzero integer multiplication on a stalk complex. | Standard cone triangle and stalk-complex definition. |
| `ex-the-long-exact-hom-sequence-of-a-cone-triangle` | Consecutive Hom terms for that multiplication cone. | Previous example and long exact Hom theorem. |
| `ex-an-octahedron-for-two-composable-maps-of-stalk-complexes` | Octahedron for multiplication by `m`, `n`, `nm`. | Abstract cone relation, three-cone calculation, stalk complexes. |
| `ex-the-thick-subcategory-of-acyclic-complexes` | Acyclic-cone thick-subcategory instance. | Acyclic thickness and quasi-isomorphism/cone propositions. |
| `cex-a-three-term-zero-composite-diagram-that-is-not-distinguished` | Zero-composite non-distinguished triangle. | Relevant false statement, stalk complexes, distinguished-cone definition. |
| `cex-nonuniqueness-of-a-tr-three-completion` | Two third components completing the same first square. | TR3 nonuniqueness claim, TR3, and split example. |

## Validation and outstanding obligation

- `node tools/content-policy.mjs research/frontier-32-batch-8.pages.json --manifest-only`: pass — 53 scoped items, 0 errors, 0 warnings.
- A read-only merged-spec run of `validate-plan` (this manifest substituted only in `/tmp`) passed: no unresolved ids, cycles, forward edges, B-page dependencies, or size violations. Its repository-wide redundant-prerequisite warnings are pre-existing and do not name a Batch 8 item.
- `node tools/coverage-checklist.mjs research/frontier-32-batch-8.coverage.json --require-destination`: pass — 1 A page, 106 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-8.coverage.json`: pass — 3/3 source receipts fetch-verified.

Alpha Step 3 strengthened the planned refutation of
`fs-every-triangulated-subcategory-is-thick`: the manifest now names the
even-Euler-characteristic triangulated subcategory of bounded complexes of
finite free abelian groups and the retract `Z[0]` of `Z[0] direct-sum Z[0]` as
an explicit non-thick witness.  Merely observing that retract closure is an
extra definition clause would not by itself refute the universal statement.

Next action: hand the manifest, coverage harvest, this dependency ledger, the
declared spec/design prerequisite conflict, and the workflow-run discrepancy
to the next workflow stage.

## Step-3 fix pass

I read `research/frontier-32-alpha-e-step3-scaffold-review.md` in full.  Its
two numbered findings are both about Batch 18, not this pair; the review's
Batch 8 verdict is `sufficient`.  They are therefore explicitly pushed back
from this Batch 8 fix pass rather than being silently ignored.  No plan,
published content, workflow state, or another batch was changed.

- **E18-1 — pushed back as outside Batch 8 authority.** The finding concerns
  `thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function` in
  `stable-unstable-manifolds-and-morse-smale-transversality` (Batch 18): its
  missing Sard--Smale/Fredholm proof interface and primary proof source have
  no carrier, dependency, or harvest row in this Batch 8 A/B pair. Evidence:
  the review's E18-1 section identifies that Batch 18 theorem and its current
  dependency list, whereas this manifest contains only
  `triangulated-categories` and `triangulated-categories-examples` at orders
  365.061--365.062. **Changed scaffold record:** none; repairing it here would
  violate batch ownership.

- **E18-2 — pushed back as outside Batch 8 authority.** The finding concerns
  `cex-an-index-one-moduli-space-can-be-infinite-without-compactness` on the
  Batch 18 companion page and requires an exact source-backed noncompact-flow
  witness. It is neither a Batch 8 item nor a result used by a Batch 8 item.
  Evidence: the review's E18-2 section names that counterexample and its two
  Batch 18 dependencies; neither ID occurs in this manifest or its 106-row
  triangulated-categories harvest. **Changed scaffold record:** none; its
  requested construction cannot honestly be added to this batch.

The review's unnumbered Batch 8 direct repair is present and retained:
`fs-every-triangulated-subcategory-is-thick` now names the full
even-Euler-characteristic subcategory of bounded complexes of finitely
generated free abelian groups and the retract
`Z[0]` of `Z[0] direct-sum Z[0]`. Its record has the explicit dependencies
`def-triangulated-subcategory`, `def-thick-subcategory`, and
`def-zero-and-stalk-complex`; this is a witness-based refutation, rather than
the insufficient observation that the two definitions differ.

I re-read the exact harvested sections of the three independent treatments:
Weibel, Chapter 10, §10.1--§10.2 (PDF pp. 1--9); the Stacks Project, *Derived
Categories*, §§2--4 and §§9--10 through Lemma 10.5 (PDF pp. 2--13 and 28--36);
and Yekutieli, *A Course on Derived Categories*, §§8--9 (PDF pp. 34--45).
The current complete-document URLs and locators remain those recorded in the
coverage artifact. In particular, the re-read confirms the declared
`-f[1]` left-rotation convention, the separate TR1--TR4 cone proof route, and
the limitation that Yekutieli's notes do not supply the omitted TR4 proof.

Fix-pass validation, run after the Step-3 record was added:

- `node tools/coverage-checklist.mjs research/frontier-32-batch-8.coverage.json --require-destination`:
  1 page, 106 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-8.coverage.json`:
  3/3 sources fetch-verified.
- `node tools/manifest-deps.mjs research/frontier-32-batch-8.pages.json`:
  53 items, 0 normalized dependencies, 0 errors.
- Whole-run `content-policy --manifest-only` over all nineteen Frontier 32
  manifests: 672 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: pass; the live plan
  has no declared-order cycle, unresolved item id, forward reference, or
  B-page dependency among the 800 pages with item lists. Its
  repository-wide redundant-prerequisite diagnostics are warnings outside this
  batch and name no Batch 8 scaffold record.

## Step-5 authoring

Authored all 53 planned items and both planned draft pages:
`library/homological-algebra/triangulated-categories.md` and
`library/homological-algebra/triangulated-categories-examples.md`. The A page
contains the 46 axiomatic, Hom-exactness, splitting, exact-functor,
subcategory, cone-triangulation, and guardrail items; the B page contains the
five examples and two counterexamples listed in the batch manifest. Every
authored item and both pages has `status: draft`.

Controlling design: I read HA-13 at
`research/plan-homological-algebra-track.md` L2503--2680, including its B-page
list and source/trap paragraph. Its conservative axioms-and-cones route,
signed rotation $-f[1]$, separate TR1--TR4 lemmas, nonfunctorial-cone boundary,
and exclusion of dg/model/stable-infinity machinery controlled authoring. The
older track overview at L291 and the B-page amendment at L2651 are consistent
with that route. HA-13's prose calls the surrounding plan category
`category-theory`, while the dispatch manifest and `plan-spec.json` give this
page `homological-algebra`; this is the recorded design/spec disagreement. Per
the task instruction, I did not adjudicate it and wrote the pages under the
current manifest category `library/homological-algebra/`.

Sources read at the coverage locators were Weibel Chapter 10 §§10.1--10.2,
the Stacks Project *Derived Categories* §§2--4 and §§9--10, and Yekutieli
§§8--9. The Stacks definition at tag `05QK` was additionally checked for the
typed TR1--TR4 clauses, signed rotation, exact-functor compatibility, and
homological/cohomological conventions. Each item preserves its manifest
dependencies and literature-derived statement provenance, except that the two
generated-example dependency edges below were removed as required by schema.
Proof-bearing results use literature-derived statements with altered local
proofs; definitions and the sign remark have `proof: not-applicable`; examples
are generated examples with their required generation records; the two
counterexamples retain literature-derived statement and proof provenance.

Narrowed/repair decisions: `ex-the-long-exact-hom-sequence-of-a-cone-triangle`
now states its multiplication-by-$m$ cone calculation directly and no longer
depends on generated `ex-the-cone-triangle-of-multiplication-by-m`.
`cex-nonuniqueness-of-a-tr-three-completion` likewise carries its explicit
zero-map cone witness directly rather than depending on the generated split
example. These removals were required by `content-policy`'s rule that an
AI-generated statement cannot be a dependency target; neither removal changes
the stated calculations. No claims were dropped and no external fallback,
forward reference, judge stamp, or published status was introduced.

Proof-contract output: `research/frontier-32-batch-8.proof-contracts.json`
contains the 35 proof-bearing item contracts. Each maps its two stored proof
steps and records checked dispositions for empty, zero, one, degenerate,
endpoints, nonempty-choice, iff-forward, and iff-reverse axes. There are no
labelled `[F#]`, `[A#]`, or `[L#]` fact citations in these short proofs, so the
citation map is empty rather than inventing a source quote; dependencies are
kept in frontmatter and the mathematical uses are stated in the corresponding
proof steps.

Checks run after the canonical phase-numbering repair:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 53 manifest
  `items/ID.md` paths: 35 proof-bearing items checked, 0 failing.
- `node tools/validate-plan.mjs research/plan-spec.json`: completed with its
  repository-wide informational output and ended `OK` (acyclic order, no
  item-level cycles, forward references, B-page dependencies, or unresolved
  ids among pages with item lists).
- `node tools/content-policy.mjs research/frontier-32-batch-8.pages.json`:
  53 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-32-batch-8.proof-contracts.json --strict`:
  0 errors, 0 warnings, 35/35 checked.

Blockers: none. Next action: Step 5 authoring for this batch is complete; leave
publication, workflow transitions, and any later review to their owners.
