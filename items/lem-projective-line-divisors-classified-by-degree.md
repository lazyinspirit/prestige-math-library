---
id: lem-projective-line-divisors-classified-by-degree
kind: lemma
title: "Divisors on the projective line are classified by degree"
status: published
origin: pipeline
deps:
  - cor-closed-points-of-spectrum-are-maximal-ideals
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - cor-polynomial-ring-over-a-field-is-a-pid
  - cor-top-cohomology-projective-space-o-d
  - def-ag-standard-smooth-algebra
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-cartier-divisor
  - def-invertible-sheaf-of-cartier-divisor
  - def-degree-divisor-proper-curve
  - def-dimension-noetherian-topological-space
  - def-discrete-valuation
  - def-divisor-smooth-proper-curve
  - def-divisor-support-positive-negative-parts
  - def-principal-weil-divisor-and-class-group
  - def-extension-degree-and-finite-extension
  - def-genus-euler-characteristic-curve
  - def-integral-affine-scheme
  - def-krull-dimension-of-a-ring
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-proper-morphism
  - def-rational-section-line-bundle
  - def-reduced-affine-scheme
  - def-relative-projective-space-standard-charts
  - def-residue-field-scheme-point
  - def-smooth-morphism-classical
  - def-twisting-sheaf-proj
  - cor-degree-descends-picard-curve
  - lem-chain-dimension-open-cover
  - lem-integral-finite-type-scheme-function-field
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-projective-space-finite-type-over-base
  - lem-uniqueness-of-twists-on-the-projective-line
  - thm-regular-local-rings-are-normal
  - thm-affine-domain-dimension-transcendence-degree
  - thm-gluing-affine-schemes
  - thm-irreducible-closed-subsets-and-prime-ideals
  - thm-local-ring-smooth-curve-dvr
  - thm-polynomial-quotient-is-a-field-iff-irreducible
  - thm-principal-ideal-domains-are-unique-factorisation-domains
  - thm-projective-space-as-proj
  - thm-projective-space-proper-over-base
  - thm-simple-algebraic-extension-quotient-power-basis-and-degree
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-line-bundle-rational-section-cartier-divisor
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 18.5 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the cohomology, DVR/normality,
degree and Cartier-divisor suppliers. It supplies the Dependent Choice premise of the
curve Cartier-to-Weil route through
[[thm-choice-implies-dependent-implies-countable-choice]]. Let $k$ be a field and let $\mathbb P^1_k$ be the
projective line over $k$ with standard affine chart $U_0=\operatorname{Spec}k[t]$,
coordinate $t=x_1/x_0$, and point at infinity $\infty=[0:1]=V(x_0)$, the pole
of $t$; the origin is the point $[1:0]=V(x_1)$ of $U_0$, where $t=0$. Then:

1. $\mathbb P^1_k$ is a smooth proper geometrically integral curve over $k$ of
   genus $0$;
2. for every monic irreducible polynomial $g\in k[t]$ of degree $d$, the closed
   point $p=V(g)$ of $U_0$ has $[\kappa(p):k]=d$ and
   $\operatorname{div}(g)=[p]-d[\infty]$ for the divisor of the rational
   function $g$, so $[p]$ is linearly equivalent to $d[\infty]$;
3. the coordinate section $x_0$ of $\mathcal O(1)$ vanishes exactly at infinity
   with multiplicity one, so $\operatorname{div}(x_0)=[\infty]$ and
   $\mathcal O(1)\cong\mathcal O(\infty)$ with $\deg_k\mathcal O(1)=1$, while
   the other coordinate section $x_1$ vanishes exactly at the origin, with
   $\operatorname{div}(x_1)=[\,[1:0]\,]=[V(x_1)]$;
4. every divisor $D$ on $\mathbb P^1_k$ is linearly equivalent to
   $\deg_k(D)[\infty]$; consequently the degree homomorphism
   $\deg_k\colon\operatorname{CaDiv}(\mathbb P^1_k)/\operatorname{Prin}(\mathbb P^1_k)\to\mathbb Z$
   is an isomorphism.

*Scaffold repair, recorded for the owner.* The frozen scaffold statement wrote
$t=x_1/x_0$ together with $\infty=[1:0]=V(x_1)$ and "the coordinate section
$x_1$". Those clauses are not simultaneously satisfiable: for $g=t$ clause 2
would then read $\operatorname{div}(t)=[p]-[\infty]=0$ at $p=\infty$, and $t$
is not constant. The statement above keeps every promised claim with the labels
corrected to the running convention $\infty=[0:1]=V(x_0)$ of this page, and
keeps the true statement about $x_1$ as the final clause of (3).

