---
id: lem-gr-fx-kerr-exterior-properties
kind: lemma
title: "Lorentzian signature and time orientation of the Kerr exterior datum"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
physical_scope: "Pure geometric verification of the metric datum; no Einstein equation, black-hole uniqueness statement, or observation is asserted."
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-kerr-exterior
  - def-gr-smooth-lorentzian-objects
  - def-gr-inverse-metric-and-musical-isomorphisms
  - lem-gr-inverse-metric-is-smooth
  - def-smooth-vector-field-as-a-tangent-bundle-section
  - def-countable-choice
  - thm-real-power-continuity-and-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
dependency_roles:
  def-gr-fx-kerr-exterior: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  lem-gr-inverse-metric-is-smooth: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
sources:
  references:
    - title: "M. Visser, The Kerr spacetime: A brief introduction, introductory book chapter, arXiv:0706.0622v3 (2008), §5, PDF pp. 14-17"
      url: "https://arxiv.org/pdf/0706.0622"
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §7.3, PDF pp. 95-96"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: pending
---

## Statement

For $M>0$, $|a|<M$, and the Kerr exterior tensor datum, define
$T:=\partial_t$, $\Phi:=\xi$, $A:=r^2+a^2$, and $q:=\gamma(\xi,\xi)$.
The global vector field
$$N:=\frac{A^2-a^2\Delta q}{\Sigma\Delta}\,T+\frac{2aMr}{\Sigma\Delta}\,\Phi$$
is smooth; the tensor $g$ is smooth, symmetric, nondegenerate, and has
signature $(-,+,+,+)$ on all of
$\mathcal M_{\mathrm K}=\mathbb R\times(r_+,\infty)\times S^2$; and
$N=-\sharp_g(dt)$ is timelike. Thus $N$ defines a time orientation of this
Lorentzian four-manifold.

## Facts & Assumptions

**Given:** $M>0$, $|a|<M$, and the manifold, tensor, functions, and global
fields $T,\Phi,N$ specified in [[def-gr-fx-kerr-exterior]] and the Statement.

[F1] [[def-gr-fx-kerr-exterior]]: the global sphere function $\zeta=z\circ\pi$ has values in $[-1,1]$, $\Sigma=r^2+a^2\zeta^2$ and $\Delta=r^2-2Mr+a^2$ globally (so $\Sigma=r^2+a^2\cos^2\theta$ on the polar chart), $r_\pm=M\pm\sqrt{M^2-a^2}$, $g$ is given globally using the round metric and smooth sphere rotation field, and $T=\partial_t$, $\Phi=\xi$ are smooth global fields.

[F2] [[def-gr-inverse-metric-and-musical-isomorphisms]]: $\sharp_g:T^*\mathcal M_{\mathrm K}\to T\mathcal M_{\mathrm K}$ is the inverse of $v\mapsto g(v,\cdot)$, $g^{-1}(\alpha,\beta)=g(\sharp_g\alpha,\sharp_g\beta)$, and $g^{ab}$ are the inverse-matrix components.

[F3] [[lem-gr-inverse-metric-is-smooth]]: the inverse-metric components of a smooth nondegenerate metric are smooth in every chart.

[F4] [[def-gr-smooth-lorentzian-objects]]: a smooth time orientation is a smooth vector field $N$ with $g(N,N)<0$ everywhere; signature $(-,+,+,+)$ means inertia $(3,1,0)$.

[F5] [[thm-real-power-continuity-and-derivatives]]: for every real $\alpha$, $x\mapsto x^\alpha$ is differentiable on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$.

[F6] [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]: finite sums, products, and compositions of smooth coordinate functions are smooth.

[F7] [[def-smooth-vector-field-as-a-tangent-bundle-section]]: a smooth vector field is a smooth section of the tangent bundle.

[A1] The tangent-bundle smooth-structure convention uses only countable choice $\mathrm{AC}_\omega$ as recorded in [[def-countable-choice]].

## Proof

