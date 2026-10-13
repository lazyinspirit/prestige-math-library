---
id: lem-cm-euler-angle-angular-velocity
kind: lemma
title: "Angular velocity in Euler angles: $\\omega_3=\\psi'+\\varphi'\\cos\\theta$ and $\\omega_1^2+\\omega_2^2=\\theta'^2+\\varphi'^2\\sin^2\\theta$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-cm-euler-angle-parametrization-and-heavy-top-system, lem-cm-coordinate-rotation-matrices, lem-cm-skew-matrix-cross-product-correspondence, lem-cm-matrix-curve-derivative-rules, def-cm-rigid-placement-and-body-angular-velocity, thm-cm-rigid-kinetic-energy-and-angular-momentum, def-matrix-product-and-identity-matrix, def-euclidean-inner-product, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, def-derivative, def-interval]
dependency_roles:
  def-cm-euler-angle-parametrization-and-heavy-top-system: mathematical-premise
  lem-cm-coordinate-rotation-matrices: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  lem-cm-matrix-curve-derivative-rules: mathematical-premise
  def-cm-rigid-placement-and-body-angular-velocity: mathematical-premise
  thm-cm-rigid-kinetic-energy-and-angular-momentum: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.5.2, Eqs. (3.55)-(3.58), printed pp. 64-65: angular velocity in terms of Euler angles, with $\\omega_3=\\dot\\psi+\\dot\\varphi\\cos\\theta$ and the squared transverse component"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §4.5, Eq. (4.74): principal-axis components of the instantaneous angular velocity in Euler angles"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §2.7 (Euler Angles) and §2.10, Eq. (2.86): the kinetic energy $\\tfrac12A(\\dot\\theta^2+\\dot\\varphi^2\\sin^2\\theta)+\\tfrac12C(\\dot\\psi+\\dot\\varphi\\cos\\theta)^2$"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Statement

Let $J\subseteq\mathbb R$ be an interval with at least two points, let $\varphi,\theta,\psi:J\to\mathbb R$ be differentiable with $\theta(J)\subseteq(0,\pi)$, and put
$$R(t):=\Theta\bigl(\varphi(t),\theta(t),\psi(t)\bigr)=R_z(\varphi(t))\,R_y(\theta(t))\,R_z(\psi(t)),$$
the Euler-angle parametrization of [[def-cm-euler-angle-parametrization-and-heavy-top-system]]. Then $R$ is a differentiable $SO(3)$-valued curve, and its **body angular velocity** $\omega:J\to\mathbb R^3$ in the sense of [[def-cm-rigid-placement-and-body-angular-velocity]] (the unique vector with $R(t)^{\mathsf T}R'(t)=[\omega(t)]_\times$) is, in the standard basis,
$$\omega=\bigl(-\varphi'\sin\theta\cos\psi+\theta'\sin\psi\bigr)e_1+\bigl(\varphi'\sin\theta\sin\psi+\theta'\cos\psi\bigr)e_2+\bigl(\psi'+\varphi'\cos\theta\bigr)e_3,$$
all functions evaluated at $t$. Consequently
$$\omega_3=\psi'+\varphi'\cos\theta,\qquad \omega_1^2+\omega_2^2=\theta'^2+\varphi'^2\sin^2\theta,\qquad \lVert\omega\rVert_2^2=\theta'^2+\varphi'^2\sin^2\theta+\bigl(\psi'+\varphi'\cos\theta\bigr)^2.$$
Moreover, if $A,C>0$ and $I:\mathbb R^3\to\mathbb R^3$ is the linear map with $Ie_1=Ae_1$, $Ie_2=Ae_2$, $Ie_3=Ce_3$, then $\omega^{\mathsf T}I\omega=A\bigl(\theta'^2+\varphi'^2\sin^2\theta\bigr)+C\bigl(\psi'+\varphi'\cos\theta\bigr)^2$.

## Facts & Assumptions

**Given:** Differentiable $\varphi,\theta,\psi:J\to\mathbb R$ with $\theta\in(0,\pi)$, the curve $R=R_z(\varphi)R_y(\theta)R_z(\psi)$, and the matrices $R_z,R_y$ of [[lem-cm-coordinate-rotation-matrices]].

[L1] $R_z(a),R_y(a)\in SO(3)$ for all $a$, $R_z(a)R_z(b)=R_z(a+b)$, $R_y(a)R_y(b)=R_y(a+b)$, and for differentiable $a$ one has $(R_z\circ a)'=a'R_z(a)[e_3]_\times=a'[e_3]_\times R_z(a)$ and $(R_y\circ a)'=a'R_y(a)[e_2]_\times=a'[e_2]_\times R_y(a)$ [[lem-cm-coordinate-rotation-matrices]].

[L2] The product rule for matrix-valued curves, the skewness of $R^{\mathsf T}R'$ for an $SO(3)$-valued curve, and the equivalence $R^{\mathsf T}R'=[\omega]_\times\Leftrightarrow R'=R[\omega]_\times$ hold; moreover $[\omega]_\times z=\omega\times z$ and $R^{\mathsf T}[u]_\times R=[R^{\mathsf T}u]_\times$ [[lem-cm-matrix-curve-derivative-rules]], [[lem-cm-skew-matrix-cross-product-correspondence]], [[def-cm-rigid-placement-and-body-angular-velocity]].

[L3] For $R\in SO(3)$, $R^{\mathsf T}R=I_3$; the matrices $e_1e_1^{\mathsf T}+e_2e_2^{\mathsf T}+e_3e_3^{\mathsf T}=I_3$, $[e_3]_\times e_3=0$ and $[e_2]_\times e_2=0$ [[lem-cm-skew-matrix-cross-product-correspondence]], [[def-matrix-product-and-identity-matrix]].

[L4] $(\sin\circ a)'=\cos(a)\,a'$ and $(\cos\circ a)'=-\sin(a)\,a'$; the algebra of derivatives holds [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-sine-and-cosine-by-power-series]]. For the identity used below, [L1] gives $R_z(\psi)\in SO(3)$, hence $R_z(\psi)^{\mathsf T}R_z(\psi)=I_3$ by [L3]. Its first column is $(\cos\psi,\sin\psi,0)$, so the first diagonal entry of this product is $\cos^2\psi+\sin^2\psi=1$ by the matrix-product formula [[lem-cm-coordinate-rotation-matrices]], [[def-matrix-product-and-identity-matrix]].

