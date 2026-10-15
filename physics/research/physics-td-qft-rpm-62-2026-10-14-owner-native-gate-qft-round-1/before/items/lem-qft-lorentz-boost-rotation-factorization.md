---
id: lem-qft-lorentz-boost-rotation-factorization
kind: lemma
title: Proper Lorentz maps factor into a boost and a rotation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-sr-affine-minkowski-model
  - def-inertial-frame-and-inertial-chart
  - def-lorentz-map-and-lorentz-group
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - cor-exponential-reciprocal-and-positivity
  - def-cross-product-in-r3
  - def-determinant-of-a-linear-operator
  - def-hyperbolic-functions
  - thm-hyperbolic-identities-and-derivatives
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-intermediate-value
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-determinant-of-a-linear-operator: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
  thm-intermediate-value: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 4, Lorentz group generators
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page author-hosted notes; Chapter 4 §§4.1–4.2, Lorentz generators, rotations and boosts.
    - title: Niklas Beisert, Quantum Field Theory I, ETH Zürich HS12 lecture notes
      url: https://edu.itp.phys.ethz.ch/hs12/qft1/QFT1HS12Notes.pdf
      locator: Complete 162-page course notes; Chapter 5 §5.2, spinor transformations under the proper orthochronous Lorentz group.
---

## Statement

Fix an inertial frame of [[def-inertial-frame-and-inertial-chart]] and identify its vector coordinates with $\mathbb R^4$ and $\eta_0=\operatorname{diag}(-1,1,1,1)$. For a unit spatial vector $\mathbf n_B$ and $\chi\in\mathbb R$, define the boost $B_{\mathbf n_B}(\chi)$ by $B e_0=\cosh\chi\,e_0+\sinh\chi\,\mathbf n_B$, $B\mathbf n_B=\sinh\chi\,e_0+\cosh\chi\,\mathbf n_B$, and $Bw=w$ for every $w$ Euclidean-orthogonal to $\operatorname{span}(e_0,\mathbf n_B)$. Every proper orthochronous linear Lorentz map $\Lambda\in SO^+(1,3)$, as defined in [[def-lorentz-map-and-lorentz-group]], admits $\Lambda=B_{\mathbf n_B}(\chi)R_{\mathbf n_R}(\theta)$, where $R_{\mathbf n_R}(\theta)$ fixes the time axis and $\mathbf n_R$, and sends $\mathbf v_\perp$ to $\cos\theta\,\mathbf v_\perp+\sin\theta\,\mathbf n_R\times\mathbf v_\perp$ on the orthogonal plane, where $\mathbf v_\parallel=(\mathbf v\cdot\mathbf n_R)\mathbf n_R$ and $\mathbf v_\perp=\mathbf v-\mathbf v_\parallel$; the cross product is [[def-cross-product-in-r3]]. If $\Lambda e_0=e_0$, choose $\chi=0$ and $R_{\mathbf n_R}(\theta)=\Lambda$.

## Facts & Assumptions

**Given:** The oriented time-oriented affine Minkowski model, the inertial orthonormal frame, and the proper orthochronous Lorentz group.

[F1] The metric in the selected inertial basis is $\eta_0=\operatorname{diag}(-1,1,1,1)$, and the first basis vector $e_0$ is future unit timelike. [[def-sr-affine-minkowski-model]] [[def-inertial-frame-and-inertial-chart]]

[F2] A proper orthochronous Lorentz map preserves $\eta_0$, has determinant $+1$, and preserves the chosen future timelike component. [[def-lorentz-map-and-lorentz-group]]

[F3] The hyperbolic functions satisfy $\cosh^2\chi-\sinh^2\chi=1$, $\cosh$ is strictly increasing and onto $[1,\infty)$ on $[0,\infty)$, and $\sinh$ is odd and strictly increasing; the intermediate value theorem applies to real polynomials. [[def-hyperbolic-functions]] [[thm-hyperbolic-identities-and-derivatives]] [[thm-intermediate-value]]

[F4] Every point $(a,b)$ with $a^2+b^2=1$ has the form $(\cos\theta,\sin\theta)$ for some real $\theta$. [[thm-sine-and-cosine-parametrize-the-unit-circle]]

