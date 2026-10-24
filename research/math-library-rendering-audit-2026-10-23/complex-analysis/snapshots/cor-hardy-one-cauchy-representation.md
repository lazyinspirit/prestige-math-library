---
id: cor-hardy-one-cauchy-representation
kind: corollary
title: "Cauchy representation of an $H^1$ function from its boundary values"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-complex-circle-measures-have-finite-total-variation-under-countable-choice, def-countable-choice, thm-fatou-boundary-theorem-analytic-hardy-spaces, lem-finite-complex-circle-measures-are-determined-by-fourier-coefficients, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation, thm-cauchy-integral-formula-circle, def-analytic-hardy-space-disc, def-the-one-dimensional-torus-and-normalized-haar-integral, def-poisson-integral-of-finite-boundary-measure]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-20.md"
      - "research/frontier-38-owner-30-alpha-batch-20-5a.md"
      - "research/frontier-38-owner-30-step5-hash-20-post-5a.json"
    content_sha256: "9144dc5684a95ad8c11d5ef7e185e1b6f9374595429551f225a03ff19de2209d"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.7 and §5.11"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Corollary 5.26 and the Cauchy representation, printed pp. 41-42: $f=P[f^*]$ and $f(z)=\\frac1{2\\pi i}\\oint\\frac{f^*(\\zeta)}{\\zeta-z}d\\zeta$ for $f\\in H^1$."
    - title: "L. Ryzhik, Stanford Math 215 Course Notes, Chapter 5"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF215-13/stanf215-notes.pdf"
      locator: "§5.4, consequences of Theorem 5.13: the analytic $h^1$ boundary measure is an $L^1$ density."
---

## Statement

Assume countable choice, as in the Hardy and circle conventions. Let $f\in H^1(\mathbb D)$ and let $\mu$ be the unique finite complex Borel
measure on $\mathbb T$ with $f=P[\mu]$.
Then $\mu\ll m$ and $\mu=f^*m$ for the boundary function $f^*$ of the Fatou
theorem, and for every $z\in\mathbb D$
$$f(z)=P[f^*](z)=\int_{\mathbb T}P(z,\zeta)f^*(\zeta)\,dm(\zeta)=\frac{1}{2\pi i}\oint_{\mathbb T}\frac{f^*(\zeta)}{\zeta-z}\,d\zeta .$$
Moreover $\|f\|_{H^1}=\|f^*\|_1=|\mu|(\mathbb T)$ and
$\|f_r-f^*\|_1\to0$ as $r\uparrow1$.

## Facts & Assumptions

**Given:** Countable choice and $f\in H^1(\mathbb D)$.

[F1] The CC analytic Hardy boundary theorem gives $f^*\in L^1$, $f=P[f^*]$, $\|f_r-f^*\|_1\to0$ and $\|f^*\|_1=\|f\|_{H^1}$. Its analytic H1 representing measure exists and is unique under CC. ([[thm-fatou-boundary-theorem-analytic-hardy-spaces]], [[def-analytic-hardy-space-disc]], [[def-countable-choice]])

[F2] The density measure $f^*m$ is countably additive by dominated convergence; its finite positive variation is supplied by the local CC circle-variation lemma, and the direct density formula gives total variation integral $\int|f^*|dm$, and finite complex circle measures with equal Poisson integrals are equal under CC. ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]], [[lem-complex-circle-measures-have-finite-total-variation-under-countable-choice]], [[lem-finite-complex-circle-measures-are-determined-by-fourier-coefficients]])

[F3] Cauchy's integral formula applies on every radius-r circle with |z|<r<1. The torus parametrization is $\zeta=e^{2\pi it}$ with $dm=dt$. ([[thm-cauchy-integral-formula-circle]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]])

[F4] The Poisson integral is the kernel integral against the boundary datum. L1 convergence and uniform convergence of bounded weights imply convergence of their integrals, by the estimate $|\int(v_rw_r-vw)dm|\le\|v_r-v\|_1\|w_r\|_\infty+\|v\|_1\|w_r-w\|_\infty$. ([[def-poisson-integral-of-finite-boundary-measure]])

## Proof

1.1 Apply [F1] and set $\mu=f^*m$. By [F2] it is a finite complex representing measure for f, and its total variation is $\|f^*\|_1=\|f\|_{H^1}$. Every other finite complex representing measure has the same Poisson integral, so [F2] proves it equals mu. Thus the unique measure in the Statement is exactly this absolutely continuous density measure, including mu zero when f zero. [F1, F2, given, construct, algebra]

2.1 By [F1] and [F4], $f=P[f^*]=\int P(z,\zeta)f^*(\zeta)dm$, and $\|f_r-f^*\|_1\to0$. Together with step 1.1 this gives the full Poisson, absolute-continuity, uniqueness and norm assertions under CC. [step 1.1, F1, F4, algebra]

3.1 The Cauchy formula. Fix $z\in\mathbb D$ and $r\in(|z|,1)$. The function $f$ is holomorphic on a neighbourhood of the closed disc of radius $r$, so [F3] gives $f(z)=\frac{1}{2\pi i}\oint_{|\zeta|=r}\frac{f(\zeta)}{\zeta-z}\,d\zeta$. Writing the circle integral in the torus parametrization, this equals $\int_{\mathbb T}\frac{r\zeta}{r\zeta-z}f(r\zeta)\,dm(\zeta)$ (the factor $r\zeta$ is $\frac{d\zeta}{2\pi i\,dm}$). As $r\uparrow1$, the weights $\frac{r\zeta}{r\zeta-z}$ converge uniformly on $\mathbb T$ to $\frac{\zeta}{\zeta-z}$ and are uniformly bounded for $r\ge(1+|z|)/2$, because $|r\zeta-z|\ge r-|z|\ge(1-|z|)/2>0$; together with $\|f_r-f^*\|_1\to0$ from step 2.1, [F4] gives $$f(z)=\int_{\mathbb T}\frac{\zeta}{\zeta-z}f^*(\zeta)\,dm(\zeta)=\frac{1}{2\pi i}\oint_{\mathbb T}\frac{f^*(\zeta)}{\zeta-z}\,d\zeta,$$ the last equality being the same parametrization at $r=1$. [step 2.1, F3, F4, algebra]

4.1 Assembly. Step 1.1 gives $\mu=f^*m$ with the norm identity, step 2.1 gives $f=P[f^*]=\int P(z,\zeta)f^*dm$ and the $L^1$ convergence of the radial functions, and step 3.1 gives the Cauchy representation of $f$ by its boundary values. [step 1.1, step 2.1, step 3.1] ∎
