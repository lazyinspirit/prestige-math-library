# frontier-19 reader-4 report

## Fatal findings

1. Subject: [lem-localised-module-scalar-action-independent-of-representatives](/home/lazyinspirit/Projects/prestige-math-library/items/lem-localised-module-scalar-action-independent-of-representatives.md:45)
   Location: proof step `2.1`.
   Defect: `false-claim`.
   Evidence: the original identity omitted a factor of `u`; expanding `au'(s'm-sm') + usm'(u'a-ua')` does not recover `u's'am-usa'm'`, so the printed `vw` witness was unjustified.
   Severity: fatal.

2. Subject: [thm-local-criterion-for-zero-modules-and-maps](/home/lazyinspirit/Projects/prestige-math-library/items/thm-local-criterion-for-zero-modules-and-maps.md:26)
   Location: title and Statement.
   Defect: `missing-hypothesis` and `overstrong-title-or-statement`.
   Evidence: the proof uses `thm-proper-ideal-contained-in-maximal-ideal`, whose published Statement begins “Assume the Axiom of Choice.”; the item had omitted that hypothesis while claiming prime/maximal localisation criteria unconditionally.
   Severity: fatal.

3. Subject: [thm-local-criterion-for-exactness-of-modules](/home/lazyinspirit/Projects/prestige-math-library/items/thm-local-criterion-for-exactness-of-modules.md:26)
   Location: title and Statement.
   Defect: `missing-hypothesis` and `overstrong-title-or-statement`.
   Evidence: the proof cites `thm-local-criterion-for-zero-modules-and-maps`; once the zero/map criterion is choice-dependent, the exactness criterion must preserve the same hypothesis.
   Severity: fatal.

4. Subject: [thm-jacobson-radical-unit-characterisation](/home/lazyinspirit/Projects/prestige-math-library/items/thm-jacobson-radical-unit-characterisation.md:26), [thm-nakayama-lemma](/home/lazyinspirit/Projects/prestige-math-library/items/thm-nakayama-lemma.md:26), [cor-nakayama-generators-modulo-an-ideal](/home/lazyinspirit/Projects/prestige-math-library/items/cor-nakayama-generators-modulo-an-ideal.md:25), [cor-minimal-generators-over-a-local-ring](/home/lazyinspirit/Projects/prestige-math-library/items/cor-minimal-generators-over-a-local-ring.md:26)
   Location: titles and Statements.
   Defect: `missing-hypothesis` and `overstrong-title-or-statement`.
   Evidence: the Jacobson-radical unit criterion uses maximal-ideal existence through `thm-proper-ideal-contained-in-maximal-ideal`; Nakayama and both downstream corollaries inherit that dependency and had all been stated unconditionally.
   Severity: fatal.

5. Subject: [ex-local-test-for-an-isomorphism](/home/lazyinspirit/Projects/prestige-math-library/items/ex-local-test-for-an-isomorphism.md:25)
   Location: example body.
   Defect: `missing-hypothesis` and `overstrong-title-or-statement`.
   Evidence: the example’s conclusion is obtained by invoking `thm-local-criterion-for-zero-modules-and-maps`; after that theorem’s repair, the example also needed the same Choice qualifier.
   Severity: fatal.

## Nonfatal findings

1. Subject: [lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports](/home/lazyinspirit/Projects/prestige-math-library/items/lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports.md:44)
   Location: proof boundary case `r=0`.
   Defect: `missing-hypothesis`.
   Evidence: the written proof handled only a nonempty generating list, but the statement allows the empty finite list for the zero module.
   Severity: nonfatal.

2. Subject: [research/frontier-19-batch-4.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-19-batch-4.proof-contracts.json:654), [research/frontier-19-batch-4.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-19-batch-4.proof-contracts.json:1276), [research/frontier-19-batch-4.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-19-batch-4.proof-contracts.json:3000)
   Location: contract entries for `thm-localisation-of-modules-commutes-with-quotients-and-sums`, `cor-localisation-commutes-with-finite-intersections-of-submodules`, and `thm-support-of-arbitrary-direct-sums`.
   Defect: `ill-formed`.
   Evidence: each contract had marked the `empty` boundary row `not_applicable` even though the statements quantify over direct sums or finite intersections and the proofs cover the empty family case.
   Severity: nonfatal.

3. Subject: [ex-nakayama-jacobson-hypothesis-is-essential](/home/lazyinspirit/Projects/prestige-math-library/items/ex-nakayama-jacobson-hypothesis-is-essential.md:25), [ex-nakayama-finite-generation-is-essential](/home/lazyinspirit/Projects/prestige-math-library/items/ex-nakayama-finite-generation-is-essential.md:27), [ex-minimal-generators-local-ring](/home/lazyinspirit/Projects/prestige-math-library/items/ex-minimal-generators-local-ring.md:25)
   Location: Facts/Verification sections.
   Defect: `citation-inaccurate`.
   Evidence: after the Choice repairs, these examples were still phrased as though their cited theorem statements were unconditional; I rewrote them as direct witnesses so their conclusions no longer rest on misquoted hypotheses.
   Severity: nonfatal.

