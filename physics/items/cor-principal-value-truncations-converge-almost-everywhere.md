---
id: cor-principal-value-truncations-converge-almost-everywhere
kind: corollary
title: "Almost-everywhere convergence of principal-value truncations"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, def-maximal-truncated-singular-integral, def-riesz-transforms-on-euclidean-space, def-truncated-hilbert-transform-and-principal-value, lem-hilbert-transform-has-signum-fourier-multiplier, lem-riesz-transform-principal-value-kernel-formula, thm-chebyshev-markov-inequality-for-the-integral, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, thm-maximal-truncations-are-weak-one-one-and-strong-lp, cor-hilbert-transform-is-bounded-on-lp, cor-riesz-transforms-are-bounded-on-lp, lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds]
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
      - "research/frontier-38-owner-30-reader-5.md"
      - "research/frontier-38-owner-30-alpha-batch-5-5a.md"
      - "research/frontier-38-owner-30-step5-hash-5-post-5a.json"
    content_sha256: "c6745eb3b7e727ac075a6abd896fcb3c721cd4c3caf070c113964246ebd04b17"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Theorem 2.7 (maximal bound plus dense-class convergence) and its proof, printed pp. 4–5"
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Corollary 5.3.6 and its proof, printed p. 371, and the cited Theorem 2.1.14"
---

## Statement

Assume Countable Choice. Fix $1\le p<\infty$ and let $k$ and $T$ be as in
[[thm-maximal-truncations-are-weak-one-one-and-strong-lp]]: $k$ satisfies the
pointwise size bound with constant $A_1$, the standard $\delta$-Hölder bound
with constant $A_2'$ and the cancellation bound $A_3$, and $T$ is the
associated $L^2$-bounded operator with off-support representation and $L^2$
norm $B$. Let $D\subseteq L^p(\mathbb R^n;\mathbb C)$ be dense in
$L^p(\mathbb R^n;\mathbb C)$ and suppose that for every $g\in D$ the limit
$\lim_{\varepsilon\downarrow0}T_\varepsilon g(x)$ exists for almost every
$x\in\mathbb R^n$. Then for every $f\in L^p(\mathbb R^n;\mathbb C)$ the limit
$\lim_{\varepsilon\downarrow0}T_\varepsilon f(x)$ exists for almost every
$x\in\mathbb R^n$.

In particular, for the Hilbert kernel $1/(\pi x)$ on $\mathbb R$ and the Riesz
kernels $c_nx_j/|x|^{n+1}$ on $\mathbb R^n$ the dense class
$D=\mathcal S(\mathbb R^n)$ satisfies the hypothesis, by the published
principal-value formulas for Schwartz functions.

## Facts & Assumptions

**Given:** Countable Choice; $1\le p<\infty$; $k$, $T$ as in the statement; a dense subspace $D\subseteq L^p$ such that $\lim_{\varepsilon\downarrow0}T_\varepsilon g(x)$ exists a.e. for every $g\in D$; a function $f\in L^p$ and $\lambda>0$.

[F1] For $f\in L^p$ the truncations $T_\varepsilon f$, $\varepsilon>0$, are defined pointwise by absolutely convergent integrals and $T^*f=\sup_{\varepsilon>0}|T_\varepsilon f|$ ([[def-maximal-truncated-singular-integral]]); $T^*f\le T^{**}f$, and the maximal truncation $T^{**}$ satisfies $|\{|T^{**}h|>\lambda\}|\le C_{n,\delta}(A_1+A_2'+A_3+B)\lambda^{-1}\|h\|_1$ for $h\in L^1$ and $\|T^{**}h\|_p\le C_{n,p,\delta}(A_1+A_2'+A_3+B)\max(p,(p-1)^{-1})\|h\|_p$ for $1<p<\infty$, hence the same bounds hold for $T^*$ ([[thm-maximal-truncations-are-weak-one-one-and-strong-lp]]).

