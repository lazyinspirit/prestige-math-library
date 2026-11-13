---
title: Segment intersections and the inversion bound
status: draft
research_item: lem-segment-intersections-artin-tits-normalisers
dependency_level: 4
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 8, Lemma 3.5 and its proof
      statement: For points of the Tits cone, the proof relates separation to
        single-point intersections of the open segment, bounds the number of
        hyperplanes through a fixed interior point by a Coxeter length after
        placing the endpoints in chamber translates, and asserts finiteness of
        the corresponding intersection points.
      hypotheses: The article's Coxeter representation and Tits-cone notation; the
        present item explicitly uses the finite-rank geometric convention of its
        arrangement definition.
      reading_limits: The frozen extracted text and PDF image of page 8 were
        inspected. This citation attributes the article's claims and is not a
        proof premise.
---

PDF p. 8: ` Lemma 3.5, proof paragraphs 2–7 `

## Prerequisites

- [def-coxeter-arrangement-artin-tits-normalisers](item-def-coxeter-arrangement-artin-tits-normalisers)
- [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)
- [def-separating-hyperplane-artin-tits-normalisers](item-def-separating-hyperplane-artin-tits-normalisers)
- [prop-root-length-artin-tits-normalisers](item-prop-root-length-artin-tits-normalisers)
- [prop-tits-cone-basic-artin-tits-normalisers](item-prop-tits-cone-basic-artin-tits-normalisers)


## Statement

Let $(W,S)$ be a finite-rank Coxeter system with its real reflection representation on $V$, roots $\Phi$, positive roots $\Phi^+$, dual space $\Theta$, contragredient action, closed fundamental chamber $\overline C$, Tits cone $\mathrm{Cone}=\bigcup_{u\in W}u\overline C$, and set $\mathcal H=\{H_\alpha:\alpha\in\Phi\}$ of distinct root hyperplanes, where $H_\alpha=\{x\in\Theta:x(\alpha)=0\}$. Write $\ell(w)$ for Coxeter word length. For $f,g\in\mathrm{Cone}$ put $[f,g]=\{(1-t)f+tg:0\leq t\leq1\}$ and $(f,g)=[f,g]\setminus\{f,g\}$. A hyperplane separates $f$ and $g$ when the values of a defining linear functional at them have opposite strict signs.

A hyperplane $H\in\mathcal H$ separates $f$ and $g$ if and only if $H\cap(f,g)$ consists of one point and $H$ does not contain $[f,g]$. If $f\in\overline C$, $g\in w\overline C$ and $h\in(f,g)$, then $|\{H_\alpha\in\mathcal H:H_\alpha\cap(f,g)=\{h\}\}|\leq\ell(w^{-1})$. For arbitrary $f,g\in\mathrm{Cone}$, the set $\{h\in(f,g):H\cap[f,g]=\{h\}\text{ for some }H\in\mathcal H\}$ is finite.

## Statement references

[def-coxeter-arrangement-artin-tits-normalisers](item-def-coxeter-arrangement-artin-tits-normalisers)

