---
dependency_level: 4
id: lem-finite-extension-normal-curve-model-and-place-restriction
kind: lemma
title: "Normal proper curve models and place restriction for finite function-field extensions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-one-variable-function-field-with-constant-field
  - cor-noether-normalisation-module-finiteness
  - thm-polynomial-algebras-over-fields-have-finite-integral-closures
  - lem-integral-closure-unchanged-across-an-integral-intermediate-domain
  - thm-integral-closure-is-integrally-closed
  - thm-normalization-glues-integral-finite-type-curves
  - thm-gluing-affine-schemes
  - lem-composite-finite-proper-morphism-proper
  - lem-proper-source-to-separated-target-proper
  - cor-dimension-preserved-by-integral-extensions
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - def-order-codimension-one-rational-function
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian
  - thm-normality-is-local-for-domains
  - cor-field-finite-type-over-a-field-is-a-finite-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, Theorem1.9 and complete §4 proof"
      url: "https://arxiv.org/pdf/math/0601046v2"
    - title: "The Stacks Project, normalization of schemes and algebraic curves; local reconstruction from polynomial finite integral closure"
      url: "https://stacks.math.columbia.edu/tag/032O"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $C/k$ be the normal proper integral curve of a one-variable function-field datum with exact constants $K/k$, and let $E/K$ be finite, including inseparable extensions. The integral closures of affine charts of $C$ in $E$ glue to a normal proper integral curve $D$ with function field $E$, and a finite dominant morphism $\pi:D\to C$. The relative algebraic closure $k_E$ of $k$ in $E$ is finite over $k$, and $D$ is a normal proper curve over $k_E$. For each closed point $w\in D$, its image $v\in C$ is closed and there is an integer $e_w\ge1$ such that
$$\operatorname{ord}_w(a)=e_w\operatorname{ord}_v(a)\quad(a\in K^\times).$$
Consequently the specified absolute value at $w$ for $E/k_E$, restricted to $K$, is a positive real power of the specified absolute value at $v$ for $K/k$. Smoothness or perfectness of either constant field is unnecessary.

## Statement references

[[def-axiom-of-choice]]

[[def-one-variable-function-field-with-constant-field]]

## Facts & Assumptions

**Given:** The datum, curve and finite extension in the statement.

[F1] A finite-type domain over $k$ is finite over a polynomial subalgebra; the integral closure of a polynomial algebra in any finite extension of its fraction field is finite. ([[cor-noether-normalisation-module-finiteness]], [[thm-polynomial-algebras-over-fields-have-finite-integral-closures]])

[F2] Across an integral intermediate domain, integral closure in a fixed field is unchanged; the integral closure in a field is integrally closed. ([[lem-integral-closure-unchanged-across-an-integral-intermediate-domain]], [[thm-integral-closure-is-integrally-closed]])

[F3] Affine schemes glue from compatible overlap isomorphisms. The normalization construction gives the principal-open overlap procedure for affine integral closures. ([[thm-gluing-affine-schemes]], [[thm-normalization-glues-integral-finite-type-curves]])

[F4] A finite morphism followed by a proper morphism is proper; a morphism from a proper scheme over a base to a separated scheme over that base is proper. ([[lem-composite-finite-proper-morphism-proper]], [[lem-proper-source-to-separated-target-proper]])

[F5] Finite-type algebras over fields are Noetherian, a module-finite algebra over a Noetherian ring is Noetherian, and integral closedness localizes; residue fields at closed points of finite-type field algebras are finite. ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian]], [[thm-normality-is-local-for-domains]], [[cor-field-finite-type-over-a-field-is-a-finite-extension]]) Injective integral extensions preserve dimension. A one-dimensional normal Noetherian domain has discrete valuation rings at its closed-point localizations, with the normalized order determined by a uniformizer. ([[cor-dimension-preserved-by-integral-extensions]], [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]], [[def-order-codimension-one-rational-function]])

[F6] The specified absolute values have the form $\exp(-c_k\operatorname{ord}_v(a)[\kappa(v):k])$, with $c_k>0$. ([[def-one-variable-function-field-with-constant-field]])

