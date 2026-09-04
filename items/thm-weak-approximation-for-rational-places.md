---
id: thm-weak-approximation-for-rational-places
kind: theorem
title: "Weak approximation for rational places"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-place-of-the-rationals, thm-product-formula-for-the-rationals, thm-chinese-remainder-theorem, thm-rationals-countable, lem-q-and-irrationals-dense-r]
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Theorem 7.27"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Andrew V. Sutherland, 18.782 weak approximation notes"
      url: "https://math.mit.edu/classes/18.782/2013fa/"
pipeline_run: null
---

## Statement

Let $v_1,\dots,v_r$ be distinct places of $\mathbb Q$. For each $i$, let
$a_i \in \mathbb Q$, and let $\varepsilon_i > 0$. Then there exists
$x \in \mathbb Q$ such that

$$|x-a_i|_{v_i} < \varepsilon_i \qquad (1 \le i \le r).$$

Consequently, after completing $\mathbb Q$ at these places, the diagonal copy of
$\mathbb Q$ is dense in the finite product of the local fields.

## Facts & Assumptions

**Given:** Distinct places $v_1,\dots,v_r$, rational targets $a_1,\dots,a_r$, and positive reals $\varepsilon_1,\dots,\varepsilon_r$.

[L1] The places of $\mathbb Q$ are the archimedean place and the prime places ([[def-place-of-the-rationals]]).

[L2] Simultaneous congruences modulo pairwise coprime integers have a solution ([[thm-chinese-remainder-theorem]]).

## Proof

**Proof technique:** constructive.

1.1 Reorder the places so that $v_1,\dots,v_s$ are the finite places $p_1,\dots,p_s$ and, if the archimedean place occurs, it is $v_r = \infty$. Choose integers $N_i \ge 1$ with $p_i^{-N_i} < \varepsilon_i$ for $1 \le i \le s$. Let $D_0$ be a common positive denominator of the finite targets $a_1,\dots,a_s$, and replace it by $D := T D_0$, where $T$ is a large integer coprime to every $p_i$; this keeps every $Da_i$ integral and lets us later make $M/D$ as small as we wish. [L1, given, construct]

2.1 Put $$M := \prod_{i=1}^s p_i^{N_i + v_{p_i}(D)}.$$ By [L2], there is an integer $y$ such that $$y \equiv Da_i \pmod{p_i^{N_i + v_{p_i}(D)}} \qquad (1 \le i \le s).$$ Then for $x_0 := y/D$ one has $v_{p_i}(x_0-a_i) \ge N_i$, hence $|x_0-a_i|_{p_i} \le p_i^{-N_i} < \varepsilon_i$ for every finite place in the list. [L2, step 1.1, construct]

3.1 If $\infty$ is not among the chosen places, then $x := x_0$ works. Otherwise every number of the form $$x_k := x_0 + kM/D$$ has the same finite-place congruence conditions as $x_0$, because $$v_{p_i}(M/D)=N_i \qquad (1 \le i \le s).$$ By taking $T$ in step 1.1 so large that $M/D < \varepsilon_r$, the arithmetic progression $x_0 + \mathbb Z(M/D)$ has mesh smaller than $\varepsilon_r$, so some integer $k$ satisfies $|x_k-a_r|_\infty < \varepsilon_r$. [step 1.1, step 2.1, cases]

4.1 The chosen $x$ satisfies all requested inequalities. The density formulation is the same statement with the local targets first approximated by rational elements in each factor. [step 2.1, step 3.1, discharge-construct] ∎
