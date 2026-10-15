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
deps: [def-countable-choice, def-gr-smooth-lorentzian-objects, def-rpm-spacetime-observer-and-worldline, def-rpm-h-cotangent-phase-space, thm-a-regular-level-set-is-an-embedded-submanifold, thm-rpm-h-homogeneous-legendre-degeneracy, lem-lorentz-form-has-orthonormal-basis, thm-sr-proper-time-and-observer-decomposition]
dependency_roles:
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-rpm-spacetime-observer-and-worldline: mathematical-premise
  def-rpm-h-cotangent-phase-space: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  thm-rpm-h-homogeneous-legendre-degeneracy: mathematical-premise
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete lecture notes (arXiv:gr-qc/9712019v1)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Complete 238-page notes; Chapter 1, printed pp. 25–27, and Chapter 3, printed pp. 68–72; full relevant sections inspected."
    - title: "Henneaux, Teitelboim and Regge, Constrained Hamiltonian Systems, Part 1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0e1d11ee-2741-4da4-83ed-b7cabc0cd7d6/download"
      locator: "Chapter II, printed pp. 27–30."
physical_scope: null
---

## Statement

Let $(M,g,T)$ be a smooth time-oriented Lorentzian four-manifold, $m,c>0$, and $L(x,V)=-mc\sqrt{-g(V,V)}$ on the future timelike tangent cone. Its fibre derivative is

$$p_a=mc\frac{g_{ab}V^b}{s},\qquad s=\sqrt{-g(V,V)}>0.$$

The velocity Hessian is $mc(g_{ab}/s+V_aV_b/s^3)$, has kernel exactly $\mathbb RV$, and rank three. The image consists exactly of the future shell $\Sigma_m^+=\{(x,p)\in T^*M:g_x^{-1}(p,p)=-m^2c^2,\ p^\sharp\text{ future}\}$. Each fibre is a connected positive ray, and the Legendre map is a surjective submersion onto this embedded image. Its energy $p(V)-L$ is zero; the map has no local inverse in the four-velocity direction.

## Facts & Assumptions

**Given:** A smooth nondegenerate Lorentz metric of signature $(-+++)$, its time orientation, $m>0$, $c>0$, and a future timelike $V\ne0$.

[A1] [[def-countable-choice]]: Assume countable choice ACω, meaning every sequence of nonempty sets has a choice function; no full Axiom of Choice is assumed.

[F1] [[def-gr-smooth-lorentzian-objects]] supplies a smooth time-oriented Lorentzian four-manifold with signature $(-,+,+,+)$ and its future cone. The constants $m,c>0$ are parameters of the explicitly specified mathematical function $L$.

[F2] [[def-rpm-spacetime-observer-and-worldline]]: a massive worldline is future timelike, and the background metric and time orientation are fixed data.

[F3] [[thm-a-regular-level-set-is-an-embedded-submanifold]]: a smooth level with nonzero differential is an embedded hypersurface.

[F4] [[thm-rpm-h-homogeneous-legendre-degeneracy]]: positive degree-one homogeneity forces a null velocity-Hessian direction and zero energy.

[F5] [[lem-lorentz-form-has-orthonormal-basis]]: every four-dimensional Lorentz vector space admits an orthonormal basis with metric $\operatorname{diag}(-1,1,1,1)$.

[F6] [[thm-sr-proper-time-and-observer-decomposition]]: in a Lorentz vector space with signature $(-+++)$, the orthogonal complement of a future unit timelike vector is positive definite.

## Proof

1.1 Use the supplied smooth tangent/cotangent bundle structure under [A1] and the Lorentzian data [F1]. Differentiate $L=-mc\sqrt{-g_{ij}V^iV^j}$ with respect to $V^a$. Because $s>0$, ordinary chain rule gives $p_a=mcV_a/s$. Differentiating again gives $L_{V^aV^b}=mc(g_{ab}/s+V_aV_b/s^3)$. [given, A1, F1, algebra]

2.1 Contract the Hessian with $V^b$: $mc(V_a/s+V_a g(V,V)/s^3)=0$, since $g(V,V)=-s^2$. For $W\perp_g V$, contraction with $W$ has quadratic value $(mc/s)g(W,W)$. The normalized vector $u=V/s$ is future unit timelike by [F2]; [F5] identifies this tangent Lorentz space with the standard Lorentz vector space, and [F6] makes its orthogonal complement positive definite. Thus the Hessian is positive on every nonzero $W\perp_g V$, so its kernel is precisely $\mathbb RV$ and its rank is three. [given, F1, F2, F5, F6, step 1.1, algebra]

2.2 The momentum in step 1.1 satisfies $g^{-1}(p,p)=(mc/s)^2g(V,V)=-m^2c^2$ and is future because it is a positive multiple of $V^\flat$. Conversely, for any future covector on this shell, set $V=p^\sharp$. Then $s=mc$, and the same formula returns $p$; every positive multiple of $V$ returns the same covector. This proves exact image and positive-ray fibres. [given, F1, F2, step 1.1, algebra]

3.1 The defining function $C=\tfrac12(g^{-1}(p,p)+m^2c^2)$ has fibre differential $d_pC=p^\sharp\ne0$ on the shell. By [F3] the shell is embedded. The Legendre map fixes the base point and has fibre differential of rank three by step 2.1, so its differential has rank $4+3=7$, the shell dimension; it is a submersion onto that image. [given, F3, step 2.1, step 2.2, algebra]

4.1 Euler's identity from [F4] gives $p(V)-L=0$, while the nonzero kernel direction in step 2.1 rules out a local diffeomorphism and any four-velocity inverse. [F4, step 2.1] ∎

