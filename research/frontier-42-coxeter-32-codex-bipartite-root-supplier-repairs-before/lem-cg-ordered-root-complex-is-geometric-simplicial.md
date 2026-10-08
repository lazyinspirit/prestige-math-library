---
id: lem-cg-ordered-root-complex-is-geometric-simplicial
kind: lemma
title: "The factorization criterion, linear independence of the faces, and the geometric simplicial structure of X(sigma)"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 20
deps: [def-cg-brady-watt-ordered-spherical-root-complex, lem-cg-ordered-root-pairings-and-simple-systems, lem-cg-steinberg-bipartite-root-enumeration, def-cg-bipartite-coxeter-element-and-root-recursion, def-cg-real-coxeter-form-and-reflection, def-cg-canonical-reflection-homomorphism, def-cg-finite-reflection-arrangement-and-spherical-chambers, thm-cg-root-sign-and-simple-reflection-positivity, thm-cg-root-inversion-formulas-and-strong-exchange, def-cg-reflection-length-absolute-order-and-moved-space, lem-cg-orthogonal-wall-form-and-subspace-restriction, thm-cg-carter-reflection-length-and-absolute-order, def-abstract-simplicial-complex, def-geometric-realization-of-an-abstract-simplicial-complex, def-cg-spherical-gram-simplex-and-angular-link, lem-cg-spherical-simplex-existence-and-link-gram-formula, def-linear-basis, prop-a-finite-simplicial-complex-has-compact-hausdorff-realization, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-metric-hausdorff-separation, def-compact-space, def-continuous-map-top, thm-continuity-characterisations-top]
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Thomas Brady and Colum Watt, Lattices in finite real reflection groups (arXiv:math/0501502, 29-page PDF)"
      url: "https://arxiv.org/pdf/math/0501502"
      locator: "Lemma 3.9 with proof, Note 4.2, Theorem 7.4 with proof and Corollary 7.5, printed pp. 8-10 and 21-22; the identity R(rho_i)...R(rho_{i+n-1}) = gamma^{-1} of Note 3.1, printed p. 4"
    - title: "Robert Steinberg, Finite reflection groups, Transactions of the American Mathematical Society 91 (1959) 493-504 (AMS free digital archive, 10-page PDF)"
      url: "https://www.ams.org/journals/tran/1959-091-03/S0002-9947-1959-0106428-2/S0002-9947-1959-0106428-2.pdf"
      locator: "Corollary 4.6 (the reflecting hyperplanes and their order along the Coxeter line), printed pp. 497-498"
    - title: "Bill Casselman, Essays on Coxeter groups: Coxeter elements in finite Coxeter groups (author-hosted PDF, 12 pages)"
      url: "https://www.math.ubc.ca/~cass/research/pdf/Element.pdf"
      locator: "Sections 3.8-4, printed pp. 8-10: the reflection structure of the Coxeter plane and the region between consecutive reflection lines"
    - title: "Sergey Fomin and Nathan Reading, Root systems and generalized associahedra, IAS/Park City Mathematics Series lecture notes (arXiv:math/0505518)"
      url: "https://arxiv.org/pdf/math/0505518"
      locator: "Section 2.5, printed pp. 22-24, for the ambient conventions"
verification:
  precheck: pending
---

## Statement

With the notation of [[def-cg-brady-watt-ordered-spherical-root-complex]] and the conclusions of [[lem-cg-ordered-root-pairings-and-simple-systems]]:

**(1) Factorization criterion.** For any strictly increasing tuple $a_1<a_2<\dots<a_k$ of roots in $\Phi_+$, including the empty tuple when $k=0$,
$$\ell_T\bigl(R(a_1)R(a_2)\cdots R(a_k)c\bigr)=n-k\iff \mu(a_i)\cdot a_j=0\quad\text{for every }i>j.$$

