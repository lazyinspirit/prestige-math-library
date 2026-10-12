---
page: plancherel-measure-and-asymptotic-young-diagrams
title: Plancherel Measure and Asymptotic Young Diagrams
status: published
requires: [frobenius-characteristic-and-the-symmetric-group-character-dictionary,
           specht-modules-and-the-irreducibles-of-the-symmetric-group,
           the-branching-rule-and-the-young-graph,
           the-hook-length-formula-and-rsk-correspondence,
           finite-probability-spaces-and-random-variables,
           modes-of-convergence-for-random-variables,
           weak-convergence-tightness-and-representation,
           central-limit-theorems,
           brownian-motion-construction-and-continuity]
items:
  - def-monic-probabilists-hermite-polynomials
  - def-plancherel-measure-on-partitions
  - lem-bounded-lipschitz-profile-moments-control-uniform-distance
  - lem-standard-gaussian-is-determined-by-its-moments
  - def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram
  - lem-hermite-orthogonality-and-monomial-expansion
  - prop-plancherel-weights-sum-to-one
  - thm-multivariate-method-of-moments-for-a-determinate-limit
  - thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law
  - def-logan-shepp-vershik-kerov-limit-profile
  - def-shifted-character-observables-and-profile-moments
  - lem-rsk-union-bound-localizes-plancherel-profiles
  - def-joint-convergence-and-normalized-cycle-character-observables
  - prop-limit-profile-moments-are-central-binomial-coefficients
  - prop-plancherel-expectations-of-shifted-character-observables
  - thm-shifted-character-basis-and-weight-filtration
  - def-normalized-shifted-character-basis-elements
  - lem-profile-moment-generators-and-shifted-character-basis
  - lem-shifted-character-multiplication-by-p-k
  - lem-hermite-leading-terms-for-normalized-shifted-characters
  - prop-scaled-plancherel-profile-moments-converge-in-probability
  - thm-kerov-central-limit-theorem-for-normalized-cycle-characters
  - thm-plancherel-young-diagrams-converge-to-the-limit-shape
  - rem-rsk-longest-increasing-subsequence-consequences-remain-rg11-owned
examples: []
---

This page studies the Plancherel measure on Young diagrams, the asymptotic
shape of a typical diagram, and Kerov's central limit theorem for the
normalized cycle characters, on the representation-theoretic base of
[[frobenius-characteristic-and-the-symmetric-group-character-dictionary]],
[[specht-modules-and-the-irreducibles-of-the-symmetric-group]],
[[the-branching-rule-and-the-young-graph]] and
[[the-hook-length-formula-and-rsk-correspondence]], and the probability base of
[[finite-probability-spaces-and-random-variables]],
[[modes-of-convergence-for-random-variables]],
[[weak-convergence-tightness-and-representation]] and
[[central-limit-theorems]] and
[[brownian-motion-construction-and-continuity]] (the Gaussian-moment supplier).

The measure itself is $P_n(\lambda)=(f^\lambda)^2/n!$
([[def-plancherel-measure-on-partitions]]), normalized by the sum-of-squares
identity ([[prop-plancherel-weights-sum-to-one]]) and realized as the law of
the Robinson-Schensted shape of a uniform permutation
([[thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law]]). The
scaled Russian profile of a diagram is introduced on
[[def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram]], its profile
moments on [[def-shifted-character-observables-and-profile-moments]], and the limit
profile $\Omega$ on [[def-logan-shepp-vershik-kerov-limit-profile]], and the
law of large numbers for the profile is proved first in moment form
([[prop-scaled-plancherel-profile-moments-converge-in-probability]]) and then
uniformly ([[thm-plancherel-young-diagrams-converge-to-the-limit-shape]]),
using an elementary RSK union bound
([[lem-rsk-union-bound-localizes-plancherel-profiles]]) and the finite-moment
topology of bounded Lipschitz profiles
([[lem-bounded-lipschitz-profile-moments-control-uniform-distance]]).

The character fluctuation theory is carried by the shifted character
observables $p_\rho^\#$ and their Hermite normalization. The algebra
$A=\mathbb R[\tilde p_2,\tilde p_3,\dots]$ with the basis $\{p_\rho^\#\}$,
the Kerov filtrations and the top-term multiplication rule are set up on
[[def-shifted-character-observables-and-profile-moments]] and
[[thm-shifted-character-basis-and-weight-filtration]], with the exact $p_1^\#$ product and leading terms for $p_k^\#$
in [[lem-shifted-character-multiplication-by-p-k]] and the
generator expansion [[lem-profile-moment-generators-and-shifted-character-basis]];
the Plancherel expectations [[prop-plancherel-expectations-of-shifted-character-observables]]
and the limit values [[prop-limit-profile-moments-are-central-binomial-coefficients]]
identify the multiplicative functional, and the monic Hermite polynomials
([[def-monic-probabilists-hermite-polynomials]],
[[lem-hermite-orthogonality-and-monomial-expansion]],
[[lem-hermite-leading-terms-for-normalized-shifted-characters]]) supply the
moment comparison. Determinacy of the Gaussian limit is a local result
([[lem-standard-gaussian-is-determined-by-its-moments]]) feeding the
multivariate moment method
([[thm-multivariate-method-of-moments-for-a-determinate-limit]]), which
proves Kerov's central limit theorem
([[thm-kerov-central-limit-theorem-for-normalized-cycle-characters]]) for
joint convergence in distribution of the normalized cycle characters
([[def-joint-convergence-and-normalized-cycle-character-observables]],
[[def-normalized-shifted-character-basis-elements]]).
The closing remark
[[rem-rsk-longest-increasing-subsequence-consequences-remain-rg11-owned]] records
that no LIS fluctuation, Baik-Deift-Johansson or Tracy-Widom statement is
claimed here. The Axiom of Choice is declared for the Gaussian target law, Gaussian
determinacy, Hermite orthogonality, the multivariate moment method, and the
character CLT. The Hermite recurrence itself, the finite measures, profiles
and law-of-large-numbers arguments are choice-free.
