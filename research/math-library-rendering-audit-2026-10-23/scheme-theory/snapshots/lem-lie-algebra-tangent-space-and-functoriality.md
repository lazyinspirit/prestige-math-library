---
id: lem-lie-algebra-tangent-space-and-functoriality
kind: lemma
title: "The tangent space at the identity is a vector space, and Lie is a functor"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: ["def-lie-algebra-of-a-group-scheme", "def-group-scheme-over-a-field", "thm-tangent-vectors-dual-numbers", "thm-cotangent-space-maximal-ideal-quotient", "lem-differentials-commute-base-change-schemes", "def-relative-cotangent-space", "def-dual-numbers-scheme", "def-tensor-product-of-modules-by-generators-and-relations", "thm-coproduct-property-of-tensor-products-of-commutative-algebras", "def-closed-immersion-schemes", "def-linear-map", "thm-hom-tensor-adjunction-for-modules", "lem-differential-of-morphism-via-cotangent-map", "def-morphism-and-closed-subgroup-scheme", "thm-fibre-products-of-schemes-exist", "def-zariski-tangent-space-point", "thm-steinitz-exchange", "lem-dependent-iff-a-vector-lies-in-the-span-of-the-others", "def-linear-basis", "def-linear-independence", "def-linear-combination-and-span", "def-linear-isomorphism-and-invertible-linear-map"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "10.11, 10.14 and 10.19, printed pp. 189-192 (PDF 200-203): e^{epsilon(X+X')} = e^{epsilon X}e^{epsilon X'}, functoriality f(e^{epsilon X}) = e^{epsilon Lie(f)X}, and g(R) = g tensor R."
    - title: "SGA 3, Expose II (M. Demazure), Fibres tangents - Algebres de Lie, corrected 14 October 2024 edition"
      url: "https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp2-14oct24.pdf"
      locator: "§3.7, §3.9 and §4.1.B with note (50): functoriality of the tangent functor and injectivity on monomorphisms."
    - title: "The Stacks Project, Groupoid Schemes chapter"
      url: "https://stacks.math.columbia.edu/download/groupoids.pdf"
      locator: "Lemma 39.6.4 [0BF5], printed p. 13: composition with the multiplication is addition of tangent vectors."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $k$ be a field and let $G$ be a group scheme of finite type over $k$ with Lie algebra $\mathfrak g=\operatorname{Lie}(G)$ ([[def-lie-algebra-of-a-group-scheme]]). (a) For every commutative $k$-algebra $R$, the set $\operatorname{Lie}(G)(R)=\ker(G(R[\varepsilon])\to G(R))$ is an abelian group under the multiplication of $G(R[\varepsilon])$; this multiplication is addition for a natural $R$-module structure on $\operatorname{Lie}(G)(R)$, and there is a natural $R$-linear isomorphism $\operatorname{Lie}(G)(R)\cong\mathfrak g\otimes_kR$. In particular $\mathfrak g$ is a finite-dimensional $k$-vector space, and the bijections of [[def-lie-algebra-of-a-group-scheme]] with $\operatorname{Hom}_k(\mathfrak m_e/\mathfrak m_e^2,k)$ and with the dual-number points are isomorphisms of $k$-vector spaces. (b) A morphism $f:G\to H$ of group schemes of finite type over $k$ induces a $k$-linear map $\operatorname{Lie}(f):\mathfrak g\to\mathfrak h$, with $\operatorname{Lie}(\operatorname{id})=\operatorname{id}$ and $\operatorname{Lie}(g\circ f)=\operatorname{Lie}(g)\circ\operatorname{Lie}(f)$, and $f_R(e^{\varepsilon X})=e^{\varepsilon\operatorname{Lie}(f)_R(X)}$ for $X\in\operatorname{Lie}(G)(R)$. If $f$ is a closed immersion ([[def-closed-immersion-schemes]]) then $\operatorname{Lie}(f)$ is injective. The proof makes only finite selections and uses no choice principle.

## Facts & Assumptions

**Given:** A field $k$, a group scheme $G$ of finite type over $k$, a commutative $k$-algebra $R$, and, for part (b), a morphism $f:G\to H$ of group schemes of finite type over $k$.

[F1] [[thm-tangent-vectors-dual-numbers]]: for $X\to S$ and $x\in X$ with $\kappa=\kappa(x)$, evaluation of the $\epsilon$-coefficient is a natural bijection from the $S$-morphisms $\operatorname{Spec}\kappa[\epsilon]/(\epsilon^2)\to X$ reducing to $x$ onto $T_{X/S,x}=\operatorname{Hom}_\kappa(\Omega_{X/S}\otimes_{\mathcal O_{X,x}}\kappa(x),\kappa(x))$; a morphism has zero tangent vector exactly when it is the constant (reduction) morphism.

[F2] [[def-lie-algebra-of-a-group-scheme]]: $\operatorname{Lie}(G)=T_{G/k,e}=\operatorname{Hom}_k(\mathfrak m_e/\mathfrak m_e^2,k)$ and, for each commutative $k$-algebra $R$, $\operatorname{Lie}(G)(R)=\ker(G(R[\varepsilon])\to G(R))$ with $R[\varepsilon]=R\otimes_kk[\varepsilon]$; the elements are written $e^{\varepsilon X}$.

[F3] [[def-group-scheme-over-a-field]] and [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]]: $G(T)$ is a group for every $k$-scheme $T$, naturally in $T$, so $G(R[\varepsilon])\to G(R)$ is a group homomorphism and $\operatorname{Lie}(G)(R)$ is its kernel; $R[\varepsilon]$ is the commutative $R$-algebra $R\otimes_kk[\varepsilon]$, and $G_R=G\times_k\operatorname{Spec}R$ satisfies $G_R(T)=G(T)$ for $R$-schemes $T$.

