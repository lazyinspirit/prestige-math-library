---
id: cor-prime-ideals-and-dimension-of-a-dvr
kind: corollary
title: "Prime ideals and dimension of a DVR"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-ideals-in-a-dvr, def-krull-dimension-of-a-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Mustata, Commutative Algebra, Remark 8.9"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., (23.1)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a discrete valuation ring with maximal ideal $\mathfrak m$. Then the
only prime ideals of $V$ are $(0)$ and $\mathfrak m$. In particular,
$$
\dim V=1.
$$

## Facts & Assumptions

**Given:** A discrete valuation ring $V$ with maximal ideal $\mathfrak m=(\pi)$.

[L1] Every nonzero ideal of $V$ is $(\pi^n)=\mathfrak m^n$ for a unique
$n\ge0$ ([[thm-ideals-in-a-dvr]]).

[F1] The Krull dimension of a nonzero ring is the supremum of the lengths of
its strict chains of prime ideals ([[def-krull-dimension-of-a-ring]]).

[A1] A discrete valuation ring is a domain, so $(0)$ is prime.

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak p$ be a nonzero prime ideal of $V$. Choose $0\ne x\in\mathfrak p$. By [L1], $x=u\pi^n$ for some unit $u$ and some $n\ge1$, so $\pi^n\in\mathfrak p$. Since $\mathfrak p$ is prime, $\pi\in\mathfrak p$. Therefore $\mathfrak m=(\pi)\subseteq\mathfrak p$, and maximality of $\mathfrak m$ forces $\mathfrak p=\mathfrak m$. [L1, given, algebra]

2.1 By [A1], $(0)$ is prime, and step 1.1 shows there are no other nonzero primes besides $\mathfrak m$. Therefore the prime spectrum has exactly the strict chain $(0)\subsetneq\mathfrak m$. Its length is $1$, and no longer chain exists. Hence [F1] gives $\dim V=1$. [F1, A1, step 1.1] ∎
