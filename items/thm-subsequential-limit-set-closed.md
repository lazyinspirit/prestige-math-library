---
id: thm-subsequential-limit-set-closed
kind: theorem
title: "If each $y_j$ is a subsequential limit of $(x_k)$ and $y_j \\to y \\in \\mathbb{R}$, then $y$ is a subsequential limit of $(x_k)$"
status: published
origin: session
deps: [def-subsequential-limit, def-real-limit, def-sequence, thm-recursion, thm-well-ordering-principle, lem-index-map-grows, lem-of-triangle-inequality, lem-of-abs-value, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-rat-embeds-dense, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: true
short: "$\\operatorname{SL}(x)$ is closed"
proof_strategy: constructive
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.7)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $(y_j)$ be a
sequence of reals with

- $y_j \in \operatorname{SL}(x)$ for every $j \in \mathbb{N}$ ([[def-subsequential-limit]]), and
- $y_j \to y$ for some $y \in \mathbb{R}$ ([[def-real-limit]]).

Then $y \in \operatorname{SL}(x)$.

In words: the subsequential limit set of a real sequence contains the limit of
every convergent sequence of its own elements. When the topology of $\mathbb{R}$
arrives, that property is what it calls *sequential closedness*; that sequential
closedness is in turn equivalent to closedness for subsets of $\mathbb{R}$ is a
theorem there and not a matter of naming, and the half of that equivalence
running from sequential closedness to closedness spends the axiom of countable
choice. Here the property is stated and proved purely in terms of sequences, with
no choice principle and no topological notion used or needed.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals; a sequence $(y_j)$ of reals with $y_j \in \operatorname{SL}(x)$ for every $j$; and a real $y$ with $y_j \to y$.

[L1] Subsequential limits and convergence: $y_j \in \operatorname{SL}(x)$ means that some strictly increasing $m : \mathbb{N} \to \mathbb{N}$ has $x_{m_i} \to y_j$; convergence of a sequence of reals is the rational-$\varepsilon$ condition of [[def-real-limit]], and to *establish* convergence it suffices to produce a threshold for every real $\varepsilon > 0$, by the remark of [[def-sequence]] ([[def-subsequential-limit]], [[def-sequence]], [[def-real-limit]]).

[L2] Index maps: a strictly increasing $m$ satisfies $m_i \ge i$, and an index map with $n_j < n_{j+1}$ for every $j$ is strictly increasing ([[lem-index-map-grows]]).

[L3] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Recursion theorem: for a set $A$, an element $a \in A$ and $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g_0 = a$ and $g_{j+1} = f(g_j)$ ([[thm-recursion]]).

[L5] Absolute value and the triangle inequality: $|a + b| \le |a| + |b|$, and $|a| < c$ if and only if $-c < a < c$ for $c > 0$ ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

[L6] Canonical naturals and reciprocals: for a natural $q \ge 1$ the element $q \cdot 1_{\mathbb{R}}$ is positive and invertible, $\big(2(n+1)\big) \cdot 1_{\mathbb{R}} = 2 \big((n+1) \cdot 1_{\mathbb{R}}\big)$, and $0 < a \le b$ gives $0 < 1/b \le 1/a$; moreover for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L7] The order on $\mathbb{N}$ is total, so any two indices have a common upper bound ([[def-nat-order]], [[thm-nat-linear-order]]).

