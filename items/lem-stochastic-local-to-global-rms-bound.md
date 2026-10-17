---
id: lem-stochastic-local-to-global-rms-bound
kind: lemma
title: "Discrete stochastic local-to-global RMS stability bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-filtration-and-filtered-probability-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Theorem 10.6.3 and proof, printed pp. 361-365"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
    - title: "M. Tretyakov, Lecture Notes for a Mini-Course on Numerical Methods for SDEs, Theorem 6.1 and proof, PDF pp. 32-35"
      url: "https://www.math.chalmers.se/~cohend/MT2016/LNminicourseSDEv1.pdf"
---

## Statement

Let $N\ge1$, $0<h\le1$, and $Nh\le T$. Let $(\mathcal F_n)_{n=0}^N$ be a filtration as in [[def-filtration-and-filtered-probability-space]]. For every $n$, let $e_n,u_n,r_n$ be square-integrable $\mathbb R^d$-valued, $\mathcal F_n$-measurable random vectors; let $M_{n+1},Q_{n+1}$ be square-integrable and $\mathcal F_{n+1}$-measurable. Say $Z$ is orthogonal to $\mathcal F_n$ if $\mathbb E\langle H,Z\rangle=0$ for every square-integrable $\mathcal F_n$-measurable vector $H$. Suppose
$$e_0=0,\quad e_{n+1}=e_n+hu_n+r_n+M_{n+1}+Q_{n+1},$$
$$|u_n|\le L|e_n|,\qquad |r_n|\le C_0h^2,$$
and $M_{n+1},Q_{n+1}$ are orthogonal to $\mathcal F_n$, with
$$\mathbb E|M_{n+1}|^2\le C_1h\,\mathbb E|e_n|^2,\qquad \mathbb E|Q_{n+1}|^2\le C_1h^3.$$
Then $\mathbb E|e_N|^2\le C_T h^2$, where $C_T$ depends only on $T,L,C_0,C_1$ and not on $h$ or $N$. This is a local-to-global estimate for an order-one grid RMS error when the drift error is Lipschitz and the centered one-step defect has second moment $O(h^3)$.

## Facts & Assumptions

**Given:** The filtered probability space, the square-integrable vectors, the recurrence, orthogonality, and numerical bounds in the Statement.

[F1] [[def-filtration-and-filtered-probability-space]]: $\mathcal F_n\subseteq\mathcal F_{n+1}$ and each $\mathcal F_n$ is a sigma algebra on the underlying probability space.

## Proof

**Given:** The assumptions above.

1.1 Since $|e_n+hu_n|\le(1+Lh)|e_n|$ and $|r_n|\le C_0h^2$, the elementary inequality $2ab\le h a^2+h^{-1}b^2$ and $h\le1$ give $$\mathbb E|e_n+hu_n+r_n|^2\le(1+C h)\mathbb E|e_n|^2+C h^3.$$ Indeed, the square of $e_n+hu_n$ contributes at most $(1+Lh)^2|e_n|^2\le(1+C h)|e_n|^2$, its cross term with $r_n$ is bounded by $C h^2|e_n|\le C h|e_n|^2+C h^3$, and $|r_n|^2\le C h^4\le C h^3$. [given, F1, algebra]

2.1 Orthogonality makes the cross expectation between $e_n+hu_n+r_n$ and $M_{n+1}+Q_{n+1}$ zero. To bound the remaining cross term, put $a=|M_{n+1}|$ and $b=|Q_{n+1}|$; nonnegativity of $\mathbb E(a-\lambda b)^2$ for every real $\lambda$ implies $\mathbb E[ab]\le(\mathbb Ea^2)^{1/2}(\mathbb Eb^2)^{1/2}$. Hence $$2|\mathbb E\langle M_{n+1},Q_{n+1}\rangle|\le2(\mathbb E|M_{n+1}|^2)^{1/2}(\mathbb E|Q_{n+1}|^2)^{1/2}\le C h^2(\mathbb E|e_n|^2)^{1/2}\le C h\mathbb E|e_n|^2+C h^3.$$ The final inequality is $2ab\le a^2+b^2$ with factors proportional to $h^{1/2}(\mathbb E|e_n|^2)^{1/2}$ and $h^{3/2}$. Therefore the recurrence and step 1.1 imply $$\mathbb E|e_{n+1}|^2\le(1+C h)\mathbb E|e_n|^2+C h^3.$$ [given, step 1.1, algebra]

3.1 Iterating the inequality in step 2.1 from $e_0=0$ gives $$\mathbb E|e_N|^2\le C h^3\sum_{j=0}^{N-1}(1+C h)^j\le C h^3N e^{CNh}\le C_T h^2,$$ because $(1+Ch)^j\le e^{Cjh}\le e^{CT}$ and $Nh\le T$. Taking square roots proves the stated RMS estimate. This recurrence argument uses only finite algebraic estimates and the given orthogonality conditions. [given, step 2.1, algebra] ∎

