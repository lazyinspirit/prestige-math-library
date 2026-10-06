---
id: cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding
kind: counterexample
title: "Cyclic convolution wraps a high coefficient without zero padding"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
deps: [def-addition-and-multiplication-modulo-n,
       def-cyclic-convolution-on-z-mod-n,
       def-finite-sum-in-a-commutative-monoid,
       def-function-space,
       def-integers-modulo-n,
       lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product,
       thm-complex-numbers-form-a-field,
       thm-integers-modulo-n-basic-algebra,
       thm-standard-representatives-modulo-n]
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
generation:
  role: counterexample
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§11, (11.30)-(11.33): convolution on $\\mathbb Z_n$ is cyclic, with the wrap-around visible in the exponent arithmetic"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

**False claim:** for every $N\ge1$ and all $f,g\in\mathbb C^{\mathbb Z/N}$ with coefficient lists $u_i:=f([i]_N)$ and $v_j:=g([j]_N)$, the cyclic convolution $f*g$ of [[def-cyclic-convolution-on-z-mod-n]] has the **linear convolution values** $(f*g)([k])=\sum_{i+j=k}u_iv_j$ for every $k=0,\dots,N-1$; that is, no coefficient of the product ever wraps around.

The false claim fails already for $N=2$ and $f=g=(1,1)$: the coefficient $1$ of $z^{2}$ in the unreduced product $(1+z)^{2}=1+2z+z^{2}$ is wrapped into degree $0$, so $(f*g)([0])=2$ while the linear value listed for $k=0$ is $u_0v_0=1$. Sufficient zero padding restores the agreement: padded to length $4$, the same two sequences have cyclic convolution $(1,2,1,0)$, exactly the unreduced coefficient list.

## Facts & Assumptions

**Given:** The classes of $\mathbb Z/2\mathbb Z$ and $\mathbb Z/4\mathbb Z$; the functions $f,g\in\mathbb C^{\mathbb Z/2}$ with $f([0]_2)=f([1]_2)=g([0]_2)=g([1]_2)=1$; and the padded functions $f',g'\in\mathbb C^{\mathbb Z/4}$ with $f'([0])=g'([0])=f'([1])=g'([1])=1$ and $f'=g'=0$ on $[2],[3]$.

[F1] For finite groups the cyclic convolution is $(u*v)(x)=\sum_{y\in\mathbb Z/N}u(y)v(x-y)$, a finite sum of complex numbers depending on classes only ([[def-cyclic-convolution-on-z-mod-n]]).

[F2] In $\mathbb Z/N\mathbb Z$ the operation is the class addition of [[def-addition-and-multiplication-modulo-n]], is commutative, and $[u]_N=[v]_N$ exactly when $u\equiv v\pmod N$; the classes $[0]_N,\dots,[N-1]_N$ enumerate the group ([[thm-integers-modulo-n-basic-algebra]], [[def-integers-modulo-n]], [[thm-standard-representatives-modulo-n]]).

[F3] Finite sums over these groups split over disjoint unions and are computed from any enumeration ([[def-finite-sum-in-a-commutative-monoid]]); arithmetic of the values is that of the field $\mathbb C$ ([[thm-complex-numbers-form-a-field]]); $\mathbb C^{\mathbb Z/N}$ consists of functions with pointwise operations ([[def-function-space]]).

[L1] Expanding the finite product by distributivity [F3] gives one term $u_iv_jz^{i+j}$ for each pair of indices. Reduction modulo $z^N-1$ replaces $z^{i+j}$ by $z^r$ with $r\equiv i+j\pmod N$. For each class $x$ and each class $i$, exactly one class $j=x-i$ contributes to its coefficient, giving $\sum_i u_iv_{x-i}$, the cyclic convolution of [F1].

[L2] The false claim of the Statement refuted section, for the pair $(f,g)$ and for the padded pair $(f',g')$.

## Counterexample

**Proof technique:** direct.

1.1 Computing the cyclic convolution on $\mathbb Z/2$: $-[0]=[0]$ and $-[1]=[1]$, so $(f*g)([0])=f([0])g([0])+f([1])g([1])=1\cdot1+1\cdot1=2$ and $(f*g)([1])=f([0])g([1])+f([1])g([0])=1+1=2$. Hence $f*g=(2,2)$. [F1, F2, F3]

1.2 The linear convolution values $c_k=\sum_{i+j=k}u_iv_j$ for the two coefficient lists $(u_0,u_1)=(1,1)$ and $(v_0,v_1)=(1,1)$: $c_0=u_0v_0=1$, $c_1=u_0v_1+u_1v_0=2$, $c_2=u_1v_1=1$. The unreduced coefficient list is therefore $(c_0,c_1,c_2)=(1,2,1)$. [F3]

1.3 Zero padding to length $N'=4$: for the padded pair, $(f'*g')([x])=\sum_{y=0}^{3}f'([y])g'([x-y])$ gives $1,2,1,0$ for $x=[0],[1],[2],[3]$ respectively, since each of the products $u_0v_0,u_0v_1,u_1v_0,u_1v_1$ occurs exactly once and no product of two nonzero values wraps onto a different degree. This equals the linear coefficient list $(1,2,1)$ continued by $0$. [F1, F2, F3]

2.1 Reducing degrees modulo $2$: the coefficient $c_2=1$ of $z^{2}$ contributes to degree $2-2=0$, so the reduction of the linear list $(1,2,1)$ modulo $z^{2}-1$ is $(c_0+c_2,\ c_1)=(1+1,\ 2)=(2,2)$, which agrees with the cyclic convolution of step 1.1: the reduction, not the unreduced list, is what the cyclic convolution computes. [F2, L1, step 1.1, step 1.2]

3.1 The false claim [L2] predicts $(f*g)([0])=c_0=1$, whereas step 1.1 gives $(f*g)([0])=2$, so it fails for $N=2$ and $f=g=(1,1)$. Step 1.2 gives three coefficients in the linear product, and step 1.3 verifies that padding to length $4$ preserves them with a trailing zero. [step 1.1, step 1.2, step 1.3, L2] ∎

## Remarks

- **Padding threshold.** For nonzero coefficient polynomials $P,Q$, choosing $N\ge\deg P+\deg Q+1$ prevents wrap: every exponent in $PQ$ is below $N$, so [L1] leaves its coefficients unchanged. Here the minimum such length is $3$; length $4$ also works and admits the radix-two algorithm. The transform law [[lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]] always computes cyclic convolution.

- **Where the wrap comes from.** In the group $\mathbb Z/2\mathbb Z$ the class $[2]$ is $[0]$, so the exponent $2$ of $z^{2}$ is the exponent $0$ of the reduced polynomial; nothing is lost or approximated — the degree-$2$ and degree-$0$ coefficients are added in the field, which is exactly what the convolution sum does.
