---
id: thm-dini
kind: theorem
title: "Dini's theorem: on a compact metric space a nondecreasing sequence of continuous real functions converging pointwise to a continuous limit converges uniformly"
status: draft
origin: session
deps: [def-metric-compactness, lem-compactness-is-intrinsic, def-metric-continuity,
       thm-metric-continuity-characterisations, lem-uniform-convergence-in-the-uniform-metric,
       def-topology-of-uniform-convergence, thm-monotone-convergence,
       def-metric-convergence, lem-real-line-is-a-metric-space, def-metrizable-space,
       def-bounded-set, def-monotone-sequence, lem-convergent-implies-bounded,
       lem-limit-unique, def-metric-ball, def-metric-topology, def-max-min,
       lem-finite-set-has-max, def-canonical-natural, lem-of-naturals-positive,
       def-abs-value, def-real-limit, def-metric-space, def-complete-ordered-field,
       lem-sup-unique]
justified_by: []
aliases: [thm-dini-theorem]
landmark: true
short: "Dini's theorem"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Dini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dini%27s_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 7"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a compact metric space ([[def-metric-compactness]]), let
$f_k : X \to \mathbb{R}$ be continuous for every $k \in \mathbb{N}$
([[def-metric-continuity]], $\mathbb{R}$ carrying its usual metric,
[[lem-real-line-is-a-metric-space]]), and suppose

$$f_k(x) \le f_{k+1}(x) \qquad \text{for every } k \in \mathbb{N} \text{ and every } x \in X ,$$

so that the sequence is **nondecreasing at every point**
([[def-monotone-sequence]]). Suppose further that $f_k(x) \to f(x)$ for every
$x \in X$ ([[def-real-limit]]) with the limit function $f : X \to \mathbb{R}$
**continuous**. Then $(f_k)$ converges to $f$ uniformly
([[def-topology-of-uniform-convergence]]).

**All four hypotheses are used.** Compactness of $X$, monotonicity of the
sequence, continuity of every $f_k$ and continuity of the limit $f$ each enter the
proof, and dropping any one of them makes the conclusion false; the companion
page exhibits the failure when the limit is not continuous.

**The nonincreasing form holds too**, by applying the theorem to $(-f_k)$ and
$-f$, which are continuous and nondecreasing at every point; the proof below is
written for the nondecreasing direction only, and the Statement claims that
direction.

**No choice principle is used**: the finite subcover produced below is returned
as a list of *indices* by the indexed form of compactness
([[lem-compactness-is-intrinsic]]).

## Facts & Assumptions

**Given:** A compact metric space $(X,d)$, continuous functions $f_k : X \to \mathbb{R}$ with $f_k(x) \le f_{k+1}(x)$ for all $k$ and $x$, a continuous $f : X \to \mathbb{R}$ with $f_k(x) \to f(x)$ for every $x \in X$, and $\iota$ the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]).

[A1] $f_k(x) \le f_{k+1}(x)$ for every $k \in \mathbb{N}$ and every $x \in X$.

[A2] $f_k(x) \to f(x)$ in $\mathbb{R}$ for every $x \in X$, and $f$ and every $f_k$ are continuous.

[L1] A sequence of reals with $x_k \le x_{k+1}$ for every $k$ is nondecreasing, that is $x_j \le x_m$ whenever $j \le m$ ([[def-monotone-sequence]]).

