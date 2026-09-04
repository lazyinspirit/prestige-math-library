---
id: thm-lebesgue-density-theorem
kind: theorem
title: "Lebesgue density theorem"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-density-of-a-measurable-set-at-a-point, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-almost-every-point-is-a-lebesgue-point, lem-euclidean-balls-have-positive-finite-lebesgue-measure]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.6.24"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed., Chapter 7"
      url: "https://web.archive.org/web/20221029120924if_/https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $E\subseteq\mathbb{R}^n$ be Lebesgue measurable. Then

1. $\Theta(E,x)=1$ for almost every $x\in E$;
2. $\Theta(E,x)=0$ for almost every $x\in E^c$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a Lebesgue measurable set $E\subseteq\mathbb{R}^n$.

[L1] The density of $E$ at $x$ is $$\Theta(E,x)=\lim_{r\to0^+}\frac{\lambda(E\cap B(x,r))}{\lambda(B(x,r))}$$ when the limit exists. ([[def-density-of-a-measurable-set-at-a-point]])

[L2] Almost every point of a locally integrable function is a Lebesgue point. ([[thm-almost-every-point-is-a-lebesgue-point]])

[L3] Every Euclidean ball has positive finite measure. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

## Proof

**Proof technique:** direct.

1.1 Because $0\le\mathbf{1}_E\le1$ and balls have finite measure by [L3], the [L2, L3, given, algebra] indicator $\mathbf{1}_E$ is locally integrable. Apply [L2] to $\mathbf{1}_E$. There is a null set $N$ such that every $x\notin N$ is a Lebesgue point of $\mathbf{1}_E$. [L2, L3, given, algebra]

2.1 Let $x\in E\setminus N$. Then $\mathbf{1}_E(x)=1$, and for every $r>0$, [L1, step 1.1, algebra] $$\frac{1}{\lambda(B(x,r))} \int_{B(x,r)}|\mathbf{1}_E(y)-1|\,d\lambda(y) =1-\frac{\lambda(E\cap B(x,r))}{\lambda(B(x,r))}.$$ Since the left-hand side tends to $0$, [L1] gives $\Theta(E,x)=1$. [L1, step 1.1, algebra]

2.2 Let $x\in E^c\setminus N$. Then $\mathbf{1}_E(x)=0$, and for every $r>0$, [L1, step 1.1, algebra] $$\frac{1}{\lambda(B(x,r))} \int_{B(x,r)}|\mathbf{1}_E(y)-0|\,d\lambda(y) =\frac{\lambda(E\cap B(x,r))}{\lambda(B(x,r))}.$$ Again the left-hand side tends to $0$, so [L1] gives $\Theta(E,x)=0$. [L1, step 1.1, algebra]

3.1 Steps 2.1 and 2.2 hold outside the null set $N$, so they prove the two [step 1.1, step 2.1, step 2.2] density conclusions. [step 1.1, step 2.1, step 2.2] ∎
