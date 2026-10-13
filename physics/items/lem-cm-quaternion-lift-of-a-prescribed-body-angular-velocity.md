---
id: lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity
kind: lemma
title: "The quaternion lift of a prescribed continuous angular velocity: $q'=\\tfrac12 q\\,\\varphi(\\omega(t))$ keeps $S^3$ invariant, its rotation path has body angular velocity $\\omega$, and the initial value problem has a unique solution on the whole interval"
status: published
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-quaternion-rotation-map-and-cover, lem-cm-quaternion-product-rule-and-conjugation-formula, lem-cm-body-angular-velocity-of-a-rotation-path, def-quaternions, thm-quaternions-form-a-division-ring, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, lem-reverse-triangle-inequality-in-a-normed-space, thm-extreme-value-metric, def-locally-lipschitz-in-the-state-variable, def-first-order-ode-initial-value-problem-and-solution, def-maximal-ode-solution, thm-picard-lindelof-local-existence-and-uniqueness, thm-existence-and-uniqueness-of-a-maximal-ode-solution, thm-cm-compact-continuation-for-locally-lipschitz-odes, thm-heine-borel-rn, def-metric-compactness, thm-metric-continuity-characterisations, thm-t1-iff-singletons-are-closed, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  lem-cm-quaternion-product-rule-and-conjugation-formula: mathematical-premise
  lem-cm-body-angular-velocity-of-a-rotation-path: mathematical-premise
  def-quaternions: mathematical-premise
  thm-quaternions-form-a-division-ring: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  lem-reverse-triangle-inequality-in-a-normed-space: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-metric-compactness: mathematical-premise
  thm-metric-continuity-characterisations: mathematical-premise
  thm-t1-iff-singletons-are-closed: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Sola, Quaternion kinematics for the error-state Kalman filter (arXiv:1711.02508), Section 2.4.1 ((90)-(93): q* qdot is a pure quaternion and qdot = q (x) Omega) and Section 2.4.2 ((97)-(99): omega = 2 Omega, qdot = (1/2) q (x) omega, q = e^{omega t/2}), printed pages 20-22"
      url: "https://arxiv.org/pdf/1711.02508"
    - title: "N. Trawny and S. I. Roumeliotis, Indirect Kalman Filter for 3D Attitude Estimation (University of Minnesota, TR-2005-002), Section 1.5 (quaternion time derivative of a moving frame, equations (80)-(89)), printed pages 9-10"
      url: "http://mars.cs.umn.edu/tr/reports/Trawny05b.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.1 (fixed point theorems and the contraction principle), Section 2.2 (the basic existence and uniqueness result, Theorem 2.2), Section 2.3 (some extensions), Section 2.6 (extensibility of solutions: Theorem 2.13 and Corollary 2.15), printed pages 33-41 and 50-53"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
verification:
  precheck: pass
---

## Statement

Let $I\subseteq\mathbb R$ be a nondegenerate open interval, let $\omega:I\to\mathbb R^3$ be continuous, and consider on the open time-state domain $D:=I\times\mathbb H\subseteq\mathbb R\times\mathbb H$ the initial value problem

$$q'(t)=\tfrac12\,q(t)\,\varphi\bigl(\omega(t)\bigr),\qquad q(t_0)=q_0,$$

read as the first-order system of [[def-first-order-ode-initial-value-problem-and-solution]] with time-state domain $D$, state space $\mathbb H$, and right-hand side $F:D\to\mathbb H$, $F(t,q)=\tfrac12q\,\varphi(\omega(t))$, where $\varphi$, $S^3$ and $\rho$ are those of [[def-cm-quaternion-rotation-map-and-cover]].

1. If $q:I\to\mathbb H$ is a $C^1$ solution of $q'=\tfrac12q\,\varphi(\omega(t))$, then $N\circ q$ is constant on $I$; if $q(t_0)\in S^3$ for one $t_0\in I$, then $q(I)\subseteq S^3$ and the curve

