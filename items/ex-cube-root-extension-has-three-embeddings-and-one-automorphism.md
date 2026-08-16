---
id: ex-cube-root-extension-has-three-embeddings-and-one-automorphism
kind: example
title: "$\\mathbb Q(\\sqrt[3]{2})$ has three embeddings into $\\overline{\\mathbb Q}$ but only one $\\mathbb Q$-automorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, thm-eisenstein-irreducibility-criterion, cor-fields-of-characteristic-zero-and-finite-fields-are-perfect, thm-nth-roots-exist, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2 to 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Example

Let $r=\sqrt[3]{2}$ be the positive real cube root of $2$. The extension
$\mathbb Q(r)/\mathbb Q$ has three embeddings into an algebraic closure of
$\mathbb Q$, but its only $\mathbb Q$-automorphism is the identity.

## Facts & Assumptions

**Given:** The positive real cube root $r$ of $2$ and an algebraic closure $\Omega/\mathbb Q$.

[L1] Eisenstein's criterion proves irreducibility over $\mathbb Q$ for a primitive integer polynomial satisfying its divisibility hypotheses ([[thm-eisenstein-irreducibility-criterion]]).

[L2] Embeddings of a simple algebraic extension correspond to the distinct roots of its minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L3] Characteristic-zero fields are perfect, so their irreducible polynomials are separable ([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]).

[L4] Positive real $n$th roots exist and are unique ([[thm-nth-roots-exist]]).

[L5] The real numbers form an ordered field ([[thm-reals-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 The polynomial $x^3-2$ is Eisenstein at $2$, so [L1] makes it the minimal polynomial of $r$. By [L3] its three roots in $\Omega$ are distinct, and [L2] gives three $\mathbb Q$-embeddings of $\mathbb Q(r)$ into $\Omega$. [L1, L2, L3]

1.2 The field $\mathbb Q(r)$ lies in $\mathbb R$. In an ordered field the map $x\mapsto x^3$ is strictly increasing, or directly $u^3-v^3=(u-v)(u^2+uv+v^2)$ with the second factor positive for $u\ne v$; hence [L4] and [L5] make $r$ the only real root of $x^3-2$. [L4, L5, algebra]

2.1 A $\mathbb Q$-automorphism of $\mathbb Q(r)$ must send $r$ to another root lying inside the same real field. Step 1.2 forces that image to be $r$, so the automorphism fixes the generator and is the identity. [step 1.2, L2] ∎
