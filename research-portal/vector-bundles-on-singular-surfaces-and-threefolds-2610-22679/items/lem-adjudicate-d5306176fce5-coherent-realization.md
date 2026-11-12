---
id: lem-adjudicate-d5306176fce5-coherent-realization
kind: lemma
title: A coherent spectral realization of derived abelian complexes
domain: mathematics
deps:
  - thm-author-4f716d60801a-derived-enhancement-input
  - thm-adjudicate-60ab133bec72-enhanced-mapping-input
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 4
sources:
  references:
    - title: Jacob Lurie, Higher Algebra (September 18, 2017)
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Theorem 7.1.2.13 and proof, printed pp. 1212–1213; Corollary 4.2.3.3,
        p. 527; Corollary 4.2.4.7, p. 531
      statement: The derived infinity-category of modules over a commutative ring is
        canonically equivalent, preserving tensor units, to modules over its
        discrete E-infinity ring spectrum. The proof identifies homology with
        maps from shifts of the unit. Module limits are computed on underlying
        spectra, and maps from the free rank-one module agree with maps from the
        sphere into the underlying spectrum.
      hypotheses: Use R = Z, unbounded complexes, the derived infinity-category rather
        than only its triangulated homotopy category, and small diagrams in the
        fixed universes. For the module assertions take the ambient monoidal
        category and its left action to be spectra.
      reading_limits: In this repair, read the theorem statement and its displayed
        proof in the primary PDF extraction, and the statements of the two
        corollaries. Checked the module-limit hypotheses against the surrounding
        text and Proposition 4.2.3.1; both ambient categories are spectra. Their
        operadic, model-structure and compact-generation antecedents are
        imported, not reconstructed. The cochain sign convention is obtained by
        reversing the homological grading. The composition and choice comparison
        below are local arguments; no motivic construction is imported from
        these locators.
status: draft
dependency_roles:
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  thm-adjudicate-60ab133bec72-enhanced-mapping-input: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
formulation_deps:
  - thm-author-4f716d60801a-derived-enhancement-input
  - thm-adjudicate-60ab133bec72-enhanced-mapping-input
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
argument_deps:
  - thm-author-4f716d60801a-derived-enhancement-input
  - thm-adjudicate-60ab133bec72-enhanced-mapping-input
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
---

## Statement
Assume the Axiom of Choice and the fixed compatible universes of the derived and spectral interfaces. Let $\mathcal D(\mathbb Z)$ be the stable infinity-localization of unbounded cochain complexes of abelian groups at quasi-isomorphisms; its homotopy category is $D(\mathbb Z)$. Let $H\mathbb Z$ denote the discrete Eilenberg–Mac Lane ring spectrum of the integers. Fix the unit-preserving equivalence $\Phi:\operatorname{Mod}_{H\mathbb Z}\simeq\mathcal D(\mathbb Z)$ and an inverse with its equivalence data. Here a module spectrum is a spectrum with an $H\mathbb Z$ action including its associative and unital coherences; morphisms are coherent linear maps. Write $U$ for the forgetful functor to spectra and define
$$\mathcal H:=U\Phi^{-1}:\mathcal D(\mathbb Z)\longrightarrow\mathrm{Sp}.$$
This is a coherent functor preserving small limits, zero objects, fibers and integer shifts, with natural identifications
$$\pi_i\mathcal H(C)\cong H^{-i}(C),\qquad \mathcal H(C[r])\simeq\mathcal H(C)[r]$$
for every derived complex $C$ and all integers $i,r$. Different inverse data for the fixed equivalence give naturally equivalent functors. Thus composing any supplied coherent complex-valued diagram with $\mathcal H$ gives a coherent spectral diagram, including its restriction arrows, limits and fibers, independent up to equivalence of those inverse data. No lift of an arbitrary ordinary $D(\mathbb Z)$-valued diagram is asserted.

## Statement references
[[thm-author-4f716d60801a-derived-enhancement-input]]

[[thm-adjudicate-60ab133bec72-enhanced-mapping-input]]

[[def-stable-spectra-interface]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions
**Given:** Choice, compatible universes, the enhanced derived category, the fixed equivalence $\Phi$ and its inverse data, and the integer indices in the Statement.

**Goal:** Construct the coherent realization and justify its exactness, indexing and independence from inverse data.

[F1] [[thm-author-4f716d60801a-derived-enhancement-input]] supplies $\mathcal D(\mathbb Z)$ by taking the ring to be $\mathbb Z$. Its cochain shift has $C[r]^q=C^{q+r}$ and differential $(-1)^r d_C$. [[def-stable-spectra-interface]] supplies spectra, their limits and fibers, and $\pi_i(E)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[i],E)$.

[F2] [[thm-adjudicate-60ab133bec72-enhanced-mapping-input]] supplies the derived/module target and coherent mapping-space formalism. Reference 0 specifies the unit-preserving equivalence $\Phi$, the underlying-spectrum limit criterion for all small diagrams, and the unit mapping equivalence. The proof of its Theorem 7.1.2.13 identifies $\operatorname{Hom}_{D(\mathbb Z)}(\mathbb Z,C[n])$ with $H^n(C)$ after reversing homological grading.

[A1] Assume [[math:def-axiom-of-choice]] and the same universe existence and size conventions as [F1]. Choice is inherited from the supplied unbounded enhancement and spectral foundations; no choice of a representative complex for each value of a diagram is made.

## External input
Reference 0 imports the normalized derived/module equivalence, the module limit criterion and the unit mapping formula used in [F2]. Their hypotheses are checked with $R=\mathbb Z$ and spectra as ambient category. These established inputs are not proved here. Their composition into $\mathcal H$ and the indexing calculation are the local argument below.

## Proof
1.1 Under [A1], [F1] and [F2] supply actual enhanced categories and functors. Compose the inverse equivalence with $U$ to obtain $\mathcal H$ on objects, arrows and all higher simplices. An equivalence preserves limits by their mapping-space universal property, and $U$ computes them by [F2]; hence $\mathcal H$ preserves small limits. The zero module has zero underlying spectrum. It follows that $\mathcal H$ preserves fibers and loops. Suspension is inverse to loops in both stable categories, so it also preserves suspension and every integer shift. For two inverse functors $E,E'$ to the fixed $\Phi$, their coherent unit and counit give $E\simeq E\Phi E'\simeq E'$. Applying $U$ gives a natural equivalence of realizations. Applying such an equivalence to a coherent diagram and its limiting cones gives equivalent diagrams and limits, including the fiber projections. [F1, F2, A1, given]

2.1 For $N=\Phi^{-1}C$, shift compatibility and the unit mapping equivalence in [F2] give $\pi_i(UN)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S,UN[-i])\cong\pi_0\operatorname{Map}_{\operatorname{Mod}_{H\mathbb Z}}(H\mathbb Z,N[-i])$. The unit-preserving equivalence carries this to $\operatorname{Hom}_{D(\mathbb Z)}(\mathbb Z,C[-i])=H^{-i}(C)$ by [F2]. All identifications are natural in enhanced arrows. Precomposing $\mathcal H$ with a supplied coherent functor therefore gives the asserted coherent realization of that entire functor; step 1.1 gives its limit, fiber and choice comparisons. This proves the claim for supplied enhanced diagrams without constructing an enhancement from ordinary derived-category arrows. [F1, F2, A1, step 1.1] ∎