$$R:=\rho\circ q:I\longrightarrow SO(3),\qquad R(t):=\rho(q(t)),$$

is of class $C^1$ with $R'(t)=R(t)\,\Omega_{\omega(t)}$ for every $t\in I$; consequently $\omega$ is the body angular velocity of $R$ in the sense of [[lem-cm-body-angular-velocity-of-a-rotation-path]].
2. For every $t_0\in I$ and $q_0\in S^3$ the problem has exactly one maximal solution, and its domain is all of $I$; that is, there is exactly one $C^1$ curve $q:I\to S^3$ with $q(t_0)=q_0$ and $q'=\tfrac12q\,\varphi(\omega(t))$ on $I$, and clause 1 applies to it.

## Facts & Assumptions

**Given:** The interval $I$, the continuous curve $\omega$, the initial data $(t_0,q_0)\in I\times\mathbb H$, and the objects $\mathbb H,\varphi,S^3,\rho$ of [[def-cm-quaternion-rotation-map-and-cover]].

[F1] $\mathbb H$ is $\mathbb R^4$ with its coordinate norm $\|\cdot\|_2$, the quaternion product, and the identification $\varphi:\mathbb R^3\to\operatorname{Im}\mathbb H$; $N(x)=\|x\|_2^2$; $S^3=N^{-1}(1)$; and $\rho(q)(x)=qxq^{-1}$ for $q\ne0$ ([[def-cm-quaternion-rotation-map-and-cover]], [[def-quaternions]], [[def-euclidean-inner-product]]).

[F2] For $p=s+\varphi(u)$, $q=t+\varphi(w)$ one has $pq=(st-\langle u,w\rangle_2)+\varphi(sw+tu+u\times w)$; for $C^1$ curves $p,q:I\to\mathbb H$, $(pq)'=p'q+pq'$ ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clause 1).

[F3] $N(pq)=N(p)N(q)$, and for a $C^1$ curve $q:I\to\mathbb H$ one has $(N\circ q)'=2\operatorname{Re}(q'\bar q)=2\langle q',q\rangle_2$ ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clause 2).

[F4] $q\,\varphi(\omega)\,\bar q=\varphi\bigl((a^2-\|u\|_2^2)\omega+2\langle u,\omega\rangle_2u+2a(u\times \omega)\bigr)$ for $q=a+\varphi(u)$, in particular its real part is $0$ ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clause 3).

[F5] For $q_0\in S^3$ one has $\rho(q_0)\in SO(3)$, and $R\mapsto\rho(R)$ is a group homomorphism on $S^3$ ([[def-cm-quaternion-rotation-map-and-cover]]).

[F6] For a $C^1$ curve $R:I\to SO(3)$ the body angular velocity $\omega_R$ exists uniquely, with $R'=R\,\Omega_{\omega_R}$ ([[lem-cm-body-angular-velocity-of-a-rotation-path]]).

[F7] The system is an initial value problem in the sense of [[def-first-order-ode-initial-value-problem-and-solution]] with open domain $D=I\times\mathbb H$. In applying [[def-locally-lipschitz-in-the-state-variable]], a compact time-state cylinder here is a product $J\times K\subseteq D$ with $J\subseteq I$ a compact interval and $K\subseteq\mathbb H$ compact; the condition requires one finite state-Lipschitz constant on each such product. If $F$ is continuous and satisfies this condition, then Picard-Lindelof local existence and uniqueness holds, and there is a unique maximal solution ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-maximal-ode-solution]]); any two solutions through the same initial data agree on every common interval containing the initial time ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F8] Compact continuation: if a solution whose graph lies in a compact subset $K$ of the domain approaches a finite endpoint, then it extends past that endpoint ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]]).

