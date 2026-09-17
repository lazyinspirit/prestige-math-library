# Phase 2 remaining 27 — Batch 7 repaired Step-1 evidence

Status: **READY FOR OWNER/OPERATOR RECONCILIATION**. The repaired manifest has
56 items and all 56 have current non-owner `ready` records. This is Step-1
construction evidence, not publication, a verdict, or independent Step-3
approval. No published item, shared plan, cross-batch ledger, engine state,
verdict, other batch, or downstream Step-3 task was edited.

## Scope and inventory

The four owned pages retain their canonical pair order, companions, categories,
and `requires` arrays:

- `brownian-motion-markov-properties-and-hitting-times`: 19 A items;
- `brownian-motion-markov-properties-and-hitting-times-examples`: 9 B items;
- `brownian-path-properties`: 20 A items;
- `brownian-path-properties-examples`: 8 B items.

The 51 binding designed items remain present. Five proof-bearing local lemmas
were inserted before their consumers, within the 60-item A-page cap:

- `lem-conditioning-a-known-state-and-independent-noise`;
- `lem-planar-brownian-annular-exit-probability`;
- `lem-brownian-motion-has-a-jointly-measurable-continuous-version`;
- `lem-two-sided-mills-bounds-for-standard-normal-tail`;
- `lem-brownian-step-potential-resolvent-at-zero`.

`research/phase-2-remaining-27-batch-7.cross-batch-dependencies.json` remains
`[]`: PT-20's PT-19 page dependency is internal to Batch 7, and none of the five
new local lemmas creates a same-run dependency on another batch. The unified
cross-batch ledger was deliberately not refreshed by this repair role.

## Mathematical repair record

### Filtration, conditioning, and Markov chain

`def-natural-and-usual-augmented-brownian-filtrations` now distinguishes the raw
filtration, its completion by the terminal null ideal, the uncompleted raw right
limit, and the usual augmentation
`F_t=intersection_{u>t} overline(F_u^0)`. It explicitly completes the ambient
space before adjoining arbitrary null subsets and proves completeness and right
continuity from the definitions.

The new parametric-conditioning lemma proves
`E[h(X,Y)|G]=integral h(X,y) mu(dy)` from rectangle indicators, a Dynkin-system
extension, simple approximation, and monotone convergence. Deterministic
Brownian Markov is first proved for the raw past. Its usual-filtration form now
uses the decreasing completed-raw sigma-algebras
`overline(F_{s+1/n}^0)`, Levy downward convergence, continuity of translated
Gaussian densities, path continuity, and dominated convergence. The future-path
version repeats this argument for continuous cylinders before the path-space
monotone-class extension. Blumenthal's law then follows without an improvised
reverse-martingale theorem: at time zero the future path is independent of
`F_0`, while a raw germ event belongs to both `F_0` and the full path sigma
algebra, hence is independent of itself.

### Stopping, reflection, and planar polarity

`def-continuous-time-stopping-time` records both strict/non-strict conversions,
including the `t=0` endpoint and the right-continuity direction. Closed-set
hitting uses the exact compact-continuity formula
`{tau_C<=t}=intersection_n union_{q in Q intersect [0,t]}
{dist(B_q,C)<1/n}`, so it is raw-adapted without an initial-separation caveat.

Strong Markov now proves that the dyadic ceilings are stopping times and that
`F_tau` is contained in each `F_{tau_n}`, then passes bounded continuous
cylinders by dominated convergence before the two monotone-class extensions.
Reflection no longer assumes the later consequence `tau_a<infinity`: on every
finite horizon it reflects after the bounded time `tau_a wedge T`, identifies
all finite-horizon cylinder laws, and only then derives the maximum and
first-passage laws.

The planar example now consumes a preceding annular-exit lemma. That lemma
constructs an explicit bounded C2 extension of `log|z-y|`, derives its planar
Gaussian semigroup martingale by Fubini, dominated convergence, and integration
by parts, applies the published discrete optional-sampling theorem to dyadic
ceilings of `H wedge n`, and passes both limits. The resulting logarithmic exit
formula proves point polarity by inner-radius limits and disc hitting by an
outer-radius limit; it does not cite later Ito material.

### Path measurability, variation, LIL, and arcsine law

Chebyshev is now an explicit direct supplier of both the total-variation and
dyadic quadratic-variation probability estimates. A new normalized Brownian
version is continuous on every outcome, is measurable into uoc path space by
coordinate generation, and is jointly measurable by continuity of evaluation.
The zero-set definition, its Tonelli nullity proof, and the occupation-time
chain consume this helper.

The new two-sided Mills lemma supplies the exact upper and lower normal-tail
bounds needed by the LIL. The upper geometric-time argument records its summable
exponent. The lower argument chooses `c` and a block threshold `a` with
`a^2/(1-1/c)<1` and enough margin to subtract the preceding endpoint, so second
Borel-Cantelli actually yields the constant one.

