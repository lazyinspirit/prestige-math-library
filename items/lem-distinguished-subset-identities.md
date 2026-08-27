---
id: lem-distinguished-subset-identities
kind: lemma
title: "Distinguished-subset identities"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-principal-distinguished-subset-of-spectrum, cor-nilradical-as-intersection-of-primes]
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 The Spectrum of a Ring"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $f,g\in R$. Then
$$
D(0)=\varnothing,\qquad D(1)=\operatorname{Spec}(R),\qquad D(fg)=D(f)\cap D(g).
$$
Moreover, for every integer $n\ge 1$ one has
$$
D(f^n)=D(f).
$$

## Facts & Assumptions

**Given:** A commutative ring $R$, elements $f,g\in R$, and an integer $n\ge 1$.

[L1] $D(h)$ is the set of prime ideals that do not contain $h$ ([[def-principal-distinguished-subset-of-spectrum]]).

## Proof

**Proof technique:** direct.

1.1 Every prime ideal contains $0$, so no prime lies in $D(0)$. Every prime ideal is proper, so it does not contain $1$; hence every prime lies in $D(1)$. Therefore $D(0)=\varnothing$ and $D(1)=\operatorname{Spec}(R)$. [L1, given]

1.2 Let $\mathfrak p\in\operatorname{Spec}(R)$. Then $\mathfrak p\in D(fg)$ exactly when $fg\notin\mathfrak p$. Because $\mathfrak p$ is prime, this is equivalent to saying that neither $f$ nor $g$ lies in $\mathfrak p$, that is, $\mathfrak p\in D(f)\cap D(g)$. The same prime-ideal property shows that $f^n\in\mathfrak p$ exactly when $f\in\mathfrak p$, so $D(f^n)=D(f)$. [L1, given, algebra]

2.1 Steps 1.1 and 1.2 prove the stated identities for principal distinguished subsets. [step 1.1, step 1.2] ∎