[F9] For every finite $n\ge1$, a subset of $\mathbb R^n$ is compact if and only if it is closed and bounded; continuous preimages of closed sets are closed, singletons in a metric space are closed, and polynomial maps such as $N$ are continuous ([[thm-heine-borel-rn]], [[def-metric-compactness]], [[thm-metric-continuity-characterisations]], [[thm-t1-iff-singletons-are-closed]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F10] The Euclidean norm is a norm on $\mathbb R^3$ and satisfies $|\|u\|_2-\|v\|_2|\le\|u-v\|_2$, so $t\mapsto\|\omega(t)\|_2$ is continuous; a continuous real function on a nonempty compact metric space is bounded ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-reverse-triangle-inequality-in-a-normed-space]], [[thm-extreme-value-metric]]).

## Proof

**Proof technique:** direct; the field is Lipschitz with the continuous bound $\|\omega\|$, the norm is conserved by the conjugation formula, and compact continuation keeps the solution on the compact sphere.

1.1 The map $F(t,q)=\tfrac12q\,\varphi(\omega(t))$ on $D=I\times\mathbb H$ is continuous, since the product is bilinear and continuous and $\omega$ is continuous. For $q,q'\in\mathbb H$ and $t\in I$ one has $F(t,q)-F(t,q')=\tfrac12(q-q')\varphi(\omega(t))$, so by [F3] and [F1] $\|F(t,q)-F(t,q')\|_2=\tfrac12\|q-q'\|_2\,\|\varphi(\omega(t))\|_2=\tfrac12\|q-q'\|_2\,\|\omega(t)\|_2$. The norm continuity and compact boundedness in [F10] give a finite bound $M_J:=\max_{t\in J}\|\omega(t)\|_2$ on every nonempty compact time interval $J\subset I$. For a compact time-state cylinder $J\times K$ as specified in [F7], $L=M_J/2$ is one finite state-Lipschitz constant, since the estimate holds for every $q,q'\in\mathbb H$ at each $t\in J$. Thus $F$ satisfies the hypotheses of [F7]. [F1, F3, F7, F10, algebra]

1.2 Let $q:I\to\mathbb H$ be a $C^1$ solution. By [F3] and the differential equation, $(N\circ q)'=2\operatorname{Re}(q'\bar q)=\operatorname{Re}\bigl(q\,\varphi(\omega(t))\,\bar q\bigr)$, and this is $0$ by [F4]. Hence $N\circ q$ is constant on $I$; if $N(q(t_0))=1$, this constant is $1$ and $q(I)\subseteq S^3$. [F3, F4, algebra]

1.3 The set $S^3=N^{-1}(\{1\})$ is closed and bounded in $\mathbb R^4$: it is the preimage of the closed singleton $\{1\}$ under the continuous map $N$, and every $q\in S^3$ has $\|q\|_2^2=N(q)=1$. By [F9] it is compact. [F1, F9]

2.1 By [F7] and step 1.1 the problem has a unique maximal solution $x:I_x\to\mathbb H$ through $(t_0,q_0)$, and its domain $I_x$ is an open interval containing $t_0$. [step 1.1, F7]

