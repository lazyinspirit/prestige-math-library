---
id: lem-cm-optimal-truncation-gives-exponential-local-defect
kind: lemma
title: Optimal finite truncation gives an exponential local splitting defect
status: published
origin: pipeline
domain: mathematics
dependency_level: 14
deps:
- def-cm-analytic-splitting-data-and-exact-splitting-map
- def-cm-modified-log-coefficients-and-truncations
- lem-cm-truncated-log-coefficient-bounds
- lem-cm-binomial-pullback-family-and-its-log-are-derivations
- lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives
- lem-cm-symmetric-log-parity-removes-odd-coefficients
- lem-cm-complex-analytic-flow-existence-and-holomorphy
- lem-cm-cauchy-formula-and-power-series-on-polydiscs
- def-real-exponential-function-and-e
- def-natural-logarithm
- thm-exponential-addition-formula
- thm-exponential-is-strictly-increasing
dependency_roles:
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  def-cm-modified-log-coefficients-and-truncations: mathematical-premise
  lem-cm-truncated-log-coefficient-bounds: mathematical-premise
  lem-cm-binomial-pullback-family-and-its-log-are-derivations: mathematical-premise
  lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives: mathematical-premise
  lem-cm-symmetric-log-parity-removes-odd-coefficients: mathematical-premise
  lem-cm-complex-analytic-flow-existence-and-holomorphy: mathematical-premise
  lem-cm-cauchy-formula-and-power-series-on-polydiscs: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'Hairer, Geometric Numerical Integration, Lecture 3: backward error analysis, Sections 1–3 and 5; local analytic estimates supplied here'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
verification:
  precheck: pass
---

## Statement

For analytic splitting data of [[def-cm-analytic-splitting-data-and-exact-splitting-map]], put $m=2d$, $C_0=\max\{16,128d^2\}$, $C_1=1024m^2$, $C_2=16eC_0C_1$, $a=\rho/(C_2M)$ and $c=a\log(2)/2>0$. Here $e=\exp(1)$ and $\log$ is the inverse of the real exponential on $(0,\infty)$ ([[def-real-exponential-function-and-e]], [[def-natural-logarithm]]); positivity of $c$ follows from strict increase of $\exp$ ([[thm-exponential-is-strictly-increasing]]). For $0<h\le a/3$, set $N=\lfloor a/h\rfloor\ge2$ and

$$H_h=\tilde H+\sum_{j=2}^{N}h^{j-1}H_j,\qquad X^{[N]}(h)=\sum_{j=1}^{N}h^{j-1}X_j,$$

using the normalized primitives of [[lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives]]. The time-$h$ flow $\varphi_{H_h}^h$ exists for initial data in $D(\rho/8)$, for sufficiently small $h$ depending only on the displayed data. There is $C<\infty$, independent of $h,N$, such that

$$\|\Psi_h(Z)-\varphi_{H_h}^h(Z)\|\le CMh\,e^{-c/h}\qquad(Z\in D(\rho/8)).$$

The same result holds for the splitting with $A,B$ interchanged. The series defining $H_h$ is finite.

## Facts & Assumptions

**Given:** The stated splitting data, constants and normalized coefficients, with $D(r)$ the distance domains.

[F1] [[lem-cm-truncated-log-coefficient-bounds]] gives the component bounds $|(X_j)_i|\le(8M/3)r_N^{-(j-1)}$ on $D(\rho/4)$ for $j\le N$, with $r_N=\rho/(C_0MN)$.

[F2] [[lem-cm-binomial-pullback-family-and-its-log-are-derivations]] identifies the coefficient logarithm with vector fields; [[lem-cm-symmetric-log-parity-removes-odd-coefficients]] proves $\exp L(h)=\Psi_h^*$ coefficient-wise. The primitive lemma identifies $X^{[N]}=X_{H_h}$.

[F3] [[lem-cm-complex-analytic-flow-existence-and-holomorphy]] and its Picard proof supply joint holomorphy and displacement of bounded fields on smaller domains; [[lem-cm-cauchy-formula-and-power-series-on-polydiscs]] supplies coefficient and geometric-tail bounds.

[F4] $e=\exp(1)>1$, $\log 2>0$, and $\exp(x+y)=\exp(x)\exp(y)$; hence $2^{-N}=\exp(-N\log 2)$ ([[def-real-exponential-function-and-e]], [[def-natural-logarithm]], [[thm-exponential-addition-formula]], [[thm-exponential-is-strictly-increasing]]).

## Proof

1.1 Uniform field and flow radius. Fix $N$ and let $u$ be a complex parameter with $|u|\le R_N=r_N/C_1$. By [F1], summing a geometric series gives $\|X^{[N]}(u)\|\le\sqrt m(8M/3)/(1-C_1^{-1})\le4\sqrt m M=:B$ on $D(\rho/4)$. At each $Z\in D(\rho/8)$ the polydisc of radius $s=\rho/(16\sqrt m)$ lies in $D(\rho/4)$. The flow radius $s/(8mB)=\rho/(512m^2M)$ is at least $R_N$ since $N\ge2$ and $C_1=1024m^2$. Picard iteration is also holomorphic in $u$ (each iterate is a holomorphic parameter integral and the contraction is uniform); hence the time-$u$ map of the field $X^{[N]}(u)$ is holomorphic in $u$ for $|u|<R_N$. Its displacement is at most $B|u|$. The splitting displacement is at most $2M|u|$. All estimates hold uniformly on the initial-data domain. [given, F1, F3, algebra]

2.1 Finite coefficient matching. In degree at most $N$, $uX^{[N]}(u)$ agrees with $L(u)$ as operators by [F2]. Terms in the exponential of order above $N$ cannot change these degrees because both operators start in degree one. The time-$u$ pullback of a fixed field $X^{[N]}(u)$ has Taylor coefficients $\sum_{k\ge0}u^k(X^{[N]}(u))^k/k!$: differentiating $f(\varphi^t(Z))$ repeatedly in $t$ gives $X^kf$ and the holomorphic Taylor expansion supplies the coefficients. Therefore the two analytic coordinate maps agree through degree $N$. This argument uses finite jets and makes no assertion that the infinite formal logarithm converges. [given, F2, F3, step 1.1, algebra]

3.1 Cauchy tail. For each coordinate the difference $E_N(u,Z)$ of the two maps divided by $u$ extends holomorphically at zero, has its first $N$ coefficients zero, and is bounded by $2M+B$ on $|u|<R_N$. Cauchy estimates on smaller circles, followed by taking their radii to $R_N$, give $|E_N(h,Z)|\le(2M+B)(h/R_N)^N/(1-h/R_N)$ for $0<h<R_N$. The actual map difference is $hE_N(h,Z)$; multiplying its coordinate bound by $\sqrt m$ gives the Euclidean bound. [given, F3, step 1.1, step 2.1, algebra]

4.1 Optimal integer choice. For $N=\lfloor a/h\rfloor$, $h/R_N=C_1C_0MNh/\rho\le C_1C_0/C_2=1/(16e)<1/2$ by [F4]. Also $N\ge a/(2h)$ when $h\le a/3$. The logarithm definition and the exponential addition law give $2^{-N}=\exp(-N\log 2)$; therefore $N\log 2\ge c/h$ implies $2^{-N}\le\exp(-c/h)$ by monotonicity of $\exp$. Thus $(h/R_N)^N\le2^{-N}\le e^{-c/h}$. The denominator in step 3.1 is at least $1/2$, yielding the asserted defect. Interchanging $A,B$ leaves all bounds and formal arguments unchanged. [step 3.1, F4, algebra] ∎