[F4] [[lem-differentials-commute-base-change-schemes]]: for $X\to S$ and $S'\to S$ with $X'=X\times_SS'$, the canonical map $g^*\Omega_{X/S}\to\Omega_{X'/S'}$ is an isomorphism.

[F5] [[thm-cotangent-space-maximal-ideal-quotient]]: at a $k$-rational point $e$, $\Omega_{X/k}\otimes_{\mathcal O_{X,e}}\kappa(e)\cong\mathfrak m_e/\mathfrak m_e^2$ canonically, with $\mathrm d_{X/k}(a)\otimes1\leftrightarrow[a]$.

[F6] [[def-zariski-tangent-space-point]]: for a locally finite type $k$-scheme $X$ and $x\in X$, the intrinsic cotangent space $\mathfrak m_x/\mathfrak m_x^2$ is finite-dimensional, and at a $k$-rational point the intrinsic tangent space equals $T_{X/k,x}$.

[F7] [[thm-steinitz-exchange]], [[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]], [[def-linear-basis]], [[def-linear-independence]] and [[def-linear-combination-and-span]]: a vector space spanned by finitely many vectors has a finite basis; redundant vectors can be discarded one at a time using the criterion that a finite set is dependent exactly when one of its members lies in the span of the others, and a finite independent spanning set is a basis.

[F8] [[thm-hom-tensor-adjunction-for-modules]]: $\operatorname{Hom}_R(V\otimes_kR,R)\cong\operatorname{Hom}_k(V,R)$ naturally for a $k$-module $V$; for a finite-dimensional $V$ with $k$-basis $v_1,\dots,v_n$ both sides are identified with $R^n$ by a functional's coordinates, so the natural map $\operatorname{Hom}_k(V,k)\otimes_kR\to\operatorname{Hom}_k(V,R)$, $g\otimes r\mapsto(v\mapsto g(v)r)$, is an isomorphism ([[def-tensor-product-of-modules-by-generators-and-relations]]); the dual basis evaluation identifies the two copies of $R^n$ compatibly ([[def-linear-isomorphism-and-invertible-linear-map]]).

[F9] [[lem-differential-of-morphism-via-cotangent-map]]: a morphism $\varphi:X\to Y$ of $S$-schemes has a unique $\mathcal O_X$-linear differential $\mathrm d\varphi:\varphi^*\Omega_{Y/S}\to\Omega_{X/S}$ with $\mathrm d\varphi(1\otimes\mathrm d_{Y/S}(g))=\mathrm d_{X/S}(g\circ\varphi)$, the identity differential is the canonical identification $\operatorname{id}_X^*\Omega_{X/S}\cong\Omega_{X/S}$, and for a composite the differential is the composite formed with the canonical identification of pullbacks; at a point the differential induces a $\kappa(x)$-linear map of cotangent fibres, and it is natural in the pair $(X,Y)$.

[F10] [[def-morphism-and-closed-subgroup-scheme]]: a closed immersion of group schemes is a morphism of group schemes and a monomorphism of schemes, so it is injective on $T$-points for every $T$; the fibre products occurring below exist by [[thm-fibre-products-of-schemes-exist]].

[F11] [[def-linear-map]]: $R$-linear maps and $k$-linear maps are additive and respect scalars, so a bijection that respects addition and scalars is an isomorphism of modules.

## Proof

