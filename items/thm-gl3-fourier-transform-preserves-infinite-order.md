---
dependency_level: 2
id: thm-gl3-fourier-transform-preserves-infinite-order
kind: theorem
title: "Fourier Transform of a Distribution Vanishing to Infinite Order"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension
  - lem-gl3-canonical-extension-is-unique
  - lem-gl3-tempered-distribution-has-polynomial-growth-continuous-primitive
  - lem-gl3-compact-flat-distribution-normal-forms
  - thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions
  - thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - def-pullback-of-a-distribution-by-a-diffeomorphism
  - lem-test-function-cutoffs-and-euclidean-localization
  - def-countable-choice
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Distributions and Analytic Continuation of Dirichlet Series, Theorem 3.19 and its proof"
      url: "https://arxiv.org/pdf/math/0403030v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Assume Countable Choice. Let $\mathcal S(\mathbb R)$ be the Schwartz space and $\mathcal S'(\mathbb R)$ its continuous dual. For $f\in\mathcal S(\mathbb R)$ define $\widehat f(\xi)=\int_{\mathbb R}f(x)e(-x\xi)\,dx$, where $e(t)=\exp(2\pi i t)$; for $\sigma\in\mathcal S'(\mathbb R)$ define $\langle\widehat\sigma,f\rangle=\langle\sigma,\widehat f\rangle$. If $\sigma$ vanishes to order $k\geq0$ at $0$, then $\widehat\sigma$ has an extension to a distribution on $\mathbb R\cup\{\infty\}$ that vanishes to order $k$ at $\infty$, where vanishing at infinity is measured in the coordinate $u=1/\xi$. In particular, if $\sigma$ vanishes to infinite order at $0$, then $\widehat\sigma$ has a canonical extension across $\infty$.

## Statement references

[Miller and Schmid, *Distributions and Analytic Continuation of Dirichlet Series*, Theorem 3.19](https://arxiv.org/pdf/math/0403030v1)

## Facts & Assumptions

**Given:** Countable Choice and the distribution and Fourier conventions in the statement.

[F1] [[lem-gl3-tempered-distribution-has-polynomial-growth-continuous-primitive]] gives $T=D^\ell F$ with continuous polynomial-growth $F$, chosen zero near $0$ when $T$ vanishes there.

[F2] [[lem-gl3-compact-flat-distribution-normal-forms]] gives $T=\sum_{j=0}^mD^j(x^{k+j}h_j)$ for compactly supported order-$k$ flat distributions, with bounded compactly supported $h_j$. Smooth multiplication preserves that vanishing order.

[F3] [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]] gives $\mathcal F(D^jT)=(2\pi i\xi)^j\widehat T$ and $\mathcal F(x^pT)=(-1/(2\pi i))^pD^p\widehat T$. [[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]] and [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]] identify the Fourier transform of an integrable function with its bounded continuous integral transform. These uses assume [[def-countable-choice|Countable Choice]].

[F4] [[def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension]] defines the order-$r$ forms $u^r\sum_j u^jD^jf_j$ with bounded coefficients. [[lem-gl3-canonical-extension-is-unique]] makes extensions agreeing off $0$ and vanishing to a fixed positive order identical. [[lem-test-function-cutoffs-and-euclidean-localization]] supplies smooth cutoffs.

[F5] [[def-pullback-of-a-distribution-by-a-diffeomorphism]] defines the reciprocal pullback. On the punctured line it satisfies $(D_xT)(1/u)=-u^2D_u(T(1/u))$. Indeed the two sides paired against a test $\psi$ both equal $\langle T,2x^{-3}\psi(1/x)+x^{-4}\psi'(1/x)\rangle$; this is the direct distributional derivative and Jacobian calculation. Iteration gives the higher-order chain rule used below.

## Proof

**Given:** $\sigma\in\mathcal S'(\mathbb R)$ vanishing to order $k\ge0$ at $0$.

