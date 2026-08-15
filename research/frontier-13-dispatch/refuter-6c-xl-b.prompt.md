# Proof-refuter brief for run `frontier-13` (step 6)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's wording: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* It binds a **compound command
> as a whole — no segment of an `&&` chain may raise a prompt either.** Use
> command forms already allowed inside your sandbox and choose non-escalated
> forms. Web search is part of your job and you never ask before searching. If an
> indispensable operation has no escalation-free form, **record a blocker in your
> report** — that is the escape hatch, never a prompt.

You are a **read-only proof-refuter on run `frontier-13`**, GPT 5.6 Sol. Your
process is `--sandbox read-only`: you *cannot* write, and that is deliberate.
**You never write content and never apply a fix.** Alpha adjudicates every
finding from disk. Your job is evidence, not a verdict.

Your assignment is in the "This dispatch" section appended below.

## Your standard is the step-7 judges' standard

You are held to the same skeptical, adversarial standard as the paired DeepSeek
V4 Pro and GPT 5.6 Terra judges who read this text at step 7. Report **only**:

- a concrete **false claim** — the Statement, a witness, or a computed value is
  actually wrong, and you can say why;
- an **unlicensed inference** — a proof step that does not follow from the
  facts, hypotheses and earlier steps it cites;
- a **missing hypothesis** — characteristic, ordering, nonnegativity,
  nonemptiness, smallness, connectedness, finiteness, or a choice principle the
  proof silently uses;
- an **inaccurate citation** — a `[F#]`/`[A#]`/`[L#]` fact that does not state
  what the cited item states, with a changed domain, quantifier, hypothesis,
  direction or conclusion, or an invented converse.

**Open the cited item on disk before alleging a dependency is too weak.** Every
dependency is a real file at `items/<id>.md`. A restatement that inflates a
dependency to carry more weight than it has is a defect; a terse but licensed
routine move is not.

## What is NOT a finding

A logical gap a competent human reader closes in **30 seconds** is nonfatal
(owner, 2026-07-31). Say so and move on; do not open a fatal repair cycle on it.
Style preferences, alternative proofs you prefer, "could be deeper", and missing
generality that the page deliberately scoped away are not findings.

One scope note for this run: the pages under review sit in linear algebra
(minimal polynomial, diagonalisation, inner product spaces) and in combinatorics
(linear recurrences, generating functions, transfer matrices). Where a proof is
deliberately stated over a commutative ring rather than a field, or over a formal
power series ring rather than an analytic one, that is the page's scope and not a
gap.

## Titles and Statements

A **title or Statement asserting more than the proof delivers is fatal.** The
step-7 judges read Statements and cannot see a false title. Check the title
against what was actually proved, every time.

## Provenance is part of your check

Every mathematical-content item carries `provenance.statement` and
`provenance.proof`. An **`ai-generated` Statement or Construction may never be a
dependency target** — if you find one in another item's `deps`, that is a
finding. For an `ai-generated` statement, witness or refutation anywhere in your
assignment, **actively search for a counterexample** when you have concrete
doubt; a plausible repaired proof is not evidence the Statement is true.

## Your output

You are read-only and cannot write a file. **Put your complete report in your
final message**, structured per finding:

- the item id and the exact location (Statement, a numbered proof step, a `[F#]`
  fact, the Remark, or page prose);
- what is wrong;
- the evidence — quote the dependency text from disk, or give the counterexample;
- your severity call: **fatal** or **nonfatal**.

Put fatal findings first. Finish with a plain statement of coverage: which items
you read fully, which you sampled, and anything you could not check.

If you find nothing fatal, say so plainly. "No defect found in these N items,
here is what I checked" is a valuable and expected result — do not manufacture a
finding to justify the dispatch.


---

# This dispatch

## This dispatch — cross-level citation refutation, cluster `xl-b`

