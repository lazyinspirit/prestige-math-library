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
  # every item this item's statement OR proof LOGICALLY DEPENDS ON (single list;
  # drives the prerequisite closure and the flowchart). Must reference existing
  # ids. THIS GRAPH MUST BE ACYCLIC — see §7.
justified_by: []                     # OPTIONAL, definitions only in practice.
  # Items that discharge this item's well-definedness obligations (WORKFLOW.md
  # "Definition justification"). These point FORWARD: the discharging lemma is
  # about the object this definition introduces, so it depends on this item.
  # Listing such a lemma in `deps` creates a spurious cycle; list it here.
  # Enforced: every `justified_by` target must transitively depend on this item,
  # otherwise it is a genuine prerequisite and belongs in `deps`.
proved_here: true                    # OPTIONAL, defaults to true. Set FALSE when
  # this item RECORDS a result that this library does NOT prove, because the
  # track that would prove it has not been built (DEFERRED.md). Such an item:
  #   * is a `rem-` (it states, it does not establish), with `verification.
  #     precheck: n/a` and NO `## Proof` section;
  #   * MUST carry a real citation in `sources.references`;
  #   * says in its body what would prove it and which track that belongs to.
  # Owner requirement 2026-07-25: these, and everything depending on them, are
  # visibly different from EVERYTHING else INCLUDING ordinary forward references.
  # Three ranked tiers, each distinct in colour, underline and glyph:
  #     ordinary citation   indigo,  solid underline,  no glyph
  #     forward reference   sky,     dashed underline, ↗
  #     NOT PROVED HERE     fuchsia, dotted underline, ‡    <- outranks the others
  # Inside a proof, any fact carrying such a dependency and EVERY step tag citing
  # that fact are marked ‡ too, and an always-visible note reminds the reader the
  # dependency is not developed in this library. Enforced by tools/extcheck.mjs;
  # rendered by web/lib/library-external.ts.
external_refs: []                    # OPTIONAL. Recorded-not-proved items (i.e.
  # items with `proved_here: false`) that this item MENTIONS without logically
  # depending on them. Declaring one here is what makes THIS item carry the ‡
  # marker and the reminder note.
  # A MENTION DOES NOT PROPAGATE (owner decision 2026-07-25, taken on a
  # measurement). A `deps` edge to an unproved result does propagate, because a
  # consequence of it really does rest on unproved material. A mention does not:
  # propagating one from `def-axiom-of-choice` marked 26 items instead of 13,
  # including `thm-zorn`, `lem-finite-choice` and `thm-well-ordering-theorem`,
  # which are proved in full here and rest on Cohen for nothing. Their chip would
  # have said something false. The reader is warned at the point of contact
  # regardless, since a LINK is marked from its target's own flag.
  # It is a SEPARATE field from `deps` on purpose. `deps` means "the statement or
  # proof logically depends on this", and it is the graph read by depcheck's
  # acyclicity check, fwdcheck's page ordering, the page prerequisite closure and
  # the flowchart. The definition of the Axiom of Choice does not depend on
  # Cohen's independence theorem; it mentions it. Recording the mention in `deps`
  # would inject a false edge into all four consumers at once.
  # Enforced by tools/extcheck.mjs: every entry must name an existing item, that
  # item must have `proved_here: false`, it may not also be in `deps` (a logical
  # dependency is already the stronger seed), and the body must actually link it.
forward_refs: []                     # OPTIONAL. Items developed LATER in the
  # library that this item points at for orientation ("this is taken up in ...").
  # Owner decision 2026-07-25: forward references are allowed, on three
  # conditions, all mechanically enforced by `tools/fwdcheck.mjs`:
  #   1. VISIBLE. Declaring an id here is what makes the renderer mark the link
  #      as a forward reference, distinct from every ordinary citation.
  #   2. REMEMBERED. `node tools/fwdcheck.mjs --ledger` regenerates
  #      research/forward-refs.md, the standing list of open forward references
  #      and the page that will close each one.
  #   3. CLOSED, AND NEVER CIRCULAR. The target must be planned on a page
  #      STRICTLY LATER in plan order, so it is guaranteed to be authored, and
  #      the forward edge points the opposite way to every `deps` edge. That is
  #      what keeps the union acyclic; `stack-cycle` re-checks it on real content.
  # A forward reference is ORIENTATION ONLY. It may appear in Remarks and in page
  # prose, and it may NEVER appear in Statement, Statement refuted, or Facts &
  # Assumptions: there it would be a genuine prerequisite pointing forward, which
  # is precisely circular reasoning. Enforced as `forward-load-bearing`.
  # An id may never be in both `forward_refs` and `deps`/`justified_by`.
  # Links to items on the SAME page are ordinary links, not forward references.
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
    model: deepseek/deepseek-v4-flash # session items: NEVER a Claude model;
                                     #   pipeline items: production lineup, and
                                     #   NEVER glm or deepseek (both are in the
                                     #   pipeline generator lineup)
    verdict: pass
    date: 2026-07-25
    # RECORD ONLY A VERDICT THE JUDGE ACTUALLY GAVE, for the text now on disk.
    # A rejection is NOT recorded here in any form: it is evidence for the
    # auditor, not a verdict (WORKFLOW.md §0). An item cleared by the auditor
    # over a verified judge false positive is recorded `audited` ALONE.
    # If an item is materially rewritten after being judged, DELETE this block
    # rather than leave it: an absent block honestly says "not yet judged",
    # whereas a stale one claims a pass on text the judge never saw. 27 blocks
    # were removed on exactly this ground in the 2026-07-25 rebuild.
    # "MATERIALLY REWRITTEN" INCLUDES A CORRECTION IN REMARKS. The judge reads
    # the whole item, a Remark is live prose held to the Statement standard, and
    # a `rem-` item IS its prose. So if the judge passed text that has since been
    # corrected -- anywhere in the item -- the block goes. The test is not "which
    # section changed" but "would the judge have seen something different".
    # Pure typography, or adding a citation that changes no claim, does not count.
  verified:                          # OPTIONAL. The PAGE VERIFIER's adjudication
    model: claude-opus-5             #   (WORKFLOW.md §0): one Opus subagent per
    verdict: certify                 #   page, reading its page plus the FULL TEXT
    date: 2026-07-25                 #   of every item that page cites.
    scope: page                      #   what context the verifier actually had
    # Deliberately a separate block from `judge`. The verifier is a Claude-family
    # model, so it does NOT satisfy the cross-family requirement and can never
    # substitute for a judge verdict; and `certify` here is a model's opinion,
    # never the publish gate. Only `audited` is the gate, and only the owner
    # sets it.
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

