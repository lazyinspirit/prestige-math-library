---
id: ex-aqft-ising-fusion-object-noninvertible
kind: example
title: "The Ising fusion object is simple and non-invertible"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-noninvertible-symmetries-examples
dependency_level: 3
deps:
  - def-aqft-noninvertible-defect-fusion
  - def-aqft-ising-fusion-data
  - lem-aqft-ising-fusion-data-coherence
dependency_roles:
  def-aqft-noninvertible-defect-fusion: mathematical-premise
  def-aqft-ising-fusion-data: mathematical-premise
  lem-aqft-ising-fusion-data-coherence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Steven H. Simon, Topological Quantum, §§9.2–9.3"
      url: "https://www-thphys.physics.ox.ac.uk/people/SteveSimon/topological2020/TopoBookSep12.pdf"
      locator: "PDF pp. 119–121 (book pagination approximately 103–105): Ising fusion rules, the simple duality object, and its fusion channels."
verification:
  precheck: pass
---

## Example

Let $\mathcal I$ be the complex finite semisimple fusion category with simple objects $\mathbf 1,\psi,\sigma$, fusion rules $\psi\otimes\psi\cong\mathbf 1$, $\psi\otimes\sigma\cong\sigma\otimes\psi\cong\sigma$, and $\sigma\otimes\sigma\cong\mathbf 1\oplus\psi$. Encode the intermediate labels by $\epsilon(\mathbf 1)=0$ and $\epsilon(\psi)=1$. Its coherent Ising associator has non-identity coefficients $[F^{\sigma\sigma\sigma}_{\sigma}]_{ab}=2^{-1/2}(-1)^{\epsilon(a)\epsilon(b)}$ for $a,b\in\{\mathbf 1,\psi\}$, $[F^{\psi\sigma\psi}_{\sigma}]_{\sigma\sigma}=-1$, and $[F^{\sigma\psi\sigma}_{\psi}]_{\sigma\sigma}=-1$; every other allowed associator coefficient is $1$. The simple object $\sigma$ has no right tensor inverse and is therefore a simple non-invertible object. This is an abstract algebraic example and makes no physical-realization claim.

## Example references

[Simon, *Topological Quantum*, §§9.2–9.3](https://www-thphys.physics.ox.ac.uk/people/SteveSimon/topological2020/TopoBookSep12.pdf)

## Facts & Assumptions

**Given:** Objects of $\mathcal I$ are finite direct sums of its three simple objects, so any object $E$ has multiplicities $n_{\mathbf 1},n_\psi,n_\sigma\in\mathbb Z_{\ge0}$.

[F1] [[def-aqft-noninvertible-defect-fusion]]: an object is tensor-invertible only if it has a two-sided tensor inverse.

[F2] [[def-aqft-ising-fusion-data]]: $\sigma\otimes\sigma\cong\mathbf 1\oplus\psi$ and $\sigma\otimes\psi\cong\sigma$.

[F3] [[lem-aqft-ising-fusion-data-coherence]]: these fusion rules and associators define a finite semisimple fusion category, with $\mathbf 1,\psi,\sigma$ simple.

## Verification

1.1 Write an arbitrary object as $E=n_{\mathbf 1}\mathbf 1\oplus n_\psi\psi\oplus n_\sigma\sigma$. Distributivity and [F2] give $\sigma\otimes E\cong n_\sigma\mathbf 1\oplus n_\sigma\psi\oplus(n_{\mathbf 1}+n_\psi)\sigma$. If $\sigma\otimes E\cong\mathbf 1$, equality of simple-object multiplicities would require both $n_\sigma=1$ and $n_\sigma=0$ from the $\mathbf 1$ and $\psi$ coefficients. This is impossible. [given, F2, algebra]

2.1 Thus $\sigma$ has no right tensor inverse and cannot have a two-sided tensor inverse by [F1]. By [F3], $\sigma$ is a simple object of $\mathcal I$; it is therefore simple and non-invertible. The argument is purely categorical. [F1, F3, step 1.1] ∎
