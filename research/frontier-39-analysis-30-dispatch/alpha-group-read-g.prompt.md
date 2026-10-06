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
group work, `research/frontier-39-analysis-30-alpha-groups.json` is the assignment: it permits at
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

run: frontier-39-analysis-30
role: alpha-group-read
label: g
covers: g

# Step 6 Alpha group reader — read-only digest — group **g**, run `frontier-39-analysis-30`

- You are the read-only Step 6 Alpha group reader for batches **12**, **14**, **24**: 3 A/B pair(s), 6 page(s), 90 item(s).

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
| 12 | `interior-and-boundary-sobolev-elliptic-regularity` | A | pde | 458.033 | `fredholm-elliptic-problems-and-the-elliptic-spectrum` |
| 12 | `interior-and-boundary-sobolev-elliptic-regularity-examples` | B | pde | 458.034 | `interior-and-boundary-sobolev-elliptic-regularity`, `conformal-mapping-branches-and-the-schwarz-lemma` |
| 14 | `weak-elliptic-maximum-principles-and-holder-regularity` | A | pde | 458.037 | `schauder-and-lp-elliptic-estimates`, `interior-and-boundary-sobolev-elliptic-regularity` |
| 14 | `weak-elliptic-maximum-principles-and-holder-regularity-examples` | B | pde | 458.038 | `weak-elliptic-maximum-principles-and-holder-regularity` |
| 24 | `primitive-ideals-and-duflo-theorem` | A | lie-theory | 510.019 | `harish-chandra-isomorphism-casimir-and-central-characters`, `verma-modules-and-shapovalov-forms`, `homomorphisms-between-verma-modules-and-linkage`, `category-o-finiteness-duality-and-blocks`, `projectives-standard-filtrations-and-bgg-reciprocity`, `lie-algebra-representations-enveloping-algebras-and-pbw`, `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` |
| 24 | `primitive-ideals-and-duflo-theorem-examples` | B | lie-theory | 510.02 | `primitive-ideals-and-duflo-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `interior-and-boundary-sobolev-elliptic-regularity` — Interior and Boundary Sobolev Elliptic Regularity (29 item(s))

- `def-first-difference-quotient` · definition — Difference quotients on a shrunken domain
- `lem-difference-quotient-integration-by-parts` · lemma — Difference-quotient calculus: integration by parts, product rule, commutation
- `lem-cutoff-difference-quotient-commutator-estimate` · lemma — The cutoff difference-quotient commutator estimate
- `lem-weak-limit-of-uniformly-bounded-difference-quotients-is-the-weak-derivative` · lemma — Uniformly bounded difference quotients represent a weak derivative
- `thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one` · theorem — The difference-quotient characterisation of $W^{1,p}$ for $1<p<\infty$
- `rem-the-p-one-difference-quotient-converse-leads-to-bv-not-w-one-one` · remark — At $p=1$ uniform difference-quotient bounds give only a measure derivative
- `def-local-weak-solution-for-a-divergence-form-operator` · definition — Local weak solutions of a divergence-form operator
- `thm-caccioppoli-inequality-for-weak-elliptic-solutions` · theorem — The Caccioppoli inequality for weak elliptic solutions
- `cor-scaled-caccioppoli-inequality-on-concentric-balls` · corollary — Scaled Caccioppoli inequality on concentric balls
- `lem-tangential-difference-quotient-test-function` · lemma — The difference-quotient test function and its commutators
- `lem-localisation-identity-for-a-divergence-form-weak-solution` · lemma — Localisation of a weak solution up to a bounded first-order term
- `lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates` · lemma — Absorption of lower-order Sobolev terms in the elliptic estimate
- `thm-interior-h-two-estimate-for-constant-coefficient-elliptic-equations` · theorem — Interior $H^2$ estimate for constant-coefficient elliptic equations
- `lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators` · lemma — The differentiated weak equation with coefficient commutators
- `thm-interior-h-two-regularity-for-divergence-form-equations` · theorem — Interior $H^2$ regularity for divergence-form equations
- `lem-nested-domain-induction-for-interior-elliptic-derivatives` · lemma — Nested-domain induction for interior elliptic derivatives
- `thm-interior-h-k-plus-two-elliptic-regularity` · theorem — Interior $H^{k+2}$ elliptic regularity
- `cor-smooth-data-give-smooth-interior-solutions` · corollary — Smooth data give smooth interior solutions
- `lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts` · lemma — Weak divergence-form equations are invariant under $C^2$ boundary charts
- `lem-c-two-boundary-flattening-transforms-uniform-ellipticity` · lemma — $C^2$ flattening preserves uniform ellipticity quantitatively
- `lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary` · lemma — Tangential $H^2$ estimate near a flat Dirichlet boundary
- `lem-normal-second-derivative-recovered-from-the-elliptic-equation` · lemma — The normal second derivative is recovered from the equation
- `lem-finite-boundary-and-interior-partition-glues-local-h-two-estimates` · lemma — A finite partition glues the local interior and boundary $H^2$ estimates
- `thm-global-h-two-dirichlet-regularity` · theorem — Global $H^2$ Dirichlet regularity
- `cor-global-h-two-estimate-without-the-ltwo-term-under-uniqueness` · corollary — The global $H^2$ estimate without the $L^2$ term under uniqueness
- `thm-higher-order-boundary-regularity-for-dirichlet-problems` · theorem — Higher-order boundary regularity for Dirichlet problems
- `cor-smooth-weak-dirichlet-solutions-are-classical` · corollary — Smooth weak Dirichlet solutions are classical
- `cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth` · corollary — Smooth coefficients and boundary make elliptic eigenfunctions smooth
- `rem-regularity-estimates-do-not-create-boundary-compatibility` · remark — Regularity estimates do not create boundary compatibility

### `interior-and-boundary-sobolev-elliptic-regularity-examples` — Interior and Boundary Sobolev Elliptic Regularity — Examples (10 item(s))

- `ex-poisson-equation-with-ltwo-data-gains-two-interior-derivatives` · example — Poisson's equation with $L^2$ data gains two interior derivatives
- `ex-piecewise-smooth-coefficient-produces-limited-regularity` · example — A piecewise-smooth coefficient gives an $H^2$ solution that is not twice classically differentiable
- `cex-interior-regularity-does-not-imply-boundary-regularity` · counterexample — Interior regularity does not imply boundary regularity
- `cex-boundary-h-two-regularity-needs-domain-regularity` · counterexample — Boundary $H^2$ regularity needs domain regularity
- `cex-h-two-estimate-needs-an-ltwo-kernel-term-without-injectivity` · counterexample — The $H^2$ estimate needs the $L^2$ kernel term without injectivity
- `ex-bootstrapping-a-smooth-poisson-problem` · example — Bootstrapping a smooth Poisson problem
- `cex-bounded-discontinuous-elliptic-coefficients-do-not-force-h-two-regularity` · counterexample — Bounded discontinuous elliptic coefficients need not give $H^2$ solutions
- `ex-reentrant-sector-harmonic-singularity-has-explicit-sobolev-threshold` · example — The reentrant sector singularity has an explicit Sobolev threshold
- `cex-higher-elliptic-regularity-cannot-exceed-the-forcing-regularity-by-more-than-two-derivatives` · counterexample — Higher elliptic regularity cannot gain more than two derivatives
- `cex-smooth-interior-data-do-not-repair-incompatible-dirichlet-corner-values` · counterexample — Smooth interior data do not repair incompatible Dirichlet corner values

### `weak-elliptic-maximum-principles-and-holder-regularity` — Weak Elliptic Maximum Principles and Holder Regularity (22 item(s))

- `def-weak-subsolution-and-supersolution-of-a-divergence-form-equation` · definition — Weak subsolutions and supersolutions of a divergence-form equation
- `lem-positive-part-is-an-admissible-weak-test-by-truncation` · lemma — Positive parts, level truncations and cut-off variants are admissible weak tests
- `lem-positive-part-of-a-zero-trace-function-has-zero-trace` · lemma — A function whose trace is at most a level has positive part in the zero-boundary space
- `lem-caccioppoli-inequality-for-truncated-subsolutions` · lemma — Caccioppoli inequality for truncated subsolutions
- `lem-sobolev-level-set-iteration-step` · lemma — Sobolev level-set step: energy decay with explicit level gap and radius loss
- `lem-nonlinear-geometric-iteration-sequence-converges-to-zero` · lemma — The nonlinear geometric iteration: an explicit threshold forces convergence to zero
- `thm-weak-maximum-principle-for-coercive-divergence-form-equations` · theorem — Weak maximum principle for coercive divergence-form equations
- `cor-weak-comparison-and-uniqueness` · corollary — Weak comparison and uniqueness for the Dirichlet problem
- `thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions` · theorem — De Giorgi local boundedness of homogeneous subsolutions
- `thm-de-giorgi-local-boundedness-with-scale-correct-forcing-term` · theorem — De Giorgi local boundedness with a scale-correct forcing term
- `lem-de-giorgi-oscillation-reduction` · lemma — De Giorgi oscillation reduction: one half-level set is small
- `thm-de-giorgi-nash-interior-holder-regularity` · theorem — De Giorgi-Nash interior Holder regularity for divergence-form equations
- `lem-geometric-oscillation-decay-implies-a-holder-modulus` · lemma — Geometric oscillation decay implies a Hölder modulus
- `lem-logarithmic-caccioppoli-estimate-for-positive-supersolutions` · lemma — Logarithmic Caccioppoli estimate for positive supersolutions
- `lem-moser-iteration-for-positive-supersolutions` · lemma — Moser iteration for positive supersolutions: negative-power and logarithmic comparison
- `thm-weak-harnack-inequality-for-nonnegative-supersolutions` · theorem — Weak Harnack inequality for nonnegative supersolutions
- `rem-weak-harnack-exponent-has-a-coefficient-and-dimension-dependent-upper-range` · remark — Weak-Harnack exponent range and its dimension-dependent upper endpoint
- `thm-harnack-inequality-for-nonnegative-weak-solutions` · theorem — Harnack inequality for nonnegative weak solutions
- `lem-finite-interior-ball-chain-propagates-weak-harnack-bounds` · lemma — A finite interior ball chain propagates weak Harnack bounds
- `lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution` · lemma — Zero-set propagation for a nonnegative Holder weak solution
- `cor-strong-maximum-principle-for-weak-elliptic-solutions` · corollary — Strong maximum principle for weak elliptic solutions
- `rem-scalar-de-giorgi-theory-does-not-transfer-verbatim-to-systems` · remark — Scalar De Giorgi theory does not transfer verbatim to systems

### `weak-elliptic-maximum-principles-and-holder-regularity-examples` — Weak Elliptic Maximum Principles and Holder Regularity — Examples (9 item(s))

- `ex-weak-and-classical-maximum-principles-agree-for-smooth-solutions` · example — The weak and the classical maximum principles agree on a smooth subsolution
- `ex-measurable-coefficients-with-a-holder-regular-weak-solution` · example — Measurable coefficients with a Holder-regular weak solution
- `cex-weak-maximum-principle-needs-the-zero-order-sign` · counterexample — The weak maximum principle needs the zero-order sign condition
- `cex-harnack-requires-nonnegativity` · counterexample — The Harnack inequality requires nonnegativity
- `ex-oscillation-decay-implies-a-holder-modulus` · example — Worked oscillation decay and its Hölder modulus
- `cex-degenerate-ellipticity-allows-nonconstant-solutions-with-interior-zero-sets` · counterexample — Degenerate ellipticity allows nonconstant solutions with interior zero sets
- `cex-harnack-estimate-needs-an-additive-forcing-term` · counterexample — The Harnack estimate needs an additive forcing term
- `ex-essential-supremum-precedes-holder-representative-in-de-giorgi-theory` · example — The essential supremum precedes the Holder representative in De Giorgi theory
- `cex-global-harnack-comparison-needs-connectedness` · counterexample — The global Harnack comparison needs connectedness

### `primitive-ideals-and-duflo-theorem` — Primitive Ideals and Duflo Theorem (15 item(s))

- `def-annihilator-ideal-of-a-lie-algebra-module` · definition — The annihilator of a module over an enveloping algebra
- `def-primitive-ideal-of-an-enveloping-algebra` · definition — Primitive ideals of an enveloping algebra
- `prop-annihilators-of-simple-highest-weight-modules-are-primitive` · proposition — Annihilators of simple highest-weight modules are primitive
- `prop-primitive-ideals-are-prime-in-the-noncommutative-sense` · proposition — Primitive ideals are prime in the noncommutative sense
- `lem-dixmiers-lemma-for-countable-dimensional-algebras` · lemma — Dixmier's lemma: endomorphisms of a simple module over a countable-dimensional algebra
- `prop-a-primitive-ideal-determines-a-central-character` · proposition — A primitive ideal determines a central character
- `def-central-reduction-of-the-enveloping-algebra` · definition — The central reduction of the enveloping algebra at a central character
- `prop-verma-annihilator-contains-the-central-character-ideal` · proposition — The Verma annihilator contains the central-character ideal
- `lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal` · lemma — The adjoint action preserves the associated graded of a two-sided ideal
- `def-associated-graded-variety-of-a-two-sided-ideal` · definition — The associated graded variety of a two-sided ideal
- `prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant` · proposition — The associated variety is a closed conical coadjoint-invariant cone
- `lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight` · lemma — Every central character of a semisimple enveloping algebra arises from a weight
- `cor-primitive-ideals-are-partitioned-by-dot-orbit-central-character` · corollary — Primitive ideals are partitioned by dot-orbit central characters
- `lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters` · lemma — The central reduction of U(sl2) is simple away from the finite-dimensional central characters
- `rem-highest-weights-can-have-the-same-primitive-ideal` · remark — Highest weights can have the same primitive ideal

### `primitive-ideals-and-duflo-theorem-examples` — Primitive Ideals and Duflo Theorem — Examples (5 item(s))

- `ex-primitive-ideals-of-usl2-at-a-generic-central-character` · example — Primitive ideals of U(sl2) at a generic central character
- `ex-annihilator-of-the-trivial-sl2-module` · example — The annihilator of the trivial sl(2)-module
- `ex-associated-variety-of-a-finite-dimensional-simple-annihilator` · example — The associated variety of a finite-dimensional simple annihilator is the origin
- `cex-an-intersection-of-two-primitive-ideals-need-not-be-primitive` · counterexample — An intersection of two primitive ideals need not be primitive
- `cex-the-central-character-does-not-determine-the-primitive-ideal` · counterexample — The central character does not determine the primitive ideal

## Your seams

Your pages depend on another group's:

- `interior-and-boundary-sobolev-elliptic-regularity` requires `fredholm-elliptic-problems-and-the-elliptic-spectrum` (group a, batch 11)
- `weak-elliptic-maximum-principles-and-holder-regularity` requires `schauder-and-lp-elliptic-estimates` (group h, batch 13)

Another group's pages depend on yours:

- `the-direct-method-and-euler-lagrange-equations` (group i) requires your `interior-and-boundary-sobolev-elliptic-regularity`
- `constrained-variational-problems-and-variational-inequalities` (group i) requires your `weak-elliptic-maximum-principles-and-holder-regularity`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-39-analysis-30`

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
