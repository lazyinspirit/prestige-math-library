---
id: thm-metrizable-cech-complete-spaces-are-completely-metrizable
kind: theorem
title: "Under the ultrafilter lemma, every metrizable Čech-complete space is completely metrizable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cech-complete-space, thm-cech-completeness-is-independent-of-compactification, thm-metric-completion-exists, cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma, thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable, thm-metric-spaces-are-tychonoff-and-perfectly-normal]
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

Assume the ultrafilter lemma, Dependent Choice and Countable Choice — the hypotheses carried by the compactification-independence theorem of [F2] and the completely-metrizable characterisation of [F5]. Every metrizable Čech-complete space is completely metrizable.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A Tychonoff space $X$ is **Čech-complete** when there is a Hausdorff compactification $(K,i)$ of $X$ (def-compactification-of-a-tychonoff-space) for which $i[X]$ is a $G_\delta$ subset of $K$ (def-g-delta-and-f-sigma-in-a-topological-space). The definition asks for one compactification; thm-cech-completeness-is-independent-of-compactification proves the equivalent every-compactification form. ([[def-cech-complete-space]]).

[F2] Assume the ultrafilter lemma and Dependent Choice. A Tychonoff space is a $G_\delta$ subset of some Hausdorff compactification if and only if it is a $G_\delta$ subset of every Hausdorff compactification. ([[thm-cech-completeness-is-independent-of-compactification]]).

[F3] Let $(X,d)$ be a metric space (def-metric-space) and let $\mathcal{C}$ be the set of all Cauchy sequences in $X$ (def-cauchy-in-metric). Then: 1. For all $x = (x_n)$ and $y = (y_n)$ in $\mathcal{C}$ the real sequence $\big(d(x_n,y_n)\big)_n$ converges, so $$\rho(x,y) \;:=\; \lim_{n} d(x_n,y_n)$$ is a single well-determined real (thm-cauchy-criterion-via-lub, lem-limit-unique). 2. The relation $x \sim y :\Longleftrightarrow \rho(x,y) = 0$ is an equivalence relation on $\mathcal{C}$. Write $\widehat{X} := \mathcal{C}/\!\sim$ for the set of its classes and $[x]$ for the class of $x$. 3. $\widehat{d}\big([x],[y]\big) := \rho(x,y)$ does not depend on the chosen representatives, and $\widehat{d}$ is a metric on $\widehat{X}$. 4. The map $\iota : X \to \widehat{X}$ sending $p$ to the class of the constant sequence at $p$ is an isometric embedding with dense image (def-isometry-and-metric-embedding, def-metric-interior-closure-boundary). 5. $(\widehat{X}, \widehat{d})$ is complete. Consequently $\big((\widehat{X},\widehat{d}), \iota\big)$ is a completion of $(X,d)$ (def-metric-completion), and **every metric space has a completion**. **The notation is kept honest.** A Cauchy sequence in $X$ need not converge in $X$, so no symbol $\lim_n x_n$ appears anywhere below; the only limits taken are limits of *real* sequences, and each is written only after its existence has been proved. The equivalence relation is defined and verified here rather than cited, as was done for def-integers, so that the construction is self-contained and its transitivity argument is visible at the point of use. ([[thm-metric-completion-exists]]).

[F4] Assume the ultrafilter lemma. If $X$ is Tychonoff, $e:X\to[0,1]^{C(X,[0,1])}$ is its full evaluation map, and $K=\overline{e[X]}$, then $(K,e)$ is a Hausdorff compactification of $X$. In particular every Tychonoff space has one. This statement uses the ultrafilter lemma only for compactness of the cube; it makes no assertion about dependent choice. ([[cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma]]).

[F5] Assume the Axiom of Countable Choice. If $(X,d)$ is a complete metric space and $Y\subseteq X$ is $G_\delta$ in $X$, then the subspace $Y$ is completely metrizable. ([[thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable]]).

[F6] Let $(X,d)$ be a metric space with its metric topology. Then $X$ is Tychonoff and perfectly normal; in particular every metric space is a Tychonoff space ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]]).

## Proof

**Proof technique:** direct.

1.1 The empty space has its unique compatible complete metric. [given, F3, F1, F5]

2.1 Otherwise embed the space densely in its metric completion. The completion is a metric space, so by [F6] it is Tychonoff, which is the hypothesis [F4] requires before a compactification may be formed; compactify it, and observe that the resulting compact space is also a compactification of the original dense subspace. [step 1.1, F3, F1, F2, F6]

3.1 Compactification independence makes the original space $G_\delta$ there and hence in the completion. [step 2.1, F1, F3, F2, F4]

4.1 Apply the $G_\delta$-subspace theorem to the complete metric completion. [step 3.1, F3, F5, F1]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎

