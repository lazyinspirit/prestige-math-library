---
id: thm-c1-lipschitz-ac-bv-hierarchy
kind: theorem
title: "$C^1$ implies Lipschitz, Lipschitz implies absolutely continuous, and absolutely continuous implies continuous and bounded variation"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-absolutely-continuous-function, def-derivative,
       def-continuity-real, cor-boundedness-theorem-r,
       cor-bounded-derivative-implies-lipschitz,
       def-lipschitz-holder-contraction,
       lem-real-and-metric-notions-agree,
       def-bounded-variation-and-total-variation,
       def-partition-and-refinement, lem-finite-sum-laws,
       thm-of-archimedean]
justified_by: []
aliases: []
landmark: true
short: '$C^1\subseteq\mathrm{Lip}\subseteq AC\subseteq C\cap BV$'
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $f:[a,b]\to\mathbb R$.

1. If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f'$ extends
   continuously to $[a,b]$, then $f$ is Lipschitz.
2. Every Lipschitz $f$ is absolutely continuous.
3. Every absolutely continuous $f$ is continuous and has bounded variation.

Thus, with $C^1$ understood in the endpoint-extension sense of claim 1,
$C^1\subseteq\mathrm{Lipschitz}\subseteq AC\subseteq C\cap BV$ on a compact
interval.

## Facts & Assumptions

**Given:** A compact interval $[a,b]$ and a function $f:[a,b]\to\mathbb R$.

[L1] Absolute continuity is the finite disjoint-interval condition of [[def-absolutely-continuous-function]].

[L2] Derivatives and continuity use [[def-derivative]] and [[def-continuity-real]].

[L3] A continuous real function on $[a,b]$ is bounded ([[cor-boundedness-theorem-r]]).

[L4] A continuous function with bounded derivative on an interval is Lipschitz ([[cor-bounded-derivative-implies-lipschitz]]).

[L5] The Lipschitz condition is $|f(x)-f(y)|\le L|x-y|$ for one $L\ge0$ ([[def-lipschitz-holder-contraction]], [[lem-real-and-metric-notions-agree]]).

[L6] Total variation is the supremum of partition sums ([[def-bounded-variation-and-total-variation]], [[def-partition-and-refinement]]).

[L7] Finite sums split and telescope ([[lem-finite-sum-laws]]).

[L8] The canonical naturals are cofinal in $\mathbb R$ ([[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 Under claim 1, the continuous extension of $f'$ is bounded by some $M\ge0$ on $[a,b]$ by [L3]. The bounded-derivative theorem [L4] then makes $f$ Lipschitz with constant $M$. [L2, L3, L4]

1.2 If $f$ is Lipschitz with constant $L$, then for every finite disjoint family, $\sum_{j<m}|f(v_j)-f(u_j)|\le L\sum_{j<m}(v_j-u_j)$. For $L=0$ any positive $\delta$ works; for $L>0$ choose $\delta=\varepsilon/L$. This proves absolute continuity, including the empty family. [L1, L5, L7]

1.3 If $f$ is absolutely continuous, apply [L1] to the single interval with endpoints $x,y$ to obtain the usual $\varepsilon$-$\delta$ continuity condition, so $f$ is continuous. [L1, L2]

1.4 For bounded variation, take $\delta>0$ from absolute continuity with $\varepsilon=1$. By [L8] choose a natural $N\ge1$ with $(b-a)/N<\delta$. Insert the points of the uniform $N$-partition into an arbitrary partition $P$. Inside each uniform block, the refined subintervals have disjoint interiors and total length at most $(b-a)/N<\delta$, so their endpoint oscillations sum to less than $1$. Summing over the $N$ blocks gives $V(f,P)\le N$, independent of $P$. Thus $f$ is BV. If $a=b$, its variation is $0$. [L1, L6, L7, L8]

2.1 Steps 1.1 through 1.4 prove all three inclusions and the asserted hierarchy. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
