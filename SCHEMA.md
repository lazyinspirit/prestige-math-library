# Content schema

- `items/` holds shared mathematical content; `library/` places it on pages and
  groups pages into categories. Files use Markdown with YAML frontmatter between
  `---` lines. The renderer skips malformed YAML; `tools/rendercheck.mjs`
  catches it. See [WORKFLOW.md](WORKFLOW.md) for builds and publication.

## Items

- File: `items/<id>.md`. The frontmatter `id` must equal the filename stem.
  Keep IDs and aliases unique; `aliases: [old-id]` preserves old links.
- `kind` determines the ID prefix: `definition` → `def-`, `algorithm` → `alg-`, `theorem` → `thm-`,
  `lemma` → `lem-`, `proposition` → `prop-`, `corollary` → `cor-`, `example` →
  `ex-`, `counterexample` → `cex-`, `false-statement` → `fs-`, `remark` → `rem-`, `open-problem` → `op-`.
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
- Authored build batch items checked by `tools/content-policy.mjs` without
  `--audit` or `--manifest-only` require `provenance.statement` (`ai-generated`,
  `ai-altered`, or `literature-derived`) and `provenance.proof` (those values,
  `not-supplied`, or `not-applicable`). Only definitions, algorithms, remarks and open problems may use
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
  corollary, example, counterexample, or open problem. Set `generation.role` to
  `direct-corollary`, `example`, `counterexample`, or `open-problem`, respectively. Such a
  statement cannot be a `deps` target.
  Omit `generation` for other statement provenance.

### Later material

- `forward_refs: [id, ...]` declares linked targets on strictly later planned
  pages. Do not repeat them in `deps` or `justified_by`. Only corollaries,
  examples, counterexamples, false statements, and remarks may use one outside
  Remarks. Same-page links are ordinary links.
- Active library items must supply their mathematical arguments locally or
  depend on proved local suppliers. `proved_here: false`, nonempty
  `external_refs`, and `external_dependency` fallback records are forbidden in
  active `items/` content and new authoring manifests, including audit scope.
  A citation documents a source; it does not replace a proof. If a required
  supplier cannot be proved, keep that branch blocked or remove its unsupported
  content rather than creating an unproved fallback.
- Historical archives and receipts retain their original metadata. The legacy
  `proved_here`, `external_refs`, and `external_dependency` fields remain
  readable for historical evidence; they confer no active authoring permission.
  Validators inspect active `items/` content, not historical archive copies.

### Verification fields

- `verification.precheck: pass` records a successful format check;
  `n/a` applies when no proof phase is applicable, such as a definition, algorithm or
  prose remark. Historical unproved archives may retain their original `n/a`
  marker. A format pass is not a proof of mathematical validity.
- A published proved-here item needs `verification.audited` (owner audit) or
  `verification.verified` (delegated audit with `model`, `verdict`, `date`,
  `scope`, and `delegated_by`). Historical unproved archives may retain
  `verification.sources_checked` (`date`, `scope`, `by`); this marker grants
  no permission for active unproved content. A judge stamp alone does not
  satisfy publication checks.
