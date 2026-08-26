---
id: lem-localisation-preserves-surjectivity
kind: lemma
title: "Surjective module maps remain surjective after localisation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-module-homomorphism-kernel-image-and-cokernel, def-localisation-of-a-module]
aliases: []
proof_strategy: direct
verification:
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

Let $f:M \to M''$ be a surjective $R$-module homomorphism. Then the induced map
$$
S^{-1}f:S^{-1}M \longrightarrow S^{-1}M'', \qquad (m/s) \longmapsto f(m)/s,
$$
is surjective.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, left $R$-modules $M,M''$, and a surjective $R$-module homomorphism $f:M \to M''$.

[L1] A module homomorphism preserves scalar multiplication ([[def-module-homomorphism-kernel-image-and-cokernel]]).

[L2] Elements of $S^{-1}M''$ are fractions $m''/s$ with $m'' \in M''$ and $s \in S$ ([[def-localisation-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 Let $m''/s \in S^{-1}M''$. Since $f$ is surjective, choose $m \in M$ with $f(m)=m''$. [given, L2, choose]

2.1 Then $(S^{-1}f)(m/s)=f(m)/s=m''/s$, so $m''/s$ lies in the image of $S^{-1}f$. [step 1.1, L1]

3.1 Since every element of $S^{-1}M''$ is hit, $S^{-1}f$ is surjective. [step 2.1, L2] ∎
