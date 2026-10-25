---
id: lem-kelvin-inversion-and-the-laplace-operator
kind: lemma
title: Kelvin inversion transforms harmonic functions
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-directional-and-partial-derivatives, def-laplacian-of-a-c2-function, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-real-power-continuity-and-derivatives]
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed pp. 44–49"
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§2.4, printed pp. 28–34; §§8.1–8.3, pp. 139–146"
    - title: "Sheldon Axler, Paul Bourdon and Wade Ramey, Harmonic Function Theory, 2nd ed. (2001)"
      url: "https://www.axler.net/HFT.pdf"
      locator: "Chapter 4, Proposition 4.6 and Theorem 4.7, printed pp. 62–63"
---

## Statement

Use one-based coordinate labels $x_j:=x_{j-1}^{\mathrm{can}}$ and $z_j:=z_{j-1}^{\mathrm{can}}$ for $1\le j\le n$, including their derivatives. Let $n\ge3$, $R>0$ and $a\in\mathbb R^n$. Write $I_R(x)=a+R^2(x-a)/|x-a|^2$ for $x\ne a$. If $u\in C^2(U)$ on an open set $U$ avoiding $a$, define $K_Ru(x)=(R/|x-a|)^{n-2}u(I_R(x))$ on $I_R^{-1}(U)$. Then $\Delta(K_Ru)(x)=(R/|x-a|)^{n+2}(\Delta u)(I_R(x))$. In particular inversion preserves harmonicity on the punctured domains on which both sides are defined.

## Facts & Assumptions

**Given:** $n\ge3$, $R>0$, $a\in\mathbb R^n$, an open set $U$ with $a\notin U$, and $u\in C^2(U)$.

[F1] The Laplacian is $\Delta f=\sum_{i<n}\partial_i\partial_if$ in the coordinate partial derivatives of [[def-directional-and-partial-derivatives]], and a $C^2$ function with $\Delta f=0$ is called harmonic ([[def-laplacian-of-a-c2-function]]).

[F2] If $f$ is totally differentiable at $p$ and $g$ is totally differentiable at $f(p)$, then $D(g\circ f)(p)=Dg(f(p))\circ Df(p)$; finite sums, products and compositions of $C^2$ Euclidean maps are $C^2$ ([[thm-chain-rule-for-total-derivatives]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F3] One-variable derivatives obey the product rule $(fg)'(c)=f'(c)g(c)+f(c)g'(c)$, and for $q>0$ the power $q^\alpha$ has derivative $\alpha q^{\alpha-1}$ ([[thm-algebra-of-derivatives]], [[thm-real-power-continuity-and-derivatives]]).


## Proof

**Proof technique:** direct.

1.1 Put $y:=x-a$, $r:=|y|$ and $z:=I_R(x)=a+R^2y/r^2$. On the open set $V:=I_R^{-1}(U)$ we have $x\ne a$, $r>0$ and $z\in U$, and $x\mapsto z$ is smooth there, being built from the smooth coordinate functions $y_i$ and $r^2$ and the smooth factor $R^2/r^2$; hence $K_Ru=R^{n-2}r^{2-n}(u\circ z)$ is $C^2$ on $V$, and no value is taken at $r=0$. [given, F2, F3]

2.1 Coordinate differentiation of $z$ gives, for all $1\le i,k\le n$, $\partial_iz_k=R^2(\delta_{ik}/r^2-2y_ky_i/r^4)$ and $\Delta z_k=-2(n-2)R^2y_k/r^4$, together with the auxiliary identities $\sum_i\partial_iz_k\,\partial_iz_l=R^4\delta_{kl}/r^4$ and $\sum_iy_i\,\partial_iz_l=-R^2y_l/r^2$; every occurrence of $r$ is positive on $V$. [step 1.1, F2, F3, algebra]

2.2 Put $w_0(x):=r^{2-n}u(z)$, so that $K_Ru=R^{n-2}w_0$. The product and chain rules give $\partial_iw_0=(2-n)r^{-n}y_i\,u(z)+r^{2-n}\sum_k\partial_ku(z)\,\partial_iz_k$. [step 1.1, F2, F3, algebra]

3.1 The chain and power rules give $\partial_i(r^{2-n})=(2-n)r^{-n}y_i$ and $\partial_i^2(r^{2-n})=(2-n)(r^{-n}-nr^{-n-2}y_i^2)$; summing and using $r^2=|y|^2$ gives $\Delta(r^{2-n})=(2-n)(nr^{-n}-nr^{-n-2}|y|^2)=0$. The Laplacian product rule $\Delta(fg)=f\Delta g+2\nabla f\cdot\nabla g+g\Delta f$ applied to $f=r^{2-n}$ and $g=u\circ z$ therefore gives $\Delta w_0=r^{2-n}\Delta(u\circ z)+2\,\nabla(r^{2-n})\cdot\nabla(u\circ z)$. [step 2.2, F1, F2, F3, algebra]

3.2 Two chain-rule evaluations. First, $\Delta(u\circ z)=\sum_{k,l}\partial_k\partial_lu(z)\sum_i\partial_iz_k\,\partial_iz_l+\sum_k\partial_ku(z)\Delta z_k=R^4\Delta u(z)/r^4-2(n-2)R^2\,y\cdot\nabla u(z)/r^4$ by step 2.1. Second, since $\nabla(r^{2-n})=(2-n)r^{-n}y$, step 2.1 gives $\nabla(r^{2-n})\cdot\nabla(u\circ z)=(2-n)r^{-n}\sum_l\partial_lu(z)\sum_iy_i\partial_iz_l=(n-2)R^2\,y\cdot\nabla u(z)/r^{n+2}$. [step 2.1, step 2.2, F2, F3, algebra]

4.1 Substituting step 3.2 into step 3.1, the first-order terms $-2(n-2)R^2r^{-n-2}y\cdot\nabla u(z)$ and $+2(n-2)R^2r^{-n-2}y\cdot\nabla u(z)$ cancel, leaving $\Delta w_0=R^4\Delta u(z)/r^{n+2}$. [step 3.1, step 3.2, algebra]

5.1 Restoring the factor of step 2.2 gives $\Delta(K_Ru)(x)=R^{n-2}\Delta w_0(x)=R^{n+2}r^{-n-2}(\Delta u)(I_R(x))=(R/|x-a|)^{n+2}(\Delta u)(I_R(x))$ for every $x\in I_R^{-1}(U)$. [step 2.2, step 4.1, algebra]

6.1 Since $R^{n+2}r^{-n-2}>0$ on $V$, step 5.1 shows that $\Delta u$ vanishes at $z=I_R(x)$ exactly when $\Delta(K_Ru)$ vanishes at $x$; both sides are evaluated only at points with $x\ne a$, and $I_R$ is an involution exchanging the two punctured domains, so inversion transfers harmonicity in both directions [F1]. No choice principle and no measure-theoretic input is used. [step 5.1, F1] ∎
