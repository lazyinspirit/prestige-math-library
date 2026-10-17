---
id: thm-tgr-gravitational-canonical-response
kind: theorem
title: "Nonnegative fixed-Hamiltonian canonical heat capacity"
status: published
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - lem-tgr-finite-gravitational-gibbs
dependency_roles:
  lem-tgr-finite-gravitational-gibbs: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
dependency_level: 3
---

## Statement

Under the hypotheses of [[lem-tgr-finite-gravitational-gibbs]], keep the box, particle number, mass, regulator, reference measure, and Hamiltonian fixed while varying $\beta>0$, and set $p_\beta=Z_N(\beta)^{-1}e^{-\beta H_{N,a}}$. For a measurable observable $A:\Gamma_N\to\mathbb R$ with finite second moment, define $\langle A\rangle_\beta:=\int_{\Gamma_N}A p_\beta\,d\nu_N$ and $\operatorname{Var}_\beta(A):=\int_{\Gamma_N}(A-\langle A\rangle_\beta)^2p_\beta\,d\nu_N$. Define $T_K=(k_B\beta)^{-1}$ and $C_K=d\langle H_{N,a}\rangle_\beta/dT_K$. Then
$$\langle H_{N,a}\rangle_\beta=-\partial_\beta\log Z_N,\qquad \partial_\beta\langle H_{N,a}\rangle_\beta=-\operatorname{Var}_\beta(H_{N,a}),\qquad C_K=k_B\beta^2\operatorname{Var}_\beta(H_{N,a})\ge0.$$
This is a response identity for a fixed Hamiltonian and fixed regulator; it does not assert stability when the Hamiltonian or background varies with temperature.

## Facts & Assumptions

**Given:** The finite softened Gibbs model, $\beta>0$, $k_B>0$, and its temperature convention $T_K=(k_B\beta)^{-1}$.

[F1] The finite Gibbs density is normalized, and the partition function is twice differentiable with $Z_N^{(j)}=\int(-H_{N,a})^j e^{-\beta H_{N,a}}d\nu_N$ for $j=0,1,2$. ([[lem-tgr-finite-gravitational-gibbs]])

## Proof

1.1 Differentiating $\log Z_N$ and using $Z_N'=-\int H_{N,a}e^{-\beta H_{N,a}}d\nu_N$ gives $-\partial_\beta\log Z_N=Z_N^{-1}\int H_{N,a}e^{-\beta H_{N,a}}d\nu_N=\langle H_{N,a}\rangle_\beta$. [F1, algebra]

2.1 The quotient rule and $Z_N''=\int H_{N,a}^2e^{-\beta H_{N,a}}d\nu_N$ give
$$\partial_\beta\langle H_{N,a}\rangle_\beta=-\frac{Z_N''}{Z_N}+\left(\frac{Z_N'}{Z_N}\right)^2 =-\left(\langle H_{N,a}^2\rangle_\beta-\langle H_{N,a}\rangle_\beta^2\right) =-\operatorname{Var}_\beta(H_{N,a}).$$
All terms are finite by [F1]. [F1, step 1.1, algebra]

3.1 Since $dT_K/d\beta=-1/(k_B\beta^2)$, the chain rule yields $C_K=(d\langle H\rangle/d\beta)/(dT_K/d\beta)=k_B\beta^2\operatorname{Var}_\beta(H_{N,a})$. The variance is the expectation of the nonnegative square $(H_{N,a}-\langle H_{N,a}\rangle)^2$, so $C_K\ge0$. [F1, step 2.1, algebra] ∎
