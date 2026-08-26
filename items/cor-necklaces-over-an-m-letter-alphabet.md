---
id: cor-necklaces-over-an-m-letter-alphabet
kind: corollary
title: "The number of necklaces of length $n$ on an $m$-letter alphabet is $\\frac{1}{n}\\sum_{d\\mid n}\\varphi(d)m^{n/d}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-neutral-and-atomic-classes, thm-cycle-construction-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Statement

Let $m \ge 1$ and $n \ge 1$. The number of necklaces of length $n$ on an
$m$-letter alphabet is

$$\frac{1}{n}\sum_{d \mid n}\varphi(d)m^{n/d}.$$

## Facts & Assumptions

**Given:** Naturals $m \ge 1$ and $n \ge 1$, and the class $\mathcal{A} := m\mathcal{Z}$ of $m$ coloured atoms.

[L1] If a combinatorial class $\mathcal A$ has no size-zero objects, then over a commutative $\mathbb Q$-algebra its cycle construction has generating function $\operatorname{OGF}(\operatorname{CYC}(\mathcal A))= \sum_{k\ge1}\frac{\varphi(k)}{k}\log\frac{1}{1-A(x^k)}$ ([[thm-cycle-construction-formula]]).

## Proof

**Proof technique:** direct.

1.1 The class $\mathcal{A}$ has generating function $A(x)=mx$. Its cycle class is exactly the class of coloured necklaces, with size equal to necklace length. [construct]

1.2 For each $k \ge 1$, one has $\log(1/(1-mx^k)) = \sum_{j \ge 1}m^j x^{kj}/j$, so the coefficient of $x^n$ in this series is $0$ unless $k \mid n$, and is $m^{n/k}/(n/k)$ when $k \mid n$. [algebra]

2.1 Taking the coefficient of $x^n$ in [L1] and using steps 1.1 and 1.2 gives $[x^n]\operatorname{OGF}(\operatorname{CYC}(\mathcal{A})) = \sum_{k \mid n}(\varphi(k)/k)\cdot(m^{n/k}/(n/k)) = (1/n)\sum_{k \mid n}\varphi(k)m^{n/k}$. This coefficient is exactly the number of necklaces of length $n$. [step 1.1, step 1.2, L1, algebra] ∎
