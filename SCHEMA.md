# Content data contract

This contract covers content in `items/` and `library/`. Every content file is Markdown with an optional YAML frontmatter block delimited by `---`. The web loader uses the YAML parser also used by `tools/rendercheck.mjs`; malformed YAML makes that file unavailable to the renderer.

## 1. Files and identity

~~~
items/<id>.md
library/<category>/<page>.md
library/<category>/<nested-category>/<page>.md
library/<category>/_category.md
library/<top-level-category>/_pathway.md
~~~

Items are global; a page composes item ids from that shared pool. Categories belong to page paths, not item ids. Files whose names begin with `_` are metadata, not ordinary pages.

Each item has one canonical id. `id` is required, must equal the item filename stem, and must have the prefix required by `kind`:

| Kind | Prefix |
| --- | --- |
| `definition` | `def-` |
| `theorem` | `thm-` |
| `lemma` | `lem-` |
| `proposition` | `prop-` |
| `corollary` | `cor-` |
| `example` | `ex-` |
| `counterexample` | `cex-` |
| `false-statement` | `fs-` |
| `remark` | `rem-` |

`aliases: [<id>, ...]` is optional. Resolvers accept either a canonical id or an alias in lists and wikilinks. Keep canonical ids stable; use aliases when a former link target must continue to resolve. Planning rejects a new id that collides with an existing canonical id or alias. Alias collisions are not currently rejected by a validator and therefore are not a safe migration mechanism.

## 2. Item frontmatter

Despite §1, the renderer falls back to the filename for a missing `id`.

| Field | Status | Contract |
| --- | --- | --- |
| `title` | renderer-optional | String displayed as the item title; filename is the renderer fallback. |
| `status` | renderer-optional | `draft` or `published`; omitted or any other value renders as draft. |
| `origin` | optional | `pipeline` or `session`; omitted or any other value renders as session. |
| `deps` | optional | Array of logical prerequisites. Each target must resolve through ids or aliases; the `deps` graph is acyclic. |
| `justified_by` | optional | Array of items that discharge this item's well-definedness obligation. Each target resolves, is not also in `deps`, and must itself reach this item through `deps`; it is not a prerequisite edge. |
| `landmark` | optional | Boolean; only `true` selects an item as a flowchart landmark. |
| `short` | optional | Alternate short label for graphs, search, and metadata. |
| `proof_strategy` | conditional | Nonempty string required by `precheck` when the body has `Proof`, `Refutation`, `Counterexample`, or `Verification`; named strategies receive additional tag checks in §3. |

### References and provenance

`sources` is optional to the renderer and defaults to empty lists:

~~~
sources:
  scraped:
    - url: https://...
      title: Optional title
      license: Optional license
  references:
    - title: Required title in object form
      url: https://...            # optional to the renderer
~~~

The renderer also accepts a reference as a legacy title string. A source-backed component in an in-flight `content-policy` or `level-coverage` scope needs at least one `sources.references` URL.

`authorship` is legacy one-axis provenance. When present it is one of `ai-generated`, `ai-altered`, or `literature-derived`; audited retagging replaces it with component provenance.

For every in-flight mathematical item, both component fields are required:

~~~
provenance:
  statement: ai-generated | ai-altered | literature-derived
  proof: ai-generated | ai-altered | literature-derived | not-supplied | not-applicable
~~~

`statement` describes the Definition, Statement, or construction, according to kind; `proof` describes the local proof or verification. `not-applicable` is valid only for definitions and remarks. Legacy items may omit `provenance`; if a `provenance` mapping is present, `depcheck` validates both values.

An in-flight item with `provenance.statement: ai-generated` must carry:

~~~
generation:
  role: direct-corollary | example | counterexample
~~~

The allowed role is determined by kind: corollary, example, or counterexample respectively. A generated statement may not be a `deps` target. `generation` is invalid on a non-generated statement.

### Dependency-boundary fields

`proved_here` is optional and defaults to `true`. When it is `false`, the item is a recorded-not-proved result and must be a `remark`, have `verification.precheck: n/a`, have no Proof or Refutation heading, carry a reference, and have no `verification.judge`. A published recorded-not-proved item instead requires `verification.sources_checked`.

