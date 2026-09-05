---
id: cex-a-singular-cochain-is-not-a-finite-singular-chain
kind: counterexample
title: "A singular cochain need not have finite support on singular simplices"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-singular-simplex-and-singular-chain-group-with-coefficients, ex-homology-of-an-interval-from-contractibility]
proof_strategy: direct
verification:
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

## Statement refuted

**Refuted claim:** every singular cochain on a singular chain group is
supported on only finitely many singular simplices.

On the interval $I=[0,1]$, define a homomorphism
$$\varphi:C_0(I;\mathbb Z)\to\mathbb Z$$
by $\varphi(\sigma)=1$ for every singular $0$-simplex $\sigma:\Delta^0\to I$.
This is a perfectly valid singular $0$-cochain, but it is nonzero on every
singular $0$-simplex.

## Facts & Assumptions

**Given:** The interval $I=[0,1]$.

[L1] Singular $0$-chains are finite integer linear combinations of singular $0$-simplices ([[def-singular-simplex-and-singular-chain-group-with-coefficients]]).

[L2] For each point $x\in I$, the constant map $c_x:\Delta^0\to I$ is a singular $0$-simplex ([[def-singular-simplex-and-singular-chain-group-with-coefficients]]).

## Counterexample

**Proof technique:** direct.

1.1 The assignment $\varphi(\sigma)=1$ on each singular $0$-simplex extends uniquely to a homomorphism from the free abelian group $C_0(I;\mathbb Z)$ to $\mathbb Z$, so it is a singular $0$-cochain in the usual dual-group sense. [L1, given]

2.1 By [L2], each point $x\in I$ determines a singular $0$-simplex $c_x$, and distinct points give distinct maps, so $I$ has infinitely many singular $0$-simplices. The cochain $\varphi$ takes the value $1$ on every one of them, so its support is infinite. [L2, step 1.1]

3.1 Thus $\varphi$ is a singular cochain whose support is not finite, refuting the claim. [step 2.1] ∎
