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
group work, `research/frontier-31a-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
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

run: frontier-31a
role: alpha-adjudicate
label: step8-e
covers: 2, 5, 6

# Step 8 adjudication — group **e**, run `frontier-31a`

You are the group Alpha for batches **2**, **5**, **6**: 4 A/B pair(s), 8 page(s), 103 item(s), 22 open rejection(s) over 22 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-e-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-31a-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | A | measure-theory | 288.037 | `differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples`, `the-gauge-integral-and-cousins-lemma` |
| 2 | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples` | B | measure-theory | 288.038 | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` |
| 5 | `absolute-convergence-and-the-wiener-algebra` | A | fourier-analysis | 288.1401 | `fejer-and-poisson-summability-of-fourier-series-examples` |
| 5 | `absolute-convergence-and-the-wiener-algebra-examples` | B | fourier-analysis | 288.14012 | `absolute-convergence-and-the-wiener-algebra` |
| 6 | `primitive-dirichlet-l-functions-and-functional-equations` | A | number-theory | 348.011 | `dirichlet-characters-l-functions-and-primes-in-progressions-examples` |
| 6 | `primitive-dirichlet-l-functions-and-functional-equations-examples` | B | number-theory | 348.012 | `primitive-dirichlet-l-functions-and-functional-equations` |
| 6 | `number-fields-rings-of-integers-and-discriminants` | A | number-theory | 365.911 | `hilbert-symbols-and-the-quadratic-local-global-principle-examples` |
| 6 | `number-fields-rings-of-integers-and-discriminants-examples` | B | number-theory | 365.912 | `number-fields-rings-of-integers-and-discriminants` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` — Absolute Continuity and the Sharp Fundamental Theorem of Calculus (30 item(s))

- `def-luzin-property-n-on-a-compact-interval` · definition
- `def-indefinite-lebesgue-integral-on-a-compact-interval` · definition
- `def-total-variation-function-on-a-compact-interval` · definition
- `rem-absolute-continuity-conventions-and-hierarchy-agreement` · remark
- `thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant` · theorem
- `cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous` · corollary
- `thm-absolutely-continuous-functions-have-integrable-derivatives` · theorem
- `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions` · theorem
- `rem-sharp-and-classical-fundamental-theorems-of-calculus-agreement` · remark
- `thm-absolutely-continuous-functions-have-luzin-property-n` · theorem
- `lem-luzin-property-n-gives-an-integral-growth-estimate` · lemma
- `thm-banach-zarecki-characterisation-of-absolute-continuity` · theorem
- `thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity` · theorem
- `lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous` · lemma
- `thm-integration-by-parts-for-absolutely-continuous-functions` · theorem
- `thm-change-of-variables-for-an-increasing-absolutely-continuous-function` · theorem
- `lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition` · lemma
- `thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis` · theorem
- `thm-total-variation-function-of-an-absolutely-continuous-function` · theorem
- `thm-lipschitz-characterisation-within-absolutely-continuous-functions` · theorem
- `thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous` · theorem
- `thm-an-absolutely-continuous-function-after-a-monotone-lipschitz-function-is-absolutely-continuous` · theorem
- `cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous` · counterexample
- `rem-henstock-kurzweil-and-lebesgue-integral-comparison-on-a-compact-interval` · remark
- `fs-a-continuous-function-of-bounded-variation-is-absolutely-continuous` · false-statement
- `fs-continuity-almost-everywhere-differentiability-and-an-integrable-derivative-imply-newton-leibniz` · false-statement
- `fs-absolute-continuity-is-preserved-under-composition` · false-statement
- `fs-every-absolutely-continuous-function-is-lipschitz` · false-statement
- `fs-luzin-property-n-implies-absolute-continuity` · false-statement
- `rem-bounded-derivative-design-correction` · remark

### `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples` — Absolute Continuity and the Sharp Fundamental Theorem of Calculus — Examples (6 item(s))

