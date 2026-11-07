---
id: lem-exponential-family-high-derivative-separation
kind: lemma
title: High derivatives of a positive exponential family separate large exponents
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-derivative-of-exponential
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
  - thm-extreme-value-metric
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Proof of Theorem 1.10, §4.1, equations (4.1)–(4.2), PDF pp. 23–24"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Proof of Theorem 1.10, §4.1, equations (4.1)–(4.2); full relevant passage inspected"
---

## Statement

Let $d\ge1$, let $I=[a,b]$ be a compact interval with $a<b$, and let $g:I\to(1,\infty)$ have continuous derivatives through order $d+1$ and satisfy $g'(x)\ne0$ on $I$. Define $H_d(x,s)=\partial_x^d(g(x)^s)$ for real $s$, using $g(x)^s=\exp(s\log g(x))$. There are constants $B,C>0$ such that $\partial_s H_d(x,s)$ has one constant sign on $I\times[B,\infty)$ and $|\partial_sH_d(x,s)|\ge C$ there. Consequently,

$$|H_d(x,s)-H_d(x,t)|\ge C|s-t|\qquad(x\in I,\ s,t\ge B).$$

## Statement references

[Bergelson–Moreira, proof of Theorem 1.10](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)

## Facts & Assumptions

**Given:** An integer $d\ge1$, a compact interval $I=[a,b]$, and $g:I\to(1,\infty)$ with continuous derivatives through order $d+1$ and nowhere-zero first derivative.

[F1] The scalar chain rule differentiates a composite at a point ([[thm-chain-rule]]).

[F2] Products, sums, and quotients with nonzero denominator obey the derivative algebra rules ([[thm-algebra-of-derivatives]]).

[F3] The exponential is smooth with derivative itself ([[thm-derivative-of-exponential]]), and the natural logarithm has derivative $1/x$ on $(0,\infty)$ ([[thm-logarithm-derivative-and-integral]]).

[F4] The mean value theorem gives $f(t)-f(s)=f'(c)(t-s)$ for some $c$ between $s$ and $t$ when $f$ is continuous on the closed interval and differentiable inside ([[cor-mean-value-theorem]]).

[F5] A continuous real-valued function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]]).

## Proof

1.1 Put $L(x)=\log g(x)$, so $L(x)>0$ and [F1]–[F3] give $L'(x)=g'(x)/g(x)$. Define $P_0(x,s)=1$ and recursively $P_{r+1}(x,s)=sL'(x)P_r(x,s)+\partial_xP_r(x,s)$. The chain and product rules show by induction that $\partial_x^r\exp(sL(x))=\exp(sL(x))P_r(x,s)$. [given, F1, F2, F3]

2.1 The recurrence shows that $P_d(x,s)$ is a degree-$d$ polynomial in $s$ with leading coefficient $L'(x)^d$: the term $sL'P_r$ raises the degree by one and $\partial_xP_r$ does not. Therefore $\partial_sH_d(x,s)=\exp(sL(x))Q_x(s)$, where $Q_x(s)=L(x)P_d(x,s)+\partial_sP_d(x,s)$ is a degree-$d$ polynomial with leading coefficient $L(x)L'(x)^d$. [step 1.1, algebra]

3.1 The leading coefficient is continuous and nowhere zero on the connected compact interval $I$, so its sign is constant and its modulus has positive minimum $c_0$. All lower coefficients of $Q_x$ are continuous and bounded on $I$ by [F5]. Choose $B\ge1$ large enough that for all $x\in I$ and $s\ge B$ their total contribution has modulus at most $(c_0/2)s^d$. Since $L(x)>0$, $\exp(sL(x))\ge1$, and thus $\partial_sH_d$ has the fixed sign of $L'(x)^d$ and modulus at least $c_0/2$. [F5, step 2.1, choose, algebra]

4.1 For fixed $x\in I$, apply [F4] to $s\mapsto H_d(x,s)$ on the interval between $s$ and $t$. Its derivative has the fixed sign and modulus at least $C=c_0/2$ by step 3.1, so $|H_d(x,s)-H_d(x,t)|\ge C|s-t|$. This proves both conclusions. [F4, step 3.1] ∎
