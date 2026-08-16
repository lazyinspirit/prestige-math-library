---
id: cor-completely-metrizable-spaces-are-baire
kind: corollary
title: "Under Dependent Choice, every completely metrizable space is Baire"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-complete-remetrisation, thm-baire-category-for-complete-metric-spaces, def-baire-space]
justified_by: []
aliases: []
landmark: true
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

Assume Dependent Choice. Every completely metrizable space is a Baire space.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $(X,d)$ be a metric space (def-metric-space) and let $\mathcal{T}_d$ be its metric topology (def-metric-topology). Call $\mathcal{T}_d$ **completely metrizable** if some metric $\rho$ on $X$ is topologically equivalent to $d$, that is $\mathcal{T}_\rho = \mathcal{T}_d$ (def-equivalent-metrics), and makes $(X,\rho)$ complete (def-complete-metric-space). Then: 1. **Homeomorphism invariance.** Let $(Y,e)$ be a metric space and let $h : X \to Y$ be a bijection (def-injection-surjection-bijection) such that $h$ and $h^{-1}$ are continuous (def-metric-continuity). If $\mathcal{T}_d$ is completely metrizable then so is $\mathcal{T}_e$. 2. **Closed subspaces.** If $\mathcal{T}_d$ is completely metrizable and $A \subseteq X$ is closed in $(X,d)$, then $\mathcal{T}_{d_A}$ is completely metrizable, $d_A$ being the subspace metric (def-isometry-and-metric-embedding). 3. **The property is strictly weaker than completeness.** Let $P := (0,\infty) \subseteq \mathbb{R}$ (def-interval) carry $d(x,y) := |x-y|$ (lem-real-line-is-a-metric-space). Then $(P,d)$ is **not** complete, while $$\rho_P(x,y) \;:=\; |x-y| \;+\; \left| \frac{1}{x} - \frac{1}{y} \right|$$ is a complete metric on $P$ with $\mathcal{T}_{\rho_P} = \mathcal{T}_d$. So $\mathcal{T}_d$ is completely metrizable although no completeness assumption holds for $d$ itself. Complete metrizability is a condition on the *collection of open sets* alone: the metric is quantified over and does not survive into the statement. That is exactly what completeness fails to be, and claim 3 shows the two conditions are genuinely different rather than merely stated differently. ([[lem-complete-remetrisation]]).

[F2] Assume the Axiom of Dependent Choice ($\mathrm{DC}$). If a nonempty metric space $X$ is complete, then it is not the union of a sequence of closed sets each having empty interior. Equivalently, the intersection of countably many open dense subsets of $X$ is dense. ([[thm-baire-category-for-complete-metric-spaces]]).

[F3] A topological space $(X, \mathcal{T})$ (def-topological-space) is a **Baire space** when for every sequence $(U_n)_{n \in \mathbb{N}}$ of subsets of $X$ that are open and dense in $X$ (def-dense-top, def-sequence-convergence-top, def-natural-numbers), the intersection $\bigcap_{n \in \mathbb{N}} U_n$ is dense in $X$. ([[def-baire-space]]).

## Proof

**Proof technique:** direct.

1.1 Choose a compatible complete metric using the definition already established by complete remetrisation. [given, F1, F2]

2.1 Apply the published complete-metric Baire category theorem [F2] to the whole space with the compatible complete metric of step 1.1, not to its open subspaces: restricting a complete metric to an open subspace need not leave it complete, as $(0,1)$ with the restricted Euclidean metric shows. [F2] already concludes that a countable intersection of dense open subsets of the whole space is dense, which is the Baire property; translate that conclusion back to the topology. The empty space is Baire vacuously. [step 1.1, F1, F2, F3]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
