---
id: cor-locally-compact-hausdorff-spaces-are-cech-complete
kind: corollary
title: "Every locally compact Hausdorff space is Čech-complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cech-complete-space, thm-one-point-compactification-properties, def-g-delta-and-f-sigma-in-a-topological-space, thm-a-locally-compact-hausdorff-space-is-completely-regular]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

Assume the Axiom of Dependent Choice. Every locally compact Hausdorff space is Čech-complete.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A Tychonoff space $X$ is **Čech-complete** when there is a Hausdorff compactification $(K,i)$ of $X$ (def-compactification-of-a-tychonoff-space) for which $i[X]$ is a $G_\delta$ subset of $K$ (def-g-delta-and-f-sigma-in-a-topological-space). The definition asks for one compactification; thm-cech-completeness-is-independent-of-compactification proves the equivalent every-compactification form. ([[def-cech-complete-space]]).

[F2] Let $(X, \mathcal{T})$ be a topological space (def-topological-space) and let $(X^{*}, \mathcal{T}^{*})$ be its one-point compactification, with added point $\infty$ (def-one-point-compactification). Then: 1. **$X^{*}$ is compact** (def-compact-space). 2. **$X$ is an open subspace of $X^{*}$**: $X \in \mathcal{T}^{*}$, and the subspace topology that $X$ inherits from $X^{*}$ (def-subspace-topology-top) is $\mathcal{T}$ itself. 3. **$X$ is dense in $X^{*}$** (def-dense-top) **if and only if $X$ is not compact.** 4. **$X^{*}$ is Hausdorff** (def-hausdorff-space) **if and only if $X$ is locally compact** (def-locally-compact-space) **and Hausdorff.** In particular, a locally compact Hausdorff space is an open subspace of a compact Hausdorff space, which is the reason the construction is made. **No choice principle is used**: the only cover thinned below is thinned by the indexed form of lem-compactness-of-a-subspace-is-ambient, which returns its own indices. ([[thm-one-point-compactification-properties]]).

[F3] Let $(X, \mathcal{T})$ be a topological space (def-topological-space) and let $A \subseteq X$. $A$ is a **$G_\delta$ set of $X$** when there is a sequence $(V_n)_{n\in\mathbb N}$ of open subsets of $X$ with $A=\bigcap_{n\in\mathbb N}V_n$, and an **$F_\sigma$ set of $X$** when there is a sequence $(F_n)_{n\in\mathbb N}$ of closed subsets of $X$ with $A=\bigcup_{n\in\mathbb N}F_n$. ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[F4] **Assume the Axiom of Dependent Choice.** If $(X,\mathcal T)$ is locally compact and Hausdorff, then $X$ is completely regular, and hence, being Hausdorff, Tychonoff ([[thm-a-locally-compact-hausdorff-space-is-completely-regular]]).

## Proof

**Proof technique:** direct.

1.1 The empty space is compact and is $G_\delta$ in itself. [given, F2, F1, F3]

2.1 Čech-completeness is defined in [F1] for Tychonoff spaces only, so first record that the space qualifies: it is locally compact Hausdorff, so [F4] makes it completely regular and, being Hausdorff, Tychonoff. For a nonempty noncompact such space the one-point compactification is compact Hausdorff and contains the original space as an open subspace. [step 1.1, F2, F1, F3, F4]

3.1 An open subset is a $G_\delta$ by repeating it in a constant countable intersection, so it witnesses Čech-completeness; an already compact space is its own witness. [step 2.1, F2, F1, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎

