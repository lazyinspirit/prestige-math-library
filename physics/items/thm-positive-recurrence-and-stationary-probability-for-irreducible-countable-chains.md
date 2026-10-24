---
id: thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains
kind: theorem
title: "Positive recurrence and stationary probability for irreducible countable chains"
status: published
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-positive-recurrent-and-null-recurrent-state
  - lem-return-cycle-occupation-measure-and-minimality
  - def-accessibility-communication-and-irreducibility
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
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.5–5.6, positive recurrence and stationary distributions"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, §21.3 and Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
    - title: "Aldous–Chewi, Probability Theory, Lectures 13–15"
      url: https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $p$ be an irreducible transition matrix
on a nonempty countable state space $E$
([[def-accessibility-communication-and-irreducibility]]), and for $b\in E$ let
$\mu_b(y)=\mathbb E_b\sum_{0\le n<T_b^+}\mathbf 1_{\{X_n=y\}}$ be the return-cycle
occupation measure of [[lem-return-cycle-occupation-measure-and-minimality]].
Then the following three statements are equivalent:

1. some state is positive recurrent;
2. every state is positive recurrent
   ([[def-positive-recurrent-and-null-recurrent-state]]);
3. there is an invariant probability $\pi$ for $p$
   ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]]).

Moreover, if $b$ is positive recurrent then
$\mathbb E_bT_b^+=\sum_{y\in E}\mu_b(y)$ is finite, the measure
$\pi(y):=\mu_b(y)/\mathbb E_bT_b^+$ is an invariant probability, and
$\pi(b)=1/\mathbb E_bT_b^+$. Conversely, if $\pi$ is an invariant probability,
then $\pi(b)>0$ and $\mathbb E_bT_b^+\le1/\pi(b)$ for every $b$.

## Facts & Assumptions

**Given:** AC, a nonempty countable state space $E$, an irreducible transition matrix $p$ on $E$, and a state $b\in E$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the chain-law and occupation-measure supplier [F4]. ([[def-axiom-of-choice]])

[F1] $x\to y$ means $p^{(n)}(x,y)>0$ for some $n\ge0$, with $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$, and $p$ is irreducible when every pair of states communicates; in particular for all $x,y$ there is $n\ge0$ with $p^{(n)}(x,y)>0$. ([[def-accessibility-communication-and-irreducibility]])

[F2] $p^{(m+n)}(x,y)=\sum_{z\in E}p^{(m)}(x,z)p^{(n)}(z,y)$ for all $m,n\ge0$ and $x,y\in E$. ([[lem-matrix-chapman-kolmogorov-equations]])

[F3] A recurrent state $x$ is positive recurrent when $\mathbb E_xT_x^+<+\infty$; a finite mean forces $\mathbb P_x(T_x^+<\infty)=1$. ([[def-positive-recurrent-and-null-recurrent-state]])

[F4] Assume AC. For a countable $p$-chain started at $b$: $\mu_b(b)=1$; $\sum_{y\in E}\mu_b(y)=\mathbb E_bT_b^+$; $\mu_b(y)=\sum_{x\in E}\mu_b(x)p(x,y)$ for every $y\ne b$; $\mu_b$ is pointwise minimal among nonnegative solutions of $\nu(b)=1$, $\nu(y)=\sum_x\nu(x)p(x,y)$ $(y\ne b)$; and if $b$ is recurrent then $\mu_bp=\mu_b$. ([[lem-return-cycle-occupation-measure-and-minimality]])

[F5] On a countable state space a probability vector $\pi$ is invariant exactly when $\pi(y)=\sum_{x\in E}\pi(x)p(x,y)$ for every $y\in E$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F6] For every double sequence $(a_{ij})$ in $[0,+\infty]$, the two iterated sums and the supremum of the finite partial sums coincide, so the order of summation of nonnegative terms may be exchanged even when the common value is $+\infty$. ([[thm-tonelli-for-nonnegative-double-series]])

## Proof

**Given:** AC, a nonempty countable state space $E$, an irreducible transition matrix $p$ on $E$, a state $b$, and the return-cycle occupation measure $\mu_b$ of [F4].

**Proof technique:** from an invariant probability build the normalized candidate $\pi/\pi(b)$, use the pointwise minimality of the return-cycle measure to bound the expected return time, and reverse the implication by normalizing $\mu_b$ in the positive-recurrent case.

