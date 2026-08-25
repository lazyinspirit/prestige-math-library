---
id: cor-the-end-of-the-hom-functor-is-the-monoid-of-natural-endomorphisms-of-the-identity
kind: corollary
title: "The end of the hom-bifunctor is the commutative monoid of natural endomorphisms of the identity functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-set-of-natural-transformations-is-an-end, def-hom-functors-and-hom-bifunctor, def-functor-category, def-vertical-composition-of-natural-transformations, def-horizontal-composition-and-whiskering-of-natural-transformations, thm-interchange-law-for-natural-transformations, thm-eckmann-hilton-argument, def-semigroup-and-monoid, def-small-locally-small-and-large-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Remark 1.4.3"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a small category
([[def-small-locally-small-and-large-category]]). Then the end of its
hom-bifunctor ([[def-hom-functors-and-hom-bifunctor]]) is

$$\int_{c}\mathcal C(c,c)=\operatorname{Nat}(1_{\mathcal C},1_{\mathcal C}),$$

the set of natural transformations from the identity functor to itself
([[thm-the-set-of-natural-transformations-is-an-end]],
[[def-functor-category]]), and this set is a commutative monoid
([[def-semigroup-and-monoid]]) under vertical composition of natural
transformations ([[def-vertical-composition-of-natural-transformations]]), which
coincides on it with horizontal composition
([[def-horizontal-composition-and-whiskering-of-natural-transformations]]).

## Facts & Assumptions

**Given:** A small category $\mathcal C$ and its identity functor.

[F6] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets; a small category is locally small ([[def-small-locally-small-and-large-category]]).

[L1] For a small source category and a locally small target, the set of natural transformations is an end of the hom-bifunctor of the values: $\operatorname{Nat}(F,G)=\int_c\mathcal D(Fc,Gc)$, the terminal wedge being evaluation ([[thm-the-set-of-natural-transformations-is-an-end]]).

[F1] The hom-assignment sends $(a,b)$ to $\mathcal C(a,b)$, and a morphism of the product category consisting of $h:a'\to a$ and $u:b\to b'$ acts by $\mathcal C(h,u):\mathcal C(a,b)\longrightarrow\mathcal C(a',b'),\qquad f\longmapsto u\circ f\circ h$ ([[def-hom-functors-and-hom-bifunctor]]).

[F2] The functor category $[\mathcal C,\mathcal D]$ has functors $\mathcal C\to\mathcal D$ as objects and natural transformations as morphisms ([[def-functor-category]]).

[F3] The identity natural transformation $1_F$ has components $1_{FA}$, and the vertical composite of $\alpha:F\Rightarrow G$ and $\beta:G\Rightarrow H$ is given componentwise by $(\beta\circ\alpha)_A=\beta_A\circ\alpha_A$ ([[def-vertical-composition-of-natural-transformations]]).

[F4] The horizontal composite of $\alpha:F\Rightarrow G:\mathcal C\to\mathcal D$ and $\beta:H\Rightarrow L:\mathcal D\to\mathcal E$ has components $(\beta*\alpha)_A=\beta_{GA}\circ H(\alpha_A)=L(\alpha_A)\circ\beta_{FA}$ ([[def-horizontal-composition-and-whiskering-of-natural-transformations]]).

[F5] A monoid is a set with an associative operation and a two-sided identity $e$, so that $e * x \;=\; x \;=\; x * e \qquad \text{for every } x \in M .$ It is commutative when the operation is ([[def-semigroup-and-monoid]]).

[L2] Whenever the expressions are defined, $(\beta'\circ\beta)*(\alpha'\circ\alpha)=(\beta'*\alpha')\circ(\beta*\alpha)$ ([[thm-interchange-law-for-natural-transformations]]).

[L3] If a set carries two unital binary operations with the same unit satisfying $(a\circ b)*(c\circ d)=(a*c)\circ(b*d)$, then the operations coincide and their common operation is commutative ([[thm-eckmann-hilton-argument]]).

## Proof

**Proof technique:** direct.

1.1 A small category is locally small, so [L1] applies with $\mathcal D=\mathcal C$ and $F=G=1_{\mathcal C}$: the integrand $H(a,b)=\mathcal C(1_{\mathcal C}a,1_{\mathcal C}b)=\mathcal C(a,b)$ is the hom-bifunctor by [F1], and the theorem gives $\int_c\mathcal C(c,c)=\operatorname{Nat}(1_{\mathcal C},1_{\mathcal C})$, a hom-collection of the functor category by [F2] and hence a set. [F1, F2, F6, L1]

2.1 Write $M:=\operatorname{Nat}(1_{\mathcal C},1_{\mathcal C})$. Vertical composition is defined on $M$ and by [F3] is associative componentwise with two-sided unit $1_{1_{\mathcal C}}$. Horizontal composition is also defined on $M$, since source and target functors are all $1_{\mathcal C}$, and by [F4] it has the same two-sided unit: $(\alpha*1_{1_{\mathcal C}})_A=\alpha_A\circ 1_A=\alpha_A$ and $(1_{1_{\mathcal C}}*\alpha)_A=1_A\circ\alpha_A=\alpha_A$. So $M$ carries two unital operations with a common unit. [F3, F4, F5, step 1.1]

3.1 The published interchange law [L2] is exactly the hypothesis of [L3] for those two operations, read with $\beta'=a$, $\beta=b$, $\alpha'=c$, $\alpha=d$. Hence the two operations coincide and their common operation is commutative, so $M$ is a commutative monoid; by step 1.1 the end of the hom-bifunctor is that monoid. [F3, F4, F5, L2, L3, step 2.1] ∎

## Remarks

The component formula of [[def-horizontal-composition-and-whiskering-of-natural-transformations]] already gives $(\beta*\alpha)_A=\beta_A\circ\alpha_A$ when every functor involved is $1_{\mathcal C}$, so the coincidence of the two operations can also be read off directly. What that reading does not give is commutativity, and commutativity is the whole content: it is the conclusion of the Eckmann–Hilton argument and it is not visible in either component formula.

For a one-object category, that is a monoid, the natural endomorphisms of the identity are the elements commuting with every element, so the end of the hom-bifunctor is the centre of that monoid — a commutative monoid, as the corollary requires.
