# Adversarial proof reading — `fs-consecutive-differences-null-implies-cauchy`

## The item under review, in full

`items/fs-consecutive-differences-null-implies-cauchy.md`

```markdown
---
id: fs-consecutive-differences-null-implies-cauchy
kind: false-statement
title: "FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-limit, def-sequence, def-contractive-sequence, thm-contractive-implies-cauchy, thm-of-square-roots, lem-power-difference-factorisation, lem-power-monotone, lem-power-laws, def-integer-power, lem-of-inverse-positive, cor-archimedean-reciprocal, thm-of-archimedean, lem-cauchy-sequence-bounded, lem-of-abs-value, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-sqrt-k-differences-null-not-cauchy, cex-strictly-decreasing-gaps-no-limit]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis, 4th ed., §3.5"
      url: "https://en.wikipedia.org/wiki/Fixed-point_iteration"
    - title: "J. Lebl, Basic Analysis I, §2.4"
      url: "https://www.jirka.org/ra/"
    - title: "Sequence of Square Roots of Natural Numbers is not Cauchy (ProofWiki)"
      url: "https://proofwiki.org/wiki/Sequence_of_Square_Roots_of_Natural_Numbers_is_not_Cauchy"
---

## Statement

**False claim:** if $(x_k)$ is a sequence of reals whose consecutive differences
tend to $0$, that is $|x_{k+1} - x_k| \to 0$ ([[def-sequence]],
[[def-real-limit]]), then $(x_k)$ is Cauchy.

The claim is the tempting misreading of the Cauchy condition. Being Cauchy
requires $|x_m - x_k|$ to be small for **all** large $m$ and $k$; the hypothesis
above controls only the case $m = k+1$, and finitely many small steps still
accumulate without bound.

The witness is $x_k = \sqrt k$, refuted below and recorded separately as
the named counterexample of the companion page. Its consecutive differences are
$\sqrt{k+1} - \sqrt k = 1/(\sqrt{k+1} + \sqrt k)$, which tend to $0$, while the
sequence itself is unbounded and so cannot be Cauchy
([[lem-cauchy-sequence-bounded]]).

**What is true in this direction** is [[thm-contractive-implies-cauchy]]: if the
differences shrink *geometrically*, with a single ratio $c < 1$ working at every
index ([[def-contractive-sequence]]), then the sequence is Cauchy. The gap
between the two hypotheses is exactly the uniform ratio.

## Facts & Assumptions

**Given:** The sequence $(x_k)$ of reals with $x_k := \sqrt{k}$, where $k$ denotes the canonical natural $k \cdot 1_{\mathbb{R}}$ and $\sqrt{\cdot}$ the nonnegative square root ([[def-sequence]]).

[L1] Square roots: every $a \ge 0$ has a unique $s \ge 0$ with $s^2 = a$, written $\sqrt a$ ([[thm-of-square-roots]], [[def-integer-power]]).

[L2] Powers and order: for $a, b \ge 0$ and $n \ge 1$, $a < b$ exactly when $a^n < b^n$, and $a \le b$ exactly when $a^n \le b^n$; and $a \ge 0$ gives $a^n \ge 0$ ([[lem-power-monotone]]).

[L3] Factorisation at $n = 2$: $b^2 - a^2 = (b-a)(b+a)$ ([[lem-power-difference-factorisation]]); and $(uv)^n = u^n v^n$, so $(1/t)^2 = 1/t^2$ for $t \ne 0$ ([[lem-power-laws]]).

[L4] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, $0 \cdot 1_{\mathbb{R}} = 0$, and $m \mapsto m \cdot 1_{\mathbb{R}}$ is strictly increasing ([[lem-of-naturals-positive]]).

[L5] Reciprocals: $a > 0$ gives $1/a > 0$, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L6] Archimedean property, in both forms: for every real $x$ there is a natural $n \ge 1$ with $x < n$, and for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

[L7] Absolute value: $|t| \ge 0$, $|t| \ge t$, and $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]).

[L8] Every Cauchy sequence of reals is bounded ([[lem-cauchy-sequence-bounded]]).

[L9] Convergence to $0$, boundedness, and the Cauchy condition; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

[L10] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L11] The refuted claim: a sequence of reals whose consecutive differences tend to $0$ is Cauchy.

## Refutation

**Proof technique:** direct.

1.1 Each $x_k = \sqrt k$ is defined and $\ge 0$, since the canonical natural $k$ satisfies $k \ge 0$; and $x_{k+1} > 0$ for every $k$, since $k+1 \ge 1$ gives $k + 1 > 0$ and hence $\sqrt{k+1} > 0$. [given, L1, L2, L4]

1.2 $(x_k)$ is not bounded. Let $M \in \mathbb{R}$ and put $M' := |M| \ge M$, so $M' \ge 0$. By [L6] fix a natural $n \ge 1$ with $(M')^2 < n$. Then $(x_n)^2 = n > (M')^2$ with $x_n \ge 0$ and $M' \ge 0$, so $x_n > M' \ge M$, and $|x_n| = x_n > M$. [given, L1, L2, L4, L6, L7]

2.1 For every $k$: $(\sqrt{k+1} - \sqrt k)(\sqrt{k+1} + \sqrt k) = (\sqrt{k+1})^2 - (\sqrt k)^2 = (k+1) - k = 1$, and $\sqrt{k+1} + \sqrt k \ge \sqrt{k+1} > 0$, so $\sqrt{k+1} - \sqrt k = 1/(\sqrt{k+1} + \sqrt k) > 0$. [step 1.1, L1, L3, L5]

2.2 A Cauchy sequence of reals is bounded, so an unbounded sequence is not Cauchy; by step 1.2 no real $M$ bounds $(|x_k|)$, so $(x_k)$ is not Cauchy. [step 1.2, L8, L9, L10]

3.1 Hence $|x_{k+1} - x_k| = \sqrt{k+1} - \sqrt{k} = 1/(\sqrt{k+1}+\sqrt k) \le 1/\sqrt{k+1}$, the last inequality because $0 < \sqrt{k+1} \le \sqrt{k+1} + \sqrt k$. [step 2.1, L5, L7]

4.1 Let $\varepsilon > 0$ be real. By [L6] fix a natural $n \ge 1$ with $1/n < \varepsilon^2$. For every $k \ge n$ we have $k + 1 > n > 0$, so $1/(k+1) < 1/n < \varepsilon^2$. [step 3.1, L4, L5, L6, choose]

5.1 Taking square roots in step 4.1: $\big(1/\sqrt{k+1}\big)^2 = 1/(k+1) < \varepsilon^2$ with both $1/\sqrt{k+1} \ge 0$ and $\varepsilon > 0$, so $1/\sqrt{k+1} < \varepsilon$, and therefore $|x_{k+1} - x_k| < \varepsilon$ for every $k \ge n$. [step 3.1, step 4.1, L2, L3, L5]

6.1 The real $\varepsilon > 0$ was arbitrary, so the consecutive differences of $(x_k)$ tend to $0$: the sequence satisfies the hypothesis of the claim. [step 5.1, L9, L11]

7.1 The sequence $x_k = \sqrt k$ therefore has consecutive differences tending to $0$ and is not Cauchy: the claim is false. [step 6.1, step 2.2, L11] ∎

## Remarks

- **The failure is not marginal.** The witness does not merely fail to be Cauchy;
  it is unbounded, and indeed $\sqrt k \to +\infty$. The consecutive differences
  are of size roughly $1/(2\sqrt k)$, so they are null, but their partial sums
  telescope to $\sqrt m - \sqrt k$, which is large when $m$ is much larger than
  $k$. Nothing about "small steps" constrains what many steps accumulate to.

- **The repair is a uniform ratio, not a faster rate.** It is tempting to think
  that a fast enough decay of the gaps would suffice, and in a sense that is
  true, since summability of the gaps implies Cauchy; but the hypothesis
  available in practice is the contractive one, a single $c < 1$ with
  $|x_{k+2} - x_{k+1}| \le c|x_{k+1} - x_k|$, and that is what
  [[thm-contractive-implies-cauchy]] consumes. Merely having each gap smaller
  than the last is not enough either, which is the separate witness
  [[cex-strictly-decreasing-gaps-no-limit]].

- **Both false statements on this page have the same shape.** A condition that
  looks like the Cauchy condition, but at only one pair of indices per step, is
  not the Cauchy condition. The other one is
  [[fs-convergent-subsequence-implies-bounded]], where a condition holding along
  one subsequence is mistaken for a condition on the sequence.

- The witness is recorded as the named counterexample
  [[cex-sqrt-k-differences-null-not-cauchy]], which adds the sharper statement
  that $\sqrt k$ diverges to $+\infty$.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

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

### `def-contractive-sequence` — definition — Contractive sequence: $|x_{k+2} - x_{k+1}| \\le c\\,|x_{k+1} - x_k|$ for a fixed $0 < c < 1$

(statement provenance: literature-derived)

### Definition

A sequence $(x_k)$ of reals ([[def-sequence]]) is **contractive** when there is a
real $c$ with

$$0 < c < 1 \qquad \text{and} \qquad |x_{k+2} - x_{k+1}| \;\le\; c\,|x_{k+1} - x_k| \quad \text{for every } k \in \mathbb{N},$$

the order and the absolute value being those of $\mathbb{R}$
([[def-real-order]], [[lem-of-abs-value]]). Such a $c$ is called a **contraction
constant** for $(x_k)$.

**The constant must not depend on $k$.** This is the whole content of the
definition and the only place it can go wrong. A sequence whose consecutive gaps
each shrink, so that

$$|x_{k+2} - x_{k+1}| < |x_{k+1} - x_k| \quad \text{for every } k,$$

is *not* contractive on that evidence: what is required is a single $c < 1$
working at every index simultaneously. The two conditions really are different:
there is a sequence satisfying the second that satisfies the first for no
$c < 1$ and does not converge, and it is the named counterexample of the
companion page, recalled in the remarks below.

**The constant is not unique.** If $c$ is a contraction constant then so is every
$c'$ with $c \le c' < 1$, since $c\,|x_{k+1} - x_k| \le c'\,|x_{k+1} - x_k|$ when
$|x_{k+1} - x_k| \ge 0$ ([[lem-of-abs-value]]). Statements about contractive
sequences therefore quantify over a *chosen* constant, and the error bound in
[[thm-contractive-implies-cauchy]] is sharper for a smaller $c$.

**Degenerate cases are included.** A constant sequence is contractive with every
$c \in (0,1)$, all the gaps being $0$. A sequence that is eventually constant is
contractive as soon as the inequality holds at the finitely many earlier indices.
Nothing in the definition forces the gaps to be positive.

### `thm-contractive-implies-cauchy` — theorem — Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

(statement provenance: ai-altered)

### Statement

Let $(x_k)$ be a contractive sequence of reals with contraction constant $c$,
so $0 < c < 1$ and $|x_{k+2} - x_{k+1}| \le c\,|x_{k+1} - x_k|$ for every
$k \in \mathbb{N}$ ([[def-contractive-sequence]]). Then:

1. **Geometric decay of the gaps.** For every $k \ge 1$,
   $$|x_{k+1} - x_k| \;\le\; c^{\,k-1}\,|x_2 - x_1| .$$
2. **Convergence.** $(x_k)$ is Cauchy ([[def-real-limit]]) and therefore
   converges to some $x \in \mathbb{R}$ ([[thm-cauchy-criterion-via-lub]]).
3. **Error bound.** For every $k \ge 1$,
   $$|x - x_k| \;\le\; \frac{c^{\,k-1}\,|x_2 - x_1|}{1 - c} .$$

**The restriction $k \ge 1$ in claim 3 is a hypothesis, not a convention.** The
displayed bound is false at $k = 0$, even though $c^{-1}$ is defined
([[def-integer-power]]). Take $c = 1/2$ and the sequence
$x_0 = 0$, $x_k = 1$ for all $k \ge 1$: it is contractive with that $c$, its
limit is $x = 1$, the right-hand side at $k = 0$ is
$c^{-1}\,|x_2 - x_1|/(1-c) = 2 \cdot 0 / (1/2) = 0$, and the left-hand side is
$|x - x_0| = 1$. The classical statement of this theorem is written for
sequences indexed from $1$, where the question does not arise; this library
indexes from $0$ ([[def-sequence]]), so the hypothesis is stated.

### `thm-of-square-roots` — theorem — Square roots exist: a unique $\\sqrt{a} \\ge 0$ with $(\\sqrt{a})^2 = a$; the positives are $\\{x^2 : x \\neq 0\\}$

(statement provenance: ai-altered)

### Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every
$a \in F$ with $a \ge 0$ has a **unique** $s \in F$ with $s \ge 0$ and $s^2 = a$;
we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the
nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$.

### `lem-power-difference-factorisation` — lemma — Factorisation of $b^n - a^n$, and the resulting Lipschitz estimate

(statement provenance: ai-altered)

### Statement

Let $a, b \in \mathbb{R}$ and let $n \in \mathbb{N}$ with $n \ge 1$, with powers
as in [[def-integer-power]] and finite sums as in [[def-finite-sum]]. Then

$$b^n - a^n = (b - a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}.$$

**Lipschitz estimate.** If $0 \le a \le b \le M$ then

$$0 \le b^n - a^n \le n M^{\,n-1} (b - a),$$

where $n$ denotes the canonical natural $\iota(n) \in \mathbb{R}$
([[lem-of-naturals-positive]], [[lem-of-q-embeds]]). This estimate is the form in
which the factorisation is used, later on this page, to prove that $n$-th roots
exist.

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

### `cor-archimedean-reciprocal` — corollary — For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$

(statement provenance: ai-altered)

### Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

### `thm-of-archimedean` — theorem — Every complete ordered field is Archimedean

(statement provenance: literature-derived)

### Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

### `lem-cauchy-sequence-bounded` — lemma — Every Cauchy sequence of reals is bounded

(statement provenance: literature-derived)

### Statement

Every Cauchy sequence of reals is bounded: if $(x_k)$ is a Cauchy sequence
([[def-real-limit]]) then there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$ ([[def-sequence]]).

This is the real-number counterpart of the lemma proving the same statement for
Cauchy sequences of rationals inside $\mathbb{Q}$, and the argument is the same
one: the Cauchy condition at a single value of $\varepsilon$
confines all but finitely many terms, and the finitely many exceptions are
handled by a maximum.

### `lem-of-abs-value` — lemma — Basic properties of the absolute value

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

### `lem-of-naturals-positive` — lemma — Canonical naturals are positive and strictly increasing

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

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

Read `fs-consecutive-differences-null-implies-cauchy` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
