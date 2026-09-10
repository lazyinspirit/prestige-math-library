---
id: def-conditional-expectation-for-nonnegative-variables
kind: definition
title: "Conditional expectation for nonnegative variables"
status: draft
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, def-axiom-of-choice]
justified_by: [thm-conditional-monotone-convergence]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Definition

Assume AC. For measurable $X:\Omega\to[0,\infty]$, select versions $U_n$ of $E[X\wedge n\mid\mathcal G]$, $n\ge1$. Outside one $\mathcal G$-measurable null set they are nonnegative and increasing. Set all of them to zero on that set. Define $E[X\mid\mathcal G]$ to be the almost-sure class of $\lim_n U_n$, allowing $+\infty$.

The integrable classes come from [[def-conditional-expectation-as-an-ae-class]]. Their order is [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]. The union of the measurable sets where a nonnegativity or consecutive-order condition fails is a measurable null set. The limit is measurable by [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]. The [[def-axiom-of-choice]] supplies both inherited RN choices and the countable selection of versions. The event-integral characterization and independence of truncations are the well-definedness obligations recorded in `justified_by`.

## Source notes

Van der Vaart Lemma 1.10(i), printed p.4; Durrett Theorem 4.1.9(c), printed pp.210–211, supplies the integrable case. The local next theorem proves the extended-valued definition.
