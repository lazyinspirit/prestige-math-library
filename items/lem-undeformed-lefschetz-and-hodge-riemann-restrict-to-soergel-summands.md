---
id: lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands
kind: lemma
title: "Undeformed Lefschetz and Hodge-Riemann restrict to the next Soergel summand"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-the-deformed-lefschetz-operator-on-b-x-b-s, lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree, lem-family-signature-constancy-and-the-weak-lefschetz-substitute, lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Sections 1.2.3-1.2.5; Lemma 2.2; Lemma 3.11; Section 6.8 (zero-parameter restriction)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Proposition 2.8 and its full proof, pp. 22-23; Lemma 2.6 and the positive-scalar comparison, p. 21"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** $x,s$ with $xs>x$, the tensor product $M=B_x^RB_s^R$ with its induced form and the operators $L_\zeta$ ([[def-the-deformed-lefschetz-operator-on-b-x-b-s]]), and the assumption that $B_{xs}$ occurs as the top bimodule summand of $M$ with multiplicity one.

[F1] The normalized summand $B_{xs}^R\subseteq M$ is a direct summand as a graded bimodule; under $\mathrm{S}(<xs)$ the comparison lemma gives the unshifted decomposition $M=B_{xs}^R\oplus\bigoplus_{y<xs}B_y^{R,a_y}$, and then $\operatorname{ch}(M)=\underline H_x\underline H_s$ and $\operatorname{ch}(B_{xs})=\underline H_{xs}$ after $\mathrm{S}(xs)$ ([[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).

[F2] If the ambient space satisfies hL and HR and $V$ is an $L_0$-stable graded subspace with $\dim V^{-i}=\dim V^i$ for every $i$, then $V$ inherits hL and HR with the ambient signs, and its restricted form is non-degenerate ([[lem-family-signature-constancy-and-the-weak-lefschetz-substitute]]).

[F3] Under $\mathrm{S}(xs)$ the nonzero invariant forms on $B_{xs}^R$ are unique up to a nonzero real scalar, and the restriction of the intersection form of $M$ along any reduced-word embedding of $xs$ is a positive multiple of the normalized intrinsic form; consequently $\mathrm{HR}(xs)$ and $\mathrm{HRbar}(xs)$ are equivalent and no sign changes ([[lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate]]).

## Statement

Let $xs>x$. The normalized indecomposable $B_{xs}^R$ occurs as a bimodule summand of $B_x^RB_s^R$.

(a) If $\mathrm{hL}(x,s)_0$ holds, then $\mathrm{hL}(xs)$ holds.

(b) If $\mathrm{S}(<xs)$ and $\mathrm{hL}(y)$ for every $y<xs$ hold, then $\mathrm{hL}(x,s)_0$ is equivalent to $\mathrm{hL}(xs)$.

(c) If $\mathrm{HRbar}(x,s)_0$ holds, then the restriction to the chosen $B_{xs}^R$ summand satisfies the Hodge-Riemann relations for its induced form; once $\mathrm{S}(xs)$ has been established, positive comparison of invariant forms gives $\mathrm{HR}(xs)$ and $\mathrm{HRbar}(xs)$ with the standard sign.

(d) More generally an $L_0$-stable graded subspace with symmetric Betti numbers inherits HR with the ambient signs, and a graded direct summand whose subspace and complement are both $L_0$-stable inherits hL from an ambient hL operator. These conclusions apply to a positive deformation only if the chosen subspace, and for the direct-sum argument its complement, are preserved by that operator; they make no identification of the restricted positive operator with left multiplication by $\rho$.

## Proof

**Proof technique:** direct; block decomposition of the operator along the summand and the stable-subspace lemma.

1.1 **Restriction of hard Lefschetz (a).** The inclusion $i:B_{xs}^R\to M$ and the projection $\pi:M\to B_{xs}^R$ of the summand are degree-zero bimodule maps, and they commute with left multiplication by $\rho$, since left multiplication by a central element is a bimodule endomorphism; after right reduction they remain a split inclusion and projection of the finite-dimensional real spaces. Hence the operator $L_0^i$ on $\overline M$ is block diagonal with respect to the decomposition of $\overline M$ into the summand and its complement, and each block is the corresponding power of the restricted operator. If $L_0^i$ is an isomorphism, then its inverse commutes with the block decomposition, so each diagonal block is invertible; in particular the block $\overline{B_{xs}^R}^{-i}\to\overline{B_{xs}^R}^{i}$ is an isomorphism. This holds for every $i\ge0$, which is $\mathrm{hL}(xs)$. [given, F1, algebra]

2.1 **The converse under the character hypotheses (b).** Assume $\mathrm{S}(<xs)$ and $\mathrm{hL}(y)$ for all $y<xs$. By [F1] the decomposition $M=B_{xs}^R\oplus\bigoplus_{y<xs}B_y^{R,a_y}$ has no shifts, and every lower label $y<xs$ satisfies $\mathrm{S}(y)$; the module $B_{xs}^R$ is self-dual with symmetric Betti numbers, and by the comparison lemma the same holds for every lower summand. If $\mathrm{hL}(xs)$ holds, the block of $L_0^i$ on $B_{xs}^R$ is invertible; by hypothesis each lower block $B_y^R$ is invertible (hL$(y)$), and no other summands occur; therefore every diagonal block is invertible, so $L_0^i$ is invertible, which is $\mathrm{hL}(x,s)_0$. This proves the equivalence. [step 1.1, F1]

3.1 **Restriction of HR (c).** Assume $\mathrm{HRbar}(x,s)_0$, that is, HR for the restriction of the intersection form over a fixed reduced-word embedding of $\underline x$ and a fixed induced form of $M$; the summand $B_{xs}^R$ has symmetric Betti numbers by self-duality, and the inclusion is $L_0$-stable. Applying the stable-subspace lemma [F2] to $V=\overline{B_{xs}^R}$ inside $\overline M$ gives that the restricted operator and form satisfy hL and HR with the ambient signs; since the lowest degree of $B_{xs}^R$ equals the lowest degree $-\ell(xs)$ of $M$, the ambient standard sign is the standard sign of $B_{xs}^R$. Once $\mathrm{S}(xs)$ is known, [F3] identifies the restricted form with a positive multiple of the normalized intrinsic form, and $\mathrm{HR}(xs)$ and $\mathrm{HRbar}(xs)$ follow with no change of signs. [step 2.1, F2, F3]

4.1 **General stable subspaces (d).** For an $L_0$-stable graded subspace with symmetric Betti numbers, [F2] gives hL and HR with the ambient signs. If instead a graded decomposition $H=V\oplus W$ has both $V$ and $W$ $L_0$-stable and $H$ satisfies hL, then each $L_0^i:H^{-i}\to H^i$ is block diagonal. Its injectivity and surjectivity give injectivity and surjectivity on each block separately, hence hL on $V$, as in step 1.1. Merely being a graded direct summand is insufficient: in a length-one Lefschetz string, the stable top line has zero degree $-1$ part and a nonzero degree $1$ part. A positive deformation $L_\zeta$ with $\zeta>0$ preserves a summand only when the summand's projector commutes with the middle-position operator, which is not automatic; when it does not, the restriction of $L_\zeta$ to the summand is not defined as an operator on the reduced summand, so no positive-parameter restriction statement is made. In particular no step identifies the restriction of $L_\zeta$ with left multiplication by $\rho$. This proves (d) and completes the lemma. [step 1.1, step 3.1, F2] ∎

## Remarks

- The equivalence in (b) is the point where the induction closes downward: hL for the tensor product is recovered from hL for the top summand and the already-established hL of the strictly lower summands, with the unshifted decomposition supplied by $\mathrm{S}(<xs)$.
- The last sentence of (d) is a genuine caveat: middle multiplication does not commute with an arbitrary summand projector, so positive-parameter restriction is never used on this page; the positive parameters are handled by the deformation principle and the signature-constancy lemma instead.
