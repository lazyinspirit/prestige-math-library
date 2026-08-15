---
id: thm-cech-complete-spaces-are-baire
kind: theorem
title: "Under Dependent Choice, every Čech-complete space is Baire"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cech-complete-space, def-dependent-choice, thm-compact-iff-fip, thm-the-separation-implication-chain, def-baire-space]
justified_by: []
aliases: []
landmark: true
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

Assume Dependent Choice. Every Čech-complete space is a Baire space.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A Tychonoff space $X$ is **Čech-complete** when there is a Hausdorff compactification $(K,i)$ of $X$ (def-compactification-of-a-tychonoff-space) for which $i[X]$ is a $G_\delta$ subset of $K$ (def-g-delta-and-f-sigma-in-a-topological-space). The definition asks for one compactification; thm-cech-completeness-is-independent-of-compactification proves the equivalent every-compactification form. ([[def-cech-complete-space]]).

[F2] Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]]).

[F3] Let $(X, \mathcal{T})$ be a topological space (def-topological-space). For a family $\mathcal{A}$ of subsets of $X$ write $$\bigcap \mathcal{A} \;:=\; \{\, x \in X : x \in A \text{ for every } A \in \mathcal{A} \,\},$$ so that $\bigcap \varnothing = X$, matching the convention for the empty finite intersection in def-finite-intersection-property. Then: 1. $(X, \mathcal{T})$ is compact (def-compact-space) **if and only if** every family $\mathcal{A}$ of closed subsets of $X$ with the finite intersection property (def-finite-intersection-property) satisfies $\bigcap \mathcal{A} \ne \varnothing$. 2. Equivalently: $(X, \mathcal{T})$ is compact if and only if every family of closed subsets of $X$ that is contained in some filter on $X$ (def-filter) has nonempty intersection, a family of subsets of $X$ lying in a filter exactly when it has the finite intersection property (lem-fip-generates-filter). No choice principle is used in either direction: complementation is a canonical bijection, so no member of a family ever has to be selected. ([[thm-compact-iff-fip]]).

[F4] Let $(X, \mathcal{T})$ be a topological space (def-topological-space). The following implications hold, and each is proved by an earlier item of this page. 1. **Perfectly normal implies completely normal**, assuming the Axiom of Countable Choice (def-countable-choice). 2. **Completely normal implies normal**, and **perfectly normal implies normal**. 3. **Normal together with $T_1$ implies $T_3$**, that is regular together with $T_1$. 4. **Completely regular implies regular**, and **Tychonoff implies $T_3$**. 5. **Regular together with $T_1$ implies Urysohn**, which implies **Hausdorff**, which implies **$T_1$**, which implies **$T_0$**. 6. **Metrizable implies every property named above**: a metrizable space is perfectly normal, completely normal, normal, Tychonoff, completely regular, $T_3$, regular, Urysohn, Hausdorff, $T_1$ and $T_0$, with no choice principle used. Reading the numbered axioms in order, clauses 1 to 5 give $$T_6 \Rightarrow T_5 \Rightarrow T_4 \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0 ,$$ the first arrow under $\mathrm{AC}_\omega$, together with $T_{3\frac12} \Rightarrow T_3$. **This is the whole of the classical chain that this page proves, and it is one arrow short of the classical chain.** The implication $T_4 \Rightarrow T_{3\frac12}$ — a normal $T_1$ space is completely regular — is Urysohn's lemma and is not available at this point in the reading order. Its absence is recorded, with what would license it, in this page's conventions remark; it is deliberately **not** asserted here, and no clause above may be read as giving it. ([[thm-the-separation-implication-chain]]).

[F5] A topological space $(X, \mathcal{T})$ (def-topological-space) is a **Baire space** when for every sequence $(U_n)_{n \in \mathbb{N}}$ of subsets of $X$ that are open and dense in $X$ (def-dense-top, def-sequence-convergence-top, def-natural-numbers), the intersection $\bigcap_{n \in \mathbb{N}} U_n$ is dense in $X$. ([[def-baire-space]]).

## Proof

**Proof technique:** direct.

1.1 Realise the space as the intersection of open sets in a compact Hausdorff space. [given, F3, F4, F5, F1]

2.1 Starting in a prescribed nonempty relatively open set, use regularity and density to choose nested nonempty ambient open sets with compact closures, each lying in the next $G_\delta$ layer and the next dense open set. [step 1.1, F3, F4, F5]

3.1 Dependent choice produces the chain; compactness gives a point in all closures, hence in the desired intersection. [step 2.1, F3, F4, F2]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
