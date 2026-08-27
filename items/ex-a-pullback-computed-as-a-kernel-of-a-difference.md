---
id: ex-a-pullback-computed-as-a-kernel-of-a-difference
kind: example
title: "A pullback of module maps is computed as a kernel of a difference map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs, prop-modules-and-homomorphisms-form-category-rmod]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Example 12.5.6"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-21
---

## Example

For module maps $f:M\to P$ and $g:N\to P$, the pullback is the submodule

$$M\times_PN=\{(m,n)\in M\oplus N:f(m)=g(n)\},$$

which is the kernel of $(f,-g):M\oplus N\to P$.

## Facts & Assumptions

**Given:** Module maps $f:M\to P$ and $g:N\to P$.

[L1] Pullbacks in an abelian category are kernels of the corresponding
difference maps
([[thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs]]).

[L2] Modules and their homomorphisms form a category
([[prop-modules-and-homomorphisms-form-category-rmod]]).

## Verification

**Proof technique:** direct.

1.1 The kernel of $(f,-g):M\oplus N\to P$ consists exactly of those pairs $(m,n)$ with $f(m)=g(n)$. [L2]

2.1 By [L1], that kernel is the pullback of $f$ and $g$. So the fiber product of two module maps is computed by the familiar subgroup of compatible pairs. [L1, L2, step 1.1] ∎
