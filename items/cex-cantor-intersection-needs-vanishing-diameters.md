---
id: cex-cantor-intersection-needs-vanishing-diameters
kind: counterexample
title: "On $\\mathbb{N}$ with $d(m,n) = 1 + 1/(m+n)$ for $m \\ne n$ the sets $\\{n, n+1, \\dots\\}$ are nested, closed, bounded and complete with empty intersection"
status: draft
origin: session
deps: [thm-cantor-intersection-metric, def-metric-space, def-complete-metric-space,
       def-metric-bounded-diameter, cor-archimedean-reciprocal, thm-of-archimedean,
       lem-of-inverse-positive, def-metric-topology, def-metric-ball, def-cauchy-in-metric,
       def-natural-numbers, lem-of-naturals-positive, def-metric-convergence,
       thm-complete-subspace-iff-closed, def-complete-ordered-field, lem-rat-embeds-dense,
       def-max-min, lem-metric-nonnegativity]
justified_by: []
aliases: []
landmark: true
short: "Cantor chain with empty intersection"
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cantor's intersection theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_intersection_theorem"
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** in Cantor's intersection theorem
([[thm-cantor-intersection-metric]]) the hypothesis
$\operatorname{diam}(F_k) \to 0$ may be dropped; in a complete metric space a
nested sequence of nonempty closed bounded sets has nonempty intersection.

Let $X := \mathbb{N}$ ([[def-natural-numbers]]) and define

$$d(m,n) := \begin{cases} 0 & \text{if } m = n, \\[2pt] 1 + \dfrac{1}{m+n} & \text{if } m \ne n, \end{cases}$$

where $m+n \ge 1$ whenever $m \ne n$, so the reciprocal is defined. Put
$F_n := \{\, k \in \mathbb{N} : k \ge n \,\}$. Then $d$ is a metric, $(X,d)$ is
complete, every $F_n$ is nonempty, closed, bounded and itself complete, the
$F_n$ are nested, and

$$\bigcap_{n \in \mathbb{N}} F_n = \emptyset .$$

What fails is only the diameter condition:
$\operatorname{diam}(F_n) = 1 + 1/(2n+1) \ge 1$ for every $n$.

## Facts & Assumptions

**Given:** $X = \mathbb{N}$ with the function $d$ above; the sets $F_n = \{k \in \mathbb{N} : k \ge n\}$; naturals $m,n,p$; a real $\varepsilon > 0$.

