# SCHEMA.md — content schema (v0 DRAFT, not yet frozen)

Normative for everything under `items/` and `library/`. The renderer, the
internal harness, and the audit checklist all read this contract. Once frozen,
changes require a version bump here and a migration note.

## 1. Layout: global item pool + composed pages

```
items/<id>.md                       # one atomic item per file (the content)
library/<cat>/[<subcat>/]<page>.md  # page composition files (the reading surface)
library/.../_category.md            # category metadata
library/<cat>/_pathway.md           # the category's course pathway (§6.1)
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
provenance:                         # REQUIRED on every future mathematical item
  statement: ai-generated           # ai-generated | ai-altered | literature-derived
  proof: ai-generated               # same | not-supplied | not-applicable
  # These are COMPONENT labels, not an overall novelty or correctness claim:
  #   statement = the Definition/Statement, or the specific construction for
  #               examples, counterexamples and false statements.
  #   proof     = the local Proof, or Verification/Refutation for a construction.
  #
  #   literature-derived faithfully follows identified literature with cosmetic
  #                      editorial changes only;
  #   ai-altered         is literature-based but AI materially reformulated,
  #                      extended, repaired, or otherwise adapted it;
  #   ai-generated       was formulated locally by AI without a direct source
  #                      for that particular component;
  #   not-supplied       no local proof or verification is supplied;
  #   not-applicable     used only when a definition or remark has no proof
  #                      component.
  # A source-backed statement OR proof requires a URL in sources.references.
  # `authorship` is the optional legacy one-axis field. It stays readable for
  # legacy items but MUST NOT be used instead of provenance on future content.
  # Beta records a rationale for BOTH components in its batch notes. Alpha
  # verifies both at Step 6. An ai-generated STATEMENT/construction receives the
  # heightened truth audit and counterexample search; an AI-generated proof
  # alone does not make its statement AI-generated.
generation:                         # REQUIRED iff provenance.statement is ai-generated
  role: direct-corollary             # corollary | example | counterexample:
                                    # direct-corollary | example | counterexample
  # Generated theorems, propositions, definitions, lemmas, false statements,
  # and remarks are prohibited in future batch scope. A generated corollary,
  # example, or counterexample is non-load-bearing and may never be a deps
  # target. Keep a would-be generated proof-decomposition lemma inline, or
  # replace it with a literature-derived or AI-altered statement.
  # Dependency eligibility is determined ONLY by the target's
  # provenance.statement: literature-derived and ai-altered statements are
  # eligible; ai-generated statements are forbidden as deps targets. The
  # provenance.proof value never changes that decision. An eligible ai-altered
  # statement is still not automatically trusted: check reputable literature
  # before citing it whenever its exact claim or conventions leave doubt.
  # tools/content-policy.mjs enforces this in every future batch scope; do not
  # retrofit legacy items.
deps: [def-cauchy-sequence, lem-triangle-inequality]
  # every item this item's statement OR proof LOGICALLY DEPENDS ON (single list;
  # drives the prerequisite closure and the flowchart). Must reference existing
  # ids whose provenance.statement is literature-derived or ai-altered; an
  # ai-generated Statement/Construction is never a legal deps target. Its local
  # proof provenance is irrelevant to this rule. An ai-altered target remains
  # subject to a reputable-literature check whenever its exact claim or
  # conventions are in doubt.
  # This graph MUST BE ACYCLIC — see §7.
justified_by: []                     # OPTIONAL, definitions only in practice.
  # Items that discharge this item's well-definedness obligations (WORKFLOW.md
  # "Definition justification"). These point FORWARD: the discharging lemma is
  # about the object this definition introduces, so it depends on this item.
  # Listing such a lemma in `deps` creates a spurious cycle; list it here.
  # Enforced: every `justified_by` target must transitively depend on this item,
  # otherwise it is a genuine prerequisite and belongs in `deps`.
proved_here: true                    # OPTIONAL, defaults to true. Set FALSE when
  # this item RECORDS a result that this library does NOT prove, because the
  # track that would prove it has not been built (DEFERRED.md), or as the
  # narrow, documented external-dependency fallback below. For that fallback,
  # Beta must never use an ai-generated Statement/Construction as a dependency;
  # it checks a reputable source's exact Statement and conventions, and
  # first attempt a proof from available library dependencies. The batch notes
  # and proof contract record that source, the failed local route, and necessity.
  # Such an item:
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
external_dependency:                 # REQUIRED for a future `proved_here: false`
  source_url: "https://example.edu/exact-result"
  exact_statement: "The exact sourced statement and conventions used here"
  local_proof_attempt: "The in-scope route tried and why it cannot close"
  necessity: "Why rescoping or decomposition would not meet this page's remit"
  # `source_url` must exactly match one `sources.references` URL. These fields
  # do not prove the source semantically supports the item; they make the
  # source, failed local route and necessity explicit audit obligations.
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
  #
  # A logically required external result is NOT an `external_refs` mention.
  # Under the future-session, last-resort exception to self-contained scope,
  # Beta never uses an ai-generated Statement/Construction as a dependency,
  # searches reputable sources for its exact Statement, and attempts an
  # in-library proof. Only if that proof cannot be built from available
  # dependencies may Beta create a source-cited `rem-` item with
  # `proved_here: false`, record why in batch notes, and list that item in
  # `deps`. The resulting fuchsia ‡ marker truthfully identifies an external
  # dependency to the reader.
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
    model: "deepseek-v4-pro + gpt-5.6-terra"
                                     #   session workflow: DeepSeek V4 Pro runs
                                     #   directly and fresh GPT 5.6 Terra runs via
                                     #   Codex on identical frozen context; the GPT
                                     #   5.6 Sol author also runs via Codex with a
                                     #   1M-token context.
                                     #   Pipeline items use the production lineup
    verdict: pass
    date: 2026-07-25
    # RECORD ONLY A PAIRED PASS BOTH JUDGES ACTUALLY GAVE, for the text now on
    # disk. The full per-model verdicts and any rejection remain in the level
    # ledger for Step-10 comparison.
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
  verified:                          # OPTIONAL. Delegated verifier adjudication
    model: gpt-5.6-sol-codex-subscription
    verdict: certify                 #   verifier read the stated scope
    date: 2026-07-25
    scope: page                      #   what context the verifier actually had
    delegated_by: owner              #   set when this block stands as the gate
    # Deliberately a separate block from `judge`. A verifier certification records
    # a delegated reading tier and is not the same evidence as an adversarial
    # judge verdict.
    #
    # AMENDED 2026-07-26 (owner: "publish all 9 webpages as I've delegated auditing
    # to subagents"). `verified` MAY now stand as the publish gate in place of
    # `audited`, and depcheck accepts either. It is still not the same thing, and
    # that is the whole point of keeping two fields:
    #     audited   the OWNER read this item.
    #     verified  a delegated subagent read it, on the owner's instruction.
    # Writing `audited` for delegated work would destroy that distinction across
    # the corpus permanently and irreversibly -- 137 items already carry it meaning
    # the first thing. A reader and a future session must be able to tell which is
    # which, so the delegation is recorded as what it was.
    # `delegated_by: owner` marks an item published on that basis.
    # A material repair to a published dependency invalidates its historical
    # `audited` date: remove that obsolete stamp and write `verified` only after
    # an independent current reader has checked the corrected text under the
    # owner-delegated published-dependency-repair protocol. Use
    # `scope: published-dependency-repair`; the repair ledger records the exact
    # source or elementary derivation and the downstream-impact receipt. The
    # agent that authored the correction never certifies it.
  sources_checked:                   # ONLY on `proved_here: false` items, where it
    date: 2026-07-26                 #   REPLACES `audited` as the publish gate.
    scope: citations                 #   what was actually checked
    by: session-audit                #   who/what performed it
    # Added 2026-07-26 (owner). These items have NO PROOF, so `audited` -- an audit
    # OF A PROOF -- cannot be what verifies them, and `judge` is forbidden outright
    # (tools/extcheck.mjs `unproved-judged`: there is no proof to judge). What CAN be
    # checked is the thing they actually assert: that the statement of the external
    # result is correct, that the attribution and year are right, that the cited
    # source resolves and contains the claim, and that the item is consistent with
    # the rest of the library. That is what this block records.
    #
    # It is a SEPARATE field on purpose. Writing this under `audited` would make one
    # field mean "the owner checked a proof" on 137 items and "someone checked a
    # citation" on 64 others, which is exactly the kind of quiet equivocation this
    # schema exists to prevent. A reader is told the difference too: these items
    # carry the fuchsia recorded-not-proved marking, never a judge or audited chip.
  audited: 2026-07-25                # owner audit date; REQUIRED for published
                                     #   unless an owner-delegated `verified`
                                     #   record is present, or `proved_here:
                                     #   false` uses `sources_checked` instead.
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
  A cited fact states the source proposition itself, not an AI-sounding label or
  an interpretive summary of its purpose. Quote the cited Definition or Statement
  exactly when practical; otherwise shorten it concisely while preserving the
  domain, quantifiers, hypotheses, conclusion, and direction with maximum
  fidelity. For example, write the null-sequence condition itself, not `Null
  definition: a null perturbation is eventually smaller ...`.
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

