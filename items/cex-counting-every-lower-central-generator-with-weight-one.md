---
id: cex-counting-every-lower-central-generator-with-weight-one
kind: counterexample
title: Weight-one counting misses Heisenberg growth
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf
      locator: Corollary 12.39 and Theorem 12.48, pp.322–323,328–329
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["ex-bass-dimension-of-the-discrete-heisenberg-group", "ex-central-distortion-in-the-discrete-heisenberg-group"]
---
## Statement refuted

The claim that every independent lower-central coordinate in every word ball of a finitely generated nilpotent group has range bounded linearly in the radius is false. Counting all such coordinates with weight one can therefore give the wrong polynomial degree.

## Facts & Assumptions

**Given:** Use H with horizontal generators x,y, central z=[x,y], and unique normal form x^a y^b z^k.

[F1] H has three independent normal coordinates and growth degree four ([[ex-bass-dimension-of-the-discrete-heisenberg-group]]).

[F2] $[x^a,y^b]=z^{ab}$, with central exponent attainable at length O(sqrt of its absolute value) ([[ex-central-distortion-in-the-discrete-heisenberg-group]]).

## Counterexample

1.1 For every integer $N\ge1$ the explicit word $[x^N,y^N]=x^Ny^Nx^{-N}y^{-N}=z^{N^2}$ has length at most 4N. Its normal coordinate tuple is (0,0,N^2), since the ordered form is unique. Hence the central coordinate in B(4N) can equal N^2. [F1, F2]

2.1 If a fixed linear bound $|k|\le Cn$ held in every ball B(n), step 1.1 would imply $N^2\le4CN$ for every positive integer N. Taking any integer N>4C contradicts this. Thus the claimed uniform linear bound fails. Moreover H has three independent coordinates but ball growth degree four by F1, so the predicted degree three from weight-one counting is false; positive multiples of n^4 cannot be bounded above by a fixed multiple of n^3 as n grows. [F1, step 1.1] ∎

## Source notes

[Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)](https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf), Corollary 12.39 and Theorem 12.48, pp.322–323,328–329. Draft Corollary 12.39 supplies the central compression phenomenon. The actual refutation uses a concrete commutator word and quantifies against every possible linear constant.
