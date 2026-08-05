# Adversarial proof reading — `thm-bolzano-weierstrass`

## The item under review, in full

`items/thm-bolzano-weierstrass.md`

```markdown
---
id: thm-bolzano-weierstrass
kind: theorem
title: "Bolzano-Weierstrass: every bounded real sequence has a convergent subsequence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-peak-monotone-subsequence, cor-monotone-converges-iff-bounded, def-subsequential-limit, def-sequence, def-monotone-sequence]
justified_by: []
forward_refs: [cex-unbounded-with-convergent-subsequence]
aliases: []
landmark: true
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
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.6(b))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6 (Thm 6.6.8)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3 (Thm 2.3.8)"
      url: "https://www.jirka.org/ra/"
---

## Statement

Every bounded sequence of reals has a convergent subsequence: if $(x_k)$ is a
sequence of reals and there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$ ([[def-sequence]]), then there is a strictly increasing
$n : \mathbb{N} \to \mathbb{N}$ and a real $L$ with $x_{n_j} \to L$.

Equivalently: the subsequential limit set of a bounded sequence is nonempty
([[def-subsequential-limit]]).

The theorem is the exact repair of the false claim that a bounded sequence
converges. A bounded
sequence need not converge, and the alternating sequence is the standing witness;
what boundedness does force is that *some* subsequence converges. The converse of
the theorem is false, and badly so: a sequence with a convergent subsequence need
not be bounded.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals and a real $M$ with $|x_k| \le M$ for every $k \in \mathbb{N}$.

[L1] Every sequence of reals has a monotone subsequence ([[lem-peak-monotone-subsequence]]).

[L2] A monotone sequence of reals converges if and only if it is bounded ([[cor-monotone-converges-iff-bounded]]).

[L3] A subsequence $(x_{n_j})$ of $(x_k)$ along a strictly increasing $n$ is again a sequence of reals, and each of its terms is a term of $(x_k)$; a sequence is bounded when some $M$ satisfies $|{\cdot}| \le M$ at every index ([[def-sequence]]).

[L4] Monotone means nondecreasing or nonincreasing ([[def-monotone-sequence]]).

[L5] $L$ is a subsequential limit of $(x_k)$ when some subsequence of $(x_k)$ converges to $L$ ([[def-subsequential-limit]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] fix a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ such that the subsequence $(x_{n_j})$ is monotone; no hypothesis on $(x_k)$ is needed for this step. [given, L1, L4, choose]

2.1 $(x_{n_j})$ is bounded: each of its terms is a term of $(x_k)$, so $|x_{n_j}| \le M$ for every $j$, with the same $M$. [step 1.1, given, L3]

3.1 Being monotone and bounded, $(x_{n_j})$ converges; write $L$ for its limit. [step 1.1, step 2.1, L2]

4.1 So $(x_k)$ has a convergent subsequence, and $L$ is a subsequential limit of $(x_k)$; in particular the subsequential limit set of a bounded sequence is nonempty. [step 3.1, L5] ∎

## Remarks

- **The proof is two citations, and that is the point of the page order.** All
  the work sits in [[lem-peak-monotone-subsequence]], which needs nothing about
  $\mathbb{R}$ beyond trichotomy, and in [[cor-monotone-converges-iff-bounded]],
  which is where the least-upper-bound property is actually spent. Splitting the
  argument this way isolates the use of completeness in a single place instead of
  burying it in a bisection.

- **Bisection is the other standard proof and is not used here.** Halving the
  interval $[-M, M]$ repeatedly and keeping a half containing infinitely many
  terms produces a nested sequence of intervals whose lengths tend to $0$, and
  [[thm-nested-interval-property]] then yields the limit. That route is
  available in this library, since the nested interval property is proved on this
  page, but it needs an extra argument to choose the terms and to see that the
  chosen indices increase, whereas the monotone-subsequence route needs neither.

- **The limit is not determined by the theorem.** A bounded sequence may have
  many subsequential limits, and the theorem asserts only that there is at least
  one. Which subsequential limits exist, and that there is a largest and a
  smallest, is the subject of the $\limsup$ page.

- **Boundedness is sufficient but not necessary.** The converse fails, by
  [[fs-convergent-subsequence-implies-bounded]] and its witness
  [[cex-unbounded-with-convergent-subsequence]]: a wildly unbounded sequence can
  still have a constant, hence convergent, subsequence.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `lem-peak-monotone-subsequence` — lemma — Every real sequence has a monotone subsequence (the peak / rising-sun lemma)

(statement provenance: literature-derived)

### Statement

Every sequence of reals has a monotone subsequence: for every sequence $(x_k)$ of
reals ([[def-sequence]]) there is a strictly increasing
$n : \mathbb{N} \to \mathbb{N}$ such that the subsequence $(x_{n_j})$ is monotone
([[def-monotone-sequence]]).

No hypothesis whatever is placed on $(x_k)$: it need not be bounded, and it need
not converge. Combined with the corollary later on this page, which
converts monotone plus bounded into convergent, this is the whole content of the
Bolzano-Weierstrass theorem.

Call an index $n \in \mathbb{N}$ a **peak** of $(x_k)$ when

$$x_m \le x_n \quad \text{for every } m \ge n,$$

that is, when no later term ever exceeds $x_n$. The proof splits on whether peaks
occur arbitrarily late or stop occurring, and produces a nonincreasing
subsequence in the first case and an increasing one in the second. The picture
behind the name is the rising sun shining from the right: the peaks are the
points that are not put in shadow by anything to their right.

### `cor-monotone-converges-iff-bounded` — corollary — A monotone sequence converges if and only if it is bounded

(statement provenance: literature-derived)

### Statement

Let $(x_k)$ be a monotone sequence of reals ([[def-sequence]],
[[def-monotone-sequence]]). Then $(x_k)$ converges if and only if it is bounded,
that is if and only if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$.

The forward implication holds for every sequence and is
[[lem-convergent-implies-bounded]]. What monotonicity buys is the converse, which
is false for sequences in general.

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

## What to return

Read `thm-bolzano-weierstrass` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
