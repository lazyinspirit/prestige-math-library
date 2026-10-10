---
id: lem-sr-fermi-walker-transport-existence-and-uniqueness
kind: lemma
domain: mathematics
title: "Existence, uniqueness and linearity of Fermi-Walker transport"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sr-fermi-walker-transport, def-ck-tensor-field-on-minkowski-space, def-sr-chart-tetrad-and-congruence-distinction, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-maximal-ode-solution, def-vector-valued-derivative-and-integral, def-interval, def-sr-four-velocity-and-four-acceleration, def-flat-covariant-derivative-on-affine-minkowski-space, def-sr-regular-causal-curve-and-worldline, def-inertial-frame-and-inertial-chart, def-ck-and-multi-index-notation-in-several-variables, thm-algebra-of-derivatives, thm-chain-rule, def-derivative]
dependency_roles:
  def-sr-fermi-walker-transport: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-sr-chart-tetrad-and-congruence-distinction: mathematical-premise
  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-flat-covariant-derivative-on-affine-minkowski-space: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-derivative: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 8-16 (inertial frames built from rigid rods and synchronized clocks, simultaneity, time dilation, length contraction) and pp. 26-27 (worldline, proper time (1.97)-(1.99), four-velocity); Chapter 3 pp. 68-71 (proper-time functional)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $x:I\to A$ be a $C^2$ future timelike worldline with four-velocity $U$ and four-acceleration $A$ ([[def-sr-four-velocity-and-four-acceleration]], [[def-sr-regular-causal-curve-and-worldline]]), let $\tau_0\in I$ and $X_0\in V$. Then there is exactly one $C^1$ field $X:I\to V$ along $x$ with $D_{\mathrm{FW}}X/d\tau=0$ and $X(\tau_0)=X_0$ ([[def-sr-fermi-walker-transport]]); if $x$ is $C^k$ with $k\ge2$ then $X$ is $C^{k-1}$. The map $X_0\mapsto X$, from $V$ to the $C^1$ fields along $x$ satisfying the transport equation, is linear. Consequently, for every tetrad $(E_0(\tau_0),\dots,E_3(\tau_0))$ at $x(\tau_0)$ with $E_0(\tau_0)=U(\tau_0)/c$ there is a unique tuple of Fermi–Walker transported fields with those initial values; whether that tuple remains a tetrad at every time is proved in the following item.

## Facts & Assumptions

**Given:** A $C^2$ future timelike worldline $x:I\to A$ with four-velocity $U$ and four-acceleration $A$ ([[def-sr-four-velocity-and-four-acceleration]]), a parameter $\tau_0\in I$, an initial vector $X_0\in V$, and the Fermi–Walker transport equation of [[def-sr-fermi-walker-transport]].

[F1] The Fermi–Walker derivative is $D_{\mathrm{FW}}X/d\tau=X'-c^{-2}\bigl(\eta(A,X)U-\eta(U,X)A\bigr)$, where $X'$ is the ordinary $V$-valued derivative of the field $X$ along $x$, equal to the covariant derivative along $x$ in the flat model ([[def-sr-fermi-walker-transport]], [[def-flat-covariant-derivative-on-affine-minkowski-space]] clause (d), [[def-vector-valued-derivative-and-integral]]).

[F2] In the ordered basis $(e_0,\dots,e_3)$ of an inertial frame, write $X=X^ae_a$, $U=U^ae_a$, $A=A^ae_a$ and $A_b=\eta_{bc}A^c$, $U_b=\eta_{bc}U^c$. Then $\eta(A,X)=A_bX^b$ and $\eta(U,X)=U_bX^b$, and the transport equation $D_{\mathrm{FW}}X/d\tau=0$ is equivalent to the linear system $X'^a=M^a{}_bX^b$ with $M^a{}_b=c^{-2}\bigl(U^aA_b-A^aU_b\bigr)$ ([[def-sr-fermi-walker-transport]], [[def-ck-tensor-field-on-minkowski-space]], [[def-inertial-frame-and-inertial-chart]]).

[F3] If $x$ is $C^k$ with $k\ge2$, then $U$ is $C^{k-1}$ and $A$ is $C^{k-2}$: $U=c\,x'/\sqrt{-\eta(x',x')}$ and $\tau'=c^{-1}\sqrt{-\eta(x',x')}$ are quotients of $C^{k-1}$ functions with nonvanishing denominator, and $A=U'/\tau'$ is a quotient of $C^{k-2}$ functions ([[def-sr-four-velocity-and-four-acceleration]], [[def-ck-and-multi-index-notation-in-several-variables]], [[thm-algebra-of-derivatives]]). Consequently, if $x$ is $C^2$ then $M$ is continuous, and if $x$ is $C^k$ then $M$ is $C^{k-2}$.

