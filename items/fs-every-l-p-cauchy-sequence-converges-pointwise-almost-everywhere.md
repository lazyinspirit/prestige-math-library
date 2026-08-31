---
id: fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere
kind: false-statement
title: "FALSE: representatives of every $L^p$-Cauchy sequence converge pointwise almost everywhere"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-l-one-convergence-implies-almost-everywhere-convergence]
proof_strategy: "Refute in L^1 by the published A-page typewriter witness: the sequence converges in norm and therefore is Cauchy, but it has no pointwise limit anywhere on [0,1]."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.4, Example (iv)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Example 7"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
---

## Statement

For every Cauchy sequence $(u_n)$ in $L^p(\mu)$ and every choice of measurable
representatives $f_n\in u_n$, the sequence $(f_n)$ converges pointwise almost
everywhere.

## Facts & Assumptions

**Given:** The published typewriter-sequence false statement.

[L1] The published false statement
[[fs-l-one-convergence-implies-almost-everywhere-convergence]]
supplies a sequence converging in $L^1$ but not almost everywhere.

## Refutation

**Proof technique:** Refute in $L^1$ by the published typewriter witness: the
sequence converges in norm and therefore is Cauchy, but it has no pointwise
limit anywhere on $[0,1]$.

1.1 The sequence from [L1] converges in $L^1$, hence is Cauchy in $L^1$. [L1, given]

2.1 The same source records representatives that fail to converge almost [L1, step 1.1]
everywhere. So representatives of a Cauchy sequence in $L^p$ need not converge
pointwise almost everywhere.

3.1 Therefore the universal claim is false. [step 2.1] ∎
