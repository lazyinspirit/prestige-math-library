---
id: thm-regular-equals-smooth-over-perfect-field
kind: theorem
title: "Regular equals smooth over a perfect field"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-affine-open-subscheme
  - def-ag-geometrically-regular-algebra-and-fibre
  - def-ag-standard-smooth-algebra
  - def-axiom-of-choice
  - def-embedding-dimension-and-regular-local-ring
  - def-finite-type-and-module-finite-algebras
  - def-left-right-and-two-sided-ideal
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-noetherian-module
  - def-noetherian-ring
  - def-regular-local-ring-geometric-point
  - def-regular-noetherian-ring
  - def-smooth-morphism-classical
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - thm-ag-geometric-regularity-perfect-base
  - thm-ag-standard-smooth-geometric-regularity
  - thm-stalk-structure-sheaf-prime-localization
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Varieties Lemma 33.12.3 (tag 038V), affine chart criterion for geometric regularity"
      url: https://stacks.math.columbia.edu/tag/038V
    - title: "The Stacks Project, Varieties Lemma 33.12.6 (tag 038X), geometric regularity and smoothness at a point"
      url: https://stacks.math.columbia.edu/tag/038X
    - title: "The Stacks Project, Algebra Lemma 10.166.1 (tag 0381), finite purely inseparable field test"
      url: https://stacks.math.columbia.edu/tag/0381
    - title: "J. S. Milne, Algebraic Geometry, Chapter 10 supplement, §f, item 10.64 (printed p. 18; PDF page 18)"
      url: https://www.jmilne.org/math/CourseNotes/AG10.pdf

---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a perfect
field and let $X$ be a finite-type $k$-scheme. Here **regular** means that $X$
is locally Noetherian and every local ring $\mathcal O_{X,x}$ is regular local;
**smooth over $k$** means that $X\to\operatorname{Spec}k$ is smooth under the
local-standard-smooth convention of
[[def-smooth-morphism-classical]]. Then
$$X\text{ is regular}\quad\Longleftrightarrow\quad X\to\operatorname{Spec}k\text{ is smooth}.$$
No reducedness, irreducibility, or closed-point restriction is imposed.

## Facts & Assumptions

**Given:** A perfect field $k$, a finite-type $k$-scheme $X$, and the Axiom of
Choice.

[F1] [[def-locally-finite-type-and-finite-type-morphism]]: a finite-type morphism is locally of finite type, so every point of $X$ has an affine open neighbourhood $U=\operatorname{Spec}A$ on which $A$ is of finite type over $k$.

[F2] [[def-finite-type-and-module-finite-algebras]]: an algebra of finite type over $k$ is a quotient of a finite-variable polynomial $k$-algebra.

[F3] [[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]]: for every field $K$ and finite $d\ge0$, $K[x_1,\ldots,x_d]$ is Noetherian, meaning each ideal has a finite generating list.

[F4] [[def-noetherian-ring]]: a ring is left Noetherian when its left regular module is Noetherian.

[F5] [[def-noetherian-module]]: a module is Noetherian when each submodule is finitely generated.

[F6] [[def-left-right-and-two-sided-ideal]]: in a commutative ring, its ideals are exactly the submodules of its left regular module.

[F7] [[def-locally-noetherian-and-noetherian-scheme]]: a scheme is locally Noetherian when it has an affine open cover by spectra of Noetherian rings.

[F8] [[def-affine-open-subscheme]]: an open subscheme has the restricted structure sheaf $\mathcal O_X|_U$.

[F9] [[thm-stalk-structure-sheaf-prime-localization]]: for $\mathfrak p\in\operatorname{Spec}A$, $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.

[F10] [[def-regular-local-ring-geometric-point]]: on a locally Noetherian scheme, a point is regular exactly when its local ring is regular local.

[F11] [[def-regular-noetherian-ring]]: a commutative Noetherian ring is regular when every prime localization is regular local; the zero ring is regular vacuously.

