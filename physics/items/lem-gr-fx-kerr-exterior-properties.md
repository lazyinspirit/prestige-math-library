---
id: lem-gr-fx-kerr-exterior-properties
kind: lemma
title: "Lorentzian signature and time orientation of the Kerr exterior datum"
status: published
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
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

For $M>0$, $|a|<M$, and the Kerr exterior tensor datum, define
for $x=(t,r,p)$ the product tangent isomorphism
$$I_x:T_x\mathcal M_{\mathrm K}\longrightarrow\mathbb R\oplus\mathbb R\oplus T_pS^2,\qquad I_x(v):=(dt_x(v),dr_x(v),d\pi_x(v)).$$
Using the sphere rotation field $\xi$ from the Kerr exterior tensor definition, set
$T_x:=I_x^{-1}(1,0,0)$ and $\Phi_x:=I_x^{-1}(0,0,\xi_p)$. Put
$A:=r^2+a^2$ and $q:=\gamma(\Phi,\Phi)$.
The global vector field
$$N:=\frac{A^2-a^2\Delta q}{\Sigma\Delta}\,T+\frac{2aMr}{\Sigma\Delta}\,\Phi$$
is smooth; the tensor $g$ is smooth, symmetric, nondegenerate, and has
signature $(-,+,+,+)$ on all of
$\mathcal M_{\mathrm K}=\mathbb R\times(r_+,\infty)\times S^2$; and
$N=-\sharp_g(dt)$ is timelike. Thus $N$ defines a time orientation of this
Lorentzian four-manifold.

## Statement references

[[def-gr-fx-kerr-exterior]]

## Facts & Assumptions

**Given:** $M>0$, $|a|<M$, and the manifold, tensor, functions, and global fields $T,\Phi,N$ specified in [[def-gr-fx-kerr-exterior]] and the Statement.

[F1] [[def-gr-fx-kerr-exterior]]: the global sphere function $\zeta=z\circ\pi$ has values in $[-1,1]$, $\Sigma=r^2+a^2\zeta^2$ and $\Delta=r^2-2Mr+a^2$ globally (so $\Sigma=r^2+a^2\cos^2\theta$ on local polar charts), $r_\pm=M\pm\sqrt{M^2-a^2}$, and $g$ is given globally using the round metric and smooth sphere rotation field $\xi$. Its product lift $\Phi_{(t,r,p)}=(0,0,\xi_p)$ and $T=\partial_t$ are smooth global vector fields.

[F2] [[def-gr-inverse-metric-and-musical-isomorphisms]]: on a time-oriented smooth Lorentzian four-manifold, $\sharp_g:T^*\mathcal M_{\mathrm K}\to T\mathcal M_{\mathrm K}$ is the inverse of $v\mapsto g(v,\cdot)$, $g^{-1}(\alpha,\beta)=g(\sharp_g\alpha,\sharp_g\beta)$, and $g^{ab}$ are the inverse-matrix components.

[F3] [[lem-gr-inverse-metric-is-smooth]]: on a time-oriented smooth Lorentzian four-manifold, the inverse-metric components are smooth in every chart. We apply [F2] and this fact only after constructing a smooth timelike field.

[F4] [[def-gr-smooth-lorentzian-objects]]: a smooth time orientation is a smooth vector field $N$ with $g(N,N)<0$ everywhere; signature $(-,+,+,+)$ means inertia $(3,1,0)$.

[F5] [[thm-real-power-continuity-and-derivatives]]: for every real $\alpha$, $x\mapsto x^\alpha$ is differentiable on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$.

[F6] [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]: finite sums, products, and compositions of smooth coordinate functions are smooth.

[F7] [[def-smooth-vector-field-as-a-tangent-bundle-section]]: a smooth vector field is a smooth section of the tangent bundle.

[A1] The tangent-bundle smooth-structure convention uses only countable choice $\mathrm{AC}_\omega$ as recorded in [[def-countable-choice]].

## Proof

