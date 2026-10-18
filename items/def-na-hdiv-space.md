---
id: def-na-hdiv-space
kind: definition
title: The real H(div) space
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, def-countable-choice, thm-locally-integrable-functions-embed-in-distributions, cor-cauchy-schwarz-inequality-for-l-two, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div) finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §14 introduction and §14.1: H(div) finite-element setting and the real vector-valued flux space."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.1: H(div; Omega) and its graph norm."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Assume Countable Choice for the published Sobolev interfaces cited below. Let $D\subseteq\mathbb R^d$ be open and use real scalars. $L^2(D;\mathbb R^d)$ means the $d$-tuple of real $L^2$ equivalence classes, with norm $\|v\|_2^2=\sum_{j=1}^d\|v_j\|_2^2$. The test space $C_c^\infty(D;\mathbb R)$ consists of real smooth functions compactly supported in $D$.

For $v\in L^2(D;\mathbb R^d)$, say that $g\in L^2(D;\mathbb R)$ is its distributional divergence when
$$
\int_D v\cdot\nabla\phi\,dx=-\int_D g\phi\,dx\qquad\text{for every }\phi\in C_c^\infty(D;\mathbb R).
$$
The $L^2$ class $g$ is unique when it exists. Indeed, if $g_1,g_2$ both satisfy the identity, put $h=g_1-g_2\in L^2(D)$. Every compact $C\subset D$ has finite Lebesgue measure by [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], and [[cor-cauchy-schwarz-inequality-for-l-two]] gives $\int_C|h|\le |C|^{1/2}\|h\|_{L^2(D)}<\infty$. Thus $h\in L^1_{\mathrm{loc}}(D)$. Subtracting the two divergence identities gives $\int_Dh\phi=0$ for every real test $\phi$; splitting a complex test into real and imaginary parts gives the same identity for complex tests. Injectivity of the regular-distribution map in [[thm-locally-integrable-functions-embed-in-distributions]] therefore yields $h=0$ almost everywhere, hence $g_1=g_2$ as $L^2$ classes. Define
$$
H(\operatorname{div};D):=\{v\in L^2(D;\mathbb R^d):\text{there is }g\in L^2(D;\mathbb R)\text{ with }g=\operatorname{div}v\text{ distributionally}\},
$$
and equip it with the graph norm
$$
\|v\|_{H(\operatorname{div};D)}:=\bigl(\|v\|_2^2+\|\operatorname{div}v\|_2^2\bigr)^{1/2}.
$$
The Sobolev notation $H^1(D)=W^{1,2}(D)$ and $H^1_0(D)=W^{1,2}_0(D)$ uses the norm and zero-boundary closure conventions of [[def-sobolev-space-wkp-and-its-norm]] and [[def-wkp-zero-as-a-sobolev-closure]]. No pointwise boundary value is part of this definition.
