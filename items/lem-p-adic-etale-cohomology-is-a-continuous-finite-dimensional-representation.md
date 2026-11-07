---
id: lem-p-adic-etale-cohomology-is-a-continuous-finite-dimensional-representation
kind: lemma
title: Smooth proper p-adic étale cohomology is a continuous finite-dimensional representation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-p-adic-etale-and-crystalline-cohomology
  - def-local-p-adic-galois-representation
  - def-absolute-galois-group-of-a-local-field
  - thm-proper-base-change-and-finiteness-for-constructible-torsion-etale-sheaves
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: AC is inherited through the étale-site injective-resolution branch in the p-adic cohomology definition; the finite-level inverse-limit algebra uses no further choice.
sources:
  references:
    - title: J. S. Milne, Lectures on Étale Cohomology, Chapter I, Theorems 19.1–19.2, pp. 122–126
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
    - title: "Takeshi Tsuji, Semi-stable conjecture of Fontaine–Jannsen: a survey, Sections 1–2"
      url: https://www.numdam.org/item/AST_2002__279__323_0.pdf
verification:
  precheck: n/a
---

## Statement

Let $K/\mathbb Q_p$ be finite and let $X$ be a smooth proper $K$-scheme. For every $i\ge0$, the natural action of $G_K$ on $H^i_{\acute et}(X\times_K\bar K,\mathbb Q_p)$ is continuous, and this cohomology group is finite-dimensional over $\mathbb Q_p$; hence it is a continuous $p$-adic representation of $G_K$.

## Statement references

[J. S. Milne, *Lectures on Étale Cohomology*, Chapter I, Theorems 19.1–19.2, pp. 122–126](https://www.jmilne.org/math/CourseNotes/LEC.pdf)

[Takeshi Tsuji, *Semi-stable conjecture of Fontaine–Jannsen: a survey*, Sections 1–2](https://www.numdam.org/item/AST_2002__279__323_0.pdf)

## Facts & Assumptions

**Given:** finite $K/\mathbb Q_p$, a smooth proper $K$-scheme $X$, and the cohomology notation above.

[F1] [[def-p-adic-etale-and-crystalline-cohomology]]: $H^i_{\acute et}(X_{\bar K},\mathbb Q_p)$ is defined by the inverse system of finite-coefficient étale cohomology groups and has its natural $G_K$-action.

[F2] [[thm-proper-base-change-and-finiteness-for-constructible-torsion-etale-sheaves]]: for proper finite-type morphisms and constructible torsion étale sheaves, proper base change identifies geometric stalks of higher direct images with the fiber cohomology groups and makes these direct images constructible. This draft supplier does not contain a locally completed proof.

[F3] [[def-local-p-adic-galois-representation]]: a continuous action on a finite-dimensional $\mathbb Q_p$-vector space is a local $p$-adic Galois representation.

[A1] [[def-axiom-of-choice]]: the site-cohomology construction used in [F1] follows the library's AC-dependent injective-resolution branch.

The source proof of finite generation of the inverse-limit $\mathbb Z_p$-cohomology uses proper-base-change finiteness; the continuity of the $G_K$-action on the inverse system also requires its finite-level descent argument. Those inputs have not been locally reconstructed here. This item is retained as an explicit prerequisite and is escalated rather than treated as a completed lemma.
