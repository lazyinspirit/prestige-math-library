# Wave 5 audit — A6 adversarial proof reading

You are a **read-only adversarial reader** (DeepSeek V4 Pro, max reasoning)
dispatched by the wave-5 audit Alpha of the prestige-math-library published-page
retro-audit (`AUDIT-WORKFLOW.md` step A6). You return **evidence, never edits**,
and you never propose to apply anything yourself. Alpha alone adjudicates.

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Never ask the owner to approve a command. You have no
> shell at all, so this is automatic for you; it is stated here because the rule
> binds every agent in this workflow verbatim.

**You have no tools and no filesystem.** Everything you are to read is in this
prompt: the item under review in full, and the Statement or Definition text of
every dependency it declares, quoted verbatim from disk. Do not speculate about
text you were not given — if a decision genuinely turns on something absent,
say so explicitly and name what is missing rather than assuming its content.

**Why you specifically.** The audit-side lineup is otherwise entirely Claude:
the Beta that read and retagged these items, the Alpha adjudicating them, and
the certifier reading repairs are all Claude models, and much of this legacy
corpus was Claude-authored too. **You are the only cross-family reader in the
loop.** A shared blind spot among the Claude readers will not show up as
disagreement among them; it can only show up as you finding something they did
not. Do not defer to the fact that a published item has already passed several
readings — this audit has repeatedly confirmed fatal defects in text that had.

**This is a retro-audit of ALREADY-PUBLISHED pages.** The item in front of you
was written, gated, judged and published months ago. Nothing about that history
is evidence that it is correct; it is the reason nobody has re-read it
adversarially since. Wave 3 measured 6 of its 11 confirmed fatal defects in
items the audit had left byte-identical.

## Your standard — the judges' standard

Read every proof step and every cited dependency as someone trying to REFUTE the
item. The point of this audit is to find what is actually wrong, not to confirm
the text reads well.

