# Adversarial proof reading — `thm-unordered-summability-of-real-families`

## The item under review, in full

`items/thm-unordered-summability-of-real-families.md`

```markdown
---
id: thm-unordered-summability-of-real-families
kind: theorem
title: "Assuming countable choice, a real family is summable as a finite-subset net if and only if it has at most countable support and its nonzero terms are absolutely summable; its sum is independent of the enumeration"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-finite-subset-net-for-unordered-real-summation, def-absolute-and-conditional-convergence, thm-dirichlet-rearrangement, thm-countable-union-of-countable, def-countable-choice, lem-positive-and-negative-parts, thm-nonnegative-series-bounded-partial-sums, cor-archimedean-reciprocal, def-sum-over-a-finite-index-set]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Unconditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unconditional_convergence"
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
pipeline_run: null
---

## Statement

**Assume countable choice.** Let $a:I\to\mathbb R$ and $S=\{i:a_i\ne0\}$. Then the finite-subset net of $a$ is convergent if and only if $S$ is at most countable and its finite enumeration, or any bijective enumeration $e:\mathbb N\to S$ when $S$ is infinite, gives an absolutely convergent series of nonzero terms. Its net limit equals that finite sum or series sum and is independent of the enumeration.

## Facts & Assumptions

**Given:** A real family $a:I\to\mathbb R$ and its finite-subset net.

[L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]]).

[L2] A nonnegative series converges exactly when its partial sums are bounded above, and an absolutely convergent series is unchanged by a bijective rearrangement ([[thm-nonnegative-series-bounded-partial-sums]], [[thm-dirichlet-rearrangement]]).

[L3] Positive and negative parts are nonnegative and $|a_i|=a_i^++a_i^-$ ([[lem-positive-and-negative-parts]]).

[L4] For every positive real $t$ there is $n\ge1$ with $1/n<t$ ([[cor-archimedean-reciprocal]]).

[L5] A real series is absolutely convergent exactly when the series of absolute values converges; sums over finite index sets are invariant under their enumerations ([[def-absolute-and-conditional-convergence]], [[def-sum-over-a-finite-index-set]]).


## Proof

**Proof technique:** direct.

1.1 Suppose the finite-subset net converges to $L$. There are a finite $F_0\subseteq I$ and $C>0$ such that $|\sum_{i\in F}a_i|\le C$ for every finite $F\supseteq F_0$. If $P\subseteq I\setminus F_0$ is finite and all $a_i$ for $i\in P$ are positive, then $$ \sum_{i\in P}a_i =\sum_{i\in F_0\cup P}a_i-\sum_{i\in F_0}a_i \le C+\left|\sum_{i\in F_0}a_i\right|. $$ The same argument applied to finite sets of negative terms bounds their absolute-value sums. [L3, L5]

1.2 Conversely, let an enumeration of $S$ have absolutely convergent series sum $s$. Given $\varepsilon>0$, choose a finite initial segment $F_0$ whose remaining absolute series sum is below $\varepsilon$. For every finite $F\supseteq F_0$, $$ \left|\sum_{i\in F}a_i-s\right| \le \sum_{i\in S\setminus F}|a_i| <\varepsilon. $$ Indices outside $S$ contribute zero, so the finite-subset net converges to $s$. [L2, L5]

2.1 For each $n\ge1$, the sets $\{i\notin F_0:a_i^+\ge1/n\}$ and $\{i\notin F_0:a_i^-\ge1/n\}$ are finite, since a finite subset with more than $nC'$ members would have sum exceeding the bound $C'$. Every nonzero real lies in one of these level sets for some $n$ by [L4], so [L1] makes $S$ at most countable. [step 1.1, L1, L3, L4]

2.2 With any enumeration of $S$, the positive and negative partial sums are bounded by step 1.1, hence converge by [L2]. Thus the series of absolute values converges by [L3], so the enumerated nonzero terms form an absolutely convergent series. [step 1.1, L2, L3]

3.1 Any two infinite enumerations differ by a bijective rearrangement, so [L2] gives the same sum; finite enumerations give the same finite-set sum by [L5]. This proves both directions and enumeration independence. [step 2.2, step 1.2, L2, L5] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `ex-finite-subset-net-for-unordered-real-summation` — example — Finite partial sums of a real family form a net directed by inclusion

(statement provenance: literature-derived)

### Example

For a family $(a_i)_{i\in I}$ of real numbers, let $\operatorname{Fin}(I)$ be the finite subsets of $I$, ordered by inclusion, and put $s_F=\sum_{i\in F}a_i$. Then $(s_F)_{F\in\operatorname{Fin}(I)}$ is the **finite-subset net**. The family is **summable with sum $s$** when this net converges to $s$ in the usual topology of $\mathbb R$.

### `def-absolute-and-conditional-convergence` — definition — Absolutely convergent and conditionally convergent series, and the general starting index

(statement provenance: untagged)

### Definition

Let $(a_k)$ be a sequence of reals, with series $\sum a_k$ and partial sums
$s_n = \sum_{k<n} a_k$ as in [[def-series]], and let $|x|$ be the absolute value
([[def-abs-value]]).

**Absolute convergence.** The series $\sum a_k$ **converges absolutely** when the
series $\sum |a_k|$ converges ([[def-series]]). Since $|a_k| \ge 0$ for every $k$
([[lem-of-abs-value]]), this is a statement about a series of nonnegative terms.

**Conditional convergence.** The series $\sum a_k$ **converges conditionally**
when it converges ([[def-series]], [[def-real-limit]]) and does *not* converge
absolutely.

So a convergent series is exactly one of the two: absolutely convergent or
conditionally convergent, according as $\sum |a_k|$ converges or not.

**One implication is already proved, and is not reproved anywhere on this page.**
[[lem-absolute-convergence-implies-convergence]] states that if $\sum |a_k|$
converges then $\sum a_k$ converges. That lemma was coined and proved on the
previous page of this track, where the root and ratio tests need it; this page
names it and builds on it. In particular an absolutely convergent series is a
convergent series, so the two words above really do partition the convergent
series, and "conditionally convergent" is not vacuous by accident: the alternating
harmonic series is a witness, and the witness is exhibited in
[[fs-convergent-implies-absolutely-convergent]].

**General starting index.** Let $m \in \mathbb{N}$ and let $(a_k)_{k \ge m}$ be a
family from $m$ ([[def-series]]). The series $\sum_{k \ge m} a_k$ **converges
absolutely** when $\sum_{k \ge m} |a_k|$ converges, and **converges
conditionally** when it converges and does not converge absolutely. By
[[def-series]] both statements are the corresponding statements for the shifted
sequence $j \mapsto a_{j+m}$, so nothing new is being defined and every result
below transfers to a general starting index in the same way, exactly as
[[lem-absolute-convergence-implies-convergence]] already records for the one
implication it proves.

### `thm-dirichlet-rearrangement` — theorem — Dirichlet's rearrangement theorem: an absolutely convergent series converges unconditionally, and every rearrangement of it has the same sum

(statement provenance: untagged)

### Statement

Let $(a_k)$ be a sequence of reals whose series converges absolutely
([[def-absolute-and-conditional-convergence]]), and let
$\sigma : \mathbb{N} \to \mathbb{N}$ be a bijection
([[def-injection-surjection-bijection]]). Then:

1. $\sum |a_{\sigma(k)}|$ converges, with
   $\sum_{k=0}^{\infty} |a_{\sigma(k)}| = \sum_{k=0}^{\infty} |a_k|$; that is,
   the rearranged series again converges absolutely;
2. $\sum a_{\sigma(k)}$ converges, with
   $$\sum_{k=0}^{\infty} a_{\sigma(k)} \;=\; \sum_{k=0}^{\infty} a_k .$$

Consequently an absolutely convergent series converges unconditionally
([[def-rearrangement-and-unconditional-convergence]]).

The engine of the proof is a single statement about series of **nonnegative**
terms: for those, the sum is the supremum of the partial sums
([[thm-nonnegative-series-bounded-partial-sums]]), a quantity that cannot see the
order of the terms. The general case is reduced to that one through the positive
and negative parts ([[lem-positive-and-negative-parts]]), which is why no
manipulation of signed finite sums over shuffled index sets occurs anywhere below.

### `thm-countable-union-of-countable` — theorem — Countable unions of at most countable sets, assuming $\\mathrm{AC}_\\omega$

(statement provenance: ai-altered)

### Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let
$(A_n)_{n \in \mathbb{N}}$ be a family of at most countable sets
([[def-countable]]) indexed by $\mathbb{N}$. Then

$$U = \bigcup_{n \in \mathbb{N}} A_n$$

is at most countable.

**The hypothesis $\mathrm{AC}_\omega$ is not decoration and it is not removable.**
It is spent at exactly one step, step 3.1 below, where one surjection
$\mathbb{N} \to A_n$ is selected for every $n$ at once. Each $A_n$ has such
surjections, in general many of them, and the countability assumption provides no
rule for singling one out. Without some choice principle the theorem is not
available at all: ZF alone does not prove it, **conditionally on the consistency
of ZF**, as recorded among this page's false statements and discussed in the
remarks below, where that item is named and linked. The
consistency hypothesis is not a formality and cannot be dropped: the separation
rests on an external independence result that this library quotes rather than
proves, and it cannot be stated without it.

### `def-countable-choice` — definition — The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)

(statement provenance: ai-altered)

### Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

### `lem-positive-and-negative-parts` — lemma — Positive and negative parts: $a_k = a_k^{+} - a_k^{-}$ and $|a_k| = a_k^{+} + a_k^{-}$; a series converges absolutely iff both $\\sum a_k^{+}$ and $\\sum a_k^{-}$ converge, and for a conditionally convergent series both diverge to $+\\infty$

(statement provenance: untagged)

### Statement

Let $(a_k)$ be a sequence of reals ([[def-series]]) and define its **positive
part** and **negative part** by

$$a_k^{+} \;:=\; \frac{|a_k| + a_k}{2}, \qquad a_k^{-} \;:=\; \frac{|a_k| - a_k}{2} \qquad (k \in \mathbb{N}),$$

with $|x|$ the absolute value ([[def-abs-value]]). Then:

1. $a_k^{+} = \max\{a_k, 0\}$ and $a_k^{-} = \max\{-a_k, 0\}$ ([[def-max-min]]);
   in particular $a_k^{+} \ge 0$ and $a_k^{-} \ge 0$, and
   $$a_k = a_k^{+} - a_k^{-}, \qquad |a_k| = a_k^{+} + a_k^{-} .$$
2. $\sum a_k$ converges absolutely
   ([[def-absolute-and-conditional-convergence]]) **if and only if** both
   $\sum a_k^{+}$ and $\sum a_k^{-}$ converge.
3. If $\sum a_k$ converges conditionally, then neither $\sum a_k^{+}$ nor
   $\sum a_k^{-}$ converges, and the partial sums of each diverge to $+\infty$
   ([[def-divergence-to-infinity]]).

Claim 3 is the engine of the rearrangement theory: a conditionally convergent
series carries an unlimited supply of positive terms and an unlimited supply of
negative ones, and its convergence is nothing but a cancellation between them.

### `thm-nonnegative-series-bounded-partial-sums` — theorem — A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum

(statement provenance: untagged)

### Statement

Let $(a_k)$ be a sequence of reals with $a_k \ge 0$ for every $k \in \mathbb{N}$,
let $s_n = \sum_{k<n} a_k$ be its partial sums and let
$S = \{\, s_n : n \in \mathbb{N} \,\}$ be the range of $(s_n)$ ([[def-series]]).
Then:

1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \ge 0$ for every
   $n$;
2. $\sum a_k$ converges **if and only if** $S$ is bounded above
   ([[def-bounded-set]]), and in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; \sup S ,$$
   so in particular $s_n \le \sum_{k=0}^{\infty} a_k$ for every $n$;
3. if $S$ is not bounded above then $s_n \to +\infty$
   ([[def-divergence-to-infinity]]) and $\sum a_k$ diverges.

This is the theorem that makes the nonnegative theory work: for terms of one
sign, convergence is a boundedness question and no candidate limit is ever
needed. Every comparison test on this page is an application of it.

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

### `def-sum-over-a-finite-index-set` — definition — The sum $\\sum_{i \\in S} a_i$ over a finite index set, and its product form

(statement provenance: ai-altered)

### Definition

Let $S$ be a finite set, $n := \lvert S\rvert$ ([[def-finite-cardinality]]), and
let $a : S \to \mathbb{R}$ or $a : S \to \mathbb{N}$, written $a_i$ for $a(i)$.
Choose a bijection $\varphi : n \to S$, which exists because $S \approx n$
([[def-equinumerous]]), and set

$$\sum_{i \in S} a_i := \sum_{k<n} a_{\varphi(k)}, \qquad \prod_{i \in S} a_i := \prod_{k<n} a_{\varphi(k)},$$

the right-hand sides being the iterated operations of [[def-finite-sum]] when the
values are real and of [[def-nat-finite-sum-and-product]] when they are natural.

**Independence of the enumeration, which is the content of the definition.** Let
$\varphi, \psi : n \to S$ be two bijections. Then $\pi := \varphi^{-1} \circ \psi$
is a bijection $n \to n$ ([[def-injection-surjection-bijection]]), and
$a_{\psi(k)} = a_{\varphi(\pi(k))}$ for every $k < n$. Applying
[[lem-finite-sum-permutation-invariance]] to the list $c_k := a_{\varphi(k)}$
gives

$$\sum_{k<n} a_{\psi(k)} = \sum_{k<n} c_{\pi(k)} = \sum_{k<n} c_k = \sum_{k<n} a_{\varphi(k)},$$

and identically for products. So the value does not depend on which bijection is
used, and $\sum_{i \in S} a_i$ is a single well-determined element.

**No choice principle is involved.** The definition does not select an
enumeration: it asserts that all enumerations give the same value, and that value
is what the notation names. Only one bijection is ever produced at a time, from a
set already known to be nonempty.

**Three clauses, recorded here because the page uses them constantly.**

**(a) The bridge to the old notation.** Taking $S = n$ and $\varphi = \mathrm{id}_n$,
which is legitimate since $\lvert n\rvert = n$, gives

$$\sum_{i \in n} a_i = \sum_{k<n} a_k, \qquad \prod_{i \in n} a_i = \prod_{k<n} a_k .$$

So the new notation **extends** the sum over an initial segment rather than
competing with it, and every law proved for the latter is available for the
former whenever the index set is a natural number.

**(b) Reindexing along a bijection.** If $h : T \to S$ is a bijection of finite
sets, then $\sum_{j \in T} a_{h(j)} = \sum_{i \in S} a_i$, and likewise for
products. Indeed $\lvert T\rvert = \lvert S\rvert = n$ by transport
([[def-finite-cardinality]]), and if $\varphi : n \to S$ is a bijection then
$h^{-1} \circ \varphi : n \to T$ is one, so
$\sum_{j \in T} a_{h(j)} = \sum_{k<n} a_{h(h^{-1}(\varphi(k)))} = \sum_{k<n} a_{\varphi(k)} = \sum_{i \in S} a_i$.

**(c) The empty index set and a constant summand.** $\lvert\varnothing\rvert = 0$,
so $\sum_{i \in \varnothing} a_i = 0$ and $\prod_{i \in \varnothing} a_i = 1$ by
the base clause of the recursion. And for a constant $c$, clause (a) together
with the constant clause of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]
in $\mathbb{N}$, or clause 2 of [[lem-finite-sum-laws]] in $\mathbb{R}$, gives

$$\sum_{i \in S} c = \lvert S\rvert \cdot c \quad (c \in \mathbb{N}), \qquad \sum_{i \in S} c = \iota(\lvert S\rvert)\cdot c \quad (c \in \mathbb{R}),$$

the second with $\iota$ written out because $\lvert S\rvert$ is a natural number
and not an element of $\mathbb{R}$ ([[def-canonical-natural]]).

## What to return

Read `thm-unordered-summability-of-real-families` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
