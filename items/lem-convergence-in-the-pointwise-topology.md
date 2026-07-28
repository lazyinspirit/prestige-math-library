---
id: lem-convergence-in-the-pointwise-topology
kind: lemma
title: "A sequence converges in the topology of pointwise convergence exactly when it converges at every point"
status: draft
origin: session
deps: [def-topology-of-pointwise-convergence, def-sequence-convergence-top,
       def-product-topology, def-neighbourhood-top, def-topology-basis-subbasis,
       thm-basis-criterion, thm-well-ordering-principle, lem-finite-set-has-max,
       def-max-min, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
short: "pointwise convergence is convergence at each point"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Topology of pointwise convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topology_of_pointwise_convergence"
    - title: "J. Munkres, Topology, 2nd ed., §46"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$ be a set, let $(Y, \mathcal{T}_Y)$ be a topological space, and give
$Y^{X}$ the topology of pointwise convergence
([[def-topology-of-pointwise-convergence]]). Let $(f_k)$ be a sequence in
$Y^{X}$ and let $f \in Y^{X}$. Then

$$f_k \to f \text{ in } Y^{X} \qquad \Longleftrightarrow \qquad f_k(x) \to f(x) \text{ in } Y \text{ for every } x \in X ,$$

convergence being that of [[def-sequence-convergence-top]] on both sides.

**No uniqueness of limits is asserted on either side.** In a general topological
space a sequence may converge to several points, and the equivalence above is
between two conditions on the pair $((f_k), f)$, not between two values
([[def-sequence-convergence-top]]). No choice principle is used: the only
selection made below is of a least natural number and of a maximum among finitely
many.

## Facts & Assumptions

**Given:** A set $X$, a topological space $(Y,\mathcal{T}_Y)$, the space $Y^{X}$ with the topology of pointwise convergence, a sequence $(f_k)$ in $Y^{X}$ and a point $f \in Y^{X}$; $\iota$ is the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]).

[L1] For $x \in X$ and $V \in \mathcal{T}_Y$ the set $\pi_x^{-1}[V] = \{\, g \in Y^{X} : g(x) \in V \,\}$ is open in $Y^{X}$, and the sets $\{\, g \in Y^{X} : g(x_j) \in V_j \text{ for every } j < n \,\}$, for $n \in \mathbb{N}$, points $x_0, \dots, x_{n-1} \in X$ and open $V_0, \dots, V_{n-1} \subseteq Y$, form a basis for the topology of pointwise convergence ([[def-topology-of-pointwise-convergence]], [[def-product-topology]], [[thm-basis-criterion]]).

[L2] A set $N$ is a neighbourhood of a point $p$ exactly when there is an open $U$ with $p \in U \subseteq N$; in particular an open set containing $p$ is a neighbourhood of $p$ ([[def-neighbourhood-top]]).

[L3] $g_k \to g$ in a topological space means: for every neighbourhood $N$ of $g$ there is $K \in \mathbb{N}$ with $g_k \in N$ for every $k \ge K$ ([[def-sequence-convergence-top]]).