You are checking **cross-level citations**: facts in this run's draft items
that cite items already **published** in the library. Step 6b found this run's
dominant defect class *within* batches — an `[F#]`/`[L#]` restatement claiming
more than the cited item's Statement says (an enlarged domain, a dropped
`n\ge1`, a citation pointing at an item that does not state the claimed fact at
all). The cross-level surface below has had no equivalent pass.

Your cluster is **38 published target items** carrying
**81 load-bearing citation edges**.

### Method — the target is read once, the restatements are checked against it

For each published target below:

1. Open `items/<target>.md` and read its **Statement** (or Definition /
   Construction) verbatim. This is ground truth. Note its exact domain,
   hypotheses, quantifiers, direction and conclusion.
2. For each citing item listed under it, open `items/<citing-item>.md`, find the
   named `[F#]`/`[A#]`/`[L#]` fact, and compare its prose against the Statement
   you just read.
3. Then read the **numbered steps that use that fact** (listed for you) and ask
   the load-bearing question: *does the FAITHFUL version of this dependency
   license this step?* A restatement can be inaccurate but harmless, or
   accurate but applied outside its domain. Report which.

Report a finding only when you can name the exact clause of the cited Statement
and the exact clause of the restatement that differ, and say whether a step
depends on the difference. **A restatement that is a faithful shortening is not
a finding** — the house rule asks for the smallest faithful shortening, not the
whole Statement. Do not report a missing clause the citing step never uses,
unless the restatement positively asserts something false.

### Your cluster

#### target: `def-unit-group-modulo-n-and-euler-totient`  (definition, 9 citations)

- `prop-primitive-root-iff-unit-group-generator` **L4** — used at step(s) 1.1
  - restatement on disk: The unit group modulo $n$ has exactly $\varphi(n)$ elements ([[def-unit-group-modulo-n-and-euler-totient]]).
- `cor-generators-of-a-finite-cyclic-group` **L4** — used at step(s) 2.1
  - restatement on disk: There are $\varphi(m)$ units modulo $m$ ([[def-unit-group-modulo-n-and-euler-totient]]).
- `cor-unit-group-modulo-prime-is-cyclic` **L4** — used at step(s) 2.1
  - restatement on disk: $(\mathbb Z/p)^\times$ is finite of order $\varphi(p)$ ([[def-unit-group-modulo-n-and-euler-totient]]).
- `thm-unit-group-chinese-remainder-decomposition` **L2** — used at step(s) 1.1, 1.2, 2.1
  - restatement on disk: Units in a quotient ring form the unit group ([[def-unit-group-modulo-n-and-euler-totient]]).
- `thm-structure-of-the-unit-group-modulo-n` **L7** — used at step(s) 2.2
  - restatement on disk: The totient is the cardinality of the unit group: $\varphi(n)=\bigl|(\mathbb Z/n)^\times\bigr|$ ([[def-unit-group-modulo-n-and-euler-totient]]).
- `lem-primitive-roots-pass-between-odd-n-and-twice-n` **L4** — used at step(s) 1.2
  - restatement on disk: The totient is the cardinality of the unit group: $\varphi(n)=\bigl|(\mathbb Z/n)^\times\bigr|$ ([[def-unit-group-modulo-n-and-euler-totient]]).
- `lem-order-p-actions-on-a-cyclic-q-group` **L2** — used at step(s) 1.2, 2.1
  - restatement on disk: For prime $q$, $\varphi(q)=q-1$ ([[cor-totient-at-one-and-at-a-prime]]), and $\varphi(n)=\bigl|(\mathbb Z/n)^\times\bigr|$ ([[def-unit-group-modulo-n-and-euler-totient]]); together these give $\bigl|(\mathbb Z/q)^\times\bigr|=q-1$.
- `lem-order-of-one-plus-pu-modulo-prime-powers` **L1** — used at step(s) 1.3
  - restatement on disk: The units modulo a positive modulus form a finite group ([[def-unit-group-modulo-n-and-euler-totient]]), and a class is a unit exactly when its representative is coprime to the modulus ([[thm-unit-criterion-modulo-n]]).
