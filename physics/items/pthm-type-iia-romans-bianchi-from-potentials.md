---
id: pthm-type-iia-romans-bianchi-from-potentials
kind: physics-theorem
title: Type Iia Romans Bianchi Identities From Potentials
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - post-type-iia-romans-massive-rr-bianchi-convention
  - thm-the-exterior-derivative-is-a-graded-derivation
  - thm-the-exterior-derivative-squares-to-zero
dependency_roles:
  post-type-iia-romans-massive-rr-bianchi-convention: physical-assumption
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
physical_scope: "Local conditional derivation of the component source-free RR Bianchi identities in the separately adopted Graña massive convention. No map to Bergshoeff or Hamilton RR variables is asserted."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§2 RR polyform definitions and Bianchi identity; §4.2, Eqs. (4.17)–(4.19), printed pp. 25–26."
verification:
  precheck: pending
proof_strategy: direct
---

## Statement

In the adopted convention of [[post-type-iia-romans-massive-rr-bianchi-convention]], let $F_0$ be constant, $H_3=dB_2$ with $dH_3=0$, $F_2=dC_1+F_0B_2$, and $F_4=dC_3-H_3\wedge C_1+\tfrac12F_0B_2\wedge B_2$ on a smooth source-free patch. Then $dF_2=F_0H_3$, $dF_4=H_3\wedge F_2$, and $(d-H_3\wedge)(F_0+F_2+F_4)=0$. This is a local consequence of the adopted potentials and is separate from the Bergshoeff component basis.

## Facts & Assumptions

**Given:** The smooth local potentials and the constant Romans parameter in the statement, with $dH_3=0$.

[A1] [[post-type-iia-romans-massive-rr-bianchi-convention]] adopts $F_0$ constant, $H_3=dB_2$, $F_2=dC_1+F_0B_2$, $F_4=dC_3-H_3\wedge C_1+\tfrac12F_0B_2\wedge B_2$, and the source-free polyform equation. Its current statement and source convention are inspected; this local derivation is conditional on that adopted interface.

[F1] [[thm-the-exterior-derivative-is-a-graded-derivation]]: $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta$.

[F2] [[thm-the-exterior-derivative-squares-to-zero]]: $d^2=0$ on smooth forms.

## Proof

1.1 By [A1], [F1], and [F2], $dF_2=d^2C_1+F_0\,dB_2=F_0H_3$, since $F_0$ is constant. [given, A1, F1, F2, algebra]

2.1 Differentiate each term of $F_4$. The graded rule and $dH_3=0$ give $$dF_4=d^2C_3-d(H_3\wedge C_1)+\tfrac12F_0d(B_2\wedge B_2) =H_3\wedge dC_1+F_0H_3\wedge B_2.$$ Here $d(H_3\wedge C_1)=-H_3\wedge dC_1$, while $d(B_2\wedge B_2)=H_3\wedge B_2+B_2\wedge H_3=2H_3\wedge B_2$ because degrees 2 and 3 commute. Thus $dF_4=H_3\wedge(dC_1+F_0B_2)=H_3\wedge F_2$. [given, A1, F1, F2, step 1.1, algebra]

3.1 The degree-three component of $(d-H_3\wedge)(F_0+F_2+F_4)$ is $dF_2-H_3F_0=0$ by step 1.1. Its degree-five component is $dF_4-H_3\wedge F_2=0$ by step 2.1, and the degree-one component is $dF_0=0$ by constancy. There are no other components in this truncated even RR polyform. Hence the stated polyform equation holds. [given, A1, step 1.1, step 2.1, algebra] ∎

