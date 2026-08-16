---
id: prop-topological-sums-of-cech-complete-spaces
kind: proposition
title: "Under the Axiom of Choice, topological sums of Čech-complete spaces are Čech-complete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cech-complete-space, def-disjoint-union-topology, thm-one-point-compactification-properties, def-axiom-of-choice]
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

Assume the Axiom of Choice. The topological sum of any family of Čech-complete spaces is Čech-complete; the empty sum is included.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A Tychonoff space $X$ is **Čech-complete** when there is a Hausdorff compactification $(K,i)$ of $X$ (def-compactification-of-a-tychonoff-space) for which $i[X]$ is a $G_\delta$ subset of $K$ (def-g-delta-and-f-sigma-in-a-topological-space). The definition asks for one compactification; thm-cech-completeness-is-independent-of-compactification proves the equivalent every-compactification form. ([[def-cech-complete-space]]).

[F2] **The underlying set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$. The **disjoint union** is $$\bigsqcup_{i \in I} X_i \;:=\; \bigcup_{i \in I} \big(X_i \times \{i\}\big) ,$$ whose elements are the pairs $(x, i)$ with $i \in I$ and $x \in X_i$. For $j \in I$ the $j$-th **canonical injection** is $$\kappa_j : X_j \to \bigsqcup_{i \in I} X_i, \qquad \kappa_j(x) := (x, j).$$ *The construction is what makes the word "disjoint" honest.* Each $\kappa_j$ is injective (def-injection-surjection-bijection), since $(x,j) = (x',j)$ forces $x = x'$; the images $\kappa_j[X_j] = X_j \times \{j\}$ are pairwise disjoint, since the second coordinate determines $j$; and their union is the whole set. So no assumption that the $X_i$ are disjoint as sets is needed, and none is made: the tag $i$ separates the copies even when $X_i = X_{i'}$ for $i \ne i'$. ([[def-disjoint-union-topology]]).

[F3] Let $(X, \mathcal{T})$ be a topological space (def-topological-space) and let $(X^{*}, \mathcal{T}^{*})$ be its one-point compactification, with added point $\infty$ (def-one-point-compactification). Then: 1. **$X^{*}$ is compact** (def-compact-space). 2. **$X$ is an open subspace of $X^{*}$**: $X \in \mathcal{T}^{*}$, and the subspace topology that $X$ inherits from $X^{*}$ (def-subspace-topology-top) is $\mathcal{T}$ itself. 3. **$X$ is dense in $X^{*}$** (def-dense-top) **if and only if $X$ is not compact.** 4. **$X^{*}$ is Hausdorff** (def-hausdorff-space) **if and only if $X$ is locally compact** (def-locally-compact-space) **and Hausdorff.** In particular, a locally compact Hausdorff space is an open subspace of a compact Hausdorff space, which is the reason the construction is made. **No choice principle is used**: the only cover thinned below is thinned by the indexed form of lem-compactness-of-a-subspace-is-ambient, which returns its own indices. ([[thm-one-point-compactification-properties]]).

[F4] The **Axiom of Choice** (AC) is the following statement. The statement is: every family of nonempty sets has a choice function; that is, for every set $\mathcal F$ all of whose members are nonempty there is a function $g$ with domain $\mathcal F$ satisfying $g(S)\in S$ for every $S\in\mathcal F$. ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Choose compactification witnesses $K_i$ for the summands and form their topological sum $K:=\bigsqcup_iK_i$, which is Hausdorff and contains $\bigsqcup_iX_i$ densely. Two cases arise, because [F3] makes $K$ dense in $K^*$ exactly when $K$ is not compact. If $K$ is compact — in particular whenever the family is finite, as for a single one-point summand — then $K$ is itself a Hausdorff compactification of the sum and no point is adjoined. Otherwise $K$ is noncompact, and its one-point compactification $K^*$ is a Hausdorff compactification of the sum. [given, F3, F1, F2, F4]

2.1 Express the original sum by one countable family of open layers, using the same layer number in every clopen summand. [step 1.1, F3, F1]

3.1 Verify the empty sum separately. [step 2.1, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
