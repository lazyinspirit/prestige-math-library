---
id: thm-relative-consistency-dc-without-stone
kind: theorem
title: "Relative consistency of DC with failure of Stone's theorem"
status: draft
origin: pipeline
deps: [def-good-tree-watson-symmetric-stone-model, lem-good-tree-watson-omega-sequence-closure, lem-good-tree-watson-selector-obstruction, def-dependent-choice, def-paracompact-space, def-cover-refinement-and-local-finiteness, thm-formal-consistency-of-zfc-plus-gch-from-zf, def-metric-space, def-metric-ball, def-metric-topology, thm-metric-open-set-algebra, def-topological-space, def-compact-space, thm-forcing-theorem, thm-hereditarily-symmetric-interpretations-form-a-zf-model]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "C. Good, I. J. Tree, and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf"
      locator: "Sections 2-4, printed pp. 2-9"
    - title: "Thomas J. Jech, The Axiom of Choice"
      url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"
      locator: "Chapter 8, §2, Lemma 8.5, printed pp. 123-124"
---

## Statement

If $\mathrm{ZF}$ is consistent, then $\mathrm{ZF} + \mathrm{DC}$ is
consistent with the failure of Stone's theorem: there is a model of
$\mathrm{ZF} + \mathrm{DC}$ ([[def-dependent-choice]]) containing a metric
space that is not paracompact ([[def-paracompact-space]],
[[def-cover-refinement-and-local-finiteness]]). The witness space of this
separation is *not* zero-dimensional: it is the metric sum of the nondegenerate
connected components of fact [F4], so no base of clopen sets can exist. (The
source's zero-dimensional witness is a different space, the rational-parameter
subset $\bigcup_n Q_n$, whose nonparacompactness is proved there in
$\mathrm{ZF}$ without DC.)

## Facts & Assumptions

**Given:** The regular-$\lambda$ symmetric model of [[def-good-tree-watson-symmetric-stone-model]] with $\lambda = \omega_1$, its components $R_\xi$, and the assumed consistency of $\mathrm{ZF}$.

[F1] The model $N$ is a transitive model of ZF between the ground model and the full extension, and it is closed under $\omega$-sequences from the full extension ([[thm-hereditarily-symmetric-interpretations-form-a-zf-model]], [[lem-good-tree-watson-omega-sequence-closure]], [[thm-forcing-theorem]]).

[F2] Dependent choice holds in $N$: given a relation $R$ on a set of $N$ that is entire there, DC in the full extension supplies an $\omega$-sequence of $R$-related points, and by [F1] that sequence lies in $N$. ([[def-dependent-choice]])

[F3] No function of $N$ chooses a nonempty proper subset of every component $R_\xi$ ([[lem-good-tree-watson-selector-obstruction]]).

[F4] The metric sum $\bigsqcup_{\xi<\lambda} R_\xi$ carries the metric that agrees with the metric of each component and puts distance $1$ between different components; its topology is the topological sum of the components, each $R_\xi$ is a clopen connected subspace with more than one point, and the whole space is metrizable ([[def-metric-space]], [[def-metric-ball]], [[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-topological-space]]). Because a clopen connected set with more than one point has no proper nonempty clopen subset, the space has no base of clopen sets and is therefore not zero-dimensional.

[F5] The verified constructible-universe reduction gives $\operatorname{Con}(\mathrm{ZF})\Rightarrow\operatorname{Con}(\mathrm{ZFC}+\mathrm{GCH})$ ([[thm-formal-consistency-of-zfc-plus-gch-from-zf]]). Good--Tree--Watson's regular-$\lambda$ construction is then an external forcing-and-symmetric-model construction over that ground model; the source's discussion after Theorem 3 supplies the regular-$\lambda$ replacement used here. No formal proof-code reduction for this construction is asserted. [source]

## Proof

**Proof technique:** direct.

1.1 Assume $\operatorname{Con}(\mathrm{ZF})$. By [F5], start with a model of $\mathrm{ZFC}+\mathrm{GCH}$ and form the regular-$\lambda$ Good--Tree--Watson symmetric model with $\lambda = \omega_1$. [given, F5]

2.1 The model satisfies DC by [F2], because every $\omega$-sequence in the full extension with values in $N$ is already in $N$ by [F1]. [step 1.1, F1, F2]

2.2 In $N$ form the metric sum $X := \bigsqcup_{\xi<\lambda} R_\xi$ with the metric of [F4]; it is a metrizable space whose components $R_\xi$ are clopen and connected. [step 1.1, F4]

3.1 Let $\mathcal{U}$ be the open cover of $X$ consisting of all open intervals with endpoints in the dense rational structure of the components, as in the cited theorem; $\mathcal{U}$ is an open cover of $X$ by [F4]. [step 2.2, F4]

4.1 If $\mathcal{U}$ had a locally finite open refinement $\mathcal{V}$, define $S := \{\, x \in X : x \notin \overline{V} \setminus V \text{ for every } V \in \mathcal{V} \,\}$ and $S_\xi := S \cap R_\xi$; then $S_\xi$ is nonempty: fix $x \in R_\xi$ and let $W$ be an open neighbourhood of $x$ meeting only the finitely many members $V_0,\dots,V_k$ of $\mathcal{V}$; define a subfamily $F$ of $\{V_0,\dots,V_k\}$ by the recursion $V_i \in F$ if and only if $W \cap V_i \cap \bigcap\{\, V_j : j < i,\ V_j \in F \,\} \ne \varnothing$, and put $O := W \cap \bigcap F$, which is nonempty by the definition of $F$; then every member of $\mathcal{V}$ meeting $O$ contains $O$ — members outside $\{V_0,\dots,V_k\}$ do not meet $W$, and a member $V_i \notin F$ misses $W \cap \bigcap\{\, V_j : j < i,\ V_j \in F \,\} \supseteq O$ — so $O \cap (\overline{V} \setminus V) = \varnothing$ for every $V \in \mathcal{V}$, whence $O \cap S_\xi \ne \varnothing$; and $S_\xi$ is proper, because a member $V \subseteq R_\xi$ of the refinement is an open bounded subset of the connected component $R_\xi$, so $\overline{V} \setminus V \ne \varnothing$ and $S_\xi \ne R_\xi$. [step 3.1, F4]

5.1 By [F3] no such function exists in $N$; hence $\mathcal{U}$ has no locally finite open refinement, and $X$ is not paracompact. [step 4.1, F3]

6.1 Steps 2.1 and 5.1 give a model of $\mathrm{ZF} + \mathrm{DC}$ containing a metrizable nonparacompact space. Together with step 1.1, this external construction proves the displayed relative-consistency implication, conditional on $\operatorname{Con}(\mathrm{ZF})$; it does not invoke the formal proof-reduction theorem without a verified code map. The argument uses the regular-$\lambda$ presentation and not the finite-support $\omega$-indexed one. [step 1.1, step 2.1, step 5.1, F5] ∎
