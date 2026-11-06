---
id: pthm-d3-page-charge-closed
kind: physics-theorem
title: Source Free D3 Page Form Is Closed On A B Field Patch
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 12
domain: physics
library: physics
deps:
  - post-type-iib-two-derivative-supergravity-pseudoaction
  - def-dp-brane-source-maxwell-page-charge
  - pthm-type-iib-bianchi-identities
  - thm-general-stokes-theorem
  - def-axiom-of-choice
dependency_roles:
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  def-dp-brane-source-maxwell-page-charge: formulation-prerequisite
  pthm-type-iib-bianchi-identities: physical-result
  thm-general-stokes-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Differential closure of the local D3 Page five-form on a source-free patch with a chosen B2 potential, dH3=0, and the planned source-free Type IIB component Bianchi identities; smooth-chain flux conservation is conditional on the stated countable-choice premise; no global Page class or quantization is claimed."
sources:
  references:
    - title: "Donald Marolf, Chern-Simons Terms and the Three Notions of Charge, arXiv:hep-th/0006117v1"
      url: "https://arxiv.org/pdf/hep-th/0006117v1"
      locator: "§§2–4, PDF pp. 3–8; the terminology is illustrated for IIA D4 charge, not the IIB D3 Page form defined here."
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§7.1, Type IIB field-strength definitions and source-free Bianchi identities."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

On a source-free smooth patch $U$ with a chosen $B_2$, let $H_3=dB_2$, $dH_3=0$, and use the Type IIB Bianchi identities $dG_1=0$, $d\widetilde G_3=H_3\wedge G_1$, $d\widetilde G_5=H_3\wedge\widetilde G_3$. Then the D3 Page five-form
$$ P_5=\widetilde G_5-B_2\wedge\widetilde G_3+\tfrac12 B_2\wedge B_2\wedge G_1 $$
is a smooth closed five-form on $U$. Moreover, assume $\mathrm{AC}_\omega$: for every sequence of nonempty sets $(A_n)_{n\in\mathbb N}$ there is a function $f$ with $f(n)\in A_n$ for every $n$. If compact oriented smooth five-manifolds $\Sigma_0,\Sigma_1\subset U$ bound a compact oriented smooth six-manifold $C\subset U$ with $\partial C=\Sigma_1\sqcup(-\Sigma_0)$, then $\int_{\Sigma_1}P_5=\int_{\Sigma_0}P_5$. This statement does not assert a global Page class, conservation across patches or large gauge transformations, or quantization.

## Statement References

[Hamilton, §7.1](https://arxiv.org/pdf/1607.00327v3)

[Marolf, §§2–4](https://arxiv.org/pdf/hep-th/0006117v1) (terminology illustrated for IIA D4 charge)

## Facts & Assumptions

**Given:** A smooth source-free R4 IIB field configuration on a patch with $B_2$, and the exact component Bianchi identities below.

[F1] [[def-dp-brane-source-maxwell-page-charge]]: on a patch with the adopted smooth IIB field strengths and chosen $B_2$, the locally defined Page form is $P_5=\widetilde G_5-B_2\wedge\widetilde G_3+\frac12B_2\wedge B_2\wedge G_1$; its closure is conditional on the exact Bianchi identities in [A1].

[F2] [[thm-general-stokes-theorem]]: if $\mathrm{AC}_\omega$ holds and $C$ is a compact oriented smooth manifold with boundary, then $\int_Cd\eta=\int_{\partial C}j^*\eta$ for each smooth $(\dim C-1)$-form $\eta$; its orientation convention is outward-normal-first.

[F3] [[def-axiom-of-choice]] states that every family of nonempty sets has a choice function, which selects one member of each set. Only its countable-family restriction $\mathrm{AC}_\omega$, explicitly formulated and assumed in the Statement, is used here, to meet [F2]'s premise in step 3.1. Closure in steps 1.1–2.1 uses no choice assumption.

[A1] [[pthm-type-iib-bianchi-identities]]: for smooth local potentials with the field-strength definitions in [[post-type-iib-two-derivative-supergravity-pseudoaction]], the source-free identities are $dH_3=0$, $dG_1=0$, $d\widetilde G_3=H_3\wedge G_1$, and $d\widetilde G_5=H_3\wedge\widetilde G_3$. This is an adopted local field-basis premise; the displayed closure conclusion is conditional on these exact identities.

## Proof

1.1 Apply the graded Leibniz rule to [F1]. Since $B_2$ has degree two, $d(B_2\wedge\widetilde G_3)=H_3\wedge\widetilde G_3+B_2\wedge d\widetilde G_3$, and $d(B_2\wedge B_2)=H_3\wedge B_2+B_2\wedge H_3=2B_2\wedge H_3$. [given, F1, algebra]

2.1 Substituting [A1] gives $dP_5=H_3\wedge\widetilde G_3-H_3\wedge\widetilde G_3-B_2\wedge H_3\wedge G_1+B_2\wedge H_3\wedge G_1+\tfrac12B_2\wedge B_2\wedge dG_1=0$. The last term vanishes by $dG_1=0$, so the form is closed locally. [given, A1, step 1.1, algebra]

3.1 On $C$, the restriction of $P_5$ is smooth with compact support because $C$ is compact. Applying [F2] under the countable-choice premise [F3] gives $\int_{\Sigma_1}P_5-\int_{\Sigma_0}P_5=\int_{\partial C}P_5=\int_CdP_5=0$. This conservation statement is conditional on $\mathrm{AC}_\omega$ and uses only a smooth bounding chain inside the fixed patch. [given, F2, F3, step 2.1, algebra] ∎
