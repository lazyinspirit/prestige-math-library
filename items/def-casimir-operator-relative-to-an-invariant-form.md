---
id: def-casimir-operator-relative-to-an-invariant-form
kind: definition
title: Casimir operator relative to an invariant form
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-trace-form-of-a-finite-dimensional-representation, def-universal-enveloping-algebra, thm-poincare-birkhoff-witt]
justified_by: [lem-the-casimir-operator-is-basis-independent-and-intertwining]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Weibel, Lie Algebra Homology and Cohomology, §7.8.8"
      url: https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf
      locator: "§7.8.8, printed p. 245"
---

## Definition

Let $\mathfrak g$ be finite-dimensional and let $B$ be a nondegenerate,
symmetric, invariant bilinear form on it. If
$x_1,\ldots,x_n$ is a basis and $x^1,\ldots,x^n$ is its $B$-dual basis, the
**Casimir element relative to $B$** is

$$\Omega_B=\sum_{i=1}^n x_i x^i\in U(\mathfrak g).$$

On a representation $\rho:\mathfrak g\to\mathfrak{gl}(V)$, its **Casimir
operator** is

$$\rho(\Omega_B)=\sum_{i=1}^n\rho(x_i)\rho(x^i).$$

The empty sums give zero when $\mathfrak g=0$. Nondegeneracy is exactly what
identifies $\mathfrak g$ with its dual and supplies the dual basis.
Independence of the chosen basis and commutation with the action are proved in
the next lemma.
