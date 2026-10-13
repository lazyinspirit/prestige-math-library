---
id: thm-cm-quadratic-mode-decomposition
kind: theorem
title: "Decoupling of the constant-coefficient quadratic system $Mq''+Kq=0$ into normal modes, with the zero-mode and energy identities"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [lem-cm-positive-definite-matrix-square-roots, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-self-adjoint-and-normal-endomorphism, thm-sine-and-cosine-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-chain-rule-for-total-derivatives, cor-zero-derivative-implies-constant, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-first-order-ode-initial-value-problem-and-solution, def-vector-valued-derivative-and-integral, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  lem-cm-positive-definite-matrix-square-roots: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 8.4, formulas (8.76)-(8.79): decoupling M q'' + W q = 0 by V M^{-1/2} W M^{-1/2} and the mode energies"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 2.6 (normal modes and the mode frequencies), printed pages 40-45"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $M\in M_n(\mathbb R)$ be symmetric positive definite and let $K\in M_n(\mathbb R)$ be symmetric and non-negative, that is $v^{\mathsf T}Kv\ge0$ for all $v\in\mathbb R^n$. Let $M^{1/2}$, $M^{-1/2}$ be the square roots of [[lem-cm-positive-definite-matrix-square-roots]] and let

$$S:=M^{-1/2}KM^{-1/2}.$$

By the real spectral theorem choose an orthogonal matrix $O$ and a diagonal matrix $\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$ with $S=O\Lambda O^{\mathsf T}$ and $\lambda_i\ge0$ for all $i$.

Let $I\subseteq\mathbb R$ contain at least two points and satisfy $r,s\in I,\ r\le u\le s\Longrightarrow u\in I$ for all $r,s,u\in\mathbb R$; suppose also $0\in I$. Let $q:I\to\mathbb R^n$ be twice differentiable with continuous first and second domain-relative derivatives, in the sense of [[def-vector-valued-derivative-and-integral]]. Put $z:=O^{\mathsf T}M^{1/2}q$. Then:

1. $q$ satisfies the quadratic system $Mq''+Kq=0$ on $I$ if and only if $z$ satisfies the decoupled system

$$z_i''+\lambda_iz_i=0\qquad(1\le i\le n)$$

on $I$;
2. for every $i$ the solutions of the scalar equation in clause 1 on an interval containing $0$, with prescribed initial data, are exactly as follows:

$$z_i(t)=a_i\cos(\omega_it)+b_i\sin(\omega_it)\quad\text{with }\omega_i:=\sqrt{\lambda_i}>0\ \text{when }\lambda_i>0,$$

equivalently $z_i(t)=\operatorname{Re}(C_ie^{i\omega_it})$ with $C_i=a_i-ib_i\in\mathbb C$, and

$$z_i(t)=a_i+b_it\qquad\text{when }\lambda_i=0;$$

the coefficients are $a_i=z_i(0)$, $b_i=z_i'(0)/\omega_i$ for $\lambda_i>0$ and $b_i=z_i'(0)$ for $\lambda_i=0$, so the displayed families cover every initial datum and are the complete solution sets for the first-order system $\bigl(z_i,z_i'\bigr)'=(z_i',-\lambda_iz_i)$;
3. consequently every solution of $Mq''+Kq=0$ is $q=M^{-1/2}Oz$ for a unique choice of the modal solutions of clause 2, and the correspondence between initial data $(q(0),q'(0))\in\mathbb R^{2n}$ and the coefficient tuples $(a_i,b_i)$ is a bijection;
4. for every solution the modal energies $E_i:=\tfrac12\bigl(z_i'^2+\lambda_iz_i^2\bigr)$ are constant on $I$, and so are

$$\tfrac12\dot q^{\mathsf T}M\dot q+\tfrac12q^{\mathsf T}Kq=\tfrac12|z'|_2^2+\tfrac12\sum_{i=1}^n\lambda_iz_i^2=\sum_{i=1}^nE_i .$$

## Facts & Assumptions

**Given:** The symmetric positive definite $M$, the symmetric non-negative $K$, the orthogonal diagonalisation $S=O\Lambda O^{\mathsf T}$ with $\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$, $\lambda_i\ge0$, the set $I$ with the stated interval property, and the curve $q:I\to\mathbb R^n$ with two continuous domain-relative derivatives and $z=O^{\mathsf T}M^{1/2}q$.

[F1] $M^{1/2}$, $M^{-1/2}$ exist, are symmetric positive definite, $(M^{1/2})^2=M$, $(M^{-1/2})^2=M^{-1}$ and $M^{-1/2}MM^{-1/2}=I_n$; $S$ is symmetric and non-negative ([[lem-cm-positive-definite-matrix-square-roots]]). A symmetric real matrix is self-adjoint, and the real spectral theorem gives an orthonormal eigenbasis, so $O$ may be taken orthogonal with $O^{\mathsf T}=O^{-1}$ and $S=O\Lambda O^{\mathsf T}$ ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[def-self-adjoint-and-normal-endomorphism]], [[def-matrix-product-and-identity-matrix]]).

[F2] Calculus of curves: derivatives are computed componentwise, sums and scalar multiples behave as expected, the chain rule computes derivatives of composites, and a differentiable curve on an interval whose derivative vanishes is constant ([[def-vector-valued-derivative-and-integral]], [[thm-chain-rule-for-total-derivatives]], [[cor-zero-derivative-implies-constant]]).

[F3] Sine and cosine have derivatives $\sin'=\cos$, $\cos'=-\sin$ with $\sin0=0$, $\cos0=1$; and $e^{i\theta}=\cos\theta+i\sin\theta$, so $a\cos\theta+b\sin\theta=\operatorname{Re}\bigl((a-ib)e^{i\theta}\bigr)$ ([[thm-sine-and-cosine-derivatives]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-euclidean-inner-product]]).

[F4] Every initial value problem of the linear first-order system $\bigl(z_i,z_i'\bigr)'=(z_i',-\lambda_iz_i)$ satisfies the Picard-Lindelöf hypotheses, so it has a unique maximal solution; a solution defined on all of $\mathbb R$ through the given data is therefore the maximal solution ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-first-order-ode-initial-value-problem-and-solution]]).

## Proof

**Proof technique:** direct; transform the system by the square root of $M$, diagonalise the transformed stiffness and solve the scalar equations with a uniqueness argument.

1.1 Since $q=M^{-1/2}Oz$ (equivalently $z=O^{\mathsf T}M^{1/2}q$), differentiating twice with the chain rule [F2] gives $q''=M^{-1/2}Oz''$, hence $$Mq''+Kq=M^{1/2}Oz''+KM^{-1/2}Oz=M^{1/2}O\bigl(z''+O^{\mathsf T}M^{-1/2}KM^{-1/2}Oz\bigr)=M^{1/2}O\bigl(z''+\Lambda z\bigr),$$ where we used $M=M^{1/2}M^{1/2}$, $O^{\mathsf T}=O^{-1}$ and $S=O\Lambda O^{\mathsf T}$ [F1]. As $M^{1/2}O$ is invertible, $Mq''+Kq=0$ if and only if $z''+\Lambda z=0$, which is the decoupled system of clause 1. [given, F1, F2, algebra]

1.2 The scalar equation for $\lambda_i>0$: by [F3] and the chain rule, $$\frac{d^2}{dt^2}\bigl(a\cos\omega_it+b\sin\omega_it\bigr)=-\omega_i^2\bigl(a\cos\omega_it+b\sin\omega_it\bigr)=-\lambda_i z_i(t),$$ so the displayed family solves $z_i''+\lambda_iz_i=0$ on $\mathbb R$. For $\lambda_i=0$ the affine functions solve $z_i''=0$ by direct differentiation. In both cases the coefficients listed in clause 2 realize the initial data $(z_i(0),z_i'(0))$. [F2, F3, algebra]

2.1 Completeness in the scalar case: let $u$ solve $u''+\lambda_iu=0$ with $u(0)=u'(0)=0$. For $\lambda_i>0$ define $\Phi(t):=\tfrac12u'(t)^2+\tfrac12\lambda_iu(t)^2$; by [F2], $\Phi'=u'(u''+\lambda_iu)=0$, so $\Phi$ is constant and equal to $\Phi(0)=0$; both summands are non-negative, so $u=0$. For $\lambda_i=0$, $u''=0$ gives $u'=\mathrm{const}=0$ and then $u=\mathrm{const}=0$ by [F2]. Hence two solutions with the same initial data coincide on the intersection of their intervals. Now let $z$ be any maximal solution of the scalar first-order system; the explicit solution $w$ of clause 2 with the same initial data is defined on all of $\mathbb R$, and by uniqueness $w$ is the restriction of $z$; since $w$ is defined on $\mathbb R$, the maximal domain is $\mathbb R$ and $z=w$. Thus the displayed families are exactly the solution sets, which is clause 2. [step 1.2, F2, F4, algebra]

2.2 Clause 3 follows from clauses 1 and 2 together with the identity $q=M^{-1/2}Oz$: the map $(q(0),q'(0))\mapsto(z(0),z'(0))$ is the linear bijection given by $z(0)=O^{\mathsf T}M^{1/2}q(0)$, $z'(0)=O^{\mathsf T}M^{1/2}q'(0)$, and the map $(z(0),z'(0))\mapsto(a_i,b_i)$ is bijective by the formulas of clause 2. [step 1.1, 2.1, F1, algebra]

3.1 Clause 4: for a solution, $\frac{d}{dt}E_i=z_i'(z_i''+\lambda_iz_i)=0$ by [F2], so each $E_i$ is constant. Moreover, using $q'=M^{-1/2}Oz'$ and [F1], $$\dot q^{\mathsf T}M\dot q=\bigl(M^{-1/2}Oz'\bigr)^{\mathsf T}M\bigl(M^{-1/2}Oz'\bigr)=|z'|_2^2,\qquad q^{\mathsf T}Kq=\bigl(M^{-1/2}Oz\bigr)^{\mathsf T}K\bigl(M^{-1/2}Oz\bigr)=z^{\mathsf T}\Lambda z=\sum_i\lambda_iz_i^2,$$ because $O^{\mathsf T}O=I_n$ and $M^{-1/2}MM^{-1/2}=I_n$. Adding the two identities and halving gives the displayed chain of equalities. [step 1.1, F1, F2, algebra] ∎

## Remarks

- The transformation is the one used for small oscillations: $O$ diagonalises the symmetric matrix $M^{-1/2}KM^{-1/2}$, whose eigenvalues $\lambda_i$ are non-negative by [[lem-cm-positive-definite-matrix-square-roots]] clause 4. A zero eigenvalue produces a free affine mode $a_i+b_it$, not an oscillation, and negative eigenvalues cannot occur for non-negative $K$; for an indefinite $K$ the corresponding scalar equation has real exponential solutions.

- Clause 1 is an exact equivalence for the constant-coefficient system. It asserts nothing about a configuration-dependent kinetic metric or a nonlinear potential; the reduction of a small-oscillation linearisation to this theorem is the content of [[prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium]], and the theorem itself makes no long-time approximation claim about any nonlinear system.
