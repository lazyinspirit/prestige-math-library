---
id: post-type-iia-romans-massive-rr-bianchi-convention
kind: postulate
title: Type Iia Romans Massive RR Bianchi Convention
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - def-st-string-tension-alpha-prime
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
physical_scope: "Source-free, local democratic RR convention of Graña with constant Romans zero-form flux. It is separate from the Bergshoeff component basis and from the massless Hamilton convention; no crosswalk between them is asserted."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§2 RR polyform definitions and Bianchi identity; §4.2, Eqs. (4.17)–(4.19), printed pp. 25–26."
verification:
  precheck: pass
---

## Postulate

In the source-free democratic convention of Graña, on a smooth patch set
$$H_3=dB_2,\quad F_0=m,\quad F_2=dC_1+F_0B_2,\quad F_4=dC_3-H_3\wedge C_1+\tfrac12F_0B_2\wedge B_2,$$
with constant $F_0$ and $dH_3=0$. Adopt the source-reported polyform Bianchi equation $(d-H_3\wedge)F=0$, where $F=F_0+F_2+F_4$. In particular $dF_2=F_0H_3$ and $dF_4=H_3\wedge F_2$. This item fixes a massive-RR convention as a separate physical input; its symbols are not obtained by inserting $F_0$ into the massless definitions of [[post-type-iia-two-derivative-supergravity-action]].

Use natural units $\hbar=c=1$, length-valued target coordinates, and dimensionless metric, dilaton, and coordinate components of $B_2,C_1,C_3$. Then $H_3,F_0,F_2,F_4$ have coordinate components of dimension length$^{-1}$; the component Bianchi equations have matching dimensions. This source convention carries no $2\kappa_0^2$ normalization or crosswalk to the separate Bergshoeff action.

## Remarks

The current batch-56 conventions definition and its ready Step 1 record were inspected; the field/unit interfaces match this source convention. This remains a separate source-reported postulate, not a derived continuation of the Bergshoeff action.

