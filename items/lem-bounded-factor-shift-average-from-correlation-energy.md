---
id: lem-bounded-factor-shift-average-from-correlation-energy
kind: lemma
title: "Bounded-factor shift averages from correlation energy"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cauchy-schwarz-finite]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite sums, finite selection and explicit real-variable estimates occur.
sources:
  references:
    - title: "Local adapted proof from Matom\u00e4ki\u2013Radziwi\u0142\u0142\u2013Tao"
      url: https://arxiv.org/pdf/1503.05121v3
      locator: "Proof of Proposition 5.1, PDF pp. 19\u201320; finite form"
---

## Statement

Let $H,X,N\ge1$ be integers, $f:\mathbb Z\to\mathbb C$ have finite support and $|f|\le1$, and $|G(n)|\le1$. Put $Q=\sum_{|r|<H}|C_f(r)|^2$. Then
$$\sum_{h=1}^H\left|\sum_{n=1}^Xf(n+h)G(n)\right|\le2^{1/4}X^{1/2}H^{3/4}Q^{1/4}.$$
In particular, $Q\le\eta HN^2$ gives the bound $2^{1/4}\eta^{1/4}H\sqrt{XN}$. The function $G$ need not be multiplicative.

## Facts & Assumptions

**Given:** All hypotheses and conventions in the Statement.

[F1] [[thm-cauchy-schwarz-finite]] gives Cauchy–Schwarz for finite lists of real numbers, including the nonnegative absolute-value lists used below.

## Proof

1.1 For each of the finitely many inner sums choose a scalar $c_h$ of modulus one making its product with that sum nonnegative real; choose $c_h=1$ if it vanishes. After the triangle inequality, apply [F1] in $n$ to the real lists $|G(n)|$ and $|\sum_{h=1}^Hc_hf(n+h)|$. Since $|G|\le1$, this bounds the square of the left side by $X\sum_{n\in\mathbb Z}|\sum_{h=1}^Hc_hf(n+h)|^2$. Extending the nonnegative sum to all integers is valid. [F1, given, algebra]

2.1 Expand this square. For each difference $r=h'-h$ there are $H-|r|$ pairs. Taking absolute values after the $n$ sum gives at most $XH\sum_{|r|<H}|C_f(r)|$. Apply [F1] again to the real lists $1$ and $|C_f(r)|$, with fewer than $2H$ entries, to bound this by $XH\sqrt{2H}\sqrt Q$. Taking square roots proves the assertion and substitution proves the stated consequence. [F1, step 1.1, algebra] ∎