[L2] A convergent sequence of reals is bounded, and a nondecreasing sequence bounded above converges to the supremum of its range; limits of real sequences are unique ([[lem-convergent-implies-bounded]], [[thm-monotone-convergence]], [[lem-limit-unique]], [[def-bounded-set]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

[L3] A supremum is an upper bound of its set ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L4] Continuity of $h : X \to \mathbb{R}$ at $a$: for every real $\eta > 0$ there is a real $\delta > 0$ with $|h(x) - h(a)| < \eta$ whenever $d(x,a) < \delta$ ([[def-metric-continuity]], [[thm-metric-continuity-characterisations]], [[lem-real-line-is-a-metric-space]], [[def-abs-value]]).

[L5] A subset of a metric space is open exactly when each of its points has a ball around it inside the subset ([[def-metric-topology]], [[def-metric-ball]], [[def-metrizable-space]]).

[L6] $X$ is a compact subset of itself, so every family $(U_i)_{i \in I}$ of open subsets of $X$ with $X = \bigcup_i U_i$ has $n \in \mathbb{N}$ and indices $i_0, \dots, i_n \in I$ with $X = U_{i_0} \cup \dots \cup U_{i_n}$, unless $X = \varnothing$ ([[lem-compactness-is-intrinsic]], claim 3, [[def-metric-compactness]]).

[L7] For $n \ge 1$ and natural numbers $k_0, \dots, k_{n-1}$ there is $j^{\ast} < n$ with $k_j \le k_{j^{\ast}}$ for every $j < n$: the nonempty finite set of reals $\{\iota(k_0), \dots, \iota(k_{n-1})\}$ has a maximum, attained at some index, and $\iota$ is strictly increasing on $\mathbb{N}$, hence reflects the order ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L8] Uniform convergence of $(f_k)$ to $f$ is: for every real $\varepsilon > 0$ there is $N \in \mathbb{N}$ with $|f_k(x) - f(x)| < \varepsilon$ for every $x \in X$ and every $k \ge N$ ([[def-topology-of-uniform-convergence]], [[lem-uniform-convergence-in-the-uniform-metric]], [[def-metric-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x \in X$; the sequence $(f_k(x))$ is nondecreasing by [A1] and [L1], and it converges by [A2], hence is bounded and in particular bounded above. [A1, A2, L1, L2]

1.2 Let $\varepsilon > 0$ be real and put $U_k := \{\, x \in X : f(x) - f_k(x) < \varepsilon \,\}$ for $k \in \mathbb{N}$. [construct]

2.1 By [L2] the sequence $(f_k(x))$ converges to the supremum of its range, and by [A2] it converges to $f(x)$, so uniqueness of limits gives $f(x) = \sup_k f_k(x)$; hence $f_k(x) \le f(x)$ for every $k \in \mathbb{N}$ and every $x \in X$. [step 1.1, A2, L2, L3]

2.2 Each $U_k$ is open: let $a \in U_k$ and put $\eta := (\varepsilon - (f(a) - f_k(a)))/2 > 0$; continuity of $f$ and of $f_k$ at $a$ gives reals $\delta_1, \delta_2 > 0$ with $|f(x)-f(a)| < \eta$ for $d(x,a) < \delta_1$ and $|f_k(x)-f_k(a)| < \eta$ for $d(x,a) < \delta_2$, and then $\delta := \min\{\delta_1,\delta_2\} > 0$ gives, for $d(x,a) < \delta$, the estimate $f(x) - f_k(x) < (f(a)+\eta) - (f_k(a)-\eta) = (f(a)-f_k(a)) + 2\eta = \varepsilon$, so $B(a,\delta) \subseteq U_k$. [step 1.2, A2, L4, L5, choose]

2.3 $X = \bigcup_{k \in \mathbb{N}} U_k$: given $x \in X$, convergence $f_k(x) \to f(x)$ supplies $k$ with $|f_k(x) - f(x)| < \varepsilon$, hence $f(x) - f_k(x) < \varepsilon$ and $x \in U_k$. [step 1.2, A2]

3.1 If $X = \varnothing$ the conclusion holds with $N := 0$, the condition being vacuous; so assume $X \ne \varnothing$, and compactness applied to the family $(U_k)_{k \in \mathbb{N}}$ gives $n \in \mathbb{N}$ and $k_0, \dots, k_n \in \mathbb{N}$ with $X = U_{k_0} \cup \dots \cup U_{k_n}$. [step 2.2, step 2.3, L6, L8]

4.1 By [L7] there is $j^{\ast} \le n$ with $k_j \le k_{j^{\ast}}$ for every $j \le n$; put $N := k_{j^{\ast}}$. [step 3.1, L7]

5.1 $U_m \subseteq U_N$ whenever $m \le N$: for $x \in U_m$ we have $f_m(x) \le f_N(x)$ by [L1], so $f(x) - f_N(x) \le f(x) - f_m(x) < \varepsilon$. [step 1.2, step 4.1, A1, L1]

6.1 Hence $X = U_{k_0} \cup \dots \cup U_{k_n} \subseteq U_N$, so $X = U_N$, that is $f(x) - f_N(x) < \varepsilon$ for every $x \in X$. [step 3.1, step 4.1, step 5.1]

7.1 For every $k \ge N$ and every $x \in X$: $0 \le f(x) - f_k(x) \le f(x) - f_N(x) < \varepsilon$, using $f_k(x) \le f(x)$ from step 2.1 and $f_N(x) \le f_k(x)$ from [L1]; so $|f_k(x) - f(x)| < \varepsilon$. [step 2.1, step 6.1, A1, L1]

8.1 As $\varepsilon$ was an arbitrary positive real, step 7.1 produces for each of them an index $N$ serving every point of $X$, which is uniform convergence of $(f_k)$ to $f$. [step 1.2, step 3.1, step 7.1, L8] ∎

## Remarks

- **Where continuity of the limit is used.** Only in step 2.2, to make $U_k$ open. Without it the sets $U_k$ need not be open, the cover argument collapses, and the conclusion is false: the companion page exhibits continuous $f_k$ increasing pointwise on the compact space $[0,1]$ to a discontinuous limit, with no uniform convergence.

- **Where monotonicity is used.** Twice, and both times to turn "some index works at this point" into "one index works at every point": at step 5.1, to make the sets $U_k$ increase with $k$ so that a finite subcover collapses to a single $U_N$, and at step 7.1, to propagate the bound from $N$ to every later index.

- **Where compactness is used.** Once, at step 3.1. On a non-compact domain the theorem fails, and the standard witness is the increasing sequence of functions on $(0,1]$ that are $0$ up to $1/(k+1)$ and rise to $1$; nothing on this page needs that witness and it is not constructed here.

- **The conclusion is genuinely about the sequence and not about the family.** Dini's theorem says nothing about an arbitrary set of continuous functions with a continuous pointwise supremum; the ordering of the sequence by its index is what steps 5.1 and 7.1 consume.