[F4] Linear matrix ODEs on a compact interval: for $I_0=[a,b]$ compact, $C:I_0\to M_n(\mathbb R)$ continuous, $t_0\in I_0$ and $Y_0\in M_n(\mathbb R)$, the problem $Y'=C(t)Y$, $Y(t_0)=Y_0$ has a unique solution on all of $I_0$ ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[F5] Maximal solutions: a first-order initial value problem with continuous, locally state-Lipschitz right-hand side has a unique maximal solution, whose domain is an open interval containing the initial time, and every other solution through the same data is its restriction ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-maximal-ode-solution]]).

[F6] Calculus closure: sums, products, quotients with nonvanishing denominators and compositions of $C^j$ maps are $C^j$, with the usual derivative formulas ([[def-ck-and-multi-index-notation-in-several-variables]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[def-derivative]]).

[F7] An order-convex subset $I\subseteq\mathbb R$ with at least two elements is an interval: for $s,t\in I$ the whole segment between them lies in $I$, so for any $\tau\in I$ the compact interval with endpoints $\tau_0$ and $\tau$ is contained in $I$ ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Work in the inertial chart of one inertial frame and identify $V$ with $\mathbb R^4$ by its ordered basis, so that fields along $x$ are $\mathbb R^4$-valued functions; by [F1] and [F2] the transport equation is the linear system $X'=M(\tau)X$ with coefficient matrix $M^a{}_b(\tau)=c^{-2}(U^a(\tau)A_b(\tau)-A^a(\tau)U_b(\tau))$. By [F3] the entries of $M$ are continuous when $x$ is $C^2$, so $M:I\to M_4(\mathbb R)$ is a continuous matrix-valued function on the interval $I$; and if $x$ is $C^k$ with $k\ge2$ then $U$ is $C^{k-1}$ and $A$ is $C^{k-2}$, so $M$ is $C^{k-2}$. [F1, F2, F3]

