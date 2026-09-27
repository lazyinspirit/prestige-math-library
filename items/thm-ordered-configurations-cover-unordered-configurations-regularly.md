---
id: thm-ordered-configurations-cover-unordered-configurations-regularly
kind: theorem
title: "Ordered configuration spaces cover the unordered ones regularly with deck group $S_n$"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-ordered-configuration-space, def-unordered-configuration-space,
       prop-the-symmetric-group-acts-freely-on-ordered-configurations,
       lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations,
       def-covering-map-and-evenly-covered-neighbourhoods,
       def-deck-transformation-and-deck-group,
       prop-deck-transformations-are-determined-by-one-point-and-act-freely,
       def-regular-covering, def-topological-manifold-with-boundary,
       def-euclidean-upper-half-space-and-its-boundary, def-hausdorff-space,
       def-connected-space, def-path-connected, def-locally-connected,
       thm-connected-and-locally-path-connected-implies-path-connected,
       thm-path-connected-implies-connected, def-subspace-topology-top,
       def-product-topology, def-metric-ball, def-metric-topology,
       def-homeomorphism-and-open-maps, def-continuous-map-top,
       def-topological-space, lem-vector-operations-are-continuous-in-a-normed-space,
       def-group-isomorphism-and-automorphism, def-group-homomorphism,
       cor-symmetric-group-has-factorial-cardinality-again,
       def-orbit-and-stabilizer, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
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

Let $M$ be a nonempty connected Hausdorff topological $d$-manifold with boundary, possibly empty boundary, in the sense of [[def-topological-manifold-with-boundary]], of dimension $d\ge2$, and let $n\in\mathbb N$. Write $p:F_n(M)\to C_n(M)$ for the quotient map from the ordered to the unordered configuration space ([[def-ordered-configuration-space]], [[def-unordered-configuration-space]]). Then:

1. $p$ is a covering map in the sense of [[def-covering-map-and-evenly-covered-neighbourhoods]]; every fibre of $p$ has exactly $n!$ elements, so $p$ is an $n!$-sheeted covering, and each point of $C_n(M)$ has an evenly covered neighbourhood of the form supplied by [[lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations]].
2. $F_n(M)$ is path-connected, and so is $C_n(M)$; in particular $F_n(M)$ is connected and is a connected covering space of $C_n(M)$.
3. The deck group $\operatorname{Deck}(p)$ ([[def-deck-transformation-and-deck-group]]) is isomorphic to $S_n$: the map $\sigma\mapsto\tau_\sigma$, $\tau_\sigma(x):=\sigma\cdot x$, is an isomorphism of groups from $S_n$ onto $\operatorname{Deck}(p)$, where $S_n$ acts on $F_n(M)$ by permuting the labels $1,\dots,n$ ([[prop-the-symmetric-group-acts-freely-on-ordered-configurations]]).
4. $p$ is a regular covering in the sense of [[def-regular-covering]]: its deck group acts transitively on every fibre.

For $n=0$ the spaces $F_0(M)$ and $C_0(M)$ are one-point spaces and $p$ is their unique homeomorphism, so the assertions hold with $0!=1$. No choice principle, paracompactness or second countability beyond the manifold definition is used.

## Facts & Assumptions

**Given:** A natural number $n$, a nonempty connected Hausdorff topological $d$-manifold $M$ with boundary, $d\ge2$, its configuration spaces and the quotient map $p:F_n(M)\to C_n(M)$.

[F1] Points of $F_n(X)$ are the tuples $(x_1,\dots,x_n)\in X^n$ with $x_i\neq x_j$ for $i\neq j$, carrying the subspace topology; $F_0(X)$ is a one-point space, $F_1(X)$ is canonically homeomorphic to $X$ by single-coordinate evaluation, and $F_n(X)\neq\varnothing$ exactly when $X$ has at least $n$ distinct points ([[def-ordered-configuration-space]]).

[L2] $C_n(X)=F_n(X)/S_n$ carries the quotient topology of the canonical projection $p$, which is a quotient map; two tuples have the same image exactly when they differ by a permutation of coordinates; for $n=0$ both spaces are one-point spaces and $p$ is their unique homeomorphism ([[def-unordered-configuration-space]]).

[L3] The formula $(\sigma\cdot x)_i=x_{\sigma^{-1}(i-1)+1}$ defines a continuous free action of $S_n$ on $F_n(X)$ by homeomorphisms, and the orbit of $x$ is $\{\sigma\cdot x:\sigma\in S_n\}$ ([[prop-the-symmetric-group-acts-freely-on-ordered-configurations]], [[def-orbit-and-stabilizer]]); $|S_n|=n!$ ([[cor-symmetric-group-has-factorial-cardinality-again]]).

