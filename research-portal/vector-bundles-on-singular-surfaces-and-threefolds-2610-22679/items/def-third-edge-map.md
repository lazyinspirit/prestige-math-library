---
id: def-third-edge-map
kind: definition
title: Third edge homomorphism
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-third-graded-isomorphism
  - def-motivic-filtration
  - math:def-field
  - math:def-scheme-over-base
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-noetherian-topological-space
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-inverse-of-bijective-group-homomorphism
  - math:def-group-homomorphism
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-third-graded-isomorphism: mathematical-premise
  def-motivic-filtration: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-noetherian-topological-space: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:lem-inverse-of-bijective-group-homomorphism: mathematical-premise
  math:def-group-homomorphism: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:lem-noetherian-open-subsets-are-quasi-compact: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 1.1(1), printed p. 3; Definitions 4.9 and 4.23, printed pp. 21
        and 27
      statement: For qcqs schemes over a prime field, Theorem 1.1(1) provides a
        functorial multiplicative motivic filtration on nonconnective K-theory
        with graded pieces given by shifted motivic complexes. The named third
        edge map and its surjectivity are not stated there.
      hypotheses: A qcqs scheme over a prime field and nonnegative weight. Restriction
        to the fixed field and the third-stage isomorphism are supplied
        separately by the declared local interfaces.
      reading_limits: Read the primary v1 PDF text of Theorem 1.1(1), printed p. 3,
        and the filtration constructions in Definitions 4.9 and 4.23. The third
        edge map and its surjectivity are local formal deductions from the
        declared suppliers; the deeper filtration construction is imported, not
        reconstructed.
proof_strategy: direct
dependency_level: 23
formulation_deps:
  - math:def-axiom-of-choice
  - lem-third-graded-isomorphism
  - def-motivic-filtration
  - math:def-field
  - math:def-scheme-over-base
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-noetherian-topological-space
  - math:lem-inverse-of-bijective-group-homomorphism
  - math:def-group-homomorphism
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - math:def-axiom-of-choice
  - lem-third-graded-isomorphism
  - def-motivic-filtration
  - math:def-field
  - math:def-scheme-over-base
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-noetherian-topological-space
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-inverse-of-bijective-group-homomorphism
  - math:def-group-homomorphism
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:def-grothendieck-universe-closure-convention
---

## Definition
Assume the Axiom of Choice. Fix compatible nested Grothendieck universes $U\in V\in W$ with $\omega\in U$, with the field and scheme data in $U$. Use the unbounded derived enhancement of $V$-small abelian groups considered in $W$, compatible universe enlargements for spectral realizations, and the same smallness and pointed-space conventions as the supplied motivic, stable-spectra and shift-index constructions. These are the size assumptions of the supplied third-graded isomorphism; universe existence is an additional assumption, separate from Choice. Let $k$ be a field and let $X$ be a Noetherian $k$-scheme of Krull dimension $3$. A $k$-scheme means a scheme with a structure morphism $X\to\operatorname{Spec}k$. Noetherian means that $X$ has a finite affine open cover by spectra of Noetherian rings. Its Krull dimension is the chain dimension of its underlying Noetherian topological space: the supremum of the lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets. Here irreducible means not expressible as the union of two proper closed subsets; a one-member chain has length zero.

Write $F^3_{\mathrm{mot}}K(X)$ for the third stage of the decreasing motivic filtration of the nonconnective $K$-theory spectrum of perfect complexes, and $K_0(X)=\pi_0K(X)$. Its third **image-filtration group** is the subgroup
$$F^3_{\mathrm{mot}}K_0(X)=\operatorname{im}\bigl(\pi_0F^3_{\mathrm{mot}}K(X)\longrightarrow K_0(X)\bigr).$$
The arrow is induced by the transition from stage three to stage zero, identified with $K(X)$. Let $p_3$ be the isomorphism from $\pi_0F^3_{\mathrm{mot}}K(X)$ to $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)=H^6(\mathbb Z(3)_{\mathrm{mot}}(X))$ induced by the canonical map to the third graded cofiber and the specified graded comparison. Here $\pi_0$ denotes the zeroth stable homotopy group, and $H^6$ is degree-six cohomology of the weight-three motivic complex.

The **third edge homomorphism** is the composite
$$\epsilon_3:H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)\xrightarrow{\ p_3^{-1}\ }\pi_0F^3_{\mathrm{mot}}K(X)\longrightarrow F^3_{\mathrm{mot}}K_0(X).$$
The second arrow is the stage-to-$K_0$ homomorphism with its codomain restricted to its image. In particular, $\epsilon_3$ is surjective.

## Definition references

[[lem-third-graded-isomorphism]]

[[def-motivic-filtration]]

[[math:def-axiom-of-choice]]

[[math:def-field]]

[[math:def-scheme-over-base]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

[[math:def-dimension-noetherian-topological-space]]

[[math:def-noetherian-topological-space]]

[[math:thm-noetherian-ring-has-noetherian-spectrum]]

[[math:lem-inverse-of-bijective-group-homomorphism]]

[[math:def-group-homomorphism]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:lem-noetherian-open-subsets-are-quasi-compact]]

