---
id: cor-nilradical-as-intersection-of-primes
kind: corollary
title: "The nilradical is the intersection of all prime ideals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-nilradical-and-reduced-ring, thm-radical-as-intersection-of-primes]
justified_by: []
aliases: []
landmark: true
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

For a commutative ring $R$, $\operatorname{Nil}(R)=\bigcap_{\mathfrak p\in\operatorname{Spec}R}\mathfrak p$, with the empty-intersection convention in force for the zero ring.

## Facts & Assumptions

**Given:** A commutative ring $R$ and the Axiom of Choice.

[L1] The nilradical of $R$ is $\sqrt{(0)}$ ([[def-nilradical-and-reduced-ring]]).

[L2] The radical of any ideal is the intersection of the prime ideals containing it ([[thm-radical-as-intersection-of-primes]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\operatorname{Nil}(R)=\sqrt{(0)}$. [L1]

2.1 Applying [L2] to the zero ideal gives $\sqrt{(0)}=\bigcap_{\mathfrak p\in\operatorname{Spec}R}\mathfrak p$. Combining this with step 1.1 yields the claimed formula for the nilradical. [L2, step 1.1]

3.1 Therefore the nilradical is exactly the intersection of all prime ideals of $R$. [step 2.1] ∎
