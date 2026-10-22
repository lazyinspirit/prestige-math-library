---
id: prop-qftx-scale-cocycle-law
kind: proposition
title: Scaling yields the twisted composition law
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 11
deps:
  - def-qftx-scaling-cocycle
  - def-countable-choice
justified_by: []
forward_refs: []
dependency_roles:
  def-qftx-scaling-cocycle: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory (full lecture notes)
      url: https://arxiv.org/html/1208.1428
      locator: Section 7, equations (79)–(80), coefficientwise formal S-matrices and unique finite local renormalization maps.
    - title: Romeo Brunetti, Michael Dütsch, and Klaus Fredenhagen, Perturbative Algebraic Quantum Field Theory and the Renormalization Groups
      url: https://arxiv.org/html/0901.2038
      locator: Section 4.2, equations (60)–(65), the scale automorphism and twisted composition law; Section 5.1, equations (68)–(70), mass-dependent conjugation.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume Countable Choice.

Let $Z_\rho$ be the mass-indexed formal renormalization map defined for the scale action $\sigma_\rho$, $\rho>0$. For all $\rho,\tau>0$,
$$Z_{\rho\tau}=Z_\rho\circ\bigl(\sigma_\rho Z_\tau\sigma_\rho^{-1}\bigr).$$
If $\sigma_\rho Z_\tau\sigma_\rho^{-1}=Z_\tau$ for every $\rho,\tau>0$, this reduces to $Z_{\rho\tau}=Z_\rho\circ Z_\tau$. No one-parameter subgroup law is asserted without this condition.

## Statement references

[[def-qftx-scaling-cocycle]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice, and the scale-indexed systems and formal maps in [[def-qftx-scaling-cocycle]], with $\rho,\tau>0$.

[A1] Assume Countable Choice [[def-countable-choice]] as required by the scalar contraction contract used to define the comparison maps.

[F1] [[def-qftx-scaling-cocycle]]: on a map family $A=(A_m)_{m\ge0}$, the mass-$m$ component of its induced scale conjugate is $(\sigma_\rho A\sigma_\rho^{-1})_m=C_\rho^*\circ A_{\rho^{-1}m}\circ(C_\rho^*)^{-1}$, and $\sigma_{\rho\tau}=\sigma_\rho\sigma_\tau$. In particular, at each $m\ge0$, $C_\rho^*\circ\mathcal S_{\rho^{-1}m}\circ(C_\rho^*)^{-1}=\mathcal S_m\circ Z_{\rho,m}$, where $Z_\rho=(Z_{\rho,m})_{m\ge0}$ and each $Z_{\rho,m}$ is the unique local formal map with identity linear term supplied by the finite-renormalization comparison proposition.

## Proof

**Proof technique:** direct substitution followed by uniqueness.

**Given:** [A1] and [F1].

1.1 Under [A1], conjugating the defining equation for $Z_\tau$ by $\sigma_\rho$ and using the group law for $\sigma$ gives
$$\sigma_{\rho\tau}\mathcal S\sigma_{\rho\tau}^{-1}=\sigma_\rho(\mathcal S\circ Z_\tau)\sigma_\rho^{-1}=(\sigma_\rho\mathcal S\sigma_\rho^{-1})\circ(\sigma_\rho Z_\tau\sigma_\rho^{-1})=\mathcal S\circ Z_\rho\circ(\sigma_\rho Z_\tau\sigma_\rho^{-1}).$$
The conjugated map is local, support-preserving, Poincare-covariant, and has identity linear term because $\sigma_\rho$ is an automorphism normalizing the Poincare action and $Z_\tau$ has those properties. [A1, F1, algebra]

2.1 The left side of step 1.1 also equals $\mathcal S\circ Z_{\rho\tau}$ by [F1]. Both maps composed with $\mathcal S$ satisfy the same finite-renormalization conditions, so uniqueness in [F1] gives
$$Z_{\rho\tau}=Z_\rho\circ(\sigma_\rho Z_\tau\sigma_\rho^{-1}).$$
When the conjugation action is trivial the factor in parentheses is $Z_\tau$, giving the stated special case. [A1, F1, step 1.1, algebra] ∎

## Remarks

The mass label is part of the scale action. Suppressing it in the notation does not turn the cocycle into a group homomorphism; the required action on the renormalization maps remains explicit in the formula.
