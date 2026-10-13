---
id: cor-cm-reduced-dalembert-and-generalized-forces
kind: corollary
title: "Reduced d'Alembert equation for an immersion: generalized forces and the quadratic correction"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [prop-cm-coordinate-covariance-of-the-euler-lagrange-expression, def-euclidean-submersions-and-immersions, thm-chain-rule-for-total-derivatives, thm-clairaut-schwarz-mixed-partials, def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-jacobian-matrix-and-gradient, def-matrix-product-and-identity-matrix, def-invertible-euclidean-linear-map, def-linear-map, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval]
forward_refs: [ex-cm-ideal-pendulum-equation-and-stability, ex-cm-rolling-disk-acceleration]
dependency_roles:
  prop-cm-coordinate-covariance-of-the-euler-lagrange-expression: mathematical-premise
  def-euclidean-submersions-and-immersions: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 6.3 (Lagrange Equations from d'Alembert's Principle: generalized coordinates and generalized forces)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.3 'Constraints and Generalised Coordinates' (constraint forces and the elimination of constraints by generalised coordinates), printed pages 17-22"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n,m\ge1$, let $\Omega\subseteq\mathbb R^n$ be open and nonempty, and let
$X:\Omega\to\mathbb R^m$ be of class $C^3$ with $DX(q)$ injective for every $q\in\Omega$; fix an
immersion in the sense of [[def-euclidean-submersions-and-immersions]] (this forces $n\le m$).
Let $M\in M_m(\mathbb R)$ be symmetric positive definite, meaning $M^{\mathsf T}=M$ and $u^{\mathsf T}Mu>0$ for every $0\ne u\in\mathbb R^m$, let $D\subseteq\mathbb R\times\mathbb R^m\times\mathbb R^m$ be open and let $F:D\to\mathbb R^m$ be continuous, let
$I\subseteq\mathbb R$ be an open interval ([[def-interval]]), and let
$q:I\to\Omega$ be a $C^2$ curve with $x(t):=X(q(t))$ and $(t,x(t),x'(t))\in D$ for all $t\in I$. Suppose there is a continuous
$R:I\to\mathbb R^m$ with

$$Mx''(t)=F\bigl(t,x(t),x'(t)\bigr)+R(t),\qquad R(t)\cdot DX(q(t))\delta=0\quad\text{for all }\delta\in\mathbb R^n,\ t\in I .$$

Then, writing $DX(q(t))^{\mathsf T}$ for the transpose and
$\bigl(X_{qq}[q',q']\bigr)_k:=\sum_{i,j}\partial_i\partial_jX_k(q)q_i'q_j'$, one has

$$DX(q)^{\mathsf T}MDX(q)\,q''=DX(q)^{\mathsf T}F(t,x,x')-DX(q)^{\mathsf T}M\,X_{qq}[q',q']$$

on $I$. The vector $DX(q)^{\mathsf T}F(t,x,x')$ is the **generalized force** of the ambient force
$F$ in the coordinates $q$, and $DX^{\mathsf T}M X_{qq}[q',q']$ is the acceleration correction of
the parametrisation; when $X$ is affine, the correction vanishes.

## Facts & Assumptions

**Given:** The open set $\Omega$, the immersion $X$, the constant matrix $M$, the field $F$, the curve $q$ with $x=X\circ q$, and the reaction $R$ satisfying the two displayed relations.

[F1] Differentiating $x=X\circ q$ twice by the chain rule
([[thm-chain-rule-for-total-derivatives]], [[prop-cm-coordinate-covariance-of-the-euler-lagrange-expression]],
[[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-ck-and-multi-index-notation-in-several-variables]]):
$x'=DX(q)q'$ and
$$x''=\frac{d}{dt}\bigl(DX(q)\bigr)q'+DX(q)q''=\bigl(X_{qq}[q',q']\bigr)+DX(q)q'' .$$

[F2] $R(t)$ annihilates the tangent space of the immersion: $R(t)\cdot DX(q(t))\delta=0$ for all $\delta$; equivalently $DX(q(t))^{\mathsf T}R(t)=0$, because $\bigl(DX^{\mathsf T}R\bigr)\cdot\delta=R\cdot DX\delta$ for every $\delta$ ([[def-euclidean-inner-product]], [[def-matrix-product-and-identity-matrix]], [[def-linear-map]]).

[F3] Matrix algebra and transposition: $(DX)^{\mathsf T}$ is the adjoint of $DX$ for the Euclidean inner products, and multiplying an identity by $DX^{\mathsf T}$ on the left preserves it ([[def-jacobian-matrix-and-gradient]], [[def-euclidean-inner-product]], [[def-vector-valued-derivative-and-integral]], [[def-interval]], [[def-invertible-euclidean-linear-map]], [[thm-clairaut-schwarz-mixed-partials]]).

## Proof

**Proof technique:** direct; pull the ambient equation back by the transpose of the derivative.

1.1 Multiplying the ambient equation $Mx''=F+R$ on the left by $DX(q(t))^{\mathsf T}$ gives $$DX^{\mathsf T}Mx''=DX^{\mathsf T}F+DX^{\mathsf T}R=DX^{\mathsf T}F,$$ because $DX^{\mathsf T}R=0$ by [F2]. [F2, F3, given]

2.1 Substituting the second-derivative chain rule of [F1] into step 1.1 gives $$DX^{\mathsf T}M\bigl(X_{qq}[q',q']+DX\,q''\bigr)=DX^{\mathsf T}F .$$ By associativity of matrix products this is $DX^{\mathsf T}MDX\,q''=DX^{\mathsf T}F-DX^{\mathsf T}MX_{qq}[q',q']$, which is the displayed equation. [F1, step 1.1, algebra] ∎

## Remarks

- The corollary is the mathematical content of the reduced d'Alembert principle: the tangent projection of the ambient equation is taken, the normal component $R$ drops out, and the applied force enters as the generalized force $DX^{\mathsf T}F$. The condition $R\cdot DX\delta=0$ is an explicit hypothesis on $R$; the corollary does not assert that any particular mechanism realises it, nor that an ambient constraint produces such an $R$.

- The matrix $DX^{\mathsf T}MDX$ is symmetric and positive definite on $\mathbb R^n$: for $0\ne u\in\mathbb R^n$, injectivity gives $DXu\ne0$ and $u^{\mathsf T}DX^{\mathsf T}MDXu=(DXu)^{\mathsf T}M(DXu)>0$; this is the reduced mass matrix used in [[ex-cm-ideal-pendulum-equation-and-stability]] and [[ex-cm-rolling-disk-acceleration]].
