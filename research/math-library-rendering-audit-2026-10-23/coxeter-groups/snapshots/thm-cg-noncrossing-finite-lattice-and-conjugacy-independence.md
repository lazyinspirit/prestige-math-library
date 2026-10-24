---
id: thm-cg-noncrossing-finite-lattice-and-conjugacy-independence
kind: theorem
title: "Finite noncrossing intervals are lattices, independently of the Coxeter element"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 22
deps:
  - def-cg-coxeter-noncrossing-poset-and-kreweras-map
  - def-hh-coxeter-matrix-word-group-and-length
  - lem-cg-reversed-reflection-product-and-face-spans
  - lem-cg-convex-root-subcomplex-intersection-and-purity
  - lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves
  - def-cg-brady-watt-ordered-spherical-root-complex
  - lem-cg-ordered-root-complex-is-geometric-simplicial
  - thm-cg-root-complex-convex-cones-and-facet-induction
  - lem-cg-ordered-root-pairings-and-simple-systems
  - lem-cg-steinberg-bipartite-root-enumeration
  - def-cg-bipartite-coxeter-element-and-root-recursion
  - def-cg-real-coxeter-form-and-reflection
  - def-cg-canonical-reflection-homomorphism
  - def-cg-reflection-length-absolute-order-and-moved-space
  - thm-cg-carter-reflection-length-and-absolute-order
  - def-cg-coxeter-diagram-components-and-finite-type
  - thm-cg-root-sign-and-simple-reflection-positivity
  - lem-cg-diagram-products-and-invariant-form-comparison
  - def-partial-order
  - def-lattice-distributive-lattice-and-order-ideal
  - def-linear-subspace
  - def-linear-independence
  - def-linear-combination-and-span
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "T. Brady and C. Watt, Lattices in Finite Real Reflection Groups, Transactions of the American Mathematical Society 360 (2008), 4809–4844, arXiv:math/0501502"
      url: "https://arxiv.org/pdf/math/0501502"
      locator: "§§2–7, especially §7 Theorem 7.8 and its proof, printed pp. 24–25: the lattice interval argument; the source's purity sentence is supplied locally by lem-cg-convex-root-subcomplex-intersection-and-purity."
    - title: "D. Armstrong, Generalized Noncrossing Partitions and Combinatorics of Coxeter Groups, Memoirs of the AMS 202 (2009), no. 949, arXiv:math/0611106v2"
      url: "https://arxiv.org/pdf/math/0611106"
      locator: "§2.6, printed pp. 30–33: Definition 2.6.7 of NC(W,c), the finite-type lattice Theorem 2.6.12, and conjugacy-based independence of c."
    - title: "H. Eriksson and K. Eriksson, Conjugacy of Coxeter Elements, Electronic Journal of Combinatorics 16(2) (2009), #R4"
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/download/v16i2r4/pdf/"
      locator: "Introduction, Theorem 1.1, and §2 Proposition 2.3: conjugacy among Coxeter elements and the tree source/sink firing result used by the local supplier lemma. The complete 7-page article was read."
verification:
  audited: "2026-10-08"
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type with $S$ finite, reflection set $T$, reflection length $\ell_T$, absolute order $\le_T$, and noncrossing interval $\operatorname{NC}(W,c)=[1,c]_{\le_T}$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]], [[def-cg-reflection-length-absolute-order-and-moved-space]], [[thm-cg-carter-reflection-length-and-absolute-order]], [[def-cg-coxeter-noncrossing-poset-and-kreweras-map]] (2)). For a connected system, denote by $\gamma$ the designated bipartite Coxeter element and use its ordered root complex $X(\gamma)$, subcomplexes $X(\sigma)$, and root sets $P_\sigma=\{\alpha\in\Phi_+:t_\alpha\le_T\sigma\}$ ([[def-cg-brady-watt-ordered-spherical-root-complex]], [[lem-cg-ordered-root-pairings-and-simple-systems]] (4), [[def-cg-bipartite-coxeter-element-and-root-recursion]] (1)). Then:

