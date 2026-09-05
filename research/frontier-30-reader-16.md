# frontier-30 reader-16 report

Batch: `16`.
Run: `frontier-30`.
Assigned A page: `harish-chandra-isomorphism-casimir-and-central-characters`.
Assigned B page: `harish-chandra-isomorphism-casimir-and-central-characters-examples`.

## Scope opened

Opened the task and batch artifacts:

- `research/frontier-30-reader.task.md`
- `research/frontier-30-beta-16.task.md`
- `research/frontier-30-batch-16.pages.json`
- `research/frontier-30-batch-16.coverage.json`
- `research/frontier-30-batch-16.proof-contracts.json`
- `research/frontier-30-batch-16.notes.md`

Opened the controlling plan/design entries:

- `research/plan-representation-theory-lie-track.md` at the RL-1 design block
- `research/plan-spec.json` entries for `harish-chandra-isomorphism-casimir-and-central-characters`, `harish-chandra-isomorphism-casimir-and-central-characters-examples`, and `real-forms-and-real-semisimple-lie-algebras-examples`

Opened the assigned page files:

- `library/lie-theory/harish-chandra-isomorphism-casimir-and-central-characters.md`
- `library/lie-theory/harish-chandra-isomorphism-casimir-and-central-characters-examples.md`

Opened all assigned item files:

- A-page items: `def-universal-enveloping-algebra-as-a-tensor-quotient`, `prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra`, `def-killing-form-of-a-semisimple-lie-algebra`, `prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra`, `def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra`, `prop-associated-graded-of-the-pbw-filtration-is-commutative`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `thm-root-space-decomposition-relative-to-a-cartan-subalgebra`, `prop-root-space-brackets-add-their-roots`, `prop-killing-form-pairs-only-opposite-root-spaces`, `def-killing-dual-vector-attached-to-a-root`, `prop-opposite-root-spaces-bracket-to-the-killing-dual-line`, `thm-triangular-decomposition-from-a-chosen-positive-root-system`, `def-highest-weight-vector-and-cyclic-highest-weight-module`, `def-weyl-vector-rho-for-a-chosen-positive-system`, `def-regular-element-and-rank-for-a-complex-semisimple-lie-algebra`, `def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra`, `prop-centralizer-of-a-cartan-element-from-its-vanishing-roots`, `lem-regular-elements-form-a-connected-dense-open-subset`, `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra`, `thm-the-root-set-is-a-reduced-crystallographic-root-system`, `def-root-reflections-and-the-weyl-group-action`, `def-fundamental-weights-for-a-chosen-simple-root-system`, `thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights`, `def-central-character-of-a-lie-algebra-module`, `lem-central-action-on-a-cyclic-highest-weight-module-is-scalar`, `def-quadratic-casimir-element`, `lem-the-casimir-element-is-independent-of-dual-bases`, `prop-the-quadratic-casimir-element-is-central`, `prop-casimir-eigenvalue-on-a-highest-weight-module`, `def-harish-chandra-projection`, `lem-central-elements-have-weight-zero`, `prop-harish-chandra-projection-is-multiplicative-on-the-center`, `lem-harish-chandra-projection-computes-highest-weight-scalars`, `lem-rho-shift-intertwines-the-dot-and-ordinary-weyl-actions`, `prop-harish-chandra-map-is-injective`, `lem-associated-graded-symbol-of-a-central-element-is-invariant`, `lem-regular-semisimple-elements-form-a-dense-open-subset`, `lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction`, `lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants`, `thm-symmetric-invariants-restrict-to-weyl-invariants`, `thm-harish-chandra-isomorphism-for-the-center`, `cor-central-characters-are-dot-weyl-orbits`, `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators`, `thm-enveloping-algebra-is-free-over-its-center`
- B-page items: `ex-sl2-casimir-and-its-highest-weight-eigenvalue`, `ex-sl3-harish-chandra-center-generators`, `ex-dot-conjugate-weights-have-the-same-central-character`, `cex-unshifted-weyl-orbits-do-not-classify-central-characters`, `ex-the-zero-weight-singular-central-character`, `cex-a-noninvariant-quadratic-pbw-element-is-not-central`

Opened the primary source passages needed to verify the repaired proofs:

- Etingof, `lnlg.pdf`, Lemma 18.5, Proposition 18.6, Theorem 18.10
- Etingof, `mit18_757_f23_lec_full.pdf`, Theorem 14.1 and Theorem 13.5
- Chen, `lecture5.pdf`, Lemma 3.4, Corollary 3.5, Theorem 4.6

No on-disk external item dependency remained in the assigned items' direct dependency closure. The page-level prerequisite `real-forms-and-real-semisimple-lie-algebras-examples` is present in `research/plan-spec.json`, but no current `library/*/real-forms-and-real-semisimple-lie-algebras-examples.md` file exists on disk and no batch-16 proof step directly cites that page.

## Repairs made

1. `items/def-universal-enveloping-algebra-as-a-tensor-quotient.md`, `items/prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra.md`, `items/prop-associated-graded-of-the-pbw-filtration-is-commutative.md`, `items/def-killing-dual-vector-attached-to-a-root.md`, `items/def-highest-weight-vector-and-cyclic-highest-weight-module.md`, `items/def-root-reflections-and-the-weyl-group-action.md`, `items/def-fundamental-weights-for-a-chosen-simple-root-system.md`, `items/thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights.md`, and `items/lem-central-elements-have-weight-zero.md`
   Repaired malformed display math where `\qquad`/`\quad` had lost their leading backslash, leaving broken formulas in current draft items.

