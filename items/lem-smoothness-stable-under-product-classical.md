---
id: lem-smoothness-stable-under-product-classical
kind: lemma
title: "Products preserve smoothness"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-ag-standard-smooth-algebra
  - def-classical-affine-coordinate-ring
  - def-classical-algebraic-prevariety-regular-maps-and-varieties
  - def-locally-finite-type-and-finite-type-morphism
  - def-product-varieties-universal-property
  - def-smooth-morphism-classical
  - lem-classical-variety-noetherian-components
  - thm-ag-standard-smooth-base-change-composition
  - thm-affine-variety-product-coordinate-ring
  - thm-dimension-product-varieties
  - thm-fibre-products-of-schemes-exist
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Classes 51–52, §2.8"
      url: "https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf"
    - title: "The Stacks Project, Morphisms of Schemes, Lemmas 29.35.4–5 and 29.35.11 (tag 01V4)"
      url: "https://stacks.math.columbia.edu/tag/01V4"
    - title: "J. S. Milne, Algebraic Geometry v6.10, §5j, Proposition 5.35"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field, and let
$X$ and $Y$ be smooth classical varieties over $k$. Their classical product is
smooth. If $(X_i)_i$ and $(Y_j)_j$ are their irreducible-component
decompositions, the irreducible components of $X\times_kY$ are exactly the
nonempty products $X_i\times_kY_j$, and
$$\dim(X_i\times_kY_j)=\dim X_i+\dim Y_j.$$
If either factor is empty, the product has no components.

More generally, for any field $k$ and finite-type $k$-schemes $X,Y$ smooth over
$k$, the scheme-theoretic product $X\times_kY$ is smooth over $k$. In both
clauses, smoothness is measured by the local-standard-smooth convention. The
dimension assertion concerns only the classical-variety components; no
dimension claim is made for arbitrary finite-type schemes.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraically closed field $k$, smooth
classical varieties $X,Y$ over $k$, and finite-type $k$-schemes smooth over a
field in the general clause.

[F1] A finite-type morphism of schemes is smooth when each source point has
affine neighbourhoods on which the induced ring map is standard smooth at the
corresponding prime; standard smoothness at a prime allows a further principal
shrinking ([[def-smooth-morphism-classical]]).

[F2] An affine model is a polynomial zero set in finite-dimensional affine
space; its coordinate ring is a quotient of a finite-variable polynomial
$k$-algebra and is therefore finite type
([[def-classical-affine-coordinate-ring]]).

[F14] A classical variety has a finite affine-model cover
([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]).

[F15] Regular maps, including the product projections, are continuous because
they are morphisms of locally ringed spaces
([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]).

[F3] Every scheme fibre product exists. For affine charts over an affine base,
its open charts are spectra of the tensor-product algebras
([[thm-fibre-products-of-schemes-exist]]).

[F4] A standard-smooth algebra remains standard smooth at every point after
arbitrary base change of the base ring
([[thm-ag-standard-smooth-base-change-composition]]).

[F5] A composite of locally standard-smooth maps is locally standard smooth;
the displayed standard-smooth presentation has the sum of the two relative
presentation dimensions
([[thm-ag-standard-smooth-base-change-composition]]).

[F6] Over an algebraically closed field and under AC, products of nonempty
classical varieties exist; products of irreducible varieties are irreducible,
and their dimensions add ([[thm-dimension-product-varieties]]).

[F7] A classical variety has finitely many irreducible components
([[lem-classical-variety-noetherian-components]]).

[F8] A constructed product has the categorical universal property; a product
with a point is the other factor, and a product with an empty factor has empty
underlying set ([[def-product-varieties-universal-property]]).

[F9] AC asserts that every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F10] A morphism is of finite type when it is locally of finite type and
quasi-compact ([[def-locally-finite-type-and-finite-type-morphism]]).

[F11] The case $c=0$ is allowed in a standard-smooth presentation; it is a
localisation of a polynomial ring. In particular $n=c=0$ presents the base
ring itself ([[def-ag-standard-smooth-algebra]]).

[F13] The affine product of classical affine varieties exists as a classical
affine variety and has coordinate ring $A\otimes_kB$
([[thm-affine-variety-product-coordinate-ring]]).

## Proof

**Proof technique:** local standard-smooth presentations and product charts.

1.1 Let $P=X\times_kY$ be the scheme-theoretic product of finite-type $k$-schemes smooth over $k$. For affine neighbourhoods $\operatorname{Spec}A$ and $\operatorname{Spec}B$ of the projections of any point, [F3] gives the product chart $\operatorname{Spec}(A\otimes_kB)$. Finite generating lists for $A$ and $B$ generate $A\otimes_kB$, so $P$ is locally of finite type. Each factor has a finite affine cover because its structure morphism is quasi-compact; the resulting finite family of product charts covers $P$, so $P$ is quasi-compact. Thus [F10] makes $P$ finite type. Fix $z\in P$ and write $x,y$ for its projections. Smoothness and [F1] give affine neighbourhoods $U=\operatorname{Spec}A$ of $x$ and $V=\operatorname{Spec}B$ of $y$ where $k\to A$ and $k\to B$ are standard smooth at the corresponding primes; shrink by the principal opens witnessing the presentations. By [F3], $U\times_kV=\operatorname{Spec}(A\otimes_kB)$ is an open affine neighbourhood of $z$. The map $A\to A\otimes_kB$ is the base change of $k\to B$, so [F4] makes it standard smooth at the prime for $z$. Its composite with $k\to A$ is standard smooth there by [F5]. Hence $P\to\operatorname{Spec}k$ is locally standard smooth at $z$. [F1, F3, F4, F5, F10, given, algebra, choose]

