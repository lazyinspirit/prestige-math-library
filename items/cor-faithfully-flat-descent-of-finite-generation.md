---
id: cor-faithfully-flat-descent-of-finite-generation
kind: corollary
title: "Finite generation descends along faithfully flat ring maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-faithful-flatness-detected-by-nonzero-modules-and-fibres, thm-faithfully-flat-ring-map-characterisations]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, Proposition 11.10"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Assume the Axiom of Choice.

Let $R\to S$ be a faithfully flat homomorphism of commutative rings and let $M$
be an $R$-module. If $M\otimes_R S$ is finitely generated as an $S$-module, then
$M$ is finitely generated as an $R$-module.

## Facts & Assumptions

**Given:** The Axiom of Choice, a faithfully flat ring map $R\to S$, and an $R$-module $M$ such that
$M\otimes_R S$ is finitely generated over $S$.

[L1] A faithfully flat module detects nonzero quotients
([[thm-faithful-flatness-detected-by-nonzero-modules-and-fibres]]).

[L2] The given map is faithfully flat as an $R$-module map
([[thm-faithfully-flat-ring-map-characterisations]]).

## Proof

**Proof technique:** direct.


1.1 Choose generators $u_1,\ldots,u_r$ of $M\otimes_R S$. Write each $u_i$ as a finite sum of simple tensors and collect the finitely many elements of $M$ occurring there, say $m_1,\ldots,m_n$. Let $N\subseteq M$ be the submodule they generate. [given, choose]


1.2 By construction the images of the $m_j\otimes1$ generate $M\otimes_R S$, so $ (M/N)\otimes_R S=0. $ If $M/N\neq0$, then [L1] applied to the faithfully flat $R$-module $S$ from [L2] would force $(M/N)\otimes_R S\neq0$, contradiction. Therefore $M/N=0$. [L1, L2]


2.1 Thus $M=N$ is finitely generated. [algebra] ∎
