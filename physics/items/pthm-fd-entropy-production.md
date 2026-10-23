---
id: pthm-fd-entropy-production
kind: physics-theorem
title: "Continuum entropy residual and Newtonian admissibility"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-fd-continuum-balances
  - post-fd-local-equilibrium
  - post-fd-newtonian-fourier
  - lem-fd-gibbs-entropy-residual
  - lem-fd-newtonian-admissibility
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  post-fd-local-equilibrium: physical-assumption
  post-fd-newtonian-fourier: physical-assumption
  lem-fd-gibbs-entropy-residual: mathematical-premise
  lem-fd-newtonian-admissibility: mathematical-premise
justified_by: []
aliases: []
physical_scope: >-
  Conditional smooth local-equilibrium continuum calculation with positive
  temperature, the stated local mass and energy-balance hypotheses, and
  Newtonian/Fourier closure. Entropy production is a pointwise coefficient
  test, not an empirical validation or a proof of the adopted entropy
  postulate.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part II lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§3.1.2, printed pp. 61–63"
    - title: "David Tong, Fluid Mechanics, Part III lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf"
      locator: "§§4.4.2–4.4.3, printed pp. 146–149"
    - title: "An Introduction to Continuum Mechanics, Second Edition, Chapter 6"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
      locator: "§§6.1.4, 6.5.1–6.5.3 and 6.7.2, printed pp. 224–245 and 251–252"
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Assume the complete smooth material, state, contact and mass/momentum/angular-momentum/total-energy balance hypotheses of the local Gibbs-entropy identity, including $\mathrm{AC}_\omega$ and positive temperature, as stated in Facts & Assumptions. Use a $C^2$ local state relation $e(v,s)$ with $v=1/\rho$, $T=e_s(v,s)>0$, and $p=-e_v(v,s)$. Let $\sigma=-pI_3+\tau$, define $L_{ij}=\partial_{x_j}u_i$, $D=(L+L^T)/2$, $\theta=\operatorname{tr}D$, and set
$$ \mathcal G=\rho D_ts+\operatorname{div}(q/T)-\rho r/T,\qquad D_t=\partial_t+u\cdot\nabla. $$
For the adopted Newtonian/Fourier form $\tau=2\mu D_0+\zeta\theta I_3$, define $D_0=D-\theta I_3/3$, $A:B:=\sum_{i,j=1}^3A_{ij}B_{ij}$ for $A,B\in\mathbb R^{3\times3}$, and $|D_0|^2:=D_0:D_0=\sum_{i,j=1}^3(D_0)_{ij}^2$. Set $\operatorname{sym}(K):=(K+K^T)/2$ and $q=-K\nabla T$. The residual is
$$ \mathcal G=\frac{2\mu|D_0|^2+\zeta\theta^2}{T} +\frac{(\nabla T)^T\operatorname{sym}(K)\nabla T}{T^2}. $$
At a fixed state, if the algebraic coefficient family is tested for every symmetric $D$, every $g=\nabla T\in\mathbb R^3$, and every $T>0$, this residual is nonnegative exactly when $\mu\ge0$, $\zeta\ge0$, and $x^T\operatorname{sym}(K)x\ge0$ for every $x\in\mathbb R^3$. These conditions make the adopted closure compatible with the separate continuum entropy inequality. In SI units, $\mathcal G$ has units $\mathrm{W\,m^{-3}\,K^{-1}}$. The theorem does not derive the balance or entropy postulates, infer material coefficients, or assert empirical validity.

## Statement references

