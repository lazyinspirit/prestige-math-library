---
page: periods-jacobians-and-abel-jacobi-theory-examples
title: "Periods, Jacobians, and Abel--Jacobi Theory: Examples and Counterexamples"
status: draft
items:
  - ex-symplectic-homology-basis-of-a-genus-two-surface
  - ex-base-point-cancellation-for-degree-zero-divisors
  - ex-periods-of-a-complex-torus
  - ex-period-matrix-and-jacobian-of-the-pentagon-curve
  - ex-principal-divisor-tests-via-the-abel-jacobi-map
  - ex-abel-image-in-its-jacobian
examples: []
---

The examples instantiate the period theory on the two model surfaces and then test the Abel–Jacobi criterion concretely. On a complex torus $\mathbb C/\Lambda$ the invariant differential $dz$ is nowhere vanishing, its periods are the two generators of $\Lambda$, and the period lattice is $\Lambda$ itself; the Abel-Jacobi map identifies the torus with its own Jacobian, and the class of $(q)-(p)$ is the group difference $q-p$. The genus-two octagon carries an explicit symplectic basis whose intersection matrix is $\operatorname{diag}(J_2,J_2)$, showing the unimodular form of the one-polygon model in a second-genus case.

The pentagon curve $y^2=x^5-1$ exhibits complex multiplication. Its projective charts and explicit holomorphic primitives identify it with the translation double-pentagon. The two pentagon faces have one common vertex and five loop edges; their cellular boundaries give the integral relation $e_0+e_1+e_2+e_3+e_4=0$, so the first four rotation translates of $C=e_0$ are an integral homology basis. Its order-five automorphism has no invariant holomorphic differential, so the eigenvalues on $\Omega(X)$ are primitive fifth roots; after normalizing the periods on a generating cycle, the period lattice becomes $\mathbb Z[(\zeta,\zeta^2)]$ in $\mathbb C^2$. The four period vectors of $C,TC,T^2C,T^3C$ are shown to be real-linearly independent by a Vandermonde computation, so this period lattice is full and the Jacobian is the compact torus $\mathbb C^2/\Lambda$.

The remaining examples exercise the criterion that a degree-zero divisor is principal exactly when its Abel-Jacobi class vanishes. Changing the base point shifts every point class by the same constant, so degree-zero sums are base-point free while a single point may depend on the base point. In degree $d$, the shift is $d$ times that constant, so a torsion shift may cancel even when $d\ne0$. On the sphere every degree-zero divisor is principal; on a torus, $(q)-(p)$ is principal exactly when $q=p$, while the symmetric pair $(q)+(-q)-(p)-(-p)$ is the divisor of a quotient of Weierstrass $\wp$-functions and so has vanishing class. Finally the image $u(X)$ is a compact curve in its Jacobian which generates the torus as a group; for genus one it is the whole torus, and for the pentagon curve it is a curve in $\mathbb C^2/\Lambda$.
