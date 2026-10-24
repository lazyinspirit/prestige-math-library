---
id: lem-one-dimensional-wave-operator-factorisation
kind: lemma
title: "Factorisation of the one-dimensional wave operator"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
proof_strategy: direct
deps: [def-wave-equation-cauchy-data-and-wave-speed, thm-algebra-of-derivatives, thm-clairaut-schwarz-mixed-partials, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.3.2 and §2.4.1, printed pp. 46 and 53, (2.3.2) and Proposition 2.4.1 (2.4.2) (proof read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§3.3, printed pp. 66–67, the factorisation (3.59) with the hint of Problem 3.4(3)"
    - title: "Per Kristen Jakobsen, An Introduction to Partial Differential Equations (arXiv:1901.03022)"
      url: "https://arxiv.org/pdf/1901.03022"
      locator: "§6.2, printed pp. 51–62: first-order factorisation and characteristic coordinates for the linear wave operator"
---


## Statement

Let $c>0$ and let $u$ be $C^2$ on an open subset of $\mathbb R^2$ ([[def-wave-equation-cauchy-data-and-wave-speed]]). Then
$$\partial_t^2u-c^2\partial_x^2u=(\partial_t-c\partial_x)(\partial_t+c\partial_x)u=(\partial_t+c\partial_x)(\partial_t-c\partial_x)u .$$
In the characteristic coordinates $\xi=x-ct$, $\eta=x+ct$ one has
$$\partial_t^2u-c^2\partial_x^2u=-4c^2\,\partial_\xi\partial_\eta u ,$$
so $u$ solves the homogeneous one-dimensional wave equation exactly on the open set where $u_{\xi\eta}=0$.

## Facts & Assumptions

**Given:** a speed $c>0$ and a $C^2$ function $u$ on an open subset of $\mathbb R^2$, with coordinates $(x,t)$ and characteristic coordinates $\xi=x-ct$, $\eta=x+ct$.

[F1] If $f$ is $C^2$ on an open subset of $\mathbb R^m$, then $\partial_i\partial_jf=\partial_j\partial_if$ for every pair of coordinate indices ([[thm-clairaut-schwarz-mixed-partials]]).

[F2] If $f:U\to V\subseteq\mathbb R^n$ is totally differentiable at $a$ and $g:V\to\mathbb R^p$ is totally differentiable at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]). The required total differentiability follows from continuous coordinate partial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F3] Sums, constant multiples of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]).

## Proof

1.1 Expanding the two compositions and using [F1] for the mixed terms, $(\partial_t-c\partial_x)(\partial_t+c\partial_x)u=\partial_t^2u+c\partial_t\partial_xu-c\partial_x\partial_tu-c^2\partial_x^2u=\partial_t^2u-c^2\partial_x^2u$, and $(\partial_t+c\partial_x)(\partial_t-c\partial_x)u=\partial_t^2u-c\partial_t\partial_xu+c\partial_x\partial_tu-c^2\partial_x^2u=\partial_t^2u-c^2\partial_x^2u$; hence both factorisations equal the operator applied to $u$. [F1, F3, algebra]

1.2 Write $U(\xi,\eta):=u(x,t)$ with $\xi=x-ct$, $\eta=x+ct$. By [F2] the chain rule for the substitution $(x,t)\mapsto(\xi,\eta)=(x-ct,x+ct)$ gives $\partial_xu=U_\xi+U_\eta$ and $\partial_tu=-cU_\xi+cU_\eta$, with the right-hand sides evaluated at $(x-ct,x+ct)$, hence $\partial_t-c\partial_x=-2c\partial_\xi$ and $\partial_t+c\partial_x=2c\partial_\eta$ as operators on $U$; composing, $\partial_t^2u-c^2\partial_x^2u=(\partial_t-c\partial_x)(\partial_t+c\partial_x)u=(-2c\partial_\xi)(2c\partial_\eta)U=-4c^2U_{\xi\eta}$. [F2, F3, algebra]

2.1 Since $c>0$ the factor $-4c^2$ is nonzero, so $\partial_t^2u=c^2\partial_x^2u$ at a point if and only if $U_{\xi\eta}=0$ there; this proves the claimed equivalence and completes the factorisation identities. [algebra] ∎ 