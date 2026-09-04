---
id: cex-a-degenerate-nonisolated-critical-set
kind: counterexample
title: "A degenerate critical set can be nonisolated"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-critical-point-and-critical-value-of-a-smooth-function, def-hessian-of-a-function-at-a-critical-point, def-nondegenerate-critical-point-nullity-index-and-coindex]
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

If every critical point of a smooth function is degenerate, then the critical
set is still forced to be discrete.

## Facts & Assumptions

**Given:** The smooth function $f:\mathbb R^2\to\mathbb R$, $f(x,y)=x^2$.

[F1] Critical points are the zeros of the differential, the Hessian is computed
at a critical point, and degeneracy means the Hessian has nontrivial kernel
([[def-critical-point-and-critical-value-of-a-smooth-function]],
[[def-hessian-of-a-function-at-a-critical-point]],
[[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

## Counterexample

**Proof technique:** direct computation.

1.1 The differential is $df_{(x,y)}=(2x,0)$ in the standard coordinates, so $df_{(x,y)}=0$ exactly when $x=0$. Thus the whole line $\{(0,y):y\in\mathbb R\}$ is critical. [F1, given, algebra]

2.1 The Hessian matrix is constant, namely $\operatorname{Hess}(f)=\begin{pmatrix}2&0\\0&0\end{pmatrix}$. Its kernel contains the $y$-axis, so every critical point on the line from step 1.1 is degenerate. [F1, step 1.1, algebra]

3.1 Since the critical set contains an entire line, it is not discrete and its points are not isolated. Therefore degenerate critical sets can be nonisolated. [step 1.1, step 2.1] ∎
