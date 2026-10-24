---
id: ex-step-integrator-evaluates-at-the-jump
kind: example
title: "A one-jump integrator evaluates a continuous integrand at the jump"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       thm-riemann-stieltjes-existence-continuous-bv,
       def-continuity-real, def-partition-and-refinement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.15"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Example

Fix $a<c<b$ and let $H_c(x)=0$ for $x<c$ and $H_c(x)=1$ for $x\ge c$. For every continuous $f$,
$$\int_a^b f\,dH_c=f(c).$$

## Facts & Assumptions

**Given:** The one-jump integrator $H_c$ and a continuous $f$.

[L1] A Stieltjes sum weights each tag by the corresponding integrator increment ([[def-riemann-stieltjes-sum-and-integral]]).

[L2] Continuity forces $f(\xi)\to f(c)$ whenever $\xi\to c$ ([[def-continuity-real]]).

## Verification

**Proof technique:** direct.

1.1 In every tagged partition, all increments of $H_c$ vanish except the one on the interval across its jump; that increment is one. Its tag $\xi$ satisfies $|\xi-c|\le\lVert P\rVert$, so the complete Stieltjes sum is $f(\xi)$ and tends to $f(c)$ by [L2]. [L1, L2]

2.1 The same computation counts a jump at $b$. A jump at $a$ is represented by $H(a)=0$ and $H(x)=1$ for $x>a$ and likewise contributes $f(a)$. By contrast, merely assigning a constant endpoint value on the whole interval creates no increment and hence has integral zero. [given] ∎
