---
id: def-green-hall-completion-and-coproduct
kind: definition
title: "The Green Hall completion and coproduct"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-euler-twisted-hall-algebra
  - lem-euler-twisted-hall-product-is-well-defined
  - lem-hall-sequence-count-equals-aut-weighted-subobject-count
  - def-finite-field-hereditary-hall-category
justified_by:
  - lem-green-hall-coproduct-coefficients-are-finite
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.4–1.5, PDF pp. 9–16: the coefficientwise completed Green coproduct, its twist, convergence and bialgebra theorem."
    - title: "Claus Michael Ringel, Hall algebras and quantum groups, Inventiones Mathematicae 101 (1990), 583–591"
      url: "https://noah.nrw/ubbihs/download/pdf/5112433"
      locator: "§1, printed pp. 585–586: composition-algebra flag counts (background only). The Green coproduct and tensor conventions are from Schiffmann §§1.4–1.5, cited above."
---

## Definition

Let $\mathcal A$ be a finite-field hereditary Hall category and use
$H_{\mathcal A,\nu}$ and the object-level integer $\chi_0(M,N)$ from
[[def-euler-twisted-hall-algebra]]. For a basis object $R$, let
$P^R_{M,N}$ count endpoint-labelled exact sequences
$0\to N\to R\to M\to0$, and put $a_R=|\operatorname{Aut}(R)|$. Define the
**coefficientwise completed tensor space**
$$ H_{\mathcal A,\nu}\widehat\otimes H_{\mathcal A,\nu} =\prod_{([M],[N])}\mathbb Q(\nu)\,([M]\otimes[N]), $$
the space of all coefficient functions on ordered pairs of isomorphism
classes. Define the Green coproduct and counit by
$$ \Delta'([R])=\sum_{[M],[N]} \nu^{\chi_0(M,N)}\frac{P^R_{M,N}}{a_R}[M]\otimes[N], \qquad \epsilon([R])=\begin{cases}1,&R\cong0,\\0,&R\not\cong0.\end{cases} $$
Each coefficient is finite; the sum need not have finite support. On finite
pure tensors define the **Euler-twisted tensor multiplication** by
$$ ([X]\otimes[Y])\cdot([Z]\otimes[W]) =\nu^{\chi_0(Y,Z)+\chi_0(Z,Y)}([X]\star[Z])\otimes([Y]\star[W]). $$
It is extended to completed tensors only when every output coefficient is a
finite sum. No algebra structure on the whole completion is asserted; this
finite-convergence condition is proved for products of Green images below.