Clauses 3 and 4 use the current interfaces
[[def-invertible-sheaf-of-cartier-divisor]],
[[thm-line-bundle-rational-section-cartier-divisor]],
[[thm-cartier-weil-divisors-curves-agree]],
[[cor-degree-descends-picard-curve]] and
[[def-principal-weil-divisor-and-class-group]]. Their roles are recorded in
[F14].

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the cohomology, DVR/normality, degree and Cartier-divisor suppliers, with Dependent Choice supplied by [[thm-choice-implies-dependent-implies-countable-choice]]; a field $k$, the projective line $\mathbb P^1_k=\mathbb P^1$ with its two standard charts $U_0=\operatorname{Spec}k[t]$ and $U_1=\operatorname{Spec}k[u]$, related on the overlap by $t=u^{-1}$, and a monic irreducible polynomial $g\in k[t]$ of degree $d$.

[F1] A curve over $k$ is a $k$-scheme that is geometrically integral, separated, of finite type and of chain dimension one; a smooth curve is a curve whose structure morphism is smooth in the local-standard-smooth convention, and a proper curve is one whose structure morphism is proper ([[def-algebraic-curve-over-field]], [[def-smooth-morphism-classical]]).

[F2] The projective line $\mathbb P^1_k$ is the relative projective space $\mathbb P^1_k$ of [[def-relative-projective-space-standard-charts]] with standard charts $U_0=\operatorname{Spec}k[x^{(0)}_1]$ and $U_1=\operatorname{Spec}k[x^{(1)}_0]$ glued along $D(x^{(0)}_1)$ and $D(x^{(1)}_0)$ by $x^{(0)}_1\mapsto1/x^{(1)}_0$, and the charts and transitions are stable under base change; it is canonically $\operatorname{Proj}k[x_0,x_1]$ ([[thm-projective-space-as-proj]]). The two-affine model of [[def-projective-line-two-affine-cover-and-twisting-sheaf]] is the gluing of the same two affine schemes along the same open subschemes by the same transition isomorphism and is therefore canonically isomorphic to $\mathbb P^1_k$ by the uniqueness clause of [[thm-gluing-affine-schemes]]; on the overlap the twists are glued with frames $e_0$ on $U_0$ and $e_\infty$ on $U_1$ related by $e_\infty=t^ne_0$ ([[def-projective-line-two-affine-cover-and-twisting-sheaf]], [[lem-uniqueness-of-twists-on-the-projective-line]], [[def-twisting-sheaf-proj]]). In the identification with $\operatorname{Proj}k[x_0,x_1]$, the origin $[1:0]=V(x_1)$ is the point $t=0$ of $U_0$, and the point at infinity $\infty=[0:1]=V(x_0)$ is the point $u=0$ of $U_1$, outside $U_0$.

[F3] $\mathbb P^n_S\to S$ is proper and of finite type for every scheme $S$ and every $n\ge0$, and a proper morphism is separated ([[thm-projective-space-proper-over-base]], [[lem-projective-space-finite-type-over-base]], [[def-proper-morphism]]). So $\mathbb P^1_k\to\operatorname{Spec}k$ is proper, separated and of finite type.

[F4] A polynomial ring $R[x_1,\dots,x_n]$ is a standard smooth $R$-algebra through the presentation with $c=0$ variables and $g=1$, and a morphism of finite-type $k$-schemes is smooth in the local-standard-smooth convention when every source point has affine neighbourhoods on which the induced ring map is standard smooth at the corresponding prime ([[def-ag-standard-smooth-algebra]], [[def-smooth-morphism-classical]]).

[F5] $\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$ for a finite-type $k$-domain $A$ ([[thm-affine-domain-dimension-transcendence-degree]]), in particular $\dim k[t]=1$ ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]], [[def-krull-dimension-of-a-ring]]); on a finite affine cover of a Noetherian space the chain dimension is the supremum of the chart dimensions ([[lem-chain-dimension-open-cover]], [[def-dimension-noetherian-topological-space]]). Strict chains of nonempty irreducible closed subsets of $\operatorname{Spec}A$ correspond to strict chains of prime ideals, since an irreducible closed $Z$ is $V(\mathfrak p)$ for its prime defining ideal and $Z\subseteq Z'$ matches the reverse inclusion of the ideals ([[thm-irreducible-closed-subsets-and-prime-ideals]]).

[F6] An affine scheme is integral when its coordinate ring is a nonzero domain; such a scheme is nonempty, reduced and irreducible, and a finite-type algebra over a field is Noetherian ([[def-integral-affine-scheme]], [[def-reduced-affine-scheme]]). A space is irreducible exactly when it is nonempty and every two nonempty open subsets meet, equivalently when every nonempty open subset is dense; a nonempty open subspace of an irreducible space is irreducible ([[lem-irreducibility-criteria-and-open-subspaces]]). Geometric integrality means integrality of the algebraic-closure fibre ([[def-algebraic-curve-over-field]]).

