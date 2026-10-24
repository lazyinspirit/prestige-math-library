---
id: lem-polynomial-ring-dimension-lower-chain
kind: lemma
title: "A prime chain in R extends to a longer chain in R[x]"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-krull-dimension-of-a-ring, thm-prime-spectrum-of-a-quotient-bijection, thm-quotient-is-domain-iff-ideal-prime]
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §§18, 21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
---


## Statement

Let $R$ be a commutative ring. If
$$ \mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_d $$
is a strict prime chain in $R$, then
$$ \mathfrak p_0R[x]\subsetneq\cdots\subsetneq\mathfrak p_dR[x]\subsetneq\mathfrak p_dR[x]+(x) $$
is a strict prime chain in $R[x]$. Consequently $\dim R[x]\ge \dim R+1$ whenever $\dim R$ is finite.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a strict prime chain $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_d$ in $R$.

[L1] For a prime ideal $\mathfrak p$, the quotient $R/\mathfrak p$ is an integral domain ([[thm-quotient-is-domain-iff-ideal-prime]]).

[L2] Prime ideals of a quotient correspond to prime ideals containing the quotient ideal ([[thm-prime-spectrum-of-a-quotient-bijection]]).

[L3] Krull dimension is computed by strict prime chains ([[def-krull-dimension-of-a-ring]]).

## Proof

**Proof technique:** direct.

1.1 For each $i$, the quotient $R[x]/\mathfrak p_iR[x]\cong (R/\mathfrak p_i)[x]$ is a polynomial ring over the domain $R/\mathfrak p_i$, so [L1] and [L2] show that $\mathfrak p_iR[x]$ is prime. Strictness of the original chain makes the extended chain strict. [L1, L2, given]

2.1 The quotient by $\mathfrak p_dR[x]+(x)$ is again $R/\mathfrak p_d$, a domain, so [L1] and [L2] show that $\mathfrak p_dR[x]+(x)$ is prime and strictly contains $\mathfrak p_dR[x]$. [L1, L2, step 1.1]

3.1 The displayed chain in $R[x]$ therefore has length $d+1$, and [L3] yields $\dim R[x]\ge \dim R+1$ whenever $\dim R$ is finite. [L3, step 1.1, step 2.1] ∎
