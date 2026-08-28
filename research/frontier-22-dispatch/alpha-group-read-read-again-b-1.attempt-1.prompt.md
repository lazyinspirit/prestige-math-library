# Alpha

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
group work, `research/frontier-22-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

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
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-22
role: alpha-group-read
label: read-again-b-1

# Step 8 — group **b**, run `frontier-22`

You are the group Alpha for batches **2**, **5**: 2 A/B pair(s), 4 page(s), 86 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

**No step-7 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-22-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `associated-primes-and-primary-decomposition` | A | commutative-algebra | 111.009 | `artinian-rings-and-length-examples` |
| 2 | `associated-primes-and-primary-decomposition-examples` | B | commutative-algebra | 111.01 | `associated-primes-and-primary-decomposition` |
| 5 | `modes-of-convergence-egorov-and-lusin` | A | measure-theory | 288.019 | `the-lebesgue-and-riemann-integrals-compared-examples`, `urysohn-lemma-and-tietze` |
| 5 | `modes-of-convergence-egorov-and-lusin-examples` | B | measure-theory | 288.02 | `modes-of-convergence-egorov-and-lusin` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `associated-primes-and-primary-decomposition` — Associated Primes and Primary Decomposition (39 item(s))

- `def-associated-prime-of-a-module` · definition — Associated primes of a module
- `lem-annihilator-of-a-cyclic-submodule` · lemma — A cyclic submodule is a residue module by its annihilator
- `lem-associated-prime-equivalent-cyclic-embedding` · lemma — Associated primes are exactly primes of embedded cyclic residue modules
- `cor-associated-primes-of-a-cyclic-module-are-primes-of-element-annihilators-modulo-ideal` · corollary — Associated primes of a cyclic quotient are colon primes
- `lem-noetherian-ring-maximal-element-annihilator-exists` · lemma — A nonzero module over a Noetherian ring has a maximal element annihilator
- `lem-maximal-element-annihilator-primality-step` · lemma — A maximal element annihilator is prime
- `thm-existence-of-associated-primes` · theorem — A nonzero module over a Noetherian ring has an associated prime
- `cor-associated-primes-empty-iff-module-zero-noetherian` · corollary — A module over a Noetherian ring has no associated primes exactly when it is zero
- `lem-associated-primes-exact-sequence-left-inclusion` · lemma — Associated primes of a submodule lie in those of the ambient module
- `lem-associated-primes-exact-sequence-right-bound` · lemma — Associated primes of the middle term lie in those of the ends
- `thm-associated-primes-in-a-short-exact-sequence` · theorem — Associated primes in a short exact sequence
- `lem-associated-prime-localises-forward` · lemma — Associated primes localize forward
- `lem-associated-prime-localises-reverse-finite` · lemma — Associated primes of a localized finite module come from upstairs
- `thm-associated-primes-localise` · theorem — Associated primes commute with localization for finite modules
- `lem-associated-primes-contained-in-support` · lemma — Associated primes lie in the support
- `thm-prime-filtration-of-a-finite-module` · theorem — Finite modules over Noetherian rings admit prime filtrations
- `thm-minimal-support-primes-are-associated` · theorem — Minimal support primes of a finite module are associated
- `cor-support-is-union-of-closures-of-associated-primes` · corollary — The support is the union of the closures of the associated primes
- `thm-finiteness-of-associated-primes` · theorem — Finite modules over Noetherian rings have finitely many associated primes
- `lem-zero-divisor-annihilator-contained-in-associated-prime` · lemma — A zero divisor is contained in an associated prime
- `thm-zero-divisors-on-a-module` · theorem — Zero divisors on a module over a Noetherian ring are the union of its associated primes
- `def-primary-submodule-and-primary-ideal` · definition — Primary submodules and primary ideals
- `thm-radical-of-a-primary-ideal-is-prime` · theorem — The radical of a primary ideal is prime
- `lem-primary-submodule-zero-divisor-characterisation` · lemma — Primary submodules are exactly quotients with nilpotent zero divisors
- `thm-primary-submodule-characterisations` · theorem — Characterizations of primary submodules in the Noetherian finite case
- `lem-intersection-of-primary-submodules-with-same-radical` · lemma — A finite intersection of primary submodules with one radical is primary
- `def-primary-decomposition-minimal-and-isolated-components` · definition — Minimal primary decompositions and isolated components
- `lem-irreducible-submodule-is-primary-noetherian` · lemma — Irreducible submodules of Noetherian modules are primary
- `lem-primary-decomposition-delete-redundant-components` · lemma — Redundant components can be deleted from a primary decomposition
- `lem-primary-decomposition-combine-equal-radicals` · lemma — Equal-radical primary components can be combined
- `thm-lasker-noether-primary-decomposition` · theorem — Lasker-Noether primary decomposition
- `lem-associated-primes-from-a-minimal-primary-decomposition` · lemma — Associated primes are the radicals in a minimal primary decomposition
- `thm-first-uniqueness-theorem-primary-decomposition` · theorem — First uniqueness of primary decomposition
- `lem-localisation-of-a-primary-submodule` · lemma — Localisation of a primary submodule either stays primary or becomes the whole module
- `lem-contraction-recovers-primary-component-after-localising-away-from-radical` · lemma — A primary component is recovered by contracting its localization
- `thm-isolated-primary-components-are-unique` · theorem — Isolated primary components are unique
- `lem-finite-prime-avoidance` · lemma — Finite prime avoidance
- `thm-second-uniqueness-theorem-primary-decomposition` · theorem — Second uniqueness of primary decomposition
- `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian` · corollary — Radical ideals are intersections of their minimal primes in Noetherian rings

### `associated-primes-and-primary-decomposition-examples` — Associated Primes and Primary Decomposition — Examples (6 item(s))

- `ex-annihilator-colon-ideals-in-a-cyclic-module` · example — Colon ideals in a cyclic quotient recover the associated primes
- `ex-primary-maximal-radical-test` · example — Every ideal with maximal radical in an Artinian local quotient is primary
- `ex-primary-localisation-kills-a-component` · example — Localization kills the components away from one associated prime
- `ex-redundant-primary-component-deletion` · example — A redundant primary decomposition can be minimalized explicitly
- `ex-embedded-component-varies-but-radical-does-not` · example — Embedded components can vary even when the radicals do not
- `ex-zero-module-associated-prime-boundary` · example — The zero module has empty support and no associated primes

### `modes-of-convergence-egorov-and-lusin` — Modes of Convergence Egorov and Lusin (33 item(s))

- `def-convergence-almost-everywhere-relative-to-a-measure` · definition — Convergence almost everywhere relative to a measure
- `def-convergence-in-measure` · definition — Convergence in measure
- `def-cauchy-in-measure` · definition — Cauchy sequences in measure
- `def-almost-uniform-convergence` · definition — Almost uniform convergence
- `def-convergence-in-l-one-of-a-measure` · definition — Convergence in L^1(mu)
- `thm-convergence-in-measure-limits-are-unique-almost-everywhere` · theorem — Convergence in measure determines the limit almost everywhere
- `thm-l-one-convergence-implies-convergence-in-measure` · theorem — Convergence in L^1(mu) implies convergence in measure
- `fs-l-one-convergence-implies-almost-everywhere-convergence` · false-statement — FALSE: convergence in L^1(mu) forces almost-everywhere convergence
- `thm-almost-uniform-convergence-implies-almost-everywhere-and-in-measure` · theorem — Almost uniform convergence implies almost-everywhere convergence and convergence in measure
- `thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces` · theorem — On a finite measure space, almost-everywhere convergence implies convergence in measure
- `fs-almost-everywhere-convergence-implies-convergence-in-measure-on-every-measure-space` · false-statement — FALSE: almost-everywhere convergence implies convergence in measure on every measure space
- `prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces` · proposition — On a finite measure space, the truncated L^1 metric metrises convergence in measure
- `thm-riesz-subsequence-theorem-for-convergence-in-measure` · theorem — Riesz's subsequence theorem for convergence in measure
- `cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence` · corollary — Convergence in L^1(mu) has an almost-everywhere convergent subsequence
- `fs-convergence-in-measure-implies-almost-everywhere-convergence` · false-statement — FALSE: convergence in measure implies almost-everywhere convergence
- `thm-cauchy-in-measure-converges-in-measure` · theorem — Cauchy sequences in measure converge in measure
- `thm-egorovs-theorem` · theorem — Egorov's theorem
- `fs-egorovs-theorem-holds-on-every-measure-space` · false-statement — FALSE: Egorov's theorem holds on every measure space
- `cor-riesz-subsequence-can-be-chosen-almost-uniformly-on-a-finite-measure-space` · corollary — On a finite measure space, convergence in measure has an almost-uniformly convergent subsequence
- `lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set` · lemma — Assuming countable choice, simple functions are continuous on a large closed core
- `lem-simple-approximants-converge-uniformly-on-a-large-closed-set` · lemma — Assuming countable choice, simple approximants to a measurable function can be made uniformly convergent on a large closed set
- `thm-lusins-theorem` · theorem — Assuming countable choice, Lusin's theorem on finite-measure subsets of R^n
- `cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function` · corollary — Assuming countable choice and dependent choice, a measurable function on a finite-measure subset of R^n agrees there, off a small set, with a continuous function on R^n
- `cor-bounded-domain-lusin-core-can-be-chosen-compact` · corollary — Assuming countable choice, on a bounded measurable set, Lusin's closed core can be chosen compact
- `fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set` · false-statement — FALSE: assuming countable choice, Lusin's theorem says measurable functions are continuous off a null set
- `def-uniformly-integrable-family` · definition — A uniformly integrable family
- `thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces` · theorem — On a finite measure space, uniform integrability is equivalent to L^1-boundedness plus uniform absolute continuity
- `prop-dominated-families-are-uniformly-integrable` · proposition — Dominated families are uniformly integrable
- `fs-uniform-integrability-implies-domination-by-an-integrable-function` · false-statement — FALSE: uniform integrability implies domination by one integrable function
- `def-tight-family-of-integrable-functions` · definition — A tight family of integrable functions
- `thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces` · theorem — Vitali convergence theorem on finite and sigma-finite measure spaces
- `cor-dominated-convergence-is-a-vitali-corollary` · corollary — Dominated convergence is a corollary of Vitali's theorem
- `rem-finite-measure-implication-table-for-the-main-modes-of-convergence` · remark — Implication table for the main modes of convergence on a finite measure space

### `modes-of-convergence-egorov-and-lusin-examples` — Modes of Convergence Egorov and Lusin — Examples (8 item(s))

- `ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise` · example — The typewriter sequence converges in measure and in L^1 but nowhere pointwise
- `ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence` · example — The leftmost dyadic intervals give an explicit almost-everywhere Riesz subsequence
- `cex-indicators-of-unit-interval-translates-converge-almost-everywhere-but-not-in-measure` · counterexample — The translates of the unit interval converge almost everywhere to zero but not in measure
- `cex-indicators-of-unit-interval-translates-show-egorov-needs-finite-measure` · counterexample — The translated unit intervals show that Egorov needs finite total measure
- `cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one` · counterexample — The spikes k chi_(0,1/k) converge almost everywhere and in measure to zero but not in L^1
- `ex-egorov-for-the-powers-x-to-the-k-on-the-unit-interval` · example — Egorov for x^k on the unit interval
- `ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval` · example — The Dirichlet function satisfies Lusin's conclusion without being continuous anywhere
- `ex-a-uniformly-integrable-family-with-no-integrable-majorant` · example — A uniformly integrable family need not admit a single integrable majorant

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-22-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — group reading digest, `frontier-22`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
