---
id: def-selmer-structure-for-artinian-galois-representation
kind: definition
title: Selmer structure for an Artinian Galois representation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-absolute-galois-group-of-a-global-field
  - def-completion-of-a-number-field-at-a-prime
proof_strategy: direct
axiom_use: AC is explicit for the chosen separable closures and local embeddings.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Barry Mazur and Karl Rubin, Controlling Selmer groups in the higher core rank case
      url: https://arxiv.org/pdf/1312.4052
      locator: Section 2 and Definition 4.1, printed pp.5–6 and 8; the definition below allows arbitrary residue fields and adds no arithmetic existence claim.
verification: {}
---

## Definition

Assume AC. Let $K$ be a number field with fixed separable closure $K_s$ and absolute Galois group $G_K$. Let $R$ be a commutative principal Artinian local ring, and let $T$ be a finite free $R$-module, given the discrete topology, with a continuous $G_K$-action. Let $S$ be a finite set of places containing all archimedean places and every finite place where $T$ is ramified; if the residue characteristic of $R$ is a prime $p$, require also the places above $p$. For each $v\in S$ choose an embedding of $K_s$ in a separable closure of $K_v$, and let $G_{K_v}$ be the resulting local Galois group. At a finite place outside $S$, let the unramified local subgroup be the kernel of restriction to inertia.

A **Selmer structure** $\mathcal F$ on $T$ consists of $S$ and an $R$-submodule $H^1_{\mathcal F}(K_v,T)\subseteq H^1_{\mathrm{cts}}(G_{K_v},T)$ for each $v\in S$; away from $S$ use the unramified subgroup. The **Selmer module** is the subgroup of global continuous cohomology whose localization lies in the specified local subgroup at every place:
$$H^1_{\mathcal F}(K,T)=\{c\in H^1_{\mathrm{cts}}(G_K,T):\operatorname{loc}_v(c)\in H^1_{\mathcal F}(K_v,T)\text{ for every place }v\}.$$
Here $H^1_{\mathrm{cts}}$ is continuous cocycles modulo continuous coboundaries, and the subgroups outside $S$ are the unramified ones just defined. No finiteness, duality, cartesianness, existence of core rank, or auxiliary-prime assertion is included. In particular $R$ may have an arbitrary residue field; no finite-residue-field assumption is made in this definition.

## Definition references

[[def-number-field]]

[[def-absolute-galois-group-of-a-global-field]]

[[def-completion-of-a-number-field-at-a-prime]]

[Barry Mazur and Karl Rubin, *Controlling Selmer groups in the higher core rank case*, §§2 and 4](https://arxiv.org/pdf/1312.4052)

## Facts & Assumptions

**Given:** The number field, chosen closures and embeddings, Artinian principal local ring, finite free discrete module, continuous action, finite place set and local submodules in the Definition.

[A1] AC supplies the stated separable closures and local embeddings. [[def-axiom-of-choice]]

[F1] The number field, absolute Galois group and local completion are as defined. [[def-number-field]] [[def-absolute-galois-group-of-a-global-field]] [[def-completion-of-a-number-field-at-a-prime]]

## Verification

1.1 Continuous cocycles form an $R$-module because the coefficient action is $R$-linear, and continuous coboundaries form an $R$-submodule. Their quotient is therefore an $R$-module. Restriction to a chosen decomposition group is compatible with coboundaries and is $R$-linear, so every localization map is well defined. [A1, F1, given, algebra]

2.1 Each prescribed local condition and each unramified kernel is an $R$-submodule. The inverse images under the localizations in step 1.1 are $R$-submodules, and their intersection is an $R$-submodule of global cohomology. It is exactly the displayed Selmer module. This definition remains meaningful for a zero module, an infinite residue field, and an empty set of nonarchimedean exceptional places; it asserts no arithmetic theorem. [step 1.1, given, algebra] ∎
