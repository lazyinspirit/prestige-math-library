---
id: thm-nrqm-controlled-dynamics-analytic-perturbation-remainder
aliases:
- nrqm-controlled-dynamics-analytic-perturbation-remainder
kind: theorem
domain: mathematics
title: Analytic perturbation remainder
status: draft
origin: pipeline
dependency_level: 4
deps:
- thm-nrqm-controlled-dynamics-contour-perturbation-projection
- thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients
- def-resolvent-and-spectrum-of-a-closed-unbounded-operator
- cor-cauchy-estimates-taylor-coefficients
- thm-cauchy-integral-formula-circle
- def-bounded-linear-operator
- def-operator-norm
- def-hilbert-space
- def-countable-choice
- lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus
dependency_roles:
  thm-nrqm-controlled-dynamics-contour-perturbation-projection: mathematical-premise
  thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  cor-cauchy-estimates-taylor-coefficients: mathematical-premise
  thm-cauchy-integral-formula-circle: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
      Section 6.6 pp. 153-159 (analytic perturbation with remainder control via Cauchy
      estimates)
    url: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf
  - title: E. B. Saff and A. D. Snider, Fundamentals of Complex Analysis, Chapter
      4 (Cauchy estimates and Taylor remainder bounds; standard reference for the
      coefficient estimate used here)
    url: https://sci.mu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and the hypotheses of [[thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients]] on an arbitrary complex Hilbert space $H$, with inner product linear in the first variable: $H_0$ is self-adjoint on its exact dense domain, $E$ is an isolated simple eigenvalue with gap at least $g>0$, $\psi_0$ is a normalized eigenvector, and $V=V^*$ is bounded with $v=\|V\|$. Let $P_\lambda,E_\lambda$ be the contour projection and eigenvalue, $Q=I-P_0$, $S=\iota_Q(H_0|_{D(H_0)\cap QH}-E)^{-1}Q$ the actual reduced inverse, and $\psi(\lambda)$ the gauge-fixed eigenvector with $\langle\psi(\lambda),\psi_0\rangle=1$.

For $v>0$ put $R=g/(8v)$. On the full complex disk $|\lambda|<R$:

(a) $q=2|\lambda|v/g\le1/4$, $\|P_\lambda-P_0\|\le1/3$, $\|\psi(\lambda)\|\le2$, and the holomorphic scalar energy identity is
$$E_\lambda=\langle(H_0+\lambda V)\psi(\lambda),\psi_0\rangle=E+\lambda\langle V\psi(\lambda),\psi_0\rangle.$$

(b) The exact coefficients are
$$E'(0)=\langle V\psi_0,\psi_0\rangle,\qquad \psi'(0)=-SV\psi_0,\qquad E''(0)=-2\langle VSV\psi_0,\psi_0\rangle,$$
with bounds $|E'(0)|\le v$, $\|\psi'(0)\|\le v/g$ and $|E''(0)|\le2v^2/g$. The whole complementary spectral subspace, including its continuum, contributes through $S$. The cubic remainder satisfies
$$\left|E_\lambda-E-\lambda E'(0)-\frac{\lambda^2}{2}E''(0)\right|\le\frac{Rv\,(|\lambda|/R)^3}{1-|\lambda|/R}.$$
At $|\lambda|=R/2$ the displayed bound is $Rv/4=g/32$. For $|\lambda|\le R/2$ it is at most $128v^3|\lambda|^3/g^2$.

(c) If $v=0$, then $V=0$ and $P_\lambda=P_0$, $E_\lambda=E$, $\psi(\lambda)=\psi_0$ for every complex $\lambda$; no radius involving division by $v$ is used in this branch.

These conclusions are conditional on the strict positive gap and bounded perturbation, and do not assert an unbounded or degenerate perturbation theorem.

## Facts & Assumptions

**Given:** CC and the exact data and conventions of the Statement. In the positive-norm branch $R=g/(8v)$ and $|\lambda|<R$.

[F1] [[thm-nrqm-controlled-dynamics-contour-perturbation-projection]] supplies holomorphic $P_\lambda,E_\lambda$ on $q<1$, the unique eigenvalue inside $|z-E|<g/2$, domain-valued range and $\|P_\lambda-P_0\|\le q/(1-q)$. Complex-coupling Riesz projections need not be orthogonal.

[F2] [[thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients]] supplies the actual bounded self-adjoint $S$, $\|S\|\le1/g$, its exact complementary domain inverses, the domain-valued holomorphic gauge with $\langle\psi,\psi_0\rangle=1$ on $q<1/2$, and the exact three coefficients. These results hold under CC on arbitrary $H$.

[F3] [[cor-cauchy-estimates-taylor-coefficients]] and [[thm-cauchy-integral-formula-circle]] give $|c_k|\le M/\rho^k$ for a scalar holomorphic function bounded by $M$ on a circle of radius $\rho$ contained with its disk in the holomorphy domain. Summing its Taylor tail is valid inside that circle.

[F4] [[lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus]] gives the exact distance resolvent bound $\|(z-H_0)^{-1}\|\le1/\operatorname{dist}(z,\sigma(H_0))$ under CC on arbitrary $H$. [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]] specifies two-sided inverses on the actual domain; bounded Neumann inversion uses [[def-bounded-linear-operator]] and [[def-operator-norm]].


