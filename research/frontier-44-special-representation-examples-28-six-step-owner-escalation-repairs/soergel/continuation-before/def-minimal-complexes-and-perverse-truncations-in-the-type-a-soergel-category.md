---
id: def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category
kind: definition
title: "Minimal complexes and the perverse truncations in the real type-A Soergel category"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-real-type-a-soergel-category-and-scalar-extension, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree, def-invariant-intersection-form-on-a-bott-samelson-bimodule, def-additive-category, def-the-idempotent-completion-of-a-preadditive-category, def-local-ring, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization, def-complex-homotopy-and-contractibility-in-an-additive-category, def-shift-of-a-chain-complex, def-homotopy-category-of-chain-complexes, def-mapping-cone-of-a-chain-map, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex, def-invertible-differential-block-and-schur-complement-reduction]
justified_by: ["lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category"]
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 6.1 (radical, the quotient B^ss, minimal complexes and their uniqueness), Section 6.2 (the perverse filtration on bimodules and (6.1)), Section 6.3 (the perverse filtration on complexes, pK^b_{>=0}, pK^b_{<=0} and Lemma 6.1), Remark 6.2"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 2.5 (complexes de Rouquier, complexes minimaux)"
    - title: "Gobet, Twisted filtrations of Soergel bimodules and linear Rouquier complexes (arXiv:1601.00339; J. Algebra 484 (2017) 275-309)"
      url: "https://arxiv.org/pdf/1601.00339"
      locator: "Section 5.1 (Rouquier complexes and minimal complexes) and Section 6 (linearity)"
verification:
  precheck: n/a
---

## Definition

**The category and its radical.** Let $\mathcal B=\mathrm{SBim}_n^R$ be the real
graded type-A Soergel category of
[[def-real-type-a-soergel-category-and-scalar-extension]], with degree-zero
morphisms; it is a graded additive idempotent-complete category
([[def-additive-category]], [[def-the-idempotent-completion-of-a-preadditive-category]])
whose objects are finite direct sums of shifts of the indecomposables $B_w^R$
([[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).
Its **categorical radical** is the two-sided ideal
$$\operatorname{rad}\mathcal B:=\{f:M\to N\ :\ \text{for every }g:N\to M,\ 1_M-gf\text{ is invertible}\},$$
and $q:\mathcal B\to\mathcal B^{ss}:=\mathcal B/\operatorname{rad}\mathcal B$ is
the quotient functor. The radical is defined by the displayed invertibility
criterion and is not claimed to be nilpotent in general; on objects with local
endomorphism rings (as here, by the comparison lemma) it consists of the
non-units in the relevant endomorphism algebras.

**Minimal complexes.** Let $K^b(\mathcal B)$ be the homotopy category of bounded
cochain complexes of graded bimodules with degree-zero differentials
([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]],
[[def-homotopy-category-of-chain-complexes]]). A bounded complex $F$ is
**minimal** when $q(d_F)=0$ in every degree, i.e. every differential of $F$
lies in the radical. Homological shifts are written $[j]$
([[def-shift-of-a-chain-complex]]); mapping cones are as in
[[def-mapping-cone-of-a-chain-map]]; contractibility and homotopies are as in
[[def-complex-homotopy-and-contractibility-in-an-additive-category]]; and the
two-term cancellation used on this page is
[[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]]
with the block calculus of
[[def-invertible-differential-block-and-schur-complement-reduction]].

**Perverse bimodules.** Let $\underline H_x$ be the Kazhdan-Lusztig basis of the
Hecke algebra of the frontier Hecke page, transported to this page by the
comparison lemma. A Soergel bimodule is **perverse** when its character is a
nonnegative integer combination of the Kazhdan-Lusztig basis elements
$\underline H_x$ (not of the standard basis elements $H_x$); it is
**p-split** when its indecomposable summands are shifts of perverse ones. Thus
if $\mathrm{S}(x)$ holds then $B_x^R$ is perverse, since its character is
$\underline H_x$; no other perversity of a normalized indecomposable is asserted
before $\mathrm{S}(x)$.

**The perverse cuts.** Let $M$ be p-split and fix a decomposition
$$M=\bigoplus_{x,k}B_x^R(k)^{m_{x,k}}$$
with the normalized $B_x^R$ perverse (such a decomposition exists by the
comparison lemma, and the cuts below are proved intrinsic by the structural
lemma). For $j\in\mathbb Z$ set
$$\tau_{\le j}M:=\bigoplus_{k\ge -j}B_x^R(k)^{m_{x,k}},\qquad \tau_{<j}M:=\tau_{\le j-1}M,\qquad \tau_{\ge j}M:=M/\tau_{<j}M,$$
and define the associated graded
$$H^j(M):=\bigl(\tau_{\le j}M/\tau_{<j}M\bigr)(j),$$
so that the $j$-th perverse piece is normalized by the internal shift $(j)$.
Internal shifts $(d)$ change module degrees and homological shifts $[j]$ change
complex degrees; the two are kept distinct throughout.

**The perverse subcategories of complexes.** For a bounded complex
$F=(F^i,d^i)$ define
$$F\in pK^b_{\ge0}\quad\Longleftrightarrow\quad F\ \text{is isomorphic in }K^b(\mathcal B)\ \text{to a complex with p-split terms and}\ \tau_{<-i}(F^i)=0\ \text{for all }i,$$
$$F\in pK^b_{\le0}\quad\Longleftrightarrow\quad F\ \text{is isomorphic in }K^b(\mathcal B)\ \text{to a complex with p-split terms and}\ F^i=\tau_{\le-i}(F^i)\ \text{for all }i.$$
Equivalently, in the termwise decompositions the internal shifts $k$ satisfy
$k\le i$ for $pK^b_{\ge0}$ and $k\ge i$ for $pK^b_{\le0}$. The structural lemma
of this page supplies the semisimplicity of $\mathcal B^{ss}$, the existence and
uniqueness of minimal models, the intrinsicness and functoriality of the cuts,
their preservation under direct summands and their extension closure in
distinguished triangles; none of these properties is asserted by this
definition. The objects $pK^b_{\ge0}$ and $pK^b_{\le0}$ are the classes inside
which the Rouquier complexes of the next items are shown to lie, following the
orientation of Elias-Williamson Section 6.3.

## Remark

- **The radical criterion is deliberately not strengthened.** For a normalized
  indecomposable $B_x^R$ the radical of its endomorphism algebra vanishes only
  after $\mathrm{S}(x)$ makes the endomorphism algebra $\mathbb R$ (comparison
  lemma). Whenever its degree-zero endomorphism algebra is local with residue
  field $\mathbb R$, its image $q(B_x^R)$ is simple in the radical quotient:
  the quotient endomorphism algebra is the residue field, even if the original
  algebra has a nonzero radical. This does not make the original algebra
  one-dimensional before $\mathrm{S}(x)$.
- **Perversity is not positivity.** The definition of perverse uses only the
  existence of the Kazhdan-Lusztig basis and the nonnegativity of the
  *coefficients* of a given character; it does not assert that the coefficients
  of $\underline H_w$ in the standard basis are nonnegative, which is the
  positivity corollary proved at the end of this page.
- **Small cases.** If $M=0$ all cuts are zero and $H^j(M)=0$; if $M$ is a single
  shift $B_x^R(k)$ with $x$ satisfying $\mathrm{S}(x)$, then
  $\tau_{\le j}M=M$ for $j\ge -k$ and $0$ otherwise.
