---
id: thm-oddtown
kind: theorem
title: "Oddtown: distinct $A_1,\\dots,A_m\\subseteq[n]$ with every $\\lvert A_i\\rvert$ odd and every $\\lvert A_i\\cap A_j\\rvert$ ($i\\ne j$) even satisfy $m\\le n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size, lem-diagonal-independence-criterion, lem-a-family-with-independent-incidence-vectors-has-at-most-n-members, def-incidence-vector-of-a-subset, def-standard-bilinear-form-on-a-coordinate-space, thm-z-mod-p-is-a-field, def-integers-modulo-n, def-set-family-and-its-incidence-matrix]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §1.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 3"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
    - title: "O. Pikhurko, An Introduction to Combinatorics, §4.1"
      url: "https://people.maths.ox.ac.uk/keevash/eac/notes.pdf"
pipeline_run: null
---

## Statement

Let $A_1,\dots,A_m$ be distinct subsets of $[n]$. If every $\lvert A_i\rvert$ is
odd and every intersection $\lvert A_i\cap A_j\rvert$ with $i\ne j$ is even,
then $m\le n$.

## Facts & Assumptions

**Given:** distinct subsets $A_1,\dots,A_m\subseteq[n]$ with every $\lvert A_i\rvert$ odd and every $\lvert A_i\cap A_j\rvert$ even for $i\ne j$.

[F1] $\mathbb{Z}/2$ is a field ([[thm-z-mod-p-is-a-field]], [[def-integers-modulo-n]]).

[L1] Over $\mathbb{F}_2$, the pairing $\langle v_A,v_B\rangle$ is $1$ exactly when $\lvert A\cap B\rvert$ is odd and $0$ exactly when it is even ([[lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size]]).

[L2] If vectors $v_i,w_i$ in a bilinear space satisfy $\langle v_i,w_i\rangle\ne0$ and $\langle v_i,w_j\rangle=0$ for $i\ne j$, then the vectors $v_i$ are linearly independent ([[lem-diagonal-independence-criterion]]).

[L3] A family with independent incidence vectors has at most $n$ members ([[lem-a-family-with-independent-incidence-vectors-has-at-most-n-members]]).

## Proof

**Proof technique:** direct.

1.1 Work over $\mathbb{F}_2$, which is a field by [F1]. Then [L1] turns the parity hypotheses into $$\langle v_{A_i},v_{A_i}\rangle=1,\qquad \langle v_{A_i},v_{A_j}\rangle=0\ \text{ for }i\ne j.$$ [F1, L1, given]

2.1 This is exactly the diagonal criterion with $w_i=v_{A_i}$, so the vectors $v_{A_1},\dots,v_{A_m}$ are linearly independent over $\mathbb{F}_2$ by [L2]. [L2, step 1.1]

3.1 The master lemma [L3] now gives $m\le n$. [L3, step 2.1] ∎

## Remarks

- The argument uses the standard bilinear form on $\mathbb{F}_2^n$, not an inner product. Bilinearity and the diagonal pattern are enough.
