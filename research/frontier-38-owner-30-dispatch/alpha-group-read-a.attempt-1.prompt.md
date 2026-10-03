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
label: a
covers: a

# Step 6 Alpha group reader — read-only digest — group **a**, run `frontier-38-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **2**, **22**, **29**: 3 A/B pair(s), 6 page(s), 92 item(s).

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
| 2 | `blowups-exceptional-divisors-and-strict-transforms` | A | scheme-theory | 366.091 | `fibre-products-base-change-and-scheme-theoretic-fibres`, `finite-proper-and-projective-morphisms`, `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `cartier-and-weil-divisors-line-bundles-and-picard-groups`, `rees-modules-artin-rees-and-hilbert-samuel-theory`, `normalization-finiteness-for-affine-domains`, `sheaf-cohomology-cech-cohomology-and-comparison`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `regular-local-rings-and-homological-dimension`, `flat-smooth-and-etale-morphisms`, `linear-independence-bases-and-dimension`, `tensor-products-of-modules`, `krull-dimension-and-height-theorems`, `koszul-complexes-and-regular-sequences`, `relations-functions-and-quotients`, `countability-and-uncountability`, `sheaf-operations-exactness-ringed-spaces-and-module-pullback`, `derived-functors`, `riemann-roch-for-curves-via-euler-characteristics`, `smooth-proper-curves-divisors-genus-and-ramification` |
| 2 | `blowups-exceptional-divisors-and-strict-transforms-examples` | B | scheme-theory | 366.092 | `blowups-exceptional-divisors-and-strict-transforms` |
| 22 | `group-schemes-of-finite-type-over-a-field` | A | scheme-theory | 871 | `affine-schemes-and-the-structure-sheaf`, `schemes-subschemes-and-morphisms-locally-of-finite-type`, `fibre-products-base-change-and-scheme-theoretic-fibres` |
| 22 | `group-schemes-of-finite-type-over-a-field-examples` | B | scheme-theory | 872 | `group-schemes-of-finite-type-over-a-field`, `determinants-of-matrices-over-a-commutative-ring` |
| 29 | `hilbert-functors-and-projective-hilbert-schemes` | A | scheme-theory | 905 | `flat-smooth-and-etale-morphisms`, `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` |
| 29 | `hilbert-functors-and-projective-hilbert-schemes-examples` | B | scheme-theory | 906 | `hilbert-functors-and-projective-hilbert-schemes` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `blowups-exceptional-divisors-and-strict-transforms` — Blowups Exceptional Divisors and Strict Transforms (49 item(s))

- `def-rees-algebra-ideal-sheaf` · definition — Rees algebra sheaf of a finite type ideal
- `def-blowup-scheme-along-ideal` · definition — Blowup of a scheme along an ideal sheaf
- `def-exceptional-divisor-blowup` · definition — Exceptional subscheme of a blowup
- `lem-regular-sequence-associated-graded-polynomial` · lemma — Associated graded algebra of an ideal generated by a regular sequence
- `lem-affine-blowup-algebra-properties` · lemma — Affine blowup algebras: normal form, nonzerodivisors, reducedness, domains
- `thm-affine-blowup-standard-charts` · theorem — Affine blowup standard charts and overlaps
- `lem-blowup-local-on-base-scheme` · lemma — Blowups restrict to open subschemes of the base
- `lem-blowup-independent-ideal-generators` · lemma — The blowup is independent of chosen ideal generators
- `thm-pullback-center-ideal-invertible` · theorem — The pulled-back center ideal is the relative twist; the exceptional divisor is Cartier
- `lem-affine-blowup-chart-universal-property` · lemma — Universal property of an affine blowup chart
- `thm-blowup-universal-property` · theorem — Universal property of the blowup
- `cor-blowup-unique-up-to-unique-isomorphism` · corollary — Uniqueness of the blowup
- `lem-blowup-isomorphism-off-center` · lemma — The blowup is an isomorphism off the center
- `thm-blowup-projective` · theorem — Blowups of finite type ideals are locally H-projective, and proper
- `cor-blowup-birational-integral-scheme` · corollary — Blowing up a nonzero ideal on an integral scheme is birational
- `thm-blowup-base-change-flat` · theorem — Flat base change for blowups, and failure without flatness
- `def-strict-transform-closed-subscheme` · definition — Strict transform of a closed subscheme
- `def-total-transform-divisor` · definition — Total transform of a Cartier divisor
- `lem-total-transform-strict-plus-exceptional-multiplicity` · lemma — Total transform equals strict transform plus multiplicity times the exceptional divisor
- `thm-exceptional-divisor-normal-cone-proj` · theorem — The exceptional divisor is the projectivized normal cone
- `cor-exceptional-divisor-smooth-center-normal-bundle` · corollary — Regular centers have projective-bundle exceptional divisors
- `thm-blowup-effective-cartier-divisor-isomorphism` · theorem — Blowing up an effective Cartier divisor does nothing
- `thm-blowup-smooth-surface-point-charts` · theorem — Blowing up a rational point of a smooth surface
- `lem-affine-point-blowup-pushforward-vanishing` · lemma — Pushforward and vanishing for an affine point blowup
- `lem-blowup-point-pushforward-vanishing` · lemma — Pushforward and vanishing for point blowups on a surface
- `lem-projection-formula-invertible-twist` · lemma — Projection formula for invertible twists
- `lem-exceptional-fiber-line-bundle-euler-characteristic` · lemma — Euler characteristic of line bundles on a projective line over a finite field extension
- `thm-blowup-regular-surface-closed-point-regular` · theorem — Point blowups of regular surfaces stay regular, with rational exceptional fibre over the residue field
- `lem-exceptional-curve-normal-bundle-minus-one` · lemma — The normal bundle of the exceptional curve is O(-1)
- `lem-blowup-plane-origin-incidence-equations` · lemma — The blowup of the plane at the origin as an incidence scheme
- `thm-blowup-separates-plane-curve-tangent-directions` · theorem — Strict transforms of plane curves record tangent directions
- `lem-plane-curve-multiplicity-transform-chart` · lemma — Strict-transform equation by removing the maximal exceptional power
- `thm-normalization-reduced-curve-exists-finite` · theorem — Normalization of a reduced curve is finite
- `def-normalization-defect-of-reduced-curve` · definition — Normalization defect delta of a reduced curve
- `lem-normalization-defect-euler-and-lengths` · lemma — The normalization defect is an Euler characteristic and a weighted sum of local lengths
- `lem-normalization-unchanged-under-finite-birational-curve-map` · lemma — Normalization is unchanged under finite birational maps of reduced curves
- `lem-blowup-multiplicity-euler-characteristic-drop` · lemma — Euler characteristic and normalization defect under a point blowup
- `def-contact-order-regular-components` · definition — Contact order of two regular components at a point
- `lem-blowup-lowers-contact-order` · lemma — A point blowup lowers pairwise contact order by one and separates transverse branches
- `lem-blowup-separates-transverse-components` · lemma — Blowing up a multiple point separates pairwise transverse components
- `thm-resolution-plane-curves-by-point-blowups` · theorem — Resolution of reduced plane curves by point blowups and the delta recurrence
- `def-blowup-fractional-ideal` · definition — Invariance of the blowup under invertible (fractional) rescaling of the ideal
- `lem-blowup-power-of-ideal-same` · lemma — Blowing up I and I^d agree
- `lem-blowup-reduced-integral-under-domain-rees` · lemma — Integrality and reducedness of blowups from the Rees charts
- `thm-blowup-closed-immersion-transform-universal` · theorem — Strict transforms of closed subschemes are blowups of the subscheme
- `cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup` · corollary — Blowing up the base ideal resolves a rational map to projective space
- `rem-blowup-does-not-mean-delete-point` · remark — Blowing up replaces the center by its projectivized normal directions
- `rem-resolution-higher-dimension-not-claimed` · remark — No inference to general resolution of singularities
- `lem-acyclic-direct-image-cohomology-comparison` · lemma — Cohomology comparison when higher direct images vanish

### `blowups-exceptional-divisors-and-strict-transforms-examples` — Blowups Exceptional Divisors and Strict Transforms - Examples (12 item(s))

- `ex-blowup-affine-plane-origin-two-charts` · example — Two charts of the blowup of the affine plane at the origin
- `ex-blowup-affine-three-space-origin-exceptional-p2` · example — Exceptional divisor of the blowup of A^3 at the origin is P^2
- `ex-blowup-principal-ideal-isomorphism` · example — Blowing up a principal ideal of a nonzerodivisor does nothing
- `ex-blowup-ideal-power-same-proj` · example — Blowing up I and I^2 give the same scheme
- `ex-strict-transform-cusp-first-blowup` · example — First blowup of the cusp y^2=x^3
- `ex-strict-transform-node-separates-branches` · example — First blowup of the node y^2=x^3+x^2 separates its branches
- `ex-blowup-rational-map-p1` · example — Resolving the rational map [x:y] at the origin
- `cex-blowup-arbitrary-base-change-failure` · counterexample — Nonflat base change of a blowup can fail
- `cex-blowup-singular-center-not-smooth` · counterexample — Blowing up a point on a singular surface need not be smooth
- `cex-normalization-not-blowup-and-blowup-not-normalization` · counterexample — Normalization and blowup are different operations
- `ex-total-versus-strict-transform-line-through-origin` · example — Total and strict transform of a line through the origin
- `ex-empty-center-blowup-identity` · example — Blowing up the empty center is the identity

### `group-schemes-of-finite-type-over-a-field` — Group Schemes of Finite Type over a Field (3 item(s))

- `def-group-scheme-over-a-field` · definition — Group schemes of finite type over a field
- `def-morphism-and-closed-subgroup-scheme` · definition — Morphisms and closed subgroup schemes of group schemes
- `lem-closed-subgroup-scheme-valued-point-criterion` · lemma — Closed subgroup schemes are detected on all algebra-valued points

### `group-schemes-of-finite-type-over-a-field-examples` — Group Schemes of Finite Type over a Field — Examples (2 item(s))

- `ex-additive-multiplicative-and-general-linear-group-schemes` · example — The group schemes Ga, Gm, and GLn
- `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme` · counterexample — Rational points do not detect the group-scheme structure of alpha_p and mu_p

### `hilbert-functors-and-projective-hilbert-schemes` — Hilbert Functors and Projective Hilbert Schemes (22 item(s))

- `def-castelnuovo-mumford-regularity` · definition — Castelnuovo\u2013Mumford regularity
- `lem-hilbert-regularity-propagation` · lemma — Regularity gives generation, multiplication, and vanishing
- `lem-hilbert-uniform-regularity-fixed-polynomial` · lemma — Uniform regularity for all quotients with a fixed Hilbert polynomial
- `lem-hilbert-relative-regularity-and-base-change` · lemma — Relative regularity, generation, and arbitrary base change
- `lem-hilbert-uniform-sections-after-flat-pullback` · lemma — A fixed presentation computes sections after every flat-family pullback
- `lem-hilbert-rank-flattening-finite-module` · lemma — Scheme structure of a finite-module rank stratum
- `lem-hilbert-universal-scheme-theoretic-flattening` · lemma — Universal scheme theoretic flattening by Hilbert polynomial
- `lem-hilbert-family-vanishing-locus` · lemma — Universal vanishing locus for a map into a flat projective family
- `def-projective-morphism-coherent-bundle-convention` · definition — Projectivity via a coherent projective bundle
- `lem-hilbert-euler-polynomial-for-ample-polarization` · lemma — Euler polynomial for an arbitrary ample polarization
- `def-hilbert-functor-of-flat-projective-subschemes` · definition — Hilbert functor of flat finitely presented projective families
- `lem-hilbert-families-fpqc-descent` · lemma — Effective descent and base change of embedded Hilbert families
- `lem-hilbert-relative-grassmannian-quotients` · lemma — Relative Grassmannian of finite locally free quotients
- `lem-hilbert-projective-space-construction` · lemma — Construction of the fixed-polynomial Hilbert scheme of projective space
- `lem-hilbert-valuative-flat-closure` · lemma — Flat schematic closure over an arbitrary valuation ring
- `lem-hilbert-proper-relative-ample-projectivity` · lemma — Properness and a relative ample line bundle give projectivity
- `lem-hilbert-regularity-independent-of-ambient-dimension` · lemma — A Hilbert polynomial bounds regularity independently of ambient dimension
- `lem-hilbert-coherent-projective-bundle-construction` · lemma — Global Hilbert strata in a coherent projective bundle over a locally Noetherian base
- `lem-hilbert-noetherian-base-fixed-polarization` · lemma — Fixed-polarization Hilbert construction over a Noetherian base
- `thm-hilbert-scheme-represents-projective-flat-families` · theorem — Projective Hilbert schemes represent all flat finitely presented families
- `lem-universal-family-and-hilbert-polynomial-strata` · lemma — Universal family and open and closed Hilbert polynomial strata
- `lem-hilbert-polynomial-finite-scheme-length` · lemma — The Hilbert polynomial of a finite scheme is its length

### `hilbert-functors-and-projective-hilbert-schemes-examples` — Hilbert Functors and Projective Hilbert Schemes — Examples (4 item(s))

- `ex-hilbert-polynomial-of-finite-points-on-p1` · example — The Hilbert polynomial of finite points on the projective line
- `cex-fibrewise-subschemes-without-flatness-do-not-form-a-hilbert-family` · counterexample — Constant fibre polynomial does not give flatness over a nonreduced base
- `ex-hilbert-base-change-of-a-fat-point-family` · example — A flat fat-point family and its base changes
- `ex-full-hilbert-functor-of-p1-has-infinitely-many-strata` · example — The full Hilbert functor need not be quasi-compact

## Your seams

Another group's pages depend on yours:

- `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` (group e) requires your `group-schemes-of-finite-type-over-a-field`
- `intersection-products-on-smooth-projective-surfaces` (group e) requires your `blowups-exceptional-divisors-and-strict-transforms`
- `groups-of-multiplicative-type-and-arithmetic-tori` (group i) requires your `group-schemes-of-finite-type-over-a-field`
- `point-blowup-resolution-on-arbitrary-regular-surfaces` (group i) requires your `blowups-exceptional-divisors-and-strict-transforms`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

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