[def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[def-separating-hyperplane-artin-tits-normalisers](item-def-separating-hyperplane-artin-tits-normalisers)

[prop-root-length-artin-tits-normalisers](item-prop-root-length-artin-tits-normalisers)

[prop-tits-cone-basic-artin-tits-normalisers](item-prop-tits-cone-basic-artin-tits-normalisers)

## Facts & Assumptions

[F1] The roots have exactly one of the signs $\Phi^+$ and $-\Phi^+$, and $|\{\alpha\in\Phi^+:v\alpha\in-\Phi^+\}|=\ell(v)$ for every $v\in W$. [prop-root-length-artin-tits-normalisers](item-prop-root-length-artin-tits-normalisers)

[F2] Every positive root is a nonnegative linear combination of simple roots. The closed chamber consists of functionals nonnegative on all simple roots, and $\mathrm{Cone}$ is the union of its $W$-translates. [def-coxeter-arrangement-artin-tits-normalisers](item-def-coxeter-arrangement-artin-tits-normalisers) [prop-root-length-artin-tits-normalisers](item-prop-root-length-artin-tits-normalisers)

[F3] The dual action satisfies $(ux)(v)=x(u^{-1}v)$; the roots are stable under the $W$-action. [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[F4] Separation means opposite strict signs for a nonzero linear functional defining the hyperplane. [def-separating-hyperplane-artin-tits-normalisers](item-def-separating-hyperplane-artin-tits-normalisers)

[F5] The Tits cone is convex. [prop-tits-cone-basic-artin-tits-normalisers](item-prop-tits-cone-basic-artin-tits-normalisers)

## Proof
**Given:** The finite-rank Coxeter system, representation, chamber, hyperplanes, endpoints and segment notation of the Statement.


**Proof technique:** direct.

**Goal:** Prove the separation equivalence, the length bound and finiteness of the specified intersection points.

1.1 **Segment criterion.** If $f=g$, the open segment is empty and no hyperplane separates the two points, so the equivalence holds. Otherwise, for a defining nonzero linear functional $a$ of $H$, its value along the segment is $(1-t)a(f)+ta(g)$. This affine function has a zero at exactly one $t\in(0,1)$ precisely when its endpoint values have opposite strict signs: if it is nonconstant, the zero is $a(f)/(a(f)-a(g))$, and this lies strictly between $0$ and $1$ exactly under that sign condition; if it is constant, it has either no zeros or all points as zeros. Thus the stated intersection condition is equivalent to separation. Convexity also ensures $[f,g]\subseteq\mathrm{Cone}$. [F4, F5, given]

2.1 **Count all crossings between two specified chamber translates.** Suppose $f\in\overline C$ and $g\in w\overline C$. For a separating hyperplane choose a positive root $\alpha$ defining it, possible by [F1]. By [F2], $f(\alpha)\geq0$, so the strict opposite-sign condition gives $f(\alpha)>0$ and $g(\alpha)<0$. Write $g=wx$ with $x\in\overline C$. By [F3], $g(\alpha)=x(w^{-1}\alpha)$. If $w^{-1}\alpha$ were positive, [F2] would make this value nonnegative. The root-sign dichotomy therefore makes $w^{-1}\alpha$ negative. Hence every separating hyperplane has a representative in the inversion set $\{\alpha\in\Phi^+:w^{-1}\alpha\in-\Phi^+\}$. The map from that finite root set to its hyperplanes need not be invoked as injective: the number of separating hyperplanes is at most the number of roots in the set, namely $\ell(w^{-1})$. [F1, F2, F3, step 1.1, given]

3.1 **Fixed point and arbitrary endpoints.** If $h\in(f,g)$ and $H_\alpha\cap(f,g)=\{h\}$, then $H_\alpha$ cannot contain $[f,g]$, since $f\ne g$ and the open segment contains more than one point. By 1.1 it separates the endpoints, so 2.1 gives the stated bound. For arbitrary endpoints choose $u,v\in W$ with $f\in u\overline C$ and $g\in v\overline C$, and put $f'=u^{-1}f$, $g'=u^{-1}g$, and $w=u^{-1}v$. Then $f'\in\overline C$ and $g'\in w\overline C$. The invertible linear map $u^{-1}$ carries segments to segments and permutes $\mathcal H$: by [F3], $u^{-1}H_\alpha=H_{u^{-1}\alpha}$, and roots are stable under $W$. Consequently 2.1 gives only finitely many separating hyperplanes for $f,g$. Every point in the final displayed set arises from such a hyperplane by 1.1, and each such hyperplane contributes one point; hence that set is finite. This proves all assertions. [F2, F3, step 1.1, step 2.1, given] ∎

## Source notes

The article is cited for attribution of the claims. The local proof counts all separating hyperplanes directly using inversions; it does not rely on the article proof's converse sign implication at boundary points or its induction on chamber length.
