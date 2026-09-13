# Batch 8 scaffold notes — phase-2-next-21

Role: beta  
Label: batch-8  
Coverage: two differential-geometry A/B pairs, orders 493–496

## Controlling design and plan comparison

I read the complete DG-26 design at `research/plan-differential-geometry-track.md` lines 6654–6891 and the complete DG-27 design at lines 6892–7102. The dispatch's second locator for each pair, lines 6822 and 7040, is the B-page subsection within the same complete design, not a competing design. Thus the section beginning at line 6654 controls the Lie-subgroups pair and the section beginning at line 6892 controls the representation/PBW pair; only those complete sections contain the shared scope, conventions, warnings, proof routes, sources, A inventory, false statements, and B inventory.

The current `research/plan-spec.json` controls the following conflicts and refinements:

- DG-26 calls `covering-spaces-and-lifting` planned/unauthored and marks design items 43–46 blocked. The current plan declares it as a prerequisite, and it is now published with 32 items. The obsolete design block is removed.
- DG-27 calls `tensor-products-of-modules` planned/unauthored and marks design items 15–38 blocked. The current plan declares it as a prerequisite, and it is now published with 38 items. The obsolete design block is removed.
- The current plan expands the prose shorthand prerequisite lists: DG-26 explicitly includes the Whitney/tubular-neighborhood, boundary/orientation, geodesic, quotient-topology, and covering pages; DG-27 explicitly includes the tensor-product, module, free-module, ring, ideal/quotient-ring, forms, and Lie-group pages. These are compatible additions, and the plan's ordered `requires` arrays are preserved exactly.
- The design orders `def-homogeneous-space-of-a-lie-group` before `def-smooth-left-action-of-a-lie-group`, although the former consumes the latter. The manifest moves the action definition before the homogeneous-space definition.
- The design puts the associated-graded definition after the proposition that uses it. The manifest moves `def-associated-graded-algebra` before `prop-the-associated-graded-of-a-filtered-algebra-is-graded`.
- The design describes the finite-dimensional Frobenius/subgroup route as choice-free. The actual published supplier `thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds` explicitly depends on `def-countable-choice` and spends it on a countable flat-chart cover and countable unions. The landmark subgroup–subalgebra theorem therefore states and declares `AC_omega`; downstream items inherit that route.
- The batch-7 scaffold's `def-lie-algebra-homomorphism` is tied to `def-finite-dimensional-lie-algebra`, while DG-27 is intentionally arbitrary-dimensional. A local general definition is inserted before the first consumer instead of silently widening the batch-7 item.
- Published `def-symmetrization-and-alternation-operators` concerns finite-dimensional real covariant tensors and divides by `k!`; it cannot define symmetric and exterior powers over an arbitrary field. A characteristic-free quotient definition is inserted locally before induced-power representations.
- The PBW independence proof requires a basis of the symmetric algebra. `lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis` is inserted before the regular-representation argument so that this is neither implicit nor circular.
- The plan title retains `Pbw`; mathematical item titles and statements use the standard abbreviation `PBW`.

No selected pair changed, no cross-batch page addition was required, and no page split was required.

## Inventories and prerequisite placement

All 125 IDs were checked unused before construction.

- `lie-subgroups-actions-and-homogeneous-spaces`: 46 designed records plus 6 false-statement records = 52.
- `lie-subgroups-actions-and-homogeneous-spaces-examples`: 12 examples/counterexamples.
- `lie-algebra-representations-enveloping-algebras-and-pbw`: 40 designed records, 3 necessary local prerequisite records, and 6 false-statement records = 49.
- `lie-algebra-representations-enveloping-algebras-and-pbw-examples`: 12 examples/counterexamples.

Definitions and well-definedness lemmas precede their consumers. In particular, the quotient bracket is proved before `def-quotient-lie-algebra` and is recorded in both `deps` and `justified_by`; actions precede homogeneous spaces; symmetric/exterior quotient powers precede induced representations; the associated graded precedes its structural proposition; and the symmetric-monomial basis precedes PBW independence. No B-page item is used as a prerequisite.

The five intended landmarks are explicit: subgroup–subalgebra correspondence, Cartan's closed subgroup theorem, the closed-subgroup quotient theorem, the free-proper-action quotient theorem, and PBW.

## Proof-dependency audit

I read the statements and complete proofs of the load-bearing published suppliers and checked hypotheses, direction, sign conventions, well-definedness, and axiom strength rather than inferring adequacy from page membership.

