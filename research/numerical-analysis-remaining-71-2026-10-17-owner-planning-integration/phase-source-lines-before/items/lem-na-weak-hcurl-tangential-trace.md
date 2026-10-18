---
id: lem-na-weak-hcurl-tangential-trace
kind: lemma
title: Weak tangential trace on a Lipschitz polyhedron
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-na-hcurl-space, def-na-zero-tangential-hcurl, def-matching-affine-simplicial-meshes, def-oriented-simplicial-cell-chains, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, lem-affine-simplex-gauss-green-formula, lem-oriented-facet-cancellation-on-matching-meshes, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-compact-support-zero-extension-in-wkp, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, lem-weak-leibniz-rule-with-a-smooth-factor, def-countable-choice, cor-cauchy-schwarz-inequality-for-l-two]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
    - title: Ralf Hiptmair and Clemens Pechstein, Regular Decompositions of Vector Fields—Continuous, Discrete, and Structure-Preserving
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf
---

## Statement

Let $\Omega\subset\mathbb R^3$ be a bounded Lipschitz polyhedron admitting a finite matching affine tetrahedral mesh as in [[def-matching-affine-simplicial-meshes]]. Use the product spaces $H^1(\Omega;\mathbb R^3):=(H^1(\Omega;\mathbb R))^3$ and $H_0^1(\Omega;\mathbb R^3):=(H_0^1(\Omega;\mathbb R))^3$, with $\|v\|_{H^1}^2:=\sum_{j=1}^3(\|v_j\|_2^2+\sum_{|\alpha|=1}\|D^\alpha v_j\|_2^2)$, using the scalar conventions of [[def-sobolev-space-wkp-and-its-norm]] and [[def-wkp-zero-as-a-sobolev-closure]]. Put $T(\partial\Omega):=H^1(\Omega;\mathbb R^3)/H_0^1(\Omega;\mathbb R^3)$ with quotient norm $\|[v]\|_T:=\inf_{z\in H_0^1}\|v+z\|_{H^1}$, and write $T(\partial\Omega)'$ for its real norm dual. For $u\in H(\operatorname{curl};\Omega)$, the formula
$$\langle\gamma_\tau u,[v]\rangle:=\int_\Omega(\operatorname{curl}u\cdot v-u\cdot\operatorname{curl}v)\,dx$$
defines a bounded linear functional on $T(\partial\Omega)$, independent of the representative $v$. For smooth $u$ and smooth $v$ it equals $\int_{\partial\Omega}(n\times u)\cdot v\,dS$. Thus $\gamma_\tau u$ is the weak tangential trace in the trace-quotient norm. In particular, every element of [[def-na-zero-tangential-hcurl]] has zero weak tangential trace. No converse characterization of that closure is asserted here.

## Facts & Assumptions

**Given:** Countable Choice; a bounded Lipschitz polyhedron $\Omega$ and $u\in H(\operatorname{curl};\Omega)$ as in [[def-na-hcurl-space]]. The quotient and closure conventions are those of [[def-sobolev-space-wkp-and-its-norm]] and [[def-wkp-zero-as-a-sobolev-closure]].

[A1] Countable Choice is assumed for the Sobolev closure, representative, and smooth-density interfaces used below; no full Axiom of Choice is used. ([[def-countable-choice]])

[F1] The distributional curl is the $L^2$ class characterized by $\int_\Omega\operatorname{curl}u\cdot\varphi=\int_\Omega u\cdot\operatorname{curl}\varphi$ for all compactly supported smooth vector tests. ([[def-na-hcurl-space]])

[F2] $H_0^1(\Omega;\mathbb R^3)$ is the $H^1$-closure of compactly supported smooth vector fields, and the quotient norm is the infimum of lift norms. ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]])

[F3] $H_0(\operatorname{curl};\Omega)$ is the graph-norm closure of compactly supported smooth vector fields. ([[def-na-zero-tangential-hcurl]])

[F4] On every affine tetrahedron, the integral of a smooth divergence equals the sum of its outward face fluxes. ([[lem-affine-simplex-gauss-green-formula]])

[F5] Interior face orientations of a matching tetrahedral mesh cancel in the sum of cell boundaries. ([[lem-oriented-facet-cancellation-on-matching-meshes]])

[F6] A compact subset of an open set admits a smooth cutoff equal to one near that compact set. ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]])

[F7] Under Countable Choice, a compactly supported $H^1$ function in $\Omega$ has an $H^1(\mathbb R^3)$ zero extension, and compactly supported smooth functions are dense in $H^1(\mathbb R^3)$ (the density statement is used with $p=2<\infty$). ([[lem-compact-support-zero-extension-in-wkp]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])

