---
id: lem-ip-q2-ellipsoid-extremal-profile-is-minimizer
kind: lemma
title: The q=2 ellipsoid extremal profile minimizes the fourth-power objective
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-minimax-detection-risk-and-separation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, §4.1, equations (4.4)–(4.8)"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Clément Marteau and Theofanis Sapatinas, A unified treatment for non-asymptotic and asymptotic approaches to minimax signal detection, §3.1"
      url: https://arxiv.org/pdf/1406.5387
---

## Statement

Assume the minimax detection-risk definition, $q=2$, and positive nondecreasing sequences $a_j$ and $\sigma_j$ with $a_j\to\infty$. Let $A,z_0>0$ and suppose $S=\{j:Aa_j^2<1\}$ is finite and nonempty. Define $\widetilde\eta_j^2=z_0^2\sigma_j^2(1-Aa_j^2)_+$ and assume
$$\sum_{j\ge1}\sigma_j^2\widetilde\eta_j^2=r^2,\qquad \sum_{j\ge1}a_j^2\sigma_j^2\widetilde\eta_j^2=1.$$
Then $\widetilde\eta\in\Theta_2(r)$ and minimizes $\sum_{j\ge1}\eta_j^4$ over $\Theta_2(r)$; the nonnegative minimizer is unique.

## Statement references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, §4.1, equations (4.4)–(4.8)](https://arxiv.org/pdf/1001.1853)

[Marteau and Sapatinas, *A unified treatment for non-asymptotic and asymptotic approaches to minimax signal detection*, §3.1](https://arxiv.org/pdf/1406.5387)

## Facts & Assumptions

**Given:** The $q=2$ class $\Theta_2(r)$, positive nondecreasing $a_j,\sigma_j$ with $a_j\to\infty$, a finite nonempty active set $S=\{j:Aa_j^2<1\}$, positive $A,z_0$, and the profile $\widetilde\eta_j^2=z_0^2\sigma_j^2(1-Aa_j^2)_+$ satisfying the two displayed constraints.

[F1] [[def-ip-minimax-detection-risk-and-separation]]: $\eta\in\Theta_2(r)$ means $\sum_j a_j^2\sigma_j^2\eta_j^2\le1$ and $\sum_j\sigma_j^2\eta_j^2\ge r^2$, with $(\sigma_j\eta_j)\in\ell^2$.

## Proof

1.1 Since $S$ is finite, $\widetilde\eta$ has finite support. The second constraint in the Given states $\sum_ja_j^2\sigma_j^2\widetilde\eta_j^2=1$, and the first states $\sum_j\sigma_j^2\widetilde\eta_j^2=r^2$. Thus [F1] gives $\widetilde\eta\in\Theta_2(r)$. [given, F1]

1.2 Fix any $\eta\in\Theta_2(r)$ and put $x_j=\eta_j^2$ and $\widetilde x_j=\widetilde\eta_j^2$. Both series $\sum_j\sigma_j^2x_j$ and $\sum_ja_j^2\sigma_j^2x_j$ are finite by [F1], so their displayed difference is absolutely convergent. For $j\notin S$, $1-Aa_j^2\le0$; since $x_j\ge0$, $$\sum_{j\in S}\sigma_j^2(1-Aa_j^2)x_j=\sum_{j\ge1}\sigma_j^2(1-Aa_j^2)x_j-\sum_{j\notin S}\sigma_j^2(1-Aa_j^2)x_j\ge r^2-A,$$ where the first sum is at least $r^2-A$ by [F1]. For the candidate, the same quantity equals $\sum_{j\in S}\sigma_j^2(1-Aa_j^2)\widetilde x_j=r^2-A$ by its two active constraints. Multiplying the inequality by $z_0^2$ therefore gives $\sum_j\widetilde x_jx_j\ge\sum_j\widetilde x_j^2$. [F1, given, algebra]

2.1 Expanding the difference of squared $\ell^2$ norms of the nonnegative sequences $x$ and $\widetilde x$ gives $$\sum_j\eta_j^4-\sum_j\widetilde\eta_j^4=\sum_j(x_j-\widetilde x_j)^2+2\sum_j\widetilde x_j(x_j-\widetilde x_j)\ge0$$ by step 1.2. The sums are well-defined: $\sum_jx_j^2\le(\sum_jx_j)^2$ and $\sum_jx_j=\sum_j\eta_j^2<\infty$ by [F1]. This proves minimality. [F1, step 1.2, algebra]

3.1 If equality holds in the objective, step 2.1 forces $\sum_j(x_j-\widetilde x_j)^2=0$, hence $x_j=\widetilde x_j$ for every $j$. Thus the nonnegative minimizer is unique. [step 2.1, algebra] ∎