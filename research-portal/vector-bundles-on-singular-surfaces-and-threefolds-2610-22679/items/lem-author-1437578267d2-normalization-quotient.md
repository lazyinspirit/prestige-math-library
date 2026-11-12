---
id: lem-author-1437578267d2-normalization-quotient
kind: lemma
title: Normalization and the curve divisor quotient
status: published
domain: mathematics
deps:
  - lem-author-1437578267d2-length-orders
  - lem-author-1437578267d2-graph-boundary
  - thm-author-1437578267d2-curve-norm-input
  - lem-affine-curve-normalization-interface
  - lem-algebraically-closed-residue-fields
  - def-bloch-higher-cycle-complex
  - math:thm-cartier-divisors-mod-principal-to-picard
  - math:cor-finite-morphism-proper
  - math:def-axiom-of-choice
  - math:thm-local-ring-smooth-curve-dvr
  - math:def-cartier-divisor
  - math:def-invertible-sheaf-of-cartier-divisor
  - math:lem-integral-finite-type-scheme-function-field
  - math:lem-curve-closed-subsets-finite
  - math:def-stalk-of-presheaf
  - math:def-sheaf-on-topological-space
  - math:thm-affine-domain-dimension-transcendence-degree
  - math:thm-dimension-formula-for-affine-domains
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - math:def-sheaf-total-quotient-rings
  - math:thm-fibre-products-of-schemes-exist
  - math:lem-closed-immersion-affine-quotient-and-base-change
  - math:def-integral-affine-scheme
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:def-smooth-morphism-to-field-classical
dependency_roles:
  lem-author-1437578267d2-length-orders: mathematical-premise
  lem-author-1437578267d2-graph-boundary: mathematical-premise
  thm-author-1437578267d2-curve-norm-input: mathematical-premise
  lem-affine-curve-normalization-interface: mathematical-premise
  lem-algebraically-closed-residue-fields: mathematical-premise
  def-bloch-higher-cycle-complex: mathematical-premise
  math:thm-cartier-divisors-mod-principal-to-picard: mathematical-premise
  math:cor-finite-morphism-proper: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-local-ring-smooth-curve-dvr: mathematical-premise
  math:def-cartier-divisor: mathematical-premise
  math:def-invertible-sheaf-of-cartier-divisor: mathematical-premise
  math:lem-integral-finite-type-scheme-function-field: mathematical-premise
  math:lem-curve-closed-subsets-finite: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:thm-affine-domain-dimension-transcendence-degree: mathematical-premise
  math:thm-dimension-formula-for-affine-domains: mathematical-premise
  math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect: mathematical-premise
  math:def-sheaf-total-quotient-rings: mathematical-premise
  math:thm-fibre-products-of-schemes-exist: mathematical-premise
  math:lem-closed-immersion-affine-quotient-and-base-change: mathematical-premise
  math:def-integral-affine-scheme: mathematical-premise
  math:thm-irreducible-closed-subsets-and-prime-ideals: mathematical-premise
  math:def-smooth-morphism-to-field-classical: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 12
---

## Statement
Assume AC. Let $T$ be an integral affine finite-type curve over an algebraically closed field, $\nu:C=\widetilde T\to T$ its normalization, and $K=k(T)=k(C)$. Write $Q(D)=Z_0(D)/\operatorname{div}_D(k(D)^\times)$. Then $\nu_*\operatorname{div}_C(f)=\operatorname{div}_T(f)$ for $f\in K^\times$, and $\nu_*$ induces $Q(C)\twoheadrightarrow Q(T)$. Explicitly, $\operatorname{ord}_x(f)=\sum_{y\in\nu^{-1}(x)}\operatorname{ord}_y(f)$, with DVR valuations upstairs and length orders downstairs. There is a canonical identification $\operatorname{Pic}(C)=\mathrm{CH}^1(C)=Q(C)$ sending $\mathcal O_C(y)$ to $[y]$; hence normalization induces a surjection from this Picard group to $Q(T)$. Here $\operatorname{Pic}$ is the group of isomorphism classes of line bundles under tensor product and $\mathrm{CH}^1$ is degree-zero Bloch homology.

