---
id: def-coherently-shift-compatible-functor-and-natural-transformation
kind: definition
title: Coherently shift-compatible functors and natural transformations
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-graded-ring-module-bimodule-and-internal-shift, def-natural-transformation, def-natural-isomorphism, def-additive-functor, def-functor-and-contravariant-functor, def-k-linear-category-and-k-linear-functor, lem-internal-shift-endofunctors-and-tensor-compatibility]
justified_by: [lem-coherent-shift-functors-and-transformations-form-hom-categories]
aliases: []
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Roozbeh Hazrat, Graded Rings and Graded Grothendieck Groups (arXiv:1405.5071), §1.2.2 shift of modules (1.16), printed p.34; §1.2.6 graded tensor product (1.21)-(1.23), printed pp.40-41; §2.3 Definitions 2.3.3-2.3.4, Theorem 2.3.7 with its proof, Theorem 2.3.8, Example 2.3.9, printed pp.118-123"
      url: "https://arxiv.org/pdf/1405.5071"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras (arXiv:0909.4844), §2.2 'Graded representation theory', printed pp.6-8"
      url: "https://arxiv.org/pdf/0909.4844"
---

## Definition

Let $k$ be a field and $A,B$ graded $k$-algebras, with $\operatorname{GrMod}_0(A)$,
$\operatorname{GrMod}_0(B)$ the abelian categories of graded modules and degree-zero maps
([[def-graded-ring-module-bimodule-and-internal-shift]]) and with the internal-shift
autoequivalences $X\mapsto X\{r\}$ of
[[lem-internal-shift-endofunctors-and-tensor-compatibility]]. A functor
$F:\operatorname{GrMod}_0(A)\to\operatorname{GrMod}_0(B)$ ([[def-functor-and-contravariant-functor]])
is **coherently shift-compatible** when it is additive ([[def-additive-functor]]) and comes with a
family of degree-zero $B$-linear isomorphisms
$$\theta_{X,r}:F(X\{r\})\longrightarrow F(X)\{r\},$$
natural in $X$ ([[def-natural-transformation]], [[def-natural-isomorphism]]), such that for all
graded modules $X$ and all $r,s\in\mathbb Z$ the unit and cocycle identities
$$\theta_{X,0}=1_{F(X)},\qquad \theta_{X,r+s}=(\theta_{X,r}\{s\})\circ\theta_{X\{r\},s}$$
hold under the canonical shift identifications $(X\{r\})\{s\}=X\{r+s\}$ and
$F(X)\{r\}\{s\}=F(X)\{r+s\}$ provided by
[[lem-internal-shift-endofunctors-and-tensor-compatibility]]; here $\theta_{X,r}\{s\}$ is the
shift of the morphism $\theta_{X,r}$. These are supplied equivariance data, not merely the existence
of unrelated shift isomorphisms, and no particular functor is asserted to admit them.

A natural transformation $\eta:F\Rightarrow G$ between coherently shift-compatible functors is
**coherent**, or shift-compatible, when
$$\theta^G_{X,r}\,\eta_{X\{r\}}=(\eta_X\{r\})\,\theta^F_{X,r}$$
for all $X,r$. The class of such data, with coherent transformations as morphisms, is written
$\mathrm{Coh}^0(A,B)$; the sub-class used by the classification theorem consists of the $k$-linear
([[def-k-linear-category-and-k-linear-functor]]) right exact coproduct-preserving members, written
$\mathrm{CohFun}(A,B)$ in
[[lem-coherent-shift-functors-and-transformations-form-hom-categories]]. The definition assumes no
commutativity of the rings beyond the central field $k$, no flatness or exactness of $F$, and uses
no choice.

The coherence is a genuine restriction and not a formality: the unit and cocycle are part of the
supplied data, and the equivariance square is imposed on 2-cells, so an additive functor is not
coherent merely by being additive, nor automatically by being an equivalence. Hazrat's Definition
2.3.3 uses strict commutation $\varphi T_\alpha=T_\alpha\varphi$ with the suspension functors and,
by his Remark 2.3.4, does not require natural transformations between such functors to commute with
suspensions; the coherent isomorphisms and the equivariance square are the deliberate refinement
used on this page, and the same 2-cells are used on both sides of the graded theorem below.
