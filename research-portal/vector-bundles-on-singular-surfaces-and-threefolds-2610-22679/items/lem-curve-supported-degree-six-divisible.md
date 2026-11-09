---
id: lem-curve-supported-degree-six-divisible
kind: lemma
title: Divisibility of curve-supported top cohomology
status: published
domain: mathematics
deps:
  - lem-author-149a02132c3b-geometry
  - lem-author-149a02132c3b-restriction-diagram
  - lem-author-149a02132c3b-support-fiber
  - lem-author-149a02132c3b-normalization-surjection
  - lem-author-149a02132c3b-divisible-image
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-149a02132c3b-geometry: mathematical-premise
  lem-author-149a02132c3b-restriction-diagram: mathematical-premise
  lem-author-149a02132c3b-support-fiber: mathematical-premise
  lem-author-149a02132c3b-normalization-surjection: mathematical-premise
  lem-author-149a02132c3b-divisible-image: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Fasel–Yakerson
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 13, middle of Proposition 6.1 proof
dependency_level: 19
---

## Statement
Assume the Axiom of Choice and the completed size conventions. Let $X$ be an affine finite-type threefold over an arbitrary algebraically closed field k, $U=X_{\mathrm{smooth}}$, and $T\subset X$ a closed integral curve contained in U. Then the actual support fiber has
$$H^{6,3}_{\mathrm{mot}}(X/(X\setminus T),\mathbb Z)\cong\mathrm{CH}^3_T(U),$$
and this group and its image in $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ are divisible. On the three-dimensional smooth stratum the right side is the length-order divisor quotient of k(T) on closed points of T and receives the actual surjection from $\operatorname{Pic}(\widetilde T)$, with residue degrees one. No smoothness or normality of T, characteristic restriction on divisibility, or injectivity of support-to-global is assumed.

## Facts & Assumptions
**Given:** The hypotheses in the statement, with the Axiom of Choice and fixed universe bounds.

**Goal:** Construct the stated actual maps and prove their consequence.

[A1] Assume [[math:def-axiom-of-choice]] and the fixed compatible site and universe bounds of the supplied constructions. These are used when applying the actual geometry, comparison and support inputs in step 1.1 and the normalization and divisibility inputs in step 2.1.

[F1] [[lem-author-149a02132c3b-geometry]] supplies the qcqs two-open geometry and the smooth separated finite-type pairs. [[lem-author-149a02132c3b-restriction-diagram]] supplies the actual weight-three motivic-to-cycle restriction diagram over the stated arbitrary algebraically closed field.

[F2] [[lem-author-149a02132c3b-support-fiber]] identifies the unshifted cohomological support fiber with $z_T^3(U,\bullet)[-6]$, after reindexing homological degree $n$ as cochain degree $-n$. In particular its degree-six cohomology is $H_0z_T^3(U,\bullet)=\mathrm{CH}^3_T(U)$, with the actual support maps.

[F3] [[lem-author-149a02132c3b-normalization-surjection]] gives the surjection from the divisible Picard group of the normalization in the dimension-three stratum, and zero in a lower-dimensional smooth stratum. [[lem-author-149a02132c3b-divisible-image]] proves divisibility of the support group and its actual support-to-global image.

## Proof

1.1 Under [A1], apply [F1] to the stated $X,U,T$. All schemes in its two-open diagram are qcqs and the smooth pair is separated finite type over the perfect field $k$. The compatible comparison and excision in [F2] identify the actual unshifted support fiber with $z_T^3(U,\bullet)[-6]$. Taking degree-six cohomology gives $H_0z_T^3(U,\bullet)$, proving the displayed supported Chow isomorphism with the declared cohomological indexing. [A1, F1, F2, given]

2.1 Apply [F3] to this same curve and field. On the three-dimensional smooth stratum its actual normalization map sends each point to its image with residue degree one and surjects from a divisible Picard group to the divisor quotient. In a lower-dimensional stratum the support group is zero. In either case it is divisible; [F3] also gives divisibility of its image under the actual support-to-global homomorphism. This proves every stated assertion without assuming that homomorphism injective. [A1, F3, step 1.1] ∎
