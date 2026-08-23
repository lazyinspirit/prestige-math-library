---
id: fs-a-u-split-pair-is-a-split-pair-in-the-domain
kind: false-statement
title: "FALSE: every $U$-split pair is split in the domain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-u-split-coequalizer-and-creation-of-their-coequalizers, thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**False claim:** if a parallel pair in $\mathcal D$ is $U$-split for a functor $U:\mathcal D\to\mathcal C$, then that pair is split in $\mathcal D$.

## Facts & Assumptions

**Given:** The Eilenberg–Moore forgetful functor for the free-monoid monad.

[L1] A parallel pair is $U$-split when its image under $U$ extends to a split coequalizer diagram ([[def-u-split-coequalizer-and-creation-of-their-coequalizers]]).

[L2] The underlying canonical presentation is split in the base, but its canonical splittings need not be algebra homomorphisms ([[thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras]]).

## Refutation

**Proof technique:** direct.

1.1 Take the canonical presentation of the two-element monoid $M=\{1,e\}$ with $e^2=e$ as an algebra for the free-monoid monad. By [L1] and [L2], its underlying pair is $U^T$-split. [L1, L2]

1.2 If the coequalizer evaluation $M^*\to M$ had a monoid-homomorphic section $s$, then $s(e)^2=s(e)$ because $e^2=e$. The only idempotent word in a free monoid is the empty word, since a nonempty word has positive length and its square has twice that length. But evaluation of the empty word is $1$, not $e$, so no such section exists. [L2]

2.1 Hence this pair becomes split after applying $U^T$ but is not split in the algebra category. The $U$-split condition therefore does not imply a splitting in the domain. [step 1.1, step 1.2] ∎
