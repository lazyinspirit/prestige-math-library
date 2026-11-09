---
id: thm-author-27d786ff4d27-determinantal-height
kind: theorem
title: External maximal-minor height bound for the component-scope example
status: draft
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Winfried Bruns and Udo Vetter, Determinantal Rings, LNM1327, Springer1988
      url: https://www.home.uni-osnabrueck.de/wbruns/brunsw/detrings.pdf
      locator: Section2.A, Theorem(2.1), printed p10/PDF18, and proof; Lemma(2.3),
        printed p11/PDF19.
      statement: For a Noetherian ring and proper t-minor ideal of an m by n matrix,
        its height is at most(m−t+1)(n−t+1).
      hypotheses: Noetherian ring; the ideal must be proper. Apply with A=k[x,y,z],
        m=2,n=3,t=2.
      reading_limits: Read the actual full theorem and proof and the complete
        supporting Lemma(2.3) proof in the author-hosted PDF. No full-book
        reading or reconstruction of earlier principal-ideal/dimension inputs is
        claimed.
dependency_level: 0
---

## Statement
For a matrix $M$ of size $m\times n$ over a Noetherian ring and proper ideal $I_t(M)$ of its $t$-minors,
$$\operatorname{ht}I_t(M)\leq(m-t+1)(n-t+1).$$
In particular a proper maximal-minor ideal for a $2\times3$ matrix has a prime over it of height at most two. This input is used only to establish the precise disconnected fixed-pair counterexample.

## Source contract
**Given:** The stated Noetherian ring, matrix and proper determinantal ideal.

**Goal:** Import the exact height bound needed for that example.

[F1] Bruns–Vetter, Determinantal Rings, section2.A, Theorem(2.1), with Lemma(2.3) used in its printed proof.

## External input
Import [F1], with its exact source record. No arbitrary prime-avoidance or expected-height assertion is substituted for this bound.
