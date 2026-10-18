---
id: lem-quiver-potential-trace-is-additive-on-extensions
kind: lemma
title: "A quiver potential trace is additive on exact sequences"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-quiver-representation-stacks-and-exact-sequence-correspondences
  - def-quiver-potential-and-monodromic-vanishing-cycle-data
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18

sources:
  references:
    - title: "Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential Hodge structures and motivic Donaldson-Thomas invariants, §4.7"
      url: "https://arxiv.org/pdf/1006.2706v2"
    - title: "Ben Davison, The critical CoHA of a quiver with potential, §3.1"
      url: "https://arxiv.org/pdf/1311.7172v5"
---

## Statement

Let $W$ be a potential of a finite quiver $Q$, and let
$0\to M_{\mathbf a}\to M_{\mathbf a+\mathbf b}\to M_{\mathbf b}\to0$
be represented by a point of the exact-sequence stack. Then
$
W_{\mathbf a+\mathbf b}(M_{\mathbf a+\mathbf b})
=W_{\mathbf a}(M_{\mathbf a})+W_{\mathbf b}(M_{\mathbf b}).
$


## Facts & Assumptions

**Given:** the block-upper-triangular representation convention of [[def-quiver-representation-stacks-and-exact-sequence-correspondences]] and the cycle-trace definition in [[def-quiver-potential-and-monodromic-vanishing-cycle-data]].

[F1] [[def-quiver-representation-stacks-and-exact-sequence-correspondences]]: every arrow of an extension representation is block upper triangular, with diagonal blocks the subrepresentation and quotient representations.

[F2] [[def-quiver-potential-and-monodromic-vanishing-cycle-data]]: a potential is a finite linear combination of oriented cycles modulo cyclic rotation, and $W_{\mathbf d}$ is the trace of those cycles.



## Proof

**Proof technique:** direct.

1.1 For a cycle $h_1,\ldots,h_\ell$, the product $X_{h_\ell}\cdots X_{h_1}$ is block upper triangular because products of block-upper-triangular matrices remain block upper triangular. Its two diagonal blocks are respectively the cycle products on $M_{\mathbf a}$ and $M_{\mathbf b}$: this follows inductively from $\operatorname{diag}(AB)=\operatorname{diag}(A)\operatorname{diag}(B)$ for two block-upper-triangular matrices $A,B$. [F1, algebra]

2.1 The trace of a block-upper-triangular matrix is the sum of the traces of its diagonal blocks. Therefore the trace of this cycle on $M_{\mathbf a+\mathbf b}$ is the sum of its traces on $M_{\mathbf a}$ and $M_{\mathbf b}$. [step 1.1, algebra]

3.1 Write $W$ as a finite sum of cycles with coefficients. Applying step 2.1 to each cycle and summing with those coefficients proves the displayed identity. [F2, step 2.1, algebra] ∎
