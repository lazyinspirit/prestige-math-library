---
id: lem-normalization-unchanged-under-finite-birational-curve-map
kind: lemma
title: "Normalization is unchanged under finite birational maps of reduced curves"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-normalization-reduced-curve-exists-finite
  - def-birational-morphism-schemes
  - lem-birational-morphism-principal-open-isomorphism
  - def-integral-closure-and-integrally-closed-domain
  - lem-integral-closure-unchanged-across-an-integral-intermediate-domain
  - thm-finite-morphism-integral-closed
  - def-finite-morphism-schemes
  - def-reduction-of-scheme
  - thm-proper-quasi-finite-is-finite
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: "Compare integral closures in the common function field, affine chart by affine chart, on each irreducible component"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "Chapter 8 normalization as desingularization of curves, pp. 194-197"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "normalization and curve singularity resolution, Chapter 21 and Exercise 19.4.C"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $f\colon X\to Y$ be a finite birational
morphism of reduced curves of finite type over a field $k$ (for instance the
restriction to a curve of a proper quasi-finite birational map; such a map is
finite in the applications by [[thm-proper-quasi-finite-is-finite]]). Then
$f$ induces an isomorphism of normalizations $\widetilde X\to\widetilde Y$
over $Y$; equivalently, the normalizations of $X$ and $Y$ are canonically
identified with the same finite birational model of $Y$.

## Facts & Assumptions

**Given:** A field $k$, reduced curves $X,Y$ of finite type over $k$ (pure dimension one, reduced), and a finite birational morphism $f\colon X\to Y$, with $\widetilde X\to X$ and $\widetilde Y\to Y$ the finite normalizations of ([[thm-normalization-reduced-curve-exists-finite]]).

[F1] [[thm-normalization-reduced-curve-exists-finite]]: For a reduced $k$-scheme $C$ of finite type and pure dimension one there is a finite morphism $\nu\colon\widetilde C\to C$ with $\widetilde C$ regular of dimension one, $\nu$ an isomorphism over the regular locus, $\nu$ corresponding on an affine chart $\operatorname{Spec}A$ to the integral closure of $A$ in its total ring of fractions, and $\nu$ unique up to a unique $C$-isomorphism.

[F2] [[def-finite-morphism-schemes]]: A morphism $f\colon X\to S$ is finite if for every affine open $U=\operatorname{Spec}A\subseteq S$ its inverse image is affine, $f^{-1}(U)=\operatorname{Spec}B$, and $B$ is module-finite over $A$.

[F3] [[thm-finite-morphism-integral-closed]]: For a finite morphism, every ring map $A\to B$ induced on an affine chart is integral.

[F4] [[lem-birational-morphism-principal-open-isomorphism]]: For integral $k$-schemes of finite type and a birational morphism $g\colon X\to Y$ that is locally of finite type, there are nonempty affine opens $U=\operatorname{Spec}A\subseteq X$, $V=\operatorname{Spec}B\subseteq Y$ with $g(U)\subseteq V$ and an element $\sigma\in B\setminus\{0\}$ such that the localised ring map $B_\sigma\to A_\sigma$ is an isomorphism and $g$ restricts to an isomorphism $g^{-1}(D(\sigma))\cap U\to D(\sigma)$.

[F5] [[def-integral-closure-and-integrally-closed-domain]]: For a domain $A$ with fraction field $K$, the integral closure of $A$ in $K$ is the set of elements of $K$ integral over $A$; $A$ is integrally closed when it contains every such element.

[F6] [[lem-integral-closure-unchanged-across-an-integral-intermediate-domain]]: For domains $A\subseteq B\subseteq L$ with $B$ integral over $A$, an element $z\in L$ is integral over $A$ if and only if it is integral over $B$.

[F7] [[def-birational-morphism-schemes]]: For integral $k$-schemes of finite type, a morphism is birational when it maps the generic point to the generic point and induces an isomorphism of the function-field stalks.

## Proof

