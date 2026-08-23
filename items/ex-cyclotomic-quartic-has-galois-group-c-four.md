---
id: ex-cyclotomic-quartic-has-galois-group-c-four
kind: example
title: "$x^4+x^3+x^2+x+1$ has Galois group $C_4$ over $\\mathbb Q$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-eisenstein-irreducibility-criterion, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, prop-resolvent-cubic-formula-and-discriminant, thm-galois-group-of-an-irreducible-quartic-by-its-resolvent]
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
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, quartic subgroup table"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Section 3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Example

The polynomial $x^4+x^3+x^2+x+1$ has Galois group $C_4$ over $\mathbb Q$.

## Facts & Assumptions

**Given:** Eisenstein's criterion ([[thm-eisenstein-irreducibility-criterion]]), the correspondence between conjugate roots and simple-extension embeddings ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]), and the resolvent formula ([[prop-resolvent-cubic-formula-and-discriminant]]).

[L1] In the unique-root resolvent branch, irreducibility over the resolvent splitting field distinguishes $D_4$ from $C_4$ ([[thm-galois-group-of-an-irreducible-quartic-by-its-resolvent]]).

## Verification

**Proof technique:** direct.

1.1 After substituting $x+1$, the polynomial becomes $x^4+5x^3+10x^2+10x+5$, which is Eisenstein at $5$. Thus the original polynomial is irreducible. [given, algebra]

1.2 The resolvent formula gives $R(y)=y^3-y^2-3y+2=(y-2)(y^2+y-1)$, so it has exactly one rational root. [given, algebra]

2.1 If $\zeta$ is a root, then $\zeta^5=1$ and $\zeta\ne1$. The roots are the distinct elements $\zeta,\zeta^2,\zeta^3,\zeta^4$, all in $\mathbb Q(\zeta)$, so this degree-four simple extension is the splitting field. The embedding $\zeta\mapsto\zeta^2$ is an automorphism and has order four on the exponents modulo $5$; it therefore generates the full Galois group, which is $C_4$. [step 1.1, given, construct]

3.1 Step 2.1 proves the group directly, while step 1.2 places it in the unique-root branch described by [L1]; the quadratic resolvent splitting field makes the quartic reducible there, as the $C_4$ row requires. [step 2.1, step 1.2, L1] ∎
