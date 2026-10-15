---
id: "post-td-classical-indistinguishable-particle-measure"
kind: "postulate"
title: "Indistinguishable-particle positional measure"
status: "draft"
origin: "pipeline"
domain: "physics"
library: "physics"
physical_scope: "Classical models of identical point particles of one species represented only by their positions in a fixed finite spatial region; it does not assert quantum statistics or include momentum states."
deps: [def-td-stable-tempered-continuum-preparation]
dependency_roles:
  def-td-stable-tempered-continuum-preparation: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics (author-hosted Cambridge lecture notes)"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Konstantin K. Likharev, Essential Graduate Physics, Part SM: Statistical Mechanics (2024 author-hosted lecture notes)"
      url: "https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/03%3A_Ideal_and_Not-So-Ideal_Gases/3.01%3A_Ideal_classical_gas"
dependency_level: 4
---

## Postulate

Let $\Lambda\subset\mathbb R^d$ be a bounded Lebesgue-measurable region in the dimensionless coordinates of [[def-td-stable-tempered-continuum-preparation]]. Use the completed product-Lebesgue sigma-algebra on $\Lambda^N$. For $N\geq1$, let
$$D_{\Lambda,N}=\{(x_1,\ldots,x_N)\in\Lambda^N:x_i\ne x_j\text{ whenever }i\ne j\},\qquad \mathcal C_{\Lambda,N}=D_{\Lambda,N}/S_N,$$
where the permutation group $S_N$ acts by relabelling coordinates. Give $\mathcal C_{\Lambda,N}$ the quotient sigma-algebra: $A\subseteq\mathcal C_{\Lambda,N}$ is measurable exactly when its preimage under the quotient map $q_N:D_{\Lambda,N}\to\mathcal C_{\Lambda,N}$ is measurable in the trace of the completed product-Lebesgue sigma-algebra. Identify each orbit with its unordered simple configuration. For $N=0$, set $\mathcal C_{\Lambda,0}=\{\varnothing\}$. If $\lambda_{\Lambda}^{\otimes N}$ is product Lebesgue measure restricted to $D_{\Lambda,N}$, define the sector reference measure by
$$\mu_{\Lambda,N}=\frac1{N!}(q_N)_\#\lambda_{\Lambda}^{\otimes N}\quad(N\geq1),\qquad \mu_{\Lambda,0}(\{\varnothing\})=1.$$
Equivalently, for every nonnegative measurable function $f$ on $\mathcal C_{\Lambda,N}$,
$$\int f(\omega)\,\mu_{\Lambda,N}(d\omega)=\frac1{N!}\int_{D_{\Lambda,N}}f(q_N(x_1,\ldots,x_N))\,d^{dN}x.$$
Collision diagonals have product Lebesgue measure zero, so $\mu_{\Lambda,N}(\mathcal C_{\Lambda,N})=|\Lambda|^N/N!$; in particular, symmetric integrands may use the equivalent integral over all of $\Lambda^N$. Thus $\mu_{\Lambda,N}$ is a finite measure, not generally a probability. Two labelled tuples represent the same state exactly when they are in one $S_N$ orbit. The factor $1/N!$ is an adopted indistinguishable-particle positional convention, not a theorem about classical trajectories or every classical description.

Let $\mathcal C_\Lambda=\bigsqcup_{N\geq0}\mathcal C_{\Lambda,N}$ with the disjoint-union sigma-algebra, and regard each $\mu_{\Lambda,N}$ as a measure on this union supported on its $N$-point sector. Define the unit-intensity finite-region Poisson reference by
$$Q_\Lambda=e^{-|\Lambda|}\sum_{N=0}^{\infty}\mu_{\Lambda,N}.$$
Its total mass is one because $\mu_{\Lambda,N}(\mathcal C_{\Lambda,N})=|\Lambda|^N/N!$ and $e^{-|\Lambda|}\sum_{N\geq0}|\Lambda|^N/N!=1$. This is a positional reference measure in the chosen dimensionless coordinates; it supplies no empirical claim about particle trajectories.
