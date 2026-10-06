---
id: def-unitary-discrete-fourier-transform-on-z-mod-n
kind: definition
title: "The unitary discrete Fourier transform on $\\mathbb Z/N\\mathbb Z$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
justified_by: []
aliases: []
deps: [def-complex-exponential,
       def-finite-sum-in-a-commutative-monoid,
       def-function-space,
       def-integers-modulo-n,
       def-rational-power,
       def-vector-space,
       cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
       lem-congruence-is-an-equivalence-relation,
       lem-finite-sum-reindexing-and-fubini,
       lem-rational-power-laws,
       thm-complex-exponential-addition-and-real-extension,
       thm-complex-numbers-form-a-field,
       thm-integers-modulo-n-basic-algebra,
       thm-kernel-and-fibres-of-complex-exponential,
       thm-standard-representatives-modulo-n]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§11, PDF pp. 86-88: the transforms (11.1)-(11.2) and the unitary $L^2$ conventions (11.4)-(11.5), transposed from the multiplicative group $\\Gamma_n$ to $\\mathbb Z/N\\mathbb Z$ with the sign and normalisation fixed as stated"
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 3: the finite Fourier transform as evaluation of a polynomial at the $n$-th roots of unity, and the symmetric forward and inverse forms"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $N\ge1$ and let $\mathbb C^{\mathbb Z/N}$ be the complex vector space of all functions $\mathbb Z/N\mathbb Z\to\mathbb C$ ([[def-function-space]], [[def-vector-space]]). For $f\in\mathbb C^{\mathbb Z/N}$ define the **unitary discrete Fourier transform** $\mathcal F_Nf:\mathbb Z\to\mathbb C$ by

$$(\mathcal F_Nf)(k):=N^{-1/2}\sum_{x=0}^{N-1}f([x]_N)\,e^{-2\pi ikx/N},\qquad k\in\mathbb Z,$$

where $[x]_N$ is the class of the integer $x$ in $\mathbb Z/N\mathbb Z$ ([[def-integers-modulo-n]], [[lem-congruence-is-an-equivalence-relation]]), $e^z=\exp z$ is the complex exponential ([[def-complex-exponential]]), and $N^{-1/2}$ is the rational power of the positive real $N$ ([[def-rational-power]], [[lem-rational-power-laws]]), read in $\mathbb C$ through the embedded copy of $\mathbb R$ ([[thm-complex-numbers-form-a-field]]).

**The summands depend only on classes, and the transform is periodic in $k$.** Each summand $f([x]_N)e^{-2\pi ikx/N}$ is a complex number determined by the class $[x]_N$ and the integer $k$, and the classes $[0]_N,\dots,[N-1]_N$ are pairwise distinct and exhaust $\mathbb Z/N\mathbb Z$ ([[thm-standard-representatives-modulo-n]]); so the display is the finite sum, over the finite group, of the family $x\mapsto f(x)N^{-1/2}e^{-2\pi ikx/N}$, and reindexing by any other representative list leaves it unchanged ([[lem-finite-sum-reindexing-and-fubini]], part 1). Reindexing by the transition $x\mapsto x+N$ uses $e^{-2\pi ik(x+N)/N}=e^{-2\pi ikx/N}e^{-2\pi ik}$ and $e^{-2\pi ik}=1$ for every integer $k$, because $-2\pi k\in2\pi\mathbb Z$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]). For periodicity in $k$, the same two facts give $e^{-2\pi i(k+N)x/N}=e^{-2\pi ikx/N}e^{-2\pi ix}=e^{-2\pi ikx/N}$ for every integer $x$, so $(\mathcal F_Nf)(k+N)=(\mathcal F_Nf)(k)$ for every $k\in\mathbb Z$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]). Consequently $\mathcal F_Nf$ factors through the quotient $\mathbb Z\to\mathbb Z/N\mathbb Z$ and is a well-defined function on $\mathbb Z/N\mathbb Z$, and $\mathcal F_N$ is a map $\mathbb C^{\mathbb Z/N}\to\mathbb C^{\mathbb Z/N}$.

**Form in terms of characters.** Define $\chi_k([m]):=\exp(2\pi ikm/N)$ for $k,m\in\mathbb Z$. The assignment is well defined on classes because replacing $m$ by $m+N$ multiplies the exponential by $e^{2\pi ik}=1$ ([[thm-kernel-and-fibres-of-complex-exponential]]); it is multiplicative, $\chi_k(x+y)=\chi_k(x)\chi_k(y)$, by the addition law ([[thm-complex-exponential-addition-and-real-extension]]); and it takes values of modulus $1$, since $|\exp(i\theta)|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]). Thus the $\chi_k$ are characters of the finite group $\mathbb Z/N\mathbb Z$ (homomorphisms into the unit circle; no continuity is required on a discrete group), and the definition reads

$$(\mathcal F_Nf)(k)=N^{-1/2}\sum_{x\in\mathbb Z/N}f(x)\,\chi_{-k}(x),$$

with the positive-sign transform obtained by replacing $k$ with $-k$. This fixes the negative-sign, $N^{-1/2}$-normalised convention of the whole page: the forward transform carries the minus sign in the exponent and the factor $N^{-1/2}$, and the inverse transform of the inversion theorem carries the plus sign with the same factor. A different, unnormalised convention is introduced later on this page for the algorithmic part; the two are related by a single explicit rescaling recorded there.

**Linearity, recorded for later use.** For $a,b\in\mathbb C$ and $f,g\in\mathbb C^{\mathbb Z/N}$ one has $\mathcal F_N(af+bg)=a\,\mathcal F_Nf+b\,\mathcal F_Ng$: the identity holds at each $k$ by distributivity in $\mathbb C$ ([[thm-complex-numbers-form-a-field]]) and the elementary laws of finite sums over a fixed finite index set, which follow from the recursion clauses of [[def-finite-sum-in-a-commutative-monoid]] by induction on an enumeration. Nothing else about $\mathcal F_N$ — unitarity, invertibility, the convolution law — is asserted here; those are proved in the items that follow.

## Remarks

- **Why the normalisation is split as $N^{-1/2}$.** The factor $N^{-1/2}$ is exactly what makes the transform an isometry for the counting inner product, and is the finite analogue of the $1/\sqrt{2\pi}$ convention in the $L^2$ Fourier transform. Taylor writes the finite transform (11.1) with the factor $1/n$ in the forward direction and weights $L^2(\Gamma_n)$ by $(1/n)$-counting measure; the two descriptions differ by relabelling the sides, not by mathematics, and the translation used here sends $\omega^j$ to $[j]_N$ and $f^\# $ to $N^{-1/2}\mathcal F_Nf$.

- **No convergence hypothesis is needed or used.** The index set is finite, so the definition involves no limit, no summability condition and no auxiliary topology; it applies to every function in $\mathbb C^{\mathbb Z/N}$, including the zero function, and it is total at $N=1$, where the single summand is $f([0]_1)e^{0}=f([0]_1)$ with coefficient $1^{-1/2}=1$.
