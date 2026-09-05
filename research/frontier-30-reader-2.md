# frontier-30 reader-2 report

Batch: `2`.
Run: `frontier-30`.
Assigned A page: `zariski-topology-on-prime-spectra`.
Assigned B page: `zariski-topology-on-prime-spectra-examples`.

## Scope opened

Opened the task and batch artifacts:

- `research/frontier-30-dispatch/reader-reader-2.prompt.md`
- `research/frontier-30-reader.task.md`
- `research/frontier-30-beta-2.task.md`
- `research/frontier-30-batch-2.pages.json`
- `research/frontier-30-batch-2.coverage.json`
- `research/frontier-30-batch-2.proof-contracts.json`
- `research/frontier-30-batch-2.notes.md`

Opened the controlling plan/design entries:

- `research/plan-spec.json` entries for `zariski-topology-on-prime-spectra` and `zariski-topology-on-prime-spectra-examples`
- `research/plan-commutative-algebra-track.md` at the earlier CA-15 block near line 1250 and the later CA-15 additions block at line 3670

Opened the assigned page files:

- `library/commutative-algebra/zariski-topology-on-prime-spectra.md`
- `library/commutative-algebra/zariski-topology-on-prime-spectra-examples.md`

Opened all assigned item files:

- A-page items: `def-irreducible-topological-space-and-subset`, `def-noetherian-topological-space`, `def-specialisation-and-generic-point`, `lem-zariski-closed-set-axioms`, `lem-every-zariski-closed-set-has-a-radical-defining-ideal`, `lem-distinguished-opens-cover-every-open`, `lem-distinguished-open-refinement-at-a-point`, `cor-spectrum-is-a-contravariant-topological-functor`, `lem-quotient-spectrum-map-is-closed`, `lem-localisation-spectrum-map-homeomorphism-onto-image`, `cor-principal-localisation-spectrum-is-distinguished-open`, `lem-spectrum-compactness-open-cover-to-unit-ideal`, `lem-spectrum-compactness-unit-expression-finite-subcover`, `thm-prime-spectrum-is-compact`, `cor-every-distinguished-open-is-compact`, `lem-closure-of-a-point-is-its-vanishing-set`, `cor-specialisation-order-is-prime-inclusion`, `cor-spectrum-is-t-zero`, `cor-closed-points-of-spectrum-are-maximal-ideals`, `thm-irreducible-closed-subsets-and-prime-ideals`, `thm-irreducible-components-and-minimal-primes`, `thm-noetherian-ring-has-noetherian-spectrum`, `cor-noetherian-spectrum-has-finitely-many-irreducible-components`, `lem-clopen-subset-gives-idempotent-decomposition`, `lem-idempotent-gives-clopen-spectrum-partition`, `cor-spectrum-connected-iff-no-nontrivial-idempotents`, `lem-support-is-specialisation-closed`, `cor-closed-points-dense-in-affine-spectra`
- B-page items: `ex-distinguished-open-finite-subcover-from-unit-expression`, `ex-zariski-spectrum-of-the-integers`, `ex-zariski-spectrum-not-hausdorff`, `ex-specialisation-poset-of-a-small-spectrum`, `ex-idempotent-clopen-product-ring`, `ex-nonclosed-support-without-finiteness`

Opened the published dependency files needed to verify the current proofs:

- Topology foundations: `def-topological-space`, `def-subspace-topology-top`, `def-interior-closure-boundary-top`, `def-connected-space`, `def-compact-space`, `thm-connectedness-characterisations`
- Spectrum and ideal foundations: `def-prime-and-maximal-ideals`, `def-prime-spectrum-and-vanishing-sets`, `def-principal-distinguished-subset-of-spectrum`, `lem-vanishing-set-identities`, `lem-vanishing-sets-detect-radicals`, `lem-distinguished-subset-identities`, `thm-prime-spectrum-map-by-contraction`, `thm-prime-spectrum-of-a-quotient-bijection`, `thm-prime-spectrum-of-a-localisation-bijection`, `thm-proper-ideal-contained-in-maximal-ideal`, `thm-radical-as-intersection-of-primes`, `cor-nilradical-as-intersection-of-primes`
- Noetherianity, support, and affine density dependencies: `thm-noetherian-ring-ideal-characterisations`, `thm-noetherian-ring-has-finitely-many-minimal-primes`, `lem-minimal-prime-over-an-ideal-exists`, `thm-chinese-remainder-theorem-for-comaximal-ideals`, `def-support-of-a-module`, `lem-support-membership-by-annihilator`, `lem-support-of-a-cyclic-module-is-its-vanishing-set`, `thm-support-of-arbitrary-direct-sums`, `cor-affine-closed-points-detect-radicals`

## Repairs made

1. `items/lem-distinguished-open-refinement-at-a-point.md`, `items/lem-spectrum-compactness-unit-expression-finite-subcover.md`, `items/cor-every-distinguished-open-is-compact.md`, `items/cor-specialisation-order-is-prime-inclusion.md`, `items/cor-spectrum-is-t-zero.md`, `items/thm-noetherian-ring-has-noetherian-spectrum.md`, `items/cor-noetherian-spectrum-has-finitely-many-irreducible-components.md`, `items/lem-idempotent-gives-clopen-spectrum-partition.md`, `items/lem-support-is-specialisation-closed.md`, `items/ex-distinguished-open-finite-subcover-from-unit-expression.md`, `items/ex-zariski-spectrum-not-hausdorff.md`, `items/ex-idempotent-clopen-product-ring.md`, and `items/thm-prime-spectrum-is-compact.md`
   Repaired malformed LaTeX and corrupted proof text on current draft bytes. The defects were textual but material to readability and rendering: missing backslashes, broken `\operatorname`/`\mathfrak` expressions, mangled `\subseteq` and `\sqcup`, and one corrupted `1=...` unit-ideal identity.

