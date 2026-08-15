---
id: ex-extension-of-scalars-of-coordinate-modules
kind: example
title: "For a field extension $K/F$, one has $K\\otimes_FF^n\\cong K^n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-restriction-and-extension-of-scalars, prop-elementary-tensor-formulas-descend-exactly-when-balanced, lem-standard-basis-of-f-n, def-field-extension-generated-subfields-and-simple-extension]
aliases: []
landmark: false
short: "Coordinate modules commute with scalar extension"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.721, Introduction to Algebraic Geometry, §2.1"
      url: "https://math.mit.edu/classes/18.721/ag-jun17-2021.pdf"
    - title: "Wenqi Li, Commutative Algebra, Lecture 9"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
pipeline_run: null
---

## Example

For a field extension $K/F$ and a natural number $n$, there is a canonical $K$-linear isomorphism

$$K\otimes_FF^n\cong K^n,$$

given by $k\otimes(a_0,\ldots,a_{n-1})\mapsto(ka_0,\ldots,ka_{n-1})$. The assertion includes $n=0$.

## Facts & Assumptions

**Given:** A field extension $K/F$ and a natural number $n$.

[L1] The specified embedding $F\to K$ makes $K\otimes_F-$ the extension-of-scalars functor ([[def-field-extension-generated-subfields-and-simple-extension]], [[def-restriction-and-extension-of-scalars]]).

[L2] The coordinate vectors $e_0,\ldots,e_{n-1}$ form a basis of $F^n$, with the empty basis when $n=0$ ([[lem-standard-basis-of-f-n]]).

[L3] A prescription $Q(k\otimes a):=q(k,a)$ extends to a homomorphism on $K\otimes_FF^n$ if and only if $q$ is balanced, and the extension is then unique ([[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).

## Verification

**Proof technique:** direct.

1.1 The pairing $(k,(a_j))\mapsto(ka_j)$ is $F$-balanced, so [L3] gives a unique additive $T:K\otimes_FF^n\to K^n$ with $T(k\otimes(a_j))=(ka_j)$, and $T$ is $K$-linear by [L1]. It sends $1\otimes e_j$ to the $j$th standard coordinate vector. [given, L1, L2, L3, algebra]

2.1 Define $S:K^n\to K\otimes_FF^n$ by $S((k_j)_{j<n})=\sum_{j<n}k_j\otimes e_j$, which is additive and $K$-linear by [L1]. Then $T(S((k_j)))=(k_j)$ because $T(k_j\otimes e_j)$ is $k_j$ in coordinate $j$ and zero elsewhere, and on a generator $S(T(k\otimes a))=\sum_{j<n}ka_j\otimes e_j=\sum_{j<n}k\otimes a_je_j=k\otimes a$, moving each $F$-scalar $a_j$ across the balanced tensor by [L1] and expanding $a$ in the basis of [L2]. Both composites are additive and agree on generators, so $T$ is an isomorphism. [step 1.1, L1, L2, L3]

3.1 At $n=0$ both modules are zero — the empty sum defining $S$ is $0$ — so the same argument gives the unique isomorphism. [step 2.1, L1, L2] ∎