- `thm-unit-group-modulo-two-power-structure` **L5** — used at step(s) 2.1
  - restatement on disk: Multiplication modulo $2^k$ is commutative and restricts to the unit group ([[def-unit-group-modulo-n-and-euler-totient]]).

#### target: `thm-simple-algebraic-extension-quotient-power-basis-and-degree`  (theorem, 7 citations)

- `cor-element-algebraic-iff-simple-extension-finite` **L1** — used at step(s) 1.1
  - restatement on disk: If $a$ is algebraic with minimal polynomial of degree $n$, then $1,a,\ldots,a^{n-1}$ is a basis of $F(a)/F$ and its degree is $n$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).
- `thm-factorization-of-x-qn-minus-x` **L5** — used at step(s) 1.2
  - restatement on disk: If an algebraic element has minimal polynomial of degree $d$, its simple extension has degree $d$ and the corresponding power basis ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).
- `cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree` **L6** — used at step(s) 2.1, 4.1
  - restatement on disk: An algebraic element's monic irreducible minimal polynomial has degree equal to the degree of its simple extension ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).
- `ex-degree-of-q-sqrt-two` **L1** — used at step(s) 2.1
  - restatement on disk: If an algebraic element has irreducible minimal polynomial of degree $n$, its simple extension has power basis $1,a,\ldots,a^{n-1}$ and degree $n$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).
- `ex-degree-of-q-cube-root-two` **L1** — used at step(s) 2.1
  - restatement on disk: A simple algebraic extension has degree equal to the degree of the element's minimal polynomial and has the corresponding power basis ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).
- `ex-f-eight-as-a-polynomial-quotient` **L2** — used at step(s) 2.1
  - restatement on disk: An irreducible cubic simple extension has power basis $(1,a,a^2)$ and degree $3$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).
- `ex-a-generator-of-f-eight-multiplicative-group` **L2** — used at step(s) 1.1
  - restatement on disk: An irreducible cubic quotient has the power basis $(1,a,a^2)$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

#### target: `def-monoid-finite-product`  (definition, 6 citations)

- `prop-standard-coordinate-inner-products` **L1** — used at step(s) 1.1, 2.1
  - restatement on disk: Finite products in a commutative monoid have an empty value and may be read additively as finite sums ([[def-monoid-finite-product]]).
- `thm-bessel-inequality-and-finite-parseval-identity` **L4** — used at step(s) 5.1
  - restatement on disk: Finite sums include the empty sum, whose additive value is zero ([[def-monoid-finite-product]]).
- `ex-weighted-inner-product-on-finite-coordinate-space` **L4** — used at step(s) 1.1
  - restatement on disk: The empty finite sum has additive value zero ([[def-monoid-finite-product]]).
- `ex-frobenius-inner-product-on-matrix-space` **L4** — used at step(s) 2.1
  - restatement on disk: Empty finite sums have additive value zero ([[def-monoid-finite-product]]).
- `ex-sampled-polynomial-inner-product-on-degree-at-most-three` **L3** — used at step(s) 1.1
  - restatement on disk: Finite sums are compatible with the additive and multiplicative laws of the scalar field ([[def-monoid-finite-product]]).
- `lem-words-satisfy-the-free-monoid-universal-property` **F2** — used at step(s) 1.3, 2.2
  - restatement on disk: A finite product in a monoid is uniquely defined by the recursion $P(0)=e$ and $P(n+1)=P(n)g_n$ ([[def-monoid-finite-product]]).

#### target: `thm-polynomial-ring-over-a-field-is-a-ufd`  (theorem, 5 citations)

- `thm-primary-decomposition-for-an-endomorphism` **L1** — used at step(s) 1.1
  - restatement on disk: Every polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).
