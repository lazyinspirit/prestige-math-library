---
id: thm-invariant-restrictions-of-diagonalisable-endomorphisms-are-diagonalisable
kind: theorem
title: "The restriction of a diagonalisable endomorphism to an invariant subspace is diagonalisable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-minimal-polynomial-of-an-invariant-restriction-divides-the-original, thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots, def-polynomials-that-split-and-splitting-fields, thm-polynomial-ring-over-a-field-is-a-ufd]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, §5, Lemma 5.1'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Statement

If $T:V\to V$ is diagonalisable and $W\subseteq V$ is $T$-invariant, then the restriction $T|_W$ is diagonalisable.

## Facts & Assumptions

**Given:** A diagonalisable endomorphism $T$ and a $T$-invariant subspace $W$.

[L1] The minimal polynomial of $T|_W$ divides $\mu_T$ ([[prop-minimal-polynomial-of-an-invariant-restriction-divides-the-original]]).

[L2] Diagonalisability is equivalent to the minimal polynomial being a product of distinct linear factors ([[thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]]).

[L3] A polynomial splits over $F$ when it factors into linear factors over $F$ ([[def-polynomials-that-split-and-splitting-fields]]).

[L4] The polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $\mu_T$ is split and squarefree. By [L1], $\mu_{T|_W}$ is a monic divisor of it, so unique factorisation [L4] and the meaning of splitting in [L3] make the restriction polynomial split and squarefree as well. [L1, L2, L3, L4, algebra]

2.1 Apply the reverse implication of [L2] to $T|_W$. This includes $W=0$, whose minimal polynomial is $1$. [step 1.1, L2] ∎
