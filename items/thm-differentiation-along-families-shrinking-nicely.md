---
id: thm-differentiation-along-families-shrinking-nicely
kind: theorem
title: "Differentiation holds along families shrinking nicely"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-family-shrinking-nicely-to-a-point, thm-almost-every-point-is-a-lebesgue-point]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 3.21"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.6.15"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$, let $A\subseteq\mathbb{R}^n$, and
suppose that for each $x\in A$ there is a family $(E_r(x))_{r>0}$ shrinking
nicely to $x$ with constant $\alpha_x>0$. Then for almost every $x\in A$,
$$\lim_{r\to0^+}\frac{1}{\lambda(E_r(x))}\int_{E_r(x)}|f(y)-f(x)|\,d\lambda(y)=0,$$
hence
$$\lim_{r\to0^+}\frac{1}{\lambda(E_r(x))}\int_{E_r(x)}f(y)\,d\lambda(y)=f(x).$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a locally integrable function $f$, a set $A\subseteq\mathbb{R}^n$, and for each $x\in A$ a family $(E_r(x))_{r>0}$ shrinking nicely to $x$.

[L1] Shrinking nicely means that for each $x\in A$ there is a constant $\alpha_x>0$ such that $$E_r(x)\subseteq B(x,r) \qquad\text{and}\qquad \lambda(E_r(x))\ge\alpha_x\,\lambda(B(x,r))$$ for every $r>0$. ([[def-family-shrinking-nicely-to-a-point]])

[L2] Almost every point of $f$ is a Lebesgue point. ([[thm-almost-every-point-is-a-lebesgue-point]])

## Proof

**Proof technique:** direct.

1.1 Let $x\in A$ be a Lebesgue point of $f$, as supplied by [L2]. For every [L1, L2, given, algebra] $r>0$, [L1] gives $$\frac{1}{\lambda(E_r(x))}\int_{E_r(x)}|f(y)-f(x)|\,d\lambda(y) \le\frac{1}{\alpha_x\,\lambda(B(x,r))} \int_{B(x,r)}|f(y)-f(x)|\,d\lambda(y).$$ [L1, L2, given, algebra]

2.1 Because $x$ is a Lebesgue point, the right-hand side of step 1.1 tends to [step 1.1] $0$ as $r\to0^+$. Therefore the left-hand side also tends to $0$. [step 1.1]

3.1 Using [step 2.1, algebra] $$\left|\frac{1}{\lambda(E_r(x))}\int_{E_r(x)}f(y)\,d\lambda(y)-f(x)\right| \le\frac{1}{\lambda(E_r(x))}\int_{E_r(x)}|f(y)-f(x)|\,d\lambda(y),$$ step 2.1 immediately gives the second limit as well. [step 2.1, algebra]

4.1 Step 3.1 holds at every Lebesgue point of $f$, hence for almost every $x\in A$. [L2, step 3.1] ∎