1.1 Since $0<\sqrt{M^2-a^2}\le M$, with equality in the upper bound exactly when $a=0$, one has $0\le r_-<r_+$ and $r_-=0$ exactly when $a=0$. Thus $\Delta=(r-r_+)(r-r_-)>0$ for $r>r_+$. Also $\Sigma\ge r^2>0$, $A:=r^2+a^2>0$, and $q=\gamma(\xi,\xi)\ge0$. The global formula in [F1] is a smooth symmetric tensor because its sphere tensors and scalar functions are smooth, its denominators are nonzero, and its finite sums and products are smooth by [F6]. The stated formula for $N$ is smooth: repeated use of [F5] makes $x\mapsto x^{-1}$ smooth on $(0,\infty)$, [F6] composes this with $\Sigma\Delta$, and $T,\Phi$ are smooth by [F1]; hence $N$ is a smooth vector field in the sense of [F7]. [given, F1, F5, F6, F7, A1, algebra]

2.1 On a polar chart put $q=\sin^2\theta$. The one-forms $e^0=\sqrt{\Delta/\Sigma}(dt-aq\,d\phi)$, $e^1=\sqrt{\Sigma/\Delta}\,dr$, $e^2=\sqrt{\Sigma}\,d\theta$, and $e^3=\sin\theta\,\Sigma^{-1/2}(A\,d\phi-a\,dt)$ are smooth: repeated application of [F5] gives every derivative of the positive powers $x^{1/2}$ and $x^{-1/2}$ on $(0,\infty)$, and [F6] gives smoothness after composition with the positive smooth functions $\Delta,\Sigma$. The determinant of the coefficient matrix of $(e^0,e^3)$ relative to $(dt,d\phi)$ is $\sqrt{\Delta}\sin\theta$, which is nonzero when $0<\theta<\pi$. Expanding the global formula of [F1] gives $g=-(e^0)^2+(e^1)^2+(e^2)^2+(e^3)^2$; hence $g$ has signature $(-,+,+,+)$ at every point off the axis. [F1, F5, step 1.1, algebra]

2.2 At either axis point $\xi^\flat=0$, $\Sigma=A$, and the global expression in [F1] restricts to $g=-(\Delta/A)\,dt^2+(A/\Delta)\,dr^2+A\gamma$ on the tangent directions there. The first coefficient is negative and the radial and sphere terms are positive because $A,\Delta>0$ and $\gamma$ is positive definite. Thus $g$ is nondegenerate with the same signature at the axes. The global definition in [F1] already gives smoothness there, so this proves the asserted signature on all of $\mathcal M_{\mathrm K}$. [F1, step 1.1, algebra]

3.1 Put $D:=A^2-a^2\Delta q$. Since $\Delta=A-2Mr$, $0<\Delta<A$ and $0\le q\le1$, one has $D\ge A^2-a^2\Delta\ge A^2-a^2A=Ar^2>0$. Off the axis, direct contraction of the covariant metric in [F1] with the specified vector $N$ gives $g(N,T)=-1$, $g(N,\Phi)=0$, and $g(N,\partial_r)=g(N,\partial_\theta)=0$; hence $g(N,\cdot)=-dt$ there. At an axis point $q=0$, $\Phi=0$, and $\Sigma=A$, so $N=(A/\Delta)T$ and the metric of step 2.2 gives the same identity on all tangent directions. Thus everywhere $g(N,N)=-dt(N)=-D/(\Sigma\Delta)<0$. Step 1.1 and [F4] now make $(\mathcal M_{\mathrm K},g,N)$ a smooth time-oriented Lorentzian four-manifold. Only at this point apply [F2]: nondegeneracy and $g(N,\cdot)=-dt$ identify $N=-\sharp_g(dt)$; [F3] supplies the smooth inverse metric in its stated scope. [F1, F2, F3, F4, step 1.1, step 2.1, step 2.2, algebra] ∎


## Remarks

The proof uses the orthonormal coframe only away from the rotation axis; the global round-sphere expression in the definition supplies the regular tensor there. No field equation is used.
