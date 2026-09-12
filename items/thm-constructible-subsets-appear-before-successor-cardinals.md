---
id: thm-constructible-subsets-appear-before-successor-cardinals
kind: theorem
title: Constructible subsets appear before successor cardinals
status: published
origin: pipeline
deps: [lem-canonical-small-skolem-hulls-in-l, thm-condensation-for-constructible-levels, lem-collapse-fixes-transitive-parts-and-orders-ordinals, lem-cardinality-of-infinite-constructible-levels, lem-successor-cardinal-exists, prop-constructible-levels-transitivity-ordinals-and-rank]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Lietz, Set Theory, Theorem 7.15 and Claim 7.16, p.59"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Kunen, Set Theory, Chapter VI Theorem 4.6, p.175"
      url: https://fa.ewi.tudelft.nl/~hart/set_theory/Jech/Kunen-1980-Set_Theory.pdf
justified_by: []
forward_refs: []
---

## Statement

In ZF, if $\kappa$ is an infinite cardinal and $x\in L$ with $x\subseteq\kappa$, then $x\in L_{\kappa^+}$. More generally, if $x\in L$ and $x\subseteq L_\kappa$, then $x\in L_\beta$ for some $\beta<\kappa^+$.

Here $\kappa^+$ is the Hartogs successor cardinal, so no ambient Choice is assumed.

## Facts & Assumptions

**Given:** Ambient ZF, an infinite cardinal $\kappa$, and a constructible set $x$ satisfying one of the displayed subset hypotheses.

[F1] [[lem-canonical-small-skolem-hulls-in-l]] makes the canonical hull of an infinite well-orderable seed elementary and of the same cardinality as that seed, without invoking Choice.

[F2] [[thm-condensation-for-constructible-levels]] identifies the collapse of an elementary substructure of a nonzero limit $L$-level as an actual level $L_\beta$.

[F3] [[lem-collapse-fixes-transitive-parts-and-orders-ordinals]] says that the collapse fixes a transitive subset included in the hull, and determines images by images of their members.

[F4] [[lem-cardinality-of-infinite-constructible-levels]] gives $|L_\kappa|=\kappa$ and a well-order of $L_\kappa$.

[F5] [[lem-successor-cardinal-exists]] identifies $\kappa^+$ with the least ordinal not injectible into $\kappa$.

[F6] [[prop-constructible-levels-transitivity-ordinals-and-rank]] gives transitivity and nesting of the constructible levels.

## Proof

1.1 Choose a nonzero limit $\theta$ large enough that $x,\kappa,L_\kappa$ and the relevant finite seed belong to $L_\theta$; this is possible because $x$ is constructible and the $L$-levels are nested and exhaustive for $L$. For the first clause set $A=\kappa\cup\{\kappa,x\}$, and for the second set $A=L_\kappa\cup\{L_\kappa,\kappa,x\}$. Each seed is a subset of $L_\theta$. In the first case $|A|=\kappa$ because $\kappa$ is infinite; in the second F4 gives the same conclusion. Both seeds are well-orderable. [F4, F6, given]

2.1 Let $H=\operatorname{Hull}^{L_\theta}(A)$. By F1, $H\prec L_\theta$ and $H$ is well-orderable with $|H|=\kappa$. Collapse $H$ to $M$. By F2 there is an ordinal $\beta$ with $M=L_\beta$. Since $\beta=\operatorname{Ord}\cap M\subseteq M$ and the collapse bijects $H$ with $M$, there is an injection $\beta\to\kappa$; F5 therefore gives $\beta<\kappa^+$. [F1, F2, F5, step 1.1]

3.1 In the first case, $\kappa\subseteq A\subseteq H$, so F3 fixes every ordinal below $\kappa$. Since $x\in H$ and $x\subseteq\kappa$, the recursive collapse equation gives $\pi(x)=\{\pi(\xi):\xi\in x\}=x$. Thus $x\in M=L_\beta$. In the second case, $L_\kappa\subseteq H$ is transitive by F6, so F3 fixes it pointwise; again $x\in H$ and $x\subseteq L_\kappa$ imply $\pi(x)=x$, whence $x\in L_\beta$. [F3, F6, step 2.1]

4.1 We have proved the general clause with $\beta<\kappa^+$. For the first clause, nesting gives $L_\beta\subseteq L_{\kappa^+}$, so $x\in L_{\kappa^+}$. The case $x=\varnothing$ is included, and no selection from a family of sets occurred: the hull is canonical and the cardinal bound uses only the Hartogs successor. [F5, F6, step 2.1, step 3.1] ∎
