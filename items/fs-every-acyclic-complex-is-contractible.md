---
id: fs-every-acyclic-complex-is-contractible
kind: false-statement
title: "FALSE: every acyclic complex is contractible"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-contractible-complex, cor-a-contractible-complex-is-acyclic, prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement

Every acyclic chain complex is contractible.

## Facts & Assumptions

**Given:** The three-term complex $$0\to\mathbb Z\xrightarrow{2}\mathbb Z\xrightarrow{\bmod 2}\mathbb Z/2\to0,$$ placed in degrees $2,1,0$.

[A1] The statement refuted is: every acyclic chain complex is contractible.

[L1] Contractible complexes are acyclic ([[cor-a-contractible-complex-is-acyclic]]).

[L2] A complex is zero in the homotopy category exactly when it is contractible ([[prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category]]).

[L3] Contractibility means the identity map is null-homotopic ([[def-contractible-complex]]).

## Refutation

**Proof technique:** direct.

1.1 The displayed complex is acyclic because the image of multiplication by $2$ is the kernel of reduction modulo $2$, and the map $\mathbb Z\to\mathbb Z/2$ is surjective. [given, algebra]

2.1 If the complex were contractible, then by [L3] its identity would be null-homotopic. In degree $0$ that would give a section $\mathbb Z/2\to\mathbb Z$ of the quotient map $\mathbb Z\to\mathbb Z/2$, which is impossible. Hence the complex is not contractible, so [A1] is false; [L1] and [L2] explain the genuine implication and its homotopy-category meaning. [A1, L1, L2, L3, step 1.1, algebra] ∎