[F12] [[def-ag-geometrically-regular-algebra-and-fibre]]: a finite-type $k$-algebra $A$ is geometrically regular when $A\otimes_kK$ is a regular Noetherian ring for every finitely generated field extension $K/k$.

[F13] [[thm-ag-geometric-regularity-perfect-base]]: assuming AC, a regular finite-type algebra over a perfect field remains a regular ring after tensoring with every field extension.

[F14] [[thm-ag-standard-smooth-geometric-regularity]]: under AC, for a finite-type $k$-algebra $A$, geometric regularity over $k$ is equivalent to the structure map $k\to A$ being locally standard smooth.

[F15] [[def-smooth-morphism-classical]]: under AC, a finite-type scheme morphism is smooth when every source point has affine neighbourhoods on which the induced ring map is standard smooth at that point.

[F16] [[def-ag-standard-smooth-algebra]]: locally standard smooth means that the map is standard smooth at every prime, where standard smoothness at a prime is checked after a further principal shrinking.

[F17] [[def-ag-standard-smooth-algebra]]: the presentation definition allows $c=0$, and the case $n=c=0$ with localization element $g=1$ presents $R$ over itself.

[F18] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function. It is declared here because [F13], [F14], and [F15] carry that assumption; no additional simultaneous choice or DC is used.

[F19] [[def-embedding-dimension-and-regular-local-ring]]: a nonzero Noetherian local ring is regular local exactly when its embedding dimension equals its Krull dimension.

## Proof
**Proof technique:** direct.

1.1 Finite-type affine charts. If $X$ is empty, its local regularity and smoothness conditions are vacuous. Otherwise, by [F1], every point has an affine open neighbourhood $U=\operatorname{Spec}A$ with $A$ of finite type over $k$. By [F2], $A\cong k[t_1,\ldots,t_n]/I$ for some finite $n\ge0$ and ideal $I$. We consider all such affine charts, so no simultaneous choice of a chart at every point is made. [F1, F2, given]

2.1 Noetherianity of the chart rings. Fix any chart from step 1.1 and write $P=k[t_1,\ldots,t_n]$. Let $J\subseteq A$ be an ideal and let $\widetilde J$ be its preimage under the quotient map $P\to A$. By [F3], $\widetilde J$ has a finite generating list in $P$; the images of that list generate $J$ because $P\to A$ is surjective. Thus every ideal of $A$ is finitely generated. By [F4]–[F6], the left regular module of $A$ is Noetherian and $A$ is a Noetherian ring. The zero quotient $A=0$ is also Noetherian (its only ideal is generated by the finite list $[0]$) and is regular vacuously by [F11]; its spectrum is empty. Since these charts cover $X$, [F7] makes $X$ locally Noetherian. [F3, F4, F5, F6, F7, F11, step 1.1, algebra]

3.1 Regularity transfers to each affine chart ring. Assume $X$ is regular and fix $U=\operatorname{Spec}A$ from step 1.1. For any $\mathfrak p\in\operatorname{Spec}A$, let $x$ be its point in $X$. The restricted structure sheaf [F8] identifies the stalk on $U$ with $\mathcal O_{X,x}$, and [F9] identifies it with $A_{\mathfrak p}$. Since $X$ is locally Noetherian by step 2.1, [F10] and the regularity hypothesis make $A_{\mathfrak p}$ regular local. We have already shown that $A$ is Noetherian, so [F11] gives that $A$ is a regular ring. [F8, F9, F10, F11, step 2.1]

