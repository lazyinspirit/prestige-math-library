---
id: lem-hadamard-gaps-bound-additive-representations
kind: lemma
title: "Hadamard gaps bound the additive representations used in even moments"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed., proof of Theorem 3.6.4"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

Let $(\lambda_j)$ be Hadamard-lacunary with ratio $q>1$, as in
[[def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series]]. For each
integer $m\ge1$, choose $r\ge1$ with $q^r>m$. In every residue class modulo
$r$, an equality

$$\lambda_{i_1}+\cdots+\lambda_{i_m}=\lambda_{j_1}+\cdots+\lambda_{j_m}$$

forces the two index multisets to be equal.

## Facts & Assumptions

**Given:** $m,q,r$ and two $m$-term sums as in the Statement.

## Proof

**Proof technique:** compare the largest unmatched frequency.

1.1 Suppose the multisets differ, cancel their common entries, and let [given, algebra]
$\lambda_s$ be the largest remaining frequency. It occurs on only one side.
If the other side has a remaining term, its index is at most $s-r$ because
all indices lie in one residue class; in particular $s-r\ge1$, and every
such frequency is at most
$\lambda_{s-r}<\lambda_s/m$. If the other side has no remaining term, the
two sums are already unequal. [given, algebra]

2.1 That other side has at most $m$ remaining terms, so its sum is strictly [step 1.1, algebra]
less than $m\lambda_s/m=\lambda_s$, whereas its opposing side is at least
$\lambda_s$. This contradicts the equality. Hence nothing remains after
cancellation, which is exactly equality of multisets. [step 1.1, algebra] ∎
