---
id: lem-simplicial-normalization-prism-and-trivial-fibration-criterion
kind: lemma
title: "Normalized simplicial chains, prism homotopies and the abelian trivial-fibration criterion"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
proof_strategy: constructive
justified_by: []
aliases: []
deps:
  - def-simplicial-set-homotopy-and-trivial-kan-fibration
  - def-simplicial-object-and-simplicial-commutative-ring
  - def-chain-complex-in-an-abelian-category
  - def-quasi-isomorphism
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Chapter 14 (Simplicial Methods)"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Sections 14.23 and 14.27, Lemmas 14.31.8 and 14.31.9 (tags 019C, 08P1, 08P2), printed 39-40, 58-60; explicit local projection and prism identities"
---

## Statement

For a simplicial abelian group $M$, put $s(M)_n=M_n$ with differential
$d=\sum_{i=0}^n(-1)^id_i$ and differential zero out of degree zero, and put
$N(M)_n=\bigcap_{i<n}\ker d_i$ with differential $(-1)^nd_n$
([[def-chain-complex-in-an-abelian-category]],
[[def-simplicial-object-and-simplicial-commutative-ring]]). The inclusion
$N(M)\to s(M)$ is a natural chain homotopy equivalence. A simplicial-set
homotopy induces a chain homotopy on free abelian or free $R$-module chains.
If a homomorphism of simplicial abelian groups is a homotopy equivalence of
underlying simplicial sets, its associated chain map is a quasi-isomorphism
([[def-quasi-isomorphism]]). A termwise surjective homomorphism inducing a
quasi-isomorphism of associated complexes is a trivial Kan fibration
([[def-simplicial-set-homotopy-and-trivial-kan-fibration]]).

## Facts & Assumptions

**Given:** A simplicial abelian group $M$ with face maps $d_i$ and degeneracies $s_i$; a homomorphism $f\colon M\to M'$ of simplicial abelian groups.

[F1] The face and degeneracy maps satisfy the simplicial identities, including $d_is_j=s_{j-1}d_i$ for $i<j$, $d_is_i=d_{i+1}s_i=\mathrm{id}$, and $d_is_j=s_jd_{i-1}$ for $i>j+1$ ([[def-simplicial-object-and-simplicial-commutative-ring]]).

[F2] A chain complex in an abelian category and its homology are defined by the differential and its cycles and boundaries; a quasi-isomorphism is a chain map inducing isomorphisms on homology ([[def-chain-complex-in-an-abelian-category]], [[def-quasi-isomorphism]]).

[F3] A trivial Kan fibration is a map with a diagonal lift in every square with left side $\partial\Delta[n]\hookrightarrow\Delta[n]$, $n\ge0$; in degree zero this is surjectivity. A simplicial homotopy is a map $H\colon X\times\Delta[1]\to Y$ restricting to the two maps at the vertices ([[def-simplicial-set-homotopy-and-trivial-kan-fibration]]).



## Proof

1.1 The normalization projection. Define $p_{n,0}=\mathrm{id}$ and $p_{n,i}=(1-s_{i-1}d_{i-1})\cdots(1-s_0d_0)$ for $1\le i\le n$, and $p_n=p_{n,n}$. Applying the factors successively kills $d_0,\dots,d_{n-1}$: if $d_j x=0$ for $j<i$ then $d_j(1-s_id_i)x=d_jx-d_js_id_ix=0$ for $j<i$ by the identities of [F1], while $d_i(1-s_id_i)x=d_ix-d_is_id_ix=0$. Hence the image of $p_n$ lies in $N(M)_n$, and $p_n$ is the identity on $N(M)_n$ because each factor acts as the identity there. [F1, given, construct]

1.2 Prism homotopies. Let $H\colon X\times\Delta[1]\to Y$ be a simplicial homotopy from $f$ to $g$ of simplicial sets. The prism maps $$h_i(x)=H_{n+1}\bigl(s_ix,(0,\dots,0,1,\dots,1)\bigr),$$ with $i+1$ zeros, for $x\in X_n$ and $0\le i\le n$, induce a chain homotopy $\sum_i(-1)^ih_i$ between the induced maps on free abelian (or free $R$-module) chains: expanding the boundary of $\sum_i(-1)^ih_i$, the internal face terms cancel in adjacent prism terms by the simplicial identities, and the surviving endpoint faces are exactly $g_\#-f_\#$. Consequently a simplicial homotopy equivalence of underlying simplicial sets induces a chain homotopy equivalence, hence a quasi-isomorphism, on free chains. [F1, F2, F3]