### 5.1 TikZ diagrams and commutative diagrams

An illustrative finite structure may be placed in a non-proof prose section
(`## Definition`, `## Statement`, `## Statement refuted`, `## Example`, or
`## Remarks`) in a fenced `tikz` block. The block contains a complete
`\begin{tikzpicture}...\end{tikzpicture}`. It is an aid to reading, not a
source of mathematical assertions: the vertices, edges, labels, and every fact
used in a proof must also be stated in the ordinary item text. Do not place one
inside `## Facts & Assumptions` or a phase-format proof: this includes
`## Proof`, `## Refutation`, `## Counterexample`, and `## Verification`, whose
paragraph shape is mechanically checked.

The renderer compiles both `tikz` and `tikzcd` fenced blocks to cached inline
SVGs on the server. `tikz` is for ordinary TikZ figures such as finite graphs,
Hasse diagrams, and set diagrams; `tikzcd` is specifically for commutative
diagrams.

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
  (TikZ/tikz-cd via node-tikzjax, cached). The block may hold a bare cd body or
  a full `\begin{tikzcd}...\end{tikzcd}`.

## 6. Page composition files

```yaml
---
page: construction-of-r-via-cauchy-sequences   # must equal filename
title: "Construction of the Real Numbers via Cauchy Sequences"
status: draft                        # page-level gate, independent of items
items: [def-cauchy-sequence, lem-…, thm-…]   # Section 4, in reading order
examples: [ex-…, cex-…, fs-…]                # Section 5, in reading order
---
(A-page body = Section 2, the authored two-paragraph summary. A B/examples page
has no authored body. This is the only hand-written page prose.)
```

