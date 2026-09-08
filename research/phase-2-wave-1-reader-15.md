# Phase-2 wave-1 — Step-6a independent reader report, batch 15

## Scope opened

- Manifest and current task artifacts: `research/phase-2-wave-1-batch-15.pages.json`,
  `research/phase-2-wave-1-batch-15.coverage.json`,
  `research/phase-2-wave-1-batch-15.notes.md`, and
  `research/phase-2-wave-1-batch-15.proof-contracts.json`.
- A page: `library/foundations/dependent-choice-and-the-complete-metric-baire-theorem.md`.
  B page: `library/foundations/dependent-choice-and-the-complete-metric-baire-theorem-examples.md`.
- All assigned items: `def-serial-relation-dependent-choice-principle-over-zf`,
  `lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf`,
  `def-complete-metric-baire-principle-over-zf`,
  `lem-open-dense-and-closed-nowhere-dense-baire-forms-are-equivalent-in-zf`,
  `thm-serial-dependent-choice-implies-complete-metric-baire-over-zf`,
  `lem-discrete-sequence-spaces-are-complete-in-zf`,
  `lem-serial-relation-successor-sets-are-open-dense`,
  `thm-complete-metric-baire-principle-implies-dependent-choice-over-zf`,
  `thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf`, and
  `ex-blair-sequence-space-for-a-serial-relation`.
- Direct proof suppliers opened at their cited definitions/statements: relation,
  function, naturals, function-set, Separation, Replacement, Union, induction,
  recursion, complete metric spaces, metric balls/topology/axioms/interior/
  closure, indexed families/operations/De Morgan, Cauchyness, convergence,
  reciprocal Archimedean bound, well-ordering, and finite open-set algebra.
- External sources independently reopened: Miller, *Lecture notes on set theory
  without choice*, pp. 2, 8, 10–11 (Definitions 4.2–4.4 and 5.1–5.2,
  Proposition 5.4); Karagila, *Zornian Functional Analysis*, Definition 10 and
  Theorems 17–18 (printed pp. 8–11). Miller's converse establishes the intended
  unrestricted-witness sequence-space route; the local proof correctly replaces
  the source's compressed range extraction with least witness indices.

## Reader repair

Confirmed and repaired an in-flight false claim in
`thm-complete-metric-baire-principle-implies-dependent-choice-over-zf`, proof
step 4.1. It had said that the least witness index $q(i)$ "can be at most
$i$". This is false: the assigned worked example itself has $q(0)=4$.
The sentence now correctly says $q(i)$ can be smaller or larger than $i$.
The corresponding step-4.1 proof-contract input now records that exact
non-monotonicity fact. No `verification.judge` record was present to remove.

## Mathematical audit and verdicts

- `def-serial-relation-dependent-choice-principle-over-zf`: pass. The nonempty
  carrier qualification correctly avoids the vacuously serial empty relation;
  the singleton and prescribed-start conventions are correct.
- `lem-prescribed-start-and-starting-point-free-serial-choice-are-equivalent-in-zf`:
  pass. Tagged finite paths have a set bound, a length-one seed, serial one-step
  extensions, compatible union, unbounded domains, and the required edge at
  every adjacent pair. Only the displayed DC antecedent supplies an infinite
  selection.
- `def-complete-metric-baire-principle-over-zf`: pass. Meagreness is supplied by
  one explicit omega-family; no invalid countable selection of decompositions is
  used. The empty-space assertions are valid.
- `lem-open-dense-and-closed-nowhere-dense-baire-forms-are-equivalent-in-zf`:
  pass. Complements are relative to $X$, closure replacement is canonical from
  one witness, and the four forms—including the empty-space case—follow in ZF.
- `thm-serial-dependent-choice-implies-complete-metric-baire-over-zf`: pass.
  The centre/radius state relation is nonempty and serial, uses prescribed-start
  DC once, has nested closed balls and radii tending to zero, and its direct
  tail/triangle argument puts the limit in each closed ball. (The convergence
  tail can of course be taken beyond both the fixed $n$ and its convergence
  threshold.)
- `lem-discrete-sequence-spaces-are-complete-in-zf`: pass. Strict ball thresholds,
  cylinders, ultrametric inequality, least stabilization indices, and the
  finite deterministic maximum are all type-correct and choice-free.
- `lem-serial-relation-successor-sets-are-open-dense`: pass. The cylinder
  extension places a successor at a fresh coordinate and proves density one
  cylinder and one $n$ at a time; it does not smuggle in a countable choice
  function.
- `thm-complete-metric-baire-principle-implies-dependent-choice-over-zf`: pass
  after the repair. The dense intersection is nonempty because $A^\omega$ is
  nonempty; Separation and the natural-number least-element principle define
  $q$, and recursion yields an $R$-chain without an increasing-index premise.
- `thm-dependent-choice-is-equivalent-to-complete-metric-baire-over-zf`: pass.
  It combines precisely the two verified implications and makes no independence
  or DMC assertion.
- `ex-blair-sequence-space-for-a-serial-relation`: pass. The prefix example,
  distance $1/4$, all successor witnesses, non-adjacent failure, and least-index
  extraction $0,4,5,6,\ldots$ calculate correctly.

Page verdicts: the assigned A page is mathematically sufficient after the local
repair; its title and summary match its nine items. The B page is mathematically
sufficient; its title and summary match its single worked example. No B-page
body was edited.

## Checks and blockers

- Ran reflow on the changed theorem: unchanged.
- Ran focused precheck on the changed theorem: pass (1 checked, 0 failing).
- Ran strict batch proof-contract check: pass (10/10, 0 errors/warnings).
- Ran changed-item rendercheck: pass.
- Ran scoped batch content policy: pass (10 items, 0 errors/warnings).
- Ran `git diff --check`: pass.

No uneditable defect remains. No batch-15 blocker remains. The active run has
substantial unrelated shared-worktree changes; none was edited or assessed here.
