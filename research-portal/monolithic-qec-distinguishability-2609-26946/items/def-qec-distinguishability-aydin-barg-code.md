---
id: def-qec-distinguishability-aydin-barg-code
kind: definition
domain: physics
title: J equals four Aydin–Barg encoding
status: draft
origin: session
deps:
  - def-qec-distinguishability-angular-basis
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-spin-tensor-cg-conventions
  - def-qec-prereq-ae-error-span-contract
  - lem-qec-prereq-signed-ae-code-product-test
  - def-qec-distinguishability-ae-code
  - thm-qec-prereq-spaced-ae-moment-criterion
  - lem-author-179395ddbb85-exact-tensor-distance-three
dependency_roles:
  def-qec-distinguishability-angular-basis: mathematical-premise
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  def-qec-prereq-ae-error-span-contract: mathematical-premise
  lem-qec-prereq-signed-ae-code-product-test: mathematical-premise
  def-qec-distinguishability-ae-code: formulation-prerequisite
  thm-qec-prereq-spaced-ae-moment-criterion: mathematical-premise
  lem-author-179395ddbb85-exact-tensor-distance-three: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 6, Aydin–Barg bullet and Fig. 4 caption; PDF p. 17, Fig. S5.1
        caption
      statement: The article gives the signed spin-four vectors below, attributes the
        code to Ref. [10], and says it corrects rank-one transitions with
        smaller support separation and the same code distance at lower J than
        its selected absorption–emission example. Its supplementary caption
        gives the transition-label bounds and describes the zero-temperature
        downward branch.
      hypotheses: The article's idealized angular-momentum benchmark and the
        comparison of its selected code instances.
      reading_limits: Read the supplied PDF page 6 image and extracted text at the
        cited page 6 and page 17 locations. This reference attributes the
        article's formulation and comparison; it is not used as proof of
        correction. No figure measurement, numerical replication, experimental
        validation or source audit is claimed.
physical_scope: An idealized spin-four encoding and conditional
  finite-dimensional error model; no laboratory realization or measured
  performance is asserted.
dependency_level: 5
---

## Definition

In the spin-four block, let $|4,m\rangle$ be the orthonormal magnetic basis vector with $m=-4,-3,\ldots,4$. The Aydin–Barg encoding considered in the article maps the logical basis vectors $|0\rangle,|1\rangle$ to $|\bar0\rangle=\sqrt{1/3}|4,-4\rangle+\sqrt{2/3}|4,2\rangle$ and $|\bar1\rangle=\sqrt{2/3}|4,-2\rangle-\sqrt{1/3}|4,4\rangle$. Its code is their complex linear span; the minus sign is part of the encoding. The article attributes this example to its Ref. [10].

For the conditional correction statement, select any subset of target spin blocks from $\{3,4,5\}$ containing the input block $4$. A rank-$k$ spherical tensor family is a family of maps between specified spin blocks satisfying the angular-momentum commutation equations of the spin-tensor convention. The order-one absorption–emission error span is the complex span of the identity and the embedded components of all such families with $k=0$ or $1$ between the input and selected target blocks. Tensor rank specifies the transformation law, not the matrix rank. Components are coherent maps over magnetic labels; the span does not automatically contain every separately resolved matrix unit.

The code satisfies the pair-product correction condition for this span: if $P$ is its orthogonal projector, then $PE^*FP$ is a scalar multiple of $P$ for every pair $E,F$ in the span. Consequently every finite trace-preserving Kraus channel whose Kraus operators lie in that span has an exact decoded recovery: a channel after the noise returns every logical operator to itself after the stated encoding.

The comparator is the selected $J=5$ absorption–emission (Æ) code with codewords $\sqrt{5/7}|5,-2\rangle+\sqrt{2/7}|5,5\rangle$ and $\sqrt{2/7}|5,-5\rangle+\sqrt{5/7}|5,2\rangle$. Here the support of a codeword is the set of magnetic labels with nonzero amplitude. Define minimum magnetic-support separation as $\min_{m\ne n}|m-n|$, with $m,n$ ranging over the union of the two codeword supports. It is two for the signed $J=4$ code and three for the selected $J=5$ comparator.

For an explicit distance convention, define the within-block tensor-rank distance $d_T(\mathcal C)$ as the least integer $r\geq0$ for which a component $T$ of a rank-$r$ spherical tensor family from $V_J$ to itself has $P_{\mathcal C}TP_{\mathcal C}$ not a scalar multiple of $P_{\mathcal C}$, with $d_T=+\infty$ if no such component exists. Both selected codes have $d_T=3$. This is an error-filtration convention on a spin block, independent of a tensor-register operator-weight distance.

