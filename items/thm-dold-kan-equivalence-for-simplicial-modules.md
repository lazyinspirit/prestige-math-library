---
id: thm-dold-kan-equivalence-for-simplicial-modules
kind: theorem
title: "Dold-Kan equivalence for simplicial modules with explicit inverse"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
proof_strategy: constructive
justified_by: []
aliases: []
deps:
  - def-simplicial-object-and-simplicial-commutative-ring
  - lem-simplicial-normalization-prism-and-trivial-fibration-criterion
  - def-chain-complex-in-an-abelian-category
  - def-functor-and-contravariant-functor
  - def-commutative-ring
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Chapter 14 (Simplicial Methods)"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Sections 14.5-14.8 (tags 017U-017X), PDF 20-22, and Sections 14.24.1-14.24.3 (tags 019E-019G), PDF 40-43; explicit normalization and inverse functor"
---

## Statement

For a commutative unital ring $R$ ([[def-commutative-ring]]), normalization of
simplicial $R$-modules,
$$N(M)_n=\bigcap_{i<n}\ker d_i\quad\text{with differential }(-1)^nd_n,$$
is an exact equivalence from simplicial $R$-modules
([[def-simplicial-object-and-simplicial-commutative-ring]]) to nonnegative
chain complexes of $R$-modules ([[def-chain-complex-in-an-abelian-category]],
[[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]]).
Every simplicial $R$-module has the natural direct-sum decomposition
$$M_n=\bigoplus_{\alpha\colon[n]\twoheadrightarrow[r]}N(M)_r$$
through its degeneracy maps. The inverse functor has
$\Gamma(C)_n=\bigoplus_{\alpha\colon[n]\twoheadrightarrow[r]}C_r$; for a
simplex operator $\varphi\colon[m]\to[n]$, the $\alpha$-summand is sent by the
identity when $\alpha\varphi$ surjects onto $[r]$, by $(-1)^rd_C$ when its
image is $[r-1]$, and by zero otherwise, with the resulting image-index map
corestricted to its image. There are natural isomorphisms
$N\Gamma\cong\mathrm{id}$ and $\Gamma N\cong\mathrm{id}$. No AC is needed.
Here $R$ is constant; the theorem does not identify modules over a variable
simplicial coefficient ring with ordinary complexes over a single fixed ring.

## Facts & Assumptions

**Given:** A commutative unital ring $R$, a simplicial $R$-module $M$ with faces $d_i$ and degeneracies $s_i$, and a nonnegative chain complex $C$ of $R$-modules.

[F1] Simplicial objects satisfy the simplicial identities; in particular $d_id_j=d_{j-1}d_i$ for $i<j$, $s_is_j=s_{j+1}s_i$ for $i\le j$, $d_is_j=s_{j-1}d_i$ for $i<j$, $d_is_i=d_{i+1}s_i=\mathrm{id}$, and $d_is_j=s_jd_{i-1}$ for $i>j+1$ ([[def-simplicial-object-and-simplicial-commutative-ring]]).

[F2] The normalization $N(M)$ is a chain complex with differential $(-1)^nd_n$, the inclusion $N(M)\to s(M)$ is a natural chain homotopy equivalence ([[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]]).

[F3] A nonnegative chain complex of $R$-modules has a differential of degree $-1$ squaring to zero ([[def-chain-complex-in-an-abelian-category]]).



## Proof

1.1 The direct-sum decomposition. Put $K(n,i)=\bigcap_{j<i}\ker(d_j\colon U_n\to U_{n-1})$ for $0\le i\le n$. On $K(n,i)$ the map $d_i$ lands in $K(n-1,i)$: for $j<i$, $d_jd_i=d_{i-1}d_j$ vanishes. The map $s_i$ carries $K(n-1,i)$ into $K(n,i)$ by $d_js_i=s_{i-1}d_j$ and is a section of $d_i$. Thus $x=(x-s_id_ix)+s_id_ix$ gives the unique splitting $K(n,i)=K(n,i+1)\oplus s_iK(n-1,i)$. Starting with $K(n,0)=U_n$, successively split for $i=0,\dots,n-1$ and then recursively split each lower-dimensional $K(n-1,i)$. This produces exactly the summands $s_{i_1}\cdots s_{i_t}N(U)_{n-t}$ with $i_1\le\cdots\le i_t$, each with a unique coefficient; the sequences are precisely the canonical degeneracy factorizations of the order-preserving surjections $[n]\twoheadrightarrow[n-t]$, using $s_is_j=s_{j+1}s_i$ to put any factorization in this form. The splitting formulas commute with homomorphisms of simplicial abelian groups, so the resulting direct-sum map with components $U(\alpha)$ is a natural isomorphism. [F1, given, construct]

