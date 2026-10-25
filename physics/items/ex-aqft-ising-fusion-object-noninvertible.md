---
id: ex-aqft-ising-fusion-object-noninvertible
kind: example
title: "The Ising fusion object is simple and non-invertible"
status: "published"
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

A zero object is an object that is both initial and terminal. A monomorphism $u:Y\to X$ is a morphism such that, for every object $Z$ and morphisms $f,g:Z\to Y$, $u\circ f=u\circ g$ implies $f=g$. A subobject of $X$ is an isomorphism class of monomorphisms into $X$, and $X$ is simple if it is nonzero and has no subobjects other than the zero subobject and $X$ itself. Let $\mathcal I$ have as objects finite direct sums of the labels $\mathbf 1,\psi,\sigma$. Its bilinear tensor product on labels is

$$
\mathbf 1\otimes a=a\otimes\mathbf 1=a,\qquad \psi\otimes\psi=\mathbf 1,\qquad \psi\otimes\sigma=\sigma\otimes\psi=\sigma,\qquad \sigma\otimes\sigma=\mathbf 1\oplus\psi.
$$

Morphisms are block-diagonal across the three labels, with an arbitrary finite complex matrix on each equal-label block and zero on unequal-label blocks; composition is blockwise matrix multiplication. Each label is simple by the stated criterion. The tensor product is bilinear, the unit is $\mathbf 1$, and the unitors are strict. Choose one basis vector in each allowed one-dimensional fusion space. An object $X$ is tensor-invertible if some object $E$ satisfies both $X\otimes E\cong\mathbf 1$ and $E\otimes X\cong\mathbf 1$; otherwise it is non-invertible. A right tensor inverse of $\sigma$ means an object $E$ with $\sigma\otimes E\cong\mathbf 1$. Encode intermediate labels by $\epsilon(\mathbf 1)=0$ and $\epsilon(\psi)=1$. The associator $\alpha_{a,b,c}:(a\otimes b)\otimes c\to a\otimes(b\otimes c)$ has coefficients $[F^{\sigma\sigma\sigma}_{\sigma}]_{ab}=2^{-1/2}(-1)^{\epsilon(a)\epsilon(b)}$ for $a,b\in\{\mathbf 1,\psi\}$, $[F^{\psi\sigma\psi}_{\sigma}]_{\sigma\sigma}=-1$, and $[F^{\sigma\psi\sigma}_{\psi}]_{\sigma\sigma}=-1$; every other coefficient is $1$ when all required fusion channels are allowed and $0$ otherwise. Since $\sigma$ has no right tensor inverse, it has no two-sided tensor inverse and is non-invertible. This is an abstract algebraic example and makes no physical-realization claim.

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