For scaffolding, an A page has a **100-total-item review ceiling** before
`validate-plan` emits `size`, raised from 60 on 2026-07-30. This is neither a
target nor a publish limit: do not pad toward it, and do not drop valuable
results merely for ergonomics. A coherent page above the ceiling is reviewed for
a structural split rather than silently pruned.

### The summary describes the MATHEMATICS, never the page (owner, 2026-07-28)

**No mechanical tier reads a page summary** — the judge reads items and cannot
see a page file, and `precheck` ignores prose. So a summary is the least-checked
text in the library, and every summary defect ever found here was the page
**describing itself** rather than getting mathematics wrong:

> "the hardest proof on the page" · "every computation on the companion page runs
> through it" · "three theorems close the page" · "half of this page cites claim
> 2" (it was 7 of 20) · "Darboux's theorem is developed on a later page" (its page
> is at a *lower* order, and unbuilt)

**Rule.** A summary gives background and says what the page proves. It does
**not**:

- count anything on the page, or on any other page;
- rank its own contents ("the hardest", "the sharpest", "the only");
- claim what other pages do, contain, or lack;
- state a position in the reading order that is not derived from the spec.

**Page-summary shape (owner, 2026-07-30).** An A-page body has exactly two
nonempty prose paragraphs, each under 150 words:

1. mathematical background and the definitions and results from declared
   dependencies that the development uses;
2. the main definitions and theorems developed on this page, with their general
   logical progression.

