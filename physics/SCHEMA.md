# Content schema

- `items/` holds shared mathematical content; `library/` places it on pages and
  groups pages into categories. Files use Markdown with YAML frontmatter between
  `---` lines. The renderer skips malformed YAML; `tools/physics-support/rendercheck.mjs`
  catches it. See [WORKFLOW.md](WORKFLOW.md) for builds and publication.

## Items

- File: `items/<id>.md`. The frontmatter `id` must equal the filename stem.
  Keep IDs and aliases unique; `aliases: [old-id]` preserves old links.
- `kind` determines the ID prefix: `definition` → `def-`, `theorem` → `thm-`,
  `lemma` → `lem-`, `proposition` → `prop-`, `corollary` → `cor-`, `example` →
  `ex-`, `counterexample` → `cex-`, `false-statement` → `fs-`, `remark` → `rem-`.
- `title` is the display name. `status` is `draft` or `published`; a missing or
  other status renders as draft. `origin` is `pipeline` or `session`; the renderer
  defaults to session. `short` is an optional display label and `landmark: true`
  selects an item for the flowchart.
- `deps: [id, ...]` lists items needed by the claim or argument. Targets must
  resolve, and item and page dependency graphs must be acyclic. `depcheck`
  warns about linked citations in the Statement, Facts, or argument absent
  from `deps`, `justified_by`, and `external_refs`; unlinked uses still need review.
- The owner permits the Axiom of Choice where needed. State it in the item
  contract, identify its exact proof use, add `def-axiom-of-choice` to `deps`,
  and carry the assumption to consumers that use the result. Finite choice
  and DC do not imply arbitrary-index choice; keep choice-free proofs choice-free.
- `justified_by: [id, ...]` names results that establish this item's
  well-definedness. Each target must depend on this item through `deps`; do not
  also put it in this item's `deps`.
- Use `[[id]]` or `[[id|label]]` for item links. Page prose may also link page
  IDs. An item link must resolve unless `forward_refs` declares a planned
  later-page target.

### Sources and provenance

- `sources.references` contains cited sources as `{title, url}` objects (URL
  optional for legacy references); `sources.scraped` may contain
  `{url, title, license}` objects. The renderer also reads legacy reference
  title strings.
- Authored build batch items checked by `tools/physics-support/content-policy.mjs` without
  `--audit` or `--manifest-only` require `provenance.statement` (`ai-generated`,
  `ai-altered`, or `literature-derived`) and `provenance.proof` (those values,
  `not-supplied`, or `not-applicable`). Only definitions and remarks may use
  `not-applicable`. Either component marked `literature-derived` or `ai-altered`
  requires a `sources.references` URL. Legacy `authorship` is still readable;
  audited retagging removes it.
- The policy checker uses the renderer's YAML parser: block and flow mappings,
  quoted keys, and indentless reference lists have the same meaning. Only
  nonempty string `url` fields on objects in `sources.references` count for
  source-backed provenance; sibling source metadata and legacy title strings
  do not. Malformed YAML or a non-mapping frontmatter document fails item mode
  for that scoped item.
- In `--audit` mode, a ledger row with `evidence: established-knowledge` and
  `alpha_concurred: true` permits an `ai-altered` statement without a URL, with
  a warning.
- In a build batch, an `ai-generated` statement is allowed only for a
  corollary, example, or counterexample. Set `generation.role` to
  `direct-corollary`, `example`, or `counterexample`, respectively. Such a
  statement cannot be a `deps` target.
  Omit `generation` for other statement provenance.

### Later and unproved material

- `forward_refs: [id, ...]` declares linked targets on strictly later planned
  pages. Do not repeat them in `deps` or `justified_by` or load-bearing `forward_refs`. Only corollaries,
  examples, counterexamples, false statements, and remarks may use one outside
  Remarks. Same-page links are ordinary links.
