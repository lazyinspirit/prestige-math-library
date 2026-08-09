---
id: thm-heine-cantor-r
kind: theorem
title: "Heine-Cantor in $\\mathbb{R}$: a continuous real function on a compact subset of $\\mathbb{R}$ is uniformly continuous, proved $\\mathbb{R}$-natively from sequential compactness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-continuity-real, def-continuity-real, lem-real-and-metric-notions-agree, thm-sequential-criterion-for-continuity, thm-compact-iff-sequentially-compact-r, def-open-cover-r, def-real-limit, def-sequence, lem-index-map-grows, def-countable-choice, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-triangle-inequality, lem-of-abs-value, lem-rat-embeds-dense, def-ordered-field]
justified_by: []
aliases: [thm-uniform-continuity-on-compact-r]
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, cex-x-squared-is-not-uniformly-continuous-on-r]
landmark: true
short: "Heine-Cantor in R"
proof_strategy: contradiction
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
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.19)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be compact ([[def-open-cover-r]]) and let
$f : K \to \mathbb{R}$ be continuous on $K$ ([[def-continuity-real]]). Then $f$
is uniformly continuous on $K$ ([[def-uniform-continuity-real]]).

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-heine-cantor-metric]], proved there from the cover machinery of
metric spaces; the proof below is $\mathbb{R}$-native and runs through
[[thm-compact-iff-sequentially-compact-r]], which is order-based. That the two
statements are the same statement in two vocabularies is
[[lem-real-and-metric-notions-agree]], clauses 1, 2 and 5, immediately above.

**The choice cost, named.** The proof invokes the axiom of countable choice
([[def-countable-choice]]) exactly once, at step 3.1, to select one bad pair of
points from each of countably many nonempty sets. The backward implication of
[[thm-compact-iff-sequentially-compact-r]] also spends countable choice, and
that item names its own uses; the forward implication used here, from compact to
sequentially compact, does not. No claim is made that the axiom is necessary
for either.

## Facts & Assumptions

**Given:** A compact set $K \subseteq \mathbb{R}$ and a function $f : K \to \mathbb{R}$ continuous on $K$.

[L1] Uniform continuity on $K$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in K$ with $|x - x'| < \delta$ satisfy $|f(x) - f(x')| < \varepsilon$. Its negation: there is a real $\varepsilon_0 > 0$ such that for every real $\delta > 0$ some pair $x, x' \in K$ has $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$ ([[def-uniform-continuity-real]], [[def-ordered-field]]).

[L2] A compact subset of $\mathbb{R}$ is sequentially compact: every sequence with all terms in $K$ has a subsequence converging to a point of $K$ ([[thm-compact-iff-sequentially-compact-r]], [[def-open-cover-r]], [[def-sequence]], [[def-real-limit]]).

[L3] Countable choice: for a family $(P_k)_{k \in \mathbb{N}}$ of nonempty sets there is a function on $\mathbb{N}$ picking an element of each ([[def-countable-choice]]).

[L4] A strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]], [[def-sequence]]).

[L5] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$; and $0 < s \le t$ implies $1/t \le 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L6] Sequential criterion, the choice-free direction: if $f$ is continuous at $p \in K$ and $(z_j)$ has terms in $K$ with $z_j \to p$, then $f(z_j) \to f(p)$ ([[thm-sequential-criterion-for-continuity]], [[def-continuity-real]]).

[L7] Triangle inequality and absolute value: $|u + v| \le |u| + |v|$, $|{-u}| = |u|$, $|u| \ge 0$ ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

