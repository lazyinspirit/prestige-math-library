# Content data contract

Applies to `items/` and `library/`. Files are Markdown with YAML frontmatter
between `---` delimiters. The renderer tolerates some missing fields but skips
malformed YAML. Authoring requirements below are stricter than those fallbacks.

## 1. Files and identity

```text
items/<id>.md
library/<category>/<page>.md
library/<category>/_category.md
library/<category>/_pathway.md
```

Items are global. Pages list shared item IDs; categories come from page paths.
The renderer supports nested category directories, but planned pages go directly
under their plan's category. Files beginning with `_` are metadata.

Items require `id` equal to the filename stem and a matching `kind`:

| Kind | Prefix |
|---|---|
| definition | `def-` |
| theorem | `thm-` |
| lemma | `lem-` |
| proposition | `prop-` |
| corollary | `cor-` |
| example | `ex-` |
| counterexample | `cex-` |
| false-statement | `fs-` |
| remark | `rem-` |

Keep IDs stable. `aliases: [old-id]` preserves links, but check uniqueness:
alias collisions are not rejected consistently. Planning rejects new IDs
that collide with existing IDs or aliases.

## 2. Item frontmatter

| Field | Meaning |
|---|---|
| `title` | Display title; renderer fallback is the filename |
| `status` | `draft` or `published`; new run content stays draft |
| `origin` | `pipeline` or `session` |
| `deps` | Logical prerequisites, as item IDs; must resolve and form an acyclic graph |
| `justified_by` | Well-definedness results; each must depend on this item through `deps`, and cannot also be in its `deps` |
| `landmark` | Boolean selecting an item for the flowchart |
| `short` | Optional short display label |
| `proof_strategy` | Required when the body contains a proof-like section; see §3 |

Use explicit `deps: []` in scaffold manifests when no prerequisites exist.
The renderer defaults missing lists to empty, missing ID to the filename stem,
missing kind to remark, non-published status to draft, non-pipeline origin to
session, and landmark to false. These fallbacks do not excuse invalid authoring.

### Sources and provenance

```yaml
sources:
  scraped:
    - url: https://...
      title: Optional title
      license: Optional license
  references:
    - title: Source title
      url: https://...
provenance:
  statement: literature-derived
  proof: ai-altered
```

Reference objects need a title to render. Legacy title strings also render;
new source-backed statements or proofs need a reference URL.
Sources default to empty lists.

Both provenance components are required for in-flight mathematical items:

- Statement: `ai-generated`, `ai-altered`, or `literature-derived`.
- Proof: those values, `not-supplied`, or `not-applicable`.
  Only definitions and remarks may use `not-applicable`.

Statement provenance describes the claim or construction; proof provenance
describes its local argument. Legacy `authorship` uses the three statement
values; audited retagging replaces it with component provenance.

An AI-generated statement is allowed only as a corollary, example, or
counterexample, with the corresponding `generation.role`:
`direct-corollary`, `example`, or `counterexample`.
It cannot be a dependency target. Other statements must omit `generation`.

### Forward and unproved references

Reference fields contain item IDs, not Markdown wikilinks.

- `forward_refs: [id]`: each target must appear as a body wikilink and belong
  to a strictly later planned page. It cannot also be in `deps` or
  `justified_by`. References outside Remarks are load-bearing and allowed
  only for examples, counterexamples, false statements, corollaries, and
  remarks. Such edges join `deps` for cycle checking; same-page targets
  are ordinary references.
- `proved_here: false`: a recorded result must be a remark with a reference,
  `verification.precheck: n/a`, no Proof or Refutation section, and no judge
  stamp. The default is true.
- `external_refs: [id]`: each target must be recorded with
  `proved_here: false`, appear as a body wikilink, and be absent from `deps`.
  This records an external reference, not a locally proved prerequisite.

In-flight recorded results also require:

```yaml
external_dependency:
  source_url: https://...
  exact_statement: ...
  local_proof_attempt: ...
  necessity: ...
```

The HTTP(S) source URL must exactly match a `sources.references` URL.

### Verification

| Field under `verification` | Contract |
|---|---|
| `precheck` | `pass` after a successful format check; `n/a` for `proved_here: false` |
| `judge` | Tool-generated `model`, `verdict: pass`, `date`; forbidden on unproved results |
| `audited` | Scalar owner audit record |
| `verified` | Delegated record: `model`, `verdict`, `date`, `scope`, `delegated_by` |
| `sources_checked` | Unproved-result record: `date`, `scope`, `by` |

Published proved-here items require `audited` or `verified`; published unproved
results require `sources_checked`. A judge stamp alone is insufficient.
Only `tools/apply-judge-stamps.mjs` writes judge pass records.

## 3. Item body and proof structure

Use `[[id]]` or `[[id|label]]` links. Targets must resolve, except declared
forward references to planned items. Declare every logical prerequisite.
`depcheck` warns about undeclared linked citations in statements, facts, and
proof-like sections; `fwdcheck` separately checks forward references.
Unlinked appeals still need mathematical review.

The renderer splits sections at level-two headings:

