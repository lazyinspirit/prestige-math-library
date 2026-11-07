---
id: def-petersson-inner-product-on-congruence-forms
kind: definition
title: "Petersson Inner Product on Congruence Forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-congruence-modular-form-with-nebentypus
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Peter Bruin and Sander Dahmen, Modular Forms (Spring 2020 lecture notes)"
      url: "https://vdeangel.xula.edu/ModularForms/PreTeXt/output/web/external/Bruin-Dahmen_ModularForms.pdf"
      locator: "Chapter 5 §5.1, printed pp. 67–70: invariance of hyperbolic area, cusp-end convergence, and the Petersson product."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, printed pp. 76–77: the Petersson product and invariance under the weight-k slash action."
---

## Definition

Let $N\ge1$, $k\ge0$, and let $\chi$ be a character modulo $N$. For cusp forms $f,g\in S_k(\Gamma_0(N),\chi)$ define the **Petersson inner product**, linear in its first argument, by

$$\langle f,g\rangle_{N,k}:=\int_{\mathcal F_{\Gamma_0(N)}} f(z)\overline{g(z)}(\operatorname{Im}z)^k\,\frac{dx\,dy}{y^2},\qquad z=x+iy,$$

where $\mathcal F_{\Gamma_0(N)}$ is any measurable fundamental region for the action of $\Gamma_0(N)$ on the upper half-plane. This integral is independent of the chosen fundamental region: the hyperbolic area form $dx\,dy/y^2$ is invariant under $SL_2(\mathbb Z)$, and $f(z)\overline{g(z)}y^k$ is $\Gamma_0(N)$-invariant because $|\chi(d)|=1$. It converges because a fundamental region has compact interior and finitely many cusp ends; at each cusp the two cusp forms have expansions with positive exponents, so their product is $O(e^{-4\pi y/W}y^k)$ on a bounded-width strip for some $W>0$, which is integrable against $y^{-2}dy\,dx$. The resulting Hermitian form is positive definite, since a nonzero holomorphic function is nonzero on an open set of positive area.

## Definition references

[[def-congruence-modular-form-with-nebentypus]]
