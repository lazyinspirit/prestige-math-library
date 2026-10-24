---
id: "def-compensator-and-doob-decomposition"
kind: "definition"
title: "Compensator and doob decomposition"
deps: ["def-adapted-and-integrable-stochastic-process", "def-martingale-submartingale-and-supermartingale", "def-predictable-discrete-time-process", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "van der Vaart, Martingales, Diffusions and Financial Mathematics"
      url: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf
status: published
origin: "pipeline"
---

## Definition

Assume AC [[def-axiom-of-choice]] for the conditional classes in the martingale definition. For an integrable adapted real $X$ [[def-adapted-and-integrable-stochastic-process]], a **Doob decomposition** is
$$X_n=M_n+A_n\quad\text{a.s. for each }n\ge0,$$
where $M$ is a martingale [[def-martingale-submartingale-and-supermartingale]], $A_n$ is integrable at every time, $A_n$ is $\mathcal F_{n-1}$-measurable for $n\ge1$ [[def-predictable-discrete-time-process]], and $A_0=0$. The process $A$ is its **compensator**. In particular $M_0=X_0$ a.s.

This defines the requirements on a decomposition; existence and uniqueness require proof. The normalization fixes the possible transfer of an integrable $\mathcal F_0$-measurable variable between $M$ and $A$: such a transfer would change $A_0$. No monotonicity of $A$ is included for a general integrable adapted $X$. The AC assumption is inherited from conditional-expectation existence, and this definition selects no versions.