An in-flight recorded-not-proved fallback also requires:

~~~
external_dependency:
  source_url: https://...
  exact_statement: ...
  local_proof_attempt: ...
  necessity: ...
~~~

`source_url` must be an HTTP(S) URL exactly present in `sources.references`. This structured record is conditional on in-flight scope; older recorded-not-proved items may lack it.

`external_refs` is optional. Each entry must resolve to an item with `proved_here: false`, must appear as a wikilink in this item's body, and must not also appear in `deps`. It records a mention, not a logical dependency.

`forward_refs` is optional. Each entry must be a wikilink to an item planned on a strictly later page, not the same page, and must not also be in `deps` or `justified_by`. A load-bearing forward reference is permitted only in an example, counterexample, false statement, corollary, or remark; it participates in the combined dependency-cycle check.

### Verification

`verification` is optional until a publication rule makes one of its children conditional.

| Field | Status | Contract |
| --- | --- | --- |
| `precheck` | conditional | `pass` for a checked phase-format body; `n/a` is required for `proved_here: false`. |
| `judge` | generated | A pass record written by `tools/apply-judge-stamps.mjs`: `model`, `verdict: pass`, and `date`. It is forbidden on `proved_here: false` items. |
| `audited` | conditional | Scalar audit record. |
| `verified` | conditional | Delegated verification mapping. The renderer reads `model`, `verdict`, `date`, `scope`, and `delegated_by`. |
| `sources_checked` | conditional | Mapping valid only on a `proved_here: false` item. The renderer reads `date`, `scope`, and `by`. |

Thus a published proved-here item needs `audited` or `verified`; a published recorded-not-proved item needs `sources_checked`. These checks do not make a judge stamp universally required.

## 3. Item body and proof structure

Bodies are Markdown with `[[id]]` or `[[id|label]]` wikilinks. Item links must resolve through canonical ids or aliases, except declared forward references may be planned but not yet authored. A link in the Statement, Statement refuted, Facts & Assumptions, or proof-like section is checked against `deps`, `justified_by`, or `external_refs`.

The renderer splits an item only on level-two headings. It renders `Facts & Assumptions` as fact rows; `Proof`, `Refutation`, `Counterexample`, and `Verification` as proof rows; and `Scratch` as collapsed prose. Other headings are ordinary Markdown. It does not enforce a kind-to-heading map; the supported conventional forms are:

| Kind | Claim heading | Proof-like heading |
| --- | --- | --- |
| definition | `Definition` | none |
| theorem, lemma, proposition, corollary | `Statement` | `Proof` |
| example | `Example` | `Verification`, when supplied |
| counterexample | `Statement refuted` | `Counterexample` |
| false-statement | `Statement` | `Refutation` |
| remark | free prose | none |

Facts are blank-line-separated paragraphs. Contract-aware tools recognize fact labels `[F<n>]`, `[A<n>]`, and `[L<n>]`; a cited fact carries the source wikilink. A proof row starts `<phase>.<step> ` and may end with one bracketed comma-separated justification group and a final QED glyph. Separate consecutive proof rows with a blank line so Markdown renders each step as its own paragraph rather than merging the proof into one text block. A leading `**Proof technique:** <text>.` paragraph is displayed separately but is not independently checked against `proof_strategy`.

For a phase-format body, `tools/precheck.mts` requires a `**Given:**` declaration, at least two numbered steps, a final QED, no later numbered step after that QED, and trailing valid tags on at least 70% of steps. Valid tag tokens are `given`, `F/A/L/C<n>`, `step p.q` or `p.q`, `algebra`, `assume-contra`, `assume-hyp`, `ih`, `assume-case[ <word>]`, `base`, `construct`, `choose`, `suffices[: ...]`, `contrapositive-reduce`, `discharge-{contradiction|contrapositive|induction|construct}[: ...]`, and `{contradiction|contrapositive|induction|cases|cases-exhaustive}[: ...]`. Forward step references fail. The wrapper also fails a proof that only passes after its phase-stratification repair, so stored step numbers must already be in that repaired order. `contradiction`, `contrapositive`, `induction`, `cases`, and `constructive` strategies require their corresponding opener/discharge tags; other strategy strings have only the common checks.

