---
id: def-kac-moody-integral-and-dominant-integral-weights
kind: definition
title: Kac moody integral and dominant integral weights
status: published
origin: pipeline
deps: [def-realization-of-a-generalized-cartan-matrix]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
---

## Definition

Fix a minimal realization $(\mathfrak h,(h_i),(\alpha_i))$ of a finite GCM $A$, with the row-coroot convention $\alpha_j(h_i)=a_{ij}$ from [[def-realization-of-a-generalized-cartan-matrix]]. Define

$$P=\{\lambda\in\mathfrak h^*: \lambda(h_i)\in\mathbb Z\text{ for every }i\},\qquad P^+=\{\lambda\in P:\lambda(h_i)\geq0\text{ for every }i\}.$$

Elements of $P$ are **integral weights**; elements of $P^+$ are **dominant integral weights**. Their simple-coroot labels are the integers $\lambda(h_i)$. Zero labels are allowed, and the zero functional is dominant integral.

The independent coroots can be extended to a finite basis of $\mathfrak h$. Prescribing integral labels on the coroots and arbitrary complex values on the remaining basis vectors specifies a unique functional. Thus complementary Cartan values are unrestricted; $P$ need not be a discrete lattice in $\mathfrak h^*$. The inequalities only concern the integral coroot labels, not an ordering of arbitrary complex Cartan values. This definition uses finite linear algebra and no AC.
