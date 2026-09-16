---
id: fs-an-infinitesimal-moment-map-is-automatically-equivariant
kind: false-statement
title: An infinitesimal moment map is automatically equivariant
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, def-poisson-bracket-on-a-symplectic-manifold, def-coadjoint-representation-of-a-lie-group, def-regular-and-critical-points-and-values, def-countable-choice, def-fundamental-vector-field-of-a-left-action, def-symplectic-form-and-symplectic-manifold, lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Remarks 7.13(b) and 7.16, printed pages 84--86
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 26, §26.3, printed pages 165--166
proof_strategy: direct
---

## Statement

Every infinitesimal moment map is automatically coadjoint equivariant. **This
is false.**

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the manifold $M=\mathbb R^2$ with $\omega=dx\wedge dy$, and the translation action $(a,b)\cdot(x,y)=(x+a,y+b)$ of $G=\mathbb R^2$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface.

[F1] The fundamental field of $\xi=(a,b)$ is $\xi_M=-\left(a\partial_x+b\partial_y\right)$, and the component equation is $d\mu^\xi=-\iota_{\xi_M}\omega$. [[def-fundamental-vector-field-of-a-left-action]], [[def-moment-map-and-component-hamiltonian]].

[F2] $\omega=dx\wedge dy$ is symplectic on $\mathbb R^2$, $\iota_{\partial_x}\omega=dy$ and $\iota_{\partial_y}\omega=-dx$. [[def-symplectic-form-and-symplectic-manifold]].

[F3] The Poisson bracket satisfies $\{F,G\}=\omega(X_F,X_G)$ and $X_F$ is characterised by $\iota_{X_F}\omega=dF$. [[def-poisson-bracket-on-a-symplectic-manifold]].

[F4] Equivariance of an infinitesimal moment map is equivalent to the vanishing of the defect $c(\xi,\eta)=\{\mu^\xi,\mu^\eta\}-\mu^{[\xi,\eta]}$. [[lem-nonequivariance-defect-of-an-infinitesimal-moment-map-is-a-constant-lie-algebra-two-cocycle]].



## Refutation

**Proof technique:** direct.

1.1 Define $\mu:M\to\mathfrak g^*=\mathbb R^2$ by $\mu(x,y)=(y,-x)$, so that $\mu^{(a,b)}(x,y)=ay-bx$. Then $d\mu^{(a,b)}=a\,dy-b\,dx$, while by [F2] $-\iota_{\xi_M}\omega=-(-\iota_{a\partial_x+b\partial_y}\omega)=\iota_{a\partial_x+b\partial_y}\omega=a\,dy-b\,dx$; hence the component equations hold for every $\xi$ and $\mu$ is an infinitesimal moment map. [F1, F2, given]

2.1 The Lie algebra $\mathfrak g=\mathbb R^2$ is abelian, so the coadjoint action is trivial and $\mu$ would be equivariant only if it were constant; it is not. Hence $\mu$ is not equivariant, and by [F4] its defect cannot vanish identically. [step 1.1, F4]

3.1 The defect is computed directly: for $\xi=(1,0)$ and $\eta=(0,1)$, $\mu^\xi=y$ and $\mu^\eta=-x$, with $\{y,-x\}=\omega(X_y,X_{-x})$. Since $\iota_{\partial_x}\omega=dy$ and $\iota_{-\partial_y}\omega=dx$, one has $X_y=\partial_x$ and $X_{-x}=-\partial_y$, so $\{y,-x\}=\omega(\partial_x,-\partial_y)=-1$; meanwhile $[\xi,\eta]=0$ and $\mu^{0}=0$. Thus $c(\xi,\eta)=-1\ne0$, and $\mu$ is an infinitesimal moment map that is not equivariant. [step 2.1, F3, F4, A1] ∎