- `cor-distinct-characteristic-roots-imply-diagonalisability` **L4** — used at step(s) 1.1
  - restatement on disk: The polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).
- `cor-idempotent-endomorphisms-are-diagonalisable-projections` **L4** — used at step(s) 1.1
  - restatement on disk: The polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).
- `thm-invariant-restrictions-of-diagonalisable-endomorphisms-are-diagonalisable` **L4** — used at step(s) 1.1
  - restatement on disk: The polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).
- `cor-minimal-recurrence-and-reduced-denominator` **L2** — used at step(s) 2.1
  - restatement on disk: The polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

#### target: `thm-universal-property-of-free-modules`  (theorem, 4 citations)

- `thm-universal-property-of-module-tensor-products` **L4** — used at step(s) 2.1
  - restatement on disk: Every set map $u:X\to P$ into a left $S$-module extends uniquely to an $S$-module homomorphism $S^{(X)}\to P$ taking $e_x$ to $u(x)$ ([[thm-universal-property-of-free-modules]]).
- `thm-tensor-product-basis-from-bases` **L4** — used at step(s) 1.1
  - restatement on disk: A map from the basis set of a free module extends uniquely to a module homomorphism ([[thm-universal-property-of-free-modules]]).
- `thm-flatness-criteria-by-injections-and-ideals` **L4** — used at step(s) 2.1, 2.2
  - restatement on disk: A finite list $x_1,\ldots,x_n$ in a module determines a homomorphism $R^n\to N$ taking $e_j$ to $x_j$; if the list generates $N$, this map is surjective. Also $R^0=0$ ([[def-free-module-on-a-set-and-standard-basis]], [[thm-universal-property-of-free-modules]]).
- `thm-the-free-module-functor-is-left-adjoint-to-the-underlying-set-functor` **F1** — used at step(s) 1.1, 1.2, 2.1, 4.1
  - restatement on disk: Every function $u:X\to M$ extends uniquely to an $R$-linear map $\bar u:R^{(X)}\to M$ with $\bar u(e_x)=u(x)$ ([[thm-universal-property-of-free-modules]]).

#### target: `def-formal-derivative-of-a-polynomial`  (definition, 3 citations)

- `lem-roots-of-x-q-minus-x-form-a-field` **L3** — used at step(s) 1.2
  - restatement on disk: The formal derivative of $\sum a_it^i$ is $\sum ia_it^{i-1}$ ([[def-formal-derivative-of-a-polynomial]]).
- `cor-discriminant-as-a-resultant-with-the-derivative` **L3** — used at step(s) 1.1
  - restatement on disk: The formal derivative of $f=\sum_ia_ix^i$ is $f'=\sum_{i\ge1}ia_ix^{i-1}$ ([[def-formal-derivative-of-a-polynomial]]).
- `thm-newtons-identities` **L3** — used at step(s) 1.1, 3.1
  - restatement on disk: The formal derivative of a polynomial $\sum_ra_rt^r$ is $\sum_{r\ge1}ra_rt^{r-1}$ ([[def-formal-derivative-of-a-polynomial]]).

#### target: `thm-integers-modulo-n-basic-algebra`  (theorem, 3 citations)

- `fs-tensor-products-of-nonzero-cyclic-groups-are-always-nonzero` **L3** — used at step(s) 1.1, 1.2, 2.1, 3.1
  - restatement on disk: Modular addition and multiplication give $\mathbb Z/q$ its usual quotient-ring operations ([[thm-integers-modulo-n-basic-algebra]]). For positive $q$, its classes have the unique representatives $0,\ldots,q-1$, so $|\mathbb Z/q|=q$; in particular, $\mathbb Z/1$ is zero while $\mathbb Z/2$ and $\mathbb Z/3$ are nonzero ([[thm-standard-representatives-modulo-n]]).
