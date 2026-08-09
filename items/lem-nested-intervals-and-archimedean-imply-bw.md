---
id: lem-nested-intervals-and-archimedean-imply-bw
kind: lemma
title: "Nested intervals plus the Archimedean property imply Bolzano-Weierstrass, by repeated bisection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-completeness-properties, def-sequences-in-an-ordered-field, def-archimedean-field, thm-recursion, thm-well-ordering-principle, lem-index-map-grows, def-integer-power, lem-bernoulli-inequality, lem-of-inverse-positive, lem-of-naturals-positive, cor-of-one-positive, lem-of-add-order, lem-of-abs-value, thm-induction-principle, thm-nat-linear-order, def-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "J. F. Hall, Completeness of Ordered Fields"
      url: "https://arxiv.org/abs/1101.5652"
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field that is Archimedean ([[def-archimedean-field]]) and
has the nested interval property (NIP) of [[def-completeness-properties]]. Then
$F$ has the Bolzano-Weierstrass property (BW): every bounded sequence in $F$ has
a subsequence converging in $F$.

Say that a set $E \subseteq \mathbb{N}$ is **cofinal** when for every
$K \in \mathbb{N}$ there is $k \ge K$ with $k \in E$. The construction below
bisects a bracketing interval, keeping at each stage a half that the sequence
visits cofinally often, and reads the limit off (NIP).

## Facts & Assumptions

**Given:** An Archimedean ordered field $F$ with (NIP), and a bounded sequence $(x_k)$ in $F$, so that $|x_k| \le M_0$ for every $k$ and some $M_0 \in F$.

[L1] The properties (NIP) and (BW) of [[def-completeness-properties]].

[L2] Sequences in an ordered field: boundedness, $[a,b]_F = \{x \in F : a \le x \le b\}$ for $a \le b$, nesting, lengths tending to $0$ in $F$, convergence in $F$, and subsequences along a strictly increasing index map ([[def-sequences-in-an-ordered-field]]).

[L3] Archimedean property: for every $x \in F$ there is a natural number $n$ with $x < n \cdot 1_F$ ([[def-archimedean-field]]); and the canonical naturals satisfy $n \cdot 1_F > 0$ for $n \ge 1$ and $n \cdot 1_F \le m \cdot 1_F$ whenever $n \le m$ ([[lem-of-naturals-positive]]).

[L4] Recursion theorem ([[thm-recursion]]).

[L5] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] Consecutive comparisons suffice for strict increase: if $n_j < n_{j+1}$ for every $j$ then $n$ is strictly increasing ([[lem-index-map-grows]]).

[L7] Powers and Bernoulli: $a^0 = 1$ and $a^{n+1} = a^n a$ ([[def-integer-power]]); and $(1_F + x)^n \ge 1_F + n \cdot x$ for $x \ge -1_F$ ([[lem-bernoulli-inequality]]).

[L8] Order arithmetic: $0 < 1_F$ ([[cor-of-one-positive]]); adding a constant preserves the strict order and strict inequalities add ([[lem-of-add-order]]), the nonstrict forms following with the equality cases; $a > 0$ gives $a^{-1} > 0$, and $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); the order is total and transitive and sums and products of positives are positive ([[def-ordered-field]]).

[L9] Absolute value: $|u| \ge 0$, and $|u|$ equals $u$ or $-u$, so $|u| \le c$ whenever both $u \le c$ and $-u \le c$ ([[lem-of-abs-value]]).

[L10] Induction principle ([[thm-induction-principle]]) and totality of the order on $\mathbb{N}$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** constructive.

1.1 Since $M_0 \ge |x_0| \ge 0$, the element $M := M_0 + 1_F$ satisfies $M > 0$ and $|x_k| \le M_0 < M$ for every $k$, so $-M \le x_k \le M$ and $x_k \in [-M, M]_F$ for every $k$. [L2, L8, L9, construct]

1.2 Writing $m(a,b) := (a + b) \cdot (2 \cdot 1_F)^{-1}$, define $f : F \times F \to F \times F$ by $f(a,b) := (a, m(a,b))$ when $a \le b$ and the set of $k$ with $x_k \in [a, m(a,b)]_F$ is cofinal, and $f(a,b) := (m(a,b), b)$ otherwise; the recursion theorem applied to $F \times F$, the element $(-M, M)$ and $f$ gives a unique $g : \mathbb{N} \to F \times F$ with $g(0) = (-M, M)$ and $g(n+1) = f(g(n))$, and we write $g(n) = (a_n, b_n)$ and $I_n := [a_n, b_n]_F$. [L4, L8, construct]

