---
id: thm-riesz-subsequence-theorem-for-convergence-in-measure
kind: theorem
title: "Riesz's subsequence theorem for convergence in measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-measure, def-convergence-almost-everywhere-relative-to-a-measure, thm-finite-and-countable-subadditivity-of-measures, thm-continuity-from-above-for-measures]
landmark: true
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
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.30"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "H. L. Royden and P. M. Fitzpatrick, Real Analysis, 4th ed., Theorem 4"
      url: "https://fliphtml5.com/avac/zfwm/Measure_Theory_Royden/"
---
## Statement
Let $(X,\mathcal A,\mu)$ be a measure space and let
$f_n,f : X \to \mathbb R$ be measurable. If $f_n \to f$ in measure, then there
is a strictly increasing sequence $(n_k)_{k \ge 0}$ of natural numbers such
that $f_{n_k} \to f$ $\mu$-almost everywhere.

The construction below uses the **least** admissible index at each stage, so no
choice principle is spent.

## Facts & Assumptions
**Given:** A measure space $(X,\mathcal A,\mu)$, measurable functions $f_n,f : X \to \mathbb R$, and convergence in measure of $(f_n)$ to $f$.

[L1] Convergence in measure means that for every real $\varepsilon>0$, $\mu(\{|f_n-f|>\varepsilon\}) \to 0$. ([[def-convergence-in-measure]])

[L2] Almost-everywhere convergence means pointwise convergence off a measurable null set. ([[def-convergence-almost-everywhere-relative-to-a-measure]])

[L3] For measurable $(E_k)$ one has $\mu(\bigcup_k E_k)\le\sum_{k=0}^\infty\mu(E_k)$. ([[thm-finite-and-countable-subadditivity-of-measures]])

[L4] If $(E_r)$ is a decreasing sequence of measurable sets and one $E_{r_0}$ has finite measure, then $\mu(\bigcap_r E_r)=\inf_r\mu(E_r)$. ([[thm-continuity-from-above-for-measures]])

## Proof

**Proof technique:** direct.

1.1 For each $k \ge 0$, [L1] applied with $\varepsilon:=2^{-(k+1)}$ yields an index after which $\mu(\{|f_n-f|>2^{-(k+1)}\})<2^{-(k+1)}$. Define $n_0$ to be the least admissible index for $k=0$, and recursively define $n_{k+1}$ to be the least admissible index larger than $n_k$. Then $(n_k)_{k\ge0}$ is strictly increasing and $$\mu(\{|f_{n_k}-f|>2^{-(k+1)}\})<2^{-(k+1)}\qquad(k\ge0).$$ [L1, choose]

2.1 Put $A_k:=\{|f_{n_k}-f|>2^{-(k+1)}\}$ and $E_r:=\bigcup_{k \ge r} A_k$. Then $(E_r)$ is a decreasing sequence of measurable sets, and step 1.1 together with [L3] gives $$\mu(E_r)\le\sum_{k=r}^\infty \mu(A_k)\le\sum_{k=r}^\infty 2^{-(k+1)}=2^{-r}.$$ In particular $\mu(E_0)\le1<+\infty$. [step 1.1, L3, algebra]

3.1 Let $N:=\bigcap_{r=0}^\infty E_r$. By [L4] and step 2.1, $$\mu(N)=\lim_{r\to\infty}\mu(E_r)=0.$$ If $x \in X \setminus N$, then $x \notin E_r$ for some $r$, hence $x \notin A_k$ for every $k \ge r$. Therefore $|f_{n_k}(x)-f(x)|\le 2^{-(k+1)}$ for all $k \ge r$, so $f_{n_k}(x)\to f(x)$. By [L2], $f_{n_k}\to f$ almost everywhere. [step 2.1, L2, L4]

4.1 The subsequence constructed in step 1.1 has the required almost-everywhere limit. [step 3.1] ∎
