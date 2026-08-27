# Step 8 — group **b**, run `frontier-21`

You are the group Alpha for batches **2**, **3**: 2 A/B pair(s), 4 page(s), 44 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-21-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-21-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `pell-equations-and-generalized-pell-orbits` | A | number-theory | 78.5 | `regular-continued-fractions-and-diophantine-approximation-examples` |
| 2 | `pell-equations-and-generalized-pell-orbits-examples` | B | number-theory | 78.6 | `pell-equations-and-generalized-pell-orbits` |
| 3 | `artinian-rings-and-length` | A | commutative-algebra | 111.007 | `prime-spectra-and-radicals-examples` |
| 3 | `artinian-rings-and-length-examples` | B | commutative-algebra | 111.008 | `artinian-rings-and-length` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `pell-equations-and-generalized-pell-orbits` — Pell Equations and Generalized Pell Orbits (17 item(s))

- `def-pell-equation` · definition — Pell's equation
- `def-generalized-and-negative-pell-equations` · definition — Generalized and negative Pell equations
- `def-norm-on-integer-square-root-order` · definition — The norm on the explicit order $\mathbb{Z}[\sqrt{D}]$
- `lem-pell-norm-multiplication` · lemma — The Pell norm is multiplicative
- `prop-integral-pell-solutions-form-a-group` · proposition — Integral Pell solutions form an abelian group
- `lem-square-root-continued-fraction-state-recurrence` · lemma — The complete quotients of $\sqrt{D}$ satisfy the $P_n,Q_n$ recurrence
- `lem-square-root-convergent-norm-identity` · lemma — Convergents to $\sqrt{D}$ satisfy the norm identity
- `thm-square-root-continued-fraction-period-structure` · theorem — The continued fraction of $\sqrt{D}$ has symmetric period ending in $2a_0$
- `thm-lagrange-existence-for-pell-equation` · theorem — Every Pell equation has a positive nontrivial integral solution
- `thm-negative-pell-period-parity-criterion` · theorem — Negative Pell is soluble exactly for odd period length
- `def-fundamental-pell-solution` · definition — The fundamental Pell solution
- `thm-all-positive-pell-solutions-are-fundamental-powers` · theorem — All positive Pell solutions are powers of the fundamental solution
- `cor-all-integral-pell-solutions` · corollary — All integral Pell solutions are $\pm \varepsilon_D^k$
- `def-pell-equivalence-of-generalized-solutions` · definition — Pell-equivalence for generalized solutions
- `thm-generalized-pell-solutions-have-finitely-many-orbits` · theorem — Generalized Pell solutions fall into finitely many Pell orbits
- `cor-generalized-pell-solubility-is-decidable` · corollary — Generalized Pell solubility is decidable by bounded search
- `cor-one-generalized-pell-solution-gives-infinitely-many` · corollary — One generalized Pell solution generates infinitely many more

### `pell-equations-and-generalized-pell-orbits-examples` — Pell Equations and Generalized Pell Orbits — Examples (9 item(s))

- `ex-pell-equation-for-two` · example — The Pell and negative Pell equations for $D=2$
- `ex-pell-equation-for-three` · example — The Pell equation for $D=3$
- `ex-negative-pell-equation-for-five` · example — The negative Pell equation for $D=5$
- `ex-pell-equation-for-fourteen` · example — The Pell equation for $D=14$
- `ex-large-fundamental-pell-solution-for-sixty-one` · example — The large fundamental solution for $D=61$
- `ex-generalized-pell-orbits-for-six` · example — Generalized Pell orbits for $x^2 - 6y^2 = 3$
- `ex-generalized-pell-bounded-representatives` · example — Bounded representatives for $x^2 - 7y^2 = 57$
- `cex-generalized-pell-solutions-need-not-all-be-convergents` · counterexample — A generalized Pell solution need not be a convergent
- `cex-pell-units-need-not-be-all-quadratic-field-units` · counterexample — The elementary Pell order can miss units from the larger quadratic order

### `artinian-rings-and-length` — Artinian Rings and Length (12 item(s))

- `lem-artinian-domain-is-a-field` · lemma — An Artinian integral domain is a field
- `thm-artinian-ring-primes-are-maximal` · theorem — Every prime ideal of an Artinian ring is maximal
- `thm-artinian-ring-has-finitely-many-maximal-ideals` · theorem — An Artinian ring has only finitely many maximal ideals
- `thm-nilradical-of-artinian-ring-is-nilpotent` · theorem — The nilradical of an Artinian ring is a nilpotent ideal
- `thm-chinese-remainder-theorem-for-comaximal-ideals` · theorem — Chinese remainder theorem for pairwise comaximal ideals
- `thm-artinian-ring-is-noetherian` · theorem — Every commutative Artinian ring is Noetherian
- `thm-artinian-ring-has-finite-length` · theorem — A commutative ring is Artinian exactly when it has finite length as a module over itself
- `thm-artinian-local-ring-has-nilpotent-maximal-ideal` · theorem — An Artinian local ring has nilpotent maximal ideal, and its finite modules have finite length
- `thm-structure-theorem-for-artinian-rings` · theorem — An Artinian ring is canonically the finite product of its localizations at its maximal ideals
- `cor-prime-set-of-an-artinian-ring` · corollary — The prime ideals of an Artinian ring are exactly its finitely many maximal ideals
- `thm-artinian-ring-characterisation-by-primes` · theorem — A Noetherian ring is Artinian exactly when every prime ideal is maximal
- `cor-artinian-quotients-and-localisations` · corollary — Quotients and localizations of an Artinian ring are Artinian

### `artinian-rings-and-length-examples` — Artinian Rings and Length — Examples (6 item(s))

- `ex-artinian-truncated-polynomial-ring` · example — The truncated polynomial ring $k[x]/(x^n)$ is local Artinian of length $n$
- `ex-artinian-product-of-local-rings` · example — $\mathbb Z/12\mathbb Z$ splits as the product of its two local Artinian factors
- `ex-field-is-artinian` · example — A field has module length one over itself
- `ex-noetherian-not-artinian` · example — $\mathbb Z$ and $k[x]$ are Noetherian but not Artinian
- `ex-length-of-a-truncated-local-module` · example — The module $R/(x^i)$ over $k[x]/(x^n)$ has length $i$
- `ex-zero-dimensional-nonnoetherian-ring` · example — The ring $(\mathbb Z/2)^{\mathbb N}$ is zero-dimensional but not Noetherian

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
`research/frontier-21-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, `frontier-21`

Read `research/frontier-21-judge-closure.json`,
`research/frontier-21-judge.jsonl`,
`research/frontier-21-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-21-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-21-step8-cross-group.jsonl`, never repair that item.

Write `research/frontier-21-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