1.1 Classification over an arbitrary $R$. Put $B=\mathcal O_{G,e}$ and $\mathfrak m=\ker(B\to k)$. Every morphism $\operatorname{Spec}R[\varepsilon]\to G$ reducing to the constant identity has underlying image $e$, since the nilpotent thickening has the same points as $\operatorname{Spec}R$; it therefore factors through every affine neighbourhood of $e$. Every element of a chart algebra outside the prime of $e$ maps to a unit: its reduction is a nonzero scalar in $k$, and $c+\varepsilon r$ has inverse $c^{-1}-\varepsilon c^{-2}r$. Consequently such morphisms correspond exactly to $k$-algebra maps $B\to R[\varepsilon]$ of the form $b\mapsto\epsilon(b)+\varepsilon D(b)$, where $\epsilon:B\to k\to R$ is augmentation and $D:B\to R$ is $k$-linear with $D(bb')=\epsilon(b)D(b')+\epsilon(b')D(b)$. The splitting $B=k\oplus\mathfrak m$ shows that these $D$ correspond exactly to $k$-linear maps $\mathfrak m/\mathfrak m^2\to R$: the product rule kills $\mathfrak m^2$, and conversely that rule follows by multiplying the two decompositions into scalar and augmentation parts. This gives a natural bijection $\beta_R:\operatorname{Lie}(G)(R)\to\operatorname{Hom}_k(\mathfrak m/\mathfrak m^2,R)$, valid also for $R=0$. For $R=k$ it is the coefficient bijection of [F1] and [F5]. [F1, F2, F5, given, construct, algebra]

2.1 Finite-dimensional tensor identification. Write $V=\mathfrak m/\mathfrak m^2$. It is finite-dimensional by [F6], and a basis is obtained by finite elimination as in [F7]. In that basis the natural map $V^\vee\otimes_kR\to\operatorname{Hom}_k(V,R)$, $\theta\otimes r\mapsto(v\mapsto r\theta(v))$, identifies both sides with $R^{\dim_kV}$ and is an $R$-linear isomorphism. Since $V^\vee=\mathfrak g$ by [F2], transporting this module structure through step 1.1 gives a natural $R$-module structure and a natural identification $\operatorname{Lie}(G)(R)\cong\mathfrak g\otimes_kR$. The pullback of the cotangent sheaf along the identity section is $V\otimes_kR$ by [F4] and [F5]; this uses a section pullback, not a local ring at a purported general $R$-point. [F2, F4, F5, F6, F7, F8, step 1.1, algebra]

3.1 Multiplication is addition. Apply step 1.1 to $G\times_kG$ at $(e,e)$. A dual-number morphism to this product is a pair of such morphisms to $G$, so the cotangent fibre of the product is $V\oplus V$: this also follows from the universal product derivation formula $d(a\otimes b)=b\,da+a\,db$ on affine charts, followed by augmentation. The cotangent map induced by multiplication is $V\to V\oplus V$ and has both components the identity, since multiplication restricted to $(\operatorname{id},e)$ and $(e,\operatorname{id})$ is the identity by [F3]. Under the coefficient classification of step 1.1, composing two lifts with multiplication therefore takes the pair $(D,D')$ to $D+D'$. Thus the group product on the kernel is precisely addition in the module of step 2.1, for every $R$; it is abelian, its identity is the zero coefficient, and inversion negates the coefficient. [F3, F5, F9, step 1.1, step 2.1, algebra]

4.1 Scalars and the field case. For $c\in R$, the endomorphism $R[\varepsilon]\to R[\varepsilon]$ sending $\varepsilon\mapsto c\varepsilon$ takes the coefficient $D$ of step 1.1 to $cD$. These operations are the scalar multiplication of the $R$-module of step 2.1 and are natural under $k$-algebra maps $R\to R'$. Taking $R=k$, the dual-number bijection and the cotangent description are isomorphisms of finite-dimensional $k$-vector spaces, as asserted in (a). [F1, F2, F3, F11, step 1.1, step 2.1, step 3.1, algebra]

5.1 Functoriality and closed immersions. A group-scheme morphism $f:G\to H$ preserves identities, so it induces a local homomorphism $\mathcal O_{H,e_H}\to\mathcal O_{G,e_G}$ and the corresponding $k$-linear cotangent map $V_H\to V_G$ by [F9]. Precomposition with this map carries a coefficient $D:V_G\to R$ to the coefficient of $f\circ e^{\varepsilon X}$ by step 1.1; it is $R$-linear and, under step 2.1, is the scalar extension of its $k$-linear dual $\operatorname{Lie}(f)$. Identity and composite maps give the stated functorial equalities, and $f_R(e^{\varepsilon X})=e^{\varepsilon\operatorname{Lie}(f)_R(X)}$. If $f$ is a closed immersion, [F10] makes its map on $R[\varepsilon]$-points injective for every $R$, hence also on these kernels; taking $R=k$ proves injectivity of $\operatorname{Lie}(f)$. All basis selections are finite, so no choice principle is used. [F9, F10, step 1.1, step 2.1, step 3.1] ∎

## Remarks

The same argument shows that for a group scheme $G$ over an arbitrary base scheme $S$ the functor $R\mapsto\ker(G(R[\varepsilon])\to G(R))$, for commutative $R$-algebras with $\varepsilon^2=0$, is an abelian group functor; only the field case is needed here. The proof is choice-free: the only selections are from finite lists.
