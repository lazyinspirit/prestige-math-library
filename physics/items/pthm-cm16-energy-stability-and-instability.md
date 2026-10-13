---
id: pthm-cm16-energy-stability-and-instability
kind: physics-theorem
title: "Energy stability and instability of the mechanical model at an equilibrium: the strict minimum is Lyapunov stable, a negative Hessian eigenvalue gives linear instability, a negative definite potential Hessian gives nonlinear instability, and exact energy conservation rules out attraction"
status: draft
origin: session
domain: physics
dependency_level: 12
deps: [def-cm16-stability-and-hyperbolicity-concepts,
       thm-cm-energy-stability-of-a-strict-minimum,
       prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium,
       thm-cm-instability-of-a-hyperbolic-saddle,
       lem-cm-energy-conservation-for-the-mechanical-system,
       def-cm-mechanical-vector-field-and-energy-in-a-chart,
       def-cm-equilibrium-and-lyapunov-stability,
       def-metric-ball,
       def-euclidean-inner-product,
       def-hessian-and-euclidean-critical-point,
       cor-hessian-is-symmetric,
       lem-cm-positive-definite-matrix-square-roots,
       cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
       def-eigenvalue-eigenvector-eigenspace-and-spectrum,
       def-variational-equation-along-an-ode-solution,
       def-total-derivative-in-euclidean-space,
       def-jacobian-matrix-and-gradient,
       thm-derivative-of-exponential,
       thm-chain-rule,
       def-ck-euclidean-maps-and-diffeomorphisms,
       def-cm01-units]
dependency_roles:
  def-cm16-stability-and-hyperbolicity-concepts: formulation-prerequisite
  thm-cm-energy-stability-of-a-strict-minimum: mathematical-premise
  prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium: mathematical-premise
  thm-cm-instability-of-a-hyperbolic-saddle: mathematical-premise
  lem-cm-energy-conservation-for-the-mechanical-system: mathematical-premise
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  lem-cm-positive-definite-matrix-square-roots: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  def-variational-equation-along-an-ode-solution: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The stability consequences of the mechanical chart data at a mechanical equilibrium q0: a strict local minimum of the potential gives a Lyapunov stable equilibrium; a negative Hessian eigenvalue gives an unbounded solution of the associated linearised vector equation (linear instability, with no nonlinear conclusion); a negative definite Hessian (strict local maximum) makes the equilibrium unstable in the nonlinear sense through the hyperbolic instability theorem; and exact energy conservation along the model's motions prevents asymptotic stability whenever states of different energy accumulate at the equilibrium, so a strict minimum is stable but not attracting. No global stability, no asymptotic stability and no conclusion is inferred from a zero Hessian eigenvalue alone."
sources:
  references:
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), §7.3.1 pp. 164-170 (linear fixed-point systems) and §7.3.2 pp. 171-172 (conserved-energy discussion); the precise stability quantifiers and complete mechanical deductions are supplied locally"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §§3.2 and 5.6: equilibrium types and the warning that precise Lyapunov, asymptotic and linear notions are distinct"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3: fixed points, stable and unstable sets, and the warning that a saddle Hessian requires a nonlinear theorem before an instability claim"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Statement

Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, let
$M:\Omega\to M_n(\mathbb R)$ be a $C^2$ field of symmetric positive definite
matrices, and let $U:\Omega\to\mathbb R$ be of class $C^2$; let $G$ be the
mechanical vector field and $E(q,v)=\tfrac12v^{\mathsf T}M(q)v+U(q)$ the
energy of [[def-cm-mechanical-vector-field-and-energy-in-a-chart]]. Let
$q_0\in\Omega$ be a mechanical equilibrium, $\nabla U(q_0)=0$, and put
$K:=D^2U(q_0)$ ([[def-hessian-and-euclidean-critical-point]],
[[cor-hessian-is-symmetric]]). All chart data, state norms and times are
numerical in the fixed reference scales of
[[def-cm16-stability-and-hyperbolicity-concepts]]' numerical-state convention.
Fix also an energy reference $E_{\rm ref}>0$, so that physical energy is
$E_{\rm phys}=E_{\rm ref}E$ and physical time is $t_{\rm ref}t$. Then:

1. **(Strict minimum.)** If $q_0$ is a strict local minimum of $U$, then
   $(q_0,0)$ is a Lyapunov stable equilibrium of $G$
   ([[def-cm-equilibrium-and-lyapunov-stability]],
   [[def-cm16-stability-and-hyperbolicity-concepts]] clause (i)).
