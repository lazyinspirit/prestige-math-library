---
id: lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations
kind: lemma
title: "Disjoint coordinate neighbourhoods evenly cover the unordered configuration space"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-ordered-configuration-space, def-unordered-configuration-space,
       prop-the-symmetric-group-acts-freely-on-ordered-configurations,
       def-hausdorff-space, def-product-topology, def-subspace-topology-top,
       def-topological-space, def-quotient-topology, thm-quotient-universal-property,
       def-homeomorphism-and-open-maps, def-continuous-map-top,
       def-covering-map-and-evenly-covered-neighbourhoods,
       cor-symmetric-group-has-factorial-cardinality-again,
       def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.1 and 1.3, printed pp. 3-6"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Fadell-Neuwirth, Configuration Spaces, section II Theorems 1 and 3, printed pp. 111-114"
      url: "https://tidsskrift.dk/math/article/download/10517/8538"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $X$ be a Hausdorff space ([[def-hausdorff-space]]), let $n\in\mathbb N$ and let $q=(q_1,\dots,q_n)\in F_n(X)$ be an ordered configuration, with quotient map $p:F_n(X)\to C_n(X)$ onto the unordered configuration space ([[def-unordered-configuration-space]]). Then there are pairwise disjoint open sets $U_1,\dots,U_n\subseteq X$ with $q_i\in U_i$ for every label $i$, and for such a choice, with $$U:=\Big(\prod_{i=1}^{n}U_i\Big)\cap F_n(X),\qquad V:=p(U)\subseteq C_n(X),$$ the following hold:

1. $V$ is an open neighbourhood of the orbit $[q]$ in $C_n(X)$;
2. $p^{-1}(V)$ is the disjoint union of the open sets $\sigma(U)$, $\sigma\in S_n$, and for each $\sigma$ the restriction $p|_{\sigma(U)}:\sigma(U)\to V$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]).

Consequently $V$ is evenly covered by $p$ with exactly $n!$ sheets ([[def-covering-map-and-evenly-covered-neighbourhoods]]), namely the sets $\sigma(U)$. For $n=0$ the space $F_0(X)$ is a point, $S_0$ is the trivial group, $C_0(X)$ is a point, and $p$ is the unique homeomorphism between these one-point spaces, so $C_0(X)$ is evenly covered at its only point with $0!=1$ sheet; no hypothesis on $X$ is used. Nothing here assumes that $X$ is connected, locally compact or a manifold: only the Hausdorff separation of the finitely many points $q_1,\dots,q_n$ enters.

## Facts & Assumptions

**Given:** A Hausdorff space $X$, a natural number $n$, an ordered configuration $q\in F_n(X)$ with quotient map $p:F_n(X)\to C_n(X)$.

[F1] Points of $F_n(X)$ are the tuples $(x_1,\dots,x_n)\in X^n$ with $x_i\neq x_j$ for $i\neq j$, carrying the subspace topology of the product $X^n$; $F_0(X)$ is a one-point space and the label $i$ names the coordinate of index $i-1$ under the identification $\kappa(i)=i-1$ of $\{1,\dots,n\}$ with $n=\{0,\dots,n-1\}$. If $X$ is Hausdorff and $q\in F_n(X)$, then for every label $i$ there is an open neighbourhood $U_i$ of $q_i$ with $U_i\cap U_j=\varnothing$ whenever $i\neq j$ ([[def-ordered-configuration-space]]).

[L2] $X$ is Hausdorff: distinct points of $X$ have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[L3] $C_n(X)=F_n(X)/S_n$ carries the quotient topology of the canonical projection $p$, which is a quotient map; two tuples of $F_n(X)$ have the same image under $p$ exactly when they differ by a permutation of coordinates, and the basepoint of $C_n(X)$ at $q$ is the orbit $[q]$; for $n=0$ both $F_0(X)$ and $C_0(X)$ are one-point spaces and $p$ is their unique homeomorphism ([[def-unordered-configuration-space]]).

[L4] The formula $(\sigma\cdot x)_i=x_{\sigma^{-1}(i-1)+1}$ defines a continuous action of $S_n$ on $F_n(X)$ by homeomorphisms of $F_n(X)$, with inverse action of $\sigma^{-1}$ ([[prop-the-symmetric-group-acts-freely-on-ordered-configurations]], [[def-homeomorphism-and-open-maps]]).

[L5] If $U_1,\dots,U_n$ are open in $X$, then $\prod_{i=1}^nU_i$ is open in the product $X^n$, and a subset of $F_n(X)$ is open in the subspace topology exactly when it is the intersection of $F_n(X)$ with an open set of $X^n$; finite unions of open sets are open ([[def-product-topology]], [[def-subspace-topology-top]], [[def-topological-space]]).

[L6] A subset $W\subseteq C_n(X)$ is open if and only if $p^{-1}(W)$ is open in $F_n(X)$, and a continuous map on $F_n(X)$ that is constant on the fibres of $p$ factors uniquely through $p$ by a continuous map ([[def-quotient-topology]], [[thm-quotient-universal-property]]).

[L7] A continuous bijection that is an open map is a homeomorphism, and a composite of homeomorphisms is a homeomorphism ([[def-homeomorphism-and-open-maps]], [[def-continuous-map-top]]).

