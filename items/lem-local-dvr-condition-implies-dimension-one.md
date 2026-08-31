---
id: lem-local-dvr-condition-implies-dimension-one
kind: lemma
title: "Local DVRs at the nonzero primes force dimension one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-localisation-at-a-prime-is-local, thm-prime-spectrum-of-a-localisation-bijection, cor-prime-ideals-and-dimension-of-a-dvr, thm-proper-ideal-contained-in-maximal-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---
## Statement

Assume the Axiom of Choice. Let $R$ be a domain such that $R_{\mathfrak p}$ is a discrete valuation ring for every nonzero prime ideal $\mathfrak p$ of $R$. Then every nonzero prime ideal of $R$ is maximal. Consequently, if $R$ is not a field, then $\dim R=1$.

## Facts & Assumptions

**Given:** A domain $R$ such that $R_{\mathfrak p}$ is a discrete valuation ring for every nonzero prime ideal $\mathfrak p$.

[L1] Localising at a prime ideal produces a local ring with maximal ideal $\mathfrak pR_{\mathfrak p}$ ([[thm-localisation-at-a-prime-is-local]]).

[L2] Prime ideals of a localisation correspond exactly to primes of the original ring that avoid the denominator set ([[thm-prime-spectrum-of-a-localisation-bijection]]).

[L3] A discrete valuation ring has exactly two prime ideals, namely $(0)$ and its maximal ideal, and hence has dimension $1$ ([[cor-prime-ideals-and-dimension-of-a-dvr]]).

[L4] Every proper ideal of a nonzero commutative ring is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak p\subsetneq\mathfrak q$ be prime ideals of $R$ with $\mathfrak p\neq(0)$. By hypothesis, $R_{\mathfrak q}$ is a discrete valuation ring. Because $R$ is a domain, any nonzero element of $\mathfrak p$ remains nonzero in $R_{\mathfrak q}$, so $\mathfrak pR_{\mathfrak q}$ is a nonzero prime ideal of $R_{\mathfrak q}$. Its contraction is $\mathfrak p$, so $\mathfrak pR_{\mathfrak q}\subsetneq\mathfrak qR_{\mathfrak q}$. This contradicts [L3], which allows only $(0)$ and $\mathfrak qR_{\mathfrak q}$ as primes in a DVR. Therefore no nonzero prime ideal of $R$ is properly contained in another prime ideal. [L1, L2, L3, given, algebra]

2.1 Let $\mathfrak p$ be a nonzero prime ideal of $R$. By [L4], choose a maximal ideal $\mathfrak m$ containing $\mathfrak p$. Since $\mathfrak p$ is nonzero, step 1.1 forbids a strict inclusion $\mathfrak p\subsetneq\mathfrak m$. Hence $\mathfrak p=\mathfrak m$, so every nonzero prime ideal of $R$ is maximal. [L4, step 1.1, given, choose]

3.1 Assume now that $R$ is not a field. Choose a nonzero nonunit $x\in R$. Then $(x)$ is a proper ideal, so [L4] gives a maximal ideal $\mathfrak m$ containing it. The ideal $\mathfrak m$ is nonzero because it contains $x$, and step 2.1 shows that every nonzero prime ideal is maximal. Thus every strict prime chain has length at most $1$, while $(0)\subsetneq\mathfrak m$ has length $1$. Hence $\dim R=1$. [L4, step 2.1, given, choose] ∎
