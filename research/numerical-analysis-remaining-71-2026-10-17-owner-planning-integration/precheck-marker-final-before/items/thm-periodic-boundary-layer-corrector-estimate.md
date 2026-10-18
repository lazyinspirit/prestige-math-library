---
id: thm-periodic-boundary-layer-corrector-estimate
kind: theorem
title: Boundary-cutoff corrector estimate for regular periodic data
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-periodic-scalar-diffusion-data
  - def-periodic-cell-correctors-and-effective-tensor
  - lem-periodic-cell-corrector-wellposedness
  - thm-periodic-effective-tensor-symmetric-elliptic
  - lem-periodic-flux-corrector
  - lem-periodic-averaging-on-cube
  - lem-unit-cube-h01-separability-and-l2-compactness
  - thm-lax-milgram
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.3.1, PDF pp. 15–16: boundary-cutoff first-order corrector and square-root energy rate."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 2 §2.2, printed pp. 40–45: flux-corrector residual and boundary-layer cutoff estimate."
verification:
  precheck: n/a
---
## Statement

Let $Q=(0,1)^d$, $0<\lambda\le a\le\Lambda$ be scalar and periodic, and let $f\in L^2(Q)$. For each $\epsilon>0$, let $u_\epsilon\in H^1_0(Q)$ solve the oscillatory weak equation with coefficient $a(x/\epsilon)$, and suppose $u_0\in C^2(\overline Q)\cap H^1_0(Q)$ solves the homogenized equation with the same datum $f$. For $0<\epsilon\le1/4$ choose a Lipschitz cutoff $\eta_\epsilon$ equal to zero where $\operatorname{dist}(x,\partial Q)\le\epsilon$, equal to one where that distance is at least $2\epsilon$, and with $|\nabla\eta_\epsilon|\le C_d/\epsilon$. Define
$$w_\epsilon(x)=u_0(x)+\epsilon\eta_\epsilon(x)\sum_{j=1}^d\chi_j(x/\epsilon)\partial_ju_0(x).$$
Then $w_\epsilon\in H^1_0(Q)$ and, for a constant independent of $\epsilon$,
$$\|\nabla(u_\epsilon-w_\epsilon)\|_{L^2(Q)}+\|u_\epsilon-u_0\|_{L^2(Q)}\le C\sqrt\epsilon.$$
The constant may depend on $d,\lambda,\Lambda$, the fixed corrector and flux-potential $H^1(Y)$ norms, $\|u_0\|_{C^2(\overline Q)}$, and the cutoff profile. No rate is asserted without this regularity and periodicity.

## Facts & Assumptions

**Given:** The periodic correctors and flux potentials, $u_0\in C^2\cap H^1_0$ solving the constant-coefficient equation, scalar ellipticity, and a cutoff supported away from the boundary.

[F1] [[def-periodic-scalar-diffusion-data]]: $a(x/\epsilon)$ is measurable and $\lambda\le a\le\Lambda$.

[F2] [[def-periodic-cell-correctors-and-effective-tensor]] and [[lem-periodic-cell-corrector-wellposedness]]: $\chi_j\in H^1_\#(Y)$ solves the cell equation and $A^*e_j=\int_Ya(e_j+\nabla\chi_j)$.

[F3] [[thm-periodic-effective-tensor-symmetric-elliptic]]: $A^*$ is symmetric elliptic, and the given $u_0$ satisfies $\int_QA^*\nabla u_0\cdot\nabla v=\int_Qfv$.

[F4] [[lem-periodic-flux-corrector]]: $q_i^j=a(\delta_{ij}+\partial_i\chi_j)-A^*_{ij}=\partial_k\sigma^j_{ik}$ with $\sigma^j_{ik}=-\sigma^j_{ki}$ and $\sigma^j\in H^1_\#(Y)$.

[F5] [[lem-periodic-averaging-on-cube]]: periodic $L^2$ rescalings have uniformly bounded $L^2(Q)$ norm for $0<\epsilon\le1$.

[F6] [[lem-unit-cube-h01-separability-and-l2-compactness]]: $\|v\|_2\le\|\nabla v\|_2$ for $v\in H^1_0(Q)$ and $C_c^\infty(Q)$ is dense in that space.

[F7] [[thm-lax-milgram]]: the oscillatory coercive weak equation has a unique solution in $H^1_0(Q)$.

[A1] [[def-countable-choice]]: periodic Sobolev representatives use the declared Countable Choice convention.

## Proof



