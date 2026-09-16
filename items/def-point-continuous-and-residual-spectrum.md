---
id: def-point-continuous-and-residual-spectrum
kind: definition
title: Point continuous and residual spectrum
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectrum-and-resolvent-set-in-a-banach-algebra, def-bounded-linear-operator]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.2.1 (point, residual and continuous spectra), printed pp. 219–221"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Definition

Let $X$ be a nonzero complex Banach space, let $T \in \mathcal B(X)$ be a
bounded operator ([[def-bounded-linear-operator]]) and let
$\lambda \in \mathbb C$. Write $T - \lambda$ for $T - \lambda I_X$, where
$I_X$ is the identity, and recall that $\lambda \in \sigma(T)$ exactly when
$T-\lambda$ is not invertible
([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

The spectral value $\lambda$ is

* in the **point spectrum** $\sigma_p(T)$ when $T - \lambda$ is not injective,
  that is, when $\lambda$ is an eigenvalue;
* in the **continuous spectrum** $\sigma_c(T)$ when $T - \lambda$ is injective,
  has dense range, and is not surjective;
* in the **residual spectrum** $\sigma_r(T)$ when $T - \lambda$ is injective
  and its range is not dense in $X$.

Thus $\sigma_p(T) \cup \sigma_c(T) \cup \sigma_r(T) \subseteq \sigma(T)$, and
the three sets are pairwise disjoint: for $\lambda \in \sigma(T)$ the operator
$T-\lambda$ either fails to be injective, or is injective, and then its range
is either dense or not dense; if it is injective with dense range it cannot be
surjective, because an injective operator with dense range that is surjective
has dense closed range $X$ and bounded inverse.

## Remarks

- **The residual spectrum is the injective case with non-dense range.** No
  closedness is presupposed: $\lambda \in \sigma_r(T)$ simply means that
  $T - \lambda$ is injective and its range is not dense in $X$. The reader
  should not add the hypothesis that the range be closed; the point of the
  definition is to separate dense range from non-dense range, and a non-dense
  range may still fail to be closed.

- **Eigenvalues with non-dense range are residual, not continuous.** If
  $T-\lambda$ is not injective, then $\lambda \in \sigma_p(T)$ and, whatever the
  range is, $\lambda$ is not in $\sigma_c(T)$ or $\sigma_r(T)$ by the disjoint
  classification above. This is why the relation lemma
  [[lem-relations-among-the-five-spectral-parts]] states
  $\sigma_r = \sigma_{cp}\setminus\sigma_p$ rather than identifying
  $\sigma_r$ with the compression spectrum.

- **The three sets are not individually closed.** The spectrum is closed, but
  the point spectrum need not be, and the three parts may meet at accumulation
  points of the whole spectrum; only their union is known to be closed from this
  definition.