For DG-26, the checked interfaces include the published Frobenius local-coordinate and maximal-leaf theorems, inverse/constant-rank/submersion theorems, quotient topology and quotient universal property, finite-dimensional complement/projection lemma, compactness and Hausdorff lemmas, covering/lifting theorems, and the batch-7 Lie-group scaffold. The actual subgroup construction is the maximal leaf of the left-translated involutive distribution. Cartan's theorem explicitly consumes batch 7's local BCH theorem, local exponential chart, and the local no-small-subgroups lemma. Automatic smoothness uses the closed graph, equal dimension via invariance of dimension, and the inverse function theorem; continuity alone is not promoted without that chain. The compact-action proof uses only compactness of a finite product and closed subsets of Hausdorff spaces. The local free-proper slice uses compact transporter control and a finite cover, not a global Riemannian metric or a countable-choice construction. Quotient charts use the published choice-free finite-dimensional projection lemma and do not assert a global section.

For DG-27, tensor-algebra, two-sided-ideal, quotient-algebra, module, and tensor-product interfaces were checked before defining `U(g)`. The universal property explicitly verifies that the tensor-algebra extension kills the generating ideal and that factorization is unique. The tensor-degree filtration precedes the associated graded. PBW spanning uses adjacent reordering, while independence is proved by the recursive ordered-insertion representation on the already-established commutative monomial basis; the Jacobi identity resolves the triple overlap. It does not consume either later published PBW item. The theorem is conditional on a supplied totally ordered basis, so it makes no assertion that every vector space has a basis and spends no choice. Symmetrization is restricted to characteristic zero, is stated as a vector-space isomorphism, and is explicitly not claimed to preserve multiplication for nonabelian Lie algebras.

No dependency is missing, circular, forward, or a B-page dependency in the final manifest. No owned proof or prerequisite path reaches `deferred-set-theory-beyond-choice`.

## Choice boundary

`AC_omega` occurs explicitly on `thm-lie-subgroup-lie-subalgebra-correspondence` because its actual published maximal-leaf supplier declares and uses `def-countable-choice`. This is the sole new choice expenditure in the batch; consequences depending on that theorem inherit it through their explicit chains.

The finite-dimensional complement, compact-action, local-slice, quotient, covering-group, representation, tensor-algebra, and PBW constructions add no choice axiom. PBW remains conditional on a supplied ordered basis. No incompatible-axiom branch is joined, and Foundations has no path from an owned item to `deferred-set-theory-beyond-choice`.

## Source harvest and fetch evidence

Two independent full treatments support each A page:

1. John M. Lee, *Introduction to Smooth Manifolds*, second edition, full 726-page PDF: <https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf>. I inspected the complete relevant proofs in Chapters 19–21, PDF pp. 504–507, 522–525, and 540–558.
2. Pavel Etingof, *MIT 18.745 Lie Groups and Lie Algebras I*, official full 142-page notes: <https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf>. I inspected §§3.2–3.4, 4.1–4.4, 9.1, 12.1–12.3, and 13.1–13.2, including the complete PBW proof.
3. Alexander Kirillov Jr., *An Introduction to Lie Groups and Lie Algebras*, author-hosted full 177-page book: <https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf>. I inspected Chapter 3 §3.4, Chapter 4 §§4.1–4.4, and Chapter 5 §§5.1–5.2. Kirillov states PBW but explicitly omits its proof, so it is used honestly as an independent statement/convention source; Etingof supplies the complete proof.

The coverage file has 39 harvested records: 34 included, 4 inline, and 1 deferred. Etingof's post-PBW invariant-theoretic refinements are deferred to `harish-chandra-isomorphism-casimir-and-central-characters`, where the necessary semisimple and central-character infrastructure belongs. Every harvested result has a disposition.

`source-fetch-check --stamp` verified all four source occurrences (three distinct URLs) from full PDF bodies. The final check reports 4/4 fetch-verified and 4/4 resolved. The URL sweep reports 3/3 distinct URLs live; `source-backing` reports all 28 authored source-derived records backed. There were no failed retrievals, retry sequences, source drops, or owner source escalations.

## Published defect/debt evidence

The following exact published issues are recorded for the canonical ledger. None is an actual prerequisite that blocks these new suppliers.

