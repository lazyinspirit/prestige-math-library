---
id: def-regular-integral-dot-orbit-labelling-convention
kind: definition
title: "The regular integral dot-orbit labelling convention"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-integral-category-o-block-and-its-antidominant-weight, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, lem-bruhat-order-basic-properties-for-permutations, lem-jordan-holder-factors-of-verma-modules-lie-above-the-head, lem-dominant-integral-dot-translates-embed-in-the-verma-module, thm-bgg-reciprocity, thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules, prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v, thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra, def-type-a-standard-graph-bimodules-support-filtrations-and-character, def-verma-flag-and-its-multiplicities, lem-the-type-a-standard-character-is-multiplicative, def-normalized-type-a-hecke-algebra-and-its-bar-involution]
justified_by: []
aliases: []
landmark: false
dependency_level: 13
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46, complete German text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Sections 1.1-1.2 (printed pp. 2-6): the dot action w.mu = w(mu+rho)-rho, the coinvariant algebra, the antidominant projective P(w_0.lambda), Theorem 4 (V P(x^{-1}.lambda) = D_x) and the left-module/right-reduction convention; complete passage read."
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8: Hecke algebras and the Kazhdan-Lusztig conjecture (complete 10-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
      locator: "Sections 1 and 2 (printed pp. 1-4): the normalized Hecke algebra, the bar involution, the Kazhdan-Lusztig basis b_w with coefficients h_{w',w} in vZ[v], and the classical index convention P_{y,w}, q=v^{-2}; complete sections read."
---

## Definition

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ of type
$A_{n-1}$ with Cartan $\mathfrak h$, positive system $\Phi^+$, Weyl vector
$\rho$, Weyl group $W$ (identified with $S_n$) and dot action
$w\cdot\lambda=w(\lambda+\rho)-\rho$. Fix a dominant regular integral weight
$\lambda$, i.e. $\langle\lambda+\rho,\alpha^\vee\rangle\neq0$ for every root and
$\lambda$ integral, and let $\mathcal O_\lambda$ be the corresponding regular
integral block in the conventions of
[[def-regular-integral-category-o-block-and-its-antidominant-weight]]: standard
objects $\Delta(w\cdot\lambda)=M(w\cdot\lambda)$, simples $L(w\cdot\lambda)$,
indecomposable projectives $P(w\cdot\lambda)$ for $w\in W$, with
$\lambda=e\cdot\lambda$ the unique dominant and $w_0\cdot\lambda$ the unique
antidominant element and $\Delta(w_0\cdot\lambda)=L(w_0\cdot\lambda)$.

This item freezes the following conventions, each inherited from the cited
suppliers and used verbatim below.

(i) **Multiplicity conventions.** $(P(w\cdot\lambda):\Delta(y\cdot\lambda))$ is
the Verma-flag multiplicity of [[def-verma-flag-and-its-multiplicities]] and
$[M(y\cdot\lambda):L(w\cdot\lambda)]$ the composition multiplicity, and
$$(P(w\cdot\lambda):\Delta(y\cdot\lambda))=[M(y\cdot\lambda):L(w\cdot\lambda)]$$
by BGG reciprocity ([[thm-bgg-reciprocity]]).

(ii) **Bruhat reversal convention.** Along the bijection
$W\ni w\mapsto w\cdot\lambda$ the Bruhat order runs opposite to the dominance
order, in the two exact senses used on this page: $y\le w$ implies
$w\cdot\lambda\le y\cdot\lambda$ in the dominance order, and every nonzero
multiplicity forces the index direction, i.e.
$[M(y\cdot\lambda):L(w\cdot\lambda)]\neq0$ implies $y\le w$ in the Bruhat
order. The first sense is the inclusion direction of
[[lem-dominant-integral-dot-translates-embed-in-the-verma-module]] (for
$w\ge y$ one has $M(w\cdot\lambda)\subseteq M(y\cdot\lambda)$, so the highest
weight of the submodule is the lower one), and the second is
[[lem-jordan-holder-factors-of-verma-modules-lie-above-the-head]], which
confines every composition factor of $M(y\cdot\lambda)$ to labels
$w\ge y$. The full statement that the two orders are isomorphic as posets is
not needed here and is not asserted; only these two directions, together with
the finiteness of intervals of the Bruhat order
([[lem-bruhat-order-basic-properties-for-permutations]]), are used.

(iii) **Hecke and Kazhdan–Lusztig normalization.** The Kazhdan–Lusztig basis
$\underline H_w=\sum_{y\le w}p_{y,w}H_y$ of the normalized type-$A$ Hecke
algebra ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]), with
$$p_{y,w}=v^{\ell(w)-\ell(y)}P_{y,w}(v^{-2})$$
in the classical $q=v^{-2}$ normalization
([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]), support
$p_{y,w}=0$ unless $y\le w$, diagonal $p_{w,w}=1$, and simultaneous inversion
symmetry $p_{y^{-1},w^{-1}}=p_{y,w}$.

(iv) **Soergel label and character dictionary.** Write $R_x$ for the
polynomial standard graph bimodule supported at $x$, and $B_x$ for the
normalized indecomposable polynomial Soergel bimodule, which is generally not a
standard graph bimodule. With right reduction $\bar B=B\otimes_S\mathbb C$
and left coinvariant-module values of $V$, the projective dictionary is
$$V(P(w\cdot\lambda))\cong\bar B_{w^{-1}}$$
([[thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules]]).
The graph label $x$ corresponds to the standard
$\Delta(x^{-1}\cdot\lambda)$. The individual support ranks are measured on the
polynomial lift before reduction, as in
[[prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v]];
no separated graph-support filtration of the reduced module is asserted.

For degree bookkeeping use precisely the standard-generator normalization of
[[def-type-a-standard-graph-bimodules-support-filtrations-and-character]]:
$\Delta_x(d)=R_x(d-\ell(x))$, and $r_{x,d}(B)$ counts these normalized polynomial
standard layers. Thus the coefficient polynomial is
$$m_x(B;v):=\sum_d r_{x,d}(B)v^d,\qquad h_\Delta(B)=\sum_xm_x(B;v)\widetilde T_x,\qquad\widetilde T_x=v^{\ell(x)}T_x.$$
Here $\widetilde T_x$ is the normalized **standard** Hecke element $H_x$ used
in clause (iii) and
[[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]. The published
Soergel split-Grothendieck-ring convention instead names its simple
Kazhdan--Lusztig generators $H_i=v(T_i+1)=\widetilde T_{s_i}+v$; these must not
be confused with the standard element $H_{s_i}=vT_i$
([[thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra]]).
The standard-character supplier
[[lem-the-type-a-standard-character-is-multiplicative]] identifies $h_\Delta$
with that split-Grothendieck-ring isomorphism. This records the coefficient
normalization, and does not infer the image of a general indecomposable $B_x$
by multiplying simple generators. In particular the character theorem must be
used to identify $h_\Delta(B_x)$ with $\underline H_x$; a product of simple
Soergel classes is a Bott--Samelson class and need not be $[B_x]$.
The inverse labels and all rank comparisons above use auxiliary polynomial
gradings only; forgetting them gives the ordinary projective dictionary.

