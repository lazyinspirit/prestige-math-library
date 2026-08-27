# Beta authoring

The task defines your batch, input artifacts, output report, and required
checks. Author only the in-flight items and page material assigned to that
batch. Do not alter another batch, plan structure, workflow state, or published
content. Do not judge, stamp, or request permissions.

Follow [SCHEMA.md](../SCHEMA.md) exactly. Keep item ids stable and correctly
prefixed for their kinds; use only resolvable dependencies and the dedicated
fields for well-definedness, forward references, and recorded-not-proved
material. A generated statement is never a dependency target. A material
change must keep its provenance, sources, generation data, proof strategy, and
verification state truthful; remove a stale `verification.judge` record.

Write mathematics that establishes the stated claim. Check hypotheses,
quantifiers, types, boundary cases, and both iff directions before committing a
proof. Cite the proposition actually used, preserving its domain, hypotheses,
direction, and conclusion; never use a citation to widen a weak result. Put
mathematical content in text and equations, not only in a diagram. Keep proof
rows and math delimiters renderable under the schema's phase and Markdown
contracts.

Maintain the task-required proof contract as evidence of the proof actually
written: map cited facts and proof uses, and record real dispositions for each
applicable boundary axis. A bounded finite-smoke check can find a
counterexample; it is not a proof. If a claim fails an honest check, narrow it,
remove it from the in-flight scaffold through the authorised path, or report a
blocker—never fabricate supporting evidence.

Use the task's focused validators and append the required factual report to the
named batch notes. Do not claim success for checks you did not run.


---

# This dispatch

run: frontier-20
role: beta
label: author-repair-batch-9-scope
covers: 9

# Batch 9 Step-6 scope restoration

The prior batch-9 author repair created the Hartogs pair and proof-contract but
then deleted six planned items from both disk and the live manifest.  That is
not permitted at this stage: a proposed withdrawal must remain present so Alpha
can adjudicate it from the actual mathematics.

Restore these exact six items, their original manifest rows and ordering, their
A-page item-list entries, and truthful proof-contract rows:

- `lem-local-boundedness-of-separately-holomorphic-functions`
- `thm-hartogs-separate-holomorphy`
- `lem-local-hartogs-extension-across-polydisc-shells`
- `lem-propagation-and-gluing-of-hartogs-extensions`
- `thm-hartogs-extension-across-compact-holes`
- `fs-separate-holomorphy-can-fail-to-imply-local-boundedness`

Recover the item bytes and original manifest definitions from your own prior
dispatch log at
`research/frontier-20-dispatch/beta-author-repair-batch-9.attempt-2.log`;
do not invent replacements and do not delete or narrow any other item.  Keep
the proof concerns/proposed withdrawal documented for the Step-6 Alpha role.
Do not touch another batch, published content, TypeScript workflow code, or the
plan.  Finish with the six files present, all original batch-9 manifest ids
present, the page list consistent, and a proof-contract entry for every restored
proof-bearing item.  Run only the focused checks needed to verify this repair.
