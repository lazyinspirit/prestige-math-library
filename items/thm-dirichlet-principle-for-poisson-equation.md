---
id: thm-dirichlet-principle-for-poisson-equation
kind: theorem
title: "The Dirichlet principle for the Poisson equation"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [def-axiom-of-choice, thm-direct-method-for-convex-integral-functionals, thm-weak-euler-lagrange-equation-for-integral-functionals, cor-strict-convexity-gives-uniqueness-of-a-minimiser, def-convex-and-strictly-convex-functionals-on-a-banach-space, def-proper-coercive-and-weakly-lower-semicontinuous-functional, lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed, def-weak-dirichlet-solution-for-a-divergence-form-operator, thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem, cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting, lem-classical-solutions-satisfy-the-weak-formulation, cor-first-green-identity-on-a-bounded-c-one-domain, thm-poincare-inequality-for-w-one-p-zero, def-sobolev-space-wkp-and-its-norm, thm-lp-trace-operator-on-a-bounded-c-one-domain, lem-differentiation-of-an-integral-functional, thm-kernel-of-the-trace-is-w-one-p-zero, def-wkp-zero-as-a-sobolev-closure, def-fractional-sobolev-space-on-a-compact-c-one-boundary, lem-w-one-two-is-a-hilbert-space, thm-sharp-trace-theorem-for-w-one-p, def-hk-and-hk-zero-notation, thm-holder-inequality-for-integrals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 5.5, printed pp. 130-131; Section 13.2, Example 13.7, printed pp. 299-300"
    - title: "Viktor Grigoryan, Math 246B Partial Differential Equations, UCSB 2011 (complete 31-page course notes)"
      url: "https://web.math.ucsb.edu/~grigoryan/246B/lecs/246B.pdf"
      locator: "Section 4.2, printed pp. 27-28"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations, University of Illinois (complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Section 3.10, printed pp. 79-82 (Lemma 3.30, Propositions 3.31-3.32)"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), the ultrafilter lemma, DC and HB. Let $\Omega\subseteq\mathbb R^n$, $n\ge2$, be a bounded $C^1$ domain, let $f\in L^2(\Omega)$ and let $g\in H^{1/2}(\partial\Omega)=W^{1/2,2}(\partial\Omega)$ lie in the trace range of $T:H^1(\Omega)\to H^{1/2}(\partial\Omega)$ ([[thm-sharp-trace-theorem-for-w-one-p]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]). Put
$$I(u)=\frac12\int_\Omega|Du|^2\,dx-\int_\Omega fu\,dx,\qquad K_g=\{u\in H^1(\Omega):Tu=g\}.$$
Then:
(i) $I$ is strictly convex, coercive and weakly sequentially lower semicontinuous on $K_g$ ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]], [[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]), and attains its infimum at exactly one $u_0\in K_g$ ([[thm-direct-method-for-convex-integral-functionals]], [[cor-strict-convexity-gives-uniqueness-of-a-minimiser]]);
(ii) $u_0$ is the unique weak solution of the Poisson problem $-\Delta u=f$ with trace $g$ in the sense of [[def-weak-dirichlet-solution-for-a-divergence-form-operator]], so that $\int_\Omega Du_0\cdot D\varphi\,dx=\int_\Omega f\varphi\,dx$ for every $\varphi\in H^1_0(\Omega)$ ([[thm-weak-euler-lagrange-equation-for-integral-functionals]], [[thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem]], [[cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting]]);
(iii) the classical one-directional Dirichlet principle holds: if $v\in C^2(\overline\Omega)$ satisfies $-\Delta v=f$ in $\Omega$ and $v|_{\partial\Omega}=g$, then $I(v)\le I(w)$ for every $w\in K_g$ ([[cor-first-green-identity-on-a-bounded-c-one-domain]], [[lem-classical-solutions-satisfy-the-weak-formulation]]).

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the ultrafilter lemma, DC and HB; a bounded $C^1$ domain $\Omega\subseteq\mathbb R^n$, $n\ge2$; $f\in L^2(\Omega)$; $g\in H^{1/2}(\partial\Omega)$ in the trace range of $T:H^1(\Omega)\to H^{1/2}(\partial\Omega)$ with affine class $K_g$; and the energy $I(u)=\tfrac12\int_\Omega|Du|^2dx-\int_\Omega fu\,dx$.

