---
id: lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds
kind: lemma
title: "Rational cohomology scalar comparison on compact smooth manifolds"
status: draft
origin: pipeline
dependency_level: 8
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice
  - thm-cellular-homology-computes-singular-homology
  - def-oriented-cellular-chain-group
  - def-cellular-homology
  - cor-homotopic-maps-induce-the-same-map-on-singular-homology
  - def-singular-simplex-and-singular-chain-group-with-coefficients
  - def-singular-cochain-complex-with-coefficients
  - def-singular-cohomology-with-coefficients
  - thm-associativity-of-balanced-tensor-products
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - def-singular-cup-product-on-cochains
  - prop-cup-product-is-natural-unital-and-associative
  - thm-de-rham-theorem
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press (author-hosted electronic version, 560 pp.); §3.1 printed pp. 190-197 (Lemma 3.1, Theorem 3.2, Corollaries 3.3-3.4, Theorem 3.5) and §3.3 printed pp. 241-243 (fundamental class, Theorem 3.26)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 18 'The Hodge decomposition' (October 31), 6 pp.; Corollaries 18.1-18.4, Theorem 18.5 (18.6), Corollary 18.7, Proposition 18.12 (∂∂̄-lemma), cohomological Lefschetz decomposition"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"
    - title: "Pierre Deligne, Théorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57; (2.1.10)-(2.1.17) printed pp. 26-27 (Hodge structures, Tate twist, orientations, polarizations), (2.2.1) printed p. 27 (spectral sequence of a compact Kähler manifold), Lemma (4.2.3) printed p. 44"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume AC. For a compact smooth manifold $X$, the natural coefficient maps
induce isomorphisms $H^k(X;\mathbb Q)\otimes_{\mathbb Q}F\cong H^k(X;F)$ for
every characteristic-zero field $F$, finite-dimensional in each degree. For
$F=\mathbb R,\mathbb C$ these identify singular cohomology with the real or
complex de Rham cohomology. They preserve cup products and are natural for maps
between such manifolds. No ordered-field or positivity structure is asserted
for a general $F$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a compact smooth manifold $X$; all homology
and cohomology below is singular with the stated coefficients.

[F1] Under AC the countable choice principle $\mathrm{AC}_\omega$ holds, and
every compact smooth manifold has the homotopy type of a finite CW complex
([[thm-choice-implies-dependent-implies-countable-choice]],
[[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]]).