- `cex-x-squared-sine-one-over-x-squared-is-differentiable-everywhere-but-not-absolutely-continuous` · counterexample
- `ex-integration-by-parts-for-absolutely-continuous-functions` · example
- `ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set` · example
- `cex-the-cantor-function-fails-luzin-property-n` · counterexample
- `cex-the-classical-composition-of-absolutely-continuous-functions-is-not-absolutely-continuous` · counterexample
- `cex-luzin-property-n-does-not-imply-absolute-continuity` · counterexample

### `absolute-convergence-and-the-wiener-algebra` — Absolute Convergence and the Wiener Algebra (12 item(s))

- `def-wiener-algebra-of-the-circle` · definition — The Wiener algebra of the circle
- `lem-absolutely-summable-fourier-coefficients-give-uniform-convergence` · lemma — Absolutely summable Fourier coefficients give uniform convergence
- `thm-wiener-algebra-is-a-banach-algebra` · theorem — The Wiener algebra is a unital commutative Banach algebra
- `lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz` · lemma — Weighted ell-2 decay implies absolute convergence
- `lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions` · lemma — A dyadic Fourier-coefficient square-sum bound for Hölder functions
- `lem-holder-fourier-coefficients-have-weighted-ltwo-decay` · lemma — Hölder Fourier coefficients have subcritical weighted ell-2 decay
- `thm-bernstein-absolute-convergence-theorem` · theorem — Bernstein's absolute-convergence theorem
- `def-periodic-ltwo-weak-derivative` · definition — Periodic L2 weak derivative on the circle
- `lem-fourier-coefficients-of-a-periodic-weak-derivative` · lemma — Fourier coefficients of a periodic weak derivative
- `cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series` · corollary — One ell-2 weak derivative implies an absolutely convergent Fourier series
- `thm-wiener-lemma-for-absolutely-convergent-fourier-series` · theorem — Wiener's lemma for absolutely convergent Fourier series
- `cor-holomorphic-functional-calculus-in-the-wiener-algebra` · corollary — Holomorphic functional calculus in the Wiener algebra

### `absolute-convergence-and-the-wiener-algebra-examples` — Absolute Convergence and the Wiener Algebra — Examples (5 item(s))

- `ex-a-trigonometric-polynomial-in-the-wiener-algebra` · example — A trigonometric polynomial in the Wiener algebra
- `ex-an-absolutely-convergent-non-smooth-fourier-series` · example — An absolutely convergent Fourier series that is not twice continuously differentiable
- `cex-continuity-does-not-imply-absolute-fourier-convergence` · counterexample — Continuity does not imply absolute Fourier convergence
- `cex-the-bernstein-holder-one-half-endpoint-can-fail` · counterexample — The Bernstein Hölder-one-half endpoint can fail
- `cex-wiener-inversion-needs-nonvanishing` · counterexample — Wiener inversion needs nonvanishing

### `primitive-dirichlet-l-functions-and-functional-equations` — Primitive Dirichlet L Functions and Functional Equations (16 item(s))

- `def-induced-dirichlet-character` · definition — A Dirichlet character modulo q induced by a character modulo a divisor d of q
- `def-primitive-dirichlet-character-and-conductor` · definition — Primitive Dirichlet characters and the conductor as their least inducing modulus
- `thm-dirichlet-character-primitive-induction` · theorem — Every Dirichlet character is induced by a unique primitive character of conductor dividing its modulus
- `thm-induced-dirichlet-l-finite-euler-factors` · theorem — The L-function of an induced character differs from its primitive ancestor by the omitted finite Euler factors for Re(s) > 1
- `def-gauss-sum-dirichlet-character` · definition — The Gauss sum tau(chi) with e(x) = exp(2 pi i x)
- `lem-primitive-gauss-sum-twist` · lemma — For primitive chi modulo q, the additive twist sum equals conjugate(chi)(m) tau(chi)
- `thm-primitive-gauss-sum-norm` · theorem — A primitive Dirichlet character chi modulo q satisfies |tau(chi)| squared = q
- `def-parity-dirichlet-character` · definition — Parity a of a Dirichlet character, defined by chi(-1) = (-1)^a
- `lem-fourier-transform-of-a-gaussian` · lemma — Fourier transform of a Gaussian for hat f(xi) = integral f(x)e(-x xi) dx
- `thm-dirac-comb-is-fourier-invariant` · theorem — Poisson summation from Fourier invariance of the integer Dirac comb
- `thm-twisted-poisson-summation` · theorem — Twisted Poisson summation for a primitive Dirichlet character
- `def-completed-dirichlet-l-function` · definition — The completed primitive Dirichlet L-function Lambda(s, chi)
- `thm-primitive-dirichlet-l-analytic-continuation` · theorem — Analytic continuation of Lambda(s, chi) for primitive characters, with the q = 1 zeta exception
- `thm-primitive-dirichlet-l-functional-equation` · theorem — Functional equation Lambda(s, chi) = epsilon(chi) Lambda(1-s, conjugate chi) for primitive characters
- `cor-dirichlet-l-root-number-unit-modulus` · corollary — The primitive Dirichlet root number epsilon(chi) has modulus one
- `cor-dirichlet-l-trivial-zeros` · corollary — Parity-forced trivial zeros of a primitive nonprincipal Dirichlet L-function, including the s = 0 qualification

