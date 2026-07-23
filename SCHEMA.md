# SCHEMA.md — content schema (v0 DRAFT, not yet frozen)

Normative for everything under `items/` and `library/`. The renderer, the
internal harness, and the audit checklist all read this contract. Once frozen,
changes require a version bump here and a migration note.

## 1. Layout: global item pool + composed pages

```
items/<id>.md                       # one atomic item per file (the content)
library/<cat>/[<subcat>/]<page>.md  # page composition files (the reading surface)
library/.../_category.md            # category metadata
```

Items live in ONE flat global pool, NOT under categories — an item (e.g.
`def-cauchy-sequence`) may be referenced by pages in several categories, and
cross-page wikilinks need a single canonical home. Taxonomy is a property of
PAGES (their directory), never of items. Items are individually addressable at
`/library/item/<id>`; pages at `/library/<cat>/.../<page>`.

## 2. Stable IDs

`<prefix>-<kebab-slug>`, which is also the filename. Prefixes (closed set):

| prefix | kind            | prefix | kind             |
|--------|-----------------|--------|------------------|
| `def`  | definition      | `ex`   | example          |
| `thm`  | theorem         | `cex`  | counterexample   |
| `lem`  | lemma           | `fs`   | false statement  |
| `prop` | proposition     | `rem`  | remark           |
| `cor`  | corollary       |        |                  |

Rules: an id is IMMUTABLE once merged to `main`. Renaming = keep the file under
the old id and add the new name to `aliases`, or create a new item and list the
old id in the new item's `aliases`; wikilinks resolve through aliases. Never
reuse a retired id.

## 3. Item frontmatter

```yaml
---
id: thm-reals-cauchy-complete        # must equal filename
kind: theorem                        # one of the kinds above
title: "Completeness of $\\mathbb{R}$ (Cauchy criterion)"   # inline LaTeX ok
status: draft                        # draft | published  (THE publish gate)
origin: session                      # pipeline | session
deps: [def-cauchy-sequence, lem-triangle-inequality]
  # every item this item's statement OR proof cites (single list; drives the
  # prerequisite closure and the flowchart). Must reference existing ids.
aliases: []                          # alternate wikilink names / retired ids
landmark: false                      # true = show as a node in the page's
                                     #   birds-eye flowchart (§6). Reserve for
                                     #   MAIN theorems, key definitions, key
                                     #   lemmas; routine items stay false and are
                                     #   elided (their edges pass through).
verification:
  precheck: pass                     # pass | n/a  (n/a only for kinds with no
                                     #   phase-stratified body: def, ex, rem)
  judge:                             # omit only if not yet judged
    model: openai/gpt-5.4            # session items: NEVER a Claude model;
                                     #   pipeline items: production lineup
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25                # owner/Fable audit date; REQUIRED for published
sources:
  scraped: []                        # [{url, title, license}] — extraction sources
  references:                        # standard references (NOT scraped; labeled so)
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
      # EVERY source — scraped or reference — carries a WORKING url
      # (verified to return HTTP 200 before it enters frontmatter)
pipeline_run: null                   # origin: pipeline only — run/manifest id
proof_strategy: direct               # REQUIRED for kinds with a phase-format body:
                                     #   direct|contradiction|contrapositive|induction|
                                     #   cases|constructive — the strategy argument
                                     #   passed to precheck for mechanical re-verification
---
```

## 4. Item body, by kind

Markdown + LaTeX (`$…$` / `$$…$$`). Wikilinks `[[id]]` or `[[id|display text]]`
anywhere in prose; every wikilink must resolve to an item id or alias.

- `def`: `## Definition` (+ optional `## Remarks`)
- `thm` / `lem` / `prop` / `cor`: THREE sections, in order —
  `## Statement`, `## Facts & Assumptions`, `## Proof` (phase format, §5)
- `ex`: `## Example` (+ optional Facts & Assumptions / Verification per §5)
- `cex`: `## Statement refuted`, then Facts & Assumptions + `## Counterexample`
  (phase format; machine-verified flag may ride frontmatter as
  `cx_machine_verified: true`)
- `fs`: `## Statement` (the FALSE claim, clearly banner-rendered), then
  Facts & Assumptions + `## Refutation` (phase format)
- `rem`: free prose

Layout rules for proof-bearing bodies (mechanical, renderer-enforced look):
- **`## Facts & Assumptions`**: an optional `**Given:** …` context paragraph,
  then ONE fact per paragraph, each starting with its label (`[A1]`, `[L1]`, …).
- **`## Proof`**: the FIRST paragraph is the technique line
  `**Proof technique:** <strategy>.` (mirrors `proof_strategy` frontmatter);
  then ONE numbered step per paragraph, each ending with its justification tags.
- Adjacent paragraphs are separated by exactly one blank line, everywhere.

## 5. Proof format (phase-stratified)

The normative checker is `worker/src/precheck.ts` in the app repo (byte-frozen
parity port); prose summary: numbered steps, each line ending in a bracket
justification tag from the closed vocabulary (`[given]`, `[F#]/[A#]/[L#]/[C#]`
citations, `[algebra]`, `[assume-contra]`, `[assume-hyp]`, `[assume-case …]`,
`[ih]`, `[base]`, `[construct]`, `[choose]`, `[suffices: …]`,
`[contrapositive-reduce]`, `[cases]`/`[cases-exhaustive]`,
`[discharge-contradiction|contrapositive|induction|construct]`, strategy tags),
no forward references, strategy-specific required tags (contradiction /
contrapositive / induction / cases / constructive), QED-final. `## Scratch`
(exploratory work) is optional and precedes `## Facts & Assumptions`; it is
rendered collapsed. EVERY phase-format body must pass precheck before `published`.

## 6. Page composition files

```yaml
---
page: construction-of-r-via-cauchy-sequences   # must equal filename
title: "Construction of the Real Numbers via Cauchy Sequences"
status: draft                        # page-level gate, independent of items
items: [def-cauchy-sequence, lem-…, thm-…]   # Section 4, in reading order
examples: [ex-…, cex-…, fs-…]                # Section 5, in reading order
---
(body = Section 2, the authored summary: background + what we prove. The ONLY
hand-written prose on a page.)
```

Rendered page = fixed 5 sections: (1) Prerequisites — MECHANICAL transitive
closure of `deps` over listed items, minus items already on the page;
(2) Summary — the body above; (3) Flowchart — MECHANICAL birds-eye Mermaid graph:
only `landmark: true` items are nodes, edges = transitive reduction of
nearest-landmark-ancestor over the full dep graph (routine items elided),
nodes coloured by kind; (4) items in order, full bodies; (5) examples list.
Page badge (origin × verification) is DERIVED from item frontmatter per
README; a page renders publicly only if page `status: published` AND every
listed item is `published` (a draft item on a published page is a broken page
— the renderer refuses, listing offenders, rather than skipping silently).

## 7. Mechanical publish checklist (enforced by CI/renderer, not by memory)

`status: published` on an item is valid only if: id == filename; kind/prefix
match; all `deps` + wikilinks resolve; precheck `pass` (or legitimately `n/a`);
`verification.audited` set; every `sources.scraped` entry has url+license; every `sources.references` entry has title + a working url;
share-alike sources (CC BY-SA / GFDL) present ⇒ attribution renders. A repo
lint script (to be written alongside the renderer) checks all of this and is
the pre-merge gate.
