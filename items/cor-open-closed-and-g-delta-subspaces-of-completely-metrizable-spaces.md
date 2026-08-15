---
id: cor-open-closed-and-g-delta-subspaces-of-completely-metrizable-spaces
kind: corollary
title: "Open, closed, and $G_\\delta$ subspaces of completely metrizable spaces are completely metrizable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-open-subspace-complete-remetrisation, thm-alexandrov-complete-metrizability-characterisation, thm-complete-subspace-iff-closed, lem-complete-remetrisation]
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

Every open, closed, or $G_\delta$ subspace of a completely metrizable space is completely metrizable, including the empty subspace.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] If $X$ is completely metrizable and $U\subseteq X$ is open, then $U$ is completely metrizable in its subspace topology. ([[lem-open-subspace-complete-remetrisation]]).

[F2] Assume Dependent Choice. For a subspace $Y$ of a complete metric space $X$, $Y$ is completely metrizable if and only if $Y$ is a $G_\delta$ subset of $X$. ([[thm-alexandrov-complete-metrizability-characterisation]]).

[F3] Let $(X,d)$ be a metric space (def-metric-space) and let $A \subseteq X$ carry the subspace metric $d_A$ (def-isometry-and-metric-embedding). Then: 1. If $(A,d_A)$ is complete (def-complete-metric-space), then $A$ is closed in $(X,d)$ (def-metric-topology). **No hypothesis on $X$ is needed.** 2. If $(X,d)$ is complete and $A$ is closed in $(X,d)$, then $(A,d_A)$ is complete. Consequently, for a complete $(X,d)$ a subset $A \subseteq X$ is complete if and only if it is closed. ([[thm-complete-subspace-iff-closed]]).

[F4] Let $(X,d)$ be a metric space (def-metric-space) and let $\mathcal{T}_d$ be its metric topology (def-metric-topology). Call $\mathcal{T}_d$ **completely metrizable** if some metric $\rho$ on $X$ is topologically equivalent to $d$, that is $\mathcal{T}_\rho = \mathcal{T}_d$ (def-equivalent-metrics), and makes $(X,\rho)$ complete (def-complete-metric-space). Then: 1. **Homeomorphism invariance.** Let $(Y,e)$ be a metric space and let $h : X \to Y$ be a bijection (def-injection-surjection-bijection) such that $h$ and $h^{-1}$ are continuous (def-metric-continuity). If $\mathcal{T}_d$ is completely metrizable then so is $\mathcal{T}_e$. 2. **Closed subspaces.** If $\mathcal{T}_d$ is completely metrizable and $A \subseteq X$ is closed in $(X,d)$, then $\mathcal{T}_{d_A}$ is completely metrizable, $d_A$ being the subspace metric (def-isometry-and-metric-embedding). 3. **The property is strictly weaker than completeness.** Let $P := (0,\infty) \subseteq \mathbb{R}$ (def-interval) carry $d(x,y) := |x-y|$ (lem-real-line-is-a-metric-space). Then $(P,d)$ is **not** complete, while $$\rho_P(x,y) \;:=\; |x-y| \;+\; \left| \frac{1}{x} - \frac{1}{y} \right|$$ is a complete metric on $P$ with $\mathcal{T}_{\rho_P} = \mathcal{T}_d$. So $\mathcal{T}_d$ is completely metrizable although no completeness assumption holds for $d$ itself. Complete metrizability is a condition on the *collection of open sets* alone: the metric is quantified over and does not survive into the statement. That is exactly what completeness fails to be, and claim 3 shows the two conditions are genuinely different rather than merely stated differently. ([[lem-complete-remetrisation]]).

## Proof

**Proof technique:** direct.

1.1 Use the open-subspace lemma directly. [given, F1, F3, F4]

2.1 Choose a compatible complete metric for the ambient space; closed subsets are complete for its restriction, while arbitrary $G_\delta$ subsets fall under Alexandrov's theorem. [step 1.1, F4, F3, F2]

3.1 Include the empty subspace. [step 2.1, F1, F3, F2]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
