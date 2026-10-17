---
id: ex-tgr-softened-box-normalization
kind: example
title: "Finite softened two-body box"
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
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
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

## Example

Let $B=[0,L]^3$ with $L>0$, choose $N=2$, mass $m>0$, regulator $a>0$, action reference $h_*>0$, and inverse temperature $\beta>0$. Use the softened Hamiltonian
$$H(q_1,q_2,p_1,p_2)=\frac{|p_1|^2+|p_2|^2}{2m} -\frac{Gm^2}{\sqrt{|q_1-q_2|^2+a^2}}$$
on $B^2\times\mathbb R^6$ with measure $d^3q_1d^3q_2d^3p_1d^3p_2/(2!h_*^6)$.

## Facts & Assumptions

**Given:** The finite softened model, a positive-volume box, $m,G,a,\beta,h_*>0$.

[F1] Every finite softened model on a positive finite-volume box has a finite positive Gibbs partition function and a normalized density for each $\beta>0$. ([[lem-tgr-finite-gravitational-gibbs]])

## Verification

1.1 For every $(q_1,q_2)\in B^2$, the pair attraction is between $-Gm^2/a$ and $0$, so the Hamiltonian has the exact form covered by [F1]. The box has volume $L^3>0$ and finite, so all hypotheses apply. [given, F1, algebra]

2.1 By [F1], $0<Z_2(\beta)<\infty$ and $p_\beta=Z_2^{-1}e^{-\beta H}$ is a probability density relative to the stated dimensionless phase measure. This verifies the finite softened two-body preparation for every $\beta>0$; it makes no claim about the distinct point model or dynamical equilibration. [F1, step 1.1] ∎
