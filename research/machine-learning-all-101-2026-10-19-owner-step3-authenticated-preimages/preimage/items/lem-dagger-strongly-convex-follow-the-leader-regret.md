---
id: lem-dagger-strongly-convex-follow-the-leader-regret
kind: lemma
title: Follow-the-Leader regret for bounded strongly convex losses
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stéphane Ross, Geoffrey J. Gordon, and J. Andrew Bagnell, A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning"
      url: "https://proceedings.mlr.press/v15/ross11a/ross11a.pdf"
      locator: "§4.1–4.2, PDF pp. 3–4: FTL on strongly convex losses and the online-regret interface; the stability proof below is supplied locally."
---

## Statement

Let $d,N\ge1$ be integers, let $K\subseteq\mathbb R^d$ be nonempty and convex, and define $\|x-y\|_2=(\sum_{r=1}^d(x_r-y_r)^2)^{1/2}$. Let $G\ge0$ and $\mu>0$. For each $i=1,\ldots,N$, let $L_i:K\to[0,1]$ be $G$-Lipschitz, meaning $|L_i(x)-L_i(y)|\le G\|x-y\|_2$, and $\mu$-strongly convex, meaning

$$L_i((1-\lambda)x+\lambda y)\le(1-\lambda)L_i(x)+\lambda L_i(y)-\frac{\mu}{2}\lambda(1-\lambda)\|x-y\|_2^2$$

for all $x,y\in K$ and $\lambda\in[0,1]$. For $n=1,\ldots,N$, assume $F_n:=\sum_{i=1}^nL_i$ attains a minimum on $K$. Let $\theta_1\in K$ and, for $n=1,\ldots,N$, let $\theta_{n+1}$ be the unique minimizer of $F_n$. Define $H_0=0$ and $H_n=\sum_{j=1}^n1/j$ for $n\ge1$. Then

$$\sum_{i=1}^N L_i(\theta_i)-\min_{\theta\in K}\sum_{i=1}^NL_i(\theta)\le1+\frac{4G^2}{\mu}H_{N-1}.$$

The minimizers are unique because $F_n$ is $n\mu$-strongly convex. The first policy $\theta_1$ may be any supplied point of $K$.

## Statement references

[Ross, Gordon, and Bagnell, *A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning*](https://proceedings.mlr.press/v15/ross11a/ross11a.pdf): §4.1–4.2, PDF pp. 3–4, for the FTL/strongly-convex no-regret context.

## Facts & Assumptions

**Given:** $K$, $L_1,\ldots,L_N$, $G$, $\mu$, the attained cumulative minimizers, and $\theta_1$ as in the Statement.

[A1] Each $L_i$ takes values in $[0,1]$, is $G$-Lipschitz and $\mu$-strongly convex on the convex set $K$, and each $F_n$ has an attained minimum.

## Proof

**Proof technique:** be-the-leader telescoping and a stability bound for consecutive minimizers.

1.1 Each $F_n$ is $n\mu$-strongly convex by summing the defining inequalities, so it has at most one minimizer; the assumed attainment therefore makes every $\theta_{n+1}$ well-defined and unique. For any comparator $v\in K$, expand $L_i(\theta_{i+1})=F_i(\theta_{i+1})-F_{i-1}(\theta_{i+1})$ and telescope to obtain $\sum_{i=1}^N L_i(\theta_{i+1})=F_N(\theta_{N+1})+\sum_{i=1}^{N-1}\big(F_i(\theta_{i+1})-F_i(\theta_{i+2})\big)\le F_N(v)$, because $\theta_{i+1}$ minimizes $F_i$ and $\theta_{N+1}$ minimizes $F_N$. [given, A1, algebra]

2.1 For $i\ge2$, apply the midpoint strong-convexity inequality for $F_{i-1}$ to $\theta_i$ and $\theta_{i+1}$. Since $\theta_i$ minimizes $F_{i-1}$, this gives $\frac{(i-1)\mu}{4}\|\theta_{i+1}-\theta_i\|_2^2\le F_{i-1}(\theta_{i+1})-F_{i-1}(\theta_i)$. Optimality of $\theta_{i+1}$ for $F_i=F_{i-1}+L_i$ bounds the right side by $L_i(\theta_i)-L_i(\theta_{i+1})$, which is at most $G\|\theta_{i+1}-\theta_i\|_2$ by Lipschitz continuity. If the distance is zero the loss difference is zero; otherwise divide by it to obtain $L_i(\theta_i)-L_i(\theta_{i+1})\le4G^2/((i-1)\mu)$. [A1, step 1.1, algebra]

3.1 The first difference satisfies $L_1(\theta_1)-L_1(\theta_2)\le1$ because both values lie in $[0,1]$. Summing this with the bounds from step 2.1 yields $\sum_{i=1}^N\big(L_i(\theta_i)-L_i(\theta_{i+1})\big)\le1+\frac{4G^2}{\mu}H_{N-1}$. For a minimizer $v$ of $F_N$, step 1.1 gives $\sum_iL_i(\theta_{i+1})\le F_N(v)$; adding that inequality proves the Statement. [A1, step 1.1, step 2.1, algebra] ∎
