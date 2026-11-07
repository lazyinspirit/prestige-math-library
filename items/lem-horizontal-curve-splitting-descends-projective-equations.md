---
dependency_level: 4
id: lem-horizontal-curve-splitting-descends-projective-equations
kind: lemma
title: A horizontal curve splitting descends projective equations to derivative constants
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-infinite-curve-points-give-horizontal-jet-splitting
  - lem-function-field-coordinate-derivations-and-constant-kernel
  - lem-horizontal-evaluation-normalizes-a-stable-function-space
  - lem-derivation-stable-polynomial-relations-descend-to-constants
  - lem-riemann-roch-space-finite-dimensional
  - thm-degree-two-g-plus-one-line-bundle-very-ample
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - lem-ag-geometric-regularity-field-tests
  - thm-ag-standard-smooth-geometric-regularity
  - lem-closed-immersion-proper
  - thm-projective-space-proper-over-base
  - lem-proper-stable-composition
  - lem-proper-cohomology-field-extension
  - cor-noether-normalisation-module-finiteness
  - cor-dimension-preserved-by-integral-extensions
  - thm-proper-ideal-contained-in-maximal-ideal
  - def-derivation-algebra
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §4, printed pp. 143–146; evaluation-normalized projective equations"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III §3, printed pp. 71–78"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, let $R$ be a smooth affine
integral $k$-variety of positive dimension with function field $K$, and
let $X\to R$ be a smooth projective family of geometrically integral
curves of genus $g\ge2$, with $X$ integral. Put $C=X_K$, and suppose
$C(K)$ is infinite. Set
$$k_0=\begin{cases}k,&\operatorname{char}k=0,\\K^p,&\operatorname{char}k=p>0.\end{cases}$$
There is a smooth proper geometrically integral curve $C_0/k_0$ of genus
$g$, with $C_0(k_0)$ infinite, and a $K$-isomorphism
$$C\ \cong\ (C_0)_K.$$
In positive characteristic this is one descent to $K^p$; a descent of the
isomorphism class all the way to $k$ is not asserted in this lemma.

## Facts & Assumptions

**Given:** AC and the family and infinite point set of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] There is a regular splitting on $C$ containing all but finitely
many derivative jets of its $K$-points. Thus for coordinate derivations
$D_j$ of $K/k$ the induced regular derivations $D_j'$ on $C$ extend
$D_j$, and evaluation at these points commutes with them. Their base
common kernel is $k$ in characteristic zero and $K^p$ in characteristic
$p$.
[[lem-infinite-curve-points-give-horizontal-jet-splitting]]
[[lem-function-field-coordinate-derivations-and-constant-kernel]]

[F2] A finite-dimensional function space stable under extended
derivations and admitting infinitely many compatible regular rational
evaluations has a basis killed by all these derivations.
[[lem-horizontal-evaluation-normalizes-a-stable-function-space]]
A coefficient-derivation-stable subspace of $K^n$ has a row-reduced basis
over the common constant field; in particular relations among horizontal
functions descend to that field.
[[lem-derivation-stable-polynomial-relations-descend-to-constants]]

[F3] The space $L(D)=H^0(C,\mathcal O_C(D))$, identified with rational
functions with poles bounded by $D$, is finite-dimensional. A line bundle
of degree at least $2g+1$ embeds a smooth proper geometrically integral
curve. Closed local rings on a regular curve are DVRs, and the
rational-section/Cartier-divisor dictionary identifies the pole orders
with their valuations.
[[lem-riemann-roch-space-finite-dimensional]]
[[thm-degree-two-g-plus-one-line-bundle-very-ample]]
[[thm-one-dimensional-regular-local-rings-are-dvrs]]
[[thm-line-bundle-rational-section-cartier-divisor]]

[F4] Homogeneous ideals define closed projective subschemes and their
formation is compatible with the usual affine standard charts. Projective
space is proper, closed immersions are proper, and composition preserves properness.
[[thm-closed-subschemes-projective-space-homogeneous-ideals]]
[[thm-projective-space-proper-over-base]] [[lem-proper-stable-composition]]
[[lem-closed-immersion-proper]]

[F5] Geometric regularity of a finite-type field algebra descends from
one field extension and is equivalent to smoothness.
[[lem-ag-geometric-regularity-field-tests]]
[[thm-ag-standard-smooth-geometric-regularity]]
Proper coherent cohomology commutes with field extension.
[[lem-proper-cohomology-field-extension]]

[F6] Noether normalization gives a finite map to affine space, and
injective integral extensions preserve dimension. A nonzero ring has a
prime ideal, by choosing a maximal ideal under AC. Derivations obey the
product and quotient rules.
[[cor-noether-normalisation-module-finiteness]]
[[cor-dimension-preserved-by-integral-extensions]]
[[thm-proper-ideal-contained-in-maximal-ideal]] [[def-derivation-algebra]]