1.1 Let $\theta(s)=0$ for $s\le1$, $\theta(s)=1$ for $s\ge2$, and linear on $[1,2]$, and set $\eta_\epsilon(x)=\theta(\operatorname{dist}(x,\partial Q)/\epsilon)$. Distance to a closed set is $1$-Lipschitz, so this cutoff has the required gradient bound. Set $U_\epsilon=u_0+\epsilon\sum_j\chi_j(x/\epsilon)g_j(x)$ with $g_j=\partial_ju_0$. The product is in $H^1(Q)$ because $g_j$ and its first derivatives are bounded and each rescaled $\chi_j$ is locally $H^1$. The cutoff correction in $w_\epsilon$ vanishes in a neighborhood of $\partial Q$, while $u_0\in H^1_0(Q)$; hence $w_\epsilon\in H^1_0(Q)$. Existence and uniqueness of $u_\epsilon$ follow from [F7]. Differentiating the uncut expression in weak derivatives gives $a(x/\epsilon)\nabla U_\epsilon=A^*\nabla u_0+\sum_jq^j(x/\epsilon)g_j+\epsilon a(x/\epsilon)\sum_j\chi_j(x/\epsilon)\nabla g_j.$ Subtract the homogenized weak equation for $u_0$. [F7, F1, F2, F3, F4, A1, algebra]

2.1 For $v\in C_c^\infty(Q)$, use $q_i^j(x/\epsilon)=\epsilon\partial_{x_k}\sigma^j_{ik}(x/\epsilon)$ and integrate by parts. Antisymmetry of $\sigma^j_{ik}$ cancels the term containing $\partial_{ki}v$, since the Hessian is symmetric; the remaining term is $\int_Qq_i^j(x/\epsilon)g_j\partial_iv=-\epsilon\int_Q\sigma^j_{ik}(x/\epsilon)(\partial_kg_j)(\partial_iv).$ The identity is valid for the $H^1$ periodic potential by Sobolev integration by parts; approximate it by smooth periodic functions and pass in $L^2$. By [F5] and boundedness of $D^2u_0$, this has magnitude at most $C\epsilon\|\nabla v\|_2$. The last flux term in step 1.1 has the same bound by [F1], [F5], and boundedness of $D^2u_0$. Density in [F6] extends the residual estimate to every $v\in H^1_0(Q)$: $\left|\int_Qa(x/\epsilon)\nabla U_\epsilon\cdot\nabla v-\int_Qfv\right|\le C\epsilon\|\nabla v\|_2.$. [F5, step 1.1, F1, F6, F4, algebra]

2.2 Let $S_{2\epsilon}=\{x\in Q:\operatorname{dist}(x,\partial Q)<2\epsilon\}$. It is covered by at most $C_d\epsilon^{1-d}$ cubes of the lattice $\epsilon(k+Y)$: along each of the $2d$ faces there are at most a fixed number of normal layers and at most $C_d\epsilon^{-(d-1)}$ tangential cells. Each cell contributes at most $\epsilon^d\|g\|_{L^2(Y)}^2$ to $\int|g(x/\epsilon)|^2$. Thus $\|g(\cdot/\epsilon)\|_{L^2(S_{2\epsilon})}\le C_d\sqrt\epsilon\|g\|_{L^2(Y)}$ for every periodic $g\in L^2(Y)$. Applying this to $\chi_j$ and $\nabla\chi_j$, and differentiating $w_\epsilon-U_\epsilon=\epsilon(\eta_\epsilon-1)\sum_j\chi_j(x/\epsilon)g_j$, gives $\|\nabla(w_\epsilon-U_\epsilon)\|_2\le C\sqrt\epsilon$: the three product-rule terms are bounded respectively by $C\|\nabla\chi_j(\cdot/\epsilon)\|_{L^2(S)}$, $C\epsilon\|\chi_j(\cdot/\epsilon)\|_{L^2(S)}$, and $C\epsilon\|\nabla\eta_\epsilon\|_\infty\|\chi_j(\cdot/\epsilon)\|_{L^2(S)}$. [F2, step 1.1, algebra]

3.1 The residual for $w_\epsilon$ is the residual for $U_\epsilon$ plus $\int_Qa(x/\epsilon)\nabla(w_\epsilon-U_\epsilon)\cdot\nabla v$. By [F1], steps 2.1 and 2.2, its magnitude is at most $C\sqrt\epsilon\|\nabla v\|_2$. Put $e_\epsilon=u_\epsilon-w_\epsilon\in H^1_0(Q)$ and test the difference equation with $e_\epsilon$. Coercivity gives $\lambda\|\nabla e_\epsilon\|_2^2\le C\sqrt\epsilon\|\nabla e_\epsilon\|_2,$ so $\|\nabla e_\epsilon\|_2\le C\sqrt\epsilon$ (trivial if it vanishes). Finally [F6] gives $\|e_\epsilon\|_2\le C\sqrt\epsilon$, while $w_\epsilon-u_0=\epsilon\eta_\epsilon\sum_j\chi_j(x/\epsilon)g_j$ has $L^2$ norm at most $C\epsilon$ by [F5]. The triangle inequality proves both claimed bounds. [F1, step 2.1, step 2.2, F6, F5, algebra] ∎
