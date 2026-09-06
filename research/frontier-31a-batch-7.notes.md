# frontier-31a — beta batch 7 notes

## Scope and design reading

This batch owns only the manifest and source-harvest for `tensor-and-fusion-categories`
(A, order `365.035`) and `tensor-and-fusion-categories-examples` (B, order
`365.036`).  No plan, workflow, published page, or other batch artifact was
changed.

I read both requested locations in `research/plan-category-theory-track.md`.
Line 2992 begins MA-18's A-page specification; line 3169 is the continuation
of that same MA-18 specification, beginning the B-page list.  They are not
competing amendments: the latter controls the B details because it is the
continuation, while the whole MA-18 section controls the pair.

The design names several mathematical prerequisites, whereas the spec gives
the immediate prerequisite `enriched-categories-examples`.  The recorded
step-0 drift audit says that this immediate prerequisite's transitive closure
already reaches the design requirements.  Consequently this scaffold preserves
the spec's `requires` value and adds no plan-level prerequisite; it records no
unadjudicated design/spec conflict.

The A page has 29 items, so it is below the 60-item mandatory split threshold.
One item beyond the design's list is necessary rather than padding:
`def-semisimple-object-and-semisimple-abelian-category`.  The prior library
has a module-specific semisimplicity definition but not the abelian-category
definition needed by the fusion definition and the projective-unit corollary.

## Sources read, range, and source correction

