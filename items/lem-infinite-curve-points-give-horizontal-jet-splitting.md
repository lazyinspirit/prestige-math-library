---
dependency_level: 3
id: lem-infinite-curve-points-give-horizontal-jet-splitting
kind: lemma
title: Infinite curve points give a regular horizontal jet splitting
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-relative-curve-jet-torsor-has-affine-contraction
  - lem-affine-jet-functions-have-uniform-pole-bounds
  - lem-normal-affine-variety-has-normal-projective-compactification
  - lem-bounded-affine-jet-images-give-finitely-many-nonhorizontal-sections
  - lem-infinite-derivative-jets-split-a-purely-inseparable-jet-curve
  - lem-negative-tangent-affine-torsor-has-at-most-one-complete-curve
  - lem-proper-closed-scheme-in-affine-bundle-is-finite-over-base
  - thm-purely-inseparable-extension-characterizations
  - thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core
  - thm-lying-over
  - thm-finite-morphism-integral-closed
  - lem-finite-morphism-affine
  - thm-ag-standard-smooth-geometric-regularity
  - thm-regular-local-rings-are-normal
  - lem-curve-closed-subsets-finite
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-global-functions-proper-integral-variety
  - cor-nilradical-as-intersection-of-primes
  - thm-nilradical-of-a-noetherian-ring-is-nilpotent
  - thm-polynomial-is-separable-iff-coprime-to-its-derivative
  - def-quasi-finite-at-a-prime-for-finite-type-algebras
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §§2–3, printed pp. 137–143; explicit jet-contraction assembly"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §§2–3, printed pp. 63–75"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, let $R$ be a smooth affine
integral $k$-variety of positive dimension with function field $K$, and
let $X\to R$ be a smooth projective family of geometrically integral
curves of genus at least two, with $X$ integral. Put $C=X_K$, and suppose
$C(K)$ is infinite. Let $F\to X$ be the derivative splitting bundle.

There is a regular section $\sigma:C\to F_K$ such that
$j(P)=\sigma(P)$ for all but finitely many $P\in C(K)$. Its lifted
coordinate derivations for a separating transcendence basis of $K/k$
commute and, in characteristic $p>0$, have zero $p$th iterates. All
characteristics are included. No isotriviality conclusion is assumed.

## Facts & Assumptions

**Given:** AC and the family and infinite generic point set of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] After a nonempty affine base shrinking, the splitting torsor has
a proper birational surjection $\varphi:F\to Y$ to a normal integral
affine base scheme. Its reduced non-quasi-finite set $E$ is proper over
the base and finite over $X$, and $F\setminus E\cong Y\setminus B$
for the closed image $B$ of $E$.
[[lem-relative-curve-jet-torsor-has-affine-contraction]]

[F2] A normal affine finite-type integral scheme has a normal integral
projective compactification. Given this compactification and a projective
embedding of a smooth proper curve family, finitely many regular functions
on its splitting torsor, evaluated on every derivative jet, lie in fixed
finite-dimensional spaces of base regular functions. With this bounded-space
hypothesis, a morphism to an affine model that is an isomorphism off a closed
locus has only finitely many rational sections with jets outside that locus.
[[lem-normal-affine-variety-has-normal-projective-compactification]]
[[lem-affine-jet-functions-have-uniform-pole-bounds]]
[[lem-bounded-affine-jet-images-give-finitely-many-nonhorizontal-sections]]

[F3] A negative tangent torsor over an algebraically closed-field smooth
proper genus-at-least-two curve has at most one integral proper closed
curve; such a curve has one point over every closed point of the base.
Any proper closed scheme in an affine-space bundle over a field scheme is
finite over its base.
[[lem-negative-tangent-affine-torsor-has-at-most-one-complete-curve]]
[[lem-proper-closed-scheme-in-affine-bundle-is-finite-over-base]]

[F4] If an integral curve in the generic splitting torsor is finite
dominant and purely inseparable over the generic curve and contains
infinitely many actual derivative jets, it is a regular section. The
induced coordinate derivations commute and are $p$-nilpotent in
characteristic $p$.
[[lem-infinite-derivative-jets-split-a-purely-inseparable-jet-curve]]

