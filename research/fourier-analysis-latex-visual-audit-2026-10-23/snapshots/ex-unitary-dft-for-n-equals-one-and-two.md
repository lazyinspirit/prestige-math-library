---
id: ex-unitary-dft-for-n-equals-one-and-two
kind: example
title: "The unitary DFT for $N=1$ and $N=2$"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
deps: [def-complex-exponential,
       def-function-space,
       def-integers-modulo-n,
       def-matrix-product-and-identity-matrix,
       def-rational-power,
       def-unitary-discrete-fourier-transform-on-z-mod-n,
       lem-complex-conjugation-and-modulus-laws,
       lem-dft-squares-to-reflection-and-has-fourth-power-identity,
       lem-rational-power-laws,
       thm-complex-exponential-addition-and-real-extension,
       thm-finite-fourier-inversion,
       thm-finite-parseval-and-plancherel,
       thm-integers-modulo-n-basic-algebra,
       thm-kernel-and-fibres-of-complex-exponential]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§11, (11.1)-(11.4): the definitions specialise to these two cases"
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 3: the transform at the degenerate lengths"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

For $N=1$ the unitary transform of [[def-unitary-discrete-fourier-transform-on-z-mod-n]] is the identity: the group $\mathbb Z/1\mathbb Z$ has the single class $[0]_1$, the only term of the defining sum is $1^{-1/2}f([0]_1)e^{0}=f([0]_1)$, and the matrix of $\mathcal F_1$ is the $1\times1$ matrix $[\,1\,]=I_1$, which is its own inverse.

For $N=2$, write $h=(h_0,h_1)$ for $h\in\mathbb C^{\mathbb Z/2}$ with $h_0:=h([0]_2)$ and $h_1:=h([1]_2)$. Since $e^{-\pi ixk}=(-1)^{xk}$ for $x,k\in\{0,1\}$,

$$\mathcal F_2(h_0,h_1)=2^{-1/2}\big(h_0+h_1,\ h_0-h_1\big),$$

whose matrix relative to the classes $[0],[1]$ is $\frac{1}{\sqrt2}\begin{pmatrix}1&1\\\\1&-1\end{pmatrix}$; this matrix is real and symmetric and satisfies $A^2=I_2$, so it is its own inverse. Since the reflection $x\mapsto-x$ is the identity on $\mathbb Z/1\mathbb Z$ and on $\mathbb Z/2\mathbb Z$, the fourth-power identity of [[lem-dft-squares-to-reflection-and-has-fourth-power-identity]] reads $\mathcal F_1^2=\mathcal F_2^2=\mathrm{id}$ here, consistent with $A^2=I_2$ and with the inversion theorem [[thm-finite-fourier-inversion]]; and $\mathcal F_2$ preserves the counting norm by [[thm-finite-parseval-and-plancherel]].

## Facts & Assumptions

**Given:** A function $f\in\mathbb C^{\mathbb Z/1}$ with $f_0:=f([0]_1)$; a function $h\in\mathbb C^{\mathbb Z/2}$ with $h_0:=h([0]_2)$ and $h_1:=h([1]_2)$; and the matrix $A:=\frac{1}{\sqrt2}\begin{pmatrix}1&1\\\\1&-1\end{pmatrix}$.

[F1] $(\mathcal F_Nu)(k)=N^{-1/2}\sum_{x=0}^{N-1}u([x]_N)e^{-2\pi ikx/N}$ ([[def-unitary-discrete-fourier-transform-on-z-mod-n]]), with $1^{-1/2}=1$ and $2^{-1/2}2^{-1/2}=2^{-1}$ ([[def-rational-power]], [[lem-rational-power-laws]]).

[F2] $e^{0}=1$, $e^{-\pi i}=-1$ and $e^{-2\pi i}=1$ ([[thm-kernel-and-fibres-of-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]], [[def-complex-exponential]]); in particular $e^{-\pi ixk}=(-1)^{xk}$ for $x,k\in\{0,1\}$.

