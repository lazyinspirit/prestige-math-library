---
id: thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion
kind: theorem
title: "The presheaf category on a small category is the free cocompletion"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-density-as-a-self-kan-extension-for-a-small-category, thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise, thm-density-for-a-small-category, thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions, thm-yoneda-embedding-is-fully-faithful, cor-left-adjoints-preserve-colimits, def-yoneda-embedding, def-category-of-elements, def-small-locally-small-and-large-category, prop-size-of-functor-categories, cor-contravariant-yoneda-lemma, thm-adjoints-are-unique-up-to-unique-natural-isomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 6.5.11"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Basic Category Theory, §6.2"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be small, let
$y:\mathcal C\to[\mathcal C^{\mathrm{op}},\mathbf{Set}]$ be the Yoneda
embedding, let $\mathcal E$ be locally small and cocomplete, and let
$F:\mathcal C\to\mathcal E$ be a functor.

For each presheaf $P$, choose a colimit in $\mathcal E$ of the canonical
density diagram

$$\int P\longrightarrow\mathcal C\overset{F}{\longrightarrow}\mathcal E.$$

These chosen colimits assemble into a functor

$$\operatorname{Lan}_yF:[\mathcal C^{\mathrm{op}},\mathbf{Set}]\longrightarrow\mathcal E,$$

and this functor is left adjoint to

$$\mathcal E(F-,-):\mathcal E\longrightarrow[\mathcal C^{\mathrm{op}},\mathbf{Set}].$$

Conversely, if $L:[\mathcal C^{\mathrm{op}},\mathbf{Set}]\to\mathcal E$ is any
left adjoint, then with $F:=Ly$ one has

$$L\cong\operatorname{Lan}_yF,\qquad \text{and} \qquad \operatorname{right\ adjoint}(L)\cong\mathcal E(F-,-).$$

More generally, every functor
$L:[\mathcal C^{\mathrm{op}},\mathbf{Set}]\to\mathcal E$ that preserves all
small colimits satisfies
$$L\cong\operatorname{Lan}_y(Ly).$$
Every natural transformation between two functors on $\mathcal C$ extends
uniquely to a natural transformation between their small-colimit-preserving
extensions.

So $[\mathcal C^{\mathrm{op}},\mathbf{Set}]$ is the free cocompletion of
$\mathcal C$ under small colimits, with the chosen-colimit clause made explicit
in the data.

## Facts & Assumptions

**Given:** A small category $\mathcal C$, the Yoneda embedding $y$, a locally small cocomplete category $\mathcal E$, and a functor $F:\mathcal C\to\mathcal E$.

[L1] The identity functor on the presheaf category is the pointwise left Kan extension of $y$ along $y$ ([[thm-density-as-a-self-kan-extension-for-a-small-category]]).

[L2] A pointwise Kan extension along a fully faithful functor restricts back by isomorphism to the original functor ([[thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise]]).

[L3] For presheaves $P,Q$, cocones from the canonical density diagram of $P$ to $Q$ are exactly natural transformations $P\Rightarrow Q$ ([[thm-density-for-a-small-category]]).

[L4] Natural transformations $y(c)\Rightarrow H$ are naturally in bijection with elements of $H(c)$ ([[cor-contravariant-yoneda-lemma]]).

[L5] Two left adjoints to the same functor are uniquely naturally isomorphic in a way compatible with the adjunction data ([[thm-adjoints-are-unique-up-to-unique-natural-isomorphism]]).

[L6] The comma-category colimit formula computes the pointwise left Kan extension value at each target object ([[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]]).

[L7] For small $\mathcal C$, the Yoneda functor $y:\mathcal C\to[\mathcal C^{\mathrm{op}},\mathbf{Set}]$ is fully faithful ([[thm-yoneda-embedding-is-fully-faithful]]).

[L8] Every left adjoint preserves all colimits that exist ([[cor-left-adjoints-preserve-colimits]]).

## Proof

**Proof technique:** direct.

