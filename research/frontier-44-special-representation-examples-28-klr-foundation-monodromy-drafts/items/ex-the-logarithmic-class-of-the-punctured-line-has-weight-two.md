---
id: ex-the-logarithmic-class-of-the-punctured-line-has-weight-two
kind: example
title: "The punctured line has a weight-two logarithmic class"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures, cor-homology-of-spheres, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Example

For $U=\mathbb C^\times\subset\mathbb P^1$, $H^1(U,\mathbb Q)=\mathbb Q(-1)$, of weight $2$ and type $(1,1)$. In particular its weight is strictly larger than its cohomological degree.

## Verification

**Given:** Boundary $D=\{0,\infty\}$ and the logarithmic comparison from [[thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures]].

1.1 The punctured line retracts to a circle, so its degree-one rational cohomology is one-dimensional, represented under logarithmic comparison by $(2\pi i)^{-1}dz/z$. Its two residues are $1,-1$. The weight spectral sequence has $H^1(\mathbb P^1)=0$ in its weight-one column and $H^0(D)(-1)=\mathbb Q(-1)^2$ in the possible weight-two column. The Gysin differential adds the two residue coordinates into $H^2(\mathbb P^1)$, so its kernel is the line spanned by $(1,-1)$. [given, construct, algebra]

2.1 Thus the unique degree-one class lies in a copy of $\mathbb Q(-1)$ and no other weight occurs. Its type is $(1,1)$ by the Tate convention, proving the assertion. [step 1.1, algebra] ∎
