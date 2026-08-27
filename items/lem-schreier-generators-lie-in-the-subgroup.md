---
id: lem-schreier-generators-lie-in-the-subgroup
kind: lemma
title: "Every Schreier generator lies in the subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-schreier-generator]
justified_by: []
aliases: []
landmark: false
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
    - title: "M. I. Kargapolov and Ju. I. Merzljakov, Fundamentals of the Theory of Groups"
      url: "https://www.scribd.com/document/1049379192/Fundamentals-of-the-Theory-of-Groups-M-I-Kargapolov-J-I-Merzljakov"
---

## Statement

Let $F(X)$ be a free group, let $H\le F(X)$, and let $\mathcal T$ be a
Schreier system. Then every Schreier generator $s(t,x)$ belongs to $H$.

## Facts & Assumptions

**Given:** A free group $F(X)$, a subgroup $H\le F(X)$, a Schreier system $\mathcal T$, and a Schreier generator $s(t,x)$.

[L1] By definition, $s(t,x)=tx\,\overline{tx}^{-1}$, where $\overline{tx}$ is the chosen representative of the right coset $Htx$ ([[def-schreier-generator]]).

## Proof

**Proof technique:** direct.

1.1 Because $\overline{tx}$ represents the same right coset as $tx$, one has $Htx=H\overline{tx}$. [L1, given]

2.1 Right-multiplying the equality of step 1.1 by $\overline{tx}^{-1}$ gives $Hs(t,x)=H$. Hence $s(t,x)\in H$. [L1, step 1.1] ∎
