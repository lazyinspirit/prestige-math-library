---
id: thm-relative-consistency-dc-without-stone
kind: theorem
title: "Relative consistency of DC with failure of Stone's theorem"
status: published
origin: pipeline
deps: [def-good-tree-watson-symmetric-stone-model, lem-good-tree-watson-omega-sequence-closure, lem-good-tree-watson-selector-obstruction, def-dependent-choice, def-paracompact-space, def-cover-refinement-and-local-finiteness, def-metric-space, def-metric-ball, def-metric-topology, thm-metric-open-set-algebra, def-topological-space, thm-forcing-theorem, thm-hereditarily-symmetric-interpretations-form-a-zf-model]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
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
verification:
  audited: 2026-09-22
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

[F1] In the transitive-ground presentation of the construction, the model $N$ is a transitive model of ZF between the ground model and the full extension, and it is closed under $\omega$-sequences from the full extension ([[thm-hereditarily-symmetric-interpretations-form-a-zf-model]], [[lem-good-tree-watson-omega-sequence-closure]], [[thm-forcing-theorem]]).

[F2] Dependent choice holds in $N$: given a relation $R$ on a set of $N$ that is entire there, for each prescribed starting point $a$ in the set, DC in the full extension supplies an $\omega$-sequence of $R$-related points starting at $a$, and by [F1] that sequence lies in $N$. ([[def-dependent-choice]])

[F3] No function of $N$ chooses a nonempty proper subset of every component $R_\xi$ ([[lem-good-tree-watson-selector-obstruction]]).

[F4] The metric sum $\bigsqcup_{\xi<\lambda} R_\xi$ carries the metric that agrees with the metric of each component and puts distance $1$ between different components; its topology is the topological sum of the components, each $R_\xi$ is a clopen connected subspace with more than one point, and the whole space is metrizable ([[def-metric-space]], [[def-metric-ball]], [[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-topological-space]]). Because a clopen connected set with more than one point has no proper nonempty clopen subset, the space has no base of clopen sets and is therefore not zero-dimensional.

[F5] Good--Tree--Watson's Theorem 2 explicitly states, relative to ZF, the consistency of a model with a metrizable nonparacompact space, and their Theorem 3 explicitly states that Stone's theorem is not provable in ZF+DC. In the generalization immediately following Theorem 3 they replace the finite-support construction by the regular-$\lambda$ construction, take $\lambda=\omega_1$, and use closure under countable sequences to obtain DC. Thus the relative-consistency bridge used here is the published theorem itself, not an inference from the existence of a transitive ground model. [source]



**Proof technique:** direct.

## Proof

1.1 Invoke the external relative-consistency construction of [F5], in its regular-$\lambda$ form with $\lambda=\omega_1$, and write $N$ for its symmetric model. The invocation is exactly the source's relative-consistency theorem; it does not infer a transitive ground model from $\operatorname{Con}(\mathrm{ZF})$. [given, F5]

2.1 The model satisfies DC by [F2], because every $\omega$-sequence in the full extension with values in $N$ is already in $N$ by [F1]. [step 1.1, F1, F2]

2.2 In $N$ form the metric sum $X := \bigsqcup_{\xi<\lambda} R_\xi$ with the metric of [F4]; it is a metrizable space whose components $R_\xi$ are clopen and connected. [step 1.1, F4]

3.1 Let $\mathcal U=\{B_X(x,1/3):x\in X\}$. This is an open cover. Every member lies in one component, since distinct components have distance $1$, and is a proper subset of that component: under $d(r,s)=|r-s|/(1+|r-s|)$, a radius-$1/3$ ball corresponds to a bounded ordinary interval. [step 2.2, F4]

4.1 Suppose that $\mathcal U$ has a locally finite open refining cover $\mathcal V$, and define $$S= X\setminus\bigcup_{V\in\mathcal V}(\overline V\setminus V), \qquad S_\xi=S\cap R_\xi.$$ Each $S_\xi$ is nonempty. Indeed, a point of $R_\xi$ has a nonempty open neighbourhood $W\subseteq R_\xi$ meeting only finitely many refinement members $V_0,\ldots,V_k$. Starting with $W_0=W$, recursively choose the nonempty open set $W_{i+1}=W_i\cap V_i$ if that intersection is nonempty, and otherwise choose $W_{i+1}=W_i\setminus\overline{V_i}$. The latter is nonempty: an open $W_i$ disjoint from the open set $V_i$ cannot be contained in $\overline{V_i}$. Thus every point of $W_{k+1}$ avoids the boundaries of the $V_i$, and it avoids the boundary of every other refinement member because that member misses $W$. Hence $W_{k+1}\subseteq S_\xi$. The set $S_\xi$ is also proper. Choose a nonempty $V\in\mathcal V$ meeting $R_\xi$. Such a member exists because $\mathcal V$ covers $R_\xi$. By refinement and step 3.1, $V$ lies in $R_\xi$ and is contained in a proper ball there. It is therefore a nonempty proper open subset of the connected space $R_\xi$, so $\overline V\setminus V$ is nonempty and disjoint from $S_\xi$. Consequently $\xi\mapsto S_\xi$ is a function assigning a nonempty proper subset to every component. [step 3.1, F4]

5.1 By [F3] no such function exists in $N$; hence $\mathcal{U}$ has no locally finite open refining cover, and $X$ is not paracompact. [step 4.1, F3]

6.1 Steps 2.1 and 5.1 identify the DC and nonparacompactness conclusions inside the published model. By [F5], that construction has exactly the asserted consistency strength relative to ZF. The argument uses the regular-$\lambda$ presentation and not the finite-support $\omega$-indexed one. [step 1.1, step 2.1, step 5.1, F5] ∎
