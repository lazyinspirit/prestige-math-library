---
id: cor-cauchy-reals-lub-complete
kind: corollary
title: "The Cauchy-sequence reals have the least-upper-bound property"
status: published
origin: session
deps: [def-complete-ordered-field, thm-reals-cauchy-complete, lem-cauchy-reals-archimedean, thm-reals-ordered-field, def-real-limit, def-real-order, lem-rat-embeds-dense]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

The Cauchy-sequence reals $\mathbb{R}_C$ have the **least-upper-bound property**:
every nonempty $S \subseteq \mathbb{R}_C$ that is bounded above has a least upper
bound $\sup S \in \mathbb{R}_C$. Hence, together with [[thm-reals-ordered-field]],
$\mathbb{R}_C$ is a **complete ordered field** ([[def-complete-ordered-field]]).

## Facts & Assumptions

**Given:** A nonempty set $S \subseteq \mathbb{R}_C$ bounded above by $U \in \mathbb{R}_C$.

[L1] Upper bound, least upper bound, and the least-upper-bound property ([[def-complete-ordered-field]]).

[L2] Every Cauchy sequence of reals converges to a real ([[thm-reals-cauchy-complete]]).

[L3] Convergence and the Cauchy condition for real sequences, quantified over rational $\varepsilon$; limits preserve $\le$ ([[def-real-limit]]).

[L4] $\mathbb{R}_C$ is Archimedean, so the reals $2^k$ are cofinal and $(b_0 - a_0)/2^k \to 0$ ([[lem-cauchy-reals-archimedean]]).

[L5] $\mathbb{R}_C$ is a totally ordered field: midpoints $(a + b)/2$, halving, and order arithmetic ([[thm-reals-ordered-field]], [[def-real-order]]).

[L6] The rationals embed densely; below any real lies a rational ([[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** direct.

1.1 Fix $s_0 \in S$ (possible as $S \ne \emptyset$); by [L6] choose a real $a_0 < s_0$, so $a_0$ is not an upper bound of $S$, and put $b_0 = U$, an upper bound of $S$. [given, L6, L5, L1]

2.1 Define $(a_k), (b_k)$ by bisection: given $a_k$ (not an upper bound) and $b_k$ (an upper bound), let $m = (a_k + b_k)/2$; if $m$ is an upper bound set $a_{k+1} = a_k, b_{k+1} = m$, otherwise set $a_{k+1} = m, b_{k+1} = b_k$. [step 1.1, L5]

3.1 An induction on $k$ shows each $b_k$ is an upper bound of $S$, each $a_k$ is not, $a_k \le a_{k+1} \le b_{k+1} \le b_k$, and $b_k - a_k = (b_0 - a_0)/2^k$. [step 2.1, L5, L1]

4.1 Given rational $\varepsilon > 0$, by [L4] choose $k$ with $(b_0 - a_0) < 2^k \hat\varepsilon$; then for all $j \ge k$, $b_j - a_j = (b_0 - a_0)/2^j \le (b_0 - a_0)/2^k < \hat\varepsilon$. [step 3.1, L4, L5]

5.1 For $j, l \ge k$ both $a_j, a_l, b_j, b_l$ lie in the nested interval $[a_k, b_k]$, so $|a_j - a_l| \le b_k - a_k < \hat\varepsilon$ and likewise $|b_j - b_l| < \hat\varepsilon$; hence $(a_k)$ and $(b_k)$ are Cauchy sequences of reals. [step 3.1, step 4.1, L3, L5]

6.1 By [L2] $(a_k)$ converges to a real $s$ and $(b_k)$ to a real $s'$; since $b_k - a_k \to 0$ by step 4.1, $s' = s$, with $a_k \le s \le b_k$ for all $k$. [step 4.1, step 5.1, L2, L3]

7.1 Every $t \in S$ satisfies $t \le b_k$ for all $k$ (each $b_k$ is an upper bound), and $b_k \to s$, so $t \le s$: thus $s$ is an upper bound of $S$. [step 3.1, step 6.1, L1, L3]

7.2 If $v$ is any upper bound of $S$, then for each $k$ some element of $S$ exceeds $a_k$ (as $a_k$ is not an upper bound), giving $a_k < v$; since $a_k \to s$, $s \le v$: thus $s$ is the least upper bound. [step 3.1, step 6.1, L1, L3]

8.1 Hence $s = \sup S$ exists in $\mathbb{R}_C$; as $S$ was an arbitrary nonempty bounded-above set, $\mathbb{R}_C$ has the least-upper-bound property and is a complete ordered field. [step 7.1, step 7.2, L1] ∎
