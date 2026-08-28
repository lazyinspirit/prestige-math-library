---
id: lem-associated-prime-localises-forward
kind: lemma
title: "Associated primes localize forward"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-associated-prime-equivalent-cyclic-embedding, lem-localisation-preserves-injectivity, thm-localisation-of-modules-commutes-with-quotients-and-sums, thm-prime-spectrum-of-a-localisation-bijection]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (17.10)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.63.15(1)"
      url: "https://stacks.math.columbia.edu/tag/00L9"
---

## Statement

Let $R$ be a commutative ring, let $M$ be a left $R$-module, let
$S \subseteq R$ be multiplicative, and let $\mathfrak p \in \operatorname{Ass}_R(M)$
with $\mathfrak p \cap S=\varnothing$. Then
$$
S^{-1}\mathfrak p \in \operatorname{Ass}_{S^{-1}R}(S^{-1}M).
$$

## Facts & Assumptions

**Given:** A commutative ring $R$, a left $R$-module $M$, a multiplicative subset $S \subseteq R$, and a prime ideal $\mathfrak p \in \operatorname{Ass}_R(M)$ with $\mathfrak p \cap S=\varnothing$.

[L1] A prime ideal is associated to a module exactly when its residue module embeds in that module ([[lem-associated-prime-equivalent-cyclic-embedding]]).

[L2] Injective module maps remain injective after localisation ([[lem-localisation-preserves-injectivity]]).

[L3] Localisation commutes with quotient modules, so
$S^{-1}(R/\mathfrak p)\cong (S^{-1}R)/(S^{-1}\mathfrak p)$
([[thm-localisation-of-modules-commutes-with-quotients-and-sums]]).

[L4] If $\mathfrak p \cap S=\varnothing$, then $S^{-1}\mathfrak p$ is a prime ideal of $S^{-1}R$ ([[thm-prime-spectrum-of-a-localisation-bijection]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there is an injective $R$-module map $R/\mathfrak p \hookrightarrow M$. Applying [L2] yields an injective $S^{-1}R$-module map $S^{-1}(R/\mathfrak p)\hookrightarrow S^{-1}M$. [L1, L2]

2.1 By [L3], the source identifies with $(S^{-1}R)/(S^{-1}\mathfrak p)$, and by [L4] the ideal $S^{-1}\mathfrak p$ is prime. Therefore [L1], applied over the ring $S^{-1}R$, shows that $S^{-1}\mathfrak p$ is associated to $S^{-1}M$. [L1, L3, L4, step 1.1]

3.1 Hence associated primes localize forward. [step 2.1] ∎
