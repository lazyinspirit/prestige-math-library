---
id: cex-stolz-cesaro-converse-fails
kind: counterexample
title: "$a_k = (-1)^k$, $b_k = k$ have $a_k/b_k \\to 0$ while the difference quotient oscillates, so Stolz-Cesaro has no converse"
status: draft
origin: session
deps: [thm-stolz-cesaro, lem-alternating-sequence, fs-bounded-implies-convergent, thm-algebra-of-limits, cor-archimedean-reciprocal, thm-of-archimedean, def-monotone-sequence, def-bounded-set, def-real-limit, def-sequence, lem-limit-of-tail, lem-limit-unique, lem-of-abs-value, lem-of-inverse-positive, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Stolz-Cesàro theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stolz%E2%80%93Ces%C3%A0ro_theorem"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the converse of [[thm-stolz-cesaro]]. That is: if $(b_k)$ is
strictly increasing with range not bounded above and the quotients $a_k/b_k$
converge, then the difference quotients
$(a_{k+1}-a_k)/(b_{k+1}-b_k)$ converge too.

The witness is $a_k = s_k$, the alternating sequence of
[[lem-alternating-sequence]] usually written $(-1)^k$, and $b_k = k$. Then
$b_0 = 0$, so the quotient $a_k/b_k$ is formed for $k \ge 1$ only, exactly as
[[thm-stolz-cesaro]] is stated; and there

$$\frac{a_k}{b_k} = \frac{s_k}{k}, \qquad \Big|\frac{a_k}{b_k}\Big| = \frac1k \longrightarrow 0,$$

while the difference quotient is

$$\frac{a_{k+1}-a_k}{b_{k+1}-b_k} \;=\; s_{k+1} - s_k \;=\; -2 s_k,$$

which takes the value $-2$ at even $k$ and $2$ at odd $k$ and does not converge.

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$; the sequences $a_k := s_k$ and $b_k := k \cdot 1_{\mathbb{R}}$; and the difference quotients $d_k := (a_{k+1}-a_k)(b_{k+1}-b_k)^{-1}$.

[L1] The alternating sequence: $|s_k| = 1$ for every $k$, $s_{k+1} = -s_k$, $s_{e_j} = 1$ and $s_{o_j} = -1$ along the even and odd index maps ([[lem-alternating-sequence]]).

[L2] $(s_k)$ is bounded and does not converge ([[fs-bounded-implies-convergent]]).

[L3] The canonical naturals of $\mathbb{R}$ are positive for $k \ge 1$ and strictly increasing ([[lem-of-naturals-positive]]), and no real bounds them all ([[thm-of-archimedean]]); strict monotonicity and boundedness of real sequences ([[def-monotone-sequence]], [[def-bounded-set]], [[def-sequence]]).

[L4] Convergence of real sequences and uniqueness of limits ([[def-real-limit]], [[lem-limit-unique]]); convergence depends only on a tail ([[lem-limit-of-tail]]); the reciprocal Archimedean property ([[cor-archimedean-reciprocal]]).

[L5] Algebra of limits, in particular that a scalar multiple of a convergent sequence converges ([[thm-algebra-of-limits]]).

[L6] Order arithmetic: $|u| \ge 0$ and $|uv| = |u||v|$ ([[lem-of-abs-value]]); a positive element is invertible with positive inverse and reciprocation reverses the order ([[lem-of-inverse-positive]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L7] The hypotheses and conclusion of Stolz-Cesaro in the $\infty/\infty$ form ([[thm-stolz-cesaro]]).

## Counterexample

**Proof technique:** direct.

1.1 $(b_k)$ is strictly increasing, its range is not bounded above, $b_0 = 0$ and $b_k > 0$ for $k \ge 1$; so the hypotheses of [[thm-stolz-cesaro]] on $(b_k)$ hold with $K_0 = 1$. [L3, L7]

1.2 $|s_k| = 1$ for every $k$, and $(s_k)$ does not converge. [L1, L2]

2.1 The tail quotients $q_j := a_{j+1}/b_{j+1} = s_{j+1}(j+1)^{-1}$ satisfy $|q_j| = (j+1)^{-1}$; given a real $\varepsilon > 0$ and a natural $m \ge 1$ with $1/m < \varepsilon$, every $j \ge m$ has $|q_j - 0| = (j+1)^{-1} < \varepsilon$, so $q_j \to 0$. [step 1.1, step 1.2, L4, L6]

2.2 $b_{k+1} - b_k = 1$ for every $k$, so $d_k = a_{k+1} - a_k = s_{k+1} - s_k = -s_k - s_k = -2s_k$, which is $-2$ when $k$ is even and $2$ when $k$ is odd. [step 1.1, step 1.2, L1, L3]

3.1 $(d_k)$ does not converge: were $d_k \to M$, then $s_k = (-1/2)\,d_k$ would converge to $-M/2$ by the scalar-multiple rule, contradicting step 1.2. [step 1.2, step 2.2, L5]

4.1 So $(b_k)$ is strictly increasing and unbounded, the quotients $a_k/b_k$ converge to $0$ over the indices $k \ge 1$, and the difference quotients do not converge: the converse of Stolz-Cesaro is false. [step 2.1, step 3.1, L7] ∎

## Remarks

- **The implication is genuinely one-way, and the reason is averaging.** The
  conclusion of [[thm-stolz-cesaro]] is obtained by summing the difference
  quotients against the weights $b_{k+1}-b_k$ and dividing by $b_n$, which is a
  weighted average. An average can converge while what is averaged oscillates,
  and here it does: the quotients $a_k/b_k$ are damped by the growing
  denominator, and no information about $d_k$ survives.

- **The same phenomenon, in the summability language.** With $b_k = k$ the
  weights are equal, so this is the Cesaro situation of
  [[fs-cesaro-converse]] and [[ex-cesaro-means-of-alternating]] in another
  costume; the divergent object is the same alternating sequence.

- **The index range is not a technicality.** $b_0 = 0$, so $a_0/b_0$ does not
  denote anything, and the quotient sequence exists only from $k = 1$. That is
  why [[thm-stolz-cesaro]] is stated for the tail, and why the convergence
  asserted above is asserted over $k \ge 1$.
