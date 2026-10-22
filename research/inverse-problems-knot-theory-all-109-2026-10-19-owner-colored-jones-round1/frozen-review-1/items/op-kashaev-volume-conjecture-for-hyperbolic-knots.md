---
id: op-kashaev-volume-conjecture-for-hyperbolic-knots
kind: open-problem
title: "Kashaev–Murakami–Murakami volume conjecture for hyperbolic knots"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-finite-volume-hyperbolic-knot-exterior
  - def-normalized-colored-jones-sequence
  - lem-colored-jones-generic-quotient-is-laurent
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hitoshi Murakami and Jun Murakami, The colored Jones polynomials and the simplicial volume of a knot, §§1–5"
      url: "https://arxiv.org/pdf/math/9905075"
    - title: "Hitoshi Murakami, An Introduction to the Volume Conjecture, §§1–4"
      url: "https://arxiv.org/pdf/1002.0126"
    - title: "Christoph Aistleitner and Bence Borda, A conjecture of Zagier and the value distribution of quantum modular forms, §1"
      url: "https://ems.press/content/serial-article-files/51448"
    - title: "Shinichiro Kakuta, On the volume conjecture of the colored Jones invariants with arbitrary colors, version 3, §1"
      url: "https://arxiv.org/pdf/2604.10472v3"
---

## Open problem

Let $K$ be an oriented smooth knot in $S^3$, let $E_K$ be its compact exterior, and equip $\operatorname{int}(E_K)$ with a complete finite-volume hyperbolic metric $g$ having exactly one peripheral torus cusp. Write $\operatorname{Vol}_g(K)$ for its Riemannian volume. Let $J_N(K;q)\in\mathbb Z[q,q^{-1}]$ be the normalized $N$-dimensional colored Jones Laurent polynomial with $J_N(\bigcirc;q)=1$, in the variable $q=A^4$ declared in the generic color definition. Put $q_N=\exp(2\pi i/N)$. The conjecture is that $J_N(K;q_N)\ne0$ for all sufficiently large $N$ and that
$$\lim_{N\to\infty}\frac{2\pi}{N}\log|J_N(K;q_N)|=\operatorname{Vol}_g(K).$$
This is the real absolute-value formulation; the complex-volume refinement is a separate conjecture.

## Open problem references

[[def-normalized-colored-jones-sequence]]

[[lem-colored-jones-generic-quotient-is-laurent]]

[Murakami and Murakami, *The colored Jones polynomials and the simplicial volume of a knot*, §§1–5](https://arxiv.org/pdf/math/9905075)

[Murakami, *An Introduction to the Volume Conjecture*, §§1–4](https://arxiv.org/pdf/1002.0126)

## Status

As of 2026-10-19, the classical diagonal-sequence conjecture for arbitrary hyperbolic knots remains open in the inspected status source. Aistleitner and Borda (2025), §1, state that the classical volume conjecture is proved for some low-crossing knots, including the figure-eight knot, but remains open for general knots. Kakuta's version-3 preprint (2026), §1, proves a different varying-color, deformed-parameter statement for a range of cone angles on the figure-eight knot; its stated parameter and color regime do not settle the classical sequence with color dimension $N$ and parameter $q_N=\exp(2\pi i/N)$ for every hyperbolic knot. The complex-volume/Chern–Simons refinement is distinct from the real limit stated above.

The local Laurent-polynomial supplier proves that the displayed generic normalization is an element of $\mathbb Z[q,q^{-1}]$ for every knot and color and matches Murakami’s explicit normalization with $q=A^4$. Thus $J_N(K;q_N)$ is evaluation of that Laurent polynomial. For $N\ge2$ the quantum dimension in the generic quotient vanishes at $q_N$; direct specialized division is not its definition. This algebraic well-definedness does not prove the conjectured asymptotic limit.

## Status references

[Aistleitner and Borda, *A conjecture of Zagier and the value distribution of quantum modular forms*, §1, printed pp. 5044–5045](https://ems.press/content/serial-article-files/51448)

[Kakuta, *On the volume conjecture of the colored Jones invariants with arbitrary colors*, version 3, §1](https://arxiv.org/pdf/2604.10472v3)

[Habiro, *On the quantum $\mathfrak{sl}_2$ invariants of knots and integral homology spheres*, introduction and §§2.3, 3.3](https://arxiv.org/pdf/math/0211044)
