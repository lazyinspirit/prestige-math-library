---
id: lem-dobrushin-zero-sum-l1-coefficient
kind: lemma
title: "Column-overlap formula for the zero-sum ℓ1 coefficient"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-finite-column-stochastic-matrix-and-law, lem-column-stochastic-l1-nonexpansive]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ilse C. F. Ipsen and Teresa M. Selee, Ergodicity Coefficients Defined by Vector Norms"
      url: "https://ipsen.math.ncsu.edu/ps/simax75294.pdf"
      locator: "§3, Theorem 3.7 and Corollary 3.9, PDF pp. 12–13; row-distance and overlap identities for stochastic matrices, transposed here to columns."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
axiom_use: "No choice principle is used; all vectors and sums are finite."
---

## Statement

For a finite column-stochastic matrix $P$, define $\delta(P)=\sup\{\|Pz\|_1:z\in H,\ \|z\|_1=1\}$ when $n\ge2$, and set $\delta(P)=0$ when $n=1$ (then $H=\{0\}$). If $p_j$ denotes column $j$, then

$$\delta(P)=\frac12\max_{j,k}\|p_j-p_k\|_1=1-\min_{j,k}\sum_i\min(P_{ij},P_{ik}).$$

Thus $\delta(P)$ is a computable induced contraction factor on the zero-sum subspace $H$; for every $z\in H$, $\|Pz\|_1\le\delta(P)\|z\|_1$.

## Facts & Assumptions

**Given:** A finite column-stochastic matrix $P$ and the zero-sum subspace $H$ from [[def-finite-column-stochastic-matrix-and-law]].

[F1] [[def-finite-column-stochastic-matrix-and-law]]: every column $p_j$ is nonnegative with coordinate sum one, $H=\{z:\sum_i z_i=0\}$, and $\|z\|_1=\sum_i|z_i|$.

[F2] [[lem-column-stochastic-l1-nonexpansive]]: P preserves coordinate sums and satisfies $\|Pz\|_1\le\|z\|_1$ for every real vector z.

## Proof

**Given:** The finite matrix $P$ and its columns $p_1,\ldots,p_n$.

**Proof technique:** decompose a zero-sum vector into positive and negative probability masses.

1.1 Let $z\in H$ with $\|z\|_1=1$. Write $z=z^+-z^-$ coordinatewise, where $z_i^+=\max(z_i,0)$ and $z_i^- =\max(-z_i,0)$. Since $\sum_i z_i=0$, the positive and negative masses agree, and their sum is one; hence $\sum_i z_i^+=\sum_i z_i^-=1/2$. Therefore $u=2z^+$ and $v=2z^-$ are probability vectors and $Pz=(Pu-Pv)/2$. [F1, given, algebra]

2.1 We have $Pu=\sum_j u_jp_j$ and $Pv=\sum_kv_kp_k$. Thus $Pz=\frac12\sum_{j,k}u_jv_k(p_j-p_k)$. The coefficients $u_jv_k$ are nonnegative and sum to one, so the triangle inequality gives $\|Pz\|_1\le\frac12\max_{j,k}\|p_j-p_k\|_1$. Taking the supremum over such $z$ proves the upper bound. [step 1.1, F1, algebra]

3.1 If $n\ge2$ and the maximum is positive, a maximizing pair has $j\ne k$; if the maximum is zero, any distinct pair maximizes it. Choose such a distinct pair and set $z=(e_j-e_k)/2$. Then $z\in H$, $\|z\|_1=1$, and $Pz=(p_j-p_k)/2$, so the supremum is at least $\frac12\max_{j,k}\|p_j-p_k\|_1$. If $n=1$, both sides are zero by definition. This proves the first equality. [F1, step 2.1, choose, algebra]

4.1 For two nonnegative probability columns $a,b$, $|a_i-b_i|=a_i+b_i-2\min(a_i,b_i)$. Summing gives $\frac12\|a-b\|_1=1-\sum_i\min(a_i,b_i)$. Apply this to every pair of columns; taking the maximum of the left side is one minus the minimum overlap on the right. [F1, step 3.1, algebra]

5.1 If $n\ge2$, [F2] bounds every norm in the defining supremum by one, so $0\le\delta(P)\le1$; if $n=1$, $\delta(P)=0$ by definition. For nonzero $z\in H$, apply the definition of $\delta(P)$ to $z/\|z\|_1$ and use homogeneity; for $z=0$ the inequality is immediate. Thus $\|Pz\|_1\le\delta(P)\|z\|_1$ on all of $H$. [F2, step 3.1, step 4.1, given, algebra] ∎
