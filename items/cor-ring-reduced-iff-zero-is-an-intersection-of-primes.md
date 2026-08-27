---
id: cor-ring-reduced-iff-zero-is-an-intersection-of-primes
kind: corollary
title: "A ring is reduced exactly when zero is an intersection of primes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-nilradical-and-reduced-ring, cor-nilradical-as-intersection-of-primes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §2 Ideals"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §2 Ideals"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

A commutative ring $R$ is reduced if and only if its zero ideal is the intersection of its prime ideals.

## Facts & Assumptions

**Given:** A commutative ring $R$ and the Axiom of Choice.

[L1] $R$ is reduced exactly when $\operatorname{Nil}(R)=(0)$ ([[def-nilradical-and-reduced-ring]]).

[L2] The nilradical is the intersection of all prime ideals ([[cor-nilradical-as-intersection-of-primes]]).

## Proof

**Proof technique:** direct.

1.1 If $R$ is reduced, then $\operatorname{Nil}(R)=(0)$ by [L1]. Applying [L2] yields $(0)=\bigcap_{\mathfrak p\in\operatorname{Spec}R}\mathfrak p$. [L1, L2]

1.2 Conversely, if $(0)=\bigcap_{\mathfrak p\in\operatorname{Spec}R}\mathfrak p$, then [L2] shows that $\operatorname{Nil}(R)=(0)$. Now [L1] gives that $R$ is reduced. [L1, L2]

2.1 Steps 1.1 and 1.2 prove the equivalence. [step 1.1, step 1.2] ∎