- `proved_here: false` records a result without proving it. It must be a
  `remark` with a `sources.references` entry, `verification.precheck: n/a`,
  no Proof or Refutation section, and no `verification.judge`.
- `external_refs: [id, ...]` declares linked mentions of `proved_here: false`
  items. Do not also put the target in `deps`. A mention does not create a
  logical prerequisite.
- For those build batch items, `proved_here: false` also requires
  `external_dependency` with `source_url`, `exact_statement`,
  `local_proof_attempt`, and `necessity`.
  `source_url` must be HTTP(S) and match a `sources.references` URL exactly.
- Items in the `foundations` category, including planned prerequisites, may
  not reach *Set Theory Beyond Choice: Recorded, Not Proved Here* through
  `deps`, `justified_by`, or `forward_refs`.

### Verification fields

- `verification.precheck: pass` records a successful format check;
  `n/a` applies to recorded unproved results. A format pass is not a proof of
  mathematical validity.
- A published proved-here item needs `verification.audited` (owner audit) or
  `verification.verified` (delegated audit with `model`, `verdict`, `date`,
  `scope`, and `delegated_by`). A published unproved item instead needs
  `verification.sources_checked` (`date`, `scope`, `by`). A judge stamp
  alone does not satisfy publication checks.
- An authorized correction to an **already published** proved-here item may
  replace stale audit stamps with `verification.repair: research/<receipt>.json`
  under CLAUDE §8. This records a local repair, not a whole-item audit or new
  mathematical acceptance. Initial publication still requires the audit above.
  `tools/physics-support/published-repair-policy.mjs` requires a version-1
  `recorded-local-published-repair` receipt with `id`, `run`, `group`, a concrete
  `correction`, current canonical `content_sha256` (verification excluded), a
  durable `before_file`, its raw `before_raw_sha256` and canonical `pre_sha256`,
  and `recorded_at`. The pre-edit carrier must already be published with a
  prior `verification.audited` or `verification.verified` marker, and its
  hash and owner must match the actual run's Step-5 published ownership claim.
  `ledger_marker` and `ledger_sha256` bind the exact text between unique
  `<!-- local-published-repair:MARKER:begin -->` and corresponding `:end`
  markers in the canonical published ledger; that text identifies the item and
  current hash. `local_checks.precheck` and `.rendercheck` each record the
  actual command, successful output, exit code, check date and current content
  hash. Depcheck reports this state as `published-local-repair`; stale,
  missing or mismatched evidence remains an error. There is no item gate,
  rejudgment or adjudication duty for this recorded repair state.

## Item bodies

- Use `## Definition` for a definition; `## Statement` and `## Proof` for a
  theorem, lemma, proposition, or corollary; `## Example` and optional
  `## Verification` for an example; `## Statement refuted` and
  `## Counterexample` for a counterexample; `## Statement` and
  `## Refutation` for a false statement. Remarks may use prose headings.
  The renderer splits at level-two headings; this mapping is an authoring
  convention rather than a renderer type check.
- `## Facts & Assumptions` holds blank-line-separated `[F1]`, `[A1]`, or
  `[L1]` entries. Cite source items with wikilinks. Labelled facts before the
  first numbered step of an example's Verification are also read as facts.
- Proof-like sections need `proof_strategy` in frontmatter and `**Given:**` in
  the checkable text. Write at least two `phase.step` numbered steps, with
  comma-separated justification tags at the end of steps and QED on the final
  step. Every numbered step needs valid trailing tags. Separate consecutive
  steps with a blank line and keep each complete argument in one paragraph,
  using single newlines within it. Put punctuation before `[tags]`; only `∎`
  may follow the final group. Cite only earlier step numbers. Separate the
  optional `**Proof technique:**` paragraph and other introductions from the
  first step with a blank line. Notes after the final tagged QED may be prose.
  Formatting example:

  ```markdown
  1.1 Establish the first claim, including its full argument. [F1]

  1.2 Complete the argument using the earlier claim. [step 1.1] ∎
  ```
