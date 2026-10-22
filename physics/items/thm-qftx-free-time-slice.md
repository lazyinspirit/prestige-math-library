---
id: thm-qftx-free-time-slice
kind: theorem
title: The free Weyl algebra obeys time slice
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-qftx-free-weyl-net
  - def-qftx-green-hyperbolic-interface
  - lem-qftx-causal-time-slice-test-localization
  - lem-qftx-free-weyl-functoriality
  - lem-qftx-green-propagator-symplectic-quotient
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-qftx-free-weyl-net: mathematical-premise
  def-qftx-green-hyperbolic-interface: mathematical-premise
  lem-qftx-causal-time-slice-test-localization: mathematical-premise
  lem-qftx-free-weyl-functoriality: mathematical-premise
  lem-qftx-green-propagator-symplectic-quotient: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Bär, Nicolas Ginoux, and Frank Pfäffle, Wave Equations on Lorentzian Manifolds and Quantization
      url: https://arxiv.org/pdf/0806.1036
      locator: Chapter 4 §4.5, Theorem 4.5.1 and its proof of the time-slice axiom, printed pp. 136–139.
    - title: Christopher J. Fewster and Katarzyna Rejzner, Algebraic Quantum Field Theory—an introduction
      url: https://arxiv.org/pdf/1904.04051v2
      locator: §4.1 A5 and §4.2, time-slice axiom and free scalar quotient, printed pp. 13–17.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume Countable Choice and Dependent Choice. Let $\iota:U\to M$ be a Cauchy morphism of Green-data backgrounds: it is an orientation-preserving, time-orientation-preserving isometric embedding with causally convex open image, compatible scalar operators, and image containing a Cauchy hypersurface of $M$. Assume the Green maps and Cauchy uniqueness in [[def-qftx-green-hyperbolic-interface]]. Then the induced algebraic Weyl map $\alpha_\iota:\mathfrak W(U)\to\mathfrak W(M)$ is surjective. If the induced symplectic quotient map $S_\iota:V(U)\to V(M)$ is injective, then $\alpha_\iota$ is an isomorphism.

## Statement references

[[def-qftx-green-hyperbolic-interface]]

[[def-qftx-free-weyl-net]]

[[lem-qftx-free-weyl-functoriality]]

[[lem-qftx-causal-time-slice-test-localization]]

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, a Cauchy morphism $\iota:U\to M$ with its Green-data interfaces, and the induced quotient map $S_\iota$.

[A1] Assume $\mathrm{AC}_\omega$ and Dependent Choice, with the exact principles of [[def-countable-choice]] and [[def-dependent-choice]].

[F1] [[def-qftx-free-weyl-net]]: $\mathfrak W(M)$ has formal basis $W_M(v)$ indexed by $v\in V(M)$, and its elements are finite linear combinations of those basis symbols.

[F2] [[lem-qftx-causal-time-slice-test-localization]]: every target class $[f]\in V(M)$ has a representative $[\iota_*g]$ with $g\in\mathcal D_g(U)$.

[F3] [[lem-qftx-free-weyl-functoriality]]: $\alpha_{\iota}\bigl(W_U(v)\bigr)=W_M(S_\iota v)$ is a unital $*$-homomorphism; $S_\iota$ is symplectic.

## Proof

1.1 Let $W_M([f])$ be any basis generator of $\mathfrak W(M)$. By [F2] there is $g\in\mathcal D_g(U)$ with $[f]=[\iota_*g]$. Hence $W_M([f])=W_M(S_\iota[g])=\alpha_{\iota}\bigl(W_U([g])\bigr)$ by [F3]. Every element of $\mathfrak W(M)$ is a finite linear combination of basis generators by [F1], so every element has a preimage under $\alpha_\iota$. This proves surjectivity. [A1, F1, F2, F3, given, algebra]

2.1 Suppose $S_\iota$ is injective. If $\sum_{j=1}^n c_jW_U(v_j)$ maps to zero, first combine any repeated $v_j$ so the remaining $v_j$ are distinct. Their images $S_\iota v_j$ are then distinct, and $\alpha_\iota$ sends the sum to $\sum_{j=1}^n c_jW_M(S_\iota v_j)$. The latter can be zero only if every $c_j=0$, since the $W_M(w)$ are a formal vector-space basis by [F1]. Thus $\alpha_\iota$ is injective. Together with step 1.1 it is bijective; the inverse of a bijective algebra homomorphism preserves products, the unit and involution, so it is an isomorphism. [A1, F1, F3, step 1.1, given, algebra] ∎

## Remarks

The Weyl algebra here is the explicit algebraic $*$-algebra of [[def-qftx-free-weyl-net]]. No $C^*$-norm or completion is asserted. Reeh–Schlieder and local factor type remain nonlogical context because their source proof requires an edge-of-the-wedge uniqueness input not supplied by this pair.
