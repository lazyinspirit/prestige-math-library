---
id: lem-nonaffine-characteristic-zero-group-smooth
kind: lemma
title: "Every finite-type characteristic-zero group scheme is smooth"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-existence-of-algebraic-closures, lem-nonaffine-connected-group-geometrically-connected, lem-ag-geometric-regularity-field-tests, def-embedding-dimension-and-regular-local-ring, thm-regular-local-rings-are-domains-and-cohen-macaulay]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Lemma 39.8.2, tag 047N (Cartier smoothness, without affineness)"
      url: https://stacks.math.columbia.edu/tag/047N
    - title: "Milne, Algebraic Groups (2022), Theorem 3.23 (local nilpotent calculation)"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume AC. Every separated finite-type group scheme over a characteristic-zero field is smooth. No affineness, reducedness, or connectedness assumption is required.

## Facts & Assumptions

[F1] Over an algebraically closed field the reduction of any finite-type group is a smooth group, by the reduced-locus and translation argument; smoothness descends under extension of the ground field. ([[lem-nonaffine-connected-group-geometrically-connected]], [[lem-ag-geometric-regularity-field-tests]])

[F2] For a Noetherian local ring, equality of its dimension and cotangent dimension is the criterion for regularity; regular local rings are reduced. ([[def-embedding-dimension-and-regular-local-ring]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]])

[F3] Algebraic closures exist under AC. ([[thm-existence-of-algebraic-closures]])

## Proof

**Given:** AC and a separated finite-type group $G/k$ with $\operatorname{char}k=0$.

1.1 By [F1] and [F3] extend to an algebraic closure and write $R=\mathcal O_{G,e}$, with maximal ideal $\mathfrak m$ and residue field $k$. Its reduction is regular by [F1]. Multiplication induces a map $R\to R\otimes_k(R/\mathfrak m^2)$: restrict multiplication to $\operatorname{Spec}R$ in the first factor and the second infinitesimal neighbourhood of $e$ in the second. Its underlying image lies in every open neighbourhood of $e$ containing $\operatorname{Spec}R$, so pullbacks of local functions are defined; a denominator invertible at $e$ remains invertible because its image modulo the nilpotent second-factor ideal is that denominator in $R$. The identity restrictions imply that the image of $a\in\mathfrak m$ has the form $a\otimes1+1\otimes\bar a+y$, where $y\in\mathfrak m\otimes_k(\mathfrak m/\mathfrak m^2)$. If $a$ is nonzero nilpotent, choose its least nilpotence exponent $n\ge2$. Expanding the $n$th power of this image, with the second-factor ideal square zero, gives $n a^{n-1}\otimes\bar a\in a^{n-1}\mathfrak m\otimes_k(R/\mathfrak m^2)$. The class of $a^{n-1}$ modulo $a^{n-1}\mathfrak m$ is nonzero: otherwise $a^{n-1}=t a^{n-1}$ for $t\in\mathfrak m$, and the unit $1-t$ would annihilate a nonzero element. Since $n$ is invertible, projection onto that nonzero class forces $\bar a=0$. Hence every nilpotent in $R$ belongs to $\mathfrak m^2$. [F1, F3, given, construct, algebra]

2.1 Reduction preserves Krull dimension, and the inclusion of the nilradical in $\mathfrak m^2$ shows that it also preserves cotangent dimension. The regularity of $R_{\mathrm{red}}$ from [F1] therefore makes $R$ regular by [F2]. Over the algebraically closed characteristic-zero field regularity at the rational identity is smoothness there. Translation carries the identity to every closed point; the open smooth locus consequently contains every closed point. Its complement, if nonempty, would contain a closed point, so it is empty. Finally [F1] descends smoothness to the original field. The argument used only the local multiplication near $(e,e)$, and thus applies to nonaffine groups. AC is used in [F3] and inherited from [F1]. [F1, F2, F3, step 1.1, algebra] ∎