## Facts & Assumptions
**Given:** AC and the curve and normalization in the Statement.

**Goal:** Establish divisor compatibility, surjectivity and the source identification.

[F1] Write $T=\operatorname{Spec}A$, where $A$ is a finitely generated $k$-algebra which is a nonzero domain of Krull dimension one, and $K=\operatorname{Frac}A$. Algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$; such a field is perfect. The normalization interface constructs $C=\operatorname{Spec}B$, where $B\subset K$ is the integral closure of $A$ (elements satisfying monic polynomials over $A$), proves that $B$ is finite as an $A$-module, and proves that $C$ is an affine smooth integral finite-type curve with function field $K$. In particular, $A\subset B\subset K$ gives $\operatorname{Frac}B=K$; finite module generators of $B$, together with algebra generators of $A$, generate $B$ over $k$. Its dimension one also follows from the dimension formula in F5 and this common function field. The map $\nu$ is finite and has nonempty finite closed fibers with residue fields $k$. Finite morphisms are proper under AC. Smoothness over $k$ means geometric regularity: after every field extension, all local rings are regular. [[lem-affine-curve-normalization-interface]], [[math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]], [[lem-algebraically-closed-residue-fields]], [[math:cor-finite-morphism-proper]], [[math:def-smooth-morphism-to-field-classical]], [[math:thm-affine-domain-dimension-transcendence-degree]]

[F2] For an integral finite-type curve $D$, $Z_0(D)$ consists of finite formal integer sums of its reduced closed points. If $R=\mathcal O_{D,x}$, the length order is $\operatorname{ord}_x(a/b)=\ell_R(R/aR)-\ell_R(R/bR)$ for nonzero $a,b\in R$, where $\ell_R$ is composition-series length. It is well-defined and additive and has finite support, so $\operatorname{div}_D(f)=\sum_x\operatorname{ord}_x(f)[x]$ is a homomorphism. Thus $Q(D)$ is the quotient by its image, with cycles identified when their difference is a principal divisor. For a proper dominant curve morphism $p$, pushforward is $p_*[y]=[\kappa(y):\kappa(p(y))][p(y)]$, extended linearly, and $p_*\operatorname{div}(g)=\operatorname{div}(\operatorname{Nm}(g))$. Here $\kappa(x)$ is the local ring modulo its maximal ideal; the field degree is vector-space dimension and the norm is the determinant of multiplication on the finite function-field extension. No normality or separability is required. [[lem-author-1437578267d2-length-orders]], [[thm-author-1437578267d2-curve-norm-input]]

[F3] Under AC, every closed-point local ring of a smooth integral finite-type curve is a one-dimensional Noetherian regular local domain and a DVR. This applies to $C$ in F1. A uniformizer $\pi$ generates its maximal ideal; every nonzero local element is $u\pi^n$ for a unit $u$ and $n\geq0$. Its normalized valuation assigns $n-m$ to $u\pi^n/(v\pi^m)$. Length orders agree with this valuation, and a fixed nonzero rational function has nonzero length order at only finitely many closed points. [[math:thm-local-ring-smooth-curve-dvr]], [[lem-author-1437578267d2-length-orders]]

[F4] On an integral scheme, Cartier divisors modulo principal Cartier divisors map isomorphically to the Picard group via $D\mapsto\mathcal O(D)$. The sheaf of meromorphic functions on an integral scheme is the constant sheaf of its function field. Thus on $C$ a Cartier divisor is represented by nonzero rational functions $f_i\in K^\times$ on an open cover, with $f_i/f_j$ regular units on overlaps; data are identified after refinement and multiplication by regular units. Addition multiplies local equations, the zero divisor has unit equations, and a principal Cartier divisor has one equation $f\in K^\times$ on all of $C$. Its associated line bundle has local description $\mathcal O_C(D)|_{U_i}=f_i^{-1}\mathcal O_{U_i}$. A line bundle is an $\mathcal O_C$-module locally free of rank one; its isomorphism class belongs to the Picard group with tensor-product law. [[math:thm-cartier-divisors-mod-principal-to-picard]], [[math:def-cartier-divisor]], [[math:def-invertible-sheaf-of-cartier-divisor]], [[math:def-sheaf-total-quotient-rings]]

