---
id: def-centered-and-uncentered-hardy-littlewood-maximal-functions
kind: definition
title: "The centered and uncentered Hardy-Littlewood maximal functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-countable-choice, def-ball-average-operator-on-r-n]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 3.17 and Exercise 22"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Terence Tao, An Introduction to Measure Theory, Theorem 1.6.20"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$. The **centered
Hardy-Littlewood maximal function** of $f$ is
$$Mf(x):=\sup_{r>0} A_r|f|(x) =\sup_{r>0}\frac{1}{\lambda(B(x,r))}\int_{B(x,r)}|f(y)|\,d\lambda(y).$$

The **uncentered Hardy-Littlewood maximal function** of $f$ is
$$M^*f(x):=\sup_{x\in B(y,r)} \frac{1}{\lambda(B(y,r))}\int_{B(y,r)}|f(z)|\,d\lambda(z),$$
where the supremum is over all Euclidean balls containing $x$.

Both functions take values in $[0,\infty]$.