[F7] For a point $x$ of a scheme, $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$, and for $\mathfrak p\in\operatorname{Spec}A$ one has $\kappa(\mathfrak p)\cong\operatorname{Frac}(A/\mathfrak p)$ ([[def-residue-field-scheme-point]]); a point of $\operatorname{Spec}R$ is closed exactly when it is a maximal ideal ([[cor-closed-points-of-spectrum-are-maximal-ideals]]); $F[x]$ is a principal ideal domain and $(p)$ is maximal exactly when the nonconstant $p$ is irreducible ([[cor-polynomial-ring-over-a-field-is-a-pid]], [[thm-polynomial-quotient-is-a-field-iff-irreducible]], and the quotient of $F[x]$ by a maximal ideal is identified with the residue field by [[def-residue-field-scheme-point]]). For an algebraic element with minimal polynomial of degree $n$, the simple extension has degree $n$ and power basis $1,a,\dots,a^{n-1}$; the degree $[K:F]$ is $\dim_FK$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]], [[def-extension-degree-and-finite-extension]]).

[F8] A divisor on a curve is a finite formal $\mathbb Z$-linear combination of closed points, its support is the finite set of points with nonzero coefficient, $D=D^+-D^-$ for the positive and negative parts, $D\ge0$ means $D$ effective, and $\deg_kD=\sum_xn_x[\kappa(x):k]$ is a group homomorphism ([[def-degree-divisor-proper-curve]], [[def-divisor-smooth-proper-curve]], [[def-divisor-support-positive-negative-parts]]).

[F9] For a closed point $x$ of a smooth curve $C$ over $k$ the local ring $\mathcal O_{C,x}$ is a discrete valuation ring with a uniformizer $t_x$; every nonzero rational function $f\in k(C)^\times$ has a well-defined order $\operatorname{ord}_x(f)\in\mathbb Z$, every nonzero element of $\mathcal O_{C,x}$ is a unit times a power of $t_x$, and the order is a group homomorphism, so it is additive in products and vanishes on units ([[thm-local-ring-smooth-curve-dvr]], [[def-discrete-valuation]]).

[F10] For an integral finite-type $k$-scheme $X$ the stalk at the generic point is the function field and is canonically $\operatorname{Frac}\Gamma(U,\mathcal O_X)$ for every nonempty affine open $U$, so $k(\mathbb P^1)=k(t)= \operatorname{Frac}k[t]$ here ([[lem-integral-finite-type-scheme-function-field]]); $k[t]$ is a unique factorisation domain, so every nonzero element of $k(t)$ is a unit of $k$ times a finite product of powers of monic irreducible polynomials ([[cor-polynomial-ring-over-a-field-is-a-pid]], [[thm-principal-ideal-domains-are-unique-factorisation-domains]]).

[F11] $H^0(\mathbb P^1_k,\mathcal O(d))$ is the degree-$d$ part $k[x_0,x_1]_d$ of the polynomial ring for $d\ge0$ and vanishes for $d<0$; the coordinate forms $x_0,x_1$ are global sections of $\mathcal O(1)$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[def-twisting-sheaf-proj]]); and $H^1(\mathbb P^1_k,\mathcal O(d))=0$ for every $d\ge-1$, in particular $H^1(\mathbb P^1_k,\mathcal O)=0$ ([[cor-top-cohomology-projective-space-o-d]]). The genus of a smooth proper geometrically integral curve is $g(C)=h^1(C,\mathcal O_C)=\dim_kH^1(C,\mathcal O_C)$ ([[def-genus-euler-characteristic-curve]]).

[F12] A rational section of an invertible sheaf $\mathcal L$ on an integral scheme is a nonzero element of the one-dimensional $K(X)$-vector space $\mathcal L_\eta$: a nonzero global section whose stalk at the generic point is nonzero qualifies ([[def-rational-section-line-bundle]]). On $U_0$ the twist $\mathcal O(1)$ is free with frame $x_0$ and on $U_1$ with frame $x_1$, since $x_1=tx_0$ on the overlap; under the identification of the two models with the two-affine frames $e_0,e_\infty$ of [F2], these frames correspond as $x_0\leftrightarrow e_0$ and $x_1\leftrightarrow e_\infty$, so $x_1=tx_0$ is the relation $e_\infty=te_0$ [F2].

