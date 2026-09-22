---
id: def-point-continuous-and-residual-spectrum
kind: definition
title: Point continuous and residual spectrum
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-spectrum-and-resolvent-set-in-a-banach-algebra", "def-bounded-linear-operator", "def-dependent-choice", "thm-bounded-inverse-theorem"]
justified_by: []
axiom_strength: "ZF for the definitions and disjointness; DC for exhaustion of the spectrum."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.2.1 (point, residual and continuous spectra), printed pp. 219–221"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
verification:
  audited: 2026-09-22
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

The three sets are pairwise disjoint by their injectivity and density
conditions, and each is contained in $\sigma(T)$: every listed condition
precludes a two-sided inverse in $\mathcal B(X)$.

Assume additionally Dependent Choice ([[def-dependent-choice]]) for the
partition assertion. If $T-\lambda$ is injective and surjective, the bounded
inverse theorem [[thm-bounded-inverse-theorem]] makes its inverse bounded.
Consequently, for a spectral value with injective dense range, surjectivity
is impossible. Splitting first by injectivity and then by density therefore gives
$$\sigma_p(T)\sqcup\sigma_c(T)\sqcup\sigma_r(T)=\sigma(T)\qquad\text{under DC}.$$
The definitions themselves do not require DC. For $T=0$ on the nonzero space,
$\sigma_p(T)=\{0\}$ and the other two parts are empty, since
$-\lambda I$ has inverse $-\lambda^{-1}I$ for $\lambda\ne0$.

## Remarks

- **The residual spectrum is the injective case with non-dense range.** No
  closedness is presupposed: $\lambda \in \sigma_r(T)$ simply means that
  $T - \lambda$ is injective and its range is not dense in $X$. The reader
  should not add the hypothesis that the range be closed; the point of the
  definition is to separate dense range from non-dense range, and a non-dense
  range may still fail to be closed.

- **Eigenvalues belong only to the point spectrum.** If
  $T-\lambda$ is not injective, then $\lambda \in \sigma_p(T)$ and, whatever the
  range is, $\lambda$ is not in $\sigma_c(T)$ or $\sigma_r(T)$ by the disjoint
  classification above. Consequently
  $\sigma_r=\sigma_{cp}\setminus\sigma_p$: after compression values that are
  eigenvalues are removed, the remaining operators are exactly the injective
  ones with non-dense range. This identity is recorded and proved in
  [[lem-relations-among-the-five-spectral-parts]] rather than identifying
  $\sigma_r$ with the whole compression spectrum.

- **Individual parts need not be closed.** The spectrum is closed, but
  the point spectrum need not be, and the closures of the three disjoint parts
  may meet at accumulation points of the whole spectrum; under DC their union is the closed spectrum by the partition argument above.
