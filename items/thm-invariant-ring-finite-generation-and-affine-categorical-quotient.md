---
id: thm-invariant-ring-finite-generation-and-affine-categorical-quotient
kind: theorem
title: Finite generation of invariants and the affine categorical quotient
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group, lem-reynolds-operator-and-invariant-subring-properties, lem-invariant-ring-of-finite-dimensional-module-is-finitely-generated, def-categorical-and-geometric-quotients-of-classical-varieties, lem-orbit-dimension-and-closed-orbits-for-complex-group-actions, thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module, thm-classical-affine-nullstellensatz-correspondence, thm-classical-affine-morphisms-coordinate-ring-antiequivalence, thm-proper-ideal-contained-in-maximal-ideal, def-classical-affine-coordinate-ring, def-axiom-of-choice, def-normal-point-and-normal-variety, thm-normality-is-local-for-domains, def-integral-closure-and-integrally-closed-domain, def-rational-action-on-affine-variety, thm-classical-principal-open-coordinate-ring-localization]
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
    - title: "V. L. Popov and E. B. Vinberg, Invariant Theory, in Algebraic Geometry IV, Encyclopaedia of Mathematical Sciences 55, Springer 1994"
      url: "https://www.mathnet.ru/php/getFT.phtml?jrnid=intf&paperid=158&what=fullt&option_lang=rus"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a
complex reductive affine algebraic group and let $X$ be an affine algebraic set
with an algebraic $G$-action ([[def-rational-action-on-affine-variety]]). Then:
(i) $\mathbb C[X]^G$ is a finitely generated $\mathbb C$-algebra; (ii) for any
finite generating set $f_1,\dots,f_n$ of $\mathbb C[X]^G$ the image of the
morphism $X\to\mathbb C^n$, $x\mapsto(f_1(x),\dots,f_n(x))$, is closed and is
canonically isomorphic to the affine variety with coordinate ring
$\mathbb C[X]^G$, so the quotient is independent of generators up to this
canonical isomorphism; (iii) the resulting surjective $G$-invariant morphism
$\pi:X\to X/\!/G:=\operatorname{Spec}\mathbb C[X]^G$ is a categorical quotient
([[def-categorical-and-geometric-quotients-of-classical-varieties]]); (iv) for
every closed $G$-stable subset $Y\subseteq X$ the induced morphism
$Y/\!/G\to X/\!/G$ is a closed immersion, and for closed $G$-stable
$Y,Y'\subseteq X$ one has $\pi(Y\cap Y')=\pi(Y)\cap\pi(Y')$; (v) every fibre of
$\pi$ contains exactly one closed $G$-orbit; (vi) if $X$ is irreducible then so
is $X/\!/G$, and if in addition $X$ is normal then so is $X/\!/G$.

## Facts & Assumptions

**Given:** AC; a complex reductive affine algebraic group $G$; an affine algebraic set $X$ with algebraic $G$-action; $A=\mathbb C[X]$ and its invariant subalgebra $A^G$; a finite generating set $f_1,\dots,f_n$ of $A^G$ when mentioned; the Reynolds operator $R_X:A\to A^G$.

[F1] *Invariants of a finite-dimensional module.* If $V$ is a finite-dimensional rational $G$-module, then $\mathbb C[V]^G$ is a finitely generated $\mathbb C$-algebra ([[lem-invariant-ring-of-finite-dimensional-module-is-finitely-generated]]).

[F2] *Reynolds ideal theory.* For every ideal $I\subseteq A^G$ one has $R_X(IA)=I$, the extension $I\mapsto IA$ is injective on ideals of $A^G$, and if $\varphi:A\to B$ is a surjective $G$-equivariant homomorphism of rational $G$-algebras then $\varphi(A^G)=B^G$ ([[lem-reynolds-operator-and-invariant-subring-properties]]). The Reynolds operator is natural under equivariant maps and linear over invariant elements ([[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]]).

[F3] *Equivariant linear embedding.* There is a finite-dimensional rational submodule $W\subseteq A$ generating $A$ such that evaluation is an equivariant isomorphism of $X$ onto a closed invariant subset of $W^*$, so that the coordinate map $\mathbb C[W^*]\to A$ is a surjective $G$-algebra map ([[thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module]]).

[F4] *Nullstellensatz correspondence.* Radical ideals of a coordinate ring correspond to closed subsets of the affine algebraic set, points to maximal ideals, and a point lies in a closed set exactly when its maximal ideal contains the radical ideal of the set ([[thm-classical-affine-nullstellensatz-correspondence]]).

[F5] *Morphisms and coordinate rings.* Pullback is a natural bijection between morphisms of affine algebraic sets and unital $k$-algebra maps of coordinate rings, reversing composition ([[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]]).

[F6] *Maximal ideals.* In a nonzero commutative ring every proper ideal is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]], AC).

[F7] *Closed orbits exist in closures.* Every orbit of minimal dimension in $X$ is closed, and every orbit closure contains a closed orbit ([[lem-orbit-dimension-and-closed-orbits-for-complex-group-actions]], (c)).

