---
id: thm-standard-borel-spaces-admit-bimeasurable-real-codings
kind: theorem
title: "Standard borel spaces admit bimeasurable real codings"
status: published
origin: pipeline
deps: [lem-hilbert-cube-has-a-bimeasurable-real-coding, def-standard-borel-space, thm-hilbert-cube-universal-for-separable-metrizable-spaces, thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta, def-axiom-of-choice, lem-standard-complete-metric-on-a-countable-product, thm-reals-cauchy-complete]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC. Every standard-Borel space $(E,\mathcal S)$ is measurably isomorphic to a Borel subset of $[0,1]$, including $E=\varnothing$.

## Facts & Assumptions

**Given:** AC and a standard-Borel space $(E,\mathcal S)$.

[F1] There is a Polish presentation $h:E\to P$ preserving Borel sets in both directions. ([[def-standard-borel-space]])

[F2] A separable metrizable space embeds homeomorphically in the Hilbert cube. ([[thm-hilbert-cube-universal-for-separable-metrizable-spaces]])

[F3] The weighted sum of complete coordinate metrics bounded by one metrizes the cube. ([[lem-standard-complete-metric-on-a-countable-product]])

[F4] Under DC, a completely metrizable subspace of a metric space is $G_\delta$. ([[thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta]])

[F5] The cube has a bimeasurable coding $c$ onto a Borel $C\subseteq[0,1]$. ([[lem-hilbert-cube-has-a-bimeasurable-real-coding]])

[F6] AC supplies the choices in the metric interfaces, including DC by selecting a successor for each admissible finite history and recursively iterating. ([[def-axiom-of-choice]])

[F7] Every real Cauchy sequence converges. ([[thm-reals-cauchy-complete]])

## Proof

**Proof technique:** direct.

1.1 If $E=\varnothing$, the empty bijection onto $\varnothing$ is bimeasurable. Otherwise fix the single Polish presentation $h:E\to P$ of [F1]. Its separability and metrizability give a homeomorphic embedding $e:P\to Q=[0,1]^{\mathbb N}$ by [F2]. [F1, F2]

2.1 The interval $[0,1]$ is complete: a Cauchy sequence converges in $\mathbb R$ by [F7], and its limit stays between zero and one by the limit inequalities. Its metric is bounded by one. The metric $D(x,y)=\sum_{n\ge0}2^{-(n+1)}|x_n-y_n|$ makes $Q$ a metric space by [F3]. The image $Y=e[P]$ is completely metrizable, transporting a complete compatible metric from $P$. AC supplies DC as described in [F6], so [F4] yields that $Y$ is $G_\delta$ and consequently Borel in $Q$. The currently repaired supplier proves the ambient equality: points in every small open neighbourhood union lie within $1/n$ of $Y$, hence in its closure, before the complete-metric limit argument. [step 1.1, F3, F4, F6, F7]

3.1 Let $c:Q\to C$ be [F5]. Since $c^{-1}$ is measurable, $c[Y]=(c^{-1})^{-1}[Y]$ is Borel in $C$, and therefore in $[0,1]$, because $C$ itself is Borel. Restricting $c$ and its inverse to $Y$ and $c[Y]$ preserves measurability. The homeomorphism $e$ is bimeasurable on trace Borel sets. Thus $c\circ e\circ h$ and $h^{-1}\circ e^{-1}\circ c^{-1}$ are mutually inverse measurable maps between $E$ and $c[Y]$. [step 1.1, step 2.1, F5] ∎

## Source notes

Durrett Theorem 2.1.22, printed pp.53–54, provides the coding route. Its omitted image detail is supplied by the local cube lemma and the current forward completely-metrizable-to-G-delta theorem; no converse or external recorded theorem is imported.
