---
id: lem-operational-chern-classes-and-whitney-formula
kind: lemma
title: "Operational Chern classes and the Whitney formula"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-bivariant-chow-operations
  - def-intersection-with-a-cartier-divisor-and-first-chern-class
  - def-locally-free-sheaf-finite-rank
  - def-projective-bundle-scheme
  - lem-flat-pullback-chow-groups
  - lem-proper-pushforward-of-cycles-well-defined
  - thm-projective-bundle-formula-for-chow-groups
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.37-42.44 (Chern classes, polynomial relations, additivity, splitting principle tag 02UK, Chern classes and sections tag 0FA8)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.37-42.44: operational Chern classes, the Whitney formula and the splitting principle"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Classes 16-17"
      url: "https://math.stanford.edu/~vakil/245/245class16.pdf"
      locator: "Class 16, Sections 2-3: Chern classes and the Whitney formula (partial comparison)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
proper/quasi-finite and scheme base-change suppliers. Fix a field $k$ and
work with schemes locally of finite type over $k$ and $k$-morphisms. Every rank-$r$ vector
bundle $E$ on such a scheme $T$ has operators
$c_j(E):A_m(T')\to A_{m-j}(T')$ for every $T'\to T$, defined by the projective
bundle relation and commuting with the bivariant operations. They satisfy
$c_0=1$, $c_j=0$ for $j>r$, $c(L)=1+c_1(L)$, arbitrary base restriction,
$c(E)=c(E')c(E'')$ for $0\to E'\to E\to E''\to0$, and a splitting principle by
iterated projective bundles whose flat pullback is injective after every base
change. If a section of $E$ on a pure $n$ dimensional scheme $T$ has zero scheme
regularly embedded of codimension $r$, then $c_r(E)\cap[T]=[Z(s)]$ in
$A_{n-r}(T)$. These are operators on singular schemes; a Chow ring is not
required.

## Facts & Assumptions

**Given:** the Axiom of Choice; a field $k$; a scheme $T$ locally of finite type over $k$; a rank-$r$ vector bundle $E$ on $T$; for every base change $T'\to T$ the projective bundle $\pi:\mathbb P(E_{T'})\to T'$ with tautological quotient $\mathcal O(1)$ and $\xi=c_1(\mathcal O(1))$.

[L1] Projective bundle formula: for every $d$ the map $\bigoplus_{i=0}^{r-1}A_{d+i}(T')\to A_{d+r-1}(\mathbb P(E_{T'}))$, $(\alpha_i)\mapsto\sum_i\xi^i\cap\pi^*\alpha_i$, is an isomorphism, and $\pi_*(\xi^{r-1}\cap\pi^*\alpha)=\alpha$ while $\pi_*(\xi^s\cap\pi^*\alpha)=0$ for $s<r-1$ ([[thm-projective-bundle-formula-for-chow-groups]]).

[L2] Bivariant operations and their compatibilities; the first Chern class cap operation $\xi\cap-$ commutes with proper pushforward and flat pullback, and two Cartier operations commute ([[def-bivariant-chow-operations]], [[def-intersection-with-a-cartier-divisor-and-first-chern-class]]).

[L3] Proper pushforward and flat pullback of the relevant degrees, and the fact that a line bundle $L$ has $\mathbb P(L)\cong T'$ with $\xi=c_1(L)$ ([[lem-proper-pushforward-of-cycles-well-defined]], [[lem-flat-pullback-chow-groups]], [[def-projective-bundle-scheme]], [[def-locally-free-sheaf-finite-rank]]).

## Proof

**Proof technique:** direct; define the classes by the projective bundle relation, verify the axioms by uniqueness, then run the Whitney and section arguments by induction on the rank.

