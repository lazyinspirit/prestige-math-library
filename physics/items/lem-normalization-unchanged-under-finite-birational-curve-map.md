---
id: lem-normalization-unchanged-under-finite-birational-curve-map
kind: lemma
title: "Normalization is unchanged under finite birational maps of reduced curves"
status: published
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
    - title: "The Stacks Project, Definition 29.51.1: birational morphisms"
      url: "https://stacks.math.columbia.edu/tag/01RO"
      locator: "Generic-point bijection and generic-stalk isomorphisms for finitely many components"
    - title: "J. S. Milne, Algebraic Geometry v6.10"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "Chapter 8 normalization as desingularization of curves, pp. 194-197"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "normalization and curve singularity resolution, Chapter 21 and Exercise 19.4.C"
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered cumulative historical verification: original independent Step5 whole-item claim/body/proof reading for lem-normalization-unchanged-under-finite-birational-curve-map, completed Step5 repairs/dispositions, and later exact Step7 local correction reasoning. Later correction evidence is local author repair/self-review, not an independent fresh audit. Every substantive preguard-to-current delta is covered by the recorded repair reason; no new review or historical audit stamp is claimed. Supplier/source coverage is limited to actual recorded passages/interfaces, excluding recursive foundational closure/all bibliography.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader and Step7 repair dispatch","content_sha256":"e76891db4516ccdc3676e7f06f54e502ac9bb223b7124b34aee80cec9a917e63","evidence":["research/frontier-38-owner-30-reader-2.md","research/frontier-38-owner-30-reader-findings-2.json","research/frontier-38-owner-30-dispatch/reader-reader-2.result.json","research/frontier-38-owner-30-alpha-batch-2-5a-decisions.json","research/frontier-38-owner-30-step5-closure.json","research/frontier-38-owner-30-step7-auditor-baseline.json","research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u2.json","research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u2.result.json"],"historical_binding":{"preguard_raw_sha256":"b6106ebdfa118243269bfe2b1d98bcee7800c0f72190ca13601cd62684759598","preguard_content_sha256":"671624875d7103a58f9b856bca29f698dfa386e1727aa8e6ba73e14c562325be","captured_carrier":{"path":"research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u2.attempt-1.log","line":6147},"postguard_content_sha256":"caba8d23103c2409420c9662d18c932adc5af66942d4e6bf6cf5349563c7cbd8","final_carrier":"git d90f26208:items/lem-normalization-unchanged-under-finite-birational-curve-map.md","publication_transformation":"status draft to published; verification excluded; remaining mathematics/source bytes match exact postguard carrier","original_read_completed_at":"2026-10-03T08:50:20.136Z","local_repair_completed_at":"2026-10-03T16:07:30.510Z","local_repair_reason":"The integral-only F7 did not specify birationality for reducible curves. Added the generic-point bijection and generic-stalk convention in Given, matching Stacks 01RO; verified finite component restrictions, the product integral-closure computation, and the common-field comparison. The claim and AC assumption are unchanged.","local_repair_qualification":"Local author repair/self-review; cumulative with original independent full item reading"}}
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

**Given:** A field $k$, reduced curves $X,Y$ of finite type over $k$ (pure dimension one, reduced), and a finite birational morphism $f\colon X\to Y$, where birational means that $f$ bijects the generic points of irreducible components and induces an isomorphism on their local rings (the function fields); this extends the integral-scheme convention of [F7]. Let $\widetilde X\to X$ and $\widetilde Y\to Y$ be the finite normalizations of ([[thm-normalization-reduced-curve-exists-finite]]).

[F1] [[thm-normalization-reduced-curve-exists-finite]]: For a reduced $k$-scheme $C$ of finite type and pure dimension one there is a finite morphism $\nu\colon\widetilde C\to C$ with $\widetilde C$ regular of dimension one, $\nu$ an isomorphism over the regular locus, $\nu$ corresponding on an affine chart $\operatorname{Spec}A$ to the integral closure of $A$ in its total ring of fractions, and $\nu$ unique up to a unique $C$-isomorphism.

[F2] [[def-finite-morphism-schemes]]: A morphism $f\colon X\to S$ is finite if for every affine open $U=\operatorname{Spec}A\subseteq S$ its inverse image is affine, $f^{-1}(U)=\operatorname{Spec}B$, and $B$ is module-finite over $A$.

[F3] [[thm-finite-morphism-integral-closed]]: For a finite morphism, every ring map $A\to B$ induced on an affine chart is integral.

