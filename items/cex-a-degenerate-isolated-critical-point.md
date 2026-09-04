---
id: cex-a-degenerate-isolated-critical-point
kind: counterexample
title: "An isolated critical point can be degenerate"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-critical-point-and-critical-value-of-a-smooth-function, def-hessian-of-a-function-at-a-critical-point]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct computation
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement refuted

An isolated critical point of a smooth function must be nondegenerate.

## Facts & Assumptions

**Given:** The smooth function $f:\mathbb R\to\mathbb R$, $f(x)=x^4$.

[F1] Critical points are the points where the differential vanishes, and the
critical-point Hessian is the second derivative in the standard coordinate
([[def-critical-point-and-critical-value-of-a-smooth-function]],
[[def-hessian-of-a-function-at-a-critical-point]]).

## Counterexample

**Proof technique:** direct computation.

1.1 One has $f'(x)=4x^3$, so $f'(x)=0$ only at $x=0$. Thus $0$ is an isolated critical point. [F1, given, algebra]

2.1 Also $f''(x)=12x^2$, so the Hessian at the critical point is $\operatorname{Hess}_0(f)=0$. Therefore the critical point is degenerate. [F1, step 1.1, algebra]

3.1 Hence an isolated critical point need not be nondegenerate. [step 1.1, step 2.1] ∎
