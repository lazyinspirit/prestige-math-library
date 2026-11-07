---
id: def-ray-class-group
kind: definition
title: "Ray class group of a number field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-global-field-modulus
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-fractional-ideal
  - def-prime-ideal-valuations-on-fractional-ideals
  - def-quotient-group
  - def-group
  - lem-ray-class-congruence-subgroup-well-defined
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 5
axiom_use: >-
  AC and AC_omega are inherited through the global place and completion
  interfaces used for the finite congruence conditions.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §1, modulus and ray class group definitions, printed pp.148–150."
verification:
  precheck: n/a

---

## Definition

Let $K$ be a number field and let $\mathfrak m=(\mathfrak m_0,S_\infty)$ be a modulus. Let $I_K(\mathfrak m_0)$ be the multiplicative group of nonzero fractional ideals $\mathfrak a$ of $\mathcal O_K$ such that $v_{\mathfrak p}(\mathfrak a)=0$ for every finite prime $\mathfrak p\mid\mathfrak m_0$. Define
$$K_{\mathfrak m,1}=\{\alpha\in K^\times:v_{\mathfrak p}(\alpha-1)\ge n_{\mathfrak p}\text{ for every }\mathfrak p\mid\mathfrak m_0,\ \sigma(\alpha)>0\text{ for every }\sigma\in S_\infty\}.$$
Let $P_K^1(\mathfrak m)=\{(\alpha):\alpha\in K_{\mathfrak m,1}\}$ be its principal-ideal image. The subgroup lemma proves that this is a subgroup of $I_K(\mathfrak m_0)$. The **ray class group** modulo $\mathfrak m$ is the quotient group $\operatorname{Cl}_{\mathfrak m}(K)=I_K(\mathfrak m_0)/P_K^1(\mathfrak m)$.

## Definition references

[[def-global-field-modulus|Number-field modulus]]

[[def-global-field|Number-field branch of a global field]]

[[def-place-of-a-global-field|Finite places and valuations]]

[[def-completion-of-a-global-field-at-a-place|Finite-place completions]]

[[def-fractional-ideal|Fractional ideals]]

[[def-prime-ideal-valuations-on-fractional-ideals|Prime-ideal valuations]]

[[def-quotient-group|Quotient group]]

[[def-group|Group]]

[J. S. Milne, Chapter V §1, ray class group definition](https://www.jmilne.org/math/CourseNotes/CFT.pdf)
