---
id: "lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary"
kind: "lemma"
title: "The de Rham complex and pullback extend to manifolds with boundary"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary","lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space","thm-local-coordinate-formula-for-the-exterior-derivative","thm-the-exterior-derivative-commutes-with-pullback","thm-the-exterior-derivative-squares-to-zero","thm-the-exterior-derivative-is-a-graded-derivation","prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges","def-de-rham-cochain-complex","def-smooth-map-between-manifolds-with-boundary"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ioan Mărcuț, Manifolds (2017 lecture notes), boundary smoothness and
        forms
      url: https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Chapters 16–17
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For a finite-dimensional Hausdorff second-countable smooth manifold $M$ with boundary, let $\Omega^k(M)$ consist of forms whose boundary-chart coefficients are locally restrictions of smooth Euclidean functions. Put $\Omega^k(M)=0$ for $k<0$ or $k>\dim M$. The local formula $d(\sum_I f_I dx^I)=\sum_I df_I\wedge dx^I$ defines an extension-independent smooth form, independent of the chart. It is real linear, satisfies the graded Leibniz rule and $d^2=0$, and commutes with pullback by every smooth map between manifolds with boundary. Thus $(\Omega^\bullet(M),d)$ is a real cochain complex; its cohomology is $\ker d/\operatorname{im}d$ and agrees with the usual de Rham definitions when $\partial M$ is empty. Pullback preserves wedges and induces maps on these quotients. None of these local constructions uses a choice axiom.

## Facts & Assumptions

[F1] [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]] uses compatible charts in relatively open half-spaces and local smooth extensions.

[F2] [[lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space]] proves that all derivatives of a local extension are determined by its restriction.

[F3] [[thm-local-coordinate-formula-for-the-exterior-derivative]] gives the displayed formula on Euclidean-open chart domains.

[F4] [[thm-the-exterior-derivative-commutes-with-pullback]] proves naturality for smooth maps of Euclidean-open domains, in particular for local extensions of coordinate maps.

[F5] [[thm-the-exterior-derivative-squares-to-zero]] gives $d^2=0$ on those domains.

[F6] [[thm-the-exterior-derivative-is-a-graded-derivation]] gives real linearity and the graded Leibniz rule there.

[F7] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]] gives the local pullback operations and their identities.

[F8] [[def-de-rham-cochain-complex]] fixes the corresponding boundaryless complex and its zero groups outside the dimension range.

[F9] [[def-smooth-map-between-manifolds-with-boundary]] requires local smooth Euclidean extensions of coordinate representatives.

## Proof

**Given:** The stated manifold $M$, locally extendible form coefficients and, for the pullback assertion, a smooth map $F:M\to N$ between such manifolds.

1.1 Near a fixed boundary-chart point there are finitely many coefficients in a form. Intersect their finitely many extension neighbourhoods and apply [F3] to these extensions on that open set. By [F2], replacing any extension leaves each first derivative on the half-space unchanged. Thus the resulting restricted $(k+1)$-form is well defined and has locally extendible coefficients. The construction is local at each point and selects no extensions over a family of chart points. [F1, F2, F3, given]

2.1 On a chart overlap let $g$ be the transition map. Locally extend its coordinate functions and the finitely many target coefficients, shrinking the source extension neighbourhood so that its image lies in the open set of coefficient extensions; continuity at the specified point ensures this. The coordinate identity for the original form is the equality of its source coefficients with those of $g^*$ of its target coefficients on the half-space. By [F2] their derivatives agree there. Applying [F4] to the Euclidean extensions yields $d(g^*\eta)=g^*(d\eta)$ on the half-space. Therefore the local derivatives in step 1.1 obey the form transformation rule and patch to a single form on $M$. This uses local extensions, not a demand that an extended transition map remain inside the half-space. [F1, F2, F4, F7, step 1.1]

3.1 To compute $d^2$, use the first derivatives of the same coefficient extensions to represent the first derivative form, which is permitted by step 1.1. Equation [F5] then restricts to $d^2=0$ on the half-space. Likewise [F6], applied to simultaneous local extensions of two forms and restricted back, proves real linearity and the signed product rule. All these identities patch by step 2.1. This calculation explicitly includes the vanishing of $d^2$ of each function that occurs when differentiating a wedge of pulled-back coordinate differentials. [F5, F6, step 1.1, step 2.1]

3.2 At a specified point of $M$, [F9] extends the coordinate representative of $F$ to a Euclidean-open set. Extend a target form's finitely many coefficients near its image and shrink the source as in step 2.1. The Euclidean pullback, derivative and wedge identities of [F4] and [F7] restrict to the corresponding identities on $M$, independently of all extensions by [F2]. This works even if $F$ maps an open set entirely into $\partial N$: the Euclidean calculation takes place before restriction and does not presume that $F$ carries interior points to interior points. Composition and identity laws follow from the same local formulas. [F2, F4, F7, F9, step 2.1]

4.1 Step 3.1 puts $\operatorname{im}d\subseteq\ker d$, so the stated vector-space quotient is defined. By step 3.2, a closed form pulls back to a closed form, and a change by $d\eta$ pulls back to a change by $d(F^*\eta)$; hence the quotient maps are well defined and functorial. On boundaryless charts the construction is exactly [F8]. For dimension zero, all positive-degree forms vanish and $d=0$; the empty manifold has only zero section spaces. At boundary points step 1.1 handles every derivative by [F2], and no orientation or nonempty choice is required. [F2, F8, step 3.1, step 3.2] ∎