1.2 Suppose $X$ and $Y$ are nonempty. By [F7], write them as finite unions of irreducible components $X=\bigcup_iX_i$ and $Y=\bigcup_jY_j$. A point of either factor is a morphism from the one-point affine variety. Given $x\in X$ and $y\in Y$, [F8] gives a unique point of the product whose projections are $x,y$; conversely, the projections of a product point determine it uniquely by the same universal property. Thus product points are pairs, and each $(x,y)$ belongs to some $X_i\times_kY_j$, so these products cover $X\times_kY$. Each product is closed as the intersection of the inverse images of the closed sets $X_i$ and $Y_j$ under the continuous projections [F15]; there are finitely many by [F7]. Each $X_i\times_kY_j$ is irreducible by [F6]. Fix one point in each of the two nonempty factors; pairing that fixed point with an arbitrary point of the other factor shows that both product projections are surjective. If $X_i\times_kY_j\subseteq X_{i'}\times_kY_{j'}$, surjectivity gives $X_i\subseteq X_{i'}$ and $Y_j\subseteq Y_{j'}$, so maximality of the original components forces equality in both coordinates. Conversely, an irreducible closed subset of a finite union of closed sets lies in one member of that union, so every irreducible component of $X\times_kY$ is one of these products. Applying [F6] to each irreducible pair gives $\dim(X_i\times_kY_j)=\dim X_i+\dim Y_j$. If one factor is empty, the product and the component-pair list are empty by [F8]. [F6, F7, F8, F15, given, algebra, choose]

2.1 Since $z$ was arbitrary, [F1] gives smoothness of $P$ over $k$. If either factor is empty, then $P$ is empty and smoothness is vacuous, proving the general finite-type-scheme claim. For the classical product, [F14] gives finite affine covers; each affine chart has a finite-type coordinate algebra by [F2], so [F10] makes its associated scheme finite type. Fix a product point $z$ with projections $x,y$, and choose affine neighbourhoods $U=\operatorname{Spec}A$ and $V=\operatorname{Spec}B$. The open set $p^{-1}(U)\cap q^{-1}(V)$ in the classical product is itself the classical product $U\times_kV$: a pair of maps into $U,V$ gives a unique map into the global product by [F6], and its image lies in this open set; uniqueness is inherited. By [F13] its coordinate ring is $A\otimes_kB$, so its associated affine scheme is the same chart as the scheme product chart supplied by [F3]. The principal-open restrictions agree because both invert $f\otimes1$ and $1\otimes g$ on a product of $D(f)$ and $D(g)$; the resulting ring is $(A\otimes_kB)_{f\otimes1,1\otimes g}$. Therefore the local chart calculation in step 1.1 applies at every classical product point, and [F1] gives smoothness. [F1, F2, F3, F6, F10, F13, F14, algebra, step 1.1]

3.1 The product with the zero-dimensional point $\operatorname{Spec}k$ is the other factor by [F8], and dimensions add as $0+d=d$; its map to $\operatorname{Spec}k$ has the zero-variable, zero-equation standard-smooth presentation allowed by [F11]. The one-dimensional example $\mathbb A^1_k\times_k\mathbb A^1_k=\mathbb A^2_k$ has the standard-smooth presentation with two variables and no equations by [F11], and its component dimension is $1+1=2$ by [F6]. If a factor is the empty scheme $\operatorname{Spec}0$, its tensor-product chart is empty and no point requires a smoothness check [F3]. AC is propagated because the smooth-morphism convention [F1] and the classical component and dimension suppliers [F6, F7] are stated under AC [F9]; the pointwise standard-smooth argument makes no simultaneous chart choice. There is no interval endpoint, and neither smoothness preservation nor the component-dimension assertion is an iff. [F1, F3, F6, F7, F8, F9, F11, step 1.1, step 1.2, step 2.1, given, algebra] ∎
## Source qualification

Vakil, *Foundations of Algebraic Geometry*, Classes 51–52, §2.8, printed/PDF
p. 5, states the smooth-product result as an exercise and points to base
change and composition; it is corroboration, not a proof here. The Stacks
Project, Morphisms of Schemes, Lemmas 29.35.4–5 (Section 29.35, tag 01V4,
lines 51–56), states and proves composition and base-change stability for
smooth morphisms. Lemma 29.35.11 (same section, lines 80–85) records the local
standard-smooth chart criterion. The item proves the needed presentation steps
directly from the fully written local standard-smooth result
[[thm-ag-standard-smooth-base-change-composition]]; the Stacks results
corroborate those operations and do not replace that argument. Milne,
*Algebraic Geometry* v6.10, §5j, Proposition 5.35 (printed p. 115), proves
dimension additivity for irreducible varieties by reducing to affine varieties
and comparing transcendence bases in their tensor-product coordinate rings.
Its irreducible hypotheses hold for each pair $X_i,Y_j$; the identification of
all component products as components is proved in step 1.2.
