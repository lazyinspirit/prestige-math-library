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
label: b
covers: b

# Step 6 Alpha group reader — read-only digest — group **b**, run `frontier-38-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **5**, **6**, **10**: 3 A/B pair(s), 6 page(s), 76 item(s).

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
| 5 | `calderon-zygmund-decomposition-and-singular-integrals` | A | fourier-analysis | 458.02605 | `fourier-multipliers-and-sobolev-characterisations`, `hilbert-and-riesz-transforms`, `the-maximal-function-and-lebesgue-differentiation` |
| 5 | `calderon-zygmund-decomposition-and-singular-integrals-examples` | B | fourier-analysis | 458.02606 | `calderon-zygmund-decomposition-and-singular-integrals`, `fundamental-solutions-newtonian-potentials-and-green-functions` |
| 6 | `fourier-restriction-and-the-stein-tomas-theorem` | A | fourier-analysis | 458.02617 | `fourier-multipliers-and-sobolev-characterisations`, `riesz-potentials-and-the-hardy-littlewood-sobolev-inequality`, `schwartz-space-and-the-plancherel-theorem`, `product-measures-and-the-fubini-tonelli-theorems`, `regular-surfaces-and-surface-integrals`, `rank-theorems-and-embedded-submanifolds`, `trigonometric-and-oscillatory-examples-in-one-variable`, `euclidean-surface-measure-divergence-and-green-identities`, `the-spectral-theorem-and-singular-value-decomposition` |
| 6 | `fourier-restriction-and-the-stein-tomas-theorem-examples` | B | fourier-analysis | 458.02618 | `fourier-restriction-and-the-stein-tomas-theorem` |
| 10 | `character-groups-and-elementary-lca-duals` | A | fourier-analysis | 510.06501 | `uniform-spaces`, `subspaces-products-and-quotients`, `fourier-multipliers-and-sobolev-characterisations`, `haar-measure-existence-and-uniqueness`, `ascoli-arzela`, `the-fundamental-group-of-the-circle`, `covering-spaces-and-lifting`, `the-fundamental-group`, `free-modules-and-exact-sequences` |
| 10 | `character-groups-and-elementary-lca-duals-examples` | B | fourier-analysis | 510.06502 | `character-groups-and-elementary-lca-duals` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `calderon-zygmund-decomposition-and-singular-integrals` — Calderon Zygmund Decomposition and Singular Integrals (25 item(s))

- `lem-marcinkiewicz-interpolation-from-weak-one-one-and-strong-two-two` · lemma — Marcinkiewicz interpolation from weak (1,1) and strong (2,2)
- `def-calderon-zygmund-kernel-and-principal-value-operator` · definition — Calderón–Zygmund kernels and their associated operators
- `def-standard-holder-calderon-zygmund-kernel` · definition — Standard (Hölder) Calderón–Zygmund kernels
- `lem-holder-cz-kernels-satisfy-hormander-cancellation` · lemma — Standard Hölder kernels satisfy the Hörmander condition
- `def-dyadic-cube-in-rn-all-generations` · definition — Dyadic cubes of all generations in R^n
- `lem-dyadic-cubes-all-generations-partition-and-nesting` · lemma — All-generation dyadic cubes: partition, volume and nesting
- `lem-maximal-dyadic-cubes-at-height-lambda` · lemma — Maximal dyadic cubes above a level
- `lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function` · lemma — Radially decreasing kernels are dominated by the maximal function
- `lem-calderon-zygmund-decomposition-at-height-lambda` · lemma — Calderón–Zygmund decomposition at height λ
- `lem-cz-good-part-has-controlled-ltwo-image` · lemma — The good part has controlled L² image
- `lem-cz-bad-part-is-integrable-away-from-expanded-cubes` · lemma — The bad part is integrable away from expanded cubes
- `thm-calderon-zygmund-operator-has-weak-type-one-one` · theorem — Calderón–Zygmund operators are of weak type (1,1)
- `lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality` · lemma — The Lp range: interpolation below two and adjoint duality above two
- `thm-calderon-zygmund-singular-integrals-are-bounded-on-lp` · theorem — Calderón–Zygmund operators are bounded on Lp
- `def-maximal-truncated-singular-integral` · definition — Maximal truncated singular integrals
- `lem-cotlar-inequality-for-maximal-truncations` · lemma — Cotlar's inequality for maximal truncations
- `thm-maximal-truncations-are-weak-one-one-and-strong-lp` · theorem — Maximal truncations: weak (1,1) and strong Lp bounds
- `cor-principal-value-truncations-converge-almost-everywhere` · corollary — Almost-everywhere convergence of principal-value truncations
- `cor-hilbert-transform-is-bounded-on-lp` · corollary — The Hilbert transform is bounded on Lp
- `cor-riesz-transforms-are-bounded-on-lp` · corollary — The Riesz transforms are bounded on Lp
- `lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control` · lemma — Dyadic Mihlin pieces: uniform L¹ and first-difference bounds
- `lem-mihlin-dyadic-pieces-sum-to-an-off-support-kernel-representation` · lemma — Dyadic Mihlin pieces sum to an off-support kernel representation
- `thm-mihlin-fourier-multiplier-theorem` · theorem — The Mihlin–Hörmander Fourier multiplier theorem
- `rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity` · remark — Endpoint targets: weak (1,1) here, L∞ to BMO later, never strong (1,1) or L∞
- `rem-mihlin-does-not-assert-strong-endpoint-bounds` · remark — Mihlin endpoints: weak (1,1), but no general strong endpoint bounds