[F0] The Axiom of Choice is explicitly assumed here because the trace, trace-kernel and weak-Poisson suppliers used below state their conclusions under AC ([[def-axiom-of-choice]]).

[F1] The trace operator $T$ is bounded with $Tu=u|_{\partial\Omega}$ for continuous $u$, and $H^{1/2}(\partial\Omega)=W^{1/2,2}(\partial\Omega)$ ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [[thm-sharp-trace-theorem-for-w-one-p]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]).

[F2] $K_g$ is nonempty, convex and weakly closed, and equals $Rg+H^1_0(\Omega)$ for any right inverse $R$ ([[lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed]]); $\ker T=H^1_0(\Omega)$ ([[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F3] The direct method for convex integral functionals: with $p=2$, a Caratheodory integrand convex and lower semicontinuous in $(s,\xi)$ satisfying the upper growth bound with $G\in L^1(\Omega)$ and the coercivity bound holds, the functional attains its infimum on $K_g$; if the integrand satisfies the differentiation hypotheses, every minimiser solves the weak Euler-Lagrange equation, and strict convexity of the integrand in $(s,\xi)$ makes the minimiser unique ([[thm-direct-method-for-convex-integral-functionals]], [[thm-weak-euler-lagrange-equation-for-integral-functionals]], [[cor-strict-convexity-gives-uniqueness-of-a-minimiser]]).

[F4] The weak Dirichlet solution of $-\Delta u=f$ with trace $g$ is a class $u\in H^1(\Omega)$ with $Tu=g$ and $\int_\Omega Du\cdot D\varphi=\int_\Omega f\varphi$ for every $\varphi\in H^1_0(\Omega)$ ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]]); such a solution exists and is unique, and agrees with the lifting construction ([[thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem]], [[cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting]]).

[F5] Poincare's inequality on $H^1_0(\Omega)$ with constant $C_P$ ([[thm-poincare-inequality-for-w-one-p-zero]]); $H^1(\Omega)=W^{1,2}(\Omega)$ carries the Sobolev norm and inner product ([[def-hk-and-hk-zero-notation]], [[def-sobolev-space-wkp-and-its-norm]], [[lem-w-one-two-is-a-hilbert-space]]).

[F6] If $v\in C^2(\overline\Omega)$ satisfies $-\Delta v=f$ almost everywhere, first Green identity with $\varphi\in C_c^\infty(\Omega)$ gives $\int_\Omega Dv\cdot D\varphi=\int_\Omega f\varphi$ because the boundary test vanishes ([[cor-first-green-identity-on-a-bounded-c-one-domain]]). Holder bounds both pairings by a constant times $\|\varphi\|_{H^1}$, so density extends this identity to $H^1_0(\Omega)$ ([[thm-holder-inequality-for-integrals]], [[def-wkp-zero-as-a-sobolev-closure]]). This does not require the classical solution itself to have zero trace; the zero-trace-only supplier [[lem-classical-solutions-satisfy-the-weak-formulation]] is therefore not applied to $v$.

[F7] The basic definitions: convex and strictly convex functionals, proper coercive weakly lower semicontinuous functionals ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]], [[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]).

## Proof

**Proof technique:** direct, by checking the hypotheses of the convex direct method for the Dirichlet integrand.

1.1 The integrand and its bounds. Put $f_0(x,s,\xi):=\tfrac12|\xi|^2-f(x)s$. It is a Caratheodory integrand, jointly convex and continuous in $(s,\xi)$, and the elementary inequality $|f(x)s|\le\tfrac12|f(x)|^2+\tfrac12|s|^2$ gives the upper bound $f_0\le\tfrac12(1+|s|^2+|\xi|^2)+\tfrac12|f(x)|^2$, admissible with $p=2$, $C=\tfrac12$ and $G=\tfrac12|f|^2\in L^1(\Omega)$. [F5, F7, given, algebra]

1.2 The coercivity bound with the smallness condition. Fix $\varepsilon>0$ with $2\varepsilon C_P^2\le\tfrac18$; Cauchy's inequality $|f(x)s|\le\varepsilon|s|^2+\tfrac1{4\varepsilon}|f(x)|^2$ gives $f_0(x,s,\xi)\ge\tfrac12|\xi|^2-\varepsilon|s|^2-\tfrac1{4\varepsilon}|f(x)|^2$, which is the coercivity bound with $\nu=\tfrac12$, $c=\varepsilon$, $q=p=2$ and $h=\tfrac1{4\varepsilon}|f|^2\ge0$, $h\in L^1(\Omega)$; the smallness condition $2^{p-1}cC_P^p=2\varepsilon C_P^2\le\tfrac18=\nu\cdot2^{-p}$ holds by the choice of $\varepsilon$. [F5, given, algebra]

