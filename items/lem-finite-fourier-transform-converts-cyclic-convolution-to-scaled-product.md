---
id: lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product
kind: lemma
title: "The DFT turns cyclic convolution into a scaled pointwise product"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
justified_by: []
aliases: []
deps: [def-cyclic-convolution-on-z-mod-n,
       def-finite-sum-in-a-commutative-monoid,
       def-integers-modulo-n,
       def-rational-power,
       def-unitary-discrete-fourier-transform-on-z-mod-n,
       lem-finite-sum-reindexing-and-fubini,
       lem-rational-power-laws,
       thm-complex-exponential-addition-and-real-extension,
       thm-complex-numbers-form-a-field,
       thm-integers-modulo-n-basic-algebra]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§11, (11.30)-(11.31): the convolution carries $1/n$ and its kernel has Fourier coefficients $F$; rescaling to the unnormalised convolution and the $N^{-1/2}$ transform gives the factor $\\sqrt N$ proved here"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $N\ge1$ and $f,g\in\mathbb C^{\mathbb Z/N}$. Then for every $k\in\mathbb Z$

$$(\mathcal F_N(f*g))(k)=\sqrt N\,(\mathcal F_Nf)(k)(\mathcal F_Ng)(k),$$

where $*$ is the unnormalised cyclic convolution of [[def-cyclic-convolution-on-z-mod-n]] and $\sqrt N=N^{1/2}$ is the rational power of [[def-rational-power]]. The factor $\sqrt N$ is the price of leaving the convolution unnormalised; it is not an artefact of the proof, and the same factor appears for every pair $(f,g)$.

## Facts & Assumptions

**Given:** A natural number $N\ge1$, functions $f,g\in\mathbb C^{\mathbb Z/N}$, an integer $k$, and classes $x,y,z\in\mathbb Z/N\mathbb Z$.

[F1] $(\mathcal F_Nh)(k)=N^{-1/2}\sum_{x=0}^{N-1}h([x]_N)e^{-2\pi ikx/N}$ for every $h\in\mathbb C^{\mathbb Z/N}$ ([[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

[F2] $(f*g)(x)=\sum_{y\in\mathbb Z/N}f(y)g(x-y)$, a single complex number for each class $x$; the value depends on classes only ([[def-cyclic-convolution-on-z-mod-n]]).

[F3] Finite sums over $\mathbb Z/N\mathbb Z$ are computed from any enumeration, are unchanged by reindexing along a bijection, split over disjoint unions and satisfy the finite Fubini rule; scalar factors move through them ([[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-reindexing-and-fubini]]).

[L1] $\exp(u+v)=\exp u\,\exp v$ for all complex $u,v$ ([[thm-complex-exponential-addition-and-real-extension]]).

[L2] Rational powers of the positive real $N$: $N^{-1/2}N^{1/2}=N^{0}=1$ and the exponent laws hold ([[def-rational-power]], [[lem-rational-power-laws]], claims 1 and 2).

[L3] For fixed $y$, the map $x\mapsto x-y$ is a bijection of $\mathbb Z/N\mathbb Z$ onto itself with inverse $z\mapsto z+y$ ([[thm-integers-modulo-n-basic-algebra]]); classes are the objects of $\mathbb Z/N\mathbb Z$ ([[def-integers-modulo-n]]).

[L4] Field laws of $\mathbb C$, in particular associativity and distributivity ([[thm-complex-numbers-form-a-field]]).

## Proof

**Proof technique:** direct.

1.1 Substitute [F2] into [F1] and interchange the two finite sums by the finite Fubini rule [F3]: for the given $k$, $(\mathcal F_N(f*g))(k)=N^{-1/2}\sum_{x=0}^{N-1}\Big(\sum_{y\in\mathbb Z/N}f(y)g(x-y)\Big)e^{-2\pi ikx/N}=N^{-1/2}\sum_{y\in\mathbb Z/N}f(y)\sum_{x\in\mathbb Z/N}g(x-y)e^{-2\pi ikx/N}$. [F1, F2, F3]

1.2 Reindex the inner sum and separate the exponentials: for fixed $y$ the substitution $z:=x-y$ is the bijection of [L3], so $\sum_{x}g(x-y)e^{-2\pi ikx/N}=\sum_{z}g(z)e^{-2\pi ik(z+y)/N}$, and by the addition law [L1] this equals $\Big(\sum_{z}g(z)e^{-2\pi ikz/N}\Big)e^{-2\pi iky/N}=N^{1/2}(\mathcal F_Ng)(k)\,e^{-2\pi iky/N}$, the last step by [F1] and [L4]. [F1, F3, L1, L3, L4]

2.1 Inserting step 1.2 into step 1.1 and recognising the remaining sum by [F1], $(\mathcal F_N(f*g))(k)=N^{-1/2}\sum_{y}f(y)e^{-2\pi iky/N}\,N^{1/2}(\mathcal F_Ng)(k)=N^{-1/2}N^{1/2}(\mathcal F_Nf)(k)\,N^{1/2}(\mathcal F_Ng)(k)$; by [L2] the scalar is $N^{-1/2}N^{1/2}N^{1/2}=N^{1/2}$, so $(\mathcal F_N(f*g))(k)=N^{1/2}(\mathcal F_Nf)(k)(\mathcal F_Ng)(k)$ as claimed. [F1, F3, L2, L4, step 1.1, step 1.2] ∎

## Remarks

- **Comparison with Taylor's convention.** Put $h^\#:=N^{-1/2}\mathcal F_Nh$, so $h^\#$ carries the forward factor $1/N$ of Taylor's (11.1). The proved identity gives $(f*g)^\#=Nf^\#g^\#$ for the unnormalised convolution here. Taylor's (11.30) instead uses $f\star g:=N^{-1}(f*g)$, so $(f\star g)^\#=f^\#g^\#$ by linearity. Both the transform and the convolution normalisations matter.

- **Cyclic, not linear.** The identity computes the cyclic convolution of [F2]. It does not compute the linear convolution of two coefficient sequences unless the length is large enough that no coefficient wraps; the companion page shows the wrap explicitly for two sequences of length two, where the linear coefficient $1$ of $z^{2}$ reappears in degree $0$.
