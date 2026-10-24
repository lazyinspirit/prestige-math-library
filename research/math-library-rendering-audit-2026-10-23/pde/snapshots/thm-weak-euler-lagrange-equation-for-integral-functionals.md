---
id: thm-weak-euler-lagrange-equation-for-integral-functionals
kind: theorem
title: "The weak Euler-Lagrange equation for integral functionals with fixed trace"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [lem-differentiation-of-an-integral-functional, thm-first-variation-vanishes-at-an-interior-minimiser, thm-kernel-of-the-trace-is-w-one-p-zero, thm-lp-trace-operator-on-a-bounded-c-one-domain, thm-sharp-trace-theorem-for-w-one-p, def-wkp-zero-as-a-sobolev-closure, def-test-function-space-d-of-an-open-set, thm-sobolev-spaces-are-banach-spaces, def-axiom-of-choice, def-fractional-sobolev-space-on-a-compact-c-one-boundary]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 4 Section 4.1, Theorem 4.3, printed pp. 47-48"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 5 Section 2, first variation in weak form, printed pp. 94-95"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, displays (13.10)-(13.13), printed p. 301"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Omega\subseteq\mathbb R^n$, $n\ge2$, be a bounded $C^1$ domain, $1<p<\infty$, let $f$ and $I$ satisfy the hypotheses of [[lem-differentiation-of-an-integral-functional]], and let $g\in W^{1-1/p,p}(\partial\Omega)$ lie in the trace range of $T:W^{1,p}(\Omega)\to W^{1-1/p,p}(\partial\Omega)$ ([[thm-sharp-trace-theorem-for-w-one-p]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]). Let $u\in W^{1,p}(\Omega)$ with $Tu=g$ be a local minimiser of $I$ among the functions with trace $g$: $I(u)\le I(w)$ for all $w\in W^{1,p}(\Omega)$ with $Tw=g$ and $\|w-u\|_{W^{1,p}}$ small. Then
$$\int_\Omega\big(f_\xi(x,u,Du)\cdot D\varphi+f_s(x,u,Du)\,\varphi\big)\,dx=0$$
for every $\varphi\in W^{1,p}_0(\Omega)$ ([[def-wkp-zero-as-a-sobolev-closure]]); equivalently, for every $\varphi\in C_c^\infty(\Omega)$ ([[def-test-function-space-d-of-an-open-set]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega\subseteq\mathbb R^n$, $1<p<\infty$, an integrand $f$ and functional $I(u)=\int_\Omega f(x,u,Du)\,dx$ satisfying the hypotheses of [[lem-differentiation-of-an-integral-functional]], and $g\in W^{1-1/p,p}(\partial\Omega)$ in the trace range of $T$; a local minimiser $u\in W^{1,p}(\Omega)$ of $I$ among the functions of trace $g$. The Sobolev and trace framework is set up under the Axiom of Choice, used through Countable Choice ([[def-axiom-of-choice]]), and $W^{1,p}(\Omega)$ is a Banach space ([[thm-sobolev-spaces-are-banach-spaces]]).

[F1] $T:W^{1,p}(\Omega)\to W^{1-1/p,p}(\partial\Omega)$ is linear and $\ker T=W_0^{1,p}(\Omega)$, the $W^{1,p}$-closure of $C_c^\infty(\Omega)$ ([[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]).

[F2] Affine form of the first-variation theorem: if $F:U\to\mathbb R$ on the open $U\subseteq X$ is Gateaux differentiable at $u$ and $F(u)\le F(w)$ for all $w\in(u+V)\cap U$ with $\|w-u\|$ small, $V\subseteq X$ a linear subspace of the Banach space $X$, then $\delta F(u;v)=0$ for every $v\in V$ ([[thm-first-variation-vanishes-at-an-interior-minimiser]], [[thm-sobolev-spaces-are-banach-spaces]]).

[F3] The differentiation lemma: $I$ is Gateaux differentiable at $u$ with $\delta I(u;v)=\int_\Omega(f_s(x,u,Du)v+f_\xi(x,u,Du)\cdot Dv)\,dx$ for every $v\in W^{1,p}(\Omega)$ ([[lem-differentiation-of-an-integral-functional]]).

[F4] $C_c^\infty(\Omega)\subseteq W_0^{1,p}(\Omega)$ because $W_0^{1,p}(\Omega)$ is defined as the closure of $C_c^\infty(\Omega)$ in $W^{1,p}(\Omega)$ ([[def-wkp-zero-as-a-sobolev-closure]], [[def-test-function-space-d-of-an-open-set]]).

## Proof

**Proof technique:** direct, by testing the affine first-variation theorem against the kernel of the trace.

1.1 Variations preserving the trace. Fix $\varphi\in W_0^{1,p}(\Omega)$. Then $T\varphi=0$ by [F1], and linearity of $T$ gives $T(u+\varepsilon\varphi)=Tu+\varepsilon T\varphi=g$ for every $\varepsilon\in\mathbb R$; thus every point of the affine line $u+\mathbb R\varphi$ has trace $g$. [F1, given]

2.1 Local minimality along the line. For $\varepsilon$ with $|\varepsilon|$ small, the point $u+\varepsilon\varphi$ lies in the local admissible neighbourhood of $u$ among the functions of trace $g$ and has norm distance $|\varepsilon|\|\varphi\|_{W^{1,p}}$ from $u$; hence $I(u)\le I(u+\varepsilon\varphi)$. Therefore $u$ is a local minimiser of $I$ on the affine set $(u+W_0^{1,p}(\Omega))\cap W^{1,p}(\Omega)$. [given, step 1.1]

3.1 The first variation vanishes. By [F2] applied with $X=W^{1,p}(\Omega)$, $V=W_0^{1,p}(\Omega)$ and the local minimality of step 2.1, $\delta I(u;\varphi)=0$. [F2, step 2.1]

4.1 Computing the derivative. By [F3] the Gateaux derivative is $\delta I(u;\varphi)=\int_\Omega(f_s(x,u,Du)\varphi+f_\xi(x,u,Du)\cdot D\varphi)\,dx$; together with step 3.1 this gives the displayed identity for the arbitrary element $\varphi\in W_0^{1,p}(\Omega)$. Finally, if $\varphi\in C_c^\infty(\Omega)$ then $\varphi\in W_0^{1,p}(\Omega)$ by [F4], so the identity holds in particular for every such test function. Conversely, the derivative in [F3] is bounded on $W^{1,p}$, and every $\varphi\in W_0^{1,p}$ is a norm limit of compactly supported smooth functions by [F1]; continuity passes the identity from those tests to $\varphi$. [F1, F3, F4, step 3.1] ∎ 