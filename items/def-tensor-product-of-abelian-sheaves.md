---
id: "def-tensor-product-of-abelian-sheaves"
kind: "definition"
title: "Tensor product of abelian sheaves and its total complex"
status: draft
origin: pipeline
deps: [def-topological-space, thm-abelian-sheaves-form-abelian-category, def-sheafification, thm-sheafification-universal-property, def-presheaf-of-groups-rings-modules, def-tensor-product-of-modules-by-generators-and-relations, def-cochain-complex-in-an-abelian-category, def-bounded-bounded-below-and-bounded-above-complex, def-direct-sum-of-a-family-of-modules, def-sheaf-tensor-product, lem-stalk-tensor-product, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, def-presheaf-on-topological-space]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Definitions 26.2 and 26.14 and Lemma 26.9; tensor conventions of Section 26"
---

## Definition

Let $X$ be a topological space ([[def-topological-space]]), and let
$\mathrm{Ab}(X)$ be the abelian category of sheaves of abelian groups on $X$
([[thm-abelian-sheaves-form-abelian-category]]). Write $A\otimes_{\mathbb Z}B$
for the tensor product of the abelian groups $A$ and $B$, that is, for
[[def-tensor-product-of-modules-by-generators-and-relations]] with
$R=\mathbb Z$.

For sheaves $\mathcal F,\mathcal G$ of abelian groups on $X$ the
**tensor-product presheaf** $\mathcal F\otimes_{p,\mathbb Z}\mathcal G$ is the
presheaf of abelian groups ([[def-presheaf-of-groups-rings-modules]]) with
$$(\mathcal F\otimes_{p,\mathbb Z}\mathcal G)(U):=\mathcal F(U)\otimes_{\mathbb Z}\mathcal G(U)$$
for every open $U\subseteq X$, whose restriction maps are induced by the
restriction maps of $\mathcal F$ and $\mathcal G$; they are homomorphisms
because the tensor product of abelian groups is functorial in each variable.

The **tensor product of abelian sheaves** is its sheafification
([[def-sheafification]])
$$\mathcal F\otimes_{\mathbb Z}\mathcal G:=a\bigl(\mathcal F\otimes_{p,\mathbb Z}\mathcal G\bigr),$$
a sheaf of abelian groups on $X$, and it is covariantly natural in
$\mathcal F$ and $\mathcal G$: morphisms $f:\mathcal F\to\mathcal F'$ and
$g:\mathcal G\to\mathcal G'$ induce a morphism
$f\otimes_{\mathbb Z}g:\mathcal F\otimes_{\mathbb Z}\mathcal G\to
\mathcal F'\otimes_{\mathbb Z}\mathcal G'$ by functoriality of the presheaf
tensor product and the sheafification adjunction
([[thm-sheafification-universal-property]]). If abelian sheaves are
regarded as modules over the constant sheaf of rings $\mathbb Z_X$
([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]), the two
constructions $\mathcal F\otimes_{\mathbb Z}\mathcal G$ and the tensor product
over $\mathbb Z_X$ of [[def-sheaf-tensor-product]] agree up to canonical
isomorphism, because they have the same stalks by
[[lem-stalk-tensor-product]].

For bounded-above cochain complexes $\mathcal F^\bullet,\mathcal G^\bullet$ of
abelian sheaves ([[def-cochain-complex-in-an-abelian-category]],
[[def-bounded-bounded-below-and-bounded-above-complex]]) the **tensor-product
total complex**
$\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal G^\bullet)$
is the cochain complex with degree-$n$ term the direct sum
([[def-direct-sum-of-a-family-of-modules]], $R=\mathbb Z$)
$$\operatorname{Tot}^n(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal G^\bullet):=\bigoplus_{i+j=n}\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j$$
over the degree-$n$ diagonal, whose differential is the unique morphism that on
the summand $\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j$ equals
$$d_{\mathcal F}^i\otimes\operatorname{id}_{\mathcal G^j}+(-1)^i\operatorname{id}_{\mathcal F^i}\otimes d_{\mathcal G}^j.$$
If $\mathcal F^i=0$ for $i>a$ and $\mathcal G^j=0$ for $j>b$, then for each
$n\le a+b$ only the finitely many pairs with $n-b\le i\le a$ contribute, so
every diagonal is a finite direct sum and no infinite sum in a morphism group
is required; consequently the total complex is again bounded above. For sheaves
$\mathcal F,\mathcal G$ concentrated in degree zero the total complex is
$\mathcal F\otimes_{\mathbb Z}\mathcal G$ in degree zero with zero terms
elsewhere. The differential satisfies $d^2=0$, and the relation of this complex
to the module-level tensor total complex is established in
[[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]].