### `calderon-zygmund-decomposition-and-singular-integrals-examples` — Calderon Zygmund Decomposition and Singular Integrals — Examples (6 item(s))

- `ex-calderon-zygmund-decomposition-of-an-interval-indicator` · example — Calderón–Zygmund decomposition of an interval indicator
- `ex-riesz-transform-as-a-standard-calderon-zygmund-operator` · example — The Riesz kernel is a standard Calderón–Zygmund kernel
- `cex-calderon-zygmund-strong-lone-bound-fails` · counterexample — Strong type (1,1) fails for the Hilbert transform
- `cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity` · counterexample — Calderón–Zygmund operators need not map L∞ to L∞
- `cex-size-without-cancellation-does-not-give-a-principal-value-operator` · counterexample — Size without cancellation does not give a principal value
- `ex-second-derivative-newtonian-kernels-fit-the-cz-framework` · example — Newtonian Hessian kernels fit the Calderón–Zygmund framework

### `fourier-restriction-and-the-stein-tomas-theorem` — Fourier Restriction and the Stein Tomas Theorem (23 item(s))

- `def-euclidean-hypersurface-normal-shape-operator-and-curvature` · definition — Euclidean hypersurface normals, shape operators and curvature
- `lem-fourier-pairing-for-a-finite-measure-and-schwartz-data` · lemma — Fourier pairing for a finite measure and Schwartz data
- `lem-unit-sphere-is-lebesgue-null` · lemma — The unit sphere is Lebesgue null
- `lem-sphere-finite-graph-charts-and-surface-density` · lemma — Sphere graph charts, surface density, and a finite partition
- `lem-van-der-corput-oscillatory-integral-estimate` · lemma — Van der Corput oscillatory integral estimates in one dimension
- `lem-smooth-euclidean-hypersurface-graph-and-localization` · lemma — Smooth Euclidean hypersurface graphs and compact localization
- `def-fourier-restriction-and-adjoint-extension-operators` · definition — Fourier restriction and adjoint extension operators
- `lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase` · lemma — Stationary phase with a compactly supported amplitude
- `lem-spherical-cap-and-dual-slab-scales` · lemma — Spherical cap and dual slab scales
- `lem-restriction-and-extension-estimates-are-dual` · lemma — Restriction and extension estimates are dual
- `lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph` · lemma — Shape operator and Gauss-Kronecker curvature of a graph
- `lem-stationary-phase-decay-for-spherical-surface-measure` · lemma — Stationary-phase decay for spherical surface measure
- `lem-cap-wave-packet-has-dual-tube-concentration` · lemma — Cap wave packets concentrate on the dual tube
- `lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform` · lemma — TT-star reduces extension to convolution with the surface-measure transform
- `lem-localized-curved-patch-measure-transform-decay` · lemma — Decay of a localized measure on a curved graph patch
- `thm-knapp-necessary-condition-for-spherical-ltwo-restriction` · theorem — Knapp necessary condition for spherical L2 restriction
- `lem-compact-curved-hypersurface-finite-graph-cover` · lemma — Compact curved hypersurfaces admit a finite curved graph cover
- `lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds` · lemma — Graph-patch extension family: dispersive and L2 slice bounds
- `rem-the-general-fourier-restriction-problem` · remark — The general Fourier restriction problem remains open
- `lem-stein-tomas-tt-star-bound-from-fractional-integration` · lemma — Stein-Tomas TT-star bound from fractional integration
- `thm-stein-tomas-spherical-restriction-theorem` · theorem — Stein-Tomas spherical restriction theorem
- `cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature` · corollary — Stein-Tomas for compact hypersurfaces with nonzero curvature
- `rem-restriction-estimates-and-the-missing-strichartz-interface` · remark — Restriction estimates and the missing Strichartz interface

