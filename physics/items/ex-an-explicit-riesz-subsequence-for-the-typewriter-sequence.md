---
id: ex-an-explicit-riesz-subsequence-for-the-typewriter-sequence
kind: example
title: "The leftmost dyadic intervals give an explicit almost-everywhere Riesz subsequence"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise, thm-riesz-subsequence-theorem-for-convergence-in-measure, cor-riesz-subsequence-can-be-chosen-almost-uniformly-on-a-finite-measure-space]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
---

## Example

For the typewriter sequence of
[[ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise]],
take the subsequence
$$g_0:=f_1=\chi_{[0,1]},\qquad g_k:=f_{2^k}=\chi_{[0,2^{-k})}\qquad(k\ge1).$$

Then $g_k \to 0$ on $(0,1]$, fails only at $0$, and in fact converges almost
uniformly to $0$.

## Facts & Assumptions

**Given:** The typewriter sequence $(f_n)$ and its leftmost-interval subsequence $g_k:=f_{2^k}$.

[L1] The typewriter sequence is the sequence of dyadic interval indicators defined in [[ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise]].

[L2] Convergence in measure has an almost-everywhere convergent subsequence. ([[thm-riesz-subsequence-theorem-for-convergence-in-measure]])

[L3] On a finite measure space, convergence in measure has an almost-uniformly convergent subsequence. ([[cor-riesz-subsequence-can-be-chosen-almost-uniformly-on-a-finite-measure-space]])

## Verification

**Proof technique:** direct.

1.1 By [L1], $g_0=f_1=\chi_{[0,1]}$, and for $k\ge1$ the index $2^k$ picks the first dyadic interval of generation $k$, so $$g_k=\chi_{[0,2^{-k})}.$$ [L1]

2.1 If $x \in (0,1]$, choose $K$ with $2^{-K}<x$. Then for every $k \ge K$ one has $x \notin [0,2^{-k})$, so $g_k(x)=0$. Thus $g_k(x)\to0$ for every $x \in (0,1]$, while $g_k(0)=1$ for all $k$. [step 1.1, choose, algebra]

2.2 Let $\varepsilon>0$, put $\delta:=\min\{\varepsilon/2,1/2\}$, and take $E:=[0,\delta)$. Then $\lambda(E)=\delta<\varepsilon$, and if $x \in [\delta,1]$ and $2^{-k}<\delta$ then $g_k(x)=0$. So $g_k \to 0$ uniformly on $[\delta,1]$, which is almost-uniform convergence. [step 1.1, choose, algebra]

3.1 Step 2.1 exhibits an explicit almost-everywhere convergent subsequence of the typewriter family, matching the general existence promised by [L2], and step 2.2 strengthens it to almost-uniform convergence, matching [L3]. [step 2.1, step 2.2, L2, L3] ∎
