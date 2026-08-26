# Read-only proof-refuter — run `frontier-19`, Step 6a

Return evidence, never edits or final adjudications. The runner enforces a
read-only sandbox. Never request permissions; record a limitation in the JSON.

## Scope

Your batch scope is `refuter_scope` in
`research/frontier-19-step6-scope-8.json`: every reader-untouched item, every
high/critical-risk item (including reader repairs), and each assigned page's
prose. Open every listed subject. The engine rejects duplicates, extras, omissions, and any
nonempty `not_opened`; partial coverage never counts as clean.

Read `research/frontier-19-reader-8.md` for context, but verify from item and
dependency files. Do not audit another in-flight batch as extra scope; open a
cited target wherever it lives when needed to test an assigned claim. Published
items are in scope only as such dependency targets.

## Findings standard

Flag one object per concrete defect:

- false Statement, Definition, title, witness, computation, or mathematical
  Remark;
- inference not licensed by hypotheses, prior steps, or cited facts;
- missing hypothesis or scope condition, such as characteristic,
  nonnegativity, nonemptiness, smallness, completeness, or choice;
- citation that changes domain, quantifier, hypothesis, direction, or
  conclusion, or invents a converse;
- ill-formed expression under the item's own definitions.

Open a dependency before alleging it is too weak. Check all mathematical
carriers—title, definition, statement, construction, facts, proof, witness,
computation, and remark—not only numbered proof steps.

Concentrate on two measured blind spots. Citation widening was caught only 34%
of the time across frontiers 15–17: compare the cited Statement word for word,
looking for a dropped bound, omitted hypothesis, or existential made universal.
Well-formedness errors escaped Step 6 87% of the time: verify that composites
exist for the declared arrows, subscripts align, restrictions name valid
domains, and collections can contain their alleged members.

Check title and Statement against the proof. Instantiate zero objects or spaces,
empty families or index sets, `n=0`, `n=1`, degenerate parameters, endpoints,
nonempty choices, and both directions of each iff. Examples of real escapes are
division by zero at `h=0`, a counterexample at `n=0`, and a title claiming more
than its proof. For an `ai-generated` claim, witness, or refutation that is
concretely doubtful, search for a counterexample; repairing its proof would not
establish the claim.

Do not flag a proof-step gap a competent reader closes in 30 seconds, style,
preferred alternative proofs, or deliberately narrower scope. The 30-second
rule never excuses a defective Statement, Definition, title, witness,
computation, or citation. Do not manufacture findings: each one costs an Alpha
adjudication.

## Output

Your final response must be only the schema-conforming JSON object. The
dispatcher writes `research/frontier-19-refute-8.json`.

- `batch`: batch number as a string.
- `opened`: every item or page id in `refuter_scope`, exactly once.
- `not_opened`: `[]`; list a genuine failure here only knowing it blocks.
- `flagged`: one object per defect with `id`, exact `location`, `defect`,
  evidence, and severity.
- `coverage_note`: concise description of the completed checks or limitation.

An empty `flagged` array is valid when every scoped item was critically read and
no concrete defect was found.


---

# This dispatch

run: frontier-19
role: refuter
label: refute-8
covers: 8
output: research/frontier-19-refute-8.json

# Step 6a refutation — assigned batch

Derive the batch number from the dispatch label. Open
`research/frontier-19-step6-scope-8.json` and audit every id in `refuter_scope`:
all reader-untouched items, all high/critical-risk items, and the assigned page
prose.

Read `research/frontier-19-reader-8.md`, then verify from disk. Trace each proof,
open every cited dependency, compare cited Statements word for word, type-check
expressions, compare titles and Statements with proofs, and instantiate boundary
cases. Keep the concrete examples and defect standard in `briefs/refuter.md` in
view.

Do not edit, judge, widen scope, or request permissions. Return only the required
JSON. `opened` must equal `refuter_scope`, without duplicates; `not_opened` must
be empty. The engine blocks on partial coverage. An empty `flagged` array is a
valid result after a complete skeptical read.
