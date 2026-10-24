---
id: lem-qftx-gauge-sobolev-calculus
kind: lemma
title: Sobolev gauge calculus and smooth gauge action
status: draft
origin: pipeline
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF plus the full Axiom of Choice, as used by the Sobolev algebra, embedding, and Banach inverse-function suppliers."
deps:
  - def-qftx-smooth-sobolev-gauge-configuration
  - cor-sobolev-algebra-above-the-critical-index
  - thm-higher-order-sobolev-embedding
  - thm-inverse-function-theorem-for-banach-spaces
  - def-axiom-of-choice
dependency_roles:
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  cor-sobolev-algebra-above-the-critical-index: mathematical-premise
  thm-higher-order-sobolev-embedding: mathematical-premise
  thm-inverse-function-theorem-for-banach-spaces: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Dominic Walpuski, Differential Geometry III: Gauge Theory (full lecture notes)"
      url: "https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf"
      locator: "§§5.13.1–5.13.2, PDF pp. 113–114: Sobolev multiplication, gauge-group charts, and smoothness of the action."
    - title: "Brian Williams, Geometry, Spin, and Seiberg-Witten Theory (full expository manuscript)"
      url: "https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf"
      locator: "§4.2 and Appendix A.1–A.2, PDF pp. 25–27 and 41–45: Sobolev configuration, the abelian gauge action, and Sobolev multiplication; local argument here treats SU(N)."
verification:
  precheck: pending
---

## Statement

Assume the configuration data of the preceding definition. For every integer $k>d/2+1$, all finite-atlas Sobolev norms on the specified section and form spaces are equivalent, $H^k$ embeds continuously in $C^1$, and pointwise multiplication of matrix or adjoint-bundle $H^k$ sections is bounded. The set $\mathcal G_{k+1}=H^{k+1}(\operatorname{Ad}P)$ is a Hilbert Lie group modeled on $H^{k+1}(\operatorname{ad}P)$, and the right gauge action $\mathcal A_k\times\mathcal G_{k+1}\to\mathcal A_k$ is smooth. At $(A,e)$ its differential, in the affine and exponential coordinates, is

$$D\bigl((A+a)^{\exp\xi}\bigr)_{(0,0)}(a,\xi)=a+d_A\xi,$$

where $a\in H^k(T^*M\otimes\operatorname{ad}P)$ and $\xi\in H^{k+1}(\operatorname{ad}P)$.

## Statement references

[Walpuski, Sobolev connections and gauge transformations](https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf)