[F4] [[lem-birational-morphism-principal-open-isomorphism]]: For integral $k$-schemes of finite type and a birational morphism $g\colon X\to Y$ that is locally of finite type, there are nonempty affine opens $U=\operatorname{Spec}A\subseteq X$, $V=\operatorname{Spec}B\subseteq Y$ with $g(U)\subseteq V$ and an element $\sigma\in B\setminus\{0\}$ such that the localised ring map $B_\sigma\to A_\sigma$ is an isomorphism and $g$ restricts to an isomorphism $g^{-1}(D(\sigma))\cap U\to D(\sigma)$.

[F5] [[def-integral-closure-and-integrally-closed-domain]]: For a domain $A$ with fraction field $K$, the integral closure of $A$ in $K$ is the set of elements of $K$ integral over $A$; $A$ is integrally closed when it contains every such element.

[F6] [[lem-integral-closure-unchanged-across-an-integral-intermediate-domain]]: For domains $A\subseteq B\subseteq L$ with $B$ integral over $A$, an element $z\in L$ is integral over $A$ if and only if it is integral over $B$.

[F7] [[def-birational-morphism-schemes]]: For integral $k$-schemes of finite type, a morphism is birational when it maps the generic point to the generic point and induces an isomorphism of the function-field stalks.

## Proof

1.1 By the stated birationality convention, each reduced component $X_i$ corresponds to exactly one reduced component $Y_j$, with the same generic field. The restriction $f_i:X_i\to Y_j$ exists: the ideal of $Y_j$ pulls back to zero on the generic point of the reduced integral scheme $X_i$, hence to zero everywhere on $X_i$. It is finite, since on affine charts its coordinate algebra is a quotient of the finite $A$-algebra for $f$, and the $A$-action factors through the quotient defining $Y_j$. Thus $f_i$ is finite and birational in the integral sense of [F7]. [given, F2, F7]

2.1 The affine normalization construction of [F1] separates the reduced components, so $\widetilde X=\coprod_i\widetilde X_i$ and $\widetilde Y=\coprod_j\widetilde Y_j$. Indeed for a reduced Noetherian affine curve with minimal primes $\mathfrak p_i$, its total ring of fractions is $\prod_i\operatorname{Frac}(A/\mathfrak p_i)$, as established in the construction of [F1]. Its integral closure is $\prod_i\overline{A/\mathfrak p_i}$: projection of a monic equation proves one inclusion; conversely, lift a monic equation for each coordinate to $A[T]$ and multiply the finitely many lifted polynomials, obtaining a monic equation annihilating the tuple. These identifications commute with restrictions and give the claimed decompositions. It therefore suffices to compare the normalizations for each $f_i$. [F1, F5, step 1.1, algebra]

3.1 Fix $i,j$ and an affine open $U=\operatorname{Spec}A\subseteq Y_j$ with $f_i^{-1}(U)=\operatorname{Spec}B$; then $A$ and $B$ are domains of dimension one, finite type over $k$, the map $A\to B$ is injective, module-finite by [F2] and integral by [F3], and the birationality of $f_i$ gives $\operatorname{Frac}(A)=\operatorname{Frac}(B)$ as subfields of the common function field $K(Y_j)=K(X_i)$. Indeed [F4] applied to $f_i$ supplies a nonempty affine open of $Y_j$ on which the localised map is an isomorphism, and localising a domain at a nonzero element does not change its fraction field. By [F1] the normalization $\widetilde Y_j$ over $U$ is the spectrum of the integral closure $\overline A$ of $A$ in $\operatorname{Frac}(A)$ and $\widetilde X_i$ over $f_i^{-1}(U)$ is the spectrum of the integral closure $\overline B$ of $B$ in $\operatorname{Frac}(B)$ ([F5]). [F1, F2, F3, F4, F5, step 2.1]

4.1 In the situation of step 3.1 one has $\overline A=\overline B$ as subrings of the common field $\operatorname{Frac}(A)=\operatorname{Frac}(B)$: since $A\subseteq B\subseteq\operatorname{Frac}(B)$ and $B$ is integral over $A$, [F6] says that an element is integral over $A$ exactly when it is integral over $B$. Hence the affine normalizations agree canonically over $U$, and the identification is the identity on the common function field. [F6, step 3.1]

5.1 The identifications of step 4.1 are canonical on affine charts (both sides are the same integral closure inside the same function field), so they agree on overlaps and glue to an isomorphism $\widetilde X_i\to\widetilde Y_j$ over $Y_j$; assembling over the components by step 2.1 gives the isomorphism $\widetilde X\to\widetilde Y$ over $Y$, and the uniqueness clause of [F1] makes it the canonical identification of the two normalizations with the same finite birational model of $Y$. [F1, step 4.1] ∎