2.1 The direct method applies. By steps 1.1 and 1.2 the integrand satisfies all hypotheses of [F3] with $p=2$; the class $K_g$ is nonempty, convex and weakly closed by [F2]; hence $I$ attains its infimum at some $u_0\in K_g$, is coercive and weakly sequentially lower semicontinuous on $K_g$. [F3, F2, F0, step 1.1, step 1.2]

3.1 Strict convexity of $I$ on $K_g$. The functional is $I=Q-L$ with $Q(u)=\tfrac12\|Du\|_2^2$ and $L(u)=\int fu$. The term $L$ is affine. The quadratic term $Q$ is strictly convex on $K_g$: if $u\ne v$ in $K_g$ then $D(u-v)$ does not vanish almost everywhere, because $u-v\in H^1_0(\Omega)$ by [F2], and Poincare [F5] would force $u-v=0$ if $D(u-v)=0$; consequently $Q(\lambda u+(1-\lambda)v)<\lambda Q(u)+(1-\lambda)Q(v)$ for $0<\lambda<1$ by the parallelogram identity. Hence $I$ is strictly convex on the convex set $K_g$, and the minimiser $u_0$ of step 2.1 is unique by the strict-convexity uniqueness corollary [[cor-strict-convexity-gives-uniqueness-of-a-minimiser]]. [F2, F3, F5, F7, F0, step 2.1, algebra]

3.2 The weak Euler-Lagrange equation. The integrand $f_0$ satisfies the differentiation hypotheses with $p=2$: $f_{0,s}=-f$ and $f_{0,\xi}=\xi$ are continuous in $(s,\xi)$, $|f_0|\le\tfrac12(1+|s|^2+|\xi|^2)+\tfrac12|f|^2$ and $|f_{0,s}|+|f_{0,\xi}|\le(1+|s|+|\xi|)+|f(x)|$ with $|f|\in L^2(\Omega)=L^{p'}(\Omega)$. Hence the conditional clause of [F3] applies to the minimiser $u_0$: $\int_\Omega\big(Du_0\cdot D\varphi-f(x)\varphi\big)dx=0$ for every $\varphi\in H^1_0(\Omega)$, that is $\int_\Omega Du_0\cdot D\varphi=\int_\Omega f\varphi$. [F3, F5, F0, step 2.1]

4.1 Identification with the weak Dirichlet solution. By steps 2.1 and 3.2 the minimiser $u_0\in H^1(\Omega)$ satisfies $Tu_0=g$ and $\int_\Omega Du_0\cdot D\varphi=\int_\Omega f\varphi$ for every $\varphi\in H^1_0(\Omega)$; this is exactly the weak Dirichlet solution of $-\Delta u=f$ with trace $g$ in the sense of [F4], and by the uniqueness statement of [F4] it is the unique such solution. This proves (i) and (ii). [F4, F0, step 2.1, step 3.1, step 3.2]

5.1 The classical one-directional principle. Let $v\in C^2(\overline\Omega)$ satisfy $-\Delta v=f$ in $\Omega$ and $v|_{\partial\Omega}=g$. Then $Tv=g$ by [F1] (the trace restricts continuous functions pointwise), so for every $w\in K_g$ the difference $\eta:=w-v$ has $T\eta=0$, that is $\eta\in H^1_0(\Omega)$ by [F2]. By [F6], applied to the classical solution $v$, one has $\int_\Omega Dv\cdot D\eta=\int_\Omega f\eta$. Expanding the energy, $I(w)-I(v)=\tfrac12\int_\Omega(|Dw|^2-|Dv|^2)dx-\int_\Omega f\eta\,dx=\tfrac12\int_\Omega|D\eta|^2dx+\int_\Omega Dv\cdot D\eta\,dx-\int_\Omega f\eta\,dx=\tfrac12\int_\Omega|D\eta|^2dx\ge0$, with equality if and only if $D\eta=0$ almost everywhere, that is $w=v$ by [F5]. Hence $I(v)\le I(w)$ for every $w\in K_g$, the classical Dirichlet principle. [F1, F2, F5, F6, F0, step 4.1] ∎ 
