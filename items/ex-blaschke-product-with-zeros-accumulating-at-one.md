---
id: ex-blaschke-product-with-zeros-accumulating-at-one
kind: example
title: "An infinite Blaschke product whose zeros accumulate at the boundary"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-blaschke-product, thm-blaschke-product-boundary-values-and-zeros, thm-hardy-zero-set-blaschke-condition, thm-p-series-rational, def-analytic-hardy-space-disc, lem-hardy-radial-means-are-monotone, thm-dominated-convergence, def-the-one-dimensional-torus-and-normalized-haar-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.8"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Lemma 5.19, printed pp. 36-37: convergence and boundary behaviour of an infinite Blaschke product; the exercises of §5.12 contain convergence computations of this shape."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §2"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 51-54: convergence of the product when the Blaschke sum converges."
---

## Example

Let $a_n:=1-\frac{1}{n^2}$ for $n\ge2$. Then
$\sum_{n\ge2}(1-|a_n|)=\sum_{n\ge2}\frac1{n^2}<\infty$, so $(a_n)$ is a
Blaschke sequence and the Blaschke product $B=\prod_{n\ge2}b_{a_n}$ converges
normally on $\mathbb D$ to a holomorphic function with $|B|\le1$, whose zeros
are exactly the points $1-1/n^2$, each simple, and whose boundary function is
unimodular $m$-almost everywhere. The value at the origin is
$$B(0)=\prod_{n\ge2}\Bigl(1-\frac1{n^2}\Bigr)=\lim_{N\to\infty}\frac{N+1}{2N}=\frac12 .$$
The zeros accumulate at $1\in\mathbb T$, so $B$ has no continuous extension to
$\overline{\mathbb D}$ and is not a finite product. The associated $H^2$ norm
is $\|B\|_{H^2}=1$, while the boundary function has modulus $1$ almost
everywhere.

## Facts & Assumptions

**Given:** The sequence $a_n=1-1/n^2$ ($n\ge2$), its Blaschke product $B=\prod_{n\ge2}b_{a_n}$, and the partial products $B_N=\prod_{n=2}^N b_{a_n}$.

[F1] A Blaschke sequence $\sum_n(1-|a_n|)<+\infty$ has a normally convergent Blaschke product $B$, holomorphic with $|B|\le1$, whose zeros are exactly the $a_n$ with multiplicity and whose boundary function satisfies $|B^*|=1$ $m$-almost everywhere; each $b_a$ has $b_a(0)=|a|$ ([[def-blaschke-product]], [[thm-blaschke-product-boundary-values-and-zeros]]).

[F2] For rational $p>0$ the $p$-series $\sum_{k\ge1}1/k^{p}$ converges if and only if $p>1$; in particular $\sum_{k\ge1}1/k^{2}$ converges at $p=2$, and deleting the first term preserves convergence ([[thm-p-series-rational]]).

[F3] If $|g_r|\le1$ for all $r$ and $g_r\to g_*$ $m$-almost everywhere as $r\uparrow1$, then $\int_{\mathbb T}g_r\,dm\to\int_{\mathbb T}g_*\,dm$; the radial means $\int_{\mathbb T}|g(r\zeta)|^2\,dm$ are nondecreasing in $r$ and their supremum is $\|g\|_{H^2}^2$ ([[thm-dominated-convergence]], [[lem-hardy-radial-means-are-monotone]], [[def-analytic-hardy-space-disc]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

## Verification

1.1 The sequence is Blaschke. Since $|a_n|=1-1/n^2$, one has $1-|a_n|=1/n^2$ and $\sum_{n\ge2}1/n^2<\infty$ by [F2]; by [F1] the product $B$ converges normally, is holomorphic with $|B|\le1$, has exactly the simple zeros $1-1/n^2$, and has $|B^*|=1$ $m$-almost everywhere. [given, F1, F2, algebra]

2.1 Value at the origin. By [F1], $B(0)=\prod_{n\ge2}|a_n|=\prod_{n\ge2}(1-\frac1{n^2})$, and the finite products telescope: using $1-\frac1{n^2}=\frac{(n-1)(n+1)}{n^2}$, $$\prod_{n=2}^N\Bigl(1-\frac1{n^2}\Bigr)=\frac{(N-1)!\cdot(N+1)!/2}{(N!)^2}=\frac{N+1}{2N}\longrightarrow\frac12 .$$ [step 1.1, F1, algebra]

2.2 No continuous extension. The zeros $a_n=1-1/n^2$ converge to $1\in\mathbb T$. If $B$ had a continuous extension to $\overline{\mathbb D}$, then along $a_n\to1$ one would get $|B(1)|=\lim_n|B(a_n)|=0$, while on the other hand the boundary values of the extension agree $m$-almost everywhere with $B^*$, so the continuous function $|B|$ restricted to $\mathbb T$ equals $1$ on a set of full measure, hence equals $1$ everywhere by continuity; at $\zeta=1$ this gives $|B(1)|=1$, a contradiction. Thus $B$ has no continuous extension to $\overline{\mathbb D}$; in particular $B$ is not a finite Blaschke product, since a finite product would extend continuously. [step 1.1, F1, algebra]

3.1 The $H^2$ norm. Since $|B|\le1$ and $B(r\zeta)\to B^*(\zeta)$ for $m$-almost every $\zeta$ (the nontangential limits of [F1] in particular give radial limits almost everywhere), [F3] gives $\int_{\mathbb T}|B(r\zeta)|^2\,dm(\zeta)\to\int_{\mathbb T}|B^*|^2\,dm=1$ as $r\uparrow1$. The radial means are nondecreasing in $r$ by [F3], so their supremum is the limit, that is, $\|B\|_{H^2}^2=1$ and hence $\|B\|_{H^2}=1$. [step 1.1, F3, algebra] ∎
