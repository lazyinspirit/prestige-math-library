---
id: def-local-artin-reciprocity-map
kind: definition
title: Local Artin reciprocity map and arithmetic Frobenius convention
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
- def-absolute-galois-group-of-a-local-field
- def-local-field-valuation-ring-uniformizer-and-residue-field
- lem-canonical-local-reciprocity-from-cyclic-character-pairings
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03, Chapter I §1
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
verification: {}
axiom_use: This Definition names the supplied distinguished canonical character-pairing
  map. Its existence and consequences are proved under explicit AC/DC in the construction
  supplier; the Definition does not assert a choice-free construction or characterize
  maps by unramified normalization alone.
---


## Definition

Let $K$ be a nonarchimedean local field with separable closure $K_s$, absolute
Galois group $G_K$, and maximal abelian extension $K^{\mathrm{ab}}$. Write
$G_K^{\mathrm{ab}}=\operatorname{Gal}(K^{\mathrm{ab}}/K)$. Let
$\widehat{K^\times}=\varprojlim_N K^\times/N$, where $N$ ranges over open
finite-index subgroups. Use the normalized cohomological local invariant
$\operatorname{inv}_K:H^2_{\mathrm{cts}}(G_K,K_s^\times)\to\mathbb Q/\mathbb Z$
and the distinguished map supplied by
[[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]. The
**local Artin reciprocity map** is that canonical continuous homomorphism
$$\operatorname{rec}_K:\widehat{K^\times}\longrightarrow G_K^{\mathrm{ab}},$$
specified by the following finite-character property: for every finite-order
continuous character $\chi:G_K\to\mathbb Q/\mathbb Z$ and every
$a\in K^\times$,
$$\chi(\operatorname{rec}_K(a))
=\operatorname{inv}_K(a\smile\delta\chi).$$
Here $\delta$ is the Bockstein for
$0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$, and the
coefficient pairing is $(a,m)\mapsto a^m$. Equivalently, a rational lift
$f$ of $\chi$ gives the cocycle $a^{f(g)+f(h)-f(gh)}$ on the right.
Finite characters separate finite abelian quotient points, so this property
specifies a unique map. The construction theorem proves its existence with
explicit AC and DC; this Definition names that supplied map and does not
make an unqualified choice-free existence assertion.

Its finite quotient maps are compatible with restriction in finite abelian
extensions. A uniformizer maps to arithmetic Frobenius on every finite
unramified extension, acting on residue fields by $x\mapsto x^{q_K}$.
These are proved consequences of the character construction. Continuity,
quotient compatibility and arithmetic unramified normalization by themselves
are not substituted for the canonical character property.
For $a\in K^\times$, write $\operatorname{rec}_K(a)$ for the image of its
canonical class in the profinite completion.

## Definition references

[[def-absolute-galois-group-of-a-local-field]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[J. S. Milne, *Class Field Theory*, Chapter I §1, printed pp. 19–20](https://www.jmilne.org/math/CourseNotes/CFT.pdf)


[[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

## Facts & Assumptions

**Given:** The local field, closure, open-subgroup completion and supplied
normalized invariant and distinguished canonical map as above.

[F1] Under explicit AC/DC, the finite-character construction gives a unique
continuous map on this open-subgroup completion, compatible on finite
abelian quotients and sending unramified uniformizers to arithmetic
Frobenius. [[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

## Proof

**Proof technique:** record the supplied canonical character construction.

**Given:** The data above.

1.1 The construction in [F1] supplies precisely the displayed map and its
finite-character property, using the stated normalized invariant. It also
proves quotient compatibility, continuity on the completion using open norm
kernels, and arithmetic Frobenius on each unramified extension. Thus all
properties retained in the Definition refer to the same distinguished map,
with no uniqueness inference from unramified normalization alone. [F1, given] ∎