[L4] If $\mathcal{B}$ is a basis for a topology and $N$ is a neighbourhood of $g$, then there is $B \in \mathcal{B}$ with $g \in B \subseteq N$ ([[def-neighbourhood-top]], [[def-topology-basis-subbasis]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] For $n \ge 1$ and natural numbers $k_0, \dots, k_{n-1}$ there is an index $j^{\ast} < n$ with $k_j \le k_{j^{\ast}}$ for every $j < n$: the nonempty finite set of reals $\{\iota(k_0), \dots, \iota(k_{n-1})\}$ has a maximum, attained at some index, and $\iota$ is strictly increasing on $\mathbb{N}$, hence reflects the order ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f_k \to f$ in $Y^{X}$; fix $x \in X$ and a neighbourhood $N$ of $f(x)$ in $Y$, and fix an open $V \subseteq Y$ with $f(x) \in V \subseteq N$. [assume-hyp, L2, choose]

1.2 Suppose instead that $f_k(x) \to f(x)$ in $Y$ for every $x \in X$, and let $N$ be a neighbourhood of $f$ in $Y^{X}$. [assume-hyp, L2]

2.1 Under the assumption of step 1.1: $\pi_x^{-1}[V]$ is open in $Y^{X}$ and contains $f$, hence is a neighbourhood of $f$, so there is $K \in \mathbb{N}$ with $f_k \in \pi_x^{-1}[V]$ for every $k \ge K$, that is $f_k(x) \in V \subseteq N$ for every $k \ge K$. [step 1.1, L1, L2, L3]

2.2 Under the assumption of step 1.2: there are $n \in \mathbb{N}$, points $x_0, \dots, x_{n-1} \in X$ and open $V_0, \dots, V_{n-1} \subseteq Y$ such that $f \in B \subseteq N$, where $B := \{\, g \in Y^{X} : g(x_j) \in V_j \text{ for every } j < n \,\}$. [step 1.2, L1, L4, choose]

3.1 Since $N$ was an arbitrary neighbourhood of $f(x)$ and $x$ an arbitrary point of $X$, step 2.1 says exactly that $f_k(x) \to f(x)$ in $Y$ for every $x \in X$; this is the forward implication. [step 2.1, L3]

3.2 If $n = 0$ in step 2.2 then $B$ is the empty intersection $Y^{X}$, so $f_k \in B \subseteq N$ for every $k \in \mathbb{N}$. [step 2.2, L1]

3.3 If $n \ge 1$ in step 2.2 then for each $j < n$ the set $A_j := \{\, m \in \mathbb{N} : f_k(x_j) \in V_j \text{ for every } k \ge m \,\}$ is nonempty, because $f \in B$ gives $f(x_j) \in V_j$ with $V_j$ open, hence $V_j$ is a neighbourhood of $f(x_j)$, and $f_k(x_j) \to f(x_j)$; put $N_j := \min A_j$. [step 1.2, step 2.2, L2, L3, L5]

4.1 If $n \ge 1$: there is $j^{\ast} < n$ with $N_j \le N_{j^{\ast}}$ for every $j < n$, and then every $k \ge N_{j^{\ast}}$ satisfies $k \ge N_j$ for every $j < n$, so $f_k(x_j) \in V_j$ for every $j < n$, that is $f_k \in B \subseteq N$. [step 2.2, step 3.3, L6]

5.1 By steps 3.2 and 4.1 there is in either case a $K \in \mathbb{N}$ with $f_k \in N$ for every $k \ge K$, namely $K = 0$ when $n = 0$ and $K = N_{j^{\ast}}$ when $n \ge 1$; as $N$ was an arbitrary neighbourhood of $f$, this says $f_k \to f$ in $Y^{X}$, which is the converse implication. [step 3.2, step 4.1, L3]

6.1 Steps 3.1 and 5.1 are the two implications, so the two conditions are equivalent. [step 3.1, step 5.1] ∎

## Remarks

- **This is what the name of the topology records.** The topology of pointwise convergence is defined as the product topology ([[def-topology-of-pointwise-convergence]]), with no reference to sequences; the lemma above is what makes the name accurate, and it is the reason the product topology, rather than the box topology, is the one used on a set of functions.

- **The corresponding statement for the box topology is false.** A basic box constrains a member of $Y^{X}$ at *every* index at once, so a sequence converging in the box topology must converge in a much stronger sense; the failure of the characteristic property of the box topology is recorded on the page that builds it ([[def-product-topology]]).

- **Nothing here makes the pointwise topology well behaved for limits of continuous functions.** A pointwise limit of continuous functions need not be continuous, so $C(X,Y)$ is in general *not* closed in $Y^{X}$ for this topology; that failure is what the uniform topology of this page repairs, and it is witnessed on the companion page.
