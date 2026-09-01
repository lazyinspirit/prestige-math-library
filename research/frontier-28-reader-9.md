# frontier-28 reader-9 report

Date: 2026-09-01.
Run: `frontier-28`
Batch: `9`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `research/frontier-28-reader.task.md`, `research/frontier-28-beta-9.task.md`, `research/frontier-28-batch-9.pages.json`, `research/frontier-28-batch-9.coverage.json`, `research/frontier-28-batch-9.proof-contracts.json`, `research/frontier-28-batch-9.notes.md`, `research/frontier-28-step6-hash-9-pre.json`, `research/plan-combinatorics-and-categories.md` lines `3885-3964`, and `research/plan-spec.json`.
- Assigned pages: `library/combinatorics/leaf-reducibility-and-wonderful-families.md` and `library/combinatorics/leaf-reducibility-and-wonderful-families-examples.md`.
- Assigned A-page items: `def-wonderful-finite-family`, `lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge`, `lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph`, `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses`, `lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union`, `lem-star-or-special-vertex-obstructions-force-wonderfulness`, and `lem-the-e-graph-and-the-bird-graph-are-wonderful`.
- Assigned B-page items: `ex-the-e-graph-sits-inside-a-one-subdivided-star-and-deletes-to-the-five-vertex-path` and `ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit`.
- Dependency pages opened for verification: `library/combinatorics/small-graph-erdos-hajnal-consequences.md` and `library/combinatorics/iterative-restriction-and-comb-extraction-lemmas.md`.
- Dependency items opened for verification: `def-anticonnected-graph-and-anticonnected-component`, `def-blockade-length-and-width`, `def-c-sparse-and-c-restricted-vertex-set`, `def-complete-anticomplete-pure-and-x-sparse-blockades`, `def-h-free-and-family-free-graph`, `def-edges-between-sets-and-pure-mixed-pairs`, `def-directional-and-weak-sparsity-between-vertex-sets`, `def-h-plus-and-h-minus-for-two-special-vertices`, `def-erdos-hajnal-property-and-constant`, `def-homogeneous-set-and-homogeneous-number`, `thm-complete-graph-free-classes-are-erdos-hajnal`, `def-graph-deletion-contraction-minor-and-subdivision`, `def-bird-graph-and-co-bird-graph`, `def-e-graph-and-co-e-graph`, `thm-substitution-preserves-the-erdos-hajnal-property`, `thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property`, `def-standard-complete-bipartite-path-and-cycle-graphs`, and `def-graph-isomorphism-and-complement`.
- Primary-source read: Huang–Ju–Zhou, `https://arxiv.org/html/2606.06258v2`, especially Section `2.1` lines `226-271` and the introduction lines `92-108`/`226-236` that define the special-vertex route and Lemma `2.2`.
- Local spot-checks beyond prose: I brute-forced the finite graph isomorphisms used by the E/Bird witnesses and confirmed that the chosen six-vertex subdivision subgraph is isomorphic to `E`, while `H^+-v_3` and `H^--v_6` are each isomorphic to co-Bird.

## Design/spec check

- The batch task, the live spec, the batch manifest, and the design block at `research/plan-combinatorics-and-categories.md:3885-3964` agree on orders `425/426`, the page ids, the titles, and the declared prerequisites.
- The design requirements that mattered here are satisfied after repair: the A page keeps the Lemma `2.1` proof kernel split into named lemmas, and the B page carries finite witness checks rather than duplicate adjacency definitions.

## Confirmed defects and edits

1. Repaired `items/def-wonderful-finite-family.md`.
   The second outcome wrongly said that the counted outside vertices are “mixed on `B_i`, equivalently `0<|N(v)\cap B_i|<|B_i|/2`”. That equivalence is false: mixedness only gives `0<|N(v)\cap B_i|<|B_i|`, while the source definition and the later proof use the stricter half-neighbour condition. I removed the false “mixed” paraphrase so the definition now states exactly the counted condition from Huang–Ju–Zhou line `235`.
2. Repaired `items/lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph.md`.
   Assertion `3` needs more than plain mixedness: to choose later block witnesses nonadjacent to the outside vertex after excluding fewer than `|B_j|/2` vertices, one needs `|N(v)\cap B_j|<|B_j|/2`. The old statement assumed only that `v` was mixed on each block, which did not justify step `4.1`. I strengthened hypothesis `2` to `0<|N_G(v)\cap B_i|<|B_i|/2`, updated the facts block accordingly, and rewrote the affected proof lines to use the correct hypothesis.
