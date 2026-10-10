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
deps: [def-sr-fermi-walker-transport, def-ck-tensor-field-on-minkowski-space, def-sr-chart-tetrad-and-congruence-distinction, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, def-vector-valued-derivative-and-integral, def-interval, def-sr-four-velocity-and-four-acceleration, def-flat-covariant-derivative-on-affine-minkowski-space, def-sr-regular-causal-curve-and-worldline, def-inertial-frame-and-inertial-chart, def-ck-and-multi-index-notation-in-several-variables, thm-algebra-of-derivatives, thm-chain-rule, def-derivative]
dependency_roles:
  def-sr-fermi-walker-transport: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-sr-chart-tetrad-and-congruence-distinction: mathematical-premise
  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval: mathematical-premise
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

**Given:** A $C^2$ future timelike worldline $x:I\to A$ with four-velocity $U$ and four-acceleration $A$ ([[def-sr-four-velocity-and-four-acceleration]]), an initial value $\tau_0\in I$ of the supplied parameter $s$ (not a required proper-time reading), an initial vector $X_0\in V$, and the Fermi–Walker transport equation of [[def-sr-fermi-walker-transport]].

[F1] The Fermi–Walker derivative is $D_{\mathrm{FW}}X/d\tau=X'/\tau'-c^{-2}\bigl(\eta(A,X)U-\eta(U,X)A\bigr)$, where $X'$ is the ordinary $V$-valued derivative of the field $X$ along $x$, equal to the covariant derivative along $x$ in the flat model ([[def-sr-fermi-walker-transport]], [[def-flat-covariant-derivative-on-affine-minkowski-space]] clause (d), [[def-vector-valued-derivative-and-integral]]).

[F2] In the ordered basis $(e_0,\dots,e_3)$ of an inertial frame, write $X=X^ae_a$, $U=U^ae_a$, $A=A^ae_a$ and $A_b=\eta_{bc}A^c$, $U_b=\eta_{bc}U^c$. Then $\eta(A,X)=A_bX^b$ and $\eta(U,X)=U_bX^b$, and the transport equation $D_{\mathrm{FW}}X/d\tau=0$ is equivalent to the linear system $X'^a=\tau'M^a{}_bX^b$ with $M^a{}_b=c^{-2}\bigl(U^aA_b-A^aU_b\bigr)$ ([[def-sr-fermi-walker-transport]], [[def-ck-tensor-field-on-minkowski-space]], [[def-inertial-frame-and-inertial-chart]]).

[F3] If $x$ is $C^k$ with $k\ge2$, then $U$ is $C^{k-1}$ and $A$ is $C^{k-2}$: $U=c\,x'/\sqrt{-\eta(x',x')}$ and $\tau'=c^{-1}\sqrt{-\eta(x',x')}$ are quotients of $C^{k-1}$ functions with nonvanishing denominator, and $A=U'/\tau'$ is a quotient of $C^{k-2}$ functions ([[def-sr-four-velocity-and-four-acceleration]], [[def-ck-and-multi-index-notation-in-several-variables]], [[thm-algebra-of-derivatives]]). Consequently, if $x$ is $C^2$ then $M$ and $C:=\tau'M$ are continuous, and if $x$ is $C^k$ then both are $C^{k-2}$ because $\tau'$ is $C^{k-1}$.

[F4] Linear matrix ODEs on a compact interval: for $I_0=[a,b]$ compact, $C:I_0\to M_n(\mathbb R)$ continuous, $t_0\in I_0$ and $Y_0\in M_n(\mathbb R)$, the problem $Y'=C(t)Y$, $Y(t_0)=Y_0$ has a unique solution on all of $I_0$ ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).



[F6] Calculus closure: sums, products, quotients with nonvanishing denominators and compositions of $C^j$ maps are $C^j$, with the usual derivative formulas ([[def-ck-and-multi-index-notation-in-several-variables]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[def-derivative]]).

[F7] An order-convex subset $I\subseteq\mathbb R$ with at least two elements is an interval: for $s,t\in I$ the whole segment between them lies in $I$, so for any $\tau\in I$ the compact interval with endpoints $\tau_0$ and $\tau$ is contained in $I$ ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Work in the inertial chart of one inertial frame and identify $V$ with $\mathbb R^4$ by its ordered basis, so that fields along $x$ are $\mathbb R^4$-valued functions; by [F1] and [F2] the transport equation is the linear system $X'=C(s)X$ with coefficient matrix $C^a{}_b(s)=\tau'(s)c^{-2}(U^a(s)A_b(s)-A^a(s)U_b(s))$. By [F3] the entries of $C$ are continuous when $x$ is $C^2$, so $C:I\to M_4(\mathbb R)$ is a continuous matrix-valued function on the interval $I$; and if $x$ is $C^k$ with $k\ge2$ then $U$ is $C^{k-1}$ and $A$ is $C^{k-2}$, so $C$ is $C^{k-2}$. [F1, F2, F3]