[F2] Homotopic maps induce the same homomorphism on singular homology with any
coefficients ([[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]).

[F3] For every CW complex $K$ and abelian group $G$, cellular homology computes
singular homology, $H_n^{\mathrm{cell}}(K;G)\cong H_n(K;G)$, naturally for
cellular maps ([[thm-cellular-homology-computes-singular-homology]]); the
cellular chain groups are $C_n^{\mathrm{cell}}(K;G)=H_n(K^n,K^{n-1};G)$, a
direct sum of one copy of $G$ per $n$-cell, and
$H_n^{\mathrm{cell}}=\ker d_n/\operatorname{im}d_{n+1}$
([[def-oriented-cellular-chain-group]], [[def-cellular-homology]]).

[F4] Singular chains with coefficients are
$C_n(X;G)=C_n(X;\mathbb Z)\otimes_{\mathbb Z}G$
([[def-singular-simplex-and-singular-chain-group-with-coefficients]]); singular
cochains are $C^n(X;G)=\operatorname{Hom}_{\mathbb Z}(C_n(X;\mathbb Z),G)$ with
coboundary $\delta\varphi=\varphi\circ\partial$ and
$H^n(X;G)=\ker\delta^n/\operatorname{im}\delta^{n-1}$
([[def-singular-cochain-complex-with-coefficients]],
[[def-singular-cohomology-with-coefficients]]). For modules the tensor product
is associative, $(M\otimes_RN)\otimes_SP\cong M\otimes_R(N\otimes_SP)$
naturally ([[thm-associativity-of-balanced-tensor-products]]).

[F5] For a field $\kappa$ and any space, evaluation is a natural isomorphism
$H^n(X;\kappa)\cong\operatorname{Hom}_\kappa(H_n(X;\kappa),\kappa)$
([[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]).

[F6] The singular cup product is defined on cochains by the front/back formula
$(\varphi\smile\psi)(\sigma)=\varphi(\sigma[0,\dots,p])\,\psi(\sigma[p,\dots,p+q])$,
$R$-bilinearly for a commutative unital coefficient ring $R$
([[def-singular-cup-product-on-cochains]]); cup product is associative and
pullback is a unital graded-ring homomorphism
([[prop-cup-product-is-natural-unital-and-associative]]).

[F7] Assume $\mathrm{AC}_\omega$. Integration of forms gives a natural
isomorphism of unital graded real algebras from real de Rham cohomology to
$H^*_{\mathrm{sing}}(X;\mathbb R)$ ([[thm-de-rham-theorem]]); complex-valued
forms are the complex-linear extension of the real forms, so the complex de
Rham complex is $\Omega^*_{\mathbb R}(X)\otimes_{\mathbb R}\mathbb C$ with
differential $d\otimes1$
([[def-compact-kahler-manifold-and-hodge-polarization-conventions]]).

## Proof

1.1 By [F1] there are a finite CW complex $K$ and maps $h:X\to K$, $g:K\to X$ with $g\circ h$ homotopic to $\mathrm{id}_X$ and $h\circ g$ homotopic to $\mathrm{id}_K$. Homotopy invariance [F2] gives $g_*h_*=(g\circ h)_*=\mathrm{id}$ and $h_*g_*=(h\circ g)_*=\mathrm{id}$ on singular homology with any coefficients, so $h_*:H_n(X;\kappa)\to H_n(K;\kappa)$ is an isomorphism for every $n$ and every coefficient field $\kappa$. For a field $\kappa$ each cellular chain group $C_n^{\mathrm{cell}}(K;\kappa)$ is a direct sum of one copy of $\kappa$ per $n$-cell [F3], and the finite CW complex $K$ has finitely many cells, so $C_n^{\mathrm{cell}}(K;\kappa)$ is a finite-dimensional $\kappa$-vector space and its subquotient $H_n^{\mathrm{cell}}(K;\kappa)=\ker d_n/\operatorname{im}d_{n+1}$ is finite-dimensional as well [F3]; by cellular homology equals singular homology [F3], $H_n(K;\kappa)$ and hence $H_n(X;\kappa)$ are finite-dimensional. In particular $H_n(X;\mathbb Q)$ and $H_n(X;\mathbb R)$ are finite-dimensional for every $n$. [F1, F2, F3, given, algebra]

1.2 Let $k$ be a field, let $F$ be a $k$-vector space, and let $D_*$ be a chain complex of $k$-vector spaces with differential $\partial$, cycles $Z_n=\ker\partial_n$ and boundaries $B_n=\operatorname{im}\partial_{n+1}$. Under AC choose $k$-linear complements $T_n$ with $D_n=Z_n\oplus T_n$; then $\partial_n$ maps $T_n$ isomorphically onto $B_{n-1}$, because it is injective ($T_n\cap Z_n=0$) and $\partial_n(D_n)=B_{n-1}=\partial_n(T_n)$. Tensoring with $F$ preserves direct sums and isomorphisms and is right exact, so $D_n\otimes_kF=(Z_n\otimes_kF)\oplus(T_n\otimes_kF)$, $\ker(\partial_n\otimes1)=Z_n\otimes_kF$, $\operatorname{im}(\partial_{n+1}\otimes1)=B_n\otimes_kF$, and therefore $H_n(D_*\otimes_kF)\cong(Z_n\otimes_kF)/(B_n\otimes_kF)\cong H_n(D_*)\otimes_kF$, the isomorphism sending the class of $z\otimes\mu$ to $[z]\otimes\mu$. For $D_*=C_*(X;\mathbb Q)$ and $k=\mathbb Q$ the chain-level identification $C_*(X;\mathbb Q)\otimes_{\mathbb Q}F\cong C_*(X;F)$ is the associativity and unit isomorphism for $C_n(X;\mathbb Z)\otimes_{\mathbb Z}\mathbb Q\otimes_{\mathbb Q}F\cong C_n(X;\mathbb Z)\otimes_{\mathbb Z}F$ [F4], so $H_n(X;\mathbb Q)\otimes_{\mathbb Q}F\cong H_n(X;F)$ canonically by the map induced by $c\mapsto c\otimes1$. [F4, given, choose, algebra]

2.1 Fix a characteristic-zero field $F$ and a degree $n$, and put $V=H_n(X;\mathbb Q)$, finite-dimensional by step 1.1. Evaluation gives natural isomorphisms $H^n(X;\kappa)\cong\operatorname{Hom}_\kappa(H_n(X;\kappa),\kappa)$ for $\kappa=\mathbb Q$ and $\kappa=F$ [F5]; choosing a finite $\mathbb Q$-basis $(v_i)$ of the finite-dimensional space $V$ with dual basis $(f_i)$, the map $f_i\otimes\mu\mapsto(v_j\mapsto\delta_{ij}\mu)$ identifies $\operatorname{Hom}_{\mathbb Q}(V,\mathbb Q)\otimes_{\mathbb Q}F$ with $\operatorname{Hom}_{\mathbb Q}(V,F)$, and $\psi\mapsto(v\otimes\mu\mapsto\psi(v)\mu)$ identifies $\operatorname{Hom}_{\mathbb Q}(V,F)$ with $\operatorname{Hom}_F(V\otimes_{\mathbb Q}F,F)$, with inverse $\chi\mapsto(v\mapsto\chi(v\otimes1))$. Composing these isomorphisms with the identification $V\otimes_{\mathbb Q}F\cong H_n(X;F)$ of step 1.2 and the two evaluation isomorphisms gives a natural isomorphism $H^n(X;\mathbb Q)\otimes_{\mathbb Q}F\cong H^n(X;F)$; on a cocycle $\varphi$ and a chain $z\otimes\mu$ the image of $[\varphi]\otimes1$ evaluates to $\varphi(z)\mu$, exactly as the coefficient-change cochain $c\otimes\mu\mapsto\varphi(c)\mu$ does, so the isomorphism is the natural coefficient map $[\varphi]\otimes1\mapsto[\varphi\otimes1]$. Hence $H^n(X;\mathbb Q)\otimes_{\mathbb Q}F\cong H^n(X;F)$ for every characteristic-zero field $F$, and $H^n(X;F)$ is finite-dimensional because $H_n(X;F)\cong V\otimes_{\mathbb Q}F$ is. [step 1.1, step 1.2, F4, F5, given, algebra]

3.1 By [F6] the cup product on singular cochains with coefficients in a commutative unital ring is given by the front/back formula, and the coefficient-change map $\varphi\mapsto\varphi\otimes1$ satisfies $((\varphi\smile\psi)\otimes1)(\sigma)=(\varphi\otimes1)(\sigma[0,\dots,p])\cdot(\psi\otimes1)(\sigma[p,\dots,p+q])$ on every singular simplex by multiplying the two coefficient values inside $F$, with $1\otimes1=1$; hence coefficient change is a unital homomorphism of graded rings, and the isomorphism of step 2.1, being its $F$-linear extension, satisfies $\Phi_F((a\smile b)\otimes\mu)=\Phi_F(a\otimes1)\smile\Phi_F(b\otimes\mu)$ for cohomology classes $a,b$ and scalars $\mu$, so the comparison isomorphisms preserve cup products. For a map $f:X\to Y$ of compact smooth manifolds the cochain identity $f^*(\varphi\otimes1)=(f^*\varphi)\otimes1$ holds because both sides send a simplex $\sigma$ to $\varphi(f\circ\sigma)$, and pullback is a unital graded-ring homomorphism [F6]; hence the isomorphisms of step 2.1 commute with pullback and are natural for such maps, and multiplicativity is preserved as well. [step 2.1, F6, given, algebra]

4.1 The de Rham theorem [F7] gives the natural isomorphism of graded real algebras $H^*_{\mathrm{dR}}(X)\cong H^*_{\mathrm{sing}}(X;\mathbb R)$, so composing with step 2.1 for $F=\mathbb R$ identifies $H^n(X;\mathbb Q)\otimes_{\mathbb Q}\mathbb R$ with real de Rham cohomology; the real de Rham theorem assumes $\mathrm{AC}_\omega$, which AC supplies through [F1]. For $F=\mathbb C$ the complex de Rham complex is $\Omega^*_{\mathbb R}(X)\otimes_{\mathbb R}\mathbb C$ with differential $d\otimes1$ [F7], and the argument of step 1.2 applied degreewise to this complex over the field extension $\mathbb R\subseteq\mathbb C$ gives $H^n_{\mathrm{dR}}(X;\mathbb C)\cong H^n_{\mathrm{dR}}(X;\mathbb R)\otimes_{\mathbb R}\mathbb C$; likewise $H^n(X;\mathbb C)\cong H^n(X;\mathbb R)\otimes_{\mathbb R}\mathbb C$, either by the same base change and duality [F5] or by associativity from $H^n(X;\mathbb Q)\otimes_{\mathbb Q}\mathbb C\cong H^n(X;\mathbb Q)\otimes_{\mathbb Q}\mathbb R\otimes_{\mathbb R}\mathbb C$ via step 2.1 for $F=\mathbb R$ and $F=\mathbb C$. Hence the complex de Rham comparison is the complexification of the real one, and the identification with real or complex de Rham cohomology holds for $F=\mathbb R,\mathbb C$ as asserted, with naturality and cup-product compatibility from steps 2.1 and 3.1. [step 1.2, step 2.1, step 3.1, F1, F5, F7, given, algebra] ∎
