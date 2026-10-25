---
id: thm-normalization-reduced-curve-exists-finite
kind: theorem
title: "Normalization of a reduced curve is finite"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-finite-morphism-schemes
  - def-integral-closure-and-integrally-closed-domain
  - def-integral-scheme
  - def-normal-noetherian-ring
  - def-quasi-coherent-module-scheme
  - def-reduction-of-scheme
  - def-total-ring-of-fractions
  - cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian
  - cor-reduced-quotient-by-the-nilradical
  - cor-dimension-preserved-by-integral-extensions
  - lem-chain-dimension-open-cover
  - lem-distinguished-open-refinement-at-a-point
  - lem-finite-morphism-affine
  - lem-finite-normalization-compatible-with-principal-opens
  - lem-integral-finite-type-scheme-function-field
  - lem-morphism-schemes-local-on-source-target
  - thm-equivalent-characterisations-of-a-dvr
  - thm-gluing-affine-schemes
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-integral-closure-finite-finite-type-domain-over-field
  - thm-integral-closure-is-integrally-closed
  - thm-irreducible-components-and-minimal-primes
  - thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian
  - thm-noetherian-ring-has-finitely-many-minimal-primes
  - thm-normality-is-local-for-domains
  - thm-one-dimensional-regular-local-rings-are-dvrs
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "Chapter 8, resolution of singularities and normalizations of curves; normalisation of a curve is a desingularisation, pp. 194-197"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Chapter 8 normalization discussion and Exercise 8.4.? for affine normalizations; the normal curve theory used in Chapter 21, pp. 171-189 and 431-460"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item thm-normalization-reduced-curve-exists-finite; evidence research/frontier-38-owner-30-reader-2.md, research/frontier-38-owner-30-reader-findings-2.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Let $k$ be a field and let $C$ be a reduced $k$-scheme of finite type, of pure
dimension one (for example a reduced projective plane curve or an open
subscheme of one). Then there exists a finite morphism
$\nu\colon C^{\mathrm{nu}}\to C$ with the following properties:

1. $C^{\mathrm{nu}}$ is regular of dimension one (equivalently normal: all
   local rings are discrete valuation rings or fields);
2. $\nu$ is an isomorphism over the regular locus of $C$ and is birational on
   each irreducible component;
3. on an affine chart $\operatorname{Spec}A$ of $C$, $\nu$ is the morphism
   corresponding to the integral closure of $A$ in its total ring of
   fractions;
4. $\nu$ is unique up to a unique $C$-isomorphism, and $\nu_*\mathcal O_{C^{\mathrm{nu}}}$
   is a coherent $\mathcal O_C$-module.

No separability or perfectness hypothesis on $k$ is needed.

## Facts & Assumptions

**Given:** A field $k$ and a reduced finite-type $k$-scheme $C$ of pure dimension one. The Axiom of Choice is inherited from the finiteness suppliers ([[def-axiom-of-choice]]).

[F1] [[thm-integral-closure-finite-finite-type-domain-over-field]]: The integral closure of a finite-type domain over any field in its fraction field is a finite module. No perfectness or separability assumption is required.

[F2] [[thm-integral-closure-is-integrally-closed]], [[thm-normality-is-local-for-domains]], and [[thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian]]: An integral closure in a field is an integrally closed domain; its localizations are integrally closed; a module-finite algebra over a Noetherian ring is Noetherian.

[F3] [[lem-finite-normalization-compatible-with-principal-opens]]: If $B$ is the integral closure of a domain $A$ in its fraction field, then $B_f$ is the integral closure of $A_f$ in that field, and finiteness is preserved.

[F4] [[lem-integral-finite-type-scheme-function-field]]: Every nonempty affine open of an integral finite-type scheme has fraction field equal to its generic stalk. This does not require separatedness.

[F5] [[lem-distinguished-open-refinement-at-a-point]], [[thm-gluing-affine-schemes]], and [[lem-morphism-schemes-local-on-source-target]]: Distinguished opens refine neighborhoods in affine schemes; schemes can be glued along open isomorphisms satisfying the cocycle condition, and morphisms agreeing on overlaps glue.

[F6] [[cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian]], [[thm-noetherian-ring-has-finitely-many-minimal-primes]], [[thm-irreducible-components-and-minimal-primes]], and [[cor-reduced-quotient-by-the-nilradical]]: Finite-type algebras over fields are Noetherian. A Noetherian scheme has finitely many irreducible components, and the minimal primes of a reduced Noetherian ring have zero intersection.

[F7] [[def-reduction-of-scheme]] and [[def-integral-scheme]]: Each irreducible component with its reduced structure is integral.

