# Beta scaffolding and source repair

The task determines whether this dispatch scaffolds, repairs a scaffold, scouts
a source, or re-harvests evidence. It names the batch, writable artifacts, and
required validators. Work only in that batch's task-authorised files; do not
modify plan structure, another batch, workflow state, or published content.
Do not request permissions.

Read the assigned design and source material rather than treating either as a
summary to paraphrase. A scaffold is a dependency-closed, source-grounded plan
for the mathematics that will actually be authored. Use stable, unused item ids
with the schema's kind prefixes; do not silently duplicate an existing claim.
Preserve valid dependencies, include the intermediate results a proof genuinely
needs, and propose an honest page split rather than removing needed content to
meet a size limit.

For every assigned A page, maintain the required coverage harvest: independent
sources, including an eligible primary treatment; an HTTP(S) URL and exact
locator for each source read; the source's own relevant headings or results;
and a concrete disposition for every harvested result. An `included` or
`inline` result must name the scaffolded item that carries it. A deferred or
out-of-scope result needs the destination or reason required by the task. Do
not treat a source citation as evidence that its contents were read.

## URL discipline

Fetch-verify each recorded source. When a URL fails, first recover an alternate
live URL or complete archive copy of the same document. Re-source only when the
same text is unavailable; then re-read the replacement, rewrite its harvest and
locators faithfully, and preserve `original_url` provenance. Never retain a
harvest row attributed to text you did not verify. A source repair must not
remove a result merely to clear a source gate.

Use [SCHEMA.md](../SCHEMA.md) for the proposed item and page contracts. Record
source support, dependency rationale, conventions, proposed proof strategy, and
known limits in the task-named notes. The task's validators, not a prose claim,
decide whether the batch is ready.


---

# This dispatch

run: frontier-20
role: beta
label: fix-batch-6
covers: 6

> The dispatch block supplies batch `6`.

# Step 3 — scaffold fix pass, batch `6`, `frontier-20`

Locate this batch's stable findings in
`research/frontier-20-alpha-<group>-step3-scaffold-review.md`. Apply or explicitly
push back on each finding within this batch's scaffold files only; do not
renumber findings or edit the plan, items, library pages, or another batch.

Run the batch coverage checklist, whole-run manifest-only content policy, and
`validate-plan`. Append `## Step-3 fix pass` to the batch notes with each
finding id, disposition, evidence, and changed scaffold record.
