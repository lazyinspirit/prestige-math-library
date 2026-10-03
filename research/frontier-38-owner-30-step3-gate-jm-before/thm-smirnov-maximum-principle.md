---
id: thm-smirnov-maximum-principle
kind: theorem
title: "A maximum principle for the Smirnov class: $N^+\\cap L^p=H^p$"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-smirnov-class-on-the-disc, thm-nevanlinna-boundary-values-and-log-integrability, thm-fatou-boundary-theorem-analytic-hardy-spaces, thm-jensen-inequality-for-expectation, def-poisson-integral-of-finite-boundary-measure, thm-fatou-lemma, def-analytic-hardy-space-disc, lem-hardy-radial-means-are-monotone, def-countable-choice, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-inner-singular-inner-and-outer-functions, thm-zero-free-inner-functions-are-singular-inner]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §5"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 69-70: $N^+\\cap L^p=H^p$ with equality of norms and the remark that the analogue for $N$ fails."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §6.3"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "The Nevanlinna (N) and Smirnov (N+) classes, printed pp. 64-69: the maximum principle for $N^+$ and the counterexample $1/S_\\mu$ for $N$."
---

## Statement

Let $0<p\le\infty$ and let $f\in N^+(\mathbb D)$ with boundary function
$f^*$ (as in [[thm-nevanlinna-boundary-values-and-log-integrability]]). If
$f^*\in L^p(\mathbb T,m)$ then $f\in H^p(\mathbb D)$ and
$$\|f\|_{H^p}=\|f^*\|_p\quad(0<p<\infty),\qquad \|f\|_\infty=\|f^*\|_\infty.$$
Consequently a function of $N^+(\mathbb D)$ lies in $H^p(\mathbb D)$ exactly
when its boundary function lies in $L^p$, with equality of norms; this is
written $N^+\cap L^p=H^p$. (The statement is false with $N$ in place of $N^+$:
the reciprocal $1/S_\mu$ of a nonconstant singular inner function lies in $N$
with unimodular boundary values, but is not bounded on $\mathbb D$ and hence
not in $H^\infty$.)

## Facts & Assumptions

**Given:** $0<p\le\infty$ and $f\in N^+(\mathbb D)$ whose boundary function satisfies $f^*\in L^p(\mathbb T,m)$.

[L1] $N^+$ membership means $f\in N(\mathbb D)$, $\log|f^*|\in L^1$ and $\log|f(z)|\le P[\log|f^*|](z)$ for all $z$; and $f_r\to f^*$ $m$-almost everywhere ([[def-smirnov-class-on-the-disc]], [[thm-nevanlinna-boundary-values-and-log-integrability]]).

[L2] Convex Jensen for the probability density $P(z,\zeta)dm(\zeta)$: for the convex function $t\mapsto e^{pt}$ and an integrable real $u$ with $e^{pu}\in L^1(P\,dm)$, $e^{p\int P(z,\zeta)u(\zeta)dm(\zeta)}\le\int P(z,\zeta)e^{pu(\zeta)}dm(\zeta)$; in particular with $u=\log|f^*|$ one has $|f(z)|^p\le P[|f^*|^p](z)$ whenever $\log|f^*|\in L^1$ and $|f^*|^p\in L^1$ ([[thm-jensen-inequality-for-expectation]], [[def-poisson-integral-of-finite-boundary-measure]], [[def-smirnov-class-on-the-disc]]).

[L3] Fubini-Tonelli on the product of the probability space $(\mathbb T,m)$ with itself, and $\int_{\mathbb T}P(r\zeta,\eta)dm(\zeta)=1$ for every fixed $\eta$; $\|\cdot\|_{H^p}$ is the supremum of the radial $L^p$ means, nondecreasing in the radius ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[lem-hardy-radial-means-are-monotone]], [[def-analytic-hardy-space-disc]]).

