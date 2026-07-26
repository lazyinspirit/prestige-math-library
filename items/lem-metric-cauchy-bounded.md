---
id: lem-metric-cauchy-bounded
kind: lemma
title: "Every Cauchy sequence in a metric space is bounded"
status: published
origin: session
deps: [def-cauchy-in-metric, def-metric-bounded-diameter, lem-finite-set-has-max,
       def-max-min, def-metric-space, def-metric-ball, lem-metric-nonnegativity,
       lem-rat-embeds-dense, def-sequence]
justified_by: []
aliases: []
landmark: false
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
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a Cauchy
sequence in $X$ ([[def-cauchy-in-metric]]). Then its range
$R := \{\, x_k : k \in \mathbb{N} \,\}$ is a bounded subset of $X$
([[def-metric-bounded-diameter]]): there are a point $x_0 \in X$ and a real
$r > 0$ with $R \subseteq B(x_0, r)$ ([[def-metric-ball]]).

Consequently $R$ is nonempty and bounded, so $\operatorname{diam}(R)$ exists
([[def-metric-bounded-diameter]]).

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and a Cauchy sequence $(x_k)$ in $X$; write $R := \{ x_k : k \in \mathbb{N} \}$.

[A1] Cauchyness at the real value $1$: there is $N \in \mathbb{N}$ with $d(x_m,x_n) < 1$ for all $m,n \ge N$ ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

[L1] A nonempty finite set of reals has a maximum, and every element of the set is at most that maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L2] A metric takes nonnegative values ([[lem-metric-nonnegativity]]).

[L3] Membership in a ball: $y \in B(x,r)$ means $d(x,y) < r$, and the radius is a positive real ([[def-metric-ball]]).

[L4] A subset $A \subseteq X$ is bounded when $A = \emptyset$ or $A \subseteq B(x_0,r)$ for some $x_0 \in X$ and real $r > 0$ ([[def-metric-bounded-diameter]]).

## Proof

**Proof technique:** direct.

1.1 Fix $N$ as in [A1], so that $d(x_m,x_n) < 1$ whenever $m, n \ge N$; in particular $d(x_k, x_N) < 1$ for every $k \ge N$. [A1]

1.2 The set $S := \{\, d(x_j, x_N) : j \le N \,\} \cup \{1\}$ is a nonempty finite set of reals, so it has a maximum $M := \max S$, and $M \ge 1 > 0$. [L1, L2]

2.1 Put $r := M + 1$, a real with $r > 1 > 0$. For $j \le N$ we have $d(x_j,x_N) \le M < r$, and for $k \ge N$ we have $d(x_k,x_N) < 1 \le M < r$; every index is of one of the two kinds, so $d(x_k, x_N) < r$ for every $k \in \mathbb{N}$. [step 1.1, step 1.2, choose]

3.1 Hence $x_k \in B(x_N, r)$ for every $k$, that is $R \subseteq B(x_N, r)$ with $x_N \in X$ and $r > 0$, so $R$ is bounded; and $R$ is nonempty because it contains $x_0$. [step 2.1, L3, L4] ∎

## Remarks

- **The maximum is taken over $j \le N$ and not over $j < N$**, and the extra element $1$ is in the set as well. Both are deliberate. Indices run from $0$ ([[def-sequence]]), so $N = 0$ is possible and $\{\, d(x_j,x_N) : j < N \,\}$ would then be empty, which has no maximum ([[def-max-min]]); adjoining $1$ makes the set nonempty in every case and simultaneously covers the tail bound.
- **Boundedness of the range is strictly weaker than Cauchyness.** The sequence $x_k = (-1)^k$ in $\mathbb{R}$ has bounded range and is not Cauchy, since two consecutive terms are always at distance $2$. So this lemma cannot be reversed, and nothing on this page reverses it.
- **What the lemma is for.** It is what makes $\operatorname{diam}$ available for the tails of a Cauchy sequence, which is the form in which Cauchyness enters the converse half of [[thm-cantor-intersection-metric]].
