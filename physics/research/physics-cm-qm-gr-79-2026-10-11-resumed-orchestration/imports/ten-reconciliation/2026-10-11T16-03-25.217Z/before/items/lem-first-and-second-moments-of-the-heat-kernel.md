---
id: lem-first-and-second-moments-of-the-heat-kernel
kind: lemma
title: "First and second Gaussian heat-kernel moments"
status: published
origin: pipeline
deps:
  - cor-c-one-change-of-variables-for-l-one-functions
  - def-countable-choice
  - def-heat-kernel
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - thm-exponential-beats-every-polynomial
  - thm-gaussian-integral
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-integration-by-parts-with-interior-derivatives
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-tonelli-and-fubini-for-completed-product-measures
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-03"
    scope: "Cumulative whole-item verification: completed original Step5 full statement/definition and proof read plus the recorded later Step7 local mathematical corrections. Exact recovered original carrier and current post-correction carrier match recorded hashes; every substantive delta is covered by the cited correction reasoning. No independent audit of the local repairs and no new review round is claimed; supplier review is limited to interfaces used."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-3.md"
      - "research/frontier-38-owner-30-alpha-batch-3-5a.md"
      - "research/frontier-38-owner-30-step5-hash-3-post-5a.json"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u3.json"
    original_read_raw_sha256: "5d1987a35eca33370d985521cbb3a035613c5f19aa69165952ea314c08e04855"
    repair_post_guard_sha256: "b686c2077a2a21970bb744286956889169a63d50b2c6b3795149a30281421892"
    content_sha256: "fc8658b34746f6b3bb3f4635791b28cd9735e24117273319e810de5c142f232b"
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§5.1.1–5.1.2, printed pp. 129–131, (5.6)–(5.9), Theorem 5.5"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Definition 1.0.1 and Lemma 1.0.2, pp. 1–2"
---

## Statement

Assume Countable Choice. For $n\ge1$ and $t>0$, all first and second moments
are absolutely integrable and
$$\int_{\mathbb R^n}x_i\Gamma(x,t)\,dx=0,\qquad \int_{\mathbb R^n}x_ix_j\Gamma(x,t)\,dx=2t\delta_{ij}.$$
In particular $\int_{\mathbb R^n}|x|^2\Gamma(x,t)\,dx=2nt$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $t>0$, and coordinate indices $0\le i,j<n$ wherever they appear.

[A1] Countable Choice is the hypothesis carried by the integration and change-of-variables suppliers below ([[def-countable-choice]]).

[F1] For $t>0$ the heat kernel is $\Gamma(x,t)=(4\pi t)^{-n/2}\exp(-|x|^2/(4t))>0$ on $\mathbb R^n$ ([[def-heat-kernel]]).

[F2] $\int_{-\infty}^{\infty}e^{-u^2}\,du=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F3] Under $\mathbb R^{m+n}=\mathbb R^m\times\mathbb R^n$ the Lebesgue measure $\lambda_{m+n}$ is the completion of the product measure $\lambda_m\times\lambda_n$ ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).

[F4] On completed sigma-finite product measure spaces, Tonelli applies to nonnegative completed-product-measurable functions and Fubini to $L^1$ functions. Sections are measurable (and in the Fubini case integrable) outside measurable null sets; define their inner integrals to be zero on those exceptional sets before taking the outer integral ([[thm-tonelli-and-fubini-for-completed-product-measures]]). The Gaussian products and moment integrands used here have measurable sections everywhere; their one-dimensional factors are integrable, so their ordinary iterated integrals agree with these modified integrals.

