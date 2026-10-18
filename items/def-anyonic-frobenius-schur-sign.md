---
id: def-anyonic-frobenius-schur-sign
kind: definition
title: "Frobenius–Schur sign in a normalized anyonic vacuum channel"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-left-dual-and-right-dual-object, def-the-dimension-of-an-object-relative-to-a-pivotal-structure, def-pivotal-structure, def-qc-tqc-f-symbol, def-qc-tqc-unitary-fusion-category, def-spherical-structure]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.2–3.5, PDF pp. 4–16: unitary duality and F-symbol conventions."
    - title: "Andrei Bernevig and Titus Neupert, Topological Superconductors and Category Theory"
      url: "https://math.uniandes.edu.co/~cursillo_gr/escuela2015/abstracts/LectureNotes_LesHouches14_Vietri14_Bogota15_NeupertBernevig.pdf"
      locator: "§III.A.4, PDF pp. 54–55, equation (113): the vacuum bend coefficient and Frobenius–Schur phase."
---

## Definition

Let $\mathcal C$ be a unitary spherical fusion category over $\mathbb C$, with pivotal structure and spherical dimension as in [[def-pivotal-structure]], [[def-spherical-structure]], and [[def-the-dimension-of-an-object-relative-to-a-pivotal-structure]]. Let $a$ be a self-dual simple object with $N_{aa}^{\mathbf1}=1$. Choose a unit vector $v:\mathbf1\to a\otimes a$ spanning the one-dimensional vacuum split space and let $d_a>0$ be its positive spherical dimension.

A **normalized vacuum-channel self-duality datum** is a supplied pair of maps $\operatorname{coev}:\mathbf1\to a\otimes a$ and $\operatorname{ev}:a\otimes a\to\mathbf1$ of the form

$$\operatorname{coev}=\sqrt{d_a}\,v,\qquad \operatorname{ev}=\kappa_a\sqrt{d_a}\,v^\dagger,$$

where $\kappa_a\in\{+1,-1\}$ and the two duality zig-zag identities hold after the self-duality identification, using the left-dual convention of [[def-left-dual-and-right-dual-object]]. We call $\kappa_a$ the **Frobenius–Schur sign in this normalized cup/cap convention**. It is not a braiding or $R$-symbol phase.

This item records supplied normalized duality data; it does not assert that every self-dual simple object admits the displayed gauge or prove a trace, ribbon, or category-equivalence theorem. An example must supply the datum or compute the sign from coherent normalized F-data; fusion rules alone do not specify it.
