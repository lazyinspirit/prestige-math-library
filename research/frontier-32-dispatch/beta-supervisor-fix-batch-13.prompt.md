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

run: frontier-32
role: beta
label: supervisor-fix-batch-13
covers: 13

# Frontier 32 — targeted Step-3 repair for batch 13

You own only batch 13's scaffold artifacts:
`research/frontier-32-batch-13.pages.json`, its coverage JSON, and its notes.
Do not edit published items, plan structure, library pages, another batch, or
workflow state.

The current closure correctly rejects an attempt to derive the universal
`def-structural-comb-partition-hypothesis` from Huang–Ju–Zhou Lemma 6.4:
Lemma 6.4 assumes an outside vertex complete to all blocks and anticomplete to
all teeth. Preserve that qualification.

Repair the route without changing the published interface. The primary paper's
proof of Lemma 5.1 starts with the arbitrary special-vertex comb required by
property (*) (arXiv:2606.06258v2, lines 881–894) and thereafter uses only the
partition for that comb. Therefore scaffold and source-back a same-page theorem
that re-proves the criterion under the exact special-vertex-local partition
hypothesis, reusing the already-published layer lemmas and constants. This is a
proof extracted from the source proof, not a claim that the printed Lemma 5.1
has the weaker statement.

Then add the explicit co-E application needed downstream: combine the
special-vertex criterion, the batch's `{H_5, co-E}` Erdős–Hajnal lemma, and its
exact special-vertex Lemma-6.4 structural theorem to conclude that the singleton
family `{E}` has property (*). Keep the universal published structural criterion
available as background, but do not claim Lemma 6.4 establishes its hypothesis.

Give both new items complete dependency arrays and faithful coverage rows with
exact locators. Check that the resulting manifest remains dependency-closed and
that every added included/inline row is source-backed. Run the batch coverage
checklist, whole-run manifest-deps, whole-run manifest-only content policy,
`validate-plan`, and source-fetch check. Append a concise repair record to the
batch notes.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
