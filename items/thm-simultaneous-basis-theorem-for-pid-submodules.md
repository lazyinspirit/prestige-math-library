---
id: thm-simultaneous-basis-theorem-for-pid-submodules
kind: theorem
title: "Simultaneous bases for a submodule of a finite free module over a PID"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-maximal-divisor-pivot-for-pid-submodules, def-invariant-basis-number-and-rank-of-a-free-module, thm-induction-principle]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modules over a PID, Theorem 2.14"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a PID, let $M$ be free of finite rank $n$, and let $N\le M$. For a submodule $N$ of a finite free PID module, aligned bases have nonzero factors $a_1\mid\cdots\mid a_r$. More precisely, there is a basis $e_1,\ldots,e_n$ of $M$ and nonzero elements $a_1\mid\cdots\mid a_r$ such that there is a basis $a_1e_1,\ldots,a_re_r$ of the submodule with $r\le n$.

## Facts & Assumptions

**Given:** Induction on natural-number rank ([[thm-induction-principle]]) and the rank convention of [[def-invariant-basis-number-and-rank-of-a-free-module]].

[L1] If $0\ne N\le M$ with $M$ finite free over a PID, there are $\psi\in M^*$, $e_1\in M$, and $0\ne a\in R$ such that $\psi(e_1)=1$, $M=Re_1\oplus\ker\psi$, $N=Rae_1\oplus(N\cap\ker\psi)$, and $\psi(N)=(a)$ is maximal among the functional value ideals containing a fixed nonzero value ideal ([[lem-maximal-divisor-pivot-for-pid-submodules]]).

## Proof

**Proof technique:** induction.

1.1 If $n=0$, then $M=N=0$ and both bases are empty, giving $r=0$. If $N=0$ for any $n$, choose any basis of $M$ and the empty basis of $N$. [base]

1.2 Assume the theorem for free ambient modules of rank less than a fixed $n\ge1$. [ih]

1.3 For nonzero $N\le M$ of rank $n$, apply [L1] to obtain $M=Re_1\oplus M_1$ and $N=Ra_1e_1\oplus N_1$, where $M_1=\ker\psi$ is free of rank $n-1$ and $N_1=N\cap M_1$. [L1]

2.1 Apply the induction hypothesis of step 1.2 to $N_1\le M_1$, obtaining basis vectors $e_2,\ldots,e_n$ and, when $N_1\ne0$, factors $a_2\mid\cdots\mid a_r$. If $N_1=0$, then $r=1$ and the required chain consists only of $a_1$. Otherwise let $e_1^*,e_2^*$ be the coordinate functionals of the combined ambient basis and put $\varphi=e_1^*+e_2^*$. Since $\varphi(a_1e_1)=a_1$, one has $(a_1)\subseteq\varphi(N)$; maximality of the pivot value ideal in [L1] forces equality, and $a_2=\varphi(a_2e_2)\in(a_1)$, so $a_1\mid a_2$. Concatenating the bases gives the required aligned bases and chain, with $r\le n$, and completes the induction. [step 1.3, step 1.2, L1, discharge-induction] ∎