**(1) Binary meets in the bipartite interval.** For all $a,b\in[1,\gamma]$, their common lower bounds have a greatest element $a\wedge b$. If $a=1$, $b=1$, or $P_a\cap P_b=\emptyset$, then $a\wedge b=1$. In the last case, $X(a)\cap X(b)$ has no vertices (though it contains the empty face), and its realization is empty. This case occurs in rank two: for the Coxeter system $m(s,t)=3$, take $\gamma=st$, $a=s$, $b=t$; then $a,b\le_T\gamma$ and their distinct singleton root sets are disjoint.

Otherwise choose a maximal simplex $F=\{v_1<\cdots<v_r\}$ of $X(a)\cap X(b)$ and put
$$\sigma:=R(v_r)R(v_{r-1})\cdots R(v_1).$$
Then $\sigma\le_T\gamma$, $M(\sigma)=\operatorname{span}(F)=\operatorname{span}(|X(a)|\cap|X(b)|)$, and $\sigma=a\wedge b$. In every case,
$$M(a\wedge b)=\operatorname{span}(|X(a)|\cap|X(b)|),\qquad P_{a\wedge b}=P_a\cap P_b,$$
where $\operatorname{span}(\emptyset)=\{0\}$.

**(2) Joins and the lattice property.** The common upper bounds of any $a,b\in[1,\gamma]$ form a nonempty finite set and have a least element $a\vee b$. Thus $[1,\gamma]$ is a finite lattice with least element $1$ and greatest element $\gamma$ ([[def-lattice-distributive-lattice-and-order-ideal]]). The meet of any nonempty finite subset is obtained by iterating the binary meet of (1).

**(3) Reducible systems.** If the connected components of $\Gamma$ have vertex sets $S_1,\ldots,S_k$, write $W=W_{S_1}\times\cdots\times W_{S_k}$ and $c=(c_1,\ldots,c_k)$ under the component decomposition ([[def-cg-coxeter-diagram-components-and-finite-type]], [[lem-cg-diagram-products-and-invariant-form-comparison]], [[def-cg-coxeter-noncrossing-poset-and-kreweras-map]] (3)); each $c_i$ is a Coxeter element of $W_{S_i}$. Let $T_i$ be the reflection set of $(W_{S_i},S_i)$. Then
$$[1,c]_{\le_T}=\prod_{i=1}^k[1,c_i]_{\le_{T_i}}=\prod_{i=1}^k\operatorname{NC}(W_{S_i},c_i)$$
as posets, where $T_i$ is the reflection set of $(W_{S_i},S_i)$ and each factor uses its own absolute order. The empty product when $S=\emptyset$ is a singleton. Consequently every finite-type noncrossing interval is a finite lattice.