| Key | complete document and exact range read | use |
| --- | --- | --- |
| E | Etingof, Gelaki, Nikshych, Ostrik, [*Tensor Categories*](https://math.mit.edu/~etingof/egnobookfinal.pdf), 362-page author-final PDF: printed pp. 1–2 (§1.2, Defs. 1.2.1–1.2.3), 9–10 (§1.8, Defs. 1.8.1–1.8.6), 65–70 (§§4.1–4.3), 71–72 (opening §4.5 through Rem. 4.5.3), and 76 (§4.8, Prop. 4.8.1, Prop. 4.8.4, Question 4.8.3). | Primary monograph; definitions, exactness, unit, Grothendieck ring, duals, examples. |
| M | Catherine Meusburger, [*Tensor Categories*](https://www.math.fau.de/wp-content/uploads/2024/01/Tensor-Categories.pdf), complete 215-page lecture-note PDF: pp. 141–142 (§8.1, Defs. 8.1.3–8.1.8) and 145–146 (opening §8.2 through Def. 8.2.3, before Ex. 8.2.4). | Independent full lecture-note treatment; semisimplicity, finiteness, fusion convention, and exactness cross-check. |

Both documents were opened as complete full-text PDFs on 2026-09-05.  The
coverage artifact enumerates every relevant source heading/result in those
ranges and gives it an item-linked disposition (or a result-specific reason).

Source correction retained for the author: the design's shorthand associated
the semisimple-unit result with E Thm. 4.3.1 and Cor. 4.3.2.  In the source
actually read, those establish semisimplicity of `End(1)` and decomposition of
the unit.  The requested conclusion is E Thm. 4.3.8(ii); E Thm. 4.3.8(i) is
the simple-unit tensor case.  The scaffold therefore gives the two unit
claims source locator `E §4.3, Thm. 4.3.8`, using Thm. 4.3.1 and Cor. 4.3.2
only inside the proof route.

## Conventions and boundary

* The field is denoted `k`; all categories and functors use the source's
  `k`-linear convention.  A tensor category is a locally finite, rigid,
  `k`-linear abelian monoidal category with bilinear tensor product and
  `End(1) ≅ k`; a multitensor category drops the scalar-unit condition.
* Fusion/multifusion adds finite semisimplicity; fusion has simple unit.
  “Semisimple” is defined at the abelian-category level before it is used.
* Left/right dual conventions are inherited from the published rigidity page.
  A tensor functor here means the exact, `k`-linear, faithful, strong monoidal
  convention of E Def. 4.2.5; the terminology remark records the variation.
* No tensor product of modules is constructed locally.  B only verifies
  finite-dimensional vector spaces using published monoidal and rigidity
  results.  Frobenius–Perron dimension, reconstruction/fiber functors,
  trace theory, and a coherent pivotal/spherical development remain out of
  scope except where a boundary remark identifies the limit.

## Item ledger

Source locators below refer to the table above.  “Published” means a
dependency already in the approved prerequisite closure; every listed `deps`
array is exactly the manifest array.  Strategies for proof-bearing items are
also copied into the manifest.

| Item | exact planned claim / role | source locator | deps and proof or decision |
| --- | --- | --- | --- |
| `def-k-linear-category-and-k-linear-functor` | Define a `k`-linear category and a `k`-linear functor. | E §1.2 Defs. 1.2.2–1.2.3 | `[def-category, def-vector-space]`; foundational convention. |
| `def-locally-finite-k-linear-abelian-category` | Define locally finite `k`-linear abelian category. | E §1.8 Def. 1.8.1; M §8.1 Def. 8.1.7 | `[def-k-linear-category-and-k-linear-functor, def-abelian-category, def-object-of-finite-length, def-small-locally-small-and-large-category]`; definition. |
| `def-finite-k-linear-abelian-category` | Define finite `k`-linear abelian category by intrinsic finiteness conditions. | E §1.8 Defs. 1.8.5–1.8.6; M §8.1 Def. 8.1.8 | `[def-locally-finite-k-linear-abelian-category, def-simple-object, def-projective-object]`; definition. |
| `def-semisimple-object-and-semisimple-abelian-category` | Define semisimple object and semisimple abelian category. | M §8.1 Def. 8.1.4 | `[def-abelian-category, def-simple-object]`; necessary new general definition. |
| `def-tensor-and-multitensor-category` | Define tensor and multitensor category under the E convention. | E §4.1 Def. 4.1.1 | `[def-locally-finite-k-linear-abelian-category, def-monoidal-category, def-rigid-object-and-rigid-monoidal-category]`; definition. |
| `def-fusion-and-multifusion-category` | Define fusion/multifusion as finite semisimple tensor/multitensor categories. | E §4.1 Def. 4.1.1; M §8.2 Def. 8.2.1 | `[def-finite-k-linear-abelian-category, def-semisimple-object-and-semisimple-abelian-category, def-tensor-and-multitensor-category]`; definition. |
| `rem-tensor-category-terminology-is-source-dependent` | Record that this page follows the EGNO scalar-unit convention. | E §4.1 Def. 4.1.1 | `[def-tensor-and-multitensor-category]`; convention warning. |
| `thm-the-tensor-product-in-a-multitensor-category-is-biexact` | Tensor product is exact in each variable. | E §4.2 Prop. 4.2.1; M §8.2 Rem. 8.2.2 | `[def-tensor-and-multitensor-category, thm-duality-yields-adjunctions-of-tensoring-functors, thm-right-adjoints-preserve-limits, cor-left-adjoints-preserve-colimits, thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels]`; use dual adjoints and the abelian exactness criterion. |
| `thm-dualization-in-a-multitensor-category-is-exact` | Dualization is exact. | E §4.2 Prop. 4.2.9 | `[def-tensor-and-multitensor-category, thm-left-duality-is-a-contravariant-antimonoidal-functor, thm-an-equivalence-between-abelian-categories-is-exact]`; transport short exact sequences across the contravariant equivalence. |
| `thm-images-commute-with-tensor-products-in-a-multitensor-category` | Images commute with tensor products. | E §4.2 Prop. 4.2.8 | `[thm-the-tensor-product-in-a-multitensor-category-is-biexact, def-image-and-coimage-in-a-category-with-kernels-and-cokernels]`; tensor epi/mono image factorizations. |
| `thm-tensoring-with-a-dualizable-object-preserves-projectives` | Tensoring with a dualizable object preserves projectives. | E §4.2 Prop. 4.2.12 | `[thm-the-tensor-product-in-a-multitensor-category-is-biexact, def-projective-object, thm-duality-yields-adjunctions-of-tensoring-functors]`; use Hom–tensor adjunction and exactness. |
| `cor-the-unit-is-projective-exactly-when-the-tensor-category-is-semisimple` | Unit is projective iff the category is semisimple. | E §4.2 Cor. 4.2.13 | `[thm-tensoring-with-a-dualizable-object-preserves-projectives, def-semisimple-object-and-semisimple-abelian-category]`; every object is a tensor of the unit. |
| `thm-the-unit-object-of-a-multitensor-category-is-semisimple` | The multitensor unit is semisimple. | E §4.3 Thm. 4.3.8(ii), using Thm. 4.3.1 and Cor. 4.3.2 | `[def-tensor-and-multitensor-category, def-semisimple-object-and-semisimple-abelian-category, def-simple-object, def-object-of-finite-length, thm-the-tensor-product-in-a-multitensor-category-is-biexact, thm-dualization-in-a-multitensor-category-is-exact]`; follow the unit-endomorphism/component argument. |
| `thm-the-unit-object-of-a-tensor-category-is-simple` | The tensor-category unit is simple. | E §4.3 Thm. 4.3.8(i) | `[thm-the-unit-object-of-a-multitensor-category-is-semisimple, def-tensor-and-multitensor-category]`; scalar endomorphism condition leaves one simple summand. |
| `cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects` | For nonzero objects, evaluation is epic and coevaluation monic. | E §4.3 Cor. 4.3.9 with the official Chapter 4 correction | `[thm-the-unit-object-of-a-tensor-category-is-simple]`; use both zig-zags and the simple unit. |
| `def-tensor-functor-between-tensor-categories` | Define the exact `k`-linear faithful strong monoidal tensor functor. | E §4.2 Def. 4.2.5 | `[def-tensor-and-multitensor-category, def-lax-strong-and-strict-monoidal-functor]`; definition. |
| `thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful` | Exact `k`-linear strong monoidal functor out of a tensor category is faithful. | E §4.3 Rem. 4.3.10 | `[thm-the-unit-object-of-a-tensor-category-is-simple, cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects, def-tensor-functor-between-tensor-categories]`; show no nonzero object/morphism is killed. |
| `def-grothendieck-ring-of-a-tensor-category` | Define the Grothendieck ring. | E §4.5 Def. 4.5.2 | `[def-tensor-and-multitensor-category, def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]`; definition. |
| `thm-the-grothendieck-ring-multiplication-is-well-defined` | Tensor product descends to a unital associative product on the Grothendieck group. | E §4.5 opening and Lem. 4.5.1 | `[thm-the-tensor-product-in-a-multitensor-category-is-biexact, def-grothendieck-ring-of-a-tensor-category]`; exactness preserves relations; coherence gives ring laws. |
| `def-fusion-rules` | Define fusion-rule structure constants relative to simple classes. | E §4.5 Rem. 4.5.3 | `[def-fusion-and-multifusion-category, def-grothendieck-ring-of-a-tensor-category, thm-jordan-holder-theorem-in-an-abelian-category]`; definition. |
| `thm-duality-induces-an-anti-involution-on-the-grothendieck-ring` | Duality gives `[X] ↦ [X^∨]`, an anti-involution. | E §4.5 opening, with §4.2 Prop. 4.2.9 | `[thm-dualization-in-a-multitensor-category-is-exact, thm-left-duality-is-a-contravariant-antimonoidal-functor, def-grothendieck-ring-of-a-tensor-category]`; exactness descends and antimonoidality reverses products. |
| `thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category` | Left and right dual objects are isomorphic in the semisimple multitensor setting. | E §4.8 Prop. 4.8.1 | `[def-fusion-and-multifusion-category, def-left-dual-and-right-dual-object]`; reduce to simple objects and compare nonzero unit-Hom characterizations. |
| `rem-objectwise-double-dual-isomorphisms-do-not-supply-a-pivotal-structure` | Objectwise `X ≅ X^{∨∨}` is not pivotal data. | E §4.8 Rem. 4.8.2 and Question 4.8.3 | `[thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category, def-pivotal-structure]`; distinguish existence from monoidal naturality. |
| `rem-the-boundary-of-the-fusion-category-development` | State the boundary before trace/pivotal/spherical theory. | E §4.8 Prop. 4.8.4 | `[def-fusion-and-multifusion-category]`; scope boundary, not a trace theorem. |
| `fs-every-finite-k-linear-abelian-category-is-semisimple` | Refute “finite implies semisimple.” | E §1.8 and §4.1–4.3 | `[def-finite-k-linear-abelian-category, def-semisimple-object-and-semisimple-abelian-category]`; definitions separate the conditions. |
| `fs-every-rigid-k-linear-abelian-monoidal-category-is-a-tensor-category` | Refute that rigidity and abelianness alone imply tensor-category status. | E §4.1 Def. 4.1.1 | `[def-tensor-and-multitensor-category, def-rigid-object-and-rigid-monoidal-category]`; missing local-finiteness, bilinearity, scalar-unit conditions. |
| `fs-a-tensor-functor-is-just-a-strong-monoidal-functor` | Refute the equivalence of this page's tensor functor with any strong monoidal functor. | E §4.2 Def. 4.2.5 and Rem. 4.2.6 | `[def-tensor-functor-between-tensor-categories, def-lax-strong-and-strict-monoidal-functor]`; compare added exactness, `k`-linearity, faithfulness. |
| `fs-the-grothendieck-ring-of-a-tensor-category-is-always-commutative` | Refute automatic commutativity. | E §4.5 opening and Rem. 4.5.3 | `[thm-duality-induces-an-anti-involution-on-the-grothendieck-ring]`; duality reverses order; a braiding would be additional. |
| `fs-objectwise-isomorphisms-x-isomorphic-to-x-double-dual-supply-a-pivotal-structure` | Refute that objectwise double-dual isomorphisms suffice for pivotality. | E §4.8 Rem. 4.8.2 and Question 4.8.3 | `[thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category, rem-objectwise-double-dual-isomorphisms-do-not-supply-a-pivotal-structure]`; naturality and monoidality are extra coherence. |
| `ex-finite-dimensional-vector-spaces-form-a-fusion-category` | Verify `Vect_fd` is fusion without rebuilding tensor products. | E §4.1 Ex. 4.1.2 | `[def-fusion-and-multifusion-category, thm-modules-over-a-commutative-ring-form-a-monoidal-category, thm-finite-dimensional-vector-spaces-are-rigid]`; published monoidal/rigidity facts plus one simple class and splitting. |
| `ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces` | Identify `Gr(Vect_fd)` with `ℤ`. | E §4.5 Def. 4.5.2; E §4.1 Ex. 4.1.2 | `[ex-finite-dimensional-vector-spaces-form-a-fusion-category, def-grothendieck-ring-of-a-tensor-category]`; `[k]` is the sole simple class. |
| `ex-a-matrix-multifusion-category-with-nonsimple-unit` | Give `Mat_n(Vect_fd)` and its decomposable diagonal unit for `n>1`. | E §4.1 Ex. 4.1.3 | `[def-fusion-and-multifusion-category, ex-finite-dimensional-vector-spaces-form-a-fusion-category]`; compute the diagonal unit. |
| `ex-fusion-rules-for-a-supplied-finite-simple-family` | Read the unique fusion coefficient for the supplied `Vect_fd` simple family. | E §4.5 Rem. 4.5.3 | `[ex-finite-dimensional-vector-spaces-form-a-fusion-category, def-fusion-rules]`; tensor the simple unit with itself. |

## Deliberate B-page omissions

* The good-characteristic and dividing-characteristic finite-group representation
  examples are not scaffolded.  The closure audit finds their necessary
  representation/Maschke pages outside the declared `enriched-categories-examples`
  closure.  The design says B contingencies must never become dependencies, so
  the missing support cannot be silently supplied here.
* The associator counterexample is not scaffolded.  E §4.2 Ex. 4.2.7 confirms
  the phenomenon, but the design requires a concrete, sourced 3-cocycle twist;
  none lies in the permitted closure.  The coverage record preserves the result
  with that specific out-of-scope reason instead of deleting it.

## Known limits and validation checkpoint

* The planned source route is dependency-closed against the existing item set:
  33 proposed items, no missing dependency ID, and every item has an explicit
  `deps` array.  A has 29 items and B has 4.
* The not-yet-authored theorem proofs must use the stated strategies; in
  particular the semisimple-unit proof must cite E Thm. 4.3.8 rather than
  misattribute its conclusion to E Thm. 4.3.1.
* Validation results are appended below after the manifest, coverage, policy,
  source-fetch, URL-liveness, and plan validators are run.  No unresolved
  mathematical prerequisite is being deferred; the only omissions are the
  deliberately fenced B contingencies above.

Next action: run the task validators and append their exact results without
modifying any workflow or plan artifact.

### Validator results (2026-09-05)

| command | result | interpretation |
| --- | --- | --- |
| `node tools/manifest-deps.mjs research/frontier-31a-batch-7.pages.json` | `33 item(s), 0 normalized, 0 error(s)` | Pass. |
| `node tools/coverage-checklist.mjs --require-destination research/frontier-31a-batch-7.coverage.json` | `1 page(s), 50 harvested result(s), 0 error(s), 0 warning(s)` | Pass. |
| `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-7.coverage.json` | `2/2 source(s) fetch-verified` | Pass. |
| `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-7.pages.json` | `33 scoped item(s), 0 error(s), 0 warning(s)` | Pass. |
| `node tools/validate-plan.mjs research/plan-spec.json` | Exit success: declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved IDs among the itemized planned pages. | Pass; read-only check of the current plan. |
| `git diff --check -- research/frontier-31a-batch-7.pages.json research/frontier-31a-batch-7.coverage.json research/frontier-31a-batch-7.notes.md` | no output, exit success | Pass. |

The required broad manifest-only policy check was also run against all
`research/frontier-31a-batch-*.pages.json` artifacts.  It reports 22 errors,
all in other batches (duplicate and forward group-cohomology items); the
batch-7-only invocation above is clean.  These unrelated errors were neither
edited nor treated as batch-7 failures.

`node tools/url-sweep.mjs --coverage research/frontier-31a-batch-7.coverage.json
--recover --fail-on-dead` was run with a five-second timeout and its report in a
temporary `/tmp` directory.  It exited 1 with `0/2 live`: its `curl` worker
could not resolve `math.mit.edu` or `www.math.fau.de`, and consequently could
not query archives.  This is a local DNS limitation, not evidence that the
PDF records were absent: the same original HTTP(S) documents were successfully
opened as complete PDFs in the document browser before harvesting, and the
source-fetch validator passes.  No replacement URL was recorded because an
unread alternate would violate the source discipline.  A network-capable
rerun of this one liveness check remains the sole operational follow-up.

## Step-3 fix pass

### Findings and disposition

| finding id | disposition | evidence | changed scaffold record |
| --- | --- | --- | --- |
| None — the batch-7 section of `frontier-31a-alpha-g-step3-scaffold-review.md` publishes verdict `sufficient` and no itemized finding. | No repair or pushback is applicable. | The review says explicitly that there are no missing results, source gaps, backward prerequisites, or pair-scope defects requiring a scaffold repair; it confirms the 29-item A page, four-example B page, closure through `enriched-categories-examples`, and the corrected use of EGNO Thm. 4.3.8. | None. `frontier-31a-batch-7.pages.json` and `frontier-31a-batch-7.coverage.json` remain unchanged. |

### Source re-verification

The original recorded full-text URLs were fetched in the document browser on
2026-09-05 and the harvested passages were re-read: EGNO is a 362-page PDF
covering its stated §§1.2, 1.8, 4.1–4.5, and 4.8; Meusburger is a 215-page PDF
covering the stated §8.1 and opening §8.2.  In particular, EGNO Def. 4.1.1,
Prop. 4.2.1, Props. 4.2.8–4.2.9, Prop. 4.2.12, Cor. 4.2.13, Thm. 4.3.8,
Cor. 4.3.9 with its official Chapter 4 correction, Rem. 4.3.10, Def. 4.5.2,
Lem. 4.5.1, Rem. 4.5.3, and Prop. 4.8.1 agree with their current item
dispositions.  Meusburger Defs. 8.1.2–8.1.8 and
Def. 8.2.1 with Rem. 8.2.2 agree with the convention and finiteness rows.

`node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-7.coverage.json --stamp --force --timeout-sec 45` could not resolve either
host (`EAI_AGAIN`).  This is a local command-line DNS failure, not a failed
document fetch: the same original URLs above served complete PDFs in the
document browser, so no alternate URL, archive, source substitution, or
`original_url` provenance record is warranted.  The ordinary source-fetch
gate continues to confirm the existing two fetch-verification records.

### Required validation (2026-09-05)

| command | result |
| --- | --- |
| `node tools/manifest-deps.mjs research/frontier-31a-batch-7.pages.json` | `33 item(s), 0 normalized, 0 error(s)` |
| `node tools/coverage-checklist.mjs --require-destination research/frontier-31a-batch-7.coverage.json` | `1 page(s), 50 harvested result(s), 0 error(s), 0 warning(s)` |
| `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-7.coverage.json` | `2/2 source(s) fetch-verified` |
| `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json` | `902 scoped item(s), 0 error(s), 0 warning(s)` |
| `node tools/validate-plan.mjs research/plan-spec.json` | Exit success: declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved IDs among the 746 itemized planned pages. |

## Step-5 authoring

Authored all 33 manifest IDs as draft items and wrote both draft pages:
`library/category-theory/tensor-and-fusion-categories.md` and
`library/category-theory/tensor-and-fusion-categories-examples.md`. The source
provenance is the two full-text treatments recorded above: EGNO supplies the
definitions and the exactness, unit, Grothendieck-ring, and duality claims;
Meusburger independently supports the finite, semisimple, and fusion
conventions. Every manifest dependency was retained exactly; no forward or
external dependency was added. The completed proof contracts cover the 21
proof-bearing IDs and map their cited item facts, numbered proof uses, and all
standard boundary dispositions.

One factual narrowing was necessary: the manifest title
`cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects` reverses
EGNO Corollary 4.3.9 under the page's fixed left-dual convention. The authored
statement records the source-correct claim: for nonzero $X$, evaluation
$X^\vee\otimes X\to\mathbf1$ is epic and coevaluation
$\mathbf1\to X\otimes X^\vee$ is monic. The id and manifest dependencies are
unchanged. No claims were dropped; the deliberately fenced representation and
3-cocycle examples remain absent as decided in the source ledger. No blockers
remain.

| command | result |
| --- | --- |
| `node tools/tsx-run.mjs tools/precheck.mts` with all 33 explicit manifest item paths | `21 checked, 0 failing — all clean` (definitions and remarks have no proof phase). |
| `node tools/validate-plan.mjs research/plan-spec.json` | Pass: declared order is acyclic and item dependencies have no cycles, forward references, B-page dependencies, or unresolved IDs among the 800 itemized planned pages. |
| `node tools/content-policy.mjs research/frontier-31a-batch-7.pages.json` | `33 scoped item(s), 0 error(s), 0 warning(s)`. |
| `node tools/proof-contract.mjs research/frontier-31a-batch-7.proof-contracts.json --strict` | `0 error(s), 0 warning(s), 21/21 item(s) checked`. |
| `git diff --check -- items library/category-theory research/frontier-31a-batch-7.proof-contracts.json research/frontier-31a-batch-7.notes.md` | Pass: no output. |
