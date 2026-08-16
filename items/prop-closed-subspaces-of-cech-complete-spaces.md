---
id: prop-closed-subspaces-of-cech-complete-spaces
kind: proposition
title: "Closed subspaces of Čech-complete spaces are Čech-complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cech-complete-space, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

Every closed subspace of a Čech-complete space is Čech-complete.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A Tychonoff space $X$ is **Čech-complete** when there is a Hausdorff compactification $(K,i)$ of $X$ (def-compactification-of-a-tychonoff-space) for which $i[X]$ is a $G_\delta$ subset of $K$ (def-g-delta-and-f-sigma-in-a-topological-space). The definition asks for one compactification; thm-cech-completeness-is-independent-of-compactification proves the equivalent every-compactification form. ([[def-cech-complete-space]]).

[F2] Let $(X, \mathcal{T})$ be a topological space (def-topological-space), with subspaces as in def-subspace-topology-top and compactness as in def-compact-space. Then: 1. **Closed in compact is compact.** If $(X, \mathcal{T})$ is compact and $F \subseteq X$ is closed in $X$, then $F$ is a compact subset of $X$. 2. **Finite unions.** If $n \in \mathbb{N}$ and $K_0, \dots, K_n$ are compact subsets of $X$, then $K_0 \cup \dots \cup K_n$ is a compact subset of $X$. The union of the empty list is $\varnothing$, which is a compact subset of every space. Claim 1 needs $X$ to be compact and claim 2 does not; no hypothesis of any kind is placed on $X$ in claim 2. **No choice principle is used**: claim 1 selects nothing, taking a least index where a selection would be natural, and claim 2 makes finitely many selections through lem-finite-choice, a theorem of ZF. ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F3] Let $(X, \mathcal{T})$ be a Hausdorff topological space (def-hausdorff-space, def-topological-space), with compact subsets as in def-compact-space. Then: 1. **A point and a disjoint compact set are separated.** If $K \subseteq X$ is compact and $x \in X \setminus K$, there are $U, V \in \mathcal{T}$ with $$x \in U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$ 2. **Two disjoint compact sets are separated.** If $K, L \subseteq X$ are compact and $K \cap L = \varnothing$, there are $U, V \in \mathcal{T}$ with $$L \subseteq U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$ 3. **Compact implies closed.** Every compact subset of $X$ is closed in $X$. 4. **In a compact Hausdorff space the two classes coincide.** If in addition $(X, \mathcal{T})$ is compact, then a subset of $X$ is compact if and only if it is closed. **The proof is written choice-free, and that is not a stylistic preference.** The textbook argument says "for each $y \in K$ choose disjoint open $U_y, V_y$", which is a selection over an arbitrary index set and therefore an appeal to the full Axiom of Choice. What is done below instead is to take the family of **all** open $V$ that admit some open $U \ni x$ disjoint from them — a family cut out by a formula, with nothing selected — extract a finite subcover from it, and only then make finitely many selections, which lem-finite-choice supplies as a theorem of ZF. ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 The empty closed subspace is $G_\delta$ in its empty compactification. [given, F1, F2, F3]

2.1 Otherwise, if the space is $G_\delta$ in a compactification and the subspace is closed in the space, take its closure in the compactification. [step 1.1, F1, F3, F2]

3.1 Inside that compact closure, the subspace is the intersection of the inherited $G_\delta$ with an additional closed set, hence is $G_\delta$. [step 2.1, F3, F2, F1]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎

