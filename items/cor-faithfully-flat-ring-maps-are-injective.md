---
id: cor-faithfully-flat-ring-maps-are-injective
kind: corollary
title: "Every faithfully flat ring map is injective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, thm-faithful-flatness-detected-by-nonzero-modules-and-fibres]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, Proposition 11.12"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Assume the Axiom of Choice.

Every faithfully flat homomorphism of commutative rings is injective.

## Facts & Assumptions

**Given:** The Axiom of Choice and a faithfully flat homomorphism $f:R\to S$.

[L1] Faithful flatness of the ring map means that $S$ is a faithfully flat $R$-module, hence in particular a flat $R$-module ([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[L2] For a faithfully flat module $T$, a nonzero module cannot tensor to zero: if $N\otimes_R T=0$, then $N=0$ ([[thm-faithful-flatness-detected-by-nonzero-modules-and-fibres]]).

## Proof

**Proof technique:** direct.


1.1 Let $K=\ker f$. Since $S$ is flat over $R$ by [L1], tensoring the exact sequence $$ 0\to K\to R\xrightarrow{f} S $$ with $S$ remains exact: $$ 0\to K\otimes_R S\to R\otimes_R S\to S\otimes_R S. $$ [L1, given]


2.1 Under the canonical identification $R\otimes_R S\cong S$, the middle map in step 1.1 is $s\mapsto 1\otimes s$. Multiplication $\mu:S\otimes_R S\to S$, $\mu(s\otimes t)=st$, is a left inverse to this map, so the middle map is injective. Therefore $K\otimes_R S=0$. [step 1.1, algebra]


3.1 Because $S$ is faithfully flat over $R$ by [L1], [L2] applied to $N=K$ shows that $K=0$. [L1, L2, step 2.1]

4.1 Hence $f$ is injective. [algebra] ∎
