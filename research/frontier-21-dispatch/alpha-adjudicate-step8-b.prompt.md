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
group work, `research/frontier-21-alpha-groups.json` is the assignment: it permits at
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

run: frontier-21
role: alpha-adjudicate
label: step8-b
covers: 2, 3

# Step 8 — group **b**, run `frontier-21`

You are the group Alpha for batches **2**, **3**: 2 A/B pair(s), 4 page(s), 44 item(s), 21 open rejection(s) over 21 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cor-artinian-quotients-and-localisations` | `artinian-rings-and-length` | gpt-5.6-terra | `d862a222f0e838429302a37b8bc7bd41af0eab3d8a21fc6ba48eb615297d55e2` |
| `cor-generalized-pell-solubility-is-decidable` | `pell-equations-and-generalized-pell-orbits` | gpt-5.6-terra | `8fa22656430c245c2e2dee3c1c18fc962acbb30213c24bdbc465e632d46b3c05` |
| `cor-one-generalized-pell-solution-gives-infinitely-many` | `pell-equations-and-generalized-pell-orbits` | gpt-5.6-terra | `602b741e6ac174dee54612e178d526f18ad0dd985be0ba3f8a320f8a794df6de` |
| `def-fundamental-pell-solution` | `pell-equations-and-generalized-pell-orbits` | gpt-5.6-terra | `bf5ecc5304b52c953c1098b9cc3618a9fa60fe8051bc26768bb1859d578f7f36` |
| `ex-generalized-pell-bounded-representatives` | `pell-equations-and-generalized-pell-orbits-examples` | gpt-5.6-terra | `55b375297d4727a3b7d57515a7115efe4f0302f7ce5cc4b27eb319f63afb7973` |
| `ex-large-fundamental-pell-solution-for-sixty-one` | `pell-equations-and-generalized-pell-orbits-examples` | gpt-5.6-terra | `8d4887b727ef514f1a9a4c5c6d40007905454d9c079fae615307ccec6cf68346` |
| `ex-noetherian-not-artinian` | `artinian-rings-and-length-examples` | gpt-5.6-terra | `65c12f2ecc0a4a1609dd871e2fe1e90d22901b25cbce152070709d4d7eda1ac2` |
| `ex-pell-equation-for-fourteen` | `pell-equations-and-generalized-pell-orbits-examples` | gpt-5.6-terra | `2963ea1e84547b92804324d076905060631b5baa92ee9df24f8f4afd10096deb` |
| `ex-zero-dimensional-nonnoetherian-ring` | `artinian-rings-and-length-examples` | gpt-5.6-terra | `2fd53e10eebf16330be59179e9973583bbef260e3d1da867c9a43c127294a7fa` |
| `lem-square-root-continued-fraction-state-recurrence` | `pell-equations-and-generalized-pell-orbits` | gpt-5.6-terra | `d1cf1386981ffc368331df040553593c2c16e6af69ed83e530ac18605f8a6f53` |
| `lem-square-root-convergent-norm-identity` | `pell-equations-and-generalized-pell-orbits` | gpt-5.6-terra | `3d9f9384462711dac927b5c40a3f1abcb61a10c906c026d26573619e63d487e7` |
| `thm-artinian-local-ring-has-nilpotent-maximal-ideal` | `artinian-rings-and-length` | gpt-5.6-terra | `0d1f9795f5d3ddece4b643008ba76cf44f6a733195686989151c4c8c4c207662` |
| `thm-artinian-ring-characterisation-by-primes` | `artinian-rings-and-length` | gpt-5.6-terra | `367fe0d58efa8fe0478028704bb07cf67561e3159432d0ce4ccae9495873c635` |
| `thm-artinian-ring-is-noetherian` | `artinian-rings-and-length` | gpt-5.6-terra | `4f5fb806369706be14a9a4b1b2041515f6b47142f4369e1c415a8336567a63a5` |
| `thm-chinese-remainder-theorem-for-comaximal-ideals` | `artinian-rings-and-length` | gpt-5.6-terra | `cd44e4e72a68c8a587644949d557af22aace35dd221d45603f4dfc4cd9ec66da` |
| `thm-generalized-pell-solutions-have-finitely-many-orbits` | `pell-equations-and-generalized-pell-orbits` | gpt-5.6-terra | `84c7548454e941f12aa0d9623bf0ab646f2fbfb68d25be24980309ff1571275b` |
| `thm-lagrange-existence-for-pell-equation` | `pell-equations-and-generalized-pell-orbits` | gpt-5.6-terra | `23140c34ee618a48bf50e71e5c41c0bbe2746221b096fa4f7f501227b9799d41` |
| `thm-negative-pell-period-parity-criterion` | `pell-equations-and-generalized-pell-orbits` | gpt-5.6-terra | `5391ed5754452ced658cfe716461ee3eeb46b33e7070ce31dfdc0d5590b943c6` |
| `thm-nilradical-of-artinian-ring-is-nilpotent` | `artinian-rings-and-length` | gpt-5.6-terra | `bad214df3e656854c5719839a4dc678a9f5e057865ae37f78098703e72b421ef` |
| `thm-square-root-continued-fraction-period-structure` | `pell-equations-and-generalized-pell-orbits` | gpt-5.6-terra | `9c4dfa200f16f0da4ec4ddff337ae16a8a2465a56c542d8a7137696810e8b42f` |
| `thm-structure-theorem-for-artinian-rings` | `artinian-rings-and-length` | gpt-5.6-terra | `06c55f7a70f35444952a7a39a096ab38ea1d2a6a45044968d4fc232863558e04` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-21`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-21-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-21-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-21-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-21-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
