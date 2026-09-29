---
id: thm-cohomological-dimension-projective-n-space
kind: theorem
title: "Projective n-space has quasi-coherent cohomological dimension at most n"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-relative-projective-space-standard-charts
  - def-principal-distinguished-subset-of-spectrum
  - def-affine-scheme-spectrum
  - lem-spectrum-localization-open-immersion
  - thm-sections-basic-open-affine-scheme
  - thm-fibre-products-of-schemes-exist
  - def-locally-finite-type-and-finite-type-morphism
  - lem-projective-space-finite-type-over-base
  - lem-base-change-quasi-compact-morphisms
  - cor-affine-scheme-quasi-compact
  - def-quasi-compact-and-quasi-separated-scheme
  - thm-separatedness-gluing-overlap-criterion
  - def-separated-morphism-schemes
  - def-scheme-over-base
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - def-cech-cochain-complex-open-cover
  - def-cech-cohomology-open-cover
  - def-quasi-coherent-module-scheme
  - def-sheaf-cohomology-derived-global-sections
  - def-module-on-ringed-space
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a commutative
ring and let $n\ge0$ be an integer, and let $\mathbb P^n_A$ be the projective
space over $A$ with its standard charts
([[def-relative-projective-space-standard-charts]]). Then every
quasi-coherent $\mathcal O_{\mathbb P^n_A}$-module $\mathcal F$
([[def-quasi-coherent-module-scheme]]) satisfies
$$H^q(\mathbb P^n_A,\mathcal F)=0$$
for every integer $q>n$, where $H^q$ is sheaf cohomology
([[def-sheaf-cohomology-derived-global-sections]]) applied to the underlying
sheaf of abelian groups of $\mathcal F$ ([[def-module-on-ringed-space]]). The
case $n=0$ is included; the zero ring $A=0$ is allowed, and then
$\mathbb P^n_A=\varnothing$.

## Facts & Assumptions
**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), a commutative ring $A$, an integer $n\ge0$, and a quasi-coherent $\mathcal O_{\mathbb P^n_A}$-module $\mathcal F$.

[F1] Chart model of projective space: $\mathbb P^n_A=\operatorname{Spec}A
\times_{\operatorname{Spec}\mathbb Z}\mathbb P^n_{\mathbb Z}$
([[def-relative-projective-space-standard-charts]],
[[thm-fibre-products-of-schemes-exist]]). Its standard charts are
$U_i=\operatorname{Spec}B_i$ with $B_i=A[x^{(i)}_\ell:\ell\ne i]$, they form
an open cover of $\mathbb P^n_A$, each $U_i$ is affine, and for $i\ne j$ the
transition isomorphism of the gluing identifies $U_i\cap U_j$ with the
distinguished open subset $D(x^{(i)}_j)\subseteq U_i$ with ring
$(B_i)_{x^{(i)}_j}$, the two transition formulas being reciprocal; on
$U_i\cap U_j$ the inverse identification $B_j\to(B_i)_{x^{(i)}_j}$ is given by
$x^{(j)}_m\mapsto x^{(i)}_m/x^{(i)}_j$ for $m\ne i,j$ and
$x^{(j)}_i\mapsto 1/x^{(i)}_j$. The charts and their overlaps commute with
base change, and when $A=0$ all $B_i$ are the zero ring, so all charts are
empty.

[F2] Distinguished opens: for $f\in R$ the set
$D(f)=\{\mathfrak p\in\operatorname{Spec}R:f\notin\mathfrak p\}$
([[def-principal-distinguished-subset-of-spectrum]]) satisfies
$D(f)\cap D(g)=D(fg)$, the morphism induced by $R\to R_f$ identifies
$\operatorname{Spec}(R_f)$ with the open subscheme $D(f)$ of
$\operatorname{Spec}R$ ([[lem-spectrum-localization-open-immersion]],
[[def-affine-scheme-spectrum]]), and
$\Gamma(D(f),\mathcal O)=R_f$ with restrictions the canonical localisation
maps ([[thm-sections-basic-open-affine-scheme]]).