Use `$...$` and one-line `$$...$$` math delimiters. `\\(...\\)` and `\\[...\\]` are not rendered as math; wikilinks inside math, dollars inside a display block or `\\tag{}`, unbalanced delimiters, blank lines inside inline math, and KaTeX parse failures are render errors. Fenced `tikz` or `tikzcd` blocks render as diagrams only outside Facts & Assumptions and proof-like sections; those sections would display the fence as raw code.

## 4. Page composition

An ordinary page has this frontmatter:

~~~
page: <slug>
title: <string>
status: draft | published
items: [<item-id-or-alias>, ...]
examples: [<item-id-or-alias>, ...]
~~~

`page`, `title`, `items`, and `examples` have renderer fallbacks of filename, filename, and empty arrays respectively; no current validator enforces page-slug/filename equality. The body is optional Markdown rendered as the page Summary. `items` render in the definitions/theorems section and `examples` in the examples/counterexamples/false-statements section; their names are display placement, not a kind validator.

A listed item must resolve, and an exact repeated list entry is an error. Multiple pages may list an item, but dependency tools use its first page as its home and warn on later homes. A published page refuses public rendering when any listed item is missing or not published. A published item with no page is a warning because page-level prerequisite calculation omits it.

A page whose slug ends in `-examples`, or whose plan kind is `B`, is an examples page. An item homed only on such pages cannot be a dependency of another page; an earlier item on the same examples page is the allowed exception.

## 5. Categories and pathways

`library/<category>/_category.md` supplies the category title and optional Markdown overview. The renderer falls back to a title derived from the directory name when `title` is absent. Its body is optional; `pathcheck` warns when a top-level category overview is missing or shorter than 120 words.

For a plan-backed page, the plan's `category` is its top-level library directory: write the page at `library/<category>/<page>.md`. Do not nest one subject track beneath a prerequisite track. In particular, functional-analysis A/B pairs live directly in `library/functional-analysis/`.

A top-level category may have `_pathway.md`:

~~~
category: <slug>
status: draft | published
parts:
  - part: <stable-part-slug>
    title: <string>
    pages: [<A-page-slug>, ...]
---

## <stable-part-slug>

<Markdown brief>
~~~

The directory name, not `category`, selects the category. A published pathway is rendered for public readers; otherwise the renderer derives parts from dependency levels. Each part's body brief is joined by its `part` slug. When a pathway exists, `pathcheck` requires nonempty parts and briefs, existing same-category non-`-examples` page slugs, no duplicate page placement, every published A page placed once, and no part before a part it depends on. Missing pathways are warnings rather than errors, except that `not-proved-here` is exempt even from that warning.

## 6. Render and validation behavior

Item and ordinary-page loaders silently skip YAML-unparsable files; `rendercheck` reports YAML failures for every file it checks. It also checks the math and diagram constraints in §3 using the renderer's YAML parser and KaTeX. `depcheck` enforces id/kind shape, reference resolution, dependency and page cycles, page-list safety, examples-page leaf rules, and publication evidence. `fwdcheck` enforces the forward-reference contract; `extcheck` enforces recorded-not-proved and `external_refs` shape; `pathcheck` enforces pathways. `content-policy` and `level-coverage` add the in-flight provenance, generated-claim, source, and external-fallback requirements stated above.

Readers derive prerequisites and landmark flowcharts from `deps`; derive reverse well-definedness links from `justified_by`; mark forward and recorded-not-proved use from their dedicated fields; and aggregate source lists from `sources`. These relationships are computed, not separately stored.

## 7. Schema changes

Treat every field consumed by the renderer or a validator as a public interface. A change to `id`, `title`, `kind`, `status`, dependency fields, aliases, landmark state, `proved_here`, `short`, `proof_strategy`, or body text is material; `provenance`, `sources`, `verification`, `generation`, and legacy pipeline metadata are the current retag-class fields when the body is unchanged.

For a field addition, removal, rename, default change, or value-set change, update the loader, every affected validator and renderer consumer, their tests, and existing content together. Preserve resolvability with aliases or an explicit content migration, keep the YAML parser contract valid, and run the relevant content checks. Unknown top-level frontmatter is ignored by the renderer but treated as material by the audit classifier, so it is not a safe undocumented extension point.