[F2] Chebyshev's inequality: for measurable $u$ and $t>0$, $|\{|u|>t\}|\le t^{-p}\int|u|^p$ when $u\in L^p$ ([[thm-chebyshev-markov-inequality-for-the-integral]]); $C_c^\infty(\mathbb R^n)$ — and hence its superset $\mathcal S(\mathbb R^n)$ — is dense in $L^p(\mathbb R^n;\mathbb C)$ for $1\le p<\infty$ ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]); the $L^p$ conventions are those of the maximal-truncation theorem and Countable Choice is [[def-countable-choice]].

[F3] For the Hilbert and Riesz kernels the principal-value truncations converge on every Schwartz input and identify the $L^2$ operators. Their kernel size, first-difference, cancellation, $L^2$ and off-support operator conditions are proved in the corresponding items. ([[lem-hilbert-transform-has-signum-fourier-multiplier]], [[lem-riesz-transform-principal-value-kernel-formula]], [[def-truncated-hilbert-transform-and-principal-value]], [[def-riesz-transforms-on-euclidean-space]], [[cor-hilbert-transform-is-bounded-on-lp]], [[cor-riesz-transforms-are-bounded-on-lp]], [[lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds]])

## Proof

**Proof technique:** direct.

1.1 Oscillation bound. Put $H_f(x):=\limsup_{\varepsilon,\theta\downarrow0}|T_\varepsilon f(x)-T_\theta f(x)|$. For every $g\in D$, on the full-measure set where $(T_\varepsilon g(x))_\varepsilon$ converges, the triangle inequality gives $|T_\varepsilon f-T_\theta f|\le|T_\varepsilon(f-g)|+|T_\theta(f-g)|+|T_\varepsilon g-T_\theta g|\le2T^*(f-g)(x)+|T_\varepsilon g-T_\theta g|$, and the last term tends to $0$ as $\varepsilon,\theta\downarrow0$; hence $H_f\le2T^*(f-g)$ almost everywhere. [F1, given, algebra]

2.1 The case $p=1$. Taking $g\in D$ and using step 1.1 and the weak $(1,1)$ bound of [F1] for $f-g\in L^1$, $$|\{H_f>\lambda\}|\le|\{T^*(f-g)>\lambda/2\}|\le2C_{n,\delta}(A_1+A_2'+A_3+B)\lambda^{-1}\|f-g\|_1$$ for every $\lambda>0$; since $D$ is dense in $L^1$, the infimum over $g\in D$ gives $|\{H_f>\lambda\}|=0$ for every $\lambda>0$, hence $H_f=0$ almost everywhere. Thus $(T_\varepsilon f(x))_{\varepsilon>0}$ is a Cauchy family as $\varepsilon\downarrow0$ for almost every $x$, so its limit exists almost everywhere. [F1, step 1.1, algebra]

2.2 The case $1<p<\infty$. With $g\in D$, step 1.1, Chebyshev's inequality and the strong $L^p$ bound of [F1] give $$|\{H_f>\lambda\}|\le|\{T^*(f-g)>\lambda/2\}|\le(2/\lambda)^p\|T^*(f-g)\|_p^p\le\bigl(2C_{n,p,\delta}(A_1+A_2'+A_3+B)\max(p,(p-1)^{-1})/\lambda\bigr)^p\|f-g\|_p^p,$$ and letting $g\to f$ in $L^p$ through $D$ gives $|\{H_f>\lambda\}|=0$ for every $\lambda>0$, hence $H_f=0$ almost everywhere and the limit exists almost everywhere. [F1, F2, step 1.1, algebra]

3.1 The Hilbert and Riesz kernels have the size, Hölder, spherical cancellation, $L^2$ bound and off-support representation in [F3]. Zero spherical means give the annular cancellation bound $A_3=0$. Their principal-value distributions are defined by subtracting a test's value at zero on $|y|<1$; the size estimate makes the resulting integrand integrable, bounded by $C|y|^{1-n}$ there, and Schwartz decay controls infinity. Thus they satisfy the maximal theorem's hypotheses. The dense class $\mathcal S$ has convergence at every point by [F3], and is dense in each finite-exponent $L^p$ by [F2]. Steps 2.1 and 2.2 therefore give the asserted almost-everywhere convergence for every $f\in L^p$. [F2, F3, step 2.1, step 2.2] ∎