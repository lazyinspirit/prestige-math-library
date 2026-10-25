---
id: cex-a-category-that-is-not-well-powered
kind: counterexample
title: "A locally small category that is not well-powered: one object admits no set of representative monomorphisms"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
  truth_risk: "The ordinal construction must be locally small and its subobject classes must remain inequivalent."
  counterexample_search: "Checked hom-sets, monicity in the thin category, mutual factorisation, and proper-class size using Burali-Forti."
deps: [def-well-powered-and-co-well-powered-category, rem-category-theory-class-and-size-conventions, def-category, def-small-locally-small-and-large-category, lem-ordinal-basics, fs-ordinals-form-a-set]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

There is a locally small category that is not well-powered: one of its objects
admits no set of monomorphisms into it meeting every subobject class. Take the
thin category whose objects are all ordinals together with a
new top object $\infty$, ordered by the ordinal order and by
$\alpha<\infty$ for every ordinal $\alpha$.

## Facts & Assumptions

**Given:** The displayed definable-class preorder category $\mathcal O_\infty$.

[L1] Under the library's definable-class convention, a category may have definable-class object and morphism collections ([[def-category]]).

[L2] Every ordinal has a larger successor and ordinals are comparable ([[lem-ordinal-basics]]).

[L3] The ordinals do not form a set ([[fs-ordinals-form-a-set]]).

[L4] A category is well-powered when, for every object $C$, there is a set of monomorphisms into $C$ containing a representative of every subobject class of $C$ ([[def-well-powered-and-co-well-powered-category]]).

[L5] A category is locally small when every hom-collection is a set ([[def-small-locally-small-and-large-category]]).

## Verification

**Proof technique:** constructive.

1.1 Put one morphism $x\to y$ exactly when $x\le y$ in the displayed order. Every hom-collection is therefore empty or a singleton, so the definable-class category is locally small by [L5]. [L1, L2, L5, construct]

2.1 Every morphism in a thin category is monic: any parallel arrows that can be composed with it are already equal. Hence each arrow $m_\alpha:\alpha\to\infty$ represents a subobject of $\infty$. [step 1.1]

2.2 The arrows $m_\alpha$ and $m_\beta$ mutually factor exactly when both $\alpha\le\beta$ and $\beta\le\alpha$, hence exactly when $\alpha=\beta$. Thus distinct ordinals give distinct subobject classes. [step 1.1, L2]

3.1 Suppose some set $M$ of monomorphisms into $\infty$ contained a representative of every subobject class. By step 2.2 the only monomorphism into $\infty$ that mutually factors with $m_\alpha$ is $m_\alpha$ itself, so $M$ would have to contain $m_\alpha$ for every ordinal $\alpha$, and $\alpha\mapsto m_\alpha$ is injective. Sending each such member of $M$ back to its domain would then exhibit the ordinals as the image of a set, making them a set and contradicting [L3]. No such $M$ exists, so the category is not well-powered by [L4], despite being locally small. [step 1.1, step 2.2, L3, L4, discharge-construct] ∎
