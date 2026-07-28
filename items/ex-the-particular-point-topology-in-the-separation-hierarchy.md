---
id: ex-the-particular-point-topology-in-the-separation-hierarchy
kind: example
title: "The particular-point topology is $T_0$ and not $T_1$, it is not regular once the set has at least two points, and it is not normal once the set has at least three"
status: draft
origin: session
deps: [def-standard-topologies, def-t0-and-t1-spaces, thm-t1-iff-singletons-are-closed,
       def-regular-and-t3-spaces, def-normal-and-t4-spaces, def-hausdorff-space,
       def-interior-closure-boundary-top, thm-closure-characterisation-top,
       def-topological-space, ex-sierpinski-space-is-t0-normal-and-not-regular]
justified_by: []
aliases: []
landmark: false
short: "particular-point topology in the hierarchy"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Particular point topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Particular_point_topology"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "L. Steen and J. Seebach, Counterexamples in Topology, §8"
      url: "https://en.wikipedia.org/wiki/Counterexamples_in_Topology"
pipeline_run: null
---

## Example

Let $X$ be a set, fix $p \in X$, and give $X$ the particular-point topology
$\mathcal{T}_p = \{\varnothing\} \cup \{\, U \subseteq X : p \in U \,\}$
([[def-standard-topologies]]), whose closed sets are $X$ together with the
subsets of $X$ that do **not** contain $p$. Then:

1. $(X, \mathcal{T}_p)$ is **$T_0$** ([[def-t0-and-t1-spaces]]), for every $X$
   and every $p$.
2. If $X$ has at least two points then $(X,\mathcal{T}_p)$ is **not $T_1$**, and
   hence not Hausdorff ([[def-hausdorff-space]]).
3. If $X$ has at least two points then $(X,\mathcal{T}_p)$ is **not regular**
   ([[def-regular-and-t3-spaces]]).
4. If $X$ has at least three points then $(X,\mathcal{T}_p)$ is **not normal**
   ([[def-normal-and-t4-spaces]]).

Clause 4 needs one point more than clause 3, and the extra point is not
slack: on a two-point set the particular-point topology *is* Sierpinski space,
which is normal ([[ex-sierpinski-space-is-t0-normal-and-not-regular]]). So this
family separates the two failures, and it shows that "not regular" and "not
normal" begin at different sizes.

## Facts & Assumptions

**Given:** A set $X$, a point $p \in X$, the topology $\mathcal{T}_p$ above, and points $x, y \in X$.

[A1] $U \in \mathcal{T}_p$ exactly when $U = \varnothing$ or $p \in U$; the closed sets are $X$ and the subsets not containing $p$ ([[def-standard-topologies]], [[def-topological-space]]).

[L1] $T_0$: some open set contains exactly one of two distinct points. $T_1$: every singleton is closed. Every Hausdorff space is $T_1$ ([[def-t0-and-t1-spaces]], [[thm-t1-iff-singletons-are-closed]], [[def-hausdorff-space]]).

[L2] Regular: a point and a closed set not containing it have disjoint open supersets. Normal: two disjoint closed sets have disjoint open supersets ([[def-regular-and-t3-spaces]], [[def-normal-and-t4-spaces]]).

[L3] A set is closed exactly when its complement is open, and $\overline{A}$ is the smallest closed superset of $A$ ([[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]], claim 2).

## Verification

**Proof technique:** direct.

1.1 Every nonempty open set contains $p$, by [A1]. [A1]

1.2 Let $x \ne y$ in $X$. If $x = p$ then $\{p\}$ is open by [A1], contains $x$ and not $y$; if $y = p$ the same argument applies with the roles exchanged; and if neither is $p$ then $\{x, p\}$ is open by [A1], contains $x$ and not $y$. So $(X,\mathcal{T}_p)$ is $T_0$, which is claim 1. [A1, L1]

1.3 Suppose $X$ has at least two points, so that $X \setminus \{p\} \ne \varnothing$. Then $\{p\} \ne X$, and $\{p\}$ contains $p$, so $\{p\}$ is not closed by [A1]; hence $(X,\mathcal{T}_p)$ is not $T_1$ by [L1], and not Hausdorff, which is claim 2. [A1, L1, assume-hyp]

1.4 Suppose $X$ has at least three points and fix $x, y \in X$ with $x \ne y$, $x \ne p$ and $y \ne p$. Then $\{x\}$ and $\{y\}$ are disjoint nonempty closed sets by [A1]. [A1, assume-hyp]

2.1 Under step 1.3 fix $x \in X$ with $x \ne p$; then $\{x\}$ does not contain $p$, so $\{x\}$ is closed by [A1], and $p \notin \{x\}$. [step 1.3, A1]

2.2 Under step 1.4: any open $U \supseteq \{x\}$ and open $V \supseteq \{y\}$ are nonempty, hence both contain $p$ by step 1.1, so $U \cap V \ne \varnothing$ and $(X,\mathcal{T}_p)$ is not normal, which is claim 4. [step 1.1, step 1.4, L2]

3.1 Under step 1.3: any open $U$ with $p \in U$ and any open $V$ with $\{x\} \subseteq V$ are both nonempty, so both contain $p$ by step 1.1 and $U \cap V \ne \varnothing$. Hence the point $p$ and the closed set $\{x\}$ cannot be separated and $(X,\mathcal{T}_p)$ is not regular, which is claim 3. [step 1.1, step 2.1, L2]

4.1 Steps 1.2, 1.3, 3.1 and 2.2 are claims 1 to 4. [step 1.2, step 1.3, step 3.1, step 2.2] ∎

## Remarks

- **Closures here are as large as they can be.** For $A \ne \varnothing$ with $p \notin A$ one has $\overline{A} = A$, since $A$ is already closed; but $\overline{\{p\}} = X$, because the only closed set containing $p$ is $X$ ([[thm-closure-characterisation-top]]). So the particular point is dense, and a single point can be dense in a space with any number of points at all.

- **Every nonempty open set contains $p$**, which is the one fact behind clauses 3 and 4 alike. It makes the space as far from Hausdorff as possible while still distinguishing points: no two nonempty open sets are ever disjoint.

- **Sierpinski space is the case of two points.** With $X = \{p, x\}$ the open sets are $\varnothing$, $\{p\}$ and $X$, which is [[def-standard-topologies]]'s Sierpinski topology with the open point named $p$; so clause 4 genuinely needs its extra hypothesis.
