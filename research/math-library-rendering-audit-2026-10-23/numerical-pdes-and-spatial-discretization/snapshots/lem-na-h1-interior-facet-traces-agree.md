---
id: lem-na-h1-interior-facet-traces-agree
kind: lemma
title: H1 traces agree across interior mesh facets
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  [
    lem-na-simplex-h1-facet-trace-bound,
    lem-na-smooth-neighborhood-dense-in-h1-simplex,
    def-mollifier-family-generated-by-a-unit-mass-smooth-bump,
    lem-smooth-bump-between-concentric-euclidean-balls,
    def-sobolev-space-wkp-and-its-norm,
    thm-l-one-approximate-identities-converge-in-l-p,
    lem-mollification-commutes-with-weak-derivatives-in-the-interior,
    thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign,
    prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets,
    thm-lebesgue-measure-of-a-box-of-every-kind,
    prop-mollifier-families-are-l-one-approximate-identities,
    thm-holder-inequality-for-integrals,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 16: Local
        interpolation in H(div) and H(curl) (I)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap16.pdf
      locator: "Complete chapter, §16.1.1, trace spaces and elementwise facet moments."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations"
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: "Complete notes, Chapter 3 §§3.2–3.4: cutoff localization,
        mollification and Sobolev approximation."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $D$ be a polyhedral open set with a conforming affine simplicial mesh, let $K_+$ and $K_-$ share an interior facet $F$, and let $w\in H^1(D)$. The elementwise $L^2(F)$ traces of $w|_{K_+}$ and $w|_{K_-}$ agree almost everywhere on $F$.

## Facts & Assumptions

**Given:** Countable Choice, adjacent mesh cells $K_+,K_-$, their shared interior facet $F$, and one global Sobolev class $w\in H^1(D)$.

[A1] Countable Choice is inherited from the Sobolev, smooth-density and mollification interfaces. ([[def-countable-choice]])

[F1] Each element restriction has a unique bounded $L^2$ facet trace, obtained by continuous extension from smooth-neighborhood functions. ([[lem-na-simplex-h1-facet-trace-bound]])

[F2] The smooth-bump lemma gives $\chi\in C_c^\infty(B_{1/2}(0))$ with $0\le\chi\le1$ and $\chi=1$ on $\overline B_{1/4}(0)$. Its support is bounded, and $B_{1/4}(0)$ contains the cube $(-1/(8\sqrt d),1/(8\sqrt d))^d$ of positive measure by [[thm-lebesgue-measure-of-a-box-of-every-kind]]; hence $0<m:=\int\chi<\infty$ by [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]. The normalized bump $\rho:=\chi/m$ is a nonnegative unit-mass bump supported in $B_1(0)$. Its rescalings are an $L^1$ approximate identity by [[prop-mollifier-families-are-l-one-approximate-identities]]. The same smooth-bump lemma supplies cutoffs equal to one near a compact subset of an open set by a finite ball cover. ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[lem-smooth-bump-between-concentric-euclidean-balls]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F3] Approximate identities converge in $L^2(\mathbb R^d)$, and mollification commutes with first weak derivatives in an interior neighborhood. ([[thm-l-one-approximate-identities-converge-in-l-p]], [[lem-mollification-commutes-with-weak-derivatives-in-the-interior]])

[F4] A Sobolev $H^1(\mathbb R^d)$ function is in $L^2$; on each compact set, Holder's inequality and finite measure make it $L^1$. Thus $W\in H^1(\mathbb R^d)$ is locally integrable, and convolution with its smooth compactly supported mollifier is smooth. ([[def-sobolev-space-wkp-and-its-norm]], [[thm-holder-inequality-for-integrals]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]])

## Proof

1.1 Fix a compact $(d-1)$-simplex $G$ contained in the relative interior of $F$. A sufficiently small open tube around $G$ has closure in $D$. Cover its closure by finitely many balls whose larger concentric balls still have closure in $D$; [F2] supplies a smooth cutoff equal to one on each smaller ball and supported in its larger ball. The function $\chi=1-\prod_i(1-\chi_i)$ is compactly supported in $D$ and equals one near $G$. The zero extension $W$ of $\chi w$ belongs to $H^1(\mathbb R^d)$: for a test function $\psi$, the weak product rule follows directly from $\int_D\chi w\,\partial_i\psi=\int_Dw\,\partial_i(\chi\psi)-\int_Dw(\partial_i\chi)\psi=-\int_D(\chi\partial_iw+w\partial_i\chi)\psi,$ and compact support of $\chi$ removes any boundary term on extension. [A1, F2, given, construct, algebra]

2.1 Let $W_\varepsilon=\rho_\varepsilon*W$ with the mollifier of [F2]. By [F3] applied to $W$ and its weak derivatives, and by derivative commutation on the tube where $\chi=1$, $W_\varepsilon\to w$ in $H^1$ on every smaller tube around $G$. Each $W_\varepsilon$ is smooth by [F4]. Cover $G$ by finitely many smaller simplices on each side whose shared facet portions lie in that tube. The trace bound [F1] on each smaller simplex shows the traces of $W_\varepsilon$ converge in $L^2$ there to the local traces of $w$. By locality and uniqueness of the bounded trace extension, these are the restrictions of the elementwise traces defined on $K_+$ and $K_-$. The smooth $W_\varepsilon$ has identical restrictions from both sides, so the two traces are equal; their limits are equal as well. [A1, F1, F2, F3, F4, step 1.1, algebra]

3.1 Countably many compact facet simplices $G$ exhaust the relative interior of $F$; its boundary has $(d-1)$-dimensional measure zero. Step 2.1 gives equality on each such patch, hence equality almost everywhere on all of $F$. [A1, step 2.1, algebra] ∎