[L5] Evaluation of $R_z(a)e_3=e_3$, $R_z(a)e_1=\cos a\,e_1+\sin a\,e_2$, $R_z(a)e_2=-\sin a\,e_1+\cos a\,e_2$ and $R_y(a)e_1=\cos a\,e_1-\sin a\,e_3$, $R_y(a)e_3=\sin a\,e_1+\cos a\,e_3$ is the column reading of the displayed matrices [[lem-cm-coordinate-rotation-matrices]].

## Proof

**Proof technique:** direct.

1.1 By [L1] each of the three factors is a differentiable $SO(3)$-valued curve; by the product rule [L2] and closure of $SO(3)$ under multiplication, $R$ is differentiable with values in $SO(3)$. Hence $R^{\mathsf T}R'$ is skew and there is a unique $\omega$ with $R^{\mathsf T}R'=[\omega]_\times$ by [L2]. [given, L1, L2]

1.2 By the conjugation identity $S^{\mathsf T}[u]_\times S=[S^{\mathsf T}u]_\times$ of [L2] with $S=R_y(\theta)$ and $S=R_z(\psi)$, and the column readings of [L5], $$R_y(\theta)^{\mathsf T}[e_3]_\times R_y(\theta)=[R_y(\theta)^{\mathsf T}e_3]_\times=[-\sin\theta\,e_1+\cos\theta\,e_3]_\times,\qquad R_z(\psi)^{\mathsf T}[e_2]_\times R_z(\psi)=[\sin\psi\,e_1+\cos\psi\,e_2]_\times.$$ [given, L2, L5, algebra]

2.1 Differentiating the product and applying [L1], $$\dot R=\varphi'\,R_z(\varphi)[e_3]_\times R_y(\theta)R_z(\psi)+\theta'\,R_z(\varphi)R_y(\theta)[e_2]_\times R_z(\psi)+\psi'\,R_z(\varphi)R_y(\theta)R_z(\psi)[e_3]_\times.$$ [step 1.1, given, L1, L2, algebra]

3.1 Multiplying on the left by $R^{\mathsf T}=R_z(\psi)^{\mathsf T}R_y(\theta)^{\mathsf T}R_z(\varphi)^{\mathsf T}$ and using $R_z(\varphi)^{\mathsf T}R_z(\varphi)=I_3$ [L3] term by term, $$R^{\mathsf T}\dot R=\varphi'\,R_z(\psi)^{\mathsf T}R_y(\theta)^{\mathsf T}[e_3]_\times R_y(\theta)R_z(\psi)+\theta'\,R_z(\psi)^{\mathsf T}[e_2]_\times R_z(\psi)+\psi'\,[e_3]_\times.$$ [step 2.1, given, L2, L3, algebra]

4.1 Conjugating the first vector of step 1.2 by $R_z(\psi)^{\mathsf T}$ and using [L5], $R_z(\psi)^{\mathsf T}\bigl(-\sin\theta\,e_1+\cos\theta\,e_3\bigr)=-\sin\theta\cos\psi\,e_1+\sin\theta\sin\psi\,e_2+\cos\theta\,e_3$; substituting into step 3.1 gives $R^{\mathsf T}\dot R=[\omega]_\times$ with $\omega$ exactly as displayed in the statement. [step 3.1, 1.2, given, L2, L5, algebra]

5.1 Reading off the components gives $\omega_3=\psi'+\varphi'\cos\theta$; expanding the squares of the first two components and using $\sin^2\psi+\cos^2\psi=1$ from [L4] cancels the mixed terms and gives $\omega_1^2+\omega_2^2=\varphi'^2\sin^2\theta+\theta'^2$, whence $\lVert\omega\rVert_2^2=\theta'^2+\varphi'^2\sin^2\theta+(\psi'+\varphi'\cos\theta)^2$. [step 4.1, given, L4, algebra]

6.1 For the diagonal map $I$ with $Ie_1=Ae_1$, $Ie_2=Ae_2$, $Ie_3=Ce_3$, the quadratic form is $\omega^{\mathsf T}I\omega=A(\omega_1^2+\omega_2^2)+C\omega_3^2$, and substituting step 5.1 gives the displayed identity. [step 4.1, 5.1, given, L3, algebra] ∎

## Remarks

- **Relation to the kinetic energy.** Combined with clause 2 of [[thm-cm-rigid-kinetic-energy-and-angular-momentum]], the last identity says that a rigid placement with principal moments $(A,A,C)$ has rotational kinetic energy $\tfrac12A(\theta'^2+\varphi'^2\sin^2\theta)+\tfrac12C(\psi'+\varphi'\cos\theta)^2$, which is the kinetic part of the heavy-top function of [[def-cm-euler-angle-parametrization-and-heavy-top-system]]. No statement about a physical top is made by that comparison; it is the consuming physical items that identify the parameters.
