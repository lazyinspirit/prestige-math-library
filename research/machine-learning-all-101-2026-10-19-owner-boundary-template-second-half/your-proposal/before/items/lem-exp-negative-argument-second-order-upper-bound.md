---
id: lem-exp-negative-argument-second-order-upper-bound
kind: lemma
title: Second-order exponential upper bound on the nonpositive axis
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-real-exponential-function-and-e
  - thm-derivative-of-exponential
  - thm-exponential-is-strictly-increasing
  - lem-mean-value-theorem-on-closed-interval
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§11.4, Eq. (11.14), Theorem 11.2 proof, PDF pp. 164–165 / printed pp. 155–156."
---

## Statement

For every real $z\le0$,
$$
\exp(z)\le1+z+\frac{z^2}{2}.
$$

## Facts & Assumptions

**Given:** A real number $z\le0$ and the real exponential function.

[F1] [[def-real-exponential-function-and-e]]: $\exp(0)=1$.

[F2] [[thm-derivative-of-exponential]]: the real exponential is $C^\infty$, with derivative $(\exp)'=\exp$.

[F3] [[thm-exponential-is-strictly-increasing]]: $\exp$ is strictly increasing on $\mathbb R$.

[F4] [[lem-mean-value-theorem-on-closed-interval]]: a function continuous on $[a,b]$ and differentiable on $(a,b)$ has $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$.

## Proof

1.1 If $z=0$, the claim is equality. For $z<0$, fix any $a<b\le0$ and set $g(t)=1+t-\exp(t)$. By [F2], $g'(t)=1-\exp(t)\ge0$ for $t\le0$, because [F3] and [F1] give $\exp(t)\le\exp(0)=1$. Applying [F4] to $g$ on $[a,b]$ shows $g(b)-g(a)=g'(c)(b-a)\ge0$, so $g$ is nondecreasing on $(-\infty,0]$. [given, F1, F2, F3, F4, construct]

2.1 For the remaining case $z<0$, step 1.1 shows $g(t)\le0$ for every $t\le0$. Set $f(t)=1+t+t^2/2-\exp(t)$; then $f'(t)=g(t)$. Applying [F4] on $[z,0]$ gives $f(0)-f(z)=g(c)(-z)\le0$. Since $f(0)=0$, $f(z)\ge0$, which is the required inequality. [given, F1, F2, F4, step 1.1, algebra] ∎