### `fourier-restriction-and-the-stein-tomas-theorem-examples` — Fourier Restriction and the Stein Tomas Theorem — Examples (5 item(s))

- `cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise` · counterexample — Pointwise restriction is not defined on Lp equivalence classes
- `ex-knapp-cap-and-tube-volume-calculation` · example — Knapp cap and dual tube volume calculation
- `cex-flat-hyperplanes-do-not-have-spherical-stationary-phase-decay` · counterexample — Flat hyperplanes do not have spherical stationary-phase decay
- `ex-circle-stein-tomas-exponents` · example — The Stein-Tomas exponents on the circle
- `cex-knapp-rules-out-extension-below-the-tomas-exponent` · counterexample — Knapp rules out extension below the Tomas exponent

### `character-groups-and-elementary-lca-duals` — Character Groups and Elementary LCA Duals (13 item(s))

- `lem-unit-circle-is-a-compact-metrizable-topological-group` · lemma — The multiplicative unit circle is a compact metrizable topological abelian group
- `lem-compact-open-topology-on-a-discrete-domain-is-pointwise` · lemma — On a discrete domain the compact-open topology is the topology of pointwise convergence
- `lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup` · lemma — The unit-circle arc $\{z:|z-1|<1\}$ contains no nontrivial subgroup
- `def-pontryagin-dual-and-compact-open-topology` · definition — The Pontryagin dual with the compact-open topology
- `lem-compact-open-character-group-operations-are-continuous` · lemma — The compact-open character group is a Hausdorff topological abelian group
- `lem-character-evaluation-pairing-is-jointly-continuous` · lemma — Evaluation of characters is jointly continuous
- `lem-pointwise-limits-of-characters-are-characters` · lemma — Pointwise limits of characters are characters
- `lem-dual-homomorphisms-are-continuous-and-functorial` · lemma — Dual homomorphisms: continuity, and the annihilator of a closed subgroup
- `lem-continuous-characters-of-the-real-line-are-exponentials` · lemma — Continuous characters of the real line are exponentials
- `lem-dual-identity-neighbourhood-is-compact` · lemma — A compact identity neighbourhood in the dual
- `thm-dual-of-an-lca-group-is-locally-compact-abelian` · theorem — The dual of a locally compact abelian group is locally compact abelian
- `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals` · theorem — Compact groups have discrete duals and discrete groups have compact duals
- `lem-duals-of-finite-products-and-discrete-direct-sums` · lemma — Duals of finite products and of discrete direct sums

### `character-groups-and-elementary-lca-duals-examples` — Character Groups and Elementary LCA Duals: Examples (4 item(s))

- `ex-pontryagin-dual-of-the-integers-is-the-circle` · example — The Pontryagin dual of $\mathbb Z$ is the circle
- `ex-pontryagin-dual-of-the-circle-is-the-integers` · example — The Pontryagin dual of the circle is $\mathbb Z$
- `ex-pontryagin-dual-of-euclidean-space` · example — The Pontryagin dual of Euclidean space is Euclidean space
- `ex-pontryagin-dual-of-a-finite-cyclic-group` · example — The Pontryagin dual of a finite cyclic group

## Your seams

Another group's pages depend on yours:

- `peter-weyl-theory-for-general-compact-groups` (group j) requires your `character-groups-and-elementary-lca-duals`

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