[F5] For a $C^1$ diffeomorphism $T:U\to V$ of open sets and every $f\in L^1(V)$, $\int_Vf(y)\,dy=\int_Uf(T(x))|\det DT(x)|\,dx$; in particular for $n=1$ both $u\mapsto-u$ and $u\mapsto cu$ with $c>0$ qualify ([[cor-c-one-change-of-variables-for-l-one-functions]], [[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F6] For every $m\in\mathbb N$ and real $a>0$, $s^m/\exp(as)\to0$ as $s\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

[F7] If $F,G$ are continuous on $[a,b]$ and differentiable on $(a,b)$ with $F'=f$, $G'=g$ Riemann integrable there, then $\int_a^bFg+\int_a^bfG=F(b)G(b)-F(a)G(a)$ ([[thm-integration-by-parts-with-interior-derivatives]]).

[F8] If $T$ preserves a measure $\mu$ and $f$ is integrable, then $\int f\circ T\,d\mu=\int f\,d\mu$ ([[thm-integrals-are-invariant-under-measure-preserving-maps]]); the reflection $s\mapsto-s$ preserves Lebesgue measure on $\mathbb R$.



## Proof

**Proof technique:** direct.

1.1 Work under [A1] and fix $t>0$. For $m\in\{1,2\}$ set $K_m(t):=\sup_{s\in\mathbb R}|s|^m e^{-s^2/(8t)}<\infty$: the function is continuous and tends to $0$ at infinity by [F6] applied to the radial variable, so the supremum is finite; consequently, by [F1], $|x_i|^m\Gamma(x,t)\le(4\pi t)^{-n/2}K_m(t)\prod_{k<n} e^{-x_k^2/(8t)}$. By the identification [F3] and Tonelli's theorem [F4], $\int_{\mathbb R^n}\prod_k e^{-x_k^2/(8t)}\,dx=\prod_k\int_{\mathbb R}e^{-x_k^2/(8t)}\,dx_k=(\sqrt{8\pi t})^n<\infty$, where each one-dimensional factor is computed by the substitution $x_k=2\sqrt{2t}\,u$ of [F5] and the Gaussian integral [F2]; hence $|x_i|^m\Gamma(\cdot,t)\in L^1(\mathbb R^n)$ for $m=1,2$ and every $i$, and $|x_ix_j|\le(x_i^2+x_j^2)/2$ gives absolute integrability of the mixed moments as well, so Fubini's clause of [F4] applies to them. [A1, F1, F2, F3, F4, F5, F6, given, algebra]

2.1 First moments: by Fubini's theorem [F4] applied to the integrable function $x\mapsto x_i\Gamma(x,t)$, the integral is the iterated integral in which the $i$-th factor is $\int_{\mathbb R}s\,e^{-s^2/(4t)}\,ds$; the function $s\mapsto s\,e^{-s^2/(4t)}$ is odd and integrable, so by the change of variables $s=-u$ of [F5] its integral equals its own negative and is therefore $0$, while all other factors are finite by step 1.1; hence $\int x_i\Gamma(x,t)\,dx=0$. [F4, F5, F8, step 1.1, given, algebra]

2.2 Off-diagonal second moments: for $i\ne j$, Fubini [F4] applied to the integrable $x\mapsto x_ix_j\Gamma(x,t)$ factors the integral into the product of the one-dimensional integrals $\int_{\mathbb R}s\,e^{-s^2/(4t)}\,ds$ in the $i$-th and $j$-th coordinates and the finite Gaussian factors in the remaining coordinates; each of the two odd factors vanishes by the change of variables $s=-u$ of [F5], so $\int x_ix_j\Gamma(x,t)\,dx=0$ for $i\ne j$. [F4, F5, F8, step 1.1, given, algebra]

2.3 Diagonal second moments: fix $i$ and put $F(s)=s$, $G(s)=e^{-s^2/(4t)}$ on $[-R,R]$; integration by parts [F7] gives $\int_{-R}^Rs^2e^{-s^2/(4t)}\,ds=2t\int_{-R}^Re^{-s^2/(4t)}\,ds-4tRe^{-R^2/(4t)}$. Letting $R\to\infty$, the boundary term tends to $0$ by [F6] and the remaining integral equals $\sqrt{4\pi t}$ by the substitution $s=2\sqrt t\,u$ of [F5] and [F2], so $\int_{\mathbb R}s^2e^{-s^2/(4t)}\,ds=2t\sqrt{4\pi t}$; Fubini [F4] applied to the integrable function $x\mapsto x_i^2\Gamma(x,t)$ now gives $\int_{\mathbb R^n}x_i^2\Gamma(x,t)\,dx=(4\pi t)^{-n/2}\cdot2t\sqrt{4\pi t}\cdot(\sqrt{4\pi t})^{n-1}=2t$. [step 1.1, F2, F4, F5, F6, F7, given, algebra]

3.1 Steps 1.1, 2.1, 2.2 and 2.3 give absolute integrability, vanishing first moments, the covariance identity $\int x_ix_j\Gamma=2t\delta_{ij}$ for every pair $i,j$, and, summing the $n$ diagonal identities by linearity of the integral, $\int|x|^2\Gamma(x,t)\,dx=\sum_{i<n}2t=2nt$. [step 1.1, step 2.1, step 2.2, step 2.3, algebra] ∎
