---
dependency_level: 1
id: lem-vector-extension-of-an-elliptic-curve-has-a-proper-affine-quotient-in-characteristic-p
kind: lemma
title: "A vector extension of an elliptic curve has a proper affine quotient in characteristic p"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-pointed-genus-one-curve-has-a-regular-group-law-by-relative-Riemann-Roch
  - thm-nonaffine-abelian-multiplication-finite-faithfully-flat
  - thm-nonaffine-finite-flat-affine-equivalence-quotient
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - lem-nonaffine-group-monomorphism-closed-immersion
  - thm-proper-quasi-finite-is-finite
  - lem-quasi-finite-morphism-fibre-characterization
  - thm-faithfully-flat-descent-of-flatness
  - thm-flatness-criteria-by-injections-and-ideals
  - thm-nonempty-regular-locus-reduced-variety-perfect-field
  - thm-regular-equals-smooth-over-perfect-field
  - thm-proper-morphism-closed-image
  - lem-proper-source-to-separated-target-proper
  - thm-flat-finite-presentation-is-open
  - lem-ag-geometric-regularity-field-tests
  - def-smooth-morphism-schemes
  - thm-proper-ideal-contained-in-maximal-ideal
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, Chapter I §7, Proposition 7.1 and Theorem 7.2, printed pp. 32–33; multiplication in positive characteristic; finite affine quotient construction supplied locally"
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: "SGA3, Expose IV, represented sheaves and finite flat equivalence quotients; local proved supplier used"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp4-13oct24.pdf
verification: {}
---

## Statement

Assume AC. Let $F$ have characteristic $p>0$. Let $E/F$ be a smooth
proper geometrically integral genus-one curve with a rational identity
and its algebraic group law. Suppose $G$ is a separated smooth
commutative finite-type $F$-group in an exact sequence of fppf sheaves
$$0\longrightarrow V\longrightarrow G\xrightarrow{\pi}E
\longrightarrow0,$$
where $V$ is a finite-dimensional vector group and $\pi$ is a $V$-torsor.
There are an affine finite-type commutative $F$-group $Y$, a finite
faithfully flat homomorphism $q:V\to Y$, and a homomorphism
$\psi:G\to Y$ restricting to $q$, with the following properties.

The kernel $A=\ker\psi$ is a smooth proper geometrically integral curve.
There is a finite faithfully flat homomorphism $\theta:E\to A$ with
$\pi\theta=[p]_E$ and
$$[p]_G=\theta\pi.$$
The map $\psi$ is proper and smooth with geometrically integral curve
fibres; explicitly its pullback along $q:V\to Y$ is $A\times V\to V$.
The assertions include $V=0$ and nonreduced finite subgroup schemes.

## Facts & Assumptions

**Given:** AC, $F$, $E$, $G$, $V$ and the specified exact torsor sequence.

[A1] AC implies DC. [[def-axiom-of-choice]]
[[thm-choice-implies-dependent-implies-countable-choice]]

[F1] A pointed smooth proper genus-one curve has its regular commutative
group law. On an abelian variety multiplication by $p$ is finite
faithfully flat, including in characteristic $p$, with finite flat kernel.
[[lem-pointed-genus-one-curve-has-a-regular-group-law-by-relative-Riemann-Roch]]
[[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]]

[F2] A finite locally free equivalence relation on an affine finite-type
scheme has an affine finite-type fppf quotient: its quotient map is
finite faithfully flat and its kernel pair is the given relation.
[[thm-nonaffine-finite-flat-affine-equivalence-quotient]]

[F3] Scheme morphisms descend uniquely through fppf covers. A finite-type
group homomorphism with trivial scheme kernel is a closed immersion.
[[lem-nonaffine-fppf-descent-of-scheme-morphisms]]
[[lem-nonaffine-group-monomorphism-closed-immersion]]

