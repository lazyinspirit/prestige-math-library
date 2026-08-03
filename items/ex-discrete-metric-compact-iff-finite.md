---
id: ex-discrete-metric-compact-iff-finite
kind: example
title: "With the discrete metric $d(x,y) = 1$ for $x \\ne y$, a space is compact iff it is totally bounded iff it is finite, and it is complete whatever its size"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-compactness, def-totally-bounded, thm-compact-implies-complete-and-totally-bounded, def-complete-metric-space, def-cauchy-in-metric, def-metric-convergence, def-metric-ball, def-metric-topology, def-countable, lem-finite-choice]
justified_by: []
aliases: []
landmark: false
short: "the discrete metric"
proof_strategy: direct
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
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Totally bounded space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_bounded_space"
pipeline_run: null
---

## Example

Let $S$ be a set and define $d : S \times S \to \mathbb{R}$ by $d(x,y) = 0$ when
$x = y$ and $d(x,y) = 1$ when $x \ne y$: the **discrete metric** on $S$. Then:

1. $d$ is a metric ([[def-metric-space]]), $B(x,r) = \{x\}$ for $0 < r \le 1$ and
   $B(x,r) = S$ for $r > 1$ ([[def-metric-ball]]), and **every** subset of $S$ is
   both open and closed ([[def-metric-topology]]).
2. $(S,d)$ is complete ([[def-complete-metric-space]]), whatever $S$ is: a Cauchy
   sequence in it is eventually constant.
3. The following are equivalent: $(S,d)$ is compact
   ([[def-metric-compactness]]); $(S,d)$ is totally bounded
   ([[def-totally-bounded]]); $S$ is finite ([[def-countable]]).

So the discrete metric separates the two halves of "complete and totally
bounded": it is always complete, and it is totally bounded only in the trivial
case.

## Facts & Assumptions

**Given:** A set $S$ and the discrete metric $d$ on it, with $d(x,y) = 0$ for $x = y$ and $d(x,y) = 1$ otherwise.

[L1] A metric satisfies (M1) $d(x,y) = 0$ exactly when $x = y$, (M2) symmetry, (M3) the triangle inequality ([[def-metric-space]]).

[L2] $B(x,r) = \{y : d(x,y) < r\}$; a set is open when every point of it has a ball around it inside it, and closed when its complement is open ([[def-metric-ball]], [[def-metric-topology]]).

[L3] $(x_k)$ is Cauchy when for every rational $\varepsilon > 0$ there is $K$ with $d(x_m,x_n) < \varepsilon$ for $m,n \ge K$; it converges to $p$ when for every rational $\varepsilon > 0$ there is $K$ with $d(x_k,p) < \varepsilon$ for $k \ge K$; the space is complete when every Cauchy sequence converges in it ([[def-cauchy-in-metric]], [[def-metric-convergence]], [[def-complete-metric-space]]).

[L4] $(S,d)$ is compact when every family of open subsets with union $S$ has a finite subfamily with union $S$; a finite set is empty or listable as $\{s_0, \dots, s_p\}$ ([[def-metric-compactness]], [[def-countable]]).

[L5] A finite $\varepsilon$-net is a finite $F \subseteq S$ with $S = \bigcup_{y \in F} B(y,\varepsilon)$, and total boundedness asks for one at every real $\varepsilon > 0$ ([[def-totally-bounded]]).

[L6] A compact metric space is totally bounded ([[thm-compact-implies-complete-and-totally-bounded]]).

[L7] A function with domain a natural number all of whose values are nonempty sets has a choice function, in ZF ([[lem-finite-choice]]).

## Verification

**Proof technique:** direct.

1.1 $d$ is a metric: (M1) holds by definition; (M2) because the condition $x \ne y$ is symmetric; and (M3) because $d(x,z)$ is $0$ or $1$, and when it is $1$ one has $x \ne z$, so $y$ differs from at least one of $x$ and $z$ and $d(x,y) + d(y,z) \ge 1$. [L1]

2.1 For $0 < r \le 1$, $d(x,y) < r \le 1$ forces $d(x,y) = 0$ and $y = x$, so $B(x,r) = \{x\}$; for $r > 1$ every $y$ has $d(x,y) \le 1 < r$, so $B(x,r) = S$. Hence every $A \subseteq S$ is open, each $x \in A$ having $B(x,1) = \{x\} \subseteq A$, and every subset is closed as well, its complement being open: claim 1. [L2, step 1.1]

2.2 Claim 2: let $(x_k)$ be Cauchy and take $K$ with $d(x_m,x_n) < 1$ for $m,n \ge K$; then $d(x_m,x_K) = 0$, that is $x_m = x_K$, for every $m \ge K$, so $d(x_k, x_K) = 0 < \varepsilon$ for $k \ge K$ and every rational $\varepsilon > 0$, and $x_k \to x_K \in S$. [L1, L3, step 1.1]

3.1 For claim 3, suppose $S$ is finite. If $S = \emptyset$ then the empty subfamily of any family covers it; otherwise list $S = \{s_0, \dots, s_p\}$, let $\mathcal{U}$ be a family of open sets with union $S$, and note that for each $i \le p$ the set $\{U \in \mathcal{U} : s_i \in U\}$ is nonempty, so finite choice supplies $U_0, \dots, U_p \in \mathcal{U}$ with $s_i \in U_i$; their union contains every $s_i$ and hence is $S$. So $(S,d)$ is compact. [L4, L7, step 2.2]

4.1 If $(S,d)$ is compact it is totally bounded. [L6, step 3.1]

5.1 If $(S,d)$ is totally bounded, take a finite $(1/2)$-net $F$; then $S = \bigcup_{y \in F} B(y,1/2) = \bigcup_{y \in F} \{y\} = F$ by step 2.1, so $S$ is finite. [L5, step 2.1, step 4.1]

6.1 Steps 3.1, 4.1 and 5.1 close the cycle finite $\Rightarrow$ compact $\Rightarrow$ totally bounded $\Rightarrow$ finite, so the three conditions of claim 3 are equivalent. [step 3.1, step 4.1, step 5.1] ∎

## Remarks

**This is the standard witness for two of the false statements of the A page.** Taking $S = \mathbb{N}$ gives a bounded space that is not totally bounded ([[fs-bounded-implies-totally-bounded]], [[cex-bounded-not-totally-bounded]]) and a closed bounded subset of a metric space that is not compact ([[fs-closed-and-bounded-implies-compact-in-every-metric-space]]).

**Completeness is not what compactness adds.** Claim 2 holds for every $S$, including infinite ones, so completeness alone is very far from compactness. What the discrete metric lacks is total boundedness, and by [[thm-metric-compactness-equivalences]] it is exactly the pair of conditions that is equivalent to compactness.

**Boundedness of the space is unconditional too.** Every discrete space is contained in $B(x,2)$ for any of its points, so, for infinite $S$, it is bounded, complete, and not compact all at once ([[def-metric-bounded-diameter]]).
