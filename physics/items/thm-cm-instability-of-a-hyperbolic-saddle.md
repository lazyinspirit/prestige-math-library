---
id: thm-cm-instability-of-a-hyperbolic-saddle
kind: theorem
title: "A hyperbolic equilibrium whose linearisation has an eigenvalue with positive real part is unstable"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism, lem-exponential-series-of-a-bounded-operator, thm-cm-compact-continuation-for-locally-lipschitz-odes, thm-cm-exponential-stability-by-a-lyapunov-quadratic-form, def-cm-equilibrium-and-lyapunov-stability, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, def-metric-ball, def-improper-integral-at-infinity, cor-limit-comparison-test-for-improper-integrals, thm-extreme-value-metric, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  thm-cm-exponential-stability-by-a-lyapunov-quadratic-form: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  def-improper-integral-at-infinity: mathematical-premise
  cor-limit-comparison-test-for-improper-integrals: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
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

[F1] The exponential series defines the differentiable family $t\mapsto e^{tA}$ with $\frac{d}{dt}e^{tA}=Ae^{tA}=e^{tA}A$ and $e^0=I$ ([[lem-exponential-series-of-a-bounded-operator]]). Exponential dichotomy: there are $A$-invariant subspaces $\mathbb R^n=E_s\oplus E_u$ and constants $C\ge1$, $c>0$ such that $\|e^{tA}v\|_2\le Ce^{-ct}\|v\|_2$ for $v\in E_s$, $t\ge0$, and $\|e^{tA}v\|_2\le Ce^{ct}\|v\|_2$ for $v\in E_u$, $t\le0$; moreover $\|e^{tA}v\|_2\ge C^{-1}e^{ct}\|v\|_2$ for $v\in E_u$, $t\ge0$, and $E_s,E_u$ are characterised by convergence to $0$ at $+\infty$ and $-\infty$ respectively ([[thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism]]). The assumption that some eigenvalue has positive real part means $E_u\ne\{0\}$: choose a complex eigenvector $w=p+iq\ne0$ for an eigenvalue $\lambda$ with $\operatorname{Re}\lambda>0$. The exponential series gives $e^{tA_{\mathbb C}}w=e^{t\lambda}w\to0$ as $t\to-\infty$. Since $A$ is real, its real and imaginary parts are $e^{tA}p$ and $e^{tA}q$, and both tend to $0$. At least one of $p,q$ is nonzero, and clause 4 of the dichotomy places that nonzero real vector in $E_u$. Thus $E_u\ne\{0\}$.

[F2] Differentiability at $0$: for every $\eta>0$ there is $\rho>0$ with $\|F(z)-Az\|_2\le\eta\|z\|_2$ for $\|z\|_2<\rho$ ([[def-total-derivative-in-euclidean-space]]).

[F3] Let $\Pi_u,\Pi_s$ be the projections onto $E_u,E_s$ along the decomposition; they are linear and satisfy $\Pi_uA=A\Pi_u$, $\Pi_sA=A\Pi_s$, $\Pi_u+\Pi_s=I$. Their operator norms $K:=\max(\|\Pi_u\|_2,\|\Pi_s\|_2)$ are finite (finite-dimensional linear maps are bounded; [[def-euclidean-inner-product]]).

[F4] Improper integrals of continuous functions with exponential decay converge absolutely, by comparison ([[def-improper-integral-at-infinity]], [[cor-limit-comparison-test-for-improper-integrals]]).

[F5] Compact continuation: an autonomous solution trapped in a compact subset of its open state domain near a finite endpoint extends past that endpoint; $F$ is locally Lipschitz because it is $C^1$ ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]]). Balls and compactness are as in [[def-metric-ball]] and [[thm-extreme-value-metric]].

## Proof

**Proof technique:** direct; build an indefinite quadratic Lyapunov function that grows in the unstable directions and use exponential dichotomy estimates.

1.1 Choose a nonzero $u_0\in E_u$, which is possible because $E_u\ne\{0\}$ by [F1]. On $E_u$ define the self-adjoint positive definite operator $$Q_u:=\int_0^\infty e^{-tA_u^{\mathsf T}}e^{-tA_u}\,dt,\qquad A_u:=A|_{E_u},$$ and on $E_s$ define $Q_s:=\int_0^\infty e^{tA_s^{\mathsf T}}e^{tA_s}\,dt$, $A_s:=A|_{E_s}$; here the transposes are taken with respect to the restricted Euclidean structures. Both integrals converge absolutely: by [F1], $\|e^{-tA_u}v\|\le Ce^{-ct}\|v\|$ for $v\in E_u$, $t\ge0$ (clause 2 at negative times), and $\|e^{tA_s}v\|\le Ce^{-ct}\|v\|$ for $v\in E_s$, $t\ge0$; [F4] then gives convergence of every entry. Both operators are positive definite by the argument of [[thm-cm-exponential-stability-by-a-lyapunov-quadratic-form]] and satisfy $$A_u^{\mathsf T}Q_u+Q_uA_u=I_{E_u},\qquad A_s^{\mathsf T}Q_s+Q_sA_s=-I_{E_s},$$ by integrating the derivative of $e^{\mp tA^{T}}e^{\mp tA}$ as in that proof. [F1, F4, algebra]

