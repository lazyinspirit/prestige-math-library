# frontier-22 reader-1 report

Date: Friday, August 28, 2026.

## Opened scope

- Control and instructions: `CLAUDE.md`, `README.md`, `briefs/reader.md`, `research/frontier-22-reader.task.md`, `research/frontier-22-dispatch/reader-reader-1.attempt-1.prompt.md`, and live run state via `(cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..)`.
- Batch artifacts: `research/frontier-22-batch-1.pages.json`, `research/frontier-22-batch-1.coverage.json`, `research/frontier-22-batch-1.notes.md`, and `research/frontier-22-batch-1.proof-contracts.json`.
- Assigned pages: `library/group-theory/hnn-extensions-and-brittons-lemma.md`, `library/group-theory/hnn-extensions-and-brittons-lemma-examples.md`, `library/group-theory/simplicial-trees-and-group-actions.md`, and `library/group-theory/simplicial-trees-and-group-actions-examples.md`.
- Assigned items: all 60 batch-1 manifest items under `items/`, namely the 23 HNN A-page items, 6 HNN B-page items, 25 simplicial-tree A-page items, and 6 simplicial-tree B-page items named in `research/frontier-22-batch-1.pages.json`.
- Required page dependencies opened: `library/abstract-algebra/free-products-and-amalgamation.md`, `library/group-theory/subgroups-of-free-groups-and-schreier-rewriting-examples.md`, `library/group-theory/amenable-groups-and-folner-criteria-examples.md`, and the published companion page `library/group-theory/subgroups-of-free-groups-and-schreier-rewriting.md`.
- Direct dependency items opened for verification: `def-coset`, `def-countable`, `def-fixed-point-sets-of-a-group-action`, `def-free-group-action`, `def-group-action`, `def-group-homomorphism`, `def-group-isomorphism-and-automorphism`, `def-group-presentation`, `def-subgroup`, `lem-the-graph-notions-agree-with-the-published-finite-graph-theory`, `thm-group-homomorphism-injective-iff-trivial-kernel`, `thm-normal-form-for-free-products-with-amalgamation`, `thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree`, `thm-tree-characterisations`, and `thm-von-dyck`.
- Supplemental source verification used only where the current draft mathematics became uncertain: I reopened accessible HNN-conjugacy summaries through the web reader to confirm that the positive-length Collins criterion is separate from the length-zero base-group case.

## Edits kept

- `items/lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate.md`
  Repaired the conjugation step: the displayed cyclic permutation is obtained by conjugating with `a_0`, not with `a_0 t^{\varepsilon_1}`.
- `items/lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy.md`
  Rewrote the proof so the relevant cyclic permutation is formed explicitly as `a_0^{-1} u a_0`, then the base-group conjugator is transferred to that rotated word before the associated-subgroup conclusion is drawn.
- `items/thm-conjugacy-theorem-for-cyclically-reduced-hnn-words.md`
  Removed the false length-zero iff clause, narrowed the Statement to positive stable-letter length, dropped the now-unused dependency on `lem-every-conjugacy-class-contains-a-cyclically-britton-reduced-word`, and restored the canonical proof numbering.
- `items/thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion.md`
  Added the missing no-loop / no-parallel-edge hypothesis, which is required before an oriented graph can honestly be identified with an underlying finite simple graph.
- `items/lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision.md`
  Replaced the invalid claim that every automorphism preserves one chosen diameter with an intrinsic-midpoint argument for finite trees.
- `items/cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free.md`
  Repaired the midpoint case: a fixed midpoint does not by itself imply inversion, but under the no-inversions hypothesis it forces the endpoints of the corresponding edge to be fixed, which is enough for freeness.
- `library/group-theory/hnn-extensions-and-brittons-lemma.md`
  Narrowed the A-page summary so it names only the positive-length part of Collins' theorem and defers the length-zero base-group case honestly.
- `library/group-theory/simplicial-trees-and-group-actions.md`
  Narrowed the finite-bridge summary to finite oriented graphs with no loops or parallel geometric edges.
