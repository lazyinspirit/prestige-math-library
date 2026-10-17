---
id: lem-qsm-dt-stationary-variance-integral-identity
kind: lemma
title: Stationary-state covariance identity for time-integrated observables
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-c-star-algebra
  - lem-cm-integral-and-ftc-for-continuous-normed-space-curves
dependency_roles:
  def-c-star-algebra: mathematical-premise
  lem-cm-integral-and-ftc-for-continuous-normed-space-curves: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.3.12, printed pp. 69–71
      url: https://arxiv.org/pdf/1311.2717
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §3, printed p. 575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
---

## Statement

Let $\mathcal A$ be a unital complex C$^*$-algebra, and let $(\alpha_t)_{t\in\mathbb R}$ be a group of $*$-automorphisms of $\mathcal A$, so $\alpha_0=\operatorname{id}_{\mathcal A}$ and $\alpha_{s+t}=\alpha_s\circ\alpha_t$. Assume point-norm continuity: for each $X\in\mathcal A$, the orbit map $t\mapsto\alpha_t(X)$ is norm-continuous. Let $\phi:\mathcal A\to\mathbb C$ be a bounded linear functional with $\phi(I)=1$, $\phi(X^*X)\ge0$ for every $X\in\mathcal A$, and $\phi\circ\alpha_t=\phi$ for every $t$. For $m\ge1$, take self-adjoint $V_1,\ldots,V_m\in\mathcal A$ with $\phi(V_a)=0$. For $T>0$, regard $\mathcal A$ as its underlying real Banach space with the same norm for these time integrals, and define the norm-Riemann integrals
$$X_{a,T}=\int_0^T\alpha_t(V_a)\,dt,$$
and for $s\ge0$ define
$$G_{ab}(s)=\frac12\left(\operatorname{Re}\phi(V_a\alpha_s(V_b))+\operatorname{Re}\phi(V_b\alpha_s(V_a))\right).$$
Then each $X_{a,T}$ is self-adjoint and
$$\frac{1}{2T}\operatorname{Re}\phi(X_{a,T}X_{b,T})=\int_0^T\left(1-\frac{s}{T}\right)G_{ab}(s)\,ds.$$
The real symmetric matrix with entries on the left is positive semidefinite.

## Facts & Assumptions

**Given:** The unital C$^*$-algebra, strongly continuous automorphism group, invariant state, self-adjoint centered observables, and $T>0$ in the Statement.

[F1] [[def-c-star-algebra]]: $\mathcal A$ is complete, multiplication is bounded, and the involution is continuous.

[F2] [[lem-cm-integral-and-ftc-for-continuous-normed-space-curves]]: continuous curves in a complete normed real vector space have norm-Riemann integrals, with linearity, additive subdivision, bounded-functional interchange, and the norm estimate from Riemann sums; for these integrals, the complex algebra $\mathcal A$ is viewed as its underlying real Banach space.

## Proof


**Proof technique:** direct double integration over the time square, followed by stationarity and positivity.

**Given:** [F1]–[F2], the bounded normalized positive functional, and the invariant group in the Statement.

1.1 The functional is Hermitian: if $H=H^*$ then $\phi((I+rH)^*(I+rH))=1+2r\phi(H)+r^2\phi(H^2)$ is real for every real $r$, so $\phi(H)\in\mathbb R$; decomposing $X=(X+X^*)/2+i(X-X^*)/(2i)$ gives $\phi(X^*)=\overline{\phi(X)}$. For each $a$, $t\mapsto\alpha_t(V_a)$ is norm-continuous, so [F2] defines $X_{a,T}$. Riemann sums of self-adjoint elements are self-adjoint, and continuity of the involution in [F1] passes this property to the limit. The product map $(s,t)\mapsto\alpha_s(V_a)\alpha_t(V_b)$ is norm-continuous on $[0,T]^2$ by continuity of multiplication; approximating each integral by Riemann sums and multiplying the sums shows $X_{a,T}X_{b,T}$ equals the iterated integral of this product. [given, F1, F2, algebra]


2.1 Invariance of $\phi$ and the group law give $\phi(\alpha_s(V_a)\alpha_t(V_b))=\phi(V_a\alpha_{t-s}(V_b))$ for every $s,t\in[0,T]$. The scalar integrand is continuous; splitting the square into the triangles $t\ge s$ and $s\ge t$, and integrating the slices with fixed $u=|t-s|$, whose lengths are $T-u$, yields $$\phi(X_{a,T}X_{b,T})=\int_0^T(T-u)\phi(V_a\alpha_u(V_b))\,du+\int_0^T(T-u)\phi(V_a\alpha_{-u}(V_b))\,du.$$ The diagonal has zero area and does not affect the Riemann integral. The slice formula follows from the one-variable substitution $u=t-s$ on each triangle and the additivity of the Riemann integral. [given, F1, F2, step 1.1, algebra]


3.1 For $u\ge0$, invariance gives $\phi(V_a\alpha_{-u}(V_b))=\phi(\alpha_u(V_a)V_b)=\overline{\phi(V_b\alpha_u(V_a))}$, where the last equality uses self-adjointness and step 1.1. Taking real parts in step 2.1 therefore gives the stated identity after dividing by $2T$. [step 1.1, step 2.1, algebra]


4.1 For any real vector $c=(c_1,\ldots,c_m)$, $X_{c,T}=\sum_a c_aX_{a,T}$ is self-adjoint and $\sum_{a,b}c_ac_b\operatorname{Re}\phi(X_{a,T}X_{b,T})=\phi(X_{c,T}^2)=\phi(X_{c,T}^*X_{c,T})\ge0$ by positivity. Hermiticity from step 1.1 gives symmetry of the real matrix, so it is positive semidefinite. [given, step 1.1, algebra] ∎