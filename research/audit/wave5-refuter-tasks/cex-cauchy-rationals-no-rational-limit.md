# Adversarial proof reading — `cex-cauchy-rationals-no-rational-limit`

## The item under review, in full

`items/cex-cauchy-rationals-no-rational-limit.md`

```markdown
---
id: cex-cauchy-rationals-no-rational-limit
kind: counterexample
title: "The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [fs-rationals-complete, fs-sqrt2-rational, def-rationals, lem-rat-embeds-dense, def-real-limit, def-sequence, thm-of-square-roots, thm-cauchy-criterion-via-lub, lem-convergent-implies-cauchy, lem-limit-unique, lem-geometric-sequence-null, thm-squeeze, thm-algebra-of-limits, lem-power-monotone, lem-power-laws, def-integer-power, lem-of-inverse-positive, prop-of-reciprocal-order, lem-of-abs-value, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "Square root of 2 (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
    - title: "T. Tao, Analysis I, 3rd ed., §5.1 and §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
---

## Statement refuted

**Refuted claim:** every Cauchy sequence of rationals converges to a rational;
equivalently, $\mathbb{Q}$ is complete ([[fs-rationals-complete]],
[[def-rationals]]).

The witness is the sequence of **truncated decimal approximations of $\sqrt 2$**,
$s_0 = 1$, $s_1 = 1.4$, $s_2 = 1.41$, $s_3 = 1.414$, and so on: $s_n = k_n/10^n$
where $k_n$ is the largest natural number with $k_n^2 \le 2 \cdot 10^{2n}$. That
this sequence is Cauchy in $\mathbb{Q}$ and has no rational limit is proved in
full in [[fs-rationals-complete]] and is not repeated here.

What this item adds is the view from $\mathbb{R}$, which is what makes the
witness informative rather than merely negative: **the same sequence converges in
$\mathbb{R}$, and its limit is $\sqrt 2$.** So the defect is not in the sequence
but in $\mathbb{Q}$, and the contrast is exactly
[[thm-cauchy-criterion-via-lub]], which says that a Cauchy sequence of reals
never behaves this way.

## Facts & Assumptions

**Given:** For $n \in \mathbb{N}$ the rational $s_n = k_n/10^n$, where $k_n$ is the largest natural with $k_n^2 \le 2 \cdot 10^{2n}$, together with the properties established for it in [[fs-rationals-complete]]; and the real $\sqrt 2$ ([[thm-of-square-roots]]). Rationals are identified with their images in $\mathbb{R}$ under the embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), so $(s_n)$ is also a sequence of reals ([[def-sequence]]).

[L1] The construction and its properties: $s_n \ge 0$, $s_n^2 \le 2 < (s_n + 10^{-n})^2$, and $(s_n)$ is a Cauchy sequence of rationals with no rational limit ([[fs-rationals-complete]]).

[L2] The embedding $q \mapsto \hat q$ is an injective, order-preserving field homomorphism of $\mathbb{Q}$ into $\mathbb{R}$, so every identity and inequality between rationals holds between their images and conversely ([[lem-rat-embeds-dense]], [[def-rationals]]).

[L3] Square roots: $\sqrt 2 \ge 0$ is the unique nonnegative real with $(\sqrt 2)^2 = 2$ ([[thm-of-square-roots]], [[def-integer-power]]).

[L4] Powers and order: for $a, b \ge 0$, $a \le b$ exactly when $a^2 \le b^2$, and $a < b$ exactly when $a^2 < b^2$ ([[lem-power-monotone]]); and $(1/t)^n = 1/t^n = t^{-n}$ for $t \ne 0$ ([[lem-power-laws]]).

[L5] Order: $10 > 1 > 0$, so $0 < 1/10 < 1$ ([[prop-of-reciprocal-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]); and $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]).

[L6] For $|r| < 1$ the sequence $(r^n)$ converges to $0$ ([[lem-geometric-sequence-null]]).

[L7] Squeeze theorem ([[thm-squeeze]]) and the algebra of limits ([[thm-algebra-of-limits]]); a constant sequence converges to its value ([[def-sequence]], [[def-real-limit]]).

[L8] Every convergent sequence of reals is Cauchy ([[lem-convergent-implies-cauchy]]); every Cauchy sequence of reals converges ([[thm-cauchy-criterion-via-lub]]); limits are unique ([[lem-limit-unique]]).

[L9] No rational squares to $2$ ([[fs-sqrt2-rational]]).

## Counterexample

**Proof technique:** direct.

1.1 The inequalities of [L1] hold verbatim in $\mathbb{R}$, since the embedding preserves the order and the field operations. [given, L1, L2]

1.2 $0 < 1/10 < 1$ and $(1/10)^n = 10^{-n}$ for every $n$. [given, L4, L5]

2.1 From $s_n \ge 0$, $\sqrt 2 \ge 0$ and $s_n^2 \le 2 = (\sqrt 2)^2$ we get $s_n \le \sqrt 2$; from $(\sqrt 2)^2 = 2 < (s_n + 10^{-n})^2$ with both bases $\ge 0$ we get $\sqrt 2 < s_n + 10^{-n}$. Hence $0 \le \sqrt 2 - s_n < 10^{-n}$ for every $n$. [step 1.1, L3, L4]

2.2 The sequence $(10^{-n}) = ((1/10)^n)$ converges to $0$. [step 1.2, L6]

3.1 The constant sequence $0$ and the sequence $(10^{-n})$ both converge to $0$, and $0 \le \sqrt 2 - s_n \le 10^{-n}$ at every index, so the squeeze theorem gives $\sqrt 2 - s_n \to 0$; by the algebra of limits $s_n = \sqrt 2 - (\sqrt 2 - s_n) \to \sqrt 2$. [step 2.1, step 2.2, L7]

4.1 In particular $(s_n)$ converges in $\mathbb{R}$ and is therefore Cauchy as a sequence of reals; this is the behaviour [[thm-cauchy-criterion-via-lub]] guarantees for every Cauchy sequence of reals, and it is what fails in $\mathbb{Q}$. [step 3.1, L8]

4.2 Suppose $(s_n)$ converged to a rational $q$. Then in $\mathbb{R}$ it converges to $\hat q$, so $\hat q = \sqrt 2$ by uniqueness of limits, hence $\hat q^{\,2} = 2$; the embedding is injective and preserves squaring, so $q^2 = 2$ in $\mathbb{Q}$. [step 3.1, L2, L3, L8]

5.1 No rational squares to $2$, so no such $q$ exists: $(s_n)$ is a Cauchy sequence of rationals with no rational limit, and the claim that $\mathbb{Q}$ is complete is refuted. [step 4.2, L1, L9] ∎

## Remarks

- **The limit exists; it is merely not rational.** That is the entire content of
  the counterexample and the reason the construction of $\mathbb{R}$ is worth
  doing. The sequence is Cauchy in $\mathbb{Q}$, so $\mathbb{Q}$ "should" have a
  limit for it, and the point at which it converges lies outside $\mathbb{Q}$.

- **Decimal truncation is a convenience, not the mechanism.** Any sequence of
  rationals converging to any irrational does the same job, for instance the
  Babylonian iterates of [[ex-babylonian-sqrt-two]] started at $2$, which are all
  rational and converge to $\sqrt 2$. Truncated decimals are chosen because the
  two-sided estimate $s_n \le \sqrt 2 < s_n + 10^{-n}$ is immediate from the
  definition of $k_n$ and turns into convergence with one application of the
  squeeze theorem.

- **Note which completeness is which.** [[fs-rationals-complete]] refutes Cauchy
  completeness of $\mathbb{Q}$. $\mathbb{Q}$ also fails the least-upper-bound
  property, on the same underlying fact that $\sqrt 2 \notin \mathbb{Q}$, and the
  two failures are not the same statement: Cauchy completeness and Dedekind
  completeness differ in general, and coincide only in the presence of the
  Archimedean property. [[rem-completeness-routes]] records where this library
  stands on that.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `fs-rationals-complete` — false-statement — FALSE: the rationals are complete

(statement provenance: ai-altered)

### Statement

**False claim:** every Cauchy sequence of rationals converges to a rational
(where $(a_n) \to q$ means $(a_n - q)$ is null).

This is precisely the defect the construction of $\mathbb{R}$ repairs.

### `fs-sqrt2-rational` — false-statement — FALSE: some rational number squares to 2

(statement provenance: literature-derived)

### Statement

**False claim:** there exists $x \in \mathbb{Q}$ with $x^2 = 2$.

### `def-rationals` — definition — The rationals as equivalence classes of pairs of integers

(statement provenance: literature-derived)

### Definition

On the set of pairs $(a,b)$ with $a, b \in \mathbb{Z}$ and $b \ne 0$, define

$$(a,b) \sim (c,d) \iff ad = cb \quad \text{in } \mathbb{Z}.$$

This is an equivalence relation ([[lem-rat-equivalence]]). The **rationals** are
the quotient $\mathbb{Q}$, and $[(a,b)]$ is written $a/b$.

### `lem-rat-embeds-dense` — lemma — The rationals embed densely in the reals

(statement provenance: ai-altered)

### Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

### `def-real-limit` — definition — Limits and Cauchy sequences of reals

(statement provenance: ai-altered)

### Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

### `def-sequence` — definition — Sequences of reals: bounded, eventually, frequently, tails, subsequences

(statement provenance: ai-altered)

### Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and
$\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],
[[def-nat-order]]).

A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$. We write
$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or
$(x_k)_{k \in \mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is
the subset $\{\, x_k : k \in \mathbb{N} \,\} \subseteq \mathbb{R}$.

Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices.

- $(x_k)$ is **bounded** if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for
  every $k \in \mathbb{N}$; it is **unbounded** otherwise.
- $P$ holds **eventually** if there is $K \in \mathbb{N}$ such that $P(k)$ holds
  for every $k \ge K$.
- $P$ holds **frequently** if for every $K \in \mathbb{N}$ there is some
  $k \ge K$ for which $P(k)$ holds.
- For $K \in \mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence
  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \in \mathbb{N}$; it is
  again a sequence of reals.
- A function $n : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** if
  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$
  along $n$ is the composite $x \circ n$, written $(x_{n_k})_{k \in \mathbb{N}}$;
  it is again a sequence of reals.

**Convergence and Cauchyness are not defined here.** They are already fixed, for
sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to
$x \in \mathbb{R}$ when for every rational $\varepsilon > 0$ there is
$K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and $(x_k)$
is *Cauchy* when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$
with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$. This page builds the
toolkit for those two notions and does not restate them. A sequence
**converges** if it converges to some real, and **diverges** if it does not.

### `thm-of-square-roots` — theorem — Square roots exist: a unique $\\sqrt{a} \\ge 0$ with $(\\sqrt{a})^2 = a$; the positives are $\\{x^2 : x \\neq 0\\}$

(statement provenance: ai-altered)

### Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every
$a \in F$ with $a \ge 0$ has a **unique** $s \in F$ with $s \ge 0$ and $s^2 = a$;
we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the
nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$.

### `thm-cauchy-criterion-via-lub` — theorem — The Cauchy criterion from the least-upper-bound property: in a complete ordered field every Cauchy sequence converges

(statement provenance: literature-derived)

### Statement

Every Cauchy sequence of reals converges to a real ([[def-real-limit]]).

More carefully, this is a statement about the *axioms*: in a complete ordered
field, that is in an ordered field with the least-upper-bound property
([[def-complete-ordered-field]]), every Cauchy sequence converges. The proof
below uses nothing about $\mathbb{R}$ except that property, through
[[thm-bolzano-weierstrass]].

**This library already knows the conclusion by a different route.**
It is proved on the Cauchy-construction page, where
$\mathbb{R}$ is built out of Cauchy sequences of rationals and completeness is
read off the construction. That proof is about a particular construction; this
one is about the axioms, and it is what tells us the statement holds in *any*
complete ordered field, however it was obtained.

### `lem-convergent-implies-cauchy` — lemma — Every convergent sequence is Cauchy

(statement provenance: ai-altered)

### Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is Cauchy
([[def-real-limit]]).

### `lem-limit-unique` — lemma — A sequence has at most one limit

(statement provenance: literature-derived)

### Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \in
\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$
([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,
and when a limit exists it may be denoted $\lim_{k} x_k$.

### `lem-geometric-sequence-null` — lemma — For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

(statement provenance: ai-altered)

### Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]).

1. If $|r| < 1$ then $(r^k)$ is **null**, that is $r^k \to 0$
   ([[def-real-limit]]).
2. If $|r| > 1$ then $(|r|^k)$ **diverges to $+\infty$**
   ([[def-divergence-to-infinity]]).

Claim 2 is stated for $|r|^k$ and not for $r^k$ on purpose: for $r < -1$ the
terms $r^k$ alternate in sign and are unbounded, so they neither converge nor
diverge to $+\infty$; what is true of them is the statement about their absolute
values.

Both claims come from Bernoulli's inequality ([[lem-bernoulli-inequality]]) and
the Archimedean property. Nothing here needs the least-upper-bound property
except through [[thm-of-archimedean]] and [[cor-archimedean-reciprocal]].

### `thm-squeeze` — theorem — The squeeze theorem

(statement provenance: ai-altered)

### Statement

Let $(a_k)$, $(x_k)$ and $(b_k)$ be sequences of reals ([[def-sequence]]) with

$$a_k \le x_k \le b_k \quad \text{eventually},$$

and suppose $(a_k)$ and $(b_k)$ both converge to the same real $L$
([[def-real-limit]]). Then $(x_k)$ converges to $L$.

The middle sequence is not assumed to converge; that is the point of the
theorem, and it is why the squeeze is a tool for *establishing* convergence
rather than for computing a limit already known to exist.

### `thm-algebra-of-limits` — theorem — Algebra of limits: sums, scalar multiples, products and quotients

(statement provenance: ai-altered)

### Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) converging to
$x$ and $y$ respectively ([[def-real-limit]]), and let $c \in \mathbb{R}$. Then

$$x_k + y_k \to x + y, \qquad c\,x_k \to c\,x, \qquad x_k - y_k \to x - y, \qquad x_k y_k \to x y,$$

and if in addition $y \ne 0$ and $y_k \ne 0$ for every $k \in \mathbb{N}$, then

$$\frac{1}{y_k} \to \frac{1}{y} \qquad \text{and} \qquad \frac{x_k}{y_k} \to \frac{x}{y}.$$

The quotient case rests on an eventual lower bound for $|y_k|$, proved below
rather than assumed: $|y_k| > |y|/2$ for all sufficiently large $k$.

### `lem-power-monotone` — lemma — Monotonicity of $x \\mapsto x^n$ and of $n \\mapsto a^n$

(statement provenance: ai-altered)

### Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]].

1. **Signs.** If $a \ge 0$ then $a^n \ge 0$, and if $a > 0$ then $a^n > 0$.
2. **Strict monotonicity in the base.** If $0 \le a < b$ and $n \ge 1$ then $a^n < b^n$. Consequently, for $a, b \ge 0$ and $n \ge 1$: $a < b \iff a^n < b^n$ and $a \le b \iff a^n \le b^n$, and $x \mapsto x^n$ is injective on $\{x \in \mathbb{R} : x \ge 0\}$.
3. **Comparison with the base.** If $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; if $a > 1$ and $n \ge 1$ then $a^n \ge a > 1$; and if $0 \le a \le 1$ then $a^n \le 1$.
4. **Monotonicity in the exponent.** If $a > 1$ then $a^m < a^n$ whenever $m < n$ in $\mathbb{N}$; if $a = 1$ then $a^n = 1$ for all $n$; and if $0 < a < 1$ then $a^m > a^n$ whenever $m < n$.

### `lem-power-laws` — lemma — Laws of integer exponents

(statement provenance: ai-altered)

### Statement

Let $a, b$ be elements of a field ([[def-field]]) and let integer powers be as in
[[def-integer-power]].

1. For all $m, n \in \mathbb{N}$: $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$.
2. If $a \ne 0$ then $a^n \ne 0$ for every $n \in \mathbb{N}$, and $a^{-m} = (a^m)^{-1}$ for every $m \in \mathbb{Z}$ ([[def-int-operations]]).
3. If $a \ne 0$ and $b \ne 0$ then all three identities of claim 1 hold for all $m, n \in \mathbb{Z}$.

### `def-integer-power` — definition — Integer powers $a^m$

(statement provenance: ai-altered)

### Definition

Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
([[def-ordered-field]], [[def-field]]).

**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
([[lem-of-inverse-unique]]).

**Integer exponents.** Every integer $m$ ([[def-integers]]) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ ([[lem-nat-embeds-int]],
[[def-int-operations]]). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

### `lem-of-inverse-positive` — lemma — Inverses of positives are positive, and reciprocation reverses order

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

### `prop-of-reciprocal-order` — proposition — Reciprocals and order: $1/r$ against $1$

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field and let $r \in F$ with $r > 0$. Then:

$$0 < r < 1 \iff \tfrac{1}{r} > 1, \qquad r > 1 \iff 0 < \tfrac{1}{r} < 1, \qquad r = 1 \iff \tfrac{1}{r} = 1.$$

Here $\tfrac{1}{r}$ denotes the multiplicative inverse $r^{-1}$.

### `lem-of-abs-value` — lemma — Basic properties of the absolute value

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

### `def-complete-ordered-field` — definition — Complete ordered field (least-upper-bound property)

(statement provenance: literature-derived)

### Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

### `def-ordered-field` — definition — Ordered field

(statement provenance: ai-altered)

### Definition

An **ordered field** is a field $F$ ([[def-field]]) together with a subset
$P \subseteq F$, the set of **positive** elements (the *positive cone*),
satisfying:

- **(O1) Trichotomy.** For each $x \in F$, exactly one of the following holds:
  $x \in P$, or $x = 0$, or $-x \in P$.
- **(O2) Closure.** If $x, y \in P$ then $x + y \in P$ and $x \cdot y \in P$.

We write $x > 0$ for $x \in P$ (read "$x$ is positive"), and define the order by

$$a < b \;:\Longleftrightarrow\; b - a \in P, \qquad a \le b \;:\Longleftrightarrow\; a < b \text{ or } a = b.$$

Thus $a > b$ means $b < a$, and $a \ge b$ means $b \le a$. An element $x$ with
$-x \in P$ (equivalently $x < 0$) is called **negative**.

## What to return

Read `cex-cauchy-rationals-no-rational-limit` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
