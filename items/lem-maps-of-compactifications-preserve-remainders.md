---
id: lem-maps-of-compactifications-preserve-remainders
kind: lemma
title: "A map of Hausdorff compactifications carries the larger remainder onto the smaller remainder"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-compactification-of-a-tychonoff-space, thm-compactness-under-continuous-maps, thm-compact-subset-of-a-hausdorff-space-is-closed]
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

Let $X$ be dense in Hausdorff compactifications $K$ and $L$, and let $f:K\to L$ be continuous with $f|_X=\operatorname{id}_X$. Then $f$ is surjective and $f[K\setminus X]=L\setminus X$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A **Hausdorff compactification** of a space $X$ is a pair $(K,i)$ in which $K$ is compact (def-compact-space) and Hausdorff (def-hausdorff-space), and $i:X\to K$ is an embedding with dense image (def-homeomorphism-and-open-maps, def-dense-top). We identify $X$ with $i[X]$ only after naming $i$; the density condition is a condition on that named image. ([[def-compactification-of-a-tychonoff-space]]).

[F2] Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces (def-topological-space), and let $\mathbb{R}$ carry its usual topology, the metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$ (lem-real-line-is-a-metric-space, def-metric-topology, def-metrizable-space). Then: 1. **Continuous images.** If $f : X \to Y$ is continuous (def-continuous-map-top) and $(X, \mathcal{T}_X)$ is compact (def-compact-space), then $f[X]$ is a compact subset of $Y$. More generally, if $K \subseteq X$ is a compact subset of $X$ then $f[K]$ is a compact subset of $Y$. 2. **Extreme values.** If $(X, \mathcal{T}_X)$ is compact and nonempty and $g : X \to \mathbb{R}$ is continuous, then $g[X]$ has a maximum and a minimum (def-max-min): there are $x_{\max}, x_{\min} \in X$ with $$g(x_{\min}) \;\le\; g(x) \;\le\; g(x_{\max}) \qquad \text{for every } x \in X .$$ 3. **Compact to Hausdorff.** If $(X, \mathcal{T}_X)$ is compact, $(Y, \mathcal{T}_Y)$ is Hausdorff (def-hausdorff-space) and $f : X \to Y$ is a continuous bijection, then $f$ is a homeomorphism (def-homeomorphism-and-open-maps). Nonemptiness in claim 2 is a hypothesis and not an oversight: for $X = \varnothing$ the image is empty and has neither a maximum nor a minimum. **No choice principle is used**: the one selection made below is over a finite index set, where lem-finite-choice is a theorem of ZF. ([[thm-compactness-under-continuous-maps]]).

[F3] Let $(X, \mathcal{T})$ be a Hausdorff topological space (def-hausdorff-space, def-topological-space), with compact subsets as in def-compact-space. Then: 1. **A point and a disjoint compact set are separated.** If $K \subseteq X$ is compact and $x \in X \setminus K$, there are $U, V \in \mathcal{T}$ with $$x \in U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$ 2. **Two disjoint compact sets are separated.** If $K, L \subseteq X$ are compact and $K \cap L = \varnothing$, there are $U, V \in \mathcal{T}$ with $$L \subseteq U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$ 3. **Compact implies closed.** Every compact subset of $X$ is closed in $X$. 4. **In a compact Hausdorff space the two classes coincide.** If in addition $(X, \mathcal{T})$ is compact, then a subset of $X$ is compact if and only if it is closed. **The proof is written choice-free, and that is not a stylistic preference.** The textbook argument says "for each $y \in K$ choose disjoint open $U_y, V_y$", which is a selection over an arbitrary index set and therefore an appeal to the full Axiom of Choice. What is done below instead is to take the family of **all** open $V$ that admit some open $U \ni x$ disjoint from them — a family cut out by a formula, with nothing selected — extract a finite subcover from it, and only then make finitely many selections, which lem-finite-choice supplies as a theorem of ZF. ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 Let a continuous map between compactifications restrict to the identity on the dense copy of the space. [given, F2, F1, F3]

2.1 Compactness makes its image closed and density makes it surjective. [step 1.1, F3, F1, F2]

3.1 If a remainder point mapped into the dense copy, Hausdorff separation and density would contradict identity on the copy; conversely compactness of a fibre over a remainder point supplies a preimage outside the copy. [step 2.1, F3, F1, F2]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
