---
id: ex-qftx-nonproper-fixed-locus-excluded
kind: example
title: Why a nonproper fixed locus needs another theory
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 5
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-proper-fixed-locus-localized-pushforward
  - def-qftx-localized-equivariant-borel-moore-data
dependency_roles:
  def-qftx-proper-fixed-locus-localized-pushforward: mathematical-premise
  def-qftx-localized-equivariant-borel-moore-data: mathematical-premise
justified_by: []
axiom_strength: ZF + AC inherited through the equivariant Borel–Moore suppliers
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: Dan Edidin and William Graham, Localization in equivariant intersection theory and the Bott residue formula
      url: https://arxiv.org/pdf/alg-geom/9508001
      locator: Section 4, the distinction between fixed-locus inverse and proper integration.
    - title: Victor Ginzburg, Geometric Methods in Representation Theory of Hecke Algebras and Quantum Groups
      url: https://arxiv.org/pdf/math/9802004
      locator: Section 1, Borel–Moore proper pushforward.
landmark: false
---

## Example

Let $T=\mathbb C^\times$ act trivially on $X=\mathbb C^\times=\operatorname{Spec}\mathbb C[z,z^{-1}]$. Then the fixed locus is $F=X$, and $F\to\mathrm{pt}$ is not proper. Here proper means finite-type, separated, and universally closed; after base change to $\mathbb A^1$ with coordinate $s$, the closed subset $\{(z,s):zs=1\}\subseteq\mathbb C^\times\times\mathbb A^1$ projects to the nonclosed subset $\mathbb A^1\setminus\{0\}$. Consequently the intrinsic localized pushforward defined using a proper fixed-locus trace has no value on $[F]_T$; this example assigns no fixed-point integral or reciprocal-Euler sum.

## Example references

[Borel–Moore proper pushforward] [Ginzburg, Section 1](https://arxiv.org/pdf/math/9802004)

[Fixed-locus localized pushforward and its proper-trace hypothesis] [Edidin–Graham, Section 4](https://arxiv.org/pdf/alg-geom/9508001)

## Facts & Assumptions

**Given:** The trivial action of $T=\mathbb C^\times$ on $X=\operatorname{Spec}\mathbb C[z,z^{-1}]$, the algebraic definition of properness in the Example, and rational coefficients.

[F1] The localized pushforward in this library is defined by the proper trace $p_{F*}$ after inverting the closed-inclusion Borel–Moore map, and requires $F\to\mathrm{pt}$ proper. [[def-qftx-proper-fixed-locus-localized-pushforward]]

[F2] Borel–Moore fundamental classes and proper pushforwards use the normalized equivariant construction. [[def-qftx-localized-equivariant-borel-moore-data]]

[A1] AC is inherited through the Borel–Moore construction; the failure of properness below is choice-free. [[def-qftx-localized-equivariant-borel-moore-data]]

## Verification

**Given:** The data in the Example.

1.1 The action is trivial, so every point is fixed and $F=X$; the single affine chart $X$ is a finite invariant affine atlas. The morphism $X\to\mathrm{pt}$ is finite type and separated. After base change to $\mathbb A^1_s$, the equation $zs=1$ defines a closed subset of $X\times\mathbb A^1_s$, but its projection is $\mathbb A^1_s\setminus\{0\}$, which is not closed. Thus $X\to\mathrm{pt}$ is not universally closed and is not proper. [given, construct]

2.1 By [F1], the construction $p_*^{\mathrm{loc}}$ requires the proper Borel–Moore trace $p_{F*}$. Step 1.1 shows that this input map is not proper, so the definition supplies no such map on $H^{\mathrm{BM},T}_*(F;\mathbb Q)$ and therefore no value on $[F]_T$. Any different integration theory would require additional data and is not assigned a value here. [A1, F1, F2, step 1.1] ∎
