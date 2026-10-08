# Exact two-sided-cell shape residual

Run: `frontier-43-complex-representation-15`. Same Codex reviewer owns this branch, following positivity/star round one. No source exception is activated here. The classification Statement, including two-sided cells = RSK shape fibers, is preserved.

## Finding and smallest missing assertion

Current `thm-type-a-kazhdan-lusztig-cells-are-classified-by-rsk-tableaux` imports He–Hu–Sun Theorem 1.3 as F5 and uses it essentially in step 1.2. There is no local theorem supplying this fact. The literature's published status is not a published library supplier. All other classification steps use the completed one-sided local RSK/Knuth/star arguments and elementary consequences.

The smallest missing result is only:

> For all n>=1 and x,y in S_n, x~_{LR}y implies sh(Q(x))=sh(Q(y)).

Neither the full tableau-dominance theorem nor the converse preorder-dominance classification is required. The reverse implication from equal shape is already local: use the unique RSK preimage of (P(x),Q(y)) to join a right cell and a left cell.

The only actual item consumer of the classification theorem is `ex-rsk-left-right-and-two-sided-cells-in-s-three`: F2 in steps 2.1, 2.2 and 3.1 consumes its left/right/two-sided fiber assertions. Its S3/S4 RSK computations are local; the general classification supplier remains held until this exact result is resolved. No outside-active-pair repair is proposed.

## Authoritative full-text reads

The isolated PDF/text cache is the existing `research/frontier-43-complex-representation-15-kl-positivity-source-evidence/`.

- He, Hu, Sun, *Kazhdan–Lusztig left cell preorder and dominance order*, arXiv:2109.13646: fetched full PDF. Read the definitions of partition/tableau dominance, quadratic/bar/KL normalizations and preorder, Theorem 1.3 printed p.2, Theorem 1.7 and its original Geck boundary, and complete §3 including Lemma 3.16, Corollary 3.17, Theorem 1.10 proof and the complete Theorem 1.3 proof printed pp.9–11. The theorem says x<=L y implies Q(y) dominates Q(x), so its k=n specialization gives the needed shape monotonicity. Its proof uses triangular changes between generic Hecke KL/Murphy/seminormal bases, matrix units/Specht module restrictions, and Geck's leading-matrix-coefficient comparison. These suppliers are not proved by the current local KL-1 items. HHS is an original proof of the stronger tableau statement, but is unnecessary depth for this one missing shape implication.
- Geck, *Kazhdan–Lusztig cells and the Murphy basis*, full original arXiv:math/0504217v2, 27 April 2005 (published Proc. London Math. Soc.93 (2006),635–665): fetched full PDF. Read complete §§2.1–2.3 printed pp.3–4; complete Theorem 4.10 proof printed pp.20–22 and Corollary 4.11 comparison; complete Theorem 5.1 proof printed p.25; Corollary 5.6 including its full proof printed p.29. The exact original proved theorem is Corollary 5.6(c): w~LR w' iff their RSK shapes are equal. It supplies the smaller required implication directly.

Geck explicitly says just before Corollary 5.6 that its two-sided assertion is neither proved in the original KL1979 paper nor in Ariki's paper. Thus citing Ariki's one-sided Theorem A alone to close this step would invent its proof boundary. Geck's original proof is available and has been read at the exact passages above. The full leading-matrix-coefficient representation machinery of §§3–4 has not been reproduced locally or independently certified here.

## Exact normalization and source-use boundary

Use u for Geck's parameter. His multiplication is T_s T_w=T_{sw}+(u-u^{-1})T_w on a descent; his original C'_w is bar-fixed and belongs to T_w+sum_{y<w}u^{-1}Z[u^{-1}]T_y. The assignment u->v^{-1}, T_s->H_s gives precisely the current normalized quadratic and braid relations, with inverse assignment v->u^{-1}, H_s->T_s. It identifies standard reduced products and the bar on every generator. Uniqueness of the already locally proved triangular bar-fixed basis therefore identifies Geck's C'_w with our underline H_w.

Geck §2.3 defines the left preorder directly by nonzero coefficients in C'_s C'_y; the right relation is analogous, and LR uses their finite chains. Parameter inversion is an injective coefficient-ring isomorphism, so a coefficient is zero iff its image is zero. Thus the source and local elementary steps, chains and mutual LR comparability agree. Geck also works with a twisted C basis internally, but his §2.3 explicitly gives the C' definition; no new local twist machinery is needed. His RSK uses the same insertion/recording convention, as checked in Corollary 5.6(a),(b): right cells fix insertion, left cells fix recording. Shape is the common RSK shape.

If root authorizes the exact original-source fallback, cite only Corollary 5.6(c)'s forward implication, prove this normalization/support comparison locally, and retain all other classification arguments locally. Record proof_scope honestly: the Murphy/leading-matrix theorem is not proved locally. Do not assert the unused stronger HHS tableau-dominance property as a local fact or retain it as an unproved F5. Replace F5 with the exact authorized shape fact and step1.2 with its forward implication after the local normalization comparison. No Statement weakening or source-count padding is needed.

## Bounded local alternatives and trade-off

Existing published Jucys–Murphy, Young seminormal and center theorems concern the ordinary complex group algebra. They identify its irreducible shapes and central characters, but do not establish which generic KL cell module carries which shape, nor that a KL coefficient ideal is a sum of those particular shape blocks. Specializing at v=1 cannot simply preserve a nonzero Laurent coefficient: a nonzero polynomial may vanish at1. Thus ordinary group-algebra representation theory alone does not prove the requisite generic preorder boundary.

A local algebraic rebuild can prove the shape filtration by Murphy two-sided ideals and identify the KL basis spans, following Geck Theorem4.10. It needs generic Hecke Specht/Murphy/seminormal constructions and their triangular KL comparison with leading matrix coefficients. These are new substantial obligations, and a draft item elsewhere about generic categorification or Young group-algebra seminormal form is not the missing supplier. A geometry route would instead need the Schubert/intersection-cohomology representation machinery. One-sided RSK classification does not by itself prove the two-sided converse: individual left or right coefficient steps can change shape, as the existing unit-product counterexample shows.

Therefore the least-destructive bounded route, under the user's specific last-resort instruction if root authorizes it, is the single exact Geck shape-invariance implication with the local normalization check above. Without that authorization or the substantial supplier rebuild, retain this branch held; do not drop two-sided classification, cite HHS under the positivity waiver, repeat unchanged tests, or stamp item acceptance.
