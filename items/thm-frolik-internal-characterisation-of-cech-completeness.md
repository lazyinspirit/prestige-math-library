---
id: thm-frolik-internal-characterisation-of-cech-completeness
kind: theorem
title: "Under the ultrafilter lemma, Frolík's internal open-cover characterisation of Čech-completeness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cech-complete-space, thm-cech-completeness-is-independent-of-compactification, thm-compact-iff-fip, thm-the-separation-implication-chain, def-filter-base, thm-a-compact-hausdorff-space-is-regular-and-normal]
justified_by: []
aliases: []
landmark: true
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

Assume the ultrafilter lemma and Dependent Choice, the hypotheses carried by the compactification-independence theorem this proof uses. A Tychonoff space $X$ is Čech-complete if and only if there is a sequence $(\mathcal U_n)$ of open covers of $X$ such that every centred family of closed subsets of $X$ which is subordinate to every $\mathcal U_n$ has nonempty intersection.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A Tychonoff space $X$ is **Čech-complete** when there is a Hausdorff compactification $(K,i)$ of $X$ (def-compactification-of-a-tychonoff-space) for which $i[X]$ is a $G_\delta$ subset of $K$ (def-g-delta-and-f-sigma-in-a-topological-space). The definition asks for one compactification; thm-cech-completeness-is-independent-of-compactification proves the equivalent every-compactification form. ([[def-cech-complete-space]]).

[F2] Assume the ultrafilter lemma and Dependent Choice. A Tychonoff space is a $G_\delta$ subset of some Hausdorff compactification if and only if it is a $G_\delta$ subset of every Hausdorff compactification. ([[thm-cech-completeness-is-independent-of-compactification]]).

[F3] Let $(X, \mathcal{T})$ be a topological space (def-topological-space). For a family $\mathcal{A}$ of subsets of $X$ write $$\bigcap \mathcal{A} \;:=\; \{\, x \in X : x \in A \text{ for every } A \in \mathcal{A} \,\},$$ so that $\bigcap \varnothing = X$, matching the convention for the empty finite intersection in def-finite-intersection-property. Then: 1. $(X, \mathcal{T})$ is compact (def-compact-space) **if and only if** every family $\mathcal{A}$ of closed subsets of $X$ with the finite intersection property (def-finite-intersection-property) satisfies $\bigcap \mathcal{A} \ne \varnothing$. 2. Equivalently: $(X, \mathcal{T})$ is compact if and only if every family of closed subsets of $X$ that is contained in some filter on $X$ (def-filter) has nonempty intersection, a family of subsets of $X$ lying in a filter exactly when it has the finite intersection property (lem-fip-generates-filter). No choice principle is used in either direction: complementation is a canonical bijection, so no member of a family ever has to be selected. ([[thm-compact-iff-fip]]).

[F4] Let $(X, \mathcal{T})$ be a topological space (def-topological-space). The following implications hold, and each is proved by an earlier item of this page. 1. **Perfectly normal implies completely normal**, assuming the Axiom of Countable Choice (def-countable-choice). 2. **Completely normal implies normal**, and **perfectly normal implies normal**. 3. **Normal together with $T_1$ implies $T_3$**, that is regular together with $T_1$. 4. **Completely regular implies regular**, and **Tychonoff implies $T_3$**. 5. **Regular together with $T_1$ implies Urysohn**, which implies **Hausdorff**, which implies **$T_1$**, which implies **$T_0$**. 6. **Metrizable implies every property named above**: a metrizable space is perfectly normal, completely normal, normal, Tychonoff, completely regular, $T_3$, regular, Urysohn, Hausdorff, $T_1$ and $T_0$, with no choice principle used. Reading the numbered axioms in order, clauses 1 to 5 give $$T_6 \Rightarrow T_5 \Rightarrow T_4 \Rightarrow T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0 ,$$ the first arrow under $\mathrm{AC}_\omega$, together with $T_{3\frac12} \Rightarrow T_3$. **This is the whole of the classical chain that this page proves, and it is one arrow short of the classical chain.** The implication $T_4 \Rightarrow T_{3\frac12}$ — a normal $T_1$ space is completely regular — is Urysohn's lemma and is not available at this point in the reading order. Its absence is recorded, with what would license it, in this page's conventions remark; it is deliberately **not** asserted here, and no clause above may be read as giving it. ([[thm-the-separation-implication-chain]]).

[F5] Let $X$ be a set. A family $\mathcal{B} \subseteq \mathcal{P}(X)$ is a **filter base on $X$** when it satisfies: - **(B1)** *nonemptiness*: $\mathcal{B} \neq \emptyset$; - **(B2)** *properness*: $\emptyset \notin \mathcal{B}$; - **(B3)** *downward directedness*: for all $B_1, B_2 \in \mathcal{B}$ there is $B_3 \in \mathcal{B}$ with $B_3 \subseteq B_1 \cap B_2$. ([[def-filter-base]]).

[F6] Let $X$ be a compact Hausdorff topological space. Then $X$ is **regular**, and $X$ is **normal** ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

## Proof

**Proof technique:** direct.

1.1 From a $G_\delta$ presentation in a compactification, use regularity of the compactification to choose open covers whose ambient closures lie in the successive layers. The compactification is compact Hausdorff, so [F6] supplies exactly that regularity; [F4] is the separation chain and does not state the compact-Hausdorff-to-regular implication. [given, F1, F2, F3, F6]

2.1 A centred family subordinate to every cover has centred ambient closures, hence a compactness cluster point; the layer condition puts that point back in the original space and closedness puts it in every family member. [step 1.1, F3, F4, F1]

3.1 Conversely, apply the centred-family condition to neighbourhood traces of each remainder point to construct countably many ambient open sets whose intersection excludes the whole remainder. [step 2.1, F3, F4, F5]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
