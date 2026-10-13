---
id: thm-cm-instability-of-a-hyperbolic-saddle
kind: theorem
title: "A hyperbolic equilibrium whose linearisation has an eigenvalue with positive real part is unstable"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism, lem-exponential-series-of-a-bounded-operator, thm-cm-compact-continuation-for-locally-lipschitz-odes, def-cm-equilibrium-and-lyapunov-stability, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, def-metric-ball, def-improper-integral-at-infinity, def-ck-euclidean-maps-and-diffeomorphisms, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, thm-heine-borel-rn, thm-cauchy-schwarz-and-the-euclidean-norm, def-complexification-of-a-real-vector-space, def-complexification-of-a-real-linear-map, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-euclidean-space-complete, thm-complex-numbers-are-the-real-coordinate-plane, thm-comparison-test-for-improper-integrals, thm-derivative-of-exponential, thm-exponential-limits-and-range]
dependency_roles:
  thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  def-improper-integral-at-infinity: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-complexification-of-a-real-vector-space: mathematical-premise
  def-complexification-of-a-real-linear-map: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  thm-complex-numbers-are-the-real-coordinate-plane: mathematical-premise
  thm-comparison-test-for-improper-integrals: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-exponential-limits-and-range: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "F. Ramponi, Notes on Lyapunov's theorem, Section 4 (instability when the linearisation has an eigenvalue with positive real part) and the counterexamples x' = -x^2, x' = x^2"
      url: "https://federico-ramponi.unibs.it/docs/lyapunov.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 9.2 (stable and unstable manifolds of a hyperbolic fixed point), printed pages 255-262"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open with $0\in U$, and let $F:U\to\mathbb R^n$ be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) with $F(0)=0$. Put $A:=DF(0)$ ([[def-total-derivative-in-euclidean-space]], [[def-jacobian-matrix-and-gradient]]) and suppose that

- no complex eigenvalue of $A$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]) has real part $0$, and
- at least one eigenvalue of $A$ has positive real part.

Then the equilibrium $0$ is not Lyapunov stable ([[def-cm-equilibrium-and-lyapunov-stability]]): there is a real number $\varepsilon_0>0$ such that for every $\delta>0$ there exist $z_0\in U$ with $\|z_0\|_2<\delta$ and a time $t_1>0$ such that the maximal solution $z$ of $z'=F(z)$, $z(0)=z_0$ is defined on $[0,t_1]$ and satisfies

$$\|z(t_1)\|_2=\varepsilon_0 .$$

## Facts & Assumptions

**Given:** The open set $U$ with $0\in U$, the $C^1$ field $F$ with $F(0)=0$, and the matrix $A=DF(0)$ with no purely imaginary eigenvalue and at least one eigenvalue of positive real part.

[F1] The complexification of $A$ is $A_{\mathbb C}:=\operatorname{id}_{\mathbb C}\otimes A$ on $\mathbb C\otimes_{\mathbb R}\mathbb R^n$ ([[def-complexification-of-a-real-vector-space]], [[def-complexification-of-a-real-linear-map]]). In the standard basis write a complex vector as $w=p+iq$ with $p,q\in\mathbb R^n$ and equip it with $\|p+iq\|_{2,\mathbb C}:=(\|p\|_2^2+\|q\|_2^2)^{1/2}$. The real and imaginary coordinate identification makes this a complete normed space ([[thm-euclidean-space-complete]], [[thm-complex-numbers-are-the-real-coordinate-plane]]), and the finite real matrix of $A_{\mathbb C}$ is bounded by Cauchy--Schwarz ([[thm-cauchy-schwarz-and-the-euclidean-norm]]). If $\lambda$ is an eigenvalue of $A_{\mathbb C}$ with $\operatorname{Re}\lambda>0$, choose $w=p+iq\ne0$ with $A_{\mathbb C}w=\lambda w$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]). The exponential series gives $e^{tA_{\mathbb C}}w=e^{t\lambda}w$, and $|e^{t\lambda}|=e^{t\operatorname{Re}\lambda}\to0$ as $t\to-\infty$ ([[lem-exponential-series-of-a-bounded-operator]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]). Since $A$ is real, the real and imaginary parts of $e^{tA_{\mathbb C}}w$ are $e^{tA}p$ and $e^{tA}q$; each tends to $0$ in the Euclidean norm. At least one of $p,q$ is nonzero. Exponential dichotomy gives $A$-invariant subspaces $\mathbb R^n=E_s\oplus E_u$ and constants $C\ge1$, $c>0$ such that $\|e^{tA}v\|_2\le Ce^{-ct}\|v\|_2$ for $v\in E_s$, $t\ge0$, $\|e^{tA}v\|_2\le Ce^{ct}\|v\|_2$ for $v\in E_u$, $t\le0$, and $\|e^{tA}v\|_2\ge C^{-1}e^{ct}\|v\|_2$ for $v\in E_u$, $t\ge0$; moreover $E_s,E_u$ are characterised by convergence to $0$ at $+\infty$ and $-\infty$ respectively ([[thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism]]). Clause 4 places a nonzero real vector among $p,q$ that tends to $0$ as $t\to-\infty$ in $E_u$. Thus $E_u\ne\{0\}$.

