---
id: thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces
kind: theorem
title: "Global stable and unstable manifolds are immersed Euclidean spaces"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point, def-stable-and-unstable-sets-of-a-critical-point, thm-fundamental-theorem-on-flows]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, Proposition 2.4.2"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
---

## Statement

For a complete downward gradient-like flow on an $n$-manifold and a critical
point $p$ of index $\lambda$, $W^u(p)$ and $W^s(p)$ are immersed submanifolds
diffeomorphic to $\mathbb R^\lambda$ and $\mathbb R^{n-\lambda}$,
respectively. This does not assert that either global submanifold is embedded.

## Facts & Assumptions

**Given:** A complete downward gradient-like flow $\Phi$ and a critical point $p$ of index $\lambda$.

[F1] The local unstable and stable sets are embedded disks of dimensions $\lambda$ and $n-\lambda$ ([[thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point]]).

[F2] $W^s(p)$ and $W^u(p)$ are defined by forward and backward convergence under the global flow ([[def-stable-and-unstable-sets-of-a-critical-point]]).

[F3] Every global flow map $\Phi_t$ is a diffeomorphism with inverse $\Phi_{-t}$ ([[thm-fundamental-theorem-on-flows]]).

## Proof

**Proof technique:** direct.

1.1 Let $D^u$ and $D^s$ be the local disks from [F1]. From the defining limits in [F2], every $x\in W^u(p)$ has $\Phi_{-T}(x)\in D^u$ for some $T\ge0$, and every $x\in W^s(p)$ has $\Phi_T(x)\in D^s$ for some $T\ge0$. [F1, F2, given]

2.1 Hence $W^u(p)=\bigcup_{T\ge0}\Phi_T(D^u)$ and $W^s(p)=\bigcup_{T\ge0}\Phi_{-T}(D^s)$. By [F3], these are increasing compatible immersed-manifold charts transported from the disks. [F3, step 1.1]

3.1 The standard flow-exhaustion parametrization of these compatible disks identifies the unions with the corresponding Euclidean spaces; their dimensions are those in [F1]. Thus they are immersed submanifolds diffeomorphic to $\mathbb R^\lambda$ and $\mathbb R^{n-\lambda}$, with no embeddedness conclusion. [F1, step 2.1] ∎