[F8] [[def-total-ring-of-fractions]]: $Q(A)$ is the localization of $A$ at its nonzerodivisors; for a domain it is its fraction field.

[F9] [[def-integral-closure-and-integrally-closed-domain]]: Integral closure consists of elements satisfying monic equations, and a domain is integrally closed if all such elements in its fraction field belong to it.

[F10] [[def-finite-morphism-schemes]] and [[lem-finite-morphism-affine]]: A finite morphism is affine with module-finite coordinate algebras on affine target opens; module-finiteness on an affine open cover implies finiteness.

[F11] [[cor-dimension-preserved-by-integral-extensions]] and [[lem-chain-dimension-open-cover]]: An injective integral ring extension preserves dimension, and the dimension of a Noetherian space is the supremum of the dimensions of an open cover.

[F12] [[def-normal-noetherian-ring]], [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]], and [[thm-one-dimensional-regular-local-rings-are-dvrs]], and [[thm-equivalent-characterisations-of-a-dvr]]: A normal Noetherian domain has DVR localizations at height-one primes; its zero-dimensional localizations are fields. A one-dimensional Noetherian local ring is regular exactly when it is a DVR, and a DVR is integrally closed.

[F13] [[def-quasi-coherent-module-scheme]] and [[def-coherent-module-scheme]]: An affine direct image of the structure sheaf is quasi-coherent; on a locally Noetherian scheme a finite-type quasi-coherent module is coherent.

## Proof

1.1 Since $C$ is quasi-compact and its affine coordinate rings are Noetherian, it is Noetherian. Its finitely many reduced irreducible components $C_i$ are integral finite-type curves of dimension one. Choose a finite affine cover $U_{ij}=\operatorname{Spec}A_{ij}$ of each component and identify all their fraction fields with its generic field $K_i$. Let $B_{ij}$ be the integral closure of $A_{ij}$ in $K_i$. These are finite Noetherian normal domains. [F1, F2, F4, F6, F7]

2.1 The schemes $\operatorname{Spec}B_{ij}$ glue over $C_i$, even if $C_i$ is nonseparated. Here are the overlap identifications explicitly. For a point in $U_{ij}\cap U_{il}$ choose distinguished neighborhoods $D(f)\subset U_{ij}$ and $D(g)\subset U_{il}$ contained in that intersection. On $D(f)$ write $g=c/f^r$, and on $D(g)$ write $f=d/g^s$. Their common intersection is the distinguished open $D(fc)$ in $U_{ij}$ and $D(gd)$ in $U_{il}$; both coordinate rings are the same subring of $K_i$, since they are the sections of the same open subscheme. Their integral closures are therefore the same subring of $K_i$, namely $(B_{ij})_{fc}=(B_{il})_{gd}$. These common distinguished opens cover the overlap. Their identities glue, and the triple-overlap identities satisfy the cocycle condition because all are identities inside $K_i$. Thus scheme and morphism gluing produce an integral normal scheme $C_i^{\mathrm{nu}}$ and a morphism $\nu_i:C_i^{\mathrm{nu}}\to C_i$, with inverse image of $U_{ij}$ equal to $\operatorname{Spec}B_{ij}$. It is finite by the affine-cover criterion. Its generic field is $K_i$, and its dimension is one by integral dimension preservation on the affine cover. [F2, F3, F5, F10, F11, step 1.1]

3.1 Set $C^{\mathrm{nu}}=\bigsqcup_i C_i^{\mathrm{nu}}$ and compose each $\nu_i$ with the reduced closed immersion $C_i\hookrightarrow C$ to obtain $\nu$. This is finite: closed immersions are finite on affine charts by the quotient-ring description; composition is module-finite, and a finite disjoint union is module-finite. Empty affine opens have empty inverse image, with coordinate algebra zero; the following computation concerns nonempty affine opens. More explicitly, on any affine $U=\operatorname{Spec}A\subset C$, let $\mathfrak p_1,\ldots,\mathfrak p_m$ be its minimal primes and $A_i=A/\mathfrak p_i$. The corresponding component inverse images are affine with finite coordinate domains $D_i$ lying in $\operatorname{Frac}(A_i)$, normal and birational over $A_i$. Consequently $D_i$ is its integral closure $B_i$: every element of $D_i$ is integral over $A_i$, and every element of the fraction field integral over $A_i$ is also integral over $D_i$, hence belongs to $D_i$. Therefore $\nu^{-1}(U)=\operatorname{Spec}B$ where $B=\prod_i B_i$. Each factor has finitely many $A_i$-module generators; placing these in their separate coordinates gives finitely many $A$-module generators of $B$. This uses no Chinese-remainder decomposition of $A$. [F1, F2, F6, F9, F10, step 2.1]