## Axiom use

AC is inherited through the splitting, curve cohomology, projective
embedding and geometric regularity suppliers. It also supplies a prime
of the tensor product used to compare two field extensions in step 4.1.
Only finitely many evaluation points are selected for a basis.

## Proof

**Proof technique:** direct; make a Riemann–Roch basis horizontal and
descend every homogeneous relation by coefficient row reduction.

1.1 Let $S\subseteq C(K)$ be the infinite set of horizontal points from [F1], and choose $P_0\in S$. Fix $m\ge2g+1$ and put $V=L(mP_0)$. This space is stable under every $D_j'$. Away from $P_0$ these derivations preserve local regular functions, because the splitting of [F1] is regular. At $P_0$ they preserve its maximal ideal: for a local function $a$ with $a(P_0)=0$, horizontality gives $(D_j'a)(P_0)=D_j(a(P_0))=0$. If $u$ is a uniformizer, then $D_j'u$ is divisible by $u$. Thus differentiating $u^{-m}v$, with $v$ locally regular, introduces no pole of order greater than $m$, by the product rule. This proves stability using [F3]. All functions of $V$ are regular on $S\setminus\{P_0\}$ and evaluation there is horizontal by [F1]. [F1, F3, F6, given, construct, algebra]

2.1 The finite-dimensionality in [F3] and the normalization lemma [F2] give a $K$-basis $h_0,\ldots,h_N$ of $V$ killed by every $D_j'$. As sections of $\mathcal O_C(mP_0)$ they give a closed embedding $i:C\hookrightarrow\mathbf P^N_K$ by [F3]. For every degree $r$, the vector space $I_r$ of homogeneous equations of $i(C)$ is stable under all coefficient derivations $D_j$: differentiating $\sum a_\alpha h^\alpha=0$ kills the $h_i$ and gives $\sum D_j(a_\alpha)h^\alpha=0$. The subspace assertion of [F2], applied only to the monomials of degree exactly $r$, gives $I_r=K\cdot (I_r\cap k_0[T_0,\ldots,T_N]_r)$. Here the base common constant field is precisely $k_0$ by [F1]; in characteristic zero, algebraic closedness of $k$ makes its relative algebraic closure in $K$ equal to $k$. [F1, F2, F3, F6, algebra, step 1.1]

3.1 Let $J$ be the homogeneous ideal whose degree-$r$ part is $I_r\cap k_0[T]_r$. It is an ideal because multiplication by a homogeneous polynomial over $k_0$ preserves both membership in $I$ and coefficients in $k_0$. Step 2.1 gives $I=J K[T]$. Define $C_0=\operatorname{Proj}(k_0[T]/J)$, a closed projective $k_0$-scheme by [F4]. On every standard chart its coordinate algebra is the degree-zero localization of this quotient; extending the coefficient field gives exactly the corresponding chart of $i(C)$, because localization, quotient and their graded components commute with field extension. Thus $(C_0)_K=i(C)$ and $C\cong(C_0)_K$. Properness of $C_0$ follows from [F4]. [F4, algebra, construct, step 2.1]

4.1 The scheme $C_0$ is smooth over $k_0$ by the field-descent criterion [F5], applied to each affine chart, since its base change $C$ is smooth. It is geometrically integral. Indeed for any field extension $N/k_0$, take a prime ideal of the nonzero ring $K\otimes_{k_0}N$ using [F6], and its residue field $M$, which receives injective maps from both fields. Then $(C_0)_M=C_M$ is integral since $C$ is geometrically integral over $K$. Integralness descends to $(C_0)_N$ under this field extension: reducedness follows from injectivity of each affine algebra into its scalar extension, and irreducibility follows from the surjective field-base-change projection and the irreducibility of its source. Its dimension is one: Noether-normalize an affine domain chart of $C_0$ by [F6]; its finite integral inclusion of a polynomial ring remains injective and integral after tensoring with $K$, so both chart dimensions equal the number of normalization variables by [F6]. The base-changed chart lies in the curve $C$ and is nonempty, so that number is one. Finally its genus equals $g$ by the degree-one proper cohomology base-change assertion of [F5]. [F5, F6, algebra, step 3.1]

5.1 For $P\in S\setminus\{P_0\}$ the functions $h_i$ are all regular and do not all vanish, since the corresponding full linear system is basepoint-free and $\mathcal O_C(mP_0)$ has its canonical trivialization away from $P_0$. Moreover $D_j(h_i(P))=(D_j'h_i)(P)=0$ by [F1] and step 2.1. All their coordinates therefore belong to $k_0$, and $i(P)$ is a $k_0$-point of $C_0$. The embedding is injective on points, so infinitely many distinct such points yield $C_0(k_0)$ infinite. This proves the exact stated descent, stopping at $K^p$ in positive characteristic. [F1, F3, given, step 1.1, step 2.1, step 3.1, step 4.1] ∎