2. **(Linear instability from a negative eigenvalue.)** If $K$ has a negative
   eigenvalue ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]), then
   there are $\kappa>0$ and $w\ne0$ in $\mathbb R^n$ such that
   $Y:\mathbb R\to\mathbb R^{2n}$, $Y(t):=e^{\kappa t}(w,\kappa w)$,
   solves the associated vector equation $Y'=DG(q_0,0)Y$ along the constant
   solution $z\equiv(q_0,0)$, with $Y(0)=(w,\kappa w)$. This vector
   equation is the equation for the action on an initial deviation of the
   normalized matrix equation $A'=DG(q_0,0)A$, $A(0)=I_{2n}$ defined in
   [[def-variational-equation-along-an-ode-solution]]; in particular
   $(q_0,0)$ is linearly unstable in the sense of
   [[def-cm16-stability-and-hyperbolicity-concepts]] clause (iii).
3. **(Nonlinear instability from a negative definite Hessian.)** If $K$ is
   negative definite, then every complex eigenvalue of $DG(q_0,0)$ is real
   and nonzero, at least one is positive, and $(q_0,0)$ is unstable: it is
   not Lyapunov stable.
4. **(No attraction under exact energy conservation.)** The energy $E$ is
   constant along every maximal solution of $G$. If there are states
   $z=(q,v)$ with $\lVert z-(q_0,0)\rVert_2$ arbitrarily small and
   $E(z)\ne E(q_0,0)$, then $(q_0,0)$ is not asymptotically stable. In
   particular, if $q_0$ is a strict local minimum of $U$, then $(q_0,0)$ is
   Lyapunov stable but not asymptotically stable.
5. **(Scope.)** A zero eigenvalue of $K$ alone gives no stability conclusion;
   clause 1 still applies to strict minima with degenerate Hessians.
   Clause 2 gives no nonlinear conclusion when $K$ has
   both a negative and a positive eigenvalue: the linearisation then also has
   purely imaginary eigenvalues and is not hyperbolic, so the instability
   theorem used in clause 3 does not apply. No global stability, no basin of
   attraction and no statement about the size of any neighbourhood is
   claimed.

## Facts & Assumptions

**Given:** the chart data $M,U,G,E$, the equilibrium $q_0$ with $\nabla U(q_0)=0$, and $K=D^2U(q_0)$; the energy $E$ is continuous on $\Omega\times\mathbb R^n$, being a composition and product of the continuous maps $M$ and $U$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L1] Energy stability and conservation ([[thm-cm-energy-stability-of-a-strict-minimum]], [[lem-cm-energy-conservation-for-the-mechanical-system]]): under the chart hypotheses, a strict local minimum $q_0$ of $U$ makes $(q_0,0)$ a Lyapunov stable equilibrium of the mechanical field, and the energy $E$ is constant along every maximal solution of that field.

[L2] Linearisation and the instability theorem ([[prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium]], [[thm-cm-instability-of-a-hyperbolic-saddle]]): the mechanical field is differentiable at $(q_0,0)$ with $DG(q_0,0)(\delta q,\delta v)=(\delta v,-M(q_0)^{-1}K\,\delta q)$, and the linearised equation is $M(q_0)\xi''+K\xi=0$. If a $C^1$ field has an equilibrium at $0$ whose derivative has no eigenvalue with real part $0$ and at least one eigenvalue with positive real part, then $0$ is not Lyapunov stable.

[L3] Spectral and square-root tools ([[lem-cm-positive-definite-matrix-square-roots]], [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]): $M_0:=M(q_0)$ has a symmetric positive definite square root $M_0^{1/2}$ and a symmetric positive definite inverse square root $M_0^{-1/2}$ with $M_0^{-1/2}M_0M_0^{-1/2}=I_n$; every self-adjoint endomorphism of $\mathbb R^n$ has an orthonormal basis of eigenvectors with real eigenvalues.

[L4] Calculus of the exponential ([[thm-derivative-of-exponential]], [[thm-chain-rule]]): the real exponential function is its own derivative, $(\exp)'=\exp$, and for a differentiable scalar function $\alpha$ the composite $t\mapsto\exp(\alpha(t))$ has derivative $\alpha'(t)\exp(\alpha(t))$.

[L5] Matrix and vector conventions ([[def-variational-equation-along-an-ode-solution]]): along the equilibrium the supplier's variational equation is $A'=BA$, $A(0)=I_{2n}$, where $B:=DG(q_0,0)$ and $A$ takes values in $M_{2n}(\mathbb R)$. For a constant initial deviation $u\in\mathbb R^{2n}$, $Y(t):=A(t)u$ obeys $Y'=BY$, $Y(0)=u$, by differentiating the finite sums defining matrix multiplication. We call $Y'=BY$ with specified initial vector its associated vector equation; a vector solution is not itself a normalized matrix solution.

## Proof

**Proof technique:** direct.

1.1 Clause 1: the chart data satisfy the hypotheses of [L1] first clause (M a $C^2$ field of symmetric positive definite matrices, U of class $C^2$, $q_0$ a strict local minimum, $\nabla U(q_0)=0$); [L1] therefore gives Lyapunov stability of the equilibrium $(q_0,0)$ of the mechanical field. [given, L1]

1.2 Clause 2, spectral reduction: put $M_0:=M(q_0)$ and $S:=M_0^{-1/2}KM_0^{-1/2}$. By [L3] $M_0^{-1/2}$ is symmetric, and $K$ is symmetric; hence $S^{\mathsf T}=(M_0^{-1/2})^{\mathsf T}K^{\mathsf T}(M_0^{-1/2})^{\mathsf T}=S$, so $S$ is self-adjoint and [L3] second clause gives an orthonormal basis $u_1,\dots,u_n$ of $\mathbb R^n$ with $Su_i=\lambda_iu_i$, $\lambda_i\in\mathbb R$. If $K$ has a negative eigenvalue, then some $\lambda_j<0$: otherwise $\lambda_i\ge0$ for all $i$ and, for any nonzero $e$ with $Ke=\eta e$, $\eta<0$, the vector $c:=M_0^{1/2}e$ is nonzero and satisfies $c^{\mathsf T}Sc=e^{\mathsf T}M_0^{1/2}M_0^{-1/2}KM_0^{-1/2}M_0^{1/2}e=\eta\lVert e\rVert_2^2<0$, while expansion in the orthonormal eigenbasis gives $c^{\mathsf T}Sc=\sum_i\lambda_ic_i^2\ge0$, a contradiction. [given, L3, algebra]

1.3 Clause 3, hyperbolicity: assume $K$ negative definite. For $v\ne0$, $v^{\mathsf T}Sv=(M_0^{-1/2}v)^{\mathsf T}K(M_0^{-1/2}v)<0$, so $S$ is negative definite; hence every eigenvalue of $S$ is negative. Let $\rho\in\mathbb C$ be a complex eigenvalue of $A:=DG(q_0,0)$ with eigenvector $\zeta=(a,b)\ne0$. By [L2] clause 1, $b=\rho a$ and $-M_0^{-1}Ka=\rho b=\rho^2a$; if $a=0$ then $b=0$, so $a\ne0$, and with $c:=M_0^{1/2}a\ne0$ the identity $Sc=-\rho^2c$ holds because $Sc=M_0^{-1/2}KM_0^{-1/2}M_0^{1/2}a=M_0^{-1/2}Ka=-\rho^2M_0^{1/2}a=-\rho^2c$. Thus $-\rho^2$ is an eigenvalue of $S$; as $S$ is negative definite, $-\rho^2<0$, that is $\rho^2>0$, so $\rho$ is real and nonzero. Every complex eigenvalue of $A$ is therefore real and nonzero. [given, L2, L3, algebra]

2.1 Clause 2, the growing solution: fix $j$ with $\lambda_j<0$, put $\kappa:=\sqrt{-\lambda_j}>0$ and $w:=M_0^{-1/2}u_j\ne0$. Then $Kw=\lambda_jM_0w$: indeed $Kw=KM_0^{-1/2}u_j=M_0^{1/2}M_0^{-1/2}KM_0^{-1/2}u_j=M_0^{1/2}Su_j=\lambda_jM_0^{1/2}u_j=\lambda_jM_0w$. Define $Y(t):=e^{\kappa t}(w,\kappa w)\in\mathbb R^{2n}$. By [L4], $Y_1'(t)=\kappa e^{\kappa t}w=Y_2(t)$ and $Y_2'(t)=\kappa^2e^{\kappa t}w=-\lambda_je^{\kappa t}w=-e^{\kappa t}M_0^{-1}Kw=-M_0^{-1}KY_1(t)$; by clause 1 of [L2] and the convention [L5], the map $Y$ therefore solves the associated vector equation $Y'=DG(q_0,0)Y$ with $Y(0)=(w,\kappa w)$. Since $\lVert Y(t)\rVert_2=e^{\kappa t}\lVert(w,\kappa w)\rVert_2$ is unbounded as $t\to\infty$, the equilibrium $(q_0,0)$ is linearly unstable. [step 1.2, L2, L4, L5, algebra]