[F3] In $\mathbb Z/2\mathbb Z$ the classes $[0]$, $[1]$ are distinct and $[1]+[1]=[0]$; in $\mathbb Z/1\mathbb Z$ there is only $[0]$, and $-[0]=[0]$ ([[def-integers-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]).

[F4] Matrix product and identity: $(AB)_{ik}=\sum_{j\in n}a_{ij}b_{jk}$ and $I_n$ has entries $1$ on the diagonal and $0$ elsewhere ([[def-matrix-product-and-identity-matrix]]); $\mathbb C^{\mathbb Z/2}$ is the vector space of functions on the two-element group ([[def-function-space]]).

[L1] $\mathcal F_N^2=R$ with $R$ the reflection $x\mapsto-x$, and $\mathcal F_N^4=\mathrm{id}$; at $N=1,2$ the reflection is the identity ([[lem-dft-squares-to-reflection-and-has-fourth-power-identity]]).

[L2] $\langle\mathcal F_Nu,\mathcal F_Nu\rangle=\langle u,u\rangle$ for the counting inner product ([[thm-finite-parseval-and-plancherel]], [[lem-complex-conjugation-and-modulus-laws]]).

[L3] The inverse transform is the positive-sign transform $N^{-1/2}\sum_k(\mathcal F_Nu)(k)e^{2\pi ikx/N}$ ([[thm-finite-fourier-inversion]]).

## Verification

**Proof technique:** direct.

1.1 At $N=1$: $(\mathcal F_1f)(0)=1^{-1/2}f_0e^{0}=f_0$, so $\mathcal F_1=\mathrm{id}$ and its matrix is $I_1=[\,1\,]$. [F1, F2, F3]

1.2 At $N=2$: for $k=0$ both summands have factor $e^{0}=1$, giving $(\mathcal F_2h)(0)=2^{-1/2}(h_0+h_1)$; for $k=1$ the factors are $e^{0}=1$ at $x=0$ and $e^{-\pi i}=-1$ at $x=1$, giving $(\mathcal F_2h)(1)=2^{-1/2}(h_0-h_1)$. These are the two entries of $A(h_0,h_1)^{\mathsf T}$. [F1, F2, F3]

1.3 The matrix $A$ satisfies $A^2=\frac12\begin{pmatrix}1&1\\\\1&-1\end{pmatrix}\begin{pmatrix}1&1\\\\1&-1\end{pmatrix}=\frac12\begin{pmatrix}1+1&1-1\\\\1-1&1+1\end{pmatrix}=\frac12\begin{pmatrix}2&0\\\\0&2\end{pmatrix}=I_2$, by the entry formula of [F4]; hence $A=A^{-1}$, and $A$ is real and symmetric. [F4]

2.1 The reflection is the identity on $\mathbb Z/1\mathbb Z$ and on $\mathbb Z/2\mathbb Z$ by [F3], so [L1] gives $\mathcal F_1^2=\mathrm{id}$ and $\mathcal F_2^2=\mathrm{id}$; this is consistent with $[\,1\,]^2=[\,1\,]$ and with step 1.3, and by [L2] the transforms preserve the counting norm at both lengths (for $N=2$, the norm identity reads $|h_0+h_1|^2+|h_0-h_1|^2=2|h_0|^2+2|h_1|^2$, which is the displayed matrix computation after multiplying by $\frac12$). [F3, L1, L2, step 1.3]

3.1 Steps 1.1 and 1.2 compute the two transforms and their matrices, step 1.3 verifies that the $N=2$ matrix is its own inverse, and step 2.1 reconciles both with inversion and the fourth-power identity; the example is verified. [L3, step 1.1, step 1.2, step 1.3, step 2.1] ∎

## Remarks

- **The degenerate length is not an exception.** $N=1$ is a genuine case of every statement on this page: the transform is the identity, the orthogonality sum has its single coincident term, and the radix-two recursion later on this page terminates at this case as its base. Nothing in the definitions excludes it, and no separate convention is introduced for it.

- **At $N=2$ the transform is its own inverse.** This is the smallest length at which the transform is not the identity while still being involutive; for $N\ge3$ the reflection is not the identity, so the square of the transform is not the identity either, although the fourth power always is.