### `primitive-dirichlet-l-functions-and-functional-equations-examples` — Primitive Dirichlet L Functions and Functional Equations — Examples (7 item(s))

- `ex-primitive-ancestors-of-small-characters` · example — Primitive ancestors and conductors of small Dirichlet characters
- `ex-finite-euler-factors-under-character-induction` · example — Finite Euler factors for a character induced from modulus 4 to modulus 12
- `ex-gauss-sum-for-chi-four` · example — The Gauss sum of the primitive odd character modulo 4
- `ex-even-and-odd-character-theta-kernels` · example — Even and odd theta kernels for the principal character modulo 1 and chi_4
- `ex-trivial-zeros-of-a-dirichlet-l-function` · example — The negative odd trivial zeros of the beta function L(s, chi_4)
- `cex-a-character-modulus-need-not-be-its-conductor` · counterexample — The character modulo 12 induced by chi_4 has conductor 4, not 12
- `cex-gauss-sum-sign-is-not-canonical-without-conventions` · counterexample — Changing e(x) to exp(-2 pi i x) conjugates the displayed Gauss-sum phase

### `number-fields-rings-of-integers-and-discriminants` — Number Fields Rings of Integers and Discriminants (20 item(s))

- `def-number-field` · definition — A number field as a finite extension of the rational field
- `def-ring-of-integers-of-a-number-field` · definition — The ring of integers O_K as the integral closure of Z in a number field
- `cor-algebraic-integer-minimal-polynomial-criterion` · corollary — An element of a number field is integral over Z exactly when its monic minimal polynomial lies in Z[x]
- `thm-clearing-denominators-for-an-algebraic-number` · theorem — Every element of a number field becomes an algebraic integer after multiplication by a nonzero integer
- `cor-trace-and-norm-of-an-algebraic-integer` · corollary — The trace and norm of an algebraic integer are integers
- `def-order-in-a-number-field` · definition — An order in a number field as a full-rank Z-subring of O_K
- `def-integral-basis-and-power-integral-basis` · definition — Integral bases and power integral bases of an order
- `thm-ring-of-integers-free-of-rank-degree` · theorem — O_K is a free Z-module of rank [K:Q]
- `thm-orders-have-integral-bases-and-finite-index` · theorem — Every order has an integral basis and finite index in O_K
- `def-archimedean-embeddings-and-number-field-signature` · definition — Real and complex embeddings and the signature (r_1,r_2) of a number field
- `def-discriminant-of-a-number-field-basis-and-order` · definition — Discriminant of an ordered Q-basis, an order, and a number field
- `lem-discriminant-change-of-basis` · lemma — Discriminants transform by the square of the change-of-basis determinant
- `thm-discriminant-as-an-embedding-determinant` · theorem — The basis discriminant equals the square of the determinant of the full embedding matrix
- `thm-number-field-discriminant-is-well-defined-and-nonzero` · theorem — The discriminant of a number field is a well-defined nonzero integer
- `thm-power-basis-discriminant-is-polynomial-discriminant` · theorem — The discriminant of the power basis equals the discriminant of the minimal polynomial
- `cor-order-index-discriminant-formula` · corollary — For an order A, disc(A) = [O_K:A] squared disc(K)
- `cor-squarefree-power-basis-discriminant-gives-ring-of-integers` · corollary — A power order with squarefree discriminant is the full ring of integers
- `thm-ring-of-integers-of-a-quadratic-field` · theorem — The ring of integers of Q(sqrt d) for squarefree d not equal to 1
- `cor-discriminant-of-a-quadratic-field` · corollary — The discriminant of Q(sqrt d) for squarefree d not equal to 1
- `cor-ring-of-integers-is-a-dedekind-domain` · corollary — The ring of integers of a number field is a Dedekind domain

