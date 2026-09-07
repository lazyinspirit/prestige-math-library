---
id: def-cumulative-hierarchy-stages
kind: definition
title: "The cumulative hierarchy"
status: draft
origin: pipeline
deps: ["thm-transfinite-recursion", "lem-ordinal-basics", "def-limit-ordinal"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 7.1 p.34."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Definition

In ZF without Foundation define the cumulative hierarchy by

$$V_0=\varnothing,\qquad V_{\alpha+1}=\mathcal P(V_\alpha),\qquad V_\lambda=\bigcup_{\beta<\lambda}V_\beta\quad(\lambda\text{ a nonzero limit ordinal}).$$

For each ordinal $\theta$, use the set well-order recursion schema on $\theta+1$. On histories of domain $0$ return $\varnothing$; on domain $\beta+1$ return the power set of the last value; on nonzero limit domains return the union of the range. Each is a unique set. Recursions on different ordinal intervals agree on overlaps by the uniqueness clause applied to the smaller interval. Hence the definition of $V_\alpha$ as the value at $\alpha$ is uniform and independent of the chosen interval. Power Set is used at successors and Replacement and Union at limits. The notation $\langle V_\alpha:\alpha\in\operatorname{Ord}\rangle$ denotes a definable class function, not a set sequence.

Conventions and prerequisites: [[thm-transfinite-recursion]], [[lem-ordinal-basics]], [[def-limit-ordinal]].
