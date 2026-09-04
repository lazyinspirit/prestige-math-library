---
id: prop-hardy-littlewood-maximal-function-is-l-infinity-bounded
kind: proposition
title: "The centered maximal operator is bounded on $L^\\infty$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-countable-choice, def-l-infinity-on-a-measure-space]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Corollary 6.35"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f\in L^\infty(\mathbb{R}^n)$. Then
$$Mf(x)\le\|f\|_\infty\qquad(x\in\mathbb{R}^n).$$
In particular, $M$ is of strong type $(\infty,\infty)$ with operator norm at
most $1$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a function $f\in L^\infty(\mathbb{R}^n)$.

[L1] The centered maximal function is $$Mf(x)=\sup_{r>0}\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}|f(y)|\,d\lambda(y).$$ ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]])

[L2] The $L^\infty$ norm is the essential supremum. In particular, $|f|\le\|f\|_\infty$ almost everywhere. ([[def-l-infinity-on-a-measure-space]])

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\mathbb{R}^n$ and $r>0$. By [L2], [L1, L2, given, algebra] $$\int_{B(x,r)}|f(y)|\,d\lambda(y)\le \|f\|_\infty\,\lambda(B(x,r)).$$ Dividing by $\lambda(B(x,r))$ gives $$A_r|f|(x)\le\|f\|_\infty.$$ [L1, L2, given, algebra]

2.1 Taking the supremum of the inequality from step 1.1 over all $r>0$ yields [step 1.1, L1, algebra] $Mf(x)\le\|f\|_\infty$. Since $x$ was arbitrary, the centered maximal operator is bounded on $L^\infty$ with norm at most $1$. [step 1.1, L1, algebra] ∎
