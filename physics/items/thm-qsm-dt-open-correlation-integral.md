---
id: thm-qsm-dt-open-correlation-integral
kind: theorem
title: Gap-controlled correlation resolvent and positive coefficients
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 6
deps:
  - thm-qsm-dt-detailed-balance-gap
  - def-qsm-dt-gns-detailed-balance
dependency_roles:
  thm-qsm-dt-detailed-balance-gap: mathematical-premise
  def-qsm-dt-gns-detailed-balance: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Robert Alicki and Karl Lendi, Quantum Dynamical Semigroups and Applications, Lecture Notes in Physics 717, §1.3.4
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/P/PS/PSa/Alicki%20R.%2C%20Lendi%20K.%20Quantum%20dynamical%20semigroups%20and%20applications%20%28LNP0717%2C%20Springer%2C%202007%29%28136s%29_PSa_.pdf
    - title: Eric A. Carlen and Jan Maas, Gradient flow and entropy inequalities for quantum Markov semigroups with detailed balance, §§2 and 7
      url: https://arxiv.org/pdf/1609.01254
---

## Statement

Assume the finite GNS detailed-balance hypotheses, $d>1$, and the positive gap $\gamma$ of [[thm-qsm-dt-detailed-balance-gap]]. For centered $A,B\in\mathcal M_0$, define $C_{A,B}(t):=\langle e^{tG}A,B\rangle_\sigma$. Then

$$|C_{A,B}(t)|\leq e^{-\gamma t}\|A\|_\sigma\|B\|_\sigma,\qquad t\geq0,$$

so the correlation is absolutely integrable and

$$\int_0^\infty C_{A,B}(t)\,dt=\left\langle(-G|_{\mathcal M_0})^{-1}A,B\right\rangle_\sigma.$$

For centered $A$, the real coefficient

$$\Gamma(A):=\operatorname{Re}\int_0^\infty\langle e^{tG}A,A\rangle_\sigma\,dt$$

is nonnegative. Its real polarization on any finite list of Hermitian centered observables is a positive-semidefinite real symmetric correlation-integral matrix. No mixing, central-limit theorem, or infinite-volume transport claim follows.

## Facts & Assumptions

**Given:** The finite observable generator $G=K+D$, the faithful state $\sigma$, the centered subspace $\mathcal M_0$, and the gap $\gamma>0$.

[F1] [[thm-qsm-dt-detailed-balance-gap]]: $\mathcal M_0$ is invariant, $\|e^{tG}A\|_\sigma\leq e^{-\gamma t}\|A\|_\sigma$ for centered $A$, and $D|_{\mathcal M_0}\leq-\gamma I$.

[F2] [[def-qsm-dt-gns-detailed-balance]]: $G=K+D$, $D$ is self-adjoint for $\langle\cdot,\cdot\rangle_\sigma$, and $K$ is anti-self-adjoint.

## Proof

1.1 Cauchy–Schwarz in the finite weighted inner product and [F1] give $|C_{A,B}(t)|\leq e^{-\gamma t}\|A\|_\sigma\|B\|_\sigma$. The right side is integrable on $[0,\infty)$, so the correlation integral converges absolutely. [given, F1, algebra]

1.2 The integral $Y:=\int_0^\infty e^{tG}A\,dt$ converges in the finite-dimensional invariant space $\mathcal M_0$. Since $\frac{d}{dt}e^{tG}A=G(e^{tG}A)$ and the decay in [F1] sends the endpoint to zero, integrating gives $G(Y)=-A$. If $GZ=0$ for centered $Z$, then [F1] gives $\|Z\|_\sigma=\|e^{tG}Z\|_\sigma\leq e^{-\gamma t}\|Z\|_\sigma$, hence $Z=0$. Thus $-G|_{\mathcal M_0}$ is invertible and $Y=(-G|_{\mathcal M_0})^{-1}A$, which proves the resolvent identity. [given, F1, algebra]

2.1 For $Y$ from step 1.2, $\Gamma(A)=\operatorname{Re}\langle Y,-G(Y)\rangle_\sigma$. The term $\operatorname{Re}\langle Y,-K(Y)\rangle_\sigma$ vanishes because $K$ is anti-self-adjoint. The remaining term is $\langle Y,-D(Y)\rangle_\sigma\geq\gamma\|Y\|_\sigma^2\geq0$ by [F1]–[F2]. Therefore $\Gamma$ is a nonnegative real quadratic form on the real vector space of Hermitian centered observables; real polarization gives a positive-semidefinite symmetric matrix. [F1, F2, step 1.2, algebra] ∎
