---
id: lem-outer-function-properties
kind: lemma
title: "Properties of outer functions"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, def-nevanlinna-class-on-the-disc, def-inner-singular-inner-and-outer-functions, def-analytic-hardy-space-disc, def-poisson-integral-of-finite-boundary-measure, def-poisson-kernel-on-the-disc, lem-poisson-kernel-properties-on-the-disc, thm-jensen-inequality-for-expectation, thm-jensens-integral-inequality, thm-complex-power-series-converge-locally-uniformly, thm-holomorphic-if-and-only-if-analytic, thm-fatou-nontangential-boundary-theorem-harmonic, thm-nevanlinna-boundary-values-and-log-integrability, thm-complex-holder-minkowski-and-the-quotient-norm, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-local-maximum-modulus-principle, def-the-one-dimensional-torus-and-normalized-haar-integral, def-complex-exponential, lem-complex-conjugation-and-modulus-laws, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §4"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "Theorem 4.4 and (4.5), printed pp. 63-65: outer functions $e^{u+iv}$ with $u=P[\\log h]$, determined by $h$ up to a unimodular constant."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.10, §6.2"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Theorem 5.27 and the structure of outer functions, printed pp. 43-47 and 60-64: $[f]$ and its modulus."
---

## Statement

Let $0<p\le\infty$, let $h\ge0$ be measurable on $\mathbb T$ with
$\log h\in L^1(\mathbb T,m)$ and $h\in L^p(\mathbb T,m)$, and let $[h]$ be the
outer function of [[def-inner-singular-inner-and-outer-functions]]. Then:

(i) $[h]$ is holomorphic and zero-free on $\mathbb D$ with
$[h](0)=\exp\bigl(\int\log h\,dm\bigr)>0$, and for $p<\infty$
$$|[h](z)|^p\le P[h^p](z)\qquad(z\in\mathbb D);$$ hence $[h]\in H^p(\mathbb D)$
with $\|[h]\|_{H^p}\le\|h\|_p$, while for $p=\infty$ one has
$|[h]|\le\|h\|_\infty$ and $[h]\in H^\infty(\mathbb D)$.

(ii) $|[h]^*(\zeta)|=h(\zeta)$ for $m$-almost every $\zeta\in\mathbb T$.

(iii) If $h_1=h_2$ $m$-almost everywhere then $[h_1]=[h_2]$.

(iv) If $g\in H^p(\mathbb D)$ satisfies $g\not\equiv0$, $|g^*|=h$
$m$-almost everywhere and the outer equality
$\log|g(z)|=P[\log h](z)$ for all $z\in\mathbb D$, then
$g=e^{i\gamma}[h]$ for some $\gamma\in\mathbb R$; in particular the outer
function with prescribed boundary modulus is determined up to a unimodular
constant.

## Facts & Assumptions

**Given:** Countable choice and a nonnegative measurable $h$ on $\mathbb T$ with $\log h\in L^1(\mathbb T,m)$ and $h\in L^p(\mathbb T,m)$, and the outer function $[h]=\exp L$, $L(z):=\int_{\mathbb T}K(z,\zeta)\log h(\zeta)\,dm(\zeta)$.

