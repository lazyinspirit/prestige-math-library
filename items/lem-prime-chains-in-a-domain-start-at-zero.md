---
id: lem-prime-chains-in-a-domain-start-at-zero
kind: lemma
title: "In a domain, every prime chain below a prime begins at (0)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-zero-divisor-and-integral-domain, def-prime-and-maximal-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Statement

Let $R$ be an integral domain and let $\mathfrak p\in\operatorname{Spec}(R)$. Then $(0)$ is a prime ideal of $R$ contained in $\mathfrak p$. Consequently every strict prime chain below $\mathfrak p$ can be extended downward to a strict chain beginning at $(0)$.

## Facts & Assumptions

**Given:** An integral domain $R$ and a prime ideal $\mathfrak p\subset R$.

[L1] An integral domain is a nonzero commutative ring in which $ab=0$ implies $a=0$ or $b=0$ ([[def-zero-divisor-and-integral-domain]]).

[L2] A prime ideal is a proper ideal $P$ such that $ab\in P$ implies $a\in P$ or $b\in P$ ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $R$ is nonzero, so $(0)\subsetneq R$. If $ab\in(0)$, then $ab=0$, and [L1] gives $a=0$ or $b=0$. Thus $a\in(0)$ or $b\in(0)$, so [L2] shows that $(0)$ is prime. [L1, L2, given]

2.1 Every ideal contains $0$, hence $(0)\subseteq\mathfrak p$. Therefore any chain of primes below $\mathfrak p$ can be extended by adjoining $(0)$ at the bottom if it is not already present. [step 1.1, given]

3.1 So every prime chain below $\mathfrak p$ begins at $(0)$ after at most one downward extension. [step 2.1] ∎
