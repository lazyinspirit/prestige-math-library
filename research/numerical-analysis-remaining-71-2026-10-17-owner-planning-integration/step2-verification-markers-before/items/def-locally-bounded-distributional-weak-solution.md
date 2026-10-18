---
id: def-locally-bounded-distributional-weak-solution
kind: definition
title: Locally bounded distributional weak solutions of scalar laws
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
aliases: []
deps: [def-scalar-conservation-law-and-flux, def-distributional-weak-solution-of-a-scalar-conservation-law]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter 3, complete chapter, PDF pp. 81–106"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "§3.2.1, pp. 83–84, and §3.2.3, pp. 88–90: scalar conservation laws, integral balances and weak shocks."
    - title: "Gregory A. Chechkin and Andrey Yu. Goritsky, S. N. Kruzhkov’s lectures on first-order quasilinear PDEs, complete lecture notes in Analytical and Numerical Aspects of PDEs (de Gruyter, 2009)"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "Complete 67-page lecture notes; §4.1, equation (4.3), PDF p. 19 (printed p. 19): compactly supported test-function weak integral identity for the scalar conservation law."
---

## Definition

Let $T>0$, let $f\colon\mathbb R\to\mathbb R$ be continuous, and let
$u_0\in L^\infty(\mathbb R)\cap L^1_{\mathrm{loc}}(\mathbb R)$. A measurable
function $u\colon\mathbb R\times(0,T)\to\mathbb R$ is a **locally bounded
distributional weak solution** of $u_t+f(u)_x=0$ with initial datum $u_0$ if
for every bounded interval $I\subset\mathbb R$ and every $T'<T$ it is
essentially bounded on $I\times(0,T')$, and, for every
$\varphi\in C_c^\infty(\mathbb R\times(-\infty,T))$,
$$ \int_0^T\int_{\mathbb R}\bigl(u\varphi_t+f(u)\varphi_x\bigr)\,dx\,dt +\int_{\mathbb R}u_0(x)\varphi(x,0)\,dx=0. $$
The integrals are local: if a test is supported in $I\times[-S,T']$ with $I$
bounded and $T'<T$, the local essential bound makes $u$ bounded on
$I\times(0,T']$, and continuity of $f$ makes $f(u)$ bounded on that bounded
range. The initial integral is finite because $u_0$ is locally integrable and
$\varphi(\cdot,0)$ is compactly supported. This is the local
integrability version of the weak identity in
[[def-distributional-weak-solution-of-a-scalar-conservation-law]], whose
published formulation assumes a global $L^\infty$ bound. This definition adds
no entropy inequality or strong local $L^1$ trace requirement.