2.1 Fundamental solution on $I$: by [F7], every point $s\in I$ lies in a nondegenerate compact interval $K\subseteq I$ containing $\tau_0$; if $s$ is interior to $I$, choose $K$ with $s$ interior to $K$, and use the corresponding one-sided endpoint reading otherwise. Such intervals exist because $I$ is order-convex and has at least two points; enlarge the segment between $s$ and $\tau_0$ using another point when necessary. By [F4], $\Phi'=C\Phi$, $\Phi(\tau_0)=I_4$ has a unique solution on every such $K$. On the intersection of two intervals the solutions agree by [F4] if the intersection is nondegenerate, and by their common initial value if it is the singleton $\{\tau_0\}$. Thus $\Phi(s)$ is their unique common value. Using a compact interval containing a neighbourhood of each interior $s$, or a relative one-sided neighbourhood at an included endpoint, shows that $\Phi$ is $C^1$, $\Phi'=C\Phi$ and $\Phi(\tau_0)=I_4$ on $I$. Unique values define the map without a choice principle. [F4, F7, step 1.1]

3.1 Uniqueness of the vector initial value problem: let $\tilde X:I\to V$ solve $X'=CX$ with $\tilde X(\tau_0)=X_0$. Form the matrix $\Psi$ whose first column is $\tilde X$ and whose other columns are zero, and let $\Psi_0$ be the corresponding constant initial matrix with first column $X_0$. Then $\Psi'=C\Psi$ and $\Psi(\tau_0)=\Psi_0$. The matrix $\Phi\Psi_0$ satisfies the same problem by step 2.1 and the product rule with constant right factor. Uniqueness in [F4] on every nondegenerate compact subinterval containing the initial point gives $\Psi=\Phi\Psi_0$ on $I$. Their first columns therefore give $\tilde X=\Phi X_0$, proving uniqueness. [F4, step 1.1, step 2.1]

4.1 Existence and linearity: with $\Phi$ as in step 2.1 and $X:=\Phi X_0$, the field $X$ is $C^1$, satisfies $X'=\Phi'X_0=C\Phi X_0=CX$ and $X(\tau_0)=\Phi(\tau_0)X_0=X_0$; hence $X$ is a $C^1$ solution on $I$ of the transport equation with initial value $X_0$, and step 3.1 shows that it is the only one. Since matrix multiplication is linear in its second factor, the map $X_0\mapsto X=\Phi X_0$ is linear from $V$ to the space of $C^1$ fields along $x$ satisfying the transport equation. [step 2.1, step 3.1]

5.1 Regularity: assume $x$ is $C^k$ with $k\ge2$, so that $C$ is $C^{k-2}$ by step 1.1, and let $X$ be the solution of step 4.1, which satisfies $X'=CX$. For $k=2$ the $C^1$ conclusion is already step 4.1. For $k\ge3$, one proves by induction on $j=1,\dots,k-2$ that $X$ is $C^j$: for $j=1$ this is step 4.1; if $X$ is $C^j$ with $j\le k-2$, then the product $CX$ is $C^j$ by [F6], because $C$ is $C^{k-2}$ and $j\le k-2$; hence $X'=CX$ is $C^j$, so $X$ is $C^{j+1}$. The induction ends at $j=k-2$, giving that $X$ is $C^{k-1}$. [F6, step 1.1, step 4.1]

5.2 The initial-tetrad clause: let $E_0(\tau_0),\dots,E_3(\tau_0)$ be a tetrad at $x(\tau_0)$ with $E_0(\tau_0)=U(\tau_0)/c$ ([[def-sr-chart-tetrad-and-congruence-distinction]]). By steps 4.1 and 3.1, for each $a$ there is exactly one $C^1$ Fermi–Walker transported field $E_a:I\to V$ along $x$ with $E_a(\tau_0)$ equal to the prescribed value. For $a=0$ the field $U/c$ is $C^1$, satisfies $D_{\mathrm{FW}}(U/c)/d\tau=0$ by clause (b) of [[def-sr-fermi-walker-transport]], and has the same initial value $U(\tau_0)/c$; by the uniqueness of step 3.1, $E_0=U/c$. Hence there is a unique tuple of Fermi–Walker transported fields with the prescribed initial values, and its time component is the four-velocity up to the factor $1/c$. [step 3.1, step 4.1]

6.1 Conclusion: step 4.1 and step 3.1 establish existence, uniqueness and linearity in the initial value for the $C^1$ solution of the Fermi–Walker transport equation on $I$; step 5.1 establishes the $C^{k-1}$ regularity when the worldline is $C^k$ with $k\ge2$ (in particular $C^1$ when $k=2$); and step 5.2 establishes the uniquely determined tuple with prescribed tetrad initial values and identifies its time component as $U/c$. Whether such a tuple remains a tetrad at every time is not claimed here and is proved in the following item. [step 3.1, step 4.1, step 5.1, step 5.2] ∎

## Remarks

- **Where the linear ODE supplier is used.** The analytic input is the global existence and uniqueness theorem for linear matrix systems on nondegenerate compact intervals, [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]. The generic-parameter coefficient is $C=\tau'M$, with $M^a{}_b=c^{-2}(U^aA_b-A^aU_b)$; compact-interval patching gives the solution on the prescribed interval $I$, including any included endpoints. No extension of the data outside $I$ or maximal open-interval solution is assumed.
