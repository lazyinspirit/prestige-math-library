---
id: def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint
kind: definition
title: Conjugate Hilbert space and adjoint of an antilinear operator
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: null
deps:
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - thm-riesz-representation-for-hilbert-space
  - def-countable-choice
dependency_roles:
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "F. Hiai, Concise lectures on selected topics of von Neumann algebras"
      url: "https://arxiv.org/pdf/2004.02383"
      locator: "§2.1, PDF pp. 10–11, conjugate-linear Tomita operators and polar data"
    - title: "Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory"
      url: "https://arxiv.org/pdf/1803.04993"
      locator: "§3.1, printed p. 19 (PDF p. 20), equation (3.7); the inner-product convention is converted explicitly here"
---

## Definition

Assume Countable Choice. All inner products are linear in their first
argument. If $H$ is a complex Hilbert space, its **conjugate Hilbert space**
$\overline H$ consists of symbols $\overline x$ for $x\in H$, with
$\overline x+\overline y=\overline{x+y}$,
$a\,\overline x=\overline{\overline a\,x}$ for $a\in\mathbb C$, and
$$\langle\overline x,\overline y\rangle_{\overline H} :=\overline{\langle x,y\rangle_H}.$$
The canonical map $c_H:H\to\overline H$, $c_Hx=\overline x$, is a
conjugate-linear surjective isometry.

For complex Hilbert spaces $H_1,H_2$, a linear operator $A$ is a linear map
$A:D(A)\to H_2$ on a linear domain $D(A)\subseteq H_1$. Its graph is
$\Gamma(A)=\{(x,Ax):x\in D(A)\}\subseteq H_1\oplus H_2$, with the direct-sum
Hilbert norm. It is densely defined when $D(A)$ is dense in $H_1$, and closed
when $\Gamma(A)$ is closed.

For a densely defined linear operator $A:D(A)\subseteq H_1\to H_2$, define
$D(A^*)$ to consist of those $y\in H_2$ for which
$x\mapsto\langle Ax,y\rangle_{H_2}$ is bounded on $D(A)$ in the $H_1$ norm.
The bounded functional extends uniquely to $H_1$; its Riesz vector
$A^*y\in H_1$ is specified by
$$\langle Ax,y\rangle_{H_2}=\langle x,A^*y\rangle_{H_1} \qquad(x\in D(A)).$$
This defines the linear adjoint $A^*:D(A^*)\subseteq H_2\to H_1$.

An operator $S:D(S)\subseteq H\to H$ is **antilinear** when
$S(ax+by)=\overline a\,Sx+\overline b\,Sy$. Its associated linear operator
$\widetilde S:D(\widetilde S)\subseteq\overline H\to H$ is
$D(\widetilde S)=c_H(D(S))$ and
$\widetilde S(\overline x)=Sx$. For densely defined antilinear $S$, define
$$S^*:=c_H^{-1}\widetilde S^*,$$
on the domain $D(S^*)=D(\widetilde S^*)$. Thus $S^*$ is antilinear and
$$\langle Sx,y\rangle_H=\langle S^*y,x\rangle_H \qquad(x\in D(S),\ y\in D(S^*)).$$

## Definition references

[[def-hilbert-space]]

[[def-real-and-complex-inner-product-space]]

[[thm-riesz-representation-for-hilbert-space]]

[[def-countable-choice]]

## Remarks

The direct-sum inner product is
$\langle(x,u),(y,v)\rangle=\langle x,y\rangle_{H_1}+\langle u,v\rangle_{H_2}$.
It is complete because each summand is complete. The scalar and inner-product
rules above make $\overline H$ an inner-product space, and $c_H$ preserves
norms and is onto; consequently $\overline H$ is complete as well.

For fixed $y\in H_2$, the map $x\mapsto\langle Ax,y\rangle_{H_2}$ is linear.
Riesz representation on $H_1$ therefore gives the unique adjoint vector
whenever this map is bounded. Linearity and uniqueness show that $D(A^*)$ is
a linear subspace and $A^*$ is linear. For the antilinear convention, write
$\widetilde S^*y=\overline z$. Then
$$\langle Sx,y\rangle_H =\langle c_Hx,\widetilde S^*y\rangle_{\overline H} =\overline{\langle x,z\rangle_H} =\langle z,x\rangle_H,$$
so the displayed formula gives $S^*y=z$. The definition makes no claim that
$S$ is closable or that either adjoint domain is dense.

## Facts & Assumptions

**Given:** Countable Choice, complex Hilbert spaces, a densely defined linear
operator $A$, and a densely defined antilinear operator $S$.

[F1] The inner product is linear in its first argument and conjugate-linear in
its second; conjugating both scalar coefficients defines the complex
conjugate vector space ([[def-real-and-complex-inner-product-space]]).

[F2] Each bounded linear functional on a Hilbert space has a unique Riesz
representing vector ([[thm-riesz-representation-for-hilbert-space]]).

[F3] Countable Choice is the explicit standing choice assumption
([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** [F1]–[F3], the spaces and operators in the Definition.

1.1 The scalar rules for $\overline H$ follow from conjugation in the underlying scalar multiplication, and $\langle c_Hx,c_Hy\rangle_{\overline H}=\overline{\langle x,y\rangle_H}$. Thus $c_H$ preserves norms and is onto. A Cauchy sequence in $\overline H$ pulls back under $c_H$ to a Cauchy sequence in $H$, whose limit maps forward; so $\overline H$ is complete. [F1, algebra]

1.2 For fixed $y\in H_2$, the map $x\mapsto\langle Ax,y\rangle$ is linear. If it is bounded on the dense domain, continuity extends it uniquely to $H_1$, and [F2] gives a unique $A^*y$ with the displayed adjoint identity. Uniqueness and linearity of the form in $y$ show that $D(A^*)$ is a linear subspace and $A^*$ is linear there. [F1, F2, F3, given]

2.1 The domain $c_H(D(S))$ is a complex linear subspace because $D(S)$ is linear and $c_H$ is conjugate-linear. Additivity of $S$ makes $\widetilde S$ additive, and for $a\in\mathbb C$, $\widetilde S(a\overline x)=\widetilde S(\overline{\overline a x}) =S(\overline a x)=aSx$, so $\widetilde S$ is linear. Since $c_H^{-1}$ is conjugate-linear and $\widetilde S^*$ is linear, $S^*$ is antilinear on its declared domain. If $y\in D(\widetilde S^*)$ and $\widetilde S^*y=c_Hz$, then $$\langle Sx,y\rangle_H =\langle c_Hx,\widetilde S^*y\rangle_{\overline H} =\overline{\langle x,z\rangle_H} =\langle z,x\rangle_H =\langle c_H^{-1}\widetilde S^*y,x\rangle_H.$$ This proves the stated antilinear-adjoint identity with its exact domain. [F1, F2, step 1.1, algebra] ∎
