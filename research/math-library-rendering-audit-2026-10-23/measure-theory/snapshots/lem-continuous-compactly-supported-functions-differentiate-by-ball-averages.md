---
id: lem-continuous-compactly-supported-functions-differentiate-by-ball-averages
kind: lemma
title: "Continuous compactly supported functions are recovered by small ball averages"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-ball-average-operator-on-r-n, def-c-c-and-c-c-infinity-on-rn, def-countable-choice]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.6.16"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 3.18"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $g\in C_c(\mathbb{R}^n)$ and let $x\in\mathbb{R}^n$. Then
$$\lim_{r\to0^+}A_rg(x)=g(x).$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a function $g\in C_c(\mathbb{R}^n)$, and a point $x\in\mathbb{R}^n$.

[L1] The class $C_c(\mathbb{R}^n)$ consists of continuous functions on $\mathbb{R}^n$ with compact support. ([[def-c-c-and-c-c-infinity-on-rn]])

[L2] The ball average is $$A_rg(x)=\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}g(y)\,d\lambda(y).$$ ([[def-ball-average-operator-on-r-n]])

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$. Since $g$ is continuous at $x$ by [L1], there is [L1, given] $\delta>0$ such that $$\|y-x\|_2<\delta\implies |g(y)-g(x)|<\varepsilon.$$ [L1, given]

2.1 For $0<r<\delta$, every $y\in B(x,r)$ satisfies the hypothesis of step 1.1, [step 1.1, L2, algebra] so $$|A_rg(x)-g(x)| \le\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}|g(y)-g(x)|\,d\lambda(y) \le\varepsilon.$$ [step 1.1, L2, algebra]

3.1 Because step 2.1 holds for every $\varepsilon>0$, one has [step 2.1] $A_rg(x)\to g(x)$ as $r\to0^+$. [step 2.1] ∎
