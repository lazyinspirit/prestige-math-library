---
id: thm-osgood-uniqueness-criterion-for-first-order-odes
kind: theorem
title: "Osgood's criterion gives uniqueness without a Lipschitz bound"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-modulus-of-continuity-and-osgood-condition, def-first-order-ode-initial-value-problem-and-solution, thm-chain-rule, thm-ftc-second-part, cor-primitives-of-a-continuous-function, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Osgood uniqueness"
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Suppose a continuous vector field has a state modulus $\rho$ satisfying the Osgood divergence condition on a neighborhood of two solution graphs. Then the Osgood divergence condition gives uniqueness of solutions through the same initial value, on both sides of the initial time.

The Osgood divergence condition gives uniqueness of solutions through the same initial value.

## Facts & Assumptions

**Given:** Two solutions $x,y$ through the same initial value and an Osgood state modulus $\rho$.

[L1] The Euclidean inner product satisfies $\langle z,z\rangle\ge0$ ([[def-euclidean-inner-product]]).

[L2] Cauchy-Schwarz gives $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L3] The chain rule differentiates a differentiable composite without dividing by the inner increment ([[thm-chain-rule]]).

[L4] The Osgood condition is the divergence of $\int_{0^+}dr/\rho(r)$ for a positive modulus away from zero ([[def-modulus-of-continuity-and-osgood-condition]]).

[L5] An integrable derivative satisfies the endpoint-increment formula ([[thm-ftc-second-part]]).

[L6] The integral function of a continuous function on a nondegenerate interval is a primitive of that function ([[cor-primitives-of-a-continuous-function]]).

## Proof

**Proof technique:** contradiction.

1.1 Put $R(t)=\|x(t)-y(t)\|_2^2$; differentiation by [L3], [L1], [L2], and the modulus estimate give $|R'(t)|\le2\sqrt{R(t)}\rho(\sqrt{R(t)})$. [given, L1, L2, L3]

2.1 Suppose, for contradiction, that $R$ becomes positive after the initial time, and choose a time $t$ before $\sqrt{R}$ can leave the modulus neighborhood. For $\varepsilon>0$, put $q_\varepsilon=\sqrt{R+\varepsilon}$. Then step 1.1 and monotonicity of $\rho$ give $q_\varepsilon'\le\rho(q_\varepsilon)$. [step 1.1, L3, assume-contra, algebra]

3.1 By [L6], $H_\varepsilon(q)=\int_{\sqrt\varepsilon}^{q}dr/\rho(r)$ has derivative $1/\rho(q)$ on the positive interval in use. Apply [L3] and [L5]: since $q_\varepsilon(t_0)=\sqrt\varepsilon$, step 2.1 gives $\int_{\sqrt\varepsilon}^{\sqrt{R(t)+\varepsilon}}dr/\rho(r)\le t-t_0$. As $\varepsilon\downarrow0$, the left side diverges by [L4] because $R(t)>0$, a contradiction. Reflection proves the backward direction, and repeating the local argument at every agreement time gives uniqueness on the whole common interval. [step 2.1, L3, L4, L5, L6, discharge-contradiction] ∎
