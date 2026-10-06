---
id: def-unnormalised-engineering-dft-and-conversion
kind: definition
title: "The unnormalised engineering DFT and its conversion to the unitary transform"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
deps: [def-complex-exponential,
       def-finite-sum-in-a-commutative-monoid,
       def-integers-modulo-n,
       def-rational-power,
       def-unitary-discrete-fourier-transform-on-z-mod-n,
       lem-rational-power-laws,
       thm-complex-exponential-addition-and-real-extension,
       thm-complex-numbers-form-a-field,
       thm-finite-fourier-inversion,
       thm-integers-modulo-n-basic-algebra,
       thm-kernel-and-fibres-of-complex-exponential]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§12, (12.1) defines the $1/n$-normalised negative-sign transform; multiplying that finite sum by $n$ gives the output here. The positive twiddle printed in (12.9) needs an inverse power to match (12.1), as noted in the radix-two factorisation lemma"
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 3: forward evaluations $p(z^k)$ and the inverse $a_s=(1/n)\\sum_kp_kz^{-sk}$ with the factor $1/n$ visible"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $N\ge1$ and $f\in\mathbb C^{\mathbb Z/N}$. The **unnormalised (engineering) discrete Fourier transform** of $f$ is the function $X(f):\mathbb Z\to\mathbb C$ defined by

$$X_k(f):=\sum_{x=0}^{N-1}f([x]_N)\,e^{-2\pi ikx/N},\qquad k\in\mathbb Z,$$

the sum being the finite sum of [[def-finite-sum-in-a-commutative-monoid]] over the representatives $[0]_N,\dots,[N-1]_N$ of the classes of $\mathbb Z/N\mathbb Z$ ([[def-integers-modulo-n]]), with $e^z$ the complex exponential of [[def-complex-exponential]]. Comparing with [[def-unitary-discrete-fourier-transform-on-z-mod-n]],

$$X_k(f)=\sqrt N\,(\mathcal F_Nf)(k),\qquad (\mathcal F_Nf)(k)=N^{-1/2}X_k(f),\qquad k\in\mathbb Z,$$

where $\sqrt N=N^{1/2}$ is the rational power of [[def-rational-power]] and the two conversions are inverse to each other by $N^{1/2}N^{-1/2}=1$ ([[lem-rational-power-laws]]). So the two transforms determine each other, and the only difference between them is the constant $\sqrt N$.

**The transform is defined on classes and is $N$-periodic.** If $[x]_N=[x']_N$ then $x'=x+mN$ for some integer $m$ and $e^{-2\pi ikx'/N}=e^{-2\pi ikx/N}e^{-2\pi ikm}=e^{-2\pi ikx/N}$, so the summands depend only on classes; and $e^{-2\pi i(k+N)x/N}=e^{-2\pi ikx/N}e^{-2\pi ix}=e^{-2\pi ikx/N}$ for every integer $x$, both identities following from the addition law and $\exp(2\pi i\,\cdot)=1$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]). Hence $X(f)$ factors through $\mathbb Z\to\mathbb Z/N\mathbb Z$ and $X_k(f)$ depends on $k$ only through its class.

**Inverse formulas.** The inversion theorem in its unitary form is the identity $f(x)=N^{-1/2}\sum_{k=0}^{N-1}(\mathcal F_Nf)(k)e^{2\pi ikx/N}$ of [[thm-finite-fourier-inversion]]; substituting $(\mathcal F_Nf)(k)=N^{-1/2}X_k(f)$ and collecting $N^{-1/2}N^{-1/2}=N^{-1}$ ([[lem-rational-power-laws]]) gives the engineering form

$$f(x)=\frac1N\sum_{k=0}^{N-1}X_k(f)\,e^{2\pi ikx/N},\qquad x\in\mathbb Z/N\mathbb Z.$$

This is the convention in which the radix-two algorithm computes its output. The unitary transform is recovered by the single rescaling $N^{-1/2}=2^{-m/2}$ at length $N=2^m$. The correctness and complexity theorems refer to this unnormalised output; the convolution lemma is stated in the unitary convention.

## Remarks

- **No factor $1/N$ in the forward direction.** The normalisation sits in the inverse formula. MIT's heading 3 uses the positive-sign unnormalised forward transform; replacing its primitive root by its inverse gives the sign here. Taylor's negative-sign finite sum (12.1), multiplied by $N$ and identified by $\omega^j\leftrightarrow[j]_N$, agrees with $X$. His printed recursive twiddle has a sign inconsistency, explained in the radix-two factorisation lemma; no printed recursion identity is needed for the conversion above.

- **What is not asserted.** Nothing here claims that $X$ is an isometry for the counting inner product — with this normalisation $X$ rescales norms by $N^{1/2}$ — and nothing here claims an $O(N\log N)$ evaluation of $X$ for arbitrary $N$; the algorithmic statements are proved later on this page and are restricted to the lengths stated there.
