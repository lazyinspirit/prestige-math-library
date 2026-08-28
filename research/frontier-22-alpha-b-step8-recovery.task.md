# Step 8 — group **b**, run `frontier-22`

You are the group Alpha for batches **2**, **5**: 2 A/B pair(s), 4 page(s), 86 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-22-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, `frontier-22`

Read `research/frontier-22-judge-closure.json`,
`research/frontier-22-judge.jsonl`,
`research/frontier-22-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-22-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-22-step8-cross-group.jsonl`, never repair that item.

Write `research/frontier-22-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