2. `items/lem-clopen-subset-gives-idempotent-decomposition.md`
   Repaired a genuine proof gap. The prior step from `V(I+J)=\varnothing` to `I+J=R` was unsupported on current bytes. I added the needed dependence on `thm-proper-ideal-contained-in-maximal-ideal`, split the proof into the precheck-canonical step order, and made the contradiction with maximal ideals explicit.

3. `items/cor-spectrum-connected-iff-no-nontrivial-idempotents.md`
   Repaired the forward direction. The prior argument concluded `e=0` or `e=1` from emptiness of a distinguished open without justifying that passage. I added the needed dependence on `cor-nilradical-as-intersection-of-primes` and made the nilpotent-idempotent argument explicit.

4. `research/frontier-30-batch-2.pages.json`
   Updated the manifest dependency metadata so it matches the repaired proofs for `lem-clopen-subset-gives-idempotent-decomposition` and `cor-spectrum-connected-iff-no-nontrivial-idempotents`.

5. `research/frontier-30-batch-2.proof-contracts.json`
   Repaired the malformed derivation text for the touched items and updated the two material contract rows so the stored citations and derivations match the repaired proofs.

No stale `verification.judge` record was present on any edited in-flight item.

## Remaining uneditable defects

None on the current bytes I opened.

## Page verdicts

- `zariski-topology-on-prime-spectra`: repaired and now coherent on current bytes. The proof chain through compactness, closure/specialisation, irreducibility, Noetherianity, idempotents, and support checks against the opened dependency closure.
- `zariski-topology-on-prime-spectra-examples`: pass on current bytes after the example-item text repairs; no B-page prose edit was needed.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-distinguished-open-refinement-at-a-point.md items/lem-spectrum-compactness-unit-expression-finite-subcover.md items/cor-every-distinguished-open-is-compact.md items/cor-specialisation-order-is-prime-inclusion.md items/cor-spectrum-is-t-zero.md items/thm-noetherian-ring-has-noetherian-spectrum.md items/cor-noetherian-spectrum-has-finitely-many-irreducible-components.md items/lem-idempotent-gives-clopen-spectrum-partition.md items/lem-support-is-specialisation-closed.md items/ex-distinguished-open-finite-subcover-from-unit-expression.md items/ex-zariski-spectrum-not-hausdorff.md items/ex-idempotent-clopen-product-ring.md items/thm-prime-spectrum-is-compact.md items/lem-clopen-subset-gives-idempotent-decomposition.md items/cor-spectrum-connected-iff-no-nontrivial-idempotents.md`
  Result: only `items/thm-noetherian-ring-has-noetherian-spectrum.md` needed reflow; the other 14 touched items were already in canonical reflow form after the edits.

- `node tools/tsx-run.mjs tools/precheck.mts` on the 15 changed item files above
  Result: `15 checked, 0 failing`.

- `node tools/tsx-run.mjs tools/precheck.mts` on all 31 proof-bearing assigned batch items
  Result: `31 checked, 0 failing`.

- `node tools/rendercheck.mjs` on the 15 changed item files
  Result: `OK — 15 file(s)`.

- `node tools/proof-contract.mjs research/frontier-30-batch-2.proof-contracts.json --strict`
  Result: `0 error(s), 1 warning(s), 31/31 item(s) checked`.
  The remaining warning is the nonfatal `shotgun-bracket` style advisory on `lem-clopen-subset-gives-idempotent-decomposition`; the repaired contract is otherwise checker-clean.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-2.coverage.json`
  Result: `1 page(s), 49 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-2.coverage.json`
  Result: `8/8 source(s) fetch-verified`.

- `git diff --check -- items/lem-distinguished-open-refinement-at-a-point.md items/lem-spectrum-compactness-unit-expression-finite-subcover.md items/cor-every-distinguished-open-is-compact.md items/cor-specialisation-order-is-prime-inclusion.md items/cor-spectrum-is-t-zero.md items/thm-noetherian-ring-has-noetherian-spectrum.md items/cor-noetherian-spectrum-has-finitely-many-irreducible-components.md items/lem-idempotent-gives-clopen-spectrum-partition.md items/lem-support-is-specialisation-closed.md items/ex-distinguished-open-finite-subcover-from-unit-expression.md items/ex-zariski-spectrum-not-hausdorff.md items/ex-idempotent-clopen-product-ring.md items/thm-prime-spectrum-is-compact.md items/lem-clopen-subset-gives-idempotent-decomposition.md items/cor-spectrum-connected-iff-no-nontrivial-idempotents.md research/frontier-30-batch-2.pages.json research/frontier-30-batch-2.proof-contracts.json`
  Result: clean.

I also confirmed that `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-2.pages.json` is not a meaningful post-author reader check here: it reports `batch-item-already-exists` for every scoped item precisely because the authored batch files now exist on disk. I did not treat that output as a content defect or blocker.

## Blockers

- No workspace blocker.
- No remaining uneditable mathematical defect in batch-2 scope.