[F3] Quasi-compactness: the structure morphism
$\pi:\mathbb P^n_A\to\operatorname{Spec}A$ is of finite type
([[lem-projective-space-finite-type-over-base]]), and a finite-type morphism
is by definition quasi-compact
([[def-locally-finite-type-and-finite-type-morphism]]). For a quasi-compact
morphism the inverse image of every affine open of the target is
quasi-compact ([[lem-base-change-quasi-compact-morphisms]]), and every affine
scheme is quasi-compact ([[cor-affine-scheme-quasi-compact]],
[[def-quasi-compact-and-quasi-separated-scheme]]).

[F4] Separatedness gluing criterion: for a morphism $f:X\to S$, an affine open
cover $S=\bigcup_iW_i=\bigcup_i\operatorname{Spec}A_i$ and affine open covers
$f^{-1}(W_i)=\bigcup_jU_{ij}=\bigcup_j\operatorname{Spec}B_{ij}$, the morphism
$f$ is separated if and only if for all $i,j,k$ the intersection
$U_{ij}\cap U_{ik}$ is affine and the natural ring map
$B_{ij}\otimes_{A_i}B_{ik}\to\Gamma(U_{ij}\cap U_{ik},\mathcal O_X)$ is
surjective; empty intersections use the zero ring. Separatedness of
$X\to\operatorname{Spec}\mathbb Z$ means that the scheme $X$ is separated
([[thm-separatedness-gluing-overlap-criterion]],
[[def-separated-morphism-schemes]], [[def-scheme-over-base]]).

[F5] Čech comparison for separated schemes: under the Axiom of Choice,
for a quasi-compact separated scheme $X$, a finite affine open cover
$U_0,\dots,U_r$ of $X$ and a quasi-coherent $\mathcal O_X$-module $\mathcal F$,
every intersection of one or more members of the cover is affine and the canonical
comparison map $\check H^q(\mathcal U,\mathcal F)\to H^q(X,\mathcal F)$ is an
isomorphism for every $q\ge0$
([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]).

[F6] Ordered Čech complex of a finite cover: for a cover
$\mathcal U=(U_i)_{i\in I}$ indexed by a linearly ordered set,
$C^q(\mathcal U,\mathcal F)=\prod_{i_0<\cdots<i_q}
\mathcal F(U_{i_0}\cap\cdots\cap U_{i_q})$, and when $I$ has no increasing
$(q+1)$-tuple this product is empty and $C^q(\mathcal U,\mathcal F)=0$; the
ordered Čech cohomology $\check H^q(\mathcal U,\mathcal F)$ is the cohomology
of this complex ([[def-cech-cochain-complex-open-cover]],
[[def-cech-cohomology-open-cover]]).



## Proof

**Proof technique:** direct: the $n+1$ standard affine charts of $\mathbb P^n_A$ cover the scheme, all their finite intersections are distinguished opens in a chart, the gluing criterion proves separatedness over $\operatorname{Spec}\mathbb Z$, and the comparison theorem identifies sheaf cohomology with the Čech cohomology of that finite cover, whose complex is concentrated in degrees $0,\dots,n$.

1.1 Set $X=\mathbb P^n_A$ and let $\mathcal U=(U_0,\dots,U_n)$ be the ordered family of standard charts, with $U_i=\operatorname{Spec}B_i$ and $B_i=A[x^{(i)}_\ell:\ell\ne i]$. By [F1] each $U_i$ is an open affine subscheme and the $U_i$ cover $X$; in particular $X$ is a scheme over $\operatorname{Spec}\mathbb Z$. [F1]

