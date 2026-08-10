---
id: ex-pointed-sets-equivalent-to-sets-and-partial-functions
kind: example
title: "Pointed sets are equivalent to sets and partial functions but not isomorphic as categories"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equivalence-and-adjoint-equivalence-of-categories, prop-category-isomorphisms-are-bijective-on-objects-and-morphisms, prop-sets-and-functions-form-category-set, def-initial-terminal-and-zero-object]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 1.5.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Let $\mathbf{Par}$ have sets as objects and partial functions as morphisms.
Adjoining or deleting a basepoint gives an equivalence
$\mathbf{Par}\simeq\mathbf{Set}_*$, but no isomorphism of these concrete
categories exists.

## Facts & Assumptions

**Given:** The category $\mathbf{Par}$ of sets and partial functions and the category $\mathbf{Set}_*$ of pointed sets and pointed maps.

[L1] An equivalence consists of functors inverse up to natural isomorphism ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

[L2] An isomorphism of categories is bijective on objects and morphisms ([[prop-category-isomorphisms-are-bijective-on-objects-and-morphisms]]).

[L3] Sets and functions form $\mathbf{Set}$, and zero objects are both initial and terminal ([[prop-sets-and-functions-form-category-set]], [[def-initial-terminal-and-zero-object]]).

## Verification

**Proof technique:** direct.

1.1 A partial function $A\rightharpoonup B$ is a function from a subset of $A$ to $B$, with the usual partial composition. Let $L(A)=A\amalg\{*\}$ and extend a partial function by sending every undefined input and the new point to the new point. This defines $L:\mathbf{Par}\to\mathbf{Set}_*$. [L3]

1.2 Conversely, let $R(X,x_0)=X\setminus\{x_0\}$. A pointed map $f:(X,x_0)\to(Y,y_0)$ induces the partial function defined at $x\ne x_0$ exactly when $f(x)\ne y_0$, with value $f(x)$. This defines $R:\mathbf{Set}_*\to\mathbf{Par}$. [L3]

1.3 The empty set is the unique zero object of $\mathbf{Par}$: if $Z$ were terminal, the empty partial function and each everywhere-defined map $\{*\}\to Z$ would force $Z=\varnothing$. In $\mathbf{Set}_*$ every pointed singleton is a zero object, so the distinct objects $(\{0\},0)$ and $(\{1\},1)$ are both zero objects. [L3]

2.1 Direct inspection of domains shows that both assignments preserve identities and partial composition. Moreover $RL=1_{\mathbf{Par}}$, while the pointed bijection $(X\setminus\{x_0\})\amalg\{*\}\to X$ that is inclusion on the first summand and sends $*$ to $x_0$ is natural. Hence $LR\cong1_{\mathbf{Set}_*}$. [step 1.1, step 1.2]

3.1 Step 2.1 supplies the equivalence in [L1]. An isomorphism as in [L2] would biject objects and, together with its inverse, preserve and reflect the zero-object property, contradicting step 1.3. Thus these categories are equivalent but not isomorphic. [step 2.1, step 1.3, L1, L2] ∎
