---
id: lem-nrqmx-c2-projector-chern-integrality
kind: lemma
domain: mathematics
library: mathematics
title: C2 projector curvature has integral Chern number
status: draft
origin: pipeline
dependency_level: 3
deps:
  - def-smooth-manifold
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-axiom-of-choice
  - def-countable-choice
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-nrqmx-smooth-projector-bundle
  - thm-nrqmx-berry-projector-curvature
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-cauchy-integral-formula-circle
  - def-chern-classes-from-the-projective-bundle-relation
  - lem-first-chern-form-agrees-with-the-topological-line-class
  - thm-de-rham-theorem
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-kronecker-evaluation-pairing
  - def-de-rham-integration-cochain-map
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  def-nrqmx-smooth-projector-bundle: mathematical-premise
  thm-nrqmx-berry-projector-curvature: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  thm-cauchy-integral-formula-circle: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  lem-first-chern-form-agrees-with-the-topological-line-class: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  def-fundamental-class-of-a-compact-oriented-manifold: mathematical-premise
  def-kronecker-evaluation-pairing: mathematical-premise
  def-de-rham-integration-cochain-map: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
    - title: J. E. Avron, R. Seiler, and L. G. Yaffe, Adiabatic Theorems and Applications to the Quantum Hall Effect
      url: https://phsites.technion.ac.il/avron/wp-content/uploads/sites/3/2013/05/commun_math_phys_110_33-49_1987.pdf
---

## Statement

Assume the full Axiom of Choice. Let $\Sigma$ be a compact boundaryless oriented smooth surface, let $d\geq1$, and let $P:\Sigma\to\operatorname{End}(\mathbb C^d)$ be a $C^2$ family of rank-one orthogonal projections. Let $E_P\to\Sigma$ be the complex line bundle with fibers $\operatorname{ran}P(x)$, let $\nabla=P\,d$, and let $F=P(dP\wedge dP)P$ be the curvature of this projected connection. Then
$$\frac{i}{2\pi}\int_\Sigma\operatorname{tr}F=\langle c_1(E_P),[\Sigma]\rangle\in\mathbb Z.$$
Here $c_1(E_P)$ is the first integral Chern class of the underlying topological complex line bundle, and $[\Sigma]$ is the fundamental class for the stated orientation.

## Facts & Assumptions

**Given:** Full AC, a compact boundaryless oriented smooth surface $\Sigma$, and a $C^2$ rank-one orthogonal projector family $P$.

[A1] Full AC is the choice-function principle in [[def-axiom-of-choice]]. It implies Countable Choice [[def-countable-choice]], the hypothesis used by the smooth partition and de Rham suppliers.

[F1] [[def-smooth-manifold]] and [[def-c-r-and-smooth-maps-between-smooth-manifolds]]: $\Sigma$ has a finite-dimensional smooth atlas, and $C^2$ means that coordinate representatives have continuous derivatives through order two.

[F2] [[def-nrqmx-smooth-projector-bundle]] and [[thm-nrqmx-berry-projector-curvature]]: $E_P$ is the range bundle, $\nabla=P\,d$, and its curvature is $F=P(dP\wedge dP)P$.

[F3] [[thm-smooth-partitions-of-unity-exist-on-manifolds]]: under Countable Choice, a smooth partition of unity subordinate to an open cover of $\Sigma$ exists.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional complex Hermitian matrix has an orthonormal eigenbasis. [[thm-cauchy-integral-formula-circle]] gives the scalar circle integral of $(z-\lambda)^{-1}$ as $2\pi i$ for an interior $\lambda$ and zero for an exterior $\lambda$.

[F5] [[lem-first-chern-form-agrees-with-the-topological-line-class]]: under full AC, for a smooth Hermitian line bundle and Hermitian connection with curvature $\Omega$, $J_\Sigma[-\Omega/(2\pi i)]=\rho_\Sigma(c_1)$.

[F6] [[def-chern-classes-from-the-projective-bundle-relation]]: $c_1$ is invariant under complex bundle isomorphism and for a line is the integral first Chern class. [[def-fundamental-class-of-a-compact-oriented-manifold]] gives $[\Sigma]\in H_2(\Sigma;\mathbb Z)$, and [[def-kronecker-evaluation-pairing]] evaluates an integral cohomology class on it in $\mathbb Z$.

[F7] [[thm-de-rham-theorem]] and [[def-de-rham-integration-cochain-map]]: under Countable Choice, the de Rham isomorphism is induced by integration on smooth simplices, so evaluation of $J_\Sigma[\alpha]$ on the real fundamental class equals $\int_\Sigma\alpha$.

## Proof

