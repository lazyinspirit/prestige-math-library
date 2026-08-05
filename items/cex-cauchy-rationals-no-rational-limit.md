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
