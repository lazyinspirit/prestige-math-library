---
id: thm-nrqmx-berry-projector-curvature
kind: theorem
domain: mathematics
library: mathematics
title: Projector curvature and frame covariance
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-nrqmx-smooth-projector-bundle
  - lem-nrqmx-projector-bundle-kato-well-definedness
  - def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative
  - def-wedge-product-of-differential-forms
dependency_roles:
  def-nrqmx-smooth-projector-bundle: mathematical-premise
  lem-nrqmx-projector-bundle-kato-well-definedness: mathematical-premise
  def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
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

Let $M$, $d$, and $P$ satisfy [[def-nrqmx-smooth-projector-bundle]], with constant rank $r$. Write $U(r)=\{g\in\mathbb C^{r\times r}:g^*g=gg^*=I_r\}$ for the unitary group. The curvature of the projected connection $\nabla=P\,d$, as an endomorphism-valued two-form on $\mathbb C^d$, is
$$F=P(dP\wedge dP)P.$$
For any local $C^2$ orthonormal frame $V:U\to\mathbb C^{d\times r}$ with $V^*V=I_r$ and $P=VV^*$, its connection matrix $A=V^*dV$ is anti-Hermitian and its curvature matrix is $F_{\mathrm{fr}}=dA+A\wedge A=V^*FV$. If $V'=Vg$ for a $C^2$ map $g:U\to U(r)$, then $A'=g^{-1}Ag+g^{-1}dg$ and $F'_{\mathrm{fr}}=g^{-1}F_{\mathrm{fr}}g$. Along every $C^2$ path, Kato transport is unitary and intertwines the endpoint projectors.

## Facts & Assumptions

**Given:** A finite-dimensional smooth manifold $M$, a $C^2$ constant-rank orthogonal projection family $P$, a local orthonormal frame $V$ for its range, and a $C^2$ path in $M$.

[F1] [[def-nrqmx-smooth-projector-bundle]]: $E_{P,x}=\operatorname{ran}P(x)$, $\nabla s=P\,ds$, and $K=[P',P]$ along a path.

[F2] [[lem-nrqmx-projector-bundle-kato-well-definedness]]: the Kato equation has a unique unitary solution and $P(t)W(t)=W(t)P(0)$.

[F3] [[def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative]]: for finite-dimensional vector-valued forms, $d$ is applied componentwise. In this proof, for matrix-valued one-forms $\alpha,\beta$, define $(\alpha\wedge\beta)(X,Y)=\alpha(X)\beta(Y)-\alpha(Y)\beta(X)$ using matrix multiplication.

[F4] [[def-wedge-product-of-differential-forms]]: the scalar wedge product is the pointwise alternating product of covectors; the displayed matrix-valued formula uses that alternating convention with ordered matrix products.

## Proof

1.1 Differentiate $P^2=P$ in a tangent direction $X$ to obtain $(dP)(X)P+P(dP)(X)=(dP)(X)$. Multiplying on both sides by $P$ gives $P(dP)(X)P=0$. For a $C^1$ section $s$ with $Ps=s$, the curvature is $\nabla^2s(X,Y)=P(dP(X)\,ds(Y)-dP(Y)\,ds(X))$. Substituting $ds(X)=dP(X)s+P\,ds(X)$ and using $P(dP)P=0$ leaves $P(dP(X)dP(Y)-dP(Y)dP(X))Ps$. This is $P(dP\wedge dP)P\,s$, proving the projector formula. [given, F1, F3, F4, algebra]

2.1 In a local frame write a section as $s=Va$. Then $\nabla(Va)=P\,d(Va)=V(V^*dV\,a+da)=V(da+A a)$, where $A=V^*dV$. Differentiating $V^*V=I_r$ gives $(dV)^*V+V^*dV=0$, so $A^*=-A$. Applying $d+A$ twice gives $dA+A\wedge A$; expressing the already computed curvature in this frame gives $F_{\mathrm{fr}}=V^*FV=dA+A\wedge A$. [F1, F3, F4, step 1.1, algebra]

3.1 For $V'=Vg$, direct differentiation gives $A'=V'^*dV'=g^{-1}Ag+g^{-1}dg$, since $g^*=g^{-1}$. The frame-coordinate covariant derivative changes from $d+A$ to $g^{-1}(d+A)g$ on coefficient sections. Squaring this identity gives $dA'+A'\wedge A'=g^{-1}(dA+A\wedge A)g$, which is the claimed curvature covariance. [F3, F4, step 2.1, algebra]

4.1 For a path the definitions give $W'=[P',P]W$; [F2] proves that its unique solution is unitary and satisfies $P(t)W(t)=W(t)P(0)$. This is projector parallel transport and uses no Schrödinger evolution. [F1, F2, given] ∎

## Remarks

Here $\Gamma^2(E_P|_U)$ denotes the $C^2$ sections, and $\Omega^1_{C^1}(U;E_P)$ the $C^1$ one-forms with values in the fibers; the lower spaces use the same regularity. The map $\Psi_V$ applies $V^*$ to the fiber coordinate. The local-frame equation $\Psi_V(\nabla s)=(d+A)\Psi_V(s)$ is summarized by this commutative diagram. Step 2.1 proves the identity; the diagram records the coordinate change and is not used as a proof.

\begin{tikzcd}
\Gamma^2(E_P|_U) \arrow[r,"\nabla"] \arrow[d,"\Psi_V"'] & \Omega^1_{C^1}(U;E_P) \arrow[d,"\Psi_V"] \\
C^2(U,\mathbb C^r) \arrow[r,"d+A"] & \Omega^1_{C^1}(U;\mathbb C^r)
\end{tikzcd}

