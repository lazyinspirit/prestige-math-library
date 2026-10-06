---
id: cor-classical-euler-lagrange-equation-under-regularity
kind: corollary
title: "The classical Euler-Lagrange equation under regularity"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [thm-weak-euler-lagrange-equation-for-integral-functionals, lem-fundamental-lemma-of-the-calculus-of-variations, def-divergence-and-curl-of-a-c1-vector-field, cor-first-green-identity-on-a-bounded-c-one-domain, def-ck-and-multi-index-notation-in-several-variables, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-countable-choice, lem-differentiation-of-an-integral-functional]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 4 Section 4.1, Definition 4.2 and Theorem 4.3, printed pp. 47-48"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, displays (13.11)-(13.13), printed p. 301"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let the hypotheses of [[thm-weak-euler-lagrange-equation-for-integral-functionals]] hold, and assume in addition that $f\in C^2(\overline\Omega\times\mathbb R\times\mathbb R^n)$ and $u\in C^2(\overline\Omega)$ ([[def-ck-and-multi-index-notation-in-several-variables]]). Then $w(x):=f_\xi(x,u(x),Du(x))\in C^1(\Omega;\mathbb R^n)$ and
$$-\operatorname{div} w+f_s(x,u(x),Du(x))=0\qquad(x\in\Omega),$$
the classical Euler-Lagrange equation ([[def-divergence-and-curl-of-a-c1-vector-field]]), with the first variation supplied by [[lem-differentiation-of-an-integral-functional]].

## Facts & Assumptions

**Given:** The hypotheses of [[thm-weak-euler-lagrange-equation-for-integral-functionals]] (a bounded $C^1$ domain $\Omega$, $1<p<\infty$, the Caratheodory integrand $f$ with the stated growth bounds, a local minimiser $u\in W^{1,p}(\Omega)$ of the integral functional among the functions of trace $g$ with $g$ in the trace range), together with $f\in C^2(\overline\Omega\times\mathbb R\times\mathbb R^n)$ and $u\in C^2(\overline\Omega)$. The measure-theoretic background is the Axiom-of-Countable-Choice framework of the published surface and divergence theory ([[def-countable-choice]]).

[F1] For every $\varphi\in W_0^{1,p}(\Omega)$, and in particular for every $\varphi\in C_c^\infty(\Omega)$, the weak Euler-Lagrange identity holds: $\int_\Omega(f_\xi(x,u,Du)\cdot D\varphi+f_s(x,u,Du)\varphi)\,dx=0$ ([[thm-weak-euler-lagrange-equation-for-integral-functionals]]).

[F2] Composites of $C^k$ Euclidean maps are $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]): since $f\in C^2$ gives $f_s,f_\xi\in C^1$ and $x\mapsto(x,u(x),Du(x))$ is $C^1$ for $u\in C^2(\overline\Omega)$, the functions $x\mapsto f_s(x,u(x),Du(x))$ and $w(x):=f_\xi(x,u(x),Du(x))$ are of class $C^1$ on $\Omega$; consequently $\operatorname{div}w$ is continuous and $f_s-\operatorname{div}w$ is continuous on $\Omega$ ([[def-divergence-and-curl-of-a-c1-vector-field]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F3] Divergence theorem: for a bounded $C^1$ domain and $F\in C^1(\overline\Omega;\mathbb R^n)$, $\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot\nu\,d\sigma$ ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]); the first Green identity is the special case $F=v\,Du$ of this identity ([[cor-first-green-identity-on-a-bounded-c-one-domain]]).

[F4] Fundamental lemma: if $g\in L^1_{\mathrm{loc}}(\Omega)$ satisfies $\int_\Omega g\varphi=0$ for every $\varphi\in C_c^\infty(\Omega)$, then $g=0$ almost everywhere; a continuous such $g$ vanishes everywhere ([[lem-fundamental-lemma-of-the-calculus-of-variations]]).

## Proof

**Proof technique:** direct, by testing the weak equation with compactly supported functions and integrating by parts.

1.1 Regularity of the coefficients. By [F2] the vector field $w(x)=f_\xi(x,u(x),Du(x))$ is of class $C^1$ on the open set $\Omega$, and the function $x\mapsto f_s(x,u(x),Du(x))$ is continuous; hence $\operatorname{div}w$ is continuous and so is $f_s-\operatorname{div}w$. [F2, given]

2.1 The weak identity. Let $\varphi\in C_c^\infty(\Omega)$. Then $\varphi\in W_0^{1,p}(\Omega)$, so [F1] gives $\int_\Omega(f_\xi(x,u,Du)\cdot D\varphi+f_s(x,u,Du)\varphi)\,dx=0$, that is $\int_\Omega w\cdot D\varphi\,dx=-\int_\Omega f_s\varphi\,dx$. [F1, step 1.1]

2.2 Integration by parts with compact support. The field $F:=\varphi w$ is $C^1$ and compactly supported in $\Omega$; in particular $F$ extends by zero to a $C^1$ field on $\overline\Omega$, so [F3] may be applied to it. Since $\varphi=0$ on $\partial\Omega$, the boundary term vanishes and $\int_\Omega\operatorname{div}(\varphi w)\,dx=0$. By the product rule $\operatorname{div}(\varphi w)=D\varphi\cdot w+\varphi\operatorname{div}w$, hence $\int_\Omega w\cdot D\varphi\,dx=-\int_\Omega(\operatorname{div}w)\varphi\,dx$. [F3, step 1.1]

3.1 The combined identity. Substituting step 2.2 into step 2.1 gives $\int_\Omega(f_s(x,u,Du)-\operatorname{div}w)\varphi\,dx=0$ for every $\varphi\in C_c^\infty(\Omega)$. [step 2.1, step 2.2]

4.1 The fundamental lemma. The function $g:=f_s(x,u(x),Du(x))-\operatorname{div}w(x)$ is continuous on $\Omega$ by step 1.1 and is orthogonal to every test function by step 3.1; [F4] gives $g=0$ almost everywhere, and continuity upgrades this to $g=0$ everywhere on $\Omega$. Hence $-\operatorname{div}w+f_s(x,u(x),Du(x))=0$ on $\Omega$, the classical Euler-Lagrange equation. [F4, step 3.1] ∎ 
