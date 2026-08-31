---
id: thm-localisation-of-a-dedekind-domain
kind: theorem
title: "A localization of a Dedekind domain is Dedekind or a field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dedekind-domain, thm-noetherian-ring-quotients-and-localisations, thm-integrality-commutes-with-localisation, thm-prime-spectrum-of-a-localisation-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
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

Let $R$ be a Dedekind domain and let $S\subseteq R$ be a multiplicative set with
$0\notin S$. Then $S^{-1}R$ is either a Dedekind domain or a field.

If a nonzero prime of $R$ survives the localisation, then $S^{-1}R$ is again a Dedekind domain. If no nonzero prime survives, then $S^{-1}R$ is a field.

## Facts & Assumptions

**Given:** A Dedekind domain $R$ and a multiplicative subset $S\subseteq R$ with $0\notin S$.

[F1] A Dedekind domain is a Noetherian integrally closed domain of dimension $1$ ([[def-dedekind-domain]]).

[L1] Quotients and localisations of Noetherian rings are Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]).

[L2] Integral closure commutes with localisation ([[thm-integrality-commutes-with-localisation]]).

[L3] Prime ideals of $S^{-1}R$ correspond exactly to prime ideals of $R$ disjoint from $S$ ([[thm-prime-spectrum-of-a-localisation-bijection]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [L1], the localisation $S^{-1}R$ is Noetherian. Because $R$ is a domain and $0\notin S$, so is $S^{-1}R$. By [F1] and [L2], it is integrally closed. [F1, L1, L2]

2.1 Suppose $S^{-1}R$ has a nonzero prime ideal $\mathfrak n$. By [L3], it is the extension of a nonzero prime ideal $\mathfrak p\subset R$ disjoint from $S$. In a Dedekind domain every nonzero prime is maximal, so every nonzero prime of $S^{-1}R$ is maximal as well by the same correspondence [L3]. Therefore $S^{-1}R$ has dimension $1$, and step 1.1 makes it a Dedekind domain. [F1, L3, step 1.1, algebra]

3.1 Suppose instead that $S^{-1}R$ has no nonzero prime ideals. Then [L3] says that the only prime ideal of $S^{-1}R$ is $(0)$. In a domain, $(0)$ is maximal exactly when the ring is a field. Hence $S^{-1}R$ is a field. [L3, step 1.1, algebra] ∎
