---
id: thm-riesz-factorization-hardy-space
kind: theorem
title: "F. Riesz factorization of a Hardy-space function"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-analytic-hardy-space-disc, lem-hardy-radial-means-are-monotone, thm-hardy-zero-set-blaschke-condition, def-blaschke-product, thm-blaschke-product-boundary-values-and-zeros, thm-removable-singularity-characterizations, thm-algebra-of-complex-derivatives, thm-monotone-convergence-for-the-integral, def-complex-differentiability-holomorphic-and-entire]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §2"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "Blaschke products, printed pp. 53-54: Theorem 2.3, $f=Bg$ with $\\|g\\|_{H^p}=\\|f\\|_{H^p}$, via the maximum principle on $|z|=R$."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.8"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Corollary 5.20 (F. Riesz), printed p. 37: $f=Bg$ with $g$ zero-free and $\\|g\\|_p=\\|f\\|_p$."
---

## Statement

Let $0<p<\infty$, let $f\in H^p(\mathbb D)$ with $f\not\equiv0$, let
$(a_n)_{n\ge1}$ be its zero sequence repeated with multiplicity and let $B$ be
the associated Blaschke product. Then $g:=f/B$ extends holomorphically to
$\mathbb D$ (removable singularities at the $a_n$), $g$ has no zero in
$\mathbb D$, $|f(z)|\le|g(z)|$ for every $z\in\mathbb D$, and
$$g\in H^p(\mathbb D),\qquad \|g\|_{H^p}=\|f\|_{H^p}.$$

## Facts & Assumptions

**Given:** A function $f\in H^p(\mathbb D)$ with $0<p<\infty$ and $f\not\equiv0$, its zero sequence $(a_n)$ with multiplicity, the Blaschke product $B$, the partial products $B_N=\prod_{n\le N}b_{a_n}$ and the quotients $g_N:=f/B_N$, together with $g:=f/B$ where it is defined.

[L1] The classes $H^p(\mathbb D)$ and their (quasi-)norms are defined by the suprema of radial $L^p$ means, and $\|f_r\|_{L^p}\le\|f\|_{H^p}$ for every $0\le r<1$; the radial means of a holomorphic function are nondecreasing in the radius ([[def-analytic-hardy-space-disc]], [[lem-hardy-radial-means-are-monotone]]).

[L2] The zero sequence of a nonzero $H^p$ function satisfies the Blaschke condition $\sum_n(1-|a_n|)<+\infty$; hence $B$ is a Blaschke product with $|B|\le1$ and $|b_a|\le1$, and each finite product $B_N$ is holomorphic on a neighbourhood of the closed unit disc with $|B_N(\zeta)|=1$ for every $\zeta\in\mathbb T$ ([[thm-hardy-zero-set-blaschke-condition]], [[def-blaschke-product]], [[thm-blaschke-product-boundary-values-and-zeros]]).

[L3] At a zero $a$ occurring $m\ge1$ times in the zero sequence, $f$ has a zero of order at least $m$ and $B$ a zero of exactly order $m$, so $g$ and each $g_N$ are holomorphic off the zero set and bounded near each $a_n$; a bounded holomorphic function on a punctured disc extends holomorphically across the puncture ([[thm-removable-singularity-characterizations]], [[thm-algebra-of-complex-derivatives]], [[def-complex-differentiability-holomorphic-and-entire]]).

[L4] $|B_N(z)|\le1$ on $\mathbb D$, so $|g_N|=|f|/|B_N|\ge|f|$; the sequence $(|g_N|)_{N\ge1}$ is nondecreasing at each point and converges to $|g|$ ([[def-blaschke-product]]).

[L5] Increasing sequences of nonnegative measurable functions may be integrated to the limit: if $0\le u_1\le u_2\le\cdots$ and $u_N\uparrow u$ pointwise, then $\int u_N\,dm\uparrow\int u\,dm$ ([[thm-monotone-convergence-for-the-integral]]).