- `fs-a-zero-elementary-tensor-has-a-zero-factor` **L2** — used at step(s) 1.1, 2.1, 3.1
  - restatement on disk: Modular arithmetic gives $2\overline1=\overline0$ in $\mathbb Z/2$ ([[thm-integers-modulo-n-basic-algebra]]), while the unique representatives $0,1$ are distinct classes ([[thm-standard-representatives-modulo-n]]).
- `fs-tensoring-preserves-injections` **L2** — used at step(s) 1.2, 2.1
  - restatement on disk: In $\mathbb Z/2$, modular multiplication by $2$ is zero ([[thm-integers-modulo-n-basic-algebra]]), while the unique representatives $0,1$ are distinct classes ([[thm-standard-representatives-modulo-n]]).

#### target: `def-coordinate-column-and-matrix-of-a-linear-map`  (definition, 3 citations)

- `thm-minimal-polynomial-is-matrix-representation-and-similarity-invariant` **L4** — used at step(s) 1.1, 2.1
  - restatement on disk: The matrix of a linear map has as its columns the coordinate columns of the images of the domain basis vectors ([[def-coordinate-column-and-matrix-of-a-linear-map]]).
- `thm-qr-factorisation-over-r-or-c` **L3** — used at step(s) 2.1
  - restatement on disk: Matrix columns are the coordinate columns of the represented map on the standard basis ([[def-coordinate-column-and-matrix-of-a-linear-map]]).
- `thm-matrix-of-the-adjoint-is-the-conjugate-transpose` **L3** — used at step(s) 1.1
  - restatement on disk: Matrix columns record the coordinates of images of basis vectors ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

#### target: `cor-every-spanning-set-contains-a-basis`  (corollary, 3 citations)

- `cor-intermediate-field-degrees-divide` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: Every spanning set contains a basis ([[cor-every-spanning-set-contains-a-basis]]).
- `prop-degree-bound-for-composita` **L3** — used at step(s) 5.1
  - restatement on disk: Every spanning set contains a basis ([[cor-every-spanning-set-contains-a-basis]]).
- `thm-finite-fields-have-prime-power-order` **L4** — used at step(s) 1.2
  - restatement on disk: Every spanning set contains a basis ([[cor-every-spanning-set-contains-a-basis]]).

#### target: `def-factorial-and-falling-factorial`  (definition, 2 citations)

- `cor-power-sums-generate-when-factorial-is-invertible` **L3** — used at step(s) 1.1
  - restatement on disk: The factorial satisfies $n!=1\cdot2\cdots n$, with $0!=1$ ([[def-factorial-and-falling-factorial]]).
- `lem-groups-of-order-pq-have-a-normal-q-subgroup` **L4** — used at step(s) 1.2
  - restatement on disk: A set of $p$ elements has $p!$ bijections, where $p!=1\cdot2\cdots p$ ([[thm-number-of-bijections-of-a-finite-set]], [[def-factorial-and-falling-factorial]]).

#### target: `def-prime`  (definition, 2 citations)

- `thm-characteristic-of-a-field-is-zero-or-prime` **L2** — used at step(s) 2.1
  - restatement on disk: A natural number greater than $1$ is prime exactly when it has no factorization into two natural numbers strictly between $1$ and itself ([[def-prime]]).
- `lem-prime-divides-intermediate-binomial-coefficients` **L3** — used at step(s) 2.1
  - restatement on disk: A prime has no positive divisor strictly between $1$ and itself ([[def-prime]]).

#### target: `def-congruence-modulo-an-integer`  (definition, 2 citations)

- `lem-primitive-root-lift-to-prime-square` **L5** — used at step(s) 1.2, 2.2
  - restatement on disk: Congruence modulo $p^2$ means divisibility of the difference by $p^2$ ([[def-congruence-modulo-an-integer]]).
- `lem-prime-power-binomial-congruence` **L4** — used at step(s) 3.1
  - restatement on disk: Congruence modulo an integer is divisibility of the difference ([[def-congruence-modulo-an-integer]]).

