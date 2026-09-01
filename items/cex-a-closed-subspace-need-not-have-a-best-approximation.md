---
id: cex-a-closed-subspace-need-not-have-a-best-approximation
kind: counterexample
title: "A closed subspace of a Banach space need not contain a nearest point to every ambient vector"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MathCounterexamples.net, Distance between a point and a hyperplane not reached"
      url: "https://www.mathcounterexamples.net/distance-between-a-point-and-a-hyperplane-not-reached/"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Statement refuted

**Refuted claim:** every closed linear subspace of a Banach space contains a
nearest point to every ambient vector.

In the real Banach space

$$c_0:=\{x=(x_n)_{n\ge 0}:x_n\in\mathbb R,\ x_n\to 0\}$$

with the supremum norm, define

$$\varphi(x):=\sum_{n=0}^\infty 2^{-n-1}x_n,$$

let

$$H:=\ker \varphi,$$

and set $x:=2e_0=(2,0,0,\dots)$. Then $H$ is a closed linear subspace of $c_0$,
the distance from $x$ to $H$ is $1$, and no point of $H$ realizes that
distance.

## Facts & Assumptions

**Given:** The real normed space $c_0$, the functional $\varphi$, its kernel $H$, and the vector $x:=2e_0$.

## Counterexample

**Proof technique:** direct.

1.1 Let $(x^{(m)})$ be a Cauchy sequence in $c_0$ for the supremum norm, with coordinates $x^{(m)}=(x_n^{(m)})_{n\ge0}$. For each $n$, the scalar sequence $(x_n^{(m)})_m$ is Cauchy because $|x_n^{(m)}-x_n^{(\ell)}| \le \|x^{(m)}-x^{(\ell)}\|_\infty$. Since the scalars are real, let $z_n:=\lim_m x_n^{(m)}$. Choosing $M_0$ with $\|x^{(m)}-x^{(\ell)}\|_\infty<1$ for $m,\ell\ge M_0$ and letting $\ell\to\infty$ gives $|z_n|\le \|x^{(M_0)}\|_\infty+1$ for every $n$, so $z:=(z_n)$ is bounded. Given $\varepsilon>0$, choose $M$ such that $\|x^{(m)}-x^{(\ell)}\|_\infty<\varepsilon/2$ whenever $m,\ell\ge M$. Letting $\ell\to\infty$ coordinatewise gives $|x_n^{(m)}-z_n|\le\varepsilon/2$ for every $n$ and every $m\ge M$, hence $\|x^{(m)}-z\|_\infty\le\varepsilon/2$. Fix such an $m$ and choose $N$ with $|x_n^{(m)}|<\varepsilon/2$ for all $n\ge N$, since $x^{(m)}\in c_0$. Then $|z_n|<\varepsilon$ for $n\ge N$, so $z\in c_0$. The displayed uniform estimate also gives $\|x^{(m)}-z\|_\infty\to0$. Therefore $c_0$ is Banach. [construct, algebra]

2.1 The series defining $\varphi$ converges absolutely and $|\varphi(z)| \le \sum_{n=0}^\infty 2^{-n-1}|z_n| \le \|z\|_\infty$ for every $z \in c_0$, so $\varphi$ is a bounded linear functional with $\|\varphi\|\le1$. If $z^{(m)} \in H$ and $z^{(m)} \to z$ in $c_0$, then $|\varphi(z)| = |\varphi(z-z^{(m)})| \le \|z-z^{(m)}\|_\infty \to 0$, so $z \in H$. Thus $H$ is a closed linear subspace. Also $\varphi(x)=1$. [step 1.1, algebra]

3.1 For every $y \in H$ one has $\varphi(x-y)=1$, hence $1=|\varphi(x-y)| \le \|x-y\|_\infty$ by step 2.1. Therefore $\operatorname{dist}(x,H)\ge1$. [step 2.1, algebra]

3.2 For $N \ge 1$, define $z^{(N)} \in c_0$ by $z^{(N)}_n := (1-2^{-N})^{-1}$ for $0 \le n < N$ and $z^{(N)}_n:=0$ for $n \ge N$. Then $\varphi(z^{(N)})=(1-2^{-N})^{-1}\sum_{n=0}^{N-1}2^{-n-1}=1$, so $y^{(N)}:=x-z^{(N)}$ lies in $H$, and $\|x-y^{(N)}\|_\infty=\|z^{(N)}\|_\infty=(1-2^{-N})^{-1}\to1$. Hence $\operatorname{dist}(x,H)\le1$. [step 2.1, construct]

4.1 Steps 3.1 and 3.2 give $\operatorname{dist}(x,H)=1$. Suppose some $y \in H$ satisfied $\|x-y\|_\infty=1$, and put $z:=x-y$. Then $\|z\|_\infty=1$ and $\varphi(z)=1$ by step 2.1. Also $$1=\varphi(z)=\sum_{n=0}^\infty 2^{-n-1}z_n \le \sum_{n=0}^\infty 2^{-n-1}|z_n| \le \sum_{n=0}^\infty 2^{-n-1}\|z\|_\infty=1.$$ [step 2.1, step 3.1, step 3.2, assume-contra, algebra]

5.1 So equality holds throughout in step 4.1, forcing $|z_n|=1$ and $z_n \ge 0$ for every $n$. That contradicts $z \in c_0$, since a sequence converging to $0$ cannot have all coordinates equal to $1$ in modulus. [step 4.1, discharge-contradiction]

6.1 Thus $H$ is a closed subspace of the Banach space $c_0$, the distance from $x$ to $H$ is $1$, and no $y \in H$ attains it. This refutes the claim. [step 1.1, step 2.1, step 3.1, step 3.2, step 5.1] ∎
