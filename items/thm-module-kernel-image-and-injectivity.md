---
id: thm-module-kernel-image-and-injectivity
kind: theorem
title: "Kernels and images of module homomorphisms are submodules, and injectivity is equivalent to trivial kernel"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-module-homomorphism-kernel-image-and-cokernel, lem-submodule-criterion-sums-and-intersections, lem-module-elementary-consequences, lem-group-homomorphism-basic-properties, thm-group-homomorphism-injective-iff-trivial-kernel]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Statement

For an $R$-module homomorphism $f:M\to N$, both $\ker f$ and
$\operatorname{im}f$ are submodules. Moreover,

$$f\text{ is injective}\quad\Longleftrightarrow\quad\ker f=\{0_M\}.$$

## Facts & Assumptions

**Given:** A homomorphism $f:M\to N$ of left $R$-modules.

[L1] A module homomorphism preserves addition and scalar multiplication, and
the displayed definitions give its kernel and image
([[def-module-homomorphism-kernel-image-and-cokernel]]).

[L2] A nonempty subset of a module is a submodule exactly when it is closed
under $ru+v$ ([[lem-submodule-criterion-sums-and-intersections]]).

[L3] The additive underlying function of a module homomorphism is a group
homomorphism and therefore sends $0_M$ to $0_N$; moreover $r0_N=0_N$
([[def-module-homomorphism-kernel-image-and-cokernel]],
[[lem-group-homomorphism-basic-properties]],
[[lem-module-elementary-consequences]]).

[L4] A group homomorphism is injective exactly when its kernel is trivial
([[thm-group-homomorphism-injective-iff-trivial-kernel]]).

## Proof

**Proof technique:** direct.

1.1 The kernel contains $0_M$ because $f(0_M)=0_N$. If $u,v\in\ker f$ and $r\in R$, then $f(ru+v)=rf(u)+f(v)=0_N$, so $ru+v\in\ker f$. [L1, L3, given]

1.2 The image contains $0_N=f(0_M)$. If $f(u),f(v)\in\operatorname{im}f$ and $r\in R$, then $rf(u)+f(v)=f(ru+v)$ lies in the image. [L1, L3, given]

1.3 The additive underlying function has the same kernel described in [L1], so the group-homomorphism theorem gives $f$ injective exactly when $\ker f=\{0_M\}$. [L1, L4, given]

2.1 The submodule criterion applied to steps 1.1 and 1.2 proves that $\ker f$ and $\operatorname{im}f$ are submodules. [step 1.1, step 1.2, L2]

3.1 Together, steps 1.3 and 2.1 prove both assertions. [step 1.3, step 2.1] ∎