Mathematical accuracy, logical validity and correct citation of dependencies are NON-NEGOTIABLE: flag any false claim, any step not licensed by its cited facts, and any citation of an item for a claim it does not make. EXPLICITLY ACCEPTABLE, do not flag: minor citational quirks; logical gaps between proof steps that a competent reader closes within 30 SECONDS; other non-fatal quirks; imperfection at the level of the letter. Library conventions that are NOT defects: sequences are functions on N and N CONTAINS 0, so indices start at 0; a natural number is a von Neumann natural (a set), so 1/k is written 1/iota(k) with iota the canonical natural of the field; the successor of a von Neumann natural n is sigma(n) = n union {n}, so n = {0,1,...,n-1} and sigma(n) = {0,1,...,n} has exactly n+1 elements; sigma(n) is NOT {0,...,n-1}, and an off-by-one objection that rests on reading it that way is a misreading of the library, not a defect; items cite by [L#] into a Facts and Assumptions block; a definition may discharge its own well-definedness inline or via justified_by. Also check the TITLE against what is actually proved: a title asserting more than the proof gives is a defect even when the Statement is correct. CITATION VOICE AND FIDELITY: every [F#], [A#], and [L#] fact must state the cited Definition or Statement itself, exactly when practical or in a concise version preserving its domain, quantifiers, hypotheses, conclusion, and direction.

## Triage — the standing rule, binding

- **Non-negotiable, always report:** mathematical accuracy, logical validity,
  correct citation.
- **Explicitly acceptable, spend no effort and do NOT report:** minor citational
  quirks; logical gaps a competent reader closes **within 30 seconds**; other
  non-fatal quirks; imperfection at the level of the letter; prose style; page
  summary length; missing provenance URLs.

**Before alleging a cited dependency is too weak, quote the dependency text you
were given and show exactly what it fails to supply.** A refuter that asserts a
dependency is insufficient without quoting it is producing noise, and this
library's dominant real defect class — a citation of an item for a claim it does
not make — can only be established by that quotation.

**Read the Remarks with a numbered step's suspicion.** Measured across this
audit, Remark and Facts-block prose, not numbered steps, is where nearly every
confirmed fatal defect in this corpus has been found. A Remark that asserts how
some *other* item in the library uses this one is a frequent falsehood: you
cannot check those from here, so say so rather than passing them.

**Choice discipline matters in this wave.** Wave 5 is real analysis and general
topology: countability axioms, separation axioms, nets, filters, ultrafilters
and function spaces. Countable choice, dependent choice, the ultrafilter lemma
and full AC are genuinely different hypotheses here, and this library records
which one an argument spends. A proof that silently uses a choice principle its
Statement does not scope, or a Statement scoping a principle strictly stronger
or weaker than the proof actually needs, is a FATAL defect of the
missing-hypothesis class — not a quibble. Equally, the library has already
adopted AC, countable choice and dependent choice as foundational axioms, so
using one *within its declared scope* is not a defect.

## Output — the only thing you return

Plain markdown. For each finding, one block:

```
### FINDING 1, 2, 3, ... — FATAL or NONFATAL — location: title / Statement / [L#] / step X.Y / Remark
CLAIM AS WRITTEN: "<verbatim quote of the offending text>"
WHY IT FAILS: <the concrete false claim, unlicensed inference, missing
hypothesis, or inaccurate citation — with the verbatim dependency text that
does or does not license it>
WHAT WOULD FIX IT: <the smallest correction you can name, or "not obvious">
```

If, having genuinely tried to refute it, you find nothing fatal, say so plainly
and list what you checked. Finish with one line: `N fatal, M nonfatal`.

A confident empty reading is worse than useless here. Either name a concrete
defect with its quotation, or state clearly that you could not find one.


---

# This dispatch

# Adversarial proof reading — `ex-contractive-sequence-fixed-point`

## The item under review, in full

`items/ex-contractive-sequence-fixed-point.md`

```markdown
---
id: ex-contractive-sequence-fixed-point
kind: example
title: "The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-contractive-implies-cauchy, def-contractive-sequence, thm-algebra-of-limits, lem-limit-of-tail, lem-limit-unique, thm-recursion, def-sequence, def-real-limit, lem-of-abs-value, lem-of-inverse-positive, prop-of-reciprocal-order, cor-of-one-positive, lem-of-add-order, def-field, def-complete-ordered-field, def-ordered-field]
justified_by: []
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
    - title: "Fixed-point iteration (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fixed-point_iteration"
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis, 4th ed., §3.5"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
---

## Example

Fix any $a \in \mathbb{R}$ and let $(x_k)$ be the sequence with $x_0 = a$ and

$$x_{k+1} = \frac{x_k + 1}{3} \qquad (k \in \mathbb{N}).$$

Then $(x_k)$ is contractive with contraction constant $c = 1/3$
([[def-contractive-sequence]]), and

$$\lim_{k} x_k = \frac{1}{2},$$

**whatever the starting value $a$ is**. Moreover
[[thm-contractive-implies-cauchy]] supplies the error bound
$|1/2 - x_k| \le 3^{\,-(k-1)}|x_2 - x_1|/(1 - 1/3)$ for $k \ge 1$, which is
computable from the first three terms alone.

The limit $1/2$ is the unique solution of $L = (L+1)/3$, that is the unique fixed
point of the map $u \mapsto (u+1)/3$. This is the smallest honest instance of the
Banach fixed point theorem: a contraction on $\mathbb{R}$ has one fixed point,
and every orbit converges to it.

## Facts & Assumptions

**Given:** A real $a$, and by the recursion theorem ([[thm-recursion]]) applied to $\mathbb{R}$, the element $a$ and the function $f(u) = (u+1)/3$, the unique sequence $(x_k)$ of reals with $x_0 = a$ and $x_{k+1} = f(x_k)$ ([[def-sequence]]); the constant $c := 1/3$.

[L1] Recursion theorem ([[thm-recursion]]).

[L2] Order and arithmetic: $1 > 0$, so $3 = 1+1+1 > 1 > 0$; a positive has a positive inverse; and $0 < r < 1$ exactly when $1/r > 1$, so $0 < 1/3 < 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[prop-of-reciprocal-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L3] Field arithmetic: $(u+1)/3 - (v+1)/3 = (u - v)/3$, and $3L = L + 1$ is equivalent to $2L = 1$ ([[def-field]]).

[L4] Absolute value: $|ab| = |a|\,|b|$, and $|t| = t$ for $t \ge 0$, so $|(u-v)/3| = |u-v|/3$ ([[lem-of-abs-value]]).

[L5] Contractive sequences: a constant $c$ with $0 < c < 1$ and $|x_{k+2} - x_{k+1}| \le c|x_{k+1} - x_k|$ at every index ([[def-contractive-sequence]]).

[L6] Every contractive sequence is Cauchy and converges, with the stated error bound for $k \ge 1$ ([[thm-contractive-implies-cauchy]], [[def-real-limit]]).

[L7] Algebra of limits ([[thm-algebra-of-limits]]); a sequence and its tails have the same limits ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).

## Verification

**Proof technique:** direct.

1.1 The constant $c = 1/3$ satisfies $0 < c < 1$. [given, L2]

1.2 For every $k$: $x_{k+2} - x_{k+1} = \dfrac{x_{k+1} + 1}{3} - \dfrac{x_k + 1}{3} = \dfrac{x_{k+1} - x_k}{3}$, so $|x_{k+2} - x_{k+1}| = \tfrac13 |x_{k+1} - x_k|$. [given, L1, L3, L4]

2.1 Hence $(x_k)$ is contractive with contraction constant $c = 1/3$, the inequality of [L5] holding with equality at every index. [step 1.1, step 1.2, L5]

3.1 By [L6] the sequence converges; write $L$ for its limit, and the error bound of [L6] holds for it with $c = 1/3$. [step 2.1, L6]

4.1 The sequence $k \mapsto x_{k+1}$ is the first tail of $(x_k)$, so it converges to $L$; and by the algebra of limits $k \mapsto (x_k + 1)/3$ converges to $(L+1)/3$. [step 3.1, L7]

5.1 The two sequences of step 4.1 are the same sequence, by the recursion clause, so uniqueness of limits gives $L = (L+1)/3$, hence $3L = L + 1$, hence $2L = 1$ and $L = 1/2$. [step 4.1, L1, L3, L7]

6.1 So for every starting value $a$ the sequence is contractive with $c = 1/3$ and converges to $1/2$, with the error bound of step 3.1. [step 2.1, step 3.1, step 5.1] ∎

## Remarks

- **The starting value is genuinely arbitrary.** Nothing in the verification uses
  anything about $a$, and the limit does not depend on it. What does depend on it
  is the error bound, through $|x_2 - x_1|$, which for this recursion equals
  $|a - 1/2| \cdot 2/9$.

- **Contractivity is exact here, not an estimate.** Step 1.2 gives equality,
  $|x_{k+2} - x_{k+1}| = \tfrac13|x_{k+1} - x_k|$, so $c = 1/3$ is the smallest
  admissible contraction constant and the error bound of
  [[thm-contractive-implies-cauchy]] is as sharp as that theorem can make it.
  Contrast [[cex-strictly-decreasing-gaps-no-limit]], where the ratio of
  consecutive gaps tends to $1$ and no admissible constant exists at all.

- **Why a fixed point is forced.** The limit satisfies the recursion equation
  because a sequence and its shift have the same limit ([[lem-limit-of-tail]]) and
  the algebra of limits transports the right-hand side. This is the same move as
  in [[ex-babylonian-sqrt-two]] and [[ex-recursive-sqrt-two-plus-x]]; the
  difference is that here convergence comes from contractivity rather than from
  monotonicity, and no monotonicity is available, since for $a > 1/2$ the sequence
  decreases and for $a < 1/2$ it increases while for $a = 1/2$ it is constant.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

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

### `lem-limit-of-tail` — lemma — Convergence depends only on the tail

(statement provenance: ai-altered)

### Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), let $x \in \mathbb{R}$,
and for $K \in \mathbb{N}$ let $x^{(K)}$ denote the $K$-th tail, $x^{(K)}_j =
x_{j+K}$. The following are equivalent ([[def-real-limit]]):

1. $(x_k)$ converges to $x$;
2. every tail $x^{(K)}$ converges to $x$;
3. some tail $x^{(K)}$ converges to $x$.

The same three statements with "converges to $x$" replaced by "is Cauchy" are
likewise equivalent. Consequently, if two sequences agree from some index on,
then either both converge to $x$ or neither does, and either both are Cauchy or
neither is.

### `lem-limit-unique` — lemma — A sequence has at most one limit

(statement provenance: literature-derived)

### Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \in
\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$
([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,
and when a limit exists it may be denoted $\lim_{k} x_k$.

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

### `lem-of-abs-value` — lemma — Basic properties of the absolute value

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

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

### `def-field` — definition — Field

(statement provenance: ai-altered)

### Definition

A **field** is a set $F$ equipped with two binary operations $+$ (addition) and
$\cdot$ (multiplication) and two distinguished elements $0 \ne 1$ of $F$,
satisfying:

- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is
  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an
  additive inverse $-x$ with $x + (-x) = 0$.
- **(M)** Multiplication is associative and commutative **on all of $F$**, and
  $x \cdot 1 = x$ for every $x \in F$; moreover $(F \setminus \{0\}, \cdot)$ is an
  abelian group with identity $1$, so every $x \ne 0$ has a multiplicative inverse
  $x^{-1}$ with $x \cdot x^{-1} = 1$.
- **(D)** Multiplication distributes over addition: $x \cdot (y + z) = x\cdot y + x\cdot z$.

We write $x - y := x + (-y)$ and $x/y := x \cdot y^{-1}$ (for $y \ne 0$), and
abbreviate $x \cdot y$ as $xy$.

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

Read `ex-contractive-sequence-fixed-point` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