- Common tags include `given`, `F/A/L/C<n>`, `step p.q`, `algebra`, `choose`,
  `construct`, and strategy opener/discharge tags. The accepted vocabulary and
  strategy checks are in the app's `worker/src/precheck.ts`, called by
  `tools/physics-support/precheck.mts`. Adopt any repair it proposes before recording a pass.
- Use `$...$` for inline math and `$$...$$` for display math. A display formula
  must occupy one source line between delimiters; put delimiters on separate
  lines when display-only KaTeX features such as `\tag` or `CD` are needed.
  Avoid wikilinks or nested dollars inside math, dollars inside `\tag{}`,
  blank lines in inline math, and `\(...\)` or `\[...\]` delimiters. KaTeX must
  parse each expression. Keep fenced `tikz` and `tikzcd` outside Facts and
  proof-like sections.

## Pages and categories

- Page file: `library/<category>/<page>.md`. Frontmatter uses `page`, `title`,
  `status`, `items: [id, ...]`, and `examples: [id, ...]`; the body is the page
  summary. The two lists control placement, not item kind. Entries must resolve
  and cannot repeat. A published page may list only published items.
- An item on more than one page draws a warning; dependency tools use its first
  home. A published item without a page also draws a warning. An item homed
  only on a B/examples page cannot be another page's dependency; earlier items
  on that same page are allowed. The plan identifies B pages, with the
  `-examples` suffix as a fallback.
- `library/<category>/_category.md` supplies the category title and a prose
  overview. Missing or short overviews warn; the short threshold is 120 words.
- `library/<category>/_pathway.md` uses `status` and `parts`, each with `part`,
  `title`, and `pages`; `category` is descriptive because the directory selects
  the category. Its body has one `## <part>` brief per part. List each published
  A page once, omit examples companions, keep pages in their category, and put
  each prerequisite in the same or an earlier part. Empty parts, missing pages
  or briefs, duplicate placements, orphan briefs, and out-of-order prerequisites
  are errors. Missing pathways, unplaced draft pages, singleton parts, and briefs
  over 120 words warn; `not-proved-here` is exempt from the missing-pathway warning.

## Checks

- `tools/physics-support/depcheck.mjs` checks IDs, dependencies, page lists, cycles, and
  publication evidence; `tools/physics-support/fwdcheck.mjs` and `tools/physics-support/extcheck.mjs` check
  later and unproved references.
- `tools/physics-support/precheck.mts` checks proof format; `tools/physics-support/rendercheck.mjs` checks YAML,
  math, and diagram rendering; `tools/physics-support/pathcheck.mjs` checks category overviews
  and pathways.
- `node tools/physics-support/proof-layout.mjs items/<id>.md ...` checks step separation and
  blue tags using the actual renderer. Run it after the final item edit or
  formatter. Step 9 requires 100% of numbered rows to have valid blue chips;
  the older line-based precheck's 70% threshold alone is insufficient.
- `tools/physics-support/content-policy.mjs` applies provenance, source, and generated-claim
  rules to an explicit run or audit scope. Other run gates and their commands
  are described in [WORKFLOW.md](WORKFLOW.md).


## Physics extensions (override mathematical-only rules where stated)

This schema applies inside `physics/`. Mathematics uses the root SCHEMA.md and
its unchanged engine. Imported mathematical suppliers retain their original
bytes and IDs, are read-only, and are verified by `research/math-imports.json`.
Run `init` before planning; reconcile supplier updates outside active runs.

New kinds and ID prefixes:

| Kind | Prefix | Body | Acceptance |
|---|---|---|---|
| postulate | post- | Postulate; explanatory prose | Sources, formulation, physical scope |
| physics-theorem | pthm- | Statement; Facts & Assumptions; Proof | Complete conditional proof |
| thought-experiment | texp- | Statement; Facts & Assumptions; Proof | Identical to physics-theorem |
| experiment | exp- | Setup; Procedure; Observations; Uncertainty; Interpretation | Reported source-backed empirical findings |

