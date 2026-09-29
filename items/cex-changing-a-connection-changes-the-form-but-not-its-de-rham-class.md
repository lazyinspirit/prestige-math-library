---
id: cex-changing-a-connection-changes-the-form-but-not-its-de-rham-class
kind: counterexample
title: Connections can change a representative without changing its class
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-complex-linear-and-compatible-bundle-connections
  - def-chern-pontryagin-and-euler-characteristic-forms
  - def-de-rham-cohomology
  - thm-curvature-two-form-structure-equation
  - lem-transgression-between-two-connections-is-exact
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Stefan Haller, The Atiyah–Singer Index Theorem, Vienna lecture notes (2013)
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: "§II.4.5 Example II.4.5, printed p. 91 / PDF p. 90: first-Chern normalization for a line bundle; the particular connection pair and primitive are calculated here"
---

## Statement

On the trivial complex line $E=\mathbb R^2\times\mathbb C$ over $\mathbb R^2$
with coordinates $x,y$, use the standard Hermitian metric and compare
$\nabla_0=d$ with $\nabla_1=d+i x\,dy$. Their curvature forms are
$\Omega_0=0$ and $\Omega_1=i\,dx\wedge dy$. For a line bundle,
$c_1(\nabla)=-\Omega/(2\pi i)$, so the Chern forms are
$$c_1(\nabla_0)=0,\qquad c_1(\nabla_1)=-\frac{dx\wedge dy}{2\pi}.$$
They are unequal, but
$$c_1(\nabla_1)-c_1(\nabla_0)=d\!\left(-\frac{x\,dy}{2\pi}\right),$$
so they define the same de Rham class. Both connections are Hermitian for the
standard metric.

## Facts & Assumptions

**Given:** The product line $\mathbb R^2\times\mathbb C$, its standard Hermitian metric $h(z,w)=z\overline{w}$, and the two displayed connection operators.

[F1] For a line bundle, the degree-one determinant coefficient is $c_1(\nabla)=-\Omega/(2\pi i)$ ([[def-chern-pontryagin-and-euler-characteristic-forms]]).

[F2] In a local frame, curvature satisfies $\Omega=d\omega+\omega\wedge\omega$ ([[thm-curvature-two-form-structure-equation]]).

[F3] A connection is Hermitian-compatible when it satisfies the metric derivative identity $Xh(s,t)=h(\nabla_Xs,t)+h(s,\nabla_Xt)$ ([[def-complex-linear-and-compatible-bundle-connections]]).

[F4] For degree one, the transgression is the invariant polynomial applied to $A=\nabla_1-\nabla_0$, and its exterior derivative is the difference of the endpoint curvature evaluations ([[lem-transgression-between-two-connections-is-exact]]).

[F5] Two closed two-forms define the same real de Rham class precisely when their difference is exact ([[def-de-rham-cohomology]]).

[F6] The product bundle with fibre $\mathbb C\cong\mathbb R^2$, regarded as a real vector space, is a smooth trivial real rank-two bundle ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[F7] Chern forms obtained by curvature evaluation are closed ([[def-chern-pontryagin-and-euler-characteristic-forms]]).

## Proof

1.1 By [F6], $E=\mathbb R^2\times\mathbb C$ is the product line; give its fibres the standard complex structure and $h(z,w)=z\overline w$. In the global frame, write $\nabla_a s=ds+a s$, where $a_0=0$ and $a_1=i x\,dy$. Each operator is complex-linear and satisfies $\nabla_a(fs)=df\,s+f\nabla_a s$, so it is a connection. For either $a$, $h(\nabla_{a,X}s,t)+h(s,\nabla_{a,X}t)=X(s\overline{t})+(a(X)+\overline{a(X)})s\overline{t}$. Here $a_0=0$ and $\overline{a_1}=-a_1$, so this equals $Xh(s,t)$; both connections are Hermitian for the stated metric, with the compatibility convention of [F3]. [F3, F6, given, algebra]

1.2 The structure equation [F2] gives $\Omega_0=0$. For $a_1=i x\,dy$, $d a_1=i\,dx\wedge dy$ and $a_1\wedge a_1=-x^2\,dy\wedge dy=0$, so $\Omega_1=i\,dx\wedge dy$. [F2, given, algebra]

2.1 Expanding the degree-one term of the determinant in the Chern-form definition [F1] gives $c_1=-\Omega/(2\pi i)$ for this rank-one bundle. Consequently $c_1(\nabla_0)=0$ and $c_1(\nabla_1)=-dx\wedge dy/(2\pi)$. The latter is nonzero, since its value on $(\partial_x,\partial_y)$ is $-1/(2\pi)$; hence the representative forms are not equal. [F1, F7, step 1.2, algebra]

3.1 Put $\eta=-x\,dy/(2\pi)$. Direct differentiation gives $d\eta=-dx\wedge dy/(2\pi)=c_1(\nabla_1)-c_1(\nabla_0)$. This is also the degree-one transgression in [F4]: its polynomial is $P_1(B)=-B/(2\pi i)$ and $A=i x\,dy$, so $T_{P_1}(\nabla_0,\nabla_1)=P_1(A)=\eta$. Thus the endpoint forms are unequal while [F5] identifies their de Rham classes; [F7] ensures these closed forms represent classes. The example uses only the displayed product bundle and connections; it requires no choice axiom. [F1, F4, F5, F7, step 1.2, step 2.1, given, algebra] $\square$
