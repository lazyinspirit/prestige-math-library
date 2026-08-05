# Adversarial proof reading — `thm-monotone-convergence`

## The item under review, in full

`items/thm-monotone-convergence.md`

```markdown
---
id: thm-monotone-convergence
kind: theorem
title: "A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monotone-sequence, def-sequence, def-real-limit, def-complete-ordered-field, def-bounded-set, lem-sup-epsilon, lem-sup-unique, lem-inf-epsilon, thm-infimum-property, lem-of-abs-value]
justified_by: []
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
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.14)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.3 (Prop. 6.3.8)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.2 (Thm 2.2.5)"
      url: "https://www.jirka.org/ra/"
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let
$S = \{x_k : k \in \mathbb{N}\}$ be its range.

1. If $(x_k)$ is nondecreasing ([[def-monotone-sequence]]) and $S$ is bounded
   above ([[def-bounded-set]]), then $(x_k)$ converges ([[def-real-limit]]) and
   $$\lim_{k} x_k = \sup S .$$
2. If $(x_k)$ is nonincreasing and $S$ is bounded below, then $(x_k)$ converges
   and $$\lim_{k} x_k = \inf S .$$

Both suprema and infima exist under the stated hypotheses: $S$ is nonempty, so
the least-upper-bound property ([[def-complete-ordered-field]]) supplies the
first and [[thm-infimum-property]] the second, and each is unique
([[lem-sup-unique]]).

This is the first place in this track where the least-upper-bound property
produces a **limit**. Everything on the sequences page held in any Archimedean
ordered field; the theorem below does not, and the sequence of decimal
truncations of $\sqrt 2$ inside $\mathbb{Q}$ is the standard witness of its
failure there.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals with range $S = \{x_k : k \in \mathbb{N}\}$, which is nonempty since $x_0 \in S$.

[L1] Least-upper-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded above has a unique supremum, which is an upper bound of it ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L2] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ that is bounded below has a unique infimum, which is a lower bound of it ([[thm-infimum-property]], [[lem-sup-unique]]).

[L3] Epsilon characterisation of the supremum: if $u$ is an upper bound of a nonempty $S$, then $u = \sup S$ exactly when for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L4] Epsilon characterisation of the infimum: if $\ell$ is a lower bound of a nonempty $T$, then $\ell = \inf T$ exactly when for every $\varepsilon > 0$ there is $t \in T$ with $t < \ell + \varepsilon$ ([[lem-inf-epsilon]]).

[L5] Monotonicity: nondecreasing means $x_j \le x_k$ whenever $j \le k$, and nonincreasing means $x_j \ge x_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L6] Convergence, tested against a real $\varepsilon$: $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and producing such a $K$ for every *real* $\varepsilon > 0$ establishes this, since every positive rational is a positive real ([[def-real-limit]], [[def-sequence]]).

[L7] Absolute value: for $c > 0$, $|t| < c$ exactly when $-c < t < c$ ([[lem-of-abs-value]]).

[L8] Bounded above and bounded below, for a subset of $\mathbb{R}$ ([[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 Assume $(x_k)$ is nondecreasing and $S$ is bounded above. Since $S$ is nonempty, $u := \sup S$ exists, is unique, and is an upper bound of $S$. [given, L1, L8]

1.2 Assume $(y_k)$ is nonincreasing with range $T$ bounded below. Since $T$ is nonempty, $\ell := \inf T$ exists, is unique, and is a lower bound of $T$. [given, L2, L8]

2.1 Every term satisfies $x_k \le u$, because $x_k \in S$ and $u$ is an upper bound of $S$. [step 1.1, L1]

2.2 Every term satisfies $\ell \le y_k$, because $y_k \in T$ and $\ell$ is a lower bound of $T$. [step 1.2, L2]

2.3 Let $\varepsilon > 0$ be an arbitrary real. By [L3] there is $s \in S$ with $u - \varepsilon < s$, and every element of $S$ is a term, so $s = x_K$ for some $K \in \mathbb{N}$. [step 1.1, L3, choose]

2.4 Let $\varepsilon > 0$ be an arbitrary real. By [L4] there is $t \in T$ with $t < \ell + \varepsilon$, and $t = y_L$ for some $L \in \mathbb{N}$. [step 1.2, L4, choose]

3.1 For every $k \ge K$ we have $x_K \le x_k$ by monotonicity, hence $u - \varepsilon < x_K \le x_k$. [step 2.3, L5]

3.2 For every $k \ge L$ we have $y_k \le y_L$ by monotonicity, hence $y_k \le y_L < \ell + \varepsilon$. [step 2.4, L5]

4.1 For every $k \ge K$: subtracting $u$ from $u - \varepsilon < x_k \le u$ gives $-\varepsilon < x_k - u \le 0 < \varepsilon$, so $|x_k - u| < \varepsilon$. [step 2.1, step 3.1, L7, algebra]

4.2 For every $k \ge L$: subtracting $\ell$ from $\ell \le y_k < \ell + \varepsilon$ gives $-\varepsilon < 0 \le y_k - \ell < \varepsilon$, so $|y_k - \ell| < \varepsilon$. [step 2.2, step 3.2, L7, algebra]

5.1 The real $\varepsilon > 0$ was arbitrary and $K$ was produced from it, so $(x_k)$ converges to $u = \sup S$, which is claim 1. [step 4.1, L6]

5.2 The real $\varepsilon > 0$ was arbitrary and $L$ was produced from it, so $(y_k)$ converges to $\ell = \inf T$, which is claim 2. [step 4.2, L6]

6.1 Both claims are established, so a nondecreasing sequence bounded above converges to the supremum of its range and a nonincreasing sequence bounded below converges to the infimum of its range. [step 5.1, step 5.2] ∎

## Remarks

- **Only one half is proved twice.** Claim 2 could instead be deduced from claim
  1 by reflection, since $(-y_k)$ is nondecreasing and bounded above and
  $\inf T = -\sup(-T)$ ([[thm-infimum-property]]). The direct argument is written
  out because it is no longer, and because it puts [[lem-inf-epsilon]] to work in
  the place it was proved for, rather than routing an infimum statement through a
  supremum statement and a sign change.

- **The limit is the supremum of the range, not merely some upper bound.** That
  identification is what [[lem-sup-epsilon]] supplies and it is the useful part
  of the theorem: it is how a limit is *computed* from a monotone construction,
  as in the recursive sequences of the examples page, rather than merely shown to
  exist.

- **Boundedness on the other side is automatic and is not a hypothesis.** A
  nondecreasing sequence is bounded below by $x_0$ ([[def-monotone-sequence]]),
  so "nondecreasing and bounded above" already means "nondecreasing and bounded";
  this is what makes [[cor-monotone-converges-iff-bounded]] an equivalence rather
  than a one-sided statement.

- **Without the hypothesis of boundedness the conclusion fails completely, and
  fails in a describable way**: a nondecreasing sequence that is not bounded
  above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]]), so a
  nondecreasing sequence either converges to the supremum of its range or runs
  away, with no third possibility.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

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

### `def-bounded-set` — definition — Lower bound, bounded below, bounded set

(statement provenance: literature-derived)

### Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

### `lem-sup-epsilon` — lemma — Epsilon characterisation of the supremum

(statement provenance: ai-altered)

### Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded above, and let $u$ be an
upper bound of $S$ ([[def-complete-ordered-field]]). Then

$$u = \sup S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } u - \varepsilon < s.$$

In words: among the upper bounds of $S$, the supremum is exactly the one that
cannot be lowered by any positive amount and still bound $S$.

### `lem-sup-unique` — lemma — Suprema and infima are unique

(statement provenance: literature-derived)

### Statement

Let $S \subseteq \mathbb{R}$. If $u_1$ and $u_2$ are both least upper bounds of
$S$ ([[def-complete-ordered-field]]), then $u_1 = u_2$. If $\ell_1$ and $\ell_2$
are both greatest lower bounds of $S$ ([[def-infimum]]), then
$\ell_1 = \ell_2$.

Consequently a set has at most one supremum and at most one infimum, and the
notations $\sup S$ and $\inf S$ denote single, well-determined real numbers
whenever they exist.

### `lem-inf-epsilon` — lemma — Epsilon characterisation of the infimum

(statement provenance: ai-altered)

### Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below, and let $\ell$ be a
lower bound of $S$ ([[def-bounded-set]]). Then

$$\ell = \inf S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } s < \ell + \varepsilon.$$

In words: among the lower bounds of $S$, the infimum is exactly the one that
cannot be raised by any positive amount and still bound $S$ from below.

### `thm-infimum-property` — theorem — Every nonempty set bounded below has an infimum

(statement provenance: literature-derived)

### Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below. Then $S$ has a
greatest lower bound in $\mathbb{R}$ ([[def-infimum]]), and it is given by

$$\inf S = -\sup(-S), \qquad \text{where } -S = \{-s : s \in S\}.$$

In particular the complete ordered field $\mathbb{R}$ has the
greatest-lower-bound property, which is therefore not an extra axiom: it is a
consequence of the least-upper-bound property.

### `lem-of-abs-value` — lemma — Basic properties of the absolute value

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## What to return

Read `thm-monotone-convergence` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
