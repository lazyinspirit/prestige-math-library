---
id: thm-recognition-of-an-internal-central-product
kind: theorem
title: "Internal central products are the images of external ones"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, def-internal-central-product-of-a-family-of-subgroups, thm-first-isomorphism-theorem-groups, def-external-direct-product-of-groups, def-generated-subgroup, def-kernel-and-image-of-group-homomorphism, def-center-of-a-group, def-subgroup-commutator-and-lower-central-series]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Proposition 3.5"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Definition 2.34"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a group and $G_1,\dots,G_r\le G$. Subgroups $G_1,\dots,G_r$ form an
internal central product of $G$ if and only if the multiplication map
$G_1\times\dots\times G_r\to G$, $(g_1,\dots,g_r)\mapsto g_1\cdots g_r$, is a
surjective homomorphism; each factor then meets its kernel trivially.

For two factors this identifies the internal notion with the external one: if
$G_1,G_2$ form an internal central product of $G$ and $D=G_1\cap G_2$, then
$D\le Z(G_1)$ and $D\le Z(G_2)$, and

$$G\;\cong\;G_1\circ_{\operatorname{id}_D}G_2 ,$$

the external central product of
[[def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups]]
taken along the identity isomorphism of $D$.

## Facts & Assumptions

**Given:** A group $G$ and subgroups $G_1,\dots,G_r\le G$; in the second half, $r=2$ and $D=G_1\cap G_2$.

[F1] Subgroups $G_1,\dots,G_r$ of $G$ form an internal central product when they generate $G$ and $[G_i,G_j]=1$ for $i\ne j$ ([[def-internal-central-product-of-a-family-of-subgroups]]).

[F2] The external direct product $G\times H:=\{(g,h):g\in G,\ h\in H\}$ carries the componentwise operation ([[def-external-direct-product-of-groups]]).

[F3] For groups $G,H$ with central subgroups $Z_1\le Z(G)$, $Z_2\le Z(H)$ and an isomorphism $\alpha:Z_1\to Z_2$, the central product $G\circ_\alpha H$ is the quotient of $G\times H$ by $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ ([[def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups]]).

[F4] For a group homomorphism $f:G\to H$, $\ker f:=\{g\in G:f(g)=e_H\}$ and $\operatorname{im}f:=\{f(g):g\in G\}$ ([[def-kernel-and-image-of-group-homomorphism]]).

[L1] For every homomorphism $f:G\to H$, the rule $g\ker f\mapsto f(g)$ is an isomorphism from $G/\ker f$ onto $\operatorname{im}f$ ([[thm-first-isomorphism-theorem-groups]]).

[L2] $\langle S\rangle$ is the smallest subgroup of $G$ containing $S$ ([[def-generated-subgroup]]).

[L3] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

## Proof

**Proof technique:** direct.

1.1 Suppose the subgroups generate $G$ and commute pairwise. Writing $\mu(g_1,\dots,g_r)=g_1\cdots g_r$, the commuting hypothesis lets the factors of $\mu(x)\mu(y)$ be sorted by index, so $\mu(xy)=\mu(x)\mu(y)$ and $\mu$ is a homomorphism; its image is a subgroup containing every $G_i$, hence equals $\langle G_1,\dots,G_r\rangle=G$, so $\mu$ is surjective. [F1, F2, F4, L2, algebra]

1.2 For the converse, suppose $\mu$ is a surjective homomorphism. Surjectivity gives $G=G_1\cdots G_r\subseteq\langle G_1,\dots,G_r\rangle$, so the subgroups generate. For $i\ne j$, $a\in G_i$ and $b\in G_j$, the tuples $x$ with $a$ in place $i$ and $y$ with $b$ in place $j$ commute in the direct product, so $ab=\mu(x)\mu(y)=\mu(xy)=\mu(yx)=\mu(y)\mu(x)=ba$; hence $[G_i,G_j]=1$. [F1, F2, L2, algebra]

1.3 In either case a tuple with a single nonidentity entry $g_i$ has $\mu$-value $g_i$, so it lies in $\ker\mu$ only if $g_i=e$: each factor meets the kernel trivially. [F4]

2.1 Now let $r=2$ and let $G_1,G_2$ form an internal central product with $D=G_1\cap G_2$. An element $d\in D$ lies in $G_2$, so it commutes with every element of $G_1$, giving $D\le Z(G_1)$; symmetrically $D\le Z(G_2)$. [F1, L3, step 1.1]

2.2 The kernel of $\mu:G_1\times G_2\to G$ is $\{(g_1,g_2):g_1g_2=e\}=\{(d,d^{-1}):d\in D\}$, since $g_1=g_2^{-1}$ lies in both subgroups. [F4, step 1.1]

3.1 That kernel is exactly the subgroup $N$ used to build $G_1\circ_{\operatorname{id}_D}G_2$, so the first isomorphism theorem gives $G\cong(G_1\times G_2)/N=G_1\circ_{\operatorname{id}_D}G_2$. [F3, L1, step 1.1, step 2.1, step 2.2] ∎

## Remarks

The commuting condition is imposed only for $i\ne j$. A single factor is not required to be abelian, which is what allows a nonabelian group to be an internal central product of one factor, namely itself.

The identity isomorphism of $D$ is forced here rather than chosen: the kernel of the multiplication map is $\{(d,d^{-1})\}$, and that is the identified subgroup of the external product along $\operatorname{id}_D$ and along no other map.