[Williams, the Sobolev gauge action](https://ufdcimages.uflib.ufl.edu/AA/00/05/72/86/00001/brianwilliams-SW.pdf)

## Facts & Assumptions

**Given:** Full AC; the compact Riemannian bundle data of the preceding definition; an integer $k>d/2+1$; $A\in\mathcal A_k$; and $u\in\mathcal G_{k+1}$.

[A1] Full AC is the adopted axiom base. [[def-axiom-of-choice]]

[F1] The configuration definition fixes the finite-atlas norms, $\operatorname{ad}P$, the right-action formula, and the covariant derivative $d_A\xi=d\xi+[A,\xi]$. [[def-qftx-smooth-sobolev-gauge-configuration]]

[F2] On a bounded extension domain, $W^{k,2}$ is a Banach algebra when $2k>d$, and the higher-order embedding gives $H^k\hookrightarrow C^1$ when $k>d/2+1$. The same estimates apply componentwise to finitely many localized bundle coefficients. [[cor-sobolev-algebra-above-the-critical-index]], [[thm-higher-order-sobolev-embedding]]

[F3] A $C^1$ map between real Banach spaces whose derivative at a point is a bounded linear isomorphism is a $C^1$ diffeomorphism between suitable open neighborhoods. [[thm-inverse-function-theorem-for-banach-spaces]]

## Proof

**Given:** The hypotheses of the Statement.

1.1 On an overlap of two relatively compact bundle charts, a localized section changes coordinates by multiplication by a smooth transition matrix and by a smooth coordinate change. Every derivative of order at most $k$ of the transformed coefficient is a finite sum of bounded derivatives of these transition maps times derivatives of the original coefficient of order at most $k$. The Jacobians and inverse Jacobians are bounded on the compact supports. The product and chain rules therefore bound each localized $H^k$ norm by a constant times the finite-atlas norm in the other chart. Summing over the finite cover gives both norm inequalities. Thus the norms are equivalent and define the same complete Sobolev topology. [given, A1, F1, algebra]

2.1 Localize by the fixed finite partition and extend each compactly supported coefficient by zero into a bounded Euclidean ball. For $p=2$, $2k>d$; [F2] makes each localized $H^k$ coefficient a Banach algebra and gives its $C^1$ representative when $k>d/2+1$. The finite sum of these estimates proves the same algebra and embedding bounds for sections, matrix-valued functions, and forms in the chosen bundle atlas. [F1, F2, step 1.1]

3.1 The finite-dimensional matrix exponential is smooth, has derivative the identity at zero on $\mathfrak{su}(N)$, and maps $\mathfrak{su}(N)$ into $SU(N)$. In the Banach algebra from step 2.1 its power series and every termwise derivative converge in $H^{k+1}$ on a sufficiently small ball, since the algebra norm is submultiplicative after an equivalent rescaling. The matrix logarithm series converges on a neighborhood of the identity; for a unitary matrix sufficiently close to identity its logarithm is anti-Hermitian, and its trace is zero because the determinant is one and the sum of the small eigenvalue angles lies in $2\pi\mathbb Z$. Hence pointwise $\exp$ and $\log$ give inverse smooth maps between neighborhoods of zero in $H^{k+1}(\operatorname{ad}P)$ and the identity in $\mathcal G_{k+1}$. The inverse-function theorem [F3] also supplies these local Banach charts. Their translated charts cover the group; changes of chart are smooth because the transition functions of $\operatorname{Ad}P$ act by smooth conjugation and the multiplication is a bounded bilinear Sobolev map. The pointwise product and inverse therefore close on $\mathcal G_{k+1}$ and are smooth, giving the asserted Hilbert Lie group. [F1, F2, F3, step 2.1]

4.1 On an overlap, write $s_\beta=s_\alpha g$; the connection and section transition rules are $A_\beta=g^{-1}A_\alpha g+g^{-1}dg$ and $u_\beta=g^{-1}u_\alpha g$. The product rule gives
$$A_\beta^{u_\beta}=g^{-1}\bigl(u_\alpha^{-1}A_\alpha u_\alpha+u_\alpha^{-1}du_\alpha\bigr)g+g^{-1}dg,$$
so the local formula for $A^u$ has exactly the connection transition rule and patches to the pullback by the $C^1$ bundle automorphism associated with $u$. In each chart the action is $A^u=u^{-1}Au+u^{-1}du$. Multiplication $H^{k+1}\times H^k\to H^k$ is bounded because $H^{k+1}\hookrightarrow H^k$ continuously and $H^k$ is an algebra by step 2.1. Thus the first term is smooth in $(A,u)$. In the charts of step 3.1, inversion is smooth and differentiation $H^{k+1}\to H^k$ is bounded. The derivative of $f(u)=u^{-1}du$ in a tangent direction $\eta$ is $Df(u)[\eta]=-u^{-1}\eta u^{-1}du+u^{-1}d\eta$. Every further derivative is a finite sum of products of $u^{-1}$, tangent factors $\eta_i$, and at most one differentiated tangent factor $d\eta_j$; each product is bounded in $H^k$ by step 2.1. Finite-dimensional Taylor remainders for matrix inversion, multiplied using the same algebra estimate, tend to zero in the required Sobolev norm at every order. Therefore $f$ and the full gauge action are smooth. [F1, step 2.1, step 3.1, algebra]

5.1 For $t\in\mathbb R$, expand in the finite-dimensional matrix algebra: $e^{-t\xi}(A+ta)e^{t\xi}=A+t(a+[A,\xi])+o(t)$ in $H^k$, while $e^{-t\xi}d(e^{t\xi})=t\,d\xi+o(t)$ in $H^k$ by the bounded derivative and product estimates of step 2.1. Adding the two terms gives derivative $a+d\xi+[A,\xi]=a+d_A\xi$, which is the displayed formula. [F1, step 2.1, step 4.1, algebra] ∎