- `research/frontier-22-batch-1.proof-contracts.json`
  Regenerated the six changed proof-bearing contract entries plus the two batch entries that cite the repaired finite-tree bridge theorem: `fs-the-published-finite-tree-definition-already-covers-bass-serre-trees` and `ex-regular-cayley-trees-of-free-groups`.

## Confirmed defects repaired

1. `lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate`
   The original proof named the wrong conjugator.
2. `thm-conjugacy-theorem-for-cyclically-reduced-hnn-words`
   The original Statement was false: in `BS(1,2)`, the base-group elements `a` and `a^2` are conjugate by `t`, so length-zero conjugacy is not the same as conjugacy inside the base group.
3. `lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy`
   The original proof skipped the load-bearing rotation by `a_0` and drew the associated-subgroup conclusion from the wrong word.
4. `thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion`
   The original Statement was overbroad because oriented graphs on this page may have loops and parallel edges, while the target notion is finite simple graph theory.
5. `lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision`
   The original midpoint argument incorrectly assumed an automorphism preserves one chosen diameter.
6. `cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free`
   The original proof incorrectly claimed that fixing a midpoint vertex in the barycentric subdivision would force an inversion.

No additional editable or uneditable defect remained after those repairs on the opened scope.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate.md items/lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy.md items/thm-conjugacy-theorem-for-cyclically-reduced-hnn-words.md items/thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion.md items/lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision.md items/cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free.md library/group-theory/hnn-extensions-and-brittons-lemma.md library/group-theory/simplicial-trees-and-group-actions.md`
  Result: all eight files already matched the canonical reflow.
- `node tools/regen-contract-entries.mjs research/frontier-22-batch-1.proof-contracts.json lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy thm-conjugacy-theorem-for-cyclically-reduced-hnn-words thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free fs-the-published-finite-tree-definition-already-covers-bass-serre-trees ex-regular-cayley-trees-of-free-groups`
  Result: regenerated 8 contract entries.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate.md items/lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy.md items/thm-conjugacy-theorem-for-cyclically-reduced-hnn-words.md items/thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion.md items/lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision.md items/cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free.md`
  Result: pass, `6 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-22-batch-1.proof-contracts.json --strict`
  Result: pass, `0 error(s), 0 warning(s), 44/44 item(s) checked`.
- `node tools/rendercheck.mjs items/lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate.md items/lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy.md items/thm-conjugacy-theorem-for-cyclically-reduced-hnn-words.md items/thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion.md items/lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision.md items/cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free.md library/group-theory/hnn-extensions-and-brittons-lemma.md library/group-theory/simplicial-trees-and-group-actions.md`
  Result: pass, all 8 changed files render cleanly.
- `node tools/content-policy.mjs research/frontier-22-batch-1.pages.json`
  Result: pass, `60 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate.md items/lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy.md items/thm-conjugacy-theorem-for-cyclically-reduced-hnn-words.md items/thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion.md items/lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision.md items/cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free.md library/group-theory/hnn-extensions-and-brittons-lemma.md library/group-theory/simplicial-trees-and-group-actions.md research/frontier-22-batch-1.proof-contracts.json`
  Result: pass.

## Page verdicts

- `hnn-extensions-and-brittons-lemma`
  Sufficient after repair on the opened scope. The page now states only the positive-length Collins criterion and no longer overclaims the length-zero base-group case.
- `hnn-extensions-and-brittons-lemma-examples`
  Clean on the opened scope. The examples and counterexample still type-check against the repaired A-page statements.
- `simplicial-trees-and-group-actions`
  Sufficient after repair on the opened scope. The finite-tree bridge and fixed-point / torsion arguments are now stated with the missing hypotheses and valid midpoint logic.
- `simplicial-trees-and-group-actions-examples`
  Clean on the opened scope. The examples remain compatible with the repaired A-page statements.

## Blockers

- None in the opened batch-1 scope.
- No uneditable published-dependency defect was confirmed.