A B/examples page has no authored summary body. This is a content constraint;
the frozen renderer remains responsible for its fixed page sections. Both
A-page paragraphs remain subject to the prohibitions above.

Each of those is a claim about a file the writer is not looking at, and none of
them is mathematics. `tools/prosecheck.mjs` gates the count and position halves;
the self-ranking half is a reading check.

### Remarks JUSTIFY; they do not SURVEY

The same split, measured over seven builds: a Remark saying **why** a hypothesis
is needed, what fails without it, or which convention is in force **has never been
wrong here**. A Remark **surveying what the library contains elsewhere** is the
defect class — it is unverifiable while writing and it decays silently afterwards.

Write the first kind. For the second, either cite the item and let the link carry
it, or say nothing.

**This cuts no theorem, no example, no proof, and no counterexample.** It removes
sentences that were never mathematics and were never checked by anything.

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

### 6.1 Category pathway files (`library/<cat>/_pathway.md`)

A category page renders a COURSE PATHWAY: named parts in reading order, each
with a written brief, each listing its A pages. It replaced a dependency
flowchart of the whole group, which at 83 pages could not be read.

```yaml
---
category: real-analysis
status: published            # draft hides it from the public mirror, same gate as a page
parts:
  - part: building-the-reals            # stable slug; the body section joins on it
    title: "Building the real numbers"
    pages: [construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers]
  - part: order-and-countability
    title: "Order, suprema and countability"
    pages: [suprema-and-infima, roots-and-rational-powers]
---

## building-the-reals

The brief. Markdown, may carry `[[wikilinks]]` and KaTeX.

## order-and-countability

...
```

Rules, all enforced by `node tools/pathcheck.mjs`:

* A part lists **A pages only**. A `-examples` companion rides with its A page
  and is never placed on its own.
* Every published page of the category sits in **exactly one** part.
* Every part has a `## <part-slug>` brief, and every brief names a part.
* **Order.** Everything a page rests on inside its own category sits in its part
  or an earlier one. A part list, never a level number, is what a brief is
  anchored to: a level is the longest prerequisite chain in the group, so
  inserting one page renumbers everything above it, and a brief written against
  a number would go quietly wrong on the next build.

A brief follows the same prose rules as a page summary (§6 above): it describes
the mathematics, counts nothing, ranks nothing, and claims nothing about what
other pages contain. `prosecheck.mjs` reads these bodies with the rest.

Every category carries one except `not-proved-here`, the ‡ tier, which records
results the library does not prove and therefore has no reading order to write
(owner, 2026-08-18); `pathcheck` exempts it rather than warning every run. A
category with no pathway file renders one part per computed dependency level,
unnamed and unbriefed, so a new category is never broken by the absence of one.
`tools/pathway-sync.mjs`, which runs at step 10 of the per-level build, places
each new page in the part its prerequisites allow and reports the briefs that
gained material, so the file keeps covering the corpus without a human
remembering to open it.

### 6.2 Category overviews (the `_category.md` body)

`library/<cat>/_category.md` carries the group's metadata (`name`, `title`,
`status`) and, under it, a **collection overview**: the prose a reader meets
before the pathway, written once per category and answering two questions.

1. **What the collection covers**, with the mathematics named. Not a genre label
   ("algebra"), the actual subject matter the group develops.
2. **What rests on it**, inside this library and outside it. `DEFERRED.md` is
   organised by prerequisite track and the unbuilt `research/plan-*-track.md`
   scaffolds each declare what they need, so a dependent named here is sourced,
   never guessed.

**No audience paragraph** (owner, 2026-08-18). Every overview used to carry a
middle paragraph saying who the collection was for and that its proofs are
stratified and audited, and it was the same paragraph eleven times over: the
proofs on the page are the demonstration, and `/workflow` and `/about` are where
the method is stated once.

**Length: 150 to 300 words.** Long enough for both questions, short enough to be
read before the pathway rather than instead of it.

The overview follows the same prose rules as a page summary (§6) and a pathway
brief (§6.1): it describes the mathematics, counts nothing, ranks nothing, and
claims nothing about what other pages contain or lack. `prosecheck.mjs` reads
these bodies with the rest. `pathcheck.mjs` warns `overview-missing` for a
category whose `_category.md` has no body and `overview-short` for a body under
120 words; both are warnings, because a category being built is allowed to reach
its pages before its prose.

