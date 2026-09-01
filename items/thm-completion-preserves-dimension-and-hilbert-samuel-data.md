---
id: thm-completion-preserves-dimension-and-hilbert-samuel-data
kind: theorem
title: "Completion preserves dimension and Hilbert-Samuel data"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-completion-of-a-noetherian-local-ring, cor-completion-commutes-with-finite-quotients-and-submodules, thm-support-and-annihilator-of-a-finite-module, def-system-of-parameters-and-parameter-ideal, def-hilbert-samuel-multiplicity, thm-hilbert-samuel-dimension-theorem]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 22.14(2)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.97"
      url: "https://stacks.math.columbia.edu/tag/0BNH"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $(R,\mathfrak m)$ be a Noetherian local ring, let $M \neq 0$ be a finitely
generated $R$-module, and let $\widehat R$, $\widehat M$ denote the
$\mathfrak m$-adic completions.

1. For every $n \ge 0$,
   $$
   \widehat M/\mathfrak m^{n+1}\widehat M \cong M/\mathfrak m^{n+1}M.
   $$
   In particular the Hilbert-Samuel functions of $M$ and $\widehat M$ agree.
2. The Hilbert-Samuel multiplicity of $M$ equals that of $\widehat M$.
3. The support dimensions of $M$ and $\widehat M$ are equal.

## Facts & Assumptions

**Given:** A Noetherian local ring $(R,\mathfrak m)$ and a nonzero finitely generated $R$-module $M$.

[L1] Completion of a Noetherian local ring is again local with maximal ideal $\mathfrak m\widehat R$ and the same residue field ([[thm-completion-of-a-noetherian-local-ring]]).

[L2] Completion commutes with finite quotients and with powers of the defining ideal ([[cor-completion-commutes-with-finite-quotients-and-submodules]]).

[L3] Hilbert-Samuel multiplicity is read from the leading coefficient of the eventual Hilbert-Samuel polynomial ([[def-hilbert-samuel-multiplicity]]).

[L4] For a nonzero finite module, the degree of the Hilbert-Samuel polynomial equals the support dimension ([[thm-hilbert-samuel-dimension-theorem]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], for every $n \ge 0$, $$\widehat M/\mathfrak m^{n+1}\widehat M \cong M/\mathfrak m^{n+1}M.$$ Since [L1] identifies the residue fields of $R$ and $\widehat R$, the two sides have the same finite length. Hence the Hilbert-Samuel functions agree term by term. [L1, L2]

2.1 Equality of the Hilbert-Samuel functions implies equality of their eventual polynomials. Therefore the Hilbert-Samuel multiplicities, which are read from the leading coefficients of those polynomials by [L3], are equal. [L3, step 1.1]

2.2 By [L4], the degree of that common eventual polynomial is the support dimension of $M$, and the same degree computed over $\widehat R$ is the support dimension of $\widehat M$. Hence those dimensions are equal. [L4, step 1.1]

3.1 This proves all three claims. [step 1.1, step 2.1, step 2.2] ∎
