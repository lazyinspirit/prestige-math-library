---
id: thm-diagonal-heat-semigroup-on-c-zero
kind: theorem
title: "The diagonal heat semigroup on $c_0$ is contractive and strongly continuous"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-c-zero-and-ell-infinity, lem-real-and-complex-c-zero-are-banach, def-strongly-continuous-semigroup, def-operator-norm, def-real-exponential-function-and-e, thm-exponential-addition-formula, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods, Chapter 4, §4.2"
      url: "https://people.maths.ox.ac.uk/trefethen/4all.pdf"
    - title: "R. J. LeVeque, AMath 585–6 Notes, Chapter 12, §§12.1–12.5.1"
      url: "https://usermanual.wiki/Document/LeVequeFiniteDiff.545303893.pdf"
---

## Statement

Let $\mathbb K\in\{\mathbb R,\mathbb C\}$ and let $X=c_0(\mathbb K)$ with
the supremum norm, as in [[def-c-zero-and-ell-infinity]]. For $t\ge0$ define
$$U(t)x=(\exp(-j^2t)x_j)_{j\in\mathbb N}.$$
Then $U(t)$ is a strongly continuous semigroup on the Banach space $X$ and
$$\|U(t)\|_{\mathrm{op}}\le1\qquad(t\ge0).$$

## Facts & Assumptions

**Given:** $\mathbb K\in\{\mathbb R,\mathbb C\}$ and $X=c_0(\mathbb K)$.

[F1] The space $c_0(\mathbb K)$ consists of scalar sequences tending to zero and has norm $\|x\|_\infty=\sup_j|x_j|$ ([[def-c-zero-and-ell-infinity]]).

[F2] With this norm, real and complex $c_0$ are Banach spaces ([[lem-real-and-complex-c-zero-are-banach]]).

[F3] $\exp(a+b)=\exp(a)\exp(b)$ and $\exp(0)=1$ ([[thm-exponential-addition-formula]], [[def-real-exponential-function-and-e]]).

[F4] The real exponential is continuous and strictly increasing ([[thm-exponential-is-strictly-increasing]]).

[F5] $\exp(a)>0$ for every real $a$ ([[cor-exponential-reciprocal-and-positivity]]).

[F6] The operator norm is the supremum of $\|Tx\|$ over the unit ball, so a bound $\|Tx\|\le\|x\|$ implies $\|T\|_{\mathrm{op}}\le1$ ([[def-operator-norm]]).

## Proof

1.1 For $t\ge0$ and $j\in\mathbb N$, [F4] and [F5] give $0<\exp(-j^2t)\le\exp(0)=1$. Thus the coordinate formula is linear and $\|U(t)x\|_\infty\le\|x\|_\infty.$ If $x\in c_0$ and $\varepsilon>0$, choose $N$ so that $|x_j|<\varepsilon$ for all $j\ge N$; then $|(U(t)x)_j|\le|x_j|<\varepsilon$ for $j\ge N$. So $U(t)x\in c_0$, $U(t)$ is bounded, and [F6] gives $\|U(t)\|_{\mathrm{op}}\le1$. [F1, F4, F5, F6, given]

2.1 Since $\exp(0)=1$, $U(0)=I_X$. For $s,t\ge0$, [F3] gives $U(t)U(s)x=(\exp(-j^2t)\exp(-j^2s)x_j)_j =(\exp(-j^2(t+s))x_j)_j=U(t+s)x.$ Thus the semigroup identities hold on every coordinate and hence on $X$. [F3, step 1.1, algebra]

2.2 Fix $x\in X$, $t_0\ge0$, and $\varepsilon>0$. By [F1], choose $N$ such that $|x_j|<\varepsilon/3$ for $j\ge N$. For those indices, $|\exp(-j^2t)-\exp(-j^2t_0)|\,|x_j|<\varepsilon/3$ for every $t\ge0$, because both exponential factors lie in $[0,1]$. For the finitely many indices $j<N$, continuity in [F4] supplies a common $\delta>0$ such that the same coordinate differences are below $\varepsilon/3$ whenever $t\ge0$ and $|t-t_0|<\delta$. Taking the supremum over all coordinates proves $\|U(t)x-U(t_0)x\|_\infty<\varepsilon$. Therefore every orbit is continuous, so $U$ is strongly continuous. [F1, F4, step 1.1, choose]

3.1 The boundedness in step 1.1 holds for every $t$, so for each $T>0$, $\sup_{0\le t\le T}\|U(t)\|_{\mathrm{op}}\le1.$ Together with the Banach property [F2], the semigroup identities in step 2.1, and strong continuity in step 2.2, this proves the statement. [F2, step 1.1, step 2.1, step 2.2] ∎
