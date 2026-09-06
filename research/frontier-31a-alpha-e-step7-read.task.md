# Step 7 whole-group reading — group **e**, run `frontier-31a`

You are the group Alpha for batches **2**, **5**, **6**: 4 A/B pair(s), 8 page(s), 103 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

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

---

# Step 7 — group reading digest, `frontier-31a`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
