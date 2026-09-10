---
id: prop-measure-preserving-compositions-iterates-and-completions
kind: proposition
title: Compositions, iterates and completions preserve invariance
deps: [def-measure-preserving-transformation-and-system, thm-completion-of-a-measure-space, def-countable-choice, def-completion-of-a-measure-space]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Einsiedler–Ward Exercise 2.1.3, p.19; Sarig Proposition 1.4 preservation proof, p.8
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
  scraped: []
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Compositions and nonnegative iterates of measure-preserving self-maps of $(X,\mathcal A,\mu)$ preserve measure. Assuming countable choice, $T$ also defines a measurable measure-preserving self-map of the completion $(X,\overline{\mathcal A},\overline\mu)$. Countable choice is needed here only for the cited construction of the completion measure.

## Facts & Assumptions

[F1] Under countable choice the completion construction is a complete measure extending the original measure [[thm-completion-of-a-measure-space]].

[F2] Countable choice is assumed for this completion construction [[def-countable-choice]].

[F3] Every completion-measurable set is an original measurable set modified within an original measurable null set [[def-completion-of-a-measure-space]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For preserving $S,T$ and measurable $E$, $(S\circ T)^{-1}E=T^{-1}(S^{-1}E)$ is measurable and has measure $\mu(S^{-1}E)=\mu(E)$. The identity preserves measure; applying this composition calculation successively gives preservation for every $T^n$, $n\ge0$. [given]

2.1 Assume countable choice. The completion theorem supplies the complete measure extending $\mu$. For $E\in\overline{\mathcal A}$ choose $A,N\in\mathcal A$ with $\mu(N)=0$ and $E\mathbin\triangle A\subseteq N$. Then $T^{-1}E\mathbin\triangle T^{-1}A\subseteq T^{-1}N$, where $T^{-1}N$ is measurable and null. Thus $T^{-1}E$ is completion measurable and $\overline\mu(T^{-1}E)=\mu(T^{-1}A)=\mu(A)=\overline\mu(E)$. [F1, F2, given, F3] ∎
