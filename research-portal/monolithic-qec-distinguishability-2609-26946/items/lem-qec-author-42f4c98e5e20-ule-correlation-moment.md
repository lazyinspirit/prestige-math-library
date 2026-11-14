---
id: lem-qec-author-42f4c98e5e20-ule-correlation-moment
kind: lemma
domain: mathematics
title: A first-moment bound for the bath correlation convolution
status: published
origin: session
deps:
  - lem-qec-author-42f4c98e5e20-ule-normalization
  - def-qec-prereq-stationary-spectrum-kernel-contract
  - math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - math:thm-tonelli-theorem-for-sigma-finite-product-spaces
  - math:thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions
  - math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - math:thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - math:thm-integrals-are-invariant-under-measure-preserving-maps
  - math:thm-integral-triangle-inequality
  - math:thm-linearity-of-the-lebesgue-integral-on-l-one
dependency_roles:
  lem-qec-author-42f4c98e5e20-ule-normalization: mathematical-premise
  def-qec-prereq-stationary-spectrum-kernel-contract: mathematical-premise
  math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  math:thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  math:thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions: mathematical-premise
  math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  math:thm-measure-uniqueness-on-a-sigma-finite-pi-system: mathematical-premise
  math:thm-integrals-are-invariant-under-measure-preserving-maps: mathematical-premise
  math:thm-integral-triangle-inequality: mathematical-premise
  math:thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 2
---

## Statement

Use $h,G,H,\Gamma,\tau$ from the normalization lemma. Suppose the stationary correlation is represented almost everywhere by $C(u)=\int h(u-v)h(v)\,dv$. For a matrix $A$ put $\|A\|_{\mathrm{ent}}=\sum_{ij}|A_{ij}|$. Then $M=4\gamma\int_0^\infty u\|C(u)\|_{\mathrm{ent}}du$ is finite and $M\leq\Gamma\tau$. The convolution identity is an explicit premise, not a consequence of stationarity alone.

## Facts & Assumptions

[F1] The normalized kernel obeys $h(-u)=h(u)^\dagger$, with $G=\int_{\mathbb R}\|h(v)\|_{2,1}dv<\infty$, $H=\int_{\mathbb R}|v|\|h(v)\|_{2,1}dv<\infty$ and $\Gamma\tau=4\gamma GH$. Its frequency entries are integrable and its time entries are their Fourier integrals. [[lem-qec-author-42f4c98e5e20-ule-normalization]]

[F2] The kernel contract fixes a positive integer $n$, $C:\mathbb R\to\mathbb C^{n\times n}$ with integrable entries, entrywise Lebesgue integration, and $\|A\|_{2,1}=\sum_b(\sum_a|A_{ab}|^2)^{1/2}$. [[def-qec-prereq-stationary-spectrum-kernel-contract]]