### 5.1 Commutative diagrams (diagram chasing)

Proofs that reason about a commutative diagram carry two co-located pieces, a
deliberate dual source: the cells drive verification, the tikzcd drives the
picture. Keep them consistent.

- **Verification** lives in `## Facts & Assumptions` as a `**Diagram:**`
  paragraph: named arrows one per line (e.g. `f\colon A \to B`), then one
  numbered cell per line as a composite equation with a justification from the
  closed grammar: `given | [F#/A#/L#] | def <term> | naturality of <nt> at
  <morphism> | axiom <name> at (<objects>) | universal property of <object> |
  functor <F> applied to [C#|step p.q]`. A cell reads
  `[C1] h \circ f = k \circ g (given)`. Steps cite cells with `[C#]`; every cited
  `[C#]` must be DECLARED, and "the diagram commutes" / "by the diagram" /
  "a diagram chase shows" is never a valid justification (each commutativity
  claim is a specific composite equation). The precheck cell gate and the judge's
  diagram rules (auto-activated when a `**Diagram:**` block is present) enforce this.
- **Rendering** lives in a prose section (e.g. `## Statement`) as a fenced
  ` ```tikzcd ` block. The renderer compiles it to an inline SVG on the server
  (tikz-cd via node-tikzjax, cached). The block may hold a bare cd body or a full
  `\begin{tikzcd}...\end{tikzcd}`.

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

Rendered page = fixed 5 sections: (1) Prerequisites — MECHANICAL, but PAGE-level:
the other library pages that prove any item in this page's transitive `deps`
closure (over listed items, minus items already on the page), rendered as direct
links to those pages, not to individual items. A page whose closure is empty, or
all of whose prerequisite items live on this page, shows "None"; prerequisite
items that belong to no page are not surfaced here (they should be given a home
page). (2) Summary — the body above; (3) Flowchart — MECHANICAL birds-eye Mermaid graph:
only `landmark: true` items are nodes, edges = transitive reduction of
nearest-landmark-ancestor over the full dep graph (routine items elided),
nodes coloured by kind; (4) items in order, full bodies; (5) examples list.
Page badge (origin × verification) is DERIVED from item frontmatter per
README; a page renders publicly only if page `status: published` AND every
listed item is `published` (a draft item on a published page is a broken page
— the renderer refuses, listing offenders, rather than skipping silently).

## 7. Acyclicity (the no-circular-reasoning guarantee)

Run `node tools/depcheck.mjs` from the repo root. It is the mechanical gate for
everything in this section and for the reference/hygiene half of §8.

The `deps` graph over all of `items/` MUST be acyclic, and so must the induced
page graph (page P points at page Q when an item homed on P depends on an item
homed on Q). `justified_by` edges are excluded from both, because they point
forward by construction; `depcheck.mjs` separately verifies that each one really
does point forward, so the exclusion cannot conceal a real cycle.

Pages are read in a single global order. An item may cite only items on its own
page (earlier in the `items` list) or on a strictly earlier page. Examples pages
are leaves: nothing depends on an item that lives only on an examples page, which
is what lets an examples page cite forward when the classical form of an example
needs machinery introduced later.

## 8. Mechanical publish checklist (enforced by CI/renderer, not by memory)

`status: published` on an item is valid only if: id == filename; kind/prefix
match; all `deps` + wikilinks resolve; precheck `pass` (or legitimately `n/a`);
`verification.audited` set; every `sources.scraped` entry has url+license; every `sources.references` entry has title + a working url;
share-alike sources (CC BY-SA / GFDL) present ⇒ attribution renders.

The gate is five tools, run from the repo root; all five must be clean before
anything is published:

```
npx --prefix /root/Projects/prestige-intelligence/worker tsx tools/precheck.mts
node tools/depcheck.mjs      # deps resolve, graph acyclic, no draft on a published page
node tools/fwdcheck.mjs      # forward refs declared, point forward, closed, off the spine
node tools/extcheck.mjs      # recorded-not-proved items well formed; ‡ consequences marked
node tools/citecheck.mjs     # HEURISTIC: an elementary move whose home is not in deps
```

`citecheck` is warning-only and its output is to be TRIAGED, never merely
counted; the surviving false positives are documented in its own header. The
first four exit non-zero on failure and are hard gates.

Note what none of them can check: whether a fact's prose faithfully restates the
item it cites. That is the dominant defect class in this library
(`research/verification-benchmark.md`), and it is caught only by a human or a
model that reads the cited item. That is what the judge's cited-item context and
the page verifier of `WORKFLOW.md` §0 exist for.