[David Tong, *Fluid Mechanics*, Part II lecture notes, §3.1.2, printed pp. 61–63](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[David Tong, *Fluid Mechanics*, Part III lecture notes, §§4.4.2–4.4.3, printed pp. 146–149](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf)

[An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §§6.1.4, 6.5.1–6.5.3 and 6.7.2, printed pp. 224–245 and 251–252](https://courses.washington.edu/mengr503/Chapter_6.pdf)

## Facts & Assumptions

**Given:** The smooth material motion and positive-density fields, the $C^2$ state relation, local-equilibrium closure, $\mathrm{AC}_\omega$, and the contact and material-balance assumptions specified below.

[A1] [[post-fd-continuum-balances]]: the physical postulate adopts no-source mass conservation, local contact traction $\sigma n$, linear and angular momentum balances, total-energy balance, and a separate entropy inequality on its smooth positive-density material regions. It does not derive these assumptions. Its current batch-3 carrier and source-backed formulation were inspected, and step1Decision currently reports ready.

[A2] [[post-fd-local-equilibrium]]: at each admissible state, $v=1/\rho$, $e\in C^2$, $T=e_s>0$, and $p=-e_v$; this is an adopted local state relation. The current batch-11 carrier states this relation explicitly.

[A3] [[post-fd-newtonian-fourier]]: the adopted stress and heat-flux closures are $\tau=2\mu D_0+\zeta\theta I_3$ and $q=-K\nabla T$, with specified state laws and nonnegative $\mu,\zeta,\operatorname{sym}K$. The current batch-11 carrier states this closure explicitly.

[L1] [[lem-fd-gibbs-entropy-residual]]: under $\mathrm{AC}_\omega$, an open time interval, a bounded $C^1$ material region, a $C^2$ orientation-preserving motion, positive $C^1$ density and state fields with $v=1/\rho$, $T=e_s>0$, $p=-e_v$, a $C^1$ stress split $\sigma=-pI_3+\tau$, the local contact hypothesis, continuity equation, and separate linear/angular-momentum and total-energy integral balances, it concludes $\sigma=\sigma^T$, $\rho D_te=\sigma:D-\operatorname{div}q+\rho r$, and the displayed Gibbs residual identity. The complete displayed Gibbs hypotheses remain binding, and its proof step 3.1 supplies time recentering.

[L2] [[lem-fd-newtonian-admissibility]]: for $\mathrm{AC}_\omega$, $T>0$, symmetric $D$, arbitrary $g\in\mathbb R^3$, $\tau=2\mu D+\lambda(\operatorname{tr}D)I_3$, $q=-Kg$, and $\zeta=\lambda+2\mu/3$, the residual decomposes as $(2\mu|D_0|^2+\zeta\theta^2)/T+g^T\operatorname{sym}(K)g/T^2$, and it is nonnegative for all $D,g,T$ iff $\mu,\zeta\ge0$ and $\operatorname{sym}(K)$ is positive semidefinite. The algebraic test and its conditional Gibbs interpretation retain exactly these hypotheses.

[A4] At a point, the algebraic test varies $D$ and $g$ independently; it is not a claim that every such pair occurs in a particular global solution.

## Proof

1.1 Under the exact motion, contact, continuity and energy-balance hypotheses in [L1], the Gibbs identity gives $\mathcal G=\tau:D/T-q\cdot\nabla T/T^2$. Substitute the postulated closures from [A3]. Since $D=D_0+\theta I_3/3$, $\operatorname{tr}D_0=0$, $D_0:I_3=0$, and $I_3:I_3=3$, contraction gives $\tau:D=2\mu|D_0|^2+\zeta\theta^2$. Also $-q\cdot\nabla T=(\nabla T)^TK\nabla T=(\nabla T)^T\operatorname{sym}(K)\nabla T$, because a real scalar quadratic form annihilates the skew-symmetric part. This yields the stated formula. [A1, A2, A3, L1, algebra]

2.1 Apply the exact coefficient equivalence [L2] with $g=\nabla T$, $\lambda=\zeta-2\mu/3$, and $T>0$. It gives nonnegativity for every independent local $D,g$ exactly under the three stated conditions. The adopted coefficient range in [A3] satisfies those conditions; thus this closure is consistent with the separately adopted entropy inequality in [A1]. This is a conditional model deduction, not a proof of either physical postulate. [A1, A3, L2, step 1.1, algebra] ∎
