---
id: def-na-star-shaped-bogovskii-integral
kind: definition
title: "The Bogovskii integral on a star-shaped set"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ricardo G. Durán, An elementary proof of the continuity from L2_0(Omega) to H1_0(Omega)^n of Bogovskii’s right inverse of the divergence"
      url: https://arxiv.org/pdf/1103.3718
      locator: "Complete 17-page article; adopted proof range: pp. 2–7, formula (1.3), Lemmas 2.1–2.4 and Theorem 2.1; complete source reviewed."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 8, §8.2: continuous Stokes divergence lifting and inf-sup background."
verification: {}
---

## Definition

Let $U\subset\mathbb R^d$ be bounded and open, star-shaped with respect to a closed ball $\overline B(a,\rho)\subset U$. Choose $\omega\in C_c^\infty(B(a,\rho))$ with $\int\omega=1$. For $f\in C_c^\infty(U)$, initially define the vector-valued integral
$$ (\mathcal B_U f)(x)=\int_U f(y)(x-y)\int_0^1\omega\!\left(y+\frac{x-y}{t}\right)\frac{dt}{t^{d+1}}\,dy. $$
The inner integral is first interpreted for $t>0$; its locally integrable kernel, support and divergence identity are proved in the following lemma. All data and fields here are real. This definition makes no finite-quadrature or numerical-algorithm claim.