- Item `def-universal-enveloping-algebra-as-a-tensor-quotient`, publication state: published on later page `harish-chandra-isomorphism-casimir-and-central-characters` (order 510.001). Evidence: its frontmatter has `deps: []`, while its definition consumes tensor algebra, generated two-sided ideals, and quotient algebras. Planned supplier: batch-8 `def-universal-enveloping-algebra`, currently scaffolded and not published. Repair: after publication, replace or depend on that supplier; alternatively add the exact earlier tensor/ideal/quotient dependencies to the later item.
- Item `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, publication state: published on the same later page. Evidence: proof step 1.2 says termination plus one triple-overlap calculation gives a unique normal form, but it has no Diamond/Newman/confluence dependency and treats a linear rewrite to sums as ordinary term rewriting. Planned supplier: batch-8 `thm-poincare-birkhoff-witt`, currently scaffolded and not published, whose independence proof uses an explicit representation on the ordered commutative-monomial vector space and resolves the Jacobi overlap. Repair: consume the new theorem after publication or supply a fully justified linear rewriting/confluence theorem. This is downstream consumer debt, not a prerequisite defect.
- Item `def-symmetrization-and-alternation-operators`, publication state: published. Evidence: it defines averages of real-valued finite-dimensional covariant tensors using `1/k!`, so it neither covers arbitrary-field quotient powers nor survives positive characteristic. Planned supplier: local batch-8 `def-symmetric-and-exterior-powers-over-an-arbitrary-field`, currently scaffolded and not published. Repair: keep the published differential-geometric operator in its proper scope and direct abstract representation consumers to the new quotient definition.

The published maximal-leaf theorem is not mislabeled in its dependency metadata: it explicitly declares `def-countable-choice`. Its conflict is with the older DG-26 design's choice-free description, corrected above.

## Cross-batch dependencies

`research/phase-2-next-21-batch-8.cross-batch-dependencies.json` contains 2 page rows and 22 exact item rows. Both page rows point from the owned A pages to batch 7's `lie-groups-invariant-fields-and-the-exponential-map`. That supplier is a same-run scaffold and is **not** treated as published. Each item row records the checked statement/proof interface and direction. The load-bearing chain includes

`thm-cartans-closed-subgroup-theorem -> thm-baker-campbell-hausdorff ->` batch-7 Lie-group exponential/BCH infrastructure,

and the subgroup distribution chain includes batch 7's invariant fields, exponential naturality, and `Ad/ad` compatibility. DG-27's declared page edge was checked for convention compatibility, but the finite-dimensional batch-7 homomorphism and real tensor symmetrization definitions are not used as arbitrary-dimensional/arbitrary-field item suppliers; the two local definitions described above close those seams.

The canonical frontier dependency ledger was refreshed from this batch input and deduplicated successfully.

## Readiness

All 125 owned items have hash-current Step 1 `ready` records with exact examined dependency arrays and evidence. Records were initially written in manifest prerequisite order. Adding the explicit landmark flags and quotient `justified_by` metadata invalidated 51 transitive hashes; only those stale records were refreshed in manifest order, and the other 74 were preserved unchanged. Final owned reconciliation is 125 ready, 0 escalated, 0 open.

Readiness is construction evidence, not independent mathematical approval. The batch-7 suppliers remain same-run scaffolds, and owner/operator reconciliation plus Step 3 review are still required.

## Gate results

Checks were rerun after final metadata and readiness reconciliation. Other batches remain live, so the whole-run item counts are a snapshot.

| Check | Exit | Actual result |
|---|---:|---|
| batch `coverage-checklist.mjs ...batch-8.coverage.json --require-destination` | 0 | 2 A pages, 39 harvested rows, 0 errors, 0 warnings. |
| whole-run `coverage-checklist.mjs research/phase-2-next-21-batch-*.coverage.json --require-destination` | 1 | 21 A pages, 713 harvested rows; 5 errors, all in batch 2's unresolved/owner-escalated Digizeitschriften source resolution. No error names batch 8. |
| batch `source-fetch-check.mjs` | 0 | 4/4 source occurrences fetch-verified and 4/4 resolved; 0 documented drops. |
| batch `url-sweep.mjs --recover --fail-on-dead` | 0 | 3/3 distinct URLs live, 0 failed, 0 suspect. |
| batch `source-backing.mjs --require-verified` | 0 | 28 authored results; every one backed by an openable source or documented alternative. |
| whole-run `manifest-deps.mjs research/phase-2-next-21-batch-*.pages.json` | 0 | 745 items, 0 normalized, 0 errors. |
| whole-run `content-policy.mjs --manifest-only research/phase-2-next-21-batch-*.pages.json` | 0 | 745 scoped items, 0 errors, 0 warnings. |
| `validate-plan.mjs research/plan-spec.json` | 0 | 1,624 pages; declared page order acyclic and consistent; no item cycle, forward reference, B-page dependency, or unresolved ID among 1,056 pages with item lists. 563 planned pages still lack item lists. |
| `manifest-integrity.mjs --run phase-2-next-21` | 0 | 42 pages owed, 42 present in manifests; no scope drift. |
| `extcheck.mjs --quiet` | 0 | 55 pre-existing published Recorded-material warnings; all are permitted cited/no-proof remarks with marked consequences. No warning names an owned item. |
| owned readiness reconciliation | 0 | 125 items: 125 ready and hash-current, 0 escalated, 0 open. |
| `frontier-dependency-ledger.mjs refresh --run phase-2-next-21` | 0 | Canonical frontier ledger refreshed and deduplicated from the batch-8 input. |

The only unresolved whole-run gate finding is batch 2's source-resolution escalation; it is outside this ownership boundary. The autopilot status remains at Step 1 scaffold pending other batch completion and therefore does not constitute an engine close for this batch.
