---
id: ex-tightness-from-a-uniform-moment-bound
kind: example
title: Tightness from a uniform moment bound
deps: ["def-tight-family-of-probability-measures", "cor-markov-inequality-for-random-variables", "thm-heine-borel-rn", "lem-metrics-on-rn", "def-real-power", "thm-real-power-laws", "thm-real-power-continuity-and-derivatives"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, Theorem 3.2.14, p. 123
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Example

For a family $\mathcal A$ of probability laws on $\mathbb R^d$ with finite $d\ge1$, if $p>0$ and $\sup_{\mu\in\mathcal A}\int\|x\|^p\,d\mu\le C<\infty$, then the family is tight.

## Facts & Assumptions

[F1] [[lem-metrics-on-rn]]: Let $n \in \mathbb{N}$ with $n \ge 1$. A von Neumann natural is the set of its
predecessors, $n = \{0, 1, \dots, n-1\}$ (def-natural-numbers), so it can be
used directly as an index set. Define

$$\mathbb{R}^n := \{\, x : x \text{ is a function } n \to \mathbb{R} \,\},$$

and write $x_k$ for $x(k)$, $k < n$. Two elements of $\mathbb{R}^n$ are equal
exactly when they agree at every $k < n$, functions being equal when they have
the same values. For $x, y \in \mathbb{R}^n$ put

$$d_1(x,y) := \sum_{k<n} |x_k - y_k|, \qquad d_2(x,y) := \sqrt{\ \sum_{k<n} (x_k - y_k)^2\ }, \qquad d_\infty(x,y) := \max\{\, |x_k - y_k| : k < n \,\}.$$

All three are well defined: the finite sums are those of def-finite-sum; the
sum of squares is nonnegative (lem-finite-sum-laws, lem-of-square-positive)
so it has a unique nonnegative square root (thm-of-square-roots); and
$\{|x_k - y_k| : k < n\}$ is a nonempty finite subset of $\mathbb{R}$, because
$n \ge 1$, so it has a maximum (lem-finite-set-has-max, def-max-min).

**Then $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$**
(def-metric-space).

**Why $n \ge 1$.** For $n = 0$ the set $\mathbb{R}^0$ has exactly one element,
the empty function, and $d_1$ and $d_2$ are the empty sum $0$ and its root; but
$d_\infty$ would be the maximum of the empty set, which does not exist. The
hypothesis $n \ge 1$ is therefore not decoration, and it is carried by every
statement about $d_\infty$ in this library.

[F2] [[cor-markov-inequality-for-random-variables]]: If $X:\Omega\to[0,+\infty]$ is a nonnegative random variable on a probability
space and $a>0$, then
$$\mathbb P(X\ge a)\le\frac{\mathbb E[X]}{a}.$$

[F3] [[thm-real-power-laws]]: For $a,b>0$ and $r,s\in\mathbb R$,
$$a^{r+s}=a^ra^s,\qquad (ab)^r=a^rb^r,\qquad (a/b)^r=a^r/b^r,\qquad (a^r)^s=a^{rs}.$$

[F4] [[thm-heine-borel-rn]]: Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ and let $d_2$ be the Euclidean metric on it
(lem-metrics-on-rn). Then:

1. **Closed boxes are compact.** For reals $a_k \le b_k$ $(k < n)$ the box
   $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$
   is a compact subset of $(\mathbb{R}^n, d_2)$ (def-metric-compactness).
2. **Heine-Borel.** A subset $K \subseteq \mathbb{R}^n$ is a compact subset of
   $(\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\mathbb{R}^n$
   (def-metric-topology) and bounded
   (def-metric-bounded-diameter).
3. **The real line.** A subset $K \subseteq \mathbb{R}$ is a compact subset of
   $(\mathbb{R}, d_{\mathbb{R}})$, the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   (lem-real-line-is-a-metric-space), if and only if $K$ is closed in
   $\mathbb{R}$ and bounded.

**No choice principle is used.** The bisection below halves one coordinate at a
time and takes the **left** half whenever the left half still fails to be finitely
covered, the right half otherwise: a rule with two outcomes, decided by a
property of the box, not a selection. That is the whole reason the theorem is
available in ZF, while the general "complete and totally bounded implies compact"
(thm-complete-and-totally-bounded-implies-compact) is not.

The hypothesis $n \ge 1$ is inherited from lem-metrics-on-rn, which defines
$\mathbb{R}^n$ and its metrics only there; the last remark below records what
happens at $n = 0$.

[F5] [[def-tight-family-of-probability-measures]]: A family $\mathcal A$ of Borel probabilities on a metric space S is **tight** if, for every $\varepsilon>0$, there is a compact $K\subseteq S$ such that $\mu(S\setminus K)<\varepsilon$ for every $\mu\in\mathcal A$. One K must work for the whole family. Compactness is def-metric-compactness. The empty family is tight, witnessed by the empty compact set.

[F6] [[thm-real-power-continuity-and-derivatives]]: For $a>0$, the function $x\mapsto a^x$ is continuous on $\mathbb R$ and
$$(a^x)'=a^x\log a.$$
For $\alpha\in\mathbb R$, the function $x\mapsto x^\alpha$ is continuous and differentiable on $(0,\infty)$, with
$$(x^\alpha)'=\alpha x^{\alpha-1}.$$

## Verification

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 The Euclidean norm is distance to zero for the metric in F1, hence is continuous by the triangle inequality. On positive arguments F6 gives continuity of $t^p$. Thus its composition with the norm is continuous off the origin, and assigning zero at the closed singleton origin gives a Borel function. If $t>R>0$, $t^p/R^p=\exp(p\log(t/R))>1$, so the power is increasing on positive arguments. F2 on $(\mathbb R^d,\mathcal B,\mu)$ gives $\mu(\{\|x\|>R\})\le C/R^p$ for every $R>0$. [F1, F2, F6]

2.1 The empty family is tight using the empty compact set. For a nonempty family $C\ge0$. Given $\varepsilon$>0 take $R=((C+1)/\varepsilon)^{1/p}>0$; F3 yields $C/R^p=C\varepsilon/(C+1)<\varepsilon$. The ball $K=\{\|x\|\le R\}$ is closed and bounded and therefore compact by F4. Step 1.1 proves the uniform loss bound for this K, which is F5. [F3, F4, F5] ∎
