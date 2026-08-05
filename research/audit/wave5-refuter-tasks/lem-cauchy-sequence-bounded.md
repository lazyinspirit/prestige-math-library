# Adversarial proof reading — `lem-cauchy-sequence-bounded`

## The item under review, in full

`items/lem-cauchy-sequence-bounded.md`

```markdown
---
id: lem-cauchy-sequence-bounded
kind: lemma
title: "Every Cauchy sequence of reals is bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-limit, def-sequence, lem-finite-set-has-max, lem-of-triangle-inequality, def-max-min, lem-rat-embeds-dense, lem-of-add-order, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.11(a))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1 (Prop. 6.1.17)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Statement

Every Cauchy sequence of reals is bounded: if $(x_k)$ is a Cauchy sequence
([[def-real-limit]]) then there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$ ([[def-sequence]]).

This is the real-number counterpart of the lemma proving the same statement for
Cauchy sequences of rationals inside $\mathbb{Q}$, and the argument is the same
one: the Cauchy condition at a single value of $\varepsilon$
confines all but finitely many terms, and the finitely many exceptions are
handled by a maximum.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x_k)$ of reals.

[A1] Cauchy condition: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$ ([[def-real-limit]]).

[L1] Triangle inequality: $|x| = |(x - y) + y| \le |x - y| + |y|$ for all reals $x, y$ ([[lem-of-triangle-inequality]]).

[L2] Every nonempty finite list of reals has a maximum, so $\max\{a_0, \dots, a_n\}$ is a well-determined real that dominates each listed value ([[lem-finite-set-has-max]], [[def-max-min]]).

[L3] The rational $1$ is positive, and the embedding of $\mathbb{Q}$ in $\mathbb{R}$ carries it to $1 \in \mathbb{R}$, so $\varepsilon = 1$ is an admissible test value in [A1] ([[lem-rat-embeds-dense]]).

[L4] Order arithmetic in $\mathbb{R}$: translation invariance, $a < b \Rightarrow a + c < b + c$ ([[lem-of-add-order]]); and the mixed transitivity $a \le b < c \Rightarrow a < c$, immediate from the reading of $a \le b$ as "$a < b$ or $a = b$" together with transitivity of $<$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L5] The order on $\mathbb{N}$ is total, so every index satisfies $k \le K$ or $k \ge K$ ([[thm-nat-linear-order]]).

[L6] A sequence of reals is bounded when some $M \in \mathbb{R}$ satisfies $|x_k| \le M$ at every index ([[def-sequence]]).

## Proof

**Proof technique:** direct.

1.1 Apply [A1] with the rational test value $\varepsilon = 1$: fix $K \in \mathbb{N}$ such that $|x_k - x_l| < 1$ for all $k, l \ge K$. [A1, L3, choose]

1.2 For all reals $x_k$ and $x_K$ the triangle inequality gives $|x_k| \le |x_k - x_K| + |x_K|$. [L1]

2.1 For every $k \ge K$: $|x_k - x_K| < 1$ by step 1.1, and adding $|x_K|$ to both sides then combining with step 1.2 gives $|x_k| < |x_K| + 1$. [step 1.1, step 1.2, L4]

2.2 Define $M := \max\{\,|x_0|, |x_1|, \dots, |x_K|, |x_K| + 1\,\}$, the maximum of a nonempty finite list of reals, which exists by [L2]. [step 1.1, L2, choose]

3.1 For every $k \le K$: $|x_k|$ is one of the listed values, so $|x_k| \le M$. [step 2.2, L2]

3.2 For every $k \ge K$: $|x_k| < |x_K| + 1 \le M$, since $|x_K| + 1$ is one of the listed values. [step 2.1, step 2.2, L2]

4.1 Every index satisfies $k \le K$ or $k \ge K$, so $|x_k| \le M$ for every $k \in \mathbb{N}$ and $(x_k)$ is bounded. [step 3.1, step 3.2, L5, L6] ∎

## Remarks

- **One value of $\varepsilon$ suffices, and $\varepsilon = 1$ is not special.**
  Any single positive rational would do; what matters is that the Cauchy
  condition confines all terms from some index onward to within a fixed distance
  of one term, after which only finitely many terms remain, and a finite list of
  reals has a maximum ([[lem-finite-set-has-max]]). This is the same division of
  labour as in [[lem-convergent-implies-bounded]].

- **The converse is false.** A bounded sequence need not be Cauchy: the
  alternating sequence of [[fs-bounded-implies-convergent]] is bounded and, being
  divergent, is not Cauchy ([[lem-convergent-implies-cauchy]] would otherwise
  make it convergent by [[thm-cauchy-criterion-via-lub]]). Boundedness is
  strictly weaker, and what it does yield is a convergent *subsequence*
  ([[thm-bolzano-weierstrass]]).

- **No completeness is used.** The argument runs in any ordered field, and it is
  used here as the first of the three steps by which the least-upper-bound
  property is converted into Cauchy completeness in
  [[thm-cauchy-criterion-via-lub]].

- The rational counterpart, proved on the Cauchy-construction page, is
  [[lem-cauchy-bounded]]. It is the house-style exemplar for this argument, and
  nothing here depends on it, since the two lemmas live in different fields.
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

### `lem-finite-set-has-max` — lemma — Every nonempty finite set of reals has a maximum and a minimum

(statement provenance: ai-altered)

### Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

### `lem-of-triangle-inequality` — lemma — The triangle inequality

(statement provenance: literature-derived)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$|x + y| \le |x| + |y|.$$

### `def-max-min` — definition — Maximum and minimum of a set

(statement provenance: ai-altered)

### Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

### `lem-rat-embeds-dense` — lemma — The rationals embed densely in the reals

(statement provenance: ai-altered)

### Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

### `lem-of-add-order` — lemma — Order is preserved by adding a constant and by adding inequalities

(statement provenance: ai-altered)

### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

### `thm-nat-linear-order` — theorem — $\\le$ is a linear order on $\\mathbb{N}$

(statement provenance: ai-altered)

### Statement

The relation $\le$ on $\mathbb{N}$, where $m \le n \iff \exists k\ (m + k = n)$ ([[def-nat-order]]), is a linear (total) order: reflexive, antisymmetric, transitive, and total.

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

Read `lem-cauchy-sequence-bounded` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
