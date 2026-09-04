---
id: lem-zero-in-a-localised-module
kind: lemma
title: "A localised module fraction is zero exactly when one denominator kills its numerator"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-localisation-of-a-module]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (12.2)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

For $m \in M$ and $s \in S$,
$$ \frac{m}{s}=0 \text{ in } S^{-1}M \quad \Longleftrightarrow \quad um=0 \text{ for some } u \in S. $$

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, a left $R$-module $M$, an element $m \in M$, and an element $s \in S$.

[L1] In $S^{-1}M$, the equality $m/s = n/t$ means that $u(tm-sn)=0$ for some $u \in S$ ([[def-localisation-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 If $m/s=0/1$, then [L1] gives $u(1m-s0)=um=0$ for some $u \in S$. [L1]

1.2 If $um=0$ for some $u \in S$, then $u(1m-s0)=0$, so [L1] gives $m/s=0/1=0$ in $S^{-1}M$. [L1]

2.1 Steps 1.1 and 1.2 prove the equivalence. [step 1.1, step 1.2] ∎