**(2) Linear independence and spherical simplices.** If $F=\{a_1<\dots<a_k\}$ is a nonempty simplex of $X(c)$, then $a_1,\dots,a_k$ are linearly independent and lie in a common open halfspace, namely $\{x:B(x,f)>0\}$ for every $f\in\mathcal C^\circ$. Thus $c[F]$ is a pointed simplicial cone and $|F|:=c[F]\cap S^{n-1}$ is a spherical simplex of dimension $k-1$. The empty face has $c[\emptyset]=\{0\}$ and $|\emptyset|=\emptyset$. For any increasing tuple of positive roots, its set is a simplex of $X(c)$ if and only if its reverse product $R(a_k)\cdots R(a_1)$ lies below $c$ in absolute order and has reflection length $k$.

**(3) The complex structure and its dimension.** For every $\sigma\le_Tc$, the full subcomplex $X(\sigma)$ is a finite simplicial complex of dimension $\ell_T(\sigma)-1$; in particular $X(1)=\{\emptyset\}$ has dimension $-1$. Each $X(\sigma,\rho)$ is a simplicial complex. If $P_\sigma=\{\tau_1<\dots<\tau_t\}$, then
$$X(\sigma,\tau_i)\subseteq X(\sigma,\tau_{i+1})\quad(1\le i<t),$$
and the simplices of $X(\sigma,\tau_{i+1})$ not already in $X(\sigma,\tau_i)$ are exactly the cones $B\cup\{\tau_{i+1}\}$ over faces $B$ of $X(\sigma,\tau_i)$ whose vertices all lie in $\mu(\tau_{i+1})^\perp$. The empty face is allowed as a base, giving the new singleton vertex.

**(4) Geometric intersections are common faces.** For any two faces $F,F'$ of $X(\sigma)$,
$$c[F]\cap c[F']=c[F\cap F'].$$
Consequently, the normalized cone map from the ordinary geometric realization of $X(\sigma)$ to $S^{n-1}$ is an embedding onto $|X(\sigma)|$, and this image is a finite union of spherical simplices that pairwise meet in common faces. No Choice is used.

## Facts & Assumptions

**Given:** An irreducible finite-type Coxeter system $(W,S)$ with $|S|=n\ge1$, the bipartite Coxeter element $c$, its linear action $C_V=\rho(c)$, the ordered positive roots $\Phi_+$, the vectors $\mu_i$ and map $\mu$ of [[def-cg-bipartite-coxeter-element-and-root-recursion]], [[lem-cg-steinberg-bipartite-root-enumeration]], and [[lem-cg-ordered-root-pairings-and-simple-systems]]. Let $R(a)$ be the reflection with root normal $a$, and use the absolute order, moved spaces and positive-cone complexes of [[def-cg-brady-watt-ordered-spherical-root-complex]].

[F1] $C_V-\mathrm{id}_V$ is invertible, $\rho_{i+n}=C_V\rho_i$, and $\Phi_+=\{\rho_1,\dots,\rho_{nh/2}\}$. Hence $M(c)=V$. [[lem-cg-steinberg-bipartite-root-enumeration]] (3)-(4)