[L8] Convergence of real sequences is tested at rational $\varepsilon > 0$, and below every positive real lies a positive rational, so the test may equally be run at every real $\varepsilon > 0$ ([[def-real-limit]], [[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $f$ is not uniformly continuous on $K$. By [L1] fix a real $\varepsilon_0 > 0$ such that for every real $\delta > 0$ there are $x, x' \in K$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$. [L1, assume-contra]

2.1 For $k \in \mathbb{N}$ put $P_k := \{\, (x,x') \in K \times K \ : \ |x - x'| < 1/(k+1) \text{ and } |f(x) - f(x')| \ge \varepsilon_0 \,\}$. Since $1/(k+1) > 0$, step 1.1 makes every $P_k$ nonempty. [step 1.1, L5]

3.1 By [L3] applied to the family $(P_k)_{k \in \mathbb{N}}$ fix a function $k \mapsto (x_k, x'_k)$ with $(x_k, x'_k) \in P_k$ for every $k$. **This is the single use of countable choice in this proof.** [step 2.1, L3, choose]

4.1 $(x_k)$ is a sequence of reals with all terms in $K$, so by [L2] there are a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and $p \in K$ with $x_{n_j} \to p$. [step 3.1, L2, choose]

5.1 **The second sequence converges to $p$ as well.** Let a rational $\varepsilon > 0$ be given. By [L5] and [L8] fix $J_1$ with $1/(j+1) < \varepsilon/2$ for every $j \ge J_1$, and by step 4.1 fix $J_2$ with $|x_{n_j} - p| < \varepsilon/2$ for every $j \ge J_2$. For $j \ge \max\{J_1, J_2\}$, using $(x_{n_j}, x'_{n_j}) \in P_{n_j}$ and $n_j \ge j$ from [L4], we get $|x'_{n_j} - x_{n_j}| < 1/(n_j+1) \le 1/(j+1) < \varepsilon/2$, hence $|x'_{n_j} - p| \le |x'_{n_j} - x_{n_j}| + |x_{n_j} - p| < \varepsilon$ by [L7]. So $x'_{n_j} \to p$. [step 3.1, step 4.1, L4, L5, L7, L8]

6.1 The point $p$ lies in $K$ and $f$ is continuous at $p$, so [L6] applied to the two sequences of steps 4.1 and 5.1, both with terms in $K$, gives $f(x_{n_j}) \to f(p)$ and $f(x'_{n_j}) \to f(p)$. [step 4.1, step 5.1, L6]

7.1 By [L8] fix a rational $\varepsilon$ with $0 < \varepsilon < \varepsilon_0/2$, and by step 6.1 fix $J$ with $|f(x_{n_j}) - f(p)| < \varepsilon$ and $|f(x'_{n_j}) - f(p)| < \varepsilon$ for every $j \ge J$. For such $j$, [L7] gives $|f(x_{n_j}) - f(x'_{n_j})| \le |f(x_{n_j}) - f(p)| + |f(p) - f(x'_{n_j})| < 2\varepsilon < \varepsilon_0$. [step 6.1, L7, L8, choose]

8.1 But $(x_{n_j}, x'_{n_j}) \in P_{n_j}$ gives $|f(x_{n_j}) - f(x'_{n_j})| \ge \varepsilon_0$ for every $j$, which contradicts step 7.1. The assumption of step 1.1 is therefore false, and $f$ is uniformly continuous on $K$. [step 3.1, step 7.1, discharge-contradiction] ∎

## Remarks

- **Where compactness is used, and where continuity is used.** Compactness is used once, in step 4.1, to extract a convergent subsequence; continuity is used once, in step 6.1, at the single point $p$ that the extraction produces. Neither can be weakened: $x \mapsto 1/x$ on $(0,1)$ is continuous on a bounded non-closed set and not uniformly continuous ([[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]), and $x \mapsto x^{2}$ on $\mathbb{R}$ is continuous on a closed unbounded set and not uniformly continuous ([[cex-x-squared-is-not-uniformly-continuous-on-r]]).

- **The converse is sharp.** For every noncompact $E \subseteq \mathbb{R}$ that is bounded there is a continuous function on $E$ that is not uniformly continuous, and for every noncompact $E$ there is an unbounded continuous function and a bounded continuous one with no greatest value. That is [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], later on this page, and together with this theorem it says that compactness is exactly the hypothesis these results need.

- **The pairs, not the points, are what is chosen.** A common presentation selects two sequences separately and then extracts twice. Selecting the pair once, as above, keeps the count of choice applications at one and makes the second sequence's convergence a consequence rather than a second extraction.
