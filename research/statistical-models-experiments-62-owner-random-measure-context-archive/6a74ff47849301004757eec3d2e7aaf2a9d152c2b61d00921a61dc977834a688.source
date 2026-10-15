---
id: lem-locally-compact-second-countable-spaces-have-compact-exhaustions
kind: lemma
title: "Second-countable locally compact Hausdorff spaces admit compact exhaustions"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-topological-space
  - def-locally-compact-space
  - def-second-countable-space
  - def-hausdorff-space
  - def-compact-space
  - thm-locally-compact-hausdorff-basics
  - thm-closed-subspace-of-a-compact-space-is-compact
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Section 5.13: Locally quasi-compact spaces, Tag 08ZQ"
      url: "https://stacks.math.columbia.edu/tag/08ZQ"
verification:
  precheck: pending
---

## Statement

Let $S$ be locally compact, second countable, and Hausdorff. There is an
increasing sequence of compact subsets $K_n$ such that $\bigcup_{n\ge1}K_n=S$
and every compact subset of $S$ is contained in some $K_n$.

## Facts & Assumptions

**Given:** A topological space $S$ that is locally compact, second countable,
and Hausdorff.

[F1] Local compactness means each point has a compact neighbourhood, and
second countability supplies an at most countable basis.
([[def-locally-compact-space]], [[def-second-countable-space]])

[F2] In a locally compact Hausdorff space, for every open $O$ and $x\in O$
there is open $V$ with $x\in V\subseteq\overline V\subseteq O$ and
$\overline V$ compact. ([[thm-locally-compact-hausdorff-basics]])

[F3] A compact subset is compact in its subspace topology; in a Hausdorff
space, a closed subset of a compact space is compact.
([[def-compact-space]], [[thm-closed-subspace-of-a-compact-space-is-compact]])

## Proof

**Proof technique:** direct.

1.1 Fix an at most countable basis $\mathcal B$ for $S$ and let $\mathcal U=\{U\in\mathcal B:\overline U\text{ is compact}\}$. For any $x\in S$, [F2] with $O=S$ gives an open $V$ containing $x$ whose closure is compact. The basis property gives $U\in\mathcal B$ with $x\in U\subseteq V$; then $\overline U\subseteq\overline V$, and $\overline U$ is closed in the compact space $\overline V$, hence compact by [F3]. Thus $\mathcal U$ is an at most countable open cover of $S$. [given, F1, F2, F3, choose]

2.1 If $S=\varnothing$, take $K_n=\varnothing$. Otherwise enumerate the subfamily $\mathcal U$ by filtering the fixed countable basis in its given enumeration; if the subfamily is finite, repeat its last member. Put $K_n=\bigcup_{j=1}^n\overline U_j$. An open cover of $K_n$ restricts to an open cover of each of the finitely many compact sets $\overline U_j$; taking the union of their finite subcovers gives a finite subcover of $K_n$. Thus $K_n$ is compact. The sequence is increasing, and its union is $S$ because $\mathcal U$ covers $S$. [step 1.1, F3, construct]

3.1 Let $C\subseteq S$ be compact. The open cover $\mathcal U$ of $C$ has a finite subcover by the definition of compactness. Let $n$ be at least every index in that finite subcover. Then $C\subseteq\bigcup_{j=1}^nU_j\subseteq K_n$. Thus every compact $C$ is contained in some $K_n$. [step 1.1, step 2.1, F3]

4.1 Steps 2.1 and 3.1 give the required increasing compact exhaustion and its cofinal containment property. The construction uses only a fixed countable basis and finite subcovers, so it invokes no choice principle. [step 2.1, step 3.1] ∎

