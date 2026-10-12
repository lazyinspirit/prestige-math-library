---
id: lem-radial-majorized-kernels-recover-lebesgue-point-values
kind: lemma
title: Lebesgue-point convergence for radial-majorized kernels
deps: ["def-lebesgue-point-and-lebesgue-set", "def-l-one-approximate-identity-on-rn", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "lem-euclidean-balls-have-positive-finite-lebesgue-measure", "thm-linear-change-of-variables-for-lebesgue-measure", "thm-borel-sets-are-lebesgue-measurable", "def-countable-choice", "cor-c-one-change-of-variables-for-l-one-functions"]
status: published
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Problem 15.8, p.421; explicit dyadic proof replacing the hint
---

## Statement

Assume countable choice. Let $n\ge1$ and let $K:\mathbb R^n\to\mathbb C$ be measurable, with $\int K=1$ and $|K(y)|\le\Phi(|y|)$, where $\Phi:[0,\infty)\to[0,\infty)$ is bounded, nonincreasing, and $J:=\int\Phi(|y|)\,dy<\infty$. For $f\in L^1(\mathbb R^n;\mathbb C)$ and a point $x$ with specified Lebesgue value $a\in\mathbb C$, meaning $A(r):=\int_{|y|<r}|f(x-y)-a|\,dy=o(r^n)$, one has
$$\int\varepsilon^{-n}K(y/\varepsilon)f(x-y)\,dy\longrightarrow a\qquad(\varepsilon\downarrow0).$$
The integral is absolutely convergent for every $\varepsilon>0$. The value $a$ is the Lebesgue-point value, not an arbitrary changed value of the representative; this is the componentwise version of [[def-lebesgue-point-and-lebesgue-set]].

## Facts & Assumptions

**Given:** The stated data and [[def-countable-choice]].

[F1] Open subsets of Euclidean space are Lebesgue measurable under countable choice ([[thm-borel-sets-are-lebesgue-measurable]]).

[F2] Measurable balls have positive finite measure by the cube bounds in [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]].

[F3] Linear dilation scales the measure of a measurable set by its absolute determinant ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F4] Tonelli gives countable nonnegative summation under the integral ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F5] Complex Lebesgue substitution holds for C1 diffeomorphisms, including translations, reflections and positive dilations ([[cor-c-one-change-of-variables-for-l-one-functions]]).

## Proof

1.1 Balls are open by the triangle inequality, so F1 establishes measurability before the cube bounds F2 are used. Put $v_n=|B(0,1)|\in(0,\infty)$. F3 gives $|B(0,r)|=v_nr^n$ and $|B(0,r)\setminus B(0,r/2)|=v_n(1-2^{-n})r^n$. On that annulus $\Phi(|y|)\ge\Phi(r)$; hence $r^n\Phi(r)\le J_r/[v_n(1-2^{-n})]\to0$ as $r\to\infty$, where $J_r$ is the integral over $|y|\ge r/2$. Integrability implies these tails tend to zero, by countable additivity on explicit integer annuli. Also disjoint annuli $2^{j-1}\le|y|<2^j$, $j\ge0$, give $\sum_{j\ge0}2^{jn}\Phi(2^j)\le J/[v_n(1-2^{-n})]$. [F1, F2, F3, F4, given]

1.2 Write $H(y)=|f(x-y)-a|$. Boundedness of $\Phi$ makes the integral with $f$ absolutely convergent: it is at most $\varepsilon^{-n}\Phi(0)\|f\|_1$ by reflection and translation of Lebesgue measure. Scaling the defining integral of K gives $\int\varepsilon^{-n}K(y/\varepsilon)\,dy=1$. Fact F5 applies to these affine diffeomorphisms and supplies both substitutions. Thus the absolute error is at most $\int\varepsilon^{-n}\Phi(|y|/\varepsilon)H(y)\,dy$. [F5, given]

2.1 Given $\eta>0$, fix $\delta>0$ such that $A(r)\le\eta r^n$ for $0<r<\delta$. For $\varepsilon<\delta/2$, the central ball contributes at most $\Phi(0)\varepsilon^{-n}A(\varepsilon)\le\eta\Phi(0)$. Each dyadic shell $2^j\varepsilon\le|y|<2^{j+1}\varepsilon$ whose lower radius is below $\delta/2$ contributes at most $\varepsilon^{-n}\Phi(2^j)A(2^{j+1}\varepsilon)\le\eta2^n2^{jn}\Phi(2^j)$. Their sum is bounded by $\eta C$, where $C=\Phi(0)+2^nJ/[v_n(1-2^{-n})]$, independently of $\varepsilon$. These regions cover $|y|<\delta/2$. [F4, step 1.1, step 1.2, given]

3.1 On $|y|\ge\delta/2$, the contribution from $|f(x-y)|$ is at most $\varepsilon^{-n}\Phi(\delta/(2\varepsilon))\|f\|_1\to0$ by step 1.1. The contribution from $|a|$ is at most $|a|\int_{|z|\ge\delta/(2\varepsilon)}\Phi(|z|)\,dz\to0$ by integrability and scaling. The total error therefore has limit superior at most $\eta C$. Letting $\eta\downarrow0$ proves convergence. The proof uses the stated countable-choice Euclidean measure interfaces and explicit shells, with no full AC or choice of witnesses at different points. [F5, step 1.1, step 1.2, step 2.1] ∎
