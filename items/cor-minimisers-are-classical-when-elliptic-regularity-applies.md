---
id: cor-minimisers-are-classical-when-elliptic-regularity-applies
kind: corollary
title: "Minimisers are classical when elliptic regularity applies"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [thm-dirichlet-principle-for-poisson-equation, cor-smooth-weak-dirichlet-solutions-are-classical, thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian, def-weak-dirichlet-solution-for-a-divergence-form-operator, thm-weak-euler-lagrange-equation-for-integral-functionals, thm-kernel-of-the-trace-is-w-one-p-zero, lem-sobolev-trace-agrees-with-continuous-boundary-values, def-wkp-zero-as-a-sobolev-closure, thm-holder-inequality-for-integrals, def-axiom-of-choice, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, interior and boundary elliptic regularity for weak solutions, printed pp. 240-246"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Omega\subseteq\mathbb R^n$, $n\ge2$, be a bounded domain, let $f$ and $g$ be given and let $u_0\in K_g$ be the minimiser of the Dirichlet energy of [[thm-dirichlet-principle-for-poisson-equation]]. Then:
(i) if $\Omega$ is a bounded $C^\infty$ domain, $f$ extends to a $C^\infty$ function on a neighbourhood of $\overline\Omega$, and there is $G\in C^\infty(U)$ on a neighbourhood $U$ of $\overline\Omega$ with $G|_{\partial\Omega}=g$, then $u_0$ agrees almost everywhere with a function $\widetilde u\in C^\infty(\overline\Omega)$ satisfying $-\Delta\widetilde u=f$ pointwise in $\Omega$ and $\widetilde u=g$ on $\partial\Omega$ ([[cor-smooth-weak-dirichlet-solutions-are-classical]]);
(ii) if $0<\alpha<1$, $\Omega$ is a bounded $C^{2,\alpha}$ domain, $f\in C^{0,\alpha}(\overline\Omega)$ and $g\in C^{2,\alpha}(\overline\Omega)$, then $u_0\in C^{2,\alpha}(\overline\Omega)$, $-\Delta u_0=f$ pointwise and $u_0=g$ on $\partial\Omega$ ([[thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian]]).
Variational existence alone gives only $u_0\in H^1(\Omega)$; the smoothness asserted here is a consequence of elliptic regularity and fails without the corresponding hypotheses on the domain, coefficients and data.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; a bounded domain $\Omega\subseteq\mathbb R^n$, $n\ge2$; data $f$ and $g$; and the minimiser $u_0\in K_g$ of the Dirichlet energy of [[thm-dirichlet-principle-for-poisson-equation]]. In case (i), $\Omega$ is a bounded $C^\infty$ domain, $f$ extends smoothly to a neighbourhood of $\overline\Omega$, and $G\in C^\infty(U)$ on a neighbourhood $U$ of $\overline\Omega$ satisfies $G|_{\partial\Omega}=g$; in case (ii) $0<\alpha<1$, $\Omega$ is a bounded $C^{2,\alpha}$ domain, $f\in C^{0,\alpha}(\overline\Omega)$ and $g\in C^{2,\alpha}(\overline\Omega)$.

[F1] The minimiser is the unique weak solution of $-\Delta u=f$ with trace $g$ in the sense of [[def-weak-dirichlet-solution-for-a-divergence-form-operator]] ([[thm-dirichlet-principle-for-poisson-equation]], [[thm-weak-euler-lagrange-equation-for-integral-functionals]]).

[F2] The trace of a smooth function is its boundary restriction, the kernel of the trace on a bounded $C^1$ domain is $H^1_0$, and $H^1_0$ is the closure of $C_c^\infty$ ([[lem-sobolev-trace-agrees-with-continuous-boundary-values]], [[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F3] For $G\in C^\infty(U)$ and every $\varphi\in C_c^\infty(\Omega)$, classical integration by parts gives $\int_\Omega DG\cdot D\overline\varphi\,dx=-\int_\Omega(\Delta G)\overline\varphi\,dx$. Both functionals extend continuously to $H^1_0(\Omega)$ because $DG\in L^2$ and $\Delta G\in L^2$ on the bounded domain ([[thm-holder-inequality-for-integrals]]).

[F4] Smooth zero-boundary elliptic regularity: on a bounded $C^\infty$ domain, a zero-trace weak solution with smooth coefficients and forcing agrees almost everywhere with a $C^\infty(\overline\Omega)$ solution, satisfies the equation pointwise, and vanishes on the boundary ([[cor-smooth-weak-dirichlet-solutions-are-classical]]).

[F5] Schauder regularity: if $0<\alpha<1$, $\Omega$ is a bounded $C^{2,\alpha}$ domain and the data are Holder, then the unique weak Dirichlet solution of $-\Delta u=f$ lies in $C^{2,\alpha}(\overline\Omega)$, solves the equation pointwise and attains $g$ classically on $\partial\Omega$ ([[thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian]]).



## Proof

**Proof technique:** subtract a smooth boundary lift in the smooth case, then apply zero-boundary regularity; use the Schauder supplier directly in case (ii).

1.1 The variational starting point. By [F1] the minimiser $u_0$ is the unique weak solution of $-\Delta u=f$ with trace $g$; the variational analysis alone gives only $u_0\in H^1(\Omega)$, and no higher regularity is asserted by it. [F1, given]

1.2 Case (i): lift and zero trace. Let $G$ be the smooth extension in the hypothesis and set $v:=u_0-G$. By [F1], $Tu_0=g$; by [F2], $TG=G|_{\partial\Omega}=g$, so $Tv=0$ and the trace-kernel theorem gives $v\in H^1_0(\Omega)$. For every $\varphi\in C_c^\infty(\Omega)$, [F1] and [F3] give $$\int_\Omega Dv\cdot D\overline\varphi\,dx=\int_\Omega(f+\Delta G)\overline\varphi\,dx.$$ Both sides are continuous in the $H^1$ norm; density of $C_c^\infty(\Omega)$ in $H^1_0(\Omega)$ extends the identity to all $H^1_0$ tests. Thus $v$ is the zero-trace weak solution with smooth forcing $f+\Delta G$. [F1, F2, F3]

2.1 Apply smooth regularity and restore the lift. The coefficients of $-\Delta$ are smooth, and $f+\Delta G$ extends smoothly to a neighbourhood of $\overline\Omega$. Supplier [F4] applies to $v$, giving a smooth representative $\widetilde v\in C^\infty(\overline\Omega)$ with $-\Delta\widetilde v=f+\Delta G$ and $\widetilde v=0$ on $\partial\Omega$. Then $\widetilde u:=\widetilde v+G$ represents $u_0$, satisfies $-\Delta\widetilde u=f$ pointwise and has boundary values $g$. [F4, step 1.2]

2.2 Case (ii). Under the Holder hypotheses of case (ii), [F5] applies to the same weak solution and yields $u_0\in C^{2,\alpha}(\overline\Omega)$ with $-\Delta u_0=f$ pointwise and $u_0=g$ on $\partial\Omega$. [F1, F5, step 1.1]

3.1 The warning. Both conclusions are consequences of elliptic regularity under the stated hypotheses on the domain, the coefficients and the data; without them variational existence alone gives only $u_0\in H^1(\Omega)$, as the companion counterexamples on weak solutions without higher regularity record. [step 1.1, step 2.1, step 2.2] ∎
