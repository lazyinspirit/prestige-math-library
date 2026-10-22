---
id: def-link-surgery-filtered-complex-for-double-branched-cover
kind: definition
title: "Link-surgery filtered complex for a double branched cover"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-double-branched-cover-of-an-oriented-link
  - def-hat-heegaard-floer-complex-of-a-closed-three-manifold
  - def-filtered-chain-complex
justified_by:
  - lem-os-link-surgery-filtered-complex-and-triangle
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §§2 and 4"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Definition

Let $D$ be a finite regular diagram of an oriented link $L$ with ordered crossing set $\{1,\ldots,n\}$. The resolution cube has vertices $I\in\{0,1\}^n$, and $D(I)$ is obtained by applying the indicated local smoothing at every crossing. The link-surgery filtered module associated to $D$ is the direct sum
$$
C_D=\bigoplus_{I\in\{0,1\}^n}\widehat{CF}(\Sigma(D(I));\mathbb F_2),
$$
with the summand for $I$ in increasing filtration degree $n-|I|$. Choose the subordinate Heegaard multi-diagram, compatible perturbation data and top-generator cycles for successive attaching-curve systems. The diagonal component of the candidate differential is the ordinary hat disk differential. For $I<J$ coordinatewise, sum over every ordered path $I=I_0<I_1<\cdots<I_r=J$ changing one coordinate at each step. Its summand counts the zero-dimensional holomorphic $(r+2)$-gon spaces with input at the $I$ vertex, the selected top-generator cycles between each pair of successive attaching systems, and output at the $J$ vertex. The count includes the allowed source conformal parameters and imposes zero basepoint multiplicity. These are the surgery polygon maps; the component is zero if $I\nleq J$. Thus changing several crossings is a sum over paths and polygon counts, not an arbitrary direct edge map. The increasing filtration is $F_pC_D=\bigoplus_{|I|\ge n-p}\widehat{CF}(\Sigma(D(I));\mathbb F_2)$, extended by zero below $0$ and by $C_D$ at and above $n$. Thus a component increasing $|I|$ lowers its filtration degree and preserves every $F_p$. The cube direction and the reduced Khovanov cochain degree remain separate indices. This is a filtered chain complex only after the polygon-count finiteness, square-zero, and total-homology identifications in the surgery lemma have been established.

## Definition references

[[def-double-branched-cover-of-an-oriented-link|Double branched covers of links]]

[[def-hat-heegaard-floer-complex-of-a-closed-three-manifold|Hat Floer diagram-level chain module]]

[[def-filtered-chain-complex|Increasing filtration preserved by a differential]]

[[lem-os-link-surgery-filtered-complex-and-triangle|Required well-definedness and surgery identities]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §§2 and 4](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)