The occupation-time theorem now consumes a local step-potential resolvent lemma.
That lemma proves Borel measurability, writes the pathwise Duhamel identity,
derives the resolvent equation by deterministic future-path Markov and Tonelli,
computes the one-dimensional exponential resolvent kernel, proves C1 matching
and the two half-line ODEs, and obtains
`u(0)=1/sqrt(alpha(alpha+beta))`. Scaling turns this into the Stieltjes transform
of `A_1`; the arcsine density has the same transform, and a uniform geometric
series plus Stone-Weierstrass proves uniqueness without unsupported
differentiation under the integral.

The p-variation item is restored to the binding planned range: infinite for
`1<=p<=2` and finite for `p>2`. Its critical `p=2` argument still uses monotone
a.e. differentiability, shifted zero-time LIL, and Fubini rather than confusing
strong variation with one fixed dyadic quadratic-variation sequence. The
deterministic finite-quadratic-variation counterexample now uses the nested
partition consisting of the level-n dyadic grid plus all sawtooth vertices in
blocks 1 through n. Its mesh is at most `2^-n`, while the unsplit nth block alone
contributes `2n^2`, so the claimed divergence is valid.

## Source reharvest

The existing full-text fetch stamps remain current. Coverage now records exact
locators rather than the stale labels:

- Durrett: Theorems 7.2.1, 7.2.3, 7.3.4, and 7.3.9; Example 7.4.2 with
  equations (7.4.4) and (7.4.6); the unnumbered zero-set passage in Section
  7.4.1; Example 7.4.3 with equation (7.4.7); Theorem 7.5.3; Theorem 7.1.6;
  and Theorem 8.5.1 with its Gaussian-tail estimates.
- Lawler: Theorem 2.7.1 for strong Markov, Proposition 2.7.2 for reflection and
  the maximum, Example 2.7.1 for first passage, and Theorems 2.8.1-2.8.2 for
  quadratic variation.
- Sousi: Definition 6.10, Theorems 6.13 and 6.17, the annular/polarity argument
  in Section 6.7 on printed pp. 63-64, and Theorem 6.39 on printed p. 71.
- Yoshida: Section 6.3 only for its actual Holder material, and Lemmas
  6.8.1-6.8.3 plus Proposition 6.8.4 on printed pp. 214-217 for the resolvent
  and occupation arcsine law. The unrelated Theorem 6.3.4, Section 6.4, and
  Section 6.7 are no longer represented as proofs of nowhere differentiability,
  p-variation, or the Brownian LIL.

## Choice and dependency ledger

Every Brownian-dependent item continues to declare `def-axiom-of-choice`.
`lem-planar-brownian-annular-exit-probability` and
`lem-two-sided-mills-bounds-for-standard-normal-tail` additionally declare
`def-countable-choice` and `def-dependent-choice` at their actual Lebesgue
integration-by-parts supplier. The p=2 variation item retains its direct
`def-countable-choice` declaration at monotone differentiability. No repaired
item reaches `deferred-set-theory-beyond-choice`.

The previously observed published metadata debt remains outside this authorized
scope: `thm-bv-functions-are-differentiable-almost-everywhere` states Countable
Choice but omits `def-countable-choice` from its own direct dependency list.
Batch 7 still does not consume that item; its total-variation proof is direct.

## Verification

Batch 7:

- `manifest-deps`: 56 items, 0 normalized, 0 errors.
- `content-policy --manifest-only`: 56 scoped items, 0 errors, 0 warnings.
- `coverage-checklist`: 2 pages, 37 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 7/7 source entries fetch-verified and resolved.
- `url-sweep --recover --fail-on-dead`: 4/4 unique URLs live; 0 failed,
  recoverable, or suspect.
- `source-backing --require-verified`: 33 authored results, all backed.
- Readiness: 56/56 current `ready`; 0 Batch-7 open, missing, stale, or escalated
  records. Forty-eight affected/new receipts were refreshed through
  `tools/step1-decisions.mjs record`; eight unchanged current receipts were
  preserved.

Whole run at the final check:

- `manifest-integrity`: all 54 owed pages present; no scope drift.
- `manifest-deps`: 290 items, 0 normalized, 0 errors.
- `content-policy --manifest-only`: 290 scoped items, 0 errors, 0 warnings.
- `validate-plan --max-items 60`: success; no unresolved ID, item cycle, page
  cycle, forward dependency, intra-page order error, or B-page dependency among
  the 1,134 pages with item lists. The reported redundant-prerequisite warnings
  are pre-existing plan hygiene, and 485 planned pages still have empty item
  lists.
- `extcheck`: 19,056 published items, 167 recorded-not-proved statements, and
  55 marked published consequences; final verdict OK. None of its warnings is
  a Batch-7 item.
- Step-1 state: 290/290 currently scaffolded run items have current `ready`
  records and Batch 7 contributes no open row. The run remains open because
  other owed pages still have empty scaffold inventories.

No Batch-7 Step-1 mathematical or mechanical blocker remains. Existing
downstream Step-3 task files were generated from earlier manifest hashes; the
owner/operator must let the engine invalidate/regenerate or reconcile those
tasks. This repair did not edit them.
