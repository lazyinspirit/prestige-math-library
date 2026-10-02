---
id: lem-ball-poisson-kernel-is-positive-and-normalised
kind: lemma
title: The ball Poisson kernel is positive and has unit mass
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, lem-euclidean-balls-are-bounded-c-one-domains, lem-sphere-and-ball-measures-scale, thm-green-function-for-a-ball-in-rn, thm-green-representation-formula, thm-poisson-kernel-for-a-ball-in-rn]
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed pp. 48–50; positivity and unit mass are used in the alternative boundary-attainment proof"
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4.1, printed pp. 33–34, Theorem 2.13"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A: Partial Differential Equations (2023)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "§4.4, printed pp. 71–72, Theorem 4.24"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§5.4, printed pp. 126–127, Lemma 5.23; §5.6, printed p. 133"
---

## Statement

Assume Countable Choice and $n\ge3$. For every ball $B_R(a)$, interior point $x$ and boundary point $y$, $P_{R,a}(x,y)>0$, and the kernel has total surface mass one: $\int_{\partial B_R(a)}P_{R,a}(x,y)\,dS_y=1$.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge3$, a centre $a\in\mathbb R^n$, a radius $R>0$, an interior point $x\in B_R(a)$ and a boundary point $y\in\partial B_R(a)$.

[F1] For $x\in B_R(a)$ and $y\in\partial B_R(a)$ the ball Poisson kernel is $P_{R,a}(x,y)=(R^2-|x-a|^2)/(R\omega_{n-1}|x-y|^n)$, the negative outward boundary-slot normal derivative of the ball Green function, and it is a continuous function of $(x,y)$ on $B_R(a)\times\partial B_R(a)$ ([[thm-poisson-kernel-for-a-ball-in-rn]]).

[F2] Let $\Omega$ be a bounded $C^1$ domain carrying a Dirichlet Green function whose designated correctors satisfy $H_y\in C^2(\overline\Omega)$; let $P_\Omega=-\partial_{\nu_y}G_\Omega$. Then for every real $u\in C^2(\overline\Omega)$ and every $x\in\Omega$ one has $u(x)=\int_\Omega G_\Omega(x,y)(-\Delta u(y))\,dy+\int_{\partial\Omega}P_\Omega(x,y)u(y)\,dS(y)$, both integrals absolutely finite; moreover $P_\Omega\ge0$ on $\Omega\times\partial\Omega$ and $\int_{\partial\Omega}P_\Omega(x,y)\,dS(y)=1$ for every $x\in\Omega$ ([[thm-green-representation-formula]]).

[F3] For $n\ge3$ the ball $B_R(a)$ carries the Dirichlet Green function $G(x,z)=\Phi(x-z)-(R/|z-a|)^{n-2}\Phi(x-z^*)$ (with the centre case $G(x,a)=\Phi(x-a)-\Phi(R)$), whose designated correctors all lie in $C^2(\overline{B_R(a)})$, and whose negative outward boundary-slot normal derivative is the kernel of [F1] ([[thm-green-function-for-a-ball-in-rn]], [[thm-poisson-kernel-for-a-ball-in-rn]]).

[F4] $B_R(a)$ is a bounded $C^1$ domain ([[lem-euclidean-balls-are-bounded-c-one-domains]]).

[F5] For $n\ge1$ and $r>0$ the sphere and ball measures are $|\partial B_r|=\omega_{n-1}r^{n-1}$ and $|B_r|=\omega_{n-1}r^n/n$, both finite and positive ([[lem-sphere-and-ball-measures-scale]]).

[F6] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F6] and let $\Omega:=B_R(a)$. The hypotheses of [F2] are met: $\Omega$ is a bounded $C^1$ domain by [F4], and by [F3] it carries a Dirichlet Green function whose designated correctors lie in $C^2(\overline\Omega)$; moreover the kernel $P_{R,a}$ of [F1] is by [F3] the negative boundary-slot normal derivative $P_\Omega$ of that Green function, so the two notation systems denote the same function on $\Omega\times\partial\Omega$. [given, F1, F2, F3, F4, F6]

2.1 Strict positivity. By [F1], $P_{R,a}(x,y)=(R^2-|x-a|^2)/(R\omega_{n-1}|x-y|^n)$. Since $x$ lies in the open ball, $0\le|x-a|<R$ and the numerator $R^2-|x-a|^2$ is positive; by [F5] both $R>0$ and $\omega_{n-1}>0$, and $|x-y|>0$ because an interior point and a boundary point of $B_R(a)$ cannot coincide. A quotient of positive numbers is positive, so $P_{R,a}(x,y)>0$. [given, step 1.1, F1, F5, algebra]

2.2 Unit mass. Apply the representation identity of [F2] on $\Omega=B_R(a)$ to the constant function $u\equiv1$, which is real and lies in $C^2(\overline\Omega)$ with $\Delta u=0$: for every $x\in\Omega$, $1=u(x)=\int_\Omega G_\Omega(x,y)\cdot0\,dy+\int_{\partial\Omega}P_\Omega(x,y)\cdot1\,dS(y)$. Step 1.1 identifies $P_\Omega$ with $P_{R,a}$, and [F2] guarantees that the second integral is absolutely finite, so $\int_{\partial B_R(a)}P_{R,a}(x,y)\,dS_y=1$. [given, step 1.1, F2, F3, algebra]

3.1 Step 2.1 gives $P_{R,a}(x,y)>0$ for every interior $x$ and boundary $y$, and step 2.2 gives unit total surface mass $\int_{\partial B_R(a)}P_{R,a}(x,y)\,dS_y=1$ for every $x\in B_R(a)$; this proves both assertions of the statement. The argument uses the Green representation formula rather than the ball Dirichlet theorem, so the boundary-convergence question is not presupposed. [step 2.1, step 2.2, F1, F2] ∎
