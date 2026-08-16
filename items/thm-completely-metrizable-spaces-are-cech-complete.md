---
id: thm-completely-metrizable-spaces-are-cech-complete
kind: theorem
title: "Under the ultrafilter lemma and the Axiom of Choice, every completely metrizable space is Čech-complete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cech-complete-space, lem-complete-remetrisation, thm-stone-metric-spaces-are-paracompact, thm-metric-spaces-are-tychonoff-and-perfectly-normal, cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma, thm-cech-completeness-is-independent-of-compactification]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
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

Assume the ultrafilter lemma and the Axiom of Choice. Every completely metrizable space is Čech-complete.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A Tychonoff space $X$ is **Čech-complete** when there is a Hausdorff compactification $(K,i)$ of $X$ (def-compactification-of-a-tychonoff-space) for which $i[X]$ is a $G_\delta$ subset of $K$ (def-g-delta-and-f-sigma-in-a-topological-space). The definition asks for one compactification; thm-cech-completeness-is-independent-of-compactification proves the equivalent every-compactification form. ([[def-cech-complete-space]]).

[F2] Let $(X,d)$ be a metric space (def-metric-space) and let $\mathcal{T}_d$ be its metric topology (def-metric-topology). Call $\mathcal{T}_d$ **completely metrizable** if some metric $\rho$ on $X$ is topologically equivalent to $d$, that is $\mathcal{T}_\rho = \mathcal{T}_d$ (def-equivalent-metrics), and makes $(X,\rho)$ complete (def-complete-metric-space). Then: 1. **Homeomorphism invariance.** Let $(Y,e)$ be a metric space and let $h : X \to Y$ be a bijection (def-injection-surjection-bijection) such that $h$ and $h^{-1}$ are continuous (def-metric-continuity). If $\mathcal{T}_d$ is completely metrizable then so is $\mathcal{T}_e$. 2. **Closed subspaces.** If $\mathcal{T}_d$ is completely metrizable and $A \subseteq X$ is closed in $(X,d)$, then $\mathcal{T}_{d_A}$ is completely metrizable, $d_A$ being the subspace metric (def-isometry-and-metric-embedding). 3. **The property is strictly weaker than completeness.** Let $P := (0,\infty) \subseteq \mathbb{R}$ (def-interval) carry $d(x,y) := |x-y|$ (lem-real-line-is-a-metric-space). Then $(P,d)$ is **not** complete, while $$\rho_P(x,y) \;:=\; |x-y| \;+\; \left| \frac{1}{x} - \frac{1}{y} \right|$$ is a complete metric on $P$ with $\mathcal{T}_{\rho_P} = \mathcal{T}_d$. So $\mathcal{T}_d$ is completely metrizable although no completeness assumption holds for $d$ itself. Complete metrizability is a condition on the *collection of open sets* alone: the metric is quantified over and does not survive into the statement. That is exactly what completeness fails to be, and claim 3 shows the two conditions are genuinely different rather than merely stated differently. ([[lem-complete-remetrisation]]).

[F3] Assume the Axiom of Choice. Every metric space is paracompact. ([[thm-stone-metric-spaces-are-paracompact]]).

[F4] Consequently every metrizable space (def-metrizable-space) is **Tychonoff** and **perfectly normal**, and hence $T_6$, $T_5$, $T_4$, $T_{3\frac12}$, $T_3$, $T_{2\frac12}$, $T_2$, $T_1$ and $T_0$. ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]]).

[F5] Assume the ultrafilter lemma. If $X$ is Tychonoff, $e:X\to[0,1]^{C(X,[0,1])}$ is its full evaluation map, and $K=\overline{e[X]}$, then $(K,e)$ is a Hausdorff compactification of $X$. In particular every Tychonoff space has one. This statement uses the ultrafilter lemma only for compactness of the cube; it makes no assertion about dependent choice. ([[cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma]]).

[F6] Assume the ultrafilter lemma. A Tychonoff space is a $G_\delta$ subset of some Hausdorff compactification if and only if it is a $G_\delta$ subset of every Hausdorff compactification. ([[thm-cech-completeness-is-independent-of-compactification]]).

## Proof

**Proof technique:** direct.

1.1 The empty space is $G_\delta$ in its empty compactification. [given, F1, F6, F2]

2.1 Otherwise choose a compatible complete metric and locally finite refinements of the covers by balls of radius tending to zero. [step 1.1, F2, F1, F3]

3.1 In a Hausdorff compactification, extend the refined members to ambient open sets and use local finiteness to form open neighbourhoods whose intersection is exactly the original space: a point in every neighbourhood produces a Cauchy filter and hence a limit in the complete space. [step 2.1, F1, F2, F6, F4]

4.1 Invoke compactification independence only after this construction is established. [step 3.1, F1, F6, F5]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎

