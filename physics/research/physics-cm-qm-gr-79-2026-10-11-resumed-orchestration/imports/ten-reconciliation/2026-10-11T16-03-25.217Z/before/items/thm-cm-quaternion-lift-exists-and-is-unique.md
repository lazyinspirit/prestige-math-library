---
id: thm-cm-quaternion-lift-exists-and-is-unique
kind: theorem
title: "Existence, uniqueness and sign ambiguity of the quaternion lift of a $C^1$ rotation path"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-cm-quaternion-rotation-map-and-cover, lem-cm-quaternion-product-rule-and-conjugation-formula, lem-cm-body-angular-velocity-of-a-rotation-path, lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity, def-cm-special-orthogonal-group, def-locally-lipschitz-in-the-state-variable, def-first-order-ode-initial-value-problem-and-solution, thm-picard-lindelof-local-existence-and-uniqueness, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-matrix-space, def-quaternions, thm-quaternions-form-a-division-ring, cor-continuous-image-of-an-interval-is-an-interval]
dependency_roles:
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  lem-cm-quaternion-product-rule-and-conjugation-formula: mathematical-premise
  lem-cm-body-angular-velocity-of-a-rotation-path: mathematical-premise
  lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-matrix-space: mathematical-premise
  def-quaternions: mathematical-premise
  thm-quaternions-form-a-division-ring: mathematical-premise
  cor-continuous-image-of-an-interval-is-an-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Sola, Quaternion kinematics for the error-state Kalman filter (arXiv:1711.02508), Section 2.4.2 (q = e^{omega t/2} solves qdot = (1/2) q (x) omega), printed pages 21-22, and Section 2.4.6 (the double cover: q and -q encode the same rotation), printed page 24"
      url: "https://arxiv.org/pdf/1711.02508"
    - title: "N. Trawny and S. I. Roumeliotis, Indirect Kalman Filter for 3D Attitude Estimation (University of Minnesota, TR-2005-002), Section 1.1 (a quaternion and its negative describe the same rotation) printed page 2, and Section 1.5 (quaternion time derivative), printed pages 9-10"
      url: "http://mars.cs.umn.edu/tr/reports/Trawny05b.pdf"
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, Digital Second Edition (2023), Introduction, Problems 7-9 (kernel {+I,-I} of the homomorphism SU(2) -> SO(3)), printed pages 20-21"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf"
verification:
  precheck: pass
---

## Statement

Let $I\subseteq\mathbb R$ be a nondegenerate open interval, let $R:I\to SO(3)$ be of class $C^1$ ([[def-cm-special-orthogonal-group]]) with body angular velocity $\omega_R$ in the sense of [[lem-cm-body-angular-velocity-of-a-rotation-path]], let $t_0\in I$, and let $q_0\in S^3$ satisfy $\rho(q_0)=R(t_0)$, with $\rho$ and $S^3$ as in [[def-cm-quaternion-rotation-map-and-cover]]. Then:

1. There is exactly one $C^1$ quaternion lift $q:I\to S^3$ of $R$ with $q(t_0)=q_0$, namely the unique solution on $I$ of the initial value problem

$$q'(t)=\tfrac12\,q(t)\,\varphi\bigl(\omega_R(t)\bigr),\qquad q(t_0)=q_0 .$$

2. Every $C^1$ lift $\tilde q:I\to S^3$ of $R$ satisfies $\tilde q=q$ or $\tilde q=-q$; in particular $-q$ is the lift with initial value $-q_0$, and $\rho\circ q=\rho\circ(-q)=R$.

## Facts & Assumptions

**Given:** The $C^1$ rotation path $R$, its body angular velocity $\omega_R$, the times $t_0\in I$, and the unit quaternion $q_0$ with $\rho(q_0)=R(t_0)$.

[F1] $\rho(q_0)\in SO(3)$ for $q_0\in S^3$; the assignment $q\mapsto\rho(q)$ restricts to a surjective homomorphism $S^3\to SO(3)$ whose kernel is $\{1,-1\}$, and $\rho(-q)=\rho(q)$; in particular $\rho(1)$ is the identity ([[def-cm-quaternion-rotation-map-and-cover]], Definition and Remarks).

[F2] For $q,q'\in S^3$ one has $qq'\in S^3$, $(qq')^{-1}=q'^{-1}q^{-1}$ and $q^{-1}=\bar q$ with $q\bar q=1$; the product of two $C^1$ quaternion curves is again $C^1$; the first assertions follow from $N(qq')=N(q)N(q')$, the inverse identity $xx^{-1}=x^{-1}x=1$ of the quaternion division algebra, and the definition of $S^3$, the last from the product rule ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clauses 1-2, [[def-quaternions]], [[thm-quaternions-form-a-division-ring]], [[def-cm-quaternion-rotation-map-and-cover]]).

[F3] The body angular velocity $\omega_R:I\to\mathbb R^3$ is continuous and uniquely characterized by $R'(t)=R(t)\,\Omega_{\omega_R(t)}$, where $\Omega_\omega$ is the matrix $z\mapsto\omega\times z$ ([[lem-cm-body-angular-velocity-of-a-rotation-path]] clauses 2-3).

[F4] For continuous $\omega:I\to\mathbb R^3$, $C^1$ $q:I\to\mathbb H$ with $q'=\tfrac12q\,\varphi(\omega(t))$ and $q(t_0)\in S^3$: $q(I)\subseteq S^3$, and $R=\rho\circ q$ is $C^1$ with $R'=R\,\Omega_\omega$; moreover the initial value problem $q'=\tfrac12q\,\varphi(\omega(t))$, $q(t_0)=q_0$ with $q_0\in S^3$ has exactly one solution on $I$ ([[lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity]] clauses 1-2).

[F5] A linear initial value problem $S'=S\,\Omega(t)$ on $M_3(\mathbb R)\cong\mathbb R^9$ with continuous coefficient $\Omega:I\to M_3(\mathbb R)$ satisfies the Picard-Lindelöf hypotheses: being linear in the state variable with the continuous matrix coefficient $\Omega(t)$, the field is continuous and locally Lipschitz in the state variable, locally uniformly in time ([[def-locally-lipschitz-in-the-state-variable]], [[def-first-order-ode-initial-value-problem-and-solution]], [[def-matrix-space]]); hence any two solutions through the same data agree on every common interval containing the initial time, and there is a unique maximal solution ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[F6] If $f:A\to\mathbb R$ is continuous on $A\subseteq\mathbb R$ and $I\subseteq A$ is an interval, then the image $f[I]$ is order-convex: for $a,b\in f[I]$ with $a\le b$ the whole segment $[a,b]$ lies in $f[I]$ ([[cor-continuous-image-of-an-interval-is-an-interval]] clause 1).

## Proof

**Proof technique:** direct; solve the quaternion equation through the lift lemma, then identify the rotation path through uniqueness for the linear matrix equation.

1.1 The body angular velocity $\omega_R$ is continuous by [F3], so [F4] applies with $\omega=\omega_R$, $t_0$ and $q_0\in S^3$: there is exactly one curve $q:I\to S^3$ of class $C^1$ with $q'=\tfrac12q\,\varphi(\omega_R(t))$ on $I$ and $q(t_0)=q_0$. [F3, F4]

2.1 Both $S:=R$ and $S:=\rho\circ q$ are $C^1$ curves $I\to M_3(\mathbb R)$ solving the same linear initial value problem $S'=S\,\Omega_{\omega_R(t)}$, $S(t_0)=R(t_0)$: for $R$ this is the characterization in [F3], and for $\rho\circ q$ it is clause 1 of [F4] applied to the solution of step 1.1. By [F5] the coefficient is continuous and the equation satisfies the Picard-Lindelöf hypotheses, so two solutions through the same data agree on every common interval containing $t_0$; the interval $I$ is such a common interval, hence $\rho\circ q=R$. Thus $q$ is a lift of $R$ with $q(t_0)=q_0$. [step 1.1, F3, F4, F5]

3.1 Let $\tilde q:I\to S^3$ be any $C^1$ lift of $R$ and put $h:=\tilde q\,q^{-1}=\tilde q\,\bar q:I\to\mathbb H$, a product of two $C^1$ curves and hence $C^1$ by [F2]. By [F2], $h$ takes values in $S^3$; by the homomorphism property and kernel of [F1], $\rho(h)=\rho(\tilde q)\rho(q^{-1})=\rho(\tilde q)\rho(q)^{-1}=R\,R^{-1}$, and this identity element of $SO(3)$ is $\rho(1)$; hence $h\in\{1,-1\}$ for every $t\in I$. The real part $\operatorname{Re}\circ h:I\to\mathbb R$ is continuous and takes its values in $\{1,-1\}$; by [F6] applied to the interval $I$ its image is order-convex, so it cannot contain both $1$ and $-1$ (the whole segment between them would lie in a two-point set), and it contains $1$ because $h(t_0)=q_0q_0^{-1}=1$; hence $\operatorname{Re} h\equiv1$ and, since $h\in\{1,-1\}$, $h\equiv1$ and $\tilde q=q$. Thus the lift with $q(t_0)=q_0$ is unique, which is the uniqueness asserted in clause 1; and $-q$ is a $C^1$ curve into $S^3$ with $(-q)(t_0)=-q_0$ and $\rho(-q)=\rho(q)=R$ by [F1], so it is the lift with initial value $-q_0$. This proves clauses 1 and 2. [step 1.1, step 2.1, F1, F2, F6, algebra] ∎

## Remarks

- The two lifts $q$ and $-q$ solve the same differential equation with opposite initial data and define the same rotation path; the sign is therefore not determined by $R$. Selecting one sign requires an initial choice, and no construction on this page selects a preferred sign.

- The statement is conditional on the countable-choice hypothesis of the published covering example `ex-su-two-to-so-three-as-a-covering-homomorphism` recorded in [[def-cm-quaternion-rotation-map-and-cover]], which is used through the covering and kernel facts of [F1] — that is, through the identification of $S^3$ with $SU(2)$ and the kernel $\{1,-1\}$. It is not used in the differential-equation part of the proof, which is choice-free.

- Nothing in the statement asserts that the covering $S^3\to SO(3)$ is nontrivial, that a closed rotation loop has a closed lift, or that any global continuous sign selection exists; those questions are treated on the companion examples page.