2.2 Let $q:I\to\mathbb H$ be any $C^1$ solution with $q(t_0)\in S^3$, so $q(I)\subseteq S^3$ and $\rho(q(t))\in SO(3)$ for all $t$ by [F5]; fix $v\in\mathbb R^3$ and put $f(t):=q(t)\,\varphi(v)\,\bar q(t)$. By [F2] the curve $f$ is $C^1$ with $f'=q'\,\varphi(v)\,\bar q+q\,\varphi(v)\,\overline{q'}$, and $q'=\tfrac12q\,\varphi(\omega(t))$, $\overline{q'}=\tfrac12\varphi(-\omega)\bar q$ by the anti-automorphism identity $\overline{pq}=\bar q\bar p$ of [F3] and the linearity of conjugation ($\overline{\varphi(\omega)}=\varphi(-\omega)$). The finite product formula of [F2] gives $\varphi(\omega)\varphi(v)+\varphi(v)\varphi(-\omega)=2\,\varphi(\omega\times v)$, so $f'(t)=\tfrac12 q\bigl(\varphi(\omega)\varphi(v)+\varphi(v)\varphi(-\omega)\bigr)\bar q=q(t)\,\varphi(\omega(t)\times v)\,\bar q(t)$. The $a$-th entry of the matrix $R(t)=\rho(q(t))$ is the component of $R(t)e_a=f(e_a)$ read through $\varphi$, so each entry of $R$ is $C^1$ and, by the displayed identity with $v=e_a$, $R'(t)e_a=\rho(q(t))\bigl(\varphi(\omega(t)\times e_a)\bigr)=R(t)\,\Omega_{\omega(t)}e_a$ for $a=1,2,3$. Both sides are linear in the vector they act on, so $R'(t)=R(t)\Omega_{\omega(t)}$, and [F6] identifies $\omega$ as the body angular velocity of $R$. This proves clause 1. [step 1.2, F2, F5, F6, algebra]

3.1 Assume $q_0\in S^3$, so that the maximal solution $x$ of step 2.1 satisfies $x(I_x)\subseteq S^3$ by step 1.2. If $I_x\ne I$, then since both are intervals containing $t_0$ either $\beta:=\sup I_x<\sup I$ or $\alpha:=\inf I_x>\inf I$. In the first case $t_0<\beta<\sup I$; choose $b\in I$ with $\beta<b<\sup I$ and choose $\delta>0$ with $\beta-\delta>t_0$. The set $K:=[t_0,b]\times S^3$ lies in $D=I\times\mathbb H$, since $I$ is an interval containing $t_0$ and $b$. It is closed and bounded in $\mathbb R^5\cong\mathbb R\times\mathbb H$: $[t_0,b]$ is closed and bounded in $\mathbb R$, and $S^3$ is closed and bounded in $\mathbb R^4$ by step 1.3. Hence $K$ is compact by [F9]. For every $t\in(\beta-\delta,\beta)$ the graph point $(t,x(t))$ lies in $K$, so [F8], applied to $x|_{[t_0,\beta)}$ with finite endpoint $\beta$, extends $x$ past $\beta$, contradicting maximality. If instead $\alpha:=\inf I_x>\inf I$, define the reflected intervals $I^*:=\{s:2t_0-s\in I\}$ and $I_x^*:=\{s:2t_0-s\in I_x\}\subset I^*$, and define $\tilde x(s):=x(2t_0-s)$. Direct differentiation shows that $\tilde x$ solves the same type of equation on $I_x^*$ with continuous rate $s\mapsto-\omega(2t_0-s)$; reflection carries any proper extension of $\tilde x$ to a proper extension of $x$, so $\tilde x$ is maximal. Its finite right endpoint $2t_0-\alpha$ lies strictly below the right endpoint $2t_0-\inf I$ of $I^*$, so the first-case argument applied to $\tilde x$ gives a contradiction. Therefore $I_x=I$, and the problem with $q_0\in S^3$ has a solution on all of $I$. [step 1.2, step 2.1, step 1.3, F8, F9, algebra]

4.1 Finally, let $q,q'':I\to\mathbb H$ be two solutions with the same value at $t_0$. By [F7] any two solutions through the same initial data agree on every common interval containing $t_0$, and $I$ is such an interval; hence $q=q''$. Combined with step 3.1 (existence on $I$ for $q_0\in S^3$ for the maximal solution, whose restrictions are the solutions) and step 2.2, this proves clause 2 and completes the proof. [step 3.1, step 2.2, F7] ∎

## Remarks

- The hypotheses are minimal in the usual sense: $\omega$ is only continuous, the equation is linear in $q$ with coefficient $\tfrac12\varphi(\omega(t))$, and no regularity of $\omega$ beyond continuity is used; the solution is $C^1$ but not claimed to be more regular unless $\omega$ is.
- The invariance argument uses the identity $(N\circ q)'=\operatorname{Re}(q\varphi(\omega)\bar q)$ and the scalar-part computation of the conjugation formula; it does not use the unit condition at intermediate times, so it applies along the whole maximal solution.
- If $I$ is replaced by a non-open interval, the statement is read on its interior; the maximal-domain conclusion is a statement about open domains. Nothing here asserts completeness of the field in any other sense.
