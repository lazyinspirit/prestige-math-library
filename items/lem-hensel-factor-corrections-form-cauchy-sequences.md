---
id: lem-hensel-factor-corrections-form-cauchy-sequences
kind: lemma
title: "Successive Hensel corrections are Cauchy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-hensel-factor-correction-one-stage]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Chapter 22"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $(g_r,h_r)_{r \ge 1}$ be a sequence of Hensel corrections such that
$g_{r+1}-g_r \in I^r[T]$ and $h_{r+1}-h_r \in I^r[T]$ for every $r \ge 1$.
Then each coefficient sequence of $(g_r)$ and of $(h_r)$ is Cauchy for the
$I$-adic topology on $A$.

## Facts & Assumptions

**Given:** Successive lifts $(g_r,h_r)$ with differences in $I^r[T]$ at stage
$r$.

[L1] One Hensel correction step changes each factor by a polynomial whose
coefficients lie in the current ideal power ([[lem-hensel-factor-correction-one-stage]]).

## Proof

**Proof technique:** telescope the stagewise corrections.

1.1 Fix a coefficient index $j$. If $s>r$, then the coefficient of $T^j$ in $g_s-g_r$ is a sum of coefficients from the increments $g_{k+1}-g_k$ for $k=r,\ldots,s-1$. By [L1], each summand lies in $I^k \subseteq I^r$, so the whole difference lies in $I^r$. Thus the $j$th coefficients of the $g_r$ form an $I$-adic Cauchy sequence. [L1, given, algebra]

1.2 The same argument applied to the increments $h_{k+1}-h_k \in I^k[T]$ shows that each coefficient sequence of the $h_r$ is also $I$-adically Cauchy. [L1, given, algebra]

2.1 Hence the iterative Hensel corrections are coefficientwise Cauchy. [step 1.1, step 1.2] ∎
