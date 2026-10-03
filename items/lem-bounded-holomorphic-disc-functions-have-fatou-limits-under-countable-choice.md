---
id: lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice
kind: lemma
title: "Bounded holomorphic disc functions have Poisson boundary data and Fatou limits under countable choice"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-trigonometric-characters-are-orthonormal, lem-poisson-kernel-properties-on-the-disc, def-countable-choice, thm-taylor-expansion-holomorphic-function, thm-complex-power-series-converge-locally-uniformly, thm-parseval-identity-for-fourier-series, thm-riesz-fischer-for-fourier-coefficients, def-fourier-coefficients-and-trigonometric-polynomials, def-poisson-kernel-on-the-disc, def-poisson-integral-of-finite-boundary-measure, thm-fatou-nontangential-boundary-theorem-harmonic, thm-complex-holder-minkowski-and-the-quotient-norm, def-the-one-dimensional-torus-and-normalized-haar-integral]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, ChapterII Section3 Theorem3.1 (bounded case); independent Taylor-Parseval proof using earlier Fourier Riesz-Fischer"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
---

## Statement

Assume countable choice. Let $f$ be bounded and holomorphic on $\mathbb D$, and set $M=\sup_{z\in\mathbb D}|f(z)|$. Then there is a unique $\varphi\in L^\infty(\mathbb T,m)$ with $f=P[\varphi]$. It satisfies $\|\varphi\|_\infty=M$, and $f$ has nontangential limit $\varphi(\zeta)$ for almost every $\zeta$ within every cone $\Gamma_A(\zeta)$, $A>1$. The zero function is allowed.

## Facts & Assumptions

**Given:** Countable choice, bounded holomorphic $f$, and its finite bound $M$.

[F1] A holomorphic disc function has its Taylor series $f(z)=\sum_{n\ge0}c_nz^n$, converging uniformly on every smaller closed disc. Fourier coefficients are defined by integrating against the circle characters. ([[thm-taylor-expansion-holomorphic-function]], [[thm-complex-power-series-converge-locally-uniformly]], [[def-fourier-coefficients-and-trigonometric-polynomials]], [[lem-trigonometric-characters-are-orthonormal]])

[F2] Under countable choice, Parseval identifies the squared $L^2$ norm with the sum of the squared Fourier coefficients, and every square-summable bilateral coefficient sequence comes from a unique $L^2$ class. ([[thm-parseval-identity-for-fourier-series]], [[thm-riesz-fischer-for-fourier-coefficients]], [[def-countable-choice]])

[F3] Haar measure is a probability measure; Holder gives $L^2\subseteq L^1$. The Poisson kernel is $(1-|z|^2)/|\zeta-z|^2$, and $P[\varphi](z)=\int P(z,\zeta)\varphi(\zeta)\,dm(\zeta)$. For any $L^1$ datum its Poisson integral converges nontangentially almost everywhere to that datum under countable choice. ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[thm-complex-holder-minkowski-and-the-quotient-norm]], [[def-poisson-kernel-on-the-disc]], [[lem-poisson-kernel-properties-on-the-disc]], [[def-poisson-integral-of-finite-boundary-measure]], [[thm-fatou-nontangential-boundary-theorem-harmonic]])

## Proof

1.1 For $0<r<1$, [F1] identifies the Fourier coefficients of $f_r$ as $c_nr^n$ for $n\ge0$ and zero for $n<0$, by uniform termwise integration and character orthogonality. By [F2], for each $N$, $$\sum_{n=0}^N|c_n|^2r^{2n}\le\int_{\mathbb T}|f(r\zeta)|^2\,dm\le M^2.$$ Let $r\uparrow1$ at this fixed finite $N$, then take the supremum in $N$: $\sum_{n\ge0}|c_n|^2\le M^2$. Riesz-Fischer in [F2] gives a unique $\varphi\in L^2$ with coefficients $c_n$ for $n\ge0$ and zero for $n<0$. [F1, F2, F3, given, construct, algebra]

2.1 This datum is in $L^1$ by [F3]. The geometric identity, for $|z|<1$ and $|\zeta|=1$, gives $$P(z,\zeta)=1+\sum_{n\ge1}\bigl(z^n\zeta^{-n}+\overline{z}^n\zeta^n\bigr).$$ The series converges absolutely uniformly in $\zeta$ at each fixed $z$, with total absolute bound $1+2\sum_{n\ge1}|z|^n<\infty$. Its integral against $\varphi$ therefore converges termwise, since the error is bounded by its uniform norm times $\|\varphi\|_1$. Using its prescribed Fourier coefficients yields $P[\varphi](z)=\sum_{n\ge0}c_nz^n=f(z)$. [F1, F3, step 1.1, algebra]

3.1 By [F3], $f=P[\varphi]$ has the asserted nontangential limits. Since $|f(z)|\le M$, passing to these limits gives $|\varphi|\le M$ almost everywhere, so $\varphi\in L^\infty$. Conversely positivity and unit mass of the kernel give $|f(z)|\le\|\varphi\|_\infty$, hence $M=\|\varphi\|_\infty$. If another bounded datum $\psi$ has $P[\psi]=f$, its nontangential limits are $\psi$ by [F3]; the same limits give $\psi=\varphi$ almost everywhere. If $M=0$ then $f=0$ and every coefficient and the unique datum are zero, so all claims remain valid. Only countable choice, in [F2] and [F3], has been used. [F3, step 2.1, algebra] ∎