| Kind | Claim heading | Argument heading |
|---|---|---|
| definition | Definition | none |
| theorem, lemma, proposition, corollary | Statement | Proof |
| example | Example | Verification, when supplied |
| counterexample | Statement refuted | Counterexample |
| false-statement | Statement | Refutation |
| remark | free prose | none |

`Facts & Assumptions` renders fact rows; `Scratch` renders collapsed prose.
Other sections render ordinary Markdown. The kind/heading table is the
authoring convention, not a renderer-enforced mapping.

Separate facts and proof rows with blank lines. Facts use `[F1]`, `[A1]`,
or `[L1]` labels and source wikilinks. Proof rows start `phase.step` and end
with one comma-separated justification group; the final row ends with QED.
An optional `**Proof technique:**` paragraph displays separately.

Precheck requires `**Given:**`, at least two numbered steps, final QED with
no later step, and valid trailing tags on at least 70% of steps.
Use existing earlier steps as references; adopt any canonical phase repair
before claiming a pass.

Supported tags are `given`, `F/A/L/C<n>`, `step p.q` or `p.q`, `algebra`,
`assume-contra`, `assume-hyp`, `ih`, `assume-case[ word]`, `base`,
`construct`, `choose`, `suffices[: ...]`, `contrapositive-reduce`,
`discharge-{contradiction|contrapositive|induction|construct}[: ...]`, and
`{contradiction|contrapositive|induction|cases|cases-exhaustive}[: ...]`.
Legacy `def.` tags are accepted. Named contradiction, contrapositive,
induction, cases, and constructive strategies require their opener/closing
tags. Other strategy names still receive common checks and checks for
unclosed contradiction, contrapositive, induction, or cases tags.
The implementation is the app's `worker/src/precheck.ts`, loaded through
[tools/precheck.mts](tools/precheck.mts).

Use `$...$` and one-line `$$...$$` math. Avoid wikilinks inside math, nested
dollar delimiters, dollars in `\tag{}`, blank lines inside inline math, and
unbalanced delimiters. `\(...\)` and `\[...\]` are not rendered as math.
KaTeX must parse each expression. Fenced `tikz`/`tikzcd` diagrams belong
outside facts and proof-like sections.

Proofs must establish their claims; examples need calculations and
counterexamples need witnesses. Format checks, matching quotations, contracts,
and finite tests do not establish mathematical validity.
[The authoring brief](briefs/authoring.md) gives compact examples.

## 4. Page composition

```yaml
page: page-slug
title: Page title
status: draft
items: [def-example, thm-example]
examples: [ex-example, cex-example]
```

The body is the page summary. Lists control display placement, not item kind.
Every listed item must resolve; repeated entries are errors.
Multiple homes generate warnings, and dependency tools use the first home.
A published item with no page also generates a warning.

The renderer defaults page slug to filename stem, title to filename, and lists
to empty. Page-slug/filename equality is not currently validated.
Public rendering of a published page requires every listed item to be published.

A page ending `-examples`, or marked B in the plan, is an examples page.
An item homed only there cannot be another page's dependency; an earlier item
on the same examples page is allowed.

## 5. Categories and pathways

`_category.md` supplies the title and overview; title falls back to the
directory name. `pathcheck` warns on missing overviews or fewer than 120 words.

`_pathway.md` uses this structure:

```markdown
---
category: category-slug
status: draft
parts:
  - part: foundations
    title: Foundations
    pages: [first-a-page, second-a-page]
---

## foundations

Reading guidance.
```

The directory selects the category. Published pathways supply the public
reading order; otherwise the renderer derives dependency levels.

Each part needs pages and a matching brief heading. Listed pages must exist,
belong to that category, exclude B companions, and appear once. Every published
A page must be placed, with prerequisites in the same or an earlier part.
Orphan brief headings are errors. Unplaced draft pages, singleton parts, and
briefs over 120 words produce warnings. Missing pathways warn for categories
with published A pages, except `not-proved-here`.

## 6. Validation

| Tool | Checks |
|---|---|
| `precheck.mts` | Proof format and strategy tags |
| `rendercheck.mjs` | YAML, math, diagrams, renderer compatibility |
| `depcheck.mjs` | Identity, dependencies, cycles, page lists, publication evidence |
| `fwdcheck.mjs`, `extcheck.mjs` | Forward and recorded-not-proved references |
| `pathcheck.mjs` | Category overviews and pathways |
| `content-policy.mjs`, `level-coverage.mjs` | In-flight scope, provenance, sources, generated claims, external fallbacks |

The renderer and rendercheck share the YAML parser. Relations and source lists
are derived from the declared fields; do not maintain duplicate graph data.

## 7. Schema changes

Update the loader, validators, renderer consumers, tests, and affected content
together when changing fields or their meanings. Preserve link resolution.
Unknown fields may be ignored by the renderer but are not a supported extension
mechanism. `tools/step9-changes.mjs` compares `itemHashGuard` hashes with the
post-Step-8 snapshot: the whole `verification` block is excluded, but other
frontmatter and body changes count. Judge attestations use their own hash rules
in `tools/item-hash.mjs`. Do not treat metadata edits as automatically harmless.