[L4] For $X$ Hausdorff and $q\in F_n(X)$, the quotient map is evenly covered at $[q]$ by $n!$ sheets of the form $\sigma(U)$ for pairwise disjoint open coordinate neighbourhoods $U_i$ of the $q_i$ ([[lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations]]). A covering map is a continuous surjection admitting such evenly covered neighbourhoods, and an $n!$-sheeted covering is one whose fibres all have $n!$ elements ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[L5] $M$ is a Hausdorff second-countable space in which every point has a neighbourhood homeomorphic to a relatively open subset of the upper half-space $\mathbb H^d=\{x\in\mathbb R^d:x^d\ge0\}$ ([[def-topological-manifold-with-boundary]], [[def-euclidean-upper-half-space-and-its-boundary]]); $M$ is nonempty and connected ([[def-connected-space]]).

[L6] A relatively open subset of $\mathbb H^d$ is $\mathbb H^d\cap O$ for some open $O\subseteq\mathbb R^d$, and the balls $B(c,\varepsilon)$ form a basis of the metric topology of $\mathbb R^d$, so for $c\in O$ there is $\varepsilon>0$ with $B(c,\varepsilon)\cap\mathbb H^d\subseteq\mathbb H^d\cap O$ ([[def-subspace-topology-top]], [[def-metric-ball]], [[def-metric-topology]]). The ball $B(c,\varepsilon)$ is convex, and the half-space $\mathbb H^d$ is convex; segments $t\mapsto(1-t)a+tb$ are continuous because scalar multiplication and addition of $\mathbb R^d$ are continuous ([[lem-vector-operations-are-continuous-in-a-normed-space]], [[def-continuous-map-top]]).

[L7] A connected, locally path-connected space is path-connected, and a path-connected space is connected ([[thm-connected-and-locally-path-connected-implies-path-connected]], [[thm-path-connected-implies-connected]], [[def-locally-connected]], [[def-path-connected]]). A space is connected when it admits no separation into two disjoint nonempty open subsets covering it ([[def-connected-space]]).

[L8] In a Hausdorff space $X$ the complement of a point is open, hence every finite subset is closed and the complement of a finite subset is open; this uses only the definition of the Hausdorff condition and the axioms of a topology ([[def-hausdorff-space]], [[def-topological-space]]).

