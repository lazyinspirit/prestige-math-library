# frontier-32 Step-6a reader report — batch 19

## Scope opened

- A page: `library/computability-theory/oracle-computability-the-jump-and-turing-degrees.md`.
- B page: `library/computability-theory/oracle-computability-the-jump-and-turing-degrees-examples.md`.
- All 26 assigned item files in `research/frontier-32-batch-19.pages.json`: 23
  A-page items and the three B-page worked items.
- Direct mathematical dependencies opened: `def-relative-computability-and-enumerability`,
  `def-computable-many-one-reduction`, `def-universal-and-acceptable-numbering`,
  `thm-smn-parameter-theorem`, `thm-posts-theorem`,
  `lem-oracle-computation-has-a-finite-query-witness`, and
  `thm-kleenes-second-recursion-theorem`. Their statements and local proof
  routes supply the relative-machine, acceptable-numbering, parameterisation,
  finite-use, hierarchy, and fixed-point claims used here.
- Source evidence opened independently: Patey, *Computability Theory*,
  Theorems 5.11--5.12 and Proposition 5.13 (PDF pp. 161--163), plus the
  batch coverage's recorded oracle, degree, and jump ranges; its function
  coding and finite-table maximum route agrees with the repaired reverse
  implication. Terwijn, *Computability Theory*, Chapter 5's contents and
  §§5.1--5.3 were also opened to check the relative-computation, jump, and
  finite-jump citations. The batch's two recorded full-text source stamps
  remain valid.

## Review and repair

The page summaries accurately state the finite-query oracle model, tagged
degree join, jump, and the contrast between Turing and everywhere-total
truth-table reductions. Definitions, theorem hypotheses, directions,
quantifiers, examples, refutations, and source locators were checked. The
finite-use compactness proof correctly uses finite binary trees: failure of
the exhaustive finite transcript search gives a prefix-closed tree with an
infinite nonhalting oracle path.

Repaired one in-flight proof defect in
`thm-computably-dominated-characterizes-truth-table-reducibility`:

- Its forward implication had dominated the greatest queried number and then
  truncated after that number of *steps*, which does not follow. It now
  dominates the total $X$-computable running-time function before performing
  the totalizing time truncation.
- Its reverse implication used an unstated natural-valued functional while the
  local finite-use lemma said “bit output.” The lemma now covers arbitrary
  natural-number outputs, as its compactness proof already does. The theorem
  now explicitly invokes the cited source's canonical function-as-oracle
  representation, applies the finite-use lemma, and takes the maximum over
  the finitely many bounded oracle strings.
- Updated the matching proof-contract entries. No stale `verification.judge`
  record was present on either changed in-flight item.

## Verdicts

| Page | Verdict |
| --- | --- |
| `oracle-computability-the-jump-and-turing-degrees` | Pass after the local repair. |
| `oracle-computability-the-jump-and-turing-degrees-examples` | Pass. |

No uneditable mathematical defect remains in the assigned pages or their
opened dependency closure.

## Validation

- Reflowed the changed theorem (the changed lemma already conformed).
- Focused precheck: 2 changed proof-bearing items passed.
- Batch precheck: 18 proof-bearing assigned items passed, 0 failures.
- Strict batch proof-contract check: 18/18 passed, 0 errors or warnings.
- Batch content policy: 26 scoped items, 0 errors or warnings.
- Focused render check: both changed items and both pages passed.
- Manifest dependencies: 26 items, 0 errors. Coverage checklist: 41 harvested
  results, 0 errors or warnings. Source-fetch check: 2/2 verified.

## Blocker

The repository-wide `depcheck` was run after the batch precheck. It reports
13 pre-existing out-of-scope errors (YAML escapes in three unrelated files and
two unresolved `[[t]]` links in an unrelated Jantzen item), alongside legacy
warnings. These are outside batch 19 and outside its dependency closure; no
assigned item produced a depcheck error. `fwdcheck` was not reached because
`depcheck` exited nonzero on those unrelated errors.
