---
id: cor-local-level-set-cone-at-a-morse-critical-point
kind: corollary
title: "The critical level is a quadratic cone in Morse coordinates"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-morse-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: normal form reading
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
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed."
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
---

## Statement

Let $f:M\to\mathbb R$ be smooth, let $p$ be a nondegenerate critical point of
index $\lambda$ on an $n$-manifold, and choose Morse coordinates around $p$.
Then near $p$ the critical level set is

$$f^{-1}(f(p))=\left\{\sum_{i=1}^{\lambda}(x^i)^2=\sum_{i=\lambda+1}^{n}(x^i)^2\right\}.$$

If $\lambda=0$ or $\lambda=n$, this local level set is just the point $p$.

## Facts & Assumptions

**Given:** A smooth function $f:M\to\mathbb R$ and a nondegenerate critical
point $p$ of index $\lambda$.

[L1] In Morse coordinates,
$$f-f(p)=-\sum_{i=1}^{\lambda}(x^i)^2+\sum_{i=\lambda+1}^{n}(x^i)^2.$$
([[thm-morse-lemma]])

## Proof

**Proof technique:** normal form reading.

1.1 By [L1], the equation $f=f(p)$ becomes $\sum_{i=1}^{\lambda}(x^i)^2=\sum_{i=\lambda+1}^{n}(x^i)^2$. [L1, given, algebra]

2.1 If $\lambda=0$, the left-hand side is the empty sum $0$, so the equation is $0=\sum_{i=1}^{n}(x^i)^2$, which forces $x=0$. If $\lambda=n$, the right-hand side is the empty sum and the same conclusion follows. [step 1.1, algebra]

3.1 Therefore the local critical level is the stated quadratic cone, with the index-$0$ and index-$n$ cases collapsing to the single critical point. [step 1.1, step 2.1] ∎
