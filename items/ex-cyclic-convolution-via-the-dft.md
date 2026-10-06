---
id: ex-cyclic-convolution-via-the-dft
kind: example
title: "Cyclic convolution on $\\mathbb Z/4\\mathbb Z$ via the DFT"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
justified_by: []
aliases: []
deps: [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
       def-complex-exponential,
       def-cyclic-convolution-on-z-mod-n,
       def-integers-modulo-n,
       def-rational-power,
       def-unitary-discrete-fourier-transform-on-z-mod-n,
       def-unnormalised-engineering-dft-and-conversion,
       lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product,
       lem-rational-power-laws,
       thm-complex-numbers-form-a-field,
       thm-complex-exponential-addition-and-real-extension,
       thm-finite-fourier-inversion,
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
      locator: "§11, (11.30)-(11.31): the discrete convolution and its transform law, here computed for a four-point example"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

On $\mathbb Z/4\mathbb Z$ let $f=g=(1,1,0,0)$, that is $f([0])=f([1])=1$ and $f([2])=f([3])=0$, and similarly for $g$. Their unnormalised transforms of [[def-unnormalised-engineering-dft-and-conversion]] are $X(f)=X(g)=(2,\,1-i,\,0,\,1+i)$; the convolution law in engineering form gives $X(f*g)=X(f)X(g)$ componentwise, that is $X(f*g)=(4,\,-2i,\,0,\,2i)$, and inverse transforming by $(f*g)(x)=\frac14\sum_{k=0}^{3}X_k(f*g)e^{2\pi ikx/4}$ returns $(1,2,1,0)$. Direct evaluation of the cyclic convolution $(f*g)(x)=\sum_{y\in\mathbb Z/4}f(y)g(x-y)$ of [[def-cyclic-convolution-on-z-mod-n]] gives the same tuple $1,2,1,0$. In this instance the length is large enough that no coefficient wraps, so the cyclic convolution equals the linear convolution $(1,2,1,0)$ of the coefficient sequences.

## Facts & Assumptions

**Given:** The functions $f,g\in\mathbb C^{\mathbb Z/4}$ with $f([0])=f([1])=g([0])=g([1])=1$ and $f([2])=f([3])=g([2])=g([3])=0$, and the classes $[0],[1],[2],[3]$ of $\mathbb Z/4\mathbb Z$.

[F1] $X_k(u)=\sum_{x=0}^{3}u([x]_4)e^{-2\pi ikx/4}$ for $u\in\mathbb C^{\mathbb Z/4}$, and $X_k(u)=2(\mathcal F_4u)(k)$; the inverse formula of length $4$ is $u(x)=\frac14\sum_{k=0}^{3}X_k(u)e^{2\pi ikx/4}$ ([[def-unnormalised-engineering-dft-and-conversion]], [[def-unitary-discrete-fourier-transform-on-z-mod-n]], [[thm-finite-fourier-inversion]], [[def-rational-power]], [[lem-rational-power-laws]]).

[F2] The cyclic convolution is $(u*v)(x)=\sum_{y\in\mathbb Z/4}u(y)v(x-y)$, a finite sum depending on classes only ([[def-cyclic-convolution-on-z-mod-n]]), and the transform law in engineering form is $X_k(u*v)=X_k(u)X_k(v)$ for every $k$, obtained from $\mathcal F_4(u*v)=2(\mathcal F_4u)(\mathcal F_4v)$ and $X=2\mathcal F_4$ ([[lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]], [F1]).

[L1] Exponential values: $e^{0}=1$, $e^{-\pi i/2}=-i$, $e^{-\pi i}=-1$, $e^{-2\pi i}=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-kernel-and-fibres-of-complex-exponential]], [[def-complex-exponential]]); hence $e^{-2\pi ik/4}=(-i)^{k}$ and $e^{2\pi ikx/4}=i^{kx}$ for $k,x\in\{0,1,2,3\}$ ([[thm-complex-exponential-addition-and-real-extension]]).

[L2] Field arithmetic in $\mathbb C$: $i^{2}=-1$, $i^{3}=-i$, $i^{4}=1$, and $(1-i)^{2}=-2i$, $(1+i)^{2}=2i$ ([[thm-complex-numbers-form-a-field]]).

[L3] The classes $[0],[1],[2],[3]$ enumerate $\mathbb Z/4\mathbb Z$, $- [1]=[3]$ and $- [2]=[2]$ ([[thm-standard-representatives-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]).

## Verification

**Proof technique:** direct.

1.1 Transform values: $X_k(f)=1\cdot e^{0}+1\cdot e^{-2\pi ik/4}+0+0=1+(-i)^{k}$ for $k=0,1,2,3$ by [F1] and [L1], so $X_0(f)=1+1=2$, $X_1(f)=1-i$, $X_2(f)=1+i^{2}=0$ and $X_3(f)=1+(-i)^{3}=1+i$ by [L2]; thus $X(f)=(2,1-i,0,1+i)$, and the same values hold for $g$ since $g=f$. [F1, L1, L2]

1.2 Direct evaluation of the convolution: $(f*g)([0])=f([0])g([0])+f([1])g([3])+f([2])g([2])+f([3])g([1])=1\cdot1+0+0+0=1$; $(f*g)([1])=f([0])g([1])+f([1])g([0])=2$; $(f*g)([2])=f([0])g([2])+f([1])g([1])+0+0=1$; $(f*g)([3])=f([0])g([3])+f([1])g([2])=0$, where $-[1]=[3]$ and $-[2]=[2]$ by [L3]. Hence $(f*g)=(1,2,1,0)$. [F2, L3]

2.1 Product in the transform domain: $X_k(f*g)=X_k(f)X_k(g)$ by [F2], so componentwise $X_0=2\cdot2=4$, $X_1=(1-i)^{2}=-2i$, $X_2=0\cdot0=0$ and $X_3=(1+i)^{2}=2i$, giving $X(f*g)=(4,-2i,0,2i)$. [F2, L2, step 1.1]

3.1 Inverse transforming step 2.1: by [F1], $(f*g)(x)=\frac14\big(4\cdot i^{0}+(-2i)i^{x}+0+2i\cdot i^{3x}\big)$ for $x=0,1,2,3$ by [L1]; at $x=0$ this is $\frac14(4-2i+2i)=1$, at $x=1$ it is $\frac14(4+(-2i)i+2i(-i))=\frac14(4+2+2)=2$, at $x=2$ it is $\frac14(4+2i-2i)=1$, and at $x=3$ it is $\frac14(4+(-2i)(-i)+2i(i))=\frac14(4-2-2)=0$, where $i^{2}=-1$ is used throughout. So the inverse transform returns $(1,2,1,0)$, in agreement with the direct computation of step 1.2. Since $4\ge1+1+1=3$, no coefficient wraps and the cyclic convolution equals the linear convolution $(1,2,1,0)$ of the coefficient sequences. [F1, L1, L2, step 1.2, step 2.1] ∎

## Remarks

- **What the computation shows and what it does not.** It shows the transform law of [F2] producing a genuine cyclic convolution and agreeing with direct summation for one four-point pair. It does not claim that a length-$4$ transform is efficient — the point of the example is the normalisation bookkeeping: with $X$ unnormalised the product law has no extra factor, while with $\mathcal F_4$ the same computation carries the factor $\sqrt4=2$.

- **The wrap-free regime.** Because the coefficient lists have length $2$ each and the product has $3$ coefficients, the four-point cyclic convolution sees no wrap. The companion counterexample shows what changes at length $2$, where the product's third coefficient wraps back into degree $0$.
