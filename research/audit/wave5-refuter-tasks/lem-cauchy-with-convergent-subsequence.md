# Adversarial proof reading — `lem-cauchy-with-convergent-subsequence`

## The item under review, in full

`items/lem-cauchy-with-convergent-subsequence.md`

```markdown
---
id: lem-cauchy-with-convergent-subsequence
kind: lemma
title: "A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-limit, def-sequence, def-subsequential-limit, lem-index-map-grows, lem-of-triangle-inequality, lem-rat-embeds-dense, thm-nat-linear-order]
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
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.11(b))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.4"
      url: "https://www.jirka.org/ra/"
---

## Statement

Let $(x_k)$ be a Cauchy sequence of reals ([[def-real-limit]]) and suppose some
subsequence $(x_{n_j})$ converges to $L \in \mathbb{R}$, that is, $L$ is a
subsequential limit of $(x_k)$ ([[def-subsequential-limit]]). Then the whole
sequence $(x_k)$ converges, and its limit is $L$.

So for a Cauchy sequence a single convergent subsequence already determines the
behaviour of the sequence. This is exactly the step that upgrades
Bolzano-Weierstrass into Cauchy completeness in
the Cauchy criterion later on this page, and it is false without the Cauchy
hypothesis.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x_k)$ of reals, a strictly increasing $n : \mathbb{N} \to \mathbb{N}$, and $L \in \mathbb{R}$ with $x_{n_j} \to L$.

[A1] Cauchy condition: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$ ([[def-real-limit]]).

[A2] Convergence of the subsequence: for every rational $\varepsilon > 0$ there is $J$ with $|x_{n_j} - L| < \varepsilon$ for all $j \ge J$ ([[def-real-limit]], [[def-subsequential-limit]], [[def-sequence]]).

[L1] Triangle inequality: $|x - L| = |(x - y) + (y - L)| \le |x - y| + |y - L|$ ([[lem-of-triangle-inequality]]).

[L2] Growth of an index map: a strictly increasing $n$ satisfies $n_j \ge j$ for every $j$ ([[lem-index-map-grows]]).

[L3] Halving a rational: if $\varepsilon$ is a positive rational then so is $\varepsilon/2$, and the embedding of $\mathbb{Q}$ in $\mathbb{R}$ is a field embedding, so the image of $\varepsilon/2$ is half the image of $\varepsilon$ and the two halves sum to $\varepsilon$ ([[lem-rat-embeds-dense]]).

[L4] The order on $\mathbb{N}$ is total and transitive, so two indices $J, K$ admit an index $j$ with $j \ge J$ and $j \ge K$ ([[thm-nat-linear-order]]).

[L5] Convergence: $(x_k)$ converges to $L$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - L| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be an arbitrary rational; then $\varepsilon/2$ is again a positive rational, and $\varepsilon/2 + \varepsilon/2 = \varepsilon$. [given, L3]

2.1 By [A1] applied to $\varepsilon/2$, fix $K \in \mathbb{N}$ with $|x_k - x_l| < \varepsilon/2$ for all $k, l \ge K$. [step 1.1, A1, choose]

2.2 By [A2] applied to $\varepsilon/2$, fix $J \in \mathbb{N}$ with $|x_{n_j} - L| < \varepsilon/2$ for all $j \ge J$. [step 1.1, A2, choose]

3.1 Fix a single index $j$ with $j \ge J$ and $j \ge K$; then $n_j \ge j \ge K$, so the term $x_{n_j}$ is simultaneously within $\varepsilon/2$ of $L$ and within $\varepsilon/2$ of every $x_k$ with $k \ge K$. [step 2.1, step 2.2, L2, L4, choose]

4.1 For every $k \ge K$: $|x_k - L| \le |x_k - x_{n_j}| + |x_{n_j} - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 2.1, step 2.2, step 3.1, L1]

5.1 The rational $\varepsilon > 0$ was arbitrary and an index $K$ was produced for it, so $(x_k)$ converges to $L$. [step 4.1, L5] ∎

## Remarks

- **The Cauchy hypothesis is doing all the work.** Without it a convergent
  subsequence says nothing at all about the sequence, which is
  [[fs-subsequence-convergence-implies-convergence]]; the alternating sequence
  has a constant, hence convergent, subsequence and does not converge. What the
  Cauchy condition adds is that the terms are eventually close to *each other*,
  so being close to $L$ at one late index propagates to all late indices.

- **The single index $j$ chosen in step 3.1 is the whole trick.** It is used
  once, as a bridge, and is not required to grow with $k$; this is why $n_j \ge j$
  ([[lem-index-map-grows]]) is needed only to know that some subsequence index
  lies beyond $K$.

- **The limit is forced to be $L$, not merely to exist.** Combined with
  uniqueness of limits ([[lem-limit-unique]]), this says that a Cauchy sequence
  has at most one subsequential limit, so for Cauchy sequences the subsequential
  limit set ([[def-subsequential-limit]]) is empty or a single point, and
  [[thm-cauchy-criterion-via-lub]] rules out the empty case in $\mathbb{R}$.
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

### `lem-index-map-grows` — lemma — A strictly increasing index map satisfies $n_k \\ge k$

(statement provenance: ai-altered)

### Statement

Let $n : \mathbb{N} \to \mathbb{N}$ be a function, written $k \mapsto n_k$, and
recall that $n$ is **strictly increasing** when $n_j < n_k$ whenever $j < k$
([[def-sequence]], [[def-nat-order]]).

1. **Consecutive comparisons suffice.** If $n_i < n_{\sigma(i)}$ for every
   $i \in \mathbb{N}$, then $n$ is strictly increasing.
2. **Growth.** If $n$ is strictly increasing then $n_k \ge k$ for every
   $k \in \mathbb{N}$.

Claim 1 is what one checks in practice when exhibiting a subsequence; claim 2 is
what every later subsequence argument uses.

### `lem-of-triangle-inequality` — lemma — The triangle inequality

(statement provenance: literature-derived)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$|x + y| \le |x| + |y|.$$

### `lem-rat-embeds-dense` — lemma — The rationals embed densely in the reals

(statement provenance: ai-altered)

### Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

### `thm-nat-linear-order` — theorem — $\\le$ is a linear order on $\\mathbb{N}$

(statement provenance: ai-altered)

### Statement

The relation $\le$ on $\mathbb{N}$, where $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.

## What to return

Read `lem-cauchy-with-convergent-subsequence` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
