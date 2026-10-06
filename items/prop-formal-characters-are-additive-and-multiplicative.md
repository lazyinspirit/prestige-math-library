---
id: prop-formal-characters-are-additive-and-multiplicative
kind: proposition
title: Formal characters are additive and multiplicative
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-completed-formal-character-ring-for-downward-cones, def-formal-character-of-a-finite-dimensional-weight-module, prop-direct-sum-dual-hom-and-tensor-representations, def-weight-and-weight-space-of-a-lie-algebra-representation, prop-verma-and-finite-dimensional-modules-lie-in-category-o, prop-tensoring-with-a-finite-dimensional-module-preserves-category-o, def-grothendieck-group-and-character-of-category-o]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.2, printed p. 139 (additivity of χ on short exact sequences and multiplicativity χ_{V⊗U} = χ_V χ_U)"
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§13.1, printed p. 93, Exercise 13.2 (ch(V⊗W) = ch(V)·ch(W) and additivity on exact sequences)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $V,W$ be
finite-dimensional $\mathfrak g$-modules.

(i) If $0\to V'\to V\to V''\to0$ is a short exact sequence of
finite-dimensional $\mathfrak g$-modules, then
$\operatorname{ch}V=\operatorname{ch}V'+\operatorname{ch}V''$; in particular
$\operatorname{ch}(V\oplus W)=\operatorname{ch}V+\operatorname{ch}W$ and the
zero module has character $0$.

(ii) For the tensor product $V\otimes_{\mathbb C}W$ with the diagonal action
$x\cdot(v\otimes w)=xv\otimes w+v\otimes xw$ of
[[prop-direct-sum-dual-hom-and-tensor-representations]],
$$\operatorname{ch}(V\otimes W)=\operatorname{ch}V\cdot\operatorname{ch}W,$$
the product taken in the completed character ring $\mathcal R$ of
[[def-completed-formal-character-ring-for-downward-cones]].

## Facts & Assumptions

**Given:** The Axiom of Choice, finite-dimensional $\mathfrak g$-modules $V,W$, a short exact sequence $0\to V'\to V\to V''\to0$ of such modules, and the completing ring $\mathcal R$.

[A1] The Axiom of Choice is assumed; it enters through the published decomposition and category suppliers cited below ([[def-axiom-of-choice]]).

[F1] $\operatorname{ch}U=\sum_\mu(\dim U_\mu)e^\mu$ is a finite-support element of $\mathcal R$ for every finite-dimensional $\mathfrak g$-module $U$ ([[def-formal-character-of-a-finite-dimensional-weight-module]]).

[F2] Taking weight spaces is exact on $\mathfrak h$-semisimple modules: a $\mathfrak g$-linear map preserves weight spaces, so for every $\mu$ the sequence $0\to V'_\mu\to V_\mu\to V''_\mu\to0$ is exact, and every $\mathfrak g$-module in sight has a weight-space decomposition; $V$, $V'$, $V''$ and $V\oplus W$ are objects of the category $\mathcal O$, and finite-dimensional $\mathfrak h$-semisimple modules belong to $\mathcal O$ ([[def-grothendieck-group-and-character-of-category-o]], [[prop-verma-and-finite-dimensional-modules-lie-in-category-o]], [[prop-tensoring-with-a-finite-dimensional-module-preserves-category-o]]).

[F3] For the diagonal action on $V\otimes W$ of
[[prop-direct-sum-dual-hom-and-tensor-representations]] and $H\in\mathfrak h$
one has $H\cdot(v\otimes w)=(Hv)\otimes w+v\otimes(Hw)$, so
$V_\mu\otimes W_\nu\subseteq(V\otimes W)_{\mu+\nu}$ and, choosing bases of
weight vectors in $V$ and in $W$, the weight spaces of $V\otimes W$ are
$$(V\otimes W)_\eta=\bigoplus_{\mu+\nu=\eta}V_\mu\otimes W_\nu$$
([[def-weight-and-weight-space-of-a-lie-algebra-representation]],
[[prop-direct-sum-dual-hom-and-tensor-representations]]).

[F4] The product in $\mathcal R$ is the convolution $(fg)_\eta=\sum_{\mu+\nu=\eta}c_\mu d_\nu$ with $f=\sum_\mu c_\mu e^\mu$, $g=\sum_\nu d_\nu e^\nu$ ([[def-completed-formal-character-ring-for-downward-cones]]).

## Proof

**Proof technique:** direct.

1.1 By [F2] each $\mathfrak g$-linear map of $\mathfrak h$-semisimple modules restricts to the weight spaces, and the short exact sequence of the statement restricts to the short exact sequence $0\to V'_\mu\to V_\mu\to V''_\mu\to0$ for every $\mu$, so the dimensions satisfy $\dim V_\mu=\dim V'_\mu+\dim V''_\mu$; moreover [F3] describes the weight spaces of a tensor product as the direct sum over $\mu+\nu=\eta$ of the tensor products of the weight spaces. [F2, F3, algebra, A1]

2.1 For part (i), step 1.1 gives $\dim V_\mu=\dim V'_\mu+\dim V''_\mu$ for every $\mu$, and all three characters are finite sums by [F1], so summing the dimension identity against $e^\mu$ gives $\operatorname{ch}V=\operatorname{ch}V'+\operatorname{ch}V''$ in $\mathcal R$; the direct sum is the special case of the split sequence $0\to V\to V\oplus W\to W\to0$, and the zero module has all weight spaces zero, hence character $0$. [F1, step 1.1, algebra]

3.1 For part (ii), step 1.1 gives $(V\otimes W)_\eta=\bigoplus_{\mu+\nu=\eta}V_\mu\otimes W_\nu$, so $\dim(V\otimes W)_\eta=\sum_{\mu+\nu=\eta}(\dim V_\mu)(\dim W_\nu)$; the argument of step 2.1, now applied to these coefficients, gives $\operatorname{ch}(V\otimes W)=\sum_\eta\bigl(\sum_{\mu+\nu=\eta}(\dim V_\mu)(\dim W_\nu)\bigr)e^\eta=(\operatorname{ch}V)(\operatorname{ch}W)$ by the convolution rule of [F4]. [F1, F4, step 1.1, step 2.1, algebra] ∎ 