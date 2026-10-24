---
id: lem-polynomial-prime-contraction-height-jump-at-most-one
kind: lemma
title: "Only one saturated step can lie over a fixed contracted prime in R[x]"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-polynomial-ring-over-a-field-is-a-pid, def-field-of-fractions, thm-prime-spectrum-of-a-localisation-bijection, thm-prime-spectrum-of-a-quotient-bijection, thm-quotient-is-domain-iff-ideal-prime]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
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

Let $R$ be a commutative ring and let $P\subsetneq Q$ be prime ideals of $R[x]$ with the same contraction $\mathfrak p=P\cap R=Q\cap R$. Then $P=\mathfrak pR[x]$, and there is no prime ideal strictly between $P$ and $Q$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and prime ideals $P\subsetneq Q$ of $R[x]$ with common contraction $\mathfrak p$.

[L1] The quotient $R/\mathfrak p$ is a domain, so it has a field of fractions $K=\operatorname{Frac}(R/\mathfrak p)$ ([[thm-quotient-is-domain-iff-ideal-prime]], [[def-field-of-fractions]]).

[L2] Prime ideals of a quotient and a localization correspond to prime ideals upstairs containing the kernel and avoiding the denominator set ([[thm-prime-spectrum-of-a-quotient-bijection]], [[thm-prime-spectrum-of-a-localisation-bijection]]).

[L3] Over a field, every ideal of $K[x]$ is principal, and every nonzero prime ideal of $K[x]$ is maximal ([[cor-polynomial-ring-over-a-field-is-a-pid]]).

## Proof

**Proof technique:** direct.

1.1 Passing to the quotient by $\mathfrak pR[x]$ and then localizing away from the nonzero elements of $R/\mathfrak p$, [L1] and [L2] identify the fiber over $\mathfrak p$ with the prime spectrum of $K[x]$. Under this identification, the images of $P$ and $Q$ are comparable prime ideals of $K[x]$, with the image of $P$ properly contained in the image of $Q$. [L1, L2, given]

2.1 By [L3], the only way two comparable primes in $K[x]$ can be strictly nested is for the smaller one to be $(0)$ and the larger one to be a nonzero maximal prime. Therefore the image of $P$ in $K[x]$ is zero. Contracting back through [L2], this means $P=\mathfrak pR[x]$. The same description also shows that no third prime can lie strictly between $P$ and $Q$, because no third prime lies strictly between $(0)$ and a nonzero prime in the PID $K[x]$. [L2, L3, step 1.1]

3.1 Hence over a fixed contracted prime in $R[x]$ there is at most one extra strict step, and the lower prime in such a pair is exactly the extended prime $\mathfrak pR[x]$. [step 2.1] ∎