3. Repaired `items/lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses.md`.
   The special-vertex branch only assumed `a\ge q`, but step `2.2` also lifts arbitrary members of `\overline{\mathcal F}` from `J` back into `G`. That requires `a` to dominate the order of every graph in `\{H\}\cup\overline{\mathcal F}`, exactly as the source's `a_0` does. I changed the statement to require `a\ge m` for the maximum order `m` in `\{H\}\cup\overline{\mathcal F}` and repaired step `2.2` so both the `F\in\overline{\mathcal F}` lift and the `H^+` lift have the needed inequalities.
4. Repaired `items/lem-star-or-special-vertex-obstructions-force-wonderfulness.md`.
   Its setup inherited the weakened auxiliary-lemma hypothesis. I updated fact `[L2]`, changed step `1.1` so case `2` uses the maximum order in `\{H\}\cup\overline{\mathcal F}`, and rewrote the closing sentence to refer to the actual index sets `I(x)` rather than to generic “mixed” blocks.
5. Updated `research/frontier-28-batch-9.proof-contracts.json`.
   I regenerated the affected proof-bearing entries for `lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph`, `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses`, `lem-star-or-special-vertex-obstructions-force-wonderfulness`, and downstream `lem-the-e-graph-and-the-bird-graph-are-wonderful`, then hand-repaired the two contradicted `empty` boundary rows so `proof-contract --strict` and `boundary-audit --fail-on-contradicted` both match the current on-disk proofs.

## Per-page verdicts

- `leaf-reducibility-and-wonderful-families`: pass after the four repairs above. The wonderfulness definition, the mixed-block lifting lemma, the auxiliary-pattern lemma, and the final criterion now agree with the source's half-neighbour threshold and with the size bound needed to lift every forbidden pattern named in the proof.
- `leaf-reducibility-and-wonderful-families-examples`: pass. The E-subdivision witness and the two co-Bird finite checks are correct on disk and did not need B-page edits.

## Checks

- `node tools/regen-contract-entries.mjs research/frontier-28-batch-9.proof-contracts.json lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses lem-star-or-special-vertex-obstructions-force-wonderfulness lem-the-e-graph-and-the-bird-graph-are-wonderful`
  Result: regenerated `4`, skipped `0`.
- `node tools/tsx-run.mjs tools/reflow.mts items/def-wonderful-finite-family.md items/lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph.md items/lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses.md items/lem-star-or-special-vertex-obstructions-force-wonderfulness.md`
  Result: the three proof-bearing items reflowed; the definition was already canonical.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-wonderful-finite-family.md items/lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph.md items/lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses.md items/lem-star-or-special-vertex-obstructions-force-wonderfulness.md items/lem-the-e-graph-and-the-bird-graph-are-wonderful.md items/ex-the-e-graph-sits-inside-a-one-subdivided-star-and-deletes-to-the-five-vertex-path.md items/ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit.md items/lem-a-vertex-mixed-on-an-anticonnected-set-yields-opposite-adjacency-on-a-nonedge.md items/lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union.md`
  Result: `8 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-28-batch-9.proof-contracts.json --strict`
  Result: `0` errors, `0` warnings, `8/8` checked.
- `node tools/citation-fidelity.mjs research/frontier-28-batch-9.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-28-batch-9.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: no contradicted boundary dispositions after the manual boundary-row repair.
- `node tools/content-policy.mjs research/frontier-28-batch-9.pages.json`
  Result: `9` scoped items, `0` errors, `0` warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: exit `0`; only the repository's standing `redundant-prereq` advisories, ending with the usual `OK` summary.
- `node tools/rendercheck.mjs items/def-wonderful-finite-family.md items/lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph.md items/lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses.md items/lem-star-or-special-vertex-obstructions-force-wonderfulness.md`
  Result: `OK — 4 file(s)`.
- `node - <<'NODE' ... NODE`
  Result: `E-isomorphic-to-selected-subdivision-subgraph: true`, `Hplus-v3-is-coBird: true`, and `Hminus-v6-is-coBird: true`.
- `git diff --check -- items/def-wonderful-finite-family.md items/lem-mixed-anticonnected-blocks-lift-pattern-obstructions-to-the-ambient-graph.md items/lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses.md items/lem-star-or-special-vertex-obstructions-force-wonderfulness.md research/frontier-28-batch-9.proof-contracts.json`
  Result: clean.
- `node tools/step6-scope.mjs check --run frontier-28 --phase split --batch 9`
  Result: exits with `ERROR scope-batch-missing: batch 9 has no scope file`. I recorded it here because the tool is absent for this batch, but it did not block the mathematical read or the licensed repairs.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- No mathematical blocker remains. The only tooling-side issue I hit was the missing batch-9 scope file for `step6-scope.mjs`, noted above.
