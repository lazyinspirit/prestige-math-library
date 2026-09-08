---
id: thm-last-lower-central-term-has-exact-weighted-distortion
kind: theorem
title: Both bounds for last-term weighted distortion
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: Proposition 14.20 and Lemma 14.21, printed pp.504–508 (finite last terms handled separately locally)
    - title: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf
      locator: Corollary 12.39, printed pp.322–323
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["lem-weighted-collection-in-lower-central-coordinates", "lem-hall-malcev-powers-in-the-last-central-term-have-short-words", "lem-hall-malcev-integer-abelian-structure-and-rank", "lem-word-length-is-well-defined-and-satisfies-the-length-laws"]
---
## Statement

Let $G$ be finitely generated nilpotent of class $c\ge1$, and $H=\gamma_c(G)$. For fixed finite word metrics on $G$ and $H$, there is $C\ge1$ with $C^{-1}|h|_H^{1/c}-C\le |h|_G\le C|h|_H^{1/c}+C$ for every $h\in H$. If $H$ is infinite, $\Delta(n)=\max\{|h|_H:h\in H,\ |h|_G\le n\}$ lies between positive multiples of $n^c$ for all sufficiently large integers n. If $H$ is finite, $\Delta$ is bounded.

## Facts & Assumptions

**Given:** $H=\gamma_c$ is finitely generated abelian and central. All generating sets are fixed.

[F1] A short word representing an element of the last term has only last-layer coordinates, bounded by a constant times max(1,n)^c ([[lem-weighted-collection-in-lower-central-coordinates]]).

[F2] Powers of each fixed last-term element have ambient length at most a constant times the c-th root of the exponent ([[lem-hall-malcev-powers-in-the-last-central-term-have-short-words]]).

[F3] Write the finitely generated abelian last term as $\mathbb Z^r\oplus F$ with F finite ([[lem-hall-malcev-integer-abelian-structure-and-rank]]).

[F4] Word length is subadditive and invariant under inversion ([[lem-word-length-is-well-defined-and-satisfies-the-length-laws]]).

## Proof

1.1 Choose the decomposition $H=\langle z_1\rangle\oplus\cdots\oplus\langle z_r\rangle\oplus F$ and finite generators for F, using these as the last-layer coordinate system. Every chosen coordinate generator has a fixed finite H-word. For $h\ne1$, collect a shortest G-word of length n: all earlier coordinates vanish, each last free exponent is $O(n^c)$, and the finitely many residue exponents are bounded. Multiplying fixed H-words for these powers gives $|h|_H\le A n^c+B$; the same inequality with max(1,n) handles h=1. Increasing A gives $|h|_H\le A\max(1,|h|_G)^c$. Taking roots gives the required lower ambient bound with an additive constant. [F1, F3, F4]

1.2 For any finite H-generating set V, let L be the maximum absolute free-coordinate entry of a member of $V\cup V^{-1}$, enlarged to at least 1. Projection to each free coordinate is additive, so a shortest H-word gives $|a_j|\le L|h|_H$ for $h=z_1^{a_1}\cdots z_r^{a_r}f$. Let M be the maximum G-length of an element of the finite set F. Power compression and subadditivity now give $|h|_G\le\sum_j C_j|a_j|^{1/c}+M\le (\sum_j C_j)L^{1/c}|h|_H^{1/c}+M$, omitting zero exponents. This proves the other pointwise bound. [F2, F3, F4]

2.1 For each n the defining maximum for $\Delta(n)$ exists: the finite alphabet of G has only finitely many words of length at most n, and the identity belongs to the intersection. Step 1.1 gives $\Delta(n)\le A\max(1,n)^c$. If H is infinite then r>=1. The first coordinate estimate in step 1.2 gives $|z_1^m|_H\ge |m|/L$, while F2 gives $|z_1^m|_G\le K|m|^{1/c}$ with K>=1. For $m=\lfloor(n/K)^c\rfloor$ and sufficiently large n, m is at least $(n/K)^c/2$ and at least 1, so $\Delta(n)\ge n^c/(2LK^c)$. [F2, step 1.1, step 1.2]

3.1 If H is finite, its H-word lengths have a finite maximum, bounding $\Delta$ for all n. Its finite ambient and intrinsic diameters are absorbed by the pointwise additive constants. At n=0 the intersection contains only the identity and $\Delta(0)=0$. For c=1 the exponent is one and the same argument applies to H=G. Choose one C larger than all constants in the two pointwise estimates. [step 1.1, step 1.2, step 2.1] ∎

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Proposition 14.20 and Lemma 14.21, printed pp.504–508 (finite last terms handled separately locally); [Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)](https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf), Corollary 12.39, printed pp.322–323. Revised Proposition 14.20 and draft Corollary 12.39 supply the two routes. The infinite-H hypothesis is necessary for positive-power distortion growth; finite H is handled separately.
