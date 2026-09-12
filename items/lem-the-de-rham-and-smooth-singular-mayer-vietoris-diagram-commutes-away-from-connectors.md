---
id: "lem-the-de-rham-and-smooth-singular-mayer-vietoris-diagram-commutes-away-from-connectors"
kind: "lemma"
title: "The de Rham and smooth singular Mayer–Vietoris diagram commutes away from connectors"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-naturality-of-the-de-rham-map","lem-de-rham-mayer-vietoris-with-boundary-and-an-explicit-partition-lift","thm-smooth-singular-mayer-vietoris-sequence","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. For an ordered two-open cover $M=U\cup V$ of a smooth manifold, possibly with boundary, the restriction and difference squares between the de Rham and smooth singular Mayer–Vietoris sequences commute with integration. Both difference maps use the order $V-U$. Thus, writing $W=U\cap V$,
$$ (I_U\oplus I_V)r_{\mathrm{dR}}=r_\infty I_M,\qquad I_Ws_{\mathrm{dR}}=s_\infty(I_U\oplus I_V) $$
on cohomology in every degree. The displayed compatibility calculations themselves are choice-free; the assumption supplies the form exact sequence. The connector square is proved separately.

## Facts & Assumptions

[F1] [[prop-naturality-of-the-de-rham-map]] gives integration compatibility with restriction along any smooth open inclusion, already on cochains, and real linearity.

[F2] [[lem-de-rham-mayer-vietoris-with-boundary-and-an-explicit-partition-lift]] gives the de Rham exact sequence with restrictions and $V-U$ difference, assuming countable choice or a supplied partition.

[F3] [[thm-smooth-singular-mayer-vietoris-sequence]] gives the smooth singular sequence with the same restriction and difference conventions; its first term is identified through the actual cover-small inclusion.

[F4] [[def-countable-choice]] is the assumed axiom, used for the partition in [F2].

## Proof

**Given:** The ordered cover, the stated choice assumption and a fixed degree $k$. Let $j_U:U\to M$, $j_V:V\to M$ and $\ell_U:W\to U$, $\ell_V:W\to V$ be the inclusions.

1.1 For any form $\omega$ on $M$, [F1] applied to $j_U$ gives $I_U(\omega|_U)=I_M(\omega)|_U$ as cochains, and application to $j_V$ gives the corresponding equality on $V$. Taking the ordered pair yields the restriction square. For a closed $\omega$, passing to its classes gives the first asserted equality using [F2] and [F3]. [F1, F2, F3, given]

1.2 For forms $\alpha$ on $U$ and $\beta$ on $V$, naturality for $\ell_U,\ell_V$ and linearity give $$I_W(\beta|_W-\alpha|_W)=I_V(\beta)|_W-I_U(\alpha)|_W.$$ This is exactly $V-U$ on both rows, not its negative. For closed representatives it passes to the difference square on cohomology. Replacing either representative by an exact form changes its integration cochain by a coboundary by [F1], so the computed square is independent of representatives. [F1, F2, F3, given]

2.1 In [F3] the identification between the first term and the small-complex cohomology is restriction along the actual inclusion of small chains. Restricting a global integration cochain to a simplex lying in $U$ or $V$ gives exactly its integral in that open set. Hence step 1.1 computes the stated Mayer–Vietoris arrows even under that identification; no auxiliary small-chain inverse or change of sign enters either square. [F1, F3, step 1.1]

3.1 If an open or the overlap is empty, the corresponding cochain group is zero and the formulas still hold. If $U=V=M$, step 1.1 is the diagonal square and step 1.2 is ordinary subtraction. In degree zero they are the two pointwise restriction/subtraction identities; degree one and top degree use the same coefficient equalities. Negative degrees are zero. Degenerate simplices are evaluated by the same integration rule. Assumption [F4] is needed only for [F2]'s partition existence, not for any computation above; with a supplied partition both exact rows and these compatibilities are choice-free. [F1, F2, F3, F4, step 1.1, step 1.2, step 2.1] ∎