[[math:def-grothendieck-universe-closure-convention]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the nested-universe, derived-enhancement, enlargement, smallness and pointed-space assumptions in the Definition and [A1], a field $k$, and a Noetherian $k$-scheme $X$ of Krull dimension $3$. These size assumptions are additional to Choice.

**Goal:** Justify the definition of $\epsilon_3$ and its surjectivity.

[A1] [[math:def-grothendieck-universe-closure-convention]] specifies the universe closure conditions. Adopt exactly the compatible size assumptions of [[lem-third-graded-isomorphism]]: the nested universes, unbounded derived enhancement, spectral-realization enlargements, smallness and pointed-space conventions stated in the Definition. Use these compatibly with [[def-motivic-filtration]]. Universe existence and these size bounds are assumed separately from Choice; [[math:def-axiom-of-choice]] supplies the Choice premise inherited by the constructions and the Noetherian topological results below.

[F1] Under these hypotheses, [[lem-third-graded-isomorphism]] supplies the actual third-stage projection $p_3$ as an isomorphism with the displayed motivic cohomology group. It does not assert that the stage-to-$K_0$ map is injective.

[F2] Under [A1], for a quasi-compact quasi-separated $k$-scheme, [[def-motivic-filtration]] supplies the filtration and defines $F^3_{\mathrm{mot}}K_0(X)$ as the image of the stage-to-$K_0$ homomorphism; that homomorphism is surjective onto its image. Take the specified field $k$ in that fixed-field definition, overriding its default algebraically closed field convention. [[math:def-axiom-of-choice]] specifies the inherited Choice assumption.

[F3] [[math:def-field]] supplies the field notion; [[math:def-scheme-over-base]] supplies a scheme with its structure morphism to the base. [[math:def-locally-noetherian-and-noetherian-scheme]] gives the finite Noetherian affine-cover characterization. [[math:def-dimension-noetherian-topological-space]] defines the chain dimension of a Noetherian space, with precisely the lengths used above.

[F4] Under Choice, [[math:thm-noetherian-ring-has-noetherian-spectrum]] makes the spectrum of each Noetherian ring a Noetherian topological space. By [[math:def-noetherian-topological-space]], this means that every ascending chain of open subsets stabilizes.

[F5] [[math:lem-inverse-of-bijective-group-homomorphism]] states that the inverse of a bijective group homomorphism is a group homomorphism. [[math:def-group-homomorphism]] gives the group-operation law and verifies that composition preserves it.

[F6] Under Choice, [[math:lem-noetherian-open-subsets-are-quasi-compact]] states that every open subset of a Noetherian topological space is quasi-compact, including the whole space. By [[math:def-quasi-compact-and-quasi-separated-scheme]], a scheme is quasi-compact when its underlying space is quasi-compact and quasi-separated when the intersection of every two affine open subschemes is quasi-compact. We abbreviate the conjunction by qcqs.

## Justification

1.1 Work under [A1]. By [F3], take a finite affine open cover $X=U_1\cup\cdots\cup U_n$ by spectra of Noetherian rings; $n\geq1$ since $\dim X=3$. By [F4], each underlying space $U_i$ is Noetherian. For any ascending chain of opens $V_0\subseteq V_1\subseteq\cdots$ of $X$, the chain $V_j\cap U_i$ stabilizes at an index $N_i$ for each $i$. Taking $N=\max_iN_i$ shows that all restrictions, hence the opens $V_j$ themselves, agree for $j\geq N$. Thus the underlying space of $X$ is Noetherian, so the dimension notion in [F3] applies exactly as stated. By [F6], every open subset of $X$ is quasi-compact. In particular, $X$ itself and the intersection of any two affine open subschemes are quasi-compact, so $X$ is qcqs. Therefore the filtration in [F2] applies. The field, scheme, dimension and Choice hypotheses of [F1] hold, with all its universe, enlargement, smallness and pointed-space assumptions adopted in [A1], so it supplies the actual isomorphism $p_3$. By [F5], $p_3$ has its unique inverse homomorphism from $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ to $\pi_0F^3_{\mathrm{mot}}K(X)$. [A1, F1, F2, F3, F4, F5, F6, given]

2.1 By [F2], the second arrow in the displayed composite is a well-defined surjective homomorphism onto the stated image subgroup. Compose it with the inverse from step 1.1; [F5] shows that this defines a homomorphism $\epsilon_3$. For any element $y$ of the image subgroup, there exists a stage class $a$ mapping to $y$. Then $p_3(a)$ maps to $y$ under $\epsilon_3$, since $p_3^{-1}(p_3(a))=a$. Thus $\epsilon_3$ is surjective. No choice of preimages for all $y$ simultaneously, and no injectivity of the stage-to-$K_0$ map, is needed for this conclusion. [F1, F2, F5, step 1.1] ∎

## Reading limits
Elmanto–Morrow, Theorem 1.1(1), supplies the prime-field motivic filtration and graded comparison. The third edge map and its surjectivity are local formal deductions from the declared third-graded and filtration suppliers.
