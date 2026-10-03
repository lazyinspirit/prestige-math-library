# Alpha

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-38-owner-30-alpha-groups.json` is the assignment: it permits at
most ten groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators and all three owner repair agents may fully author new items only
for genuine unmet prerequisites of assigned repairs. Use unique IDs and register
each addition in the canonical registry/index, page, applicable manifest and
contract. Resolve dependency and downstream effects before central certification
and the complete gate battery. Otherwise report the issue without changing it.
Current Step-7 dispatches also follow
`step7-adjudicator.md` or `step7-owner-repair.md`; their tasks authorize assigned
published downstream repairs across the whole library.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 task ownership rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Logical validity is the ground truth; authoritative sources and judges can err.
State uncertainty honestly and consult primary sources when unsure.
Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. Current Step-7 adjudication repairs every confirmed defect,
including `confirmed_nonfatal`; `confirmed_fatal` additionally enters the fatal
threshold count. A `false_positive` requires evidence without unnecessary edits.
The task controls repair ownership, fresh downstream continuation and any
required rejudge; never initiate a cycle independently.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-38-owner-30
role: alpha-group-read
label: f
covers: f

# Step 6 Alpha group reader — read-only digest — group **f**, run `frontier-38-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **7**, **8**, **28**: 3 A/B pair(s), 6 page(s), 85 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `projectives-standard-filtrations-and-bgg-reciprocity` | A | lie-theory | 510.009 | `category-o-finiteness-duality-and-blocks`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `projective-and-injective-resolutions`, `ext-and-balanced-resolutions`, `yoneda-extensions-and-homological-dimension`, `modular-representations-and-projective-covers` |
| 7 | `projectives-standard-filtrations-and-bgg-reciprocity-examples` | B | lie-theory | 510.01 | `projectives-standard-filtrations-and-bgg-reciprocity` |
| 8 | `the-bgg-resolution` | A | lie-theory | 510.011 | `homomorphisms-between-verma-modules-and-linkage`, `finite-weyl-invariants-bruhat-and-kostant-harmonics`, `chain-complexes-and-homology`, `category-o-finiteness-duality-and-blocks`, `tor-flatness-and-global-dimension` |
| 8 | `the-bgg-resolution-examples` | B | lie-theory | 510.012 | `the-bgg-resolution` |
| 28 | `coherent-duality-on-projective-cohen-macaulay-schemes` | A | algebraic-geometry | 903 | `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `sheaf-cohomology-cech-cohomology-and-comparison`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `derived-categories`, `ext-and-balanced-resolutions`, `smooth-projective-serre-duality-and-flag-variety-line-bundles` |
| 28 | `coherent-duality-on-projective-cohen-macaulay-schemes-examples` | B | algebraic-geometry | 904 | `coherent-duality-on-projective-cohen-macaulay-schemes` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `projectives-standard-filtrations-and-bgg-reciprocity` — Projectives Standard Filtrations and Bgg Reciprocity (29 item(s))

- `def-truncated-category-o-at-a-finite-weight-ideal` · definition — Truncation at a finite downward-closed ideal of a linkage class
- `lem-maximal-label-vectors-in-a-finite-truncation-are-singular` · lemma — Weight-lambda vectors are singular at a maximal label
- `lem-maximal-verma-is-projective-in-a-finite-truncation` · lemma — A maximal-label Verma is projective in its truncation
- `lem-dominant-weights-are-maxima-of-their-weyl-orbits` · lemma — Dominant integral weights are maxima of their Weyl orbits
- `lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective` · lemma — Finite-dimensional tensoring preserves projectives in category O
- `lem-block-projection-preserves-projectives` · lemma — Exact projections onto linkage blocks preserve projectives
- `lem-finite-dimensional-tensors-reach-every-block-simple` · lemma — Finite-dimensional tensoring reaches every simple of a linkage class
- `lem-finite-length-objects-decompose-into-indecomposables` · lemma — Fitting decomposition in a finite-length abelian category
- `prop-projective-covers-in-o-are-indecomposable-and-unique` · proposition — Projective covers in O are indecomposable and unique
- `thm-category-o-has-enough-projectives` · theorem — Category O has enough projectives
- `lem-hom-from-projectives-counts-simple-composition-factors` · lemma — Hom from a projective counts simple composition factors
- `def-verma-flag-and-its-multiplicities` · definition — Finite Verma flags and their multiplicities
- `lem-verma-flag-multiplicities-are-independent-of-the-flag` · lemma — Verma-flag multiplicities are independent of the flag
- `lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags` · lemma — Finite-dimensional tensoring preserves Verma flags
- `lem-maximal-weight-verma-peels-off-a-standard-filtration` · lemma — Peeling a maximal-weight Verma from a standard filtration
- `lem-direct-summands-of-verma-filtered-objects-are-verma-filtered` · lemma — Direct summands of Verma-filtered objects are Verma-filtered
- `thm-projectives-in-category-o-have-verma-flags` · theorem — Projectives in category O have finite Verma flags
- `lem-standard-costandard-hom-and-ext-vanishing` · lemma — Standard-costandard Hom and Ext-one orthogonality
- `lem-hom-to-costandards-counts-verma-flag-factors` · lemma — Hom to costandards counts Verma-flag factors
- `thm-bgg-reciprocity` · theorem — BGG reciprocity
- `cor-projective-standard-labels-lie-above-the-head` · corollary — The triangular restriction on projective Verma flags
- `cor-injectives-have-costandard-filtrations` · corollary — Injectives have costandard filtrations
- `def-dot-action-facets-and-single-wall-translation-data` · definition — Dot-Weyl facets and single-wall translation data
- `def-translation-functor-between-o-blocks` · definition — Translation functors by tensoring and projection
- `prop-translation-functors-are-exact-and-biadjoint-across-a-wall` · proposition — Translation functors are exact and biadjoint
- `lem-weight-norm-bound-for-finite-dimensional-simple-modules` · lemma — Weights of a finite-dimensional simple module lie in the norm ball
- `lem-dominant-norm-distance-comparison` · lemma — A dominant vector minimises its distance to a dominant weight
- `lem-single-wall-tensor-weight-exclusion` · lemma — The single-wall tensor-weight exclusion lemma
- `thm-translation-to-and-from-a-wall-on-standard-modules` · theorem — Translation to and from a single wall on standard modules

### `projectives-standard-filtrations-and-bgg-reciprocity-examples` — Projectives Standard Filtrations and Bgg Reciprocity — Examples (7 item(s))

- `ex-projective-covers-in-the-regular-sl2-block` · example — The two projectives in the principal sl2 block
- `ex-bgg-reciprocity-matrix-for-sl2` · example — The sl2 reciprocity matrices
- `ex-translation-through-the-sl2-wall` · example — Translation through the sl2 wall
- `cex-a-verma-module-need-not-be-projective-in-the-whole-block` · counterexample — A Verma module need not be projective in its block
- `cex-a-projective-verma-flag-need-not-split` · counterexample — A projective Verma flag need not split
- `ex-truncation-projectivity-does-not-mean-block-projectivity` · example — The same Verma in two ambient categories
- `cex-standard-filtrations-are-not-closed-under-quotients` · counterexample — Verma filtrations are not closed under quotients

### `the-bgg-resolution` — The Bgg Resolution (30 item(s))

- `lem-positive-root-pairings-of-a-dominant-integral-weight` · lemma — Positive coroot pairings of a dominant integral weight
- `lem-bruhat-covers-are-reflection-covers` · lemma — Bruhat covers are right multiplication by positive-root reflections
- `def-bgg-bruhat-verma-sum-in-degree-k` · definition — The Bruhat graph and the BGG Verma sum in degree k
- `lem-dominant-integral-dot-translates-embed-in-the-verma-module` · lemma — Dominant integral dot translates embed canonically in the Verma module
- `lem-bruhat-covers-give-unique-verma-embeddings` · lemma — Bruhat covers give canonical Verma embeddings, and composites are inclusions
- `lem-bruhat-rank-two-intervals-are-diamonds` · lemma — Bruhat intervals of rank two are diamonds
- `def-verma-type-of-a-module-with-a-standard-filtration` · definition — Type of a module with a Verma filtration
- `lem-induced-modules-from-finite-dimensional-b-modules-have-type-the-weights` · lemma — Induced modules from finite-dimensional B-modules have type their weights
- `lem-tensoring-a-verma-module-by-a-finite-dimensional-module-shifts-types` · lemma — Tensoring a Verma module by a finite-dimensional module shifts the type
- `lem-central-character-cuts-of-a-typed-module-are-typed` · lemma — Central-character cuts of a typed module are typed by the matching weights
- `lem-weight-subsets-with-equal-root-sums-are-unique` · lemma — Weight subsets with equal root sums are unique
- `def-standard-induced-resolution-of-the-trivial-module` · definition — The standard induced resolution of the trivial module
- `thm-standard-induced-resolution-is-exact` · theorem — The standard induced complex is a resolution of the trivial module
- `lem-compatible-signs-exist-on-the-bruhat-graph` · lemma — Compatible signs exist on the Bruhat graph
- `def-bgg-differential-from-signed-verma-maps` · definition — The BGG differential from signed Verma maps
- `prop-the-bgg-differential-squares-to-zero` · proposition — The BGG differential squares to zero
- `lem-the-bgg-augmentation-has-image-the-simple-module` · lemma — The augmentation kernel is the sum of the simple-reflection Verma submodules
- `lem-weak-bgg-base-case-for-the-trivial-module` · lemma — Weak BGG resolution of the trivial module
- `thm-weak-bgg-resolution` · theorem — Weak BGG resolution
- `lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules` · lemma — Surjectivity modulo n-minus for free weight-generated modules (BGG 10.5)
- `lem-jordan-holder-factors-of-verma-modules-lie-above-the-head` · lemma — Jordan-Holder factors of Verma modules dominate the head (BGG 8.12)
- `lem-kernel-generators-for-the-weak-bgg-complex` · lemma — Composition factors of the BGG kernel lie above the degree (BGG 10.6a)
- `lem-nonzero-highest-weight-images-survive-modulo-n-minus` · lemma — Nonzero highest-weight images survive modulo n-minus (BGG 10.6b)
- `lem-n-minus-coinvariants-map-injectively-into-the-kernel-of-the-differential` · lemma — The BGG differential is injective modulo n-minus onto the kernel (BGG 10.6)
- `lem-verma-filtered-objects-are-acyclic-for-n-minus-coinvariants` · lemma — Verma-filtered objects are acyclic for n-minus coinvariants
- `lem-tor-with-the-trivial-module-is-computed-by-the-weak-bgg-resolution` · lemma — Tor with the trivial module is computed by the weak BGG resolution
- `lem-dimension-of-the-kernel-modulo-n-minus-equals-the-next-term` · lemma — Dimension of the kernel modulo n-minus equals the next term (BGG 10.7)
- `thm-bgg-resolution-of-a-finite-dimensional-simple-module` · theorem — The BGG resolution of a finite-dimensional simple module
- `cor-bgg-euler-character-identity` · corollary — The Euler-character identity for a finite-dimensional simple module
- `cor-bgg-resolution-has-length-the-number-of-positive-roots` · corollary — The BGG resolution has length the number of positive roots

### `the-bgg-resolution-examples` — The Bgg Resolution — Examples (5 item(s))

- `ex-the-sl2-bgg-resolution` · example — The BGG resolution for sl2
- `ex-the-a2-bgg-resolution-with-six-verma-summands` · example — The A2 BGG resolution with six Verma summands
- `ex-sign-cancellation-in-an-a2-bruhat-diamond` · example — Sign cancellation in an A2 Bruhat diamond
- `cex-unsigned-bruhat-edge-sums-need-not-square-to-zero` · counterexample — Unsigned Bruhat edge sums need not square to zero
- `cex-the-regular-bgg-complex-cannot-be-used-unchanged-at-a-singular-weight` · counterexample — The BGG complex cannot be used unchanged at a singular weight

### `coherent-duality-on-projective-cohen-macaulay-schemes` — Coherent Duality on Projective Cohen-Macaulay Schemes (11 item(s))

- `def-dualizing-complex-on-projective-cm-scheme` · definition — Dualizing complexes and the normalized dualizing sheaf on a projective CM scheme
- `lem-finite-closed-immersion-derived-coinduction-adjunction` · lemma — Derived adjunction for finite rings and closed immersions
- `lem-regular-quotient-dualizing-complex-and-biduality` · lemma — Dualizing complexes and coherent biduality for regular-ring quotients
- `lem-cm-quotient-of-regular-local-ring-ext-concentration` · lemma — Ext concentration for a Cohen-Macaulay quotient of a regular local ring
- `lem-projective-embedding-dualizing-complex-existence` · lemma — Existence and biduality from a projective embedding
- `lem-projective-space-derived-coherent-duality` · lemma — Derived coherent duality on projective space
- `lem-projective-dualizing-complex-trace-and-embedding-independence` · lemma — Normalized trace and independence of a projective embedding
- `lem-projective-pure-cm-dualizing-complex-concentration` · lemma — Concentration of the projective dualizing complex on a pure CM scheme
- `thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme` · theorem — Serre duality for coherent sheaves on a projective Cohen-Macaulay scheme
- `rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case` · remark — The smooth projective locally free theorem is the special case
- `rem-curve-residue-duality-is-the-dimension-one-case` · remark — Curve duality and its residue normalization in dimension one

### `coherent-duality-on-projective-cohen-macaulay-schemes-examples` — Coherent Duality on Projective Cohen-Macaulay Schemes — Examples (3 item(s))

- `ex-serre-duality-on-a-singular-projective-cm-curve` · example — Coherent duality on a singular plane cubic
- `ex-serre-duality-on-a-smooth-projective-surface` · example — Surface duality for twists and a skyscraper on the projective plane
- `cex-serre-duality-without-properness` · counterexample — The affine line disproves the proper duality formula without properness

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 Alpha group reader — read-only digest, `frontier-38-owner-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.