[F13] Cartier divisors form a group $\operatorname{CaDiv}(X)$ whose elements have local meromorphic equations, and the principal Cartier divisors — the images of global meromorphic units — form a subgroup $\operatorname{Prin}(X)$; the quotient $\operatorname{CaDiv}(X)/ \operatorname{Prin}(X)$ is the group of linear equivalence classes ([[def-cartier-divisor]]).

[F14] **Cartier, Weil, and Picard interfaces.** The current [[def-invertible-sheaf-of-cartier-divisor]] constructs $\mathcal O_X(D)$ by local equations, gives $\mathcal O_X(0)\cong\mathcal O_X$, and uses the sign convention positive for zeros. The current [[thm-line-bundle-rational-section-cartier-divisor]] associates to a nonzero rational section $s$ its Cartier divisor $\operatorname{div}(s)$ and an isomorphism $\mathcal O(\operatorname{div}(s))\cong\mathcal L$ carrying the canonical section to $s$. The current [[thm-cartier-weil-divisors-curves-agree]] identifies Cartier divisors and Weil divisors on a smooth proper geometrically integral curve and preserves principal divisors. The degree of an invertible sheaf is the homomorphism supplied by [[cor-degree-descends-picard-curve]], with $\deg_k\mathcal O_C(D)=\deg_kD$; the principal Weil divisor subgroup is defined in [[def-principal-weil-divisor-and-class-group]]. Regular local domains are integrally closed by [[thm-regular-local-rings-are-normal]], as used in [F9] to establish normality before applying the degree homomorphism. AC supplies the DC premise in the Cartier-to-Weil source through [[thm-choice-implies-dependent-implies-countable-choice]].

## Proof

**Given:** the Axiom of Choice inherited from the cohomology, DVR/normality, degree and Cartier-divisor suppliers, with Dependent Choice supplied by [[thm-choice-implies-dependent-implies-countable-choice]]; a field $k$, the projective line $\mathbb P^1_k=\mathbb P^1$ with its two standard charts $U_0=\operatorname{Spec}k[t]$ and $U_1=\operatorname{Spec}k[u]$, related on the overlap by $t=u^{-1}$, and a monic irreducible polynomial $g\in k[t]$ of degree $d$.

[F1] A curve over $k$ is a $k$-scheme that is geometrically integral, separated, of finite type and of chain dimension one; a smooth curve is a curve whose structure morphism is smooth in the local-standard-smooth convention, and a proper curve is one whose structure morphism is proper ([[def-algebraic-curve-over-field]], [[def-smooth-morphism-classical]]).

[F2] The projective line $\mathbb P^1_k$ is the relative projective space $\mathbb P^1_k$ of [[def-relative-projective-space-standard-charts]] with standard charts $U_0=\operatorname{Spec}k[x^{(0)}_1]$ and $U_1=\operatorname{Spec}k[x^{(1)}_0]$ glued along $D(x^{(0)}_1)$ and $D(x^{(1)}_0)$ by $x^{(0)}_1\mapsto1/x^{(1)}_0$, and the charts and transitions are stable under base change; it is canonically $\operatorname{Proj}k[x_0,x_1]$ ([[thm-projective-space-as-proj]]). The two-affine model of [[def-projective-line-two-affine-cover-and-twisting-sheaf]] is the gluing of the same two affine schemes along the same open subschemes by the same transition isomorphism and is therefore canonically isomorphic to $\mathbb P^1_k$ by the uniqueness clause of [[thm-gluing-affine-schemes]]; on the overlap the twists are glued with frames $e_0$ on $U_0$ and $e_\infty$ on $U_1$ related by $e_\infty=t^ne_0$ ([[def-projective-line-two-affine-cover-and-twisting-sheaf]], [[lem-uniqueness-of-twists-on-the-projective-line]], [[def-twisting-sheaf-proj]]). In the identification with $\operatorname{Proj}k[x_0,x_1]$, the origin $[1:0]=V(x_1)$ is the point $t=0$ of $U_0$, and the point at infinity $\infty=[0:1]=V(x_0)$ is the point $u=0$ of $U_1$, outside $U_0$.

[F3] $\mathbb P^n_S\to S$ is proper and of finite type for every scheme $S$ and every $n\ge0$, and a proper morphism is separated ([[thm-projective-space-proper-over-base]], [[lem-projective-space-finite-type-over-base]], [[def-proper-morphism]]). So $\mathbb P^1_k\to\operatorname{Spec}k$ is proper, separated and of finite type.

[F4] A polynomial ring $R[x_1,\dots,x_n]$ is a standard smooth $R$-algebra through the presentation with $c=0$ variables and $g=1$, and a morphism of finite-type $k$-schemes is smooth in the local-standard-smooth convention when every source point has affine neighbourhoods on which the induced ring map is standard smooth at the corresponding prime ([[def-ag-standard-smooth-algebra]], [[def-smooth-morphism-classical]]).

