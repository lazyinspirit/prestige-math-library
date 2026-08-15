---
id: ex-matrix-algebra-extension-of-scalars
kind: example
title: "For a field extension $K/F$, one has $K\\otimes_FM_n(F)\\cong M_n(K)$ as $K$-algebras"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-tensor-product-of-algebras-over-a-commutative-ring, prop-elementary-tensor-formulas-descend-exactly-when-balanced, def-restriction-and-extension-of-scalars, cor-square-matrices-form-a-ring, def-matrix-space, def-field-extension-generated-subfields-and-simple-extension]
aliases: []
landmark: false
short: "Matrix algebras commute with scalar extension"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wenqi Li, Commutative Algebra, Lecture 9"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
pipeline_run: null
---

## Example

Let $K/F$ be a field extension and let $n$ be a natural number. Entrywise scalar extension gives an isomorphism of $K$-algebras

$$K\otimes_FM_n(F)\cong M_n(K),\qquad k\otimes(a_{ij})\longmapsto(ka_{ij}).$$

The assertion includes $n=0$ and $n=1$.

## Facts & Assumptions

**Given:** A field extension $K/F$ and a natural number $n$.

[L1] The specified embedding $F\to K$ makes $K$ an extension field of $F$ ([[def-field-extension-generated-subfields-and-simple-extension]]).

[L2] $M_n(F)$ and $M_n(K)$ are the corresponding finite function spaces with entrywise vector-space operations; for $n=0$ each is the zero space ([[def-matrix-space]]).

[L3] For every field $E$, $M_n(E)$ is a ring under matrix multiplication, including the one-element zero ring at $n=0$ ([[cor-square-matrices-form-a-ring]]).

[L4] A prescription $Q(k\otimes A):=q(k,A)$ extends to a homomorphism on $K\otimes_FM_n(F)$ if and only if $q$ is balanced, and the extension is then unique ([[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).

[L5] Tensor products of algebras have multiplication $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]).

[L6] Extension of scalars carries the $K$-action $k'(k\otimes m)=(k'k)\otimes m$, and an $F$-scalar moves across a balanced tensor ([[def-restriction-and-extension-of-scalars]]).

## Verification

**Proof technique:** direct.

1.1 For $i,j<n$, let $E_{ij}$ have entry $1$ at $(i,j)$ and $0$ elsewhere. Entrywise decomposition writes every $A\in M_n(F)$ uniquely as $A=\sum_{i,j<n}a_{ij}E_{ij}$, so the $E_{ij}$ form an $F$-basis; when $n=0$, this is the empty basis of the zero space. [given, L2]

2.1 The pairing $(k,A)\mapsto(ka_{ij})$ is $F$-balanced, so [L4] gives a unique additive $T:K\otimes_FM_n(F)\to M_n(K)$ with $T(k\otimes A)=(ka_{ij})$, and $T$ is $K$-linear by [L6]. Define $S:M_n(K)\to K\otimes_FM_n(F)$ by $S(B)=\sum_{i,j<n}b_{ij}\otimes E_{ij}$, which is additive and $K$-linear by [L6]. Then $T(S(B))=\sum_{i,j<n}b_{ij}E_{ij}=B$ by step 1.1, and on a generator $S(T(k\otimes A))=\sum_{i,j<n}ka_{ij}\otimes E_{ij}=\sum_{i,j<n}k\otimes a_{ij}E_{ij}=k\otimes A$, moving each $F$-scalar $a_{ij}$ across the balanced tensor by [L6] and using step 1.1. Both composites are additive and agree on generators, so $T$ and $S$ are mutually inverse and the displayed map is a $K$-linear isomorphism. [step 1.1, L1, L2, L4, L6]

2.2 Matrix multiplication gives $E_{ij}E_{\ell r}=0$ if $j\ne\ell$ and $E_{ij}E_{jr}=E_{ir}$. The displayed map preserves these products by [L5], and it sends $1\otimes I_n$ to $I_n$; by bilinearity it is a unital algebra homomorphism. [step 1.1, L3, L5, algebra]

3.1 Combining steps 2.1 and 2.2 proves the algebra isomorphism. For $n=0$ it is the unique map between one-element zero algebras, while for $n=1$ it is the tensor-unit identification $K\otimes_FF\cong K$. [step 2.1, step 2.2, L2, L3] ∎
