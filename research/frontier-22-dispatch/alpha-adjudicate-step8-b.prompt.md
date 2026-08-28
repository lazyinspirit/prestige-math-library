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
role: alpha-adjudicate
label: step8-b
covers: 2, 5

# Step 8 — group **b**, run `frontier-22`

You are the group Alpha for batches **2**, **5**: 2 A/B pair(s), 4 page(s), 86 item(s), 53 open rejection(s) over 53 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-22-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-spikes-converge-almost-everywhere-and-in-measure-but-not-in-l-one` | `modes-of-convergence-egorov-and-lusin-examples` | gpt-5.6-terra | `81d1a0e14e74ce0b36fb97bd9309338d2907a6e14f600e9964b172fc1432ed64` |
| `cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `1f8f6123032273e2d6735b942efe2ae5a0d07bd7b0e67b069572f6e171674238` |
| `cor-dominated-convergence-is-a-vitali-corollary` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `57e50e30ef70faf6fd82c2cba85e1e3bc5c632a3f966bcf261c33f58a1794e12` |
| `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `90a4036ddf26a688620f61a9d30abcb316b8ab8a55f351df7ba8f36918249abe` |
| `cor-support-is-union-of-closures-of-associated-primes` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `888dd5f3f22a2298ef6906765e16f497980f390434417321230969a84f1c1662` |
| `def-cauchy-in-measure` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `d445138a34fb3ef22464b70fa11a02e55f041e72193f856ef829ef1758d0bd2d` |
| `def-convergence-in-l-one-of-a-measure` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `ad585065d027172319dc333c2c5674c4a00f5f0b41816b9ec7d188440cb994f1` |
| `def-convergence-in-measure` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `6366ea2ef71f1901997d0b0fc738a413a6c6242ee97d54bbe6bbdbc8bbcf4209` |
| `def-primary-decomposition-minimal-and-isolated-components` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `0ce62df57a5c05783e1558dfff21d93adc37246974810bb683032605db10b524` |
| `def-primary-submodule-and-primary-ideal` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `0e5c0ecfe87fe3f2030718e46179882355c38456624a4a09a4cc2df29fc08da8` |
| `def-tight-family-of-integrable-functions` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `a16fe74e00524609f8b5827af34e14fbe630be6bc63af2544025a7aa1b99fc4d` |
| `def-uniformly-integrable-family` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `b3f337615c571f0868d9fe643858c1a3a814dbc744cb5d1b996b1a2474fd4689` |
| `ex-a-uniformly-integrable-family-with-no-integrable-majorant` | `modes-of-convergence-egorov-and-lusin-examples` | gpt-5.6-terra | `7bc5b46437f3f434db098831bf27382567895ac869175b86238f9aaf9089b6bf` |
| `ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence` | `modes-of-convergence-egorov-and-lusin-examples` | gpt-5.6-terra | `d0acbf75744fa3ba6614002b4247274eaf6ba73a6824a0c11a6183aabb9797cd` |
| `ex-annihilator-colon-ideals-in-a-cyclic-module` | `associated-primes-and-primary-decomposition-examples` | gpt-5.6-terra | `b90448e24dd80d79ac0cfa5a9a8a078c0e61854a390e6f5f092514bd8c648f70` |
| `ex-embedded-component-varies-but-radical-does-not` | `associated-primes-and-primary-decomposition-examples` | gpt-5.6-terra | `b47cee0f120f42e22238bdfb2ede3992783c26dd29df216028154680d63e77c0` |
| `ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval` | `modes-of-convergence-egorov-and-lusin-examples` | gpt-5.6-terra | `ec0543ba03ad28ab5930bae0e1d2101d0e71960dbae0eccc38c2d9bf379411f7` |
| `ex-primary-localisation-kills-a-component` | `associated-primes-and-primary-decomposition-examples` | gpt-5.6-terra | `2b4d370746ec8c5e080d8448c5d66eff2f41873a346b87c6dcc7be9d7815930d` |
| `ex-primary-maximal-radical-test` | `associated-primes-and-primary-decomposition-examples` | gpt-5.6-terra | `a78fc38a34291b8c2c05597750b9d94a54a1dfd2ddec6b51f21c79371f0c7f8b` |
| `ex-redundant-primary-component-deletion` | `associated-primes-and-primary-decomposition-examples` | gpt-5.6-terra | `efba145440dbcb39f81040fa8646444c71ca613ede469d2deef8ac5dc4f1b1ee` |
| `ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise` | `modes-of-convergence-egorov-and-lusin-examples` | gpt-5.6-terra | `b8dfeed2806c7cf16c5bbffd715001c118116f74d537da2d0f51ec563d94d650` |
| `fs-convergence-in-measure-implies-almost-everywhere-convergence` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `db9b7100525a5d05b8015e6f6492be8969a40cd81e4b2eee490f2b4003066f01` |
| `fs-l-one-convergence-implies-almost-everywhere-convergence` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `278959c8533e31be7c83458133c43102d2da5e86337b5416a905c99b8eb231f1` |
| `fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `0240e3e18b1c03e1523bdb265bff15a283dc09de665a621e78bd6a1ddb2ec9b1` |
| `fs-uniform-integrability-implies-domination-by-an-integrable-function` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `b0ebad92b2b49bd59620415bf39c689f03b816e044c79dc783b7b8160b18ecef` |
| `lem-annihilator-of-a-cyclic-submodule` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `60a50ff7be761401ee35add6e844155c822865f7d163197e139d866940b7747a` |
| `lem-associated-primes-exact-sequence-right-bound` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `3bcbf485a7c0901482ff398d84e2b7af40504cbfff0677b9171e4a855a109aa7` |
| `lem-associated-primes-from-a-minimal-primary-decomposition` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `bbf8881c13d4b624992c5f32901c84b62dea8d81f9b7eb43aa94e2a073545b99` |
| `lem-contraction-recovers-primary-component-after-localising-away-from-radical` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `f80b53204ffdcc9ce2a74806e3734d58efb9e4028b0d5269a641496964707916` |
| `lem-irreducible-submodule-is-primary-noetherian` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `b2ba64e2a1f97ab840fefc0286a2d861391dee137af66d1b86db7cffeed8a779` |
| `lem-localisation-of-a-primary-submodule` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `fb600b186995aa0c95f30f0f537b8a9370504a33c8e67c42bde5e3c815c8cb6d` |
| `lem-maximal-element-annihilator-primality-step` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `43082ac9449fb89afc89335a5eb218ae474cfa31913688cce5ec5426d61a49d3` |
| `lem-noetherian-ring-maximal-element-annihilator-exists` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `3285020671e7ad1ea5ec5d817456b9174606111984c3368b7a4dc93a580093f5` |
| `lem-primary-decomposition-combine-equal-radicals` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `c503dbbe2cb435045656d811236d29afadd94339f5607b2df0f31bc9d9c1d727` |
| `lem-primary-decomposition-delete-redundant-components` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `074173ddcc488eac8abf75210d2f8db91c74d1e3acd47d98fdd00f71780d834c` |
| `lem-simple-approximants-converge-uniformly-on-a-large-closed-set` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `91c8678f31e1b623ec2223e32442cfce10e726cfac645b7c0173cd30baacab55` |
| `lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `760960fb04c6366c4d1799cd92cd0bcb3e0488c26cac5e10a2c74059e9de2554` |
| `lem-zero-divisor-annihilator-contained-in-associated-prime` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `617603b4c153bc42c82f7fc15b81196a4d6384472071b26d81d79f13f1891d9b` |
| `prop-truncated-l-one-metric-metrises-convergence-in-measure-on-finite-measure-spaces` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `2b877d301502f0b679dbac700ea74c2412526b1226803e566cc4d42c00a7afbb` |
| `rem-finite-measure-implication-table-for-the-main-modes-of-convergence` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `e331a21e6c5640cc670cbdbdbdcff0d7e3eb85c559b7be86afa4bbeed9032277` |
| `thm-cauchy-in-measure-converges-in-measure` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `099384597f3c3964e3e744e9a1967aa49dbbbef30a6aba4b0d7c7288c7d3b9d1` |
| `thm-convergence-in-measure-limits-are-unique-almost-everywhere` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `00135844103b08cf45d94ea12cb02f11401ff642254a7f4d8709abf2715ae635` |
| `thm-finiteness-of-associated-primes` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `0674991873bf32b8ab3fa79cbe9285e54461e23da5d95ee3c98794006f762fb1` |
| `thm-isolated-primary-components-are-unique` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `331db0705db64b40842c4a6832d6438c05dd7e80bb0490477ed6ec667c041cce` |
| `thm-l-one-convergence-implies-convergence-in-measure` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `f37caabff0d3177619a4275da90c6912766f0d859cb8961c0ea85fdd9e527c89` |
| `thm-lasker-noether-primary-decomposition` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `9349b4c26124f98fc11dcfe3d2b16285edeea6be49e1afbbd933b4e4f8c79be1` |
| `thm-lusins-theorem` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `257f233d8aa0caee2840780b20856734e7e44adbf4cfc4691e1cc058a24c320d` |
| `thm-minimal-support-primes-are-associated` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `4587d190e6a5f3b666bcce472104d9f8a3827abcc13e205711da17563b2c2b2d` |
| `thm-riesz-subsequence-theorem-for-convergence-in-measure` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `986fb7e418ea68a9597e23fe3f86edcaed705c76110fa940df27d70fb00f435e` |
| `thm-second-uniqueness-theorem-primary-decomposition` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `0bd4b51efd2b75bd97a139682a2e2092babab7c2cff36b1e449af5ed08e914c1` |
| `thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `31f07602b19955a4fb6286268fbf84c9210fb91af2ebc1f7d536cf98a5a6700e` |
| `thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces` | `modes-of-convergence-egorov-and-lusin` | gpt-5.6-terra | `8b4de2888f4647b575c6dca03cbe4e90feda3b361073d145244cdeef2e1b937e` |
| `thm-zero-divisors-on-a-module` | `associated-primes-and-primary-decomposition` | gpt-5.6-terra | `84648012f878691baac084050ba8de484c171b367b8e0c9c50e284771038316f` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-22`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-22-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-22-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-22-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-22-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