[F2] Differentiability at $0$: for every $\eta>0$ there is $\rho>0$ with $\|F(z)-Az\|_2\le\eta\|z\|_2$ for $\|z\|_2<\rho$ ([[def-total-derivative-in-euclidean-space]]).

[F3] Let $\Pi_u,\Pi_s$ be the projections onto $E_u,E_s$ along the decomposition; they are linear and satisfy $\Pi_uA=A\Pi_u$, $\Pi_sA=A\Pi_s$, $\Pi_u+\Pi_s=I$. For a linear map $L$ between these Euclidean spaces, write $\|L\|_2:=\sup\{\|Lv\|_2:\|v\|_2\le1\}$ for its induced operator norm. In orthonormal coordinates every linear map has a finite matrix, and Cauchy--Schwarz bounds its operator norm by the square root of the sum of squares of its entries; hence $K:=\max(\|\Pi_u\|_2,\|\Pi_s\|_2)<\infty$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F4] Improper integrals For $a>0$, direct integration using [[thm-derivative-of-exponential]] gives $\int_0^T e^{-at}dt=(1-e^{-aT})/a\to1/a$ by [[thm-exponential-limits-and-range]]. Improper integrals of continuous functions with exponential decay converge absolutely, by comparison ([[def-improper-integral-at-infinity]], [[thm-comparison-test-for-improper-integrals]]); Cauchy--Schwarz bounds Euclidean inner products by the product of norms ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F5] Compact continuation: an autonomous solution trapped in a compact subset of its open state domain near a finite endpoint extends past that endpoint; $F$ is locally Lipschitz because it is $C^1$ ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]]). Closed Euclidean balls are compact because they are closed and bounded ([[def-metric-ball]], [[thm-heine-borel-rn]]).

[F6] If $Q$ is a symmetric positive definite endomorphism of a finite-dimensional real inner product space, the real spectral theorem gives an orthonormal eigenbasis with positive eigenvalues; writing $\lambda_{\max}(Q)$ for the largest eigenvalue yields $\langle Qv,v\rangle\le\lambda_{\max}(Q)\|v\|_2^2$ ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

## Proof

**Proof technique:** direct; build an indefinite quadratic Lyapunov function that grows in the unstable directions and use exponential dichotomy estimates.

1.1 Choose a nonzero $u_0\in E_u$, which is possible because $E_u\ne\{0\}$ by [F1]. On $E_u$ define $$Q_u:=\int_0^\infty e^{-tA_u^{\mathsf T}}e^{-tA_u}\,dt,\qquad A_u:=A|_{E_u},$$ and on $E_s$ define $Q_s:=\int_0^\infty e^{tA_s^{\mathsf T}}e^{tA_s}\,dt$, $A_s:=A|_{E_s}$; the transposes are with respect to the inherited Euclidean inner products. If $E_s=\{0\}$, $Q_s$ is the zero endomorphism of that space and its positivity assertion is vacuous. By [F1], $\|e^{-tA_u}v\|_2\le Ce^{-ct}\|v\|_2$ for $v\in E_u$, $t\ge0$, and $\|e^{tA_s}v\|_2\le Ce^{-ct}\|v\|_2$ for $v\in E_s$, $t\ge0$. Cauchy--Schwarz [F4] bounds each matrix entry of both integrands by $C^2e^{-2ct}$, so [F4] gives absolute convergence entrywise. For nonzero $v$ in either nonzero subspace, the corresponding quadratic form equals the integral of $\|e^{-tA_u}v\|_2^2$ or $\|e^{tA_s}v\|_2^2$; the integrand is continuous and positive at $t=0$, so $Q_u$ and $Q_s$ are positive definite on their subspaces. For $Q_{u,T}:=\int_0^T e^{-tA_u^{\mathsf T}}e^{-tA_u}\,dt$, differentiating the integrand and applying the fundamental theorem gives $A_u^{\mathsf T}Q_{u,T}+Q_{u,T}A_u=I-e^{-TA_u^{\mathsf T}}e^{-TA_u}$; the terminal term tends to $0$ by the decay estimate, so $A_u^{\mathsf T}Q_u+Q_uA_u=I_{E_u}$. The same calculation with $Q_{s,T}:=\int_0^T e^{tA_s^{\mathsf T}}e^{tA_s}\,dt$ gives $A_s^{\mathsf T}Q_s+Q_sA_s=-I_{E_s}$ after taking $T\to\infty$. [F1, F4, algebra]

