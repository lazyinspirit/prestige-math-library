---
id: cex-wave-formula-with-sphere-area-and-ball-volume-confused
kind: counterexample
title: "Replacing the sphere measure by the ball measure in Kirchhoff's formula"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
proof_strategy: direct
deps: [thm-kirchhoff-formula-for-the-three-dimensional-wave-equation, def-spherical-mean-of-space-dependent-data, lem-sphere-and-ball-measures-scale, ex-kirchhoff-formula-for-constant-initial-velocity, def-countable-choice, cor-volume-of-the-unit-n-ball, thm-real-gamma-functional-equation, cor-real-gamma-one-half-is-root-pi, thm-algebra-of-derivatives]
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
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed pp. 168–169, (7.10): the sphere measure and the factor $t$ inside the derivative"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.1, printed p. 281, (9.1.4): the unnormalised sphere integral with area $4\\pi c^2t^2$"
---


## Statement refuted

**Statement refuted.** "In the three-dimensional Kirchhoff formula one may replace the sphere measure $dS$ on $\partial B_{ct}(x)$ by Lebesgue measure $dy$ on the ball $B_{ct}(x)$ while keeping the sphere-area factor, i.e.
$$u(x,t)=\frac{\partial}{\partial t}\Bigl[t(4\pi c^2t^2)^{-1}\int_{B_{ct}(x)}u_0\Bigr]+t(4\pi c^2t^2)^{-1}\int_{B_{ct}(x)}u_1$$
still solves the Cauchy problem; the sphere area $4\pi c^2t^2$ and the ball volume are interchangeable normalisations."

## Facts & Assumptions

**Given:** Countable Choice, $c>0$, and the refuted expression displayed above.

[F1] The Kirchhoff expression's solution for constant data $(u_0,u_1)=(g_0,v_0)$ is $g_0+tv_0$; in particular $(1,0)$ gives $u\equiv1$ and $(0,1)$ gives $u=t$ ([[ex-kirchhoff-formula-for-constant-initial-velocity]], [[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]]).

[F2] $|B_{ct}|=\frac43\pi c^3t^3$ and $|\partial B_{ct}|=4\pi c^2t^2$, since $|B_r^3|=\omega_2r^3/3$ and $|\partial B_r^3|=\omega_2r^2$ with $\omega_2=4\pi$ ([[lem-sphere-and-ball-measures-scale]], [[cor-volume-of-the-unit-n-ball]], [[thm-real-gamma-functional-equation]], [[cor-real-gamma-one-half-is-root-pi]]).

[F3] Sums, products, constant multiples of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]).

## Counterexample

1.1 Constant displacement. Take $u_0\equiv1$, $u_1\equiv0$. The correct solution is $u\equiv1$ by [F1], whereas replacing the surface integral by a ball integral in the actual Kirchhoff expression gives $\partial_t[t(4\pi c^2t^2)^{-1}(4\pi c^3t^3/3)]=\partial_t[ct^2/3]=2ct/3$. Its displacement limit is zero for every $c>0$, so it fails to attain $u_0=1$. It also has velocity limit $2c/3$, instead of zero. [F1, F2, F3, algebra]


1.2 Constant velocity. Take $u_0\equiv0$, $u_1\equiv1$. The correct solution is $u=t$ by [F1], whereas the refuted expression gives $t(4\pi c^2t^2)^{-1}(4\pi c^3t^3/3)=ct^2/3$. Its velocity limit is zero, not one, and its second time derivative is $2c/3$ while its spatial Laplacian is zero. Thus it fails both the Cauchy data and the homogeneous wave equation for every $c>0$. [F1, F2, F3, algebra]


2.1 The sphere-area normalisation converts a surface integral into the spherical mean. A ball integral divided by that same area instead returns $ct/3$ times the datum when it is constant. Keeping the factors $t$ of Kirchhoff's formula then gives the two incorrect functions above. Hence sphere area and ball volume cannot be interchanged in that formula. [F2, step 1.1, step 1.2, algebra] ∎
