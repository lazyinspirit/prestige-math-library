---
id: lem-author-c5bc2838d897-kcoherent-nonconnective-functor-products
kind: lemma
title: Applying nonconnective K-theory to the enhanced interface
status: published
domain: mathematics
deps:
  - lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness
  - lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback
  - lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal
  - thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
  - lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison
dependency_roles:
  lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness: mathematical-premise
  lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback: mathematical-premise
  lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal: mathematical-premise
  thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
---

## Statement
Assume AC and let X be qcqs. Applying the imported nonconnective functor 𝕂 to small equivalent models gives well-defined spectra 𝕂(Perf(X)) and 𝕂(Perf_T(X)) for every subset T. Exact derived pullbacks give coherent contravariance for qcqs schemes and their pairs. Tensor makes 𝕂(Perf(X)) an E∞ ring spectrum, makes 𝕂(Perf_T(X)) a unital module over it, and gives coherent mixed pairings 𝕂(Perf_T(X))∧𝕂(Perf_S(X))→𝕂(Perf_{T∩S}(X)). The supported spectra are not asserted to have a distinguished ring unit for proper T. These conclusions need neither a degree-zero identification nor a scheme localization theorem.

## Facts & Assumptions
**Given:** qcqs X, subsets T,S, morphisms between qcqs schemes and AC.

**Goal:** Justify exactly the K-theoretic operations needed by the definition.

[F1] [[lem-author-c5bc2838d897-kcoherent-perfect-essential-smallness]] supplies small stable idempotent-complete models.

[F2] [[lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback]] and [[lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal]] supply coherent tensor, pullbacks, modules and mixed products, exact in each variable.

[F3] [[thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input]] gives the nonconnective functor on Cat_perf, the tensor universal property, and its lax symmetric monoidal structure. [[def-stable-spectra-interface]] supplies the smash and all-integer group convention.

## Proof
1.1 By [F1], the whole common-family diagram takes values in essentially small stable idempotent-complete infinity-categories. The inclusion of small models into this essentially small domain is fully faithful and essentially surjective, hence an equivalence of infinity-categories. Extend 𝕂 along this domain equivalence once, or equivalently compose the whole diagram with one inverse equivalence of domains. This gives a diagram of spectra and retains every coherence. Its different inverse choices are naturally equivalent. Thus no independent choice of a skeleton for each object or morphism is used, and the invariant is independent of enhanced presentation. [F1, F3]

2.1 Apply 𝕂 to the exact pullbacks in [F2]. A functor preserves their identity and composition coherences, so these give contravariance on schemes and pairs. In particular the inclusion Perf_T(X)→Perf(X) induces the supported-to-ambient map of spectra. [F2, F3, step 1.1]

2.2 By the tensor universal property in [F3], each separately exact pairing of [F2] is an exact functor out of the corresponding Cat_perf tensor product. Compose its image under 𝕂 with the lax monoidal comparison 𝕂(C)∧𝕂(D)→𝕂(C⊗D). The coherent ambient product and unit make the ambient spectrum an E∞ ring, while the coherent module action makes the supported spectrum a module; the same construction gives the mixed pairings. Coherence follows from the supplied algebra/module operations and the lax symmetric monoidal functor, not merely binary maps in homotopy categories. No unit is inserted into the supported category. [F2, F3, step 1.1]

3.1 These steps only apply the invariant and its coherent products to exact functors. They do not identify π₀ with a separately defined Grothendieck group, identify negative groups by another construction, or prove that a particular scheme-support sequence is a localization sequence. Thus they establish precisely the stated interface. [step 1.1, step 2.1, step 2.2] ∎