3.2 Smooth implies regular. Assume $X\to\operatorname{Spec}k$ is smooth. Fix any affine chart $U=\operatorname{Spec}A$. By [F15], each point of $U$ has a neighborhood on which the structure map has a standard smooth presentation; restricting these neighborhoods within $U$ and using [F16] shows that $k\to A$ is locally standard smooth. By [F14], $A$ is geometrically regular over $k$. The finitely generated extension $K=k$ is included in [F12], and the canonical isomorphism $A\otimes_kk\cong A$ therefore makes $A$ a regular Noetherian ring. By [F11], every $A_{\mathfrak p}$ is regular local; [F8]–[F10] identify this with regularity of each corresponding point of $X$. Since $X$ is locally Noetherian by step 2.1, $X$ is regular. This proves the reverse implication. [F8, F9, F10, F11, F12, F14, F15, F16, step 2.1, algebra]

4.1 A regular chart is geometrically regular. Let $U=\operatorname{Spec}A$ be any chart and assume $X$ is regular. Step 3.1 makes $A$ a regular finite-type $k$-algebra. For every finitely generated field extension $K/k$, [F13] gives that $A\otimes_kK$ is regular, and [F11] includes Noetherianity in the meaning of regular ring. Hence the defining condition [F12] holds and $A$ is geometrically regular over $k$. [F11, F12, F13, step 3.1, given]

5.1 Geometric regularity gives local standard smoothness. By [F14], the structure map $k\to A$ for each chart in step 4.1 is locally standard smooth. [F14, step 4.1]

6.1 Regular implies smooth. At each point of $X$, take a chart from step 1.1. The local standard-smooth presentations supplied by step 5.1 make the morphism smooth at that point under [F15]. This proves the forward implication at all points, including nonclosed points. [F15, step 1.1, step 5.1]

7.1 Boundary and nilpotent checks. For $X=\operatorname{Spec}k$, the local ring is $k$, with maximal ideal zero and both dimension and embedding dimension zero, so it is regular by [F19]. The map $k\to k$ has the standard smooth presentation with $n=c=0$ and $g=1$ by [F17], so $X$ is smooth. For $D_k=\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$, the unique prime is $(\epsilon)$ because every prime contains the nilpotent $\epsilon$ and an element with nonzero constant term is a unit. The ring is two-dimensional over $k$, hence Noetherian; its local dimension is zero, whereas $(\epsilon)/(\epsilon)^2$ is one-dimensional, so its embedding dimension is one and [F19] shows it is not regular. Consequently it is not geometrically regular, since [F12] includes the extension $K=k$. By [F14] its structure map is not locally standard smooth, and [F15] says it is not smooth. Thus nilpotents are retained, and the theorem does not silently replace $D_k$ by its reduced point. Step 6.1 proves regular $\Rightarrow$ smooth, while step 3.2 proves smooth $\Rightarrow$ regular. AC is used only through the stated suppliers [F13]–[F15]; the proof treats one chart or point at a time, and no DC is invoked. [F12, F13, F14, F15, F17, F18, F19, step 6.1, step 3.2, given, algebra] $\square$
## Source qualification

Stacks Project Lemma 33.12.3 (tag 038V), lines 23–38, gives the affine-chart characterization of geometric regularity and its finite purely inseparable field tests. Lemma 33.12.6 (tag 038X), lines 23–28, proves that geometric regularity at a point is equivalent to smoothness there for a locally finite-type scheme. The latter statement does not assume perfectness; perfectness enters this item through the regular-algebra scalar-extension theorem. Stacks Algebra Lemma 10.166.1 (tag 0381), lines 22–36, gives the finitely-generated-field versus finite-purely-inseparable test. The stronger arbitrary-field scalar-extension assertion used here is supplied by the fully proved library item [[thm-ag-geometric-regularity-perfect-base]] via [[lem-ag-geometric-regularity-field-tests]].

Milne, *Algebraic Geometry*, Chapter 10 supplement, §f, item 10.64 (printed p. 18 / PDF page 18), states that a regular variety over a perfect field is smooth and that a smooth variety is regular. Milne's “variety” conventions are narrower than the present claim about arbitrary finite-type schemes and do not include this proof's nonreduced dual-number boundary; that citation is corroboration for the classical case, not a substitute for the scheme-level chart argument above.
