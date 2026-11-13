---
title: Adjacent chambers and inverse wall-crossing elements
status: draft
research_item: prop-adjacent-wall-formula-artin-tits-normalisers
dependency_level: 14
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: Frozen original PDF p. 11, Proposition 3.17 and following sentence
      statement: For adjacent $(x,I),(y,K)\in\mathrm{Cham}(J)$ there are unique $a\in
        I^c$, $a^\prime\in K^c$ with $I+a=K+a^\prime$. Their common wall is
        $\overline{xC_{I+a}}=\overline{yC_{K+a^\prime}}$,
        $W_{[I,a]}=W_{[K,a^\prime]}$ is finite, and $\omega_{a,I}(x,I)=(y,K)$,
        $\omega_{a^\prime,K}(y,K)=(x,I)$. In particular
        $v_{a,I}v_{a^\prime,K}=v_{a^\prime,K}v_{a,I}=e$.
      hypotheses: The hypotheses in the extracted statement; standing Coxeter-system
        notation of §§2–3. Spherical type is imposed only where explicitly
        stated.
      reading_limits: Read the frozen extracted text at Proposition 3.17 and visually
        inspected frozen PDF page 11, including the opening uniqueness wording
        and the closure bars in part (1). The reference attributes the original
        claim only; it is not a proof premise. The wall-qualified statement is a
        local correction. No reading of the cited Iyama–Wemyss theorem is
        claimed in this adjudication.
---

PDF p. 11: ` Proposition 3.17 and following sentence `

## Prerequisites

- [lem-author-4ac39e6f1702-common-facet](item-lem-author-4ac39e6f1702-common-facet)
- [lem-author-4ac39e6f1702-finite-crossing-roots](item-lem-author-4ac39e6f1702-finite-crossing-roots)
- [lem-author-4ac39e6f1702-component-crossing-label](item-lem-author-4ac39e6f1702-component-crossing-label)
- [lem-author-4ac39e6f1702-inverse-crossing](item-lem-author-4ac39e6f1702-inverse-crossing)
- [def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers)
- [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)
- [def-parabolic-faces-artin-tits-normalisers](item-def-parabolic-faces-artin-tits-normalisers)
- [thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers)


## Statement

Work in the finite-rank canonical real Coxeter representation and its dual relative chamber arrangement, with arbitrary Coxeter type and arbitrary $J\subseteq\Gamma_0$. Let $(x,I),(y,K)\in\mathrm{Cham}(J)$ label adjacent chambers $xC_I,yC_K\subseteq\Theta_J$ with common closed wall $F$. There are unique $a\in I^c$, $a'\in K^c$ describing this wall, that is, $F=\overline{xC_{I+a}}=\overline{yC_{K+a'}}$, where closures are taken in $\Theta_J$. These indices satisfy $I+a=K+a'$, the parabolic subgroups $W_{[I,a]}=W_{[K,a']}$ are finite, and $\omega_{a,I}(x,I)=(y,K)$, $\omega_{a',K}(y,K)=(x,I)$. In particular $v_{a,I}v_{a',K}=v_{a',K}v_{a,I}=e$. Here $I^c=\Gamma_0\setminus I$ and $I+a=I\cup\{a\}$. Neither $W_I$ nor $W_{I+a}$ is assumed finite.

## Facts & Assumptions

[F1] The unique indices of the common wall, its equal enlarged subset, and its opposite chamber sides are supplied by [lem-author-4ac39e6f1702-common-facet](item-lem-author-4ac39e6f1702-common-facet). Adjacency uses [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers).

[F2] The crossing component is finite by [lem-author-4ac39e6f1702-finite-crossing-roots](item-lem-author-4ac39e6f1702-finite-crossing-roots).

[F3] A finite component produces the unique opposite labelled chamber by [lem-author-4ac39e6f1702-component-crossing-label](item-lem-author-4ac39e6f1702-component-crossing-label).

[F4] The reverse component and inverse product are supplied by [lem-author-4ac39e6f1702-inverse-crossing](item-lem-author-4ac39e6f1702-inverse-crossing). These products are precisely the elements and maps defined in [def-simple-wall-crossing-artin-tits-normalisers](item-def-simple-wall-crossing-artin-tits-normalisers).

[F5] The coordinate subspaces $\Theta_M$ and faces $C_M$ are defined by [def-parabolic-faces-artin-tits-normalisers](item-def-parabolic-faces-artin-tits-normalisers). The finite-rank geometric convention and the identification of each label $(z,M)$ with the chamber $zC_M$, with unique labels, are supplied by [thm-chamber-labelling-artin-tits-normalisers](item-thm-chamber-labelling-artin-tits-normalisers).

## Proof

**Given:** The finite-rank geometric conventions and chamber identification in [F5], with adjacent relative chambers as in the Statement, in arbitrary Coxeter type and with arbitrary $J$. Neither $W_I$ nor $W_{I+a}$ is assumed finite. **Goal:** establish the full componentwise formula and its inverse.

**Proof technique:** direct.

1.1 Apply [F1] to the prescribed common wall $F$. It supplies unique wall indices $a\notin I$, $a'\notin K$, an equal enlarged subset $L=I+a=K+a'$, and the displayed wall equality. Apply [F2] to obtain finiteness of $W_D$ for $D=[I,a]$. This is a converse obtained from adjacency, rather than an assumption that the enlarged parabolic is finite. [F1, F2]

2.1 Put $b=\iota_D(a)$ and $K_0=L\setminus\{b\}$. By [F3], the chamber across the prescribed wall has label $(xv_{a,I},K_0)$ and is therefore the specified adjacent chamber $yC_K$. By label uniqueness in [F5], $y=xv_{a,I}$ and $K=K_0$. Its missing wall index is $b$; the uniqueness of the wall index from [F1] gives $a'=b$. This proves $\omega_{a,I}(x,I)=(y,K)$ with the definition in [F4]. [F1, F3, F4, F5, step 1.1]

3.1 Apply [F4] with $b=a'$. It gives $[K,a']=D$, $\iota_D(a')=a$ and $v_{a',K}=v_{a,I}^{-1}$. Thus $W_{[K,a']}=W_D=W_{[I,a]}$ is finite, both displayed products equal $e$, and $\omega_{a',K}(y,K)=(x,I)$ by substituting $y=xv_{a,I}$ and $K+a'-a=I$. These are all the stated assertions. [F2, F4, step 1.1, step 2.1] ∎

## Source notes

The original article is retained as attribution only. The local argument composes the common-facet, finite-crossing-roots, component-crossing-label and inverse-crossing suppliers. Uniqueness concerns indices describing the specified common wall; enlarged-subset equality alone is not asserted to characterize them. No extension of a theorem requiring a finite enlarged parabolic is used.
