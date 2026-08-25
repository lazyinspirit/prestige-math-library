---
id: lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup
kind: lemma
title: "The identified subgroup used to form a central product is central, hence normal"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, def-center-of-a-group, def-normal-subgroup, def-subgroup, def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, lem-group-homomorphism-basic-properties, def-group-isomorphism-and-automorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Definition 2.34"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. A. Craven, The Theory of p-Groups, Theorem 3.6"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

Let $G$ and $H$ be groups with central subgroups $Z_1\le Z(G)$ and $Z_2\le Z(H)$
and an isomorphism $\alpha:Z_1\to Z_2$. The subgroup
$N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ of $G\times H$ is central, hence normal, so
the quotient $(G\times H)/N$ of
[[def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups]]
is defined.

## Facts & Assumptions

**Given:** Groups $G,H$, central subgroups $Z_1\le Z(G)$ and $Z_2\le Z(H)$, and an isomorphism $\alpha:Z_1\to Z_2$.

[F1] For groups $G,H$ with central subgroups $Z_1\le Z(G)$, $Z_2\le Z(H)$ and an isomorphism $\alpha:Z_1\to Z_2$, the central product $G\circ_\alpha H$ is the quotient of $G\times H$ by $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ ([[def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups]]).

[F2] A subset $H\subseteq G$ is a subgroup when $e\in H$, $H$ is closed under the operation, and $H$ is closed under inverses ([[def-subgroup]]).

[F3] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F4] A subgroup $N\le G$ is normal in $G$ when $gNg^{-1}=N$ for every $g\in G$, where $gNg^{-1}:=\{gng^{-1}:n\in N\}$ ([[def-normal-subgroup]]).

[L1] A group homomorphism $f$ satisfies $f(e)=e'$ and $f(g^{-1})=f(g)^{-1}$ ([[lem-group-homomorphism-basic-properties]]).

[L2] The external direct product $G\times H:=\{(g,h):g\in G,\ h\in H\}$ carries the componentwise operation $(g,h)(g',h')=(gg',hh')$ ([[def-external-direct-product-of-groups]]).

[L3] The componentwise operation makes $G\times H$ a group with identity $(e_G,e_H)$ and $(g,h)^{-1}=(g^{-1},h^{-1})$ ([[thm-external-direct-product-is-a-group]]).

## Proof

**Proof technique:** direct.

1.1 The isomorphism $\alpha$ is in particular a homomorphism, so $\alpha(e)=e$ and $\alpha(z^{-1})=\alpha(z)^{-1}$; moreover $Z_2\le Z(H)$, so any two elements of $Z_2$ commute and $\alpha(z_1z_2)^{-1}=\alpha(z_1)^{-1}\alpha(z_2)^{-1}$. [F3, L1, algebra]

2.1 Hence $(e,e)=(e,\alpha(e)^{-1})$ lies in $N$; the product $(z_1,\alpha(z_1)^{-1})(z_2,\alpha(z_2)^{-1})=(z_1z_2,\alpha(z_1)^{-1}\alpha(z_2)^{-1})=(z_1z_2,\alpha(z_1z_2)^{-1})$ lies in $N$; and $(z,\alpha(z)^{-1})^{-1}=(z^{-1},\alpha(z))=(z^{-1},\alpha(z^{-1})^{-1})$ lies in $N$. So $N$ is a subgroup of $G\times H$. [F1, F2, L2, L3, step 1.1]

3.1 Every element of $N$ has first coordinate in $Z_1\le Z(G)$ and second coordinate in $Z_2\le Z(H)$, and the operation is componentwise, so $(z,\alpha(z)^{-1})(g,h)=(zg,\alpha(z)^{-1}h)=(gz,h\alpha(z)^{-1})=(g,h)(z,\alpha(z)^{-1})$ for every $(g,h)$; thus $N\le Z(G\times H)$. [F1, F3, L2, step 2.1]

4.1 For $n\in N$ and $x\in G\times H$ centrality gives $xnx^{-1}=nxx^{-1}=n$, so $xNx^{-1}=N$ and $N$ is normal; the quotient $(G\times H)/N$ is therefore defined. [F4, step 3.1] ∎

## Remarks

Centrality is used twice. It makes the inverse-coordinate rule
$z\mapsto(z,\alpha(z)^{-1})$ multiplicative, so that $N$ is a subgroup, and it
then makes that subgroup central and hence normal. For merely isomorphic
subgroups the displayed antidiagonal need be neither a subgroup nor a normal
subset, so the quotient construction does not apply.
