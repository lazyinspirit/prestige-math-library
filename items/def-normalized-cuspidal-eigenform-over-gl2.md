---
id: def-normalized-cuspidal-eigenform-over-gl2
kind: definition
title: "Normalized cuspidal Hecke eigenform for GL₂"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-level-one-modular-form-and-cusp-form
  - def-congruence-modular-form-with-nebentypus
  - def-hecke-operator-on-congruence-forms
  - thm-hecke-preserves-cuspidality-on-congruence-subgroups
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapters 4–5, §§4.4–4.5 and §§5.1–5.5: cusp forms, normalized Hecke operators, and Hecke eigenforms."
    - title: "Peter Bruin and Sander Dahmen, Modular Forms (Spring 2020 lecture notes)"
      url: "https://vdeangel.xula.edu/ModularForms/PreTeXt/output/web/external/Bruin-Dahmen_ModularForms.pdf"
      locator: "Chapter 3 §§3.1–3.3 and Chapter 4 §§4.1–4.5: congruence-level cusp forms and Hecke operators."
    - title: "Fred Diamond and John Im, Modular Forms and Modular Curves"
      url: "https://wstein.org/edu/Fall2003/252/references/diamond-im/Diamond-Im_Modular_forms_and_modular_curves.pdf"
      locator: "Chapter 12, §12.5.1, scanned printed pp. 120–121: normalized eigenforms, coefficient fields, and the attached representation statement."
---

## Definition

Let $N\ge1$, let $k\ge2$, and let $E$ be a number field with a fixed embedding $\iota_\infty:E\hookrightarrow\mathbb C$. Let $\chi:(\mathbb Z/N\mathbb Z)^\times\to E^\times$ be a Dirichlet character satisfying $\chi(-1)=(-1)^k$. A **normalized cuspidal Hecke eigenform of weight $k$, level $\Gamma_0(N)$, and nebentypus $\chi$ over $E$** is a nonzero cusp form

$$f(z)=\sum_{n\ge1}a_n e^{2\pi i n z}\in S_k(\Gamma_0(N),\chi)$$

whose coefficients satisfy $a_n\in E$, whose first coefficient is $a_1=1$, and for which $T_n f=a_n f$ for every integer $n\ge1$, with the normalized Hecke operators acting on the indicated cusp space. The field generated over $\mathbb Q$ by all $a_n$ and the values of $\chi$ is called the coefficient field of $f$; in this definition it is required to be contained in the specified number field $E$. The phrase “for $\mathrm{GL}_2$” refers to the standard two-dimensional Galois representation attached to such a form, not to an additional condition on its Fourier expansion.

## Definition references

[[def-level-one-modular-form-and-cusp-form]]

[[def-congruence-modular-form-with-nebentypus]]

[[def-hecke-operator-on-congruence-forms]]

[[thm-hecke-preserves-cuspidality-on-congruence-subgroups]]

[Milne, *Modular Functions and Modular Forms*, Chapters 4–5](https://www.jmilne.org/math/CourseNotes/MF.pdf)

[Bruin–Dahmen, *Modular Forms*, Chapters 3–4](https://vdeangel.xula.edu/ModularForms/PreTeXt/output/web/external/Bruin-Dahmen_ModularForms.pdf)

[Diamond–Im, *Modular Forms and Modular Curves*, §12.5.1](https://wstein.org/edu/Fall2003/252/references/diamond-im/Diamond-Im_Modular_forms_and_modular_curves.pdf)
