---
id: def-classical-lie-action-brst-complex
kind: definition
title: Classical Lie-action BRST cochain complex
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-chevalley-eilenberg-cochains
  - def-chevalley-eilenberg-differential
  - def-lie-algebra-over-a-field
  - def-representation-of-a-lie-algebra
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, §7.7, Lie Algebra Homology and Cohomology"
      url: "https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf"
      locator: "§7.7, Definition 7.7.1 and Corollary 7.7.3, printed pp. 239–241 (PDF pp. 23–25): the Chevalley–Eilenberg complex, cochains, and coboundary formula."
---

## Definition

Let $k$ be a characteristic-zero field, let $\mathfrak g$ be a Lie algebra over
$k$, and let $A$ be a unital commutative $k$-algebra. A **classical
Lie-action BRST input** is a Lie algebra homomorphism
$\rho:\mathfrak g\to\operatorname{End}_k(A)$ whose values are derivations:
for $x\in\mathfrak g$ and $a,b\in A$,
$$\rho(x)(ab)=\rho(x)(a)b+a\rho(x)(b),\qquad \rho(x)(1)=0.$$
In particular, $A$ is a $\mathfrak g$-module, so its Chevalley–Eilenberg
cochains are
$$C^n_{\mathrm{BRST}}(\mathfrak g,A)=\operatorname{Hom}_k(\Lambda^n\mathfrak g,A)\quad(n\geq0),$$
and are zero for $n<0$. Define the degree-$+1$ **classical Lie-action BRST
operator** by the fixed zero-based formula
$$\begin{aligned}(d_{\mathrm{BRST}}f)(x_0,\ldots,x_n)={}&\sum_{i=0}^n(-1)^i\rho(x_i)f(x_0,\ldots,\widehat{x_i},\ldots,x_n)\\&+\sum_{0\leq i<j\leq n}(-1)^{i+j}f([x_i,x_j],x_0,\ldots,\widehat{x_i},\ldots,\widehat{x_j},\ldots,x_n).\end{aligned}$$
A hat denotes omission; the bracket is inserted first. This is exactly the
Chevalley–Eilenberg differential for the stated representation, with the
BRST name reserved here for this classical Lie-action model.

Its square-zero property and the resulting quotient cohomology are established
in [[thm-classical-lie-action-brst-differential-squares-zero]]. This model does
not claim a Koszul–Tate resolution, a BFV charge for arbitrary first-class
constraints, reducible or open gauge algebras, field-dependent structure
functions, or quantum BRST cohomology.
