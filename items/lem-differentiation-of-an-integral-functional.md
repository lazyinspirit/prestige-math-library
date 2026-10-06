---
id: lem-differentiation-of-an-integral-functional
kind: lemma
title: "Differentiation of an integral functional under growth domination"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-gateaux-and-frechet-derivatives-of-a-functional, lem-caratheodory-composition-is-measurable, def-sobolev-space-wkp-and-its-norm, def-bounded-c-k-domain-and-boundary-charts, thm-dominated-convergence, thm-holder-inequality-for-integrals, cor-mean-value-theorem, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, def-countable-choice, thm-sobolev-spaces-are-banach-spaces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.1, Example 13.3, printed pp. 295-296"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 5 Section 2, Proposition 5.1 and the first variation in weak form, printed pp. 93-95"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $\Omega\subseteq\mathbb R^n$ be a bounded $C^1$ domain ([[def-bounded-c-k-domain-and-boundary-charts]]), $1<p<\infty$, and let $f:\Omega\times\mathbb R\times\mathbb R^n\to\mathbb R$ be a Caratheodory integrand ([[lem-caratheodory-composition-is-measurable]]) whose classical partial derivatives $f_s$, $f_\xi$ exist and are continuous in $(s,\xi)$ for almost every $x$, with a constant $C\ge0$ and functions $G\in L^1(\Omega)$, $g\in L^{p'}(\Omega)$, where $p'=p/(p-1)$, such that for almost every $x$ and all $(s,\xi)$
$$|f(x,s,\xi)|\le C(1+|s|^p+|\xi|^p)+G(x),\quad |f_s(x,s,\xi)|+|f_\xi(x,s,\xi)|\le C(1+|s|^{p-1}+|\xi|^{p-1})+g(x).$$
Then $I(u):=\int_\Omega f(x,u(x),Du(x))\,dx$ is well defined and finite on $W^{1,p}(\Omega)$ ([[def-sobolev-space-wkp-and-its-norm]]), and for all $u,v\in W^{1,p}(\Omega)$
$$\delta I(u;v)=\int_\Omega\big(f_s(x,u,Du)\,v+f_\xi(x,u,Du)\cdot Dv\big)\,dx .$$
In particular $I$ is Gateaux differentiable at every $u$, with bounded Gateaux derivative $\delta I(u)\in W^{1,p}(\Omega)^*$ ([[def-gateaux-and-frechet-derivatives-of-a-functional]]).

## Facts & Assumptions

**Given:** Countable Choice; a bounded $C^1$ domain $\Omega\subseteq\mathbb R^n$, $1<p<\infty$ with Holder conjugate $p'=p/(p-1)$, and a Caratheodory integrand $f:\Omega\times\mathbb R\times\mathbb R^n\to\mathbb R$ whose classical partials $f_s,f_\xi$ exist and are continuous in $(s,\xi)$ for almost every $x$, with $C\ge0$, $G\in L^1(\Omega)$, $g\in L^{p'}(\Omega)$ and, for almost every $x$ and all $(s,\xi)$,
$$|f(x,s,\xi)|\le C(1+|s|^p+|\xi|^p)+G(x),\qquad |f_s(x,s,\xi)|+|f_\xi(x,s,\xi)|\le C(1+|s|^{p-1}+|\xi|^{p-1})+g(x).$$

[F1] For a Caratheodory integrand and measurable $u,w$, the composition $x\mapsto f(x,u(x),w(x))$ is measurable ([[lem-caratheodory-composition-is-measurable]]).

[F2] The proof of [[thm-sobolev-spaces-are-banach-spaces]] uses only Countable Choice after AC supplies it, so the Countable Choice assumed here supplies that same completeness argument and makes $W^{1,p}$ a Banach space. On a bounded domain, the class $u\in W^{1,p}(\Omega)$ has $u,Du\in L^p(\Omega)$ and finite norm $\|u\|_{W^{1,p}(\Omega)}$, with $\|u\|_p\le\|u\|_{W^{1,p}}$ and $\||Du|\|_p\le n\|u\|_{W^{1,p}}$, since $|Du|\le\sum_i|D_i u|$; the constant $1$ lies in $L^1(\Omega)\cap L^{p'}(\Omega)$, $|G|\in L^1(\Omega)$, and $|u|^{p-1},|Du|^{p-1}$ (and the analogous monomials in $v,Dv$) lie in $L^{p'}(\Omega)$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-bounded-c-k-domain-and-boundary-charts]]).

