---
id: cex-sr-prescribed-stress-energy-need-not-be-conserved
kind: counterexample
title: "A prescribed covariant stress-energy tensor need not be conserved"
status: draft
origin: pipeline
domain: mathematics
deps: [def-sr-stress-energy-tensor-and-force-density, def-lorentz-form-and-inertia, def-ck-tensor-field-on-minkowski-space, def-directional-and-partial-derivatives, thm-algebra-of-derivatives, def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart, thm-sr-tensor-and-current-transformation, thm-continuous-partial-derivatives-imply-total-differentiability, thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]
dependency_roles:
  def-sr-stress-energy-tensor-and-force-density: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-zero-derivative-on-connected-open-euclidean-set-iff-constant: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
---

## Statement refuted

Every $C^1$ symmetric type-$(2,0)$ tensor field of the form $T^{ab}=F\eta^{ab}$, with $F$ a $C^1$ real function on a nonempty connected open chart domain $\Omega$ of the affine Minkowski model, is locally conserved on $\Omega$; in particular, writing a prescribed stress-energy tensor in the manifestly covariant form $F\eta^{-1}$ in every inertial chart would force its local conservation.

## Facts & Assumptions

**Given:** The affine Minkowski model with an inertial chart $x$ and coordinate partial derivatives $\partial_a$, an inertial orthonormal frame with $\eta_{ab}=\eta^{ab}=\operatorname{diag}(-1,1,1,1)$ and $\eta^{ab}=\eta^{ba}$ constant in the chart ([[def-sr-affine-minkowski-model]], [[def-lorentz-form-and-inertia]], [[def-inertial-frame-and-inertial-chart]], [[def-directional-and-partial-derivatives]]), a nonempty connected open $\Omega\subseteq A$, and $F:\Omega\to\mathbb R$ of class $C^1$ ([[def-ck-tensor-field-on-minkowski-space]]).

[F1] Force density and conservation terminology: for a $C^1$ symmetric type-$(2,0)$ field $T$, the four-force density is the vector field with components $f^b=\partial_aT^{ab}$, and $T$ is locally conserved on $\Omega$ exactly when $f=0$ on $\Omega$. ([[def-sr-stress-energy-tensor-and-force-density]])

[F2] A function with continuous partial derivatives on an open set is totally differentiable there. ([[thm-continuous-partial-derivatives-imply-total-differentiability]])

[F3] On a nonempty connected open subset of $\mathbb R^m$, a totally differentiable map has identically zero derivative if and only if it is constant. ([[thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]])

[F4] Derivative rules: constant multiples of differentiable functions are differentiable with the constant pulled out. ([[thm-algebra-of-derivatives]])

## Counterexample

**Proof technique:** direct.

1.1 Force density of $F\eta^{-1}$. Since the components $\eta^{ab}$ are constant in the inertial chart, differentiating componentwise by [F4] gives $f^b=\partial_a(F\eta^{ab})=\eta^{ab}\partial_aF=\partial^bF$. Because the matrix $\eta^{ab}$ is invertible (it is the inverse of the nondegenerate form $\eta$), $f=0$ on $\Omega$ if and only if $\partial_aF=0$ for every $a$. [F1, F4, given]

2.1 Conservation forces constancy. By [F2] the $C^1$ function $F$ is totally differentiable, with derivative the covector of its partial derivatives; if $f=0$, step 1.1 gives $DF=0$, and [F3] gives that $F$ is constant on the connected open set $\Omega$; conversely a constant $F$ has $f=0$ by step 1.1. Hence $T=F\eta^{-1}$ is conserved exactly for constant $F$, and for nonconstant $F$ the continuous force density $f$, with the components computed in step 1.1, is not identically zero although it may vanish at points. [F1, F2, F3, step 1.1]

2.2 Explicit witness. On $\Omega=\mathbb R^4$ (identified with an inertial chart) take $F(x)=(x^1)^2$, which is smooth and nonconstant. Then $\partial_0F=\partial_2F=\partial_3F=0$ and $\partial_1F=2x^1$, so $f=(0,2x^1,0,0)$: it vanishes exactly on the hyperplane $x^1=0$ and is nonzero at every point off that hyperplane. Thus the prescribed field $T^{ab}=F\eta^{ab}$ has nonzero force density on a nonempty open subset of $\Omega$, so it is not locally conserved, although $f$ vanishes at some points. [given, step 1.1]

3.1 Covariance does not imply conservation. Under an inertial transition $x'=\Lambda x+a$ with $\Lambda$ a proper orthochronous Lorentz matrix ([[def-inertial-frame-and-inertial-chart]]), the components of the same tensor transform by the rank-two law $T'^{ab}=\Lambda^a{}_c\Lambda^b{}_dT^{cd}$ ([[thm-sr-tensor-and-current-transformation]]\,(iii)); writing $F'(x'):=F(\Lambda^{-1}(x'-a))$ for the scalar, one gets $T'^{ab}=F'\Lambda^a{}_c\Lambda^b{}_d\eta^{cd}=F'\eta^{ab}$, because $\Lambda\eta^{-1}\Lambda^{\mathsf T}=\eta^{-1}$ for a Lorentz matrix. So the expression $F\eta^{-1}$ is manifestly covariant; yet by step 2.1 its local conservation is equivalent to constancy of the scalar $F$, which covariance does not require. [step 2.1]

4.1 The field of step 2.2 is a $C^1$ symmetric type-$(2,0)$ field of the form $F\eta^{-1}$ on the connected open set $\mathbb R^4$ that is not locally conserved, refuting the statement. The example shows that covariance of a prescribed tensor expression and conservation of that tensor are independent properties: conservation is an additional premise. The prescribed field is not claimed to be the stress-energy tensor of any matter model of this page and no choice principle is used. [step 2.2, step 3.1] ∎
