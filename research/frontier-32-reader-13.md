# Frontier 32 — reader 13

## Opened scope

- Manifest and current authoring records:
  `research/frontier-32-batch-13.pages.json`,
  `research/frontier-32-batch-13.coverage.json`,
  `research/frontier-32-batch-13.proof-contracts.json`, and
  `research/frontier-32-batch-13.notes.md`.
- Pages: `library/combinatorics/co-e-free-comb-structure.md` (A) and
  `library/combinatorics/co-e-free-comb-structure-examples.md` (B).
- Assigned A items: `lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property`,
  `thm-special-vertex-local-structural-partition-criterion-implies-property-star`,
  `lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours`,
  `lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs`,
  `def-h-five-overlap-chain-relation-in-a-comb-block`,
  `lem-h-five-overlap-classes-are-connected`,
  `lem-purity-on-every-h-five-propagates-along-an-overlap-class`,
  `def-h-five-overlap-blockade-and-iterated-mixed-quotients`,
  `lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade`,
  `lem-a-vertex-mixed-on-a-connected-set-mixes-on-an-edge`,
  `lem-co-e-free-external-purity-survives-h-five-overlap-quotients`,
  `lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free`,
  `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition`, and
  `cor-the-singleton-family-containing-e-has-property-star`.
- Assigned B examples: `ex-induced-co-e-witnesses-for-both-forbidden-path-runs`,
  `ex-an-h-five-overlap-class-and-its-terminal-quotient`, and
  `ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition`.
- Opened dependency interfaces include the property-(*) definition and all four
  local layer arguments, the comb/blockade/pattern/mixed-quotient interfaces,
  the $H_i$, $E$, free-family, path, connectedness and purity definitions, the
  Erdős--Hajnal and leaf/co-leaf results, and the three quotient-witness
  lemmas. I also re-read Huang--Ju--Zhou, *Erdős-Hajnal beyond the five-vertex
  path*, HTML v2, Lemma 5.1 and proof (lines 859--915) and Lemmas 6.1--6.4
  with Claims 6.4.1--6.4.3 (lines 919--1048).

## Repairs made

1. In `lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free`,
   made the ambient co-$E$-free hypothesis explicit in the statement. The
   former statement asserted the conclusion without that necessary premise.
2. In the same proof, corrected the lift of an induced $H_5$ from six chosen
   blocks to eleven. $H_5$ is the five-wheel together with five rim leaves;
   the six-block count belongs only to co-$E$.
3. Added the missing `## Proof` boundary and a contract entry for that repaired
   proof in `frontier-32-batch-13.proof-contracts.json`.
4. Escaped the set notation in the YAML titles of that lemma,
   `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition`, and
   `cor-the-singleton-family-containing-e-has-property-star`. Before the
   repair, the renderer rejected each frontmatter block as an invalid YAML
   double-quoted escape.

None of these items carried a `verification.judge` record, so no stale judge
record was present to remove.

## Mathematical reading

- The special-vertex qualification is retained everywhere it is needed. The
  local criterion is a legitimate extraction of the proof of source Lemma 5.1:
  after a partition for the selected special-vertex comb is supplied, the
  large-$Y$, transversal, and layer arguments use only that supplied
  partition. It does not infer the published universal-comb hypothesis.
- The source Claim 6.4.3 descent is compressed in
  `lem-co-e-free-external-purity-survives-h-five-overlap-quotients`, but its
  hypotheses line up with the opened quotient-witness lemma. In its terminal
  application, the general $H_5$ purity lemma is applied with the descended
  pair $(y',u')$, not with the original special pair; this is licensed by the
  general form of that lemma.
- The three B witnesses type-check: the first two reproduce the co-$E$
  complement maps, the overlapping copies give one initial overlap class, and
  the four-tooth graph is bipartite (whereas co-$E$ contains a triangle).

## Contract blocker

The batch proof-contract file now checks its six declared entries, but its
scope still omits nine proof-bearing assigned items:

- `lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property`,
  `thm-special-vertex-local-structural-partition-criterion-implies-property-star`,
  `lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours`,
  `lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs`,
  `lem-co-e-free-external-purity-survives-h-five-overlap-quotients`, and
  `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition`;
- all three B examples.

This is an in-flight contract-completeness blocker, not an uneditable finding.
It needs complete contracts before a strict whole-batch proof-contract gate can
attest every proof-bearing assigned item. No proposed withdrawal was deleted.

## Validation

- Reflow ran on each changed A item and was unchanged after the edits.
- Focused precheck passed for all three changed proof-bearing A items.
- Focused contract checks passed for the repaired terminal-pattern lemma and
  the already-contracted corollary; the batch contract reports `6/6` declared
  items, with zero errors and warnings.
- Focused rendercheck passed for all 17 assigned items and both pages after
  the YAML fixes.
- `content-policy.mjs research/frontier-32-batch-13.pages.json`: 17 scoped,
  0 errors, 0 warnings.
- `manifest-deps.mjs research/frontier-32-batch-13.pages.json`: 17 items,
  0 errors.
- `coverage-checklist.mjs research/frontier-32-batch-13.coverage.json
  --require-destination`: 1 page, 37 results, 0 errors, 0 warnings.

## Page verdicts

- A page: **mathematically passes after the listed repairs**; workflow closure
  remains blocked only by the nine missing proof-contract entries.
- B page: **passes**; its body was not edited. Its examples share the same
  batch-level contract-completeness blocker.
- No uneditable mathematical defect remains in the opened dependency closure.
