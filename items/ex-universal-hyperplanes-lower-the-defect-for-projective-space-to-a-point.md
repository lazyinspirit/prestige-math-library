---
id: ex-universal-hyperplanes-lower-the-defect-for-projective-space-to-a-point
kind: example
title: "Universal hyperplanes lower the defect for projective space to a point"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "M. A. A. de Cataldo and L. Migliorini, The Hodge theory of algebraic maps, arXiv:math/0306030v2 (complete final-version PDF)"
      url: "https://arxiv.org/pdf/math/0306030"
      locator: "Definition of the defect r(f) and Theorem 4.7.4 (universal hyperplane family)"
---

## Example

Assume the Axiom of Choice as inherited from the cited geometry suppliers. For $f:\mathbb P^n\to\mathrm{pt}$ with $n\ge1$, the defect is $r(f)=n$. The universal hyperplane family maps to the dual space $(\mathbb P^n)^\vee$ with fibers $\mathbb P^{n-1}$ and has defect $n-1$.

## Verification

**Given:** the morphism $f:\mathbb P^n\to\mathrm{pt}$ with $n\ge1$, its identity embedding into $\mathbb P^n$, and the inherited Axiom of Choice.

1.1 The source $\mathbb P^n$ is smooth and irreducible of dimension $n$, the only fibre of $f$ is all of $\mathbb P^n$ of dimension $n$, and the image is a point of dimension zero, so the defect formula $r(f)=\max_{Y_i\ne\varnothing}(2i+\dim Y_i-n)$ inline in [[lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness]] gives $r(f)=2n-n=n$. The universal incidence $\mathcal X=\{(x,H):x\in H\}\subseteq\mathbb P^n\times(\mathbb P^n)^\vee$ is the projective-space bundle of relative dimension $n-1$ over the dual space $(\mathbb P^n)^\vee$, since its fibre over a hyperplane $H$ consists of the points of $H\cong\mathbb P^{n-1}$, and on each standard dual chart a nonzero coefficient of the hyperplane equation eliminates one coordinate, giving a local trivialization; hence its source dimension is $n+(n-1)=2n-1$. [given, algebra]

2.1 The universal family $g:\mathcal X\to(\mathbb P^n)^\vee$ has the single fibre dimension $n-1$ over the whole dual space, so its defect is $2(n-1)+n-(2n-1)=n-1$, strictly below $n$. This directly checks the positive-defect clause of [[lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness]], including $n=1$, where the incidence is the graph of an isomorphism onto the dual projective line and the defect is zero, as the formula gives. [step 1.1, algebra] ∎