[F5] $\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$ for a finite-type $k$-domain $A$ ([[thm-affine-domain-dimension-transcendence-degree]]), in particular $\dim k[t]=1$ ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]], [[def-krull-dimension-of-a-ring]]); on a finite affine cover of a Noetherian space the chain dimension is the supremum of the chart dimensions ([[lem-chain-dimension-open-cover]], [[def-dimension-noetherian-topological-space]]). Strict chains of nonempty irreducible closed subsets of $\operatorname{Spec}A$ correspond to strict chains of prime ideals, since an irreducible closed $Z$ is $V(\mathfrak p)$ for its prime defining ideal and $Z\subseteq Z'$ matches the reverse inclusion of the ideals ([[thm-irreducible-closed-subsets-and-prime-ideals]]).

[F6] An affine scheme is integral when its coordinate ring is a nonzero domain; such a scheme is nonempty, reduced and irreducible, and a finite-type algebra over a field is Noetherian ([[def-integral-affine-scheme]], [[def-reduced-affine-scheme]]). A space is irreducible exactly when it is nonempty and every two nonempty open subsets meet, equivalently when every nonempty open subset is dense; a nonempty open subspace of an irreducible space is irreducible ([[lem-irreducibility-criteria-and-open-subspaces]]). Geometric integrality means integrality of the algebraic-closure fibre ([[def-algebraic-curve-over-field]]).

[F7] For a point $x$ of a scheme, $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$, and for $\mathfrak p\in\operatorname{Spec}A$ one has $\kappa(\mathfrak p)\cong\operatorname{Frac}(A/\mathfrak p)$ ([[def-residue-field-scheme-point]]); a point of $\operatorname{Spec}R$ is closed exactly when it is a maximal ideal ([[cor-closed-points-of-spectrum-are-maximal-ideals]]); $F[x]$ is a principal ideal domain and $(p)$ is maximal exactly when the nonconstant $p$ is irreducible ([[cor-polynomial-ring-over-a-field-is-a-pid]], [[thm-polynomial-quotient-is-a-field-iff-irreducible]], and the quotient of $F[x]$ by a maximal ideal is identified with the residue field by [[def-residue-field-scheme-point]]). For an algebraic element with minimal polynomial of degree $n$, the simple extension has degree $n$ and power basis $1,a,\dots,a^{n-1}$; the degree $[K:F]$ is $\dim_FK$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]], [[def-extension-degree-and-finite-extension]]).

[F8] A divisor on a curve is a finite formal $\mathbb Z$-linear combination of closed points, its support is the finite set of points with nonzero coefficient, $D=D^+-D^-$ for the positive and negative parts, $D\ge0$ means $D$ effective, and $\deg_kD=\sum_xn_x[\kappa(x):k]$ is a group homomorphism ([[def-degree-divisor-proper-curve]], [[def-divisor-smooth-proper-curve]], [[def-divisor-support-positive-negative-parts]]).

[F9] For a closed point $x$ of a smooth curve $C$ over $k$ the local ring $\mathcal O_{C,x}$ is a discrete valuation ring with a uniformizer $t_x$; every nonzero rational function $f\in k(C)^\times$ has a well-defined order $\operatorname{ord}_x(f)\in\mathbb Z$, every nonzero element of $\mathcal O_{C,x}$ is a unit times a power of $t_x$, and the order is a group homomorphism, so it is additive in products and vanishes on units ([[thm-local-ring-smooth-curve-dvr]], [[def-discrete-valuation]]).

[F10] For an integral finite-type $k$-scheme $X$ the stalk at the generic point is the function field and is canonically $\operatorname{Frac}\Gamma(U,\mathcal O_X)$ for every nonempty affine open $U$, so $k(\mathbb P^1)=k(t)= \operatorname{Frac}k[t]$ here ([[lem-integral-finite-type-scheme-function-field]]); $k[t]$ is a unique factorisation domain, so every nonzero element of $k(t)$ is a unit of $k$ times a finite product of powers of monic irreducible polynomials ([[cor-polynomial-ring-over-a-field-is-a-pid]], [[thm-principal-ideal-domains-are-unique-factorisation-domains]]).

[F11] $H^0(\mathbb P^1_k,\mathcal O(d))$ is the degree-$d$ part $k[x_0,x_1]_d$ of the polynomial ring for $d\ge0$ and vanishes for $d<0$; the coordinate forms $x_0,x_1$ are global sections of $\mathcal O(1)$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[def-twisting-sheaf-proj]]); and $H^1(\mathbb P^1_k,\mathcal O(d))=0$ for every $d\ge-1$, in particular $H^1(\mathbb P^1_k,\mathcal O)=0$ ([[cor-top-cohomology-projective-space-o-d]]). The genus of a smooth proper geometrically integral curve is $g(C)=h^1(C,\mathcal O_C)=\dim_kH^1(C,\mathcal O_C)$ ([[def-genus-euler-characteristic-curve]]).