[L1] $K(z,\zeta)=(\zeta+z)/(\zeta-z)$ satisfies $\operatorname{Re}K(z,\zeta)=P(z,\zeta)$, the Poisson kernel; $P(z,\cdot)$ is a probability density on $\mathbb T$ with $\int P(z,\zeta)dm(\zeta)=1$, and for fixed $z$ the integrals $\int|K(z,\zeta)|\,|f(\zeta)|dm(\zeta)$ are finite for $f\in L^1$ with $\int|K(z,\zeta)||f|dm\le\frac{1+|z|}{1-|z|}\|f\|_1$ ([[def-inner-singular-inner-and-outer-functions]], [[def-poisson-kernel-on-the-disc]], [[lem-poisson-kernel-properties-on-the-disc]], [[def-poisson-integral-of-finite-boundary-measure]], [[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[L2] The expansion $K(z,\zeta)=1+2\sum_{n\ge1}z^n\zeta^{-n}$ converges absolutely and locally uniformly on $|z|<1$, $|\zeta|=1$, so with $c_n:=\int\zeta^{-n}\log h\,dm$ the series $L(z)=\int\log h\,dm+2\sum_{n\ge1}c_nz^n$ has $|c_n|\le\|\log h\|_1$ and converges locally uniformly; its sum is holomorphic by the published power-series theorem, and $\exp$ of a holomorphic function is holomorphic and never zero, with $|e^w|=e^{\operatorname{Re}w}$ ([[thm-complex-power-series-converge-locally-uniformly]], [[thm-holomorphic-if-and-only-if-analytic]], [[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L3] Jensen's inequality for the expectation with respect to the probability measure $P(z,\zeta)dm(\zeta)$ and the convex exponential: $e^{\int P(z,\zeta)\,t(\zeta)\,dm(\zeta)}\le\int P(z,\zeta)e^{t(\zeta)}\,dm(\zeta)$ for real $t$ with both $t$ and $e^t$ integrable against this probability measure ([[thm-jensen-inequality-for-expectation]], [[thm-jensens-integral-inequality]]).

[L4] Tonelli's theorem for nonnegative and Fubini's theorem for $L^1$ functions on the product of the probability space $(\mathbb T,m)$ with itself, and the translation invariance of $m$ making $\int P(r\zeta,\eta)\,dm(\zeta)=1$ for every fixed $\eta$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[lem-poisson-kernel-properties-on-the-disc]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L5] Under countable choice the Poisson integral of an L1 datum converges to that datum nontangentially almost everywhere. A nonzero Hardy function is in N and therefore has finite nontangential boundary limits under CC. ([[thm-fatou-nontangential-boundary-theorem-harmonic]], [[thm-nevanlinna-boundary-values-and-log-integrability]], [[def-nevanlinna-class-on-the-disc]], [[def-countable-choice]])

[L6] A holomorphic function of constant modulus on a domain is constant (maximum principle), and $|uv|=|u||v|$ ([[thm-local-maximum-modulus-principle]], [[lem-complex-conjugation-and-modulus-laws]]).



## Proof

**Proof technique:** direct.

1.1 Holomorphy, zero-freeness and the value at the origin. By [L2] the function $L$ is holomorphic on $\mathbb D$ with $L(0)=\int\log h\,dm\in\mathbb R$, so $[h]=e^{L}$ is holomorphic and zero-free with $[h](0)=e^{\int\log h\,dm}>0$ (finite because $\log h\in L^1$). [given, L2, algebra]

2.1 The pointwise bound. Let $p<\infty$ and fix $z\in\mathbb D$. Since $\operatorname{Re}L(z)=\int P(z,\zeta)\log h(\zeta)\,dm(\zeta)$ by [L1], put $t:=p\log h$, choosing a finite real representative on the null exceptional set. Both $t$ and $e^t=h^p$ are integrable against $P(z,\zeta)dm(\zeta)$ because $\log h\in L^1$, $h\in L^p$, and the fixed kernel is bounded by [L1]. Jensen's inequality [L3] therefore gives $$|[h](z)|^p=e^{p\operatorname{Re}L(z)}=e^{\int P(z,\zeta)\,p\log h(\zeta)\,dm(\zeta)}\le\int_{\mathbb T}P(z,\zeta)h(\zeta)^p\,dm(\zeta)=P[h^p](z).$$ For $p=\infty$, $\log h\le\log\|h\|_\infty$ $m$-almost everywhere (with $\|h\|_\infty>0$ because $\log h\in L^1$), so $\operatorname{Re}L(z)=\int P\log h\,dm\le\log\|h\|_\infty$ and $|[h](z)|\le\|h\|_\infty$. [step 1.1, L1, L2, L3, algebra]

2.2 Uniqueness up to a unimodular constant. Assume $g\in H^p$, $g\not\equiv0$, $|g^*|=h$ a.e. and $\log|g(z)|=P[\log h](z)$ for all $z$. Then $\log|g|=\log|[h]|$ on $\mathbb D$ by step 1.1 and [L1], so the holomorphic zero-free function $g/[h]$ has constant modulus $1$; by [L6] it is a constant of modulus one, that is, $g=e^{i\gamma}[h]$ for some $\gamma\in\mathbb R$. [step 1.1, L6, algebra]

3.1 Membership in $H^p$. For $p<\infty$ and $0<r<1$, integrating the bound of step 2.1 over the circle and applying Tonelli's theorem [L4] to the nonnegative integrand gives $$\int_{\mathbb T}|[h](r\zeta)|^p\,dm(\zeta)\le\int_{\mathbb T}\Bigl(\int_{\mathbb T}P(r\zeta,\eta)\,dm(\zeta)\Bigr)h(\eta)^p\,dm(\eta)=\|h\|_p^p,$$ because the inner integral equals the unit mass of the kernel by translation invariance. Taking the supremum over $r$ gives $[h]\in H^p(\mathbb D)$ with $\|[h]\|_{H^p}\le\|h\|_p$; for $p=\infty$ step 2.1 gives $[h]\in H^\infty$ with $\|[h]\|_\infty\le\|h\|_\infty$. [step 2.1, L4, algebra]

4.1 Boundary modulus. Since $\log|[h]|=\operatorname{Re}L=P[\log h]$ by [L1], the harmonic Fatou theorem for the $L^1$ datum $\log h$ gives $\log|[h](z)|\to\log h(\zeta)$ as $z\to\zeta$ within every cone, at $m$-almost every $\zeta$. By step 3.1, $[h]\in H^p$, so by [L5] it has nontangential limits $[h]^*$ $m$-almost everywhere; at every point where both statements hold, taking moduli gives $|[h]^*(\zeta)|=h(\zeta)$. This proves (ii), and (iii) is immediate from the definition of $[h]$ as an integral against $dm$. [step 3.1, L1, L5, algebra]

5.1 Assembly. Steps 1.1, 2.1 and 3.1 give (i), step 4.1 gives (ii) and (iii), and step 2.2 gives (iv). All four clauses are proved under the stated hypotheses. [step 1.1, step 3.1, step 4.1, step 2.2] ∎
