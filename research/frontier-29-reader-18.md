# frontier-29 reader-18 report

Date: Wednesday, September 2, 2026 (AEST)
Run: `frontier-29`
Batch: `18`
Assigned output: `research/frontier-29-reader-18.md`

## Opened scope

I read the control files `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`research/frontier-29-reader.task.md`, `research/frontier-29-batch-18.pages.json`,
`research/frontier-29-batch-18.coverage.json`,
`research/frontier-29-batch-18.notes.md`,
`research/frontier-29-batch-18.proof-contracts.json`, and
`research/frontier-29-step6-hash-18-pre.json`.

I opened all 4 assigned page files and all 30 assigned item files in batch 18:

- `computable-reductions-and-rices-theorem`
- `computable-reductions-and-rices-theorem-examples`
- `the-cook-levin-theorem`
- `the-cook-levin-theorem-examples`

I also opened the dependency items needed for the checked claims, including:

- `def-decidable-and-recognizable-language`
- `def-turing-machine-acceptance-problem`
- `thm-machine-acceptance-is-recognizable`
- `thm-machine-acceptance-is-undecidable`
- `thm-decidable-iff-language-and-complement-are-recognizable`
- `def-np-by-verifiers`
- `def-polynomially-balanced-verifier`
- `thm-verifier-and-nondeterministic-definitions-of-np-agree`
- `def-np-hard-and-np-complete`
- `def-polynomial-time-many-one-reduction`
- `def-worst-case-time-and-space-complexity`
- `def-dtime-ntime-dspace-and-nspace`

For witness-checking on the regular/context-free examples, I also opened:

- `cor-distinguishable-prefix-nonregularity-criterion`
- `ex-distinguishable-prefix-nonregularity-criterion`
- `ex-a-n-b-n-is-deterministic-context-free-and-unambiguous`
- `ex-pumping-lemma-for-context-free-languages`

I reopened the source material needed for the repaired claims:

- Kevin Kelly, `Many-one Reduction`
- EECS 376 `Computability` notes around Proof 129, Definitions 130-131, and Theorem 134
- MIT 18.404J / 6.840J Lecture 16 `Cook-Levin Theorem`
- Arora-Barak, *Computational Complexity: A Modern Approach*, section 2.3
- Cook `1971` PDF URL for the primary SAT-completeness source

## Confirmed defects and repairs

1. `items/lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal.md`
   overstated the locality criterion. The statement required extra boundary
   conditions and referred to an accepting branch, but the actual local-history
   lemma needed here is the start-row plus local-window characterization of an
   ordinary branch computation history. I repaired the item, aligned
   `items/def-local-tableau-window.md`, updated the dependent
   `items/lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs.md`, and
   refreshed the batch proof contract.

2. `items/lem-tseitin-transformation-is-linear-size-and-equisatisfiable.md`
   quantified over all Boolean formulas but only treated binary `and`/`or`
   nodes. Literal, negation, and constant cases were missing. I repaired the
   Tseitin construction so every subformula is handled, then updated the batch
   proof contract and the downstream statement quotes that depended on the old
   wording.

3. `items/cex-cook-levin-enumerates-all-branches.md` used a looping branch even
   though the page's bounded-tableau regime assumes all branches halt within the
   chosen time bound. I repaired the counterexample by making the second branch
   reject immediately and updated its contract entry.

4. `items/thm-rice-shapiro-positive-information-direction.md` relied on an
   overly compressed appeal to Rice-Shapiro. I repaired the proof by making the
   semicharacteristic-function translation explicit and by stating exactly what
   the classical partial-function theorem contributes before translating back to
   recognizable languages. The contract was updated to match.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts ...` on the 6 edited items
  (`unchanged`)
- `node tools/tsx-run.mjs tools/precheck.mts ...` on the 6 edited items
  (`5 checked, 0 failing`)
- `node tools/tsx-run.mjs tools/precheck.mts ...` on all 30 batch items
  (`30 checked, 0 failing`)
- `node tools/rendercheck.mjs ...` on all 30 batch items plus the 4 assigned
  pages (`42 file(s) OK`)
- `node tools/proof-contract.mjs research/frontier-29-batch-18.proof-contracts.json --strict`
  (`30/30 item(s) checked`)
- `node tools/citation-fidelity.mjs research/frontier-29-batch-18.proof-contracts.json --items-dir items`
  (`QUOTE NOT FOUND — none`)

## Page verdicts

- `computable-reductions-and-rices-theorem`: pass after the Rice-Shapiro proof
  repair.
- `computable-reductions-and-rices-theorem-examples`: pass.
- `the-cook-levin-theorem`: pass after the tableau-locality and Tseitin repairs.
- `the-cook-levin-theorem-examples`: pass after the bounded-counterexample
  repair.

## Uneditable defects and blockers

No uneditable defect remains in the assigned scope.
No blocker remains for batch 18.
