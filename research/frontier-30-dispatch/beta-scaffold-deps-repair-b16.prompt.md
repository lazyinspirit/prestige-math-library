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
Every manifest item object must carry an explicit `deps` array; write `deps: []`
when the item has no planned dependencies.

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

run: frontier-30
role: beta
label: scaffold-deps-repair-b16
covers: 16

# Stage-1 scaffold dependency repair — batch 16, `frontier-30`

The Stage-1 whole-run manifest-only content-policy gate is blocked by 34
`batch-dependency-missing` findings, all owned by batch 16. Repair the scaffold
without weakening its mathematics.

Work only in:

- `research/frontier-30-batch-16.pages.json`
- `research/frontier-30-batch-16.coverage.json`
- `research/frontier-30-batch-16.notes.md`

Read the controlling RL-1 design, the batch notes and sources, and the actual
published item corpus. Run this command to obtain the complete current finding
set:

```bash
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json
```

For every missing dependency:

1. Search `items/` and aliases for the actual existing item that supplies the
   same mathematical interface. Replace a proposed id only after checking the
   existing item's statement, not merely a similar title.
2. If no existing item supplies the needed fact, keep the proof route honest:
   add an appropriately scoped, source-backed local intermediate item to the
   batch, or restructure the dependent item so the prerequisite is proved
   locally. Do not simply delete a genuine dependency.
3. Do not mint an id already planned for another page, depend on an unpublished
   planned item, edit `research/plan-spec.json`, or modify another batch.
4. Keep every manifest item’s explicit `deps` array and preserve the A/B page
   size and leaf constraints.
5. Update batch-16 coverage for every added scaffold item, with exact source
   backing and locators. Append a `## Stage-1 dependency repair` section to the
   notes recording each replacement or local proof-boundary decision.

Before finishing, all of these must pass:

```bash
node tools/coverage-checklist.mjs research/frontier-30-batch-16.coverage.json --require-destination
node tools/manifest-deps.mjs research/frontier-30-batch-*.pages.json
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
```

Do not edit workflow state, item files, library pages, or the plan. Do not ask
for permissions.