2. `items/prop-opposite-root-spaces-bracket-to-the-killing-dual-line.md`, `items/thm-triangular-decomposition-from-a-chosen-positive-root-system.md`, `items/lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants.md`, and `research/frontier-30-batch-16.pages.json`
   Added the missing dependency edges that the live proofs actually use:
   `prop-root-space-brackets-add-their-roots` for the opposite-root and triangular-decomposition proofs, and `lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction` for the uniqueness half of the Weyl-invariant extension lemma.

3. `items/lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants.md`
   Repaired the proof so the statement's uniqueness clause is proved on current bytes rather than deferred informally to a later sentence.

4. `items/thm-harish-chandra-isomorphism-for-the-center.md`
   Repaired the theorem proof. The previous surjectivity step overclaimed that every invariant leading term already occurred in the Harish-Chandra image. The current proof instead establishes dot-invariance via the standard rank-one highest-weight argument and then proves isomorphism by the filtered-graded comparison whose associated graded is Chevalley restriction.

5. `research/frontier-30-batch-16.proof-contracts.json`
   Updated the proof-contract rows for `lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants` and `thm-harish-chandra-isomorphism-for-the-center` so the contract matches the repaired on-disk proofs.

No stale `verification.judge` record was present on any edited in-flight item.

## Remaining uneditable defects

None on the current bytes I opened.

## Page verdicts

- `harish-chandra-isomorphism-casimir-and-central-characters`: locally repaired and now readable on current bytes; the dependency edges, display math, and Harish-Chandra/Chevalley proof route are consistent with the checked source passages.
- `harish-chandra-isomorphism-casimir-and-central-characters-examples`: pass on current bytes; no B-page-body edit was needed.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/def-universal-enveloping-algebra-as-a-tensor-quotient.md items/prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra.md items/prop-associated-graded-of-the-pbw-filtration-is-commutative.md items/def-killing-dual-vector-attached-to-a-root.md items/prop-opposite-root-spaces-bracket-to-the-killing-dual-line.md items/thm-triangular-decomposition-from-a-chosen-positive-root-system.md items/def-highest-weight-vector-and-cyclic-highest-weight-module.md items/def-root-reflections-and-the-weyl-group-action.md items/def-fundamental-weights-for-a-chosen-simple-root-system.md items/thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights.md items/lem-central-elements-have-weight-zero.md items/lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants.md items/thm-harish-chandra-isomorphism-for-the-center.md`
  Result: all 13 changed item files were already in canonical reflow form after the edits.

- `node tools/tsx-run.mjs tools/precheck.mts items/def-universal-enveloping-algebra-as-a-tensor-quotient.md items/prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra.md items/prop-associated-graded-of-the-pbw-filtration-is-commutative.md items/def-killing-dual-vector-attached-to-a-root.md items/prop-opposite-root-spaces-bracket-to-the-killing-dual-line.md items/thm-triangular-decomposition-from-a-chosen-positive-root-system.md items/def-highest-weight-vector-and-cyclic-highest-weight-module.md items/def-root-reflections-and-the-weyl-group-action.md items/def-fundamental-weights-for-a-chosen-simple-root-system.md items/thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights.md items/lem-central-elements-have-weight-zero.md items/lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants.md items/thm-harish-chandra-isomorphism-for-the-center.md`
  Result: the eight proof-bearing changed items passed; the five changed definitions are non-proof items and were skipped by `precheck`.

- `node tools/proof-contract.mjs research/frontier-30-batch-16.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 38/38 item(s) checked`.

- `node tools/content-policy.mjs research/frontier-30-batch-16.pages.json`
  Result: `content-policy: 51 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/rendercheck.mjs items/def-universal-enveloping-algebra-as-a-tensor-quotient.md items/prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra.md items/prop-associated-graded-of-the-pbw-filtration-is-commutative.md items/def-killing-dual-vector-attached-to-a-root.md items/prop-opposite-root-spaces-bracket-to-the-killing-dual-line.md items/thm-triangular-decomposition-from-a-chosen-positive-root-system.md items/def-highest-weight-vector-and-cyclic-highest-weight-module.md items/def-root-reflections-and-the-weyl-group-action.md items/def-fundamental-weights-for-a-chosen-simple-root-system.md items/thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights.md items/lem-central-elements-have-weight-zero.md items/lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants.md items/thm-harish-chandra-isomorphism-for-the-center.md`
  Result: `OK — 13 file(s)` with no math or YAML parser failures.

- Spliced the current batch pages into `/tmp/frontier-30-batch-16-reader-spliced-plan.json`, then ran `node tools/validate-plan.mjs /tmp/frontier-30-batch-16-reader-spliced-plan.json`
  Result: ended in `OK`; only the repository's standing `redundant-prereq` advisories remain.

- `git diff --check -- items/def-universal-enveloping-algebra-as-a-tensor-quotient.md items/prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra.md items/prop-associated-graded-of-the-pbw-filtration-is-commutative.md items/def-killing-dual-vector-attached-to-a-root.md items/prop-opposite-root-spaces-bracket-to-the-killing-dual-line.md items/thm-triangular-decomposition-from-a-chosen-positive-root-system.md items/def-highest-weight-vector-and-cyclic-highest-weight-module.md items/def-root-reflections-and-the-weyl-group-action.md items/def-fundamental-weights-for-a-chosen-simple-root-system.md items/thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights.md items/lem-central-elements-have-weight-zero.md items/lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants.md items/thm-harish-chandra-isomorphism-for-the-center.md research/frontier-30-batch-16.pages.json research/frontier-30-batch-16.proof-contracts.json`
  Result: clean.

## Blockers

- No workspace or command blocker.
- No remaining uneditable mathematical defect in batch-16 scope.