1.2 The inverse functor. For a nonnegative chain complex $C$ and $n\ge0$ put $\Gamma(C)_n=\bigoplus_{\alpha\colon[n]\twoheadrightarrow[r]}C_r$. For $\varphi\colon[m]\to[n]$ and the $\alpha$-summand, put $\beta=\alpha\varphi$ and write $[s]$ for the initial interval of $\operatorname{Im}\beta$ when it is one: if $\operatorname{Im}\beta=[r]$ map by the identity to the $\beta$-summand (with $\beta$ corestricted to its image), if $\operatorname{Im}\beta=[r-1]$ map by $(-1)^rd_C$, and otherwise map by zero; a gap in the image or the loss of at least two terminal vertices both fall under the zero case. These formulas respect composition: if an intermediate image has a gap, then any later initial-interval image lies below the gap and has lost at least two vertices, so the direct formula is zero; losing two or more terminal vertices stays zero under further restriction; if the first map loses none the second rule is the composite rule; if it loses exactly one index, the second map either loses none (same single signed differential), has a gap (zero), or loses at least one more, and the only possibly nonzero iterated case gives $d_C^2=0$. Identity operators act identically, so $\Gamma(C)$ is a simplicial $R$-module, functorially in $C$. [F1, F3, construct]

2.1 The normalization differential. For $x\in N(U)_n$ and $j<n-1$ the identities give $d_jd_nx=d_{n-1}d_jx=0$, so $d_n$ maps $N(U)_n$ into $N(U)_{n-1}$; therefore $(-1)^nd_n$ defines a differential on $N(U)$ and $d_{n-1}d_n=d_{n-1}^2=0$ on normalized elements, as in [F2]. The passage to simplicial $R$-modules is $R$-linear throughout. [F1, F2, step 1.1]

2.2 $N\Gamma\cong\mathrm{id}$. The degenerate summands of $\Gamma(C)_n$ are exactly those with $r<n$, since every nonidentity surjection factors through an elementary degeneracy and the rule of step 1.2 makes that factorization the identity on the corresponding coefficient. The $\mathrm{id}_{[n]}$-coefficient $C_n$ has all faces zero except the last, which is $(-1)^nd_C$. Hence the normalization of $\Gamma(C)$ is exactly $C$ with its differential, so $N\Gamma(C)\cong C$ naturally. [F1, F3, step 1.2]

2.3 $\Gamma N\cong\mathrm{id}$. The direct-sum map of step 1.1 is bijective in every degree, and its compatibility with a simplex operator $\varphi$ can be checked on an $\alpha$-summand: if $\alpha\varphi$ has a missing index $j<r$ it factors through the $j$-th face, which vanishes on $N(U)_r$; if its image is initial but has lost at least two terminal indices it factors through the face $r-1$, which also vanishes on $N(U)_r$; if no index is lost the composite is $U(\alpha\varphi)$; and if only the last index is lost the restriction equals $(-1)^rd_N$. These are exactly the four rules defining $\Gamma$, so the comparison $\Gamma N(U)\to U$ is a natural isomorphism of simplicial $R$-modules. [F1, step 1.1, step 1.2]

3.1 Equivalence and scope. The two natural isomorphisms of steps 2.2 and 2.3 are inverse to each other on the nose by the uniqueness of the decomposition, so $N$ is an equivalence of categories; it replaces simplicial additive objects by nonnegative chain complexes as asserted. For exactness, let $M\twoheadrightarrow M' $ be degreewise surjective and let $y\in N(M')_n$. Lift $y$ to $x\in M_n$ and project $x$ to its identity-surjection summand by the natural splitting of step 1.1; naturality makes this normalized projection a lift of $y$. Thus $N$ preserves epimorphisms; it preserves kernels because normalization is an intersection of face kernels. Applying these facts to a short exact sequence proves exactness. Since all constructions are $R$-linear formulas, the same proof applies to simplicial modules over a constant ring $R$; it does not identify a variable simplicial $A$-module with an ordinary chain complex over a fixed ring, for which a separate coefficient-base analysis is required. [F1, step 1.1, step 2.2, step 2.3, discharge-construct] ∎ 