[F2] The map $\Phi_+\to T$, $a\mapsto t_a$, is a bijection; $\rho(t_a)=R(a)$, and distinct positive roots determine distinct reflections. [[def-cg-canonical-reflection-homomorphism]] (1)-(2) [[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)

[F3] Since $W$ is finite, $B$ is positive definite and every $\rho(w)$ is a $B$-isometry. Carter's formula gives $\ell_T(w)=\dim M(w)=n-\dim F(w)$ for every $w$. Absolute order is the partial order defined by reflection-length additivity; it has the triangle inequality and conjugation invariance, and $u\le_Tv$ implies $M(u)\subseteq M(v)$ and $F(v)\subseteq F(u)$. [[def-cg-reflection-length-absolute-order-and-moved-space]] [[thm-cg-carter-reflection-length-and-absolute-order]] (1)-(2)

[F4] For orthogonal maps, $M(A)=F(A)^\perp$. [[lem-cg-orthogonal-wall-form-and-subspace-restriction]] (1)

[F5] Every subspace $U\subseteq M(A)$ has an orthogonal restriction $A_U\le_{\mathrm O}A$ with moved space $U$, and every line is the moved space of a unique orthogonal reflection. Carter's formula transfers this restriction order to absolute order for group elements. [[lem-cg-orthogonal-wall-form-and-subspace-restriction]] (3)-(4) [[thm-cg-carter-reflection-length-and-absolute-order]] (1)

[F6] Writing $a=\rho_i$ and using $\mu(\rho_i)=\mu_i$, one has $\mu(a)\in F(R(a)c)$, this fixed space is a line, and $\mu(a)\cdot a=1$. Also $\mu_i\cdot\rho_j\ge0$ if $i\le j$, $\mu_i\cdot\rho_j\le0$ if $i>j$ within the positive-root range, and $\mu_{i+t}\cdot\rho_i=0$ for $1\le t\le n-1$. [[lem-cg-steinberg-bipartite-root-enumeration]] (4) [[lem-cg-ordered-root-pairings-and-simple-systems]] (1)-(2)

[F7] Every root has $B$-norm $1$; every positive root is a nonzero vector with nonnegative simple-root coordinates; and for every $f\in\mathcal C^\circ$ and $a\in\Phi_+$, $B(f,a)>0$. [[thm-cg-root-sign-and-simple-reflection-positivity]] (1)-(2)

[F8] For a root normal $a$ of norm $1$, $R(a)(x)=x-2B(x,a)a$; it fixes the codimension-one kernel of $B(-,a)$ and negates $a$, so its determinant is $-1$. [[def-cg-real-coxeter-form-and-reflection]] (3)

[F9] For $\sigma\ne1$, $P_\sigma$ is the positive-root set of the reflection subgroup $W_\sigma$ and contains the simple system $\Delta=\{\delta_1,\dots,\delta_k\}$. The roots $\varepsilon_i=R(\delta_1)\cdots R(\delta_{i-1})\delta_i$ are positive, factor $\sigma=R(\varepsilon_k)\cdots R(\varepsilon_1)$, and their increasing reordering $\theta_1<\dots<\theta_k$ has reverse product below $c$ with reflection length $k=\ell_T(\sigma)$. [[lem-cg-ordered-root-pairings-and-simple-systems]] (4)(i)-(ii),(iv)

[F10] $X(c)$ has the ordered pairwise-edge definition, $X(\sigma)$ and $X(\sigma,\rho)$ are full subcomplexes with $X(\sigma,\tau_i)$ on vertices $\tau_1,\dots,\tau_i$, and $c[\emptyset]=\{0\}$. [[def-cg-brady-watt-ordered-spherical-root-complex]] (1)-(3)

[F11] An abstract simplicial complex contains the empty simplex and is closed under taking subsets; its geometric realization has the weak topology determined by its finite simplices. [[def-abstract-simplicial-complex]] [[def-geometric-realization-of-an-abstract-simplicial-complex]]

[F12] A positive-definite Gram matrix with diagonal $1$ defines a spherical simplex; for linearly independent unit vectors its cone section of the sphere is a spherical simplex of dimension one less than the number of vertices, and the radial normalization of the Euclidean simplex onto that section is a homeomorphism. [[def-cg-spherical-gram-simplex-and-angular-link]] [[lem-cg-spherical-simplex-existence-and-link-gram-formula]] (i)-(ii)

[F13] The vectors $\beta_s$ form the $B$-dual basis to the simple roots $\alpha_s$, so $B(\sum_s\beta_s,\alpha_t)=1$ for every $t\in S$. [[def-cg-bipartite-coxeter-element-and-root-recursion]] (3)

[F14] A list is linearly independent exactly when its only vanishing linear combination has all coefficients zero; the empty set is a basis exactly in the zero space. [[def-linear-basis]]

[F15] The ordinary realization of a finite abstract simplicial complex is compact [[prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]]. Closed subsets of compact spaces are compact [[thm-closed-subspace-of-a-compact-space-is-compact]]. A continuous image of a compact space is compact: pull back an open cover using the open-preimage characterization of continuity, take a finite subcover, and map those opens forward [[def-compact-space]] [[def-continuous-map-top]] [[thm-continuity-characterisations-top]]. Compact subsets of Hausdorff spaces are closed [[thm-compact-subset-of-a-hausdorff-space-is-closed]].

[F16] A metric space is Hausdorff. [[thm-metric-hausdorff-separation]]

[F17] The chamber interior $\mathcal C^\circ$ is the transfer, under $v\mapsto B(v,\cdot)$, of the dual chamber interior. [[def-cg-finite-reflection-arrangement-and-spherical-chambers]]

## Proof

**Proof technique:** derive the ordered-factorization test from absolute order and the fixed-space vectors, then use it to identify the faces, their dimensions, and the intersections of their positive cones.

1.1 By [F1], $M(c)=V$ and $\ell_T(c)=n$. For every $a\in\Phi_+$, [F2] gives $t_a$ with $\rho(t_a)=R(a)$, and [F8] gives its moved line $\mathbb R a$. Apply the subspace-restriction theorem [F5] to this line inside $M(c)$; its orthogonal restriction is the unique reflection with normal $a$, so Carter's formula gives $t_a\le_Tc$. Thus every positive-root reflection lies below $c$. [F1, F2, F3, F5, F8]

1.2 Let $q=t_1\cdots t_m$ be a reduced reflection factorization. Each factor $t_r$ lies below $q$: if $q=x t_r y$, then $t_rq=(t_rx t_r)y$ is a product of $m-1$ reflections, so the triangle inequality forces $\ell_T(t_rq)=m-1$. If $r<s$, the product $t_rt_s$ has reflection length $2$ when $t_r\ne t_s$: their canonical images are distinct involutions with distinct moved lines, so $\rho(t_r)\rho(t_s)\ne I$; its determinant is $+1$, whereas every reflection has determinant $-1$. Thus $t_rt_s$ is neither the identity nor a reflection, and its reflection length is $2$. Write $q=x t_r y t_s z$. Then $(t_rt_s)^{-1}q=t_s t_r x t_r y t_s z=(t_s t_r x t_r t_s)(t_s y t_s)z,$ a product of $m-2$ reflections. The triangle inequality gives the reverse lower bound $m-2$, so $t_rt_s\le_Tq$. [F2, F3, F8]

2.1 Let $q:=R(a_k)\cdots R(a_1)$. If $\ell_T(R(a_1)\cdots R(a_k)c)=n-k$, then $\ell_T(q)\le k$ and [F1], [F3] give $n=\ell_T(c)\le\ell_T(q)+\ell_T(q^{-1}c)\le k+(n-k)=n.$ Thus $\ell_T(q)=k$ and $q\le_Tc$, so the factorization of $q$ is reduced. For $i>j$, step 1.2 gives $R(a_i)R(a_j)\le_Tq\le_Tc$. Since $R(a_i)\le_Tc$ by step 1.1, $\ell_T(R(a_i)c)=n-1$; also $\ell_T(R(a_j)R(a_i)c)=n-2$. Hence $R(a_j)\le_TR(a_i)c$. By [F2] and [F8] the moved line of $R(a_j)$ is $\mathbb R a_j$; by [F3] and [F4] it lies in $M(R(a_i)c)=F(R(a_i)c)^\perp$. The vector $\mu(a_i)$ spans that fixed line by [F6], so $\mu(a_i)\cdot a_j=0$. [F1, F2, F3, F4, F6, F8, step 1.1, step 1.2]

2.2 Conversely, suppose $\mu(a_i)\cdot a_j=0$ for all $i>j$. The matrix $D=(\mu(a_i)\cdot a_j)_{i,j=1}^k$ is upper triangular with diagonal $1$ by [F6]; therefore both the roots $a_i$ and the vectors $\mu(a_i)$ are linearly independent, so $k\le n$. For $k=0$ the conclusion is $\ell_T(c)=n$ by [F3], so assume $k\ge1$. Define $q_{k+1}=1$. Descending on $i$, assume $q_{i+1}:=R(a_k)\cdots R(a_{i+1})\le_Tc$ with length $k-i$. Each factor $R(a_j)$, $j>i$, is below $q_{i+1}$ by the first claim of step 1.2. Complements reverse order: if $u\le_Tv\le_Tw$, transitivity gives $u\le_Tw$; writing $v=ux$ and $w=vy$ with additive reflection lengths then gives $\ell_T(xy)=\ell_T(x)+\ell_T(y)$, and conjugation invariance gives $\ell_T(y^{-1}xy)=\ell_T(x)$, hence $y=v^{-1}w\le_Tu^{-1}w=xy$. Put $v:=q_{i+1}^{-1}c$. For every $j>i$, complement reversal gives $v\le_TR(a_j)c$, and [F6] puts $\mu(a_j)$ in $F(R(a_j)c)\subseteq F(v)$. These $k-i$ independent vectors form a basis of $F(v)$: Carter's formula gives $\dim F(v)=n-\ell_T(v)=n-(n-k+i)=k-i.$ The assumed zero pairings put $a_i$ in $F(v)^\perp=M(v)$ by [F4]. Restricting $\rho(v)$ to the line $\mathbb R a_i$ gives the orthogonal reflection $R(a_i)=\rho(t_{a_i})$ by [F2]; the restriction theorem [F5] and Carter's formula therefore give $R(a_i)\le_Tv$. Write $v=R(a_i)z$ with $\ell_T(v)=1+\ell_T(z)$. Then $c=q_{i+1}R(a_i)z$, whose displayed $k-i+1+\ell_T(z)=n$ reflection factors force the factorization to be reduced; consequently $q_i:=q_{i+1}R(a_i)\le_Tc$ and $\ell_T(q_i)=k-i+1$. At $i=1$ this yields $\ell_T(q)=k$ and $\ell_T(q^{-1}c)=n-k$. This proves (1). [F2, F3, F4, F5, F6, F14, step 1.2]

3.1 For $i<j$, the two-root instance of (1) says $R(a_j)R(a_i)\le_Tc\quad\Longleftrightarrow\quad\mu(a_j)\cdot a_i=0,$ since the product of two distinct positive-root reflections has length $2$ by step 1.2. If $F=\{a_1<\dots<a_k\}$ is a simplex, every pair is an edge by [F10], so these pairwise equivalences make $D=(\mu(a_i)\cdot a_j)$ upper triangular with diagonal $1$. Pairing a vanishing combination $\sum_j\lambda_j a_j=0$ with each $\mu(a_i)$ gives $D\lambda=0$; hence every $\lambda_j=0$. Thus the vertices of every nonempty face are linearly independent. Conversely, if the reverse product of an increasing tuple lies below $c$ and has length $k$, step 1.2 applied to its reduced factorization shows each pair product is below $c$, so the tuple is a simplex. The empty tuple is the empty simplex by [F10]. [F2, F3, F6, F10, F14, step 1.2, step 2.1, step 2.2]

4.1 Let $f_0:=\sum_{s\in S}\beta_s$, with the dual vectors from [F13]. Then $B(f_0,\alpha_s)=1$ for every simple root; since each positive root is a nonzero nonnegative combination of simple roots by [F7], every positive root has positive pairing with $f_0$. Also [F7] gives positive pairing with every $f\in\mathcal C^\circ$ by the chamber transfer [F17]. For a nonempty face $F$, its independent unit roots have a positive-definite Gram matrix with diagonal $1$. By [F12], $c[F]\cap S^{n-1}$ is the associated spherical simplex of dimension $|F|-1$. The independence of the cone generators makes $c[F]$ pointed and simplicial. For the empty face, [F10] gives $c[\emptyset]=\{0\}$ and its sphere section is empty. [F3, F7, F10, F12, F13, F17, step 3.1]

4.2 The roots of $P_\sigma$ lie in $M(\sigma)$: if $a\in P_\sigma$, then $t_a\le_T\sigma$ by definition; [F2] identifies its linear reflection, [F8] gives $M(t_a)=\mathbb R a$, and [F3] gives $M(t_a)\subseteq M(\sigma)$. Thus a face of $X(\sigma)$ has at most $\dim M(\sigma)=\ell_T(\sigma)$ vertices by step 3.1 and Carter's formula. If $\sigma=1$, then $P_\sigma=\emptyset$ and $X(1)=\{\emptyset\}$ has dimension $-1$. If $\sigma\ne1$, [F9] gives $\Delta=\{\delta_1,\dots,\delta_k\}\subseteq P_\sigma$ and $\varepsilon_i=R(\delta_1)\cdots R(\delta_{i-1})\delta_i$. Each $R(\delta_j)$ lies in the reflection subgroup $W_\sigma$ of [F9], so every $\varepsilon_i$ is a root of that subgroup; its positivity from [F9] puts it in $P_\sigma$. Hence the increasing reordering $\theta_1<\dots<\theta_k$ lies in $P_\sigma$. Its reverse product is below $c$ with length $k=\ell_T(\sigma)$ by [F9], so step 3.1 makes it a $k$-vertex simplex. Therefore $\dim X(\sigma)=k-1$. Finiteness follows from finiteness of $\Phi_+$ in [F1], and the full-subcomplex and $X(\sigma,\rho)$ claims follow from [F10]. [F1, F2, F3, F8, F9, F10, step 3.1]

4.3 Let $K_i:=X(\sigma,\tau_i)$. By [F10], $K_i$ has vertices $\tau_1,\dots,\tau_i$. Any new simplex of $K_{i+1}$ must contain the new vertex $\tau_{i+1}$. Its other vertices form a face $B$ of $K_i$, and the two-root criterion of step 3.1 says each such vertex $b$ is joined to $\tau_{i+1}$ exactly when $\mu(\tau_{i+1})\cdot b=0$. Conversely, any face $B$ of $K_i$ with all vertices in this hyperplane gives a simplex $B\cup\{\tau_{i+1}\}$. This includes $B=\emptyset$, proving the cone-over-link description and the nested inclusions. [F6, F10, step 3.1]

5.1 Put $K_0:=\{\emptyset\}$ and induct on $i$ to prove the cone intersection formula for all faces of $K_i$. At $i=0$ both cones equal $\{0\}$. Suppose the formula holds at $i$ and consider faces of $K_{i+1}$. If both are in $K_i$, use induction. Otherwise each new face has the form $B\cup\{\tau_{i+1}\}$ with $B\in K_i$ and every vertex of $B$ orthogonal to $\mu(\tau_{i+1})$, by step 4.3. For a cone point in such a face, its coefficient on $\tau_{i+1}$ is its pairing with $\mu(\tau_{i+1})$, because $\mu(\tau_{i+1})\cdot\tau_{i+1}=1$ by [F6] and its pairings with the base vertices are zero. Every old vertex $\tau_j$, $j\le i$, has $\mu(\tau_{i+1})\cdot\tau_j\le0$ by [F6]. Therefore a cone on an old face intersects a cone with apex $\tau_{i+1}$ only where the apex coefficient is zero; there the induction hypothesis identifies the intersection with the cone on the common base face. For two faces both containing the apex, equality of a common cone point gives equality of its apex coefficients after pairing with $\mu(\tau_{i+1})$, and then equality of the base cone points; induction identifies their base intersection. In each case the intersection is exactly the cone on the common face. Since every face of $X(\sigma)$ belongs to $K_t$, this proves the formula in (4). [F6, F10, step 4.3]

6.1 Define the normalized cone map on a barycentric point of the geometric realization by $\iota\bigl((\lambda_v)_{v\in V(F)}\bigr):=\frac{\sum_v\lambda_vv}{\left\|\sum_v\lambda_vv\right\|_B},\qquad \lambda_v\ge0,\quad\sum_v\lambda_v=1.$ The denominator is nonzero because $B(f_0,v)>0$ for every positive root by step 4.1. Its restriction to each simplex is a homeomorphism onto the corresponding spherical simplex by [F12], and it is continuous globally by the weak-topology definition [F11]. If two such images agree, the two positive combinations lie on the same ray; step 5.1 puts that ray in the cone on the common face, and linear independence of that face plus the barycentric sum-one condition makes the original points equal. Thus $\iota$ is a continuous bijection onto $|X(\sigma)|$. By [F1] and step 4.2, $X(\sigma)$ is a finite abstract simplicial complex, so its ordinary realization is compact by [F15]. If $A$ is closed in that realization, [F15] makes $A$ compact; the open-cover argument in [F15] makes $\iota[A]$ compact, and it is closed in the Hausdorff sphere by [F15] and [F16]. Thus $\iota$ is a closed continuous bijection onto its image and therefore a topological embedding. No Choice is used: the only compactness input is [F15], whose finite-complex proof reduces to finite-dimensional Heine-Borel. [F1, F10, F11, F12, F15, F16, step 4.1, step 4.2, step 5.1] ∎
