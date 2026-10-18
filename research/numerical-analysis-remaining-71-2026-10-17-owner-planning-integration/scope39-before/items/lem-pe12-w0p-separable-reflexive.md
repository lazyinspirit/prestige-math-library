---
id: lem-pe12-w0p-separable-reflexive
kind: lemma
title: The zero-boundary W1p space is separable and reflexive
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [lem-w-one-p-is-reflexive, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, thm-closed-subspaces-of-reflexive-spaces-are-reflexive, thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn, def-separable-space, def-countable-choice, lem-dependent-choice-implies-countable-choice, def-ultrafilter-extension-principle, def-dependent-choice, def-hahn-banach-extension-principle-relative, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Springer Universitext, 2011
      url: https://www.math.toronto.edu/almut/Brezis.pdf
      locator: Proposition 9.1 and its pointer to the complete proof of Proposition 8.1, printed pp. 204 and 263; $W^{1,p}$ is Banach, reflexive for $1<p<\infty$, and separable for finite $p$.
---

## Statement

Assume the Axiom of Choice. Let
$\Omega\subseteq\mathbb R^d$ be bounded and open, $d\ge1$, and let
$1<p<\infty$. Then $W_0^{1,p}(\Omega;\mathbb R)$, with the norm inherited
from $W^{1,p}(\Omega;\mathbb R)$, is a separable reflexive real Banach space.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded
open $\Omega\subseteq\mathbb R^d$, $d\ge1$; and $1<p<\infty$.

[F1] Under the ultrafilter lemma, Dependent Choice and Hahn–Banach,
$W^{1,p}(\Omega;\mathbb R)$ is a real reflexive Banach space
([[lem-w-one-p-is-reflexive]]).

[F2] $W_0^{1,p}(\Omega)$ is the norm closure of
$C_c^\infty(\Omega)$ in $W^{1,p}(\Omega)$, so it is a closed linear
subspace ([[def-wkp-zero-as-a-sobolev-closure]],
[[def-sobolev-space-wkp-and-its-norm]]).

[F3] Under Hahn–Banach, a closed linear subspace of a reflexive Banach space
is reflexive with its inherited norm
([[thm-closed-subspaces-of-reflexive-spaces-are-reflexive]]).

[F4] Under Countable Choice, rational box-step functions form a countable
dense subset of $L^p(\mathbb R^d)$ for $1\le p<\infty$
([[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]).

[F5] The $W^{1,p}$ norm is the finite $\ell^p$-sum of the $L^p$ norms of a
function and its first weak derivatives
([[def-sobolev-space-wkp-and-its-norm]]).

[F6] A normed space is separable when it has a countable dense subset
([[def-separable-space]]).

[A1] The Axiom of Choice supplies the ultrafilter lemma, Dependent Choice
and Hahn–Banach; Dependent Choice implies Countable Choice, used for the
dense-set selections ([[def-axiom-of-choice]],
[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]],
[[def-ultrafilter-extension-principle]],
[[def-dependent-choice]],
[[def-hahn-banach-extension-principle-relative]],
[[lem-dependent-choice-implies-countable-choice]],
[[def-countable-choice]]).

## Proof
1.1 If $\Omega=\varnothing$, then $W_0^{1,p}(\Omega)=\{0\}$, which is a separable reflexive real Banach space, and the claim holds. Assume $\Omega\ne\varnothing$. By [F2], $W_0^{1,p}(\Omega)$ is a closed linear subspace of $W^{1,p}(\Omega)$. The latter is reflexive by [F1], and [F3] therefore makes $W_0^{1,p}(\Omega)$ reflexive. [A1, F1, F2, F3, given]

1.2 Extend each $g\in L^p(\Omega)$ by zero to $\mathbb R^d$. This is an isometry into $L^p(\mathbb R^d)$ because $\Omega$ is measurable, and restriction of the rational box-step dense family in [F4] shows that $L^p(\Omega)$ is separable. Finite products of this countable dense family are countable and dense in $Y:=L^p(\Omega)^{d+1}$. The map $u\mapsto(u,\partial_1u,\ldots,\partial_du)$ embeds $W^{1,p}(\Omega)$ isometrically into $Y$ by [F5]. Thus $W_0^{1,p}(\Omega)$, viewed as a subspace of $Y$, has a countable base obtained by intersecting it with the countable rational-ball base of $Y$. [A1, F4, F5, given, construct]

2.1 Choose one point from each nonempty member of that countable relative base, using Countable Choice [A1]. The chosen countable set meets every nonempty relatively open set, so it is dense in $W_0^{1,p}(\Omega)$. Together with step 1.1 this proves both assertions. [A1, F6, step 1.1, step 1.2, choose] ∎