1.1 Fix a presheaf $P$. Under the Yoneda bijection [L4], an object of the comma category $(y\downarrow P)$ is exactly a pair $(c,x)$ with $x\in P(c)$, and the comma-category morphism condition says that a map $(c,x)\to(d,y)$ is precisely an arrow $f:c\to d$ with $x=P(f)(y)$, exactly as in the category of elements ([[def-category-of-elements]], [[def-yoneda-embedding]]). So $(y\downarrow P)$ is canonically $\int P$, the same indexing category that appears in the self-Kan presentation [L1], and the displayed diagram $\int P\to\mathcal C\overset{F}{\to}\mathcal E$ is the comma-category diagram used by [L6]. Therefore its chosen colimit is the pointwise left Kan extension value of $F$ along $y$ at $P$. Because these colimits and their universal cocones are supplied for every $P$, [L6] assembles them into a functor $\operatorname{Lan}_yF:[\mathcal C^{\mathrm{op}},\mathbf{Set}]\to\mathcal E$. By [L7] the functor $y$ is fully faithful, so [L2] shows that this pointwise extension restricts along $y$ to $F$ up to the canonical isomorphism. [L1, L2, L4, L6, L7]

2.1 Let $e\in\mathcal E$, and define the presheaf $Q_e:=\mathcal E(F- , e)$ on $\mathcal C$. A morphism $\operatorname{Lan}_yF(P)\to e$ is, by the chosen colimit universal property, exactly a cocone from the diagram $\int P\to\mathcal C\overset{F}{\to}\mathcal E$ to the constant diagram at $e$. By [L4], giving such a cocone is equivalently giving, for each object $(c,x)$ of $\int P$, an element of $Q_e(c)$ natural in morphisms of $\int P$, that is, a cocone from the canonical density diagram of $P$ to $Q_e$. By [L3], these cocones are exactly natural transformations $P\Rightarrow Q_e=P\Rightarrow\mathcal E(F- , e)$. Hence $\mathcal E(\operatorname{Lan}_yF(P),e)\cong[\mathcal C^{\mathrm{op}},\mathbf{Set}](P,\mathcal E(F-,-))$ naturally in $P$ and $e$, so $\operatorname{Lan}_yF\dashv\mathcal E(F-,-)$. [L3, L4, step 1.1]

2.2 Now let $L:[\mathcal C^{\mathrm{op}},\mathbf{Set}]\to\mathcal E$ preserve all small colimits and put $F:=Ly$. By [L3], every presheaf $P$ is the colimit of its canonical density diagram of representables. Applying $L$ preserves that colimit, so $L(P)$ is the colimit of the diagram $(c,x)\mapsto Ly(c)=F(c)$. By step 1.1 this is exactly $\operatorname{Lan}_yF(P)$, naturally in $P$. Hence $L\cong\operatorname{Lan}_y(Ly)$. [L3, step 1.1]

3.1 Since $\operatorname{Lan}_yF$ is a left adjoint by step 2.1, [L8] shows that it preserves all small colimits. [L8, step 2.1]

3.2 Conversely, let $L\dashv H$ with domain the presheaf category, and put $F:=Ly$. For any $e\in\mathcal E$ and $c\in\mathcal C$, adjunction and [L4] give $H(e)(c)\cong[\mathcal C^{\mathrm{op}},\mathbf{Set}](y(c),H(e))\cong\mathcal E(Ly(c),e)=\mathcal E(F(c),e)$, naturally in $c$ and $e$. So $H\cong\mathcal E(F-,-)$, and step 2.1 shows $\operatorname{Lan}_yF$ is another left adjoint to the same right adjoint. Therefore [L5] gives $L\cong\operatorname{Lan}_yF$. [L4, L5, step 2.1]

4.1 Given $\tau:F\Rightarrow F'$, its components induce a morphism between the two chosen density colimits at every presheaf, and the colimit universal properties make these morphisms natural. Conversely, any natural transformation between small-colimit-preserving extensions is determined at $P$ by its components on the representables in the canonical density colimit of [L3]. Therefore extension of $\tau$ is unique, which completes the free-cocompletion universal property. [L3, step 3.1, step 2.2] ∎
