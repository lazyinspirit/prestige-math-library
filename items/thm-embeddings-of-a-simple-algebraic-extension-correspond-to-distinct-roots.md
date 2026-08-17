---
id: thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
kind: theorem
title: "$F$-embeddings of $F(\\alpha)$ into an algebraically closed field correspond to the distinct roots of $m_{\\alpha}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-base-field-embeddings-carry-elements-to-conjugates, thm-universal-property-of-adjoining-an-irreducible-root, def-algebraically-closed-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $\alpha$ be algebraic over $F$, and let $\Omega$ be an algebraically closed
field containing $F$. Sending an $F$-embedding
$\sigma:F(\alpha)\to\Omega$ to $\sigma(\alpha)$ is a bijection from the set of
such embeddings to the set of distinct roots in $\Omega$ of the minimal
polynomial $m_\alpha$. Consequently the number of embeddings is the number of
distinct roots of $m_\alpha$, not the sum of their multiplicities.

## Facts & Assumptions

**Given:** An algebraic element $\alpha$ over $F$, its minimal polynomial $m_\alpha$, and an algebraically closed overfield $\Omega$ of $F$.

[L1] An $F$-embedding carries an algebraic element to a conjugate root of its minimal polynomial ([[prop-base-field-embeddings-carry-elements-to-conjugates]]).

[L2] For a monic irreducible polynomial, every chosen root in an extension induces a unique homomorphism from the quotient adjoining that root ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L3] Every nonconstant polynomial over an algebraically closed field has a root there ([[def-algebraically-closed-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the image $\sigma(\alpha)$ of every $F$-embedding is a root of $m_\alpha$ in $\Omega$. [L1]

1.2 Conversely, if $\beta\in\Omega$ is a root of $m_\alpha$, [L2] applied to the two realizations of $F[x]/(m_\alpha)$ gives a unique $F$-embedding $F(\alpha)\to\Omega$ with $\alpha\mapsto\beta$. [L2]

2.1 The constructions in steps 1.1 and 1.2 are inverse because an $F$-homomorphism on $F(\alpha)$ is determined by the image of $\alpha$. [step 1.1, step 1.2]

3.1 The polynomial $m_\alpha$ splits in $\Omega$ by repeated use of [L3], and the bijection indexes embeddings by its distinct roots, so repeated roots are counted once. [step 2.1, L3] ∎