[F8] *Categorical quotients.* A $G$-invariant morphism $\pi:X\to Y$ is a categorical quotient if every $G$-invariant morphism $f:X\to Z$ of classical varieties factors uniquely as $f=\varphi\circ\pi$ with $\varphi:Y\to Z$ a morphism ([[def-categorical-and-geometric-quotients-of-classical-varieties]]).

[F9] *Normality is integral closedness.* For a domain $A$, being integrally closed is equivalent to every prime localisation being integrally closed ([[thm-normality-is-local-for-domains]]), and normality of an irreducible affine variety means that its coordinate domain is integrally closed in its fraction field ([[def-normal-point-and-normal-variety]], [[def-integral-closure-and-integrally-closed-domain]]).

[F10] *Principal opens and their functions.* For an affine algebraic set $T$ with coordinate ring $B$, the principal open $D_T(g)$ is affine: the map $t\mapsto(t,1/g(t))$ identifies it with the closed set $g(t)u=1$ in $T\times\mathbb A^1$, with inverse the first projection. Its regular-function algebra is $B_g$ ([[thm-classical-principal-open-coordinate-ring-localization]]). Principal opens form a basis, since a point outside a polynomial zero locus has some defining polynomial nonzero there.

## Proof

**Proof technique:** direct.

1.1 Part (i): by [F3] there is a finite-dimensional rational module $W$ and a surjective $G$-algebra map $\mathbb C[W^*]\to A$; by [F1] the invariant algebra $\mathbb C[W^*]^G$ is finitely generated over $\mathbb C$; by the surjectivity statement of [F2] the induced map $\mathbb C[W^*]^G\to A^G$ is surjective. Hence $A^G$ is a finitely generated $\mathbb C$-algebra. [F1, F2, F3]

2.1 The localisation identity: for $f\in A^G$, the algebra $A_f$ is rational, since each fraction $a/f^m$ lies in the image of a finite-dimensional rational submodule containing $a$, divided by the invariant $f^m$. Thus the Reynolds operator exists on $A_f$. Naturality under $A\to A_f$ and linearity over the invariant invertible element $f$ give $R_{A_f}(a/f^m)=R_A(a)/f^m$. If $a/f^m$ is invariant, it is fixed by $R_{A_f}$ and hence has an invariant numerator. Conversely every fraction with invariant numerator is invariant. The natural map $(A^G)_f\to A_f$ is injective: if $a\in A^G$ is killed by a power of $f$ in $A$, the same equation holds in the subring $A^G$. Hence $(A_f)^G=(A^G)_f$, without asserting injectivity of the unlocalized map $A^G\to A_f$. [F2, step 1.1]

2.2 Parts (ii) and (iii), core: let $I\subseteq A^G$ be a maximal ideal and put $J=IA$. Then $J\cap A^G=R_X(J)=I\ne A^G$ by [F2], so $J$ is a proper ideal of $A$; by [F6] it lies in a maximal ideal $\mathfrak m$ of $A$. The contraction $\mathfrak m\cap A^G$ is proper and contains $I$, so maximality of $I$ gives $\mathfrak m\cap A^G=I$. By the correspondence [F4] the maximal ideal $\mathfrak m$ is a point $x\in X$ with $\pi(x)=I$. Thus $\pi:X\to\operatorname{Spec}A^G$ is surjective. For a finite generating set $f_1,\ldots,f_n$ of $A^G$, let $P=\mathbb C[t_1,\ldots,t_n]$ and map $t_i\mapsto f_i$; this is surjective onto $A^G$. The subring $A^G$ of the reduced ring $A$ is reduced, so this kernel is radical; [F4] identifies its zero locus with the coordinate-ring model, giving a closed embedding $\operatorname{Spec}A^G\hookrightarrow\mathbb C^n$. The morphism in (ii) is the composite of the surjective $\pi$ with this closed embedding, so its image is exactly that closed affine subvariety. If a different generating set is chosen, both closed images represent $\operatorname{Spec}A^G$ via their coordinate-ring maps, and [F5] gives the canonical isomorphism between them. [F2, F4, F5, F6, step 1.1]

2.3 Part (vi): if $X$ is irreducible then $A$ is a domain by [F4], and $A^G$ is a subring of a domain, hence a domain, so $X/\!/G=\operatorname{Spec}A^G$ is irreducible. If in addition $X$ is normal, then $A$ is integrally closed in $F(A)$; let $u\in\operatorname{Frac}(A^G)$ be integral over $A^G$. Since $\operatorname{Frac}(A^G)\subseteq\operatorname{Frac}(A)^G$, the element $u$ lies in $\operatorname{Frac}(A)$ and is integral over $A$, so $u\in A$; being fixed by $G$, it lies in $A^G$. Hence $A^G$ is integrally closed in its fraction field, and by [F9] the variety $X/\!/G$ is normal. [F4, F9, step 1.1]

