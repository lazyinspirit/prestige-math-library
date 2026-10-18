---
id: def-euler-twisted-hall-algebra
kind: definition
title: "The Euler-twisted Hall algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-finite-field-hereditary-hall-category
  - def-untwisted-hall-algebra
  - lem-untwisted-hall-product-finiteness
justified_by:
  - lem-euler-twisted-hall-product-is-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.2–1.3, PDF pp. 6–8: multiplicative Euler form and the Euler-twisted Hall product."
    - title: "Claus Michael Ringel, Hall algebras and quantum groups, Inventiones Mathematicae 101 (1990), 583–591"
      url: "https://noah.nrw/ubbihs/download/pdf/5112433"
      locator: "§1: the twisted Hall multiplication and its normalization."
---

## Definition

Let $\mathcal A$ be a finite-field hereditary Hall category over
$\mathbb F_q$, and choose the positive square root $\nu=\sqrt q$. For
objects $M,N$, put
$\chi_0(M,N)=\dim_{\mathbb F_q}\operatorname{Hom}(M,N)-
\dim_{\mathbb F_q}\operatorname{YExt}^1(M,N)$. This integer depends only on
the isomorphism classes of $M,N$. At this point $\chi_0$ is only an
object-level exponent; additivity on $K_0$ and the resulting bicharacter are
separate proof obligations. The coefficient field is $\mathbb Q(\nu)$. The
**Euler-twisted Hall algebra** is the graded
vector
space
$$ H_{\mathcal A,\nu}=\bigoplus_{[M]}\mathbb Q(\nu)[M],\qquad \deg[M]=[M]\in K_0(\mathcal A), $$
with bilinear operation
$$ [M]\star[N] =\nu^{\chi_0(M,N)}\sum_{[L]}g^L_{M,N}[L], $$
where [[def-untwisted-hall-algebra]] fixes
$0\to N\to L\to M\to0$. This operation is distinct from the untwisted
product: its field, Euler exponent and square-root parameter are additional
data. Finite support and associativity are verified in the following items.
