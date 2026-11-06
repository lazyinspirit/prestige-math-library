---
id: rem-r2-ordinary-differential-and-twisted-k-charge-layers
kind: remark
title: Ordinary periods, differential refinement, and RR K-theory are distinct layers
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 13
proof_strategy: direct
axiom_strength: Conditional mathematical inputs carry the axiom strength of the cited
  differential-cohomology and Spin-c suppliers.
deps:
- post-r2-iib-three-form-flux-quantization
- post-r2-massive-iia-f0-h3-flux-quantization
- def-gts-cheegersimons-differential-character
- def-gts-differential-twist-and-twisted-differential-k-theory
- thm-gts-exact-sequences-for-ordinary-differential-cohomology
- thm-gts-spin-and-spin-c-obstruction-and-torsor-classification
- thm-de-rham-theorem
- def-given-spin-and-spinc-structures-and-associated-spinor-bundles
- lem-normalized-pin-spin-product-and-norm-laws
- def-stiefel-whitney-classes-from-the-projective-bundle-relation
dependency_roles:
  post-r2-iib-three-form-flux-quantization: physical-assumption
  post-r2-massive-iia-f0-h3-flux-quantization: formulation-prerequisite
  def-gts-cheegersimons-differential-character: mathematical-premise
  def-gts-differential-twist-and-twisted-differential-k-theory: mathematical-premise
  thm-gts-exact-sequences-for-ordinary-differential-cohomology: mathematical-premise
  thm-gts-spin-and-spin-c-obstruction-and-torsor-classification: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
  lem-normalized-pin-spin-product-and-norm-laws: mathematical-premise
  def-stiefel-whitney-classes-from-the-projective-bundle-relation: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: Conceptual distinction among free flux periods, differential-cohomology
  data, and the source-motivated Type II K-theory charge model. The Type IIB GKP period
  postulate and RR/K-theory identification are source-scoped physical inputs, not
  consequences of the massive IIA quantization postulate or of mathematical definitions.
