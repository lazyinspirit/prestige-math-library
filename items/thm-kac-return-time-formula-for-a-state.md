---
id: thm-kac-return-time-formula-for-a-state
kind: theorem
title: "Kac return-time formula for a state"
status: published
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains
  - lem-return-cycle-occupation-measure-and-minimality
  - def-accessibility-communication-and-irreducibility
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - lem-matrix-chapman-kolmogorov-equations
  - thm-tonelli-for-nonnegative-double-series
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.5–5.6, Kac's formula"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, §21.3 and Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
    - title: "Aldous–Chewi, Probability Theory, Lectures 13–15"
      url: https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $p$ be an irreducible transition matrix
on a countable state space $E$ with invariant probability $\pi$
([[def-invariant-and-stationary-distribution-for-a-markov-kernel]]), and for
$b\in E$ let $\mu_b(y)=\mathbb E_b\sum_{0\le n<T_b^+}\mathbf 1_{\{X_n=y\}}$ be
the return-cycle occupation measure
([[lem-return-cycle-occupation-measure-and-minimality]]). Then for every
$b\in E$:

1. $\pi(b)>0$;
2. $\mathbb E_bT_b^+=1/\pi(b)$, finite; and
3. $\mu_b(y)=\pi(y)/\pi(b)$ for every $y\in E$.

## Facts & Assumptions

**Given:** AC, an irreducible countable transition matrix $p$, an invariant probability $\pi$, and a state $b\in E$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the chain-law and occupation-measure supplier [F2]. ([[def-axiom-of-choice]])

[F1] Assume AC. For an irreducible countable chain, existence of an invariant probability makes every state positive recurrent; an invariant probability $\rho$ satisfies $\rho(b)>0$ and $\mathbb E_bT_b^+\le1/\rho(b)$ for every $b$; and $\pi_*:=\mu_b/\mathbb E_bT_b^+$ is an invariant probability when $b$ is positive recurrent. ([[thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains]])

[F2] Assume AC. For a countable $p$-chain started at $b$: $\mu_b(b)=1$, $\sum_{y\in E}\mu_b(y)=\mathbb E_bT_b^+$, $\mu_b(y)=\sum_x\mu_b(x)p(x,y)$ for $y\ne b$, $\mu_b$ is pointwise minimal among nonnegative solutions of $\nu(b)=1$, $\nu(y)=\sum_x\nu(x)p(x,y)$ $(y\ne b)$, and $\mu_bp=\mu_b$ when $b$ is recurrent. ([[lem-return-cycle-occupation-measure-and-minimality]])

[F3] Irreducibility means that for all $x,y\in E$ there is $n\ge0$ with $p^{(n)}(x,y)>0$. ([[def-accessibility-communication-and-irreducibility]])

[F4] On a countable state space a probability measure $\pi$ is invariant exactly when $\pi(y)=\sum_{x\in E}\pi(x)p(x,y)$ for every $y\in E$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F5] $p^{(m+n)}(x,y)=\sum_{z\in E}p^{(m)}(x,z)p^{(n)}(z,y)$ for all $m,n\ge0$. ([[lem-matrix-chapman-kolmogorov-equations]])

[F6] For every double sequence $(a_{ij})$ in $[0,+\infty]$ the order of summation may be interchanged, the two iterated sums being equal even when the common value is $+\infty$. ([[thm-tonelli-for-nonnegative-double-series]])

## Proof

**Given:** AC, an irreducible countable transition matrix $p$, an invariant probability $\pi$, a state $b$, and the return-cycle occupation measure $\mu_b$ of [F2].

**Proof technique:** form the nonnegative defect of $\mu_b$ against the normalized stationary measure, observe that it is invariant, and evaluate the resulting conservation identity at $b$, where irreducibility forces every defect value to vanish.

1.1 By [F1] the invariant probability satisfies $\pi(b)>0$ and the chain is positive recurrent with $\mathbb E_bT_b^+\le1/\pi(b)<+\infty$; hence $\mu_b$ is finite-valued with $\sum_{y\in E}\mu_b(y)=\mathbb E_bT_b^+$, and since positive recurrence makes $b$ recurrent, [F2] gives $\mu_bp=\mu_b$ as well as $\mu_b(b)=1$. [F1, F2, given]

