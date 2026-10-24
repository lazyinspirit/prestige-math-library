---
id: cor-ends-and-coends-exist-when-the-index-category-is-small-and-the-target-is-complete-or-cocomplete
kind: corollary
title: "Ends exist over a small index category in a complete target, and coends in a cocomplete one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-an-end-is-a-limit-over-the-twisted-arrow-category, def-twisted-arrow-category, def-end-and-coend, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-small-locally-small-and-large-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), Proposition 4.5.3"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a small category
([[def-small-locally-small-and-large-category]]) and let
$T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be a functor.

If $\mathcal D$ is complete, then $T$ has an end. If $\mathcal D$ is cocomplete,
then $T$ has a coend
([[def-small-finite-and-large-limits-completeness-and-cocompleteness]],
[[def-end-and-coend]]).

These conditions are sufficient and are not asserted to be necessary: the
definition of an end asks only that a terminal wedge exist, and a particular
functor on a large $\mathcal C$, or into a target that is not complete, may
still have one.

## Facts & Assumptions

**Given:** A small category $\mathcal C$ and a functor $T$ on $\mathcal C^{\mathrm{op}}\times\mathcal C$ with values in a complete, respectively cocomplete, category $\mathcal D$.

[F1] The objects of $\operatorname{Tw}(\mathcal C)$ are the morphisms of $\mathcal C$, and a morphism $f\to g$ is a pair $(a,b)$ of morphisms of $\mathcal C$ with $bfa=g$ ([[def-twisted-arrow-category]]).

[F2] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets. ([[def-small-locally-small-and-large-category]]).

[L1] The wedges over $T$ are the cones over $T\pi$, so an end is the limit over the twisted arrow category, and a coend is a colimit over $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$ of the integrand read with domain and codomain swapped ([[thm-an-end-is-a-limit-over-the-twisted-arrow-category]]).

[F3] A category is **complete** when it has all small limits and **cocomplete** when it has all small colimits, a diagram being small when its indexing category is small; Completeness and cocompleteness do not assert the existence of limits or colimits of large diagrams ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

## Proof

**Proof technique:** direct.

1.1 $\operatorname{Tw}(\mathcal C)$ is small. Its objects are the morphisms of $\mathcal C$, which form a set because $\mathcal C$ is small. A morphism of $\operatorname{Tw}(\mathcal C)$ carries its domain $f$, its codomain $g$ and the pair $(a,b)$, so the collection of all of them is a subclass of the fourfold product $\operatorname{Mor}(\mathcal C)\times\operatorname{Mor}(\mathcal C)\times\operatorname{Mor}(\mathcal C)\times\operatorname{Mor}(\mathcal C)$, cut out by the equation $bfa=g$; a subclass of a set is a set, and no choice is used to form it. [F1, F2, given]

2.1 The diagram $T\pi$ is therefore a small diagram in $\mathcal D$, so completeness of $\mathcal D$ supplies a limit for it, and by [L1] that limit is an end of $T$. [L1, F3, step 1.1]

3.1 The opposite of a small category is small, since it has the same objects and the same morphisms, so $T\pi^{\mathrm{sw}}$ is a small diagram as well and cocompleteness of $\mathcal D$ supplies a colimit for it, which by [L1] is a coend of $T$. [L1, F3, step 1.1] ∎

## Remarks

The smallness count is carried out rather than asserted because it is where a size hypothesis could quietly be dropped: it is the morphisms of $\operatorname{Tw}(\mathcal C)$, not only its objects, that have to form a set before $T\pi$ counts as a small diagram, and that in turn needs $\operatorname{Mor}(\mathcal C)$ to be a set rather than merely each hom-set to be one. A locally small but large $\mathcal C$ is not enough.

Sufficiency is all that is claimed. That the hypotheses cannot simply be dropped is [[fs-every-end-exists]], which exhibits a small index category and a target that is not complete in which an end fails to exist.
