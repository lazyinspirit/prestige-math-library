---
id: lem-dft-squares-to-reflection-and-has-fourth-power-identity
kind: lemma
title: "$\\mathcal F_N^2$ is reflection and $\\mathcal F_N^4$ is the identity"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
justified_by: []
aliases: []
deps: [def-finite-sum-in-a-commutative-monoid,
       def-function-space,
       def-integers-modulo-n,
       def-unitary-discrete-fourier-transform-on-z-mod-n,
       lem-finite-sum-reindexing-and-fubini,
       lem-orthogonality-of-characters-on-a-finite-cyclic-group,
       lem-rational-power-laws,
       thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse,
       thm-complex-exponential-addition-and-real-extension,
       thm-complex-numbers-form-a-field,
       thm-integers-modulo-n-basic-algebra,
       thm-kernel-and-fibres-of-complex-exponential,
       thm-standard-representatives-modulo-n]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§11, formulas (11.1)-(11.6) and Proposition 11.2: the transform pair and the exponent bookkeeping behind the fourth-power identity"
    - title: "MIT 18.310 lecture 23, The Finite Fourier Transform and the Fast Fourier Transform Algorithm (course page)"
      url: "https://math.mit.edu/~djk/18.310/18.310F04/23_finite_fourier.html"
      locator: "heading 3: the forward and inverse transforms differ by the sign of the root, so two applications recover the reflection of the input"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $N\ge1$ and $f\in\mathbb C^{\mathbb Z/N}$. Define the **reflection** $Rf$ by $(Rf)(x):=f(-x)$ for $x\in\mathbb Z/N\mathbb Z$. Then $\mathcal F_N^2f=Rf$ and $\mathcal F_N^4=\mathrm{id}$, the identity map of $\mathbb C^{\mathbb Z/N}$; consequently $\mathcal F_N^2$ is an involution and $\mathcal F_N^3=\mathcal F_N^{-1}$. At $N=1$ and $N=2$ the reflection is the identity, so $\mathcal F_N^2=\mathrm{id}$ there. No convergence or regularity hypothesis is involved: the transform is a finite sum ([[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

## Facts & Assumptions

**Given:** A natural number $N\ge1$, a function $f\in\mathbb C^{\mathbb Z/N}$, classes $x,y\in\mathbb Z/N\mathbb Z$, and the reflection $R$.

[F1] $(\mathcal F_Nh)(k)=N^{-1/2}\sum_{z=0}^{N-1}h([z]_N)e^{-2\pi ikz/N}$ for every $h\in\mathbb C^{\mathbb Z/N}$ and every integer $k$, and $\mathcal F_Nh$ is $N$-periodic in $k$ ([[def-unitary-discrete-fourier-transform-on-z-mod-n]]); every class has a unique standard representative in $\{0,\dots,N-1\}$ ([[thm-standard-representatives-modulo-n]]).

[F2] For all integers $a,b$, $\sum_{q=0}^{N-1}e^{2\pi i(a-b)q/N}=N$ when $a\equiv b\pmod N$ and $0$ otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F3] Finite sums over $\mathbb Z/N\mathbb Z$ are computed from any enumeration, are unchanged by reindexing along a bijection, split over disjoint unions, and satisfy the finite Fubini rule ([[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-reindexing-and-fubini]]). In particular a sum whose every term has $0_{\mathbb C}$ as a factor is $0$, and a sum over a one-element index set is the single listed value.

[L1] $\exp(u+v)=\exp u\,\exp v$ for all complex $u,v$, and $\exp w=1$ exactly when $w\in2\pi i\mathbb Z$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[L2] Classes of $\mathbb Z/N\mathbb Z$: $[u]_N=[v]_N$ exactly when $u\equiv v\pmod N$ ([[def-integers-modulo-n]]); the group is abelian, so $-(-x)=x$ and $x-y$ is the group operation ([[thm-integers-modulo-n-basic-algebra]]).

[L3] Field laws of $\mathbb C$ ([[thm-complex-numbers-form-a-field]]), and two functions in $\mathbb C^{\mathbb Z/N}$ are equal exactly when they agree at every class ([[def-function-space]]).

[L4] If a function has a two-sided inverse it is unique and written $f^{-1}$ ([[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]).

## Proof

**Proof technique:** direct.

1.1 Fix a class $x$ and let $x_0\in\{0,\dots,N-1\}$ be its unique standard representative by [F1]; evaluating the second transform at $x_0$ and expanding twice by [F1], the addition law [L1] gives $(\mathcal F_N^2f)(x)=N^{-1/2}\sum_{q=0}^{N-1}\Big(N^{-1/2}\sum_{y=0}^{N-1}f([y]_N)e^{-2\pi iqy/N}\Big)e^{-2\pi iqx_0/N}=N^{-1}\sum_{q=0}^{N-1}\sum_{y=0}^{N-1}f([y]_N)e^{-2\pi iq(x_0+y)/N}$: indeed $e^{-2\pi iqy/N}e^{-2\pi iqx_0/N}=e^{-2\pi iq(x_0+y)/N}$ by [L1], and $N^{-1/2}N^{-1/2}=N^{-1}$ by the exponent laws ([[lem-rational-power-laws]], claim 2). The double sum is the finite sum over the product index set and the interchange of the two sums is the finite Fubini rule [F3]. [F1, F3, L1, L2, L3]

1.2 Evaluation of the inner sum: for $y\in\{0,\dots,N-1\}$, $\sum_{q=0}^{N-1}e^{-2\pi iq(x_0+y)/N}=N$ when $[x]+[y]_N=[0]$ and $0$ otherwise. Apply [F2] with $a=0$, $b=x_0+y$ and dummy summation index $q$; then $0\equiv x_0+y\pmod N$ is exactly $[x]+[y]_N=[0]$ by [L2]. [F2, L2]

1.3 Collapsing a sum supported at one class: if $c:\mathbb Z/N\mathbb Z\to\mathbb C$ is any function and $a\in\mathbb Z/N\mathbb Z$, then $\sum_{y\in\mathbb Z/N}c(y)\cdot\big(N\text{ if }y=a,\ 0\text{ otherwise}\big)=N\,c(a)$. Split the finite index set into the singleton $\{a\}$ and its complement by [F3]; every term of the complement sum has $0_{\mathbb C}$ as a factor, hence the complement contributes $0$, while the single term over $\{a\}$ is the listed value $N\,c(a)$. [F3]

1.4 The reflection is an involution: $R(Rf)=f$. For every class $x$, $(R(Rf))(x)=(Rf)(-x)=f(-(-x))=f(x)$ by [L2], so the two functions agree at every class [L3]. [L2, L3]

2.1 Combining steps 1.1, 1.2 and 1.3, for every class $x$ one has $(\mathcal F_N^2f)(x)=N^{-1}\sum_{y=0}^{N-1}f([y]_N)\big(N\text{ if }[y]_N=[-x],\ 0\text{ otherwise}\big)=N^{-1}\cdot N\,f([-x])=f(-x)$; the list $[0]_N,\dots,[N-1]_N$ contains exactly one representative of each class by [F1]. Hence $\mathcal F_N^2f=Rf$ as functions on $\mathbb Z/N\mathbb Z$ [L3]. [F1, F3, L2, L3, step 1.1, step 1.2, step 1.3]

3.1 Fourth power and inverse: from step 2.1, $\mathcal F_N^4=(\mathcal F_N^2)\circ(\mathcal F_N^2)=R\circ R$, and step 1.4 gives $R\circ R=\mathrm{id}$; so $\mathcal F_N^4=\mathrm{id}$, whence $\mathcal F_N^2\circ\mathcal F_N^2=\mathrm{id}$ (that is, $\mathcal F_N^2$ is an involution) and both $\mathcal F_N\circ\mathcal F_N^3=\mathcal F_N^4=\mathrm{id}$ and $\mathcal F_N^3\circ\mathcal F_N=\mathrm{id}$; by [L4] the two-sided inverse of $\mathcal F_N$ is unique and equals $\mathcal F_N^3$, so $\mathcal F_N^{-1}=\mathcal F_N^3$. This proves the statement. [L4, step 1.4, step 2.1] ∎

## Remarks

- **The two involution cases.** At $N=1$ the group $\mathbb Z/1$ has one element, so $-x=x$ and the reflection is the identity. At $N=2$ the element $[1]$ satisfies $[1]+[1]=[0]$, so $-[1]=[1]$ and $-[0]=[0]$; the reflection is the identity there too and $\mathcal F_2^2=\mathrm{id}$, consistent with the fact that the $N=2$ matrix $\frac{1}{\sqrt2}\begin{pmatrix}1&1\\\\1&-1\end{pmatrix}$ is its own inverse. Both claims use only the group law of [[thm-integers-modulo-n-basic-algebra]].

- **What this identity is not.** It is a statement about the finite transform and its exponent bookkeeping only. In particular it does not assert that $\mathcal F_N$ has order four in general, and it does not identify the reflection with the identity for $N\ge3$: for $N=3$ the reflection exchanges the classes $[1]$ and $[2]$ and is not the identity, while it still satisfies $R^2=\mathrm{id}$.
