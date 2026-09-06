---
id: def-ramification-index
kind: definition
title: "Ramification index"
status: draft
origin: pipeline
deps: [thm-number-field-integral-ideal-factorisation-in-zf, def-prime-above-and-residue-degree, thm-ring-of-integers-free-of-rank-degree]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, §3.3"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Definition

Let $L/K$ be a finite extension of number fields and let $\mathfrak p$ be a
nonzero prime of $\mathcal O_K$.  In the factorisation
$$\mathfrak p\mathcal O_L=\prod_{\mathfrak P\mid\mathfrak p}\mathfrak P^{e(\mathfrak P/\mathfrak p)},$$
the positive exponent $e(\mathfrak P/\mathfrak p)$ is the **ramification
index** of $\mathfrak P$ over $\mathfrak p$.

Here $\mathfrak P\mid\mathfrak p$ means contraction to $\mathfrak p$, as in
[[def-prime-above-and-residue-degree]]. The factorisation exists and its
exponents are unique by [[thm-number-field-integral-ideal-factorisation-in-zf]].
For completeness, the extended ideal is proper: a finite integral basis of
$\mathcal O_L$ over $\mathbb Z$ also generates it over $\mathcal O_K$
([[thm-ring-of-integers-free-of-rank-degree]]). If
$\mathfrak p\mathcal O_L=\mathcal O_L$, these generators satisfy $v=Av$ with
all entries of $A$ in $\mathfrak p$. The adjugate identity makes
$\det(I-A)$ annihilate $\mathcal O_L$, hence $1$; this contradicts
$\det(I-A)\equiv1\pmod{\mathfrak p}$.
Every prime factor contains $\mathfrak p\mathcal O_L$, so its contraction
contains $\mathfrak p$ and equals it by maximality. Conversely, a prime above
$\mathfrak p$ contains that finite product, hence contains one of its prime
factors and equals it. Here nonzero primes are maximal because their quotient
rings are finite domains. Thus the displayed product indexes exactly the
primes above $\mathfrak p$, using only finite algebra.
