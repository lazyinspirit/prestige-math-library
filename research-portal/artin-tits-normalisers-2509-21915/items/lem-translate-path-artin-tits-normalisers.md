---
id: lem-translate-path-artin-tits-normalisers
kind: lemma
title: Translation between relative arrangements in the geodesic argument
status: published
domain: mathematics
origin: pipeline
deps:
  - thm-chamber-labelling-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - def-relative-cone-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
  - def-chamber-paths-artin-tits-normalisers
  - def-geodesic-path-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - def-real-coxeter-interface-artin-tits-prerequisites
  - prop-parabolic-minimum-interface-artin-tits-prerequisites
  - prop-adjacent-wall-formula-artin-tits-normalisers
  - prop-tits-cone-basic-artin-tits-normalisers
dependency_roles:
  thm-chamber-labelling-artin-tits-normalisers: mathematical-premise
  def-chamber-labels-artin-tits-normalisers: mathematical-premise
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  def-chambers-walls-artin-tits-normalisers: mathematical-premise
  def-chamber-paths-artin-tits-normalisers: mathematical-premise
  def-geodesic-path-artin-tits-normalisers: mathematical-premise
  def-simple-wall-crossing-artin-tits-normalisers: mathematical-premise
  def-real-coxeter-interface-artin-tits-prerequisites: mathematical-premise
  prop-parabolic-minimum-interface-artin-tits-prerequisites: mathematical-premise
  prop-adjacent-wall-formula-artin-tits-normalisers: mathematical-premise
  prop-tits-cone-basic-artin-tits-normalisers: mathematical-premise
formulation_deps:
  - thm-chamber-labelling-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - def-relative-cone-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
  - def-chamber-paths-artin-tits-normalisers
  - def-geodesic-path-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - def-real-coxeter-interface-artin-tits-prerequisites
  - prop-parabolic-minimum-interface-artin-tits-prerequisites
argument_deps:
  - thm-chamber-labelling-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - def-relative-cone-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
  - def-chamber-paths-artin-tits-normalisers
  - def-geodesic-path-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - def-real-coxeter-interface-artin-tits-prerequisites
  - prop-parabolic-minimum-interface-artin-tits-prerequisites
  - prop-adjacent-wall-formula-artin-tits-normalisers
  - prop-tits-cone-basic-artin-tits-normalisers
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 14, Proposition 3.29, final proof paragraph
      statement: Translation by $z^{-1}$ carries the relative chamber arrangement for
        $J$ to that for $L$, preserves geodesic paths and simple crossing
        labels, and preserves the associated wall word element.
      hypotheses: The standing Coxeter-system and relative-arrangement conventions,
        with $(z,L)$ a chamber label for $J$.
      reading_limits: The frozen extracted text of the cited paragraph was read. This
        reference attributes the original assertion; it is not used as a proof
        premise.
dependency_level: 17
---

## Statement

