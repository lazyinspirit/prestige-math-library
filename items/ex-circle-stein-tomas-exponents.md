---
id: ex-circle-stein-tomas-exponents
kind: example
title: The Stein-Tomas exponents on the circle
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- thm-stein-tomas-spherical-restriction-theorem
- def-conjugate-exponents
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
  - title: Mark Williams, Notes on harmonic analysis
    url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
    locator: Theorem 11.1, printed p.71; n=2 exponent values are computed locally.
---

## Example

Assume Countable Choice. For $n=2$ the Stein-Tomas endpoints of [[thm-stein-tomas-spherical-restriction-theorem]] are $p_0=2(n+1)/(n+3)=6/5$ and $q_0=2(n+1)/(n-1)=6$: on the circle $S^1$, $\|\widehat f\|_{L^2(S^1)}\lesssim\|f\|_{L^{6/5}(\mathbb R^2)}$ and $\|Eg\|_{L^6(\mathbb R^2)}\lesssim\|g\|_{L^2(S^1)}$. The pair is conjugate, $(6/5)'=6$, and satisfies $1/p_0-1/q_0=2/(n+1)=2/3$, the exponent identity used by the fractional-integration step.

## Verification

**Given:** Countable Choice, $n=2$, the circle $S^1\subset\mathbb R^2$, the Stein-Tomas endpoints $p_0=2(n+1)/(n+3)$ and $q_0=2(n+1)/(n-1)$, and the conjugacy convention of [[def-conjugate-exponents]].

[F1] The spherical restriction theorem holds for every $n\ge2$ with the endpoint $p_0=2(n+1)/(n+3)$ and $q_0=2(n+1)/(n-1)$: the restriction bound at $p_0$ and the extension bound at every $q\ge q_0$. ([[thm-stein-tomas-spherical-restriction-theorem]])

[F2] Conjugate exponents: $q$ is conjugate to $p$ when $1/p+1/q=1$, and $(6/5)'=6$ because $5/6+1/6=1$. ([[def-conjugate-exponents]])

1.1 The endpoint values. Substituting $n=2$ into [F1] gives $p_0=2\cdot3/(2+3)=6/5$ and $q_0=2\cdot3/(2-1)=6$. [F1, algebra]

2.1 Conjugacy. $1/(6/5)+1/6=5/6+1/6=1$, so $q_0=p_0'$; equivalently $(6/5)'=6$, and the extension bound at $q_0=6$ is the dual form of the restriction bound at $p_0=6/5$. [F1, F2, step 1.1, algebra]

2.2 The exponent identity. $1/p_0-1/q_0=5/6-1/6=4/6=2/3$, while $2/(n+1)=2/3$ at $n=2$; this is the identity $1/p-1/p'=2/(n+1)$ used in the fractional-integration step of the endpoint proof. [step 1.1, algebra]

3.1 Conclusion. On the circle the Stein-Tomas endpoints are $p_0=6/5$ and $q_0=6$, the two are conjugate, and the fractional-integration identity reads $1/p_0-1/q_0=2/3$. [step 1.1, step 2.1, step 2.2, algebra] ∎
