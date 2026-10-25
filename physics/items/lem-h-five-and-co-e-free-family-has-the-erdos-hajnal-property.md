---
id: lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property
kind: lemma
title: "The family consisting of $H_5$ and co-$E$ has the Erdős–Hajnal property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-h-zero-through-h-five, def-e-graph-and-co-e-graph, def-h-free-and-family-free-graph, def-erdos-hajnal-property-and-constant, cor-the-h-zero-graph-has-the-erdos-hajnal-property, cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property, prop-erdos-hajnal-property-passes-to-hereditary-subclasses]
proof_strategy: induction
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 6.3"
      url: "https://arxiv.org/html/2606.06258v2"
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, Corollary 1.8"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

The finite forbidden family $\{H_5,\mathrm{co}\text{-}E\}$ has the Erdős–Hajnal property.

## Facts & Assumptions
**Given:** The graphs $H_0,\ldots,H_5$ and the graph co-$E$.

[F1] The graph $H_0$ has the Erdős–Hajnal property ([[cor-the-h-zero-graph-has-the-erdos-hajnal-property]]).

[F2] The graph $\overline{P_5}$ has the Erdős–Hajnal property ([[cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property]]).

[F3] The Erdős–Hajnal property passes to a hereditary subclass ([[prop-erdos-hajnal-property-passes-to-hereditary-subclasses]]).

[F4] Huang--Ju--Zhou, Corollary 1.8, states the following leaf/co-leaf transfer. Let $\mathcal F$ be a finite family, let $H_1\in\mathcal F$ have a leaf $v$, and let $H_2\in\mathcal F$ have a co-leaf $w$. If both families obtained from $\mathcal F$ by replacing, respectively, $H_1$ by $H_1\setminus\{v\}$ and $H_2$ by $H_2\setminus\{w\}$ have the Erdős--Hajnal property, then $\mathcal F$ has the Erdős--Hajnal property.

## Proof

**Proof technique:** induction.

1.1 The class of $\{H_0,\mathrm{co}\text{-}E\}$-free graphs is a hereditary subclass of the class of $H_0$-free graphs, and the class of $\{H_i,\overline{P_5}\}$-free graphs is a hereditary subclass of the class of $\overline{P_5}$-free graphs. Thus [F1]--[F3] give the Erdős–Hajnal property for both families, for every $i\in[5]$. [F1, F2, F3, base]

1.2 Fix $i\in[5]$ and suppose that $\{H_{i-1},\mathrm{co}\text{-}E\}$ has the property. In $\mathcal F=\{H_i,\mathrm{co}\text{-}E\}$, deleting the leaf $v_i'$ of $H_i$ gives $H_{i-1}$. The vertex $q$ is a leaf of $E$, so it is a co-leaf of co-$E$, and deleting it from co-$E$ leaves $\overline{P_5}$. Hence the two modified families in [F4] are exactly $\{H_{i-1},\mathrm{co}\text{-}E\}$ and $\{H_i,\overline{P_5}\}$. [F4, ih]

2.1 Step 1.2, the induction hypothesis, and the second base family from step 1.1 let [F4] yield the property for $\{H_i,\mathrm{co}\text{-}E\}$. [step 1.1, step 1.2, F4]

3.1 Starting with $i=1$ and repeating step 2.1 through $i=5$ proves the property for $\{H_5,\mathrm{co}\text{-}E\}$. [step 1.1, step 2.1, discharge-induction] ∎
