---
id: "lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics"
kind: lemma
title: "Finite Coxeter orbit polytopes, face isometries and their cocycle"
status: draft
origin: pipeline
dependency_level: 17
deps: ["def-cg-spherical-nerve-coset-poset-and-davis-realization", "lem-cg-canonical-cell-exposed-faces-and-normal-cones", "def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric", "def-hh-coxeter-matrix-word-group-and-length", "thm-hh-parabolic-minimal-representatives-and-length-additivity", "thm-cg-parabolic-intersections-and-coset-factorization", "def-cg-real-coxeter-form-and-reflection", "def-cg-canonical-reflection-homomorphism", "thm-cg-finite-type-positive-definite-criterion", "lem-cg-reflection-form-invariance-and-rank-two-orders", "def-linear-subspace", "def-linear-combination-and-span", "def-linear-basis", "def-dual-family-associated-to-a-basis", "def-real-and-complex-inner-product-space", "thm-riesz-representation-in-finite-dimensions", "thm-finite-dimensional-orthogonal-decomposition", "def-orthogonal-projection", "def-isometry-and-metric-embedding", "def-linear-isometry-and-isometric-isomorphism", "def-finite-convex-cell-complex-and-linear-subdivision"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, author manuscript of the first edition (Princeton Univ. Press, 2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "§7.3, Definition 7.3.1, Examples 7.3.2, Lemma 7.3.3 with its proof, and the 'General Case' paragraph before Proposition 7.3.4, printed pp. 128-131 (finite Coxeter orbit cells, their face poset and spherical-coset indexing); the projection and face-isometry formulas are proved locally"
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (MSC lecture slides, Tsinghua, 2013)"
      url: "https://people.math.osu.edu/davis.12/papers/Davis-MSC.pdf"
      locator: "§2.3, 'Coxeter zonotopes', printed pp. 12-13 (for finite W_T, P_T=conv(W_Tx), and its Cayley 1-skeleton)"
---

## Statement

Let $(S,m)$ be a Coxeter matrix with $S$ finite, $W$ its presented group ([[def-hh-coxeter-matrix-word-group-and-length]]) with Coxeter form $B$ on $V=\mathbb R^S$ and reflection representation $\rho$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]]), and let $(d_s)_{s\in S}$ be positive real numbers. For $T\in\mathbb S$ ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]]) put $V_T:=\operatorname{span}\{e_s:s\in T\}$ ([[def-linear-subspace]], [[def-linear-combination-and-span]]); since $(W_T,T)$ is a Coxeter system of finite type ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2)) with $W_T$ finite, the restriction of $B$ to $V_T$ is positive definite by [[thm-cg-finite-type-positive-definite-criterion]] (1), so $B_T:=B|_{V_T}$ is an inner product ([[def-real-and-complex-inner-product-space]]). Let $v_s^{(T)}\in V_T$ ($s\in T$) be its $B$-dual basis, and put $$x_T:=\sum_{s\in T}d_s\,v_s^{(T)}\in V_T,\qquad C_T:=\operatorname{conv}(W_T\,x_T)\subseteq V_T.$$

**(1) Cells.** For every spherical $T$, $C_T$ is a compact convex polyhedral cell of dimension $|T|$ inside the Euclidean affine space $(V_T,B_T)$ with $0$ in its interior, a compact convex polyhedral cell in the sense of [[def-finite-convex-cell-complex-and-linear-subdivision]], and its nonempty faces are exactly the sets $\operatorname{conv}(uW_Ux_T)$, $u\in W_T$, $U\subseteq T$, each occurring for exactly one coset $uW_U$; face inclusion agrees with coset inclusion (and the simultaneously reversed face and coset orders also agree). The remaining face is $\emptyset$, which has no coset index. This is [[lem-cg-canonical-cell-exposed-faces-and-normal-cones]] applied to the finite-type system $(W_T,T)$ and the point $x_T$ in the open fundamental chamber $\{v\in V_T:B(v,e_s)>0\text{ for all }s\in T\}$, whose distances to the simple mirrors are $B(x_T,e_s)=d_s$.

