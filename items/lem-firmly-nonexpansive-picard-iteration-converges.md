---
id: lem-firmly-nonexpansive-picard-iteration-converges
kind: lemma
title: "Picard iterates of a firmly nonexpansive map converge in finite dimensions"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
axiom_base: "ZF finite-dimensional real analysis via the cited choice-free Bolzano–Weierstrass result; no additional choice principle."
deps:
  - def-euclidean-inner-product
  - cor-bolzano-weierstrass-in-rn
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jonathan Eckstein and Dimitri P. Bertsekas, On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators, §§2–3"
      url: "https://web.mit.edu/dimitrib/www/Eckstein_Bertsekas_D-R.pdf"
---

## Statement

Let $T:E\to E$ be firmly nonexpansive on $E=\mathbb R^n$, suppose
$\operatorname{Fix}(T)=\{p:T(p)=p\}$ is nonempty, and start at any $w_0$.
Then the Picard sequence $w_{k+1}=T(w_k)$ converges to a fixed point of $T$.

## Facts & Assumptions

**Given:** The map $T$, a fixed point $p$, and $w_0\in E$.

[A1] The map is firmly nonexpansive, its fixed-point set is nonempty, and the start is in $E$.


[F1] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm is a norm and satisfies Cauchy–Schwarz.

[F2] [[cor-bolzano-weierstrass-in-rn]]: for $n\ge1$, every bounded sequence in $\mathbb R^n$ has a convergent subsequence.

[F3] [[def-euclidean-inner-product]]: $\mathbb R^0$ consists of the single zero vector.

## Proof


1.1 If $n=0$, [F3] gives $E=\{0\}$ and the nonempty fixed-point set forces $T(0)=0$; since $w_0=0$, every iterate equals the fixed point. It remains to consider $n\ge1$. Firm nonexpansiveness applied to $w_k$ and a fixed point $p$ gives $\|w_{k+1}-p\|_2^2\le\langle w_{k+1}-p,w_k-p\rangle$. Expanding $w_k-p=(w_{k+1}-p)+(w_k-w_{k+1})$ and rearranging yields $$\|w_{k+1}-p\|_2^2+\|w_{k+1}-w_k\|_2^2\le\|w_k-p\|_2^2.$$ Summing this inequality shows that the distances to $p$ are nonincreasing, the sequence is bounded, and $\sum_k\|w_{k+1}-w_k\|_2^2<\infty$, so the increments tend to zero. [A1, given, F1, F3, algebra]

2.1 By [F2], some subsequence $w_{k_j}$ converges to $\bar w$. Firm nonexpansiveness and [F1] imply $T$ is 1-Lipschitz, hence continuous. Since $w_{k_j+1}-w_{k_j}\to0$, continuity gives $T(\bar w)=\bar w$. [A1, F1, F2, step 1.1, algebra]

3.1 Apply the inequality of step 1.1 with the fixed point $\bar w$ in place of $p$. The distances $\|w_k-\bar w\|_2$ are nonincreasing, and along the subsequence $k_j$ they tend to zero. A nonincreasing nonnegative sequence with a subsequence tending to zero tends to zero; thus $w_k\to\bar w$. [A1, step 1.1, step 2.1, algebra] ∎