### `number-fields-rings-of-integers-and-discriminants-examples` — Number Fields Rings of Integers and Discriminants — Examples (7 item(s))

- `ex-ring-of-integers-of-q` · example — The ring of integers and discriminant of Q
- `ex-gaussian-and-eisenstein-integer-bases` · example — Integral bases and discriminants of the Gaussian and Eisenstein integers
- `ex-ring-of-integers-of-q-sqrt-five` · example — The integral basis and discriminant of Q(sqrt 5)
- `ex-pure-cubic-power-basis` · example — A pure cubic field whose displayed power order is certified maximal by a squarefree discriminant
- `ex-nonmaximal-quadratic-order` · example — The nonmaximal quadratic order Z[sqrt 5] inside O_Q(sqrt 5)
- `ex-index-obstructs-naive-polynomial-factorization` · example — Index 2 explains why factorisation modulo 2 in Z[sqrt 5] is not a factorisation statement for O_Q(sqrt 5)
- `rem-nonmonogenic-number-field-source-obligation` · remark — A fully proved nonmonogenic number-field example remains a sourced authoring obligation

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

2 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-d3ba59ea03a61aa6b75f590c · `def-integral-basis-and-power-integral-basis`** (from group e, would-be-fatal) — The definition first defines an integral basis of an arbitrary order, then says a power integral basis is $(1,\alpha,\ldots,\alpha^{n-1})$, “equivalently $\mathcal O_K=\mathbb Z[\alpha]$.” That equivalence is false for a power basis of a nonmaximal order: for example, $\mathbb Z[\sqrt5]$ has basis $(1,\sqrt5)$ but is properly contained in $\mathcal O_{\mathbb Q(\sqrt5)}=\mathbb Z[(1+\sqrt5)/2]$.
- **s8a-2158c569e504a804e4753b4e · `thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant`** (from group e, gap-a-reader-closes) — Step 1.1 obtains a finite Vitali subfamily only for derivative-zero points, but step 2.1 immediately invokes AC for increments over an unspecified “null exceptional remainder.” The proof needs the standard construction of a short interval cover of the non-differentiability set together with the finite Vitali complement, and an explicit telescoping decomposition of $F(t)-F(s)$.