[F12] A rational section of an invertible sheaf $\mathcal L$ on an integral scheme is a nonzero element of the one-dimensional $K(X)$-vector space $\mathcal L_\eta$: a nonzero global section whose stalk at the generic point is nonzero qualifies ([[def-rational-section-line-bundle]]). On $U_0$ the twist $\mathcal O(1)$ is free with frame $x_0$ and on $U_1$ with frame $x_1$, since $x_1=tx_0$ on the overlap; under the identification of the two models with the two-affine frames $e_0,e_\infty$ of [F2], these frames correspond as $x_0\leftrightarrow e_0$ and $x_1\leftrightarrow e_\infty$, so $x_1=tx_0$ is the relation $e_\infty=te_0$ [F2].

[F13] Cartier divisors form a group $\operatorname{CaDiv}(X)$ whose elements have local meromorphic equations, and the principal Cartier divisors — the images of global meromorphic units — form a subgroup $\operatorname{Prin}(X)$; the quotient $\operatorname{CaDiv}(X)/ \operatorname{Prin}(X)$ is the group of linear equivalence classes ([[def-cartier-divisor]]).

[F14] **Cartier, Weil, and Picard interfaces.** The current [[def-invertible-sheaf-of-cartier-divisor]] constructs $\mathcal O_X(D)$ by local equations, gives $\mathcal O_X(0)\cong\mathcal O_X$, and uses the sign convention positive for zeros. The current [[thm-line-bundle-rational-section-cartier-divisor]] associates to a nonzero rational section $s$ its Cartier divisor $\operatorname{div}(s)$ and an isomorphism $\mathcal O(\operatorname{div}(s))\cong\mathcal L$ carrying the canonical section to $s$. The current [[thm-cartier-weil-divisors-curves-agree]] identifies Cartier divisors and Weil divisors on a smooth proper geometrically integral curve and preserves principal divisors. The degree of an invertible sheaf is the homomorphism supplied by [[cor-degree-descends-picard-curve]], with $\deg_k\mathcal O_C(D)=\deg_kD$; the principal Weil divisor subgroup is defined in [[def-principal-weil-divisor-and-class-group]]. Regular local domains are integrally closed by [[thm-regular-local-rings-are-normal]], as used in [F9] to establish normality before applying the degree homomorphism. AC supplies the DC premise in the Cartier-to-Weil source through [[thm-choice-implies-dependent-implies-countable-choice]].



**Proof technique:** establish the projective-line curve hypotheses first; then compute the closed-point orders, the coordinate divisors and their degrees, and finally reduce every divisor to a multiple of infinity.

1.1 Chart data and the two special points. By [F2] the charts $U_0$ and $U_1$ cover $\mathbb P^1_k$, with overlap $\operatorname{Spec}k[t,t^{-1}]=\operatorname{Spec}k[u,u^{-1}]$ and $t=u^{-1}$. The complement of $U_0$ is the point $u=0$ in $U_1$, namely $\infty=[0:1]=V(x_0)$; the origin $[1:0]=V(x_1)$ is the point $t=0$ in $U_0$. [F2]

1.2 Closed points. The closed points of $U_0=\operatorname{Spec}k[t]$ are the maximal ideals $(g)$ generated by monic irreducible polynomials $g\in k[t]$, by [F7]. For such a $g$ of degree $d$, its homogenization $x_0^d g(x_1/x_0)$ defines a closed point in $U_0$ and does not vanish at $\infty$, since its value at $[0:1]$ is $1$. The only point outside $U_0$ is $\infty$, which is closed on $U_1$. Thus the closed points of $\mathbb P^1_k$ are the points $p=V(g)$ for monic irreducible $g$, together with $\infty$. Every nonempty open subset meets $U_0$, since $\{\infty\}$ is not open. [F2, F7]

1.3 Properness and finite type. By [F3] the structure morphism $\mathbb P^1_k\to\operatorname{Spec}k$ is proper and of finite type; a proper morphism is separated, so $\mathbb P^1_k$ is separated over $k$. [F3]

1.4 Chain dimension one. The two charts are spectra of the Noetherian rings $k[t]$ and $k[u]$, each of dimension one by [F5]. The finite affine cover makes $\mathbb P^1_k$ Noetherian, and [F5] computes its chain dimension as the supremum of the chart dimensions, namely one. [F2, F5, F6]

