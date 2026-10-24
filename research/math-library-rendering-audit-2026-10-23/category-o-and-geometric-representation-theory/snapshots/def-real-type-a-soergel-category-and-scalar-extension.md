---
id: def-real-type-a-soergel-category-and-scalar-extension
kind: definition
title: "The real type-A Soergel category by scalar extension"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-type-a-reflection-realization-and-polynomial-ring, def-type-a-soergel-bimodule-for-a-simple-reflection, def-bott-samelson-bimodule-of-a-word, def-the-type-a-soergel-category, def-split-grothendieck-rings-of-type-a-soergel-categories, lem-type-a-soergel-generators-are-finite-free-on-both-sides, def-graded-ring-module-bimodule-and-internal-shift]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 3.1 (Coxeter systems, the reflection faithful realization over R, the dominant element rho and display (3.1)); Section 3.3 (bimodules, shifts, duality)"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Notation 1.9 (the ring of regular functions and the category of graded bimodules), Section 2 (the reflection faithful representation over an infinite field of characteristic not two)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 1.2 (representations reflechies fideles), Section 1.3 (bimodules de Soergel)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Definition

**Scalar extension of the published realization.** The published type-A page
works over $k=\mathbb Q$ with the polynomial ring $R=\mathbb Q[x_1,\ldots,x_n]$
and the two normalizations of the simple roots of
[[def-type-a-reflection-realization-and-polynomial-ring]]: the coordinate roots
$\beta_i=x_i-x_{i+1}$ and the alternating balanced roots
$\alpha_i^{\mathrm{bal}}=\varepsilon_i\beta_i$, $\varepsilon_i=(-1)^{i-1}$. For
the Hodge-theoretic statements of this page we extend scalars along
$\mathbb Q\hookrightarrow\mathbb R$ and set
$$S:=\mathbb R[x_1,\ldots,x_n],\qquad \deg x_i=2,$$
with $S_0=\mathbb R$ and finite-dimensional homogeneous pieces $S_d$; the
symmetric group $S_n$ acts by the place permutations
$w\cdot x_i:=x_{w(i)}$ ([[def-type-a-reflection-realization-and-polynomial-ring]]).
On this page $\alpha_i$ always means the coordinate root
$\alpha_i:=\beta_i=x_i-x_{i+1}$, and $\alpha_i^\vee:=\beta_i^\vee$ is the
coordinate coroot, so that under the standard form the Cartan entries are
$\langle\alpha_i^\vee,\alpha_j\rangle=2\delta_{ij}-\delta_{|i-j|,1}$ and
adjacent entries are $-1$; the reflection is
$s_i(v)=v-\langle v,\alpha_i\rangle\alpha_i^\vee$. The alternating balanced
roots $\alpha_i^{\mathrm{bal}}$ are retained by the published page for its
diagrammatic presentation and are not used for positivity, Demazure traces or
descent signs on this page; both choices define the same reflections, the same
reflecting hyperplanes, the same invariant rings $S^{s_i}$ and the same
underlying bimodules, and they differ only by the unit $\pm1$ in front of the
root, which changes no tensor bimodule but does change the normalization of
$\partial_i$ and of the trace.

**The real generators and the real category.** For $1\le i\le n-1$ set
$$B_i^R:=S\otimes_{S^{s_i}}S(1),$$
the balanced tensor product of the $(S,S^{s_i})$-bimodule $S$ with the
$(S^{s_i},S)$-bimodule $S$, shifted in the Elias-Williamson convention
$M(1)_d=M_{d+1}$ used on this page ([[def-type-a-soergel-bimodule-for-a-simple-reflection]],
[[def-graded-ring-module-bimodule-and-internal-shift]]). Its left basis
$\{1\otimes1,\,1\otimes\alpha_i\}$ and right basis
$\{1\otimes1,\,\alpha_i\otimes1\}$ have degrees $-1$ and $+1$, and
$B_i^R$ is finite free of rank two on each side
([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]]). The **real
type-A Soergel category** $\mathrm{SBim}_n^R$ is the idempotent completion
([[def-the-type-a-soergel-category]]) of the full subcategory of graded
$(S,S)$-bimodules whose objects are the finite direct sums of shifts
$B_{\underline i}^R(d)=B_{i_1}^R\otimes_S\cdots\otimes_SB_{i_r}^R(d)$ of real
Bott-Samelson products ([[def-bott-samelson-bimodule-of-a-word]]), with the
same internal shifts as the rational category, i.e. $M(d)_e=M_{d+e}$ in the
Elias-Williamson convention. Its unit is the graded ring $S$ itself, regarded
as an object in cohomological degree zero; it is not a polynomial ring
concentrated in internal degree zero. Categorically,
$\mathrm{SBim}_n^R=\mathrm{Kar}(\mathrm{BSBim}_n^R)$ has the same formal
properties as the rational Soergel category: it is graded, additive,
idempotent-complete and monoidal with unit $S$, and every object is a finite
direct sum of graded shifts of indecomposables.

**Scalar extension of objects.** For a graded $(R,R)$-bimodule $M$ over the
rational polynomial ring put $M^R:=M\otimes_{\mathbb Q}\mathbb R$, with the
$S$-actions induced from the $R$-actions and the tensor grading. Since
$\mathbb Q\to\mathbb R$ is flat, scalar extension is exact on graded pieces;
it carries the rational generator $B_i=R\otimes_{R^{s_i}}R(1)$ to $B_i^R$, the
rational Bott-Samelson construction to the real one, and the rational
idempotent completion to the real one. Standard graph supports, the
$\Delta$- and $\nabla$-flags with their characters, and all formulas of the
rational page are read over $\mathbb R$ after extension. The Hecke algebra
used for characters is the integral normalized algebra
$H_v(n)$ over $\mathbb Z[v^{\pm1}]$ with basis $H_x$ of
[[def-split-grothendieck-rings-of-type-a-soergel-categories]]; it is the same
algebra before and after the scalar extension, since it is defined over
$\mathbb Z$.

**The dominant chamber.** The **dominant chamber** on this page is the set of
strictly dominant degree-two elements
$$\Theta:=\Bigl\{\rho=\sum_{j=1}^n c_jx_j\ :\ c_j\in\mathbb R,\ c_j>c_{j+1}\ \text{for } 1\le j\le n-1\Bigr\}\subset S_2 .$$
It is nonempty, for example for $c_j=(n+1)/2-j$, which gives
$c_j-c_{j+1}=1$ for every $j$. For $\rho=\sum_jc_jx_j$ the coordinate
evaluation is $\rho(\alpha_i^\vee)=\rho(x_i-x_{i+1})=c_i-c_{i+1}$, so
$\rho\in\Theta$ is exactly a degree-two element with
$\rho(\alpha_i^\vee)>0$ for every simple coroot; no alternating-sign chamber
and no replacement of $\rho$ is used anywhere on this page.

**Conventions.** All tensor products are over $S$ unless indicated, all shifts
are the internal shifts just fixed, "form" on this page always means a graded
symmetric form that is $S$-bilinear for the right action and invariant under
the left action in the sense fixed by the intersection-form definition below, and
dimensions of reduced modules are always real dimensions. The rational
comparison statements needed for labels, characters and forms are collected
in the comparison lemma later on this page.
