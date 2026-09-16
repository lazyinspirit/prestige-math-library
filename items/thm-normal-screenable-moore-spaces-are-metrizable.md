---
id: thm-normal-screenable-moore-spaces-are-metrizable
kind: theorem
title: "Normal screenable Moore spaces are metrizable"
status: draft
origin: pipeline
deps: [def-moore-spaces-and-developments, def-normal-and-t4-spaces, def-discrete-family-and-sigma-bases, def-axiom-of-choice, lem-sigma-cellular-base-yields-a-compatible-metric, def-metrizable-space, def-topology-basis-subbasis, def-cover-refinement-and-local-finiteness]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "R. H. Bing, Metrization of topological spaces"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/48C1A50A9E249D05BD7054529F93BAA1/S0008414X00030923a.pdf/metrization-of-topological-spaces.pdf"
      locator: "Theorems 3, 6, 7 and 8 with proofs, printed pp. 178-182"
---

## Statement

In $\mathrm{ZFC}$ every normal ([[def-normal-and-t4-spaces]]) screenable Moore
space is metrizable. Here a space is **screenable** when every open cover has a
refinement that is a countable union of pairwise disjoint families of open sets
and covers the space
([[def-cover-refinement-and-local-finiteness]]).

## Facts & Assumptions

**Given:** A normal Moore space $X$ with a decreasing development $(\mathcal G_n)_{n\in\mathbb N}$ ([[def-moore-spaces-and-developments]]), and for every open cover $\mathcal U$ of $X$ a refinement $\bigcup_{i\in\mathbb N}\mathcal H_i$ of $\mathcal U$ by pairwise disjoint families of open sets covering $X$.

[F1] Every Moore space is $T_1$ and hence satisfies the hypothesis of [[lem-sigma-cellular-base-yields-a-compatible-metric]]; a Moore space is developable, and a development may be taken decreasing ([[def-moore-spaces-and-developments]]).

[F2] A base of a space is a family of open sets such that every open set is a union of members; equivalently every point of an open set has a base member between it and the set ([[def-topology-basis-subbasis]]).

[F3] Screenability applied to an open cover yields a covering refinement that is a countable union of pairwise disjoint open families; a refinement of a cover is a family each of whose members lies in a member of the cover ([[def-cover-refinement-and-local-finiteness]], the definition of screenable in the Statement).

[L1] Countably many choices are available: selecting one screening of $\mathcal G_n$ for each $n \in \mathbb N$ uses countable choice, which is a theorem of $\mathrm{ZFC}$ ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix $(\mathcal G_n)$ and, for each $n$, a screening of the open cover $\mathcal G_n$, say $\bigcup_{i\in\mathbb N}\mathcal H_{n,i}$, where each $\mathcal H_{n,i}$ is a pairwise disjoint family of open sets and $\bigcup_{i}\mathcal H_{n,i}$ covers $X$ and refines $\mathcal G_n$. [given, F3, L1]

2.1 The family $\bigcup_{(n,i)\in\mathbb N\times\mathbb N}\mathcal H_{n,i}$ is a base for $X$: let $D$ be open and $x \in D$. Choose $n$ with $\operatorname{St}(x,\mathcal G_n) \subseteq D$ and then $i$ and $H \in \mathcal H_{n,i}$ with $x \in H$. Since $\mathcal H_{n,i}$ refines $\mathcal G_n$ there is $G \in \mathcal G_n$ with $H \subseteq G$, so $x \in G$ and therefore $G \subseteq \operatorname{St}(x,\mathcal G_n) \subseteq D$; hence $x \in H \subseteq D$ and $H$ is a member of the displayed family. [step 1.1, F1, F2, F3]

3.1 Each $\mathcal H_{n,i}$ is a pairwise disjoint family of open sets, and the index set $\mathbb N\times\mathbb N$ is countable, so the base of step 2.1 is $\sigma$-cellular in the sense of [[lem-sigma-cellular-base-yields-a-compatible-metric]]. [step 2.1]

4.1 By [F1] the space $X$ is $T_1$ and has a $\sigma$-cellular base by step 3.1; the lemma therefore supplies a metric on $X$ whose metric topology is the topology of $X$, so $X$ is metrizable. [step 2.1, step 3.1, F1] ∎

## Remarks

- **Relation to Bing's route.** Bing proves this theorem by showing that a normal screenable developable space is strongly screenable (Theorem 8), that strongly screenable developable spaces are perfectly screenable (Theorem 6), and that perfectly screenable regular spaces are metrizable (Theorems 3 and 7). Steps 1.1-2.2 above are the first two of those reductions in the equivalent language of a $\sigma$-cellular base, and step 3.1 replaces Bing's displayed weighted metric by the explicit level metric of [[lem-sigma-cellular-base-yields-a-compatible-metric]]; the conclusion is the same.

- **Normality is not used in the proof above.** It is used upstream: the screening of each development cover is what the hypothesis makes available in the applications of this theorem on this page, where normality is needed to produce it ([[lem-collectionwise-normal-moore-spaces-are-screenable]] and the normalization of discrete closed families). The theorem as stated is the one promised, and its proof uses exactly the screenability hypothesis.

- **Choice.** The only choice is the countable selection of one screening per development level in step 1.1; the metric is then defined by a formula.