- An authorized correction to an **already published** proved-here item may
  replace stale audit stamps with `verification.repair: research/<receipt>.json`
  under CLAUDE §8. This records a local repair, not a whole-item audit or new
  mathematical acceptance. Initial publication still requires the audit above.
  `tools/published-repair-policy.mjs` requires a version-1
  `recorded-local-published-repair` receipt with `id`, `run`, `group`, a concrete
  `correction`, current canonical `content_sha256` (verification excluded), a
  durable `before_file`, its raw `before_raw_sha256` and canonical `pre_sha256`,
  and `recorded_at`. The pre-edit carrier must already be published with a
  prior `verification.audited` or `verification.verified` marker, or an exact
  authenticated prior publication bound by `prior_publication_commit`. The
  latter must be an ancestor commit containing the same canonical published
  carrier, committed before the pre-edit ownership claim; it records historical
  publication provenance and grants no new audit coverage. Its hash and owner
  must match the actual run's pre-edit published ownership claim.
  An exact physics-to-root mathematical context import may instead supply
  `prior_publication_context: {path, sha256, source_path}` together with its
  `prior_publication_commit`; see [the strict import lineage protocol](tools/physics-math-context-import.md#recorded-root-repairs-of-imported-publication).
  It authenticates the original published physics carrier and immutable import
  before the explicit pre-edit claim, without changing either or supplying an
  audit. The current root successor still owes every ordinary local repair guard.
  `ledger_marker` and `ledger_sha256` bind the exact text between unique
  `<!-- local-published-repair:MARKER:begin -->` and corresponding `:end`
  markers in the canonical published ledger; that text identifies the item and
  current hash. `local_checks.precheck` and `.rendercheck` each record the
  actual command, successful output, exit code, check date and current content
  hash. For a definition, algorithm, remark, or example that has no phase proof in either the
  original or corrected carrier and retains its kind, precheck records its actual
  one-file `--json` result with status `not-applicable`, zero checked proofs
  and zero failures; renderer and ownership checks remain mandatory.
  Depcheck reports this state as `published-local-repair`; stale,
  missing or mismatched evidence remains an error. There is no item gate,
  rejudgment or adjudication duty for this recorded repair state.

  If genuine delegated edits already happened without serializing ownership,
  the owner may use the explicit `published-repairs.mjs adopt` recovery in
  WORKFLOW.md. An `owner-adopted-delegated-repair` claim carries its actual
  adoption date and a hash-bound adoption receipt; it is never a backdated
  pre-edit claim. The original raw archive must equal an ancestor published Git
  carrier even if it contains an audit stamp. Separate delegated repair and
  focused owner acceptance JSON bind the original and corrected raw snapshots
  and canonical hashes. Verification-only changes after adoption are allowed;
  changes to the mathematical carrier invalidate the evidence. Ordinary local
  check and canonical ledger requirements above still apply, with checks after
  adoption. This recovery grants no audit, judge or native workflow coverage.
  Later delegated normalization of an adopted carrier uses the explicit
  `adopt-refresh` history protocol in WORKFLOW.md. The original publication and
  ownership scope remain fixed; predecessor evidence is preserved and
  reauthenticated against its own snapshot. New local checks must follow the
  actual refresh date.

### Open problems

An `open-problem` (displayed as **Open problem**) records a precise unresolved
question or conjectural claim, not an established result. Use an `op-` ID,
`## Open problem` for its formulation and hypotheses, and `## Status` for its
unresolved status, date, known partial results and authoritative sources.
Omit legacy `proved_here: false`, `external_refs`, and `external_dependency`
fallback records; the class itself records the unproved status. Include an HTTP(S) source for the formulation/status and
`provenance.proof: not-applicable`; `verification.precheck`, if present, is `n/a`.
Do not supply a claimed Proof/Refutation/Verification/Counterexample section,
`proof_strategy`, or proof-acceptance `judge`, `audited`, or `verified` stamps.
Publication requires structured `verification.sources_checked` with `date`,
`scope`, and `by`; it records source/status review, not a solution.

An open problem may depend on established definitions/results needed to
formulate it. It may never be a target of another item's `deps` or
`justified_by`, including through aliases or indirect prerequisite chains.
Proofs and Facts & Assumptions may not cite it as a premise. Contextual
wikilinks belong in Remarks; nonlogical later references retain the ordinary
`forward_refs` ordering rules. Proved partial results are separate ordinary
result items and never assume the open conclusion.

All genuinely unproved claims belong in this class. An established theorem
whose local proof has not yet been authored is an authoring obligation, not
an unresolved mathematical problem. Definitions, adopted physical postulates,
and reported observations retain their existing nonproof classes. For example,
Navier–Stokes equations are a model/formulation; the exact three-dimensional
global existence/regularity question is an open problem. Claimed solutions
awaiting scrutiny do not become established proof suppliers.

An open-problem item contract uses `open_problem_review` with `formulation`,
`status`, and `sources`, each `{verdict: pass, evidence: ...}`. It has no
proof-step derivations, routine steps, or boundary worksheets.

### Algorithms

An `algorithm` is a definition of a procedure, with the same provenance,
well-definedness, dependency, review and publication rules as a mathematical
definition. Use `## Definition` and state inputs, outputs, admissible conditions
and exact instructions. Instructions may be prose, ordered lists or fenced
pseudocode; branches and repetitive loops are operational instructions rather
than phase-stratified proof steps.

An algorithm may be a sequence or composition of smaller algorithms/procedures,
and may invoke a smaller algorithm repeatedly. If large algorithm B uses small
algorithm A, B lists A in `deps`: the graph edge is A → B. Declare an edge once
regardless of the number of invocations. Execution loops do not create self-edges
or relax the existing acyclic prerequisite graph.

Algorithmic properties (correctness, termination, complexity, invariants, etc.)
are mathematical consequences in separate lemmas, theorems, propositions,
corollaries or other ordinary result kinds, with complete proofs. Their `deps`
include the algorithm they analyze. Use `justified_by` for well-definedness
results that depend on the algorithm, following the existing definition rule;
do not add the reverse `deps` edge. Use `provenance.proof: not-applicable` when
no proof is supplied, exactly as for definitions; any supplied argument retains
all ordinary proof-format and contract checks. Changing the original procedure
in `## Definition` triggers the same direct and indirect consumer duties.

## Item bodies

- Use `## Definition` for a definition or algorithm; `## Statement` and `## Proof` for a
  theorem, lemma, proposition, or corollary; `## Example` and optional
  `## Verification` for an example; `## Statement refuted` and
  `## Counterexample` for a counterexample; `## Statement` and
  `## Refutation` for a false statement. Open problems use `## Open problem` and `## Status`. Remarks may use prose headings.
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
  `tools/precheck.mts`. The wrapper checks declarations and every proof section;
  source notes, bibliography and editorial remarks after the last proof section
  are outside the phase proof. Adopt any repair it proposes before recording a pass.
  Proof-contract step references include explicit `step p.q` citations and bare
  labels that occur in the current proof. Decimal constants such as `1.000001`
  do not become nonexistent step references; an explicitly cited missing step
  still fails validation.
- Use `$...$` for inline math and `$$...$$` for display math. A display formula
  must occupy one source line between delimiters; put delimiters on separate
  lines when display-only KaTeX features such as `\tag` or `CD` are needed.
  Avoid wikilinks or nested dollars inside math, dollars inside `\tag{}`,
  blank lines in inline math, and `\(...\)` or `\[...\]` delimiters. KaTeX must
  parse each expression. Keep fenced `tikz` and `tikzcd` outside Facts and
  proof-like sections.

## Pages and categories

Set Theory uses the internal category identifier `set-theory` and directory
`library/set-theory/` (renamed from `foundations` on 2026-10-12). Page and item
identities are unchanged; historical run receipts retain their recorded paths.

- Page file: `library/<category>/<page>.md`. Frontmatter uses `page`, `title`,
  `status`, `items: [id, ...]`, and `examples: [id, ...]`; the body is the page
  summary. The two lists control placement, not item kind. Entries must resolve
  and cannot repeat. A published page may list only published items.
  Published-category audits remove the summary body and set
  `audit_layout: statement-first-v1`: prerequisites render as a closed native
  disclosure, no summary is displayed, and the logical flowchart contains every
  item in both placement lists. Category overviews/pathway briefs remain required.
  Audited Statement/Definition sections contain continuous mathematical prose
  without hyperlinks. Move references to an immediately following
  `## Statement references` or `## Definition references` section, with each
  link in a separate paragraph. Retain the full claim, logical dependencies,
  attribution and proof facts. See [the audit contract](tools/autopilot/AUDIT.md).
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
  over 120 words warn. Every active category follows these pathway rules.

Track pair tables may declare a canonical category column. `validate-plan`
checks that explicit category for both pages of each pair and their authored
directory paths; legacy tables retain their track category. The differential
geometry track assigns DG-25–DG-34 to Lie Theory and its remaining pairs to
Differential Geometry under the owner-approved 2026-10-07 rehome.

## Checks

- `tools/depcheck.mjs` checks IDs, dependencies, page lists, cycles, and
  publication evidence; `tools/fwdcheck.mjs` and `tools/extcheck.mjs` check
  later references and enforce retirement of active unproved records and
  external references.
- `tools/precheck.mts` checks proof format; `tools/rendercheck.mjs` checks YAML,
  math, and diagram rendering; `tools/pathcheck.mjs` checks category overviews
  and pathways.
- `node tools/proof-layout.mjs items/<id>.md ...` checks step separation and
  blue tags using the actual renderer. Run it after the final item edit or
  formatter. Step 6 requires 100% of numbered rows to have valid blue chips;
  the older line-based precheck's 70% threshold alone is insufficient.
- `tools/content-policy.mjs` applies provenance, source, and generated-claim
  rules to an explicit run or audit scope. Other run gates and their commands
  are described in [WORKFLOW.md](WORKFLOW.md).

Active plans may use A, B and existing-prerequisite P pages. The historical X catalogue page kind and `not-proved-here` category are retired and rejected by `validate-plan`.
