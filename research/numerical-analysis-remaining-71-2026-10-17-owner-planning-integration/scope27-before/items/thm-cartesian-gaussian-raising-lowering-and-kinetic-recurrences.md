---
id: thm-cartesian-gaussian-raising-lowering-and-kinetic-recurrences
kind: theorem
title: Cartesian Gaussian raising, lowering, and kinetic-energy recurrences
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-cartesian-gaussian-primitives-and-contractions, thm-cartesian-gaussian-integrals-absolutely-convergent]
proof_strategy: direct
axiom_use: None. These are pointwise derivatives and finite integral identities.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; Cartesian Gaussian differentiation and kinetic-energy integrals on pp. 6 and 16."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; derivative charge distributions in §II and kinetic terms in §III, pp. 8–12."
---

## Statement

For $g_{\alpha,a,A}$ from [[def-cartesian-gaussian-primitives-and-contractions]], let $e_j$ be the $j$th coordinate vector. With terms having negative indices interpreted as zero,
$$\partial_{x_j}g_{\alpha,a,A}=\alpha_jg_{\alpha-e_j,a,A}-2ag_{\alpha+e_j,a,A},\qquad \partial_{A_j}g_{\alpha,a,A}=-\alpha_jg_{\alpha-e_j,a,A}+2ag_{\alpha+e_j,a,A}.$$
The second spatial derivative and kinetic operator are
$$\partial_{x_j}^2g_{\alpha,a,A}=\alpha_j(\alpha_j-1)g_{\alpha-2e_j,a,A}-2a(2\alpha_j+1)g_{\alpha,a,A}+4a^2g_{\alpha+2e_j,a,A},$$
$$-\frac12\Delta g_{\alpha,a,A}=\sum_{j=1}^3\left(-\frac{\alpha_j(\alpha_j-1)}2g_{\alpha-2e_j,a,A}+a(2\alpha_j+1)g_{\alpha,a,A}-2a^2g_{\alpha+2e_j,a,A}\right).$$
Consequently every kinetic integral of finite contractions is a finite linear combination of overlap integrals with these shifted multi-indices.

## Facts & Assumptions

**Given:** A primitive $g_{\alpha,a,A}$ with $a>0$ as in [[def-cartesian-gaussian-primitives-and-contractions]], and the integral definitions there.

[F1] [[def-cartesian-gaussian-primitives-and-contractions]]: $g_{\alpha,a,A}(x)=(x-A)^\alpha e^{-a\|x-A\|^2}$ and $T(\phi,\psi)=-\tfrac12\int\overline\phi\,\Delta\psi$.

[F2] [[thm-cartesian-gaussian-integrals-absolutely-convergent]]: each shifted primitive and the corresponding kinetic integrand are absolutely integrable.

## Proof

1.1 Differentiate the product $(x_j-A_j)^{\alpha_j}e^{-a(x_j-A_j)^2}$. The polynomial derivative contributes $\alpha_jg_{\alpha-e_j}$ and the exponential derivative contributes $-2a g_{\alpha+e_j}$, proving the spatial formula. Differentiating with respect to $A_j$ reverses the polynomial derivative sign and changes the exponential derivative to $+2a(x_j-A_j)$, proving the center formula. [given, F1, algebra]

2.1 Differentiate the spatial formula once more. The derivative of the lower term is $\alpha_j(\alpha_j-1)g_{\alpha-2e_j}-2a\alpha_jg_\alpha$ and the derivative of the raised term is $-2a(\alpha_j+1)g_\alpha+4a^2g_{\alpha+2e_j}$. Combining the two middle coefficients gives $-2a(2\alpha_j+1)$ and proves the second-derivative formula. [step 1.1, algebra]

3.1 Multiplying the second-derivative identity by $-1/2$ and summing over $j$ gives the displayed Laplacian formula pointwise. By [F2], all shifted terms are integrable, so substituting this finite sum into the kinetic integral and using finite linearity expresses it as the asserted finite combination of overlaps. Conjugation and finite contraction sums preserve the identity. [given, F1, F2, step 2.1, algebra] ∎