4. Subject: [localisation-of-modules-and-support.md](/home/lazyinspirit/Projects/prestige-math-library/library/commutative-algebra/localisation-of-modules-and-support.md:9)
   Location: A-page summary paragraphs.
   Defect: `overstrong-title-or-statement`.
   Evidence: the summary described the local criteria and Nakayama consequences as unconditional even after the repaired items had become choice-dependent.
   Severity: nonfatal.

## Edits

- [lem-localised-module-scalar-action-independent-of-representatives.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-localised-module-scalar-action-independent-of-representatives.md:45): repaired the false witness in proof step `2.1`.
- [thm-local-criterion-for-zero-modules-and-maps.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-local-criterion-for-zero-modules-and-maps.md:26): added the missing Choice hypothesis to the title and Statement.
- [thm-local-criterion-for-exactness-of-modules.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-local-criterion-for-exactness-of-modules.md:26): added the inherited Choice hypothesis to the title and Statement.
- [thm-jacobson-radical-unit-characterisation.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-jacobson-radical-unit-characterisation.md:26): made the maximal-ideal existence hypothesis explicit.
- [thm-nakayama-lemma.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-nakayama-lemma.md:26): propagated the repaired Jacobson-radical hypothesis into the theorem title and Statement.
- [cor-nakayama-generators-modulo-an-ideal.md](/home/lazyinspirit/Projects/prestige-math-library/items/cor-nakayama-generators-modulo-an-ideal.md:25): propagated the repaired Nakayama hypothesis into the corollary title and Statement.
- [cor-minimal-generators-over-a-local-ring.md](/home/lazyinspirit/Projects/prestige-math-library/items/cor-minimal-generators-over-a-local-ring.md:26): propagated the repaired hypothesis into the corollary title and Statement.
- [lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports.md:44): added the `r=0` boundary case and renumbered the proof to the canonical precheck form.
- [ex-local-test-for-an-isomorphism.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-local-test-for-an-isomorphism.md:25): added the missing Choice qualifier to match the cited local-criterion theorem.
- [ex-nakayama-jacobson-hypothesis-is-essential.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-nakayama-jacobson-hypothesis-is-essential.md:25): removed the stale theorem-level dependence and kept the example as a direct counterexample witness.
- [ex-nakayama-finite-generation-is-essential.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-nakayama-finite-generation-is-essential.md:27): rewrote the closing inference as a direct witness instead of a theorem citation.
- [ex-minimal-generators-local-ring.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-minimal-generators-local-ring.md:25): rewrote the minimality conclusion directly from `\mathfrak m/\mathfrak m^2`.
- [localisation-of-modules-and-support.md](/home/lazyinspirit/Projects/prestige-math-library/library/commutative-algebra/localisation-of-modules-and-support.md:9): aligned the two-paragraph A-page summary with the repaired choice-dependent scope.
- [frontier-19-batch-4.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-19-batch-4.proof-contracts.json:245): updated repaired derivations, refreshed statement quotes, and fixed the affected boundary rows.

## Coverage

- Opened item files: `78` total = `45` assigned in-flight items + `33` cited dependency items.
- Opened page files: `2`.
- Page verdicts:
  - [localisation-of-modules-and-support.md](/home/lazyinspirit/Projects/prestige-math-library/library/commutative-algebra/localisation-of-modules-and-support.md:1): repaired A-page prose; mathematically clean after the summary update.
  - [localisation-of-modules-and-support-examples.md](/home/lazyinspirit/Projects/prestige-math-library/library/commutative-algebra/localisation-of-modules-and-support-examples.md:1): no editable page-prose defect found.
- Blockers: none.

## Checks

- On Tuesday, August 25, 2026, `tools/reflow.mts` and `tools/precheck.mts` passed on all 12 changed items.
- `node tools/proof-contract.mjs research/frontier-19-batch-4.proof-contracts.json --strict` finished with `0` errors and one existing nonfatal `shotgun-bracket` warning on `thm-local-criterion-for-zero-modules-and-maps`.
- `node tools/boundary-audit.mjs research/frontier-19-batch-4.proof-contracts.json --json` reported `0` contradicted candidates.
- `node tools/citation-fidelity.mjs research/frontier-19-batch-4.proof-contracts.json --json` reported `0` missing quotes and `0` widening candidates.
- `node tools/citecheck.mjs` over the batch items returned `OK`.
- `node tools/prosecheck.mjs` on both page files returned `0` errors and `0` warnings.