sources:
  references:
  - title: Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from
      Fluxes in String Compactifications
    url: https://arxiv.org/pdf/hep-th/0105097v2
    locator: §2.1 Eq. (2.25), PDF p. 9; §3.1 Eqs. (3.4)–(3.6), PDF p. 17, free RR
      and NS three-form flux integers in the stated classical Type IIB GKP model.
  - title: James Simons and Dennis Sullivan, Axiomatic Characterization of Ordinary
      Differential Cohomology
    url: https://arxiv.org/pdf/math/0701077v1
    locator: §1, Character Diagram and differential-character construction.
  - title: Ulrich Bunke, Differential Cohomology
    url: https://arxiv.org/pdf/1208.3961v6
    locator: §3.2, exact sequence (20), PDF pp. 36–39.
  - title: Ulrich Bunke and Thomas Nikolaus, Twisted Differential Cohomology
    url: https://arxiv.org/pdf/1406.3231v1
    locator: Definition 4.9 and §§3–5, differential twists and differential-function
      spectra.
  - title: R. Minasian and G. Moore, K-theory and Ramond–Ramond charge
    url: https://arxiv.org/pdf/hep-th/9710230v3
    locator: Introduction and equation (1.1), PDF pp. 1–3.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Here $F_3$ and $H_3$ are the Type IIB Ramond–Ramond and Neveu–Schwarz three-form fluxes. In the classical GKP Type IIB model, adopt the source's normalization $(2\pi\alpha')^{-1}\int_{\Gamma_3}F_3\in2\pi\mathbb Z$ and $(2\pi\alpha')^{-1}\int_{\Gamma_3}H_3\in2\pi\mathbb Z$ on free integral three-cycles; equivalently, each period divided by $(2\pi)^2\alpha'$ is an integer. This statement is Type IIB-specific and does not follow from the massive Type IIA free-period postulate [[post-r2-massive-iia-f0-h3-flux-quantization]]. Smooth differential forms determine real cohomology classes and cannot detect integral torsion. An ordinary differential character adds curvature, an integral characteristic class, and holonomy; twisted differential $K$-theory, obtained from the twist definition with $E=KU$ (complex K-theory), adds the specified twist data. These constructions are distinct mathematical objects. Identifying Type II RR charges with $K$-theory is a source-motivated physical model, not a theorem of the mathematical definitions or a consequence of the free-period postulate.

## Facts & Assumptions

**Given:** A smooth manifold $M$, the stated source-scoped GKP Type IIB input, and the current mathematical suppliers.

[A1] The source-scoped Type IIB input [[post-r2-iib-three-form-flux-quantization]] records Giddings–Kachru–Polchinski, hep-th/0105097v2, equation (2.25) and §3.1, equations (3.4)–(3.6): the classical Type IIB fluxes satisfy $(2\pi\alpha')^{-1}\int F_3\in2\pi\mathbb Z$ and $(2\pi\alpha')^{-1}\int H_3\in2\pi\mathbb Z$ on free integral three-cycles. This is an adopted Type IIB model input in that paper's normalization, not the separate Type IIA postulate [[post-r2-massive-iia-f0-h3-flux-quantization]], which assumes constant $F_0$, smooth closed internal $H_3$, no NS5 magnetic current, and free periods in the Graña normalization.

[F1] [[def-gts-cheegersimons-differential-character]]: a degree-$k$ differential character has a unique closed integral-period curvature $R(h)$, an integral characteristic class $I(h)$, and cycle holonomy $h$.

[F2] [[thm-gts-exact-sequences-for-ordinary-differential-cohomology]]: curvature-zero characters form $H^{k-1}(M;\mathbb R/\mathbb Z)$, and characters with a fixed characteristic class can still differ by differential-form data.

[F3] [[def-gts-differential-twist-and-twisted-differential-k-theory]]: a differential twist includes an invertible topological $E$-module, a differential-form module, and a real comparison equivalence; a gerbe presentation alone does not supply that comparison.

[A2] Minasian–Moore, hep-th/9710230v3, equation (1.1): the paper proposes a K-theoretic RR charge expression involving a K-theory pushforward and $\widehat A$-class. It is evidence for that physical proposal, not proof of a universal charge classification.

[F4] [[thm-gts-spin-and-spin-c-obstruction-and-torsor-classification]]: for an oriented bundle of positive rank over the stated smooth-manifold base, a Spin-c lift exists exactly when $W_3=\beta_2w_2=0$, under full AC; this criterion is proved by the Spin and determinant-reduction suppliers.

[F5] [[thm-de-rham-theorem]]: the de Rham comparison identifies smooth closed forms modulo exact forms with real singular cohomology, by integration.

## Proof

1.1 If $c\in H^k(M;\mathbb Z)$ is torsion, choose $N>0$ with $Nc=0$. Its image $c_{\mathbb R}\in H^k(M;\mathbb R)$ satisfies $Nc_{\mathbb R}=0$. Since a real vector space has no nonzero element annihilated by a positive integer, $c_{\mathbb R}=0$. By the de Rham comparison in [[thm-de-rham-theorem]], smooth closed forms represent real cohomology, so their periods cannot distinguish $c$ from zero. The exact sequence [F2] also places flat characters in the kernel of curvature, showing that curvature forms alone omit holonomy information. [F1, F2, F5, given, algebra]

1.2 The definition [F3] makes the topological twist, differential-form module, and comparison equivalence part of the mathematical input; its homotopy-pullback construction then defines twisted differential cohomology. It supplies no identification with physical RR fields. The K-theory expression in [A2] is therefore a distinct source-motivated physical proposal, not an inference from [F1]–[F3]. [A2, F1, F3, given]

2.1 The GKP integer-period statement [A1] is scoped to its classical Type IIB model, whereas [[post-r2-massive-iia-f0-h3-flux-quantization]] is an adopted massive Type IIA input; neither proves a universal ordinary-cohomology classification of RR flux or charge. If the trivial-$B$ Spin-c criterion is invoked for a positive-rank normal bundle in the Freed–Witten setup on the stated smooth base, [F4] identifies $W_3=0$ with existence of a Spin-c lift under full AC. For a zero-rank normal bundle, the rank conventions give $W_3=0$, and $\operatorname{Spin}^c(0)=(\{\pm1\}\times U(1))/\langle(-1,-1)\rangle\cong U(1)$ has its trivial principal lift over the trivial $SO(0)$ frame bundle; the negative-square zero-dimensional Clifford norm gives $\operatorname{Spin}(0)=\{\pm1\}$. These definitions and rank conventions are supplied by [[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]], [[lem-normalized-pin-spin-product-and-norm-laws]] and [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]. This mathematical identification does not prove the physical anomaly or a universal RR charge classification. [A1, F4, given] ∎

## Source references

[[post-r2-iib-three-form-flux-quantization]]

[[post-r2-massive-iia-f0-h3-flux-quantization]]

[[def-gts-cheegersimons-differential-character]]

[[def-gts-differential-twist-and-twisted-differential-k-theory]]

[[thm-gts-exact-sequences-for-ordinary-differential-cohomology]]

[[thm-gts-spin-and-spin-c-obstruction-and-torsor-classification]]