**(2) Projections.** For $U\subseteq T$, the $B$-orthogonal projection of $x_T$ onto $V_U$ is $x_U$; equivalently $x_T=x_U+z_{T,U}$ with $z_{T,U}\in V_U^{\perp}\cap V_T$, and $z_{T,U}$ is fixed by $\rho(W_U)$. In particular $x_U$ depends only on $U$ and on the numbers $d_s$ with $s\in U$.

**(3) Face isometries.** For $U\subseteq T$ and $w\in W_T$, the affine map $$\varphi^{T,U}_w\colon V_U\to V_T,\qquad \varphi(v)=\rho(w)(v+z_{T,U}),$$ is a Euclidean isometry of $(V_U,B_U)$ onto the affine span of the face $\operatorname{conv}(wW_Ux_T)$ and carries $C_U$ onto that face. Hence the intrinsic metric of the face $\operatorname{conv}(wW_Ux_T)$ of $C_T$ equals that of $C_U$, and depends only on $U$, the numbers $d_s$ ($s\in U$) and no other choice.

**(4) Cocycle.** For spherical $U\subseteq T\subseteq T'$ and $g_1\in W_T$, $g_2\in W_{T'}$ one has $$\varphi^{T',U}_{g_2g_1}=\varphi^{T',T}_{g_2}\circ\varphi^{T,U}_{g_1},$$ an identity of isometries $V_U\to V_{T'}$; consequently the face identifications of the cells $C_T$ are compatible on common faces and satisfy the cocycle condition of a gluing ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]).

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$, its presented group $W$, the form $B$ and representation $\rho$ on $V=\mathbb R^S$, positive numbers $(d_s)_{s\in S}$, and for each spherical $T$ the space $V_T$ with the form $B_T=B|_{V_T}$, the dual basis $v_s^{(T)}$, the point $x_T$ and the cell $C_T=\operatorname{conv}(W_Tx_T)$.

[F1] The cell lemma: for a finite-type Coxeter system acting on its positive definite reflection space, the orbit polytope of a point of the open chamber is a compact convex polyhedral cell with the listed nonempty faces, norms and cell description ([[lem-cg-canonical-cell-exposed-faces-and-normal-cones]] (1)-(5)); the term compact convex polyhedral cell has the definition in [[def-finite-convex-cell-complex-and-linear-subdivision]].

[F2] For spherical $T$ ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]] (1)), $(W_T,T)$ is a Coxeter system of finite type, $W_T\cap S=T$, and $B_T$ is positive definite; the restriction $\rho|_{W_T}$ is the canonical reflection representation of the subsystem acting on $V_T$ with basis $(e_s)_{s\in T}$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2), [[thm-cg-finite-type-positive-definite-criterion]] (1), [[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]]).

[F3] For every $U\subseteq S$ and $u\in W_U$ one has $\rho(u)V_U=V_U$; every $\rho(w)$ preserves $B$; and for $s\in S$ the reflection formula gives $\rho(s)v=v-2B(v,e_s)e_s$ ([[thm-cg-parabolic-intersections-and-coset-factorization]] (2), [[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2), [[def-cg-canonical-reflection-homomorphism]] (1), [[def-cg-real-coxeter-form-and-reflection]] (3)).

[F4] The coordinate vectors $(e_s)_{s\in T}$ form a basis of $V_T$; their coordinate functionals $e_s^*$ are the dual family ([[def-linear-basis]], [[def-dual-family-associated-to-a-basis]]). The finite-dimensional Riesz theorem for the real inner-product space $(V_T,B_T)$ gives unique vectors $v_s^{(T)}$ with $e_s^*(y)=B(y,v_s^{(T)})$; symmetry gives $B(v_s^{(T)},e_t)=\delta_{st}$. For $y\in V_T$, the difference $y-\sum_{s\in T}B(y,e_s)v_s^{(T)}$ lies in $V_T$ and pairs to zero with every spanning vector $e_t$, so it is zero by positive definiteness. Also, for a subspace $W_0$ of a finite-dimensional inner-product space there is a unique orthogonal decomposition $v=P_{W_0}v+z$ with $z\perp W_0$, and $P_{W_0}v$ is the orthogonal projection ([[thm-riesz-representation-in-finite-dimensions]], [[thm-finite-dimensional-orthogonal-decomposition]], [[def-orthogonal-projection]], [[def-real-and-complex-inner-product-space]]).

[F5] A linear isometry preserves the inner-product norm and hence the induced metric; translation leaves all pairwise distances unchanged, and a bijective isometry identifies the corresponding cell metrics ([[def-linear-isometry-and-isometric-isomorphism]], [[def-isometry-and-metric-embedding]]).

[F6] Gluing data for an isometric polyhedral gluing consist of face isometries subject to the cocycle condition: the composites $C_p\to C_q\to C_r$ and $C_p\to C_r$ agree whenever $p\le q\le r$ ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]).

