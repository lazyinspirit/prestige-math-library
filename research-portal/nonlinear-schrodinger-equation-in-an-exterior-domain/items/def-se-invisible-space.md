---
id: def-se-invisible-space
kind: definition
domain: mathematics
title: Invisible initial-data spaces
status: published
deps:
  - def-se-dirichlet-scale
  - prop-se-scale-flow
  - def-se-control-cutoffs
  - lem-se-spectral-cutoff-duality
  - lem-author-03489e9088b7-spectral-cutoff-scale-identifications
  - math:def-axiom-of-choice
  - math:def-linear-subspace
dependency_roles:
  def-se-dirichlet-scale: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  lem-se-spectral-cutoff-duality: mathematical-premise
  lem-author-03489e9088b7-spectral-cutoff-scale-identifications: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-linear-subspace: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 8
formulation_deps:
  - def-se-dirichlet-scale
  - prop-se-scale-flow
  - def-se-control-cutoffs
  - lem-se-spectral-cutoff-duality
  - lem-author-03489e9088b7-spectral-cutoff-scale-identifications
  - math:def-axiom-of-choice
  - math:def-linear-subspace
argument_deps:
  - def-se-dirichlet-scale
  - prop-se-scale-flow
  - def-se-control-cutoffs
  - lem-se-spectral-cutoff-duality
  - lem-author-03489e9088b7-spectral-cutoff-scale-identifications
  - math:def-axiom-of-choice
  - math:def-linear-subspace
---

## Definition

Assume the Axiom of Choice. Let $\Omega$ be the smooth exterior domain, $H_D^\sigma(\Omega)$ its Dirichlet spectral scale, $W(t)=e^{it\Delta_D}$ the corresponding evolution, and $\varphi$ the real observation cutoff. For $T>0$ and $-2\le\sigma\le2$, define the invisible initial-data space by
$$N_T^\sigma=\{v_0\in H_D^\sigma(\Omega):\varphi W(t)v_0=0\text{ in }H_D^\sigma(\Omega)\text{ for every }t\in[0,T]\}.$$
For negative $\sigma$, multiplication is the bounded extension defined through the pivot antidual pairing. The space $N_T^\sigma$ is a closed complex linear subspace of $H_D^\sigma(\Omega)$. If $T'\ge T$, then $N_{T'}^\sigma\subseteq N_T^\sigma$; if $-2\le\sigma\le\sigma'\le2$, then $N_T^{\sigma'}\subseteq N_T^\sigma$ under the canonical scale embedding.

## Definition references

[[def-se-dirichlet-scale]]

[[prop-se-scale-flow]]

[[def-se-control-cutoffs]]

[[lem-se-spectral-cutoff-duality]]

[[lem-author-03489e9088b7-spectral-cutoff-scale-identifications]]

[[math:def-axiom-of-choice]]

[[math:def-linear-subspace]]

## Justification

The scale and its pivot antidual convention are specified by [[def-se-dirichlet-scale]], and the assumed Axiom of Choice is the hypothesis used by the scale and flow suppliers [[math:def-axiom-of-choice]]. The cutoff from [[def-se-control-cutoffs]] is smooth and constant outside a ball, so it and its derivatives through order two are bounded. The multiplier result [[lem-se-spectral-cutoff-duality]] therefore gives a bounded complex-linear multiplication operator on every $H_D^\sigma$ in the stated range, including the pivot-antidual extension at negative orders. The evolution [[prop-se-scale-flow]] is bounded and complex-linear on each such space. Consequently $\varphi W(t)$ is a bounded complex-linear operator for each fixed $t$, and $N_T^\sigma$ is the intersection over $t\in[0,T]$ of its closed kernels. It is therefore a closed complex linear subspace. The longer-time inclusion follows directly because $[0,T]\subseteq[0,T']$.

For $\sigma'\ge\sigma$, [[lem-author-03489e9088b7-spectral-cutoff-scale-identifications]] gives a continuous injective embedding from the higher to the lower scale, extending the identity on the common spectral core. The evolution is consistent across the scale by [[prop-se-scale-flow]]. The multiplier actions are also consistent: they agree with ordinary multiplication on the common core, and boundedness on both levels and density of the core in the higher level extend that agreement to all of $H_D^{\sigma'}$. Thus an element whose observation vanishes at the higher level also has zero observation at the lower level, proving the asserted index nesting.

## Source notes

The article is cited for the definition and the two nesting assertions on PDF page 11. The justification uses the independent scale, flow and multiplier suppliers listed above; the article is attribution rather than proof of these properties.
