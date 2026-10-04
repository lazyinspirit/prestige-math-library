---
id: thm-f-and-m-riesz-theorem
kind: theorem
title: "The F. and M. Riesz theorem"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, def-analytic-hardy-space-disc, thm-fatou-boundary-theorem-analytic-hardy-spaces, lem-analytic-poisson-integrals-have-vanishing-negative-coefficients, lem-complex-circle-measures-have-finite-total-variation-under-countable-choice, lem-finite-complex-circle-measures-are-determined-by-fourier-coefficients, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation, def-fourier-coefficients-and-trigonometric-polynomials]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "L. Ryzhik, Stanford Math 215 Course Notes, Chapter 5"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF215-13/stanf215-notes.pdf"
      locator: "§5.4, Theorem 5.13: the F. and M. Riesz theorem for measures with vanishing negative Fourier coefficients."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §3, Theorem 3.6"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed p. 59: a finite complex measure whose Poisson integral is analytic on the disc has an absolutely continuous representative."
---

## Statement

Assume countable choice, as in the circle and Hardy conventions. Let $\mu$ be a finite complex Borel measure on $\mathbb T$ whose Fourier
coefficients $\widehat\mu(n)=\int_{\mathbb T}\zeta^{-n}\,d\mu(\zeta)$ vanish
for every $n<0$. Then $\mu$ is absolutely continuous with respect to $m$. More
precisely, $f:=P[\mu]$ is holomorphic on $\mathbb D$ and lies in
$H^1(\mathbb D)$, and if $f^*$ is the boundary function of the Fatou theorem
for analytic $H^1$ then $\mu=f^*m$; consequently
$|\mu|(\mathbb T)=\|f^*\|_1=\|f\|_{H^1}$.

## Facts & Assumptions

**Given:** Countable choice and a finite complex Borel measure $\mu$ on the circle with $\widehat\mu(n)=0$ for every n<0; put $f=P[\mu]$.

[F1] The analytic Poisson coefficient criterion gives f holomorphic and in H1, with $\|f\|_{H^1}\le|\mu|(\mathbb T)$. Under CC complex circle measures have finite regular total variation. ([[lem-analytic-poisson-integrals-have-vanishing-negative-coefficients]], [[lem-complex-circle-measures-have-finite-total-variation-under-countable-choice]], [[def-countable-choice]])

[F2] The CC analytic Hardy boundary theorem gives $f^*\in L^1$, finite nontangential limits, $\|f_r-f^*\|_1\to0$ and $\|f^*\|_1=\|f\|_{H^1}$. ([[thm-fatou-boundary-theorem-analytic-hardy-spaces]], [[def-analytic-hardy-space-disc]])

[F3] The circle Fourier coefficients of $(P[\mu])_r$ are $r^{|n|}\widehat\mu(n)$, and equality of all Fourier coefficients determines a complex circle measure under CC. Fourier coefficients of L1 functions are bounded linear integrals. ([[lem-finite-complex-circle-measures-are-determined-by-fourier-coefficients]], [[def-fourier-coefficients-and-trigonometric-polynomials]])

[F4] An L1 density h defines a complex measure h m by dominated convergence. Its known finite positive variation is supplied by the local CC circle-variation lemma; the direct unit-bounded simple-integral and phase-approximation argument gives $|h m|(E)=\int_E|h|dm$. ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]], [[lem-complex-circle-measures-have-finite-total-variation-under-countable-choice]])

## Proof

1.1 By [F1], $f=P[\mu]$ is holomorphic and in H1. By [F2] it has the $L^1$ boundary function $f^*$ with radial $L^1$ convergence and the exact H1 norm. This covers f zero as well. [F1, F2, given]

2.1 Let $\nu=f^*m$, a finite complex measure by [F4]. For each integer n, [F3] gives $\widehat{f_r}(n)=r^{|n|}\widehat\mu(n)$. $L^1$ convergence in step 1.1 implies $\widehat{f_r}(n)\to\widehat{f^*}(n)$, since the character has modulus one. Letting r increase to one yields $\widehat\nu(n)=\widehat{f^*}(n)=\widehat\mu(n)$. Fourier uniqueness [F3] gives $\mu=\nu=f^*m$, so $\mu\ll m$. No general h1 measure-existence theorem is invoked; the measure mu was already given. [step 1.1, F3, F4, construct, algebra]

3.1 By [F4] and step 2.1, $|\mu|(\mathbb T)=\int|f^*|dm=\|f^*\|_1$. Step 1.1 gives $\|f^*\|_1=\|f\|_{H^1}$, proving the full norm identity. Holomorphy, boundary representation, absolute continuity and all stated equalities have now been established under CC. [step 1.1, step 2.1, F2, F4, algebra] ∎
