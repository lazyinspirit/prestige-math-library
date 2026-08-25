---
id: prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images
kind: proposition
title: "The two canonical maps into a central product are injective homomorphisms whose images commute, generate it, and meet in the identified centre"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup, def-quotient-group, def-external-direct-product-of-groups, def-generated-subgroup, def-kernel-and-image-of-group-homomorphism, def-group-isomorphism-and-automorphism, def-center-of-a-group]
aliases: []
landmark: true
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
    - title: "D. A. Craven, The Theory of p-Groups, Proposition 3.5 and Theorem 3.6"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Definition 2.34"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $G$ and $H$ be groups with central subgroups $Z_1\le Z(G)$ and $Z_2\le Z(H)$
and an isomorphism $\alpha:Z_1\to Z_2$, and let $\pi:G\times H\to G\circ_\alpha H$
be the quotient map. The canonical maps $G\to G\circ_\alpha H$ and
$H\to G\circ_\alpha H$ are injective homomorphisms whose images commute
elementwise, generate $G\circ_\alpha H$, and meet in the image of $Z_1$. They are
$g\mapsto\bar g=\pi(g,e)$ and $h\mapsto\bar h=\pi(e,h)$, and the intersection of
their images is $\{\bar z:z\in Z_1\}=\{\overline{\alpha(z)}:z\in Z_1\}$.

## Facts & Assumptions

**Given:** Groups $G,H$, central subgroups $Z_1\le Z(G)$ and $Z_2\le Z(H)$, an isomorphism $\alpha:Z_1\to Z_2$, and the quotient map $\pi:G\times H\to G\circ_\alpha H$.

[F1] For groups $G,H$ with central subgroups $Z_1\le Z(G)$, $Z_2\le Z(H)$ and an isomorphism $\alpha:Z_1\to Z_2$, the central product $G\circ_\alpha H$ is the quotient of $G\times H$ by $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ ([[def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups]]).

[F2] The quotient group $G/N$ has the left cosets $gN$ as elements with product $(gN)(hN):=ghN$ ([[def-quotient-group]]).

[F3] For a group homomorphism $f:G\to H$, $\ker f:=\{g\in G:f(g)=e_H\}$ and $\operatorname{im}f:=\{f(g):g\in G\}$ ([[def-kernel-and-image-of-group-homomorphism]]).

[L1] The subgroup $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ of $G\times H$ is central, hence normal ([[lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup]]).

[L2] The external direct product $G\times H:=\{(g,h):g\in G,\ h\in H\}$ carries the componentwise operation $(g,h)(g',h')=(gg',hh')$ ([[def-external-direct-product-of-groups]]).

[L3] $\langle S\rangle$ is the smallest subgroup of $G$ containing $S$, namely $\bigcap\{K:K\le G\text{ and }S\subseteq K\}$ ([[def-generated-subgroup]]).

[L4] An isomorphism is a bijective group homomorphism ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 The coordinate maps $g\mapsto(g,e)$ and $h\mapsto(e,h)$ are homomorphisms into $G\times H$, because the operation there is componentwise, and $\pi$ is a homomorphism onto the quotient; so both canonical maps are homomorphisms. [F1, F2, L1, L2]

2.1 The kernel of $g\mapsto\bar g$ is $\{g\in G:(g,e)\in N\}$; an equality $(g,e)=(z,\alpha(z)^{-1})$ gives $g=z$ and $\alpha(z)=e$, so $z=e$ because $\alpha$ is injective, and the kernel is trivial. Likewise $(e,h)=(z,\alpha(z)^{-1})$ gives $z=e$ and then $h=\alpha(e)^{-1}=e$. Both canonical maps are therefore injective. [F1, F3, L4, step 1.1]

2.2 In $G\times H$ one has $(g,e)(e,h)=(g,h)=(e,h)(g,e)$, so $\bar g\bar h=\bar h\bar g$ for all $g\in G$ and $h\in H$: the two images commute elementwise. [L2, step 1.1]

2.3 Every element of $G\circ_\alpha H$ is $\pi(g,h)=\pi\big((g,e)(e,h)\big)=\bar g\bar h$, so the two images together generate $G\circ_\alpha H$. [F2, L2, L3, step 1.1]

3.1 If $\bar g=\bar h$ then $(g,e)(e,h)^{-1}=(g,h^{-1})$ lies in $N$, so $g=z\in Z_1$ and $h^{-1}=\alpha(z)^{-1}$, that is $h=\alpha(g)$; conversely $\bar z=\overline{\alpha(z)}$ for every $z\in Z_1$, since $(z,\alpha(z)^{-1})\in N$. Hence the two images meet exactly in $\{\bar z:z\in Z_1\}$. [F1, step 2.1, step 2.2] ∎

## Remarks

Injectivity is what makes the central product an honest amalgam: each factor embeds, and the only collapsing is the prescribed identification of $Z_1$ with $Z_2$. If $\alpha$ were merely a surjective homomorphism, $N$ would meet the first coordinate copy of $G$ in $\ker\alpha\times 1$ and that copy would not embed.
