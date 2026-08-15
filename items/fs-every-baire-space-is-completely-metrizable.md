---
id: fs-every-baire-space-is-completely-metrizable
kind: false-statement
title: "Every Baire space is completely metrizable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-baire-category-locally-compact-hausdorff, thm-tychonoff, def-first-countable-top, thm-countable-union-of-countable, lem-complete-remetrisation]
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
pipeline_run: null
---

## Statement

The false claim is: every Baire space is completely metrizable.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] **Assume the Axiom of Dependent Choice** (def-dependent-choice). Let $(X, \mathcal{T})$ be a locally compact Hausdorff space (def-locally-compact-space, def-hausdorff-space, def-topological-space). Then $X$ is a Baire space (def-baire-space): for every sequence $(U_n)_{n \in \mathbb{N}}$ of dense open subsets of $X$ (def-dense-top, def-sequence-convergence-top), the intersection $\bigcap_{n \in \mathbb{N}} U_n$ is dense in $X$. **Dependent choice is sufficient here and no claim of necessity is made.** The several statements that go by the name "Baire category theorem" are inequivalent over ZF, and the choice principles they correspond to differ; that account, including the fact that the compact Hausdorff version is equivalent to a principle strictly weaker than dependent choice, is rem-baire-category-choice-strength, which this library states and does not prove. Nothing below asserts that dependent choice is needed for the statement above. ([[thm-baire-category-locally-compact-hausdorff]]).

[F2] **Assume the Axiom of Choice** (def-axiom-of-choice). Let $I$ be a set and let $(X_i, \mathcal{T}_i)_{i \in I}$ be a family of compact topological spaces (def-compact-space, def-topological-space). Then the product $$P \;:=\; \prod_{i \in I} X_i$$ with the product topology (def-product-topology) is compact. **The Axiom of Choice is spent twice, and both uses are flagged below.** Once inside thm-alexander-subbase-lemma, through Zorn's lemma (thm-zorn), and once directly at step 2.1, to produce a point of a product of nonempty sets. ([[thm-tychonoff]]).

[F3] A topological space $(X, \mathcal{T})$ (def-topological-space) is **first countable** if every point of $X$ has an at most countable neighbourhood base: for each $x \in X$ there is a family $\mathcal{B}_x \subseteq \mathcal{N}(x)$ that is at most countable (def-countable, def-equinumerous) and such that every neighbourhood of $x$ contains a member of $\mathcal{B}_x$ (def-neighbourhood-top). ([[def-first-countable-top]]).

[F4] **Assume the Axiom of Countable Choice**. Let $(A_n)_{n \in \mathbb{N}}$ be a family of at most countable sets indexed by $\mathbb{N}$. Then $$U = \bigcup_{n \in \mathbb{N}} A_n$$ is at most countable ([[thm-countable-union-of-countable]]).

[F5] Let $(X,d)$ be a metric space (def-metric-space) and let $\mathcal{T}_d$ be its metric topology (def-metric-topology). Call $\mathcal{T}_d$ **completely metrizable** if some metric $\rho$ on $X$ is topologically equivalent to $d$, that is $\mathcal{T}_\rho = \mathcal{T}_d$ (def-equivalent-metrics), and makes $(X,\rho)$ complete (def-complete-metric-space). Then: 1. **Homeomorphism invariance.** Let $(Y,e)$ be a metric space and let $h : X \to Y$ be a bijection (def-injection-surjection-bijection) such that $h$ and $h^{-1}$ are continuous (def-metric-continuity). If $\mathcal{T}_d$ is completely metrizable then so is $\mathcal{T}_e$. 2. **Closed subspaces.** If $\mathcal{T}_d$ is completely metrizable and $A \subseteq X$ is closed in $(X,d)$, then $\mathcal{T}_{d_A}$ is completely metrizable, $d_A$ being the subspace metric (def-isometry-and-metric-embedding). 3. **The property is strictly weaker than completeness.** Let $P := (0,\infty) \subseteq \mathbb{R}$ (def-interval) carry $d(x,y) := |x-y|$ (lem-real-line-is-a-metric-space). Then $(P,d)$ is **not** complete, while $$\rho_P(x,y) \;:=\; |x-y| \;+\; \left| \frac{1}{x} - \frac{1}{y} \right|$$ is a complete metric on $P$ with $\mathcal{T}_{\rho_P} = \mathcal{T}_d$. So $\mathcal{T}_d$ is completely metrizable although no completeness assumption holds for $d$ itself. Complete metrizability is a condition on the *collection of open sets* alone: the metric is quantified over and does not survive into the statement. That is exactly what completeness fails to be, and claim 3 shows the two conditions are genuinely different rather than merely stated differently. ([[lem-complete-remetrisation]]).

## Refutation

**Proof technique:** direct.

1.1 Refute the claim with the Cantor cube $\{0,1\}^{\mathbb R}$. [given, F4, F1, F5]

2.1 It is compact Hausdorff and therefore Baire under Dependent Choice, but a countable local base at a point mentions only countably many finite coordinate sets; changing an unmentioned coordinate contradicts that it is a base. [step 1.1, F1, F4, F3, F2]

3.1 Hence it is not first countable, not metrizable, and not completely metrizable. [step 2.1, F5, F3, F4]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
