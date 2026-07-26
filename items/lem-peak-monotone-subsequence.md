---
id: lem-peak-monotone-subsequence
kind: lemma
title: "Every real sequence has a monotone subsequence (the peak / rising-sun lemma)"
status: draft
origin: session
deps: [def-sequence, def-monotone-sequence, def-real-order, def-complete-ordered-field, def-ordered-field, lem-index-map-grows, thm-recursion, thm-well-ordering-principle, def-nat-order, thm-nat-linear-order, lem-nat-discrete]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4 and §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3 (monotone subsequence)"
      url: "https://www.jirka.org/ra/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
---

## Statement

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

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals. An index $n \in \mathbb{N}$ is called a *peak* when $x_m \le x_n$ for every $m \ge n$, and $P \subseteq \mathbb{N}$ denotes the set of peaks.

[L1] Recursion theorem: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g_0 = a$ and $g_{\sigma(j)} = f(g_j)$ ([[thm-recursion]]).

[L2] Well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L3] Consecutive comparisons suffice for an index map: if $n_j < n_{\sigma(j)}$ for every $j$ then $n$ is strictly increasing ([[lem-index-map-grows]]).

[L4] Consecutive comparisons suffice for monotonicity: if $y_{\sigma(j)} \le y_j$ for every $j$ then $(y_j)$ is nonincreasing, and if $y_j < y_{\sigma(j)}$ for every $j$ then $(y_j)$ is increasing; in both cases $(y_j)$ is monotone ([[def-monotone-sequence]]).

[L5] Subsequences: for strictly increasing $n$, the composite $(x_{n_j})$ is a subsequence of $(x_k)$ and is again a sequence of reals ([[def-sequence]]).

[L6] Order on $\mathbb{N}$: $m < n$ means $m \le n$ and $m \ne n$; the order is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]]).

[L7] Discreteness: $N < \sigma(N)$ for every $N \in \mathbb{N}$ ([[lem-nat-discrete]]).

[L8] Trichotomy in $\mathbb{R}$: for reals $s, t$ exactly one of $s < t$, $s = t$, $s > t$ holds, so the failure of $x_m \le x_n$ is $x_m > x_n$, and $x_n > x_n$ is impossible ([[def-real-order]], [[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** cases.

1.1 **Case (i).** Assume that for every $N \in \mathbb{N}$ there is a peak $n$ with $n > N$. [given, assume-case cofinal]

1.2 **Case (ii).** Assume instead that there is $N_0 \in \mathbb{N}$ such that no $n > N_0$ is a peak. [given, assume-case bounded]

2.1 In case (i) the set $P$ is nonempty, since the case hypothesis applied to $N = 0$ produces a peak, so $P$ has a least element $p_0$. [step 1.1, L2, choose]

2.2 In case (i), for each $p \in P$ the set $\{q \in P : q > p\}$ is nonempty, by the case hypothesis applied to $N = p$; let $f(p)$ be its least element. This defines $f : P \to P$ with $f(p) > p$ for every $p \in P$. [step 1.1, L2, construct]

2.3 In case (ii) put $A := \{n \in \mathbb{N} : n > N_0\}$; it is nonempty because $\sigma(N_0) > N_0$. [step 1.2, L7]

3.1 In case (i), the recursion theorem applied to the set $P$, the element $p_0$ and the function $f$ gives $g : \mathbb{N} \to P$ with $g_0 = p_0$ and $g_{\sigma(j)} = f(g_j)$; every $g_j$ is a peak and $g_j < g_{\sigma(j)}$ for every $j$. [step 2.1, step 2.2, L1]

3.2 In case (ii), each $n \in A$ satisfies $n > N_0$ and so is not a peak, meaning some $m \ge n$ has $x_m > x_n$; such an $m$ is distinct from $n$, since $x_n > x_n$ is impossible, hence $m > n > N_0$ and $m \in A$. The set of such $m$ is therefore a nonempty subset of $A$; let $h(n)$ be its least element. This defines $h : A \to A$ with $h(n) > n$ and $x_{h(n)} > x_n$. [step 2.3, L2, L6, L8, construct]

4.1 In case (i), $g$ is strictly increasing by [L3], so $(x_{g_j})$ is a subsequence of $(x_k)$. [step 3.1, L3, L5]

4.2 In case (i), for every $j$ the index $g_{\sigma(j)}$ satisfies $g_{\sigma(j)} \ge g_j$ and $g_j$ is a peak, so $x_{g_{\sigma(j)}} \le x_{g_j}$; hence $(x_{g_j})$ is nonincreasing, so monotone. [step 3.1, L4]

4.3 In case (ii), the recursion theorem applied to the set $A$, the element $\sigma(N_0)$ and the function $h$ gives $g' : \mathbb{N} \to A$ with $g'_0 = \sigma(N_0)$ and $g'_{\sigma(j)} = h(g'_j)$; thus $g'_j < g'_{\sigma(j)}$ and $x_{g'_j} < x_{g'_{\sigma(j)}}$ for every $j$. [step 2.3, step 3.2, L1]

5.1 In case (ii), $g'$ is strictly increasing by [L3], so $(x_{g'_j})$ is a subsequence of $(x_k)$, and it is increasing by [L4], so monotone. [step 4.3, L3, L4, L5]

6.1 Cases (i) and (ii) are literal negations of one another, so one of them holds; case (i) produces the monotone subsequence $(x_{g_j})$ and case (ii) the monotone subsequence $(x_{g'_j})$. Every sequence of reals therefore has a monotone subsequence. [step 4.1, step 4.2, step 5.1, cases: exhaustive by negation, cases-exhaustive] ∎

## Remarks

- **The two cases are a negation pair, so no completeness is used to split them.**
  Either peaks occur beyond every index, or they stop; nothing about $\mathbb{R}$
  enters the dichotomy. The only properties of the reals used anywhere above are
  trichotomy of the order, in step 3.2, and nothing else. In particular this
  lemma holds verbatim in any linearly ordered set, and it is
  [[cor-monotone-converges-iff-bounded]], not this lemma, that consumes the
  least-upper-bound property inside [[thm-bolzano-weierstrass]].

- **Which kind of monotone subsequence is produced depends on the case, and the
  statement deliberately does not say which.** Case (i) gives a nonincreasing
  subsequence and case (ii) a strictly increasing one. A sequence may satisfy
  case (i) with no increasing subsequence at all, for instance a constant
  sequence, so nothing stronger than "monotone" can be claimed uniformly.

- **Choice is not used.** Both recursions choose a *least* element, supplied by
  the well-ordering principle ([[thm-well-ordering-principle]]), so the functions
  $f$ and $h$ are defined outright rather than selected, and
  [[thm-recursion]] then produces the index map. This is why the lemma, and with
  it Bolzano-Weierstrass in $\mathbb{R}$, needs no form of the axiom of choice,
  in contrast with the usual argument for sequential compactness in a general
  metric space.
