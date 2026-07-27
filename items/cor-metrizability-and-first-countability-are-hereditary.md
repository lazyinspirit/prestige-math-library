---
id: cor-metrizability-and-first-countability-are-hereditary
kind: corollary
title: "Every subspace of a metrizable space is metrizable and every subspace of a first countable space is first countable, the metric case being the subspace metric already identified with the subspace topology"
status: published
origin: session
deps: [def-hereditary-property, def-metrizable-space, def-isometry-and-metric-embedding,
       def-subspace-topology-top, def-first-countable-top, def-neighbourhood-top,
       def-metric-topology, def-countable, lem-countable-iff-surjection-from-n,
       def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "metrizability and first countability are hereditary"
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
    - title: "Metrizable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metrizable_space"
    - title: "First-countable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First-countable_space"
    - title: "Hereditary property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hereditary_property"
pipeline_run: null
---

## Statement

Both of the following properties of topological spaces are **hereditary**
([[def-hereditary-property]]).

1. **Metrizability** ([[def-metrizable-space]]). If $\mathcal{T}$ is induced by a
   metric $d$ on $X$ and $S \subseteq X$, then the subspace topology
   $\mathcal{T}_S$ ([[def-subspace-topology-top]]) is induced by the subspace
   metric $d_S = d \restriction (S \times S)$
   ([[def-isometry-and-metric-embedding]]). So a subspace of a metrizable space
   is metrizable, and a metric inducing its topology is available explicitly and
   not merely asserted to exist.
2. **First countability** ([[def-first-countable-top]]). If every point of $X$
   has an at most countable neighbourhood base and $S \subseteq X$, then every
   point of $S$ has an at most countable neighbourhood base in
   $(S, \mathcal{T}_S)$, namely the family of traces on $S$ of the members of a
   base at that point in $X$.

Claim 1 is a corollary in the strict sense: the identification of the subspace
topology with the metric topology of the subspace metric is discharged inside
[[def-metrizable-space]], and nothing is reproved here.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$, a subset $S \subseteq X$ with the subspace topology $\mathcal{T}_S = \{\, U \cap S : U \in \mathcal{T} \,\}$, and a point $x \in S$.

[A1] A space is metrizable when some metric on it has the given topology as its metric topology ([[def-metrizable-space]], [[def-metric-topology]]).

[A2] $N$ is a neighbourhood of $x$ in a space when some open set $U$ of that space satisfies $x \in U \subseteq N$; a family $\mathcal{B}_x$ of neighbourhoods of $x$ is a neighbourhood base at $x$ when every neighbourhood of $x$ contains a member of it ([[def-neighbourhood-top]]).

[A3] A space is first countable when every one of its points has an at most countable neighbourhood base ([[def-first-countable-top]], [[def-countable]]).

[L1] For $A \subseteq X$ and a metric $d$ on $X$, the subspace topology $\{\, U \cap A : U \in \mathcal{T}_d \,\}$ is exactly the metric topology of the subspace metric $d_A$ ([[def-metrizable-space]], subspaces bullet; [[def-isometry-and-metric-embedding]]).

[L2] $\mathcal{T}_S$ is a topology on $S$, and its members are exactly the traces $U \cap S$ with $U \in \mathcal{T}$ ([[def-subspace-topology-top]], [[def-topological-space]]).

[L3] A nonempty set is at most countable if and only if it admits a surjection from $\mathbb{N}$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L4] A property $P$ is hereditary when every subspace of every space satisfying $P$ satisfies $P$ ([[def-hereditary-property]]).

## Proof

**Proof technique:** direct.

1.1 Let $X$ be metrizable and let $d$ be a metric on $X$ with $\mathcal{T}_d = \mathcal{T}$; such a $d$ exists by [A1]. [A1, choose]

1.2 Let $X$ be first countable and let $\mathcal{B}_x$ be an at most countable neighbourhood base at $x$ in $X$; such a family exists by [A3]. [A3, choose]

2.1 $\mathcal{B}_x$ is nonempty, since $X$ itself is a neighbourhood of $x$ and so contains a member of $\mathcal{B}_x$. [A2, step 1.2]

2.2 By [L1] applied with $A := S$, the family $\{\, U \cap S : U \in \mathcal{T}_d \,\}$ is the metric topology of $d_S$; and $\mathcal{T}_d = \mathcal{T}$ by step 1.1, so that family is $\mathcal{T}_S$ by [L2]. [step 1.1, L1, L2]

2.3 Put $\mathcal{B}^S_x := \{\, N \cap S : N \in \mathcal{B}_x \,\}$. Each of its members is a neighbourhood of $x$ in $S$: given $N \in \mathcal{B}_x$ there is $U \in \mathcal{T}$ with $x \in U \subseteq N$, and then $U \cap S \in \mathcal{T}_S$ with $x \in U \cap S \subseteq N \cap S$. [step 1.2, A2, L2]

2.4 Every neighbourhood $M$ of $x$ in $S$ contains a member of $\mathcal{B}^S_x$: fix $W \in \mathcal{T}_S$ with $x \in W \subseteq M$ and write $W = U \cap S$ with $U \in \mathcal{T}$ by [L2]; then $U$ is a neighbourhood of $x$ in $X$, so some $N \in \mathcal{B}_x$ satisfies $N \subseteq U$, and $N \cap S \subseteq U \cap S = W \subseteq M$. [step 1.2, A2, L2]

3.1 $\mathcal{B}^S_x$ is nonempty and at most countable: by step 2.1 and [L3] there is a surjection $s : \mathbb{N} \to \mathcal{B}_x$, and $k \mapsto s(k) \cap S$ is then a surjection $\mathbb{N} \to \mathcal{B}^S_x$, so [L3] applies again. [step 2.1, L3]

3.2 By step 2.2 the topology $\mathcal{T}_S$ is the metric topology of the metric $d_S$ on $S$, so $(S,\mathcal{T}_S)$ is metrizable by [A1]; as $X$ and $S$ were arbitrary, metrizability is hereditary by [L4]. This is claim 1. [step 2.2, A1, L4]

4.1 By steps 2.3, 2.4 and 3.1 the family $\mathcal{B}^S_x$ is an at most countable neighbourhood base at $x$ in $(S,\mathcal{T}_S)$, and $x \in S$ was arbitrary, so $(S,\mathcal{T}_S)$ is first countable by [A3]; as $X$ and $S$ were arbitrary, first countability is hereditary by [L4]. This is claim 2. [step 2.3, step 2.4, step 3.1, A2, A3, L4] ∎

## Remarks

- **No choice principle is spent.** The metric $d_S$ is a restriction, and the
  neighbourhood base $\mathcal{B}^S_x$ is the image of a given family under an
  explicit map, so the enumeration of step 3.1 is produced from a given
  enumeration rather than selected. The only selections in the proof are the
  single metric of step 1.1 and the single family of step 1.2, each of which
  exists by hypothesis for the one space under consideration.

- **Neither converse holds, and neither is claimed.** A subspace of a
  non-metrizable space may perfectly well be metrizable, every one-point subspace
  being so; heredity is a statement in one direction only.

- **The metric is not canonical, and the topology is.** Claim 1 produces *a*
  metric on $S$, the restriction of the one chosen on $X$; a different metric on
  $X$ inducing the same topology restricts to a different metric on $S$ inducing
  the same subspace topology ([[def-metrizable-space]]). What is hereditary is
  the existence of a metric, which is a property of the topology alone.