2.1 Define the function $V$ on $U$ by $V(z):=\langle Q_u\Pi_uz,\Pi_uz\rangle_2-\langle Q_s\Pi_sz,\Pi_sz\rangle_2$, writing $u=\Pi_uz$, $s=\Pi_sz$. It is a quadratic form, hence differentiable, and for a solution $z$ of $z'=F(z)$ with $z(t)=u(t)+s(t)$ one has $u'=A_uu+\Pi_u r(z)$, $s'=A_ss+\Pi_sr(z)$ where $r(z):=F(z)-Az$, because $\Pi_u,\Pi_s$ commute with $A$ [F3]. Differentiating along the solution, $$\frac{d}{dt}V(z(t))=\|u\|_2^2+\|s\|_2^2+2\langle Q_uu,\Pi_ur(z)\rangle_2-2\langle Q_ss,\Pi_sr(z)\rangle_2\ge\|u\|_2^2+\|s\|_2^2-2M\|r(z)\|_2\|z\|_2,$$ with $M:=\|Q_u\|\|\Pi_u\|_2^2+\|Q_s\|\|\Pi_s\|_2^2>0$: the two scalar-product terms are estimated by Cauchy-Schwarz and $\|u\|_2\le\|\Pi_u\|_2\|z\|_2$, $\|s\|_2\le\|\Pi_s\|_2\|z\|_2$; no orthogonality of the splitting is assumed, and $\|z\|_2=\|u+s\|_2\le\|u\|_2+\|s\|_2$ gives $\|z\|_2^2\le2(\|u\|_2^2+\|s\|_2^2)$. [step 1.1, F2, F3, algebra]

3.1 Choose $\eta>0$ with $8M\eta\le1$ and let $\rho>0$ be as in [F2] for this $\eta$; shrink $\rho$ so that $\overline B(0,\rho)\subseteq U$. For $\|z\|_2<\rho$, step 2.1 and [F2] give, since $\|z\|_2^2\le2(\|u\|_2^2+\|s\|_2^2)$ and $8M\eta\le1$, $$\frac{d}{dt}V(z(t))\ge\|u\|_2^2+\|s\|_2^2-2M\eta\|z\|_2^2\ge\tfrac12\bigl(\|u\|_2^2+\|s\|_2^2\bigr)\ge0 .$$ In particular, whenever $V(z)>0$ then $u\ne0$ and $\|u\|_2^2\ge V(z)/\lambda_{\max}(Q_u)$, so $$\frac{d}{dt}V(z(t))\ge\tfrac12\|u\|_2^2\ge\gamma V(z(t)),\qquad \gamma:=\frac{1}{2\lambda_{\max}(Q_u)}>0 .$$ Set $\varepsilon_0:=\rho$. [step 1.1, 2.1, F2, F3, algebra]

4.1 Let $0<\delta$ be arbitrary and choose $z_0:=u_0\in E_u$ with $0<\|u_0\|_2<\min(\delta,\varepsilon_0)$ (step 1.1). Then $V(z_0)=\langle Q_uu_0,u_0\rangle_2>0$. Let $z:[0,b)\to U$ be the maximal forward solution through $z_0$. As long as $\|z(t)\|_2<\varepsilon_0$, step 3.1 gives $\frac{d}{dt}V(z(t))\ge0$ whenever $V(z(t))\ge0$; since $V(z(0))>0$, the function $V\circ z$ stays positive and satisfies $V(z(t))\ge e^{\gamma t}V(z_0)$ on that interval. [step 1.1, 3.1]

5.1 The solution must reach the sphere $\|z\|_2=\varepsilon_0$ at some finite time. Suppose first that the solution is defined for all $t\ge0$ and never reaches that sphere. Then $\|z(t)\|_2<\varepsilon_0$ for all $t$, so step 4.1 gives $V(z(t))\ge e^{\gamma t}V(z_0)\to+\infty$, while on the ball $\overline B(0,\varepsilon_0)$ the continuous function $V$ is bounded above by $\lambda_{\max}(Q_u)\|\Pi_u\|_2^2\varepsilon_0^2$; this is a contradiction. Suppose next that the maximal forward interval is $[0,b)$ with $b<\infty$ and the solution never reaches the sphere. Then its values lie in the compact set $\overline B(0,\varepsilon_0)\subseteq U$ near the endpoint $b$, so [F5] extends the solution past $b$, contradicting maximality. Hence in every case there is a first time $t_1\in(0,\infty)$ with $\|z(t_1)\|_2=\varepsilon_0$, and the solution is defined on $[0,t_1]$. Since $\delta>0$ was arbitrary, the equilibrium $0$ is not Lyapunov stable in the sense of [[def-cm-equilibrium-and-lyapunov-stability]]. [step 4.1, F5, algebra] ∎

## Remarks

- The proof uses the dichotomy hypothesis to obtain the invariant splitting with an exponential gap. If $A$ has an eigenvalue with positive real part and also a purely imaginary eigenvalue, the conclusion remains true in the classical linearisation theorem, but a different argument is needed (the centre directions require separate treatment); that case is not covered here.

- The indefinite quadratic form $V$ is unbounded above, so $V$ growing is not by itself a contradiction; the contradiction in step 5.1 comes from $V$ growing while the solution stays in the bounded ball. The exit time $t_1$ depends on $z_0$ and $\delta$; the theorem asserts instability, not a uniform escape rate for all small data.
