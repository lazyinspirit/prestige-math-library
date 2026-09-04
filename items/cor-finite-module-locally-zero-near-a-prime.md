---
id: cor-finite-module-locally-zero-near-a-prime
kind: corollary
title: "A finite module that vanishes at a prime vanishes on some principal neighbourhood of that prime"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-support-and-annihilator-of-a-finite-module, def-support-of-a-module, thm-localisation-equivalence-and-ring-laws]
aliases: []
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition 13.35"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 5.13"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $M$ be a finitely generated left $R$-module and let $\mathfrak p$ be a prime ideal of $R$. If $M_{\mathfrak p}=0$, then there exists $s \notin \mathfrak p$ such that the localisation of $M$ at the multiplicative set
$$ S_s:=\{1,s,s^2,\dots\} $$
is zero.

## Facts & Assumptions

**Given:** A commutative ring $R$, a finitely generated left $R$-module $M$, and a prime ideal $\mathfrak p$ with $M_{\mathfrak p}=0$.

[L1] For a finite module, the support is the set of primes containing its annihilator ([[thm-support-and-annihilator-of-a-finite-module]]).

[L2] The support condition $\mathfrak p \in \operatorname{Supp}_R(M)$ means $M_{\mathfrak p}\neq0$ ([[def-support-of-a-module]]).

[L3] In a localisation, each denominator becomes a unit ([[thm-localisation-equivalence-and-ring-laws]]).

## Proof

**Proof technique:** direct.

1.1 Since $M_{\mathfrak p}=0$, [L2] says $\mathfrak p \notin \operatorname{Supp}_R(M)$. By [L1], $\operatorname{Ann}_R(M)\nsubseteq\mathfrak p$, so choose $s \in \operatorname{Ann}_R(M)\setminus\mathfrak p$. [L1, L2, choose]

2.1 Let $S_s=\{1,s,s^2,\dots\}$. In the localisation $S_s^{-1}M$, the element $s/1\in S_s^{-1}R$ is a unit by [L3], and it annihilates every element because $s$ annihilates all of $M$. Therefore $S_s^{-1}M=0$. [step 1.1, L3, algebra] ∎
