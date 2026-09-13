---
id: rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis
kind: remark
title: Optional stopping requires a passage-to-the-limit hypothesis
status: draft
origin: pipeline
deps: [thm-optional-stopping-under-uniform-integrability, thm-optional-stopping-with-integrable-time-and-bounded-increments, thm-optional-stopping-with-a-dominating-integrable-variable, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, warning after Theorem 2.42, p. 22", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Remark

Assume AC. Bounded optional sampling proves $\mathbb EM_{\tau\wedge n}=\mathbb EM_0$; almost-sure convergence $M_{\tau\wedge n}\to M_\tau$ does not by itself permit expectations to pass to the limit. Almost-sure finiteness of $\tau$ alone is insufficient, and even $\mathbb E\tau<\infty$ is insufficient when the martingale increments are unrestricted.

Three valid mechanisms established here are distinct:

- [[thm-optional-stopping-under-uniform-integrability]] supplies uniform integrability of the stopped family;
- [[thm-optional-stopping-with-integrable-time-and-bounded-increments]] supplies the $L^1$ dominator $|M_0|+C\tau$ for the stopped family (and $C\tau$ for its difference from $M_\tau$);
- [[thm-optional-stopping-with-a-dominating-integrable-variable]] assumes a direct integrable dominator.

The companion counterexamples witness both advertised failures. This remark adds no new optional-stopping theorem. AC is exactly the conditional-expectation dependence inherited from the three cited results.