1.1 Since $0<\sqrt{M^2-a^2}\le M$, with equality in the upper bound exactly when $a=0$, one has $0\le r_-<r_+$ and $r_-=0$ exactly when $a=0$. Thus $\Delta=(r-r_+)(r-r_-)>0$ for $r>r_+$. Also $\Sigma\ge r^2>0$, $A:=r^2+a^2>0$, and $q=\gamma(\xi,\xi)\ge0$. The global formula in [F1] is a smooth symmetric tensor because its sphere tensors and scalar functions are smooth, its denominators are nonzero, and its finite sums and products are smooth by [F6]. The stated formula for $N$ is smooth: repeated use of [F5] makes $x\mapsto x^{-1}$ smooth on $(0,\infty)$, [F6] composes this with $\Sigma\Delta$, and $T,\Phi$ are smooth by [F1]; hence $N$ is a smooth vector field in the sense of [F7]. [given, F1, F5, F6, F7, A1, algebra]

2.1 On a polar chart put $q=\sin^2\theta$. The one-forms $e^0=\sqrt{\Delta/\Sigma}(dt-aq\,d\phi)$, $e^1=\sqrt{\Sigma/\Delta}\,dr$, $e^2=\sqrt{\Sigma}\,d\theta$, and $e^3=\sin\theta\,\Sigma^{-1/2}(A\,d\phi-a\,dt)$ are smooth: repeated application of [F5] gives every derivative of the positive powers $x^{1/2}$ and $x^{-1/2}$ on $(0,\infty)$, and [F6] gives smoothness after composition with the positive smooth functions $\Delta,\Sigma$. The determinant of the coefficient matrix of $(e^0,e^3)$ relative to $(dt,d\phi)$ is $\sqrt{\Delta}\sin\theta$, which is nonzero when $0<\theta<\pi$. Expanding the global formula of [F1] gives $g=-(e^0)^2+(e^1)^2+(e^2)^2+(e^3)^2$; hence $g$ has signature $(-,+,+,+)$ at every point off the axis. [F1, F5, step 1.1, algebra]

2.2 At either axis point $\xi^\flat=0$, $\Sigma=A$, and the global expression in [F1] restricts to $g=-(\Delta/A)\,dt^2+(A/\Delta)\,dr^2+A\gamma$ on the tangent directions there. The first coefficient is negative and the radial and sphere terms are positive because $A,\Delta>0$ and $\gamma$ is positive definite. Thus $g$ is nondegenerate with the same signature at the axes. The global definition in [F1] already gives smoothness there, so this proves the asserted signature on all of $\mathcal M_{\mathrm K}$. [F1, step 1.1, algebra]

3.1 On a polar chart put $q=\sin^2\theta$. Direct inversion of the $t,\phi$ block gives $\Sigma\Delta\,g^{tt}=-(A^2-a^2\Delta q)$ and $\Sigma\Delta\,g^{t\phi}=-2aMr$. Here $0<\Delta<A$ and $0\le q\le1$, so $A^2-a^2\Delta q\ge A^2-a^2\Delta\ge A^2-a^2A=Ar^2>0$. The second inequality uses $\Delta<A$ and $a^2\ge0$; equality is allowed when $a=0$. Hence $g^{-1}(dt,dt)=g^{tt}<0$. The same inverse components show $-\sharp_g(dt)=\frac{A^2-a^2\Delta q}{\Sigma\Delta}T+\frac{2aMr}{\Sigma\Delta}\Phi=N$ on this chart. At an axis point smoothness of the inverse from [F3] and step 2.2 give $g^{-1}(dt,dt)=-A/\Delta<0$; the smooth global fields $N$ and $-\sharp_g(dt)$ agree on the dense polar chart, hence agree on the axes as well. Thus $g(N,N)=g^{-1}(dt,dt)<0$ everywhere, and [F4] makes $N$ a time orientation. [F1, F2, F3, F4, step 1.1, step 2.2, algebra] ∎


## Remarks

The proof uses the orthonormal coframe only away from the rotation axis; the
global round-sphere expression in the definition supplies the regular tensor
there. No field equation is used.