1.5 Smoothness. Each chart ring $k[t]$ or $k[u]$ is standard smooth over $k$ through the presentation with no equations and one free variable, by [F4]. The charts cover the source, so the structure morphism is smooth in the convention of [F1]. [F1, F2, F3, F4]

2.1 Integrality and geometric integrality. Any two nonempty open subsets of $\mathbb P^1_k$ meet $U_0$ by step 1.2, and their intersections with $U_0$ meet because $k[t]$ is a domain. Hence $\mathbb P^1_k$ is irreducible. Its local rings are localizations of $k[t]$ or $k[u]$, so they are domains and the scheme is reduced; it is therefore integral. After base change to an algebraic closure $\bar k$, [F2] gives the same two-chart description with $\bar k[t]$ and $\bar k[u]$, so the same irreducibility and reducedness proof shows that the base change is integral. Thus $\mathbb P^1_k$ is geometrically integral. [F2, F6, step 1.2]

2.2 Residue degrees of finite points. Let $g\in k[t]$ be monic irreducible of degree $d$ and let $p=V(g)$. Its residue field is $k[t]/(g)$, a simple extension generated by the class of $t$ with minimal polynomial $g$; by [F7], $[\kappa(p):k]=d$. At infinity the residue field is $k$, since $\infty$ is the maximal ideal $(u)$ of $k[u]$. [F7, step 1.2]

3.1 Genus zero. Steps 1.3, 1.4, 1.5 and 2.1 show that $\mathbb P^1_k$ is a smooth proper geometrically integral curve. By [F11], $H^1(\mathbb P^1_k,\mathcal O_{\mathbb P^1_k})=H^1(\mathbb P^1_k,\mathcal O_{\mathbb P^1_k}(0))=0$; the genus definition in [F11] therefore gives $g(\mathbb P^1_k)=0$. [F11, step 1.3, step 1.4, step 1.5, step 2.1]

3.2 Normality. For each closed point the local ring is a DVR by [F9], and the generic local ring is the function field $k(t)$, a field by [F10]. These local rings are regular; by the regular-local normality theorem in [F14] they are integrally closed. Hence $\mathbb P^1_k$ is normal as well as proper, so the degree homomorphism on its Picard group in [F14] applies. [F9, F10, F14, step 1.3, step 2.1]