Append one owning-group disposition per warning to `research/frontier-31a-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cor-algebraic-integer-minimal-polynomial-criterion` | `number-fields-rings-of-integers-and-discriminants` | gpt-5.6-terra | `020a376a2c44574d19c0932a14fd625b5735e8752453171c52c21daf8ecffe79` |
| `cor-holomorphic-functional-calculus-in-the-wiener-algebra` | `absolute-convergence-and-the-wiener-algebra` | gpt-5.6-terra | `d28a980857e05a1bf057ba5645e2181d0654314ee62b7a66394f78a11de011de` |
| `cor-ring-of-integers-is-a-dedekind-domain` | `number-fields-rings-of-integers-and-discriminants` | gpt-5.6-terra | `6b3aafa7e54d648fac2297e112a8401c172ea3e11ba9bbf43463c652f3b6d542` |
| `def-archimedean-embeddings-and-number-field-signature` | `number-fields-rings-of-integers-and-discriminants` | gpt-5.6-terra | `b82137bd17ba4f81fe1c290614cae06411ef4698ecfe6ffa8cacd439e331a87e` |
| `def-discriminant-of-a-number-field-basis-and-order` | `number-fields-rings-of-integers-and-discriminants` | gpt-5.6-terra | `e7114bce161f5ae8c55a635b4e982eeec6494b43a0e5fee56b5aaa398ef1525b` |
| `def-indefinite-lebesgue-integral-on-a-compact-interval` | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | gpt-5.6-terra | `ee797f466f69d9ad8fa51f6c3392975775a472fc68ab20af28825dc8c19e8aec` |
| `def-luzin-property-n-on-a-compact-interval` | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | gpt-5.6-terra | `21ccdb558c6ba0c33882ad04486c92edac1afd1b84db0232418b96ff3dc97402` |
| `def-total-variation-function-on-a-compact-interval` | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | gpt-5.6-terra | `829b399a0e22735cf76e89c44c5e1e94d43dc0b597fff7a00d53065da3a5496c` |
| `def-wiener-algebra-of-the-circle` | `absolute-convergence-and-the-wiener-algebra` | gpt-5.6-terra | `9f28c7d867d1051ff5fdc585e383cc558314c7c7c61aae76f95596ea7c62cd57` |
| `ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set` | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples` | gpt-5.6-terra | `3c2ce68b543fddd8c51f634566b7b579b51d20d185db2e417aa3b19683488012` |
| `lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition` | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | gpt-5.6-terra | `38e057c1dc1da8ceab6c471f5f0bf85a74832051fbd896d97c3bda20ed9a23ac` |
| `lem-fourier-transform-of-a-gaussian` | `primitive-dirichlet-l-functions-and-functional-equations` | gpt-5.6-terra | `a503414a45ae157a0ce546ec39c70168a24be6eda3e990e2746af38bb1e76668` |
| `lem-luzin-property-n-gives-an-integral-growth-estimate` | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | gpt-5.6-terra | `144ce9edf54ab511fb3166d91e9ea0b0df9dd0de49b92386f1b09b8107035d4b` |
| `thm-absolutely-continuous-functions-have-luzin-property-n` | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | gpt-5.6-terra | `6f67603b420eefca4ff26f60a60d010da2e336c6bf4ac3e07a7d091354c5b27f` |
| `thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant` | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | gpt-5.6-terra | `44e799d102d968d01269b7ea199a53dec25b8e3417a60b6099dc3679c0d2ef94` |
| `thm-banach-zarecki-characterisation-of-absolute-continuity` | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | gpt-5.6-terra | `46d998ca769938a92c289f98fc1a6cf56b5bc9dacdb217dda9a6c72ea1591090` |
| `thm-clearing-denominators-for-an-algebraic-number` | `number-fields-rings-of-integers-and-discriminants` | gpt-5.6-terra | `cc33f0812024da752364281c1ffeaf006d1aa07fde5a625dabf08a392f2bc6eb` |
| `thm-number-field-discriminant-is-well-defined-and-nonzero` | `number-fields-rings-of-integers-and-discriminants` | gpt-5.6-terra | `c8211d297a8ee10c15a4dd719ef984797ec1bd0d1f3151558c2e2bdf96357b6b` |
| `thm-primitive-dirichlet-l-analytic-continuation` | `primitive-dirichlet-l-functions-and-functional-equations` | gpt-5.6-terra | `7e387db42775c3e80db437154588e0a3552327c6f33b4b8adbe69d44e390741b` |
| `thm-primitive-dirichlet-l-functional-equation` | `primitive-dirichlet-l-functions-and-functional-equations` | gpt-5.6-terra | `c7c76d2be43b33b5559dff7460d8b8f074836bcc377f9f3f77c7e45fbe579499` |
| `thm-total-variation-function-of-an-absolutely-continuous-function` | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus` | gpt-5.6-terra | `edd76d2fd9d5fa63ec04841d73f298edd9bac9a32ae0d79fd47683f1684d319c` |
| `thm-wiener-lemma-for-absolutely-convergent-fourier-series` | `absolute-convergence-and-the-wiener-algebra` | gpt-5.6-terra | `bb8274b63133a7789d5dda732a817224ebded6d8913115bb4598e14566da2c11` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-31a`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-31a-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-31a-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-31a-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-31a-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-31a-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