1.2 Every finite intersection of distinct members $U_{i_0},\dots,U_{i_m}$ of $\mathcal U$ is affine: inside the affine chart $U_{i_0}$ it is $\bigcap_{\ell=1}^mD(x^{(i_0)}_{i_\ell})=D(x^{(i_0)}_{i_1}\cdots x^{(i_0)}_{i_m})$ by [F1] and [F2], and $D(f)$ is affine with ring $(B_{i_0})_f$ by [F2]. For $m=0$ this is the affine chart $U_{i_0}$ itself. [F1, F2]

1.3 $X$ is quasi-compact: $\pi:X\to\operatorname{Spec}A$ is of finite type, hence quasi-compact, so $X=\pi^{-1}(\operatorname{Spec}A)$ is quasi-compact by [F3]. [F3]

1.4 $X$ is separated as a scheme. Apply the criterion [F4] to the structure morphism $X\to\operatorname{Spec}\mathbb Z$, the single affine open $W=\operatorname{Spec}\mathbb Z$ of the base and the affine cover $\{U_i\}$ of $X$: for $j=k$ the ring $U_j$ is affine and $B_j\otimes_{\mathbb Z}B_j\to\Gamma(U_j,\mathcal O_X)=B_j$ is the multiplication map, which is surjective; for $j\ne k$ the intersection $U_j\cap U_k$ is affine by 1.2, $\Gamma(U_j\cap U_k,\mathcal O_X)=(B_j)_{x^{(j)}_k}$ by [F1] and [F2], and the natural map $B_j\otimes_{\mathbb Z}B_k\to(B_j)_{x^{(j)}_k}$ sends $b\otimes1\mapsto b$ and, by the reciprocal transition formula of [F1], $1\otimes x^{(k)}_m\mapsto x^{(j)}_m/x^{(j)}_k$ for $m\ne j,k$ and $1\otimes x^{(k)}_j\mapsto 1/x^{(j)}_k$; its image therefore contains $B_j$ and the inverse $1/x^{(j)}_k$, hence is the whole localisation $(B_j)_{x^{(j)}_k}=B_j[1/x^{(j)}_k]$. The criterion gives that $X\to\operatorname{Spec}\mathbb Z$ is separated. [F1, F2, F4]

1.5 By [F5], applied to the quasi-compact separated scheme $X$, the finite affine open cover $U_0,\dots,U_n$ and the quasi-coherent module $\mathcal F$, the canonical comparison map $\check H^q(\mathcal U,\mathcal F)\to H^q(X,\mathcal F)$ is an isomorphism for every $q\ge0$. [F5, 1.2, 1.3, 1.4]

1.6 For $q>n$ the index set $\{0,\dots,n\}$ of the ordered cover $\mathcal U$ has no increasing $(q+1)$-tuple, so $C^q(\mathcal U,\mathcal F)=0$ by [F6] and hence $\check H^q(\mathcal U,\mathcal F)=0$. By the isomorphism of 1.5, $H^q(X,\mathcal F)=0$ for every $q>n$. [F6, 1.5]

2.1 Boundary and choice accounting. For $n=0$ the cover is the single chart $U_0=\operatorname{Spec}A$, only $C^0$ is nonzero, and the conclusion $H^q=0$ for $q>0$ follows from 1.6 (it also follows from the affinity of $X=\operatorname{Spec}A$). For $A=0$ the ring $B_i$ is the zero ring, $U_i=\operatorname{Spec}0=\varnothing$, so $X=\varnothing$ by [F1] and $\{U_0,\dots,U_n\}$ is still an affine open cover of $X$; the same argument applies verbatim, and $C^q=0$ for all $q$ by [F6] since $\mathcal F$ vanishes on the empty scheme. The case $\mathcal F=0$ is trivially included. Nothing is asserted for $q\le n$. The Axiom of Choice is a hypothesis, consumed exactly through the Čech comparison theorem [F5] (and the sheaf-cohomology framework it refers to); the remaining steps 1.1-1.4 and 1.6 make no choice, the indexes $0,\dots,n$ being finite and the gluing data being fixed by the definition. [F1, F5, F6, 1.3, 1.6] ∎
