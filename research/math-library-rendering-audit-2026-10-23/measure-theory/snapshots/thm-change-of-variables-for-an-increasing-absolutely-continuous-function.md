---
id: thm-change-of-variables-for-an-increasing-absolutely-continuous-function
kind: theorem
title: "Change of variables for an increasing absolutely continuous function"
status: published
origin: pipeline
landmark: true
deps: [def-countable-choice, def-dependent-choice, def-indefinite-lebesgue-integral-on-a-compact-interval, thm-absolutely-continuous-functions-have-luzin-property-n, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-monotone-class, thm-monotone-convergence-for-the-integral, thm-lebesgue-outer-regularity-for-arbitrary-subsets]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Christopher Heil, Introduction to Real Analysis, Corollary 6.5.8"
      url: "https://doi.org/10.1007/978-3-030-26903-6"
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. Let $g:[a,b]\to\mathbb R$ be increasing and absolutely continuous, and let
$f\in L^1[g(a),g(b)]$. Then $f(g)g'\in L^1[a,b]$ and
$$\int_{g(a)}^{g(b)}f(y)\,dy=\int_a^bf(g(x))g'(x)\,dx.$$

## Facts & Assumptions

**Given:** Countable choice, dependent choice, increasing $g\in AC[a,b]$, and $f\in L^1[g(a),g(b)]$.

## Proof

**Proof technique:** direct.

1.1 First take $f=\mathbf1_{(r,s)}$. The clipped function $(g-r)^+-(g-s)^+$ is AC; its derivative is $\mathbf1_{(r,s)}(g)g'$ almost everywhere (on a level set of an AC increasing function, $g'=0$ almost everywhere). The sharp FTC evaluates its integral as the length of $(r,s)\cap[g(a),g(b)]$. [given]

2.1 The interval-indicator identity in step 1.1 extends first to the algebra of finite unions of intervals and then, by [[thm-monotone-class]], to all Borel indicators. If $N$ is Lebesgue null, [[thm-lebesgue-outer-regularity-for-arbitrary-subsets]] covers it by open sets $O$ of arbitrarily small length. The open-set case then makes $g^{-1}(N)\cap\{g'>0\}$ null: on $\{g'\ge1/k\}$ its outer measure is at most $k\int_{g^{-1}(O)}g'\le k\lambda(O)$, and take the union over $k$. Every Lebesgue-measurable $f$ has a Borel representative off a null set, so this observation makes $f(g)g'$ agree almost everywhere with a measurable weighted composition. Simple-function approximation and [[thm-monotone-convergence-for-the-integral]] now extend the identity to every nonnegative measurable $f$. [step 1.1]

3.1 Apply step 2.1 to $f^+$ and $f^-$. Applying it also to $|f|$ gives $\int_a^b|f(g(x))|g'(x)\,dx=\int_{g(a)}^{g(b)}|f(y)|\,dy<\infty$, so $f(g)g'\in L^1$ and subtraction gives the displayed formula. Constant and singleton cases have both integrals zero. This is also the conclusion of the cited Heil corollary. [step 2.1, algebra] ∎