[L1] $\mathbb{N}$ contains $0$, and for distinct naturals $m \ne n$ one has $m + n \ge 1$, so $1/(m+n)$ is a positive real, at most $1$ ([[def-natural-numbers]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] The metric axioms (M1), (M2), (M3), and nonnegativity ([[def-metric-space]], [[lem-metric-nonnegativity]]).

[L3] Open sets, balls, Cauchyness and convergence, tested with real $\varepsilon > 0$ ([[def-metric-topology]], [[def-metric-ball]], [[def-cauchy-in-metric]], [[def-metric-convergence]], [[lem-rat-embeds-dense]]).

[L4] Bounded subset and diameter: $A$ is bounded when it lies in a ball, and $\operatorname{diam}(A) = \sup\{d(a,b) : a,b \in A\}$ for nonempty bounded $A$; the supremum is the least upper bound ([[def-metric-bounded-diameter]], [[def-complete-ordered-field]], [[def-max-min]]).

[L5] Reciprocals reverse order on the positives, and for every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$ ([[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L6] A closed subset of a complete metric space is complete ([[thm-complete-subspace-iff-closed]], [[def-complete-metric-space]]).

## Counterexample

**Proof technique:** direct.

1.1 $d$ is well defined and symmetric, and $d(m,n) = 0$ exactly when $m = n$, since for $m \ne n$ the value $1 + 1/(m+n)$ is at least $1$. In fact $1 < d(m,n) \le 2$ for all $m \ne n$, because $0 < 1/(m+n) \le 1$. [L1, L2]

2.1 $d$ satisfies the triangle inequality $d(m,p) \le d(m,n) + d(n,p)$. If $m = p$ the left side is $0$; if $n = m$ or $n = p$ one side of the right-hand sum is $0$ and the other equals the left side; and if $m$, $n$, $p$ are pairwise distinct then $d(m,n) + d(n,p) > 1 + 1 = 2 \ge d(m,p)$. So $d$ is a metric on $\mathbb{N}$. [step 1.1, L1, L2]

2.2 Every subset of $\mathbb{N}$ is open, hence also closed: for $m \in \mathbb{N}$ the ball $B(m,1)$ is $\{m\}$, since $d(m,n) > 1$ for $n \ne m$, so every subset is a union of open balls; complements of subsets are subsets. [step 1.1, L3]

2.3 $(X,d)$ is complete: a Cauchy sequence $(x_k)$ tested at $\varepsilon = 1$ has an index $K$ with $d(x_k,x_l) < 1$ for all $k,l \ge K$, which by step 1.1 forces $x_k = x_l$; so the sequence is constant from $K$ on and converges to $x_K \in \mathbb{N}$. [step 1.1, L3]

2.4 Each $F_n$ is bounded: $d(0,k) \le 2 < 3$ for every $k$, so $F_n \subseteq X = B(0,3)$. [step 1.1, L3, L4]

3.1 Each $F_n$ is nonempty (it contains $n$), closed by step 2.2, and complete by [L6]; and $F_{n+1} \subseteq F_n$, so the family is nested. [step 2.2, step 2.3, L6]

3.2 $\operatorname{diam}(F_n) = 1 + 1/(2n+1)$. Indeed the distances realised inside $F_n$ are $0$ and the values $1 + 1/(j+k)$ for distinct $j,k \ge n$; among such pairs $j+k$ is least when $\{j,k\} = \{n, n+1\}$, giving $j+k = 2n+1$, and $1/(j+k)$ is largest there. So $1 + 1/(2n+1)$ is an upper bound of those distances and is itself one of them, hence it is the least upper bound. [step 1.1, step 2.4, L4, L5]

4.1 In particular $\operatorname{diam}(F_n) > 1$ for every $n$, so the sequence $\big(\operatorname{diam}(F_n)\big)$ does not converge to $0$: at $\varepsilon = 1$ no index makes the diameters smaller than $1$. [step 3.2, L3, L5]

4.2 The intersection is empty: for every $k \in \mathbb{N}$ we have $k \notin F_{k+1}$, since $k < k+1$; so no natural lies in all the $F_n$. [step 3.1, L1]

5.1 So in the complete metric space $(X,d)$ the sets $F_n$ are nonempty, closed, bounded, complete and nested, and their intersection is empty; the only hypothesis of [[thm-cantor-intersection-metric]] that they fail is $\operatorname{diam}(F_n) \to 0$, so that hypothesis cannot be dropped. [step 2.3, step 3.1, step 2.4, step 4.1, step 4.2] ∎

## Remarks

- **Indexing.** $\mathbb{N}$ contains $0$ here, so $d$ is written with $m+n$ and not with $mn$ or $1/m$: at $m = 0$ those would be undefined or degenerate. The clause $m \ne n$ is what guarantees $m+n \ge 1$, and it is the reason the formula is stated by cases rather than as a single expression.
- **The metric is a small perturbation of the discrete metric**, taking values in $\{0\} \cup (1,2]$, and its topology is discrete. Every subset is closed, so closedness is free and carries no information; what the example exploits is that a set can be closed, bounded and complete while its points stay a definite distance apart, so a nested family can drain away to nothing.
- **Contrast with the real line.** On $\mathbb{R}$ the same sets $[n,\infty)$ are nested, nonempty and closed with empty intersection, but they are not bounded, so they are not a Cantor chain either. The present example is sharper: it keeps boundedness and loses only the vanishing of the diameters.
- **Both conclusions of the theorem fail here, not just one.** There is neither a common point nor a unique one, which is what one expects: the uniqueness half of [[thm-cantor-intersection-metric]] is exactly what the vanishing diameters buy.
