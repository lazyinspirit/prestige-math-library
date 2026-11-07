---
id: def-normalized-full-level-holomorphic-hecke-eigenform
kind: definition
title: "Normalized Full-Level Holomorphic Hecke Eigenform"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-level-one-modular-form-and-cusp-form
  - def-hecke-operator-on-congruence-forms
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, Propositions 5.16–5.18 and Corollary 5.20, printed pp. 73–75: normalized Hecke operators and normalized eigenforms."
    - title: "Peter Bruin and Sander Dahmen, Modular Forms (Spring 2020 lecture notes)"
      url: "https://vdeangel.xula.edu/ModularForms/PreTeXt/output/web/external/Bruin-Dahmen_ModularForms.pdf"
      locator: "Chapter 4 §§4.2, 4.5–4.6, printed pp. 53–57 and 60–62: normalized Hecke operators, q-expansion coefficients, and eigenforms."
---

## Definition

Let $k\ge2$ be even. A **normalized full-level holomorphic Hecke eigenform of weight $k$** is a nonzero cusp form $f\in S_k(SL_2(\mathbb Z))$ with Fourier expansion

$$f(z)=\sum_{n\ge1}a_f(n)q^n,\qquad q=e^{2\pi iz},$$

such that $a_f(1)=1$ and $T_n f=a_f(n)f$ for every integer $n\ge1$, where $T_n$ is the normalized level-one specialization of the Hecke operators defined by finite double-coset sums.

## Definition references

[[def-level-one-modular-form-and-cusp-form]]

[[def-hecke-operator-on-congruence-forms]]

[Milne, *Modular Functions and Modular Forms*, Chapter 5](https://www.jmilne.org/math/CourseNotes/MF.pdf)

[Bruin–Dahmen, *Modular Forms*, Chapter 4](https://vdeangel.xula.edu/ModularForms/PreTeXt/output/web/external/Bruin-Dahmen_ModularForms.pdf)
