---
id: lem-finite-lower-central-coordinate-systems-exist
kind: lemma
title: Finite lower-central coordinate systems with torsion accounted for
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: Proposition 14.25, pp.510–511, and Remark 13.83, p.484
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["def-lower-central-generators-and-weighted-coordinate-length", "lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian", "lem-hall-malcev-torsion-is-a-finite-characteristic-subgroup", "lem-hall-malcev-integral-coordinates-from-a-central-cyclic-refinement", "lem-hall-malcev-integer-abelian-structure-and-rank"]
---
## Statement

For every finitely generated nilpotent $G$, $Q=G/T(G)$ has integral coordinates along a central cyclic refinement. Separately, both $Q$ and $G$ have unique mixed lower-central ordered coordinates: each infinite factor uses an integer exponent, and each order-$d$ finite factor uses one residue $0\le a<d$. There are exactly $r_i$ unbounded exponents of weight $i$, where $r_i$ is the free rank of $\gamma_i(G)/\gamma_{i+1}(G)$, equivalently of $\gamma_i(Q)/\gamma_{i+1}(Q)$. All choices needed are finite.

An element belongs to $\gamma_k$ if and only if all coordinates in layers strictly before $k$ vanish.

## Facts & Assumptions

**Given:** Use the fixed order and tuple conventions of the coordinate definition.

[F1] Layer-$i$ coordinates lift cyclic factors of $\gamma_i/\gamma_{i+1}$ ([[def-lower-central-generators-and-weighted-coordinate-length]]).

[F2] $T(G)$ is finite characteristic and $Q=G/T(G)$ is torsion-free nilpotent ([[lem-hall-malcev-torsion-is-a-finite-characteristic-subgroup]]).

[F3] Finitely generated torsion-free nilpotent groups have integral central-refinement coordinates ([[lem-hall-malcev-integral-coordinates-from-a-central-cyclic-refinement]]).

[F4] Finitely generated abelian factors admit finite cyclic decompositions with intrinsic free rank ([[lem-hall-malcev-integer-abelian-structure-and-rank]]).

[F5] Every lower-central factor of a finitely generated nilpotent group is finitely generated abelian ([[lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian]]).

## Proof

1.1 The images of a finite generating set generate $Q$. The torsion theorem makes $Q$ torsion-free nilpotent, so it has the integral central-refinement coordinates of F3. This invocation is made for $Q$, not for a possibly torsion-bearing $G$. [F2, F3]

1.2 For either $E=G$ or $E=Q$, take a cyclic decomposition in each lower-central factor and one lift per generator. There are finitely many layers and finite lists. For $g\in E$, project to $E/\gamma_2(E)$, obtain its unique cyclic-factor tuple, and let $p_1$ be the corresponding ordered lifted product. The remainder $p_1^{-1}g$ lies in $\gamma_2$. Repeat in $\gamma_2/\gamma_3$, obtaining $p_2$; after layer $c$ the remainder is $1$. Thus $g=p_1\cdots p_c$ has the mixed ordered form. [F1, F4, F5]

1.3 Let $q:G\to Q$ be the quotient map. Induction gives $q(\gamma_i(G))=\gamma_i(Q)$: it is clear for $i=1$, and surjectivity sends the generators $[g,x]$ of the next term onto the generators $[q(g),q(x)]$. Hence $q$ induces a surjection
$$\gamma_i(G)/\gamma_{i+1}(G)\longrightarrow\gamma_i(Q)/\gamma_{i+1}(Q).$$
If $x\gamma_{i+1}(G)$ is in its kernel, choose $y\in\gamma_{i+1}(G)$ with $q(x)=q(y)$. Then $t=xy^{-1}$ lies in $T(G)\cap\gamma_i(G)$ and $x\gamma_{i+1}(G)=t\gamma_{i+1}(G)$. Conversely every such $t$ lies in the kernel, so the kernel is the image of the finite set $T(G)\cap\gamma_i(G)$. The finite-kernel rank clause of [F4] therefore gives equal free ranks for the corresponding factors of $G$ and $Q$. Calling this common rank $r_i$, each construction in step 1.2 has exactly $r_i$ unbounded layer-$i$ exponents. [F2, F4, F5, step 1.2, algebra]

2.1 If two normalized products agree, project to $E/\gamma_2$ to equate all first-layer coordinates, including the canonical residues. Their lifted first-layer products are then literally equal and may be cancelled on the left. Repeating in the next factor equates every coordinate. The identity has the all-zero tuple; for $E=1$ this is the empty tuple. Hence the mixed parametrization is bijective, whether or not some factors contain torsion. [F1, step 1.2]

3.1 If one instead lifts an integral coordinate representative $w$ of an element of $Q$ to $G$, the fiber consists exactly of the $|T(G)|$ elements $wt$ with $t\in T(G)$. Thus returning from the integral model retains a finite kernel representative. The mixed construction in steps 1.2–2.1 works directly in $G$ and does not discard these elements or identify the two coordinate systems. [F2, step 1.1, step 2.1] ∎

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Proposition 14.25, pp.510–511, and Remark 13.83, p.484. Revised Proposition 14.25 supports the mixed normal form. The finite-torsion quotient is formed before using integral central-refinement coordinates; torsion in lower-central factors is retained.
