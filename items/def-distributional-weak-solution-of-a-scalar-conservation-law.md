---
id: def-distributional-weak-solution-of-a-scalar-conservation-law
kind: definition
title: Distributional weak solutions of the Cauchy problem
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
justified_by: []
aliases: []
deps: [def-scalar-conservation-law-and-flux, def-distribution, def-distributional-derivative, def-test-function-space-d-of-an-open-set, def-locally-integrable-function-on-r-n, def-l-p-space-as-a-quotient-by-null-functions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§2, (1.5)--(1.6) and Definition 1, pp. 220--221"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§4.1, (4.2)--(4.3), pp. 18--19"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.1, weak solutions, p. 9"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$, $T>0$, $\Pi_T=\mathbb R^n\times(0,T)$, let
$f\colon\mathbb R\to\mathbb R^n$ be continuous and let
$u_0\in L^\infty(\mathbb R^n)\cap L^1_{\mathrm{loc}}(\mathbb R^n)$. A bounded
measurable $u\colon\Pi_T\to\mathbb R$ is a **distributional weak solution** of
the Cauchy problem $u_t+\operatorname{div}_x f(u)=0$, $u(\cdot,0)=u_0$, if for
every $\varphi\in C_c^\infty(\mathbb R^n\times(-\infty,T))$ --- test functions
whose support may meet the initial plane $t=0$ --- one has
$$\int_{\Pi_T}\Bigl(u\,\varphi_t+f(u)\cdot\nabla_x\varphi\Bigr)\,dx\,dt+\int_{\mathbb R^n}u_0(x)\varphi(x,0)\,dx=0.$$
Equivalently $u_t+\operatorname{div}_x f(u)=0$ in $\mathcal D'(\Pi_T)$, together
with the displayed initial boundary term
([[def-distribution]], [[def-distributional-derivative]],
[[def-test-function-space-d-of-an-open-set]]). The integrals are absolutely
convergent: $u$ is bounded, $f(u)$ is bounded on the bounded range of $u$, and
$\varphi$ has compact support, so the pairings are $L^1_{\mathrm{loc}}$ pairings
and are representative-independent ([[def-locally-integrable-function-on-r-n]],
[[def-l-p-space-as-a-quotient-by-null-functions]]; the product-space identities
are those of [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] and
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]). The condition is an
equality in the $L^1_{\mathrm{loc}}$ classes of $u$ and $f(u)$; it involves no
pointwise assignment of $u$ on $\{t=0\}$, and the initial datum enters only
through the boundary term ([[def-scalar-conservation-law-and-flux]]). For the
entropy formulation of this page the initial condition is instead imposed as a
strong local $L^1$ trace ([[def-kruzhkov-entropy-solution]]).
