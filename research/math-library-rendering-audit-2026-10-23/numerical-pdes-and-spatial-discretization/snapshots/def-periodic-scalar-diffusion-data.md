---
id: def-periodic-scalar-diffusion-data
kind: definition
title: Uniformly elliptic periodic scalar diffusion data
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-countable-choice, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Grégoire Allaire, Introduction to Homogenization Theory, Lecture 1"
      url: "https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf"
      locator: "§1.1, PDF pp. 1–3: periodic scalar conductivity, unit cell, ellipticity and zero-Dirichlet model."
    - title: "Zhongwei Shen, Lectures on Periodic Homogenization of Elliptic Systems"
      url: "https://arxiv.org/pdf/1710.11257"
      locator: "Chapter 1 §§1.1–1.3, printed pp. 3–23: bounded periodic coefficients and Dirichlet homogenization setting."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Definition

Fix an integer $d\ge1$ and the unit cell $Y=(0,1)^d$ with Lebesgue measure $|Y|=1$. Assume Countable Choice for the $L^2$ conventions of [[def-countable-choice]]. A **uniformly elliptic periodic scalar diffusion coefficient** is a measurable real function $a:\mathbb R^d\to\mathbb R$ such that $a(y+k)=a(y)$ for almost every $y$ and every $k\in\mathbb Z^d$, and there are constants $0<\lambda\le\Lambda<\infty$ with $\lambda\le a(y)\le\Lambda$ almost everywhere on $Y$. Coefficients are identified when they agree almost everywhere.

For $\epsilon>0$, the physical scalar coefficient is $a_\epsilon(x)=a(x/\epsilon)$ and the associated matrix is $a_\epsilon(x)I_d$. The bounded-domain branch used on this page is $\Omega=(0,1)^d$ with homogeneous zero boundary values. Its weak equation for datum $f\in L^2(\Omega;\mathbb R)$ is
$$\int_\Omega a(x/\epsilon)\nabla u_\epsilon\cdot\nabla v\,dx=\int_\Omega fv\,dx\qquad(v\in H^1_0(\Omega;\mathbb R)).$$
No coefficient regularity beyond measurability and the displayed bounds is part of this definition.

For every $\epsilon>0$, the map $x\mapsto x/\epsilon$ is a $C^1$ diffeomorphism of $\mathbb R^d$. By [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], its pullback preserves Lebesgue measurability and takes null-set changes to null-set changes (apply the theorem also to the inverse map). Thus $a_\epsilon$ is a well-defined almost-everywhere class independent of the representative of $a$. The same result applies to every affine translation and positive dilation used in periodic sampling below, so almost-everywhere coefficient bounds are preserved under those pullbacks.

The ellipticity bounds hold almost everywhere on all of $\mathbb R^d$, not just on $Y$: periodicity transfers the exceptional null set from $Y$ to each lattice translate, translations preserve null sets by the same change-of-variables theorem, and the countably many translates cover $\mathbb R^d$ up to their null boundaries.

## Axiom use

Countable Choice is inherited through the real and complex $L^2$ and Sobolev class conventions. No Axiom of Choice or Dependent Choice is asserted here.