1.1 Definition by the projective bundle relation. For rank zero set $c_0=1$ and all positive Chern operators to zero; the Whitney and section assertions in this case are identities, and no projective bundle of rank zero is used. Assume now $r\ge1$. For every base change $T'\to T$ and every class $\alpha\in A_m(T')$, expand $\xi^r\cap\pi^*\alpha=\sum_{j=0}^{r-1}\xi^j\cap\pi^*\beta_j$ with $\beta_j\in A_{m-r+j}(T')$, which exists and is unique by [L1], and define $c_i(E)\cap\alpha:=(-1)^{i+1}\beta_{r-i}$ for $1\le i\le r$; explicitly the defining relation is $\sum_{j=0}^r(-1)^j\xi^{r-j}\cap\pi^*(c_j(E)\cap\alpha)=0$, with $c_0=1$ and $c_j=0$ for $j>r$ by convention. All terms have the same dimension, so the relation determines the $c_j(E)\cap\alpha$ uniquely by the basis part of [L1]. For a line bundle $L$, $\mathbb P(L)=T'$ and the relation reads $\xi\cap\alpha-c_1(L)\cap\alpha=0$, giving $c(L)=1+c_1(L)$ by [L3]. [L1, L3, given, algebra]

2.1 Compatibility with bivariant operations. Let $b$ be any bivariant operation commuting with $\pi^*$ and $\xi$ (in the sense $b\xi=\xi b$). Applying $b$ to the defining relation of step 1.1 and using the commutation with $\pi^*$ and $\xi$ gives the same relation with $b(c_j(E)\cap\alpha)$ in place of $c_j(E)\cap\alpha$; by the uniqueness in step 1.1, $bc_j(E)=c_j(E)b$. Taking for $b$ a proper pushforward, a flat pullback or a Cartier operation gives the compatibility axioms of the operational classes by [L2]. Restriction along an arbitrary base morphism merely restricts the indexing family of operations: the defining projective-bundle relation is the same relation on each further base scheme. No flatness of that base morphism is needed. [L2, step 1.1, algebra]

2.2 The Whitney formula and splitting principle. Iterating projective bundles of successive kernels of tautological line quotients gives a flag tower on which any vector bundle has a filtration with line-bundle quotients. Every projection has injective flat pullback by [L1], with left inverse given by its top relative hyperplane cap followed by pushforward; the same holds after every base change. First let $E$ already have a filtration with line quotients $L_1,\ldots,L_r$ in subbundle order. In the quotient convention the inclusion $L_1\hookrightarrow E$ induces a section of $\mathcal O(1)\otimes\pi^*L_1^{-1}$ on $\mathbb P(E)$ whose zero divisor is $\mathbb P(E/L_1)$; in a local splitting it is a coordinate hyperplane, so it is Cartier even over a singular base. Repeat on this divisor with the next line subbundle of the quotient, ending with the empty projective bundle. Cartier cutting and commutation of first Chern operations therefore give $\prod_{i=1}^r(\xi-\pi^*c_1(L_i))\cap\pi^*\alpha=0$ for every $\alpha$, where each notation $\pi^*c_1(L_i)$ means the cap of the pulled-back line bundle. Expanding and using uniqueness in step 1.1 shows $c(E)=\prod_i(1+c_1(L_i))$ as operations. For $0\to E'\to E\to E''\to0$, pull back to the combined flag towers of $E'$ and $E''$. Their line filtrations concatenate to a filtration of the pulled-back $E$, by taking inverse images of the filtration of $E''$. The product formula just proved then gives $c(E)=c(E')c(E'')$ upstairs; injectivity of the tower pullback, after every further base change, descends this operator identity. These same towers prove the stated splitting principle. [L1, step 1.1, algebra]

3.1 The section formula. Assume $s$ a section of $E$ with $Z(s)\subseteq T$ regularly embedded of codimension $r$, $T$ pure of dimension $n$. Induct on $r$, the case $r=1$ being the Cartier divisor formula $c_1(E)\cap[T]=[Z(s)]$ of [L2] with $E$ a line bundle. For $r>1$, let $t$ be the image of $s$ under $\pi^*E\to\mathcal O(1)$ on $\mathbb P(E)$ and $H=\ker(\pi^*E\to\mathcal O(1))$; the zero scheme of the section $t$ of $\mathcal O(1)$ is a divisor, and on it the section lifts to $H$ with zero scheme $\pi^{-1}Z(s)$. At every point of $\pi^{-1}Z(s)$ the local regular sequence of $r$ equations for $Z(s)$ is transformed by an invertible change of generators to the equation $t$ together with $r-1$ equations on the fibre direction, so it remains regular; hence $\pi^{-1}Z(s)$ is regularly embedded of codimension $r-1$ in $Z(t)$, and $\pi^{-1}Z(s)$ is the zero scheme of the restricted section of $H$ on the Cartier divisor $Z(t)$. The induction hypothesis applied on $Z(t)$ gives $c_{r-1}(H)\cap[Z(t)]=[\pi^{-1}Z(s)]$, while the Cartier formula for $Z(t)$ and the Whitney formula of step 2.2 give $c_r(\pi^*E)\cap[\mathbb P(E)]=c_{r-1}(H)\cap c_1(\mathcal O(1))\cap[\mathbb P(E)]=c_{r-1}(H)\cap[Z(t)]$; combining identifies the flat pullbacks of the two required classes; injectivity of $\pi^*$ from [L1] then yields $c_r(E)\cap[T]=[Z(s)]$. [L1, L2, step 1.1, step 2.2, algebra] ∎ 