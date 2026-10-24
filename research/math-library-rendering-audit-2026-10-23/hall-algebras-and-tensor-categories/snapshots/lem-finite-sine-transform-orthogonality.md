---
id: lem-finite-sine-transform-orthogonality
kind: lemma
title: "Finite sine-transform orthogonality at level ell"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §3.3"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity, §3.3"
      url: "https://arxiv.org/pdf/math/0308281"
---

## Statement

For an integer $\ell\ge3$, and $1\le a,b\le\ell-1$,

$$\sum_{m=1}^{\ell-1}\sin\!\left(\frac{am\pi}{\ell}\right)\sin\!\left(\frac{bm\pi}{\ell}\right)=\frac{\ell}{2}\delta_{ab}.$$

## Facts & Assumptions

**Given:** An integer $\ell\ge3$ and integers $a,b\in\{1,\ldots,\ell-1\}$.

## Proof

**Given:** The data in the Statement.

1.1 For an integer $r$ with $0<|r|<2\ell$, put $C_r=\sum_{m=1}^{\ell-1}\cos(rm\pi/\ell)$. If $r$ is even, then $z=e^{2\pi i(r/2)/\ell}$ is a nontrivial $\ell$-th root of unity; the geometric sum $\sum_{m=0}^{\ell-1}z^m=0$ has real part $1+C_r$, so $C_r=-1$. If $r$ is odd, the geometric sum of $e^{i\pi rm/\ell}$ for $0\le m<2\ell$ is zero. Pairing terms at $m$ and $2\ell-m$ for $1\le m\le\ell-1$ leaves twice $C_r$; the two unpaired real terms are $1+\cos(r\pi)=0$, so $C_r=0$. Also $C_0=\ell-1$. [given, algebra]

2.1 The product-to-sum identity gives the left side as $\tfrac12(C_{a-b}-C_{a+b})$, with $C_0$ used when $a=b$. If $a=b$, then $a+b$ is nonzero even and less than $2\ell$, so the value is $\tfrac12((\ell-1)-(-1))=\ell/2$. If $a\ne b$ and $a,b$ have the same parity, both nonzero indices $a-b$ and $a+b$ are even and their $C$ values are $-1$; if they have opposite parity, both indices are odd and their values are $0$. In both off-diagonal cases the difference is zero, proving the formula. [given, step 1.1, algebra] ∎
