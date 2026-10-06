---
id: ex-weak-and-classical-maximum-principles-agree-for-smooth-solutions
kind: example
title: "The weak and the classical maximum principles agree on a smooth subsolution"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, thm-weak-maximum-principle-for-coercive-divergence-form-equations, thm-weak-maximum-principle-for-the-laplacian, def-subharmonic-and-superharmonic-functions-in-rn, lem-classical-solutions-satisfy-the-weak-formulation, thm-sobolev-gauss-green-formula-on-c-one-domains, thm-kernel-of-the-trace-is-w-one-p-zero, def-uniformly-elliptic-divergence-form-operator, def-bounded-c-k-domain-and-boundary-charts, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (author manuscript, version 11 February 2025; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 5, Section 8 (Theorems 5.33-5.34), printed pp. 139-144; Chapter 10, Section 1 (Theorem 10.1, Lemma 10.2), printed pp. 223-232 (read in full)"
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019; complete 185-page lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter 2, Sections II.1-II.2, printed pp. 40-49, cross-checked against Chapter 1, Section I.2.5 and Corollary I.2.7 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 13, printed pp. 147-158 (read in full)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

**Example.** On the unit disc $\Omega=B_1(0)\subset\mathbb R^2$ consider $L_0=-\Delta$ (so $a^{ij}=\delta^{ij}$ and $b=c=0$ in [[def-uniformly-elliptic-divergence-form-operator]]) and
$$u(x)=|x|^2-1 .$$
Then $\Delta u=4\ge0$, so $u$ is subharmonic in the classical sense ([[def-subharmonic-and-superharmonic-functions-in-rn]]), and $u=0$ on $\partial\Omega$ while $u\le0$ in $\Omega$. The classical weak maximum principle for the Laplacian ([[thm-weak-maximum-principle-for-the-laplacian]]) gives $\sup_{\Omega}u=\sup_{\partial\Omega}u=0$, and the weak maximum principle [[thm-weak-maximum-principle-for-coercive-divergence-form-equations]] gives the same conclusion, because $u$ is also a weak subsolution of $L_0u=0$ in the sense of [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]] with $\sup_{\partial\Omega}u^+=0$.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the unit disc $\Omega=B_1(0)\subset\mathbb R^2$; the coefficients $a^{ij}=\delta^{ij}$, $b=c=0$; and the function $u(x)=|x|^2-1$.

[F1] Classical differentiation gives $D_iu=2x_i$ and $\Delta u=4$ on $\Omega$, so $\Delta u\ge0$: $u$ is subharmonic in the sense of [[def-subharmonic-and-superharmonic-functions-in-rn]], and $u\in C^2(\overline\Omega)\cap H^1_0(\Omega)$ because $u\le0$ on $\Omega$ with equality exactly on $\partial\Omega$ and $u$ is a polynomial ([[def-bounded-c-k-domain-and-boundary-charts]], [[thm-kernel-of-the-trace-is-w-one-p-zero]] for the zero-trace identification).

[F2] Classical weak maximum principle for the Laplacian: for a bounded nonempty open $\Omega$ and $u\in C^2(\Omega)\cap C(\overline\Omega)$ with $\Delta u\ge0$, $\max_{\overline\Omega}u=\max_{\partial\Omega}u$ ([[thm-weak-maximum-principle-for-the-laplacian]]).

[F3] Classical-to-weak consistency: if $u\in C^2(\overline\Omega)\cap H^1_0(\Omega)$ and $Lu=f$ with $f\in C(\overline\Omega)$, then $a(u,v)=\int_\Omega f\bar v$ for every $v\in H^1_0(\Omega)$, for the sesquilinear form $a$ of [[def-uniformly-elliptic-divergence-form-operator]] ([[lem-classical-solutions-satisfy-the-weak-formulation]]).

[F4] Alternative direct integration by parts: for $v\in H^1_0(\Omega)$ and $u\in C^2(\overline\Omega)$, the Sobolev Gauss-Green formula gives $\int_\Omega\nabla u\cdot\nabla v\,dx=-\int_\Omega v\,\Delta u\,dx$, the boundary term vanishing because $Tv=0$ ([[thm-sobolev-gauss-green-formula-on-c-one-domains]], [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]).

[F5] Weak maximum principle for coercive divergence-form equations: under its hypotheses, a weak subsolution $u$ of $L_0u=0$ on a bounded $C^1$ domain satisfies $\operatorname{ess\,sup}_\Omega u\le\sup_{\partial\Omega}u^+$ ([[thm-weak-maximum-principle-for-coercive-divergence-form-equations]]).

## Verification

1.1 The classical side. By [F1], $u\in C^2(\Omega)\cap C(\overline\Omega)$ with $\Delta u=4\ge0$ and $u=0$ on $\partial\Omega$, $u\le0$ in $\Omega$; the classical weak maximum principle [F2] therefore gives $\max_{\overline\Omega}u=\max_{\partial\Omega}u=0$, and the values $u(re_1)=r^2-1\uparrow0$ as $r\uparrow1$ give $\sup_\Omega u=\operatorname{ess\,sup}_\Omega u=0$ by continuity. [F1, F2]

2.1 $u$ is a weak subsolution. Since $L_0u=-\Delta u=-4$, [F3] (or, equivalently, the direct integration by parts of [F4]) gives $a_0(u,v)=\int_\Omega(-4)v\,dx=-4\int_\Omega v\,dx\le0$ for every nonnegative $v\in H^1_0(\Omega)$, where $a_0(w,v)=\int_\Omega\nabla w\cdot\nabla v\,dx$; moreover $u\in H^1_0(\Omega)$ with $u\le0$, so $(u-0)^+=0\in H^1_0(\Omega)$ and $\sup_{\partial\Omega}u^+=0$ in the boundary-order convention of [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]. Thus $u$ is a weak subsolution of $L_0u=0$ with zero positive boundary supremum. [step 1.1, F1, F3, F4]

3.1 Agreement of the two principles. Applying [F5] to the weak subsolution of step 2.1 gives $\operatorname{ess\,sup}_\Omega u\le\sup_{\partial\Omega}u^+=0$, which agrees with the value $0$ computed in step 1.1; the approaching boundary values and continuity in that step supply the reverse inequality, and the example uses only the explicit polynomial, the two maximum principles and the classical-to-weak consistency. [step 1.1, step 2.1, F2, F5] ∎ 