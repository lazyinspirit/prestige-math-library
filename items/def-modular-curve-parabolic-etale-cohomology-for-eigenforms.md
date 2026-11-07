---
id: def-modular-curve-parabolic-etale-cohomology-for-eigenforms
kind: definition
title: "Parabolic étale cohomology of a modular curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-derived-category-of-etale-sheaves
  - def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf
  - def-compactly-supported-etale-cohomology
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "Chapter I §18, compact-support cohomology and the forget-support map."
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
      locator: "§§3.10–3.11, parabolic cohomology and its cuspidal decomposition for modular curves."
    - title: "Fred Diamond and John Im, Modular Forms and Modular Curves"
      url: "https://wstein.org/edu/Fall2003/252/references/diamond-im/Diamond-Im_Modular_forms_and_modular_curves.pdf"
      locator: "Chapter 12, §12.2, scanned printed pp. 106–113: Eichler cohomology and the parabolic cohomology construction."
---

## Definition

Assume AC. Let $Y$ be a smooth one-dimensional scheme over $\mathbb Q$, let $j:Y\hookrightarrow X$ be a fixed open immersion into a proper curve over $\mathbb Q$, and let $\ell$ be a prime. For a lisse constructible $\mathbb Q_\ell$-sheaf $\mathcal V$ on $Y_{\overline{\mathbb Q}}$, let $H^1_{\acute et}(Y_{\overline{\mathbb Q}},\mathcal V)$ have the meaning fixed in the ordinary-cohomology definition and let $H_c^1(Y_{\overline{\mathbb Q}},\mathcal V)$ have the meaning fixed in the compact-support definition. The **parabolic étale cohomology** is

$$H^1_{\mathrm{par}}(Y_{\overline{\mathbb Q}},\mathcal V):=\operatorname{im}\!\left(H_c^1(Y_{\overline{\mathbb Q}},\mathcal V)\longrightarrow H^1(Y_{\overline{\mathbb Q}},\mathcal V)\right),$$

where the map forgets the support condition. This is a definition for the displayed fixed pair $(Y,X)$; it asserts neither independence of compactification nor finite-dimensionality, Galois continuity, or a modular-forms comparison.

## Definition references

[[def-lisse-l-adic-sheaf-on-a-scheme]]

[[def-constructible-l-adic-sheaf-on-a-scheme]]

[[def-derived-category-of-etale-sheaves]]

[[def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf]]

[[def-compactly-supported-etale-cohomology]]

[[def-axiom-of-choice]]

[Milne, *Lectures on Étale Cohomology*, Chapter I §18](https://jmilne.org/math/CourseNotes/LEC.pdf)

[Deligne, *Formes modulaires et représentations ℓ-adiques*, §§3.10–3.11](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

[Diamond–Im, *Modular Forms and Modular Curves*, §12.2](https://wstein.org/edu/Fall2003/252/references/diamond-im/Diamond-Im_Modular_forms_and_modular_curves.pdf)