[A1] Full Choice is inherited through normalization, gluing and properness; no separable normal closure is used. ([[def-axiom-of-choice]])

## Proof

1.1 On an affine chart $\operatorname{Spec}A\subset C$, [F1] gives a polynomial subalgebra $R$ over which $A$ is finite. Since $K=\operatorname{Frac}A$ is finite over $\operatorname{Frac}R$ and has transcendence degree one, $R=k[t]$ for a transcendental $t$. The extension $E/k(t)$ is finite. Let $B$ be the integral closure of $A$ in $E$. By [F2] it is the integral closure of $R$ in $E$, hence finite over $R$ by [F1] and therefore finite over $A$: the same $R$-module generators span over $A$, and multiplication by $A$ preserves $B$. Also $\operatorname{Frac}B=E$. Indeed, for any $z\in E$, clear the coefficients of a monic equation over $K$ by $a\in A\setminus\{0\}$; then $az$ satisfies a monic equation over $A$, so $z=(az)/a\in\operatorname{Frac}B$. Thus $B$ is a finite Noetherian integrally closed domain of dimension one by [F2] and [F5]. [F1, F2, F5, algebra]

1.2 For $f\in A\setminus\{0\}$, integral closure in $E$ commutes with localization: if $z$ is integral over $A_f$, choose $N$ large enough that multiplying a degree-$n$ monic relation by $f^{Nn}$ makes $f^Nz$ integral over $A$. This puts $z$ in $B_f$, and the converse follows by localizing a monic relation. Hence the integral closure of $A_f$ is $B_f$. On overlaps of two affine charts, use common principal-open refinements as in [F3]; their integral closures inside $E$ agree by this identity, so the transition maps are identities inside $E$ and satisfy the cocycle condition. By [F3] the charts $\operatorname{Spec}B$ glue to $D$ and their inclusions from $A$ define a finite morphism $\pi:D\to C$. All charts share the generic field $E$, giving integrality, normality and dominance. By [F4], $D$ is proper over $k$. [F2, F3, F4, step 1.1, algebra]

2.1 The algebraic constants $k_E/k$ form a finite extension. Choose the transcendental $t$ of step 1.1 and put $N=[E:k(t)]$. Any subfield $k'\subset k_E$ generated by finitely many elements over $k$ is finite over $k$, by successively adjoining their algebraic generators. A $k$-basis of $k'$ stays independent over $k(t)$ by clearing polynomial denominators and comparing coefficients in $t$; it spans $k'(t)$, so $[k':k]=[k'(t):k(t)]\le N$. Among these positive integer degrees choose the largest, attained by some $k_0$. Adjoining any further algebraic constant would yield another finite subfield with degree at least this maximum, hence equal; the tower law then places the constant in $k_0$. Thus $k_E=k_0$ is finite. Every element of $k_E$ is integral over $k$, hence belongs to every integral-closure chart $B$. These compatible inclusions give $D$ a $k_E$-scheme structure of finite type. The scheme $\operatorname{Spec}k_E$ is separated over $k$, so [F4] makes $D\to\operatorname{Spec}k_E$ proper. Its integrality, normality, dimension and function field are unchanged. [F2, F4, step 1.1, step 1.2, algebra]

3.1 A closed point $w$ of $D$ has a closed image $v$ in $C$: finite morphisms are closed, or on an affine chart the residue field at $w$ is finite over $k$ and contains the residue field of its image, making that image a closed point. The induced injection $\mathcal O_{C,v}\to\mathcal O_{D,w}$ is local. A uniformizer $\pi_v$ therefore has positive order $e_w=\operatorname{ord}_w(\pi_v)\ge1$, and every unit at $v$ remains a unit at $w$. Writing $a=\pi_v^mu$ with $u$ a unit proves $\operatorname{ord}_w(a)=e_wm=e_w\operatorname{ord}_v(a)$ by [F5], including negative $m$. By [F6], restriction of the $w$ absolute value is the $t_w$th power of the $v$ absolute value with
$$t_w=\frac{c_{k_E}e_w[\kappa(w):k_E]}{c_k[\kappa(v):k]}>0.$$
This proves all assertions without a separability assumption. [F5, F6, step 1.2, step 2.1, algebra] ∎
