---
id: def-perfect-morse-function-over-a-field
kind: definition
title: "Perfect Morse function over a field"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morse-numbers-and-morse-polynomial, def-poincare-polynomial-over-a-field, def-field, def-polynomial-ring-over-a-commutative-ring, def-countable-choice]
justified_by: []
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Chapter 4 Section 4.4, printed pp. 88-91 (PDF pp. 98-100)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
dependency_level: 1
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M$ be a closed smooth $n$-manifold, let $f:M\to\mathbb R$ be a Morse
function and let $F$ be a field ([[def-field]]). Write $m_k(f)$ for the Morse
numbers and $M_f(t)$ for the Morse polynomial of $f$
([[def-morse-numbers-and-morse-polynomial]]), and $b_k(M;F)=\dim_F H_k(M;F)$
for the $F$-Betti numbers with Poincare polynomial $P_{M,F}(t)
=\sum_kb_k(M;F)t^k$ ([[def-poincare-polynomial-over-a-field]]).

Then $f$ is **$F$-perfect**, or **perfect over $F$**, when
$$m_k(f)=b_k(M;F)\qquad\text{for every }k,$$
equivalently $M_f(t)=P_{M,F}(t)$
([[def-polynomial-ring-over-a-commutative-ring]]).

Perfectness is always understood with respect to a field: it may hold over one
field and fail over another when $H_*(M;\mathbb Z)$ has torsion. No orientation
of $M$ and no Morse-Smale condition is required by the definition.

## Remarks

- **Equivalent forms.** Since a polynomial over $\mathbb Z$ is determined by
  its coefficient sequence, the identity $M_f(t)=P_{M,F}(t)$ holds exactly when
  $m_k(f)=b_k(M;F)$ for every $k$; both polynomials have nonnegative integer
  coefficients and are zero in degrees outside $[0,n]$, so no degree-range
  correction is hidden.
- **What perfectness asserts.** It is equality in every weak Morse inequality
  at once; equivalently, it is the vanishing of the correction polynomial of
  the Morse polynomial identity proved later on this page.
- **Existential status.** The definition names a property of a pair $(f,F)$; it
  asserts nothing about existence, and it does not require $f$ to be excellent.