Work with the finite-rank real Coxeter representation and relative arrangements, with arbitrary Coxeter type and $J\subseteq\Gamma_0$. Let $(z,L)\in\mathrm{Cham}(J)$. Then $z^{-1}$ maps the relative arrangement for $J$ bijectively to that for $L$, including their cone interiors and distinct relative hyperplanes. It induces a bijection of chamber labels sending $(z,L)$ to $(e,L)$: the image of $(x,I)$ is $(x',I)$, where $x'$ is the unique minimum-length element of $z^{-1}xW_I$.

Under this bijection every chamber path $p$ maps to a path of the same length; geodesicity is preserved and reflected. Each simple wall crossing retains its index $a$ and element $v_{a,I}$, so the wall word element satisfies $v_{z^{-1}p}=v_p$.

## Statement references

[[thm-chamber-labelling-artin-tits-normalisers]]

[[def-chamber-labels-artin-tits-normalisers]]

[[def-relative-cone-artin-tits-normalisers]]

[[def-chambers-walls-artin-tits-normalisers]]

[[def-chamber-paths-artin-tits-normalisers]]

[[def-geodesic-path-artin-tits-normalisers]]

[[def-simple-wall-crossing-artin-tits-normalisers]]

[[def-real-coxeter-interface-artin-tits-prerequisites]]

[[prop-parabolic-minimum-interface-artin-tits-prerequisites]]

## Facts & Assumptions


[F1] The label condition is $W_Jz=zW_L$; the chamber labelled $(x,I)$ is $xC_I$, and this labelling is bijective. Each right coset $gW_I$ has a unique minimum-length representative. [[def-chamber-labels-artin-tits-normalisers]] [[thm-chamber-labelling-artin-tits-normalisers]] [[prop-parabolic-minimum-interface-artin-tits-prerequisites]]

[F2] The relative space $\Theta_K$ is the common zero set of the simple roots indexed by $K$; the relative cone is $\mathrm{Cone}\cap\Theta_K$, and its arrangement consists of distinct proper root-hyperplane traces. The contragredient action sends $H_\alpha$ to $H_{w\alpha}$, and the Tits cone is $W$-invariant. [[def-relative-cone-artin-tits-normalisers]] [[def-real-coxeter-interface-artin-tits-prerequisites]] [[prop-tits-cone-basic-artin-tits-normalisers]]

[F3] Chambers are complement components and adjacency is sharing a codimension-one wall. A path is a finite sequence of consecutively adjacent chamber labels; its length counts consecutive pairs. A geodesic minimizes this length among paths with the same endpoints. [[def-chambers-walls-artin-tits-normalisers]] [[def-chamber-paths-artin-tits-normalisers]] [[def-geodesic-path-artin-tits-normalisers]]

[F4] For an ordered adjacent pair starting at $(x,I)$, the adjacent-wall formula gives its unique crossing index $a\notin I$, its wall $\overline{xC_{I\cup\{a\}}}$, and its target $(xv_{a,I},K)$. The element $v_{a,I}$ and $K$ depend only on $a$ and $I$. The wall word is the ordered product of these elements, or $e$ for a one-chamber path. [[prop-adjacent-wall-formula-artin-tits-normalisers]] [[def-simple-wall-crossing-artin-tits-normalisers]] [[def-chamber-paths-artin-tits-normalisers]]

## Proof


**Given:** The finite-rank representation, $J$ and $(z,L)$ in the Statement, and a chamber path $p$ in the $J$-arrangement. **Goal:** Prove the stated arrangement and label bijections and the path assertions.

**Proof technique:** direct.

1.1 For any subset $K$, the fixed space of $W_K$ in $\Theta$ is $\Theta_K$: the reflection formula in [F2] shows that the simple reflection indexed by $k$ fixes a functional exactly when it vanishes on $\alpha_k$, and the generators then fix precisely their common zero set. From $z^{-1}W_Jz=W_L$ in [F1], conjugation of fixed spaces gives $z^{-1}\Theta_J=\Theta_L$. By [F2], $z^{-1}$ preserves the Tits cone and permutes root hyperplanes. It therefore maps $\mathrm{Cone}(J)$ onto $\mathrm{Cone}(L)$ and, being a linear homeomorphism of the relative spaces, maps their relative interiors onto one another. It also bijects their sets of distinct proper root-hyperplane traces; coincident traces remain coincident under this bijection. [F1, F2]

2.1 The homeomorphism in step 1.1 maps complement components bijectively, and preserves closures and affine dimensions. Hence it maps walls and adjacency bijectively. For a label $(x,I)$, let $x'$ be the unique minimum of $z^{-1}xW_I$ and write $z^{-1}x=x'u$ with $u\in W_I$. Every generator indexed by $I$ fixes $C_I$ pointwise, by the reflection formula, so $z^{-1}xC_I=x'C_I$. The label equality $W_Jx=xW_I$ and $z^{-1}W_Jz=W_L$ imply $W_Lx'=x'W_I$. Thus $(x',I)$ is a label for $L$, and it is the image label by [F1]. For $(x,I)=(z,L)$ the coset is $W_L$, whose minimum is $e$, so the image is $(e,L)$. [F1, F2, F3, step 1.1]

3.1 Suppose a crossing from $(x,I)$ has index $a$. With $z^{-1}x=x'u$ as in step 2.1, every element of $W_I$ also fixes $C_{I\cup\{a\}}$ pointwise. Thus the image of its wall is $\overline{x'C_{I\cup\{a\}}}$. The image chambers are adjacent by step 2.1, and the uniqueness in [F4] identifies their crossing index as the same $a$. Consequently their crossing element is the same $v_{a,I}$, and their target is $(x'v_{a,I},K)$. [F2, F4, step 2.1]

4.1 Applying the chamber bijection to each entry of $p$ produces a path of the same length, and the inverse homeomorphism gives the reverse correspondence for paths between the corresponding endpoints. Therefore a shorter path exists between one pair of endpoints exactly when one exists between the other pair, proving preservation and reflection of geodesicity. By step 3.1 the ordered crossing elements agree term by term, including the empty product for a one-chamber path; hence $v_{z^{-1}p}=v_p$. This proves all assertions. [F3, F4, step 2.1, step 3.1] ∎

## Source notes

The article reference attributes the assertion. The argument above uses the declared completed suppliers and does not use the article assertion as a proof premise.
