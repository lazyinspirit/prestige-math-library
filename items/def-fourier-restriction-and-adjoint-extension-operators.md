---
id: def-fourier-restriction-and-adjoint-extension-operators
kind: definition
title: Fourier restriction and adjoint extension operators
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- def-schwartz-space-and-its-seminorms
- thm-fourier-transform-maps-schwartz-space-continuously-to-itself
- thm-fourier-transform-of-a-finite-complex-measure
- thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation
- def-surface-integral-on-a-compact-c-one-hypersurface
- lem-surface-integral-is-independent-of-c-one-boundary-charts
- def-polar-surface-measure-on-the-unit-sphere
- lem-euclidean-chart-measure-agrees-with-polar-surface-measure
- def-complex-lp-and-euclidean-test-function-conventions
- thm-complex-holder-minkowski-and-the-quotient-norm
- def-complex-measure
- lem-unit-sphere-is-lebesgue-null
- def-countable-choice
proof_strategy: not-applicable
verification:
  precheck: n/a
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: K. Merz, Some notes on restriction theory
    url: https://www.iaa.tu-bs.de/konmerz/ss25/fr/material/NotesOnRestriction.pdf
    locator: '§2, printed pp.5–7, equations (2.1)–(2.3): restriction on test functions, extension and duality; the local proof verifies integrability and density explicitly.'
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix $n\ge2$
and a compact embedded $C^\infty$ hypersurface $S\subseteq\mathbb R^n$. Its
**surface measure** $\sigma$ is fixed as follows.

- For $S=S^{n-1}$ it is the polar surface measure of
  [[def-polar-surface-measure-on-the-unit-sphere]], which agrees with the chart
  surface measure by
  [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]].
- For a general compact hypersurface it is the chart measure of
  [[def-surface-integral-on-a-compact-c-one-hypersurface]], a finite Borel
  measure whose graph density is $\sqrt{1+|Dh|^2}$ by
  [[lem-surface-integral-is-independent-of-c-one-boundary-charts]].

**Restriction.** For a Schwartz function $f\in\mathcal S(\mathbb R^n)$ the
transform $\widehat f$ is again a Schwartz function, in particular an actual
smooth function on $\mathbb R^n$
([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]],
[[def-schwartz-space-and-its-seminorms]]), so
$$R_0f:=\widehat f|_S$$
is a pointwise-defined function on $S$.

**Extension.** For $g\in L^1(\sigma;\mathbb C)$ the set function
$g\sigma:E\mapsto\int_E g\,d\sigma$ is a complex measure on the Borel sets of
$S$ with total variation $|g|\,\sigma$
([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]],
[[def-complex-measure]]), and one writes $(g\sigma)^\vee(x):=\widehat{g\sigma}(-x)$
for the reflected transform of that finite measure, so that
$$Eg:=(g\sigma)^\vee,\qquad Eg(x)=\int_S e^{2\pi ix\cdot\omega}g(\omega)\,d\sigma(\omega)\qquad(x\in\mathbb R^n).$$
The transform theorem
[[thm-fourier-transform-of-a-finite-complex-measure]] gives that $Eg$ is a
bounded uniformly continuous function and that
$$|Eg(x)|\le|g\sigma|(\mathbb R^n)=\int_S|g|\,d\sigma=\|g\|_{L^1(\sigma)}\qquad(x\in\mathbb R^n).$$
For $g\in L^2(\sigma;\mathbb C)$, finiteness of $\sigma$ gives $g\in L^1(\sigma;\mathbb C)$ and the additional estimate
$$|Eg(x)|\le\sigma(S)^{1/2}\|g\|_{L^2(\sigma)}\qquad(x\in\mathbb R^n),$$
where the last inequality is the $p=p'=2$ case of the complex
Holder/Cauchy–Schwarz inequality
[[thm-complex-holder-minkowski-and-the-quotient-norm]] together with finiteness
of the surface measure; here $L^p(\sigma;\mathbb C)$ are the complex Lebesgue
classes of [[def-complex-lp-and-euclidean-test-function-conventions]]. The
assignment $g\mapsto Eg$ is complex-linear, since $g\mapsto g\sigma$ is additive
in the density and integration against a finite measure is additive. The symbol
$R$ denotes the unique bounded extension of $R_0$ when one exists.

Restriction starts on Schwartz data by necessity: for $S=S^{n-1}$ the measure
$\sigma$ is carried by the Lebesgue-null set $S$
([[lem-unit-sphere-is-lebesgue-null]]), so no pointwise restriction is
available for a general ambient $L^{p'}$ class; the companion page's
counterexample records the explicit failure of well-definedness on
equivalence classes.
