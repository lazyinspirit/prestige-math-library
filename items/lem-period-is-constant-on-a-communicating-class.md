---
id: lem-period-is-constant-on-a-communicating-class
kind: lemma
title: "Period is constant on communicating classes"
status: draft
origin: pipeline
proof_strategy: direct
deps:
  - def-period-of-a-state
  - def-accessibility-communication-and-irreducibility
  - lem-matrix-chapman-kolmogorov-equations
  - def-transition-matrix-and-n-step-transition-probabilities
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
      locator: "§1.3, Lemma 1.6, printed p. 7 (PDF p. 22): period invariance for a finite-state irreducible chain; the countable communicating-state claim is proved locally here using matrix Chapman–Kolmogorov."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

If $x$ and $y$ communicate, then $d(x)=d(y)$, including $x=y$ and the convention $d(x)=0$ when no positive return exists.

## Facts & Assumptions

**Given:** A countable transition matrix $p$ and communicating states $x,y$.

[F1] Communication means $x\to y$ and $y\to x$, where accessibility is witnessed by some $n\in\mathbb N_0$ with $p^{(n)}(x,y)>0$. [[def-accessibility-communication-and-irreducibility]]

[F2] $R_x=\{n\ge1:p^{(n)}(x,x)>0\}$; $d(x)=0$ if $R_x=\varnothing$, and otherwise $d(x)$ is the greatest positive integer dividing every element of $R_x$. [[def-period-of-a-state]]

[F3] For $m,n\ge0$, $p^{(m+n)}(u,v)=\sum_{z\in E}p^{(m)}(u,z)p^{(n)}(z,v)$. [[lem-matrix-chapman-kolmogorov-equations]]

[F4] $p^{(0)}(u,v)=\mathbf1_{\{u=v\}}$. [[def-transition-matrix-and-n-step-transition-probabilities]]

## Proof

**Proof technique:** direct.

1.1 If $x=y$, the conclusion is the identity $d(x)=d(x)$, whether or not $R_x$ is empty. Suppose $x\ne y$. By [F1], choose route lengths $r,s\in\mathbb N_0$ with $p^{(r)}(x,y)>0$ and $p^{(s)}(y,x)>0$. By [F4], neither length is zero, so $r,s\ge1$. Twice applying [F3] and retaining the route terms gives $p^{(r+s)}(x,x)\ge p^{(r)}(x,y)p^{(s)}(y,x)>0$ and $p^{(r+s)}(y,y)\ge p^{(s)}(y,x)p^{(r)}(x,y)>0$. Thus both return-time sets are nonempty and both periods are positive. [F1, F3, F4, given]

2.1 Fix any $t\in R_x$. By [F3], the route from $y$ to $x$, a $t$-step return at $x$, and the route from $x$ to $y$ give $p^{(s+t+r)}(y,y)\ge p^{(s)}(y,x)p^{(t)}(x,x)p^{(r)}(x,y)>0$. Step 1.1 also shows $r+s\in R_y$. Hence the positive integer $d(y)$ divides both $r+s$ and $r+t+s$, so it divides their difference $t$. As this holds for every $t\in R_x$, $d(y)$ is a common positive divisor of $R_x$ and therefore $d(y)\le d(x)$ by [F2]. [F2, F3, step 1.1, given, algebra]

3.1 Interchanging $x$ and $y$ in step 2.1 shows that every $t\in R_y$ is divisible by $d(x)$; hence $d(x)$ is a common positive divisor of $R_y$ and $d(x)\le d(y)$. Together with step 2.1 this proves equality for distinct communicating states. The case $x=y$ was settled in step 1.1. [F1, F2, F3, step 1.1, step 2.1, given, algebra]

4.1 If $E=\varnothing$, there are no communicating states and the assertion is vacuous. If $x=y$ and there is no positive return, both sides equal the stipulated zero; if $x\ne y$ communicate, step 1.1 proves positive returns exist, so neither period is zero. One-state, deterministic, and absorbing cases are covered by the same alternatives. The accessibility witnesses are positive for distinct states because [F4] makes a zero-step transition possible only from a state to itself. The proof chooses routes only for this fixed pair, so it uses no choice function. This one-way equality statement is not an iff. [F1, F2, F4, step 1.1, step 2.1, step 3.1, given] ∎
