---
id: lem-complex-integration-by-parts-on-intervals-and-decaying-lines
kind: lemma
title: Complex integration by parts on intervals and decaying lines
deps: ["thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-integration-by-parts", "thm-ftc-second-part", "thm-dominated-convergence", "def-complex-lp-and-euclidean-test-function-conventions", "def-countable-choice"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Proposition 11.7, pp.121–122, integration-by-parts step; real/complex Lebesgue interface expanded locally
---

## Statement

Assume countable choice. For complex $C^1$ functions $u,v$ on $[a,b]$, $a<b$, Lebesgue integration gives $\int_a^b u'v=u(b)v(b)-u(a)v(a)-\int_a^b uv'$ and $\int_a^b u'=u(b)-u(a)$. If instead $u,v\in C^1(\mathbb R;\mathbb C)$, $u'v,uv'\in L^1(\mathbb R)$ and $u(x)v(x)\to0$ as $x\to\pm\infty$, then $\int_{\mathbb R}u'v=-\int_{\mathbb R}uv'$.

## Facts & Assumptions

**Given:** The stated functions, [[def-countable-choice]], and the componentwise calculus/integration convention of [[def-complex-lp-and-euclidean-test-function-conventions]].

[F1] Real integration by parts applies to $C^1$ functions on a closed interval ([[thm-integration-by-parts]]).

[F2] A bounded Riemann integrable real function on a closed interval has the same Lebesgue integral under countable choice ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[F3] The real FTC integrates an integrable derivative to its endpoint increment ([[thm-ftc-second-part]]).

[F4] Dominated convergence applies to complex integrable functions ([[thm-dominated-convergence]]).

## Proof

1.1 Write $u=r+is$, $v=p+iq$. Apply F1 to the four real pairs $(r,p),(s,q),(r,q),(s,p)$. Subtract the second identity from the first and add $i$ times the sum of the last two. Since $u'v=(r'p-s'q)+i(r'q+s'p)$ and $uv'=(rp'-sq')+i(rq'+sp')$, the result is the complex integration-by-parts identity. All integrands are continuous on the compact interval and hence bounded and Riemann integrable; F2 changes each real integral to a Lebesgue integral. Applying F3 to $r,s$ and the same F2 gives the complex FTC. This is the sole countable-choice use here. [F1, F2, F3, given]

2.1 For the whole-line assertion apply step 1.1 on $[-N,N]$. The truncated products converge pointwise to $u'v$ and $uv'$ and have integrable majorants $|u'v|$ and $|uv'|$. F4 gives convergence of both integrals; the boundary term $u(N)v(N)-u(-N)v(-N)$ tends to zero by the two assumed limits. Passing to the limit proves the assertion. No separate integrability of $u$ or $v$ is required. [F4, step 1.1, given] ∎
