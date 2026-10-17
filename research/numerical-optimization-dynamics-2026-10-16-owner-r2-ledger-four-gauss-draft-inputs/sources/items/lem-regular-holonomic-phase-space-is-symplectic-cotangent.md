---
id: lem-regular-holonomic-phase-space-is-symplectic-cotangent
kind: lemma
title: The regular holonomic phase space is a symplectic cotangent bundle
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-regular-holonomic-phase-space-and-dynamics
  - def-symplectic-form-and-symplectic-manifold
  - thm-euclidean-implicit-function-theorem
  - thm-chain-rule-for-total-derivatives
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; only local charts and ordinary finite-dimensional linear algebra are needed."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1, §§VII.1.1–VII.1.4"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Statement

Under the hypotheses of [[def-regular-holonomic-phase-space-and-dynamics]], choose a local configuration chart $\phi:O\subseteq\mathbb R^{d-m}\to Q$ and write $T=D\phi$, $G=T^TMT$. Then $Q$ is a smooth manifold of dimension $d-m$, and the cotangent coordinates $\pi=T^Tp$ identify $\mathcal M$ locally with $T^*Q$: the unique consistent ambient momentum representing $\pi$ is $p=MTG^{-1}\pi$. In these coordinates the restricted canonical one-form $p^Tdq$ is $\pi^Tdx$, so the restricted two-form is $\omega_{\mathcal M}=\sum_{j=1}^{d-m}dx_j\wedge d\pi_j$. It is closed and nondegenerate, hence is a symplectic form on $\mathcal M$.

## Facts & Assumptions

**Given:** The objects and regularity hypotheses in [[def-regular-holonomic-phase-space-and-dynamics]], and the canonical symplectic convention in [[def-symplectic-form-and-symplectic-manifold]].

[F1] [[def-regular-holonomic-phase-space-and-dynamics]]: $Q=\{c=0\}$, $J=Dc$ has full row rank, $M$ is constant SPD, and $\mathcal M=\{(q,p):c(q)=0,\ JM^{-1}p=0\}$.

[F2] [[thm-euclidean-implicit-function-theorem]]: if a square block derivative of a $C^1$ map is invertible at a zero, the zero set is locally the graph of a unique $C^1$ function.

[F3] [[def-symplectic-form-and-symplectic-manifold]]: a symplectic form is a smooth closed two-form that is pointwise nondegenerate.

[F4] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composite is the composite of its derivatives.

## Proof

1.1 At any $q\in Q$, full row rank of $J(q)$ gives a permutation of coordinates $q=(x,y)$ for which the $m\times m$ block $D_yc(q)$ is invertible. Apply [F2] to $c(x,y)=0$: locally $Q$ is the graph $y=\psi(x)$, so $\phi(x)=(x,\psi(x))$ parametrizes $Q$ and $D\phi$ has rank $d-m$ with image $\ker J$. [F1, F2, construct]

2.1 Define $G(x)=D\phi(x)^TMD\phi(x)$. For every nonzero $\xi$, $D\phi\,\xi\ne0$ and $\xi^TG(x)\xi=(D\phi\,\xi)^TM(D\phi\,\xi)>0$, so $G$ is invertible. For a cotangent coordinate $\pi\in\mathbb R^{d-m}$, put $p=MD\phi\,G^{-1}\pi$. Then $JM^{-1}p=JD\phi\,G^{-1}\pi=0$ and $D\phi^Tp=G G^{-1}\pi=\pi$. Conversely, if $JM^{-1}p=0$, then $M^{-1}p=D\phi\,\xi$ for a unique $\xi$, and $D\phi^Tp=G\xi$; hence the displayed formula gives the unique ambient $p$ representing $\pi$. Thus $(x,\pi)\mapsto(\phi(x),p)$ is a local diffeomorphism from $T^*Q$ onto $\mathcal M$. [step 1.1, F1, algebra]

3.1 Let $\theta_0=p^Tdq$ be the ambient canonical one-form. Under the chart just constructed, $dq=D\phi\,dx$ and $D\phi^Tp=\pi$, so its pullback is $\pi^Tdx$. Therefore the pullback of $\omega_0=-d\theta_0$ is $\sum_{j=1}^{d-m}dx_j\wedge d\pi_j$, which is closed and nondegenerate. [F3, F4, step 2.1, algebra]

4.1 Every point of $\mathcal M$ has a chart of this form; the local calculation proves the restricted two-form is closed and nondegenerate everywhere. By [F3] it is symplectic, as claimed. [F3, step 3.1] ∎