#### target: `thm-operator-determinant-is-multiplicative`  (theorem, 2 citations)

- `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus` **L4** — used at step(s) 1.2, 2.1
  - restatement on disk: For $\dim V\ge1$ the operator determinant is independent of the ordered basis, in dimension zero it is the separately defined value $1$, and $\det(S\circ T)=\det(S)\det(T)$ ([[thm-operator-determinant-is-basis-independent]], [[thm-operator-determinant-is-multiplicative]]).
- `thm-finite-dimensional-isometry-characterisations` **L4** — used at step(s) 1.5
  - restatement on disk: Operator determinants are multiplicative, and a finite-dimensional endomorphism is invertible exactly when its determinant is nonzero ([[thm-operator-determinant-is-multiplicative]], [[thm-operator-invertible-iff-determinant-nonzero]]).

#### target: `def-external-direct-product-of-groups`  (definition, 2 citations)

- `prop-semidirect-product-is-direct-iff-action-is-trivial` **L2** — used at step(s) 1.1
  - restatement on disk: The external direct product has coordinatewise multiplication ([[def-external-direct-product-of-groups]]).
- `lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime` **L1** — used at step(s) 1.1
  - restatement on disk: The external direct product uses componentwise multiplication ([[def-external-direct-product-of-groups]]) and is a group ([[thm-external-direct-product-is-a-group]]).

#### target: `def-finite-simple-graph`  (definition, 2 citations)

- `thm-graph-removal-lemma` **L3** — used at step(s) 3.1
  - restatement on disk: A finite simple graph has no loops or multiple edges, so deleting an edge changes one unordered vertex pair ([[def-finite-simple-graph]]).
- `thm-counting-lemma-for-a-fixed-graph` **L3** — used at step(s) 1.1, 5.1
  - restatement on disk: A finite simple graph has finitely many vertices, no loops, and unordered edges between distinct vertices ([[def-finite-simple-graph]]).

#### target: `def-commutative-ring`  (definition, 2 citations)

- `thm-binomial-theorem-over-a-commutative-ring` **L1** — used at step(s) 2.1
  - restatement on disk: Multiplication in a commutative ring is commutative and distributes over addition ([[def-commutative-ring]]).
- `thm-commutative-ring-module-structure-on-a-tensor-product` **L2** — used at step(s) 1.1
  - restatement on disk: In a commutative ring, $rs=sr$ for all $r,s\in R$ ([[def-commutative-ring]]).

#### target: `lem-x-squared-plus-one-is-irreducible-over-the-reals`  (lemma, 2 citations)

- `ex-real-rotation-changes-diagonalisability-after-complex-scalar-extension` **L2** — used at step(s) 1.1
  - restatement on disk: The polynomial $x^2+1$ is irreducible over $\mathbb R$ ([[lem-x-squared-plus-one-is-irreducible-over-the-reals]]).
- `ex-primary-decomposition-over-q-with-an-irreducible-quadratic` **L3** — used at step(s) 1.1
  - restatement on disk: The polynomial $x^2+1$ is irreducible over $\mathbb R$, hence also over its subfield $\mathbb Q$ ([[lem-x-squared-plus-one-is-irreducible-over-the-reals]]).

#### target: `def-left-right-and-two-sided-ideal`  (definition, 2 citations)

- `thm-flatness-criteria-by-injections-and-ideals` **L5** — used at step(s) 1.1, 1.2
  - restatement on disk: In a commutative ring, every submodule of the regular module $R$ is an ideal ([[def-left-right-and-two-sided-ideal]]).
- `ex-the-galois-connection-between-ideals-and-varieties` **F4** — used at step(s) 2.1
  - restatement on disk: In a commutative ring, an ideal is an additive subgroup closed under multiplication by arbitrary ring elements ([[def-left-right-and-two-sided-ideal]]).

#### target: `def-standard-topologies`  (definition, 1 citation)

