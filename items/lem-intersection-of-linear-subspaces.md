---
id: lem-intersection-of-linear-subspaces
kind: lemma
title: "The intersection of a nonempty family of linear subspaces of $V$ is a linear subspace of $V$"
status: draft
origin: session
deps: [def-linear-subspace, lem-linear-subspace-criterion, def-vector-space]
justified_by: []
aliases: []
landmark: false
short: "intersection of linear subspaces"
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
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let
$\mathcal{W}$ be a **nonempty** set of linear subspaces of $V$
([[def-linear-subspace]]). Then

$$U \;=\; \bigcap_{W \in \mathcal{W}} W \;=\; \{\, x \in V \;:\; x \in W \text{ for every } W \in \mathcal{W} \,\}$$

is a linear subspace of $V$. In particular the intersection of two linear
subspaces is a linear subspace.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, a nonempty set $\mathcal{W}$ of linear subspaces of $V$, and $U$ the intersection of the members of $\mathcal{W}$.

[L1] Each $W \in \mathcal{W}$ contains $0_V$, is closed under $+$, and is closed under scalar multiplication ([[def-linear-subspace]]).

[L2] One-step test: a nonempty $S \subseteq V$ with $\lambda u + v \in S$ for all $\lambda \in F$ and $u, v \in S$ is a linear subspace of $V$ ([[lem-linear-subspace-criterion]]).

## Proof

**Proof technique:** direct.

1.1 $U \subseteq V$, since $\mathcal{W}$ is nonempty and every member of it is a subset of $V$. [given, L1]

1.2 $0_V \in U$, since $0_V \in W$ for every $W \in \mathcal{W}$; in particular $U$ is nonempty. [L1]

1.3 Let $\lambda \in F$ and $u, v \in U$, and let $W \in \mathcal{W}$ be arbitrary. Then $u, v \in W$, so $\lambda u \in W$ by closure under scalar multiplication and $\lambda u + v \in W$ by closure under addition. [given, L1]

2.1 Since $W$ was an arbitrary member of $\mathcal{W}$, the vector $\lambda u + v$ lies in every member of $\mathcal{W}$, that is $\lambda u + v \in U$. [step 1.3]

3.1 $U$ is a nonempty subset of $V$ satisfying the one-step test, hence a linear subspace of $V$; taking $\mathcal{W}$ to have two members gives the last sentence of the statement. [step 1.1, step 1.2, step 2.1, L2] ∎

## Remarks

- **The hypothesis that $\mathcal{W}$ is nonempty is load bearing.** The
  intersection of the empty family of subsets of $V$ is not a subset of $V$ by
  any convention used here, and step 1.1 is where the hypothesis is spent. The
  same hypothesis appears for the same reason in
  [[lem-intersection-of-subgroups]].

- **This is what makes the span definable.** The set of linear subspaces of $V$
  containing a given subset $S$ is nonempty, since $V$ itself belongs to it, so
  its intersection is a linear subspace, and it is by construction the smallest
  linear subspace containing $S$. That is [[def-linear-combination-and-span]], and
  the pattern is copied from [[def-generated-subgroup]].

- **Unions behave quite differently.** The union of two linear subspaces is almost
  never a linear subspace, and the companion examples page records the failure as
  a false statement.