The article describes the signed $J=4$ code as correcting the same rank-one transitions as this selected $J=5$ Æ example, with smaller support separation and the same code distance at lower $J$. Its comparison passage does not specify a distance convention. The tensor-rank equality above gives a precise supported interpretation; it is not attributed to the article as its definition of distance. The conditional correction statement above specifies the error family actually covered. The article's zero-temperature model uses the downward $J\to J-1$ branch.

## Definition references

[[def-qec-distinguishability-angular-basis]]

[[def-qec-prereq-spin-tensor-cg-conventions]]

[[def-qec-prereq-ae-error-span-contract]]

[[def-qec-prereq-restricted-logical-channel]]

[[def-qec-distinguishability-ae-code]]

[[thm-qec-prereq-spaced-ae-moment-criterion]]

[[lem-author-179395ddbb85-exact-tensor-distance-three]]

## Facts & Assumptions

[F1] The spin-four magnetic basis is orthonormal, and the spin-tensor convention specifies the tensor-family equations. [[def-qec-distinguishability-angular-basis]] [[def-qec-prereq-spin-tensor-cg-conventions]]

[F2] The selected error span consists of the identity and embedded coherent rank-zero and rank-one tensor components; its pair-product condition is defined using the code projector. [[def-qec-prereq-ae-error-span-contract]]

[F3] For the displayed signed spin-four isometry, the pair-product condition holds for every selected target subset of $\{3,4,5\}$ containing the input block; every finite trace-preserving Kraus channel inside the span has an exact decoded recovery. [[lem-qec-prereq-signed-ae-code-product-test]]

[F4] An isometric encoding has code projector $VV^*$, and exact decoded recovery means that the decoded logical channel is the identity on the logical operator space. [[def-qec-prereq-restricted-logical-channel]]

[F5] The selected comparison code is the displayed spin-five Æ encoding. [[def-qec-distinguishability-ae-code]]

[F6] Two normalized codewords with disjoint magnetic supports separated by at least three and equal moments of orders zero, one and two satisfy the complete selected order-one pair-product condition in the cited error-span contract. [[thm-qec-prereq-spaced-ae-moment-criterion]]

[F7] For the two explicit signed spin-four and selected spin-five codes, the complete order-one pair-product condition implies within-block tensor-rank distance exactly three, in the convention stated above. [[lem-author-179395ddbb85-exact-tensor-distance-three]]

## Justification

**Given:** The stated definitions, hypotheses and cited interfaces.

**Goal:** Justify the stated construction and its scope.

1.1 By [F1], the four displayed magnetic basis vectors are distinct and orthonormal. Each codeword has squared norm $1/3+2/3=1$, and their supports are disjoint, so their inner product is zero. Thus the displayed assignment extends linearly to an isometry $V$ from the two-dimensional logical space. By [F4], its image is the stated code and its orthogonal projector is $P=VV^*$. [given, F1, F2, F3, F4]

1.2 For [F5], the union of magnetic supports is $\{-5,-2,2,5\}$, with consecutive gaps $3,4,3$; each codeword is normalized and their supports are disjoint. Both have first moment zero, since $(-10+10)/7=0$, and second moment ten, since $(20+50)/7=10$. Their zeroth moments are one. Thus [F6] establishes the complete selected order-one pair-product condition for this comparator, with its input block selected. For the signed spin-four code the union is $\{-4,-2,2,4\}$, with gaps $2,4,2$. Hence the stated minimum separations are two and three, at host spins four and five. [F1, F5, F6, algebra]

2.1 The span and pair-product condition are well defined by [F2]. The vectors and target-block hypotheses agree exactly with [F3], which supplies the scalar pair products and the conditional channel conclusion. In particular, the conclusion does not require disjoint error spaces and does not extend merely from the magnetic-label bounds to arbitrary individually resolved matrix units. The attributed comparison and downward-branch sentence are not premises for [F3]. [F1, F2, F3, F4, step 1.1]

3.1 The signed spin-four pair-product condition follows from [F3], and step 1.2 supplies the spin-five condition. The displayed vectors coincide with the two explicit codes in [F7], whose within-block distance definition is the one used here. Therefore [F7] yields $d_T=3$ for both. This local mathematical comparison uses the correction suppliers and the distance lemma; the article is used only for attribution, including its unspecified distance wording and downward-branch model description. [F3, F5, F7, step 1.2] ∎
