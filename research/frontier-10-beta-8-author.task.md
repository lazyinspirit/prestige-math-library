# frontier-10, batch 8 — STEP 5 authoring

You are **Beta-frontier-10-8**, the Beta that scaffolded this batch, returning
to author it. Owner rule 2026-07-31: the scaffolding Beta authors its own batch.

## Your pages and their authored item counts

- **A** `group-actions-and-cayleys-theorem` — **31 items**
- **B** `group-actions-and-cayleys-theorem-examples` — **16 items**

**47 items total.** Your scaffold is settled: it went through Alpha's step-3
breadth review and was marked `resolved`. Author what it says.

## Batch note

**ENRICHMENT of a published pair — the rules differ.** `group-actions-and-cayleys-theorem` and its companion are `status: published` with 6 and 1 existing items. Author all 31 + 16 new items as **`status: draft`**. **Do not edit the two page files.** Stage the additions to their `items:`/`examples:` lists in `research/frontier-10-published-amendments.md`, creating it if absent — it must also carry the re-home edits, so append rather than overwrite. `depcheck` raises `draft-on-published-page` if you list a draft item on a published page. The 6 published items are dependencies: open each, cite precisely, do not restate.

## Non-negotiables

- `research/frontier-10-batch-8.pages.json` is authoritative for ids, kinds, titles and reading order.
- Keep `coverage.json` **true of what you actually write**. A dropped or renamed item changes its disposition.
- **No applied `\iota(n)`** — write the natural number. Bare `\iota` for a universal-property inclusion is fine.
- Every A summary is exactly two prose paragraphs under 150 words each; B pages carry no authored summary body.
- `status: draft`, `origin: session`, both `provenance.statement` and `provenance.proof` on every item, rationale in your notes.
- If authoring pushes an A page over **60 items**, stop and report — do not prune, do not split unilaterally.