3.1 Part (iv): let $Y\subseteq X$ be closed and $G$-stable with radical ideal $I_Y\subseteq A$. The quotient map $A\to A/I_Y$ is surjective and $G$-equivariant, so by [F2] the induced map $A^G\to(A/I_Y)^G$ is surjective with kernel $I_Y\cap A^G$; by [F5] the corresponding morphism $Y/\!/G=\operatorname{Spec}(A/I_Y)^G\to\operatorname{Spec}A^G=X/\!/G$ is a closed immersion. For closed $G$-stable $Y,Y'$ and a point $q\in X/\!/G$ with maximal ideal $\mathfrak m\subseteq A^G$, one has $q\in\pi(Y)\cap\pi(Y')$ exactly when both $I_Y+\mathfrak mA$ and $I_{Y'}+\mathfrak mA$ are proper. If they are, then $I_Y+I_{Y'}+\mathfrak mA$ is proper: otherwise $1=a+b+c$ with $a\in I_Y$, $b\in I_{Y'}$, $c\in\mathfrak mA$, and applying $R_X$, which maps $I_Y$ into $I_Y\cap A^G\subseteq\mathfrak m$, $I_{Y'}$ into $\mathfrak m$ and $\mathfrak mA$ onto $\mathfrak m$, would give $1\in\mathfrak m$. A maximal ideal containing this proper ideal is a point of $Y\cap Y'$ mapping to $q$, so $q\in\pi(Y\cap Y')$; the reverse inclusion is immediate. [F2, F4, F5, F6, step 2.2]

4.1 Part (v): each fibre $\pi^{-1}(q)$ is nonempty by surjectivity of step 2.2, closed and $G$-stable; it contains a closed orbit by [F7]. If it contained two distinct closed orbits $Gx,Gx'$, then applying part (iv) of step 3.1 to the closed $G$-stable sets $Gx$ and $Gx'$ gives $\pi(Gx)\cap\pi(Gx')=\pi(Gx\cap Gx')=\varnothing$, contradicting that both contain $q$. Hence each fibre contains exactly one closed orbit. [F7, step 2.2, step 3.1]

5.1 Part (iii), full universality: let $h:X\to Z$ be a $G$-invariant morphism to a separated classical variety $Z$. First, $h$ is constant on every fibre of $\pi$: for $y$ in a fibre, $h$ is constant on the closure of the orbit $Gy$, because the preimage of the value $h(y)$ is closed in $X$ and contains $Gy$; that closure lies in the fibre, which is closed and $G$-stable, and contains the unique closed orbit of the fibre by step 4.1, so $h(y)$ equals the value on that orbit, the same value on every point of the fibre. Write $\bar h$ for the induced map on $X/\!/G$. For $q\in X/\!/G$ choose an affine chart $V\subseteq Z$ containing $\bar h(q)$; the closed $G$-stable set $C=h^{-1}(Z\setminus V)$ has closed image $\pi(C)$ by step 3.1, and $q\notin\pi(C)$ because the whole fibre of $q$ maps into $V$. A regular function $g\in A^G$ vanishes on $\pi(C)$ and is nonzero at $q$ by the correspondence [F4]; then $h$ maps the principal open $X_g=\pi^{-1}(D(g))$ into $V$, each coordinate of $h|_{X_g}$ is an invariant regular function on the affine open $X_g$, hence lies in $(A_g)^G=(A^G)_g$ by [F10] and step 2.1, and the dictionary [F5] produces a morphism $D(g)\to V$ inducing $\bar h$. These local morphisms agree on overlaps, since $\pi$ is surjective, so they glue to a morphism $\bar h:X/\!/G\to Z$ with $\bar h\circ\pi=h$; uniqueness is surjectivity of $\pi$. Thus $\pi$ is a categorical quotient, and (ii) follows from the same dictionary because any two finite generating sets present $\operatorname{Spec}A^G$ canonically. [F4, F5, F8, F10, step 2.1, step 3.1, step 4.1]

6.1 Assembly and conventions: (i) is step 1.1, (ii) and (iii) are steps 2.2 and 5.1, (iv) is step 3.1, (v) is step 4.1 and (vi) is step 2.3. In the classical register, $\operatorname{Spec}$ of a finitely generated reduced complex algebra denotes the affine variety of its complex closed points with the classical regular-function sheaf, and no identification with the space of all scheme primes is used. If $X=\varnothing$ then $A=0$, the invariant algebra is zero, finite generation is immediate, $X/\!/G=\varnothing$, and the fibre assertions are vacuous; the maximal-ideal argument above concerns nonempty $X$. The Axiom of Choice is inherited from the embedding, Reynolds, Nullstellensatz and normality suppliers named above. This proves all six clauses. [F1, F2, F4, F9, step 1.1, step 2.2, step 3.1, step 4.1, step 5.1, step 2.3] ∎

## Remarks

- This is Brion's proof of Theorem 1.24 (printed pp. 8-9) with the two reductions isolated above: finite generation passes through an equivariant linear embedding and the finite-dimensional case, while surjectivity, closedness and the fibre statements pass through the maximal-ideal extension $I\mapsto IA$ and the radical-safe intersection argument.
- The full classical universality in (iii) replaces Brion's affine-target formulation by the descent argument of step 5.1; this is the strengthened statement used by the projective GIT consumers downstream.
- AC enters only through the named suppliers; the ideal-theoretic computations themselves are choice-free.
