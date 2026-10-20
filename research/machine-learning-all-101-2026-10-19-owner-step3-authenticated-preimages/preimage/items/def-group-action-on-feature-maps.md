---
id: def-group-action-on-feature-maps
kind: definition
title: "The left action on feature maps induced by an action on sites"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-group-action, def-group, def-function]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Taco S. Cohen and Max Welling, Group Equivariant Convolutional Networks"
      url: "https://arxiv.org/pdf/1602.07576"
      locator: "§4.4, Eqs. (4)–(5), function transformations on sites and on the group."
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning"
      url: "https://www.deeplearningbook.org/contents/convnets.html"
      locator: "Chapter 9 §9.2, translation equivariance."
verification:
  precheck: pass
---

## Definition

Let $G$ be a group acting on the left on a set $S$, and let $V$ be a set of feature values. A feature map is a function $f:S\to V$. For $u\in G$, the induced transformation of feature maps is

$$
(L_u f)(x)=f(u^{-1}\cdot x)\qquad(x\in S).
$$

It is a left action on the set of feature maps: the group acts by reindexing sites and leaves the feature values unchanged. In particular, for maps $F:G\to V$ on the group itself with its left multiplication action, $(L_uF)(g)=F(u^{-1}g)$.

## Definition references

[[def-group-action|left action of a group on a set]]

[[def-function|functions and declared domains/codomains]]

[Cohen and Welling, “Group Equivariant Convolutional Networks,” §4.4, Eqs. (4)–(5)](https://arxiv.org/pdf/1602.07576)

[Goodfellow, Bengio, and Courville, *Deep Learning*, Chapter 9 §9.2](https://www.deeplearningbook.org/contents/convnets.html)

## Facts & Assumptions

**Given:** A group $G$ acts on the left on a set $S$, and $f:S\to V$ is a feature map. Verify that the displayed transformations form a left action.

[F1] [[def-group-action]]: A left action satisfies $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$ for every $g,h\in G$ and $x\in S$.

[F2] [[def-group]]: A group operation is associative, has an identity, and every element has a two-sided inverse.

## Proof

1.1 For each $x\in S$, $(L_e f)(x)=f(e^{-1}\cdot x)=f(x)$ by the identity law in [F1], so $L_e f=f$. [given, F1, algebra]

2.1 For $u,v\in G$, the element $v^{-1}u^{-1}$ is a two-sided inverse of $uv$, since $(uv)(v^{-1}u^{-1})=u(vv^{-1})u^{-1}=e$ and $(v^{-1}u^{-1})(uv)=v^{-1}(u^{-1}u)v=e$. Two two-sided inverses $a,b$ of an element $z$ coincide because $a=a(zb)=(az)b=b$; hence $(uv)^{-1}=v^{-1}u^{-1}$. Therefore, for each $x\in S$, $(L_u(L_v f))(x)=f(v^{-1}\cdot(u^{-1}\cdot x))=f((v^{-1}u^{-1})\cdot x)=f((uv)^{-1}\cdot x)=(L_{uv}f)(x)$ by [F1]. Thus $L_uL_v=L_{uv}$. [given, F1, F2, algebra] ∎
