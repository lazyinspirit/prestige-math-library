---
id: lem-aqft-local-counterterm-shift-is-relative-coboundary
kind: lemma
title: A local counterterm changes only the representative of a local anomaly class
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-thooft-anomalies
deps:
  - def-qftx-local-brst-cohomology
dependency_roles:
  def-qftx-local-brst-cohomology: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Adel Bilal, Lectures on Anomalies (full lecture notes)
      url: https://arxiv.org/pdf/0802.0634
      locator: "§§9.2 and 9.4, printed pp. 71–77: local BRST coboundaries, consistent anomaly representatives, and the local-counterterm ambiguity."
    - title: Enrique Alvarez, Gauge Anomalies
      url: https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf
      locator: "§2.4, printed pp. 36–38: a local Bardeen–Zumino counterterm changes the consistent/covariant representative while preserving the underlying local anomaly data."
verification:
  precheck: pending
---

## Statement

Let $\mathcal A_U^{g,p}$ be the finite-jet horizontal-form spaces on a smooth open set $U\subseteq\mathbb R^4$, with nilpotent BRST differential $s$, horizontal differential $d_H$, and $sd_H+d_Hs=0$. In bidegree $(1,4)$, define $H^{1,4}(s\mid d_H)$ as the ghost-number-one four-forms $a_4$ satisfying $sa_4+d_Hb_3=0$ for some $b_3$, modulo the subspace $\{sC_4+d_Hr_3:C_4\in\mathcal A_U^{0,4},\ r_3\in\mathcal A_U^{1,3}\}$. If a local counterterm changes an anomaly representative from $a_4$ to $a'_4=a_4+sC_4+d_Hr_3$, then $[a'_4]=[a_4]$ in $H^{1,4}(s\mid d_H)$.

## Statement references

[Bilal, §§9.2 and 9.4](https://arxiv.org/pdf/0802.0634)

[Alvarez, §2.4](https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf)

## Facts & Assumptions

**Given:** The local BRST complex, the relative cohomology quotient, and a counterterm change $a'_4-a_4=sC_4+d_Hr_3$.

[F1] [[def-qftx-local-brst-cohomology]]: the denominator of $H^{1,4}(s\mid d_H)$ is exactly $\{sC_4+d_Hr_3:C_4\in\mathcal A_U^{0,4},\ r_3\in\mathcal A_U^{1,3}\}$.

## Proof

1.1 By the assumed transformation rule, $a'_4-a_4=sC_4+d_Hr_3$, which is an element of the denominator subspace in [F1]. [given, F1, algebra]

2.1 Two cocycles whose difference belongs to the denominator define the same quotient class. Therefore $[a'_4]=[a_4]$ in the stated local BRST cohomology. [F1, step 1.1, algebra] ∎