Every locally authored item requires `domain: mathematics` or `domain: physics`.
The four new kinds require physics; theorem/lemma/proposition/corollary require
mathematics. Definitions, examples, and remarks may have either domain.
Mathematical items may never depend on physical items, including through aliases
or `justified_by` or load-bearing `forward_refs`. Physical items may depend on either domain. All `deps` remain
acyclic; existing well-definedness rules for `justified_by` still apply.

Every local category requires `library: physics` or `library: mathematics` in
`_category.md`. A page may repeat the classification but cannot contradict its
category. Plan pages require `library`; P entries may inherit it from an existing
page. Mathematics pages may contain mathematical items only. Shared mathematics
uses imported canonical IDs; never re-author an imported item. Its first imported
mathematics placement remains its canonical prerequisite home.

Every local item annotates each `deps` entry in `dependency_roles` with one of:
`mathematical-premise`, `physical-assumption`, `physical-result`,
`empirical-premise`, `operational-prerequisite`, `formulation-prerequisite`.
Mathematical items use only mathematical-premise. Postulates and experiments use
physical suppliers operationally or for formulation, not as proofs of assumptions
or measured outcomes. Experimental interpretation requiring a derivation belongs
in a separate physics-theorem or thought-experiment.

Every physical item states a nonempty `physical_scope`. The new kinds require
source references with HTTP(S) URLs and source-backed statement provenance.
Postulates and experiments use `provenance.proof: not-applicable`, never a fabricated
proof or `proved_here: false`. Their publication requires structured
`verification.sources_checked` with date, scope, and by. Physical-theorem and
thought-experiment use ordinary complete proof formatting and proof audit rules.

Experiments additionally require `empirical_result` with nonempty `observation`,
`uncertainty`, `conditions`, and `source_url`; the URL must match a source reference.
Physical proof items that use empirical premises require `empirical_premises`, an
array of `{experiment, conditions, uncertainty, use}` entries. Carry these entries
through physical-result dependency chains. Mechanical checks establish that the
qualifications are recorded; independent reviewers check their faithfulness.

Nonlogical `relations` is a mapping of arrays of item IDs: `supported_by`,
`tested_by`, `motivated_by`, `replicates`, `challenges`. Except motivated_by, these
name experiments; replicates is used only on experiments. Relations may form
cycles and never supply a proof premise or prerequisite. Mathematical items may
use motivated_by for physical context; empirical evidence cannot establish their
validity. Do not encode empirical
support as deps. See ../PHYSICS-CONTENT-MODEL.md for the complete relation table.

Postulates and experiments still require an item contract. Replace mathematical
proof worksheets with `physics_review`: for postulates, formulation, scope,
sources, non_derivation; for experiments, setup, procedure, observations,
uncertainty, interpretation, sources, statistical_inference. Each field is `{verdict: pass, evidence: ...}`
with concrete evidence. Leave derivations, routine_steps, and boundaries empty.
The ordinary source retrieval and independent review gates still apply. Numerical
claims about analysis may use separately linked proved items.

Physical public interfaces include postulate formulations, experiment setup,
procedure, observations, uncertainty and interpretation, physical_scope, and
empirical qualifications. Changes to these trigger direct-consumer review.
Proof, citation, and verification bookkeeping alone do not change that interface.
Mathematical interface propagation retains the original Statement/Definition rule.

All statistical claims follow ../PHYSICS-CONTENT-MODEL.md's double-slit guidance.
The experiment contract's statistical_inference review records whether sampling,
measurement, comparison models, error rates, and the empirical conclusion are
properly qualified. A source without quantitative detail supports an explicitly
limited qualitative account; it does not authorize invented precision or tests.
