---
id: cor-cauchy-theorem-convex-domain
kind: corollary
title: "Cauchy's theorem on a convex complex domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [rem-plane-star-shaped-and-convex-dictionary, cor-cauchy-theorem-star-shaped-domain, def-star-shaped-open-subset-of-rn, def-complex-domain]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Tang-Kai Lee, Complex Analysis Notes, Section 2.1.2"
      url: "https://www.math.columbia.edu/~leetk/TA/CA25-file/Note-CA.pdf"
pipeline_run: null
---

## Statement

Let $U$ be a complex domain whose image in $\mathbb R^2$ is convex in the sense of [[rem-plane-star-shaped-and-convex-dictionary]]. If $f:U\to\mathbb C$ is holomorphic and $\gamma$ is a closed rectifiable contour in $U$, then

$$\int_\gamma f(z)\,dz=0.$$

## Facts & Assumptions

**Given:** A convex complex domain $U$, a holomorphic $f:U\to\mathbb C$, and a closed rectifiable contour $\gamma$ in $U$.

[L1] A complex domain is nonempty and open, and every convex open subset of Euclidean space is star-shaped with respect to each of its points ([[def-complex-domain]], [[def-star-shaped-open-subset-of-rn]]).

[L2] Cauchy's theorem on a star-shaped domain makes every closed rectifiable contour integral of a holomorphic function zero ([[cor-cauchy-theorem-star-shaped-domain]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose any $a\in U$ and regard $U$ as star-shaped with respect to $a$. [given, L1, choose]

2.1 Now [L2] applied to the given $f$ and $\gamma$ gives the displayed zero integral. [given, step 1.1, L2] ∎
