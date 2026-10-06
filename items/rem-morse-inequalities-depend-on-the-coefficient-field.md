---
id: rem-morse-inequalities-depend-on-the-coefficient-field
kind: remark
title: "Morse inequalities and perfectness depend on the coefficient field"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morse-numbers-and-morse-polynomial, def-poincare-polynomial-over-a-field, thm-morse-polynomial-identity, cor-morse-euler-characteristic-identity, def-perfect-morse-function-over-a-field, def-countable-choice]
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
dependency_level: 5
---

## Remark

Assume $\mathrm{AC}_\omega$. The weak and strong Morse inequalities, the Morse
polynomial identity, and perfectness all depend on the coefficient field: only
the Euler characteristic identity is coefficient independent
([[cor-morse-euler-characteristic-identity]]).

More precisely, for a fixed Morse function $f$ on a closed manifold the Morse
numbers $m_k(f)$ do not depend on $F$
([[def-morse-numbers-and-morse-polynomial]]), while the Betti numbers
$b_k(M;F)$ can change with $F$ when $H_*(M;\mathbb Z)$ has torsion
([[def-poincare-polynomial-over-a-field]]); hence a function may be perfect
over one field and not over another ([[def-perfect-morse-function-over-a-field]]).
The correction polynomial $Q$ of the identity
$M_f=P_{M,F}+(1+t)Q$ is the coefficientwise measure of the loss
([[thm-morse-polynomial-identity]]), and the Euler identity survives because
$\sum_k(-1)^kb_k(M;F)=\chi(M)$ for every field.

## Remarks

- **Why the inequalities depend on $F$.** The left side $M_f$ is geometric,
  while the right side is built from the $F$-Betti numbers; the field enters
  only through the homology coefficients, and the correction polynomial
  absorbs exactly the difference. Changing the characteristic can alter boundary-matrix ranks and therefore change
  Betti numbers, so the numerical content of the inequalities is not an
  integral statement.
- **Where the field does not enter.** The alternating sum of the Betti numbers
  is field independent; this is the content of the Euler identity. The
  handle-side construction of the chain complex also works over any field, but
  the ranks of its boundary maps do depend on the field when the attaching
  data has torsion in its incidence numbers.
- **An explicit instance** is worked on the examples page for real projective
  space, where a Morse function is perfect over $\mathbb F_2$ and not perfect
  over fields of characteristic different from two.
