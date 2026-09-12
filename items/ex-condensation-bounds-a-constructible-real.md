---
id: ex-condensation-bounds-a-constructible-real
kind: example
title: Condensation bounds a constructible real
status: draft
origin: pipeline
deps: [lem-canonical-small-skolem-hulls-in-l, thm-condensation-for-constructible-levels, lem-collapse-fixes-transitive-parts-and-orders-ordinals, thm-constructible-subsets-appear-before-successor-cardinals]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lietz, Set Theory, Theorem 7.15 and Claim 7.16, p.59"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
justified_by: []
forward_refs: []
---

## Example

If $x\subseteq\omega$ and $x\in L$, the hull-and-collapse proof produces a countable ordinal $\beta<\omega_1$ such that $x\in L_\beta$.

## Facts & Assumptions

**Given:** Ambient ZF and a constructible real $x\subseteq\omega$.

[F1] [[lem-canonical-small-skolem-hulls-in-l]] makes the hull of the countable seed $\omega\cup\{\omega,x\}$ elementary and countably infinite.

[F2] [[thm-condensation-for-constructible-levels]] identifies the transitive collapse of that hull with $L_\beta$.

[F3] [[lem-collapse-fixes-transitive-parts-and-orders-ordinals]] fixes every transitive subset of the hull pointwise and gives the recursive collapse equation.

[F4] [[thm-constructible-subsets-appear-before-successor-cardinals]] gives the general conclusion $x\in L_{\omega_1}$; the calculation below exhibits its sharper witness $\beta<\omega_1$.

## Verification

1.1 Choose a nonzero limit $\theta$ with $x,\omega\in L_\theta$ and form $H=\operatorname{Hull}^{L_\theta}(\omega\cup\{\omega,x\})$. F1 gives $H\prec L_\theta$ and a bijection between $H$ and $\omega$. In particular every natural number belongs to $H$, not merely the set $\omega$ as one element. [F1, given]

2.1 Collapse $H$ by $\pi$ to $M=L_\beta$ using F2. Since $\omega\subseteq H$ is transitive, F3 fixes every natural number. Because $x\in H$ and $x\subseteq\omega$, the collapse equation gives $\pi(x)=\{\pi(n):n\in x\}=x$. Hence $x\in M=L_\beta$. This includes the empty real. [F2, F3, step 1.1]

3.1 The collapse is a bijection, so $M$ is countable. Since $\beta=\operatorname{Ord}\cap M\subseteq M$, the ordinal $\beta$ is countable and therefore $\beta<\omega_1$. Thus the hull calculation proves the claimed bound and, consistently with F4, yields $x\in L_{\omega_1}$. No ambient Choice is used. [F2, F4, step 2.1] ∎