1.1 Choose a finite coordinate-chart cover of the compact surface $\Sigma$ and a smooth partition $\{\phi_j\}_{j=1}^N$ subordinate to it by [F3]. In each chart, every matrix entry of $\phi_jP$ is a $C^2$ function supported compactly inside the coordinate domain; extend it by zero to $\mathbb R^2$. Start with $\rho(y)=c\exp(-1/(1-|y|^2))$ for $|y|<1$ and $\rho(y)=0$ otherwise, where $c>0$ normalizes its integral to one. The extension is smooth because every derivative at the boundary is a finite sum of terms bounded by $t^{-m}e^{-1/t}$ as $t\downarrow0$, and these tend to zero. Put $\rho_\epsilon(y)=\epsilon^{-2}\rho(y/\epsilon)$ and convolve each real and imaginary entry with it. For every multi-index $\alpha$ with $|\alpha|\leq2$, $\partial^\alpha(\rho_\epsilon*f)=\rho_\epsilon*(\partial^\alpha f)$ and
$$\|\rho_\epsilon*(\partial^\alpha f)-\partial^\alpha f\|_\infty\leq\sup_{|y|\leq\epsilon}\|\partial^\alpha f(\,\cdot-y)-\partial^\alpha f\|_\infty\longrightarrow0,$$
because each compactly supported derivative is uniformly continuous. For sufficiently small $\epsilon$, the convolved supports remain inside their charts. Summing the finitely many pulled-back approximants gives a smooth matrix field $Q_\epsilon\to P$ in $C^2$; replacing it by $(Q_\epsilon+Q_\epsilon^*)/2$ keeps it smooth Hermitian and preserves this convergence. [A1, F1, F3, construct, algebra]

1.2 Fix $\epsilon$ so $\delta:=\sup_\Sigma\|Q_\epsilon-P\|<1/4$. For each $x\in\Sigma$, define
$$R_\epsilon(x)=\frac1{2\pi i}\oint_{|z-1|=1/2}(zI-Q_\epsilon(x))^{-1}\,dz.$$
On this contour $\|(zI-P(x))^{-1}\|=2$, so the Neumann series shows $zI-Q_\epsilon(x)$ is invertible and its inverse has norm at most $4$. The finite-dimensional spectral theorem [F4] diagonalizes $Q_\epsilon(x)$; the scalar circle integral in [F4] then shows $R_\epsilon(x)$ is the orthogonal spectral projection onto eigenvalues inside the circle. The same contour is valid for $Q_t=P+t(Q_\epsilon-P)$ for every $t\in[0,1]$, so these projections vary continuously with $t$; their integer-valued ranks are constant and equal the rank one of $P$. The resolvent identity gives
$$\|R_\epsilon-P\|_\infty\leq\frac{1}{2\pi}\,\pi\,(4)\delta(2)=4\delta<1.$$
The contour integral also shows $R_\epsilon$ is smooth in $x$. [F4, construct, algebra]

2.1 The restriction $R_\epsilon(x)|_{\operatorname{ran}P(x)}$ is injective: if $R_\epsilon v=0$ and $P v=v$, then $\|v\|=\|(P-R_\epsilon)v\|\leq\|P-R_\epsilon\|\,\|v\|$, which forces $v=0$. Both ranges are one-dimensional, so these restrictions form a continuous complex line-bundle isomorphism $E_P\cong E_{R_\epsilon}$ and [F6] gives $c_1(E_P)=c_1(E_{R_\epsilon})$. In a local unit frame $u$ for $E_{R_\epsilon}$, its connection form is $A=u^*du$ and its scalar curvature is $dA$. The rank-one curvature matrix is $F_{R_\epsilon}=u(dA)u^*$, hence $\operatorname{tr}F_{R_\epsilon}=dA=\Omega_{\nabla_\epsilon}$. Applying [F5] to the smooth Hermitian line bundle $E_{R_\epsilon}$ and its projected Hermitian connection, then evaluating on $[\Sigma]$ using [F6] and [F7], gives
$$\frac{i}{2\pi}\int_\Sigma\operatorname{tr}F_{R_\epsilon}=\langle c_1(E_{R_\epsilon}),[\Sigma]\rangle=\langle c_1(E_P),[\Sigma]\rangle\in\mathbb Z.$$
[A1, F2, F5, F6, F7, step 1.2, algebra]

3.1 The contour formula for $R_\epsilon$ and its first two coordinate derivatives show $R_\epsilon\to P$ in $C^2$: differentiating $(zI-Q_\epsilon)^{-1}$ once gives $(zI-Q_\epsilon)^{-1}(dQ_\epsilon)(zI-Q_\epsilon)^{-1}$, and differentiating again gives a finite sum of products of bounded resolvents with first and second derivatives of $Q_\epsilon$. Thus $F_{R_\epsilon}=R_\epsilon(dR_\epsilon\wedge dR_\epsilon)R_\epsilon$ converges uniformly to $F_P$. Integration over compact $\Sigma$ is continuous under uniform convergence, while step 2.1 gives the same integer for every sufficiently small $\epsilon$. Taking the limit proves the stated equality for $P$. [F2, step 1.1, step 1.2, step 2.1, algebra] ∎