- `thm-the-discrete-and-indiscrete-topologies-form-an-adjoint-triple-over-set` **F1** — used at step(s) 1.1, 1.2
  - restatement on disk: The discrete topology on a set is its power set, and the indiscrete topology is $\{\varnothing,X\}$ ([[def-standard-topologies]]).

#### target: `def-ring-homomorphism`  (definition, 1 citation)

- `lem-coextension-of-scalars-carries-a-module-structure` **F1** — used at step(s) 1.2, 1.3
  - restatement on disk: A ring homomorphism preserves addition, multiplication, zero, and one ([[def-ring-homomorphism]]).

#### target: `prop-formal-derivative-algebra`  (proposition, 1 citation)

- `lem-derivative-of-det-i-minus-xa` **L5** — used at step(s) 1.1
  - restatement on disk: Formal differentiation is linear and satisfies the product rule ([[prop-formal-derivative-algebra]]).

#### target: `def-comma-slice-and-coslice-categories`  (definition, 1 citation)

- `thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object` **F1** — used at step(s) 1.2, 2.1, 2.2, 3.1
  - restatement on disk: The comma category $(c\downarrow G)$ has objects $(d,f:c\to Gd)$, and a morphism from $(d,f)$ to $(d',f')$ is a morphism $h:d\to d'$ with $G(h)\circ f=f'$ ([[def-comma-slice-and-coslice-categories]]).

#### target: `def-category`  (definition, 1 citation)

- `ex-the-free-category-on-a-quiver` **F1** — used at step(s) 1.1, 2.1, 2.2
  - restatement on disk: A category has associative composition and a two-sided identity at each object; its object class may be empty ([[def-category]]).

#### target: `lem-cyclic-subgroup-is-the-set-of-powers`  (lemma, 1 citation)

- `thm-automorphisms-of-a-finite-cyclic-group` **L6** — used at step(s) 1.1
  - restatement on disk: The cyclic subgroup generated by $g$ is exactly the set of integer powers of $g$ ([[lem-cyclic-subgroup-is-the-set-of-powers]]).

#### target: `thm-subgroups-of-cyclic-groups-are-cyclic`  (theorem, 1 citation)

- `fs-every-short-exact-sequence-of-groups-splits` **L2** — used at step(s) 1.2
  - restatement on disk: Every subgroup of a cyclic group is cyclic ([[thm-subgroups-of-cyclic-groups-are-cyclic]]).

#### target: `def-hom-functors-and-hom-bifunctor`  (definition, 1 citation)

- `thm-the-adjunction-hom-set-bijection-under-local-smallness` **F2** — used at step(s) 1.2, 2.1, 2.2
  - restatement on disk: In a locally small category the two-variable hom assignment is a Set-valued bifunctor, contravariant in its first variable and covariant in its second ([[def-hom-functors-and-hom-bifunctor]]).

#### target: `def-full-faithful-and-essentially-surjective-functor`  (definition, 1 citation)

- `thm-fullness-and-faithfulness-of-a-right-adjoint-read-off-the-counit` **F1** — used at step(s) 1.1, 1.2, 1.3, 2.1
  - restatement on disk: A functor is faithful when every induced hom-set map is injective, full when every such map is surjective, and fully faithful when every such map is bijective ([[def-full-faithful-and-essentially-surjective-functor]]).

#### target: `cor-splitting-fields-are-unique-up-to-base-isomorphism`  (corollary, 1 citation)

- `thm-uniqueness-of-finite-fields` **L3** — used at step(s) 3.1
  - restatement on disk: Two splitting fields of the same nonzero polynomial over a base field are isomorphic by an isomorphism fixing the base ([[cor-splitting-fields-are-unique-up-to-base-isomorphism]]).

#### target: `prop-order-of-finite-direct-product`  (proposition, 1 citation)

