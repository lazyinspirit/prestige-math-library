---
id: thm-soundararajan-weak-subconvexity-symmetric-square
kind: theorem
title: "Soundararajan Weak Subconvexity for the Symmetric-Square L-Function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-normalized-full-level-holomorphic-hecke-eigenform
  - def-holomorphic-eigenform-hyperbolic-mass-measure
  - def-petersson-inner-product-on-congruence-forms
  - def-weight-zero-maass-form-on-gamma0n
  - def-eisenstein-series-for-congruence-subgroups
  - thm-fourier-whittaker-expansion-maass-cusp-forms
  - thm-standard-gl2-l-function-analytic-continuation-and-functional-equation
  - thm-equal-weight-holomorphic-gl2-rankin-selberg-functional-equation
  - thm-completed-level-one-eisenstein-series-functional-equation
  - thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms
  - thm-symmetric-square-l-function-analytic-properties-and-zero-free-region
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "K. Soundararajan, Weak Subconvexity for Central Values of L-Functions"
      url: "https://arxiv.org/pdf/0809.1635v1"
      locator: "§1, equation (1.1), Example 1 and Corollary 1, printed pp. 4–7."
    - title: "R. Holowinsky and K. Soundararajan, Mass Equidistribution for Hecke Eigenforms"
      url: "https://arxiv.org/pdf/0809.1636v1"
      locator: "§1, Theorem 3, printed pp. 5–6: Maass and Eisenstein matrix-coefficient consequences."
---

## Statement

Assume the Axiom of Choice, the Axiom of Dependent Choice, and Countable Choice. Let $k\ge4$ be even and let $f(z)=\sum_{n\ge1}a_f(n)e^{2\pi inz}$ be a nonzero full-level holomorphic Hecke cusp form with $a_f(1)=1$ and $T_nf=a_f(n)f$ for every $n\ge1$. Put $F_{f,k}(z)=y^{k/2}f(z)/\langle f,f\rangle_{1,k}^{1/2}$, where the denominator is the positive Petersson norm, and put $\lambda_f(n)=a_f(n)n^{-(k-1)/2}$. For every $\epsilon>0$ and every real $t$,
$$|L(\tfrac12+it,\operatorname{sym}^2 f)|\ll_\epsilon \frac{k^{1/2}(1+|t|)^{3/4}}{(\log k)^{1-\epsilon}}.$$
For every fixed unit-norm level-one weight-zero Hecke–Maass cusp eigenfunction $\phi$ and every fixed real $t$, the pairings also satisfy
$$|\langle \phi F_{f,k},F_{f,k}\rangle_X|\ll_{\phi,\epsilon}\frac{(\log k)^{-1/2+\epsilon}}{L(1,\operatorname{sym}^2 f)},$$
and
$$|\langle E(\cdot,\tfrac12+it)F_{f,k},F_{f,k}\rangle_X|\ll_\epsilon\frac{(1+|t|)^2(\log k)^{-1+\epsilon}}{L(1,\operatorname{sym}^2 f)}.$$
Here $\mathbb H=\{x+iy:y>0\}$, $\Gamma=\mathrm{PSL}_2(\mathbb Z)$ acts by fractional linear transformations, $X=\Gamma\backslash\mathbb H$, $dA=dx\,dy/y^2$, and $\langle u,v\rangle_X=\int_Xu(z)\overline{v(z)}\,dA(z)$. The group $\Gamma_\infty=\{z\mapsto z+n:n\in\mathbb Z\}$ is the stabilizer of infinity. For $\operatorname{Re}s>1$, $E(z,s)=\sum_{\gamma\in\Gamma_\infty\backslash\Gamma}\operatorname{Im}(\gamma z)^s$, and the values on $\operatorname{Re}s=1/2$ are defined by meromorphic continuation.

## Statement references

[[def-normalized-full-level-holomorphic-hecke-eigenform]]

[[def-holomorphic-eigenform-hyperbolic-mass-measure]]

[[def-petersson-inner-product-on-congruence-forms]]

[[def-weight-zero-maass-form-on-gamma0n]]

[[def-eisenstein-series-for-congruence-subgroups]]

[[thm-symmetric-square-l-function-analytic-properties-and-zero-free-region]]

[[thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms]]

[[thm-standard-gl2-l-function-analytic-continuation-and-functional-equation]]

[[thm-equal-weight-holomorphic-gl2-rankin-selberg-functional-equation]]

[[thm-completed-level-one-eisenstein-series-functional-equation]]

[Soundararajan, *Weak Subconvexity for Central Values of L-Functions*, §1 and Example 1](https://arxiv.org/pdf/0809.1635v1)

[Holowinsky–Soundararajan, *Mass Equidistribution for Hecke Eigenforms*, Theorem 3](https://arxiv.org/pdf/0809.1636v1)

## Proof status

No local proof is supplied. Soundararajan’s symmetric-square estimate uses the analytic conductor, completed functional equation, Deligne’s unitary Satake parameters and a weak-Ramanujan mean-square hypothesis in his general theorem. The Maass pairing additionally uses Watson’s triple-product formula and a triple-product weak-subconvexity estimate; no local Watson/triple-product supplier is declared. The completed level-one Eisenstein continuation and its Rankin–Selberg normalization relation are present, but the uncompleted Eisenstein continuation on the critical line and the pairing estimate still need a complete local proof. The source claims are retained with these supplier gaps explicit.