[F4] A proper quasi-finite morphism is finite; quasi-finiteness is
recognized by finite geometric fibres. Flatness descends faithfully flat
locally, as seen also from injectivity of ideal tensor maps.
[[thm-proper-quasi-finite-is-finite]]
[[lem-quasi-finite-morphism-fibre-characterization]]
[[thm-faithfully-flat-descent-of-flatness]]
[[thm-flatness-criteria-by-injections-and-ideals]]

[F5] A reduced finite-type scheme over a perfect field has a nonempty
regular open on each component, and regularity there means smoothness.
Proper maps have closed image, a morphism from a proper source to a
separated field scheme is proper, and flat finitely presented morphisms
are open.
[[thm-nonempty-regular-locus-reduced-variety-perfect-field]]
[[thm-regular-equals-smooth-over-perfect-field]]
[[thm-proper-morphism-closed-image]]
[[lem-proper-source-to-separated-target-proper]]
[[thm-flat-finite-presentation-is-open]]
Geometric regularity descends under field extension; smoothness means
flatness, local finite presentation and geometric regularity of fibres.
[[lem-ag-geometric-regularity-field-tests]]
[[def-smooth-morphism-schemes]]

[F6] Under AC every proper ideal is contained in a maximal ideal. Over
an algebraically closed field, maximal ideals of polynomial algebras are
evaluation ideals. Thus every nonempty locally closed finite-type locus
has a rational closed point; closed points are dense, and a regular
function on a reduced finite-type algebra vanishing on all of them is
zero (apply the same assertion to its nonempty principal open if it is
nonzero).
[[thm-proper-ideal-contained-in-maximal-ideal]]
[[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]

## Axiom use

AC supplies DC to [F1] and is inherited from finite flat quotient and
morphism descent. Only quotients by explicitly finite flat affine
relations occur; no general algebraic-group quotient theorem is needed.

## Proof

**Proof technique:** direct; multiplication by the characteristic kills
the vector kernel, and two finite flat affine quotients construct the
proper-fibre affine map.

1.1 Since $[p]_V=0$, the morphism $[p]_G$ has equal pullbacks under the two projections of $G\times_EG=G\times V$: two lifts differ by $v\in V$, whose $p$-multiple is zero. By [F3] it descends through the fppf torsor $\pi$ to a homomorphism $\theta:E\to G$, with $[p]_G=\theta\pi$. Equality after the faithfully flat cover also shows $\pi\theta=[p]_E$. Thus $\theta$ is nonconstant by [F1]. It is proper by [F5], and each geometric fibre is contained in a finite fibre of $[p]_E$, so it is quasi-finite and finite by [F4]. Put $N=\ker\theta\subset E[p]$; it is a finite flat $F$-group scheme, since every finite $F$-scheme is flat over $F$. [A1, F1, F3, F4, F5, given, construct, algebra]

2.1 Apply [F2] to translation by $N$ on the finite affine group $E[p]$. The relation is $E[p]\times N$, whose map into $E[p]\times E[p]$ is a monomorphism; its projections are finite locally free. The quotient $H=E[p]/N$ is affine, and finite over $F$ because its invariant ring is a subspace of the finite-dimensional coordinate algebra of $E[p]$. Its quotient map is finite faithfully flat. Addition and inversion descend by [F3], making $H$ a commutative finite flat group. Restricting $\theta$ to $E[p]$ gives a morphism to $V$, and descent gives $\iota:H\to V$. Its scheme kernel is trivial: fppf-locally lift an element to $E[p]$; its image is zero precisely when its lift belongs to $N$. Hence $\iota$ is a closed immersion by [F3]. Identify $H$ with this finite flat subgroup of $V$. [F1, F2, F3, construct, algebra, step 1.1]

3.1 Apply [F2] to the free translation action of $H$ on the affine vector group $V$. It gives an affine finite-type quotient $Y=V/H$ and finite faithfully flat map $q:V\to Y$ with kernel pair $V\times H$. The group operations descend by [F3], so $Y$ is a commutative group and $\ker q=H$ as schemes. Pull back $\pi:G\to E$ along the finite faithfully flat $[p]_E:E\to E$. The result is explicitly $E\times V$, with map to $G$ given by $(Q,v)\mapsto\theta(Q)+v$. Two such lifts of the same element have $Q'=Q+h$ with $h\in E[p]$ and $v'=v-\theta(h)$. Since $\theta(h)\in H$, the map $(Q,v)\mapsto q(v)$ agrees on the kernel pair. Descent [F3] gives a homomorphism $\psi:G\to Y$ restricting to $q$ on $V$. [F1, F2, F3, construct, algebra, step 2.1]

4.1 Let $A=\ker\psi$. Pulling the finite faithfully flat cover $E\times V\to G$ back to $A$ gives $E\times H\to A$, $(Q,h)\mapsto\theta(Q)+h$. Cover $H$ by the finite faithfully flat $E[p]\to H$ of step 2.1. The resulting cover $E\times E[p]\to A$ is $(Q,h)\mapsto\theta(Q+h)$, hence the composite of the finite faithfully flat projection $(Q,h)\mapsto Q+h$ onto $E$ with $\theta:E\to A$. The latter morphism is finite by step 1.1 and is surjective because the displayed composite is. It is flat: flatness of the composite descends along its faithfully flat source cover $E\times E[p]\to E$ by [F4]. Concretely a kernel of an ideal tensor map for $\mathcal O_A\to\mathcal O_E$ becomes zero after that faithful flat extension and was therefore zero. Thus $\theta:E\to A$ is finite faithfully flat. This argument identifies the scheme kernel fibre, including its possible nilpotents; it is not merely an assertion about geometric points. [F2, F4, algebra, step 1.1, step 2.1, step 3.1]

5.1 The scheme $A$ is proper: after any field-scheme base change, a closed subset of $A$ has closed inverse image in proper $E$, and its image in the new base equals that inverse image's image because $\theta$ remains surjective. Thus $A$ is universally closed; it is separated and finite type as a closed subscheme of $G$. After an algebraic closure, faithful flatness of $\theta$ injects each affine ring of $A$ into sections on its preimage in the reduced curve $E$, so $A$ is reduced. Surjectivity from geometrically integral $E$ makes it geometrically irreducible, and finiteness gives dimension one. Its algebraically closed fibre has a nonempty regular open by [F5]. Translation by any of its geometric points is an automorphism; translating one regular closed point to every other closed point proves regularity everywhere, since the nonregular closed locus would otherwise have a closed point. By [F5] this fibre is smooth. Smoothness descends under field extension (equivalently check its standard smooth Jacobian charts faithfully flat locally), so $A$ is a smooth proper geometrically integral curve over $F$. [F4, F5, F6, algebra, step 4.1]

6.1 There is an isomorphism $A\times V\cong G\times_YV$, $(a,v)\mapsto(a+v,v)$; its inverse is $(g,v)\mapsto(g-v,v)$, because $\psi(g)=q(v)$ is exactly the condition $g-v\in A$. Hence after the finite faithfully flat cover $q:V\to Y$, the map $\psi$ is a product with $A$. It is proper: for every target base change, a closed-set image becomes closed after that cover by properness of $A$, and closedness descends along a finite surjective map, which is a quotient map on underlying spaces. Finite type and separatedness already hold. Each geometric fibre becomes a translate of $A$ after a field extension supplying a lift to $V$; it is therefore smooth and geometrically integral of dimension one. Smoothness of $\psi$ follows from its flatness, finite presentation and these smooth fibres: flatness descends from the displayed product by [F4], and the local standard smooth criterion applies. This proves all fibre assertions and the identities of the Statement. If $V=0$, then $H=0$, $Y=\operatorname{Spec}F$, and the same argument gives $A=G=E$; no positive vector dimension was used. [F3, F4, F5, algebra, step 3.1, step 5.1] ∎