2.1 Define $\nu(y):=\pi(y)/\pi(b)$ for $y\in E$; this is nonnegative and finite by step 1.1, $\nu(b)=1$, and for $y\ne b$ the invariance identity [F4] gives $(\nu p)(y)=\sum_x\nu(x)p(x,y)=\frac1{\pi(b)}\sum_x\pi(x)p(x,y)=\pi(y)/\pi(b)=\nu(y)$. [F4, step 1.1, given]

3.1 By the minimality clause of [F2] applied to $\nu$, one has $\pi(b)\mu_b(y)\le\pi(b)\nu(y)=\pi(y)$ for every $y$; hence $\eta(y):=\pi(y)-\pi(b)\mu_b(y)$ is a well-defined nonnegative extended function with $\eta(b)=\pi(b)-\pi(b)\cdot1=0$ and finite total mass $\sum_y\eta(y)=1-\pi(b)\mathbb E_bT_b^+$. [F2, step 2.1, given]

4.1 The defect $\eta$ is invariant: for every $y$, $\sum_x\eta(x)p(x,y)=\sum_x\pi(x)p(x,y)-\pi(b)\sum_x\mu_b(x)p(x,y)=\pi(y)-\pi(b)\mu_b(y)=\eta(y)$, using the invariance identity [F4] for $\pi$, the identity $\mu_bp=\mu_b$ from step 1.1, and the fact that both subtracted series have finite values; iterating with the Chapman–Kolmogorov identity [F5] and the interchange of nonnegative sums [F6] gives $\sum_x\eta(x)p^{(n)}(x,y)=\eta(y)$ for every $n\ge0$. [F4, F5, F6, step 1.1, step 3.1, given]

5.1 Evaluate the conservation identity of step 4.1 at $y=b$ and $n$ arbitrary: $0=\eta(b)=\sum_{x\in E}\eta(x)p^{(n)}(x,b)$, a sum of nonnegative terms, so $\eta(x)p^{(n)}(x,b)=0$ for every $x$ and every $n$; for fixed $x$, [F3] provides $n$ with $p^{(n)}(x,b)>0$, hence $\eta(x)=0$. Therefore $\eta\equiv0$, that is, $\pi(y)=\pi(b)\mu_b(y)$ and so $\mu_b(y)=\pi(y)/\pi(b)$ for every $y\in E$. [F3, step 4.1, given]

6.1 Summing the identity of step 5.1 and using $\sum_y\mu_b(y)=\mathbb E_bT_b^+$ from [F2] gives $1=\sum_y\pi(y)=\pi(b)\sum_y\mu_b(y)=\pi(b)\mathbb E_bT_b^+$, that is, $\mathbb E_bT_b^+=1/\pi(b)$, finite and positive. [F2, step 5.1, given]

7.1 The three assertions of the statement hold: $\pi(b)>0$ by step 1.1, $\mathbb E_bT_b^+=1/\pi(b)$ by step 6.1, and $\mu_b(y)=\pi(y)/\pi(b)$ by step 5.1. [step 1.1, step 5.1, step 6.1, given]

8.1 Boundary and axiom cases: if $E$ is a singleton the formulas give $\mu_b=\delta_b$, $\mathbb E_bT_b^+=1$ and $\pi(b)=1$, matching step 6.1; if $\pi$ is not unique the argument applies to each invariant probability separately, since only invariance of $\pi$ and irreducibility are used, and no uniqueness is asserted; a transient or null-recurrent chain has no invariant probability by [F1], so the hypothesis cannot be vacuous in those cases; $\eta$ is nonnegative by the minimality clause, so no infinite minus infinite subtraction occurs in step 4.1, and the subtracted series there are separately finite; the identities are equalities, not implications, so there is no iff case separation; and AC [A1] enters exactly through [F2] and [F1], both of which assume it. [A1, F1, F2, step 3.1, step 6.1, given] ∎
