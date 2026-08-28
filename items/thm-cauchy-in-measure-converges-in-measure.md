---
id: thm-cauchy-in-measure-converges-in-measure
kind: theorem
title: "Cauchy sequences in measure converge in measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cauchy-in-measure, def-convergence-in-measure, thm-finite-and-countable-subadditivity-of-measures, thm-continuity-from-above-for-measures, thm-uniform-cauchy-criterion-real-functions, prop-indicator-function-is-measurable-iff-its-set-is-measurable, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.30"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---
## Statement
Let $(X,\mathcal A,\mu)$ be a measure space and let
$f_n : X \to \mathbb R$ be measurable. If $(f_n)$ is Cauchy in measure, then
there is a measurable $f : X \to \mathbb R$ such that $f_n \to f$ in measure.

## Facts & Assumptions
**Given:** A measure space $(X,\mathcal A,\mu)$ and a measurable sequence $f_n : X \to \mathbb R$ that is Cauchy in measure.

[L1] Cauchy in measure means that for every real $\varepsilon>0$ and every $\eta>0$ there is $N$ such that $m,n \ge N \Rightarrow \mu(\{|f_n-f_m|>\varepsilon\})<\eta$. ([[def-cauchy-in-measure]])

[L2] For measurable $(E_k)$ one has $\mu(\bigcup_k E_k)\le\sum_{k=0}^\infty\mu(E_k)$. ([[thm-finite-and-countable-subadditivity-of-measures]])

[L3] If $(E_r)$ is a decreasing sequence of measurable sets and one $E_{r_0}$ has finite measure, then $\mu(\bigcap_r E_r)=\inf_r\mu(E_r)$. ([[thm-continuity-from-above-for-measures]])

[L4] A uniformly Cauchy sequence of real-valued functions on a set converges uniformly to some real-valued function on that set. ([[thm-uniform-cauchy-criterion-real-functions]])

[L5] For a measurable set $E$, the indicator $\mathbf 1_E$ is measurable. ([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]])

[L6] Products of measurable real-valued functions are measurable. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[L7] Pointwise limits of measurable functions are measurable. ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]])

[L8] Convergence in measure means that for every real $\varepsilon>0$, $\mu(\{|f_n-f|>\varepsilon\}) \to 0$. ([[def-convergence-in-measure]])

## Proof

**Proof technique:** direct.

1.1 For each $k \ge 0$, [L1] with $\varepsilon=\eta=2^{-(k+1)}$ gives an index $N_k$ such that $$m,n \ge N_k \qquad\Longrightarrow\qquad \mu(\{|f_n-f_m|>2^{-(k+1)}\})<2^{-(k+1)}.$$ Choose a strictly increasing sequence $(n_k)_{k\ge0}$ with $n_k \ge N_k$ for every $k$. Then $$n \ge n_k \qquad\Longrightarrow\qquad \mu(\{|f_n-f_{n_k}|>2^{-(k+1)}\})<2^{-(k+1)}.$$ [L1, choose]

2.1 For $k \ge 0$ put $A_k:=\{|f_{n_{k+1}}-f_{n_k}|>2^{-(k+1)}\}$, $E_r:=\bigcup_{k \ge r}A_k$, and $G_r:=X\setminus E_r$. Step 1.1 gives $\mu(A_k)<2^{-(k+1)}$, so $$\mu(E_r)\le\sum_{k=r}^\infty 2^{-(k+1)}=2^{-r}.$$ Thus $\mu(E_0)\le1<+\infty$, the sets $E_r$ decrease with $r$, and [L3] gives $$\mu\!\left(\bigcap_{r=0}^\infty E_r\right)=0.$$ Call this null set $N$. [step 1.1, L2, L3, algebra]

3.1 Fix $r \ge 0$. If $x \in G_r$ and $m>\ell \ge r$, then $x \notin A_j$ for every $j \ge r$, so $|f_{n_{j+1}}(x)-f_{n_j}(x)|\le 2^{-(j+1)}$ for $j=\ell,\dots,m-1$. Therefore $$|f_{n_m}(x)-f_{n_\ell}(x)|\le\sum_{j=\ell}^{m-1}2^{-(j+1)}\le 2^{-\ell}.$$ Hence the tail $(f_{n_k}|_{G_r})_{k \ge r}$ is uniformly Cauchy on $G_r$, so [L4] gives a function $g_r : G_r \to \mathbb R$ with $f_{n_k}|_{G_r}\to g_r$ uniformly on $G_r$. [step 2.1, L4, algebra]

4.1 By [L5], $\mathbf 1_{G_r}$ is measurable. Since each $f_{n_k}$ is measurable, [L6] makes $u_{k,r}:=f_{n_k}\mathbf 1_{G_r}$ measurable on $X$. For $x \in G_r$ one has $u_{k,r}(x)=f_{n_k}(x)\to g_r(x)$, while for $x \notin G_r$ all $u_{k,r}(x)=0$. So [L7] gives a measurable function $h_r : X \to \mathbb R$ such that $h_r=g_r$ on $G_r$ and $h_r=0$ on $E_r$. The sets $G_r$ increase and cover $X\setminus N$, and on overlaps the limits agree, so $(h_r(x))_{r \ge 0}$ stabilizes for every $x$. Define $$f(x):=\lim_{r\to\infty} h_r(x).$$ By [L7] again, $f$ is measurable. [step 3.1, L5, L6, L7, construct]

5.1 Fix $k \ge 0$ and $n \ge n_k$. If $x \in G_k$, then step 4.1 makes $f(x)=g_k(x)$, so letting $m \to \infty$ in step 3.1 with $\ell=k$ gives $|f_{n_k}(x)-f(x)|\le 2^{-k}$. Hence on $G_k$, $$|f_n(x)-f(x)|\le |f_n(x)-f_{n_k}(x)|+2^{-k}.$$ Therefore $$\{|f_n-f|>3\cdot 2^{-(k+1)}\}\subseteq \{|f_n-f_{n_k}|>2^{-(k+1)}\}\cup E_k.$$ Step 1.1 makes the first set have measure below $2^{-(k+1)}$, and step 2.1 gives $\mu(E_k)\le2^{-k}$. So $$\mu(\{|f_n-f|>3\cdot 2^{-(k+1)}\})<3\cdot 2^{-(k+1)}\qquad(n\ge n_k).$$ [step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 Given $\varepsilon,\eta>0$, choose $k$ with $3\cdot2^{-(k+1)}<\min\{\varepsilon,\eta\}$. Then for $n \ge n_k$, $$\mu(\{|f_n-f|>\varepsilon\})\le\mu(\{|f_n-f|>3\cdot2^{-(k+1)}\})<\eta.$$ This is exactly [L8]. [step 5.1, L8, choose]

7.1 The measurable function $f$ from step 4.1 is the limit of $(f_n)$ in measure. [step 4.1, step 6.1, L8] ∎