[F5] In positive characteristic an irreducible polynomial is a separable
irreducible polynomial in $T^{p^e}$. Pure inseparability means that all
algebraic elements have just one distinct conjugate; in characteristic zero
it means a trivial extension. Integral inclusions have lying over; finite
maps are affine on affine target charts and integral.
[[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]
[[thm-purely-inseparable-extension-characterizations]] [[thm-lying-over]]
[[thm-finite-morphism-integral-closed]] [[lem-finite-morphism-affine]]
A separable polynomial is coprime to its derivative.
[[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]

[F6] Smooth schemes over a field are regular, and regular local rings are
normal. Proper closed subsets of integral curves are finite. A nonempty
affine finite-type scheme over algebraically closed $k$ has a $k$-point:
take a maximal ideal and its finite residue field. In particular closed
points are dense in every finite-type $k$-scheme.
[[thm-ag-standard-smooth-geometric-regularity]]
[[thm-regular-local-rings-are-normal]] [[lem-curve-closed-subsets-finite]]
[[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]
[[thm-proper-ideal-contained-in-maximal-ideal]]

[F7] A finite-type map is quasi-finite at a point exactly when its local
fibre algebra is finite-dimensional over the target residue field.
Global functions on an integral proper variety over algebraically closed
$k$ are constant.
[[def-quasi-finite-at-a-prime-for-finite-type-algebras]]
[[thm-global-functions-proper-integral-variety]]
The nilradical is the intersection of primes and is nilpotent in a
Noetherian ring. [[cor-nilradical-as-intersection-of-primes]]
[[thm-nilradical-of-a-noetherian-ring-is-nilpotent]]

## Axiom use

AC is inherited through the stated suppliers, including finite
normalization, cohomology, lying over and maximal ideals. The construction
uses a finite list of affine generators, not cardinal finiteness of a
finite-dimensional vector space over $k$.

## Proof

**Proof technique:** direct; bound all affine jet coordinates, isolate
the exceptional curve, and prove its generic extension purely inseparable
by specializing a separable polynomial.

1.1 Apply [F1] and replace the base by the resulting nonempty affine open. It is smooth and normal by [F6], so [F2] gives a normal projective compactification. The given projective family admits a closed embedding into some $\mathbf P^N_R$. Choose finitely many $k$-algebra generators $y_i$ of the affine scheme $Y$. Each $y_i\circ\varphi$ is regular on $F$. Apply the pole-bound assertion of [F2] to obtain fixed finite-dimensional spaces containing all their values on all derivative jets. The bounded-parameter assertion of [F2] now shows that only finitely many $P\in C(K)$ have generic jet outside $E_K$. Thus infinitely many derivative jets lie in $E_K$, which is finite over $C$ by [F1]. [F1, F2, F6, given, construct]

1.2 We record the fibres of $E\to X$ at closed $k$-points. Fix a closed $t\in R$. At any closed point of $F_t$ the target residue field is $k$. The local fibre algebra for $\varphi_t:F_t\to Y_t$ is the same as for $\varphi$ at that point, since the base point is already fixed in the target. If that local fibre has dimension zero, its maximal ideal is its nilradical and is nilpotent by [F7], and its finite filtration by powers of the maximal ideal has finite-dimensional quotients over its residue field $k$; hence it is finite-dimensional. Thus by [F7] a closed point belongs to $E_t$ exactly when it lies on a positive-dimensional fibre component. Such a component is proper and closed in the affine bundle $F_t\to X_t$, hence finite over $X_t$ by [F3]. It is a curve dominating $X_t$, since a finite scheme over a point is zero-dimensional. Any two such components agree by [F3]; write $A_t$ for their common reduced curve if it exists. Conversely this proper curve maps to a point of the affine target by [F7], so all its closed points are non-quasi-finite. Density of closed points in [F6] gives $E_t=A_t$ as reduced closed subsets, or $E_t$ is empty. By [F3] a nonempty $E_t$ has just one point over each closed point of $X_t$. [F1, F3, F6, F7, given, algebra]

2.1 There are finitely many irreducible components of the finite-type scheme $E_K$. At least one contains infinitely many of the jets in step 1.1; call that reduced integral component $A$. Its image in $C$ contains infinitely many points, so is all of $C$ by [F6] and finiteness. Hence $A$ is an integral curve finite dominant over $C$. Its reduced closure $Z$ in $E$ is integral and finite over $X$, by [F1]; its image is closed and contains the generic point of $X$, so it is surjective. For every closed point $x\in X$, its image $t\in R$ is closed with residue field $k$, by [F6]. The nonempty fibre $Z_x$ is contained in $E_x$, and step 1.2 says that $E_x$ has one point. Therefore every closed fibre of $Z\to X$ has exactly one point. [F1, F5, F6, algebra, step 1.1, step 1.2]

3.1 Put $L=K(C)=k(X)$ and $M=K(A)=k(Z)$. We prove $M/L$ purely inseparable. Otherwise [F5] gives a separable element $\beta\in M$ of degree $d>1$ over $L$: in characteristic $p$, take the $p^e$th power of an element whose irreducible polynomial has separable core of degree greater than one; in characteristic zero every nontrivial algebraic element is separable. On an affine open $\operatorname{Spec}H\subseteq X$, write its finite inverse image as $\operatorname{Spec}J\subseteq Z$. After inverting a nonzero element of $H$, we may assume $\beta\in J$ and its monic minimal polynomial $Q$ has coefficients in $H$ and a Bezout identity $UQ+VQ'=1$ with $U,V\in H[T]$. This identity exists over $L$ because $Q$ is separable by [F5], and its finitely many denominators can be cleared by further base localization. For the first assertion, $J\otimes_H L$ is the finite-dimensional domain $M$, so express $\beta$ as a linear combination over $L$ of finite $H$-module generators of $J$ and clear base denominators. Monic polynomial division gives $H[\beta]\cong H[T]/(Q)$. Choose a closed $k$-point of this nonempty affine open by [F6]. There $Q$ specializes to a monic degree-$d$ polynomial with distinct roots, which splits over algebraically closed $k$. It gives $d$ distinct points in the fibre of $\operatorname{Spec}H[\beta]$. The inclusion $H[\beta]\subseteq J$ is integral by [F5], so lying over lifts all these to distinct points of $Z$ over the same closed point of $X$. This contradicts step 2.1. Thus $M/L$ is purely inseparable. [F5, F6, algebra, step 2.1]

4.1 Apply [F4] to $A\subseteq F_K$. It is a regular section $\sigma:C\to F_K$ and has the stated commuting and nilpotence properties. In fact all but finitely many of the jets in $E_K$ lie on this section. Every closed point $e\in E$ maps to a closed point $x\in X$ by [F6]. Surjectivity of $Z\to X$ gives a point of $Z_x$, and the one-point-fibre assertion of step 1.2 makes it the same point $e$. Thus all closed points of $E$ lie on $Z$, and density in [F6] gives $E=Z$ as reduced closed subsets, including any components supported over a proper base subset. Its generic fibre is therefore $A$ as a reduced closed subset. Combining this with the finite exceptional set of step 1.1 gives $j(P)=\sigma(P)$ for all but finitely many $P$. No isotriviality or field-descent theorem has been used. [F1, F4, F6, given, step 1.1, step 1.2, step 2.1, step 3.1] ∎