2.1 Define the function $V$ on $U$ by $V(z):=\langle Q_u\Pi_uz,\Pi_uz\rangle_2-\langle Q_s\Pi_sz,\Pi_sz\rangle_2$, writing $u=\Pi_uz$, $s=\Pi_sz$. It is a quadratic form, hence differentiable, and for a solution $z$ of $z'=F(z)$ with $z(t)=u(t)+s(t)$ one has $u'=A_uu+\Pi_u r(z)$, $s'=A_ss+\Pi_s r(z)$ where $r(z):=F(z)-Az$, because $\Pi_u,\Pi_s$ commute with $A$ [F3]. Differentiating along the solution, $$\frac{d}{dt}V(z(t))=\|u\|_2^2+\|s\|_2^2+2\langle Q_uu,\Pi_ur(z)\rangle_2-2\langle Q_ss,\Pi_sr(z)\rangle_2\ge\|u\|_2^2+\|s\|_2^2-2M\|r(z)\|_2\|z\|_2,$$ with $M:=\|Q_u\|_2\|\Pi_u\|_2^2+\|Q_s\|_2\|\Pi_s\|_2^2>0$: the two scalar-product terms are estimated by Cauchy--Schwarz and $\|u\|_2\le\|\Pi_u\|_2\|z\|_2$, $\|s\|_2\le\|\Pi_s\|_2\|z\|_2$; no orthogonality of the splitting is assumed, and $\|z\|_2=\|u+s\|_2\le\|u\|_2+\|s\|_2$ gives $\|z\|_2^2\le2(\|u\|_2^2+\|s\|_2^2)$. [step 1.1, F2, F3, F4, algebra]

3.1 Choose $\eta>0$ with $8M\eta\le1$ and let $\rho>0$ be as in [F2] for this $\eta$; shrink $\rho$ so that $\overline B(0,\rho)\subseteq U$. For $\|z\|_2<\rho$, step 2.1 and [F2] give, since $\|z\|_2^2\le2(\|u\|_2^2+\|s\|_2^2)$ and $8M\eta\le1$, $$\frac{d}{dt}V(z(t))\ge\|u\|_2^2+\|s\|_2^2-2M\eta\|z\|_2^2\ge\tfrac12\bigl(\|u\|_2^2+\|s\|_2^2\bigr)\ge0 .$$ In particular, whenever $V(z)>0$ then $u\ne0$ and $\|u\|_2^2\ge V(z)/\lambda_{\max}(Q_u)$ by [F6], so $$\frac{d}{dt}V(z(t))\ge\tfrac12\|u\|_2^2\ge\gamma V(z(t)),\qquad \gamma:=\frac{1}{2\lambda_{\max}(Q_u)}>0 .$$ Set $\varepsilon_0:=\rho$. [step 1.1, 2.1, F2, F3, F6, algebra]

4.1 Let $0<\delta$ be arbitrary and choose $z_0:=u_0\in E_u$ with $0<\|u_0\|_2<\min(\delta,\varepsilon_0)$ (step 1.1). Then $V(z_0)=\langle Q_uu_0,u_0\rangle_2>0$. Let $z:[0,b)\to U$ be the maximal forward solution through $z_0$. As long as $\|z(t)\|_2<\varepsilon_0$, step 3.1 gives $\frac{d}{dt}V(z(t))\ge0$ whenever $V(z(t))\ge0$; since $V(z(0))>0$, the function $V\circ z$ stays positive and satisfies $V(z(t))\ge e^{\gamma t}V(z_0)$ on that interval. [step 1.1, 3.1]

5.1 The solution must reach the sphere $\|z\|_2=\varepsilon_0$ at some finite time. Suppose first that the solution is defined for all $t\ge0$ and never reaches that sphere. Then $\|z(t)\|_2<\varepsilon_0$ for all $t$, so step 4.1 gives $V(z(t))\ge e^{\gamma t}V(z_0)\to+\infty$, while $V(z)\le\lambda_{\max}(Q_u)\|\Pi_u\|_2^2\varepsilon_0^2$ on $\overline B(0,\varepsilon_0)$ by [F6]; this is a contradiction. Suppose next that the maximal forward interval is $[0,b)$ with $b<\infty$ and the solution never reaches the sphere. Then its values lie in the compact set $\overline B(0,\varepsilon_0)\subseteq U$ near the endpoint $b$ by [F5], so [F5] extends the solution past $b$, contradicting maximality. Hence in every case there is a first time $t_1\in(0,\infty)$ with $\|z(t_1)\|_2=\varepsilon_0$, and the solution is defined on $[0,t_1]$. Since $\delta>0$ was arbitrary, the equilibrium $0$ is not Lyapunov stable in the sense of [[def-cm-equilibrium-and-lyapunov-stability]]. [step 4.1, F5, F6, algebra] ∎

## Remarks

- The proof uses the dichotomy hypothesis to obtain the invariant splitting with an exponential gap. If $A$ has an eigenvalue with positive real part and also a purely imaginary eigenvalue, the conclusion remains true in the classical linearisation theorem, but a different argument is needed (the centre directions require separate treatment); that case is not covered here.

- The indefinite quadratic form $V$ is unbounded above, so $V$ growing is not by itself a contradiction; the contradiction in step 5.1 comes from $V$ growing while the solution stays in the bounded ball. The exit time $t_1$ depends on $z_0$ and $\delta$; the theorem asserts instability, not a uniform escape rate for all small data.
