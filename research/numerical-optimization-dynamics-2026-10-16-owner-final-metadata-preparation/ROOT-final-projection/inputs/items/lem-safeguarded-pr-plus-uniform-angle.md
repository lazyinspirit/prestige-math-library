---
id: lem-safeguarded-pr-plus-uniform-angle
kind: lemma
title: "The safeguarded PR+ direction has a uniform angle bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-nonlinear-conjugate-gradient-methods
  - def-wolfe-and-strong-wolfe-conditions
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 5 §5.2, printed pp. 122–124 and 130–131: PR+, restart and descent-direction discussion; the precise two-test safeguard here is proved locally."
    - title: "Jean Charles Gilbert and Jorge Nocedal, Global Convergence Properties of Conjugate Gradient Methods for Optimization, SIAM Journal on Optimization 2(1), 21–42 (1992), DOI 10.1137/0802003"
      url: "https://who.rocq.inria.fr/Jean-Charles.Gilbert/preprint/06%2Bcg-convergence.pdf"
      locator: "§4, printed pp. 29–34: nonnegative PR coefficients and sufficient-descent mechanisms; the precise norm-and-angle restart bound here is proved locally."
---

## Statement

Let $g\ne0$ and let $d^{\rm cand}$ be the PR+ candidate direction from [[alg-nonlinear-conjugate-gradient-methods]]. The safeguarded procedure either keeps $d^{\rm cand}$ when
$$ g^Td^{\rm cand}\le-\sigma\|g\|_2^2,\qquad \|d^{\rm cand}\|_2\le C\|g\|_2, $$
or restarts to $d=-g$, where $\sigma,C>0$. The resulting direction is strictly descending and its angle $\theta$ with $-g$ satisfies
$$ \cos\theta\ge\delta_{\rm PR}:=\min\{1,\sigma/C\}>0, $$
using the angle convention of [[def-wolfe-and-strong-wolfe-conditions]].

## Facts & Assumptions

**Given:** $g\ne0$, $\sigma,C>0$, the PR+ candidate, and the safeguard in the Statement.

[F1] [[alg-nonlinear-conjugate-gradient-methods]]: the PR+ safeguard keeps a candidate only if $g^Td\le-\sigma\|g\|_2^2$ and $\|d\|_2\le C\|g\|_2$; otherwise it sets $d=-g$.

[F2] [[def-wolfe-and-strong-wolfe-conditions]]: $\cos\theta=-g^Td/(\|g\|_2\|d\|_2)$ for a descent direction.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|u^Tv|\le\|u\|_2\|v\|_2$ for Euclidean vectors.

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 If the candidate is kept, then $g^Td\le-\sigma\|g\|_2^2<0$, so it is descending. Using the norm test and [F2], $\cos\theta=\frac{-g^Td}{\|g\|_2\|d\|_2}\ge\frac{\sigma}{C}.$ [given, F1, F2, algebra]

2.1 In the kept branch, [F3] also gives $\cos\theta\le1$, so necessarily $\sigma/C\le1$ and the bound in step 1.1 implies $\cos\theta\ge\delta_{\rm PR}$. If the candidate is reset, then $d=-g$, whence $g^Td=-\|g\|_2^2<0$ and $\cos\theta=1\ge\delta_{\rm PR}$. Both branches prove the claim. [given, F1, F3, step 1.1, algebra] ∎