## Proof

**Proof technique:** direct.

1.1 The Blaschke condition. By the $H^p$ clause of [L2] applied to $f\in H^p$, the liminf hypothesis holds and $\sum_n(1-|a_n|)<+\infty$; hence $B$ is a well-defined Blaschke product with $|B|\le1$, each $B_N$ extends to the closed disc with $|B_N|=1$ on $\mathbb T$, and each $g_N=f/B_N$ is holomorphic on $\mathbb D$ by [L3]. [given, L1, L2, L3]

1.2 Bounding the $N$-th quotient. Fix $0<r<R<1$, $0<\varepsilon<1$ and $N$. By [L1] applied to the holomorphic function $g_N$, $$\int_{\mathbb T}|g_N(r\zeta)|^p\,dm(\zeta)\le\int_{\mathbb T}|g_N(R\zeta)|^p\,dm(\zeta)=\int_{\mathbb T}\frac{|f(R\zeta)|^p}{|B_N(R\zeta)|^p}\,dm(\zeta).$$ Since $B_N$ is continuous on $\overline{\mathbb D}$ with $|B_N|=1$ on $\mathbb T$ by [L2], there is $\rho<1$ with $|B_N(R\zeta)|\ge1-\varepsilon$ for all $\zeta\in\mathbb T$ and all $R\in(\rho,1)$; for such $R$, using [L1] again, $$\int_{\mathbb T}|g_N(r\zeta)|^p\,dm(\zeta)\le(1-\varepsilon)^{-p}\int_{\mathbb T}|f(R\zeta)|^p\,dm(\zeta)\le(1-\varepsilon)^{-p}\|f\|_{H^p}^p .$$ [given, L1, L2, algebra]

2.1 The quotient. The function $g=f/B$ is holomorphic off the zeros of $B$; at each $a$ occurring $m$ times, $g$ is bounded near $a$ and hence extends holomorphically by [L3], and $g(a)\ne0$ because the order of the zero of $f$ at $a$ equals the multiplicity $m$ with which $a$ is listed. Thus $g$ is holomorphic and zero-free on $\mathbb D$, and $|f|\le|g|$ because $|B|\le1$. [step 1.1, L2, L3, L4, algebra]

3.1 Passing to the limits in the correct order. Fix $N$ and $r<1$. In step 1.2 choose $R$ close enough to $1$ for this $N$ and $\varepsilon$, then let $\varepsilon\downarrow0$. This gives $\int|g_N(r\zeta)|^pdm\le\|f\|_{H^p}^p$, independently of $N$. The identities $g_N=b_{a_{N+1}}g_{N+1}$ and $|b_a|\le1$ show that $|g_N|^p$ increases with $N$; off the zeros of $B$, $g_N=f/B_N\to f/B=g$. A fixed circle contains only finitely many zeros, a null set, so monotone convergence [L5] gives $\int|g(r\zeta)|^pdm\le\|f\|_{H^p}^p$. Taking the supremum over $r$ yields $\|g\|_{H^p}\le\|f\|_{H^p}$. For finite or empty zero lists, the products stabilize, and the same argument gives $B=1$, $g=f$ when the list is empty. [step 1.2, step 2.1, L1, L4, L5, algebra]

4.1 Equality and assembly. Since $|f|\le|g|$ pointwise by step 2.1, the radial means satisfy $\int_{\mathbb T}|f(r\zeta)|^p\,dm\le\int_{\mathbb T}|g(r\zeta)|^p\,dm$ for every $r$, so $\|f\|_{H^p}\le\|g\|_{H^p}$ by [L1]; combined with step 3.1 this gives $\|g\|_{H^p}=\|f\|_{H^p}$ with $g\in H^p(\mathbb D)$. Steps 1.1, 2.1 and 3.1 together prove all the asserted clauses. [step 1.1, step 2.1, step 3.1, L1] ∎
