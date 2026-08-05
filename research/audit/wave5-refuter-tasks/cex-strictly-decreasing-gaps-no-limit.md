# Adversarial proof reading — `cex-strictly-decreasing-gaps-no-limit`

## The item under review, in full

`items/cex-strictly-decreasing-gaps-no-limit.md`

```markdown
---
id: cex-strictly-decreasing-gaps-no-limit
kind: counterexample
title: "$x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-contractive-sequence, thm-contractive-implies-cauchy, def-divergence-to-infinity, def-monotone-sequence, thm-of-archimedean, thm-induction-principle, lem-power-monotone, lem-of-inverse-positive, lem-convergent-implies-bounded, thm-recursion, def-sequence, def-real-limit, def-integer-power, lem-of-abs-value, lem-of-naturals-positive, cor-of-one-positive, lem-of-add-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
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
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis, 4th ed., §3.5"
      url: "https://en.wikipedia.org/wiki/Fixed-point_iteration"
---

## Statement refuted

**Refuted claim:** a sequence whose consecutive gaps are strictly decreasing,

$$|x_{k+2} - x_{k+1}| < |x_{k+1} - x_k| \quad \text{for every } k,$$

is contractive, or at least converges ([[def-contractive-sequence]],
[[thm-contractive-implies-cauchy]]).

The witness is $x_1 = 1$, $x_{k+1} = x_k + 1/x_k$. Its gaps are
$x_{k+1} - x_k = 1/x_k$, strictly decreasing because $(x_k)$ is strictly
increasing; and the sequence **diverges to $+\infty$**
([[def-divergence-to-infinity]]). Since a contractive sequence converges
([[thm-contractive-implies-cauchy]]), no contraction constant $c < 1$ can exist
for it: the ratios of consecutive gaps are all below $1$ but have no bound below
$1$ that works at every index.

**Indexing.** Written on $\mathbb{N}$ the sequence is $(g_j)$ with $g_0 = 1$ and
$g_{j+1} = g_j + 1/g_j$, and $x_k := g_{k-1}$ for $k \ge 1$ ([[def-sequence]]).

## Facts & Assumptions

**Given:** The set $A := \{u \in \mathbb{R} : u \ge 1\}$, the element $1 \in A$, and the function $f : A \to A$ with $f(u) = u + 1/u$, which lands in $A$ because $u \ge 1 > 0$ gives $1/u > 0$ and hence $f(u) > u \ge 1$; by the recursion theorem ([[thm-recursion]]) the unique $g : \mathbb{N} \to A$ with $g_0 = 1$ and $g_{j+1} = f(g_j)$; and the gaps $d_j := g_{j+1} - g_j$.

[L1] Recursion theorem ([[thm-recursion]]) and induction principle ([[thm-induction-principle]]).

[L2] Order and arithmetic: $1 > 0$, so $2 = 1 + 1 > 0$; sums of positives are positive; adding a constant preserves the order; a positive has a positive inverse, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L3] Powers: $(u + v)^2 = u^2 + 2uv + v^2$ and $u \cdot (1/u) = 1$, so $(u + 1/u)^2 = u^2 + 2 + 1/u^2$; and for $a, b \ge 0$, $a < b$ exactly when $a^2 < b^2$ ([[def-integer-power]], [[lem-power-monotone]]).

[L4] Canonical naturals: positive for $n \ge 1$, and strictly increasing in the index ([[lem-of-naturals-positive]]); the Archimedean property ([[thm-of-archimedean]]).

[L5] Absolute value: $|t| = t$ for $t \ge 0$ and $|t| \ge t$ ([[lem-of-abs-value]]).

[L6] Monotone sequences, with consecutive comparisons sufficing ([[def-monotone-sequence]]).

[L7] Divergence to $+\infty$ ([[def-divergence-to-infinity]]); a convergent sequence is bounded ([[lem-convergent-implies-bounded]]); convergence ([[def-real-limit]]).

[L8] Contractive sequences and their convergence: a contractive sequence, with a constant $c$ satisfying $0 < c < 1$ at every index, converges ([[def-contractive-sequence]], [[thm-contractive-implies-cauchy]]).

## Counterexample

**Proof technique:** direct.

1.1 Every term satisfies $g_j \ge 1 > 0$, since $g$ takes values in $A$ by construction. [given, L2]

2.1 The sequence is strictly increasing: $d_j = g_{j+1} - g_j = 1/g_j > 0$, and consecutive comparisons give strict increase. [step 1.1, L2, L6]

2.2 By induction, $(g_j)^2 \ge 1 + 2j$ for every $j$, where $j$ denotes the canonical natural. Base: $(g_0)^2 = 1 = 1 + 2\cdot 0$. Step: $(g_{j+1})^2 = (g_j + 1/g_j)^2 = (g_j)^2 + 2 + 1/(g_j)^2 > (g_j)^2 + 2 \ge (1 + 2j) + 2 = 1 + 2(j+1)$. [step 1.1, L1, L2, L3, L4]

3.1 The gaps are strictly decreasing: $0 < g_j < g_{j+1}$ gives $0 < 1/g_{j+1} < 1/g_j$, that is $0 < d_{j+1} < d_j$; and $|d_{j+1}| < |d_j|$ since both are positive. [step 1.1, step 2.1, L2, L5]

3.2 $(g_j)$ diverges to $+\infty$. Let $M \in \mathbb{R}$ and put $M' := |M| \ge M$, so $M' \ge 0$. By [L4] fix a natural $n \ge 1$ with $(M')^2 < n$. Then $(g_n)^2 \ge 1 + 2n > n > (M')^2$, and since $g_n \ge 0$ and $M' \ge 0$ this gives $g_n > M' \ge M$; for every $k \ge n$ strict increase gives $g_k \ge g_n > M$. [step 2.1, step 2.2, L3, L4, L5, L7]

4.1 $(g_j)$ does not converge: a convergent sequence is bounded, whereas step 3.2 exhibits terms above every real. [step 3.2, L7]

5.1 No $c$ with $0 < c < 1$ is a contraction constant for $(g_j)$: if one were, the sequence would be contractive and would converge, contradicting step 4.1. [step 4.1, L8]

6.1 So $(g_j)$, that is $(x_k)$, has strictly decreasing consecutive gaps by step 3.1, diverges to $+\infty$ by step 3.2, and admits no uniform $c < 1$ by step 5.1: strictly decreasing gaps neither make a sequence contractive nor make it converge. [step 3.1, step 3.2, step 5.1, L8] ∎

## Remarks

- **The gaps are not merely decreasing, they are null.** Since $d_j = 1/g_j$ and
  $g_j \to +\infty$, for any real $\varepsilon > 0$ the terms eventually exceed
  $1/\varepsilon$, so $0 < d_j < \varepsilon$ eventually
  ([[lem-of-inverse-positive]]). So this sequence is also a witness for
  [[fs-consecutive-differences-null-implies-cauchy]], alongside $\sqrt k$; the
  two are close relatives, since $(g_j)^2 \ge 1 + 2j$ says $g_j$ grows at least
  like $\sqrt{2j}$.

- **What the uniform constant is really asking for.** The ratio of consecutive
  gaps here is $d_{j+1}/d_j = g_j/g_{j+1}$, which is below $1$ at every index and
  approaches $1$ as $j$ grows. A contraction constant would have to sit strictly
  between all of those ratios and $1$, and there is no room: the supremum of the
  ratios is $1$ itself. This is the precise sense in which
  [[def-contractive-sequence]] asks for more than "each gap smaller than the
  last".

- **The comparison with a genuine contraction.** In
  [[ex-contractive-sequence-fixed-point]] the ratio is exactly $1/3$ at every
  index, so the constant exists and is optimal, and the error bound of
  [[thm-contractive-implies-cauchy]] applies. The difference between the two
  examples is not the speed at which the gaps shrink at any given index but
  whether the shrinking is uniform.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

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

### `def-divergence-to-infinity` — definition — Divergence to $+\\infty$ and to $-\\infty$

(statement provenance: ai-altered)

### Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]].

- $(x_k)$ **diverges to $+\infty$**, written $x_k \to +\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all
  $k \ge K$.
- $(x_k)$ **diverges to $-\infty$**, written $x_k \to -\infty$, when for every
  $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k < M$ for all
  $k \ge K$.

Equivalently, in the language of [[def-sequence]]: $x_k \to +\infty$ when the
property $x_k > M$ holds eventually, for every real $M$.

### `def-monotone-sequence` — definition — Nondecreasing, increasing, nonincreasing, decreasing, monotone, and eventually monotone sequences

(statement provenance: ai-altered)

### Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\mathbb{R}$ ordered
as in [[def-real-order]] and [[def-complete-ordered-field]], and with
$\mathbb{N}$ ordered as in [[def-nat-order]]. The sequence is:

- **nondecreasing** when $x_j \le x_k$ for all $j \le k$;
- **increasing** (or *strictly increasing*) when $x_j < x_k$ for all $j < k$;
- **nonincreasing** when $x_j \ge x_k$ for all $j \le k$;
- **decreasing** (or *strictly decreasing*) when $x_j > x_k$ for all $j < k$;
- **monotone** when it is nondecreasing or nonincreasing;
- **strictly monotone** when it is increasing or decreasing;
- **eventually monotone** when some tail $x^{(K)}$ ([[def-sequence]]) is
  monotone, that is when there is $K \in \mathbb{N}$ such that the restriction of
  the comparison to indices $\ge K$ is one-signed.

An increasing sequence is nondecreasing and a decreasing sequence is
nonincreasing, since $j \le k$ means $j < k$ or $j = k$ and the second case gives
equality. A sequence that is both nondecreasing and nonincreasing is constant.

**Consecutive comparisons suffice, and that is an induction.** The four
conditions above quantify over *all* pairs of indices, but what one checks in
practice, and what a recursive construction delivers, is the comparison of
consecutive terms. The two agree:

> $(x_k)$ is nondecreasing **if and only if** $x_k \le x_{\sigma(k)}$ for every
> $k \in \mathbb{N}$, and $(x_k)$ is increasing **if and only if**
> $x_k < x_{\sigma(k)}$ for every $k \in \mathbb{N}$; likewise, with the
> inequalities reversed, for nonincreasing and decreasing.

The forward implications are the instances $j = k$, $k = \sigma(k)$ of the
definitions, using $k < \sigma(k)$ ([[lem-nat-discrete]]). For the converse,
suppose $x_i \le x_{\sigma(i)}$ for every $i$ and fix $k$; we show by induction
on $k$ ([[thm-induction-principle]]) that $x_j \le x_k$ for every $j \le k$. For
$k = 0$: $j \le 0$ forces $j = 0$, and $x_0 \le x_0$. Assume the statement for
$k$ and let $j \le \sigma(k)$. If $j = \sigma(k)$ then $x_j \le x_{\sigma(k)}$ by
reflexivity. Otherwise $j < \sigma(k)$, and then $j \le k$: were $k < j$ we would
have $k < j < \sigma(k)$, which [[lem-nat-discrete]] excludes, so $j \le k$ by
totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]). The induction
hypothesis gives $x_j \le x_k$, and $x_k \le x_{\sigma(k)}$ by assumption, so
$x_j \le x_{\sigma(k)}$ by transitivity. This completes the induction. The three
remaining equivalences are the same argument with $\le$ replaced by $<$,
$\ge$ or $>$, transitivity of the strict order being used in the same place.

**Boundedness of a monotone sequence is one-sided.** A nondecreasing sequence is
bounded below by its first term $x_0$, and a nonincreasing sequence is bounded
above by $x_0$, both immediately from the definition with $j = 0$. So for a
nondecreasing sequence the only substantive question is whether it is bounded
above, and for a nonincreasing sequence whether it is bounded below. The range of
$(x_k)$ is the set $\{x_k : k \in \mathbb{N}\}$ ([[def-sequence]]), and it is
bounded above, bounded below or bounded in the sense of [[def-bounded-set]]
exactly when the sequence is.

### `thm-of-archimedean` — theorem — Every complete ordered field is Archimedean

(statement provenance: literature-derived)

### Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

### `thm-induction-principle` — theorem — The principle of mathematical induction

(statement provenance: literature-derived)

### Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

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

### `lem-of-inverse-positive` — lemma — Inverses of positives are positive, and reciprocation reverses order

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

### `lem-convergent-implies-bounded` — lemma — Every convergent sequence is bounded

(statement provenance: literature-derived)

### Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is bounded: there is
$M \in \mathbb{R}$ with $|x_k| \le M$ for every $k \in \mathbb{N}$.

### `thm-recursion` — theorem — The recursion theorem

(statement provenance: literature-derived)

### Statement

Let $(N,0,\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

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

### `def-real-limit` — definition — Limits and Cauchy sequences of reals

(statement provenance: ai-altered)

### Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

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

### `cor-of-one-positive` — corollary — The multiplicative identity is positive

(statement provenance: literature-derived)

### Statement

In any ordered field $F$ with positive cone $P$, the multiplicative identity
satisfies $0 < 1$; that is, $1 \in P$.

### `lem-of-add-order` — lemma — Order is preserved by adding a constant and by adding inequalities

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

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

Read `cex-strictly-decreasing-gaps-no-limit` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