1.1 Choose $\phi\in C_c^\infty(\mathbb R)$ equal to one near $0$. Write $\sigma=\sigma_c+\sigma_f$, where $\sigma_c=\phi\sigma$ has compact support and vanishes to order $k$ by [F2], and $\sigma_f=(1-\phi)\sigma$ vanishes on an interval around $0$. Both are tempered: the product rule bounds every Schwartz seminorm of $\phi f$ or $(1-\phi)f$ by finitely many seminorms of $f$, so transposition preserves tempered continuity. [F2, F4, choose, algebra]

2.1 By [F1], $\sigma_f=D^\ell F$ with $F$ continuous, zero near $0$, and $|F(x)|\le C(1+|x|)^M$. For any integer $p>M+2$, put $H_p(x)=x^{-p}F(x)$ off $0$, extended as zero near $0$. It is continuous and integrable, and $F=x^pH_p$. Its Fourier transform is bounded and continuous by [F3]. Hence $G_p(u)=\widehat H_p(1/u)$ is bounded off $0$ and defines a locally bounded regular distribution after any value is assigned at $0$. [F1, F3, step 1.1, choose, algebra]

3.1 By [F3] and [F5], on $u\ne0$ one has $\widehat\sigma_f(1/u)=(-1)^p(2\pi i)^{\ell-p}u^{-\ell}(-u^2D_u)^pG_p(u)$. Induction gives $(-u^2D_u)^p=\sum_{j=1}^p b_{p,j}u^{p+j}D_u^j$ with constant coefficients: applying $-u^2D_u$ to one monomial increases the exponent and derivative order in exactly this form. The resulting expression is $u^{p-\ell}\sum_j b'_{p,j}u^jD_u^jG_p$, so it extends across $0$ and vanishes to order $p-\ell$. Choose $p$ also larger than $\ell+1$. The extensions for different such $p$ agree off $0$ and have positive vanishing order; higher order implies lower order by a finite triangular identity: for $d\ge0$, $u^iD^i(u^df)=\sum_{j\le i}\binom ij(d)_{i-j}u^{d+j}D^jf$ has diagonal one, so inversion moves the excess power $u^d$ into bounded coefficients. Thus every such extension vanishes also to order one. Uniqueness in [F4] makes them identical. Since $p$ is arbitrarily large, this common extension vanishes to infinite order. [F2, F3, F4, F5, step 2.1, algebra]

4.1 By [F2], $\sigma_c=\sum_{j=0}^mD^j(x^{k+j}h_j)$ with bounded compactly supported $h_j$. Each $h_j$ is integrable, so $G_j(u)=\widehat h_j(1/u)$ is bounded off $0$ by [F3] and is locally bounded after assigning any value at $0$. Applying [F3] and [F5] gives $\widehat\sigma_c(1/u)=\sum_j(-1)^{k+j}(2\pi i)^{-k}u^{-j}(-u^2D_u)^{k+j}G_j(u)$ on $u\ne0$. The operator $u^{-j}(-u^2D_u)^{k+j}$ is a constant linear combination of $u^{k+i}D_u^i$, by the same induction as step 3.1; when $k=j=0$ it is the identity. Thus this formula defines an extension across $0$ vanishing to order $k$, including $k=0$. [F2, F3, F4, F5, step 1.1, step 3.1, algebra]

5.1 Add the extensions from steps 3.1 and 4.1 in the infinity coordinate and join them to the known Fourier distribution on the finite line. Concretely use a smooth cutoff supported in the infinity chart and equal to one near infinity; its complementary cutoff multiplies the original distribution in the finite chart, and the overlap equality makes their sum well defined. This gives the required global distribution on $\mathbb R\cup\{\infty\}$ with order-$k$ vanishing there. [F4, step 3.1, step 4.1, construct, algebra]

6.1 If $\sigma$ vanishes to every order at $0$, perform the construction for each $k\ge1$. Fix the extension for $k=1$. For each other $k$ the constructed extension agrees with it off infinity and also vanishes to order one, so uniqueness makes it the same extension. That fixed extension therefore vanishes to all orders, and is canonical. No simultaneous selection of an infinite family is required. This proves the full conclusion under the explicit Countable Choice assumption used by the Fourier interfaces. [F3, F4, step 5.1, algebra] ∎
