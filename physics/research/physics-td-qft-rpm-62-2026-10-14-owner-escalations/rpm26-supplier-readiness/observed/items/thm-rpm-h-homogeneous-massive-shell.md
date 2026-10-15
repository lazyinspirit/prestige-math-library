---
id: thm-rpm-h-homogeneous-massive-shell
kind: theorem
title: "Massive square-root Legendre map and its future shell"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-rpm-h-background-and-model-quantities, def-rpm-spacetime-observer-and-worldline, def-rpm-h-cotangent-phase-space, thm-a-regular-level-set-is-an-embedded-submanifold, thm-rpm-h-homogeneous-legendre-degeneracy]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-h-background-and-model-quantities: mathematical-premise
  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite
  def-rpm-h-cotangent-phase-space: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  thm-rpm-h-homogeneous-legendre-degeneracy: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, complete lecture notes, §1.2.1"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Printed pp. 11–13: massive relativistic particle and mass shell."
    - title: "Henneaux, Teitelboim and Regge, Constrained Hamiltonian Systems, Part 1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Chapter II, printed pp. 27–30."
physical_scope: "Conditional geometric analysis of the adopted square-root free particle Lagrangian on a prescribed background."
---

## Statement

Let $(M,g,T)$ be a smooth time-oriented Lorentzian four-manifold, $m>0$, and $L(x,V)=-mc\sqrt{-g(V,V)}$ on the future timelike tangent cone. Its fibre derivative is

$$p_a=mc\frac{g_{ab}V^b}{s},\qquad s=\sqrt{-g(V,V)}>0.$$

The velocity Hessian is $mc(g_{ab}/s+V_aV_b/s^3)$, has kernel exactly $\mathbb RV$, and rank three. The image consists exactly of the future shell Σ$_m^+=\{g^{-1}(p,p)=-m^2c^2, p^\sharp\text{ future}}$. Each fibre is a connected positive ray, and the Legendre map is a surjective submersion onto this embedded image. Its energy (p(V)-L) is zero; the map has no local inverse in the four-velocity direction.

## Facts & Assumptions

**Given:** A smooth nondegenerate Lorentz metric of signature $(-+++)$, its time orientation, $m>0$, $c>0$, and a future timelike $V\ne0$.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-rpm-h-background-and-model-quantities]]: $g$ is a prescribed smooth Lorentzian metric with a fixed future cone.

[F4] [[def-rpm-spacetime-observer-and-worldline]]: a massive worldline is future timelike, and the background metric and time orientation are fixed data.

[F2] [[thm-a-regular-level-set-is-an-embedded-submanifold]]: a smooth level with nonzero differential is an embedded hypersurface.

[F3] [[thm-rpm-h-homogeneous-legendre-degeneracy]]: positive degree-one homogeneity forces a null velocity-Hessian direction and zero energy.

## Proof

1.1 Differentiate $L=-mc\sqrt{-g_{ij}V^iV^j}$ with respect to $V^a$. Because $s>0$, ordinary chain rule gives $p_a=mcV_a/s$. Differentiating again gives $L_{V^aV^b}=mc(g_{ab}/s+V_aV_b/s^3)$. [given, A1, F1, calculus]

1.2 Contract the Hessian with $V^b$: $mc(V_a/s+V_a g(V,V)/s^3)=0$, since $g(V,V)=-s^2$. For $W\perp_g V$, contraction with $W$ has quadratic value $(mc/s)g(W,W)>0$. In a Lorentz orthonormal frame the orthogonal complement to timelike $V$ is three-dimensional positive definite; hence the kernel is precisely $\mathbb RV$ and rank is three. [given, F1, step 1.1, Lorentz signature]

2.1 The momentum in step 1.1 satisfies $g^{-1}(p,p)=(mc/s)^2g(V,V)=-m^2c^2$ and is future because it is a positive multiple of $V^\flat$. Conversely, for any future covector on this shell, set $V=p^\sharp$. Then $s=mc$, and the same formula returns $p$; every positive multiple of $V$ returns the same covector. This proves exact image and positive-ray fibres. [given, F1, F4, step 1.1, algebra]

2.2 The defining function $C=\tfrac12(g^{-1}(p,p)+m^2c^2)$ has fibre differential $d_pC=p^\sharp\ne0$ on the shell. By [F2] the shell is embedded. The Legendre map fixes the base point and has fibre differential of rank three by step 1.2, so its differential has rank $4+3=7$, the shell dimension; it is a submersion onto that image. [given, F2, step 1.2, step 2.1, rank theorem]

3.1 Euler's identity from [F3] gives $p(V)-L=0$, while the nonzero kernel direction in step 1.2 rules out a local diffeomorphism and any four-velocity inverse. [F3, step 1.2] ∎