**Every category carries one, `not-proved-here` included.** It has no reading
order and so no pathway file, but it does have a subject and a set of dependents,
and a reader arriving at a ‡ page from a citation is exactly the reader who needs
to be told what the tier is.

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
needs machinery introduced later. `depcheck.mjs` enforces this against authored
items as well as `validate-plan.mjs` enforcing it against the scaffold. An
earlier item on the *same* B page is ordinary local exposition and remains
legal. The isolated legacy exception is named, rather than hidden, in
`research/b-leaf-legacy-allowlist.json` and remains a warning until separately
refactored under an audited content change.

## 8. Mechanical publish checklist (enforced by CI/renderer, not by memory)

`status: published` on an item is valid only if: id == filename; kind/prefix
match; all `deps` + wikilinks resolve; precheck `pass` (or legitimately `n/a`);
`verification.audited` or an owner-delegated `verification.verified` set (or
`sources_checked` for `proved_here: false`); every `sources.scraped` entry has
url+license; every `sources.references` entry has title + a working url;
share-alike sources (CC BY-SA / GFDL) present ⇒ attribution renders.

The gate is **nine tools**, run from the repo root; all must be clean before
anything is published. `ARCHITECTURE.md` §3 documents every error code:

```
node tools/tsx-run.mjs tools/precheck.mts
node tools/depcheck.mjs      # deps resolve, graph acyclic, no draft on a published page
node tools/fwdcheck.mjs      # forward refs declared, point forward, closed, off the spine
node tools/extcheck.mjs      # recorded-not-proved items well formed; ‡ consequences marked
node tools/citecheck.mjs     # HEURISTIC: an elementary move whose home is not in deps
node tools/rendercheck.mjs   # delimiters, a REAL KaTeX parse, and a REAL YAML parse of every
                             # frontmatter block; defects visible only when rendered
node tools/validate-plan.mjs research/plan-spec.json   # the scaffold; TAKES THE SPEC PATH
node tools/depsource.mjs     # where each dep lives; only `unresolved` fails
node tools/pathcheck.mjs     # every published page sits in its category pathway, in a legal part
```

`citecheck` is warning-only and its output is to be TRIAGED, never merely
counted; the surviving false positives are documented in its own header.
`depsource` fails only on `unresolved`. The other seven exit non-zero on failure
and are hard gates.

For a future authored level, run the additional scoped controls after authoring
and again after Step-6/8 interface repairs:

```
node tools/content-policy.mjs research/<run>-batch-*.pages.json
node tools/audit-manifest.mjs research/<run>-batch-*.pages.json --json
node tools/impact-audit.mjs --touches research/<run>-touches.json --from <baseline> --receipt research/<run>-impact-audit.json
node tools/level-coverage.mjs --contracts research/<run>-proof-contracts.json --judge-ledger research/<run>-judge.jsonl --spine-receipt research/dependency-spine-audit.json --audit-receipt research/<run>-audit-coverage.json --verify-current-context research/<run>-batch-*.pages.json
```

The first enforces future-only provenance, generated-claim containment, and the
structured external-fallback record. The next two bind Alpha's audit to actual
relationships and to every downstream item exposed by a changed public
interface. The final gate proves batch scope, proof-contract scope, paired-judge
coverage on the current frozen prompt, and Alpha's manifest-bound attestation.

**`validate-plan.mjs` requires the spec path as an argument.** Run bare it prints
usage and exits non-zero, which looks exactly like a gate failure and is not one.

**This list said "five tools" until 2026-07-27.** `rendercheck` was added at
level 9 after two rendering defects reached the owner's eye that no other gate
could see; `validate-plan` and `depsource` predate it and were simply never added
here. Keep this list and `LEVELS.md`'s gate table in step.

Note what none of them can check: whether a fact's prose faithfully restates the
item it cites. That is the dominant defect class in this library
(`research/verification-benchmark.md`), and it is caught only by a human or a
model that reads the cited item. That is what the judge's cited-item context and
the page verifier of `WORKFLOW.md` §0 exist for.