- `thm-unit-group-modulo-two-power-structure` **L3** — used at step(s) 3.1
  - restatement on disk: A direct product of finite groups has the product of their orders ([[prop-order-of-finite-direct-product]]).

#### target: `thm-matrix-of-a-composite-is-the-product`  (theorem, 1 citation)

- `thm-minimal-polynomial-is-matrix-representation-and-similarity-invariant` **L1** — used at step(s) 1.1
  - restatement on disk: The matrix of a composite is the product of the matrices in compatible ordered bases ([[thm-matrix-of-a-composite-is-the-product]]).

#### target: `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent`  (theorem, 1 citation)

- `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree` **L3** — used at step(s) 2.1
  - restatement on disk: Eigenvectors belonging to distinct eigenvalues are linearly independent ([[thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent]]).

#### target: `thm-complementation-preserves-hereditary-classes-and-bases`  (theorem, 1 citation)

- `prop-erdos-hajnal-property-is-complement-invariant` **L3** — used at step(s) 1.1
  - restatement on disk: If $\mathcal C$ is hereditary, then $\overline{\mathcal C}$ is hereditary ([[thm-complementation-preserves-hereditary-classes-and-bases]]).

#### target: `def-hereditary-graph-class`  (definition, 1 citation)

- `fs-every-hereditary-class-is-erdos-hajnal` **L2** — used at step(s) 1.1
  - restatement on disk: A graph class is hereditary when it is closed under isomorphism and induced subgraphs ([[def-hereditary-graph-class]]).

#### target: `thm-universal-arrows-are-initial-or-terminal-in-comma-categories`  (theorem, 1 citation)

- `thm-unit-components-are-initial-in-their-comma-categories` **F2** — used at step(s) 2.1, 3.1
  - restatement on disk: A universal arrow from an object to a functor is initial in the associated comma category, and a universal arrow from a functor to an object is terminal in the dual comma category ([[thm-universal-arrows-are-initial-or-terminal-in-comma-categories]]).

#### target: `lem-vertical-composition-of-natural-transformations-is-natural`  (lemma, 1 citation)

- `thm-mates-under-a-pair-of-adjunctions` **L3** — used at step(s) 1.2
  - restatement on disk: The vertical composite of natural transformations satisfies naturality ([[lem-vertical-composition-of-natural-transformations-is-natural]]).

#### target: `prop-topological-spaces-and-continuous-maps-form-category-top`  (proposition, 1 citation)

- `thm-the-discrete-and-indiscrete-topologies-form-an-adjoint-triple-over-set` **F4** — used at step(s) 1.1, 1.2
  - restatement on disk: Topological spaces and continuous maps form the locally small category $\mathbf{Top}$ ([[prop-topological-spaces-and-continuous-maps-form-category-top]]).

#### target: `lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice`  (lemma, 1 citation)

- `thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces` **F3** — used at step(s) 1.1, 3.1
  - restatement on disk: Under dependent choice, every compact Hausdorff space embeds in a cube $[0,1]^J$ for some set $J$ ([[lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice]]).

#### target: `cor-rational-function-field-as-a-fraction-field`  (corollary, 1 citation)

- `prop-reciprocity-for-biinfinite-linear-recurrences` **L2** — used at step(s) 3.1
  - restatement on disk: The fraction field of $K[x]$ is the rational function field $K(x)=\{P/Q: P,Q\in K[x],\ Q\ne0\}$ ([[cor-rational-function-field-as-a-fraction-field]]).

### Report format

Write your findings to stdout as your final message. Per finding:

- citing item id, fact label, cited target id
- **what the restatement claims** vs **what the Statement says** (quote both)
- which numbered step depends on the difference, or "no step depends on it"
- your severity: `fatal` (a step is unlicensed / a false claim is asserted) or
  `nonfatal` (a competent reader closes it in 30 seconds)

Close with: targets opened, edges checked, findings by severity. If you checked
an edge and it is clean, it is clean — do not pad the report.
