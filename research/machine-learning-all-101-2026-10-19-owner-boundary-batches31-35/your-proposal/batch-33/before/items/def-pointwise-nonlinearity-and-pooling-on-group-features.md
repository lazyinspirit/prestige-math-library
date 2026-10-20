---
id: def-pointwise-nonlinearity-and-pooling-on-group-features
kind: definition
title: "Pointwise nonlinearities, neighborhood pooling, subgroup sampling, and coset pooling"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-group-action-on-feature-maps, def-group-action, def-group, def-subgroup, def-coset, def-function]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Taco S. Cohen and Max Welling, Group Equivariant Convolutional Networks"
      url: "https://arxiv.org/pdf/1602.07576"
      locator: "§6.2, pointwise nonlinearities, and §6.3, subgroup and coset pooling."
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning"
      url: "https://www.deeplearningbook.org/contents/convnets.html"
      locator: "Chapter 9 §9.3, pooling."
verification:
  precheck: pass
---

## Definition

Let $G$ be a group and let $F:G\to\mathbb R^C$ be a feature map with $C$ channels. A pointwise nonlinearity determined by $\nu:\mathbb R\to\mathbb R$ is $N_\nu F$, where $(N_\nu F)(g)_c=\nu(F(g)_c)$. For a nonempty finite set $U\subseteq G$, non-strided neighborhood max pooling is $P_UF$, where $(P_UF)(g)_c=\max_{u\in U}F(gu)_c$; the output is still indexed by $G$. For a subgroup $H\le G$, subgroup sampling is the restriction $R_HF=F|_H$, indexed by $H$.

The left-coset set is $G/H=\{gH:g\in G\}$, where $gH=\{gh:h\in H\}$. Its left $G$-action is $a\cdot(gH)=(ag)H$. For finite $H$, left-coset max pooling is the map $Q_HF:G/H\to\mathbb R^C$ given by $(Q_HF)(gH)_c=\max_{h\in H}F(gh)_c$. All maxima are taken separately in each channel. When $H=G$ is finite, $G/H$ has one element and $Q_HF$ is a group-invariant summary.

## Definition references

[[def-group-action-on-feature-maps|left actions on group-indexed feature maps]]

[[def-group-action|left actions of groups on sets]]

[[def-subgroup|subgroup identity, closure, and inverse conditions]]

[[def-coset|left cosets]] $gH$ of a subgroup

[[def-function|functions and declared domains/codomains]]

[Cohen and Welling, “Group Equivariant Convolutional Networks,” §§6.2–6.3](https://arxiv.org/pdf/1602.07576)

[Goodfellow, Bengio, and Courville, *Deep Learning*, Chapter 9 §9.3](https://www.deeplearningbook.org/contents/convnets.html)

## Facts & Assumptions

**Given:** A group $G$, a finite subgroup $H\le G$, a nonempty finite $U\subseteq G$, and a feature map $F:G\to\mathbb R^C$. Verify that the coset action and pooling formulas are well-defined.

[F1] [[def-subgroup]]: A subgroup contains the identity and is closed under multiplication and inverses.

[F2] [[def-coset]]: The left coset represented by $g$ is $gH=\{gh:h\in H\}$.

[F3] [[def-group-action]]: A left action satisfies $e\cdot z=z$ and $(ab)\cdot z=a\cdot(b\cdot z)$ for each acted-on element $z$.

## Proof

1.1 If $gH=g'H$, then $g'=g'e\in g'H=gH$, so [F2] gives $g'=gh_0$ for some $h_0\in H$. By [F1], $h_0H\subseteq H$; conversely, every $k\in H$ equals $h_0(h_0^{-1}k)$ with $h_0^{-1}k\in H$, so $H\subseteq h_0H$. Hence $h_0H=H$ and $(ag')H=(ag h_0)H=ag(h_0H)=agH$, proving that $a\cdot(gH)=(ag)H$ is independent of the representative. It satisfies the identity and composition laws in [F3] because $eg=g$ and $(ab)g=a(bg)$. Thus it is a left action on $G/H$. [given, F1, F2, F3, algebra]

1.2 If $g'=gh_0$ with $h_0\in H$, then $h_0H=H$: closure gives $h_0H\subseteq H$, and for $k\in H$, $k=h_0(h_0^{-1}k)\in h_0H$ by [F1]. Hence $\{g'h:h\in H\}=\{gh:h\in H\}$, so the componentwise maximum defining $Q_HF(gH)$ is independent of the representative. [given, F1, F2, algebra]

2.1 By [F1], $H$ contains the identity, so $H$ and the given set $U$ are nonempty and finite. Each displayed maximum therefore exists in $\mathbb R$; the pointwise operation and subgroup restriction are also functions on their stated domains. Thus all four operators in the Definition are well-defined. [given, F1, step 1.1, step 1.2, algebra] ∎