[L8] Below every positive real lies a positive rational, which is how a convergence hypothesis stated for rational $\varepsilon$ is instantiated at a real threshold ([[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** constructive.

1.1 For $n \in \mathbb{N}$ put $q_n := 2(n+1)$, a natural number $\ge 1$. Then $q_n \cdot 1_{\mathbb{R}} = 2\big((n+1) \cdot 1_{\mathbb{R}}\big) > 0$ is invertible, $1/q_n > 0$, and $1/q_n + 1/q_n = 2/q_n = 1/(n+1)$. [given, L6, algebra]

1.2 By hypothesis $(y_j)$ converges to $y$ and every $y_j$ lies in $\operatorname{SL}(x)$, so for each $j$ there is a strictly increasing $m$ with $x_{m_i} \to y_j$. [given, L1]

2.1 For every $n \in \mathbb{N}$ there is $k > n$ with $|x_k - y| < 1/(n+1)$. Indeed, take a rational $\varepsilon_1$ with $0 < \varepsilon_1 < 1/q_n$ and instantiate the convergence $y_j \to y$ at $\varepsilon_1$ to obtain an index $J$ with $|y_J - y| < \varepsilon_1 < 1/q_n$. Since $y_J \in \operatorname{SL}(x)$, fix a strictly increasing $m$ with $x_{m_i} \to y_J$, take a rational $\varepsilon_2$ with $0 < \varepsilon_2 < 1/q_n$ and an index $I$ with $|x_{m_i} - y_J| < \varepsilon_2$ for all $i \ge I$, and let $i$ be an index at least as large as both $I$ and $n+1$. Then $k := m_i$ satisfies $k = m_i \ge i \ge n + 1 > n$ and, by the triangle inequality applied to $x_k - y = (x_k - y_J) + (y_J - y)$, $|x_k - y| \le |x_k - y_J| + |y_J - y| < 1/q_n + 1/q_n = 1/(n+1)$. [step 1.1, step 1.2, L1, L2, L5, L7, L8]

3.1 Define $f : \mathbb{N} \to \mathbb{N}$ by letting $f(n)$ be the least element of the set $G_n := \{\, k \in \mathbb{N} : k > n \text{ and } |x_k - y| < 1/(n+1) \,\}$, which is nonempty by step 2.1. Then $f(n) > n$ and $|x_{f(n)} - y| < 1/(n+1)$ for every $n$. [step 2.1, L3, construct]

4.1 The recursion theorem applied to $\mathbb{N}$, the element $f(0)$ and the function $f$ gives $n : \mathbb{N} \to \mathbb{N}$ with $n_0 = f(0)$ and $n_{j+1} = f(n_j)$. Then $n_j < n_{j+1}$ for every $j$, so $n$ is strictly increasing and $n_j \ge j$; moreover $|x_{n_{j+1}} - y| < 1/(n_j + 1) \le 1/(j+1)$ for every $j$, using that $n_j + 1 \ge j + 1$. [step 3.1, L2, L4, L6]

5.1 The subsequence $(x_{n_j})$ converges to $y$: given a real $\varepsilon > 0$, take a natural $m \ge 1$ with $1/m < \varepsilon$; every $j \ge m$ satisfies $j \ge 1$, so step 4.1 applied at $j - 1$ gives $|x_{n_j} - y| < 1/j \le 1/m < \varepsilon$. Producing such a threshold for every real $\varepsilon > 0$ establishes convergence, and $n$ is strictly increasing, so $y \in \operatorname{SL}(x)$. [step 4.1, L1, L2, L6, discharge-construct] ∎

## Remarks

- **The diagonal is where the two approximations are balanced.** Step 2.1 spends
  half of the allowance $1/(n+1)$ on getting from $y$ to some $y_J$ and the other
  half on getting from $y_J$ to a term of $(x_k)$ arbitrarily far out. Splitting
  the allowance is what the natural number $q_n = 2(n+1)$ is for; nothing is
  halved in $\mathbb{R}$, so no divisibility fact about the field is needed.

- **Choice is not used**, for the same reason as in
  [[thm-limsup-is-greatest-subsequential-limit]]: the index map is built by taking
  least elements of explicitly described nonempty subsets of $\mathbb{N}$
  ([[thm-well-ordering-principle]]) and applying [[thm-recursion]]. The
  subsequences witnessing $y_J \in \operatorname{SL}(x)$ are used one at a time
  inside a single existence argument, never selected simultaneously for all $J$.

- **The hypothesis that $y$ be real is essential to the statement, not to the
  proof technique.** $\operatorname{SL}(x)$ is a set of real numbers by
  [[def-subsequential-limit]], so a limit outside $\mathbb{R}$ could not be
  asserted to lie in it. The extended set $\overline{\operatorname{SL}}(x)$ always
  contains its greatest and least elements
  ([[thm-limsup-is-greatest-subsequential-limit]],
  [[cor-liminf-is-least-subsequential-limit]]), which is the corresponding
  statement at the two ends.

- **Consequence: a nonempty $\operatorname{SL}(x)$ that is bounded above contains
  its supremum.** Write $\sigma := \sup \operatorname{SL}(x)$, a real number under
  those two hypotheses. For each $j$ the element $\sigma - 1/(j+1)$ fails to bound
  $\operatorname{SL}(x)$ above ([[lem-sup-epsilon]]), so some
  $y_j \in \operatorname{SL}(x)$ satisfies $\sigma - 1/(j+1) < y_j \le \sigma$, and
  such a sequence converges to $\sigma$ by the reciprocal Archimedean property and
  the squeeze ([[cor-archimedean-reciprocal]], [[thm-squeeze]]). The theorem then
  puts $\sigma$ in $\operatorname{SL}(x)$. This is a second route to the *finite*
  case of [[thm-limsup-is-greatest-subsequential-limit]], available only when the
  set is already known to be nonempty and bounded above; the route taken there is
  direct and covers the infinite cases too, which this one cannot.
