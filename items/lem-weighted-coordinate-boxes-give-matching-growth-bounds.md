---
id: lem-weighted-coordinate-boxes-give-matching-growth-bounds
kind: lemma
title: Coordinate boxes and word balls have matching size
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: Proposition 14.25 and Theorem 14.26, pp.510–512; two-sided box inclusion proved by the stated local induction
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
deps: ["lem-finite-lower-central-coordinate-systems-exist", "lem-weighted-collection-in-lower-central-coordinates", "thm-last-lower-central-term-has-exact-weighted-distortion", "def-bass-guivarch-dimension", "lem-growth-is-unchanged-by-quotienting-a-finite-normal-subgroup", "lem-hall-malcev-finite-normal-quotients-preserve-lower-central-ranks"]
---
## Statement

For a fixed mixed lower-central coordinate system of a finitely generated nilpotent group G and fixed finite generating set S, there exist a,b>0 such that $Q(an)\subseteq B_S(n)\subseteq Q(bn)$ for all sufficiently large integers n. For real $R\ge1$, $|Q(R)|=\prod_{i=1}^c(2\lfloor R^i\rfloor+1)^{r_i}\prod_{i,j:\ d_{ij}<\infty}d_{ij}$. Consequently $|B_S(n)|$ is between positive multiples of $n^{D(G)}$.

## Facts & Assumptions

**Given:** $Q(R)$ uses all canonical finite residues and the chosen free coordinate bounds; G and S are fixed.

[F1] Mixed lower-central coordinates are unique ([[lem-finite-lower-central-coordinate-systems-exist]]).

[F2] Weighted words collect with coordinate bounds O(R^i), with all earlier coordinates zero in the last term ([[lem-weighted-collection-in-lower-central-coordinates]]).

[F3] Last-term elements of intrinsic length O(R^c) have ambient length O(R) ([[thm-last-lower-central-term-has-exact-weighted-distortion]]).

[F4] $D(G)=\sum_i i r_i$ ([[def-bass-guivarch-dimension]]).

## Proof

1.1 A word of length at most n has layer-i free exponents at most $C\max(1,n)^i$ by F2. Choose b>=1 such that $b^i\ge C$ for all finitely many i. Then for $n\ge1$ every such integer exponent is at most $\lfloor(bn)^i\rfloor$ in absolute value; its residues are allowed in Q. Thus $B_S(n)\subseteq Q(bn)$. [F2, given]

1.2 We prove $Q(R)\subseteq B_S(KR)$ for $R\ge1$ by induction on class. For G=1 the empty tuple represents only 1. For class one, if $g=\prod u_j^{a_j}\prod v_j^{b_j}$ is in Q(R), repeating fixed S-words for the u_j costs at most $R\sum |u_j|_S$, and the finite residues cost at most $\sum(d_j-1)|v_j|_S$. Since $R\ge1$ this is at most KR. [F1, given]

2.1 For class $c\ge2$ put $H=\gamma_c(G)$. The coordinate system truncated before layer c is a mixed coordinate system of G/H: for i<c the subgroup H lies in $\gamma_{i+1}$, so those quotient factors are unchanged. For g in Q(R), its image lies in the quotient box. By induction it has a word of length at most K_0 R in the quotient generators; lift its letters to an S-word w with the same length. The element $h=w^{-1}g$ lies in H. An explicit weighted word for it is the reversed inverse S-word for w followed by the ordered coordinate word for g. In weight i this has at most $\lambda R^i$ letters for a fixed lambda: w contributes only O(R) weight-one letters, the free powers contribute O(R^i), and finite residues contribute fixed bounded counts. [step 1.2, algebra]

3.1 Apply F2 to that weighted word. Since h is in H, only last-layer coordinates remain; their free exponents are O(R^c), with bounded residues. The corresponding coordinate generators are a finite generating set of the abelian H, so $|h|_H\le K_1R^c$ after increasing K_1. F3 gives $|h|_S\le K_2R+K_2\le2K_2R$. If H is finite its fixed ambient diameter gives the same conclusion. Hence $|g|_S=|wh|_S\le(K_0+2K_2)R$, completing the induction. Taking K>=1 and a=1/K gives $Q(an)\subseteq B_S(n)$ whenever a$n\ge1$. [F2, F3, step 2.1]

4.1 By uniqueness, every permitted tuple represents a different element. A free weight-i coordinate has exactly $2\lfloor R^i\rfloor+1$ possible values, and a residue coordinate has d possible values, independently. This proves the product formula, including the empty product 1. For $R\ge1$, $R^i\le2\lfloor R^i\rfloor+1\le3R^i$. Thus with $T=\prod d_{ij}$ and $h=\sum r_i$, $TR^{D(G)}\le|Q(R)|\le T3^hR^{D(G)}$. Combining the two box inclusions gives positive upper and lower multiples of $n^{D(G)}$ for all sufficiently large n. If all ranks vanish, Q(R) has the constant size T and the same argument gives degree zero. [F1, F4, step 1.1, step 3.1] ∎

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Proposition 14.25 and Theorem 14.26, pp.510–512; two-sided box inclusion proved by the stated local induction. Revised Proposition 14.25 provides controlled normal forms. The converse inclusion is proved locally by quotient lifting and a compressed central correction; uniqueness, not redundant alphabets, justifies counting.
