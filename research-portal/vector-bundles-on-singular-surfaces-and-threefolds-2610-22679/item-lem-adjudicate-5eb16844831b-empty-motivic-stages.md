---
title: Every actual motivic stage on the empty scheme is zero
status: draft
research_item: lem-adjudicate-5eb16844831b-empty-motivic-stages
dependency_level: 12
---

PDF p. 9: Lemma 4.2 proof: empty-scheme case of eventual stage vanishing

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input)
- [def-motivic-filtration](item-def-motivic-filtration)
- [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)


## Statement
Assume the Axiom of Choice and the fixed universes of the selected perfect-complex realization. For the empty scheme over any field, every integer stage of the actual motivic filtration is a zero spectrum:
$$F^r_{\mathrm{mot}}K(\varnothing)\simeq0\qquad(r\in\mathbb Z).$$
This includes the source filtration over either prime field and its restriction to any standing field, and is independent of any empty-dimension convention.

## Facts & Assumptions
**Given:** The empty scheme, the actual unital multiplicative filtration, Choice, and fixed universes.

**Goal:** Prove zero stage spectra before invoking any nonempty-scheme dimension result.

[F1] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) and [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) identify the enhanced perfect category and its nonconnective K-theory. The selected realization is used under [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). [thm-author-3a003d7b5208-nonconnective-k-zero-input](item-thm-author-3a003d7b5208-nonconnective-k-zero-input) identifies its degree-zero homotopy with the cofiber Grothendieck group for an essentially small idempotent-complete stable category, computed using an equivalent small presentation.

[F2] [def-motivic-filtration](item-def-motivic-filtration) identifies stage zero with $K$ and supplies the integer-indexed actual tower. [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) supplies the unit $\eta:\mathbb S\to F^0$ and the unital action $F^0\wedge F^r\to F^r$. [def-stable-spectra-interface](item-def-stable-spectra-interface) identifies $\pi_0E$ with homotopy classes of maps $\mathbb S\to E$ and supplies smash, its zero object and unit constraints.

## Proof
1.1 A sheaf of modules on the empty scheme has only its forced zero value on the empty open set. Thus all complexes and their derived images are equivalent to zero, and the full perfect category is equivalent to the zero stable category. It is idempotent complete. Its cofiber Grothendieck group has only the generator $[0]$, and the cofiber sequence $0\to0\to0$ imposes $[0]=[0]+[0]$, so this group is zero. Applying [F1] under Choice gives $\pi_0K(\varnothing)=0$. [F1, given]

2.1 By [F2], $\pi_0F^0=0$, so the unit $\eta:\mathbb S\to F^0$ is nullhomotopic. For any integer $r$, the unit law identifies the composite $F^r\simeq\mathbb S\wedge F^r\xrightarrow{\eta\wedge1}F^0\wedge F^r\to F^r$ with $1_{F^r}$. The composite is nullhomotopic because smash preserves zero maps. Hence $1_{F^r}=0$ in the homotopy category, so the zero maps between $F^r$ and the zero spectrum are inverse there, and $F^r\simeq0$. This holds for all integers $r$. [F2, step 1.1] ∎