## Proof

**Proof technique:** direct.

1.1 Fix a spherical $T$. By [F2] the subsystem $(W_T,T)$ is finite with positive definite $B_T$, and $\rho|_{W_T}$ is its canonical representation; the element $x_T=\sum_{s\in T}d_sv_s^{(T)}$ satisfies $B_T(x_T,e_s)=d_s>0$ for every $s\in T$ by [F4], so $x_T$ lies in the open chamber of the subsystem. Applying [F1] to $(W_T,T)$, $B_T$ and $x_T$ gives clause (1): $C_T$ is a compact convex polyhedral cell of dimension $|T|$ with $0$ in its interior, its nonempty faces are exactly the sets $\operatorname{conv}(uW_Ux_T)$ for $u\in W_T$, $U\subseteq T$, each for exactly one coset $uW_U$, and face inclusion agrees with coset inclusion (and the simultaneously reversed face and coset orders also agree). The supplier proves these nonempty faces are exposed, so its face description agrees with the nonempty faces in the polyhedral-cell convention of [F1]; that convention also includes $\emptyset$, which is not any of the nonempty orbit hulls. For $T=\emptyset$, one has $V_T=C_T=\{0\}$, and the faces are $\emptyset$ and $\{0\}$; only the latter is indexed by the unique coset $W_\emptyset=\{1\}$. [given, F1, F2, F4, algebra]

2.1 Let $U\subseteq T$. For every $t\in U$ the dual-basis identity of [F4] gives $B(x_T,e_t)=d_t=B(x_U,e_t)$; hence $B(x_T-x_U,e_t)=0$ for all $t\in U$, so $x_T-x_U\in V_U^{\perp}\cap V_T$. Since $x_U\in V_U$, this is the orthogonal decomposition of $x_T$ along $V_U$, and uniqueness [F4] gives $P_{V_U}x_T=x_U$. Conversely, any decomposition $x_T=x_U+z$ with $x_U\in V_U$ and $z\in V_U^\perp\cap V_T$ is that same unique orthogonal decomposition, so its $V_U$-component is the projection. Put $z_{T,U}:=x_T-x_U$. [step 1.1, F4, algebra]

