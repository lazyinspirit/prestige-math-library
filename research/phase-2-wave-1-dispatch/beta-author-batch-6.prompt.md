# Step 5 authoring

Maintain your consumer batch's dependency input under
`briefs/tasks/frontier-dependency-ledger.md` after dependency edits.

Complete every assigned item and page. Edit only your batch's draft content,
contracts, notes, and consumer-batch dependency input. Keep IDs stable; write pages at
`library/<page.category>/<page.id>.md`. Do not change plans, workflow state,
published content, or other batches; do not judge, stamp, or request permissions.
If completing a proof needs a scope change, record the prerequisite and proposed
change for the owning Alpha. Earlier scaffolding instructions do not authorize
Step 5 to restructure the plan or drop promised content.

Read `SCHEMA.md`. Keep kind prefixes, dependencies, provenance, sources,
generation fields, proof strategy, and verification accurate. Remove stale judge
stamps after material edits. Generated statements cannot be dependency targets;
use the schema's fields for well-definedness, forward references, and results
recorded without proof. Follow its proof layout and math delimiters; diagrams
must supplement the written argument.

## Write the argument

Read the assigned design, Step 3 decisions, source passages, and current
dependency statements. For every piece of mathematics that is unfamiliar,
search the web and verify it against authoritative sources: original papers,
author-hosted books or notes, or official references. Record exact locators.

A scaffold's strategy describes work to do; it is not a proof. Derive each
conclusion, checking hypotheses, quantifiers, types, and both iff directions.
Scripts may format completed arguments, but must not turn strategy sentences
into proof steps or generate generic proofs and contracts across items.

Examples must display an instance and its calculation. Counterexamples must
display a witness, verify the hypotheses, and show the failed conclusion.

Mathematical examples below illustrate reasoning, not the full item schema:

- Invalid: "Construct the inverse; verify its properties; therefore bijective."
  Valid: "For f(x)=2x on R, set g(y)=y/2. Then g(f(x))=x and f(g(y))=y
  for every real x,y, so g is a two-sided inverse."
- Counterexample to "Every continuous real function is bounded":
  "f(x)=x is continuous on R. For each M>0, x=M+1 gives |f(x)|>M."
- Citation check: a definition of an inverse does not prove one exists.
  Construct it, or cite an existence theorem and verify its hypotheses.

Cite each fact at the step using it. Preserve the source's exact claim; explain
why its hypotheses hold and how its conclusion yields your step. A matching
quotation alone does not justify an inference.

## Record evidence

Write contracts from completed proofs. Map every step once, with its actual
claim and inputs; map cited facts to exact source excerpts and their uses.
For the inverse example, a row records "g(f(x))=x", inputs "f(x)=2x,
g(y)=y/2, x in R", and the step performing the substitution—not "verify inverse".

Address empty, zero, one, degenerate, endpoints, nonempty-choice, iff-forward,
and iff-reverse. `checked` names the actual supporting step or statement;
`not_applicable` gives an item-specific reason. Example: "zero: g(f(0))=0
by step 1.1"; "endpoints: the domain R has no endpoints."

Structural checks and finite tests do not prove mathematics. If an argument
fails, report the exact gap and proposed remedy; never invent evidence or mark
unfinished reasoning complete.


---

# This dispatch

run: phase-2-wave-1
role: beta
label: author-batch-6
covers: 6
output: research/phase-2-wave-1-batch-6.pages.json

# Author batch `6` — `phase-2-wave-1`

Read these `research/` files:

- `phase-2-wave-1-batch-6.pages.json`, `phase-2-wave-1-batch-6.notes.md`, and
  `phase-2-wave-1-batch-6.coverage.json`;
- `phase-2-wave-1-beta-6.task.md` and its assigned design sections;
- `phase-2-wave-1-alpha-groups.json`: find your group by `covers`, then read
  `phase-2-wave-1-alpha-GROUP-step3-verdicts.json` and
  `phase-2-wave-1-alpha-GROUP-step3-scaffold-review.md` using that group's label.

Report missing inputs; do not substitute another run's artifacts. Preserve and
complete `research/phase-2-wave-1-batch-6.proof-contracts.json`, creating it if absent.
Use `tools/proof-contract.mjs` for its format, not another batch's mathematics.

Run these checks and fix owned failures:

- `node tools/tsx-run.mjs tools/precheck.mts` followed by every explicit
  `items/ID.md` path in your manifest; apply canonical repairs and rerun;
- `node tools/validate-plan.mjs`;
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-6.pages.json`;
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-6.proof-contracts.json --strict`.

Update `## Step-5 authoring` in the batch notes. Report separately: completed
item/page IDs, checks actually run and their results, provenance decisions,
and unresolved mathematical or scope obligations. File existence and passing
format checks alone do not establish completion. Preserve promised scope and
report any proposed narrowing or removal for Alpha review.


## Context continuity

Read complete relevant source passages in bounded chunks; truncated output is incomplete
evidence. Prefer current owned files; avoid historical runs and dispatch logs.
After each item, checkpoint in the assigned notes: IDs, exact claim/conventions,
source locators, dependencies, decisions, checks, open gaps, and next action.
Context may compact mid-proof. Resume by rereading those notes, the current item,
dependency statements, and source passages. Never infer a missing hypothesis from
a summary. Preserve independent reviews; report unrecoverable evidence as a blocker.
Use only task-authorized notes; do not create transcripts.