## Proof

1.1 [Actual spectral inclusion] Put $t=|\lambda|v$. Whenever $\operatorname{dist}(z,\sigma(H_0))>t$, [F4] makes $\|\lambda V(z-H_0)^{-1}\|<1$. The factorization $z-H_\lambda=[I-\lambda V(z-H_0)^{-1}](z-H_0)$ on $D(H_0)$ gives the two-sided inverse $(z-H_0)^{-1}[I-\lambda V(z-H_0)^{-1}]^{-1}$ into that domain. Hence every spectral point of $H_\lambda$ is within distance $t$ of $\sigma(H_0)$. By [F1], $|E_\lambda-E|<g/2$, while every other point of $\sigma(H_0)$ is at distance at least $g-|E_\lambda-E|>g/2>t$ from $E_\lambda$ on $q<1$. Therefore $|E_\lambda-E|\le|\lambda|v$. This is one-sided spectral inclusion, including complex coupling, not an exclusion inside the gap. [F1, F4, given, algebra]

1.2 [Small-disk bounds and the correct scalar] On $|\lambda|\le R$, $q\le1/4$ and [F1] gives $\|P_\lambda-P_0\|\le1/3$. Thus $\|P_\lambda\psi_0\|\le4/3$ and $|\langle P_\lambda\psi_0,\psi_0\rangle|\ge2/3$, yielding $\|\psi\|\le2$. Pairing the exact domain-valued eigenvalue equation of [F2] with the fixed second vector $\psi_0$, self-adjointness gives $\langle H_0\psi,\psi_0\rangle=\langle\psi,H_0\psi_0\rangle=E$ and the gauge gives $\langle E_\lambda\psi,\psi_0\rangle=E_\lambda$. Hence $E_\lambda=E+\lambda\langle V\psi,\psi_0\rangle$ is holomorphic, proving (a). The moving-vector pairing instead equals $E_\lambda\|\psi\|^2$. [F1, F2, given, algebra]

1.3 [Coefficients and norm constants] The coefficient identities follow from [F2]. Since $\|\psi_0\|=1$ and $\|S\|\le1/g$, the operator norm products and Cauchy–Schwarz give $|\langle V\psi_0,\psi_0\rangle|\le v$, $\|SV\psi_0\|\le v/g$, and $2|\langle VSV\psi_0,\psi_0\rangle|\le2v^2/g$. The actual reduced inverse contains all complementary spectral measures and not only discrete eigenvectors. [F2, given, algebra]

2.1 [Full-radius Cauchy remainder] The disk $q<1$ of [F1] contains a neighborhood of the closed radius-$R$ disk. Thus $f(\lambda)=E_\lambda-E$ is holomorphic there, and step 1.1 gives $|f|\le Rv$ on $|\lambda|=R$. By [F3], writing $f=\sum_{k\ge0}c_k\lambda^k$, one has $|c_k|\le Rv/R^k$, $c_0=0$, $c_1=E'(0)$ and $c_2=E''(0)/2$. Therefore the absolute sum over $k\ge3$ is at most $Rv\sum_{k\ge3}(|\lambda|/R)^k=Rv(|\lambda|/R)^3/(1-|\lambda|/R)$, proving the complete cubic estimate. This uses the supplied spectral inclusion, not an exclusion of spectral points inside the gap. [step 1.1, step 1.3, F1, F2, F3, given, algebra]

3.1 [Evaluations and the zero perturbation] At $|\lambda|=R/2$ the geometric factor is $(1/2)^3/(1-1/2)=1/4$, giving $Rv/4=g/32$. On $|\lambda|\le R/2$, the denominator is at least $1/2$, so the remainder is at most $2v|\lambda|^3/R^2=128v^3|\lambda|^3/g^2$. If $v=0$, then $V=0$ by the definition of operator norm, so the operator, contour projection, gauge and eigenvalue are constant for all complex couplings and all remainder coefficients vanish. [step 2.1, F1, F2, given, algebra] ∎

## Remarks

The former moving-vector energy identity fails even for real coupling in the advertised small disk. Take $H_0=\operatorname{diag}(1,3)$, $E=1$, $g=2$, $V=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $\lambda=20/99<R=1/4$. The eigenvalue is $97/99$ and the gauge vector is $(1,-1/10)$, of squared norm $101/100$. Thus $\langle H_\lambda\psi,\psi\rangle=9797/9900\ne97/99$, whereas pairing with the fixed $\psi_0=(1,0)$ gives the correct energy.

The former interior resolvent exclusion also fails: for $H_0=\operatorname{diag}(0,1)$, $V=\operatorname{diag}(1,0)$, $E=0$, $g=v=1$, and $\lambda=z=1/16$, $z$ is an eigenvalue although $|z-E|<g/2-|\lambda|v=7/16$. The valid Neumann condition is distance from all of $\sigma(H_0)$ greater than $|\lambda|v$, and leads to one-sided spectral inclusion as proved in step 1.1. The former evaluated remainder value $g/64$ was an arithmetic error; the displayed general bound evaluates to $g/32$, without any assertion that it is attained.
