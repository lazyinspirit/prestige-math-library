---
id: ex-faithfully-flat-principal-open-cover
kind: example
title: "A finite product of principal localizations covering the spectrum is faithfully flat"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-localisations-are-flat, thm-faithfully-flat-ring-map-characterisations]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, Proposition 11.22"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Example

Assume the Axiom of Choice for the faithfully-flat characterization used below.

Let $f_1,\ldots,f_n\in R$ generate the unit ideal. Then the product map
$$ R\longrightarrow \prod_{i=1}^n R_{f_i} $$
is faithfully flat.

## Facts & Assumptions

**Given:** The Axiom of Choice, a commutative ring $R$, and elements $f_1,\ldots,f_n\in R$ with
$(f_1,\ldots,f_n)=R$.

[L1] Each localization $R_{f_i}$ is flat over $R$
([[thm-localisations-are-flat]]).

[L2] A flat ring map is faithfully flat exactly when proper ideals remain proper
([[thm-faithfully-flat-ring-map-characterisations]]).

## Verification

**Proof technique:** direct.


1.1 Each factor $R_{f_i}$ is flat by [L1], so the product ring $\prod_i R_{f_i}$ is flat over $R$ because finite direct products are finite direct sums as modules. [L1, given, algebra]


1.2 Let $I\subsetneq R$ be proper. If $I\prod_i R_{f_i}=\prod_i R_{f_i}$, then for every $i$ some power of $f_i$ lies in $I$, because $1\in IR_{f_i}$ implies $f_i^{m_i}\in I$ for some $m_i$. Since the $f_i$ generate the unit ideal, so do the powers $f_i^{m_i}$, forcing $1\in I$, contradiction. Thus the extended ideal is proper. [L2, algebra]


2.1 By [L2], the product map is faithfully flat. [L2] ∎
