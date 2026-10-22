---
id: cex-qftx-bcfw-contact-boundary
kind: counterexample
title: A constant contact amplitude needs the boundary term
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - thm-qftx-rational-bcfw-residue
dependency_roles:
  thm-qftx-rational-bcfw-residue: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Henriette Elvang and Yu-tin Huang, Scattering Amplitudes
      url: https://arxiv.org/pdf/1308.1697
      locator: §2.3, PDF pp. 15–16, for a constant scalar four-point contact coefficient; §3.1, PDF pp. 34–36, for the residue-at-infinity term and its separate vanishing condition.
    - title: Andrea Marzolla, The four-dimensional on-shell three-point amplitude in spinor-helicity formalism and BCFW recursion relations
      url: https://arxiv.org/pdf/1705.09678
      locator: §5, PDF pp. 30–31; the residue-at-infinity term may fail to vanish for a chosen shift.
    - title: Ruth Britto, Freddy Cachazo, Bo Feng, and Edward Witten, Direct Proof of Tree-Level Recursion Relation in Yang-Mills Theory
      url: https://arxiv.org/pdf/hep-th/0501052
      locator: §§2–3.1, PDF pp. 2–8; the recursion is conditioned on a helicity-specific large-z estimate. The scalar contact counterexample is checked locally.
---

## Statement refuted

The boundary-free finite-pole formula $A(0)=-\sum_{\alpha}\operatorname{Res}_{z=z_\alpha}(A(z)/z)$ applies to every rational shifted function with only simple finite poles, even when $A(z)$ does not vanish at infinity.

## Statement references

[[thm-qftx-rational-bcfw-residue]]

[Elvang and Huang, *Scattering Amplitudes*, §3.1](https://arxiv.org/pdf/1308.1697)

[Marzolla, *The four-dimensional on-shell three-point amplitude in spinor-helicity formalism and BCFW recursion relations*, §5](https://arxiv.org/pdf/1705.09678)

[Britto, Cachazo, Feng, and Witten, *Direct Proof of Tree-Level Recursion Relation in Yang-Mills Theory*, §§2–3.1](https://arxiv.org/pdf/hep-th/0501052)

## Facts & Assumptions

**Given:** The proposed rule omits the boundary term and a nonzero constant $c\in\mathbb C^\times$ supplies a formal scalar four-point contact coefficient $A(z)=c$. This is a rational coefficient example, not a claim about a complete interacting theory.

[F1] [[thm-qftx-rational-bcfw-residue]]: the finite-pole identity is proved only under the additional hypothesis $A(z)\to0$ as $z\to\infty$; the pole sum is empty when there are no finite poles.

[A1] Fix $c\in\mathbb C^\times$ and set $A(z)=c$ for all $z\in\mathbb C$. Here a formal scalar four-point contact coefficient means only this shift-independent constant contribution; no full field-theory model is assumed.

[A2] For a rational function $f$, define $\operatorname{Res}_{z=\infty}f$ as minus the coefficient of $z^{-1}$ in its Laurent expansion at infinity; the boundary correction in the residue identity is $-\operatorname{Res}_{z=\infty}(A(z)/z)$.

## Counterexample

1.1 The constant $A(z)=c$ is rational, regular at $0$, and has no finite poles. Hence every finite-pole residue vanishes and the proposed boundary-free sum equals $0$. [given, F1, A1, algebra]

2.1 But $A(0)=c\ne0$. At infinity $A(z)/z=c/z$, so by [A2] the residue at infinity is $-c$ and the boundary correction is $c$. Omitting it gives the contradiction. [given, A1, A2, step 1.1, algebra] ∎

## Remarks

The cited §2.3 example is the derivative-free $\lambda|\phi|^4$ interaction, whose four-scalar contact amplitude is constant. This counterexample assumes only the explicitly stipulated shift-independent coefficient $A(z)=c$; it makes no claim that contact terms with derivatives have constant shifted coefficients.
