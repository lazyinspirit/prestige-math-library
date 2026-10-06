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
label: h
covers: h

# Step 6 Alpha group reader — read-only digest — group **h**, run `frontier-39-analysis-30`

- You are the read-only Step 6 Alpha group reader for batches **13**, **19**, **23**: 3 A/B pair(s), 6 page(s), 90 item(s).

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
| 13 | `schauder-and-lp-elliptic-estimates` | A | pde | 458.035 | `calderon-zygmund-decomposition-and-singular-integrals`, `lax-milgram-and-weak-elliptic-solutions`, `ascoli-arzela` |
| 13 | `schauder-and-lp-elliptic-estimates-examples` | B | pde | 458.036 | `schauder-and-lp-elliptic-estimates` |
| 19 | `hamilton-jacobi-equations-and-viscosity-solutions` | A | pde | 458.047 | `convex-and-semicontinuous-functions-on-rn`, `density-separability-and-convolution-in-lp`, `smooth-partitions-of-unity-and-exhaustions` |
| 19 | `hamilton-jacobi-equations-and-viscosity-solutions-examples` | B | pde | 458.048 | `hamilton-jacobi-equations-and-viscosity-solutions`, `the-heat-kernel-and-the-cauchy-problem`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 23 | `borel-weil-and-borel-weil-bott` | A | lie-theory | 510.017 | `smooth-projective-serre-duality-and-flag-variety-line-bundles`, `weyl-character-and-multiplicity-formulas`, `normal-varieties-normalization-and-zariskis-main-theorem` |
| 23 | `borel-weil-and-borel-weil-bott-examples` | B | lie-theory | 510.018 | `borel-weil-and-borel-weil-bott` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `schauder-and-lp-elliptic-estimates` — Schauder and $L^p$ Elliptic Estimates (22 item(s))

- `def-holder-spaces-c-k-alpha-and-their-scaled-norms` · definition — Hölder spaces $C^{k,\alpha}$, closure and interior scaled norms, and $C^{k,\alpha}$ domains
- `thm-holder-spaces-on-bounded-domains-are-banach-spaces` · theorem — The closure Hölder spaces are Banach spaces
- `lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials` · lemma — The cancelled representation of the second derivatives of Newtonian potentials
- `def-uniformly-elliptic-nondivergence-operator` · definition — Uniformly elliptic nondivergence-form operators and their frozen coefficients
- `lem-holder-interpolation-with-an-epsilon-loss` · lemma — Ehrling-type Hölder and derivative interpolation with an epsilon loss
- `lem-freezing-coefficients-and-schauder-error-estimate` · lemma — Freezing coefficients makes the Schauder error absorbable on a small ball
- `thm-interior-schauder-estimate-for-uniformly-elliptic-equations` · theorem — Interior Schauder estimate for uniformly elliptic equations
- `lem-c-two-alpha-boundary-flattening-preserves-ellipticity-and-holder-norms` · lemma — $C^{2,\alpha}$ boundary flattening preserves the nondivergence structure, ellipticity and Hölder norms
- `thm-boundary-schauder-estimate-for-the-dirichlet-problem` · theorem — Boundary Schauder estimate for the Dirichlet problem
- `thm-method-of-continuity-for-a-uniformly-estimated-family-of-bounded-operators` · theorem — The method of continuity for a uniformly estimated affine family of bounded operators
- `thm-global-w-two-p-estimate-for-the-laplacian-on-rn` · theorem — Global $W^{2,p}$ estimate for the Laplacian on Euclidean space
- `lem-lp-interpolation-absorbs-lower-order-derivatives` · lemma — $L^p$ interpolation absorption of first derivatives by second derivatives
- `lem-cutoff-commutator-for-local-w-two-p-estimates` · lemma — The cutoff commutator in the local $W^{2,p}$ estimates
- `lem-interior-w-two-p-regularity-for-the-laplacian` · lemma — Local $W^{2,p}$ regularity of weak solutions of the Poisson equation
- `thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations` · theorem — Interior $W^{2,p}$ estimate for uniformly elliptic equations with continuous coefficients
- `thm-global-w-two-p-dirichlet-estimate` · theorem — Global $W^{2,p}$ Dirichlet estimate on a $C^{1,1}$ domain
- `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian` · theorem — Global Schauder regularity for the weak Dirichlet Laplacian
- `thm-global-schauder-estimate-and-classical-dirichlet-solvability` · theorem — Global Schauder estimate and classical Dirichlet solvability by the continuity method
- `cor-injectivity-removes-the-lp-kernel-term-from-a-global-w-two-p-estimate` · corollary — Injectivity removes the $L^p$ term from the global $W^{2,p}$ estimate
- `cor-w-two-p-regularity-implies-classical-or-holder-regularity-when-p-is-large` · corollary — $W^{2,p}$ regularity implies classical or H"older regularity when $p$ is large
- `rem-schauder-and-sobolev-estimates-are-different-scales` · remark — The Schauder and $W^{2,p}$ scales are different, not interchangeable
- `thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian` · theorem — Weak global $W^{2,p}$ regularity for the Dirichlet Laplacian

