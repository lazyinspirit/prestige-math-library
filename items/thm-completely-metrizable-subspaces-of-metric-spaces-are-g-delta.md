---
id: thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta
kind: theorem
title: "Every completely metrizable subspace of a metric space is $G_\\delta$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-complete-remetrisation, def-g-delta-and-f-sigma-in-a-topological-space, def-dependent-choice, thm-metric-hausdorff-separation]
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

Assume Dependent Choice. If $Y$ is a completely metrizable subspace of a metric space $X$, then $Y$ is a $G_\delta$ subset of $X$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $(X,d)$ be a metric space (def-metric-space) and let $\mathcal{T}_d$ be its metric topology (def-metric-topology). Call $\mathcal{T}_d$ **completely metrizable** if some metric $\rho$ on $X$ is topologically equivalent to $d$, that is $\mathcal{T}_\rho = \mathcal{T}_d$ (def-equivalent-metrics), and makes $(X,\rho)$ complete (def-complete-metric-space). Then: 1. **Homeomorphism invariance.** Let $(Y,e)$ be a metric space and let $h : X \to Y$ be a bijection (def-injection-surjection-bijection) such that $h$ and $h^{-1}$ are continuous (def-metric-continuity). If $\mathcal{T}_d$ is completely metrizable then so is $\mathcal{T}_e$. 2. **Closed subspaces.** If $\mathcal{T}_d$ is completely metrizable and $A \subseteq X$ is closed in $(X,d)$, then $\mathcal{T}_{d_A}$ is completely metrizable, $d_A$ being the subspace metric (def-isometry-and-metric-embedding). 3. **The property is strictly weaker than completeness.** Let $P := (0,\infty) \subseteq \mathbb{R}$ (def-interval) carry $d(x,y) := |x-y|$ (lem-real-line-is-a-metric-space). Then $(P,d)$ is **not** complete, while $$\rho_P(x,y) \;:=\; |x-y| \;+\; \left| \frac{1}{x} - \frac{1}{y} \right|$$ is a complete metric on $P$ with $\mathcal{T}_{\rho_P} = \mathcal{T}_d$. So $\mathcal{T}_d$ is completely metrizable although no completeness assumption holds for $d$ itself. Complete metrizability is a condition on the *collection of open sets* alone: the metric is quantified over and does not survive into the statement. That is exactly what completeness fails to be, and claim 3 shows the two conditions are genuinely different rather than merely stated differently. ([[lem-complete-remetrisation]]).

[F2] Let $(X, \mathcal{T})$ be a topological space (def-topological-space) and let $A \subseteq X$. ([[def-g-delta-and-f-sigma-in-a-topological-space]]).

[F3] Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]]).

[F4] Let $(X,d)$ be a metric space (def-metric-space) and let $p, q \in X$ with $p \ne q$. Put $r := d(p,q)/2$. Then $r 0$ and $$B(p,r) \cap B(q,r) = \emptyset .$$ Both sets are open (thm-metric-open-set-algebra) and contain $p$ respectively $q$ (def-metric-ball), so every metric space is **Hausdorff**: distinct points are separated by disjoint open sets (def-metric-topology). ([[thm-metric-hausdorff-separation]]).

## Proof

**Proof technique:** direct.

1.1 The empty subspace is the constant countable intersection of the ambient open set $\varnothing$. [given, F4, F1, F2]

2.1 For a nonempty subspace, at each scale cover it by ambient open sets having small diameter in a chosen compatible complete metric, and let $G_n$ be their ambient union. [step 1.1, F1, F4]

3.1 A point in every $G_n$ yields, using dependent choice, a sequence in the subspace that is Cauchy in the complete metric and converges to the point in the ambient metric. [step 2.1, F1, F4, F3]

4.1 Hausdorff uniqueness puts the point back in the subspace. [step 3.1, F4, F1]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎

