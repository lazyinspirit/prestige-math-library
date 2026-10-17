---
id: def-certified-matvec-and-vector-arithmetic
kind: definition
title: "Normwise certified matrix-vector and vector-step arithmetic"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-inner-product-norm
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, Computing the action of the matrix exponential, with an application to exponential integrators"
      url: "https://eprints.maths.manchester.ac.uk/1536/3/paper16.pdf"
      locator: "Section 4, Lemma 4.1 and its normwise roundoff analysis, printed pp. 497–498."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Fix a finite complex matrix $M\in\mathbb C^{r\times s}$ with $r,s\ge1$ and the Euclidean norms from [[def-inner-product-norm]]. A **normwise certified vector arithmetic provider** supplies the following outputs together with the stated bounds:

- For a real scalar $c$ and $z\in\mathbb C^s$, a scaled matvec output $\widehat z\in\mathbb C^r$ and an exactly represented nonnegative rational upper bound $\alpha$ satisfying $\|\widehat z-cMz\|_2\le\alpha$. This includes square matrix-vector products and the final Arnoldi basis projection.
- For a real scalar $c$ and vector $z\in\mathbb C^s$, a scaled-vector output $\widehat q\in\mathbb C^s$ and an exactly represented nonnegative rational upper bound $\xi$ satisfying $\|\widehat q-cz\|_2\le\xi$.
- For vectors $x,z\in\mathbb C^s$, a sum output $\widehat s\in\mathbb C^s$ and an exactly represented nonnegative rational upper bound $\zeta$ satisfying $\|\widehat s-(x+z)\|_2\le\zeta$.

The bounds are part of the provider's mathematical contract and must enclose the exact norm errors for the supplied inputs. A call without a sound bound is uncertified and can only lead to an inconclusive status. This definition does not assert that a particular floating-point kernel supplies the contract.