[F3] For vectors in a complex inner product space, $|\langle x,y\rangle|\leq\|x\|\|y\|$. We apply this to finite rows and columns with the Euclidean norm. [[math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[F4] Tonelli applies to nonnegative product-measurable functions on sigma-finite measure spaces before finiteness is known. We use the real line with Borel Lebesgue measure in each factor, exhausted by the finite-measure intervals $(-m,m)$ for positive integers $m$. [[math:thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F5] The Fourier transform of an $L^1(\mathbb R)$ function is bounded and uniformly continuous. In the supplier's convention, the time kernel is $h_{ab}(t)=\widehat{h_{ab}}(t/(2\pi))$, with the transform taken in the frequency variable. [[math:thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]

[F6] Translations preserve Lebesgue measurability and measure. Two measures agreeing on a generating pi-system are equal if that pi-system has an increasing common finite-measure exhaustion. Integral invariance under a measure-preserving self-map holds for nonnegative measurable functions, allowing infinity, and for integrable complex functions. These inputs also establish reflection invariance on the Borel line in step 1.2. [[math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]] [[math:thm-measure-uniqueness-on-a-sigma-finite-pi-system]] [[math:thm-integrals-are-invariant-under-measure-preserving-maps]]

[F7] For an integrable complex function $f$, $|\int f|\leq\int|f|$, and the integral is complex-linear on $L^1$. We apply these facts entrywise, commuting only finite sums with integrals. [[math:thm-integral-triangle-inequality]] [[math:thm-linearity-of-the-lebesgue-integral-on-l-one]]

## Proof

**Given:** The convolution identity and kernel conditions. **Goal:** Bound $M$.

1.1 Apply the Fourier continuity theorem to each frequency entry supplied by the kernel contract. Thus every time entry of $h$ is continuous, and $k(v)=\|h(v)\|_{2,1}$ is a nonnegative continuous function with moments $G,H$. In particular $(u,v)\mapsto k(v-u)k(v)$ is continuous and is measurable for the product of the Borel sigma-algebras. All uses of Tonelli below therefore have product-measurable integrands and sigma-finite factors; no completed-product theorem is needed. [F1, F2, F4, F5]

1.2 Translations preserve the Borel restriction $\lambda$ of Lebesgue measure. Reflection $R(v)=-v$ is a Borel bijection, so $\nu(E)=\lambda(R^{-1}E)$ is another Borel measure. For every bounded open interval $(a,b)$, its reflection $(-b,-a)$ is its translate by $-(a+b)$; hence $\nu((a,b))=\lambda((a,b))$. The bounded open intervals together with the empty set form a generating pi-system, with common finite-measure exhaustion $(-m,m)$. Measure uniqueness gives $\nu=\lambda$. Thus reflection, translations and their compositions preserve the Borel measure, and integral invariance justifies substitution by any of these maps, including for nonnegative integrals that may be infinite. [F6]

2.1 For finite compatible matrices, $|(AB)_{ij}|\leq(\sum_a|A_{ia}|^2)^{1/2}(\sum_a|B_{aj}|^2)^{1/2}$ by Cauchy–Schwarz. Summing over $i,j$ gives $\|AB\|_{\mathrm{ent}}\leq\|A^\dagger\|_{2,1}\|B\|_{2,1}$. Put $q(u)=\int_{\mathbb R}k(v-u)k(v)dv$. By $h(u-v)^\dagger=h(v-u)$, the matrix product in the convolution has entry norm at most $k(v-u)k(v)$. The convolution premise and the entrywise integral triangle inequality therefore give $\|C(u)\|_{\mathrm{ent}}\leq q(u)$ almost everywhere. Tonelli and the substitution $w=v-u$, with $v$ fixed, give $\int_{\mathbb R}q(u)du=\int_{\mathbb R}k(v)\int_{\mathbb R}k(w)dw\,dv=G^2<\infty$. Thus $q$ is measurable and finite almost everywhere; in particular the majorant also proves absolute convergence of the matrix convolution almost everywhere. [given, F1, F3, F4, F7, step 1.1, step 1.2]

3.1 Substitution $z=v+u$ gives $q(-u)=\int_{\mathbb R}k(z)k(z-u)dz=q(u)$. Hence reflection invariance identifies $\int_0^\infty u q(u)du$ with half of $\int_{\mathbb R}|u|q(u)du$, including when these integrals are infinite. By the almost-everywhere majorant, $\int_0^\infty u\|C(u)\|_{\mathrm{ent}}du\leq\frac12\int_{\mathbb R}|u|q(u)du$. [F4, step 1.2, step 2.1]

4.1 Apply Tonelli and, at each fixed $v$, substitute $w=v-u$ using step 1.2. Since $|v-w|\leq|v|+|w|$, this gives $\int_{\mathbb R}|u|q(u)du=\int_{\mathbb R}\int_{\mathbb R}|v-w|k(w)k(v)dw\,dv\leq HG+GH=2GH$. All integrands interchanged here are nonnegative and product-measurable; Tonelli factors the last two terms using the finite moments $G,H$. Together with step 3.1 this yields $\int_0^\infty u\|C(u)\|_{\mathrm{ent}}du\leq GH$. Multiplication by $4\gamma$ proves finiteness of $M$ and $M\leq4\gamma GH=\Gamma\tau$. [F1, F4, step 1.1, step 1.2, step 3.1] ∎
