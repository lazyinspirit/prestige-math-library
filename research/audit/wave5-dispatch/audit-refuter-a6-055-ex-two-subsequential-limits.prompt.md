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

# Adversarial proof reading — `ex-two-subsequential-limits`

## The item under review, in full

`items/ex-two-subsequential-limits.md`

```markdown
---
id: ex-two-subsequential-limits
kind: example
title: "The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-alternating-sequence, def-subsequential-limit, thm-algebra-of-limits, lem-subsequence-inherits-limit, lem-limit-abs, lem-limit-unique, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-abs-value, def-sequence, def-real-limit, def-complete-ordered-field, def-ordered-field]
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
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "MIT 18.100A, Lecture 9: Limsup, Liminf, and the Bolzano-Weierstrass Theorem"
      url: "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec92.pdf"
    - title: "J. Lebl, Basic Analysis I, Limit superior, limit inferior, and Bolzano-Weierstrass"
      url: "https://www.jirka.org/ra/html/sec_bw.html"
---

## Example

For $k \ge 1$ let

$$x_k = (-1)^k\Big(1 + \frac{1}{k}\Big).$$

Then $(x_k)$ is bounded, with $1 < |x_k| \le 2$ at every index, it does not
converge, and its subsequential limit set ([[def-subsequential-limit]]) is
exactly

$$\operatorname{SL}(x) = \{-1, 1\}.$$

The example separates two things that a first reading of Bolzano-Weierstrass can
run together. A bounded sequence must have a subsequential limit; it may have
several; and having several is exactly what stops it converging. Here there are
two, and neither is a value of the sequence, since $|x_k| > 1$ always.

**Indexing and the sign.** Written on $\mathbb{N}$ the sequence is
$u_j := t_j\big(1 + 1/(j+1)\big)$ for $j \in \mathbb{N}$, where $t_j := -s_j$
and $(s_k)$ is the alternating sequence of [[lem-alternating-sequence]]. Since
$s_{\sigma(j)} = -s_j$, the sequence $(t_j)$ is $j \mapsto s_{j+1}$, so
$u_j = x_{j+1}$ and $(u_j)$ is the family above under the substitution
$k = j+1$. The verification uses $(u_j)$.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ and the index maps $e, o$ of [[lem-alternating-sequence]]; the sequence $t_j := -s_j$; the sequence $p_j := 1 + 1/(j+1)$, where $j+1$ denotes the canonical natural $(j+1)\cdot 1_{\mathbb{R}}$; and $u_j := t_j\,p_j$ ([[def-sequence]]).

[L1] The alternating sequence: $|s_k| = 1$ for every $k$, $s_{e_i} = 1$ and $s_{o_i} = -1$ for every $i$, and $e$ and $o$ are strictly increasing ([[lem-alternating-sequence]]).

[L2] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, and $m \mapsto m \cdot 1_{\mathbb{R}}$ is strictly increasing ([[lem-of-naturals-positive]]).

[L3] Reciprocals: $a > 0$ gives $1/a > 0$, and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[lem-of-inverse-positive]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L5] Absolute value: $|ab| = |a||b|$, $|t| \ge 0$, $|t| = t$ for $t \ge 0$, and $|t| = 1$ forces $t = 1$ or $t = -1$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L6] Algebra of limits ([[thm-algebra-of-limits]]); subsequences inherit the limit ([[lem-subsequence-inherits-limit]]); the absolute value is compatible with limits ([[lem-limit-abs]]); limits are unique ([[lem-limit-unique]]).

[L7] Convergence and boundedness of a sequence of reals; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

[L8] Subsequential limits: $L \in \operatorname{SL}(u)$ exactly when some subsequence of $(u_j)$ converges to $L$ ([[def-subsequential-limit]]).

[L9] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 For every $j$: $j + 1 \ge 1$ gives $0 < 1/(j+1) \le 1$, so $1 < p_j \le 2$; and $|t_j| = |-s_j| = |s_j| = 1$. [given, L1, L2, L3, L5]

1.2 The sequence $(p_j)$ converges to $1$: given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon$, and for $j \ge n$ we have $0 < 1/(j+1) \le 1/n < \varepsilon$, so $|p_j - 1| = 1/(j+1) < \varepsilon$. [given, L2, L3, L4, L5, L7]

2.1 $(u_j)$ is bounded, with $1 < |u_j| = |t_j|\,p_j = p_j \le 2$ at every index. [step 1.1, L5, L7]

2.2 Along the even index map: $t_{e_i} = -s_{e_i} = -1$, so $u_{e_i} = -p_{e_i}$; since $e$ is strictly increasing, $(p_{e_i})_i$ is a subsequence of $(p_j)$ and so converges to $1$, whence $u_{e_i} \to -1$. [step 1.2, L1, L6, L8]

2.3 Along the odd index map: $t_{o_i} = -s_{o_i} = 1$, so $u_{o_i} = p_{o_i} \to 1$ by the same argument. [step 1.2, L1, L6, L8]

3.1 Hence $-1 \in \operatorname{SL}(u)$ and $1 \in \operatorname{SL}(u)$. [step 2.2, step 2.3, L8]

3.2 Conversely, let $L \in \operatorname{SL}(u)$ and fix a strictly increasing $n$ with $u_{n_i} \to L$. Then $|u_{n_i}| \to |L|$; but $|u_{n_i}| = p_{n_i}$ by step 2.1, and $(p_{n_i})_i$ is a subsequence of $(p_j)$, so it converges to $1$. [step 1.2, step 2.1, L6, L8]

4.1 By uniqueness of limits $|L| = 1$, so $L = 1$ or $L = -1$. [step 3.2, L5, L6, L9]

5.1 Combining, $\operatorname{SL}(u) = \{-1, 1\}$; and $(u_j)$ does not converge, since a convergent sequence has exactly one subsequential limit. Bounded by step 2.1, the sequence $(u_j)$, that is $(x_k)$, therefore has the asserted properties. [step 2.1, step 3.1, step 4.1, L6, L8] ∎

## Remarks

- **Where Bolzano-Weierstrass sits.** [[thm-bolzano-weierstrass]] guarantees that
  a bounded sequence has *at least one* subsequential limit; this example computes
  the whole set and finds two. Nothing above uses the theorem, since the two
  subsequential limits are exhibited directly, and that is the honest order of
  business: an existence theorem is not needed once a witness is in hand.

- **The perturbation is what makes the example more than the alternating
  sequence.** With $p_j$ replaced by the constant $1$ the sequence is
  $\pm 1$ alternating and each subsequential limit is attained infinitely often.
  Here $|x_k| > 1$ at every index, so neither subsequential limit is ever a value
  of the sequence. Subsequential limits are limits, not values.

- **The converse direction is where the partition earns its keep.** Step 4.1 rules
  out every other candidate by taking absolute values, which collapses the sign
  and leaves the single null perturbation to handle. The alternative, splitting an
  arbitrary subsequence according to how many of its indices are even, needs the
  disjointness half of [[lem-alternating-sequence]] and is longer.

- **This is the standard example of a bounded divergent sequence with a
  computable $\limsup$ and $\liminf$**, namely $1$ and $-1$. Those notions are
  developed on the next page of the track, and this item is written so that it can
  be cited there without change.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `lem-alternating-sequence` — lemma — The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

(statement provenance: ai-altered)

### Statement

Let $\sigma$ be the successor on $\mathbb{N}$ ([[def-natural-numbers]]). There are
functions $e, o : \mathbb{N} \to \mathbb{N}$ and a sequence $(s_k)$ of reals
([[def-sequence]]) with the following properties.

1. **The index maps.** $e$ is the unique function with
   $e_0 = 0$ and $e_{\sigma(j)} = \sigma(\sigma(e_j))$, and $o$ the unique
   function with $o_0 = \sigma(0)$ and $o_{\sigma(j)} = \sigma(\sigma(o_j))$.
   Both are **strictly increasing**.
2. **The partition.** $\mathbb{N}$ is the **disjoint union** of the ranges of $e$
   and of $o$: every natural number is $e_i$ for exactly one $i$ or $o_i$ for
   exactly one $i$, and never both.
3. **The alternating sequence.** $(s_k)$ is the **unique** sequence of reals with
   $$s_0 = 1, \qquad s_{\sigma(k)} = -s_k \quad (k \in \mathbb{N}).$$
4. **Its values.** $|s_k| = 1$ for every $k$, so $(s_k)$ is bounded; and
   $$s_{e_j} = 1, \qquad s_{o_j} = -1 \qquad (j \in \mathbb{N}),$$
   that is $s \circ e$ is constantly $1$ and $s \circ o$ constantly $-1$.

This is the sequence usually written $s_k = (-1)^k$, with $e_j = 2j$ and
$o_j = 2j+1$, presented by the recursions that its proofs actually use. It is
collected here once because three separate items on this page and its companion
need an alternating or interleaved witness, and rebuilding the recursion inside
each of them is what this lemma exists to prevent.

### `def-subsequential-limit` — definition — Subsequential limit of a real sequence, and the subsequential limit set

(statement provenance: literature-derived)

### Definition

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \in \mathbb{R}$.
Then $L$ is a **subsequential limit** of $(x_k)$ when some subsequence of $(x_k)$
converges to $L$: that is, when there is a strictly increasing
$n : \mathbb{N} \to \mathbb{N}$ such that

$$x_{n_j} \longrightarrow L \qquad (j \to \infty)$$

in the sense of [[def-real-limit]]. The **subsequential limit set** of $(x_k)$ is

$$\operatorname{SL}(x) \;:=\; \{\, L \in \mathbb{R} : L \text{ is a subsequential limit of } (x_k) \,\} \subseteq \mathbb{R}.$$

Both pieces of the definition are already fixed elsewhere and are only combined
here: *strictly increasing* and *subsequence* are [[def-sequence]], and
*converges* is [[def-real-limit]]. Nothing about $(x_k)$ itself is assumed; in
particular $(x_k)$ is not assumed to converge, and $\operatorname{SL}(x)$ may be
empty, a single point, or larger.

**A subsequence looks arbitrarily far out.** A strictly increasing index map
satisfies $n_j \ge j$ for every $j$ ([[lem-index-map-grows]]), so the indices
$n_j$ are cofinal in $\mathbb{N}$ and a subsequential limit is determined by the
behaviour of $(x_k)$ at arbitrarily large indices. Consequently no finite
initial segment of $(x_k)$ affects $\operatorname{SL}(x)$: a sequence and each of
its tails have the same subsequential limits.

**Terminology.** Some texts say *cluster point*, *limit point* or *accumulation
value* of the sequence for the same notion. This library says *subsequential
limit* throughout, reserving *limit point* for the topological notion of a limit
point of a set, which is a different thing: the set $\{x_k\}$ of values of the
constant sequence $x_k = 0$ has no limit point, while $0$ is a subsequential
limit of that sequence.

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

### `lem-subsequence-inherits-limit` — lemma — Subsequences inherit the limit

(statement provenance: ai-altered)

### Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]), and let $n : \mathbb{N} \to \mathbb{N}$
be strictly increasing. Then the subsequence $(x_{n_k})$ converges to $x$.

**Divergence test.** Consequently, if two subsequences of $(x_k)$ converge to
different limits, then $(x_k)$ does not converge.

### `lem-limit-abs` — lemma — The absolute value is compatible with limits

(statement provenance: ai-altered)

### Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(|x_k|)$ converges to $|x|$.

In the single case $x = 0$ the implication reverses: $|x_k| \to 0$ if and only if
$x_k \to 0$. Whether the implication can be reversed for $x \ne 0$ is taken up in
the remarks below; it is no part of what the proof establishes.

### `lem-limit-unique` — lemma — A sequence has at most one limit

(statement provenance: literature-derived)

### Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \in
\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$
([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,
and when a limit exists it may be denoted $\lim_{k} x_k$.

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

### `lem-of-inverse-positive` — lemma — Inverses of positives are positive, and reciprocation reverses order

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

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

### `lem-of-abs-value` — lemma — Basic properties of the absolute value

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

### `def-abs-value` — definition — Absolute value in an ordered field

(statement provenance: literature-derived)

### Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

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

Read `ex-two-subsequential-limits` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