[L9] A deck transformation of a covering $p$ is a homeomorphism $h$ of the total space with $p\circ h=p$; on a connected total space two deck transformations agreeing at one point are equal ([[def-deck-transformation-and-deck-group]], [[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]).

[L10] A covering $p:E\to B$ with path-connected total space is regular when its deck group acts transitively on every fibre ([[def-regular-covering]]).

[L11] A bijective group homomorphism is a group isomorphism ([[def-group-isomorphism-and-automorphism]], [[def-group-homomorphism]], [[def-injection-surjection-bijection]]).



## Proof

**Proof technique:** direct.

1.1 *Punctured relative balls are path-connected.* Let $d\ge2$, $c\in\mathbb H^d$, $\varepsilon>0$ and $R:=(B(c,\varepsilon)\cap\mathbb H^d)\setminus\{c\}$. The set $B(c,\varepsilon)\cap\mathbb H^d$ is convex by [L6], so segments between its points stay in it and are continuous paths; write $e_1:=(1,0,\dots,0)$ and $e_d:=(0,\dots,0,1)$, whose last coordinates are $0$ and $1$ respectively, so that $c+\lambda e_i\in R$ for $0<\lambda<\varepsilon$ and $i\in\{1,d\}$, and $R\neq\varnothing$. Let $u\in R$, $\rho:=|u-c|\in(0,\varepsilon)$ and $q_i:=c+\rho e_i\in R$. The segment $[u,q_i]$ contains $c$ only if $u-c$ is a negative multiple of $e_i$, which can happen for at most one of $i\in\{1,d\}$ because $e_1$ and $e_d$ are not parallel; choose $i$ with $c\notin[u,q_i]$, so $[u,q_i]\subseteq R$ joins $u$ to $q_i$. The segment $[q_i,c+(\varepsilon/2)e_i]$ lies in $R$, since all its points are of the form $c+\lambda e_i$ with $\lambda>0$. The segment $[c+(\varepsilon/2)e_1,c+(\varepsilon/2)e_d]$ lies in $R$, since a point of it equals $c$ only if $(1-t)(\varepsilon/2)e_1+t(\varepsilon/2)e_d=0$, which forces $t=0$ and $t=1$ simultaneously as $e_1,e_d$ are linearly independent. Hence any two points of $R$ are joined by a polygonal path in $R$, so $R$ is path-connected. [L6]

1.2 *Local form of $M$.* Let $s\in M$ and let $O\subseteq M$ be open with $s\in O$. By [L5] there are an open $U\subseteq M$ containing $s$ and a homeomorphism $\psi$ of $U$ onto a relatively open $V\subseteq\mathbb H^d$. Replacing $U$ by $U\cap O$, which still contains $s$, we may suppose $U\subseteq O$. By [L6] there is $\varepsilon>0$ with $B(\psi(s),\varepsilon)\cap\mathbb H^d\subseteq V$; set $W:=\psi^{-1}\big(B(\psi(s),\varepsilon)\cap\mathbb H^d\big)$, an open neighbourhood of $s$ with $W\subseteq O$, homeomorphic to the relative ball $B(\psi(s),\varepsilon)\cap\mathbb H^d$. [L5, L6]

1.3 *$p$ is an $n!$-sheeted covering.* Let $y\in C_n(M)$; by [L2] there is $q\in F_n(M)$ with $p(q)=y$, and [L4] makes $p$ evenly covered at $y$ with $n!$ sheets. Hence $p$ is a covering map, and the fibre $p^{-1}(y)$ meets each of the $n!$ sheets in exactly one point, because on each sheet $p$ restricts to a homeomorphism; so every fibre has exactly $n!$ elements. [L2, L4]

2.1 *M is infinite.* Apply step 1.2 with $O:=M$ and some $s\in M$, obtaining $W\cong B(\psi(s),\varepsilon)\cap\mathbb H^d$. By step 1.1 the set $W\setminus\{s\}$, which corresponds to the punctured relative ball at $\psi(s)$, is nonempty and path-connected, so $M$ has at least two points. If $M$ were finite, then for $y\neq s$ the sets $\{y\}$ are closed by [L8], so $\{s\}$ and $M\setminus\{s\}$ would be disjoint nonempty open sets covering $M$, a separation of the connected space $M$ by [L5]; hence $M$ is infinite. [step 1.1, step 1.2, L5, L7, L8]

2.2 *$M$ is locally path-connected.* Let $s\in M$ and let $O$ be a neighbourhood of $s$. Step 1.2 gives a neighbourhood $W$ of $s$ with $W\subseteq O$ homeomorphic to a relative ball $B(\psi(s),\varepsilon)\cap\mathbb H^d$, which is path-connected by [L6]. A homeomorphism carries paths to paths, so $W$ is path-connected: the path-connected open sets form a neighbourhood basis of $s$. [step 1.2, L6]

3.1 *$M$ is path-connected.* It is connected and locally path-connected by [L5] and step 2.2, so [L7] makes it path-connected. [step 2.2, L5, L7]

4.1 *Complements of finite sets are path-connected.* Let $S\subseteq M$ be finite. Step 2.1 makes $M$ infinite, so $M\setminus S\neq\varnothing$; indeed $M\setminus S$ cannot be finite, for then $M=(M\setminus S)\cup S$ would be a union of two finite sets. For each $x\in M\setminus S$, steps 1.2 and 2.2 give a path-connected open neighbourhood $W_x\subseteq M\setminus S$ of $x$, since $M\setminus S$ is open by [L8]. Thus each path component $P$ of $M\setminus S$ is open in $M$: every $x\in P$ has such a $W_x\subseteq P$. No simultaneous choice of the neighbourhoods is required. For each of the finitely many $s\in S$ apply steps 1.1 and 1.2 with $O:=M\setminus(S\setminus\{s\})$, which is open by [L8]: this gives an open neighbourhood $W_s$ of $s$ with $W_s\subseteq O$ and $W_s\setminus\{s\}$ path-connected, hence contained in a single path component $P(s)$ of $M\setminus S$. For each path component $P$ of $M\setminus S$ define $A_P:=P\cup\{s\in S:P(s)=P\}$. It is open in $M$: $P$ is open, and for each added point $s$ the open set $W_s$ lies in $A_P$, since $W_s\setminus\{s\}\subseteq P$. The sets $A_P$ are pairwise disjoint and cover $M$, because each point of $M\setminus S$ belongs to exactly one path component and each $s\in S$ has exactly one assigned component $P(s)$. If there were two or more components, choose one $P$; then $A_P$ and the union of all $A_Q$ for $Q\neq P$ would be disjoint nonempty open sets covering $M$, contradicting connectedness by [L5]. Hence $M\setminus S$ is path-connected. [step 1.2, step 2.1, step 2.2, step 3.1, L5, L7, L8]

5.1 *$F_n(M)$ is path-connected.* Let $x=(x_1,\dots,x_n)$ and $y=(y_1,\dots,y_n)$ be points of $F_n(M)$ with $n\ge1$, and let $S:=\{x_1,\dots,x_n,y_1,\dots,y_n\}$, a finite set; by steps 2.1 and 4.1 the complement $M\setminus S$ is infinite, so choose distinct points $z_1,\dots,z_n\in M\setminus S$ and put $z:=(z_1,\dots,z_n)\in F_n(M)$. For $k=1,\dots,n$ the set $M\setminus\{x_{k+1},\dots,x_n,z_1,\dots,z_{k-1}\}$ is path-connected by step 4.1, and both $x_k$ and $z_k$ lie in it, so there is a path in it from $x_k$ to $z_k$; replacing the $k$-th coordinate by that path while keeping the other coordinates fixed gives a path in $F_n(M)$ from $(z_1,\dots,z_{k-1},x_k,\dots,x_n)$ to $(z_1,\dots,z_k,x_{k+1},\dots,x_n)$, because every value of the moving coordinate avoids the finitely many fixed coordinates and the fixed coordinates are pairwise distinct. Concatenating these $n$ paths yields a path from $x$ to $z$, and the same construction with the roles of $x$ and $y$ exchanged yields a path from $y$ to $z$; reversing the latter and concatenating gives a path in $F_n(M)$ from $x$ to $y$. For $n=0$, $F_0(M)$ is a one-point space by [F1]. [step 2.1, step 4.1, F1]

6.1 *$C_n(M)$ is path-connected.* $p$ is continuous and surjective, so for points $p(x),p(y)\in C_n(M)$ a path in $F_n(M)$ from $x$ to $y$, which exists by step 5.1, composes with $p$ to a path in $C_n(M)$ joining them. [step 5.1, L2]

6.2 *Deck group.* For $\sigma\in S_n$ the map $\tau_\sigma(x):=\sigma\cdot x$ is a homeomorphism of $F_n(M)$ by [L3], and $p\circ\tau_\sigma=p$ because $\sigma\cdot x$ lies in the orbit of $x$; hence $\tau_\sigma\in\operatorname{Deck}(p)$ by [L9]. The assignment $\sigma\mapsto\tau_\sigma$ is a group homomorphism, since $\tau_{\sigma\rho}(x)=(\sigma\rho)\cdot x=\sigma\cdot(\rho\cdot x)=\tau_\sigma(\tau_\rho(x))$ by the left-action law [L3], and it is injective: if $\tau_\sigma=\tau_\rho$ then $\sigma\cdot x=\rho\cdot x$ for every $x$, so $\rho^{-1}\sigma$ fixes a point of $F_n(M)$, which is nonempty by step 5.1 and [F1], and freeness gives $\rho^{-1}\sigma=\operatorname{id}$. By step 5.1 the total space is connected, so by [L9] a deck transformation is determined by its value at a point; since every deck transformation permutes the fibre over $p(x)$, evaluation at any $x\in F_n(M)$ injects $\operatorname{Deck}(p)$ into that fibre, so $|\operatorname{Deck}(p)|\le n!$ by step 1.3, while the injective homomorphism exhibits $n!=|S_n|$ deck transformations. Therefore $\sigma\mapsto\tau_\sigma$ is a bijective homomorphism, hence by [L11] an isomorphism $S_n\cong\operatorname{Deck}(p)$. [step 5.1, step 1.3, F1, L3, L9, L11]

7.1 *Regularity.* Let $y\in C_n(M)$ and let $x,x'\in p^{-1}(y)$. By [L2] there is $\sigma\in S_n$ with $x'=\sigma\cdot x=\tau_\sigma(x)$, so the deck group acts transitively on the fibre; since $F_n(M)$ is path-connected by step 5.1, [L10] makes $p$ a regular covering. [step 5.1, step 6.2, L2, L10]

8.1 *Conclusion.* Claim 1 is step 1.3, claim 2 is steps 5.1 and 6.1 together with [L7], claim 3 is step 6.2 and claim 4 is step 7.1; the case $n=0$ is [L2] and [F1]. [step 5.1, step 6.1, step 1.3, step 6.2, step 7.1, F1, L2, L7] ∎
