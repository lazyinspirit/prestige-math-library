---
id: ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise
kind: example
title: "The typewriter sequence converges in measure and in L^1 but nowhere pointwise"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-measure, def-convergence-in-l-one-of-a-measure, def-convergence-almost-everywhere-relative-to-a-measure]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.4, Example (iv)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Example 7"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
---

## Example

On $[0,1]$ with Lebesgue measure, define
$$f_0:=0,\qquad f_{2^k+j}:=\chi_{I_{k,j}} \qquad\text{for } k \ge 0,\ 0 \le j < 2^k,$$
where $I_{k,j}=[j2^{-k},(j+1)2^{-k})$ for $j<2^k-1$ and
$I_{k,2^k-1}=[1-2^{-k},1]$. Then:

1. $f_n \to 0$ in measure.
2. $f_n \to 0$ in $L^1([0,1])$.
3. For every $x \in [0,1]$, the sequence $(f_n(x))$ does not converge.

So the typewriter sequence separates convergence in measure and in $L^1$ from
almost-everywhere convergence.

## Facts & Assumptions

**Given:** Lebesgue measure on $[0,1]$ and the typewriter sequence $(f_n)$ of the Example, including its initial value $f_0=0$.

[L1] Convergence in measure means that for every real $\varepsilon>0$, $\mu(\{|f_n-f|>\varepsilon\}) \to 0$. ([[def-convergence-in-measure]])

[L2] Convergence in $L^1(\mu)$ means $\int |f_n-f|\,d\mu \to 0$. ([[def-convergence-in-l-one-of-a-measure]])

[L3] Almost-everywhere convergence means pointwise convergence off a measurable null set. ([[def-convergence-almost-everywhere-relative-to-a-measure]])

## Verification

**Proof technique:** direct.

1.1 If $2^k \le n < 2^{k+1}$, then $f_n$ is the indicator of a dyadic interval of length $2^{-k}$, so $$\int_0^1 |f_n|\,d\lambda = 2^{-k}.$$ [given, L2, algebra]

1.2 Fix $x \in [0,1]$. In each generation $k \ge 1$ there is exactly one interval $I_{k,j_k}$ containing $x$, so $f_{2^k+j_k}(x)=1$. The same generation also contains intervals missing $x$, hence infinitely many indices $n$ with $f_n(x)=0$. So $(f_n(x))$ takes the values $0$ and $1$ infinitely often and therefore does not converge. [given]

2.1 Since $2^k \le n < 2^{k+1}$ forces $k \to \infty$ as $n \to \infty$, step 1.1 gives $\int_0^1 |f_n|\,d\lambda \to 0$. Therefore $f_n \to 0$ in $L^1([0,1])$ by [L2]. [step 1.1, L2]

2.2 Fix $\varepsilon \in (0,1)$. When $2^k \le n < 2^{k+1}$, the set $\{|f_n-0|>\varepsilon\}$ is exactly the support interval of $f_n$, so it has measure $2^{-k}$. Thus these bad-set measures tend to $0$, and [L1] gives $f_n \to 0$ in measure. [step 1.1, L1]

3.1 Step 2.2 proves convergence in measure, step 2.1 proves convergence in $L^1$, and step 1.2 shows that [L3] fails at every point. [step 1.2, step 2.1, step 2.2, L3] ∎
