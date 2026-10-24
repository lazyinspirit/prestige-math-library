---
id: def-cartesian-gaussian-primitives-and-contractions
kind: definition
title: Cartesian Gaussian primitives, contractions, and integral conventions
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-real-exponential-function-and-e, def-integrable-real-and-complex-functions-and-their-integrals, thm-derivative-of-exponential, lem-derivative-algebra-and-chain-rules]
axiom_use: None. The definitions use finite tuples and ordinary integration; no choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; primitive Cartesian Gaussians on pp. 3–6 and integral conventions on pp. 17–28."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §§II–IV, especially pp. 5–18."
---

## Definition

Write $\mathbb N_0=\{0,1,2,\ldots\}$ and $\|x\|_2=(x_1^2+x_2^2+x_3^2)^{1/2}$ for $x\in\mathbb R^3$. For $\alpha=(\alpha_1,\alpha_2,\alpha_3)\in\mathbb N_0^3$, exponent $a>0$, and center $A\in\mathbb R^3$, a **primitive Cartesian Gaussian** is
$$g_{\alpha,a,A}(x)=\prod_{j=1}^3(x_j-A_j)^{\alpha_j}\exp(-a\|x-A\|_2^2),\qquad x\in\mathbb R^3.$$
A **finite Gaussian contraction** is a finite sum $\phi=\sum_{k=1}^q c_k g_{\alpha_k,a_k,A_k}$ with $q\in\mathbb N_0$, $c_k\in\mathbb C$, $a_k>0$, and $A_k\in\mathbb R^3$. The zero-term sum is the zero function. Bras are conjugated.

For a pair of contractions put $f_{\phi,\psi}(x)=\overline{\phi(x)}\psi(x)$. For pair densities $f,g$, define the **Coulomb form**
$$\mathcal C(f,g)=\int_{\mathbb R^3}\int_{\mathbb R^3}\frac{\overline{f(x)}g(y)}{\|x-y\|_2}\,dy\,dx.$$
For finite contractions $\phi,\psi,\rho,\sigma$, define the overlap, kinetic, point-nucleus attraction, and two-electron Coulomb expressions by
$$S(\phi,\psi)=\int_{\mathbb R^3}\overline{\phi(x)}\psi(x)\,dx,\qquad T(\phi,\psi)=-\frac12\int_{\mathbb R^3}\overline{\phi(x)}\,\Delta\psi(x)\,dx,$$
$$V_C(\phi,\psi)=\int_{\mathbb R^3}\frac{\overline{\phi(x)}\psi(x)}{\|x-C\|_2}\,dx,$$
$$G(\phi,\psi;\rho,\sigma)=\mathcal C(f_{\phi,\psi},f_{\rho,\sigma}).$$
The primitives and their finite contractions are smooth: [[thm-derivative-of-exponential]] supplies smoothness of exp, and repeated coordinatewise applications of [[lem-derivative-algebra-and-chain-rules]] supply all polynomial-product and composition derivatives. Thus the following Laplacian is well defined.

Here $\Delta\psi=\sum_{j=1}^3\partial_{x_j}^2\psi$ is the Cartesian Laplacian.
All displayed integrals mean Lebesgue integrals in the sense of [[def-integrable-real-and-complex-functions-and-their-integrals]]. A finite nuclear attraction is any finite real linear combination of the $V_C$ terms, with its centers and weights specified. This definition alone asserts neither convergence nor a physical approximation postulate.

## Remarks

The exponents, centers, polynomial multi-indices, coefficients, and nuclear data are explicit finite input data. A contraction coefficient may be complex; later real variational energy bounds state their separate real-matrix hypotheses.
