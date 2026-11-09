---
title: Motivic dimension vanishing
status: published
research_item: thm-motivic-dimension-vanishing
dependency_level: 13
---

PDF p. 4: Motivic dimension vanishing

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)
- [lem-author-0bac6b264f4a-motivic-dim-general-interface](item-lem-author-0bac6b264f4a-motivic-dim-general-interface)
- [lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses](item-lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses)
- [lem-author-0bac6b264f4a-motivic-dim-fiber-bound](item-lem-author-0bac6b264f4a-motivic-dim-fiber-bound)
- [lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing](item-lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing)
- [lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing](item-lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing)

## Statement
Let $X$ be a Noetherian equicharacteristic scheme of finite dimension $d$, and let $j\geq0$. Then
$$H^{i,j}_{\mathrm{mot}}(X,\mathbb Z)=0\qquad\text{for every }i>j+d.$$
Here equicharacteristic has the precise EM meaning: the structure map $X\to\operatorname{Spec}\mathbb Z$ factors through $\operatorname{Spec}F$ for a prime field $F=\mathbb Q$ or $\mathbb F_p$. For such $X$ the groups mean $H^i(M_{j,F}(X))$ in the general prime-field interface. If $X$ is over the standing field $k$, this interface is exactly the theory already defined on $\mathrm{Sch}_k$, by restriction along its prime subfield. The theorem does not require that every $X$ be over that one standing field.

## Statement references
[def-motivic-cohomology](item-def-motivic-cohomology)

[lem-author-0bac6b264f4a-motivic-dim-general-interface](item-lem-author-0bac6b264f4a-motivic-dim-general-interface)

[lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing](item-lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing)

## Facts & Assumptions
**Given:** The stated Noetherian finite-dimensional globally equicharacteristic scheme, nonnegative weight and the compatible actual EM interface.

**Goal:** Prove the unrestricted prime-field statement and identify its standing fixed-field specialization.

[F1] [lem-author-0bac6b264f4a-motivic-dim-general-interface](item-lem-author-0bac6b264f4a-motivic-dim-general-interface) defines the actual general EM groups and proves compatibility with the completed fixed-field definition.

[F2] [lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses](item-lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses) and [lem-author-0bac6b264f4a-motivic-dim-fiber-bound](item-lem-author-0bac6b264f4a-motivic-dim-fiber-bound) check and apply the imported geometric dimension criterion to the actual shifted comparison fiber.

[F3] [lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing](item-lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing) and [lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing](item-lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing) combine the actual fiber bound with the precise cdh outer bound through the long exact sequence.

## Proof
1.1 If $X$ is nonempty, its assumed equicharacteristic factorization makes it a scheme over the corresponding prime field $F$. The Noetherian and finite-dimensional assumptions are exactly those of [F2]–[F3]. Apply [F3] to obtain $H^i(M_{j,F}(X))=0$ whenever $i>j+d$. By [F1] these are the claimed general motivic groups. For the empty scheme the complexes vanish by empty-cover descent, so the assertion is immediate. [F1, F2, F3]

2.1 When $X$ additionally carries the standing $k$-structure, [F1] identifies this very complex and its pullbacks with those of the standing definition by actual restriction, so step 1.1 gives its stated specialization. No finite-type, smoothness, regularity or fixed-$k$ restriction has replaced the original Noetherian equicharacteristic hypotheses. This proves the theorem for exactly the defined range $j\geq0$. [F1, F3, step 1.1] ∎
