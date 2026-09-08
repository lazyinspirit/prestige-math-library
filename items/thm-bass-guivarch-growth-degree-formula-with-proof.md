---
id: thm-bass-guivarch-growth-degree-formula-with-proof
kind: theorem
title: The Bass–Guivarc’h growth degree formula
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: 'Theorem 14.26, pp.511–512; independent statement check: Löh Theorem 5.3.6, printed p.140'
    - title: "Clara Löh, Geometric Group Theory, SS 2022"
      url: https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf
      locator: "Theorem 5.3.6 and Example 5.3.7, printed p.140; general proof omitted"
status: published
origin: pipeline
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["lem-weighted-coordinate-boxes-give-matching-growth-bounds", "def-bass-guivarch-dimension", "lem-growth-is-unchanged-by-quotienting-a-finite-normal-subgroup", "lem-hall-malcev-finite-normal-quotients-preserve-lower-central-ranks", "thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics", "thm-last-lower-central-term-has-exact-weighted-distortion", "lem-hall-malcev-integer-abelian-structure-and-rank"]
---
## Statement

For every finitely generated nilpotent group G and finite generating set S, there are constants $0<c_S\le C_S$ with $c_S n^{D(G)}\le|B_S(n)|\le C_S n^{D(G)}$ for every integer $n\ge1$. This includes finite groups, for which D=0. The polynomial degree is independent of S; no exact leading coefficient or limit is asserted.

## Facts & Assumptions

**Given:** $D(G)$ is the weighted sum of lower-central free ranks and word balls use S together with its inverses.

[F1] Word balls have upper and lower bounds by positive multiples of n^D for all sufficiently large n ([[lem-weighted-coordinate-boxes-give-matching-growth-bounds]]).

[F2] D is the intrinsic weighted rank sum ([[def-bass-guivarch-dimension]]).

[F3] A finite normal quotient changes ball sizes by factors between 1 and the kernel order ([[lem-growth-is-unchanged-by-quotienting-a-finite-normal-subgroup]]).

[F4] Finite normal quotients preserve D and quotienting the last term subtracts c r_c ([[lem-hall-malcev-finite-normal-quotients-preserve-lower-central-ranks]]).

[F5] Word metrics from two finite generating sets are bilipschitz equivalent ([[thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics]]).

[F6] Last-term intrinsic length is bounded above by O(max(1,ambient length)^c), and ambient length is at most O(intrinsic length^(1/c))+O(1) ([[thm-last-lower-central-term-has-exact-weighted-distortion]]).

[F7] A finitely generated abelian group is a finite sum of free and finite cyclic factors ([[lem-hall-malcev-integer-abelian-structure-and-rank]]).

## Proof

1.1 By F1 there exist positive A,B and an integer $N\ge1$ such that $An^{D(G)}\le |B_S(n)|\le Bn^{D(G)}$ for n>=N. Every smaller ball is finite because there are finitely many S-words of length at most n, and nonempty because it contains 1. The finitely many positive ratios $|B_S(n)|/n^{D(G)}$ for $1\le n<N$ have a positive minimum and finite maximum. Taking c_S to be the minimum of A and these ratios, and C_S the maximum of B and these ratios, proves the estimate at every $n\ge1$; if the range is empty keep A,B. Enlarge C_S if needed so $c_S\le C_S$. [F1, F2]

1.2 The class-induction counting mechanism can also be seen directly. For class one, the cyclic decomposition places an intrinsic ball between cubes with side lengths proportional to n, up to finitely many torsion residues: a word bounds each free exponent linearly, and any tuple with sum of absolute exponents plus the bounded residue cost at most n gives a word. This gives degree r_1, including finite groups with no free coordinates. For class $c\ge2$ let $H=\gamma_c$ and r=r_c. The quotient has dimension $D-cr$ by F4. If H is finite, F3 transfers its inductive quotient bounds immediately to G. [F3, F4, F7]

1.3 For any finite normal F, F3 and F4 show explicitly that passing to G/F changes neither the polynomial exponent nor the stated two-sided type of bound. In particular this applies to the finite torsion subgroup. For finite G all lower factors are finite, so D=0 and $1\le|B_S(n)|\le|G|$; for G=1 both bounds are 1. [F2, F3, F4]

2.1 If H is infinite, its intrinsic balls have size comparable to t^r by the same abelian calculation. F6 implies, for large n, $B_H(\alpha n^c)\subseteq B_G(n)\cap H\subseteq B_H(\beta n^c)$ for some $\alpha,\beta>0$. Lift the elements of $B_{G/H}(n)$ to words $g_j\in B_G(n)$. The sets $g_j(B_G(n)\cap H)$ are disjoint and lie in $B_G(2n)$; their total size is at least a positive multiple of $n^{D-cr}n^{cr}=n^D$. For an upper bound, any $g\in B_G(n)$ in the coset g_jH has $g_j^{-1}g\in H$ of ambient length at most 2n, so that fiber contains at most a constant times $n^{cr}$ elements. There are at most a constant times $n^{D-cr}$ quotient fibers. Multiplication gives the upper n^D bound. Monotonicity extends the lower estimate at even radii to odd radii, and step 1.1 absorbs small radii. [F6, step 1.1, step 1.2]

3.1 For two nonempty finite generating sets, F5 gives a common L>=1 with $B_S(n)\subseteq B_T(\lceil Ln\rceil)$ and the reverse inclusion with S,T exchanged. Rescaling the two polynomial estimates by this fixed L preserves exponent D. Independently, F2 defines D from intrinsic ranks, without S. An empty generating set generates only the trivial group, already treated. Distinct nonnegative polynomial exponents cannot both satisfy positive two-sided bounds, since for d<e the ratio $n^{e-d}$ is unbounded. Thus the degree is unambiguous and independent of generators. [F2, F5, step 1.1, step 1.3] ∎

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Theorem 14.26, pp.511–512; independent statement check: Löh Theorem 5.3.6, printed p.140. Revised Theorem 14.26 is matched by both coordinate-box proof and explicit class-induction fiber counting. Löh Theorem 5.3.6 is independent statement backing only, since its general proof is omitted.

[Clara Löh, Geometric Group Theory, SS 2022](https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf), Theorem 5.3.6 and Example 5.3.7, printed p.140; general proof omitted. This independently supports the statement, not the omitted general proof.