### `schauder-and-lp-elliptic-estimates-examples` — Schauder and $L^p$ Elliptic Estimates — Examples (8 item(s))

- `ex-schauder-scaling-on-a-quadratic-poisson-solution` · example — The Schauder estimate on a quadratic Poisson solution: radius powers balance
- `cex-a-non-dini-continuous-poisson-source-can-destroy-continuity-of-second-derivatives` · counterexample — A non-Dini continuous Poisson source can destroy the continuity of the second derivatives
- `cex-schauder-estimates-fail-at-the-holder-endpoint-alpha-one` · counterexample — The Schauder estimate fails at the H\"older endpoint $\alpha=1$
- `ex-riesz-transform-formula-for-second-laplacian-derivatives` · example — The Riesz-transform formula for second derivatives of the Laplacian
- `cex-boundary-w-two-p-regularity-needs-c-one-one-type-control` · counterexample — Boundary $W^{2,p}$ regularity needs more than Lipschitz boundary
- `ex-method-of-continuity-for-a-constant-coefficient-path` · example — The method of continuity on a constant-coefficient one-dimensional path
- `cex-bounded-measurable-nondivergence-coefficients-do-not-give-schauder-estimates` · counterexample — Bounded measurable coefficients do not give Schauder estimates
- `cex-freezing-coefficients-cannot-absorb-a-fixed-large-oscillation-on-arbitrarily-small-balls` · counterexample — Freezing cannot absorb a fixed oscillation on arbitrarily small balls

### `hamilton-jacobi-equations-and-viscosity-solutions` — Hamilton Jacobi Equations and Viscosity Solutions (33 item(s))