3.3 Local orders of $g$. For $p=V(g)$, the local ring is $k[t]_{(g)}$; the maximal ideal is generated by the uniformizer $g$, so $\operatorname{ord}_p(g)=1$. At every other finite point $V(g')$, with $g'$ a distinct monic irreducible, $g$ is a unit and its order is zero. At infinity put $u=t^{-1}$. Writing $g(t)=t^d+c_{d-1}t^{d-1}+\cdots+c_0=u^{-d}h(u)$, where $h(0)=1$, shows that $h$ is a unit in $k[u]_{(u)}$ and $\operatorname{ord}_\infty(g)=-d$. These are the DVR orders of [F9], applicable now that the curve hypotheses have been established. [F7, F9, F10, step 1.1, step 1.5, step 2.1]

3.4 Coordinate sections and their divisors. By [F11] the global sections $x_0,x_1$ lie in $H^0(\mathbb P^1_k,\mathcal O(1))$. The sheaf $\mathcal O(1)$ has frame $x_0$ on $U_0$ and frame $x_1$ on $U_1$, with $x_1=t x_0$. Therefore $x_0$ has local coefficients $1$ on $U_0$ and $u$ on $U_1$, while $x_1$ has coefficients $t$ on $U_0$ and $1$ on $U_1$; these nonzero global sections qualify as rational sections by [F12]. By the rational-section dictionary of [F14], $\operatorname{div}(x_0)=[\infty]$ and $\operatorname{div}(x_1)=[1:0]=[V(x_1)]$, with the latter the origin. The same dictionary identifies $\mathcal O(\operatorname{div}(x_0))$ with $\mathcal O(1)$. [F2, F11, F12, F14, step 1.1, step 2.1]

3.5 Additivity of the divisor map. For $f_1,f_2\in k(t)^\times$, additivity of each DVR order in [F9] gives $\operatorname{div}(f_1f_2)=\operatorname{div}(f_1)+\operatorname{div}(f_2)$; constants in $k^\times$ are units at every point and have zero divisor. [F8, F9, F14, step 1.5, step 2.1]

4.1 Degree of $\mathcal O(1)$. By step 3.2 the proper curve $\mathbb P^1_k$ is normal, so [F14] gives $\deg_k\mathcal O(1)=\deg_k\operatorname{div}(x_0)=\deg_k[\infty]$. Since $[\kappa(\infty):k]=1$ by step 2.2, this degree is $1$. Thus $\mathcal O(1)\cong\mathcal O(\infty)$ and has degree one, as in clause 3. [F8, F14, step 3.2, step 2.2, step 3.4]

4.2 The divisor of a monic irreducible. By step 3.3 the only nonzero orders of $g$ occur at $p=V(g)$ and $\infty$, with orders $1$ and $-d$. Thus
$$\operatorname{div}(g)=[p]-d[\infty].$$
Its degree is
$$\deg_k([p]-d[\infty])=[\kappa(p):k]-d[\kappa(\infty):k]=d-d=0,$$
using $[\kappa(p):k]=d$ and $[\kappa(\infty):k]=1$ from step 2.2. The divisor is principal by [F14], so $[p]$ is linearly equivalent to $d[\infty]$. This proves clause 2. [F8, F13, F14, step 2.2, step 3.3]

5.1 Principal divisors have degree zero. By [F10], every nonzero $f\in k(t)$ has a finite factorization $c\prod_i g_i^{n_i}$ with $c\in k^\times$, distinct monic irreducibles $g_i$, and integers $n_i$. By step 3.5 and step 4.2,
$$\operatorname{div}(f)=\sum_i n_i([p_i]-d_i[\infty]).$$
Each summand has degree $[\kappa(p_i):k]-d_i[\kappa(\infty):k]=d_i-d_i=0$, so additivity of divisor degree gives $\deg_k\operatorname{div}(f)=0$. [F8, F10, step 2.2, step 4.2, step 3.5]

5.2 Every divisor is linearly equivalent to its degree times infinity. Let $D=\sum_x n_x[x]$ be any divisor on $\mathbb P^1_k$. By step 1.2, its finite support consists of points $p_i=V(g_i)$ for monic irreducibles $g_i$ of degrees $d_i$, together with a possible term $m[\infty]$. Thus $D=\sum_i n_i[p_i]+m[\infty]$, where each $n_i\in\mathbb Z$, and $\deg_kD=\sum_i n_i d_i+m$ by [F8]. Using step 4.2 for each $g_i$ and the finite product $\prod_i g_i^{n_i}\in k(t)^\times$, including negative exponents, gives
$$D-\deg_k(D)[\infty] =\sum_i n_i([p_i]-d_i[\infty]) =\operatorname{div}\!\left(\prod_i g_i^{n_i}\right).$$
Hence $D\sim\deg_k(D)[\infty]$, proving the first assertion of clause 4. [F8, F13, step 1.2, step 4.2, step 3.5]

6.1 The degree isomorphism on Weil divisor classes. Degree is surjective because $\deg_k(m[\infty])=m$ for every $m\in\mathbb Z$. It vanishes on principal divisors by step 5.1, so it descends to $\operatorname{Div}(\mathbb P^1_k)/\operatorname{Prin}(\mathbb P^1_k)\to\mathbb Z$. If a divisor has degree zero, step 5.2 makes it principal; thus the descended map is injective and is an isomorphism. [F8, F14, step 4.1, step 5.1, step 5.2]

7.1 The Cartier divisor-class statement. By the Cartier-to-Weil isomorphism in [F14], established for the smooth proper geometrically integral curve in steps 1.3, 1.4, 1.5 and 2.1, the map $\operatorname{CaDiv}(\mathbb P^1_k)\to\operatorname{Div}(\mathbb P^1_k)$ is an isomorphism compatible with principal divisors. It therefore induces an isomorphism of the corresponding divisor-class groups. Transporting the degree isomorphism of step 6.1 proves
$$\deg_k:\operatorname{CaDiv}(\mathbb P^1_k)/\operatorname{Prin}(\mathbb P^1_k)\longrightarrow\mathbb Z$$
is an isomorphism. [F13, F14, step 1.3, step 1.4, step 1.5, step 2.1, step 6.1]

8.1 Conclusion and choice accounting. Steps 1.3, 1.4, 1.5, 2.1 and 3.1 prove clause 1, step 4.2 proves clause 2, steps 3.4 and 4.1 prove clause 3, and step 7.1 proves clause 4. The Axiom of Choice enters through the cohomology, local DVR, UFD and Cartier/Picard suppliers; AC supplies the Dependent Choice premise of the curve Cartier-to-Weil and degree routes by [[thm-choice-implies-dependent-implies-countable-choice]]. All other listings and products are finite and all fields $k$ and polynomial degrees $d\ge1$ are allowed. [F5, F9, F10, F11, F14, step 1.3, step 1.4, step 1.5, step 2.1, step 3.1, step 3.4, step 4.1, step 4.2, step 7.1] ∎
