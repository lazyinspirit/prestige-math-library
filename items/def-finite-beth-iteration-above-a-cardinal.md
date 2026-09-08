---
id: def-finite-beth-iteration-above-a-cardinal
kind: definition
title: "Finite beth iteration above an infinite cardinal"
status: published
origin: pipeline
deps: [def-aleph-and-beth-hierarchies, thm-recursion, thm-transfinite-recursion, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorem 9.9, printed pp62–63; relative finite iteration for the arbitrary-cardinal adaptation"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Definition

In ZFC, for an infinite cardinal $\kappa$ define the **relative finite beth iteration** by

$$\beth_0(\kappa)=\kappa,\qquad \beth_{n+1}(\kappa)=2^{\beth_n(\kappa)}\quad(n<\omega).$$

The exponent is cardinal exponentiation, and $\beth_n(\kappa)^+$ means the successor cardinal, both with the conventions of [[def-aleph-and-beth-hierarchies]]. This differs from the ordinary beth hierarchy, whose initial value is $\omega$; they agree when $\kappa=\omega$. In particular $\beth_1(\kappa)=2^\kappa$ and $\beth_2(\kappa)=2^{2^\kappa}$.

Here is a set-sized recursion justification. Let $X_0=\kappa$ and $X_{n+1}=\mathcal P(X_n)$. The class-function form of [[thm-transfinite-recursion]] on $\omega$ defines this sequence of sets. Assume AC as in [[def-axiom-of-choice]] to take their cardinalities. Each $X_{n+1}$ has cardinality $2^{|X_n|}$, giving exactly the displayed recurrence and its uniqueness by induction. The equivalent natural-number recursion notation is that of [[thm-recursion]]. This argument does not treat the proper class of all cardinals as a state set.

Only finite indices occur here. The initial index zero is included; the base cardinal is infinite and hence never zero or one. No limit-stage beth operation is needed for this relative notation.