**(4) Independence of the Coxeter element.** Any two Coxeter elements $c,c'$ of a finite-type $W$ are conjugate: choose $w\in W$ with $c'=wcw^{-1}$ ([[lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves]] (3)). Then
$$\operatorname{Ad}_w:[1,c]_{\le_T}\longrightarrow[1,c']_{\le_T},\qquad x\longmapsto wxw^{-1},$$
is a lattice isomorphism. It preserves reflection length and satisfies $M(wxw^{-1})=\rho(w)M(x)$; hence the isomorphism type of $\operatorname{NC}(W,c)$ is independent of $c$.

**(5) Limits.** No assertion is made about whether the whole absolute order $\operatorname{Abs}(W)$ is a lattice, about intervals $[1,w]$ when $w$ is not a Coxeter element, or about non-finite types. No finite classification, crystallographic hypothesis, or Axiom of Choice is used; the finite noncrystallographic types are included.

## Facts & Assumptions

**Given:** The finite-type Coxeter system and its absolute order, the bipartite root complex for the connected case, and $a,b\in[1,\gamma]$.

[F1] Carter's formula gives $\ell_T(w)=\dim M(w)$; $\le_T$ is a partial order; it is invariant under conjugation; and for $u,v\le_T\delta$, $u\le_Tv$ if and only if $M(u)\subseteq M(v)$ ([[thm-cg-carter-reflection-length-and-absolute-order]] (1)–(3)).

[F2] For connected rank at least two, $P_\sigma=\Phi_+\cap M(\sigma)$, it spans $M(\sigma)$, and $P_\sigma$ is the positive root set of the reflection subgroup with a simple system spanning $M(\sigma)$ ([[lem-cg-ordered-root-pairings-and-simple-systems]] (4)(i)). In particular $P_1=\emptyset$, $M(1)=\{0\}$, and $X(1)$ has empty realization.

[F3] For connected rank at least two, a face of the bipartite root complex is an increasing root tuple whose reverse product lies below $\gamma$ with length the tuple size ([[lem-cg-ordered-root-complex-is-geometric-simplicial]] (1)–(2)); every positive root reflection lies below $\gamma$ ([[lem-cg-ordered-root-pairings-and-simple-systems]] (4)(i)).

[F4] The common-face cone and realization identities hold for subcomplexes ([[lem-cg-convex-root-subcomplex-intersection-and-purity]] (1)). For each $\sigma\le_T\gamma$, $c[X(\sigma)]$ is the positive cone on $P_\sigma$ and $|X(\sigma)|$ is its sphere section ([[thm-cg-root-complex-convex-cones-and-facet-induction]] (2)–(3)).

[F5] The moved space of the reversed reflection product on an independent face is its linear span ([[lem-cg-reversed-reflection-product-and-face-spans]] (1)).

[F6] The component decomposition identifies $W$ with $\prod_iW_{S_i}$; the component product in [[def-cg-coxeter-noncrossing-poset-and-kreweras-map]] (3) agrees with the ambient absolute interval.

[F7] For rank one, the simple root $e_s$ is the unique positive root, the simple reflection sends it to $-e_s$, and its reflecting involution is $s$ ([[def-cg-canonical-reflection-homomorphism]], [[thm-cg-root-sign-and-simple-reflection-positivity]] (2)). Clause (1) of A2 gives $M(s)=\mathbb R e_s$ ([[lem-cg-reversed-reflection-product-and-face-spans]] (1)).

[F8] In rank one the presentation has generator $s$ and relation $s^2=1$; any involution assigned to $s$ extends to a homomorphism from $W$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F9] In the rank-two Coxeter system $m(s,t)=3$, the Coxeter form has $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-1/2$, and the canonical homomorphism sends $s,t$ to $r_s,r_t$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]]). Thus $\rho(st)e_s=e_t$ and $\rho(st)e_t=-e_s-e_t$, so in the basis $(e_s,e_t)$ the matrix of $\rho(st)$ is $\begin{pmatrix}0&-1\\1&-1\end{pmatrix}$. Its cube is the identity matrix, while the matrix itself is nonidentity. The presentation imposes $(st)^3=1$ ([[def-hh-coxeter-matrix-word-group-and-length]]), hence $st$ has order exactly $3$.

[F10] In the ambient connected rank-at-least-two case, [F3] gives $s\le_T\gamma$ and $t\le_T\gamma$ because $e_s,e_t\in\Phi_+$; [F2] then gives $P_s=\Phi_+\cap M(s)$ and $P_t=\Phi_+\cap M(t)$. Clause (1) of [[lem-cg-reversed-reflection-product-and-face-spans]] gives $M(s)=\mathbb R e_s$ and $M(t)=\mathbb R e_t$. Every root has $B$-norm one, and $e_s,e_t\in\Phi_+$ ([[thm-cg-root-sign-and-simple-reflection-positivity]] (2)); their reflecting involutions are $s,t$ ([[def-cg-canonical-reflection-homomorphism]]). Since $B(e_s,e_s)=B(e_t,e_t)=1$ ([[def-cg-real-coxeter-form-and-reflection]]), any positive root in either of these lines is the corresponding simple root. Thus $P_s=\{e_s\}$ and $P_t=\{e_t\}$, which are distinct because the simple roots are linearly independent.