1.1 For every $n\ge0$ one has $\pi p^{(n)}=\pi$ whenever $\pi$ is an invariant probability, where $(\pi p^{(n)})(y):=\sum_{x\in E}\pi(x)p^{(n)}(x,y)$: the case $n=0$ is $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$, and if $\pi p^{(n)}=\pi$, then $(\pi p^{(n+1)})(y)=\sum_{x}\pi(x)\sum_zp^{(n)}(x,z)p(z,y)=\sum_z\bigl(\sum_x\pi(x)p^{(n)}(x,z)\bigr)p(z,y)=\sum_z\pi(z)p(z,y)=\pi(y)$ for every $y$, using [F2] with $m=n$, $n=1$ and the interchange of the two nonnegative series in [F6]. [F2, F5, F6, given]

1.2 Conversely, assume some state $b$ is positive recurrent. Then $\mathbb P_b(T_b^+<\infty)=1$ and $0<\mathbb E_bT_b^+<\infty$; by [F4] the measure $\mu_b$ satisfies $\mu_bp=\mu_b$, and $\mu_b\ge0$ with $1=\mu_b(b)\le\sum_y\mu_b(y)=\mathbb E_bT_b^+<\infty$; hence $\pi_*(y):=\mu_b(y)/\mathbb E_bT_b^+$ defines a probability vector with $\pi_*p=\pi_*$, i.e. an invariant probability by [F5]. [F3, F4, F5, given]

2.1 Assume there is an invariant probability $\pi$. Then $\pi(b)>0$ for every $b\in E$: by [F1] irreducibility gives $n$ with $p^{(n)}(x,b)>0$ for an arbitrary fixed $x$, and step 1.1 gives $\pi(b)=\sum_{x'\in E}\pi(x')p^{(n)}(x',b)\ge\pi(x)p^{(n)}(x,b)$, so if $\pi(b)=0$ then $\pi(x)=0$ for every $x$, contradicting $\sum_x\pi(x)=1$. [F1, F2, F5, step 1.1, given]

3.1 With $\pi$ invariant, define $\nu(y):=\pi(y)/\pi(b)$ for $y\in E$; this is well defined and finite by step 2.1, $\nu\ge0$, $\nu(b)=1$, and for $y\ne b$ the invariance identity [F5] gives $(\nu p)(y)=\sum_x\nu(x)p(x,y)=\frac1{\pi(b)}\sum_x\pi(x)p(x,y)=\pi(y)/\pi(b)=\nu(y)$. [F5, step 2.1, given]

4.1 The pointwise minimality of [F4] applied to $\nu$ yields $\mu_b(y)\le\nu(y)$ for every $y$; summing and using $\sum_y\mu_b(y)=\mathbb E_bT_b^+$ from [F4] gives $\mathbb E_bT_b^+\le\sum_y\nu(y)=1/\pi(b)<+\infty$, so $b$ is recurrent with finite expected return time, i.e. positive recurrent by [F3]. Since $b$ was arbitrary, every state is positive recurrent. [F3, F4, step 3.1, given]

5.1 The three statements are equivalent: every state positive recurrent implies some state positive recurrent because $E\ne\varnothing$; some state positive recurrent implies the existence of an invariant probability by step 1.2; and the existence of an invariant probability implies every state positive recurrent by steps 2.1–4.1. In the construction of step 1.2, $\pi_*(y)=\mu_b(y)/\mathbb E_bT_b^+$ and $\pi_*(b)=\mu_b(b)/\mathbb E_bT_b^+=1/\mathbb E_bT_b^+$, which are the two displayed formulas of the statement, while the bound $\mathbb E_bT_b^+\le1/\pi(b)$ for an invariant $\pi$ is step 4.1. [F4, step 4.1, step 1.2, given]

6.1 Boundary and axiom cases: if $E$ is a singleton then $p(1,1)=1$, every state is positive recurrent with $T_b^+=1$, and $\pi=\delta_b$ is the invariant probability, consistent with all three clauses; no state is transient here, so the alternatives of [F3] are exhaustive; the equivalence is proved in both directions through steps 4.1 and 1.2, not assumed; the arguments never subtract infinite quantities, since all sums of occupation masses are nonnegative and are shown finite only after the minimality bound; and AC [A1] is used exactly through [F4], the published chain-law and return-cycle supplier, whose statement assumes AC, while the remaining steps are nonnegative matrix algebra. [A1, F1, F2, F3, F4, F5, step 4.1, step 1.2, given] ∎