[F5] Bloch's degree-zero group is generated by integral codimension-one closed subschemes of $C$; its degree-one generators are the admissible integral codimension-one closed subschemes of $C\times\Delta^1$, with the endpoint length boundary. Codimension is the dimension of the ambient local ring at the generic point. For a finite-type domain $R$ over $k$, $\dim R=\operatorname{trdeg}_k\operatorname{Frac}R$ and $\operatorname{ht}\mathfrak p+\operatorname{trdeg}_k\operatorname{Frac}(R/\mathfrak p)=\operatorname{trdeg}_k\operatorname{Frac}R$, where height means $\dim R_{\mathfrak p}$. The intrinsic endpoint group $B_1(C)$ is free on integral curves in $C\times\mathbb A^1_s$ contained in neither endpoint; its boundary is $b[W]=[W_1]-[W_0]$ with the quotient-length coefficients, and its boundary subgroup equals the principal-divisor subgroup. [[def-bloch-higher-cycle-complex]], [[math:thm-affine-domain-dimension-transcendence-degree]], [[math:thm-dimension-formula-for-affine-domains]], [[lem-author-1437578267d2-graph-boundary]]

[F6] For an integral finite-type curve $D$, its function field is the generic stalk and the fraction field of every nonempty affine chart; regular sections on nonempty opens embed in that field. Under AC, every point other than the generic point is closed, and every proper closed subset is finite. A stalk element is represented by a section on a neighbourhood, with equality of germs meaning equality on a smaller neighbourhood. Consequently, if a rational function and its inverse belong to the local ring at a point, shrinking gives mutually inverse regular sections near that point. Such local sections glue uniquely when they agree, so a rational function which is a unit in every local ring on an open set is a regular unit on that open set. [[math:lem-integral-finite-type-scheme-function-field]], [[math:lem-curve-closed-subsets-finite]], [[math:def-stalk-of-presheaf]], [[math:def-sheaf-on-topological-space]]

[F7] All products are over $k$. Fibre products have affine tensor-product charts; thus $C\times\mathbb A^1_s=\operatorname{Spec}B[s]$, using the elementary isomorphism $B\otimes_k k[s]\cong B[s]$. Closed subschemes of an affine spectrum are spectra of quotient rings; an affine scheme is integral exactly when its ring is a nonzero domain. In particular the integral closed subschemes here are $\operatorname{Spec}(B[s]/\mathfrak p)$ for prime ideals $\mathfrak p$. Under AC, nonempty irreducible closed subsets of an affine spectrum are exactly the $V(\mathfrak p)$, with generic point $\mathfrak p$. This correspondence reverses strict inclusions, so the chain dimension of an affine scheme is its ring's Krull dimension. [[math:thm-fibre-products-of-schemes-exist]], [[math:lem-closed-immersion-affine-quotient-and-base-change]], [[math:def-integral-affine-scheme]], [[math:thm-irreducible-closed-subsets-and-prime-ideals]]

[A1] AC states that every family of nonempty sets has a choice function. It is retained through the normalization, finite-properness, smoothness, DVR, curve-finiteness, affine-geometry and dimension-formula inputs. Lifting the finitely many points of a fixed zero-cycle and choosing a uniformizer at one fixed point require only finite choices. [[math:def-axiom-of-choice]]

## Proof
1.1 By F1 the normalization is proper and dominant with function-field extension $K/K$: the generic prime $(0)$ of $B$ contracts to $(0)$ of $A$, so its image contains the generic point of $T$. The norm in this identity extension is $f$, since multiplication by $f$ on the one-dimensional $K$-space $K$ has matrix $(f)$. Applying F2 yields $\nu_*\operatorname{div}_C(f)=\operatorname{div}_T(f)$. Every point above a closed $x$ has residue degree one by F1; comparing coefficients, with valuation compatibility from F3, gives the displayed order formula. [F1, F2, F3, F7, A1, given]

