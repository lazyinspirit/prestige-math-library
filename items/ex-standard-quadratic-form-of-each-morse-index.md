---
id: ex-standard-quadratic-form-of-each-morse-index
kind: example
title: "The standard quadratic form realizes every Morse index"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-nondegenerate-critical-point-nullity-index-and-coindex, thm-morse-lemma]
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
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed."
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Example

Fix $n\ge 0$ and $0\le \lambda\le n$. On $\mathbb R^n$, the quadratic form

$$q_\lambda(x_1,\dots,x_n):=-\sum_{i=1}^{\lambda}x_i^2+\sum_{i=\lambda+1}^{n}x_i^2$$

has a unique critical point at the origin, and that critical point has Morse
index $\lambda$.

## Facts & Assumptions

**Given:** Integers $n\ge0$ and $0\le\lambda\le n$, and the quadratic form
$q_\lambda$ above.

[F1] Index and nondegeneracy are read from the Hessian
([[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

[L1] The Morse normal form is exactly the displayed signed quadratic form
([[thm-morse-lemma]]).

## Verification

**Proof technique:** direct computation.

1.1 The partial derivatives satisfy $\partial q_\lambda/\partial x_i=-2x_i$ for $1\le i\le \lambda$ and $\partial q_\lambda/\partial x_i=2x_i$ for $\lambda<i\le n$, so all first derivatives vanish exactly at $x=0$. [given, algebra]

2.1 The Hessian matrix at the origin is $\operatorname{diag}(\underbrace{-2,\dots,-2}_{\lambda},\underbrace{2,\dots,2}_{n-\lambda})$, so the critical point is nondegenerate and has exactly $\lambda$ negative directions. By [F1], its index is $\lambda$. [F1, step 1.1, algebra]

3.1 The displayed formula is already the Morse normal form from [L1], including the endpoint cases $\lambda=0$ and $\lambda=n$. [L1, step 2.1] ∎