[F3] Holder's inequality: $\int|hw|\le\|h\|_{p'}\|w\|_p$ for $h\in L^{p'}(\Omega)$ and $w\in L^p(\Omega)$ ([[thm-holder-inequality-for-integrals]]).

[F4] Dominated convergence: if measurable $q_k\to q$ almost everywhere and $|q_k|\le H$ almost everywhere for a single $H\in L^1(\Omega)$, then $\int q_k\to\int q$ ([[thm-dominated-convergence]]).

[F5] If the classical partial derivatives of $(s,\xi)\mapsto f(x,s,\xi)$ are continuous at a point, then that map is totally differentiable there ([[thm-continuous-partial-derivatives-imply-total-differentiability]]); the chain rule identifies the total derivative of $t\mapsto f(x,s+tv,\xi+tw)$ as $f_s(x,s+tv,\xi+tw)v+f_\xi(x,s+tv,\xi+tw)\cdot w$ ([[thm-chain-rule-for-total-derivatives]]); the one-variable mean value theorem applies to $t\mapsto f(x,s+tv,\xi+tw)$ on a compact interval ([[cor-mean-value-theorem]]).

[F6] $I$ is Gateaux differentiable at $u$ with Gâteaux derivative $\delta I(u)\in W^{1,p}(\Omega)^*$ precisely when the limits $\delta I(u;v)$ exist for all $v$ and $v\mapsto\delta I(u;v)$ is a bounded linear functional ([[def-gateaux-and-frechet-derivatives-of-a-functional]]).

## Proof

**Proof technique:** direct, by difference quotients, the mean value theorem, a uniform integrable dominator and dominated convergence.

1.1 Well-definedness and finiteness. For $u\in W^{1,p}(\Omega)$ the map $x\mapsto f(x,u(x),Du(x))$ is measurable by [F1], and the first bound of the hypothesis, together with $G\le|G|$, gives $|f(x,u(x),Du(x))|\le C(1+|u(x)|^p+|Du(x)|^p)+|G(x)|$, whose integral is finite by [F2]. Hence $I(u)=\int_\Omega f(x,u(x),Du(x))\,dx$ is a well-defined real number for every $u\in W^{1,p}(\Omega)$. [F1, F2, given]

1.2 Difference quotients and their pointwise limit. Fix $u,v\in W^{1,p}(\Omega)$ and put $q_\varepsilon(x):=\varepsilon^{-1}\big(f(x,u(x)+\varepsilon v(x),Du(x)+\varepsilon Dv(x))-f(x,u(x),Du(x))\big)$ for $\varepsilon\ne0$. For almost every $x$ the map $(s,\xi)\mapsto f(x,s,\xi)$ is $C^1$, so [F5] applies to $g_x(t):=f(x,u(x)+tv(x),Du(x)+tDv(x))$: by the mean value theorem there is $\theta=\theta(x,\varepsilon)\in(0,1)$ with $q_\varepsilon(x)=g_x'(\theta\varepsilon)$, and $g_x'(t)=f_s(x,u+tv,Du+tDv)v(x)+f_\xi(x,u+tv,Du+tDv)\cdot Dv(x)$. As $\varepsilon\to0$ the arguments $(u(x)+\theta\varepsilon v(x),Du(x)+\theta\varepsilon Dv(x))$ tend to $(u(x),Du(x))$, so continuity of the partials gives the pointwise limit $q_\varepsilon(x)\to f_s(x,u(x),Du(x))v(x)+f_\xi(x,u(x),Du(x))\cdot Dv(x)$ for almost every $x$. [F5, given]

2.1 A single integrable dominator. For almost every $x$ and every $0<|\varepsilon|\le1$, the representation of step 1.2 and the second bound of the hypothesis give, with $\theta=\theta(x,\varepsilon)$ and the elementary estimate $(a+b)^{p-1}\le 2^{p-1}(a^{p-1}+b^{p-1})$, $$|q_\varepsilon(x)|\le h(x)\,(|v(x)|+|Dv(x)|),\quad h:=C'(1+|u|^{p-1}+|v|^{p-1}+|Du|^{p-1}+|Dv|^{p-1})+|g|,$$ for a constant $C'$ depending only on $C$ and $p$. Since $u,Du,v,Dv\in L^p(\Omega)$, the monomials $|u|^{p-1},\dots,|Dv|^{p-1}$ lie in $L^{p'}(\Omega)$, and $|g|\in L^{p'}(\Omega)$, while the constant term is integrable on the bounded domain; hence $h\in L^{p'}(\Omega)$, and Hölder's inequality [F3] gives $h(|v|+|Dv|)\in L^1(\Omega)$, uniformly in $\varepsilon$. [F2, F3, step 1.2]

3.1 Dominated convergence identifies the limit. Let $\varepsilon_k\to0$, $\varepsilon_k\ne0$, and choose $K$ such that $|\varepsilon_k|\le1$ for every $k\ge K$. By step 1.2 the functions $q_{\varepsilon_k}$ converge pointwise almost everywhere to $L(x):=f_s(x,u,Du)v+f_\xi(x,u,Du)\cdot Dv$, and by step 2.1 the tail $(q_{\varepsilon_k})_{k\ge K}$ is dominated by the single $L^1$ function $h(|v|+|Dv|)$. Applying [F4] to this tail gives $\int_\Omega q_{\varepsilon_k}\to\int_\Omega L$; removing a finite prefix does not change the limit. Since the sequence $\varepsilon_k\to0$ was arbitrary, $\lim_{\varepsilon\to0}\varepsilon^{-1}(I(u+\varepsilon v)-I(u))=\int_\Omega\big(f_s(x,u,Du)v+f_\xi(x,u,Du)\cdot Dv\big)dx$. [F4, step 2.1]

4.1 Boundedness of the derivative, and conclusion. The map $v\mapsto\delta I(u;v):=\int_\Omega(f_s(x,u,Du)v+f_\xi(x,u,Du)\cdot Dv)dx$ is linear in $v$ by linearity of the integral, and the pointwise estimate $|f_s(x,u,Du)v+f_\xi(x,u,Du)\cdot Dv|\le h_u(x)(|v|+|Dv|)$ with $h_u:=C(1+|u|^{p-1}+|Du|^{p-1})+|g|\in L^{p'}(\Omega)$ gives, by [F3], $|\delta I(u;v)|\le(1+n)\|h_u\|_{p'}\|v\|_{W^{1,p}(\Omega)}$; hence $\delta I(u)\in W^{1,p}(\Omega)^*$. By [F6] the functional $I$ is Gateaux differentiable at $u$ with derivative $\delta I(u)$ and the displayed formula, as claimed. [F3, F6, step 3.1] ∎ 