- `def-hamilton-jacobi-cauchy-problem` · definition — The Hamilton--Jacobi Cauchy problem and its classical solutions
- `def-upper-and-lower-semicontinuous-envelopes` · definition — Upper and lower semicontinuous envelopes by local limsup and liminf
- `lem-envelopes-are-the-least-semicontinuous-majorants` · lemma — The envelopes are the least upper and greatest lower semicontinuous functions
- `def-viscosity-subsolution-and-supersolution` · definition — Viscosity subsolutions and supersolutions of a first-order equation and of the Cauchy problem
- `lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation` · lemma — Strictification of a viscosity test function by a quartic perturbation
- `def-discontinuous-viscosity-solution` · definition — Discontinuous viscosity solutions through the two envelopes
- `lem-viscosity-testing-by-first-order-jets` · lemma — Viscosity testing by first-order jets, and closure of the jet inequality
- `prop-classical-solutions-are-viscosity-solutions` · proposition — Classical solutions are viscosity solutions and differentiable viscosity solutions solve the equation pointwise
- `prop-maxima-of-subsolutions-and-minima-of-supersolutions` · proposition — Finite maxima of subsolutions and finite minima of supersolutions
- `thm-stability-of-viscosity-solutions-under-local-uniform-convergence` · theorem — Stability of viscosity sub-, super- and solutions under locally uniform convergence
- `def-half-relaxed-limits` · definition — Half-relaxed limits of a locally bounded family
- `thm-half-relaxed-limit-stability-for-viscosity-solutions` · theorem — Half-relaxed limits of sub- and supersolutions with vanishing perturbations
- `lem-doubling-variables-maximum-localisation` · lemma — Doubling variables: existence, jets at the maximiser and localisation
- `lem-time-penalisation-moves-a-doubling-variables-maximum-away-from-the-terminal-boundary` · lemma — Time penalisation moves a doubling-variables maximum away from the terminal boundary
- `thm-comparison-for-first-order-hamilton-jacobi-equations` · theorem — Comparison for first-order Hamilton--Jacobi equations
- `cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions` · corollary — Uniqueness and sup-norm contraction for the Cauchy problem
- `thm-upper-semicontinuous-envelope-of-a-locally-bounded-supremum-of-subsolutions` · theorem — The upper envelope of a locally bounded supremum of subsolutions is a subsolution
- `lem-perron-envelope-failure-of-the-supersolution-test-allows-a-local-bump` · lemma — Failure of the supersolution test for the lower envelope allows a local bump
- `lem-viscosity-initial-trace-is-enforced-by-upper-and-lower-barriers` · lemma — Time-space barriers enforce the initial trace for the Cauchy problem
- `thm-perron-method-for-hamilton-jacobi-equations` · theorem — Perron's method for the Cauchy problem: existence between two barriers
- `def-legendre-transform-of-a-hamiltonian` · definition — The Legendre transform of a finite-valued convex Hamiltonian
- `lem-finite-valued-convex-hamiltonian-equals-its-biconjugate` · lemma — A finite-valued convex Hamiltonian equals its biconjugate
- `def-hopf-lax-operator` · definition — The Hopf--Lax operator and the Hopf--Lax formula
- `lem-hopf-lax-infima-localise` · lemma — Finiteness, superlinearity of the Lagrangian and localisation of Hopf--Lax near-minimisers
- `cor-hopf-lax-is-a-contraction-in-the-supremum-norm` · corollary — The Hopf--Lax operator is a contraction in the supremum norm
- `cor-hopf-lax-preserves-a-modulus-of-continuity` · corollary — The Hopf--Lax operator preserves a modulus of continuity
- `thm-hopf-lax-dynamic-programming-semigroup` · theorem — The Hopf--Lax operators form a semigroup (dynamic programming)
- `lem-hopf-lax-minimiser-satisfies-the-characteristic-euler-relation-at-differentiability-points` · lemma — A Hopf--Lax minimiser satisfies the characteristic Euler relation at differentiability points
- `thm-comparison-for-autonomous-convex-superlinear-hamiltonians` · theorem — Comparison for autonomous convex superlinear Hamiltonians
- `thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation` · theorem — The Hopf--Lax formula solves the Hamilton--Jacobi Cauchy problem
- `thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations` · theorem — Vanishing viscosity selects the viscosity solution
- `cor-finite-speed-of-dependence-for-lipschitz-hamiltonians` · corollary — Finite speed of dependence for Hamiltonians Lipschitz in momentum
- `rem-value-functions-and-hamilton-jacobi-bellman-equations` · remark — Value functions and the Hamilton--Jacobi--Bellman equation: orientation only

### `hamilton-jacobi-equations-and-viscosity-solutions-examples` — Hamilton Jacobi Equations and Viscosity Solutions — Examples (10 item(s))

