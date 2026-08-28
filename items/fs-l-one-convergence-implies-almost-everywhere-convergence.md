---
id: fs-l-one-convergence-implies-almost-everywhere-convergence
kind: false-statement
title: "FALSE: convergence in L^1(mu) forces almost-everywhere convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-convergence-in-l-one-of-a-measure, def-convergence-almost-everywhere-relative-to-a-measure]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.4, Example (iv)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Example 7"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
---
## Statement refuted
convergence in $L^1(\mu)$ forces almost-everywhere convergence.

## Facts & Assumptions
**Given:** Lebesgue measure on $[0,1]$ and the dyadic typewriter sequence $f_n$ defined by $f_0:=0$ and $$f_{2^k+j}:=\chi_{I_{k,j}} \qquad\text{for } k \ge 0,\ 0 \le j < 2^k,$$ where $I_{k,j}=[j2^{-k},(j+1)2^{-k})$ for $j<2^k-1$ and $I_{k,2^k-1}=[1-2^{-k},1]$.

[L1] Convergence in $L^1(\mu)$ means $\int |f_n-f|\,d\mu \to 0$. ([[def-convergence-in-l-one-of-a-measure]])

[L2] Almost-everywhere convergence means pointwise convergence off a measurable null set. ([[def-convergence-almost-everywhere-relative-to-a-measure]])

## Refutation

**Proof technique:** direct.

1.1 If $2^k \le n < 2^{k+1}$, then $f_n$ is the indicator of an interval of length $2^{-k}$, so $$\int_0^1 |f_n|\,d\lambda = 2^{-k} \to 0.$$ Thus $f_n \to 0$ in $L^1([0,1])$ by [L1]. [given, L1, algebra]

1.2 Fix $x \in [0,1]$. For each $k \ge 1$ there is exactly one $j_k \in \{0,\dots,2^k-1\}$ with $x \in I_{k,j_k}$, so $f_{2^k+j_k}(x)=1$. Because the same generation contains other dyadic intervals as well, there are also infinitely many indices $n$ with $f_n(x)=0$. So $(f_n(x))$ does not converge for any $x \in [0,1]$. [given]

2.1 Step 1.1 gives convergence in $L^1$, while step 1.2 shows failure of pointwise convergence at every point and hence failure of [L2]. This refutes the claim. [step 1.1, step 1.2, L2] ∎