2.2 Clause 3, instability: by [L3] second clause and the negativity of all eigenvalues of $S$, choose any eigenvalue $\lambda_j<0$ of $S$ with eigenvector $u_j$ and put $\kappa:=\sqrt{-\lambda_j}>0$, $w:=M_0^{-1/2}u_j$. Then $A(w,\kappa w)=(\kappa w,-M_0^{-1}Kw)=(\kappa w,-\lambda_jw)=(\kappa w,\kappa^2w)=\kappa(w,\kappa w)$, so $A$ has the positive real eigenvalue $\kappa$. By step 1.3 no eigenvalue of $A$ has real part $0$. The associated field $G$ is $C^1$ in the state near the equilibrium because $M$ is $C^2$ and $U$ is $C^2$ ([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]), and $G(q_0,0)=0$. On the translated open state domain define $F(y):=G((q_0,0)+y)$, so $F(0)=0$ and $DF(0)=A$; translation preserves Euclidean distances and maximal-solution intervals. Thus [L2] second clause applies to $F$ and shows that $(q_0,0)$ is not Lyapunov stable. [step 1.3, given, L2, L3, algebra]

3.1 Clause 4: [L1] second clause gives $E(z(t))=E(z(0))$ along every maximal solution. Suppose $(q_0,0)$ were asymptotically stable with attracting radius $\delta_0>0$ and let $z_0$ with $\lVert z_0-(q_0,0)\rVert_2<\delta_0$ and $E(z_0)\ne E(q_0,0)$, which exists by the clause's hypothesis. Its maximal solution is defined for all $t\ge0$ and converges to $(q_0,0)$; by the continuity of $E$ recorded in the Given, $E(z(t))\to E(q_0,0)$, while $E(z(t))=E(z_0)$ constantly, so $E(z_0)=E(q_0,0)$, a contradiction. Hence $(q_0,0)$ is not asymptotically stable. If $q_0$ is a strict local minimum with radius $r_0>0$, then in every radius $r>0$ there is $q\in\Omega$ with $0<\lVert q-q_0\rVert_2<\min(r,r_0)$ (use $n\ge1$ and openness); the state $z_0:=(q,0)$ satisfies $E(z_0)=U(q)>U(q_0)=E(q_0,0)$, so such states accumulate at the equilibrium; combining clause 1 with the first part of this clause gives a Lyapunov stable but not asymptotically stable equilibrium. [step 1.1, given, L1, algebra] ∎

## Remarks

- **Why clause 3 needs negative definiteness.** The instability theorem of [L2] requires the linearisation to be hyperbolic. Strict concavity alone need not give a negative definite Hessian: $U(q)=-q^4$ is strictly concave but has $U''(0)=0$. In the rate formulas, $\lambda_i$ denotes an eigenvalue of $S=M_0^{-1/2}KM_0^{-1/2}$ from step 1.2, not of $K$. Negative and positive eigenvalues of $S$ give respectively real rates $\pm\sqrt{-\lambda_j}$ and purely imaginary rates $\pm i\sqrt{\lambda_k}$; a mixed-sign Hessian therefore leaves centre directions, which the cited hyperbolic theorem does not cover. Clause 2 is the linear statement in that case, and clause 5 records the scope.

- **Comparison with the mathematical suppliers.** Clause 1 is exactly [[thm-cm-energy-stability-of-a-strict-minimum]]; clause 3 is [[thm-cm-instability-of-a-hyperbolic-saddle]] applied after the eigenvalue computations of steps 1.3 and 2.2; clause 4 is the physical reading of [[lem-cm-energy-conservation-for-the-mechanical-system]] and is the reason [[thm-cm-energy-stability-of-a-strict-minimum]] asserts no asymptotic stability.

- **Units and coordinates.** $[E_{\rm phys}]=\mu\ell^2\tau^{-2}$ ([[def-cm01-units]]) and the physical rate corresponding to $\kappa$ is $\kappa/t_{\rm ref}$, of dimension $\tau^{-1}$. State norms apply to dimensionless numerical coordinates; fixed positive reference scales preserve the topology and stability predicates. At an equilibrium of a $C^1$ field, a $C^2$ chart transition gives similar derivative matrices, as [[def-cm16-stability-and-hyperbolicity-concepts]] clause (vi)(b) records.