[F5] Cauchy--Schwarz gives $|\mathbf v\cdot\mathbf n_B|\le|\mathbf v|$ for unit $\mathbf n_B$. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[F6] From the definitions, $\cosh\chi-\sinh\chi=\exp(-\chi)>0$. [[def-hyperbolic-functions]] [[cor-exponential-reciprocal-and-positivity]]

## Proof



1.1 Let $u=\Lambda e_0=(u^0,\mathbf u)$. By [F1]–[F2], $u^0>0$ and $-(u^0)^2+|\mathbf u|^2=-1$, so $u^0=\sqrt{1+|\mathbf u|^2}$. If $\mathbf u=0$, then $u=e_0$ and we take $B=I$. Otherwise $\mathbf n_B=\mathbf u/|\mathbf u|$ is a unit vector and $u^0>1$. By the range and strict increase in [F3], there is a unique $\chi>0$ with $\cosh\chi=u^0$; then $\sinh\chi>0$ and $\sinh^2\chi=(u^0)^2-1=|\mathbf u|^2$, so $\sinh\chi=|\mathbf u|$. Define $B_{\mathbf n_B}(\chi)$ by the block $\begin{pmatrix}\cosh\chi&\sinh\chi\\\sinh\chi&\cosh\chi\end{pmatrix}$ on $\operatorname{span}(e_0,\mathbf n_B)$ and the identity on its Euclidean orthogonal complement. The hyperbolic identity in [F3] verifies metric preservation and the block determinant is $1$. For a future timelike $v=(v^0,\mathbf v)$, the signature gives $v^0>|\mathbf v|$, and [F5] gives $|\mathbf v\cdot\mathbf n_B|\le|\mathbf v|$. Hence $v'^{0}=\cosh\chi\,v^0+\sinh\chi(\mathbf v\cdot\mathbf n_B)\ge(\cosh\chi-\sinh\chi)v^0>0$ by [F6]. Thus $B\in SO^+(1,3)$ and $Be_0=u$. [F1, F2, F3, F5, F6, given, construct]

2.1 Set $R=B^{-1}\Lambda$. It is proper orthochronous and $Re_0=e_0$. If $v$ is spatial, then $\eta_0(Rv,e_0)=\eta_0(Rv,Re_0)=\eta_0(v,e_0)=0$, so $R$ preserves the spatial orthogonal complement. Its restriction $Q$ there is an orthogonal $3\times3$ matrix with determinant $+1$ because $\det R=1$ and its time block is $1$. Hence $Q\in SO(3)$. [F1, F2, step 1.1, algebra]

3.1 The real cubic $p(\lambda)=\det(\lambda I_3-Q)$ has opposite signs for sufficiently large positive and negative $\lambda$, since its leading term is $\lambda^3$. The intermediate value theorem [F3] gives a real eigenvalue $\lambda$. Orthogonality implies $|\lambda|=1$, so $\lambda=\pm1$. If $-1$ is the only real eigenvalue and the other two eigenvalues are nonreal, they are a conjugate pair whose product is positive; then $\det Q=-1$, contrary to $\det Q=1$. If all eigenvalues are real, their product $1$ means the number of $-1$ eigenvalues is even, so at least one eigenvalue is $+1$. Thus $Q$ has a unit fixed vector $\mathbf n_R$. On its orthogonal plane, $Q$ is an orientation-preserving orthogonal map, hence has matrix $\begin{pmatrix}a&-b\\b&a\end{pmatrix}$ in a positive orthonormal basis, with $a^2+b^2=1$. By [F4] there is $\theta$ with $a=\cos\theta$, $b=\sin\theta$. Therefore $Q$ is the rotation $R_{\mathbf n_R}(\theta)$ about $\mathbf n_R$. [F2, F3, F4, step 2.1, algebra]

4.1 The spatial restriction of $R$ is the rotation from step 3.1, so $R=R_{\mathbf n_R}(\theta)$ on all of $\mathbb R^4$ because $Re_0=e_0$. Since $\Lambda=BR$, this is the required boost-rotation factorization. [step 1.1, step 2.1, step 3.1, algebra] ∎
