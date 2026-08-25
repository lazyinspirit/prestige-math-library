---
id: lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups
kind: lemma
title: "A product formula for the number of square roots of the identity in a central product of extraspecial $2$-groups"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, prop-equivalent-characterisations-of-an-extraspecial-p-group, def-elementary-abelian-p-group, def-external-direct-product-of-groups, def-quotient-group, def-center-of-a-group, def-finite-cardinality, thm-lagrange, def-order-in-a-group]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Theorem 3.14(ii)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups, Remark 2.4"
      url: "https://arxiv.org/pdf/1510.06583"
pipeline_run: null
---

## Statement

Let $P_1$ and $P_2$ be extraspecial $2$-groups and let $P=P_1\circ_\alpha P_2$ be
the central product along an isomorphism $\alpha$ of their centres. Write
$t(G)=\lvert\{g\in G:g^2=1\}\rvert$. Then

$$t(P)=\frac{t(P_1)\,t(P_2)+\bigl(\lvert P_1\rvert-t(P_1)\bigr)\bigl(\lvert P_2\rvert-t(P_2)\bigr)}{2}.$$

## Facts & Assumptions

**Given:** Extraspecial $2$-groups $P_1,P_2$ with $Z(P_i)=\langle z_i\rangle$ of order two, an isomorphism $\alpha:Z(P_1)\to Z(P_2)$, and $P=P_1\circ_\alpha P_2$ with quotient map $\pi:P_1\times P_2\to P$.

[F1] For groups $G,H$ with central subgroups $Z_1\le Z(G)$, $Z_2\le Z(H)$ and an isomorphism $\alpha:Z_1\to Z_2$, the central product $G\circ_\alpha H$ is the quotient of $G\times H$ by $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ ([[def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups]]).

[F2] The external direct product $G\times H$ carries the componentwise operation ([[def-external-direct-product-of-groups]]).

[F3] The quotient group $G/N$ has the left cosets $gN$ as elements, with product $(gN)(hN):=ghN$ ([[def-quotient-group]]).

[F4] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[L1] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L2] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$ ([[def-elementary-abelian-p-group]]).

[L3] The subgroup $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ of $G\times H$ is central, hence normal ([[lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup]]).

[L4] The canonical maps into a central product are injective homomorphisms whose images commute elementwise, generate the product, and meet in the image of the identified subgroup ([[prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images]]).

[L5] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[L6] $\lvert A\rvert$ is the unique natural number $n$ with $A\approx n$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 Since $P_i/Z(P_i)$ is elementary abelian, $g^2\in Z(P_i)=\{1,z_i\}$ for every $g\in P_i$; so $P_i$ splits into the $t(P_i)$ elements with $g^2=1$ and the $\lvert P_i\rvert-t(P_i)$ elements with $g^2=z_i$. [F4, L1, L2]

1.2 The quotient map $\pi$ is surjective with kernel $N=\{(z,\alpha(z)^{-1}):z\in Z(P_1)\}$, which has two elements, so every element of $P$ has exactly two preimages in $P_1\times P_2$. [F1, F3, L3, L5, L6]

1.3 Because the two canonical images commute, $\pi(g,h)^2=\pi(g^2,h^2)$ for all $g\in P_1$ and $h\in P_2$. [F2, F3, L4]

2.1 Hence $\pi(g,h)^2=1$ exactly when $(g^2,h^2)\in N$, that is exactly when $g^2=1$ and $h^2=1$, or $g^2=z_1$ and $h^2=\alpha(z_1)^{-1}=z_2$. [F1, F4, step 1.1, step 1.3]

3.1 The number of pairs $(g,h)$ with $\pi(g,h)^2=1$ is therefore $t(P_1)t(P_2)+(\lvert P_1\rvert-t(P_1))(\lvert P_2\rvert-t(P_2))$. [L6, step 1.1, step 2.1]

4.1 Each element of $P$ with square the identity is counted exactly twice in that total, so $t(P)$ is half of it, which is the displayed formula. [L6, step 1.2, step 3.1] ∎

## Remarks

The second summand is what makes the formula more than a product: an element of $P$ can square to the identity because both of its coordinates square to the identity, or because both square to the identified central element and those two squares cancel in the quotient.

Writing $\lvert P_i\rvert=2^{1+2n_i}$ and $t(P_i)=2^{2n_i}+\varepsilon_i2^{n_i}$ with $\varepsilon_i=\pm1$, the formula collapses to $t(P)=2^{2n}+\varepsilon_1\varepsilon_22^{n}$ with $n=n_1+n_2$: the signs multiply.