[F11] In finite type, any two Coxeter elements are conjugate ([[lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves]] (3)).



## Proof

**Proof technique:** construct the meet from a maximal common face, obtain joins as meets of common upper bounds, then transfer and reduce componentwise.

**Given:** The data above. In the connected case the root complex and root order are those for the bipartite element $\gamma$.

1.1 (Rank one.) Suppose $S=\{s\}$. By [F8], $W$ has at most two elements; the map $s\mapsto-1$ to the group $\{1,-1\}$ satisfies the presentation, so $W=\{1,s\}$. The group is abelian, so $T=\{s\}$, and the bipartite element is $\gamma=s$. By [F7], $\Phi=\{e_s,-e_s\}$, $\Phi_+=\{e_s\}$, the reflection with normal $e_s$ is $s$, and $M(s)=\mathbb R e_s$. Thus $P_1=\emptyset$, $P_s=\{e_s\}$, and $X(s)$ has one vertex $e_s$, while $X(1)$ has empty realization. If either $a=1$ or $b=1$, then $a\wedge b=1$ and both identities hold. Otherwise $a=b=s$, whose only common lower bounds are $1,s$, so $a\wedge b=s$. Its unique maximal simplex is $F=\{e_s\}$ and its reverse reflection product is $R(e_s)=s$. Thus $M(s)=\operatorname{span}(F)=\operatorname{span}(|X(s)|)$ and $P_s=P_s\cap P_s$. This proves every clause of (1) in rank one. [F7, F8, construct, algebra]


1.2 (Identity and empty intersections in rank at least two.) Assume $|S|\ge2$. If $a=1$ or $b=1$, the only element below $1$ is $1$, so $a\wedge b=1$; by [F2], $M(1)=\{0\}$, $P_1=\emptyset$, and $|X(1)|=\emptyset$, so both displayed identities hold. Now suppose $a,b\ne1$ and $P_a\cap P_b=\emptyset$. Any common lower bound $\tau$ has $P_\tau\subseteq P_a\cap P_b=\emptyset$ by transitivity. By [F2], $M(\tau)=\operatorname{span}(P_\tau)=\{0\}$, so $\ell_T(\tau)=0$ by [F1] and $\tau=1$. Thus $1$ is the greatest common lower bound and both identities again hold. To see that this case occurs, take $m(s,t)=3$, $\gamma=st$, $a=s$, $b=t$. By [F9], $st$ has order $3$, so it is neither the identity nor a reflection, since every reflection is conjugate to a simple involution. As it is a product of two reflections, $\ell_T(\gamma)=2$. Also $s^{-1}\gamma=t$ and $t^{-1}\gamma=tst$ are reflections, so $s,t\le_T\gamma$. By [F10], $P_s=\{e_s\}$ and $P_t=\{e_t\}$, which are distinct because the simple roots are linearly independent. Thus $P_s\cap P_t=\emptyset$. [F1, F2, F9, F10, algebra]

