---
id: thm-canonical-finite-cyclic-knot-defects-equal-seifert-signature-averages
kind: theorem
title: Canonical finite cyclic knot signature defects equal Seifert signature averages
status: draft
origin: pipeline
deps:
  - lem-finite-disk-band-surfaces-give-cyclic-zero-surgery-bounding-manifolds
  - lem-finite-cyclic-von-neumann-signatures-are-character-averages
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - def-blanchfield-pairing-and-higher-order-rho-invariant
proof_strategy: direct
axiom_use: Full AC is retained from the analytic signature and smooth geometric
  suppliers. This is an actual canonical bounding-defect formula; independence
  from that bounding data is not assumed.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Cochran, Orr and Teichner, Structure in the classical knot concordance
        group
      url: https://arxiv.org/pdf/math/0206059
      locator: Appendix5, Proposition5.1 and Lemmas5.4–5.6. Here the conclusion is the
        actual constructed bounding defect, without importing their general
        rho-independence foundations.
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
---

## Statement

Assume AC. For every supplied finite smooth oriented disk-band Seifert surface $F$ with one-boundary knot $K$, ordered homology basis and first-variable positive-push matrix $V$, let $W_F$ and its meridional extension $\psi_d:\pi_1(W_F)\to\mathbb Z/d$ be the actual construction of the finite disk-band bounding-manifold construction. For every positive integer $d$, set $\zeta_d=\exp(2\pi i/d)$ and
$$D_d(F)=\operatorname{sign}^{(2)}_{\mathbb Z/d}(W_F,\psi_d)-\operatorname{sign}(W_F).$$
Then
$$D_d(F)=\frac1d\sum_{r=0}^{d-1}\operatorname{sign}\bigl((1-\zeta_d^r)V+(1-\zeta_d^{-r})V^T\bigr).$$
The sign is exactly the positive $L^2$ signature minus ordinary signature convention. The formula allows singular character forms and all $d$, including $d=1$ and even $d$. The term $r=0$ is defined by the zero Hermitian matrix and contributes zero; its equality to the trivial-character signature follows from the ordinary metabolic calculation, not from specialization of a localized homology basis.

The boundary is the actual oriented zero surgery and its positive meridian map, not the knot exterior or a simply connected trace. The displayed formula proves this **canonical bounding defect**. Whenever a separately proved applicable bordism-independence assertion identifies the rho invariant with the defect of this bounding extension, it consequently gives the same value for that rho invariant. No such general independence assertion, global signature invariance, rho identification, uniform bound, infinite-cyclic formula or arbitrary-group index theorem is asserted here.

## Statement references

[[lem-finite-disk-band-surfaces-give-cyclic-zero-surgery-bounding-manifolds|Finite disk-band bounding-manifold construction]]

## Facts & Assumptions

**Given:** The finite smooth surface, its actual first-push matrix, AC and the positive integer $d$.

[F1] The first supplier constructs $W_F$ with actual zero-surgery boundary and meridional fundamental group, proves its ordinary signature zero, and computes its actual nontrivial-character form as $(1-z)V+(1-z^{-1})V^T$; the ordinary form is handled separately. [[lem-finite-disk-band-surfaces-give-cyclic-zero-surgery-bounding-manifolds]]

[F2] For an actual finite cyclic cover of a finite pair, its $L^2$ signature is the arithmetic mean of all character signatures, with kernels discarded only within their own blocks. [[lem-finite-cyclic-von-neumann-signatures-are-character-averages]]

[F3] The compact smooth manifold and its smooth boundary have a compatible finite triangulation. This supplies an actual finite CW pair, with the boundary a subcomplex. [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]

[F4] The rho definition uses a supplied bounding extension and the convention $\operatorname{sign}^{(2)}-\operatorname{sign}$; independence is a separate obligation. [[def-blanchfield-pairing-and-higher-order-rho-invariant]]

## Proof

1.1 Apply [F1] to the supplied finite geometry. It gives an oriented boundary identification $\partial W_F=M_K$ and an isomorphism $\pi_1(W_F)=\mathbb Z$ whose generator is the positive meridian of that boundary. Reducing this actual generator modulo $d$ gives a surjection and restricts to the positive meridian map on the actual zero surgery. In particular the prescribed coefficient map extends, which would not follow from merely taking the simply connected zero-framed two-handle trace. The smooth compact pair supplied by [F1] has the finite relative triangulation of [F3]. Thus all hypotheses of [F2] hold for this actual covering pair. [F1, F2, F3, given, construct]

2.1 For each nontrivial character $r$, [F1] identifies the actual middle character form, including its possible radical, with the displayed Hermitian matrix at $z=\zeta_d^r$, up to a positive basis normalization which changes no inertia. Its proof obtained that character homology directly from the cut complex and the invertibility of $1-z$, without assuming an Alexander determinant was nonzero. For $r=0$, the actual character form is the ordinary form of $W_F$, whose signature is zero by its explicit half-dimensional isotropic subspace and nonsingularity. The displayed matrix at $1$ is zero and also has signature zero, so this term has the same signature even though it is not a basis matrix for the ordinary form. Applying [F2] therefore gives precisely the arithmetic mean in the Statement for $\operatorname{sign}^{(2)}(W_F,\psi_d)$. [F1, F2, step 1.1, algebra]

3.1 By [F1], $\operatorname{sign}(W_F)=0$. Subtracting it from step2.1 proves the claimed defect formula with the stated sign. For $d=1$ there is only the zero term and both ordinary and trivial-group signatures coincide; for even $d$ the $-1$ character is included like every other nontrivial character, with no nonsingularity exception. Finally, if an independently established applicable bordism-independence theorem identifies [F4]'s rho with this particular supplied defect, substitution of the proven equality gives its same value. Without that additional assertion the already proved conclusion is exactly $D_d(F)$. This logical implication invokes no unproved independence supplier and makes no claim that the canonical defects are already independent of the supplied surface. [F1, F4, step 2.1, algebra] ∎