[F8] Under Countable Choice, multiplication by a smooth compactly supported function is continuous on $H^1$ and obeys the weak Leibniz rule. ([[lem-weak-leibniz-rule-with-a-smooth-factor]])

[F9] For scalar real $L^2$ functions, $\int |fg|\le\|f\|_2\|g\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 If $v_1-v_2\in H_0^1(\Omega;\mathbb R^3)$, choose $\varphi_m\in C_c^\infty(\Omega;\mathbb R^3)$ converging to $v_1-v_2$ in $H^1$ by [F2]. The difference of the two proposed pairings is $\int_\Omega(\operatorname{curl}u\cdot(v_1-v_2)-u\cdot\operatorname{curl}(v_1-v_2))$. The $L^2$ convergence of both fields and curls permits passage to the limit from $\varphi_m$, and each approximating pairing is zero by [F1]. Hence the formula is independent of the representative. [A1, F1, F2, given, construct]

1.2 For real vector fields $a,b\in L^2(\Omega;\mathbb R^3)$, componentwise use of [F9] gives $|\int_\Omega a\cdot b|\le\sum_{j=1}^3\|a_j\|_2\|b_j\|_2$; applying [F9] again on the three-point counting measure to the component norms bounds this sum by $\|a\|_2\|b\|_2$. Applying this inequality to $(a,b)=(\operatorname{curl}u,v)$ and $(u,\operatorname{curl}v)$ gives $|\langle\gamma_\tau u,[v]\rangle|\le\|\operatorname{curl}u\|_2\|v\|_2+\|u\|_2\|\operatorname{curl}v\|_2$. A further [F9] application on the two-point counting measure bounds the right side by $\|u\|_{H(\operatorname{curl})}(\|v\|_2^2+\|\operatorname{curl}v\|_2^2)^{1/2}$. The coordinate formula for curl and $(a-b)^2\le2(a^2+b^2)$ give $\|\operatorname{curl}v\|_2^2\le2\sum_{\ell,m\in\{x,y,z\}}\|\partial_\ell v_m\|_2^2$, hence $(\|v\|_2^2+\|\operatorname{curl}v\|_2^2)^{1/2}\le\sqrt2\|v\|_{H^1}$. Taking the infimum over all lifts of the quotient class proves boundedness in the quotient norm. Linearity follows from the integral formula. [F1, F2, F9, step 1.1, algebra]

2.1 For smooth $u,v$, apply [F4] on every tetrahedron to $u\times v$, using $\operatorname{div}(u\times v)=v\cdot\operatorname{curl}u-u\cdot\operatorname{curl}v$. By [F5], interior face fluxes cancel, while the remaining boundary flux is $n\cdot(u\times v)=(n\times u)\cdot v$; hence the formula is the stated boundary integral. [F4, F5, algebra]

2.2 If $u_m\in C_c^\infty$ converges to $u\in H_0(\operatorname{curl})$ in the graph norm, choose a cutoff $\chi$ equal to one near the compact support of $u_m$ by [F6]. For any $v\in H^1$, $\chi v$ has compact support in $\Omega$ and its zero extension lies in $H^1(\mathbb R^3)$ by [F7]. Choose another cutoff $\theta\in C_c^\infty(\Omega)$ equal to one on that support. Approximate the zero extension by $g_j\in C_c^\infty(\mathbb R^3)$ using [F7]; then $q_j:=\theta g_j\in C_c^\infty(\Omega)$ and $q_j\to\chi v$ in $H^1$ by [F8], proving $\chi v\in H_0^1$. For each $j$, [F1] applied to $u_m$ and the compactly supported smooth test $q_j$ gives $\int_\Omega\operatorname{curl}u_m\cdot q_j=\int_\Omega u_m\cdot\operatorname{curl}q_j$. Since $H^1$ convergence implies $L^2$ convergence of both $q_j$ and $\operatorname{curl}q_j$, Cauchy–Schwarz passes this identity to the limit $q_j\to\chi v$. Because $\chi=1$ and $\nabla\chi=0$ on the support of $u_m$, the limiting identity is $\int_\Omega(\operatorname{curl}u_m\cdot v-u_m\cdot\operatorname{curl}v)=0$. Step 1.2 gives $\gamma_\tau u_m\to\gamma_\tau u$ in $T'$, so the limit trace is zero. [A1, F1, F3, F6, F7, F8, step 1.2, algebra] ∎
