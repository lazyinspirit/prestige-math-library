---
id: thm-natural-boundary-condition-for-free-boundary-variations
kind: theorem
title: "The natural boundary condition for free boundary variations"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [lem-differentiation-of-an-integral-functional, thm-first-variation-vanishes-at-an-interior-minimiser, cor-classical-euler-lagrange-equation-under-regularity, lem-boundary-fundamental-lemma-of-the-calculus-of-variations, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, cor-first-green-identity-on-a-bounded-c-one-domain, thm-weak-euler-lagrange-equation-for-integral-functionals, def-bounded-c-one-domain-boundary-charts-and-outward-normal, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-sobolev-space-wkp-and-its-norm, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 4 Section 4.2, Theorem 4.5 and its proof, printed pp. 49-50"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 1 Sections 2.3-2.4, Neumann and mixed boundary conditions, printed pp. 8-10"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let the hypotheses of [[thm-weak-euler-lagrange-equation-for-integral-functionals]] hold, but with no prescribed trace: $u\in W^{1,p}(\Omega)$ is a local minimiser of $I$ on the whole of $W^{1,p}(\Omega)$. Assume in addition that $f\in C^2(\overline\Omega\times\mathbb R\times\mathbb R^n)$ and $u\in C^2(\overline\Omega)$, and let $\nu$ be the outward unit normal ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]). Then
$$-\operatorname{div}\big(f_\xi(x,u,Du)\big)+f_s(x,u,Du)=0\quad\text{in }\Omega,\qquad f_\xi(x,u(x),Du(x))\cdot\nu(x)=0\quad\text{on }\partial\Omega .$$
The second identity is the **natural (Neumann-type) boundary condition** attached to free boundary variations; no such condition appears when the trace is fixed.

## Facts & Assumptions

**Given:** A bounded $C^1$ domain $\Omega$, $1<p<\infty$, an integrand $f$ and functional $I$ as in the hypotheses of [[thm-weak-euler-lagrange-equation-for-integral-functionals]], and a local minimiser $u\in W^{1,p}(\Omega)$ of $I$ on the whole of $W^{1,p}(\Omega)$ with no prescribed trace. In addition $f\in C^2(\overline\Omega\times\mathbb R\times\mathbb R^n)$ and $u\in C^2(\overline\Omega)$. The boundary theory and the separation used below are set up under the Axiom of Choice ([[def-axiom-of-choice]]), and $\nu$ is the outward unit normal ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]).

[F1] The classical Euler-Lagrange equation holds in the interior: with $w(x):=f_\xi(x,u(x),Du(x))$ one has $w\in C^1(\Omega)$, and $-\operatorname{div}w+f_s(x,u(x),Du(x))=0$ on $\Omega$ ([[cor-classical-euler-lagrange-equation-under-regularity]]).

[F2] First variation vanishes: for every $v$ in the Banach space $W^{1,p}(\Omega)$ ([[def-sobolev-space-wkp-and-its-norm]]), including every $\varphi\in C^\infty(\overline\Omega)$, one has $\delta I(u;v)=0$, because $u$ is a local minimiser on the whole space and $I$ is Gateaux differentiable there ([[thm-first-variation-vanishes-at-an-interior-minimiser]], [[lem-differentiation-of-an-integral-functional]]); explicitly $\delta I(u;\varphi)=\int_\Omega(f_\xi(x,u,Du)\cdot D\varphi+f_s(x,u,Du)\varphi)\,dx$.

[F3] Since $f\in C^2$ and $u\in C^2(\overline\Omega)$, the composition $x\mapsto f_\xi(x,u(x),Du(x))$ is of class $C^1$ on $\overline\Omega$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F4] Divergence theorem: for $F\in C^1(\overline\Omega;\mathbb R^n)$, $\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot\nu\,d\sigma$ ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]], [[cor-first-green-identity-on-a-bounded-c-one-domain]]).

[F5] Boundary fundamental lemma: if $h\in C(\overline\Omega;\mathbb R^n)$ satisfies $\int_{\partial\Omega}(h\cdot\nu)\varphi\,d\sigma=0$ for every $\varphi\in C^\infty(\overline\Omega)$, then $h\cdot\nu=0$ on $\partial\Omega$ ([[lem-boundary-fundamental-lemma-of-the-calculus-of-variations]]).

## Proof

**Proof technique:** direct, combining the fixed-trace interior equation with the free boundary variation.

1.1 The interior equation. Since $u$ is a local minimiser of $I$ on the whole of $W^{1,p}(\Omega)$, it is in particular a local minimiser among the functions with the fixed trace $g:=Tu$, which lies in the trace range by definition; the hypotheses of the fixed-trace case hold, so [F1] gives the interior equation $-\operatorname{div}w+f_s(x,u,Du)=0$ on $\Omega$, where $w=f_\xi(x,u,Du)$. By [F3] the field $w$ extends to a $C^1$ field on $\overline\Omega$. [F1, F3, given]

2.1 The free variation. Let $\varphi\in C^\infty(\overline\Omega)$. Then $\varphi\in W^{1,p}(\Omega)$, and by [F2] the first variation vanishes: $\int_\Omega(w\cdot D\varphi+f_s(x,u,Du)\varphi)\,dx=0$. [F2, step 1.1]

3.1 Substituting the interior equation. Replacing $f_s(x,u,Du)$ by $\operatorname{div}w$ in step 2.1, which is legitimate pointwise on $\Omega$ by step 1.1, and using the product rule $\operatorname{div}(\varphi w)=D\varphi\cdot w+\varphi\operatorname{div}w$, gives $\int_\Omega\operatorname{div}(\varphi w)\,dx=0$ for every $\varphi\in C^\infty(\overline\Omega)$. [step 1.1, step 2.1, algebra]

4.1 The boundary term. The field $F:=\varphi w$ lies in $C^1(\overline\Omega;\mathbb R^n)$, so the divergence theorem [F4] applies and $0=\int_\Omega\operatorname{div}(\varphi w)\,dx=\int_{\partial\Omega}\varphi\,(w\cdot\nu)\,d\sigma$ for every $\varphi\in C^\infty(\overline\Omega)$. [F4, step 3.1]

5.1 The natural boundary condition. Step 4.1 says that $h:=w$ satisfies $\int_{\partial\Omega}(h\cdot\nu)\varphi\,d\sigma=0$ for every $\varphi\in C^\infty(\overline\Omega)$; since $w$ is continuous on $\overline\Omega$ by [F3], the boundary fundamental lemma [F5] gives $h\cdot\nu=w\cdot\nu=0$ on $\partial\Omega$. Together with step 1.1 this is the interior equation and the natural boundary condition, and no boundary condition of this kind appears in the fixed-trace case handled by [F1]. [F5, step 4.1] ∎ 