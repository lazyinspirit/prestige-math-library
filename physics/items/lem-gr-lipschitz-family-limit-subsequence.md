---
id: lem-gr-lipschitz-family-limit-subsequence
kind: lemma
title: "A pointwise convergent subsequence of a uniformly Lipschitz family into a compact metric space converges uniformly on compact subintervals"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: constructive
deps: [thm-metric-compactness-equivalences, lem-metric-cauchy-with-convergent-subsequence, lem-q-and-irrationals-dense-r, thm-rationals-countable, def-metric-space, def-countable-choice]
dependency_roles:
  thm-metric-compactness-equivalences: mathematical-premise
  lem-metric-cauchy-with-convergent-subsequence: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
  thm-rationals-countable: mathematical-premise
  def-metric-space: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems: the diagonal subsequence argument and Arzela-Ascoli type compactness on compact metric targets, Chapter 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I: dense subsets of the line and uniform convergence on compact intervals, Sections 6.3 and 7.4"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $(B,d)$ be a compact metric space
([[def-metric-space]]), let $I\subseteq\mathbb R$ be an interval with
nonempty interior, let $K\ge0$ be real, and let $\sigma_m:I\to B$,
$m\in\mathbb N$, be $K$-Lipschitz maps,
$d(\sigma_m(s),\sigma_m(t))\le K|s-t|$ for all $s,t\in I$. Then there are a
strictly increasing sequence $m_1<m_2<\cdots$ and a $K$-Lipschitz map
$\sigma:I\to B$ such that $\sigma_{m_j}\to\sigma$ uniformly on every compact
subinterval of $I$.

## Facts & Assumptions

**Given:** A compact metric space $(B,d)$, an interval $I$ with nonempty interior, a real $K\ge0$, and $K$-Lipschitz maps $\sigma_m:I\to B$.

[L1] $D:=I\cap\mathbb Q$ is a countable dense subset of $I$: the rationals are countable and dense in $\mathbb R$, so their intersection with an interval is countable and, the interval having nonempty interior, dense in it ([[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]]).

[L2] For the compact metric space $(B,d)$: $B$ is sequentially compact, and consequently complete; moreover a Cauchy sequence with a convergent subsequence converges ([[thm-metric-compactness-equivalences]], [[lem-metric-cauchy-with-convergent-subsequence]]).

[L3] Countable choice selects one element from each of countably many nonempty sets ([[def-countable-choice]]).

## Proof

**Proof technique:** constructive.

1.1 (Diagonal extraction on a countable dense set.) Enumerate $D=\{q_1,q_2,\dots\}$ [L1]. Applying [L2] to the sequence $(\sigma_m(q_1))_m$ in the compact space $B$, extract a subsequence converging at $q_1$; from any sequence extract a further subsequence converging at $q_2$; recursively, for each $i$ extract a subsequence of the previous one converging at $q_i$. The diagonal subsequence $(\sigma_{m_j})_j$, whose $j$-th term is the $j$-th term of the $j$-th extraction, converges at every $q\in D$; the recursion uses countably many choices, which is [L3]. Write $\sigma(q):=\lim_j\sigma_{m_j}(q)$ for $q\in D$. [L1, L2, L3, choose, construct]

2.1 (The limit on the dense set is Lipschitz and extends to $I$.) For $q,q'\in D$, continuity of $d$ and the Lipschitz bound give $d(\sigma(q),\sigma(q'))=\lim_jd(\sigma_{m_j}(q),\sigma_{m_j}(q'))\le K|q-q'|$ [L2]. For $t\in I$ choose a sequence $q_n\in D$ with $q_n\to t$ [L1]; by the previous estimate $(\sigma(q_n))_n$ is Cauchy, hence convergent in the complete space $B$, and the limit does not depend on the chosen sequence (two sequences may be interleaved). Define $\sigma(t)$ as this limit; passing to the limit in the Lipschitz estimate shows $\sigma$ is $K$-Lipschitz on $I$. [step 1.1, L1, L2, construct]

3.1 (Uniform convergence on compact subintervals.) Let $[a,b]\subseteq I$ be a compact subinterval and let $\varepsilon>0$. Choose finitely many points $q_1,\dots,q_N\in D\cap[a,b]$ such that every $t\in[a,b]$ satisfies $|t-q_i|\le\varepsilon/(3K+3)$ for some $i$; this is possible because $D$ is dense and an interval is totally bounded in the sense of admitting such finite nets, the case $K=0$ being immediate from the estimator below with $\varepsilon/(3K+3)$ read as any positive number. Since $\sigma_{m_j}(q_i)\to\sigma(q_i)$ for each $i$, there is $j_0$ such that $d(\sigma_{m_j}(q_i),\sigma(q_i))<\varepsilon/3$ for all $j\ge j_0$ and all $i\le N$. For $t\in[a,b]$ pick $i$ with $|t-q_i|\le\varepsilon/(3K+3)$; then $$d(\sigma_{m_j}(t),\sigma(t))\le d(\sigma_{m_j}(t),\sigma_{m_j}(q_i))+d(\sigma_{m_j}(q_i),\sigma(q_i))+d(\sigma(q_i),\sigma(t))<\frac\varepsilon3+\frac\varepsilon3+\frac\varepsilon3=\varepsilon$$ for $j\ge j_0$, because both $\sigma_{m_j}$ and $\sigma$ are $K$-Lipschitz. Hence $\sigma_{m_j}\to\sigma$ uniformly on $[a,b]$. [step 1.1, step 2.1, L2, given, discharge-construct] ∎

## Remarks

- **What replaces Arzela-Ascoli.** Compactness of the target already gives pointwise relative compactness, so equicontinuity (here the Lipschitz bound) is the only extra input; the proof is the standard diagonal extraction over a countable dense set followed by the Lipschitz estimate.
- **Use.** The lemma supplies the convergent subsequence in the openness proof of [[lem-gr-local-cauchy-neighborhood]], replacing an appeal to a general Arzela-Ascoli theorem whose home page is a prerequisite of no current run batch.