[L8] $|S_n|=n!$ ([[cor-symmetric-group-has-factorial-cardinality-again]]); a map is bijective when it is injective and surjective ([[def-injection-surjection-bijection]]). A set $V$ is evenly covered by $p$ when $p^{-1}(V)$ is a disjoint union of open sets, called sheets, each mapped homeomorphically onto $V$ by $p$, and $V$ is then an evenly covered neighbourhood ([[def-covering-map-and-evenly-covered-neighbourhoods]]).



## Proof

**Proof technique:** direct.

1.1 *Disjoint coordinate neighbourhoods exist.* Since $X$ is Hausdorff and $q\in F_n(X)$ has pairwise distinct coordinates, [F1] supplies, for every label $i\in\{1,\dots,n\}$, an open neighbourhood $U_i$ of $q_i$ with $U_i\cap U_j=\varnothing$ for $i\neq j$. [F1, L2]

1.2 *The case $n=0$.* By [L3], $F_0(X)$ and $C_0(X)$ are one-point spaces and $p$ is their unique homeomorphism; its only fibre has $0!=1$ element and the single point of $C_0(X)$ is evenly covered by the single sheet $F_0(X)$. [L3, L7, L8]

1.3 *The set $U$ and its translates.* With $U:=\big(\prod_{i=1}^{n}U_i\big)\cap F_n(X)$, the set $\prod_{i=1}^nU_i$ is open in $X^n$ and $U$ is open in $F_n(X)$ by [L5]; moreover $q\in U$, because $q_i\in U_i$ for every $i$ and $q\in F_n(X)$. For $\sigma\in S_n$ the translate $\sigma(U)=\{\sigma\cdot x:x\in U\}$ is open in $F_n(X)$, being the image of the open set $U$ under the homeomorphism $x\mapsto\sigma\cdot x$ of [L4]. [L4, L5, F1]

2.1 *The translates are disjoint and cover the preimage of $V$.* Suppose $x\in\sigma(U)\cap\tau(U)$ for $\sigma,\tau\in S_n$. Writing $x=\sigma\cdot u=\tau\cdot u'$ with $u,u'\in U$, the coordinate formula of [F1] gives, for every label $k$, the element $x_k=u_{\sigma^{-1}(k-1)+1}=u'_{\tau^{-1}(k-1)+1}$ of $U_{\sigma^{-1}(k-1)+1}\cap U_{\tau^{-1}(k-1)+1}$; by step 1.1 the sets $U_i$ are pairwise disjoint, so $\sigma^{-1}(k-1)+1=\tau^{-1}(k-1)+1$ for every $k$, that is $\sigma=\tau$. Hence the translates $\sigma(U)$ are pairwise disjoint. A tuple $x\in F_n(X)$ lies in $p^{-1}(p(U))$ exactly when $p(x)=p(u)$ for some $u\in U$, that is, by [L3], exactly when $x=\sigma\cdot u$ for some $\sigma\in S_n$ and $u\in U$; therefore $p^{-1}(V)=\bigcup_{\sigma\in S_n}\sigma(U)$, and this union is disjoint. [step 1.1, F1, L3]

3.1 *$V$ is an open neighbourhood of $[q]$.* By step 2.1, $p^{-1}(V)$ is a finite union of open sets, hence open in $F_n(X)$ by [L5], so $V$ is open in $C_n(X)$ by [L6]. It contains $p(q)=[q]$ because $q\in U$ by step 1.3. [step 1.3, step 2.1, L5, L6]

4.1 *$p|_U:U\to V$ is a homeomorphism.* The restriction is continuous, and it is injective: if $p(u)=p(u')$ for $u,u'\in U$, then $u'\in U\cap\sigma(U)$ for some $\sigma$ by step 2.1, so $u'=u$ by the disjointness proved there. It is surjective onto $V=p(U)$ by definition. Finally it is open: for $A\subseteq U$ open, $p^{-1}(p(A))=\bigcup_{\sigma\in S_n}\sigma(A)$ is a finite union of images of $A$ under the homeomorphisms of [L4], hence open in $F_n(X)$, so $p(A)$ is open in $C_n(X)$ by [L6] and therefore in $V$. By [L7], $p|_U$ is a homeomorphism onto $V$. [step 2.1, step 3.1, L4, L6, L7]

5.1 *Every translate maps homeomorphically onto $V$.* Let $\sigma\in S_n$ and let $h_\sigma(x):=\sigma\cdot x$ be the homeomorphism of $F_n(X)$ given by [L4], which maps $U$ onto $\sigma(U)$. For $y=\sigma\cdot u\in\sigma(U)$ with $u\in U$ one has $p(y)=p(\sigma\cdot u)=p(u)$, since orbits are permuted by $\sigma$; hence $p|_{\sigma(U)}=p|_U\circ(h_\sigma|_U)^{-1}$ is a composite of homeomorphisms and therefore a homeomorphism onto $V$ by [L7]. [step 4.1, L4, L7]

6.1 *Conclusion.* By steps 1.1, 1.3, 2.1 and 5.1, the open neighbourhood $V$ of $[q]$ has preimage $p^{-1}(V)$ equal to the disjoint union of the open sets $\sigma(U)$, $\sigma\in S_n$, each of which is carried homeomorphically onto $V$ by $p$; by [L8] and $|S_n|=n!$ these are exactly $n!$ sheets, so $V$ is evenly covered. The case $n=0$ is step 1.2. [step 1.1, step 1.2, step 1.3, step 2.1, step 5.1, L8] ∎
