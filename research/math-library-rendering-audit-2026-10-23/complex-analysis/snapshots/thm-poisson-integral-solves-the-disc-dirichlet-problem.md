---
id: thm-poisson-integral-solves-the-disc-dirichlet-problem
kind: theorem
title: "The Poisson integral gives the unique continuous harmonic extension on the closed unit disc"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-poisson-integral-on-the-disc, lem-poisson-integrals-are-harmonic, lem-poisson-kernel-is-a-boundary-approximate-identity, cor-uniqueness-for-the-bounded-plane-dirichlet-problem]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Sigurdur Helgason, MIT 18.112 Lecture 16: Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-112-functions-of-a-complex-variable-fall-2008/414780e0991d20cd338320d3784fae4d_lecture16.pdf"
pipeline_run: null
---

## Statement

Let $\varphi:\partial\mathbb D\to\mathbb R$ be continuous. Then its Poisson
integral $P[\varphi]$ is harmonic on $\mathbb D$, extends continuously to
$\overline{\mathbb D}$, agrees with $\varphi$ on $\partial\mathbb D$, and is the
unique function with those properties.

## Facts & Assumptions

**Given:** A continuous boundary datum $\varphi:\partial\mathbb D\to\mathbb R$.

[L1] The Poisson integral is harmonic on $\mathbb D$ ([[lem-poisson-integrals-are-harmonic]]).

[L2] The Poisson integral converges to the boundary data uniformly as $r\to1^-$ ([[lem-poisson-kernel-is-a-boundary-approximate-identity]]).

[L3] A bounded-domain continuous harmonic extension of fixed boundary data is unique ([[cor-uniqueness-for-the-bounded-plane-dirichlet-problem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the function $P[\varphi]$ is harmonic on $\mathbb D$. [L1]

1.2 For $z=re^{i\alpha}$ with $0\le r<1$, [L2] gives $P[\varphi](re^{i\alpha})\to\varphi(e^{i\alpha})$ uniformly in $\alpha$ as $r\to1^-$. Therefore defining the boundary values of $P[\varphi]$ by $\varphi$ produces a continuous extension to $\overline{\mathbb D}$. [L2]

2.1 If $u$ is any other continuous harmonic function on $\overline{\mathbb D}$ with $u=\varphi$ on $\partial\mathbb D$, then [L3] applied to $u$ and the extended Poisson integral forces $u=P[\varphi]$ on $\overline{\mathbb D}$. [step 1.1, step 1.2, L3] ∎
