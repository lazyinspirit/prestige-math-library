---
id: thm-kl-is-iid-type-ii-error-exponent
kind: theorem
title: KL is the iid type-II testing exponent
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-probability-vector
  - def-finite-kullback-leibler-divergence
  - def-finite-hypothesis-testing-beta
  - lem-finite-iid-log-likelihood-concentrates
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 14, §14.5, Theorem 14.13 and full proof"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
---

## Statement

Let $P,Q$ be probability vectors on a finite nonempty alphabet $\mathcal X$.
For $n\ge1$, write $P^n,Q^n$ for the product vectors on $\mathcal X^n$,
with $P^n(x_1,\ldots,x_n)=\prod_{i=1}^np_{x_i}$ and similarly for $Q^n$.
For every fixed $\epsilon\in(0,1)$, with $\beta_\epsilon$ oriented as in
[[def-finite-hypothesis-testing-beta]],
$$\lim_{n\to\infty}-\frac1n\log\beta_\epsilon(P^n,Q^n)=D(P\|Q),$$
where $-\log0:=+\infty$.

## Facts & Assumptions

**Given:** $P,Q$ as in the Statement and a fixed $\epsilon\in(0,1)$.

[F1] [[def-finite-probability-vector]]: $P,Q$ are probability vectors on
the same finite alphabet.

[F2] [[def-finite-kullback-leibler-divergence]]: $D(P\|Q)=+\infty$ if
$P\not\ll Q$.

[F3] [[def-finite-hypothesis-testing-beta]]: $\beta_\epsilon(P,Q)$ is the
infimum alternative acceptance probability $E_Q[1-\phi]$ over randomized
rejection functions $\phi:\mathcal X\to[0,1]$ satisfying $E_P\phi\le\epsilon$.

[F4] [[lem-finite-iid-log-likelihood-concentrates]]: when $P\ll Q$, the
empirical log-likelihood ratio $L_n/n$ converges in probability under
$P^n$ to $D(P\|Q)$, and on the support
$Q^n=P^n\exp(-L_n)$.

## Proof

1.1 First suppose $P\not\ll Q$. The set
$S:=\{x:p_x>0=q_x\}$ has $r:=P(S)>0$. For each $n$, let
$A_n\subseteq\mathcal X^n$ be the event that at least one coordinate lies
in $S$, and define a test $\phi_n$ to reject only on $A_n^c$. Then
$E_{P^n}\phi_n=P^n(A_n^c)=(1-r)^n\to0$, while
$E_{Q^n}[1-\phi_n]=Q^n(A_n)=0$. For every fixed $\epsilon>0$ the test is
feasible for all sufficiently large $n$, so $\beta_\epsilon(P^n,Q^n)=0$
there and the exponent is $+\infty=D(P\|Q)$. [F1, F2, F3, given, construct,
algebra]

2.1 Now suppose $P\ll Q$, put $D=D(P\|Q)$, and fix $\delta>0$. On
$\operatorname{supp}(P)^n$ write
$L_n(x_1,\ldots,x_n)=\sum_{i=1}^n\log(p_{x_i}/q_{x_i})$. Define
$A_n=\{x\in\operatorname{supp}(P)^n:L_n(x)\ge n(D-\delta)\}$ and reject
outside $A_n$. By [F4], $P^n(A_n)\to1$, so this test has type-I error at most
$\epsilon$ for all sufficiently large $n$. For each $x\in A_n$,
$Q^n(x)=P^n(x)e^{-L_n(x)}\le P^n(x)\exp(-n(D-\delta))$; summing gives
$\beta_\epsilon(P^n,Q^n)\le Q^n(A_n)\le\exp(-n(D-\delta))$. [F1, F3,
F4, given, construct, algebra]

3.1 Let $\psi:\mathcal X^n\to[0,1]$ be the acceptance probability of any
test feasible for $\beta_\epsilon(P^n,Q^n)$, so $E_{P^n}\psi\ge1-\epsilon$.
Set $B_n=\{x\in\operatorname{supp}(P)^n:L_n(x)\le n(D+\delta)\}$. By [F4],
$P^n(B_n^c)\to0$. Since the $Q^n$ expectation includes all terms on
$\operatorname{supp}(P)^n$, its nonnegative terms give
$E_{Q^n}\psi\ge E_{P^n}[\psi e^{-L_n}\mathbf 1_{B_n}]
\ge\exp(-n(D+\delta))(1-\epsilon-P^n(B_n^c))$.
This holds for every feasible test, hence also for the infimum
$\beta_\epsilon(P^n,Q^n)$. For all sufficiently large $n$ the last factor
is positive. [F1, F3, F4, step 2.1, given, algebra]

4.1 Steps 2.1 and 3.1 imply
$D-\delta\le\liminf_n-\frac1n\log\beta_\epsilon(P^n,Q^n)
\le\limsup_n-\frac1n\log\beta_\epsilon(P^n,Q^n)\le D+\delta$, because
$-\frac1n\log(1-\epsilon-P^n(B_n^c))\to0$. Since $\delta>0$ was
arbitrary, the limit equals $D$. Together with step 1.1 this proves the
extended-real statement. [step 1.1, step 2.1, step 3.1, algebra] ∎
