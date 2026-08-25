---
id: thm-universal-property-of-the-central-product
kind: theorem
title: "Homomorphisms out of a central product"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, def-external-direct-product-of-groups, thm-coset-multiplication-well-defined-iff-normal, def-quotient-group, def-kernel-and-image-of-group-homomorphism, lem-group-homomorphism-basic-properties, def-center-of-a-group]
aliases: []
landmark: true
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
    - title: "M. van Beek, Topics in Finite p-Groups, §2.4"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. A. Craven, The Theory of p-Groups, §3.1"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

Let $G$ and $H$ be groups with central subgroups $Z_1\le Z(G)$ and $Z_2\le Z(H)$
and an isomorphism $\alpha:Z_1\to Z_2$, and let $K$ be a group. If
$\varphi:G\to K$ and $\psi:H\to K$ are homomorphisms with commuting images and
$\varphi|_{Z_1}=\psi\circ\alpha$, then there is a unique homomorphism
$G\circ_\alpha H\to K$ restricting to $\varphi$ and $\psi$ along the canonical
maps. Explicitly it sends $\bar g\bar h$ to $\varphi(g)\psi(h)$.

## Facts & Assumptions

**Given:** Groups $G,H,K$, central subgroups $Z_1\le Z(G)$ and $Z_2\le Z(H)$, an isomorphism $\alpha:Z_1\to Z_2$, and homomorphisms $\varphi:G\to K$, $\psi:H\to K$ with $\varphi(g)\psi(h)=\psi(h)\varphi(g)$ for all $g,h$ and $\varphi(z)=\psi(\alpha(z))$ for all $z\in Z_1$.

[F1] The external direct product $G\times H:=\{(g,h):g\in G,\ h\in H\}$ carries the componentwise operation $(g,h)(g',h')=(gg',hh')$ ([[def-external-direct-product-of-groups]]).

[F2] For groups $G,H$ with central subgroups $Z_1\le Z(G)$, $Z_2\le Z(H)$ and an isomorphism $\alpha:Z_1\to Z_2$, the central product $G\circ_\alpha H$ is the quotient of $G\times H$ by $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ ([[def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups]]).

[F3] For a group homomorphism $f:G\to H$, $\ker f:=\{g\in G:f(g)=e_H\}$ ([[def-kernel-and-image-of-group-homomorphism]]).

[F4] The quotient group $G/N$ has the left cosets $gN$ as elements, with product $(gN)(hN):=ghN$ ([[def-quotient-group]]).

[L1] A group homomorphism $f$ satisfies $f(e)=e'$ and $f(g^{-1})=f(g)^{-1}$ ([[lem-group-homomorphism-basic-properties]]).

[L2] For $H\le G$ the rule $(aH)(bH):=abH$ on left cosets is independent of the representatives $a$ and $b$ if and only if $H\mathrel{\trianglelefteq}G$ ([[thm-coset-multiplication-well-defined-iff-normal]]).

[L3] The subgroup $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ of $G\times H$ is central, hence normal ([[lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup]]).

[L4] The canonical maps $G\to G\circ_\alpha H$ and $H\to G\circ_\alpha H$ are injective homomorphisms whose images commute elementwise, generate $G\circ_\alpha H$, and meet in the image of $Z_1$ ([[prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images]]).

## Proof

**Proof technique:** direct.

1.1 The assignment $\theta(g,h):=\varphi(g)\psi(h)$ satisfies $\theta\big((g,h)(g',h')\big)=\varphi(g)\varphi(g')\psi(h)\psi(h')=\varphi(g)\psi(h)\varphi(g')\psi(h')=\theta(g,h)\theta(g',h')$, the middle equality being the commuting-images hypothesis; so $\theta:G\times H\to K$ is a homomorphism. [F1, given, algebra]

1.2 For $z\in Z_1$, $\theta(z,\alpha(z)^{-1})=\varphi(z)\psi(\alpha(z)^{-1})=\varphi(z)\psi(\alpha(z))^{-1}=\varphi(z)\varphi(z)^{-1}=e$, so $N\le\ker\theta$. [F2, F3, L1, given]

2.1 If $xN=yN$ in $G\times H$ then $x^{-1}y\in N$, so $\theta(x)^{-1}\theta(y)=\theta(x^{-1}y)=e$ and $\theta(x)=\theta(y)$; hence $\bar\theta(xN):=\theta(x)$ is a well-defined function on $G\circ_\alpha H$, and it is a homomorphism because $N$ is normal and $(xN)(yN)=xyN$. [F4, L2, L3, step 1.1, step 1.2]

3.1 On the canonical images, $\bar\theta(\bar g)=\theta(g,e)=\varphi(g)$ and $\bar\theta(\bar h)=\theta(e,h)=\psi(h)$; and any homomorphism agreeing with $\varphi$ and $\psi$ on the two images agrees with $\bar\theta$ on a generating set of $G\circ_\alpha H$, hence everywhere. [L1, L4, step 2.1] ∎

## Remarks

Both hypotheses are needed and neither is implied by the other. Without commuting images the assignment of step 1.1 is not a homomorphism on the direct product; without the agreement on $Z_1$ the subgroup $N$ need not lie in the kernel, so nothing descends to the quotient.
