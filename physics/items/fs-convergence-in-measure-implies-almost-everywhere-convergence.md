---
id: fs-convergence-in-measure-implies-almost-everywhere-convergence
kind: false-statement
title: "FALSE: convergence in measure implies almost-everywhere convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-convergence-in-measure, def-convergence-almost-everywhere-relative-to-a-measure]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.4, Example (iv)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Example 7"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
---

## Statement refuted

convergence in measure implies almost-everywhere convergence.
## Facts & Assumptions

**Given:** Lebesgue measure on $[0,1]$ and the dyadic typewriter sequence $f_n$ defined by $f_0:=0$ and $$f_{2^k+j}:=\chi_{I_{k,j}} \qquad\text{for } k \ge 0,\ 0 \le j < 2^k,$$ where $I_{k,j}=[j2^{-k},(j+1)2^{-k})$ for $j<2^k-1$ and $I_{k,2^k-1}=[1-2^{-k},1]$.

[L1] Convergence in measure means that for every real $\varepsilon>0$, $\mu(\{|f_n-f|>\varepsilon\}) \to 0$. ([[def-convergence-in-measure]])

[L2] Almost-everywhere convergence means pointwise convergence off a measurable null set. ([[def-convergence-almost-everywhere-relative-to-a-measure]])

## Refutation

**Proof technique:** direct.

1.1 If $2^k \le n < 2^{k+1}$, then $f_n$ is the indicator of an interval of length $2^{-k}$. Hence for every $\varepsilon \in (0,1)$, $$\lambda(\{|f_n-0|>\varepsilon\})=2^{-k}\to0,$$ so $f_n \to 0$ in measure by [L1]. [given, L1, algebra]

2.1 Fix $x \in [0,1]$. In each dyadic generation there is exactly one interval containing $x$, so $f_n(x)=1$ infinitely often; the same generation also contains intervals missing $x$, so $f_n(x)=0$ infinitely often. Therefore $(f_n(x))$ has no limit for any $x \in [0,1]$, and [L2] fails. [step 1.1, L2]

3.1 This refutes the claim. [step 1.1, step 2.1] ∎