1.3 (The nonempty common face in rank at least two.) Assume $|S|\ge2$ and $P_a\cap P_b\ne\emptyset$, set $Y=X(a)$, $Z=X(b)$, and let $C=c[Y]\cap c[Z]$. By [F4], $c[X(a)]=c[P_a]$ and $c[X(b)]=c[P_b]$; each is a positive cone, so $C$ is convex. The common-root set gives a common vertex, and [F4] identifies $|Y\cap Z|=|Y|\cap|Z|$. Choose a maximal simplex $F=\{v_1<\cdots<v_r\}$ of $Y\cap Z$. It is a simplex of $X(\gamma)$, so [F3] gives $\sigma=R(v_r)\cdots R(v_1)\le_T\gamma$ and $\ell_T(\sigma)=r$. By [F5] and the purity conclusion of the preceding item, $M(\sigma)=\operatorname{span}(F)=L:=\operatorname{span}(C)$. Since $C\subseteq c[X(a)]=c[P_a]$ and $\operatorname{span}(P_a)=M(a)$ by [F2], one has $M(\sigma)\subseteq M(a)$; similarly $M(\sigma)\subseteq M(b)$. With $\sigma,a,b\le_T\gamma$, rigidity [F1] gives $\sigma\le_Ta,b$.
Now $P_\sigma\subseteq P_a\cap P_b$ by transitivity. Conversely, each $\alpha\in P_a\cap P_b$ is a common vertex of $Y$ and $Z$, hence belongs to $|Y\cap Z|\subseteq C$ and to $L=M(\sigma)$. Thus $M(t_\alpha)=\operatorname{span}(\alpha)\subseteq M(\sigma)$; since $t_\alpha,\sigma\le_T\gamma$, rigidity gives $t_\alpha\le_T\sigma$, so $\alpha\in P_\sigma$. Hence $P_\sigma=P_a\cap P_b$. If $\tau\le_Ta,b$, then $P_\tau\subseteq P_\sigma$, so $M(\tau)=\operatorname{span}(P_\tau)\subseteq M(\sigma)$ by [F2]; rigidity gives $\tau\le_T\sigma$. Therefore $\sigma=a\wedge b$. Finally, $\operatorname{span}(|Y|\cap|Z|)=\operatorname{span}(C)$ because every nonzero point of the cone normalizes into its sphere section. This proves all nonempty-case identities. [F1, F2, F3, F4, F5, step 1.2, algebra]

2.1 (Joins.) Let $U=\{x\in[1,\gamma]:a\le_Tx,\ b\le_Tx\}$. It is nonempty because $\gamma\in U$, and finite because $W$ is finite. Iterating the binary meet established in steps 1.1–1.3 gives the greatest lower bound $m$ of $U$. Since $a$ and $b$ are lower bounds of every member of $U$, they satisfy $a,b\le_Tm$; and $m\le_Tx$ for every common upper bound $x$. Thus $m$ is the least common upper bound, $a\vee b$. By induction on cardinality, the iterated binary meet of any nonempty finite subset is its greatest lower bound: this is immediate for a singleton, and adjoining one element replaces the existing meet $m$ by $m\wedge x$. This proves (2). [F1, step 1.1, step 1.2, step 1.3, algebra]

3.1 (Conjugacy and independence of $c$.) For any finite-type $W$ and Coxeter elements $c,c'$, [F11] gives $c'=wcw^{-1}$ for some $w\in W$. Conjugation maps $T$ bijectively to itself, so it preserves $\ell_T$ and $\le_T$; its inverse is conjugation by $w^{-1}$. Hence it is an order isomorphism of the two intervals. Also $\rho(wxw^{-1})-\mathrm{id}=\rho(w)(\rho(x)-\mathrm{id})\rho(w)^{-1}$, so $M(wxw^{-1})=\rho(w)M(x)$. An order isomorphism preserves greatest lower bounds and least upper bounds by their defining universal properties, and therefore is a lattice isomorphism once the bipartite interval is known to be a lattice. This proves (4) and transfers (1)–(2) to every Coxeter element in the connected case. [F1, F11, step 2.1, algebra]

4.1 (Reducible systems.) If $S=\emptyset$, then $W=\{1\}$, the interval and the empty product are both one-element lattices. Otherwise use the component decomposition and interval identity [F6]. Each $W_{S_i}$ is a connected finite-type Coxeter group, so its noncrossing interval is a finite lattice by steps 1.1–1.3, 2.1, and 3.1. Componentwise meets and joins make the finite product a lattice. This proves (3) and completes the theorem. [F1, F6, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, algebra] ∎
