---
id: cex-weak-maximum-principle-needs-the-zero-order-sign
kind: counterexample
title: "The weak maximum principle needs the zero-order sign condition"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, thm-weak-maximum-principle-for-coercive-divergence-form-equations, lem-classical-solutions-satisfy-the-weak-formulation, def-uniformly-elliptic-divergence-form-operator, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-bounded-c-k-domain-and-boundary-charts, def-hk-and-hk-zero-notation, def-countable-choice, def-axiom-of-choice, thm-kernel-of-the-trace-is-w-one-p-zero]
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
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019; complete 185-page lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter 2, Sections II.1-II.2 (Definitions II.1.1, II.1.3, Theorem II.2.1 and the c-sign theorem), printed pp. 40-49, cross-checked against Chapter 1, Section I.2.5 and Corollary I.2.7 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (author manuscript, version 11 February 2025; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 5, Section 8 (Theorems 5.33-5.34), printed pp. 139-144; Chapter 10, Section 1 (Theorem 10.1, Lemma 10.2 and the boundary convention), printed pp. 223-232 (read in full)"
verification:
  precheck: pass
---

## Statement refuted

**Statement refuted.** Let $L$ be a uniformly elliptic divergence-form operator on a bounded smooth domain with bounded coefficients. Without a sign condition on its zero-order coefficient, every weak subsolution of $Lu=0$ satisfies $\operatorname{ess\,sup}_\Omega u\le\sup_{\partial\Omega}u^+$, where boundary order means $(u-k)^+\in H^1_0(\Omega)$.

**Counterexample.** Assume the Axiom of Choice and Countable Choice. Let $\Omega=B_\pi(0)\subset\mathbb R^3$, $a^{ij}=\delta^{ij}$, $b=0$, $c=-1$, and $L=-\Delta-1$ in the convention of [[def-uniformly-elliptic-divergence-form-operator]]. Set $u(x)=\sin |x|/|x|$ for $x\ne0$ and $u(0)=1$. Then $u\in C^\infty(\overline\Omega)\cap H^1_0(\Omega)$, $Lu=0$, $u>0$ in $\Omega$ and $u=0$ on $\partial\Omega$. Thus $u$ is a weak solution and a weak subsolution, but $\operatorname{ess\,sup}_\Omega u=1>0=\sup_{\partial\Omega}u^+$. The sign condition in [[thm-weak-maximum-principle-for-coercive-divergence-form-equations]] fails: for every nonzero nonnegative $\zeta\in C_c^\infty(\Omega)$, $\int_\Omega c\zeta\,dx<0$.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the ball $\Omega=B_\pi(0)\subset\mathbb R^3$; the coefficients $a^{ij}=\delta^{ij}$, $b^i=0$, $c=-1$; and the function $u(x)=\sin|x|/|x|$ for $x\ne0$, $u(0)=1$.

[F1] The operator $L=-\Delta-1$ is the divergence-form operator with $a^{ij}=\delta^{ij}$, $b=0$, $c=-1$ in the convention of [[def-uniformly-elliptic-divergence-form-operator]]; the ball $B_\pi(0)$ is a bounded $C^\infty$ domain with trace $T$ ([[def-bounded-c-k-domain-and-boundary-charts]], [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]).

[F2] Assume the Axiom of Choice and Countable Choice. Classical-to-weak consistency: if $\Omega$ is a bounded $C^1$ domain, $u\in C^2(\overline\Omega)\cap H^1_0(\Omega)$ and $Lu=f$ with $f\in C(\overline\Omega)$, then $u$ is a weak solution of $Lu=f$ in the sense of [[def-weak-dirichlet-solution-for-a-divergence-form-operator]], i.e. $a(u,v)=\int_\Omega f\overline v\,dx$ for every $v\in H^1_0(\Omega)$ ([[lem-classical-solutions-satisfy-the-weak-formulation]]).

[F3] Assume the Axiom of Choice. $\{w\in H^1(\Omega):Tw=0\}=H^1_0(\Omega)$ ([[thm-kernel-of-the-trace-is-w-one-p-zero]]); consequently a class in $C(\overline\Omega)\cap H^1(\Omega)$ vanishing on $\partial\Omega$ has zero trace and belongs to $H^1_0(\Omega)$.

[F4] The smooth radial function $r\mapsto\sin r/r$ on $(0,\infty)$ has the convergent power series $\sum_{j\ge0}(-1)^jr^{2j}/(2j+1)!$, so $u$ extends to a $C^\infty$ function on $\mathbb R^3$ with $u(0)=1$ ([[def-hk-and-hk-zero-notation]] for the Sobolev class notation).

## Counterexample

1.1 The function $u$ is smooth and solves the equation classically. Because the power series $\sum_{j\ge0}(-1)^jr^{2j}/(2j+1)!$ converges everywhere, $u$ is the $C^\infty$ function $x\mapsto\sum_{j\ge0}(-1)^j|x|^{2j}/(2j+1)!$ on $\mathbb R^3$, with $u(x)>0$ for $|x|<\pi$ and $u=0$ on the sphere $|x|=\pi$. On $r>0$ one computes $u'(r)=\cos r/r-\sin r/r^2$ and $u''(r)=-\sin r/r-2\cos r/r^2+2\sin r/r^3$, hence the radial Laplacian satisfies $u''(r)+2u'(r)/r=-\sin r/r=-u(r)$; by continuity this identity $\Delta u=-u$ holds on all of $\Omega$, and $Lu=-\Delta u-u=0$ there. [given, F4, algebra]

2.1 The boundary conditions and the weak equation. Since $u$ is smooth on the closed ball and $u=0$ on $\partial\Omega$, its trace vanishes; by [F3] $u\in H^1_0(\Omega)$, and with $u\in C^2(\overline\Omega)$ and $f=0\in C(\overline\Omega)$, [F2] exhibits $u$ as a weak solution of $Lu=0$ in the sense of [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]]. [step 1.1, F1, F2, F3]

3.1 The supremum is larger than the boundary supremum. As a weak solution $u$ is also a weak subsolution; since $u(x)>0$ for $|x|<\pi$ and $u(0)=1$, while $u(x)<1$ for every $x\ne0$ (because $\sin r<r$ on $(0,\pi)$), the essential supremum is $\operatorname{ess\,sup}_\Omega u=1$. On the boundary $u=0\ge0$ is nonnegative, so $u^+=u$ and $(u-0)^+=u\in H^1_0(\Omega)$; thus $\sup_{\partial\Omega}u^+=0$ in the boundary-order convention of [F1]. Hence $\operatorname{ess\,sup}_\Omega u=1>0=\sup_{\partial\Omega}u^+$, and the refuted statement fails for this weak subsolution. [step 2.1, F1, algebra]

4.1 The sign condition fails. For every nonnegative $\zeta\in C_c^\infty(\Omega)$ with $\zeta\not\equiv0$, the sign functional is $\int_\Omega(c\zeta+b^iD_i\zeta)dx=-\int_\Omega\zeta\,dx<0$, so the weak sign condition required by [[thm-weak-maximum-principle-for-coercive-divergence-form-equations]] does not hold. This is a direct adaptation of the adverse-zero-order obstruction in [S] Section II.2; the radial eigenfunction and its weak verification are computed here, and the example uses only the explicit function, the trace theorem and the classical-to-weak consistency, so no choice principle beyond the declared Axiom of Choice and Countable Choice is used. [step 1.1, step 3.1, F1] ∎ 
