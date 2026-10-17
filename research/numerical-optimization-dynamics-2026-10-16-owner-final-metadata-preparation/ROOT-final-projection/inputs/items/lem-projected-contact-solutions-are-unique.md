---
id: lem-projected-contact-solutions-are-unique
kind: lemma
title: Solutions of projected contact dynamics are unique under the inherited choice assumptions
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-projected-contact-dynamics-and-euler-step
  - lem-normal-cone-maximal-monotone-and-projection-resolvent
  - thm-gronwall-integral-inequality
  - lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
axiom_use: Countable Choice and Dependent Choice are inherited through the absolutely-continuous FTC supplier used to integrate the squared-distance differential inequality. The normal-cone monotonicity and Lipschitz estimates introduce no further choice.
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 4.3, pp. 122–124; uniqueness for Lipschitz perturbations of maximal-monotone inclusions.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 12, slides 158–161; subdifferential and normal-cone sign conventions.
---

## Statement

Assume Countable Choice and Dependent Choice. Let $T>0$, let $C\subseteq\mathbb R^d$ be nonempty, closed, and convex, and let $f:[0,T]\times C\to\mathbb R^d$ satisfy $\|f(t,x)-f(t,y)\|_2\le L\|x-y\|_2$ for all $t,x,y$, with $L\ge0$. Any two absolutely continuous solutions of the projected dynamics of [[def-projected-contact-dynamics-and-euler-step]] with the same initial state agree on $[0,T]$.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, the set and forcing, and two absolutely continuous solution maps in the Statement.

[A1] [[def-countable-choice]] is inherited through [F4]'s absolutely-continuous FTC.

[A2] [[def-dependent-choice]] is inherited through [F4]'s absolutely-continuous FTC.

[F1] [[def-projected-contact-dynamics-and-euler-step]]: a solution satisfies $f(t,x(t))-\dot x(t)\in N_C(x(t))$ for almost every $t$.

[F2] [[lem-normal-cone-maximal-monotone-and-projection-resolvent]]: if $n_x\in N_C(x)$ and $n_y\in N_C(y)$, then $\langle n_x-n_y,x-y\rangle\ge0$.

[F3] [[thm-gronwall-integral-inequality]]: if continuous $u\ge0$ satisfies $u(t)\le u(0)+\int_0^t 2L u(s)\,ds$, then $u(t)\le u(0)e^{2Lt}$.

[F4] [[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]] and [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]: products of absolutely continuous real functions are absolutely continuous with the ordinary product derivative almost everywhere, and the integral of that derivative is the endpoint difference.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle a,b\rangle|\le\|a\|_2\|b\|_2$.

## Proof

1.1 Let $x,y$ be the two solutions and define $n_x=f(t,x)-\dot x$ and $n_y=f(t,y)-\dot y$ at almost every time where both inclusions hold. By [F1] these belong to $N_C(x)$ and $N_C(y)$; [F2] gives $\langle n_x-n_y,x-y\rangle\ge0$. [F1, F2, given]

2.1 The function $u(t)=\|x(t)-y(t)\|_2^2$ is absolutely continuous by [F4]. At almost every $t$, [F1] and step 1.1 give $$u'(t)=2\langle \dot x-\dot y,x-y\rangle=2\langle f(t,x)-f(t,y),x-y\rangle-2\langle n_x-n_y,x-y\rangle\le2L u(t),$$ using the Lipschitz hypothesis and [F5]. Since $u(0)=0$, [F4] integrates this differential inequality to $u(t)\le\int_0^t2Lu(s)\,ds$. Applying [F3] gives $u(t)=0$ for every $t$, so $x=y$. This argument uses no choices beyond the two axioms already required by [F4]. [A1, A2, F1, F2, F3, F4, F5, step 1.1, given, algebra] ∎
