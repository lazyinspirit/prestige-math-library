---
id: cor-local-extrema-and-saddles-from-the-morse-index
kind: corollary
title: "The Morse index detects local extrema and saddles"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-morse-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: normal form reading
verification:
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

Let $f:M\to\mathbb R$ be smooth and let $p$ be a nondegenerate critical point
of index $\lambda$ on an $n$-manifold.

- If $\lambda=0$, then $p$ is a strict local minimum of $f$.
- If $\lambda=n$, then $p$ is a strict local maximum of $f$.
- If $0<\lambda<n$, then $p$ is a saddle point of $f$.

When $n=0$, the first two clauses coincide.

## Facts & Assumptions

**Given:** A smooth function $f:M\to\mathbb R$ and a nondegenerate critical
point $p$ of index $\lambda$.

[L1] Morse coordinates put $f-f(p)$ into the signed quadratic normal form with
exactly $\lambda$ negative squares
([[thm-morse-lemma]]).

## Proof

**Proof technique:** normal form reading.

1.1 By [L1], choose local coordinates centered at $p$ in which $f-f(p)=-\sum_{i=1}^{\lambda}(x^i)^2+\sum_{i=\lambda+1}^{n}(x^i)^2$. [L1, given, construct]

2.1 If $\lambda=0$, the first sum is empty, so $f-f(p)=\sum_{i=1}^{n}(x^i)^2$, which is strictly positive for every nearby point other than $p$; hence $p$ is a strict local minimum. If $n=0$, this same formula is $f-f(p)=0$, so the local minimum and maximum clauses coincide. [step 1.1, algebra]

2.2 If $\lambda=n$, the second sum is empty, so $f-f(p)=-\sum_{i=1}^{n}(x^i)^2$, which is strictly negative away from $p$. Hence $p$ is a strict local maximum. [step 1.1, algebra]

2.3 If $0<\lambda<n$, then along the $x^1$-axis one has $f-f(p)=-(x^1)^2<0$ for nearby nonzero points, while along the $x^n$-axis one has $f-f(p)=(x^n)^2>0$ for nearby nonzero points. Therefore every neighbourhood of $p$ contains points where $f<f(p)$ and points where $f>f(p)$, so $p$ is a saddle. [step 1.1, algebra]

3.1 The three cases above exhaust the possible values of $\lambda$. [step 2.1, step 2.2, step 2.3] ∎
