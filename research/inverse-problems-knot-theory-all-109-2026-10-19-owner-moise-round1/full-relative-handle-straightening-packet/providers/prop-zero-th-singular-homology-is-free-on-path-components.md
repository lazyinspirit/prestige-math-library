---
id: prop-zero-th-singular-homology-is-free-on-path-components
kind: proposition
title: "Zero-th singular homology is free on path components"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-singular-chain-complex-and-singular-homology, def-zero-simplex-augmentation-and-reduced-singular-homology, lem-singular-augmentation-commutes-with-boundary, def-path-connected]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: frontier-30
---

## Statement

For every topological space $X$,
$$H_0^{\mathrm{sing}}(X;\mathbb Z)\cong\bigoplus_{C\in\pi_0^{\mathrm{path}}(X)}\mathbb Z e_C,$$
the free abelian group on the path components of $X$.

## Facts & Assumptions

**Given:** A topological space $X$.

[L1] Singular homology in degree $0$ is $Z_0(X;\mathbb Z)/B_0(X;\mathbb Z)$, and the reduced complex uses the augmentation kernel in degree $0$ ([[def-singular-chain-complex-and-singular-homology]], [[def-zero-simplex-augmentation-and-reduced-singular-homology]]).

[L2] A path component is the equivalence class of the path relation ([[def-path-connected]]).

## Proof

**Proof technique:** direct.

1.1 Let $\Phi:C_0(X;\mathbb Z)\to\bigoplus_{C\in\pi_0^{\mathrm{path}}(X)}\mathbb Z e_C$ send each singular $0$-simplex $\sigma$ to the basis vector indexed by the path component of its unique image point. If $\tau:\Delta^1\to X$ is a singular $1$-simplex, then the map $s\mapsto\tau(1-s,s)$ is a path in $X$ from the image point of $\tau\delta_1$ to the image point of $\tau\delta_0$. Hence $\Phi(\partial_1\tau)=0$, so $\Phi$ kills $B_0(X;\mathbb Z)$ and descends to a homomorphism $$\overline\Phi:H_0^{\mathrm{sing}}(X;\mathbb Z)\to\bigoplus_{C\in\pi_0^{\mathrm{path}}(X)}\mathbb Z e_C.$$ [L1, L2, given]

2.1 The map $\overline\Phi$ is surjective: if $X=\varnothing$ there is nothing to prove, and otherwise any finite sum $\sum_{k=1}^m a_k e_{C_k}$ is the image of the $0$-cycle $\sum_{k=1}^m a_k\sigma_k$, where $\sigma_k$ is any singular $0$-simplex landing at a chosen point of $C_k$. [step 1.1, L2]

2.2 Let $z=\sum_{k=1}^m a_k\sigma_k$ be a $0$-cycle with $\overline\Phi([z])=0$. For each path component that meets the finite support of $z$, choose one base point simplex $\sigma_C$. Since $\overline\Phi([z])=0$, the total coefficient in each such component is zero. If $\sigma_k$ and $\sigma_C$ lie in the same path component, [L2] gives a path $\gamma_k:I\to X$ from the image point of $\sigma_k$ to the image point of $\sigma_C$. Define the singular $1$-simplex $\overline\gamma_k:\Delta^1\to X$ by $\overline\gamma_k(t_0,t_1)=\gamma_k(t_1)$. Then $\partial_1\overline\gamma_k=\sigma_C-\sigma_k$. Therefore $$[z]=\sum_C\left(\sum_{\sigma_k\in C} a_k\right)[\sigma_C]=0$$ in $H_0^{\mathrm{sing}}(X;\mathbb Z)$. Thus $\overline\Phi$ is injective. [L1, L2, step 1.1, algebra]

3.1 Steps 2.1 and 2.2 show that $\overline\Phi$ is an isomorphism, so $H_0^{\mathrm{sing}}(X;\mathbb Z)$ is free on the path components of $X$. [step 2.1, step 2.2] ∎
