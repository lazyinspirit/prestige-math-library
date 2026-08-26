---
id: thm-density-for-a-small-category
kind: theorem
title: "Density theorem for a small category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category-of-elements, def-yoneda-embedding, cor-contravariant-yoneda-lemma, def-small-locally-small-and-large-category, prop-size-of-functor-categories]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Theorem 6.5.9"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Basic Category Theory, Theorem 6.2.17"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be small and let
$P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ be a presheaf. Let

$$D_P:\int P\longrightarrow[\mathcal C^{\mathrm{op}},\mathbf{Set}]$$

be the diagram sending an object $(c,x)$ of the category of elements of $P$ to
the representable presheaf $y(c)$ ([[def-category-of-elements]],
[[def-yoneda-embedding]]).

Then $P$ is a colimit of $D_P$. Equivalently, for every presheaf $Q$, cocones
from $D_P$ to $Q$ are in bijection with natural transformations $P\Rightarrow Q$.

## Facts & Assumptions

**Given:** A small category $\mathcal C$, a presheaf $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$, and the Yoneda embedding $y$.

[F1] The category of elements $\int P$ has objects $(c,x)$ with $x\in P(c)$, and a morphism $(c,x)\to(d,y)$ is an arrow $f:c\to d$ with $x=P(f)(y)$ ([[def-category-of-elements]]).

[F2] For small $\mathcal C$, the Yoneda embedding is the functor $y:\mathcal C\to[\mathcal C^{\mathrm{op}},\mathbf{Set}]$ sending $c$ to $\mathcal C(-,c)$ ([[def-yoneda-embedding]], [[prop-size-of-functor-categories]], [[def-small-locally-small-and-large-category]]).

[L1] For a presheaf $Q$, natural transformations $y(c)=\mathcal C(-,c)\Rightarrow Q$ are in bijection with elements of $Q(c)$, naturally in both variables ([[cor-contravariant-yoneda-lemma]]).

## Proof

**Proof technique:** direct.

1.1 For each object $(c,x)$ of $\int P$, [L1] gives a natural transformation $\lambda_{(c,x)}:y(c)\Rightarrow P$ corresponding to the element $x\in P(c)$. If $f:(c,x)\to(d,y)$ in $\int P$, then $x=P(f)(y)$ by [F1], so naturality in [L1] gives $\lambda_{(c,x)}=\lambda_{(d,y)}\circ y(f)$. Therefore the family $\lambda_{(c,x)}$ is a cocone from $D_P$ to $P$. [F1, F2, L1]

1.2 Let $Q$ be any presheaf. By [L1], giving a cocone from $D_P$ to $Q$ is exactly giving, for each object $(c,x)$ of $\int P$, an element $q_{c,x}\in Q(c)$ such that whenever $f:(c,x)\to(d,y)$ in $\int P$, one has $q_{c,x}=Q(f)(q_{d,y})$. But this is precisely the naturality condition for the assignment $\tau_c(x):=q_{c,x}$ to define a natural transformation $\tau:P\Rightarrow Q$. Thus cocones from $D_P$ to $Q$ are exactly natural transformations $P\Rightarrow Q$. [F1, L1]

2.1 Under the bijection of step 1.2, the canonical cocone of step 1.1 corresponds to the identity transformation $1_P$. Hence that cocone is universal, and $P$ is the colimit of $D_P$. [step 1.1, step 1.2] ∎
