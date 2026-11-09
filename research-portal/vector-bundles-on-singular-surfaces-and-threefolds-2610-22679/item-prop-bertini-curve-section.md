---
title: Bertini curve functional with a prescribed avoidance locus
status: published
research_item: prop-bertini-curve-section
dependency_level: 17
---

PDF p. 15: Theorem6.7 second Bertini application

## Prerequisites

- [prop-swan-bertini-point-section](item-prop-swan-bertini-point-section)
- [lem-regular-section-parameter-family](item-lem-regular-section-parameter-family)
- [lem-author-27d786ff4d27-dual-global-controls](item-lem-author-27d786ff4d27-dual-global-controls)
- [lem-author-27d786ff4d27-common-core-nonempty](item-lem-author-27d786ff4d27-common-core-nonempty)
- [lem-author-27d786ff4d27-fixed-locus-avoidance](item-lem-author-27d786ff4d27-fixed-locus-avoidance)
- [lem-author-27d786ff4d27-chartwise-integrality](item-lem-author-27d786ff4d27-chartwise-integrality)
- [lem-author-27d786ff4d27-clopen-scope](item-lem-author-27d786ff4d27-clopen-scope)
- [thm-author-27d786ff4d27-swan-controlled-bertini](item-thm-author-27d786ff4d27-swan-controlled-bertini)
- [thm-author-27d786ff4d27-relative-jacobian-openness](item-thm-author-27d786ff4d27-relative-jacobian-openness)
- [thm-author-27d786ff4d27-determinantal-height](item-thm-author-27d786ff4d27-determinantal-height)
- [thm-author-fc2380accb47-normal-geometric-input](item-thm-author-fc2380accb47-normal-geometric-input)
- [thm-author-fc2380accb47-finite-type-geometric-input](item-thm-author-fc2380accb47-finite-type-geometric-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume AC and the preceding point-section construction over an algebraically closed field $k$ of any characteristic. First suppose the normal affine threefold $X$ is integral. Let $U=X\setminus S$ and $Q|_U$ be its rank-two kernel bundle. For every fixed closed subset $Z\subset U$ of codimension at least two, there exists a functional $t:Q|_U\to\mathcal O_U$ whose scheme-theoretic zero locus $Y$ is nonempty, geometrically integral, smooth over $k$, and of pure codimension two in $U$, and satisfies $Y\cap Z=\varnothing$. In particular it is smooth outside $U_{\mathrm{sing}}$, and can be chosen entirely inside $U_{\mathrm{sm}/k}$ by adjoining $U_{\mathrm{sing}}$ to the fixed avoidance set. The parameter may depend on $Z$.

For a normal affine threefold understood as a finite disjoint union of integral threefolds, apply this assertion on each clopen component: there is a single functional with zero scheme a finite disjoint union of nonempty smooth geometrically integral codimension-two curves, one per component, avoiding the prescribed $Z$. Global irreducibility is asserted in the integral case, not for every arbitrary fixed pair $(U,Q)$ on a disconnected scheme; the counterexample and exact scope correction are proved in the component lemma. The global theorem6.7 can be reduced to these components and does not require a new connectedness hypothesis. If “threefold” is interpreted as allowing additional lower-dimensional components, the curve assertion concerns its three-dimensional clopen components; the theorem's lower-dimensional cases must be handled in their own dimension, rather than falsely called curves here.

## Facts & Assumptions
**Given:** The exact preceding coherent kernel $Q$ and open $U$, the fixed $Z$, AC, and the stated component convention. A functional is a section of $(Q|_U)^\vee$ and its zero locus is defined by its coefficient ideal.

**Goal:** Supply actual nonempty irreducible Bertini curves in all characteristics with the correct avoidance quantifier and component scope.

[F1] [lem-author-27d786ff4d27-dual-global-controls](item-lem-author-27d786ff4d27-dual-global-controls) builds the global dual-section family and controlling charts of $W=U\setminus(Z\cup U_{\mathrm{sing}})$.

[F2] [lem-author-27d786ff4d27-common-core-nonempty](item-lem-author-27d786ff4d27-common-core-nonempty), [lem-author-27d786ff4d27-fixed-locus-avoidance](item-lem-author-27d786ff4d27-fixed-locus-avoidance) and [lem-author-27d786ff4d27-chartwise-integrality](item-lem-author-27d786ff4d27-chartwise-integrality) prove the simultaneous nonempty smooth geometrically integral curve using the exact Swan input.

[F3] [lem-author-27d786ff4d27-clopen-scope](item-lem-author-27d786ff4d27-clopen-scope) proves the componentwise assertion and its fixed-pair limitation. [prop-swan-bertini-point-section](item-prop-swan-bertini-point-section) supplies coherence and the preceding pair; [lem-regular-section-parameter-family](item-lem-regular-section-parameter-family) fixes the actual incidence/zero-ideal convention.

## Proof
1.1 In the integral case normality and dimension theory make $Z\cup U_{\mathrm{sing}}$ closed of dimension at most one, so its complement $W$ is a nonempty smooth integral threefold. Apply [F1] to the coherent dual extension on $X$ and this $W$. This supplies global functionals on $Q|_U$, not merely unrelated functions on its affine charts. [F1, F3, given]

2.1 Apply [F2]. The finite intersection of coefficient opens supplies a $k$-parameter avoiding the fixed bad locus, having a nonempty zero on the common core, and giving smooth geometrically integral one-dimensional zero schemes on all charts. Their common open core is dense in every chart zero, proving global irreducibility. This proves every claimed property of the scheme-theoretic zero locus $Y$. The chosen coefficient open depends on $Z$, exactly expressing $\forall Z\,\exists t$. [F1, F2, step 1.1]

3.1 In the finite clopen threefold-component case apply step 2.1 separately to each component and assemble the sections, as proved in [F3]. This gives the asserted finite union and retains codimension, smoothness and avoidance. [F3] proves why one globally irreducible zero curve cannot generally be promised for an arbitrary fixed pair under the broader disconnected convention. Thus the integral theorem and strongest componentwise construction are both retained, without turning conventional prescribed-avoidance wording into an article defect. This completes the stated scope. [F3, step 2.1] ∎

## Source/application note
The article's existence sentence and condition(4) are read in their ordinary prescribed-locus sense. Taking $Z=Y$ after choosing $t$ reverses the intended quantifiers and is not an original-paper counterexample. KM82 section3 full text was not read; the substantial external theorem actually used is Swan1974 Theorem1.4 and its explicit controlling-family proof, read in the original scans. The support consumer may use the integral case on each clopen component, or carry the finite union; it must not silently assume a globally irreducible curve on every disconnected fixed pair.
