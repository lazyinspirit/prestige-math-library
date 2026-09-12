---
id: prop-circle-rotations-preserve-lebesgue-measure
kind: proposition
title: Circle rotations preserve Lebesgue measure
deps: ["def-circle-rotation-and-doubling-map", "thm-measure-preservation-on-a-generating-pi-system", "prop-measure-preserving-compositions-iterates-and-completions", "thm-lebesgue-outer-measure-and-measurability-are-translation-invariant", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Example 2.2 p.14
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume countable choice. For every real $\alpha$, $R_\alpha$ is an invertible measure-preserving transformation for both Borel Lebesgue probability on the circle and its completion.

## Facts & Assumptions

[F1] The circle has Borel probability and R_alpha is continuous; the measure construction uses countable choice. [[def-circle-rotation-and-doubling-map]].

[F2] Translation preserves Lebesgue measurable sets and their measures. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]].

[F3] A generating pi-system containing the finite-mass whole space tests preservation. [[thm-measure-preservation-on-a-generating-pi-system]].

[F4] A Borel preserving map also preserves the completion under countable choice. [[prop-measure-preserving-compositions-iterates-and-completions]].

## Proof

**Given:** Assume countable choice. For every real $\alpha$, $R_\alpha$ is an invertible measure-preserving transformation for both Borel Lebesgue probability on the circle and its completion.

1.1 Let $a=\{\alpha\}$. For any Borel $B\subseteq[0,1)$, $R_\alpha^{-1}B=((B\cap[a,1))-a)\cup((B\cap[0,a))+(1-a))$. The two pieces lie respectively in $[0,1-a)$ and $[1-a,1)$ and are disjoint. Translation invariance and additivity give $\lambda(R_\alpha^{-1}B)=\lambda(B\cap[a,1))+\lambda(B\cap[0,a))=\lambda(B)$. For a=0 the second piece is empty. [F1, F2]

2.1 In particular this proves the inverse-image identity on the pi-system of half-open intervals and the whole circle. These generate the circle Borel sigma-algebra: ordinary open intervals are countable unions of half-open subintervals, and the Borel sigma-algebras agree by the circle definition. The whole-space measure is one, so the generating criterion applies (or directly use the identity for every Borel B in step 1.1). The completion clause extends preservation to all completed sets. The countable-choice use is exactly the earlier Lebesgue and completion construction. [step 1.1, F1, F3, F4]

3.1 Fractional-part arithmetic gives $R_{-\alpha}R_\alpha x=x=R_\alpha R_{-\alpha}x$. The same argument applies to $-\alpha$, so the inverse is measurable for either sigma-algebra. Thus invertibility here includes measurability of the inverse. [step 2.1, F1, algebra] ∎

