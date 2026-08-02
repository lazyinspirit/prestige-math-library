---
id: ex-discrete-metric
kind: example
title: "The discrete metric induces the discrete topology, in which every subset is clopen"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-topology, def-metric-ball, thm-metric-open-set-algebra,
       lem-metric-nonnegativity, cor-of-one-positive, lem-of-add-order,
       def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [def-discrete-metric]
landmark: false
short: "discrete metric"
proof_strategy: direct
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
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Example

Let $X$ be any set and define $\delta : X \times X \to \mathbb{R}$ by

$$\delta(x,y) := \begin{cases} 0 & \text{if } x = y, \\ 1 & \text{if } x \ne y. \end{cases}$$

Then:

1. $\delta$ is a metric on $X$ ([[def-metric-space]]), the **discrete metric**.
2. For $x \in X$ and a real $r > 0$:
   $$B(x,r) = \begin{cases} \{x\} & 0 < r \le 1 \\ X & r > 1 \end{cases}, \qquad \bar B(x,r) = \begin{cases} \{x\} & 0 < r < 1 \\ X & r \ge 1 \end{cases}, \qquad S(x,1) = X \setminus \{x\}.$$
3. Every subset of $X$ is open, hence every subset is closed, hence every subset
   is clopen ([[def-metric-topology]]). The metric topology of $\delta$ is the
   **discrete topology**, the collection of all subsets of $X$.

The example is the standard source of counterexamples about balls: here the
closed ball of radius $1$ is the whole space while the closure of the open ball
of radius $1$ is a single point, and the sphere of radius $1$ is everything
except the centre while the boundary of the ball is empty.

## Facts & Assumptions

**Given:** A set $X$, the function $\delta$ above, points $x, y, z \in X$, a real $r > 0$, and a subset $U \subseteq X$.

[L1] Metric axioms (M1), (M2), (M3) ([[def-metric-space]]); nonnegativity is a consequence and not needed as a hypothesis ([[lem-metric-nonnegativity]]).

[L2] Balls: $B(x,r) = \{y : \delta(x,y) < r\}$, $\bar B(x,r) = \{y : \delta(x,y) \le r\}$ and $S(x,r) = \{y : \delta(x,y) = r\}$ ([[def-metric-ball]]).

[L3] Open and closed: $U$ is open when every point of it has a ball around it inside it; $F$ is closed when $X \setminus F$ is open ([[def-metric-topology]]).

[L4] Closed balls are closed ([[thm-metric-open-set-algebra]]).

[L5] Order: $0 < 1$, so $0 \ne 1$; a sum of a positive and a nonnegative real is positive, and inequalities may be compared by trichotomy and transitivity ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 Separation and symmetry: $\delta(x,y) = 0$ holds exactly when $x = y$, since the other value $1$ is different from $0$; and the defining clauses are unchanged when $x$ and $y$ are exchanged, since "$x = y$" is. [L1, L5]

1.2 Triangle inequality: if $x = z$ then $\delta(x,z) = 0$ and the right side is a sum of two values in $\{0,1\}$, hence at least $0$; and if $x \ne z$ then $y$ cannot equal both $x$ and $z$, so at least one of $\delta(x,y), \delta(y,z)$ equals $1$ while the other is $0$ or $1$, whence $\delta(x,y) + \delta(y,z) \ge 1 = \delta(x,z)$. [L1, L5]

1.3 Balls: $\delta(x,x) = 0 < r$ always, so $x \in B(x,r)$; and for $y \ne x$ one has $\delta(x,y) = 1$, so $y \in B(x,r)$ exactly when $1 < r$, $y \in \bar B(x,r)$ exactly when $1 \le r$, and $y \in S(x,1)$ always. This is claim 2. [L2, L5]

2.1 Every subset is open: for $U \subseteq X$ and $x \in U$ the ball $B(x,1)$ is $\{x\}$ by the computation of step 1.3, and $\{x\} \subseteq U$. [L2, L3, L5]

2.2 Claim 1 holds: $\delta$ satisfies (M1) and (M2) by step 1.1 and (M3) by step 1.2, so it is a metric on $X$. [step 1.1, step 1.2, L1]

3.1 Claim 3 holds: every subset is open by step 2.1, so for any $F \subseteq X$ the complement $X \setminus F$ is open and $F$ is closed; thus every subset is clopen and the metric topology is the full power set of $X$. In particular each singleton $\{x\}$ is closed, in agreement with the closed-ball computation $\bar B(x,r) = \{x\}$ for $0 < r < 1$ and the fact that closed balls are closed. [step 1.3, step 2.1, L3, L4]

4.1 Claims 1, 2 and 3 hold by steps 2.2, 1.3 and 3.1. [step 1.3, step 2.2, step 3.1] ∎

## Remarks

- **Every map out of a discrete space is continuous**, since every preimage is
  open ([[thm-metric-continuity-characterisations]]); so the discrete metric
  carries no information about $X$ beyond its cardinality, and is the extreme
  case at one end of the range of metrics on a set.
- **Convergence is eventual constancy.** $x_k \to x$ in $(X,\delta)$ means
  $\delta(x_k,x) < 1$ eventually, that is $x_k = x$ for all large $k$
  ([[def-metric-convergence]]).
- **Boundedness is immediate**: $X \subseteq B(x,2)$ for any $x$, so every
  discrete metric space is bounded, with diameter $1$ as soon as $X$ has two
  points ([[def-metric-bounded-diameter]]).
