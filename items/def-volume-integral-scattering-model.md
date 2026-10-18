---
id: def-volume-integral-scattering-model
kind: definition
title: The three-dimensional volume integral scattering model
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-complex-lp-and-euclidean-test-function-conventions, def-l-p-space-as-a-quotient-by-null-functions, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-essential-supremum-with-respect-to-a-measure, prop-essential-supremum-is-attained-as-the-least-essential-bound, def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-exponential, def-euclidean-inner-product, def-integrable-real-and-complex-functions-and-their-integrals, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, def-polar-surface-measure-on-the-unit-sphere, def-laplacian-of-a-c2-function, def-countable-choice]
justified_by: [lem-volume-integral-operator-well-defined-and-bounded, lem-volume-far-field-map-is-bounded]
proof_strategy: not-applicable
axiom_use: "Countable Choice is assumed for the polar surface measure and the well-definedness interfaces. No physical uniqueness claim is part of this definition."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, Sommersemester 2015, Chapter 5, §5.2.6"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "PDF pp. 79–82, Lippmann–Schwinger equation and volume potential; our sign convention is stated explicitly."
    - title: "Maximilian Kreuzer, Quantum Theory: Lecture Notes, Chapter 8"
      url: "https://hep.itp.tuwien.ac.at/~kreuzer/Quanten.15.07.09.pdf"
      locator: "PDF pp. 149–156, partial-wave and Lippmann–Schwinger conventions."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Assume Countable Choice. Let $D\subset\mathbb R^3$ be a bounded Lebesgue-measurable set, let $M:=|D|$, let $q\in L^\infty(D;\mathbb C)$, and let $k\in\mathbb R$. Here $L^2$ and $L^\infty$ are equivalence classes modulo null functions ([[def-l-p-space-as-a-quotient-by-null-functions]]), and $L^\infty$ means essentially bounded with respect to Lebesgue measure ([[def-essential-supremum-with-respect-to-a-measure]]). We regard $q$ as zero off $D$. The convention is the volume equation
$$u=f+K_k u,\qquad K_k u(x):=\int_D G_k(x-y)q(y)u(y)\,dy,\qquad G_k(z):=\frac{e^{ik|z|}}{4\pi|z|}\quad(z\ne0).$$
Set $G_k(0):=0$; when $M>0$ the diagonal in $D\times D$ is product-null, so this value is only a representative convention. The input and unknown are classes in complex $L^2(D)$, and the displayed equation is interpreted as an equality of those classes. Its formula is well defined by [[lem-volume-integral-operator-well-defined-and-bounded]].

The associated far-field map is
$$\mathcal F_k[v](\theta):=\frac1{4\pi}\int_D e^{-ik\theta\cdot y}q(y)v(y)\,dy,\qquad \theta\in S^2.$$
Here $S^2$ has the surface measure of [[def-polar-surface-measure-on-the-unit-sphere]]. The map is well defined as a continuous function of $\theta$ by [[lem-volume-far-field-map-is-bounded]].

For $x\notin\overline D$, the exterior volume potential is
$$V_kv(x):=\int_D G_k(x-y)q(y)v(y)\,dy.$$
For each $v\in L^2(D;\mathbb C)$, the essential-supremum result gives $|q|\le\|q\|_\infty$ almost everywhere, and Cauchy--Schwarz gives $\|qv\|_{L^1(D)}\le\|q\|_\infty\sqrt M\,\|v\|_2$. Thus, for $x\notin\overline D$, the exterior volume-potential integral is absolutely convergent: $\overline D$ is closed, so its complement contains a ball about $x$ disjoint from $D$.

If $M=0$, define $L^2(D)=\{0\}$ and $K_k=0$; all solution and far-field statements on that space are the zero-space statements. The substantive operator results below assume $0<M<\infty$.

This is a stipulated integral-equation model with the sign convention $(-\Delta-k^2)(u-f)=q u$ when the corresponding distributional Helmholtz equation is used. In the acoustic notation of Scherzer–Mindrinos, their equation $u=u_i-k^2\Phi*((1-n)u)$ corresponds to $q=k^2(n-1)$. No existence or uniqueness for all contrasts is asserted by this definition.