1.1 Every irreducible component $X_i$ of $X$ maps onto exactly one irreducible component $Y_j$ of $Y$, and the restriction $f_i\colon X_i\to Y_j$ is finite and birational. By [F2] the morphism $f$ is affine over affine opens and each fibre $f^{-1}(p)$ is the spectrum of a module-finite algebra over the residue field $\kappa(p)$, hence a finite set of points; a one-dimensional component $X_i$ therefore cannot be contained in a fibre, so its image $f(X_i)$, which is closed and irreducible, has dimension one and is a component $Y_j$ of $Y$. Since $f$ is birational there is a dense open $V\subseteq Y$ with $f^{-1}(V)\to V$ an isomorphism; the open subscheme $f^{-1}(V\cap Y_j)\cong V\cap Y_j$ is irreducible, hence lies in a single component of $X$, and any component mapping onto $Y_j$ would meet it, so there is exactly one such component. Over the dense open $V\cap Y_j$ the restriction $f_i$ is an isomorphism, and the function field of an integral scheme equals that of any nonempty open subscheme, so $f_i$ maps the generic point to the generic point and identifies the function fields: $f_i$ is birational in the sense of [F7]. [F2, F7]

2.1 The normalizations decompose over the irreducible components: $\widetilde X=\coprod_i\widetilde X_i$ and $\widetilde Y=\coprod_j\widetilde Y_j$, compatibly with the maps to $X$ and $Y$, so it suffices to prove that each $f_i$ induces an isomorphism $\widetilde X_i\to\widetilde Y_j$ over $Y_j$. By [F1] the normalization is computed on an affine chart as the integral closure in the total ring of fractions; for a reduced curve the total ring of fractions is the product of the function fields of its finitely many components, and the integral closure of a product of domains is the product of their integral closures, so the normalization of the curve is the disjoint union of the normalizations of its components, and the claim for $f$ is the claim for the $f_i$ assembled over $j$. [F1, step 1.1]

3.1 Fix $i,j$ and an affine open $U=\operatorname{Spec}A\subseteq Y_j$ with $f_i^{-1}(U)=\operatorname{Spec}B$; then $A$ and $B$ are domains of dimension one, finite type over $k$, the map $A\to B$ is injective, module-finite by [F2] and integral by [F3], and the birationality of $f_i$ gives $\operatorname{Frac}(A)=\operatorname{Frac}(B)$ as subfields of the common function field $K(Y_j)=K(X_i)$. Indeed [F4] applied to $f_i$ supplies a nonempty affine open of $Y_j$ on which the localised map is an isomorphism, and localising a domain at a nonzero element does not change its fraction field. By [F1] the normalization $\widetilde Y_j$ over $U$ is the spectrum of the integral closure $\overline A$ of $A$ in $\operatorname{Frac}(A)$ and $\widetilde X_i$ over $f_i^{-1}(U)$ is the spectrum of the integral closure $\overline B$ of $B$ in $\operatorname{Frac}(B)$ ([F5]). [F1, F2, F3, F4, F5, step 2.1]

4.1 In the situation of step 3.1 one has $\overline A=\overline B$ as subrings of the common field $\operatorname{Frac}(A)=\operatorname{Frac}(B)$: since $A\subseteq B\subseteq\operatorname{Frac}(B)$ and $B$ is integral over $A$, [F6] says that an element is integral over $A$ exactly when it is integral over $B$. Hence the affine normalizations agree canonically over $U$, and the identification is the identity on the common function field. [F6, step 3.1]

5.1 The identifications of step 4.1 are canonical on affine charts (both sides are the same integral closure inside the same function field), so they agree on overlaps and glue to an isomorphism $\widetilde X_i\to\widetilde Y_j$ over $Y_j$; assembling over the components by step 2.1 gives the isomorphism $\widetilde X\to\widetilde Y$ over $Y$, and the uniqueness clause of [F1] makes it the canonical identification of the two normalizations with the same finite birational model of $Y$. [F1, step 4.1] ∎
