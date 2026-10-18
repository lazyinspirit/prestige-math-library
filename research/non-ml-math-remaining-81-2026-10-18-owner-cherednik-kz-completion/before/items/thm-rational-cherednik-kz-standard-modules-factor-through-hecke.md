---
id: thm-rational-cherednik-kz-standard-modules-factor-through-hecke
kind: theorem
title: "KZ monodromy of standard modules satisfies the reflection Hecke relations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 12
deps:
  - def-rational-cherednik-kz-functor-and-finite-hecke-algebra
  - lem-rational-cherednik-standard-module-local-connection-residue
  - lem-rational-cherednik-log-connection-meridian-eigenvalues
  - def-rational-cherednik-standard-module
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/pdf/1001.0432"
      locator: "§6.2, local residue calculation for standard modules, PDF pp. 45–46; the proof here fixes signs from the present left-module and positive-meridian conventions."
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§5.2.2, standard induced-module connection, PDF pp. 18–19."
verification:
  precheck: pending
---

## Statement

For every finite-dimensional $W$-module $E$, each positive reflection meridian acts on $\operatorname{KZ}(\Delta_c(E))$ with eigenvalues among $\mu_{H,0},\dots,\mu_{H,e_H-1}$ from [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]]. Consequently $\operatorname{KZ}(\Delta_c(E))$ is a module over the defined finite reflection Hecke algebra $\mathcal H_{q(c)}(W)$. No semisimplicity assumption on $\mathcal O_c$ or on the Hecke algebra is made.

## Facts & Assumptions

**Given:** $(W,\mathfrak h,c)$ and a finite-dimensional $W$-module $E$.

[F1] [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]]: a positive meridian around $H$ lifts through angle $2\pi/e_H$, ends at the $s_H^{-1}$ translate, and its endpoint is identified by $s_H$; the Hecke polynomial has roots $\mu_{H,j}=\zeta_H^j\exp(-2\pi i r_{H,j}/e_H)$.

[F2] [[lem-rational-cherednik-standard-module-local-connection-residue]]: on $\Delta_c(E)$ the connection near a generic point of $H$ has logarithmic residue $R_H=\sum_{\ell=1}^{e_H-1}c_{H,\ell}(1-s_H^\ell)$, acting by $r_{H,j}$ on the $s_H$-eigenspace $E_j$ with eigenvalue $\zeta_H^j$.

[F3] [[lem-rational-cherednik-log-connection-meridian-eigenvalues]]: for $\nabla=d-A(z)dz/z$ with residue $A(0)$ and compatible endpoint map $g$, positive-angle transport followed by $g$ has characteristic polynomial that of $g\exp(i\theta A(0))$.

[F4] [[def-rational-cherednik-standard-module]]: $E$ is a finite-dimensional $W$-module and $\Delta_c(E)$ is its induced standard module.

## Proof

**Proof technique:** direct.

**Given:** [F1]–[F4].

1.1 By [F4], the statement applies to each finite-dimensional standard label $E$. Fix a reflecting hyperplane $H$ and choose a small disk normal to $H$ at a point lying on no other reflecting hyperplane. In the standard-module trivialization from [F2], write the normal connection as $\nabla=d-A(z)dz/z$, where $A(z)$ is holomorphic and $A(0)=-R_H$: the residue of $\nabla$ itself in [F2] is $+R_H$. The $W_H$-equivariance of the connection gives the compatible endpoint map required in [F3], with $g=s_H$ and angle $\theta=2\pi/e_H$. [F1, F2, F3, F4, choose]

2.1 On $E_j$, [F2] gives $A(0)=-r_{H,j}$ and $g=s_H$ acts by $\zeta_H^j$. Applying [F3], the local meridian eigenvalue is $\zeta_H^j\exp\!(-2\pi i r_{H,j}/e_H)=\mu_{H,j}$. Thus the operator is diagonalizable on $E=\bigoplus_jE_j$ and every eigenvalue is one of the listed roots, even when some roots coincide. [F1, F2, F3, step 1.1, algebra]

3.1 The based meridian $T_H$ is conjugate to the local meridian computed in steps 1.1–1.2 by parallel transport along a path from the basepoint to the chosen disk. Conjugate operators have the same annihilating polynomials. Hence $\prod_{j=0}^{e_H-1}(T_H-\mu_{H,j})$ annihilates $\operatorname{KZ}(\Delta_c(E))$ for this hyperplane. [F1, step 2.1, algebra]

4.1 The argument applies to every reflecting hyperplane. The braid-group representation therefore kills every defining relation of $\mathcal H_{q(c)}(W)$ and descends to a module over that quotient. [F1, step 3.1, algebra] ∎