2.1 By induction on $n$, all of the following hold: $a_n \le b_n$; $b_n - a_n = 2M \cdot ((2 \cdot 1_F)^n)^{-1}$; $I_{n+1} \subseteq I_n$; and the set $E_n := \{\, k : x_k \in I_n \,\}$ is cofinal. For $n = 0$ this is step 1.1 together with $b_0 - a_0 = 2M$ and $(2 \cdot 1_F)^0 = 1_F$. For the step, put $m := m(a_n,b_n)$, so that $a_n \le m \le b_n$ and $m - a_n = b_n - m = (b_n - a_n) \cdot (2 \cdot 1_F)^{-1}$; if the first clause of $f$ applies then $I_{n+1} = [a_n, m]_F$ has the four properties by construction, and otherwise there is $K$ with $x_k \notin [a_n, m]_F$ for all $k \ge K$, so every $k \ge K$ in the cofinal set $E_n$ has $m < x_k \le b_n$ and hence lies in $\{k : x_k \in [m, b_n]_F\}$, which is therefore cofinal as well. [step 1.1, step 1.2, L2, L7, L8, L9, L10]

3.1 The lengths $b_n - a_n$ tend to $0$ in $F$: given $\varepsilon > 0$, the element $2M \varepsilon^{-1}$ is positive, so [L3] supplies $n \ge 1$ with $2M\varepsilon^{-1} < n \cdot 1_F$, and then for every $p \ge n$ Bernoulli at $x = 1_F$ gives $(2 \cdot 1_F)^p \ge 1_F + p \cdot 1_F > p \cdot 1_F \ge n \cdot 1_F > 2M\varepsilon^{-1} > 0$, whence $((2 \cdot 1_F)^p)^{-1} < \varepsilon (2M)^{-1}$ and $b_p - a_p = 2M \cdot ((2 \cdot 1_F)^p)^{-1} < \varepsilon$. [step 2.1, L3, L7, L8]

3.2 Since each $E_j$ is cofinal, for every $j$ and every $n$ the set $\{\, k \in \mathbb{N} : k > n \text{ and } x_k \in I_{j+1} \,\}$ is nonempty and so has a least element; the recursion theorem applied to $\mathbb{N} \times \mathbb{N}$, the element $(0,0)$ and the map sending $(j,n)$ to $(j+1, \min\{k : k > n, \ x_k \in I_{j+1}\})$ therefore yields indices $n_0 = 0$ and $n_{j+1} = \min\{k : k > n_j, \ x_k \in I_{j+1}\}$. [step 2.1, L4, L5, construct]

4.1 The sequence $(I_n)$ is nested with lengths tending to $0$, so (NIP) supplies an element $c$ lying in $I_n$ for every $n$. [step 2.1, step 3.1, L1, L2]

4.2 Since $n_{j} < n_{j+1}$ for every $j$, the map $j \mapsto n_j$ is strictly increasing and $(x_{n_j})$ is a subsequence of $(x_k)$; moreover $x_{n_j} \in I_j$ for every $j$, the case $j = 0$ being $x_0 \in I_0$ from step 1.1. [step 3.2, L2, L6]

5.1 For every $j$, both $x_{n_j}$ and $c$ lie in $I_j$, so $x_{n_j} - c \le b_j - a_j$ and $c - x_{n_j} \le b_j - a_j$, whence $|x_{n_j} - c| \le b_j - a_j$. [step 4.1, step 4.2, L2, L8, L9]

6.1 Given $\varepsilon > 0$ in $F$, step 3.1 supplies $J$ with $b_j - a_j < \varepsilon$ for all $j \ge J$, so $|x_{n_j} - c| < \varepsilon$ for all $j \ge J$; hence $x_{n_j} \to c$ in $F$. [step 3.1, step 5.1, L2, L8]

7.1 An arbitrary bounded sequence in $F$ has therefore been given a subsequence converging in $F$, so $F$ has (BW). [step 6.1, L1, discharge-construct] ∎

## Remarks

- **No choice is used.** Both recursions are applications of
  [[thm-recursion]] to functions defined outright: the bisection rule keeps the
  left half exactly when that half is visited cofinally often, and the index
  $n_{j+1}$ is the *least* admissible one, supplied by
  [[thm-well-ordering-principle]] rather than chosen.

- **Where each hypothesis enters.** (NIP) is used once, at step 4.1. The
  Archimedean property is used once, at step 3.1, and only to know that the
  halved lengths get below every positive element of $F$. Without it the
  bisection still runs and still produces nested intervals, but their lengths
  need not tend to $0$ in $F$, and (NIP) as stated would not apply.

- **The bracketing interval is widened by $1_F$** in step 1.1 so that $M > 0$
  even when the sequence is identically $0$; the argument of step 3.1 divides by
  $2M$ and would otherwise have to treat that case separately.