[L4] Fatou's lemma: $\int\liminf_r g_r\,dm\le\liminf_r\int g_r\,dm$ for nonnegative measurable $g_r$ ([[thm-fatou-lemma]]).

[L5] For a nonconstant singular inner function $S_\mu$, the reciprocal $1/S_\mu=e^{H}$ is holomorphic with $\log|1/S_\mu|=P[\mu]\ge0$, hence lies in $N$ (its $\log^+|1/S_\mu|=P[\mu]$ has itself as harmonic majorant) with $|(1/S_\mu)^*|=1$ a.e., while $|1/S_\mu(z)|\to+\infty$ along radii to points of the support of $\mu$, so it is not bounded ([[def-inner-singular-inner-and-outer-functions]], [[thm-zero-free-inner-functions-are-singular-inner]], [[thm-nevanlinna-boundary-values-and-log-integrability]]).



## Proof

**Proof technique:** direct.

1.1 The case $p<\infty$: $H^p$ membership and the bound $\|f\|_{H^p}\le\|f^*\|_p$. Assume $p<\infty$ and $f^*\in L^p$. By [L1], $\log|f^*|\in L^1$ and $\log|f(z)|\le P[\log|f^*|](z)$, so [L2] (applied with $u=\log|f^*|$, for which $e^{pu}=|f^*|^p\in L^1$) gives $|f(z)|^p\le P[|f^*|^p](z)$ for every $z\in\mathbb D$. Integrating over the circle $|z|=r$ and using Tonelli's theorem and the unit mass of the kernel [L3] gives $\int_{\mathbb T}|f(r\zeta)|^p\,dm(\zeta)\le\int_{\mathbb T}|f^*|^p\,dm$ for every $r<1$; hence $f$ is holomorphic with bounded radial means, that is $f\in H^p(\mathbb D)$, and $\|f\|_{H^p}\le\|f^*\|_p$. [given, L1, L2, L3, algebra]

2.1 The reverse inequality by Fatou. By [L1], $f(r\zeta)\to f^*(\zeta)$ $m$-almost everywhere; Fatou's lemma [L4] applied to the nonnegative functions $|f_r|^p$ gives $\|f^*\|_p^p=\int|f^*|^p\,dm\le\liminf_r\int|f_r|^p\,dm\le\sup_r\int|f_r|^p\,dm=\|f\|_{H^p}^p$, using the definition of the $H^p$ norm as a supremum [L3]. Together with step 1.1 this gives $\|f\|_{H^p}=\|f^*\|_p$. [step 1.1, L1, L3, L4, algebra]

2.2 The case $p=\infty$. If $f^*\in L^\infty$, then $\log|f^*|\le\log\|f^*\|_\infty$ a.e., so $P[\log|f^*|]\le\log\|f^*\|_\infty$ and the defining inequality of [L1] gives $|f(z)|\le\|f^*\|_\infty$ for every $z$, that is $f\in H^\infty$ with $\|f\|_\infty\le\|f^*\|_\infty$. Conversely, $f^*$ is an a.e. limit of the radial functions $f_r$, so $|f^*|\le\sup_{z\in\mathbb D}|f(z)|=\|f\|_\infty$ a.e. and $\|f^*\|_\infty\le\|f\|_\infty$; hence $\|f\|_\infty=\|f^*\|_\infty$. [step 1.1, L1, algebra]

3.1 Assembly and sharpness for $N$. Steps 1.1, 2.1 and 2.2 prove $N^+\cap L^p=H^p$ with equality of norms for every $0<p\le\infty$: if $f\in N^+$ and $f^*\in L^p$ then $f\in H^p$ with the stated norm identity, and the reverse inclusion $H^p\subseteq N^+$ is in the definition of $N^+$. The sharpness assertion is [L5]: the reciprocal of a nonconstant singular inner function lies in $N$ with unimodular boundary values, so $N\cap L^\infty\ne H^\infty$, showing that the maximum principle fails for $N$. [step 1.1, step 2.1, step 2.2, L5] ∎
