---
id: thm-ip-boundary-determination-of-scalar-conductivity
kind: theorem
title: "Boundary determination of all scalar conductivity jets"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-conductivity-dirichlet-to-neumann-map
  - lem-ip-smooth-manifold-elliptic-nonresonant-regularity
  - lem-ip-boundary-quasimode-jets-and-borel-correction
  - lem-ip-alessandrini-identity
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, Applications of microlocal analysis to inverse problems (2019)"
      url: "https://arxiv.org/pdf/1908.03041"
      locator: "Section 5, Theorem 5.1 and proof, PDF pp. 22-27."
---

## Statement

Assume the Axiom of Choice and Countable Choice.

Let $\Omega\subset\mathbb R^n$, $n\geq2$, be a bounded smooth domain, and let $\gamma_1,\gamma_2\in C^\infty(\overline\Omega,\mathbb R)$ be strictly positive. If their full physical conductivity Dirichlet-to-Neumann maps agree on all boundary data, then every inward boundary-normal derivative agrees:
$$\partial_{x_n}^k\gamma_1|_{\partial\Omega} =\partial_{x_n}^k\gamma_2|_{\partial\Omega} \qquad(k=0,1,2,\ldots),$$
where $x_n=\operatorname{dist}(x,\partial\Omega)$ in a boundary normal collar.

## Statement references

[[def-ip-conductivity-dirichlet-to-neumann-map|Full physical conductivity DN map]]

[[lem-ip-alessandrini-identity|Conductivity Alessandrini identity]]

[[lem-ip-boundary-quasimode-jets-and-borel-correction|Boundary concentrating quasimodes and exact correction]]

## Facts & Assumptions
[A1] [[def-axiom-of-choice]] is inherited from the DN identity and exact correction suppliers [F1]--[F3].

[A2] [[def-countable-choice]] is inherited from the DN identity and exact correction suppliers [F1]--[F3].

**Given:** the smooth bounded domain, two strictly positive smooth conductivities with equal full-data DN maps, and the fixed-atlas trace convention.

[F1] [[def-ip-conductivity-dirichlet-to-neumann-map]]: $\Lambda_\gamma$ is the weak full-boundary map of $\operatorname{div}(\gamma\nabla)$ with physical flux $\gamma\partial_{\nu_{\rm out}}$.

[F2] [[lem-ip-alessandrini-identity]]: for conductivity solutions $u_j$ with boundary values $f_j$, $\langle(\Lambda_{\gamma_1}-\Lambda_{\gamma_2})f_1,f_2\rangle=\int_\Omega(\gamma_1-\gamma_2)\nabla u_1\cdot\overline{\nabla u_2}\,dx$.

[F3] [[lem-ip-boundary-quasimode-jets-and-borel-correction]]: for every boundary point, unit tangential covector, cutoff $\chi=1$ near that point, integer $k\geq0$, and residual order $N>k$, the approximate solutions have residual and exact-correction $H^1$ errors $O(\lambda^{-N})$; their weighted gradient product satisfies $\lambda^k\int \operatorname{dist}(x,\partial\Omega)^kF\nabla v_1\cdot\overline{\nabla v_2}\,dx\to c_k\int_{\partial\Omega}F|\chi|^2\,dS$ with $c_k>0$.

## Proof

**Given:** the data in the statement.

1.1 Fix $x_0\in\partial\Omega$ and a sufficiently small patch. Choose $\chi\in C_c^\infty(\partial\Omega)$ supported in the patch and equal to one near $x_0$, and use [F3] to construct approximate beams for $\gamma_1,\gamma_2$ with the same boundary trace. Let $u_{\lambda,j}$ be their exact conductivity solutions. Equality of the DN maps and [F2] give
$$\int_\Omega(\gamma_1-\gamma_2)\nabla u_{\lambda,1}\cdot\overline{\nabla u_{\lambda,2}}\,dx=0.$$
Replacing each exact solution by its approximate beam changes this integral by $O(\lambda^{-N})$: the coefficient is bounded, the beam $H^1$ norms are uniformly bounded, and each exact correction is $O(\lambda^{-N})$ in $H^1$ by [F3]. [A1, A2, F1, F2, F3, given, algebra]

1.2 Set $k=0$ in [F3] and let $\lambda\to\infty$ in step 1.1. Since $c_0>0$,
$$\int_{\partial\Omega}(\gamma_1-\gamma_2)|\chi|^2\,dS=0.$$
If $\gamma_1-\gamma_2$ were positive or negative at any boundary point, continuity would give a patch on which it has that strict sign; choosing $\chi$ supported in that patch and equal to one near the point would make this integral nonzero. Thus $\gamma_1=\gamma_2$ on $\partial\Omega$. [F3, step 1.1, contradiction]

2.1 Fix an integer $k\geq1$ and suppose inductively that $\partial_{x_n}^j(\gamma_1-\gamma_2)=0$ on a boundary patch for every $j<k$. Taylor's formula with integral remainder in the inward normal coordinate gives
$$\gamma_1(y,x_n)-\gamma_2(y,x_n)=x_n^kF_k(y,x_n),\qquad F_k(y,0)=\frac{\partial_{x_n}^k(\gamma_1-\gamma_2)(y,0)}{k!},$$
for a smooth $F_k$. Apply [F2] to the exact beams from [F3], replace them by their approximate beams, and multiply the resulting integral identity by $\lambda^k$. The replacement error is $O(\lambda^{k-N})$, since the weight $x_n^k$ is bounded and the corrections are $O(\lambda^{-N})$ in $H^1$. Choose $N>k$ and apply the weighted limit in [F3]; then
$$c_k\int_{\partial\Omega}F_k(y,0)|\chi(y)|^2\,dS(y)=0.$$
Since $c_k>0$, the same localized sign argument as in step 1.2 gives $F_k(y,0)=0$ throughout the patch. Therefore the $k$th inward normal derivatives agree there. [A1, A2, F2, F3, step 1.1, step 1.2, algebra]

2.2 Step 1.2 is the base case for the induction. Step 2.1 proves each subsequent order on a patch that may be chosen around any prescribed boundary point. Thus every boundary point has a neighborhood on which the order-$k$ normal derivative difference is zero for every integer $k\geq0$, proving the full boundary-jet assertion. [step 1.2, step 2.1, induction] ∎

