---
id: lem-localisation-preserves-injectivity
kind: lemma
title: "Injective module maps remain injective after localisation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-zero-in-a-localised-module, def-module-homomorphism-kernel-image-and-cokernel]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem 12.20"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $f:M' \to M$ be an injective $R$-module homomorphism. Then the induced map
$$ S^{-1}f:S^{-1}M' \longrightarrow S^{-1}M, \qquad (m'/s) \longmapsto f(m')/s, $$
is injective.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, left $R$-modules $M',M$, and an injective $R$-module homomorphism $f:M' \to M$.

[L1] A localised fraction is zero exactly when one element of $S$ kills its numerator ([[lem-zero-in-a-localised-module]]).

[L2] A module homomorphism preserves scalar multiplication, so $f(rm')=rf(m')$ for every $r \in R$ and $m' \in M'$ ([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $(S^{-1}f)(m'/s)=0$. Then $f(m')/s=0$, so [L1] gives $u f(m')=0$ for some $u \in S$. [given, L1]

2.1 By [L2], $u f(m')=f(um')$, so injectivity of $f$ gives $um'=0$. [step 1.1, L2]

3.1 Applying [L1] again, step 2.1 gives $m'/s=0$ in $S^{-1}M'$. Hence $S^{-1}f$ is injective. [step 2.1, L1] ∎
