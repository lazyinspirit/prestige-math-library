---
id: thm-qa-23-real-polynomial-completion
kind: theorem
title: Completion of a bounded real parity polynomial
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - lem-qa-23-positive-polynomial-complement-factorization
  - def-qa-23-qsp-admissible-polynomial-pair
  - def-complex-conjugate-real-imaginary-part-and-modulus
proof_strategy: direct
axiom_use: "None; the proof is polynomial algebra over the real and complex fields."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Theorem 5 and Lemma 6, PDF pp. 10–12."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 29 §29.2, Lemma 29.1, PDF pp. 144–146."
---

## Statement

Let $d\ge0$ and let $p\in\mathbb R[x]$ have degree at most $d$, parity $d\bmod2$, and $|p(x)|\le1$ for every $x\in[-1,1]$. Then there is a QSP-admissible pair $P,Q$ of degree bound $d$ such that $\operatorname{Re}P(x)=p(x)$ on $[-1,1]$. In fact, the completion is exact, so for every $\delta>0$ it also satisfies $|\operatorname{Re}P(x)-p(x)|\le\delta$.

## Facts & Assumptions

**Given:** An integer $d\ge0$ and a real polynomial $p$ with the stated degree, parity, and interval bound.

[F1] [[lem-qa-23-positive-polynomial-complement-factorization]]: an even real polynomial $R$ of degree at most $2d$ that is nonnegative on $[-1,1]$ has $R=B^2+(1-x^2)C^2$ with the required degree bounds and parities.

[F2] [[def-qa-23-qsp-admissible-polynomial-pair]]: admissibility requires the stated degree/parity bounds and $PP^*+(1-x^2)QQ^*=1$.

[F3] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: conjugation fixes real coefficients and sends $i$ to $-i$.

## Proof

1.1 Put $R=1-p^2$. Since $p(-x)=(-1)^dp(x)$, $p^2$ and hence $R$ are even. Its degree is at most $2d$, and the interval bound on $p$ gives $R(x)\ge0$ for every $x\in[-1,1]$. [given, algebra]

2.1 Apply [F1] to obtain real polynomials $B,C$ with $R=B^2+(1-x^2)C^2$, degree bounds $d,d-1$, and parities $d,d-1$. [F1, step 1.1]

3.1 Define $P=p+iB$ and $Q=C$. By [F3], $P^*=p-iB$ and $Q^*=C$, so $PP^*=p^2+B^2$ and $QQ^*=C^2$. Their sum in the admissibility identity is therefore $p^2+B^2+(1-x^2)C^2=p^2+R=1$. The degree bounds and parities of $p,B,C$ also give the required bounds and parities of $P,Q$; hence the pair is admissible by [F2]. [F2, F3, given, step 2.1, algebra]

4.1 For real $x$, the real part of $P(x)=p(x)+iB(x)$ is exactly $p(x)$. Thus the uniform error is zero and is at most every $\delta>0$. [step 3.1, algebra] ∎