2.1 The chain homotopy, with a telescoping verification. For each $r\ge0$ define $q^r_n=p_{n,\min(r,n)}$ on the Moore complex, so $q^0=1$. Inductively $q^r$ is a chain map and its degree-$n$ image has $d_i=0$ for $i<\min(r,n)$. Put $h^r_n=(-1)^rs_rq^r_n$ when $n\ge r$ and $h^r_n=0$ otherwise. For $n>r$, the simplicial identities and the vanished first $r$ faces give $\partial s_rq^r_n=-s_r\sum_{j>r}(-1)^jd_jq^r_n$. Since $q^r$ is a chain map, adding $h^r_{n-1}\partial=(-1)^rs_r\partial q^r_n$ leaves exactly $s_rd_rq^r_n=q^r_n-q^{r+1}_n$. For $n=r$, the only possibly nonzero two faces of $s_rq^r_r$ cancel, and the previous homotopy term is zero; for $n<r$ all terms are zero. Thus $\partial h^r+h^r\partial=q^r-q^{r+1}$ in all degrees. This also proves that $q^{r+1}$ is a chain map, completing the induction from $q^0$. In a fixed degree the sequence stabilizes at $p_n$, so summing these homotopies gives $H_n=\sum_{r=0}^n(-1)^rs_rp_{n,r}$ and $\partial H+H\partial=1-\iota p$. The projection $p$ is a natural chain map into $N(M)$, is the identity there by step 1.1, and the identity proves the claimed natural chain homotopy equivalence. [F1, step 1.1]

3.1 From set homotopy equivalence to additive homology. Write $C(M)$ for the chain complex of the free simplicial abelian group $\mathbb Z[M]$, and let $e:C(M)\to s(M)$ send $[a]$ to $a$. If the underlying simplicial map of $f:M\to M'$ is a homotopy equivalence, step 1.2 shows that $C(f)$ is a homology isomorphism. Let $x\in N(M)_n$ be a normalized cycle. Every face of $x$ is zero (for $n=0$ there are no faces), so $c_x=[x]-[0]$ is a normalized free cycle and $e(c_x)=x$. For injectivity, suppose $f(x)$ is an additive boundary. By step 2.1 choose $y\in N(M')_{n+1}$ with $\partial y=f(x)$. Put $w=(-1)^{n+1}y$, so $d_{n+1}w=f(x)$ and $d_iw=0$ for $i<n+1$. Then the free chain $(-1)^{n+1}([w]-[0])$ has boundary exactly $[f(x)]-[0]$. Hence $C(f)(c_x)$ is a free boundary, so $c_x$ is a free boundary by injectivity on free homology; evaluation makes $x$ an additive boundary. For surjectivity, start with a normalized cycle $z\in N(M')_n$. The free cycle $[z]-[0]$ has a homology preimage represented by some free cycle $c\in C(M)_n$; no claim is made that $c$ is one basis difference. Since $C(f)(c)-([z]-[0])$ is a free boundary, evaluation shows that $f(e(c))-z$ is an additive boundary. Project $e(c)$ into $N(M)$ using step 2.1 if necessary. This proves surjectivity. The argument includes arbitrary additive degree-zero cycles, and its bounding-chain formula uses the normalized last face only after correcting the sign. [F2, step 1.1, step 1.2, step 2.1]

3.2 Exactness of normalization. If $f\colon M\to M'$ is degreewise surjective, then $N(f)\colon N(M)\to N(M')$ is surjective: given a normalized $y\in N(M')_n$, choose $x\in s(M)_n$ with $f(x)=y$; naturality of $p_n$ gives $f(p_nx)=p_nf(x)=p_ny=y$ because $y$ is normalized and $p_n$ is the identity on normalized elements. Hence $N$ is exact, since it is a functor that preserves kernels and turns degreewise epimorphisms into epimorphisms, so it preserves short exact sequences of simplicial abelian groups in each degree. [F1, step 1.1, step 2.1]

4.1 The trivial-fibration criterion. Let $f\colon M\to M'$ be termwise surjective and a quasi-isomorphism. Its kernel $K=\ker f$ is acyclic by the long exact homology sequence of the degreewise short exact sequence of complexes (cycle lifts and boundary lifts give its elementary proof), and let a boundary-lifting problem with target simplex $v\in M'_n$ and prescribed faces $x_i\in M_{n-1}$, satisfying $f(x_i)=d_iv$ and $d_ix_j=d_{j-1}x_i$ for $i<j$, be given. In degree zero, choose a lift directly using termwise surjectivity. For $n\ge1$, choose a lift $u_0\in M_n$ of the prescribed target simplex and replace it first by $u=u_0+s_0(x_0-d_0u_0)$ and $u\leftarrow u+s_r(x_r-d_ru)$ for $r=1,\dots,n-1$, using the simplicial identities of [F1] to preserve the faces already filled and to fill the $r$-th face; the remaining discrepancy $z=x_n-d_nu\in K_{n-1}$ has all faces zero by construction, hence is a normalized cycle. Since $K$ is acyclic and $N(K)\to s(K)$ is a chain homotopy equivalence by step 2.1, the normalized cycle $z$ is a boundary already in $N(K)$: there is $w\in N(K)_n$ with $(-1)^nd_nw=z$, and then $u+(-1)^nw$ fills the last face while leaving the previously filled faces unchanged. This supplies every boundary lift, so $f$ is a trivial Kan fibration. Every step is an explicit formula, so no choice principle is used. [F1, F3, step 1.1, step 2.1, step 3.2, discharge-construct] ∎