4.1 We identify $Q(A)$ correctly. Distinct minimal primes are incomparable. For each $i$ choose $a_{ij}\in\mathfrak p_j\setminus\mathfrak p_i$ for $j\ne i$ and put $g_i=\prod_{j\ne i}a_{ij}$; for one minimal prime put $g_1=1$. Its image is nonzero in $A_i$ and zero in every other $A_j$. An element $s\in A$ is a nonzerodivisor exactly when its image is nonzero in every $A_i$: the forward implication follows since otherwise $sg_i=0$ with $g_i\ne0$, and the reverse follows from the injection $A\hookrightarrow\prod_i A_i$. Hence localization gives an injection $Q(A)\hookrightarrow\prod_i\operatorname{Frac}(A_i)$. For any tuple $u_i/v_i$ in this product, choose lifts $a_i,b_i\in A$ of $u_i,v_i$, and set $a=\sum_i g_i a_i$ and $s=\sum_i g_i b_i$. The image of $s$ in $A_i$ is the nonzero product $g_i v_i$, so $s$ is a nonzerodivisor, and $a/s$ has the prescribed tuple of images. This proves surjectivity. [F6, F8, step 3.1]

4.2 Each $C_i^{\mathrm{nu}}$ is normal Noetherian of dimension one. All its local rings are therefore fields or DVRs, hence regular. Their disjoint union is regular of dimension one. The generic-field identifications give birationality on each component, meaning the restriction from the corresponding normalized component, not a claim that scheme-theoretic base change over $C_i$ removes the other branches. [F11, F12, step 2.1, step 3.1]

4.3 The affine description gives a finite module $B$ on each affine target chart. Thus $\nu_*\mathcal O_{C^{\mathrm{nu}}}$ is quasi-coherent of finite type, hence coherent on the locally Noetherian scheme $C$. [F13, step 3.1]

5.1 Under that identification $B=\prod_iB_i$ is the integral closure of $A$ in $Q(A)$. Since $B$ is module-finite over $A$, every $b\in B$ satisfies a monic equation over $A$: multiplication by $b$ on a finite generating family and the determinant trick give a monic polynomial annihilating $B$, hence annihilating $1$. Conversely a tuple integral over $A$ has its $i$th coordinate integral over $A_i$, so that coordinate belongs to $B_i$. This proves precisely the affine description in part (3). [F9, step 3.1, step 4.1]

6.1 At a regular point $x$ of $C$, its local ring is a field (in dimension zero its maximal ideal has zero cotangent space and hence is zero by Nakayama) or a DVR, hence an integrally closed domain. Thus only one component passes through $x$. Remove the other finitely many closed components to obtain a neighborhood with integral coordinate rings. For an affine neighborhood $\operatorname{Spec}A$ therein, localization of its integral closure at the prime of $x$ equals $A_x$. Indeed any element integral over $A_x$ has an equation with finitely many denominators outside that prime; clearing these denominators after multiplying the element by their product shows it belongs to a localization of the integral closure of $A$. The reverse inclusion is immediate. As $B/A$ is a finite module, its zero stalk at $x$ implies it vanishes on a distinguished neighborhood of $x$ (annihilate each of finitely many generators with an element outside the prime). On that neighborhood $A=B$, so $\nu$ is an isomorphism. These neighborhoods cover the regular locus. [F3, F6, F9, F12, step 3.1, step 5.1]

7.1 Any other morphism with the stated properties has, by part (3), the same integral-closure algebra $B\subset Q(A)$ on each affine target chart. These canonical identifications commute with restriction: they are the same identifications inside the component function fields used in step 2.1. They therefore glue to a $C$-isomorphism. It is unique: an $A$-algebra automorphism of $B$ localizes to an automorphism of $Q(A)$ fixing $A$, hence fixing every fraction $a/s$. Here localization of $B$ at the nonzerodivisors of $A$ equals $Q(A)$, since $A\subset B\subset Q(A)$. Since $B$ embeds in $Q(A)$, that automorphism is already the identity on $B$. This proves part (4). [F5, F8, step 2.1, step 5.1, step 4.3] ∎

## Remarks

Normalization separates the reduced irreducible components rather than gluing their normalizations along intersection points. The overlap construction above does not assume separatedness. The field-finiteness theorem [F1] applies to arbitrary fields, including imperfect fields, and regularity here means regularity of the local rings, not smoothness over $k$.