2.1 Fundamental solution on $I$: let $\tau\in I$ and let $I_{\tau}$ be the compact interval with endpoints $\tau_0$ and $\tau$, which is contained in $I$ by [F7] and contains $\tau_0$; by [F4] applied with $n=4$, the matrix problem $\Phi'=M\Phi$, $\Phi(\tau_0)=I_4$ has a unique solution $\Phi_{I_\tau}$ on $I_\tau$. If $I_{\tau'}$ is another such compact interval, the two solutions agree on $I_\tau\cap I_{\tau'}$ (both restrict to solutions of the same matrix problem on that compact interval, which is an interval containing $\tau_0$ and $\tau$ as above, and [F4] gives uniqueness there), so the assignment $\Phi(\tau):=\Phi_{I_\tau}(\tau)$ is well defined; it does not depend on the chosen interval, and different intervals overlap in a neighbourhood of every common point. The resulting map $\Phi:I\to M_4(\mathbb R)$ satisfies $\Phi(\tau_0)=I_4$ and, on every compact subinterval of $I$ containing $\tau_0$ and hence at every point of $I$ in the domain-relative sense, $\Phi'(\tau)=M(\tau)\Phi(\tau)$. No choice principle is used: $\Phi$ is defined by the common value of solutions, which is unique. [F4, F7, step 1.1]

3.1 Uniqueness of the vector initial value problem: let $\tilde X:I\to V$ be a $C^1$ solution of $X'=MX$ on $I$ with $\tilde X(\tau_0)=X_0$. Let $\delta$ be the $4\times4$ matrix with $\delta^1{}_1=1$ and all other entries $0$, and let $\Psi(\tau)$ be the matrix with entries $\Psi^a{}_b(\tau)=\tilde X^a(\tau)\delta^1{}_b$, i.e. the matrix whose first column is $\tilde X(\tau)$ and whose remaining columns vanish. Then $\Psi$ is $C^1$ and $\Psi'^a{}_b=\tilde X'^a\delta^1{}_b=(M\tilde X)^a\delta^1{}_b=M^a{}_c\tilde X^c\delta^1{}_b=(M\Psi)^a{}_b$, so $\Psi'=M\Psi$, and $\Psi(\tau_0)$ is the matrix $X_0\delta$ with first column $X_0$. On the other hand $\Phi(X_0\delta)$ also solves the matrix problem $Y'=MY$, $Y(\tau_0)=X_0\delta$, because $(\Phi X_0\delta)'=\Phi'(X_0\delta)=M\Phi X_0\delta$ by step 2.1 and the derivative of a constant matrix factor; by the uniqueness in [F4] on every compact subinterval of $I$ containing $\tau_0$ (to which both sides restrict as solutions), $\Psi=\Phi(X_0\delta)$ on $I$. Comparing first columns gives $\tilde X=\Phi X_0$. In particular any two solutions of the vector problem with the same initial value agree on $I$, since each equals $\Phi X_0$. [F4, step 1.1, step 2.1]

4.1 Existence and linearity: with $\Phi$ as in step 2.1 and $X:=\Phi X_0$, the field $X$ is $C^1$, satisfies $X'=\Phi'X_0=M\Phi X_0=MX$ and $X(\tau_0)=\Phi(\tau_0)X_0=X_0$; hence $X$ is a $C^1$ solution on $I$ of the transport equation with initial value $X_0$, and step 3.1 shows that it is the only one; by [F5] the maximal solution of the system is defined on an open interval containing the initial time and every other solution through the same data is its restriction, so the solution $X$ on $I$ is the maximal one and uniqueness holds on $I$. Since matrix multiplication is linear in its second factor, the map $X_0\mapsto X=\Phi X_0$ is linear from $V$ to the space of $C^1$ fields along $x$ satisfying the transport equation. [F5, step 2.1, step 3.1]

5.1 Regularity: assume $x$ is $C^k$ with $k\ge2$, so that $M$ is $C^{k-2}$ by step 1.1, and let $X$ be the solution of step 4.1, which satisfies $X'=MX$. One proves by induction on $j=1,\dots,k-2$ that $X$ is $C^j$: for $j=1$ this is step 4.1; if $X$ is $C^j$ with $j\le k-2$, then the product $MX$ is $C^j$ by [F6], because $M$ is $C^{k-2}$ and $j\le k-2$; hence $X'=MX$ is $C^j$, so $X$ is $C^{j+1}$. The induction ends at $j=k-2$, giving that $X$ is $C^{k-1}$. [F6, step 1.1, step 4.1]

5.2 The initial-tetrad clause: let $E_0(\tau_0),\dots,E_3(\tau_0)$ be a tetrad at $x(\tau_0)$ with $E_0(\tau_0)=U(\tau_0)/c$ ([[def-sr-chart-tetrad-and-congruence-distinction]]). By steps 4.1 and 3.1, for each $a$ there is exactly one $C^1$ Fermi–Walker transported field $E_a:I\to V$ along $x$ with $E_a(\tau_0)$ equal to the prescribed value. For $a=0$ the field $U/c$ is $C^1$, satisfies $D_{\mathrm{FW}}(U/c)/d\tau=0$ by clause (b) of [[def-sr-fermi-walker-transport]], and has the same initial value $U(\tau_0)/c$; by the uniqueness of step 3.1, $E_0=U/c$. Hence there is a unique tuple of Fermi–Walker transported fields with the prescribed initial values, and its time component is the four-velocity up to the factor $1/c$. [step 3.1, step 4.1]

6.1 Conclusion: step 4.1 and step 3.1 establish existence, uniqueness and linearity in the initial value for the $C^1$ solution of the Fermi–Walker transport equation on $I$; step 5.1 establishes the $C^{k-1}$ regularity when the worldline is $C^k$ with $k\ge2$ (in particular $C^1$ when $k=2$); and step 5.2 establishes the uniquely determined tuple with prescribed tetrad initial values and identifies its time component as $U/c$. Whether such a tuple remains a tetrad at every time is not claimed here and is proved in the following item. [step 3.1, step 4.1, step 5.1, step 5.2] ∎

## Remarks

- **Where the linear ODE supplier is used.** The only analytic input is the global existence and uniqueness theorem for linear matrix systems on compact intervals, [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]; the passage from compact subintervals to the whole parameter interval $I$ is made by patching, and uniqueness is obtained by encoding the vector equation as a matrix equation with a rank-one initial matrix. The maximal-solution formulation of the same argument is available through [[def-maximal-ode-solution]] and [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]: the right-hand side $F(\tau,X)=M(\tau)X$ is continuous and locally Lipschitz in $X$ on the open domain containing $\{(\tau,X):\tau\in I\}$, and the maximal solution there coincides with the field constructed above on $I$.