- `ex-eikonal-equation-as-a-viscosity-equation` · example — The eikonal equation as a viscosity equation at a ridge point
- `ex-quadratic-hopf-lax-formula-and-moreau-envelope` · example — The quadratic Hopf--Lax formula as an infimal convolution
- `ex-hopf-lax-solution-with-a-forming-corner` · example — A Hopf--Lax solution with a forming corner from smooth data
- `ex-negative-absolute-value-solves-the-eikonal-equation-in-viscosity-sense` · example — The negative absolute value solves the eikonal equation in the viscosity sense
- `ex-vanishing-viscosity-selects-the-hamilton-jacobi-solution` · example — Vanishing viscosity selects the Hopf--Lax solution for bounded data
- `cex-hopf-lax-without-convex-superlinear-coercivity` · counterexample — Nonconvexity can break the equation; nonsuperlinearity can limit the Lagrangian domain
- `cex-reversing-the-contact-extremum-reverses-the-viscosity-inequality` · counterexample — A strict subsolution can fail the supersolution lower-test condition
- `cex-minima-of-viscosity-subsolutions-need-not-be-subsolutions` · counterexample — Minima of viscosity subsolutions need not be subsolutions
- `cex-viscosity-solutions-need-not-be-unique-when-the-boundary-condition-is-not-imposed-in-a-comparison-class` · counterexample — The eikonal equation on an interval has many solutions when endpoint data are omitted
- `ex-distance-to-the-boundary-is-the-viscosity-solution-of-the-unit-eikonal-dirichlet-problem` · example — Distance to the boundary solves the unit eikonal Dirichlet problem on the ball

### `borel-weil-and-borel-weil-bott` — Borel Weil and Borel Weil Bott (12 item(s))

- `lem-sections-of-an-associated-line-bundle-as-equivariant-functions` · lemma — Sections of an associated line bundle as equivariant functions
- `prop-left-translation-makes-line-bundle-cohomology-a-g-module` · proposition — The cohomology of a Borel-character line bundle is a rational G-module
- `lem-a-nonzero-dominant-section-is-determined-on-the-big-cell` · lemma — A $U^-$-invariant section is determined on the big cell
- `lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety` · lemma — The dominant Borel-Weil section extends from the big cell
- `lem-lowest-weight-space-is-the-nilradical-invariant-line` · lemma — The nilradical invariants of an irreducible module form its lowest weight line
- `thm-borel-weil` · theorem — Borel-Weil theorem
- `lem-rank-one-cohomology-shifts-across-a-simple-wall` · lemma — Rank-one cohomology shifts across a simple wall
- `lem-singular-dot-weights-have-zero-line-bundle-cohomology` · lemma — Singular dot weights have zero line-bundle cohomology
- `lem-a-regular-weight-has-a-unique-dominant-dot-translate` · lemma — Regular weights have a unique dominant dot translate and monotone wall-crossing chains
- `thm-borel-weil-bott` · theorem — Borel-Weil-Bott theorem
- `prop-borel-weil-bott-is-compatible-with-serre-duality` · proposition — Borel-Weil-Bott is compatible with Serre duality
- `cor-borel-weil-bott-euler-character-is-the-weyl-character` · corollary — The Borel-Weil-Bott Euler character is a signed dual Weyl character

### `borel-weil-and-borel-weil-bott-examples` — Borel Weil and Borel Weil Bott — Examples (5 item(s))

- `ex-the-sl2-singular-weight-has-no-cohomology` · example — The sl2 singular weight has no cohomology
- `ex-borel-weil-bott-on-p1-for-sl2` · example — Borel-Weil-Bott on the projective line for SL2
- `ex-an-sl3-weight-with-cohomology-in-degree-one` · example — An sl3 weight with cohomology in degree one
- `ex-the-top-degree-bwb-case-and-serre-duality` · example — The top-degree Borel-Weil-Bott case and Serre duality
- `cex-changing-the-line-bundle-sign-dualizes-the-borel-weil-answer` · counterexample — Changing the line-bundle sign changes the Borel-Weil section space

## Your seams

Your pages depend on another group's:

- `schauder-and-lp-elliptic-estimates` requires `lax-milgram-and-weak-elliptic-solutions` (group f, batch 10)
- `borel-weil-and-borel-weil-bott` requires `weyl-character-and-multiplicity-formulas` (group f, batch 21)

Another group's pages depend on yours:

- `scalar-conservation-laws-and-entropy-solutions` (group d) requires your `hamilton-jacobi-equations-and-viscosity-solutions`
- `weak-elliptic-maximum-principles-and-holder-regularity` (group g) requires your `schauder-and-lp-elliptic-estimates`
- `the-direct-method-and-euler-lagrange-equations` (group i) requires your `schauder-and-lp-elliptic-estimates`

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
