---
id: lem-finite-and-complete-filtered-isomorphism-lifting
kind: lemma
title: Finite and complete filtered isomorphism lifting
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["lem-spectral-sequence-subquotient-and-local-lifting-calculus", "def-strong-convergence-of-a-spectral-sequence"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

Let $f:A\to B$ preserve increasing filtrations and induce isomorphisms $F_pA/F_{p-1}A\to F_pB/F_{p-1}B$ for every integer $p$. If both filtrations are finite in an abelian category, $f$ is an isomorphism of filtered objects. The same conclusion holds for exhaustive, separated, complete filtrations of modules over a fixed ring. In particular its inverse preserves each filtration piece. Neither conclusion needs AC or a splitting; the complete case needs no finite filtration bound.

## Facts & Assumptions

[F1] [[lem-spectral-sequence-subquotient-and-local-lifting-calculus]] supplies finite quotient comparisons, epic local lifting and descent in an abelian category.

[F2] [[def-strong-convergence-of-a-spectral-sequence]] specifies completeness by the compatible quotient inverse limit, and exhaustiveness and separatedness separately. Here these are hypotheses on the filtered objects, without requiring a spectral sequence.

## Proof

**Given:** $f$ with the stated graded isomorphisms.

1.1 Consider a commutative diagram of short exact sequences $0\to U\to X\to V\to0$ and $0\to U'\to X'\to V'\to0$, whose maps on $U$ and $V$ are isomorphisms. If a morphism into $X$ is killed by the middle map, its image in $V$ is killed by the isomorphism to $V'$, hence zero. It factors through $U$, where the isomorphism to $U'$ and the monic inclusion force it to be zero. Thus the middle map is monic. To lift a morphism into $X'$, first project to $V'$, use the inverse on $V$, and lift into $X$ after epic pullback. Its difference from the prescribed map lies in $U'$, so use the inverse on $U$ to correct the lift. Thus the middle map is epic by epic cancellation. A monic epic in an abelian category is invertible by its coimage-image factorization. The local lifts and their cancellation have precisely the meaning of [F1]; no global representatives are chosen. [F1]

1.2 Under the complete module hypotheses, completeness identifies $F_pA$ with $\varprojlim_{k<p}F_pA/F_kA$. Indeed a compatible tuple in these subquotients is a tuple in $A/F_kA$ for $k<p$. Its component at $p$ and at larger indices is zero, since each tuple entry has a representative in $F_pA$. This extends it uniquely to a compatible tuple in the full quotient system. Completeness supplies a unique $a\in A$ with those residues, and its zero residue at $p$ says $a\in F_pA$. Conversely an element of $F_pA$ gives that tuple, and its uniqueness follows from separatedness (also from the injective completion map). The formulas preserve addition and scalar multiplication. The same argument applies to $B$. [F2]

2.1 For finite filtrations take common integer bounds $a<b$ such that both $F_a$ pieces are zero and both $F_b$ pieces are the whole objects. At $a$ the restriction of $f$ is an isomorphism of zero objects. Apply step 1.1 to the sequences $0\to F_{p-1}\to F_p\to F_p/F_{p-1}\to0$ for $a<p\le b$. Finite induction proves every restriction $F_pA\to F_pB$ invertible, including $f$ at $b$. Below $a$ and above $b$ the restrictions are respectively the zero and whole-object maps. Their inverses are the restrictions of $f^{-1}$ by uniqueness, so the inverse is filtered. Empty graded pieces and repeated filtration terms cause no change to the argument. [F1, step 1.1]

3.1 Now assume the complete module hypotheses. For any fixed $k<p$, filter $F_pA/F_kA$ and $F_pB/F_kB$ by the images of the intermediate $F_j$ for $k\le j\le p$. The successive quotients are the original graded pieces by the nested-quotient comparison. The finite argument therefore gives an isomorphism $f_{p,k}:F_pA/F_kA\to F_pB/F_kB$. For $k'<k$ its quotient-transition squares commute; applying inverses on both sides proves the inverse squares commute as well. [F1, step 2.1]

4.1 The compatible inverse maps in step 3.1 send a compatible tuple on the $B$ side to one on the $A$ side. By step 1.2 they give an inverse to $f:F_pA\to F_pB$ for every $p$. This constructs the inverse without selecting representatives: all residue inverses and their limits are unique. Every $b\in B$ lies in some $F_pB$ by exhaustiveness and therefore has a preimage in $F_pA$. Every kernel element in $A$ lies in some $F_pA$ and is zero by injectivity there. Thus $f$ is bijective and linear, and its inverse sends $F_pB$ into $F_pA$. The zero module and any one-step finite filtration satisfy the same formulas. Infinite index sets enter only through unique compatible tuples, so no AC is used. [F2, step 3.1, step 1.2] ∎
