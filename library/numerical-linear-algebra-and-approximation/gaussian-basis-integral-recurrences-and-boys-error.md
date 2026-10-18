---
page: gaussian-basis-integral-recurrences-and-boys-error
title: Gaussian basis integral recurrences and boys error
status: published
requires:
  - stable-special-function-recurrences-and-certified-evaluation
items:
  - def-cartesian-gaussian-primitives-and-contractions
  - def-boys-function-and-coulomb-auxiliary-recurrence
  - def-finite-gaussian-basis-variational-energy-and-gradient
  - thm-gaussian-product-theorem-and-polynomial-shift
  - thm-boys-integral-identities-series-and-incomplete-gamma
  - lem-boys-positive-midpoint-enclosure
  - lem-cartesian-gaussian-moments-and-parameter-derivatives
  - thm-gaussian-contraction-error-energy-gradient-bounds
  - def-hermite-gaussian-coulomb-auxiliary-functions
  - thm-cartesian-gaussian-integrals-absolutely-convergent
  - lem-boys-small-taylor-remainder
  - lem-boys-incomplete-gamma-large-t-tail-bound
  - lem-boys-upward-downward-recurrence-error-amplification
  - thm-cartesian-pair-hermite-expansion-and-coefficient-recurrence
  - thm-cartesian-gaussian-raising-lowering-and-kinetic-recurrences
  - thm-positive-coulomb-bilinear-cauchy-schwarz-screening
  - thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas
  - alg-certified-boys-finite-budget-branch-evaluation
  - thm-boys-branch-evaluation-enclosures-are-sound
  - alg-finite-gaussian-basis-integral-recurrence-evaluation
  - thm-finite-gaussian-integral-evaluator-soundness-and-screening-error
examples: []
---

This page defines finite Cartesian Gaussian primitives and contractions, then proves their Gaussian product, moment, derivative, and kinetic recurrences. The one- and two-electron Coulomb integrals are Lebesgue integrals; local integrability of the Coulomb singularities and Gaussian decay establish absolute convergence. A finite Hermite expansion reduces nuclear attraction and electron-repulsion terms to the Boys family and its auxiliary recurrence table.

The geometric convention for a pair of primitive exponents $a,b>0$ is shown below in the one-dimensional projection along the segment joining $A$ to $B$. The product center $P=(aA+bB)/(a+b)$ lies at fraction $b/(a+b)$ of the distance from $A$ to $B$. The drawing uses the illustrative ratio $a:b=13:7$; all integral identities are proved algebraically and do not rely on the picture.

```tikz
\begin{tikzpicture}[>=stealth]
  \coordinate (A) at (0,0);
  \coordinate (B) at (6,0);
  \coordinate (P) at (2.1,0);
  \draw[thick] (A)--(B);
  \fill (A) circle (2pt) node[below] {$A$};
  \fill (P) circle (2pt) node[below] {$P=(aA+bB)/(a+b)$};
  \fill (B) circle (2pt) node[below] {$B$};
  \draw[<->] (0,0.55)--(2.1,0.55) node[midway,above] {$7/20$ of $|AB|$};
  \draw[<->] (2.1,0.55)--(6,0.55) node[midway,above] {$13/20$ of $|AB|$};
\end{tikzpicture}
```

For Boys evaluation, the small-$T$ branch uses a Taylor remainder only after its terms are decreasing; bounded arguments use a positive midpoint rule with a derivative enclosure; and large arguments use the scaled incomplete-gamma representation with a separate tail bound. Upward and downward recurrences carry explicit interval-radius amplification estimates. The finite evaluator chooses a direction from its computed bounds and may return `inconclusive` when its cap cannot certify the requested tolerance.

Each Boys seed binds its own order and receives finite child-call budgets. The integral algorithm fixes each auxiliary cutoff from the sum of the participating primitive angular degrees, deterministic update order, memoized pair and auxiliary tables, and a work counter. Coulomb screening operates on the input contracted basis, including every primitive contraction coefficient in its diagonal bounds, and uses the positive Coulomb form and Cauchy–Schwarz; all skipped energy contributions are accumulated in a reported bound. The separate tensor theorem gives energy and gradient error estimates with explicit basis size $n$, contracted size $r$, and coefficient norms. These are finite integral and tensor-contraction results; no Hartree–Fock postulate, universal recurrence stability, or exact-sparsity claim is made.
