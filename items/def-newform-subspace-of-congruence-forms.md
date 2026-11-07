---
id: def-newform-subspace-of-congruence-forms
kind: definition
title: "New and Old Subspaces of Congruence-Level Cusp Forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-normalized-cuspidal-eigenform-over-gl2
  - def-congruence-modular-form-with-nebentypus
  - lem-finite-index-congruence-modular-quotient-has-finite-cusp-charts
  - lem-degeneracy-maps-preserve-congruence-cusp-forms
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Peter Bruin and Sander Dahmen, Modular Forms, full lecture notes"
      url: "https://websites.math.leidenuniv.nl/algebra/modularforms.pdf"
      locator: "§5.3, printed pp. 77–80: level-raising maps f(z) to f(ez), their restriction to cusp spaces, and the old/new orthogonal-complement definition at Gamma_1(N)."
    - title: "Robert Kurinczuk, Modular Forms, full lecture notes"
      url: "https://www.ma.imperial.ac.uk/~dhelm/M4P58/ModularForms2.pdf"
      locator: "Chapter 3 §3.4, printed pp. 64–65: the maps from lower level, the old subspace, and the Petersson-orthogonal new subspace."
---

## Definition

Fix $N\ge1$, an even integer $k\ge2$, a number field $E$ embedded in $\mathbb C$, and a Dirichlet character $\chi:(\mathbb Z/N\mathbb Z)^\times\to E^\times$ satisfying $\chi(-1)=(-1)^k$. For every proper divisor $M\mid N$, every divisor $d\mid N/M$, and every Dirichlet character $\chi_M:(\mathbb Z/M\mathbb Z)^\times\to E^\times$ whose pullback along the reduction homomorphism $(\mathbb Z/N\mathbb Z)^\times\to(\mathbb Z/M\mathbb Z)^\times$ is $\chi$, the degeneracy map is $V_dg(z)=g(dz)$ from $S_k(\Gamma_0(M),\chi_M)$ to $S_k(\Gamma_0(N),\chi)$. The **old subspace** $S_k^{\mathrm{old}}(\Gamma_0(N),\chi)$ is the span of the images of all these maps; if there are no such pairs $(M,\chi_M)$, it is $\{0\}$. Equip $S_k(\Gamma_0(N),\chi)$ with the Petersson inner product
$$\langle f,g\rangle_N=\int_{\Gamma_0(N)\backslash\mathbb H}f(z)\overline{g(z)}\,(\operatorname{Im}z)^k\,\frac{dx\,dy}{y^2}.$$
The **new subspace** is $S_k^{\mathrm{new}}(\Gamma_0(N),\chi)=(S_k^{\mathrm{old}}(\Gamma_0(N),\chi))^\perp$. A normalized newform of character $\chi$ is a normalized cuspidal Hecke eigenform in $S_k(\Gamma_0(N),\chi)$ whose vector lies in this orthogonal complement.

## Definition references

[Peter Bruin and Sander Dahmen, Modular Forms, full lecture notes, §5.3](https://websites.math.leidenuniv.nl/algebra/modularforms.pdf)

[Robert Kurinczuk, Modular Forms, full lecture notes, Chapter 3 §3.4](https://www.ma.imperial.ac.uk/~dhelm/M4P58/ModularForms2.pdf)

## Facts & Assumptions

**Given:** The weight, level, character, cusp spaces, and normalized Hecke eigenforms at congruence level.

[F1] [[def-congruence-modular-form-with-nebentypus]]: a character cusp form satisfies the weight-$k$ automorphy law, has a Fourier expansion at every rational cusp, and is cuspidal exactly when every such expansion has zero constant term.

[F2] [[def-normalized-cuspidal-eigenform-over-gl2]]: a normalized cuspidal eigenform has first Fourier coefficient $1$ and is an eigenvector for the normalized Hecke operators on its stated character space.

[F3] [[lem-finite-index-congruence-modular-quotient-has-finite-cusp-charts]]: the quotient has finitely many cusp charts and a compact complement after those charts are removed.

[F4] [[lem-degeneracy-maps-preserve-congruence-cusp-forms]]: for each factorization $\chi=\chi_M\circ\mathrm{red}$ and $d\mid N/M$, the map $g(z)\mapsto g(dz)$ sends the level-$M$ cusp space into the level-$N$ cusp space.

## Proof

1.1 By [F4], every map whose image occurs in the definition has values in $S_k(\Gamma_0(N),\chi)$. There are finitely many divisors $M,d$ of $N$; for each $M$, the finite unit group has finite exponent, so each $E$-valued character takes values among finitely many roots of unity and there are finitely many choices of $\chi_M$. Thus the span of the images is a vector subspace of the target cusp space. [given, F4, algebra]

1.2 The product $f\overline g(\operatorname{Im}z)^k$ is invariant under $\Gamma_0(N)$ because $f$ and $g$ have the same unitary character and the weight-$k$ factors cancel. On the compact complement in [F3] it is bounded; in each cusp chart, both cusp forms decay exponentially, so its absolute integral converges. For $f\ne0$, $|f|^2(\operatorname{Im}z)^k$ is positive on a nonempty open set, so the integral is positive. Thus the Petersson form is a positive-definite inner product. [F1, F3, given, algebra]

2.1 For any inner-product space and subspace $W$, the set $W^\perp=\{v:\langle v,w\rangle=0\text{ for every }w\in W\}$ is a subspace by linearity in $v$. Applying this to the old subspace from step 1.1 defines the new subspace. The last sentence then defines a normalized newform by requiring the eigenform in [F2] to lie in that complement; it does not assert that the complement is nonzero. [F2, step 1.1, step 1.2, algebra] ∎