3.1 Let $U\subseteq T$ and $w\in W_T$. The affine map $\varphi^{T,U}_w(v)=\rho(w)(v+z_{T,U})$ has linear part $\rho(w)|_{V_U}$, which maps $V_U$ into $V_T$ by [F3] applied to $T$, and preserves $B$ by [F3]; translation then shows it is an isometry onto $\rho(w)z_{T,U}+\rho(w)V_U$ by [F5]. To identify this image with the affine span of the face, first note that for every $t\in U$, [step 1.1] and the reflection formula give $\rho(t)x_T-x_T=-2B(x_T,e_t)e_t=-2d_te_t\in V_U$. Induction on a word $u=vt$ in generators of $W_U$ gives $\rho(u)x_T-x_T=\rho(v)(\rho(t)x_T-x_T)+(\rho(v)x_T-x_T)\in V_U$, because $\rho(v)V_U=V_U$ by [F3]. Thus $W_Ux_T\subseteq x_T+V_U$, while the differences $\rho(s)x_T-x_T=-2d_se_s$ for $s\in U$ span $V_U$ since $d_s>0$ and the $e_s$ are linearly independent; hence $\operatorname{aff}(W_Ux_T)=x_T+V_U$. Applying $\rho(w)$ gives $\operatorname{aff}(wW_Ux_T)=\rho(w)x_T+\rho(w)V_U$. Since $x_T=x_U+z_{T,U}$ by [step 2.1] and $x_U\in V_U$, this affine span is $\rho(w)z_{T,U}+\rho(w)V_U$, the image of $\varphi^{T,U}_w$. Finally, for $v,v'\in V_U$, B-invariance gives $B_T(\varphi(v)-\varphi(v'),\varphi(v)-\varphi(v'))=B_U(v-v',v-v')$, so the affine isometry preserves the induced Euclidean distances. [step 1.1, step 2.1, F3, F4, F5, algebra]

3.2 The vector $z_{T,U}$ is fixed by $\rho(W_U)$: for $s\in U$ the reflection formula [F3] gives $\rho(s)x_T=x_T-2B(x_T,e_s)e_s$ and $\rho(s)x_U=x_U-2B(x_U,e_s)e_s$, and the two pairings are equal to $d_s$ by [step 2.1], so subtracting yields $\rho(s)z_{T,U}=z_{T,U}$; since $U$ generates $W_U$, this gives $\rho(u)z_{T,U}=z_{T,U}$ for every $u\in W_U$. Moreover $x_U=\sum_{s\in U}d_sv_s^{(U)}$ is built from $U$ and the numbers $d_s$ with $s\in U$ only, so the same holds for the projected point of (2). [step 2.1, F2, F3, algebra]

4.1 The map $\varphi^{T,U}_w$ carries $C_U$ onto the face $\operatorname{conv}(wW_Ux_T)$: for $u\in W_U$ one has $\varphi^{T,U}_w(\rho(u)x_U)=\rho(w)\rho(u)(x_U+z_{T,U})=\rho(wu)(x_U+z_{T,U})=\rho(wu)x_T$, because $\rho(u)z_{T,U}=z_{T,U}$ by [step 3.2]; as $u$ runs over $W_U$, $wu$ runs over the coset $wW_U$, and $\varphi$ is affine, so it maps the convex hull $C_U$ onto the convex hull of those points. Since $\varphi^{T,U}_w$ is an isometry [step 3.1], the intrinsic metric of the face equals that of $C_U$ by [F5]; and $C_U$ is built from $U$ and the numbers $d_s$ with $s\in U$ only, by [step 3.2]. [step 1.1, step 3.2, step 3.1, F5]

4.2 Let $U\subseteq T\subseteq T'$ be spherical. Then $z_{T,U}+z_{T',T}=z_{T',U}$: both sides belong to $V_U^{\perp}\cap V_{T'}$, and $x_{T'}=x_T+z_{T',T}=x_U+z_{T,U}+z_{T',T}$ while also $x_{T'}=x_U+z_{T',U}$; the orthogonal decomposition of $x_{T'}$ along $V_U$ in $(V_{T'},B_{T'})$ is unique by [F4], so the two complements agree. [step 2.1, step 3.2, F4, algebra]

5.1 Cocycle. Let $U\subseteq T\subseteq T'$ be spherical, $g_1\in W_T$ and $g_2\in W_{T'}$. By [step 3.2] applied to the pair $T\subseteq T'$, the vector $z_{T',T}$ is fixed by $\rho(W_T)$, in particular by $\rho(g_1)$. Hence, using [step 4.2], $$\varphi^{T',T}_{g_2}\bigl(\varphi^{T,U}_{g_1}(v)\bigr)=\rho(g_2)\bigl(\rho(g_1)(v+z_{T,U})+z_{T',T}\bigr)=\rho(g_2g_1)\bigl(v+z_{T,U}+\rho(g_1)^{-1}z_{T',T}\bigr)=\rho(g_2g_1)(v+z_{T',U})=\varphi^{T',U}_{g_2g_1}(v).$$ Thus the face isometries of the cells $C_T$ satisfy the cocycle condition of gluing data [F6] and are compatible on common faces: a coset $w'W_U\subseteq wW_T$ carries both the identification of the face of $C_{wW_T}$ with $C_{w'W_U}$ and its identification through any intermediate cell, and the two composites agree by the displayed identity. [step 3.2, step 4.2, F6, algebra]

6.1 The four clauses are proved: (1) is [step 1.1], (2) is [step 2.1] with [step 3.2], (3) is [step 3.1] with [step 4.1], and (4) is [step 5.1]. No Choice is used: all hulls are finite, the subsystems $W_T$ are finite, and the only identifications are explicit isometries. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, given] ∎