1.2 By F1 and F3, each closed-point local ring of $C$ is a DVR. Taking valuations of local Cartier equations gives integer coefficients independent of representatives and refinements: unit ratios have valuation zero. Choose a chart containing the generic point and its equation $f_i$. By F6, shrink inside that chart to a nonempty open $V$ on which both $f_i$ and $f_i^{-1}$ are regular. The divisor vanishes on $V$ by F4; its remaining coefficients have finite support because $C\setminus V$ is finite by F6. This defines an additive map from Cartier divisors to $Z_0(C)$, since valuations turn products of equations into sums. If all coefficients vanish, each equation is a unit at every closed point of its chart and at the generic point. These are all the points by F6, so their local inverses glue to regular inverses on the chart. The Cartier divisor is then zero by F4. [F1, F3, F4, F6, A1, algebra]

2.1 The equality in step 1.1 makes pushforward descend to $Q(C)\to Q(T)$: two cycles differing by a principal divisor have images differing by the principal divisor of the same function. Every closed point of $T$ has a closed preimage by F1, and each such point pushes forward with coefficient one. Lifting the finitely many points of any zero-cycle therefore proves surjectivity. [F1, F2, A1, step 1.1, construct]

2.2 Fix a closed point $y$. A uniformizer in $\mathcal O_{C,y}$ is a rational function regular on some neighbourhood of $y$ by F6. On that neighbourhood it has only finitely many other zeros by F3: at a closed point a nonzero regular function is a nonunit exactly when its DVR valuation is positive. Remove these other points, which are closed by F6. The equation has valuation one at $y$, valuation zero at every other closed point of the remaining neighbourhood, and is nonzero at the generic point. By F6 it is a regular unit away from $y$. This equation and the equation one on $C\setminus\{y\}$ have unit ratio on the overlap, so they define a Cartier divisor mapping to $[y]$. Integer sums prove surjectivity of the map in step 1.2, already injective there. Its image on principal Cartier divisors is exactly the subgroup of principal length divisors by F2–F4. Passing to quotients and applying F4 gives $Q(C)\cong\operatorname{Pic}(C)$, with $[y]$ corresponding to $\mathcal O_C(y)$ and its local equation convention in F4. [F2, F3, F4, F6, A1, step 1.2, construct]

3.1 By F3 and F6, the codimension-one points of $C$ are precisely its closed points; the generic local ring is the field $K$ and has dimension zero. Thus $z^1(C,0)=Z_0(C)$. Put $s=t_1$, so substitution $t_0=1-s$ identifies $\Delta^1$ with $\mathbb A^1_s$. By F1, F5 and F7, the domain $B[s]$ is finite type over $k$, has fraction field $K(s)$ and has dimension two: a transcendence basis of $K/k$ has one element, and adjoining the indeterminate $s$ adds one algebraically independent element. For an integral closed subscheme $W=\operatorname{Spec}(B[s]/\mathfrak p)$, the two dimension formulas in F5 give $\dim W=2-\operatorname{ht}\mathfrak p$. Hence the codimension-one generators in degree one are exactly the integral one-dimensional closed subschemes of $C\times\mathbb A^1$. Such a curve is admissible exactly when it lies in neither endpoint. Indeed, each endpoint intersection is then a proper closed subset of this integral finite-type curve and is finite by F6; its points are closed in the ambient endpoint $C$ by the closed-immersion and base-change statement in F7, and have codimension one by F3. If the curve lies in an endpoint, its reduced support equals that endpoint, since a proper closed subset of $C$ is finite, so admissibility fails. Thus $z^1(C,1)$ is precisely $B_1(C)$. The face maps have exactly the quotient-length coefficients in F5. The zeroth face is $t_0=0$, or $s=1$, and the first is $t_1=0$, or $s=0$; hence $\partial_1[W]=b[W]=[W_1]-[W_0]$ on a generator. The outgoing degree-zero differential is zero. Therefore F5 identifies degree-zero Bloch homology with $Z_0(C)/bB_1(C)=Q(C)$. Combining this canonical identification with steps 2.1 and 2.2 proves all the claimed identifications and the normalization surjection. [F1, F3, F5, F6, F7, A1, step 2.1, step 2.2, algebra] ∎
